// src/site/review-tag.ts
import $ from "jquery";
var REVIEWS_STORAGE_KEY = "smoothieware_reviews";
function is_localhost() {
  const hostname = window.location.hostname;
  const is_local = hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("192.168.") || hostname.endsWith(".local");
  if (!is_local) {
    console.error("[review-tag.ts] Review tags detected on production site!", {
      hostname,
      url: window.location.href,
      review_count: document.querySelectorAll("review").length,
      stack: new Error().stack
    });
  }
  return is_local;
}
function load_review_state(review_id) {
  try {
    const reviews_json = localStorage.getItem(REVIEWS_STORAGE_KEY);
    if (!reviews_json) {
      return {};
    }
    const reviews = JSON.parse(reviews_json);
    return reviews[review_id] || {};
  } catch (error) {
    console.error("[review-tag.ts] Error loading review state:", error);
    return {};
  }
}
function save_review_state(review_id, state) {
  try {
    const reviews_json = localStorage.getItem(REVIEWS_STORAGE_KEY);
    const reviews = reviews_json ? JSON.parse(reviews_json) : {};
    if (Object.keys(state).length === 0) {
      delete reviews[review_id];
    } else {
      reviews[review_id] = state;
    }
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
    console.log("[review-tag.ts] Reviews updated:", JSON.stringify(reviews, null, 2));
  } catch (error) {
    console.error("[review-tag.ts] Error saving review state:", error);
    show_storage_error_dialog("Failed to save review state. LocalStorage may be full or unavailable.");
  }
}
function show_storage_error_dialog(error_message) {
  const alert_html = `
        <sl-alert variant="danger" open closable duration="5000">
            <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
            <strong>LocalStorage Error</strong><br>
            ${error_message}
        </sl-alert>
    `;
  $("body").append(alert_html);
}
function validate_review_id(review_id) {
  const valid_format = /^[a-z0-9-]+:[a-z0-9-]+$/i;
  if (!valid_format.test(review_id)) {
    console.warn("[review-tag.ts] Invalid review ID format:", review_id, 'Expected format: "page-name:description"');
    return false;
  }
  return true;
}
function detect_duplicate_review_ids() {
  const review_ids = {};
  const duplicates = [];
  $("review[id]").each(function() {
    const id = $(this).attr("id") || "";
    if (!id)
      return;
    review_ids[id] = (review_ids[id] || 0) + 1;
    if (review_ids[id] === 2) {
      duplicates.push(id);
    }
  });
  if (duplicates.length > 0) {
    console.warn("[review-tag.ts] Duplicate review IDs detected:", duplicates);
    const alert_html = `
            <sl-alert variant="warning" open closable duration="10000">
                <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
                <strong>Duplicate Review IDs</strong><br>
                The following review IDs appear multiple times: ${duplicates.join(", ")}<br>
                Reviews with the same ID will share the same state.
            </sl-alert>
        `;
    $("body").append(alert_html);
  }
}
function update_review_visual_state($review_element, state) {
  const $accept_icon = $review_element.find(".review-accept-icon");
  const $reject_icon = $review_element.find(".review-reject-icon");
  const $comment_icon = $review_element.find(".review-comment-icon");
  $accept_icon.removeClass("review-icon-active");
  $reject_icon.removeClass("review-icon-active");
  $comment_icon.removeClass("review-icon-active");
  const $proposal = $review_element.find(".review-proposal");
  const $original = $review_element.find(".review-original");
  $proposal.removeClass("review-state-accepted review-state-rejected review-state-comment");
  $original.removeClass("review-state-accepted review-state-rejected review-state-comment");
  if (state.accept) {
    $accept_icon.addClass("review-icon-active");
    $proposal.addClass("review-state-accepted");
    $original.addClass("review-state-accepted");
  } else if (state.reject) {
    $reject_icon.addClass("review-icon-active");
    $proposal.addClass("review-state-rejected");
    $original.addClass("review-state-rejected");
  } else if (state.comment) {
    $comment_icon.addClass("review-icon-active");
    $proposal.addClass("review-state-comment");
    $original.addClass("review-state-comment");
  }
}
function toggle_view($review_element) {
  const $proposal = $review_element.find(".review-proposal");
  const $original = $review_element.find(".review-original");
  const $toggle_icon = $review_element.find(".review-toggle-icon");
  const showing_proposal = $proposal.is(":visible");
  if (showing_proposal) {
    $proposal.hide();
    $original.show();
    $toggle_icon.attr("name", "arrow-clockwise");
    $toggle_icon.closest("sl-tooltip").attr("content", "View proposal");
  } else {
    $original.hide();
    $proposal.show();
    $toggle_icon.attr("name", "eye");
    $toggle_icon.closest("sl-tooltip").attr("content", "View original");
  }
}
function handle_accept(review_id, $review_element) {
  const state = load_review_state(review_id);
  if (state.accept) {
    save_review_state(review_id, {});
    update_review_visual_state($review_element, {});
  } else {
    const new_state = { accept: true };
    save_review_state(review_id, new_state);
    update_review_visual_state($review_element, new_state);
  }
}
function handle_reject(review_id, $review_element) {
  const state = load_review_state(review_id);
  if (state.reject) {
    save_review_state(review_id, {});
    update_review_visual_state($review_element, {});
  } else {
    const new_state = { reject: true };
    save_review_state(review_id, new_state);
    update_review_visual_state($review_element, new_state);
  }
}
function save_comment(review_id, note_text, $review_element) {
  if (!note_text.trim()) {
    save_review_state(review_id, {});
    update_review_visual_state($review_element, {});
    return;
  }
  const new_state = {
    comment: true,
    note: note_text
  };
  save_review_state(review_id, new_state);
  update_review_visual_state($review_element, new_state);
}
function handle_comment(review_id, $review_element) {
  const state = load_review_state(review_id);
  const existing_note = state.note || "";
  const dialog_html = `
        <sl-dialog label="Add Review Comment" class="review-comment-dialog" data-review-id="${review_id}">
            <p>Add notes or suggestions for this change:</p>

            <sl-textarea
                placeholder="Enter your review notes here..."
                rows="5"
                class="review-comment-textarea"
                value="${existing_note.replace(/"/g, "&quot;")}"></sl-textarea>

            <div slot="footer">
                <sl-button variant="default" class="review-dialog-cancel">Cancel</sl-button>
                <sl-button variant="primary" class="review-dialog-save">Save Comment</sl-button>
            </div>
        </sl-dialog>
    `;
  $(`.review-comment-dialog[data-review-id="${review_id}"]`).remove();
  $("body").append(dialog_html);
  setTimeout(() => {
    const $dialog = $(`.review-comment-dialog[data-review-id="${review_id}"]`);
    const dialog_element = $dialog.get(0);
    if (dialog_element && typeof dialog_element.show === "function") {
      dialog_element.show();
    }
    $dialog.find(".review-dialog-cancel").on("click", function() {
      if (dialog_element && typeof dialog_element.hide === "function") {
        dialog_element.hide();
      }
    });
    $dialog.find(".review-dialog-save").on("click", function() {
      const $textarea = $dialog.find(".review-comment-textarea");
      const textarea_element = $textarea.get(0);
      const note_text = textarea_element ? textarea_element.value : "";
      save_comment(review_id, note_text, $review_element);
      if (dialog_element && typeof dialog_element.hide === "function") {
        dialog_element.hide();
      }
    });
    setTimeout(() => {
      const $textarea = $dialog.find(".review-comment-textarea");
      const textarea_element = $textarea.get(0);
      if (textarea_element) {
        textarea_element.value = existing_note;
      }
    }, 100);
  }, 50);
}
function reprocess_custom_tags($review_element) {
  const $setting_tags = $review_element.find("setting");
  const $pin_tags = $review_element.find("pin");
  const $versioned_tags = $review_element.find("versioned");
  if (typeof window.reprocess_setting_tags === "function") {
    window.reprocess_setting_tags($setting_tags);
  }
  if (typeof window.reprocess_pin_tags === "function") {
    window.reprocess_pin_tags($pin_tags);
  }
  if (typeof window.reprocess_versioned_tags === "function") {
    window.reprocess_versioned_tags($versioned_tags);
  }
}
function build_review_structure($review_element) {
  const review_id = $review_element.attr("id") || "";
  const $proposal = $review_element.find("proposal");
  const $original = $review_element.find("original");
  if (review_id) {
    validate_review_id(review_id);
  }
  const proposal_contents = $proposal.contents().clone();
  const original_contents = $original.contents().clone();
  const localhost = is_localhost();
  if (!localhost) {
    $review_element.empty().append(original_contents);
    $review_element.attr("data-production", "true");
    return;
  }
  const state = load_review_state(review_id);
  let state_class = "";
  if (state.accept) {
    state_class = "review-state-accepted";
  } else if (state.reject) {
    state_class = "review-state-rejected";
  } else if (state.comment) {
    state_class = "review-state-comment";
  }
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
                        class="review-icon review-accept-icon ${state.accept ? "review-icon-active" : ""}">
                    </sl-icon-button>
                </sl-tooltip>

                <!-- Reject icon -->
                <sl-tooltip content="Reject this change">
                    <sl-icon-button
                        name="x-circle"
                        label="Reject"
                        class="review-icon review-reject-icon ${state.reject ? "review-icon-active" : ""}">
                    </sl-icon-button>
                </sl-tooltip>

                <!-- Comment icon -->
                <sl-tooltip content="Add comment/note">
                    <sl-icon-button
                        name="chat-left-text"
                        label="Comment"
                        class="review-icon review-comment-icon ${state.comment ? "review-icon-active" : ""}">
                    </sl-icon-button>
                </sl-tooltip>
            </div>
        </div>
    `;
  const $wrapper = $('<div class="review-container"></div>').attr("data-review-id", review_id);
  const $controls = $(icons_html);
  const $content = $('<div class="review-content"></div>');
  const $proposal_container = $('<div class="review-proposal"></div>').addClass(state_class);
  const $original_container = $('<div class="review-original"></div>').addClass(state_class).hide();
  $proposal_container.append(proposal_contents);
  $original_container.append(original_contents);
  $content.append($proposal_container).append($original_container);
  $wrapper.append($controls).append($content);
  $review_element.empty().append($wrapper);
  const $container = $review_element.find(".review-container");
  $container.find(".review-toggle-icon").on("click", function() {
    toggle_view($review_element);
  });
  $container.find(".review-accept-icon").on("click", function() {
    handle_accept(review_id, $review_element);
  });
  $container.find(".review-reject-icon").on("click", function() {
    handle_reject(review_id, $review_element);
  });
  $container.find(".review-comment-icon").on("click", function() {
    handle_comment(review_id, $review_element);
  });
  reprocess_custom_tags($review_element);
}
function initialize_review_tags() {
  const $review_tags = $("review");
  if ($review_tags.length === 0) {
    return;
  }
  detect_duplicate_review_ids();
  $review_tags.each(function() {
    build_review_structure($(this));
  });
}
$(document).ready(function() {
  initialize_review_tags();
});
