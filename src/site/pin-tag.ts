/**
 * pin-tag.ts
 *
 * Simple custom tag for pin number display in monospace black boxes
 * - <pin>1.18</pin> - for pin numbers
 * - Shows text content in white monospace font on black background
 * - Lightly rounded corners for visual appeal
 * - No interactive features or tooltips (similar to <raw> tag)
 * - Works without JavaScript (CSS handles the display)
 *
 * This file only adds the custom tag structure at DOM load time
 */

// Import jQuery as a module
import $ from 'jquery';

// Wait for DOM to be fully loaded before processing tags
$(() => {

    console.log('[pin-tag.ts] Initializing pin tag handlers');

    // Find all <pin> elements in the page
    const $pin_elements = $('pin');

    // Guard against no pin tags found
    if ($pin_elements.length === 0) {
        console.log('[pin-tag.ts] No pin tags found on this page');
        return;
    }

    console.log(`[pin-tag.ts] Found ${$pin_elements.length} pin tag(s)`);

    // Process each pin tag
    $pin_elements.each(function(this: HTMLElement) {

        // Get the text content
        const text_content = $(this).text().trim();

        // Create the display structure
        const html_structure = `<span class="pin-content">${escape_html(text_content)}</span>`;

        // Replace content of pin element
        $(this).html(html_structure);

        console.log(`[pin-tag.ts] Processed pin tag: "${text_content}"`);
    });
});

/**
 * Escapes HTML special characters to prevent XSS
 */
function escape_html(text: string): string {

    const html_escape_map: Record<string, string> = {
        '&':  '&amp;',
        '<':  '&lt;',
        '>':  '&gt;',
        '"':  '&quot;',
        "'":  '&#39;'
    };

    return text.replace(/[&<>"']/g, (char) => html_escape_map[char]);
}
