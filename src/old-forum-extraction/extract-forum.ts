#!/usr/bin/env bun

/**
 * Smoothieware Old Forum Extractor
 *
 * This script extracts forum posts from the Wayback Machine archive of the old
 * Smoothieware forum and converts them to markdown using Ollama AI.
 *
 * Features:
 * - Discovers all post URLs from 36 forum index pages
 * - Downloads HTML content with caching
 * - Extracts post metadata (title, date, content)
 * - Downloads and processes images
 * - Converts HTML to markdown using Ollama (qwen3:14b)
 * - Idempotent operation (can be run multiple times safely)
 */

import { $ } from "bun";
import path from "path";
import { JSDOM } from "jsdom";

// Configuration constants
const FORUM_BASE_URL = "https://web.archive.org/web/20160806191431/http://smoothieware.org/forum/c-496918/general";
const TOTAL_PAGES = 36;  // August 2016 archive - Round 7
const HTML_CACHE_DIR = "/tmp/old-forum";
const OUTPUT_DIR = "src/docs/old-forum";
const IMAGES_DIR = path.join(OUTPUT_DIR, "tighter-images");  // Use tighter-images directly
const OLLAMA_MODEL = "qwen3:14b";
const POSTS_LIST_FILE = "/tmp/old-forum/posts-list.json";

// Rate limiting delay between requests (milliseconds)
const REQUEST_DELAY = 200;  // Reduced from 1000 for faster processing

// Test mode - set to a number to only process that many posts (0 = process all)
const TEST_MODE_LIMIT = parseInt(process.env.TEST_LIMIT || "0");

interface ForumPost {
    url: string;
    waybackUrl: string;
    title: string;
    date: string;
    htmlFile: string;
    markdownFile: string;
}

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
 * Fetch a URL with retry logic
 */
async function fetchWithRetry(url: string, maxRetries = 3): Promise<string> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`  Fetching: ${url} (attempt ${attempt}/${maxRetries})`);

            // Use curl to fetch with proper headers
            const response = await $`curl -s -L --max-time 30 -H "User-Agent: Mozilla/5.0 (compatible; ForumArchiver/1.0)" ${url}`.text();

            // Check if we got valid content
            if (response.length === 0) {
                throw new Error("Empty response");
            }

            return response;
        } catch (error) {
            console.error(`  Failed attempt ${attempt}: ${error}`);

            if (attempt === maxRetries) {
                throw new Error(`Failed to fetch after ${maxRetries} attempts: ${url}`);
            }

            // Exponential backoff
            await sleep(REQUEST_DELAY * attempt);
        }
    }

    throw new Error("Unreachable");
}

/**
 * Extract post URLs from a forum index page
 */
function extractPostUrls(html: string, waybackTimestamp: string): string[] {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const urls: string[] = [];

    // Find all links that point to individual forum threads
    // Format: /forum/t-<number>/<topic-name>
    const links = document.querySelectorAll('a[href*="/forum/t-"]');

    for (const link of links) {
        const href = link.getAttribute('href');
        if (!href) continue;

        // Skip anchor links (links to specific posts within threads)
        if (href.includes('#post-')) {
            continue;
        }

        // Extract the full Wayback URL
        let waybackUrl = href;
        if (href.startsWith('/web/')) {
            waybackUrl = `https://web.archive.org${href}`;
        } else if (href.startsWith('http')) {
            waybackUrl = href;
        } else {
            // Shouldn't happen but handle it
            waybackUrl = `https://web.archive.org/web/${waybackTimestamp}/http://smoothieware.org${href}`;
        }

        // Only add unique URLs
        if (!urls.includes(waybackUrl)) {
            urls.push(waybackUrl);
        }
    }

    return urls;
}

/**
 * Extract the Wayback timestamp from a Wayback URL
 */
