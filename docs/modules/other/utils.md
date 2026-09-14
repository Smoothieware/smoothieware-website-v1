---
permalink: /utils
---

# Utils

Utils are miscellaneous utility modules in Smoothieware that provide helpful functionality but do not represent physical [Tools](tools) like extruders or lasers.

These modules handle system-level features like file playback, current control, configuration management, and user interface elements.

## Available Utility Modules

### File Management

- **[Player](player)** - Play G-code files from the SD card
  - Handles file execution, pausing, and resuming
  - Supports progress tracking and time estimation

### Motor Control

- **[Current Control](currentcontrol)** - Digitally control your stepper motor current
  - Adjust motor current via software instead of trimpots
  - Helps reduce motor heating and optimize performance

- **[Advanced Motor Driver](advancedmotordriver)** - Control SPI-based stepper motor controllers
  - Supports DRV8711 and TMC26X drivers
  - Provides advanced motor control features

### Configuration

- **[Configurator](configurator)** - Manipulate configuration using console commands
  - View and modify settings without editing config file
  - Useful for testing and debugging

- **[on_boot.gcode](on_boot.gcode)** - Execute G-codes every time the board boots
  - Automatically run initialization commands
  - Set default states and parameters

### User Interface

- **[Button Box](button-box)** - V2 programmable GPIO controls, macros, and named fault inputs

- **[MPG](mpg)** - V2 direct or shared manual-pulse-generator control

- **[MAX7219 DRO](max7219-dro)** - V2 multi-axis positions on seven-segment displays

- **[Kill Button](killbutton)** - Software-based emergency stop button
  - Provides instant machine halt capability
  - Can be wired to physical emergency stop button

- **[Play LED](play-led)** - Visual indicator for file playback status
  - LED turns on when executing a file
  - Helps monitor machine status from a distance

- **[Panel](panel)** - Drive Smoothie without a host computer
  - Use LCD screens and click encoders for control
  - Supports various panel types (RepRapDiscount, Viki2, etc.)

- **[Smoopi](smoopi)** - Modern touchscreen control interface
  - Color touchscreen on Raspberry Pi
  - Web-based graphical interface

### Console Utilities

- **[`ed` file editor](console-commands#ed)** - V2 streaming file editing with separate input and output files
- **[`le` command-line editor](console-commands#le)** - V2 cursor editing and per-session command history
- **[O-word subroutines](subroutines)** - V2 named command sequences stored in RAM

## Configuration



Each utility module has its own configuration section in the config file.

For example:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**

```
# Player module
play_led_disable                false              # Enable play LED

# Current control
currentcontrol_module_enable    true               # Enable digital current control
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**

```ini
# Player module
[player]
play_led_disable = false              # Enable play LED

# Current control
[current control]
enable = true                         # Enable digital current control
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



See each individual module's documentation page for complete configuration options and examples.

## Related Documentation

- [Tools](tools) - Physical tool modules (extruders, lasers, etc.)
- [Configuration Options](configuration-options) - All configuration options
- [Console Commands](console-commands) - Available console commands
- [Index](index) - Main documentation homepage
