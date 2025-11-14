/**
 * watch-typescript.ts
 *
 * Watches TypeScript files in src/site/ and automatically:
 * 1. Compiles them to JavaScript in docs/assets/js/
 * 2. Updates the Jekyll layout to include the compiled scripts
 *
 * Runs as a systemctl service for continuous monitoring
 */

import chokidar from 'chokidar';
import { Glob } from 'bun';
import path from 'path';
import fs from 'fs';

// Define project paths relative to project root
const PROJECT_ROOT     = path.join(__dirname, '../..');
const TS_SOURCE_DIR    = path.join(PROJECT_ROOT, 'src/site');
const JS_OUTPUT_DIR    = path.join(PROJECT_ROOT, 'docs/assets/js');
const LAYOUT_FILE      = path.join(PROJECT_ROOT, 'docs/_layouts/default.html');

// Marker comments for automatic script injection in layout file
const SCRIPT_START_MARKER = '<!-- AUTO-GENERATED TYPESCRIPT SCRIPTS START -->';
const SCRIPT_END_MARKER   = '<!-- AUTO-GENERATED TYPESCRIPT SCRIPTS END -->';

/**
 * Compiles all TypeScript files in src/site/ to docs/assets/js/
 * Each .ts file is compiled to a separate .js file with the same name
 */
async function compile_all_typescript_files(): Promise<void> {

    console.log('[watch-typescript] Starting compilation...');

    // Find all .ts files in src/site/
    const glob = new Glob('**/*.ts');
    const ts_files: string[] = [];

    // Scan for TypeScript files recursively
    for await (const file of glob.scan({ cwd: TS_SOURCE_DIR, absolute: false })) {
        // Exclude test files (they should not be bundled for browser)
        if (file.startsWith('test/') || file.startsWith('test\\') ||
            file.includes('/test/') || file.includes('\\test\\')) {
            continue;
        }
        // Exclude lib files (they're imported and bundled, not standalone entry points)
        if (file.startsWith('lib/') || file.startsWith('lib\\') ||
            file.includes('/lib/') || file.includes('\\lib\\')) {
            continue;
        }
        ts_files.push(file);
    }

    // Guard against no files found
    if (ts_files.length === 0) {
        console.log('[watch-typescript] No TypeScript files found in src/site/');
        return;
    }

    console.log(`[watch-typescript] Found ${ts_files.length} TypeScript file(s)`);

    // Compile each file separately
    for (const ts_file of ts_files) {

        // Determine input and output paths
        const input_path  = path.join(TS_SOURCE_DIR, ts_file);
        const js_filename = ts_file.replace(/\.ts$/, '.js');
        const output_path = path.join(JS_OUTPUT_DIR, js_filename);

        console.log(`[watch-typescript] Compiling ${ts_file}...`);

        try {
            // Use Bun's build API to compile TypeScript to JavaScript
            // Using ESM format with external jQuery to share the same jQuery instance across all modules
            const result = await Bun.build({
                entrypoints: [input_path],
                outdir:      JS_OUTPUT_DIR,
                target:      'browser',
                format:      'esm',
                minify:      false,
                sourcemap:   'none',
                splitting:   true,     // Enable code splitting for shared dependencies
                external:    ['jquery'], // jQuery loaded via importmap in HTML
            });

            // Check for build errors
            if (!result.success) {
                console.error(`[watch-typescript] Error compiling ${ts_file}:`);
                for (const log of result.logs) {
                    console.error(log);
                }
                continue;
            }

            console.log(`[watch-typescript] ✓ Compiled ${ts_file} → ${js_filename}`);

        } catch (error: unknown) {
            console.error(`[watch-typescript] Error compiling ${ts_file}:`, error);
        }
    }

    console.log('[watch-typescript] Compilation complete');

    // Update the layout file to include all compiled scripts
    await update_layout_with_scripts(ts_files);
}

/**
 * Updates the Jekyll layout file to include script tags for all compiled JS files
 * Injects script tags between marker comments
 */