function extractWaybackTimestamp(waybackUrl: string): string {
    const match = waybackUrl.match(/\/web\/(\d+)\//);
    return match ? match[1] : "20161014011352";
}

/**
 * Discover all post URLs from all forum pages
 */
async function discoverAllPosts(): Promise<string[]> {
    console.log("\n=== Discovering all forum posts ===\n");

    const waybackTimestamp = extractWaybackTimestamp(FORUM_BASE_URL);
    const cacheFile = `${POSTS_LIST_FILE}.${waybackTimestamp}`;

    // Check if we already have a cached list for this timestamp
    if (await Bun.file(cacheFile).exists()) {
        console.log(`Loading cached posts list (timestamp: ${waybackTimestamp})...`);
        const cached = await Bun.file(cacheFile).json();
        console.log(`Found ${cached.length} cached post URLs`);
        return cached;
    }

    const allUrls = new Set<string>();

    for (let page = 1; page <= TOTAL_PAGES; page++) {
        console.log(`\nProcessing index page ${page}/${TOTAL_PAGES}...`);

        // Construct pagination URL - format is /c-496918/p/N (not ?page=N)
        let pageUrl: string;
        if (page === 1) {
            pageUrl = FORUM_BASE_URL;
        } else {
            // Replace /general with /p/N for pagination
            pageUrl = FORUM_BASE_URL.replace('/general', `/p/${page}`);
        }

        try {
            // Fetch the page
            const html = await fetchWithRetry(pageUrl);

            // Extract post URLs
            const urls = extractPostUrls(html, waybackTimestamp);
            console.log(`  Found ${urls.length} post URLs`);

            // Add to set
            urls.forEach(url => allUrls.add(url));

            // Rate limiting
            await sleep(REQUEST_DELAY);
        } catch (error) {
            console.error(`  Error processing page ${page}: ${error}`);
        }
    }

    const urlArray = Array.from(allUrls);
    console.log(`\n✓ Total unique posts discovered: ${urlArray.length}`);

    // Cache the list with timestamp
    await Bun.write(cacheFile, JSON.stringify(urlArray, null, 2));

    return urlArray;
}

/**
 * Download HTML for a post if not already cached
 */
async function downloadPostHtml(waybackUrl: string): Promise<string> {
    const urlHash = sanitizeFilename(waybackUrl);
    const htmlFile = path.join(HTML_CACHE_DIR, `${urlHash}.html`);

    // Check if already downloaded
    if (await Bun.file(htmlFile).exists()) {
        console.log("  (cached)");
        return htmlFile;
    }

    // Download the HTML
    const html = await fetchWithRetry(waybackUrl);

    // Save to cache
    await Bun.write(htmlFile, html);

    console.log(`  ✓ Downloaded and cached`);
    return htmlFile;
}

/**
 * Extract post metadata and content from HTML
 */
async function extractPostData(htmlFile: string, waybackUrl: string): Promise<{
    title: string;
    date: string;
    content: string;
    images: string[];
} | null> {
    const html = await Bun.file(htmlFile).text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Extract title from URL as fallback
    const urlMatch = waybackUrl.match(/\/t-\d+\/(.+?)(?:\?|#|$)/);
    const urlTitle = urlMatch ? urlMatch[1].replace(/-/g, ' ') : "Untitled Post";

    // Extract title - try multiple selectors
    let title =
        document.querySelector('h1')?.textContent?.trim() ||
        document.querySelector('h2')?.textContent?.trim() ||
        document.querySelector('.post-title')?.textContent?.trim() ||
        document.querySelector('title')?.textContent?.split('|')[0]?.split('-')[0]?.trim() ||
        urlTitle;

    // Clean up title
    title = title.replace(/^Hrm\..*$/i, urlTitle);

    // Extract date - try multiple selectors and formats
    let dateStr =
        document.querySelector('.post-date')?.textContent?.trim() ||
        document.querySelector('.date')?.textContent?.trim() ||
        document.querySelector('time')?.getAttribute('datetime') ||
        "";

    // Parse date to YYYY-MM-DD format
    let date = "2016-01-01"; // Default fallback
    if (dateStr) {
        try {
            const parsed = new Date(dateStr);
            if (!isNaN(parsed.getTime())) {
                date = parsed.toISOString().split('T')[0];
            }
        } catch (e) {
            console.log(`  Warning: Could not parse date "${dateStr}"`);
        }
    }

    // Extract main content - try multiple strategies
    let contentElement: Element | null = null;

    // Strategy 1: Look for specific forum classes
    contentElement =
        document.querySelector('.post-content') ||
        document.querySelector('.forum-post') ||
        document.querySelector('.forum-thread') ||
        document.querySelector('#forum-content');

    // Strategy 2: Try semantic HTML5 elements
    if (!contentElement) {
        contentElement = document.querySelector('article') || document.querySelector('main');
    }

    // Strategy 3: Look for body and remove Wayback Machine toolbar
    if (!contentElement) {
        const body = document.querySelector('body');
        if (body) {
            // Remove Wayback Machine elements
            body.querySelectorAll('#wm-ipp, #wm-ipp-base, .wb-banner, .ia-banner').forEach(el => el.remove());
            body.querySelectorAll('script, style, noscript').forEach(el => el.remove());
            contentElement = body;
        }
    }

    if (!contentElement) {
        console.log("  Warning: Could not find any content");
        return null;
    }

    // Get the HTML content
    const content = contentElement.innerHTML;

    // Check if content is meaningful (more than just Wayback Machine stuff)
    if (content.length < 100) {
        console.log("  Warning: Content too short, likely empty page");
        return null;
    }

    // Extract image URLs - only from actual post content, not UI elements
    const images: string[] = [];
    const imgElements = contentElement.querySelectorAll('img');
    for (const img of imgElements) {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt') || "";

        if (!src) continue;

        // Filter out Wayback Machine UI and non-content images
        if (src.includes('archive.org/web/static/')) continue;
        if (src.includes('/avatar')) continue;
        if (src.includes('wikidot.com/avatar')) continue;
        if (src.includes('feed-icon')) continue;
        if (src.includes('/etree')) continue;
        if (src.includes('/librivox')) continue;
        if (src.includes('/metropolitanmuseum')) continue;
        if (src.includes('/clevelandart')) continue;
        if (src.includes('/internetarcade')) continue;
        if (src.includes('/console')) continue;
        if (src.includes('/americana')) continue;
        if (src.includes('/widgetol')) continue;
        if (src.includes('/tv')) continue;
        if (src.includes('/911')) continue;
        if (alt.toLowerCase().includes('navigation')) continue;
        if (alt.toLowerCase().includes('icon')) continue;

        // Only include images that look like user content
        if (src.includes('smoothieware.org/') ||
            src.includes('imgur.com') ||
            src.includes('dropbox.com') ||
            src.includes('flickr.com') ||
            src.match(/\.(jpg|jpeg|png|gif)(\?|$)/i)) {
            images.push(src);
        }
    }

    return { title, date, content, images };
}

/**
 * Download images and return path mapping
 */
async function downloadImages(
    images: string[],
    topicName: string,
    waybackTimestamp: string
): Promise<Map<string, string>> {
    const pathMapping = new Map<string, string>();

    if (images.length === 0) {
        return pathMapping;
    }

    console.log(`  Downloading ${images.length} images...`);

    for (let i = 0; i < images.length; i++) {
        const imgUrl = images[i];

        try {
            // Construct Wayback URL for image if needed
            let fullImgUrl = imgUrl;
            if (!imgUrl.startsWith('http')) {
                if (imgUrl.startsWith('/web/')) {
                    // Already a Wayback URL
                    fullImgUrl = `https://web.archive.org${imgUrl}`;
                } else if (imgUrl.startsWith('/')) {
                    fullImgUrl = `https://web.archive.org/web/${waybackTimestamp}/http://smoothieware.org${imgUrl}`;
                } else {
                    fullImgUrl = `https://web.archive.org/web/${waybackTimestamp}/http://smoothieware.org/${imgUrl}`;
                }
            }

            // Generate filename
            const imgExt = path.extname(imgUrl).split('?')[0] || '.png';
            const imgName = sanitizeFilename(path.basename(imgUrl, imgExt));
            const filename = `${topicName}-${imgName}-${i}${imgExt}`;
            const imgPath = path.join(IMAGES_DIR, filename);

            // Check if already downloaded
            if (!await Bun.file(imgPath).exists()) {
                // Download image
                const response = await fetch(fullImgUrl);
                if (response.ok) {
                    const buffer = await response.arrayBuffer();
                    await Bun.write(imgPath, buffer);
                    console.log(`    ✓ Downloaded: ${filename}`);
                } else {
                    console.log(`    ✗ Failed to download: ${imgUrl} (${response.status})`);
                }
            } else {
                console.log(`    (cached) ${filename}`);
            }

            // Store mapping (original URL -> relative path)
            pathMapping.set(imgUrl, `images/${filename}`);

        } catch (error) {
            console.log(`    ✗ Error downloading image: ${error}`);
        }

        // Rate limiting
        await sleep(100);  // Reduced from 500 for faster processing
    }

    return pathMapping;
}

/**
 * Convert HTML content to markdown using Ollama
 */
async function convertToMarkdown(htmlContent: string): Promise<string | null> {
    console.log("  Converting to markdown with Ollama...");

    // Check if content contains Wayback Machine error messages
    if (htmlContent.includes('The Wayback Machine has not archived that URL') ||
        htmlContent.includes('Page cannot be crawled or displayed') ||
        htmlContent.includes('404 Not Found') ||
        htmlContent.includes('Hrm.') && htmlContent.length < 5000) {
        console.log("  ✗ Skipping: Page not properly archived by Wayback Machine");
        return null;
    }

    // Prepare the prompt for Ollama
    const prompt = `You are a precise HTML to Markdown converter. Convert the following HTML content from a forum post into clean markdown.

🚨 CRITICAL LANGUAGE REQUIREMENT 🚨
- THE OUTPUT MUST BE IN ENGLISH LANGUAGE ONLY!
- DO NOT translate to Chinese, Japanese, Korean, or any other language!
- THE FORUM POSTS ARE IN ENGLISH - KEEP THEM IN ENGLISH!
- If you output ANY Chinese/Japanese/Korean characters, you have FAILED!
- ENGLISH ONLY! ENGLISH ONLY! ENGLISH ONLY!

CRITICAL INSTRUCTIONS:
- Output ONLY the markdown content, NO explanations, NO commentary
- The content MUST remain in ENGLISH - do not translate it!
- Remove all HTML tags and convert to markdown syntax
- Preserve the structure (headings, lists, paragraphs, code blocks)
- Keep links and emphasis (bold, italic)
- Format code blocks properly with triple backticks
- Remove navigation elements, ads, Wayback Machine toolbars
- If the content is primarily error messages or non-forum content, output: "NO_CONTENT"
- Do NOT include phrases like "Here is the markdown" or "Let me convert this"
- REMEMBER: OUTPUT MUST BE IN ENGLISH, NOT CHINESE!
- Do NOT include your thinking process or explanations
- Start directly with the converted markdown content

HTML Content:
${htmlContent}

Markdown:`;

    try {
        // Call Ollama API
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
                    temperature: 0.1,  // Lower temperature for more deterministic output
                    top_p: 0.8,
                    num_predict: 4096,  // Allow longer outputs
                }
            }),
        });

        if (!response.ok) {
            throw new Error(`Ollama API error: ${response.statusText}`);
        }

        const result = await response.json();
        let markdown = result.response || "";

        // Clean up the markdown
        markdown = markdown.trim();

        // Check if Ollama indicated no real content
        if (markdown.includes('NO_CONTENT') || markdown.length < 50) {
            console.log("  ✗ Skipping: No meaningful content found");
            return null;
        }

        // Remove common meta-commentary patterns that might slip through
        markdown = markdown.replace(/^(Here is|Here's|Let me|I've converted|Markdown:).*?\n/im, '');
        markdown = markdown.replace(/```markdown\n/g, '');
        markdown = markdown.replace(/^```\n?$/gm, '');

        console.log(`  ✓ Converted (${markdown.length} chars)`);
        return markdown;

    } catch (error) {
        console.error(`  ✗ Ollama conversion failed: ${error}`);
        return null;
    }
}

