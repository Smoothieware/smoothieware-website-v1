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
 */
function update_all_versioned_tags_visibility(): void {

    // Get current display version preference
    const display_version = get_display_version();

    // Find all versioned elements
    const $all_versioned = $('versioned');

    // Set data-display-version attribute on each versioned element
    // CSS rules use this attribute to control visibility of v1/v2 content
    $all_versioned.attr('data-display-version', display_version);

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
});
