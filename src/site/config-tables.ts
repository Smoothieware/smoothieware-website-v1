/**
 * config-tables.ts
 *
 * Configuration options table functionality for the Smoothieware documentation
 *
 * Features:
 * - Version-aware column and row visibility based on user's version preference
 * - Truncation with expand/collapse functionality for description cells
 * - Re-checks overflow on window resize
 * - Updates dynamically when version preference changes
 *
 * Column visibility rules:
 * - When only V1 is selected: Hide V2 column, expand Description column
 * - When only V2 is selected: Hide V1 column, expand Description column
 * - When both/nc: Show all three columns
 *
 * Row visibility rules:
 * - When only V1 is selected: Hide rows where V1 cell is empty (has class 'empty-cell')
 * - When only V2 is selected: Hide rows where V2 cell is empty (has class 'empty-cell')
 * - When both/nc: Show all rows
 */

// Import jQuery as a module
import $ from 'jquery';

// Import configuration management library
import {
    get_display_version,
    should_show_v1,
    should_show_v2,
    should_show_both,
    type DisplayVersion
} from './lib/config';

/**
 * Check if an element's content overflows its visible area
 * @param element - The HTML element to check
 * @returns true if content overflows
 */
function has_overflow(element: HTMLElement): boolean {

    return element.scrollHeight > element.clientHeight;
}

/**
 * Initialize overflow detection for description cells
 * Adds 'has-overflow' class to cells that are truncated
 */
function init_overflow_detection(): void {

    // Find all description cells in config tables
    const $description_cells = $('.config-options-table .description-cell');

    $description_cells.each(function() {
        const cell = this as HTMLElement;

        // Check for overflow after a brief delay to ensure rendering is complete
        setTimeout(function() {
            if (has_overflow(cell)) {
                $(cell).addClass('has-overflow');
            } else {
                $(cell).removeClass('has-overflow');
            }
        }, 100);
    });
}

/**
 * Setup click handlers for expand/collapse functionality
 */
function setup_expand_handlers(): void {

    // Use event delegation for click handling
    $(document).on('click', '.config-options-table .description-cell', function() {
        const $cell = $(this);

        // Only toggle if the cell has overflow or is already expanded
        if ($cell.hasClass('has-overflow') || $cell.hasClass('expanded')) {
            $cell.toggleClass('expanded');

            // Re-check overflow when collapsing
            if (!$cell.hasClass('expanded')) {
                const cell = this as HTMLElement;
                if (has_overflow(cell)) {
                    $cell.addClass('has-overflow');
                } else {
                    $cell.removeClass('has-overflow');
                }
            }
        }
    });
}

/**
 * Re-check overflow on window resize (debounced)
 */
function setup_resize_handler(): void {

    let resize_timeout: number | undefined;

    $(window).on('resize', function() {
        clearTimeout(resize_timeout);
        resize_timeout = window.setTimeout(function() {
            // Re-check all non-expanded description cells
            const $cells = $('.config-options-table .description-cell:not(.expanded)');

            $cells.each(function() {
                const cell = this as HTMLElement;
                if (has_overflow(cell)) {
                    $(cell).addClass('has-overflow');
                } else {
                    $(cell).removeClass('has-overflow');
                }
            });
        }, 250);
    });
}

/**
 * Update table visibility based on current version selection
 * - Hides/shows columns based on version
 * - Hides/shows rows based on whether they have settings for the selected version
 * - Adjusts column widths
 */
function update_table_visibility(): void {

    // Get current display version
    const display_version = get_display_version();

    // Determine what to show
    const show_v1 = should_show_v1();
    const show_v2 = should_show_v2();
    const show_both = should_show_both();

    // Find all config options tables
    const $tables = $('.config-options-table');

    $tables.each(function() {
        const $table = $(this);

        // Update header row
        update_header_visibility($table, show_v1, show_v2, show_both);

        // Update body rows
        update_body_rows_visibility($table, show_v1, show_v2, show_both);
    });

    // Re-check overflow after visibility changes
    setTimeout(init_overflow_detection, 150);
}

