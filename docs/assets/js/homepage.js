// src/site/page-specific/homepage.ts
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

// src/site/page-specific/homepage.ts
var V1_IMAGE = "/images/smoothieboard-fritzing-blue.png";
var V2_IMAGE = "/images/v2-prime-render.png";
function is_homepage() {
  const path = window.location.pathname;
  return path === "/" || path === "/index.html" || path === "/index";
}
function init_fireworks() {
  const alert = document.getElementById("v2-announcement");
  const canvas = document.getElementById("fireworks-canvas");
  if (!alert || !canvas) {
    return;
  }
  if (typeof Fireworks === "undefined") {
    console.warn("[homepage.ts] Fireworks library not loaded");
    return;
  }
  let fireworks = null;
  let is_hovering = false;
  let launch_interval = null;
  function pick_hue_range() {
    const r = Math.random();
    if (r < 0.45) {
      return { min: 200, max: 240 };
    }
    if (r < 0.9) {
      return { min: 25, max: 40 };
    }
    return { min: 45, max: 55 };
  }
  function launch_weighted(count) {
    if (count < 1 || !fireworks) {
      return;
    }
    const hue_range = pick_hue_range();
    fireworks.updateOptions({ hue: hue_range });
    fireworks.launch(count);
  }
  function init_fireworks_instance() {
    if (fireworks) {
      return;
    }
    fireworks = new Fireworks.default(canvas, {
      autoresize: true,
      opacity: 0.8,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 80,
      traceLength: 3,
      traceSpeed: 10,
      explosion: 5,
      flickering: 50,
      lineStyle: "round",
      hue: { min: 200, max: 240 },
      delay: { min: 15, max: 30 },
      rocketsPoint: { min: 50, max: 50 },
      lineWidth: {
        explosion: { min: 1, max: 3 },
        trace: { min: 1, max: 2 }
      },
      brightness: { min: 50, max: 80 },
      decay: { min: 0.015, max: 0.03 },
      mouse: { click: false, move: false, max: 1 }
    });
  }
  alert.addEventListener("mouseenter", () => {
    is_hovering = true;
    init_fireworks_instance();
    if (fireworks) {
      fireworks.start();
    }
    launch_interval = setInterval(() => {
      if (is_hovering) {
        launch_weighted(1);
      }
    }, 200);
  });
  alert.addEventListener("mouseleave", () => {
    is_hovering = false;
    if (launch_interval) {
      clearInterval(launch_interval);
      launch_interval = null;
    }
    if (fireworks) {
      fireworks.stop();
    }
  });
}
function update_board_image() {
  const version = get_display_version();
  const $img = $("#board-image");
  const $link = $("#board-image-link");
  if (!$img.length || !$link.length) {
    return;
  }
  if (version === "v1") {
    $img.attr("src", V1_IMAGE);
    $link.attr("href", V1_IMAGE);
    $img.attr("alt", "Smoothieboard V1");
  } else {
    $img.attr("src", V2_IMAGE);
    $link.attr("href", V2_IMAGE);
    $img.attr("alt", "Smoothieboard V2 Prime");
  }
}
function init_board_image_switcher() {
  update_board_image();
  $(document).on("version-changed", update_board_image);
}
function init() {
  if (!is_homepage()) {
    return;
  }
  init_fireworks();
  init_board_image_switcher();
}
$(document).ready(init);
