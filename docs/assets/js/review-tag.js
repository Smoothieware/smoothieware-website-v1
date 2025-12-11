/**
 * review-tag.ts
 *
 * Implements the <review> custom tag for proposing and reviewing documentation changes.
 * Allows AI agents to propose changes that can be accepted, rejected, or commented on by human reviewers.
 *
 * Features:
 * - Toggle between proposal and original content
 * - Accept/reject/comment actions (mutually exclusive)
 * - LocalStorage persistence of review state
 * - Production safety (invisible on live site)
 * - Integration with other custom tags (<setting>, <pin>, <versioned>)
 * - Console logging for export
 */
// Import jQuery as a module
import $ from 'jquery';
// LocalStorage key for review data
const REVIEWS_STORAGE_KEY = 'smoothieware_reviews';
/**
 * Checks if we're running on localhost
 * Returns true if hostname contains "localhost", is "127.0.0.1", or is on local network
 */
function is_localhost() {
    const hostname = window.location.hostname;
    // Check for localhost variations
    const is_local = hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname.startsWith('192.168.') ||
        hostname.endsWith('.local');
    // Log error if review tags detected on production
    if (!is_local) {
        console.error('[review-tag.ts] Review tags detected on production site!', {
            hostname: hostname,
            url: window.location.href,
            review_count: document.querySelectorAll('review').length,
            stack: new Error().stack
        });
    }
    return is_local;
}
/**
 * Loads review state from localStorage
 * Returns object with accept, reject, comment flags and note text
 */
function load_review_state(review_id) {
    try {
        // Get all reviews from localStorage
        const reviews_json = localStorage.getItem(REVIEWS_STORAGE_KEY);
        if (!reviews_json) {
            return {};
        }
        // Parse the reviews object
        const reviews = JSON.parse(reviews_json);
        // Return state for this specific review ID
        return reviews[review_id] || {};
    }
    catch (error) {
        console.error('[review-tag.ts] Error loading review state:', error);
        return {};
    }
}
/**
 * Saves review state to localStorage
 * Logs updated reviews object to console
 * Shows error dialog if localStorage fails
 */
function save_review_state(review_id, state) {
    try {
        // Get existing reviews
        const reviews_json = localStorage.getItem(REVIEWS_STORAGE_KEY);
        const reviews = reviews_json ? JSON.parse(reviews_json) : {};
        // Update state for this review
        if (Object.keys(state).length === 0) {
            // Remove the review if state is empty
            delete reviews[review_id];
        }
        else {
            reviews[review_id] = state;
        }
        // Save back to localStorage
        localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
        // Log to console for export
        console.log('[review-tag.ts] Reviews updated:', JSON.stringify(reviews, null, 2));
    }
    catch (error) {
        console.error('[review-tag.ts] Error saving review state:', error);
        // Show error dialog to user
        show_storage_error_dialog('Failed to save review state. LocalStorage may be full or unavailable.');
    }
}
/**
 * Shows error dialog when localStorage operations fail
 * Uses Shoelace alert component for user notification
 */
function show_storage_error_dialog(error_message) {
    // Create alert element
    const alert_html = `
        <sl-alert variant="danger" open closable duration="5000">
            <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
            <strong>LocalStorage Error</strong><br>
            ${error_message}
        </sl-alert>
    `;
    // Append to body
    $('body').append(alert_html);
}
/**
 * Validates review ID format and warns if invalid
 * Expected format: "page-name:description"
 * Logs warning to console if format doesn't match
 */
function validate_review_id(review_id) {
    // Expected format: "page-name:description"
    const valid_format = /^[a-z0-9-]+:[a-z0-9-]+$/i;
    if (!valid_format.test(review_id)) {
        console.warn('[review-tag.ts] Invalid review ID format:', review_id, 'Expected format: "page-name:description"');
        return false;
    }
    return true;
}
/**
 * Detects duplicate review IDs on the page
 * Warns in console and shows dialog for duplicate IDs
 */
