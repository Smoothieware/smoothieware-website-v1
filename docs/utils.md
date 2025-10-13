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

## Configuration

Each utility module has its own configuration section in the config file.

For example:

```
# Player module
play_led_disable                false              # Enable play LED

# Current control
currentcontrol_module_enable    true               # Enable digital current control
```

See each individual module's documentation page for complete configuration options and examples.

## Related Documentation

- [Tools](tools) - Physical tool modules (extruders, lasers, etc.)
- [Configuration Options](configuration-options) - All configuration options
- [Console Commands](console-commands) - Available console commands
- [Index](index) - Main documentation homepage