/**
 * Update header row visibility for a table
 * @param $table - jQuery table element
 * @param show_v1 - Whether to show V1 column
 * @param show_v2 - Whether to show V2 column
 * @param show_both - Whether to show both columns
 */
function update_header_visibility($table: JQuery, show_v1: boolean, show_v2: boolean, show_both: boolean): void {

    // Find header cells
    const $header_row = $table.find('thead tr');
    const $headers = $header_row.find('th');

    // Guard against tables with wrong structure
    if ($headers.length < 3) {
        return;
    }

    const $v1_header = $headers.eq(0);
    const $v2_header = $headers.eq(1);
    const $desc_header = $headers.eq(2);

    if (show_both) {
        // Show all columns with standard widths
        $v1_header.show().css('width', '25%');
        $v2_header.show().css('width', '25%');
        $desc_header.css('width', '50%');
    } else if (show_v1 && !show_v2) {
        // V1 only: hide V2 column, expand description
        $v1_header.show().css('width', '30%');
        $v2_header.hide();
        $desc_header.css('width', '70%');
    } else if (show_v2 && !show_v1) {
        // V2 only: hide V1 column, expand description
        $v1_header.hide();
        $v2_header.show().css('width', '30%');
        $desc_header.css('width', '70%');
    }
}

/**
 * Update body rows visibility for a table
 * @param $table - jQuery table element
 * @param show_v1 - Whether to show V1 column
 * @param show_v2 - Whether to show V2 column
 * @param show_both - Whether to show both columns
 */
function update_body_rows_visibility($table: JQuery, show_v1: boolean, show_v2: boolean, show_both: boolean): void {

    // Find all body rows
    const $rows = $table.find('tbody tr');

    $rows.each(function() {
        const $row = $(this);
        const $cells = $row.find('td');

        // Guard against rows with wrong structure (like module-header rows)
        if ($cells.length < 3) {
            // Module header rows - always visible
            $row.show();
            return;
        }

        const $v1_cell = $cells.eq(0);
        const $v2_cell = $cells.eq(1);
        const $desc_cell = $cells.eq(2);

        // Check if cells are empty
        const v1_is_empty = $v1_cell.hasClass('empty-cell');
        const v2_is_empty = $v2_cell.hasClass('empty-cell');

        if (show_both) {
            // Show all columns and rows
            $row.show();
            $v1_cell.show().css('width', '25%');
            $v2_cell.show().css('width', '25%');
            $desc_cell.css('width', '50%');
        } else if (show_v1 && !show_v2) {
            // V1 only mode
            // Hide V2 column
            $v2_cell.hide();

            // Hide entire row if V1 cell is empty
            if (v1_is_empty) {
                $row.hide();
            } else {
                $row.show();
                $v1_cell.show().css('width', '30%');
                $desc_cell.css('width', '70%');
            }
        } else if (show_v2 && !show_v1) {
            // V2 only mode
            // Hide V1 column
            $v1_cell.hide();

            // Hide entire row if V2 cell is empty
            if (v2_is_empty) {
                $row.hide();
            } else {
                $row.show();
                $v2_cell.show().css('width', '30%');
                $desc_cell.css('width', '70%');
            }
        }
    });
}

/**
 * Initialize all config tables functionality
 */
function init_config_tables(): void {

    // Find all config options tables
    const $tables = $('.config-options-table');

    // Guard against no tables found
    if ($tables.length === 0) {
        return;
    }

    // Initialize overflow detection
    init_overflow_detection();

    // Setup expand/collapse handlers
    setup_expand_handlers();

    // Setup resize handler
    setup_resize_handler();

    // Update visibility based on current version selection
    update_table_visibility();

    // Listen for version changes
    $(document).on('version-changed', function() {
        update_table_visibility();
    });
}

// Wait for DOM to be fully loaded before initializing
$(() => {
    init_config_tables();
});
