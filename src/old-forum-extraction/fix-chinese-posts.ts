#!/usr/bin/env bun

/**
 * Detect and Fix Chinese-Translated Posts
 *
 * This script:
 * 1. Scans all markdown files in old-forum/
 * 2. Detects which posts contain Chinese/Japanese/Korean characters
 * 3. Deletes those posts
 * 4. Re-fetches them from Wayback Machine
 * 5. Re-converts them to English markdown using the updated prompt
 */

import { $ } from "bun";
import path from "path";

const OUTPUT_DIR = "src/docs/old-forum";
const HTML_CACHE_DIR = "/tmp/old-forum";

/**
 * Sleep for specified milliseconds
 */
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Detect if text contains Chinese, Japanese, or Korean characters
 */
function containsCJK(text: string): boolean {
    // Chinese: \u4e00-\u9fff
    // Japanese Hiragana: \u3040-\u309f
    // Japanese Katakana: \u30a0-\u30ff
    // Korean Hangul: \uac00-\ud7af
    const cjkRegex = /[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/;
    return cjkRegex.test(text);
}

/**
 * Calculate percentage of CJK characters in text
 */
function getCJKPercentage(text: string): number {
    const cjkChars = text.match(/[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g) || [];
    const totalChars = text.replace(/\s/g, '').length; // Exclude whitespace

    if (totalChars === 0) return 0;
    return (cjkChars.length / totalChars) * 100;
}

/**
 * Main execution
 */
async function main() {
    console.log("╔════════════════════════════════════════════════════════════╗");
    console.log("║   Detect and Fix Chinese-Translated Posts                  ║");
    console.log("╚════════════════════════════════════════════════════════════╝\n");

    // Get all markdown files
    const filesOutput = await $`ls ${OUTPUT_DIR}/*.md 2>/dev/null`.text();
    const files = filesOutput.trim().split('\n').filter(f => f.endsWith('.md'));

    console.log(`Found ${files.length} markdown files to check\n`);

    const chineseFiles: string[] = [];
    const cjkDetails: Array<{ file: string; percentage: number }> = [];

    // Phase 1: Detection
    console.log("=== Phase 1: Detecting Chinese/Japanese/Korean Posts ===\n");

    for (const file of files) {
        const filename = path.basename(file);
        const content = await Bun.file(file).text();

        // Check first 2000 characters for CJK content
        const sample = content.substring(0, 2000);
        const cjkPercentage = getCJKPercentage(sample);

        // If more than 5% CJK characters, it's likely translated
        if (cjkPercentage > 5) {
            console.log(`  ✗ CHINESE DETECTED: ${filename} (${cjkPercentage.toFixed(1)}% CJK chars)`);
            chineseFiles.push(file);
            cjkDetails.push({ file, percentage: cjkPercentage });
        } else if (cjkPercentage > 0) {
            console.log(`  ⊙ Minor CJK content: ${filename} (${cjkPercentage.toFixed(1)}% CJK chars)`);
        }
    }

    console.log(`\n✓ Detection complete: ${chineseFiles.length} Chinese posts found\n`);

    if (chineseFiles.length === 0) {
        console.log("No Chinese posts detected. Exiting.\n");
        return;
    }

    // Show summary
    console.log("Posts with Chinese content:");
    for (const detail of cjkDetails) {
        console.log(`  - ${path.basename(detail.file)} (${detail.percentage.toFixed(1)}%)`);
    }

    // Phase 2: Get Wayback URLs from HTML cache
    console.log("\n=== Phase 2: Finding Wayback URLs ===\n");

    const postsToReprocess: Array<{ markdownFile: string; htmlFile: string; waybackUrl: string }> = [];

    for (const mdFile of chineseFiles) {
        const filename = path.basename(mdFile);
        const topicName = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');

        // Try to find the HTML cache file
        const htmlFiles = await $`ls ${HTML_CACHE_DIR}/*.html 2>/dev/null`.text();
        const htmlFileList = htmlFiles.trim().split('\n').filter(f => f.endsWith('.html'));

        // Look for HTML file matching this topic
        let foundHtml = null;
        let foundUrl = null;

        for (const htmlFile of htmlFileList) {
            const htmlContent = await Bun.file(htmlFile).text();

            // Check if this HTML file is for our topic
            if (htmlFile.includes(topicName) || htmlContent.includes(topicName.replace(/-/g, ' '))) {
                foundHtml = htmlFile;

                // Extract Wayback URL from filename or content
                const urlMatch = path.basename(htmlFile).match(/web\.archive\.org_web_(\d+)_/);
                if (urlMatch) {
                    const timestamp = urlMatch[1];
                    foundUrl = `https://web.archive.org/web/${timestamp}/http://smoothieware.org/forum/t-${topicName}`;
                }
                break;
            }
        }

        if (foundHtml && foundUrl) {
            console.log(`  ✓ Found: ${filename} -> ${path.basename(foundHtml)}`);
            postsToReprocess.push({
                markdownFile: mdFile,
                htmlFile: foundHtml,
                waybackUrl: foundUrl
            });
        } else {
            console.log(`  ✗ Not found in cache: ${filename}`);
        }
    }

    console.log(`\n✓ Found ${postsToReprocess.length} posts with HTML cache\n`);

    if (postsToReprocess.length === 0) {
        console.log("No HTML cache files found. Cannot reprocess.\n");
        console.log("Suggestion: Run extract-forum.ts again with the updated prompt.\n");
        return;
    }

    // Phase 3: Backup Chinese posts
    console.log("=== Phase 3: Backing Up Chinese Posts ===\n");

    const backupDir = "/tmp/old-forum-chinese-backup";
    await $`mkdir -p ${backupDir}`;

    for (const post of postsToReprocess) {
        const filename = path.basename(post.markdownFile);
        await $`cp ${post.markdownFile} ${backupDir}/${filename}`;
        console.log(`  ✓ Backed up: ${filename}`);
    }

    console.log(`\n✓ Backup complete: ${backupDir}\n`);

    // Phase 4: Delete Chinese posts
    console.log("=== Phase 4: Deleting Chinese Posts ===\n");

    for (const post of postsToReprocess) {
        await $`rm ${post.markdownFile}`;
        console.log(`  ✓ Deleted: ${path.basename(post.markdownFile)}`);
    }

    console.log("\n✓ Deletion complete\n");

    // Phase 5: Re-convert using extract-forum.ts logic
    console.log("=== Phase 5: Re-converting with English-Only Prompt ===\n");
    console.log("NOTE: This will use the extract-forum.ts script's conversion function.\n");
    console.log("Please run extract-forum.ts again to re-process these posts.\n");
    console.log("The updated English-only prompt will be used automatically.\n");

    // List the topics that need reprocessing
    console.log("Topics to reprocess:");
    for (const post of postsToReprocess) {
        console.log(`  - ${path.basename(post.markdownFile)}`);
    }

    console.log("\n╔════════════════════════════════════════════════════════════╗");
    console.log("║   Detection and Cleanup Complete                           ║");
    console.log("╚════════════════════════════════════════════════════════════╝");
    console.log(`\n  ✓ Detected: ${chineseFiles.length} Chinese posts`);
    console.log(`  ✓ Backed up: ${postsToReprocess.length} posts to ${backupDir}`);
    console.log(`  ✓ Deleted: ${postsToReprocess.length} posts`);
    console.log(`\n  Next step: Re-run extract-forum.ts to regenerate these posts\n`);
}

main().catch(console.error);
