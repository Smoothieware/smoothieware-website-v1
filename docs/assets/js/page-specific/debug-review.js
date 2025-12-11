"use strict";
/**
 * debug-review.ts
 *
 * Page-specific functionality for the review tag debug page (/debug-review)
 * Only executes on the debug-review page
 *
 * Features:
 * - Displays current review data from localStorage
 * - Allows refreshing and exporting review data
 * - Auto-refreshes to catch same-page changes
 */
// LocalStorage key for review data (must match review-tag.ts)
const STORAGE_KEY = 'smoothieware_reviews';
/**
 * Checks if we're on the debug-review page
 */
function is_debug_review_page() {
    const path = window.location.pathname;
    return path === '/debug-review' || path === '/debug-review/' || path === '/debug-review.html';
}
/**
 * Displays the current review data in the JSON display element
 */
function display_review_data() {
    const json_element = document.getElementById('review-json');
    // Guard against missing element
    if (!json_element) {
        return;
    }
    // Get review data from localStorage
    const reviews_raw = localStorage.getItem(STORAGE_KEY) ?? '{}';
    const reviews = JSON.parse(reviews_raw);
    // Display the data
    if (Object.keys(reviews).length === 0) {
        json_element.textContent = '(No review data yet - interact with reviews above to see data here)';
    }
    else {
        json_element.textContent = JSON.stringify(reviews, null, 2);
    }
}
/**
 * Shows a feedback alert to the user
 */
function show_feedback(message, variant = 'success') {
    const feedback = document.getElementById('action-feedback');
    // Guard against missing element
    if (!feedback) {
        return;
    }
    const icon_name = variant === 'success' ? 'check-circle' : 'info-circle';
    feedback.innerHTML = `
        <sl-alert variant="${variant}" open closable>
            <sl-icon slot="icon" name="${icon_name}"></sl-icon>
            ${message}
        </sl-alert>
    `;
    // Auto-close after 3 seconds
    setTimeout(() => {
        const alert = feedback.querySelector('sl-alert');
        if (alert) {
            alert.hide();
        }
    }, 3000);
}
/**
 * Sets up the refresh button handler
 */
function setup_refresh_button() {
    const button = document.getElementById('refresh-data-button');
    // Guard against missing element
    if (!button) {
        return;
    }
    button.addEventListener('click', () => {
        display_review_data();
        show_feedback('Review data refreshed');
    });
}
/**
 * Sets up the export button handler
 */
function setup_export_button() {
    const button = document.getElementById('export-data-button');
    // Guard against missing element
    if (!button) {
        return;
    }
    button.addEventListener('click', async () => {
        const reviews = localStorage.getItem(STORAGE_KEY) ?? '{}';
        try {
            // Copy to clipboard
            await navigator.clipboard.writeText(reviews);
            show_feedback('Review JSON copied to clipboard!');
        }
        catch (error) {
            // Fallback: log to console
            show_feedback('Failed to copy to clipboard. Check console for data.', 'warning');
            console.log('Review data:', reviews);
        }
    });
}
/**
 * Sets up storage change listener for cross-tab updates
 */
function setup_storage_listener() {
    window.addEventListener('storage', (event) => {
        // Only respond to review data changes
        if (event.key === STORAGE_KEY) {
            display_review_data();
        }
    });
}
/**
 * Sets up periodic refresh for same-page changes
 */
function setup_periodic_refresh() {
    // Refresh every 2 seconds to catch same-page changes
    setInterval(display_review_data, 2000);
}
/**
 * Main initialization function
 * Only runs on the debug-review page
 */
function init() {
    // Guard: only run on debug-review page
    if (!is_debug_review_page()) {
        return;
    }
    // Initial display
    display_review_data();
    // Setup button handlers
    setup_refresh_button();
    setup_export_button();
    // Setup auto-refresh
    setup_storage_listener();
    setup_periodic_refresh();
}
// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);
