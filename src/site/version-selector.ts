// Version selector header dropdown functionality
// Manages the version selector in the site header navigation

import { get_display_version, set_display_version, type DisplayVersion } from './lib/config.js';
import $ from 'jquery';

// Update the version selector button to display the current version state
function update_version_selector_button(): void {

    // Get the current display version setting
    const display_version = get_display_version();

    // Find the version selector button
    const $button = $('#version-selector-button');

    // Update the data-version attribute to control CSS visibility
    $button.attr('data-version', display_version);

    // Update menu items to highlight the current selection
    const $menu_items = $('.version-menu-item');

    // Remove current highlighting from all items
    $menu_items.attr('data-current', 'false');

    // Highlight the current selection
    $menu_items.each(function() {
        const $item = $(this);
        const item_version = $item.attr('data-version');

        // Check if this item represents the current version
        if (item_version === display_version) {
            $item.attr('data-current', 'true');
        }
    });
}

// Setup click handlers for version menu items
function setup_version_selector_handlers(): void {

    // Handle clicks on version menu items
    $('.version-menu-item').on('click', function() {
        const $item = $(this);

        // Get the selected version from data attribute
        const selected_version = $item.attr('data-version') as DisplayVersion;

        // Update the display version setting
        set_display_version(selected_version);

        // Update the button display
        update_version_selector_button();

        // Close the dropdown
        const $dropdown = $('#version-selector-dropdown')[0] as any;

        // Use Shoelace API to close the dropdown
        if ($dropdown && $dropdown.hide) {
            $dropdown.hide();
        }

        // Trigger a custom event that setting-tag.ts can listen to
        $(document).trigger('version-changed', [selected_version]);
    });
}

// Initialize version selector on page load
$(document).ready(function() {

    // Update button display to match current setting
    update_version_selector_button();

    // Setup click handlers
    setup_version_selector_handlers();
});
