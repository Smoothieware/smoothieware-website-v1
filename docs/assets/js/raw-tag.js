/**
 * raw-tag.ts
 *
 * Simple custom tag that displays text in a monospace black box
 * - Shows text content in white monospace font on black background
 * - Lightly rounded corners for visual appeal
 * - No interactive features or tooltips (simpler cousin of <setting> tag)
 * - Works without JavaScript (CSS handles the display)
 *
 * This file only adds the custom tag structure at DOM load time
 */
// Import jQuery as a module
import $ from 'jquery';
// Wait for DOM to be fully loaded before processing tags
$(() => {
    // Find all <raw> elements in the page
    const $raw_elements = $('raw');
    // Guard against no raw tags found
    if ($raw_elements.length === 0) {
        return;
    }
    // Process each raw tag
    $raw_elements.each(function () {
        // Get the text content
        const text_content = $(this).text().trim();
        // Create the display structure
        const html_structure = `<span class="raw-content">${escape_html(text_content)}</span>`;
        // Replace content of raw element
        $(this).html(html_structure);
    });
});
/**
 * Escapes HTML special characters to prevent XSS
 */
function escape_html(text) {
    const html_escape_map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    return text.replace(/[&<>"']/g, (char) => html_escape_map[char]);
}
