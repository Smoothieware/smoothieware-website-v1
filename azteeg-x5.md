
# Super Quick Start Up Guide

## Things you'll need

- micro SD card - 2 or 4 GB cards are known to work well
- USB cable - mini B

The Azteeg X5 mini comes pre-flashed with a bootloader.

1. Download the latest firmware from [Smoothieware Edge FirmwareBin](https://github.com/Smoothieware/Smoothieware/tree/edge/FirmwareBin).
2. Get the config file for the Azteeg X5 mini from Github - [AzteegX5Mini](https://github.com/Smoothieware/Smoothieware/tree/edge/ConfigSamples/AzteegX5Mini) or [AzteegX5Mini.delta](https://github.com/Smoothieware/Smoothieware/tree/edge/ConfigSamples/AzteegX5Mini.delta).
3. Copy both `firmware.bin` and the config file to your SD card, then safely remove the card from your computer.
4. Insert the SD card into the Azteeg X5 mini card slot and plug in your USB cable. (Make sure the INPUT SEL jumper is on USB if powering from USB).
5. The X5 mini will boot and read the files on the card looking for new firmware. LEDs will count up and then start flashing to indicate that Smoothieware is now running.
6. You may now connect to Smoothie with [Pronterface](pronterface.md) or Repetier Host at any baud rate. If using Windows, you will need to install an inf serial driver for it to recognize the "Smoothie-serial" showing up on your PC. [Windows Drivers](http://smoothieware.org/windows-drivers). Mac OS/X and Linux have the drivers built in. You can ignore any messages about missing DFU drivers.
7. **Install micro stepping jumpers before attempting to move motors** - See [Wiring Diagram](http://files.panucatt.com/datasheets/x5mini_wiring.pdf) for jumper details.

You can also connect to the X5 with any serial console program, which should be set to local echo and Linefeed line endings. Typing `help` will show a list of console commands available, useful commands are:
- `version` - which shows the current smoothie version
- `ls /sd` - which lists the files on the sd card
- `play /sd/file` - which will print the file from the sd card

- The Viki 2 LCD is plug-and-play with the v2 board. To use the original VIKI LCD, you will have to use a hack (using a 3$ minipro arduino) [Universal Panel Adapter](https://github.com/wolfmanjm/universal-panel-adapter).
- The output of the fan connector is 2.4
