---
permalink: /feed-hold
title: Feed Hold and Cycle Start
---

# Feed Hold and Cycle Start

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="construction"></sl-icon>
  <strong>Smoothieware V2, work in progress:</strong> The commands described here are implemented in the V2 source checked at commit <a href="https://github.com/Smoothieware/SmoothieV2/commit/2a21c0108b1d095ecd8b2b9358e94055f053c003"><code>2a21c010</code></a>. The Fall 2026 announcement still describes feed hold as work in progress. An installed firmware build may predate it.
</sl-alert>
{:/nomarkdown}

Feed hold pauses queued motion without waiting for the planner queue to empty. Send the real-time character `!` to start the hold. Send `~` to resume motion.

| Character | Name | Result |
|-----------|------|--------|
| `!` | Feed hold | Smoothie reduces the step-ticker rate until motion stops, then reports the `Hold` state |
| `~` | Cycle start | Smoothie raises the rate again and continues the interrupted motion |

These are single real-time characters. Do not add a newline and do not place them inside a G-code file.

## How the hold stops motion

The hold starts as soon as the console receives `!`; it does not wait for buffered moves to finish. Smoothie decelerates by reducing the step-ticker frequency, so the tool still travels some distance before stopping. `~` accelerates the same motion back to its normal rate.

During the held state:

- The GRBL-style `?` status query reports `Hold`.
- The laser module turns the laser output off.
- An SD-card job stops feeding more commands into the planner.
- Smoothie sends `// action:feedhold` to its consoles so a connected host can pause its own sender. Host support for this message varies.

## Limits

- Smoothie ignores `!` while the machine is idle.
- Smoothie does not start feed hold during continuous jog mode. Stop a continuous `$J -c` jog with `$J STOP`.
- A command that has switched the connection into an input-capture mode, such as `ed` or `le`, can consume these characters before the real-time handler sees them. Exit the editor first.
- `~` resumes a feed hold only. It does not clear a halt, recover an emergency stop, or replace `M601` after a suspend operation.

## Choosing the right stop command

Feed hold preserves the active motion and allows it to resume. Use [suspend and resume](/stopping-smoothie#suspend-command-suspend--m600) for a planned SD-card or streamed-job interruption that may include heater handling and jogging. Use a hardware emergency-stop circuit or Smoothie's [kill controls](/emergencystop) when safety requires power removal or a non-resumable halt.

See [Stopping Smoothie](/stopping-smoothie) for a side-by-side comparison.

## Source

- [`Consoles.cpp`](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L303-L315) receives `!` and `~`.
- [`StepTicker.cpp`](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/StepTicker.cpp#L202-L267) implements deceleration, hold, and acceleration.
- [`Laser.cpp`](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/laser/Laser.cpp#L290-L293) disables laser output during the hold.
