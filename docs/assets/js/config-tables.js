// src/site/config-tables.ts
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
function should_show_v1() {
  const version = get_display_version();
  return version === "nc" || version === "both" || version === "v1";
}
function should_show_v2() {
  const version = get_display_version();
  return version === "nc" || version === "both" || version === "v2";
}
function should_show_both() {
  const version = get_display_version();
  return version === "nc" || version === "both";
}

// src/site/config-tables.ts
function has_overflow(element) {
  return element.scrollHeight > element.clientHeight;
}
function init_overflow_detection() {
  const $description_cells = $(".config-options-table .description-cell");
  $description_cells.each(function() {
    const cell = this;
    setTimeout(function() {
      if (has_overflow(cell)) {
        $(cell).addClass("has-overflow");
      } else {
        $(cell).removeClass("has-overflow");
      }
    }, 100);
  });
}
function setup_expand_handlers() {
  $(document).on("click", ".config-options-table .description-cell", function() {
    const $cell = $(this);
    if ($cell.hasClass("has-overflow") || $cell.hasClass("expanded")) {
      $cell.toggleClass("expanded");
      if (!$cell.hasClass("expanded")) {
        const cell = this;
        if (has_overflow(cell)) {
          $cell.addClass("has-overflow");
        } else {
          $cell.removeClass("has-overflow");
        }
      }
    }
  });
}
function setup_resize_handler() {
  let resize_timeout;
  $(window).on("resize", function() {
    clearTimeout(resize_timeout);
    resize_timeout = window.setTimeout(function() {
      const $cells = $(".config-options-table .description-cell:not(.expanded)");
      $cells.each(function() {
        const cell = this;
        if (has_overflow(cell)) {
          $(cell).addClass("has-overflow");
        } else {
          $(cell).removeClass("has-overflow");
        }
      });
    }, 250);
  });
}
function update_table_visibility() {
  const display_version = get_display_version();
  const show_v1 = should_show_v1();
  const show_v2 = should_show_v2();
  const show_both = should_show_both();
  const $tables = $(".config-options-table");
  $tables.each(function() {
    const $table = $(this);
    update_header_visibility($table, show_v1, show_v2, show_both);
    update_body_rows_visibility($table, show_v1, show_v2, show_both);
  });
  setTimeout(init_overflow_detection, 150);
}
function update_header_visibility($table, show_v1, show_v2, show_both) {
  const $header_row = $table.find("thead tr");
  const $headers = $header_row.find("th");
  if ($headers.length < 3) {
    return;
  }
  const $v1_header = $headers.eq(0);
  const $v2_header = $headers.eq(1);
  const $desc_header = $headers.eq(2);
  if (show_both) {
    $v1_header.show().css("width", "25%");
    $v2_header.show().css("width", "25%");
    $desc_header.css("width", "50%");
  } else if (show_v1 && !show_v2) {
    $v1_header.show().css("width", "30%");
    $v2_header.hide();
    $desc_header.css("width", "70%");
  } else if (show_v2 && !show_v1) {
    $v1_header.hide();
    $v2_header.show().css("width", "30%");
    $desc_header.css("width", "70%");
  }
}
function update_body_rows_visibility($table, show_v1, show_v2, show_both) {
  const $rows = $table.find("tbody tr");
  $rows.each(function() {
    const $row = $(this);
    const $cells = $row.find("td");
    if ($cells.length < 3) {
      $row.show();
      return;
    }
    const $v1_cell = $cells.eq(0);
    const $v2_cell = $cells.eq(1);
    const $desc_cell = $cells.eq(2);
    const v1_is_empty = $v1_cell.hasClass("empty-cell");
    const v2_is_empty = $v2_cell.hasClass("empty-cell");
    if (show_both) {
      $row.show();
      $v1_cell.show().css("width", "25%");
      $v2_cell.show().css("width", "25%");
      $desc_cell.css("width", "50%");
    } else if (show_v1 && !show_v2) {
      $v2_cell.hide();
      if (v1_is_empty) {
        $row.hide();
      } else {
        $row.show();
        $v1_cell.show().css("width", "30%");
        $desc_cell.css("width", "70%");
      }
    } else if (show_v2 && !show_v1) {
      $v1_cell.hide();
      if (v2_is_empty) {
        $row.hide();
      } else {
        $row.show();
        $v2_cell.show().css("width", "30%");
        $desc_cell.css("width", "70%");
      }
    }
  });
}
function init_config_tables() {
  const $tables = $(".config-options-table");
  if ($tables.length === 0) {
    return;
  }
  init_overflow_detection();
  setup_expand_handlers();
  setup_resize_handler();
  update_table_visibility();
  $(document).on("version-changed", function() {
    update_table_visibility();
  });
}
$(() => {
  init_config_tables();
});
