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
function is_element_empty($element) {
  const text_content = $element.text();
  return !/[a-zA-Z0-9]/.test(text_content);
}
function restructure_v2_only_list_items() {
  const $v2_only_versioned = $('versioned[data-has-empty="v1"]');
  $v2_only_versioned.each(function() {
    const $versioned = $(this);
    const $parent_li = $versioned.closest("li");
    if ($parent_li.length === 0) {
      return;
    }
    const $parent_ul = $parent_li.closest("ul");
    if ($parent_ul.length === 0) {
      return;
    }
    const $v2 = $versioned.children("v2");
    if ($v2.length === 0) {
      return;
    }
    const $items = $v2.find(".versioned-list-item");
    if ($items.length === 0) {
      return;
    }
    let $insert_after = $parent_li;
    $items.each(function() {
      const $item = $(this);
      const $new_li = $("<li>").addClass("v2-only-list-item");
      $new_li.html($item.html());
      const margin_left = $item.css("margin-left") || $item.attr("style")?.match(/margin-left:\s*([^;]+)/)?.[1] || "0";
      const margin_value = parseFloat(margin_left);
      if (margin_value > 32) {
        const $sub_ul = $("<ul>").append($new_li);
        $insert_after.append($sub_ul);
      } else {
        $insert_after.after($new_li);
        $insert_after = $new_li;
      }
    });
    $versioned.remove();
  });
}
function update_all_versioned_tags_visibility() {
  const display_version = get_display_version();
  $("body").attr("data-display-version", display_version);
  const $all_versioned = $("versioned");
  $all_versioned.each(function() {
    const $element = $(this);
    const $v1 = $element.children("v1");
    const $v2 = $element.children("v2");
    const v1_is_empty = $v1.length === 0 || is_element_empty($v1);
    const v2_is_empty = $v2.length === 0 || is_element_empty($v2);
    if (v1_is_empty && !v2_is_empty) {
      $element.attr("data-has-empty", "v1");
    } else if (v2_is_empty && !v1_is_empty) {
      $element.attr("data-has-empty", "v2");
    } else {
      $element.removeAttr("data-has-empty");
    }
    const demo_value = $element.attr("demo");
    if (demo_value !== undefined) {
      const demo_display = demo_value === "" ? "both" : demo_value;
      $element.attr("data-display-version", demo_display);
    } else {
      $element.attr("data-display-version", display_version);
    }
  });
}
$(() => {
  const $versioned_elements = $("versioned");
  if ($versioned_elements.length === 0) {
    return;
  }
  update_all_versioned_tags_visibility();
  restructure_v2_only_list_items();
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
    } else {
      console.warn("[versioned-tag.ts] Version selector dropdown does not have show() method");
    }
    event.stopPropagation();
  });
});
