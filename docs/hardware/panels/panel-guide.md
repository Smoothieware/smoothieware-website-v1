# Panel Guide

A panel is the combination of a screen and some kind of input method (buttons, encoder, touchscreen) attached to the machine.

This allows you to control your machine without a computer connection.

## What Can You Do With a Panel?

With a panel connected to your Smoothieboard, you can:

- **Move the machine**: Jog axes to position your tool or workpiece
- **Start print jobs**: Browse and execute files from the SD card
- **Monitor status**: View temperatures, positions, and progress
- **Adjust settings**: Change feed rates, temperatures, and other parameters
- **Emergency stop**: Quickly halt the machine if needed
- **Control accessories**: Turn fans, lights, and other devices on/off

## Supported Panel Types

Smoothieboard supports several types of panels:

### RepRapDiscount GLCD

The most common panel used with Smoothieboard.

Features a graphical LCD display with a rotary encoder for input.

### Viki2

Advanced panel with a larger screen and SD card slot.

### RepRapDiscount Full Graphic Smart Controller

Popular panel with full graphical display capabilities.

### Universal Panel Adapter

Allows connection of various panel types using a standard interface.

## Getting Started

To use a panel with your Smoothieboard:

1. **Choose your panel**: Select from the supported panel types above
2. **Wire the panel**: Connect it to your Smoothieboard (see wiring guide for your specific panel)
3. **Configure Smoothie**: Modify your config file to enable panel support
4. **Test**: Power on and verify the panel displays correctly

## Next Steps

For detailed information on wiring and configuring your specific panel type, please read the [Panel](panel) page.

That page contains:

- Detailed wiring diagrams for each panel type
- Complete configuration examples
- Troubleshooting information
- Custom menu configuration
- Screen layout customization

## Alternative: Touchscreen Control

If you prefer a touchscreen interface, consider [Smoopi](smoopi), which provides color touchscreen control using a Raspberry Pi.

Smoopi offers a modern, graphical interface with touch controls instead of traditional LCD panels.

## Related Documentation

- [Panel](panel) - Complete panel documentation with wiring and configuration
- [Smoothieboard](smoothieboard) - Main board documentation
- [Smoopi](smoopi) - Touchscreen control interface
- [SD Card](sd-card) - Managing files for printing
