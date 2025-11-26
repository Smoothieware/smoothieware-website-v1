// src/site/page-specific/help-guidelines.ts
function init_be_nice_fireworks() {
  const alert = document.getElementById("be-nice-alert");
  const canvas = document.getElementById("be-nice-fireworks-canvas");
  if (!alert || !canvas) {
    return;
  }
  if (typeof Fireworks === "undefined") {
    console.warn("[help-guidelines.ts] Fireworks library not loaded");
    return;
  }
  let fireworks = null;
  let is_hovering = false;
  let launch_interval = null;
  let auto_stop_timeout = null;
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
  function start_fireworks() {
    init_fireworks_instance();
    if (fireworks) {
      fireworks.start();
    }
    if (!launch_interval) {
      launch_interval = setInterval(() => {
        launch_weighted(1);
      }, 200);
    }
  }
  function stop_fireworks() {
    if (launch_interval) {
      clearInterval(launch_interval);
      launch_interval = null;
    }
    if (fireworks) {
      fireworks.stop();
    }
  }
  alert.addEventListener("mouseenter", () => {
    is_hovering = true;
    if (auto_stop_timeout) {
      clearTimeout(auto_stop_timeout);
      auto_stop_timeout = null;
    }
    start_fireworks();
  });
  alert.addEventListener("mouseleave", () => {
    is_hovering = false;
    stop_fireworks();
  });
  start_fireworks();
  auto_stop_timeout = setTimeout(() => {
    if (!is_hovering) {
      stop_fireworks();
    }
    auto_stop_timeout = null;
  }, 15000);
}
function init() {
  init_be_nice_fireworks();
}
window.addEventListener("load", init);
