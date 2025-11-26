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

// src/site/version-selector.ts
import $ from "jquery";
function update_version_selector_button() {
  const display_version = get_display_version();
  const $button = $("#version-selector-button");
  $button.attr("data-version", display_version);
  const $menu_items = $(".version-menu-item");
  $menu_items.attr("data-current", "false");
  $menu_items.each(function() {
    const $item = $(this);
    const item_version = $item.attr("data-version");
    if (item_version === display_version) {
      $item.attr("data-current", "true");
    }
  });
}
function setup_version_selector_handlers() {
  $(".version-menu-item").on("click", function() {
    const $item = $(this);
    const selected_version = $item.attr("data-version");
    set_display_version(selected_version);
    update_version_selector_button();
    const $dropdown = $("#version-selector-dropdown")[0];
    if ($dropdown && $dropdown.hide) {
      $dropdown.hide();
    }
    $(document).trigger("version-changed", [selected_version]);
  });
}
$(document).ready(function() {
  update_version_selector_button();
  setup_version_selector_handlers();
});