function detect_duplicate_review_ids() {
    const review_ids = {};
    const duplicates = [];
    // Count occurrences of each ID
    $('review[id]').each(function () {
        const id = $(this).attr('id') || '';
        if (!id)
            return;
        review_ids[id] = (review_ids[id] || 0) + 1;
        if (review_ids[id] === 2) {
            duplicates.push(id);
        }
    });
    // Warn about duplicates
    if (duplicates.length > 0) {
        console.warn('[review-tag.ts] Duplicate review IDs detected:', duplicates);
        // Show dialog
        const alert_html = `
            <sl-alert variant="warning" open closable duration="10000">
                <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
                <strong>Duplicate Review IDs</strong><br>
                The following review IDs appear multiple times: ${duplicates.join(', ')}<br>
                Reviews with the same ID will share the same state.
            </sl-alert>
        `;
        $('body').append(alert_html);
    }
}
/**
 * Updates visual state of review element based on localStorage
 * Shows active icons with ring/shadow effect, updates backgrounds, etc.
 */
function update_review_visual_state($review_element, state) {
    // Update icon active states
    const $accept_icon = $review_element.find('.review-accept-icon');
    const $reject_icon = $review_element.find('.review-reject-icon');
    const $comment_icon = $review_element.find('.review-comment-icon');
    // Remove all active states
    $accept_icon.removeClass('review-icon-active');
    $reject_icon.removeClass('review-icon-active');
    $comment_icon.removeClass('review-icon-active');
    // Get proposal and original elements
    const $proposal = $review_element.find('.review-proposal');
    const $original = $review_element.find('.review-original');
    // Remove all state classes
    $proposal.removeClass('review-state-accepted review-state-rejected review-state-comment');
    $original.removeClass('review-state-accepted review-state-rejected review-state-comment');
    // Add active state and background class based on current state
    if (state.accept) {
        $accept_icon.addClass('review-icon-active');
        $proposal.addClass('review-state-accepted');
        $original.addClass('review-state-accepted');
    }
    else if (state.reject) {
        $reject_icon.addClass('review-icon-active');
        $proposal.addClass('review-state-rejected');
        $original.addClass('review-state-rejected');
    }
    else if (state.comment) {
        $comment_icon.addClass('review-icon-active');
        $proposal.addClass('review-state-comment');
        $original.addClass('review-state-comment');
    }
    // If no state, classes are removed and default colors apply
}
/**
 * Handles toggle between proposal and original views
 */
function toggle_view($review_element) {
    const $proposal = $review_element.find('.review-proposal');
    const $original = $review_element.find('.review-original');
    const $toggle_icon = $review_element.find('.review-toggle-icon');
    // Check current view
    const showing_proposal = $proposal.is(':visible');
    if (showing_proposal) {
        // Switch to original
        $proposal.hide();
        $original.show();
        $toggle_icon.attr('name', 'arrow-clockwise');
        $toggle_icon.closest('sl-tooltip').attr('content', 'View proposal');
    }
    else {
        // Switch to proposal
        $original.hide();
        $proposal.show();
        $toggle_icon.attr('name', 'eye');
        $toggle_icon.closest('sl-tooltip').attr('content', 'View original');
    }
}
/**
 * Handles accept action
 * Sets accept flag, removes reject and comment flags if present
 */
function handle_accept(review_id, $review_element) {
    // Load current state
    const state = load_review_state(review_id);
    // Toggle accept if already accepted
    if (state.accept) {
        // Remove accept flag
        save_review_state(review_id, {});
        update_review_visual_state($review_element, {});
    }
    else {
        // Set accept, remove others (mutually exclusive)
        const new_state = { accept: true };
        save_review_state(review_id, new_state);
        update_review_visual_state($review_element, new_state);
    }
}
/**
 * Handles reject action
 * Sets reject flag, removes accept and comment flags if present
 */
function handle_reject(review_id, $review_element) {
    // Load current state
    const state = load_review_state(review_id);
    // Toggle reject if already rejected
    if (state.reject) {
        // Remove reject flag
        save_review_state(review_id, {});
        update_review_visual_state($review_element, {});
    }
    else {
        // Set reject, remove others (mutually exclusive)
        const new_state = { reject: true };
        save_review_state(review_id, new_state);
        update_review_visual_state($review_element, new_state);
    }
}
/**
 * Saves comment from dialog
 * Sets comment flag, removes accept and reject flags, stores note text
 */