/**
 * Rewrite image URLs in markdown to use relative paths
 */
function rewriteImagePaths(markdown: string, imageMap: Map<string, string>): string {
    let result = markdown;

    for (const [originalUrl, relativePath] of imageMap.entries()) {
        // Replace various formats the image might appear in markdown
        result = result.replace(new RegExp(originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), relativePath);
    }

    return result;
}

/**
 * Process a single forum post
 */
async function processPost(waybackUrl: string, index: number, total: number): Promise<boolean> {
    console.log(`\n[${index}/${total}] Processing post...`);
    console.log(`  URL: ${waybackUrl}`);

    try {
        // Step 0: Check if we can determine filename from URL and skip if markdown exists
        // This avoids downloading HTML for already-successful posts
        const urlMatch = waybackUrl.match(/\/t-\d+\/(.+?)(?:\?|#|$)/);
        const urlTitle = urlMatch ? urlMatch[1].replace(/-/g, ' ') : "";

        if (urlTitle) {
            const topicName = sanitizeFilename(urlTitle);
            // Try common date prefixes for existing files
            const possibleFiles = [
                path.join(OUTPUT_DIR, `2016-01-01-${topicName}.md`),
                path.join(OUTPUT_DIR, `2016-10-14-${topicName}.md`),
                path.join(OUTPUT_DIR, `2016-11-29-${topicName}.md`),
                path.join(OUTPUT_DIR, `2017-01-01-${topicName}.md`),
            ];

            for (const possibleFile of possibleFiles) {
                if (await Bun.file(possibleFile).exists()) {
                    console.log("  ✓ Already processed (markdown exists)");
                    return true;
                }
            }
        }

        // Step 1: Download HTML (with caching)
        const htmlFile = await downloadPostHtml(waybackUrl);

        // Step 2: Extract post data
        const postData = await extractPostData(htmlFile, waybackUrl);
        if (!postData) {
            console.log("  ✗ Skipping: Could not extract post data");
            return false;
        }

        console.log(`  Title: ${postData.title}`);
        console.log(`  Date: ${postData.date}`);

        // Step 3: Generate filenames
        const topicName = sanitizeFilename(postData.title);
        const markdownFilename = `${postData.date}-${topicName}.md`;
        const markdownPath = path.join(OUTPUT_DIR, markdownFilename);

        // Check if already processed (final check with actual filename)
        if (await Bun.file(markdownPath).exists()) {
            console.log("  ✓ Already processed (markdown exists)");
            return true;
        }

        // Step 4: Download images
        const waybackTimestamp = extractWaybackTimestamp(waybackUrl);
        const imageMap = await downloadImages(postData.images, topicName, waybackTimestamp);

        // Step 5: Convert to markdown
        const markdown = await convertToMarkdown(postData.content);

        // Check if conversion failed or content was empty
        if (!markdown) {
            console.log("  ✗ Skipping: Conversion failed or no content");
            return false;
        }

        // Step 6: Rewrite image paths
        const finalMarkdown = rewriteImagePaths(markdown, imageMap);

        // Step 7: Create final markdown with header and footer
        const output = `# ${postData.title}

*Original post date: ${postData.date}*

---

${finalMarkdown}

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](${waybackUrl})*
`;

        // Step 8: Save markdown file
        await Bun.write(markdownPath, output);
        console.log(`  ✓ Saved: ${markdownFilename}`);

        return true;

    } catch (error) {
        console.error(`  ✗ Error processing post: ${error}`);
        return false;
    }
}

/**
 * Main execution function
 */
async function main() {
    console.log("╔════════════════════════════════════════════════════════════╗");
    console.log("║   Smoothieware Old Forum Extractor                         ║");
    console.log("╚════════════════════════════════════════════════════════════╝");

    // Ensure directories exist
    await $`mkdir -p ${HTML_CACHE_DIR} ${OUTPUT_DIR} ${IMAGES_DIR}`;

    // Step 1: Discover all posts
    const postUrls = await discoverAllPosts();

    if (postUrls.length === 0) {
        console.log("\n✗ No posts found!");
        return;
    }

    // Step 2: Process each post
    console.log("\n=== Processing posts ===\n");

    // Apply test mode limit if set
    const postsToProcess = TEST_MODE_LIMIT > 0 ? postUrls.slice(0, TEST_MODE_LIMIT) : postUrls;

    if (TEST_MODE_LIMIT > 0) {
        console.log(`⚠️  TEST MODE: Processing only ${TEST_MODE_LIMIT} posts out of ${postUrls.length}\n`);
    }

    let successCount = 0;
    let failCount = 0;
    let skippedCount = 0;

    for (let i = 0; i < postsToProcess.length; i++) {
        const result = await processPost(postsToProcess[i], i + 1, postsToProcess.length);

        if (result === true) {
            successCount++;
        } else if (result === false) {
            failCount++;
        }

        // Rate limiting between posts
        await sleep(REQUEST_DELAY);
    }

    // Count existing markdown files for final report
    const existingFiles = await $`ls -1 ${OUTPUT_DIR}/*.md 2>/dev/null | wc -l`.text();
    const totalMarkdownFiles = parseInt(existingFiles.trim() || "0");

    // Step 3: Summary
    console.log("\n╔════════════════════════════════════════════════════════════╗");
    console.log("║   Extraction Complete                                      ║");
    console.log("╚════════════════════════════════════════════════════════════╝");
    console.log(`\n  Total posts discovered: ${postUrls.length}`);
    console.log(`  This run - Success: ${successCount}`);
    console.log(`  This run - Failed: ${failCount}`);
    console.log(`\n  📊 TOTAL MARKDOWN FILES: ${totalMarkdownFiles}`);
    console.log(`  📊 Recovery rate: ${Math.round(totalMarkdownFiles / postUrls.length * 100)}%`);
    console.log(`\n  Output directory: ${OUTPUT_DIR}`);
    console.log(`  Images directory: ${IMAGES_DIR}`);
    console.log("\n");
}

// Run the script
main().catch(console.error);
