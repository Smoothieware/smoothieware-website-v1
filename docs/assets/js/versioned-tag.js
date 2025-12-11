/**
 * versioned-tag.ts
 *
 * Adds version-aware visibility to <versioned> custom tags in documentation pages
 * - Displays v1 and v2 content based on user's version preference
 * - Supports horizontal (side-by-side) and vertical (stacked) layouts
 * - Updates visibility when version preference changes from header selector
 * - Works without JavaScript (shows both by default via CSS)
 * - Handles "transparent" mode when v1 or v2 is empty (no styling, full width)
 *
 * The CSS handles the actual visibility using data-display-version attribute
 */
// Import jQuery as a module
import $ from 'jquery';
// Import configuration management library
import { get_display_version } from './lib/config.js';
/**
 * Checks if an element is considered "empty" (contains no alphanumeric characters)
 * @param $element - jQuery element to check
 * @returns true if element is empty or contains only whitespace/non-alphanumeric chars
 */
function is_element_empty($element) {
    // Get the text content of the element
    const text_content = $element.text();
    // Check if there are any alphanumeric characters
    // Returns true if NO alphanumeric characters are found
    return !/[a-zA-Z0-9]/.test(text_content);
}
/**
 * Restructures V2-only versioned tags that are inside list items
 * Moves the content out of the parent <li> to become proper sibling <li> elements
 * This ensures correct indentation and bullet styling
 *
 * Only runs once on page load
 */
function restructure_v2_only_list_items() {
    // Find all versioned elements with empty v1 (V2-only content)
    const $v2_only_versioned = $('versioned[data-has-empty="v1"]');
    $v2_only_versioned.each(function () {
        const $versioned = $(this);
        // Check if this versioned tag is inside a list item
        const $parent_li = $versioned.closest('li');
        // Guard against versioned tags not in list items
        if ($parent_li.length === 0) {
            return;
        }
        // Get the parent UL that contains the list item
        const $parent_ul = $parent_li.closest('ul');
        // Guard against missing parent UL
        if ($parent_ul.length === 0) {
            return;
        }
        // Find the v2 content
        const $v2 = $versioned.children('v2');
        // Guard against missing v2
        if ($v2.length === 0) {
            return;
        }
        // Find all .versioned-list-item divs inside v2
        const $items = $v2.find('.versioned-list-item');
        // Guard against no items
        if ($items.length === 0) {
            return;
        }
        // Create new <li> elements for each item and insert them after the parent <li>
        // Process in reverse order to maintain correct order when inserting after
        let $insert_after = $parent_li;
        $items.each(function () {
            const $item = $(this);
            // Create a new <li> element
            const $new_li = $('<li>').addClass('v2-only-list-item');
            // Copy the content from the div to the new <li>
            $new_li.html($item.html());
            // Check if this item has a deeper nesting level (indicated by larger margin-left)
            // Items with margin-left: 2.5em or more are nested one level deeper
            const margin_left = $item.css('margin-left') || $item.attr('style')?.match(/margin-left:\s*([^;]+)/)?.[1] || '0';
            const margin_value = parseFloat(margin_left);
            // If margin is greater than 2em, this is a nested item
            // Create a sub-list for it
            if (margin_value > 32) { // 2em is roughly 32px
                // This is a nested item - wrap it in a <ul>
                const $sub_ul = $('<ul>').append($new_li);
                $insert_after.append($sub_ul);
            }
            else {
                // This is a sibling item - insert after the current position
                $insert_after.after($new_li);
                $insert_after = $new_li;
            }
        });
        // Remove the original versioned tag from the parent <li>
        $versioned.remove();
    });
}
/**
 * Updates the visibility of v1/v2 content in all versioned tags based on display_version setting
 * Called on initial load and whenever the version preference changes
 *
 * This sets the data-display-version attribute on each <versioned> element
 * CSS rules then hide/show v1/v2 content based on this attribute
 *
 * Also detects empty v1/v2 tags and sets data-has-empty attribute for "transparent" mode
 * Tags with the 'demo' attribute are skipped - they maintain their own display state
 */
function update_all_versioned_tags_visibility() {
    // Get current display version preference
    const display_version = get_display_version();
    // Set data-display-version attribute on body for global CSS control
    // This allows CSS to control visibility of elements outside versioned tags
    $('body').attr('data-display-version', display_version);
    // Find all versioned elements
    const $all_versioned = $('versioned');
    // Set data-display-version attribute on each versioned element
    // Also detect empty v1/v2 tags for transparent mode
    $all_versioned.each(function () {
        const $element = $(this);
        // Find child v1 and v2 elements
        const $v1 = $element.children('v1');
        const $v2 = $element.children('v2');
        // Check if v1 or v2 is empty
        const v1_is_empty = $v1.length === 0 || is_element_empty($v1);
        const v2_is_empty = $v2.length === 0 || is_element_empty($v2);
        // Set data-has-empty attribute based on which tag is empty
        // This enables "transparent" mode in CSS (no borders, labels, full width)
        if (v1_is_empty && !v2_is_empty) {
            // v1 is empty, v2 has content - transparent mode for v2-only content
            $element.attr('data-has-empty', 'v1');
        }
        else if (v2_is_empty && !v1_is_empty) {
            // v2 is empty, v1 has content - transparent mode for v1-only content
            $element.attr('data-has-empty', 'v2');
        }
        else {
            // Both have content or both are empty - normal mode
            $element.removeAttr('data-has-empty');
        }
        // Check if element has demo attribute
        const demo_value = $element.attr('demo');
        if (demo_value !== undefined) {
            // Element has demo attribute - set display based on demo value
            // If demo has a value (like demo="v1" or demo="both"), use that
            // If demo is just present without value, default to "both"
            const demo_display = demo_value === '' ? 'both' : demo_value;
            $element.attr('data-display-version', demo_display);
        }
        else {
            // Normal element - use global display version
            $element.attr('data-display-version', display_version);
        }
    });
}
// Wait for DOM to be fully loaded before attaching event handlers
$(() => {
    // Find all <versioned> elements in the page
    const $versioned_elements = $('versioned');
    // Guard against no versioned tags found
    if ($versioned_elements.length === 0) {
        return;
    }
    // Update visibility based on current display_version setting
    update_all_versioned_tags_visibility();
    // Restructure V2-only list items to be proper siblings
    // This must run after update_all_versioned_tags_visibility sets the data-has-empty attribute
    restructure_v2_only_list_items();
    // Listen for version changes from the header version selector
    $(document).on('version-changed', function () {
        // Update all versioned tags visibility when version changes from header
        update_all_versioned_tags_visibility();
    });
    // Add click handlers to v1 and v2 elements to open version selector menu
    // Using event delegation since elements may be added dynamically
    $(document).on('click', 'v1, v2', function (event) {
        // Get the version selector dropdown element
        const version_selector_dropdown = document.getElementById('version-selector-dropdown');
        // Guard against missing dropdown
        if (!version_selector_dropdown) {
            console.warn('[versioned-tag.ts] Version selector dropdown not found');
            return;
        }
        // Open the dropdown using Shoelace API
        // Shoelace dropdowns have a show() method
        if (typeof version_selector_dropdown.show === 'function') {
            version_selector_dropdown.show();
        }
        else {
            console.warn('[versioned-tag.ts] Version selector dropdown does not have show() method');
        }
        // Prevent event bubbling
        event.stopPropagation();
    });
});