function save_comment(review_id, note_text, $review_element) {
    // If comment is empty, remove comment flag
    if (!note_text.trim()) {
        save_review_state(review_id, {});
        update_review_visual_state($review_element, {});
        return;
    }
    // Set comment, remove others (mutually exclusive)
    const new_state = {
        comment: true,
        note: note_text
    };
    save_review_state(review_id, new_state);
    update_review_visual_state($review_element, new_state);
}
/**
 * Opens comment dialog using Shoelace modal
 * Pre-fills with existing note if present
 */
function handle_comment(review_id, $review_element) {
    // Load current state
    const state = load_review_state(review_id);
    const existing_note = state.note || '';
    // Create dialog HTML
    const dialog_html = `
        <sl-dialog label="Add Review Comment" class="review-comment-dialog" data-review-id="${review_id}">
            <p>Add notes or suggestions for this change:</p>

            <sl-textarea
                placeholder="Enter your review notes here..."
                rows="5"
                class="review-comment-textarea"
                value="${existing_note.replace(/"/g, '&quot;')}"></sl-textarea>

            <div slot="footer">
                <sl-button variant="default" class="review-dialog-cancel">Cancel</sl-button>
                <sl-button variant="primary" class="review-dialog-save">Save Comment</sl-button>
            </div>
        </sl-dialog>
    `;
    // Remove any existing dialog for this review
    $(`.review-comment-dialog[data-review-id="${review_id}"]`).remove();
    // Append to body
    $('body').append(dialog_html);
    // Get the dialog element (need to wait for Shoelace to initialize it)
    setTimeout(() => {
        const $dialog = $(`.review-comment-dialog[data-review-id="${review_id}"]`);
        const dialog_element = $dialog.get(0);
        // Show the dialog
        if (dialog_element && typeof dialog_element.show === 'function') {
            dialog_element.show();
        }
        // Handle cancel
        $dialog.find('.review-dialog-cancel').on('click', function () {
            if (dialog_element && typeof dialog_element.hide === 'function') {
                dialog_element.hide();
            }
        });
        // Handle save
        $dialog.find('.review-dialog-save').on('click', function () {
            const $textarea = $dialog.find('.review-comment-textarea');
            const textarea_element = $textarea.get(0);
            const note_text = textarea_element ? textarea_element.value : '';
            save_comment(review_id, note_text, $review_element);
            if (dialog_element && typeof dialog_element.hide === 'function') {
                dialog_element.hide();
            }
        });
        // Set textarea value after dialog is shown
        setTimeout(() => {
            const $textarea = $dialog.find('.review-comment-textarea');
            const textarea_element = $textarea.get(0);
            if (textarea_element) {
                textarea_element.value = existing_note;
            }
        }, 100);
    }, 50);
}
/**
 * Ensures custom tags inside review content are properly rendered
 * Re-processes <setting>, <pin>, etc. tags after building structure
 */
function reprocess_custom_tags($review_element) {
    // Find all custom tags within review content
    const $setting_tags = $review_element.find('setting');
    const $pin_tags = $review_element.find('pin');
    const $versioned_tags = $review_element.find('versioned');
    // Trigger reprocessing for each tag type if reprocess functions exist
    if (typeof window.reprocess_setting_tags === 'function') {
        window.reprocess_setting_tags($setting_tags);
    }
    if (typeof window.reprocess_pin_tags === 'function') {
        window.reprocess_pin_tags($pin_tags);
    }
    if (typeof window.reprocess_versioned_tags === 'function') {
        window.reprocess_versioned_tags($versioned_tags);
    }
}
/**
 * Builds the HTML structure for a single review tag
 * Wraps proposal/original content with controls
 */
