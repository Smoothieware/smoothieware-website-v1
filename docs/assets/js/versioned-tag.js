// src/site/versioned-tag.ts
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
function get_display_version() {
  const config = load_configuration();
  return config.display_version;
}

// src/site/versioned-tag.ts
function update_all_versioned_tags_visibility() {
  const display_version = get_display_version();
  const $all_versioned = $("versioned");
  $all_versioned.each(function() {
    const $element = $(this);
    const demo_value = $element.attr("demo");
    if (demo_value !== undefined) {
      const demo_display = demo_value === "" ? "both" : demo_value;
      $element.attr("data-display-version", demo_display);
    } else {
      $element.attr("data-display-version", display_version);
    }
  });
  console.log(`[versioned-tag.ts] Updated all versioned tag visibility for display_version: ${display_version}`);
}
$(() => {
  console.log("[versioned-tag.ts] Initializing versioned tag handlers");
  const $versioned_elements = $("versioned");
  if ($versioned_elements.length === 0) {
    console.log("[versioned-tag.ts] No versioned tags found on this page");
    return;
  }
  console.log(`[versioned-tag.ts] Found ${$versioned_elements.length} versioned tag(s)`);
  update_all_versioned_tags_visibility();
  $(document).on("version-changed", function() {
    update_all_versioned_tags_visibility();
  });
  $(document).on("click", "v1, v2", function(event) {
    const version_selector_dropdown = document.getElementById("version-selector-dropdown");
    if (!version_selector_dropdown) {
      console.warn("[versioned-tag.ts] Version selector dropdown not found");
      return;
    }
    if (typeof version_selector_dropdown.show === "function") {
      version_selector_dropdown.show();
      console.log("[versioned-tag.ts] Opened version selector dropdown");
    } else {
      console.warn("[versioned-tag.ts] Version selector dropdown does not have show() method");
    }
    event.stopPropagation();
  });
  console.log("[versioned-tag.ts] Click handlers attached to v1 and v2 elements");
});
