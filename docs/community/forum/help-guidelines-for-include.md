---
permalink: /help-guidelines-for-include
---

# Help Guidelines

General advice when asking for help from the Smoothieware community.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Read These Guidelines Before Asking for Help</strong>
  <br><br>
  Following these guidelines will help you get faster and better answers to your questions. It shows respect for the volunteers who help support the project.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<div id="be-nice-container" style="position: relative; margin-top: 20px;">
  <sl-alert id="be-nice-alert" variant="success" open>
    <sl-icon slot="icon" name="heart-fill"></sl-icon>
    <div style="text-align: center;">
      <span style="font-size: 48px; font-weight: bold;">BE NICE</span>
    </div>
  </sl-alert>
  <canvas id="be-nice-fireworks-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10;"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/fireworks-js@2.10.8/dist/index.umd.min.js"></script>
<script>
(function() {
  const container = document.getElementById('be-nice-container');
  const alert = document.getElementById('be-nice-alert');
  const canvas = document.getElementById('be-nice-fireworks-canvas');

  let fireworks = null;
  let isHovering = false;
  let launchInterval = null;
  let autoStopTimeout = null;

  // Pick a hue range with weights: ~45% blue, ~45% orange, ~10% yellow-orange
  function pickHueRange() {
    const r = Math.random();
    if (r < 0.45) {
      return { min: 200, max: 240 };  // Blues: ~200-240°
    } else if (r < 0.90) {
      return { min: 25, max: 40 };    // Oranges: ~25-40°
    } else {
      return { min: 45, max: 55 };    // Yellow-oranges: ~45-55° (near 60° is yellow)
    }
  }

  // Launch fireworks in a chosen hue
  function launchWeighted(count) {
    if (count < 1) return;
    const hueRange = pickHueRange();
    fireworks.updateOptions({ hue: hueRange });
    fireworks.launch(count);
  }

  // Initialize fireworks
  function initFireworks() {
    if (!fireworks) {
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
        lineStyle: 'round',
        hue: { min: 200, max: 240 },  // Start with blue
        delay: {
          min: 15,
          max: 30
        },
        rocketsPoint: {
          min: 50,
          max: 50
        },
        lineWidth: {
          explosion: {
            min: 1,
            max: 3
          },
          trace: {
            min: 1,
            max: 2
          }
        },
        brightness: {
          min: 50,
          max: 80
        },
        decay: {
          min: 0.015,
          max: 0.03
        },
        mouse: {
          click: false,
          move: false,
          max: 1
        }
      });
    }
  }

  // Start fireworks
  function startFireworks() {
    initFireworks();
    fireworks.start();

    // Launch one firework every 200ms with weighted colors
    if (!launchInterval) {
      launchInterval = setInterval(function() {
        launchWeighted(1);
      }, 200);
    }
  }

  // Stop fireworks
  function stopFireworks() {
    if (launchInterval) {
      clearInterval(launchInterval);
      launchInterval = null;
    }
    if (fireworks) {
      fireworks.stop();
    }
  }

  // Start fireworks on hover
  alert.addEventListener('mouseenter', function() {
    isHovering = true;

    // Clear any pending auto-stop timeout
    if (autoStopTimeout) {
      clearTimeout(autoStopTimeout);
      autoStopTimeout = null;
    }

    startFireworks();
  });

  // Stop fireworks when mouse leaves (only if not in auto-play period)
  alert.addEventListener('mouseleave', function() {
    isHovering = false;
    stopFireworks();
  });

  // Auto-start fireworks for 15 seconds after page load
  window.addEventListener('load', function() {
    startFireworks();

    // Stop after 15 seconds, unless hovering
    autoStopTimeout = setTimeout(function() {
      if (!isHovering) {
        stopFireworks();
      }
      autoStopTimeout = null;
    }, 15000);  // 15 seconds
  });
})();
</script>
{:/nomarkdown}

## Before You Ask

- **Please read the [Troubleshooting](troubleshooting) section** before you ask for help, in case your question is answered there.

- A lot of questions have already been asked in the past. It might be worth it searching the forum for an answer to your question. The wiki may also have the answer you are searching for.

- Before posting about your problem, please make sure you are using the latest firmware and config, as well as the latest version of your host software.

## When Posting Your Question

- **Please mention your board type, OS, machine type, and any other useful information.**

- **Always include your configuration file.** It's likely if you don't post your configuration file, you will be asked for it, so save everyone (including you) some time and just post your config file right away with your first post.

- **NEVER paste the config directly in the forum.** Instead, paste it to [Pastebin](http://pastebin.com), and share the link in the forum. This keeps posts clean and readable.

- If your problem has anything to do with files or config not being taken into account, please format your [SD card](sd-card), start with a fresh config file example and most recent firmware and port your config over, then try again.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Note About MKS, AZSMZ and other clone Boards</strong>
  <br><br>
  If you are using a MKS or an AZSMZ board, or some other type of clone board, <strong>please</strong> note that those boards are toxic to the community and project.
  <br><br>
  As such, <strong>we respectfully request</strong> in the nicest fashion possible, that you first contact the seller of the clone board for help before (not instead of) asking in the forum or anywhere else in the community, then after you have done this, you can ask the smoothie community for help of course, this isn't about preventing you from asking for help, just about making sure the sellers of boards that are toxic to the project at the very least do their part, by having these sorts of questions asked first. We believe it makes sense to request this, and we find most users tend to agree. We'd greatly appreciate it.
  <br><br>
  Community members generally do not want to help companies that hurt the project we are all building. Please read <a href="troubleshooting#somebody-refused-to-help-me-because-my-board-is-a-mks-what-s-that-all-about">this explanation</a> before posting.
</sl-alert>
{:/nomarkdown}

## Using Pastebin

Instead of pasting your full configuration file or large portions of it, you can go to the [Pastebin.com](http://www.pastebin.com) website.

There you can post your config options, submit, and get a sharable link.

You can then give us your link instead of the configuration options. This is cleaner and easier for the persons trying to help you.

Alternatively, you can use the proper tags to "pack" your config file in a way where it is not completely displayed and users have to "expand" it, see forum formatting documentation.

## Reporting Bugs

If you have discovered a bug (and only if you have discovered a bug), you can report it as an "issue" on GitHub so the developers know about it and volunteers can try to work on solving it.

Before posting an issue please read [these guidelines](https://github.com/smoothieware/smoothieware/blob/edge/issue_template.md).
