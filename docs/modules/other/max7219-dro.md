---
permalink: /max7219-dro
title: MAX7219 DRO
---

# MAX7219 Digital Readout

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieware V2 only:</strong> The MAX7219 and DRO modules are present in the V2 source checked at commit <a href="https://github.com/Smoothieware/SmoothieV2/commit/2a21c0108b1d095ecd8b2b9358e94055f053c003"><code>2a21c010</code></a>. An installed firmware build may predate them.
</sl-alert>
{:/nomarkdown}

The DRO module shows live X, Y, Z, A, B, or C positions on eight-digit seven-segment displays driven by MAX7219 chips. It supports a chain of displays on one chip-select line or separate chip-select lines for individual modules.

The driver uses software SPI. Each display shows a signed value with three digits after the decimal point.

## Wiring

| MAX7219 signal | Smoothie setting | Purpose |
|----------------|-------------------|---------|
| CLK | `clk` | Serial clock output |
| DIN | `mosi` | Serial data output |
| CS or LOAD | `cs` or `axis.cs_pin` | Latches data for one display or a chain |
| VCC | Module supply | Use the voltage required by the display module |
| GND | Ground | Join display and Smoothie grounds |

Check the electrical levels and current requirement of your display module before connecting it. Large LED modules may need a separate regulated supply with a common ground.

## Cascaded displays

Set `cascaded` to the number of daisy-chained MAX7219 devices and provide one `cs` pin. Assign a zero-based display `id` to each axis:

```ini
[max7219]
enable = true
clk = PJ7
mosi = PE8
cascaded = 3
cs = PJ8

[dro]
common.enable = true
common.poll_frequency_hz = 10
x.enable = true
x.id = 0
y.enable = true
y.id = 1
z.enable = true
z.id = 2
```

The physical order of a daisy chain determines which module uses each ID. If the axes appear on the wrong displays, change the `id` assignments.

## One chip-select per display

Omit `cascaded` and `cs` from `[max7219]`. Give each enabled axis its own chip-select pin:

```ini
[max7219]
enable = true
clk = PJ7
mosi = PE8

[dro]
common.enable = true
common.poll_frequency_hz = 10
x.enable = true
x.cs_pin = PJ8
y.enable = true
y.cs_pin = PD15
z.enable = true
z.cs_pin = PA5
```

Do not mix `id` and `cs_pin` addressing. In cascaded mode, use `id`; in individual chip-select mode, use `cs_pin`.

## Displayed coordinates

- X, Y, and Z show work-coordinate positions, including the active work-coordinate offset.
- A, B, and C show their actuator positions.
- `common.poll_frequency_hz` controls the refresh rate. The default is 10 Hz.

The axis subsection name must be one of `x`, `y`, `z`, `a`, `b`, or `c`. The corresponding actuator must exist for A, B, or C.

## Troubleshooting

### No display starts

- Confirm `[max7219] enable = true` and `[dro] common.enable = true`.
- Check that `clk`, `mosi`, and every required chip-select pin are valid and unused.
- In cascaded mode, `cascaded` must be zero or at least two. Use individual chip-select mode for one display.

### A display stays blank

- Cascaded mode requires a numeric `axis.id` within the configured chain.
- Individual mode requires a valid `axis.cs_pin`.
- Check the daisy-chain direction and the DIN/DOUT connections between modules.

## Source

- [MAX7219 driver](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/display/max7219/max7219.cpp)
- [DRO module](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/dro/dro.cpp)
