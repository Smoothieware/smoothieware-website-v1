// src/site/version-selector-modal.ts
import $ from "jquery";

// src/site/lib/config.ts
var CONFIG_STORAGE_KEY = "configuration";
var DEFAULT_CONFIG = {
  display_version: "nc"
};
function load_configuration() {
  try {
    const raw_config = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (!raw_config) {
      return { ...DEFAULT_CONFIG };
    }
    const parsed_config = JSON.parse(raw_config);
    return {
      ...DEFAULT_CONFIG,
      ...parsed_config
    };
  } catch (error) {
    console.error("[config.ts] Error loading configuration from localStorage:", error);
    return { ...DEFAULT_CONFIG };
  }
}
function save_configuration(config) {
  try {
    const json_config = JSON.stringify(config);
    localStorage.setItem(CONFIG_STORAGE_KEY, json_config);
  } catch (error) {
    console.error("[config.ts] Error saving configuration to localStorage:", error);
  }
}
function get_display_version() {
  const config = load_configuration();
  return config.display_version;
}
function set_display_version(version) {
  const config = load_configuration();
  config.display_version = version;
  save_configuration(config);
}
function is_version_not_configured() {
  return get_display_version() === "nc";
}

// src/site/version-selector-modal.ts
var version_modal_element = null;
function create_modal_html() {
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
  $("body").append(modal_html);
  version_modal_element = document.getElementById("version-selector-modal");
}
function show_modal() {
  if (!version_modal_element) {
    console.error("[version-selector-modal.ts] Modal element not found");
    return;
  }
  const dialog = version_modal_element;
  if (dialog.show) {
    dialog.show();
  }
}
function hide_modal() {
  if (!version_modal_element) {
    return;
  }
  const dialog = version_modal_element;
  if (dialog.hide) {
    dialog.hide();
  }
}
function handle_version_selection(version) {
  set_display_version(version);
  hide_modal();
  const $button = $("#version-selector-button");
  $button.attr("data-version", version);
  $(document).trigger("version-changed", [version]);
}
function setup_modal_handlers() {
  $(".version-modal-option").on("click", function() {
    const $button = $(this);
    const selected_version = $button.attr("data-version");
    handle_version_selection(selected_version);
  });
  $(".version-modal-skip").on("click", function() {
    handle_version_selection("both");
  });
  if (version_modal_element) {
    version_modal_element.addEventListener("sl-request-close", (event) => {
      const custom_event = event;
      if (custom_event.detail?.source === "overlay" || custom_event.detail?.source === "keyboard") {
        event.preventDefault();
      }
    });
  }
}
function create_reset_button() {
  if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
    return;
  }
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
  $("body").append(reset_button_html);
  $("#version-reset-button").on("click", function() {
    set_display_version("nc");
    const $button = $("#version-selector-button");
    $button.attr("data-version", "nc");
    $(document).trigger("version-changed", ["nc"]);
    window.location.reload();
  });
}
function is_landing_page() {
  const pathname = window.location.pathname.toLowerCase();
  return pathname.includes("landing");
}
function initialize_version_modal() {
  if (is_landing_page()) {
    return;
  }
  create_modal_html();
  setup_modal_handlers();
  if (is_version_not_configured()) {
    setTimeout(() => {
      show_modal();
    }, 100);
  }
  create_reset_button();
}
$(document).ready(function() {
  setTimeout(() => {
    initialize_version_modal();
  }, 50);
});