function build_review_structure($review_element) {
    const review_id = $review_element.attr('id') || '';
    const $proposal = $review_element.find('proposal');
    const $original = $review_element.find('original');
    // Validate review ID
    if (review_id) {
        validate_review_id(review_id);
    }
    // Extract content nodes (preserve all processing)
    const proposal_contents = $proposal.contents().clone();
    const original_contents = $original.contents().clone();
    // Check environment
    const localhost = is_localhost();
    if (!localhost) {
        // Production mode: show only original content without styling
        $review_element.empty().append(original_contents);
        $review_element.attr('data-production', 'true');
        return;
    }
    // Localhost mode: build full review UI
    // Load current state
    const state = load_review_state(review_id);
    // Determine state class based on current state
    let state_class = '';
    if (state.accept) {
        state_class = 'review-state-accepted';
    }
    else if (state.reject) {
        state_class = 'review-state-rejected';
    }
    else if (state.comment) {
        state_class = 'review-state-comment';
    }
    // Build icon controls
    const icons_html = `
        <div class="review-controls">
            <div class="review-icon-group">
                <!-- Toggle view icon -->
                <sl-tooltip content="View original">
                    <sl-icon-button
                        name="eye"
                        label="Toggle view"
                        class="review-icon review-toggle-icon">
                    </sl-icon-button>
                </sl-tooltip>

                <!-- Accept icon -->
                <sl-tooltip content="Accept this change">
                    <sl-icon-button
                        name="check-circle"
                        label="Accept"
                        class="review-icon review-accept-icon ${state.accept ? 'review-icon-active' : ''}">
                    </sl-icon-button>
                </sl-tooltip>

                <!-- Reject icon -->
                <sl-tooltip content="Reject this change">
                    <sl-icon-button
                        name="x-circle"
                        label="Reject"
                        class="review-icon review-reject-icon ${state.reject ? 'review-icon-active' : ''}">
                    </sl-icon-button>
                </sl-tooltip>

                <!-- Comment icon -->
                <sl-tooltip content="Add comment/note">
                    <sl-icon-button
                        name="chat-left-text"
                        label="Comment"
                        class="review-icon review-comment-icon ${state.comment ? 'review-icon-active' : ''}">
                    </sl-icon-button>
                </sl-tooltip>
            </div>
        </div>
    `;
    // Create wrapper structure
    const $wrapper = $('<div class="review-container"></div>').attr('data-review-id', review_id);
    const $controls = $(icons_html);
    const $content = $('<div class="review-content"></div>');
    // Create proposal and original containers
    const $proposal_container = $('<div class="review-proposal"></div>').addClass(state_class);
    const $original_container = $('<div class="review-original"></div>').addClass(state_class).hide();
    // Append cloned contents
    $proposal_container.append(proposal_contents);
    $original_container.append(original_contents);
    // Build structure
    $content.append($proposal_container).append($original_container);
    $wrapper.append($controls).append($content);
    // Replace review element content
    $review_element.empty().append($wrapper);
    // Attach event handlers
    const $container = $review_element.find('.review-container');
    // Toggle handler
    $container.find('.review-toggle-icon').on('click', function () {
        toggle_view($review_element);
    });
    // Accept handler
    $container.find('.review-accept-icon').on('click', function () {
        handle_accept(review_id, $review_element);
    });
    // Reject handler
    $container.find('.review-reject-icon').on('click', function () {
        handle_reject(review_id, $review_element);
    });
    // Comment handler
    $container.find('.review-comment-icon').on('click', function () {
        handle_comment(review_id, $review_element);
    });
    // Reprocess custom tags inside review content
    reprocess_custom_tags($review_element);
}
/**
 * Main initialization - called on DOM ready
 * Finds all <review> tags and processes them
 */
function initialize_review_tags() {
    // Find all review tags
    const $review_tags = $('review');
    if ($review_tags.length === 0) {
        return;
    }
    // Detect duplicate IDs
    detect_duplicate_review_ids();
    // Process each review tag
    $review_tags.each(function () {
        build_review_structure($(this));
    });
}
// Initialize IMMEDIATELY when DOM is ready - BEFORE other tag handlers
// This ensures we move the unprocessed content before setting-tag, pin-tag, etc. process it
$(document).ready(function () {
    initialize_review_tags();
});