async function update_layout_with_scripts(ts_files: string[]): Promise<void> {

    console.log('[watch-typescript] Updating layout file with script tags...');

    // Read the current layout file
    const layout_content = await Bun.file(LAYOUT_FILE).text();

    // Generate script tags for each compiled JS file
    // (test/ and lib/ files are already excluded from ts_files array)
    // Note: type="module" is required for ES module format
    const script_tags = ts_files
        .map(ts_file => {
            const js_filename = ts_file.replace(/\.ts$/, '.js');
            return `    <script type="module" src="{{ '/assets/js/${js_filename}' | relative_url }}"></script>`;
        })
        .join('\n');

    // Create the script injection block
    const script_block = `${SCRIPT_START_MARKER}\n${script_tags}\n    ${SCRIPT_END_MARKER}`;

    // Check if markers already exist in the layout
    const has_markers = layout_content.includes(SCRIPT_START_MARKER);

    let updated_content: string;

    if (has_markers) {

        // Replace existing script block between markers
        const regex = new RegExp(
            `${SCRIPT_START_MARKER}[\\s\\S]*?${SCRIPT_END_MARKER}`,
            'g'
        );
        updated_content = layout_content.replace(regex, script_block);

    } else {

        // Insert script block before </head> tag
        const head_close_index = layout_content.indexOf('</head>');

        // Guard against malformed HTML
        if (head_close_index === -1) {
            console.error('[watch-typescript] Could not find </head> tag in layout file');
            return;
        }

        // Inject script block with proper indentation
        updated_content = layout_content.slice(0, head_close_index)
            + `\n    ${script_block}\n`
            + layout_content.slice(head_close_index);
    }

    // Validate updated content before writing
    // Guard against file corruption by checking that essential closing tags are present
    if (!updated_content.includes('</body>') || !updated_content.includes('</html>')) {
        console.error('[watch-typescript] ERROR: Updated content is missing closing tags - aborting write to prevent file corruption');
        console.error('[watch-typescript] Content length:', updated_content.length);
        console.error('[watch-typescript] Has </body>:', updated_content.includes('</body>'));
        console.error('[watch-typescript] Has </html>:', updated_content.includes('</html>'));
        return;
    }

    // Ensure updated content is longer than a minimum threshold (empty file protection)
    if (updated_content.length < 1000) {
        console.error('[watch-typescript] ERROR: Updated content is suspiciously short - aborting write to prevent file corruption');
        console.error('[watch-typescript] Content length:', updated_content.length);
        return;
    }

    // Write updated layout file
    await Bun.write(LAYOUT_FILE, updated_content);

    console.log('[watch-typescript] ✓ Layout file updated');
}

/**
 * Main function: compiles initially and sets up file watcher
 */
async function main(): Promise<void> {

    console.log('='.repeat(60));
    console.log('[watch-typescript] TypeScript Watcher Started');
    console.log('[watch-typescript] Watching:', TS_SOURCE_DIR);
    console.log('[watch-typescript] Output:  ', JS_OUTPUT_DIR);
    console.log('='.repeat(60));

    // Compile all files on startup
    await compile_all_typescript_files();

    // Set up file watcher for continuous monitoring
    // Watch the directory directly, chokidar will handle the glob pattern
    const watch_pattern = path.join(TS_SOURCE_DIR, '**', '*.ts');
    console.log(`[watch-typescript] Setting up watcher for pattern: ${watch_pattern}`);

    const watcher = chokidar.watch(TS_SOURCE_DIR, {
        persistent:       true,
        ignoreInitial:    true,
        awaitWriteFinish: {
            stabilityThreshold: 500,
            pollInterval:       100,
        },
        // Only watch .ts files
        ignored:          /(^|[\/\\])\../, // Ignore dotfiles
        depth:            99, // Watch all subdirectories
    });

    // Debug: log when watcher is ready
    watcher.on('ready', () => {
        console.log('[watch-typescript] Watcher is ready and monitoring for changes');
        const watched = watcher.getWatched();
        console.log('[watch-typescript] Watched paths:', Object.keys(watched));
    });

    // Debug: log any errors
    watcher.on('error', (error: Error) => {
        console.error('[watch-typescript] Watcher error:', error);
    });

    // Handle file changes (add, change, delete)
    watcher.on('all', async (event: string, file_path: string) => {

        // Only respond to .ts file changes
        if (!file_path.endsWith('.ts')) {
            return;
        }

        console.log(`\n[watch-typescript] File ${event}: ${path.basename(file_path)}`);

        // Recompile all TypeScript files on any change
        await compile_all_typescript_files();
    });

    console.log('[watch-typescript] Watching for changes... (Press Ctrl+C to stop)');
}

// Run the watcher
main().catch((error: unknown) => {
    console.error('[watch-typescript] Fatal error:', error);
    process.exit(1);
});
