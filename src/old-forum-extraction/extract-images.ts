#!/usr/bin/env bun

/**
 * Second-pass Image Extractor for Smoothieware Forum Posts
 *
 * This script goes through already-extracted markdown posts and:
 * 1. Re-analyzes the original HTML to find user-posted images only
 * 2. Filters out Wayback Machine UI images and avatars
 * 3. Downloads legitimate forum images to tighter-images/
 * 4. Updates markdown files with corrected image paths
 */

import { $ } from "bun";
import path from "path";
import { JSDOM } from "jsdom";

// Configuration
const OUTPUT_DIR = "src/docs/old-forum";
const TIGHT_IMAGES_DIR = path.join(OUTPUT_DIR, "tighter-images");
const HTML_CACHE_DIR = "/tmp/old-forum";
const REQUEST_DELAY = 100;

/**
 * Sleep for specified milliseconds
 */
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Sanitize a string to be used as a filename
 */
function sanitizeFilename(str: string): string {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .substring(0, 100);
}

/**
 * Check if an image is a user-posted forum image (not Wayback Machine UI)
 */
function isUserPostedImage(imgSrc: string, imgAlt: string = "", imgParentClasses: string = ""): boolean {
    // Filter out obvious non-content images
    if (!imgSrc) return false;

    // Exclude Wayback Machine UI images
    if (imgSrc.includes('archive.org/web/static/')) return false;
    if (imgSrc.includes('/images/logo')) return false;
    if (imgSrc.includes('/images/toolbar')) return false;
    if (imgSrc.includes('/images/banner')) return false;

    // Exclude avatar images
    if (imgSrc.includes('/avatar')) return false;
    if (imgSrc.includes('wikidot.com/avatar')) return false;

    // Exclude feed/RSS icons
    if (imgSrc.includes('feed-icon')) return false;
    if (imgSrc.includes('rss-icon')) return false;

    // Exclude common archive.org collection icons
    if (imgSrc.includes('/etree')) return false;
    if (imgSrc.includes('/librivox')) return false;
    if (imgSrc.includes('/metropolitanmuseum')) return false;
    if (imgSrc.includes('/clevelandart')) return false;
    if (imgSrc.includes('/internetarcade')) return false;
    if (imgSrc.includes('/console')) return false;
    if (imgSrc.includes('/americana')) return false;
    if (imgSrc.includes('/widgetol')) return false;
    if (imgSrc.includes('/tv')) return false;
    if (imgSrc.includes('/911')) return false;

    // Exclude navigation/UI images
    if (imgAlt.toLowerCase().includes('navigation')) return false;
    if (imgAlt.toLowerCase().includes('menu')) return false;
    if (imgAlt.toLowerCase().includes('icon')) return false;

    // Include images that are likely user-uploaded
    // Typically these come from smoothieware.org or external image hosts
    if (imgSrc.includes('smoothieware.org/') && !imgSrc.includes('/chrome/')) return true;
    if (imgSrc.includes('imgur.com')) return true;
    if (imgSrc.includes('dropbox.com')) return true;
    if (imgSrc.includes('.jpg') || imgSrc.includes('.jpeg') || imgSrc.includes('.png') || imgSrc.includes('.gif')) {
        // If it's an image file and not from archive.org UI, it might be user content
        if (!imgSrc.includes('archive.org')) return true;
        // Check if it's from Wayback archived content (not UI)
        if (imgSrc.match(/archive\.org\/web\/\d+im_/)) return true;
    }

    return false;
}

/**
 * Extract user-posted images from HTML
 */
async function extractUserImages(htmlFile: string, topicName: string): Promise<{
    images: Array<{ originalUrl: string, downloadUrl: string, alt: string }>;
}> {
    const html = await Bun.file(htmlFile).text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const userImages: Array<{ originalUrl: string, downloadUrl: string, alt: string }> = [];

    // Look for images in likely content areas
    const contentSelectors = [
        '.post-content',
        '.forum-post',
        '.forum-thread',
        '#forum-content',
        'article',
        'main',
        'body'  // Fallback
    ];

    let contentElement: Element | null = null;
    for (const selector of contentSelectors) {
        contentElement = document.querySelector(selector);
        if (contentElement) break;
    }

    if (!contentElement) {
        console.log("    No content element found");
        return { images: [] };
    }

    // Remove Wayback Machine elements first
    contentElement.querySelectorAll('#wm-ipp, #wm-ipp-base, .wb-banner, .ia-banner, #wm-toolbar').forEach(el => el.remove());

    // Find all images
    const imgElements = contentElement.querySelectorAll('img');

    for (const img of imgElements) {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt') || "";
        const parentClasses = img.parentElement?.className || "";

        if (!src) continue;

        // Check if this is a user-posted image
        if (!isUserPostedImage(src, alt, parentClasses)) {
            continue;
        }

        // Construct full Wayback URL if needed
        let downloadUrl = src;
        if (src.startsWith('/web/')) {
            downloadUrl = `https://web.archive.org${src}`;
        } else if (src.startsWith('/') && !src.startsWith('//')) {
            // Relative URL - try to construct from archive
            const waybackMatch = htmlFile.match(/(\d{14})/);
            const timestamp = waybackMatch ? waybackMatch[1] : "20161014011352";
            downloadUrl = `https://web.archive.org/web/${timestamp}/http://smoothieware.org${src}`;
        } else if (src.startsWith('//')) {
            downloadUrl = `https:${src}`;
        }

        userImages.push({ originalUrl: src, downloadUrl, alt });
    }

    return { images: userImages };
}

