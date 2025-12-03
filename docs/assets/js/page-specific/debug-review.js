// src/site/page-specific/debug-review.ts
var STORAGE_KEY = "smoothieware_reviews";
function is_debug_review_page() {
  const path = window.location.pathname;
  return path === "/debug-review" || path === "/debug-review/" || path === "/debug-review.html";
}
function display_review_data() {
  const json_element = document.getElementById("review-json");
  if (!json_element) {
    return;
  }
  const reviews_raw = localStorage.getItem(STORAGE_KEY) ?? "{}";
  const reviews = JSON.parse(reviews_raw);
  if (Object.keys(reviews).length === 0) {
    json_element.textContent = "(No review data yet - interact with reviews above to see data here)";
  } else {
    json_element.textContent = JSON.stringify(reviews, null, 2);
  }
}
function show_feedback(message, variant = "success") {
  const feedback = document.getElementById("action-feedback");
  if (!feedback) {
    return;
  }
  const icon_name = variant === "success" ? "check-circle" : "info-circle";
  feedback.innerHTML = `
        <sl-alert variant="${variant}" open closable>
            <sl-icon slot="icon" name="${icon_name}"></sl-icon>
            ${message}
        </sl-alert>
    `;
  setTimeout(() => {
    const alert = feedback.querySelector("sl-alert");
    if (alert) {
      alert.hide();
    }
  }, 3000);
}
function setup_refresh_button() {
  const button = document.getElementById("refresh-data-button");
  if (!button) {
    return;
  }
  button.addEventListener("click", () => {
    display_review_data();
    show_feedback("Review data refreshed");
  });
}
function setup_export_button() {
  const button = document.getElementById("export-data-button");
  if (!button) {
    return;
  }
  button.addEventListener("click", async () => {
    const reviews = localStorage.getItem(STORAGE_KEY) ?? "{}";
    try {
      await navigator.clipboard.writeText(reviews);
      show_feedback("Review JSON copied to clipboard!");
    } catch (error) {
      show_feedback("Failed to copy to clipboard. Check console for data.", "warning");
      console.log("Review data:", reviews);
    }
  });
}
function setup_storage_listener() {
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      display_review_data();
    }
  });
}
function setup_periodic_refresh() {
  setInterval(display_review_data, 2000);
}
function init() {
  if (!is_debug_review_page()) {
    return;
  }
  display_review_data();
  setup_refresh_button();
  setup_export_button();
  setup_storage_listener();
  setup_periodic_refresh();
}
document.addEventListener("DOMContentLoaded", init);
