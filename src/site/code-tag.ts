/**
 * code-tag.ts
 *
 * Simple custom tags for G-code and M-code display in monospace black boxes
 * - <gcode>G10</gcode> - for G-codes
 * - <mcode>M119</mcode> - for M-codes
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

    console.log('[code-tag.ts] Initializing gcode and mcode tag handlers');

    // Find all <gcode> and <mcode> elements in the page
    const $gcode_elements = $('gcode');
    const $mcode_elements = $('mcode');

    // Guard against no tags found
    if ($gcode_elements.length === 0 && $mcode_elements.length === 0) {
        console.log('[code-tag.ts] No gcode or mcode tags found on this page');
        return;
    }

    console.log(`[code-tag.ts] Found ${$gcode_elements.length} gcode tag(s) and ${$mcode_elements.length} mcode tag(s)`);

    // Process each gcode tag
    $gcode_elements.each(function(this: HTMLElement) {

        // Get the text content
        const text_content = $(this).text().trim();

        // Wrap the first letter (G) in colored span
        const first_letter = escape_html(text_content.charAt(0));
        const rest_of_text = escape_html(text_content.substring(1));
        const colored_content = `<span class="gcode-letter">${first_letter}</span>${rest_of_text}`;

        // Create the display structure with colored first letter
        const html_structure = `<span class="code-content">${colored_content}</span>`;

        // Replace content of gcode element
        $(this).html(html_structure);

        console.log(`[code-tag.ts] Processed gcode tag: "${text_content}"`);
    });

    // Process each mcode tag
    $mcode_elements.each(function(this: HTMLElement) {

        // Get the text content
        const text_content = $(this).text().trim();

        // Wrap the first letter (M) in colored span
        const first_letter = escape_html(text_content.charAt(0));
        const rest_of_text = escape_html(text_content.substring(1));
        const colored_content = `<span class="mcode-letter">${first_letter}</span>${rest_of_text}`;

        // Create the display structure with colored first letter
        const html_structure = `<span class="code-content">${colored_content}</span>`;

        // Replace content of mcode element
        $(this).html(html_structure);

        console.log(`[code-tag.ts] Processed mcode tag: "${text_content}"`);
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