/**
 * Download an image and return the local path
 */
async function downloadImage(downloadUrl: string, topicName: string, index: number): Promise<string | null> {
    try {
        // Generate filename
        const urlPath = new URL(downloadUrl).pathname;
        const ext = path.extname(urlPath).split('?')[0] || '.png';
        const baseName = path.basename(urlPath, ext).substring(0, 30);
        const sanitized = sanitizeFilename(baseName);
        const filename = `${topicName}-${sanitized}-${index}${ext}`;
        const localPath = path.join(TIGHT_IMAGES_DIR, filename);

        // Check if already downloaded
        if (await Bun.file(localPath).exists()) {
            console.log(`      (cached) ${filename}`);
            return filename;
        }

        // Download
        const response = await fetch(downloadUrl);
        if (!response.ok) {
            console.log(`      ✗ Failed: ${downloadUrl} (${response.status})`);
            return null;
        }

        const buffer = await response.arrayBuffer();
        await Bun.write(localPath, buffer);
        console.log(`      ✓ Downloaded: ${filename}`);

        return filename;

    } catch (error) {
        console.log(`      ✗ Error: ${error}`);
        return null;
    }
}

/**
 * Update markdown file with correct image paths
 */
async function updateMarkdownImages(
    markdownFile: string,
    imageMap: Map<string, string>
): Promise<void> {
    if (imageMap.size === 0) {
        return;
    }

    let content = await Bun.file(markdownFile).text();
    let updated = false;

    // Replace image references
    for (const [originalUrl, localFilename] of imageMap.entries()) {
        const relativePath = `tighter-images/${localFilename}`;

        // Try multiple formats the image might appear in markdown
        const patterns = [
            new RegExp(`!\\[([^\\]]*)\\]\\(${originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g'),
            new RegExp(`<img[^>]*src=["']${originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'g'),
        ];

        for (const pattern of patterns) {
            if (pattern.test(content)) {
                content = content.replace(pattern, `![](${ relativePath})`);
                updated = true;
            }
        }
    }

    if (updated) {
        await Bun.write(markdownFile, content);
        console.log(`    ✓ Updated markdown with ${imageMap.size} image(s)`);
    }
}

/**
 * Process a single markdown file
 */
async function processMarkdownFile(markdownFile: string): Promise<void> {
    const basename = path.basename(markdownFile, '.md');
    console.log(`\n  Processing: ${basename}`);

    // Extract topic name from filename (remove date prefix)
    const topicName = basename.replace(/^\d{4}-\d{2}-\d{2}-/, '');

    // Find corresponding HTML file
    const htmlFiles = await $`ls ${HTML_CACHE_DIR}/*.html 2>/dev/null`.text();
    let htmlFile: string | null = null;

    // Try to find HTML file containing this topic name
    for (const file of htmlFiles.trim().split('\n')) {
        if (file.toLowerCase().includes(topicName.toLowerCase().substring(0, 20))) {
            htmlFile = file;
            break;
        }
    }

    if (!htmlFile || !await Bun.file(htmlFile).exists()) {
        console.log("    ✗ No HTML file found");
        return;
    }

    // Extract user images from HTML
    const { images } = await extractUserImages(htmlFile, topicName);

    if (images.length === 0) {
        console.log("    No user-posted images found");
        return;
    }

    console.log(`    Found ${images.length} user-posted image(s)`);

    // Download images
    const imageMap = new Map<string, string>();

    for (let i = 0; i < images.length; i++) {
        const { originalUrl, downloadUrl } = images[i];
        const localFilename = await downloadImage(downloadUrl, topicName, i);

        if (localFilename) {
            imageMap.set(originalUrl, localFilename);
        }

        await sleep(REQUEST_DELAY);
    }

    // Update markdown file
    await updateMarkdownImages(markdownFile, imageMap);
}

/**
 * Main execution
 */
async function main() {
    console.log("╔════════════════════════════════════════════════════════════╗");
    console.log("║   Second-Pass Image Extractor                              ║");
    console.log("╚════════════════════════════════════════════════════════════╝\n");

    // Create tighter-images directory
    await $`mkdir -p ${TIGHT_IMAGES_DIR}`;

    // Get all markdown files
    const markdownFiles = await $`ls ${OUTPUT_DIR}/*.md 2>/dev/null`.text();
    const files = markdownFiles.trim().split('\n').filter(f => f.endsWith('.md'));

    console.log(`Found ${files.length} markdown files to process\n`);

    let processedCount = 0;
    let imagesFoundCount = 0;

    for (const file of files) {
        await processMarkdownFile(file);
        processedCount++;
        await sleep(REQUEST_DELAY);
    }

    console.log("\n╔════════════════════════════════════════════════════════════╗");
    console.log("║   Image Extraction Complete                                ║");
    console.log("╚════════════════════════════════════════════════════════════╝");
    console.log(`\n  Processed: ${processedCount} files`);
    console.log(`  Images directory: ${TIGHT_IMAGES_DIR}\n`);
}

main().catch(console.error);
