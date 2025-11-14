/**
 * versioned-tag.ts
 *
 * Adds version-aware visibility to <versioned> custom tags in documentation pages
 * - Displays v1 and v2 content based on user's version preference
 * - Supports horizontal (side-by-side) and vertical (stacked) layouts
 * - Updates visibility when version preference changes from header selector
 * - Works without JavaScript (shows both by default via CSS)
 *
 * The CSS handles the actual visibility using data-display-version attribute
 */

// Import jQuery as a module
import $ from 'jquery';

// Import configuration management library
import {
    get_display_version,
    type DisplayVersion
} from './lib/config';

/**
 * Updates the visibility of v1/v2 content in all versioned tags based on display_version setting
 * Called on initial load and whenever the version preference changes
 *
 * This sets the data-display-version attribute on each <versioned> element
 * CSS rules then hide/show v1/v2 content based on this attribute
 *
 * Tags with the 'demo' attribute are skipped - they maintain their own display state
 */
function update_all_versioned_tags_visibility(): void {

    // Get current display version preference
    const display_version = get_display_version();

    // Find all versioned elements
    const $all_versioned = $('versioned');

    // Set data-display-version attribute on each versioned element
    // Skip elements with 'demo' attribute - they control their own visibility
    $all_versioned.each(function() {
        const $element = $(this);

        // Check if element has demo attribute
        const demo_value = $element.attr('demo');

        if (demo_value !== undefined) {
            // Element has demo attribute - set display based on demo value
            // If demo has a value (like demo="v1" or demo="both"), use that
            // If demo is just present without value, default to "both"
            const demo_display = demo_value === '' ? 'both' : demo_value;
            $element.attr('data-display-version', demo_display);
        } else {
            // Normal element - use global display version
            $element.attr('data-display-version', display_version);
        }
    });

    console.log(`[versioned-tag.ts] Updated all versioned tag visibility for display_version: ${display_version}`);
}

// Wait for DOM to be fully loaded before attaching event handlers
$(() => {

    console.log('[versioned-tag.ts] Initializing versioned tag handlers');

    // Find all <versioned> elements in the page
    const $versioned_elements = $('versioned');

    // Guard against no versioned tags found
    if ($versioned_elements.length === 0) {
        console.log('[versioned-tag.ts] No versioned tags found on this page');
        return;
    }

    console.log(`[versioned-tag.ts] Found ${$versioned_elements.length} versioned tag(s)`);

    // Update visibility based on current display_version setting
    update_all_versioned_tags_visibility();

    // Listen for version changes from the header version selector
    $(document).on('version-changed', function() {

        // Update all versioned tags visibility when version changes from header
        update_all_versioned_tags_visibility();
    });

    // Add click handlers to v1 and v2 elements to open version selector menu
    // Using event delegation since elements may be added dynamically
    $(document).on('click', 'v1, v2', function(event) {

        // Get the version selector dropdown element
        const version_selector_dropdown = document.getElementById('version-selector-dropdown') as any;

        // Guard against missing dropdown
        if (!version_selector_dropdown) {
            console.warn('[versioned-tag.ts] Version selector dropdown not found');
            return;
        }

        // Open the dropdown using Shoelace API
        // Shoelace dropdowns have a show() method
        if (typeof version_selector_dropdown.show === 'function') {
            version_selector_dropdown.show();
            console.log('[versioned-tag.ts] Opened version selector dropdown');
        } else {
            console.warn('[versioned-tag.ts] Version selector dropdown does not have show() method');
        }

        // Prevent event bubbling
        event.stopPropagation();
    });

    console.log('[versioned-tag.ts] Click handlers attached to v1 and v2 elements');
});
