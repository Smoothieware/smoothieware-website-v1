---
permalink: /playled
---


# Play LED

The Play LED is a visual indicator that shows when Smoothieboard is actively executing G-code from a file.

This is useful for knowing at a glance whether your machine is running a job.

## What Does the Play LED Do?

The Play LED:

- **Turns ON** when a file is being played from the SD card
- **Turns OFF** when no file is being executed
- **Provides visual feedback** without needing to check a screen or computer

This is particularly helpful when you want to quickly check if a long print job is still running from across the room.

## LED Tactile Button Option

You can solder an [LED Tactile Button](https://www.sparkfun.com/products/10442) directly onto the Smoothieboard.

This provides both a visual indicator (LED) and a button for controlling playback.

{::nomarkdown}
<a href="/images/recovered/led-tactile-button.png">
  <img src="/images/recovered/led-tactile-button.png" alt="LED Tactile Button mounted on Smoothieboard" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}

### Features of LED Tactile Button

- **Integrated LED**: Shows play status
- **Button function**: Can be programmed to start/stop/pause execution
- **Easy installation**: Solders directly to designated pads on the board
- **Low profile**: Doesn't take up much space

## Simple LED Option

Alternatively, you can wire a simple LED to two pins on the board.

This is a more basic solution that only provides the visual indicator without a button.

{::nomarkdown}
<a href="/images/temporary/led-indicator-generic.jpg">
  <img src="/images/temporary/led-indicator-generic.jpg" alt="Simple LED wired to Smoothieboard pins" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}

### Simple LED Requirements

- **Standard LED**: Any 5mm or 3mm LED will work
- **Current limiting resistor**: Typically 330Ω to 1kΩ
- **Two wire connection**: Connect to the designated play LED pins
- **Polarity matters**: LED must be connected with correct polarity (anode to positive, cathode to negative)

## Configuration

To enable and configure the play LED in your config file:

```
# Play LED configuration
play_led_disable                         false              # Enable the play LED
leds_disable                             false              # Enable LED support
```

The play LED will automatically turn on when a file is being executed from the SD card.

## Related Documentation

- [Kill Button](killbutton) - Emergency stop button
- [Panel](panel) - LCD panels with built-in indicators
- [SD Card](sd-card) - Playing files from SD card
- [Player](player) - File player module
