#!/usr/bin/env bun

/**
 * Date Extraction and File Renaming Script
 *
 * This script:
 * 1. Reads all markdown files in old-forum/
 * 2. Uses Ollama LLM to extract the actual post date from content
 * 3. Renames files from 2016-01-01-topic.md to YYYY-MM-DD-topic.md
 */

import { $ } from "bun";
import path from "path";

const OUTPUT_DIR = "src/docs/old-forum";
const OLLAMA_MODEL = "qwen3:14b";
const REQUEST_DELAY = 100;

interface DateExtraction {
    originalFile: string;
    oldDate: string;
    newDate: string;
    topicName: string;
    confidence: string;
}

/**
 * Sleep for specified milliseconds
 */
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Extract date from markdown content using LLM
 */
async function extractDateFromContent(content: string, filename: string): Promise<string | null> {
    const prompt = `You are a precise date extractor. Extract the FIRST/ORIGINAL post date from this forum post markdown.

CRITICAL INSTRUCTIONS:
- Output ONLY a JSON object with format: {"date": "YYYY-MM-DD", "confidence": "high|medium|low"}
- Extract the date from lines like "Date: 05 Jun 2016 16:28" or "Posted by: user, 15 Jul 2014 02:06"
- Find the EARLIEST date mentioned (original post, not replies)
- If no date found, output: {"date": "unknown", "confidence": "none"}
- Do NOT include any explanations or extra text
- Output MUST be valid JSON only

Markdown content:
${content.substring(0, 3000)}

JSON output:`;

    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: OLLAMA_MODEL,
                prompt: prompt,
                stream: false,
                options: {
                    temperature: 0.1,
                    top_p: 0.8,
                }
            }),
        });

        if (!response.ok) {
            throw new Error(`Ollama API error: ${response.statusText}`);
        }

        const result = await response.json();
        let output = result.response || "";

        // Clean up output
        output = output.trim();

        // Try to extract JSON from the response
        const jsonMatch = output.match(/\{[^}]+\}/);
        if (!jsonMatch) {
            console.log(`    ✗ No JSON found in response for ${filename}`);
            return null;
        }

        const parsed = JSON.parse(jsonMatch[0]);

        if (parsed.date === "unknown" || !parsed.date) {
            return null;
        }

        // Validate date format
        if (!/^\d{4}-\d{2}-\d{2}$/.test(parsed.date)) {
            console.log(`    ✗ Invalid date format: ${parsed.date}`);
            return null;
        }

        console.log(`    ✓ Extracted: ${parsed.date} (confidence: ${parsed.confidence})`);
        return parsed.date;

    } catch (error) {
        console.log(`    ✗ Error extracting date: ${error}`);
        return null;
    }
}

/**
 * Process a single markdown file
 */
async function processFile(filePath: string): Promise<DateExtraction | null> {
    const filename = path.basename(filePath);
    console.log(`\n  Processing: ${filename}`);

    // Extract current date and topic from filename
    const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
    if (!match) {
        console.log("    ✗ Filename doesn't match expected format");
        return null;
    }

    const [, oldDate, topicName] = match;

    // Skip if not a default date
    if (!oldDate.startsWith('2016-01-01') && !oldDate.startsWith('2017-01-01')) {
        console.log(`    ⊙ Already has custom date: ${oldDate}`);
        return null;
    }

    // Read file content
    const content = await Bun.file(filePath).text();

    // Extract date using LLM
    const newDate = await extractDateFromContent(content, filename);

    if (!newDate) {
        console.log("    ⊙ Keeping default date");
        return null;
    }

    // Check if date is different
    if (newDate === oldDate) {
        console.log("    ⊙ Date unchanged");
        return null;
    }

    return {
        originalFile: filePath,
        oldDate,
        newDate,
        topicName,
        confidence: "extracted"
    };
}

/**
 * Rename a file
 */
async function renameFile(extraction: DateExtraction): Promise<boolean> {
    const newFilename = `${extraction.newDate}-${extraction.topicName}.md`;
    const newPath = path.join(path.dirname(extraction.originalFile), newFilename);

    // Check if target already exists
    if (await Bun.file(newPath).exists()) {
        console.log(`    ✗ Target file already exists: ${newFilename}`);
        return false;
    }

    try {
        await $`mv ${extraction.originalFile} ${newPath}`;
        console.log(`    ✓ Renamed to: ${newFilename}`);
        return true;
    } catch (error) {
        console.log(`    ✗ Error renaming: ${error}`);
        return false;
    }
}

/**
 * Main execution
 */
async function main() {
    console.log("╔════════════════════════════════════════════════════════════╗");
    console.log("║   Date Extraction and File Renaming                       ║");
    console.log("╚════════════════════════════════════════════════════════════╝\n");

    // Get all markdown files
    const filesOutput = await $`ls ${OUTPUT_DIR}/*.md 2>/dev/null`.text();
    const files = filesOutput.trim().split('\n').filter(f => f.endsWith('.md'));

    console.log(`Found ${files.length} markdown files to process\n`);

    const extractions: DateExtraction[] = [];

    // Process each file
    for (const file of files) {
        const extraction = await processFile(file);
        if (extraction) {
            extractions.push(extraction);
        }

        await sleep(REQUEST_DELAY);
    }

    console.log("\n╔════════════════════════════════════════════════════════════╗");
    console.log("║   Renaming Files                                           ║");
    console.log("╚════════════════════════════════════════════════════════════╝\n");

    if (extractions.length === 0) {
        console.log("  No files need renaming.\n");
        return;
    }

    console.log(`  Renaming ${extractions.length} files...\n`);

    let successCount = 0;
    let failCount = 0;

    for (const extraction of extractions) {
        console.log(`\n  ${path.basename(extraction.originalFile)}`);
        const success = await renameFile(extraction);

        if (success) {
            successCount++;
        } else {
            failCount++;
        }
    }

    console.log("\n╔════════════════════════════════════════════════════════════╗");
    console.log("║   Renaming Complete                                        ║");
    console.log("╚════════════════════════════════════════════════════════════╝");
    console.log(`\n  ✓ Successfully renamed: ${successCount}`);
    console.log(`  ✗ Failed: ${failCount}`);
    console.log("\n");
}

main().catch(console.error);
