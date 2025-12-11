/**
 * version-selector-modal.ts
 *
 * Displays a welcome modal dialog for first-time visitors to select their Smoothieware version preference
 * The modal appears when the user has never configured a version preference (display_version === 'nc')
 *
 * Features:
 * - Shoelace dialog component for the modal
 * - Hero-style layout with generous spacing
 * - Three version options: v1, v2, or both
 * - Skip button that defaults to "both"
 * - Localhost-only reset button for testing
 */

import $ from 'jquery';
import { is_version_not_configured, set_display_version, type DisplayVersion } from './lib/config.js';

// Store the dialog element reference
let version_modal_element: HTMLElement | null = null;

/**
 * Creates and inserts the modal HTML into the document body
 * Uses Shoelace's sl-dialog component for the modal functionality
 */
function create_modal_html(): void {

    // Create the modal container element
    const modal_html = `
        <sl-dialog
            id="version-selector-modal"
            label="Welcome to Smoothieware"
            class="version-modal"
            no-header
        >
            <div class="version-modal-content">
                <!-- Hero header section -->
                <div class="version-modal-header">
                    <h1 class="version-modal-title">Welcome to Smoothieware</h1>
                    <p class="version-modal-subtitle">
                        Choose which firmware version documentation you'd like to see
                    </p>
                </div>

                <!-- Version selection buttons -->
                <div class="version-modal-options">
                    <!-- V1 Option -->
                    <button class="version-modal-option" data-version="v1">
                        <div class="version-option-badge v1-badge">v1</div>
                        <div class="version-option-title">Smoothie v1</div>
                        <div class="version-option-description">
                            Original Smoothieware firmware for LPC-based boards
                        </div>
                    </button>

                    <!-- V2 Option -->
                    <button class="version-modal-option" data-version="v2">
                        <div class="version-option-badge v2-badge">v2</div>
                        <div class="version-option-title">Smoothie v2</div>
                        <div class="version-option-description">
                            Next-generation firmware with enhanced features
                        </div>
                    </button>

                    <!-- Both Option -->
                    <button class="version-modal-option" data-version="both">
                        <div class="version-option-badge both-badge">v1+v2</div>
                        <div class="version-option-title">Both Versions</div>
                        <div class="version-option-description">
                            View documentation for both firmware versions
                        </div>
                    </button>
                </div>

                <!-- Skip/footer section -->
                <div class="version-modal-footer">
                    <button class="version-modal-skip" data-version="both">
                        Skip for now
                    </button>
                    <p class="version-modal-hint">
                        You can change this later using the version selector in the header
                    </p>
                </div>
            </div>
        </sl-dialog>
    `;

    // Append the modal to the body
    $('body').append(modal_html);

    // Store reference to the modal element
    version_modal_element = document.getElementById('version-selector-modal');
}

/**
 * Opens the version selector modal dialog
 * Uses Shoelace's dialog show() method
 */
function show_modal(): void {

    // Guard against missing modal element
    if (!version_modal_element) {
        console.error('[version-selector-modal.ts] Modal element not found');
        return;
    }

    // Cast to Shoelace dialog type and show
    const dialog = version_modal_element as any;

    // Show the dialog
    if (dialog.show) {
        dialog.show();
    }
}

/**
 * Closes the version selector modal dialog
 * Uses Shoelace's dialog hide() method
 */
function hide_modal(): void {

    // Guard against missing modal element
    if (!version_modal_element) {
        return;
    }

    // Cast to Shoelace dialog type and hide
    const dialog = version_modal_element as any;

    // Hide the dialog
    if (dialog.hide) {
        dialog.hide();
    }
}

/**
 * Handles version selection from the modal
 * Saves the selection and triggers update events
 */
function handle_version_selection(version: DisplayVersion): void {

    // Save the selected version
    set_display_version(version);

    // Close the modal
    hide_modal();

    // Update the version selector button in the header
    const $button = $('#version-selector-button');
    $button.attr('data-version', version);

    // Trigger version changed event for other components
    $(document).trigger('version-changed', [version]);
}

/**
 * Sets up click handlers for version selection buttons
 */
function setup_modal_handlers(): void {

    // Handle clicks on version option buttons
    $('.version-modal-option').on('click', function() {
        const $button = $(this);

        // Get the selected version from data attribute
        const selected_version = $button.attr('data-version') as DisplayVersion;

        // Handle the selection
        handle_version_selection(selected_version);
    });

    // Handle skip button click
    $('.version-modal-skip').on('click', function() {

        // Skip defaults to "both"
        handle_version_selection('both');
    });

    // Prevent closing by clicking outside (no-header already prevents close button)
    if (version_modal_element) {

        // Listen for the request-close event to prevent backdrop clicks
        version_modal_element.addEventListener('sl-request-close', (event: Event) => {

            const custom_event = event as CustomEvent;

            // Prevent closing from overlay click or escape key
            if (custom_event.detail?.source === 'overlay' || custom_event.detail?.source === 'keyboard') {
                event.preventDefault();
            }
        });
    }
}

/**
 * Creates and shows the localhost-only reset button
 * This button resets the version setting to 'nc' (not configured) for testing
 */
function create_reset_button(): void {

    // Only show on localhost
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return;
    }

    // Create the reset button HTML
    const reset_button_html = `
        <div class="version-reset-container">
            <sl-button
                id="version-reset-button"
                variant="warning"
                size="small"
                outline
            >
                <sl-icon slot="prefix" name="arrow-counterclockwise"></sl-icon>
                Reset Version Setting (localhost only)
            </sl-button>
        </div>
    `;

    // Append to the body at the bottom
    $('body').append(reset_button_html);

    // Setup click handler
    $('#version-reset-button').on('click', function() {

        // Set version to 'nc' (not configured)
        set_display_version('nc');

        // Update the header button
        const $button = $('#version-selector-button');
        $button.attr('data-version', 'nc');

        // Trigger version changed event
        $(document).trigger('version-changed', ['nc']);

        // Reload the page to show the modal
        window.location.reload();
    });
}

/**
 * Checks if the current page is a landing page
 * Landing pages should not show the version modal
 */
function is_landing_page(): boolean {

    // Check if the pathname contains "landing"
    const pathname = window.location.pathname.toLowerCase();
    return pathname.includes('landing');
}

/**
 * Initializes the version selector modal
 * Checks if user has configured version preference and shows modal if not
 */
function initialize_version_modal(): void {

    // Don't show modal on landing pages
    if (is_landing_page()) {
        return;
    }

    // Create the modal HTML
    create_modal_html();

    // Setup click handlers
    setup_modal_handlers();

    // Check if we should show the modal
    if (is_version_not_configured()) {

        // Wait a short moment for the page to render and Shoelace to initialize
        setTimeout(() => {
            show_modal();
        }, 100);
    }

    // Always create the reset button (it will only show on localhost)
    create_reset_button();
}

// Initialize when DOM is ready
$(document).ready(function() {

    // Initialize after a short delay to let Shoelace autoloader start
    // The autoloader will load sl-dialog when it sees it in the DOM
    setTimeout(() => {
        initialize_version_modal();
    }, 50);
});
