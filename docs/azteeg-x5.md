# Super Quick Start Up Guide

{::nomarkdown}
<a href="/images/board.png">
  <img src="/images/board.png" alt="Board" style="width: 300px; height: 300px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

## Things you'll need

- Micro SD card (2 or 4 GB cards are known to work well)
- USB cable (mini B)

The Azteeg X5 mini comes pre-flashed with a bootloader, so you're ready to get started quickly.

## Installation Steps

1. **Download the latest firmware** from [Smoothieware Edge FirmwareBin](https://github.com/Smoothieware/Smoothieware/tree/edge/FirmwareBin).

2. **Get the config file** for the Azteeg X5 mini from Github:
   - [AzteegX5Mini](https://github.com/Smoothieware/Smoothieware/tree/edge/ConfigSamples/AzteegX5Mini) for Cartesian machines
   - [AzteegX5Mini.delta](https://github.com/Smoothieware/Smoothieware/tree/edge/ConfigSamples/AzteegX5Mini.delta) for Delta machines

3. **Copy files to SD card**: Copy both `firmware.bin` and the config file to your SD card, then safely remove the card from your computer.

4. **Insert and power on**: Insert the SD card into the Azteeg X5 mini card slot and plug in your USB cable.

   {::nomarkdown}
   <sl-alert variant="warning" open>
     <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
     Make sure the INPUT SEL jumper is on USB if powering from USB.
   </sl-alert>
   {:/nomarkdown}

5. **Watch the boot sequence**: The X5 mini will boot and read the files on the card looking for new firmware. LEDs will count up and then start flashing to indicate that Smoothieware is now running.

6. **Connect to Smoothie**: You may now connect to Smoothie with [Pronterface](pronterface) or Repetier Host at any baud rate.

   If using **Windows**, you will need to install an inf serial driver for it to recognize the "Smoothie-serial" showing up on your PC. See [Windows Drivers](http://smoothieware.org/windows-drivers).

   Mac OS/X and Linux have the drivers built in. You can ignore any messages about missing DFU drivers.

7. **Install micro stepping jumpers**:

   {::nomarkdown}
   <sl-alert variant="danger" open>
     <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
     <strong>Install micro stepping jumpers before attempting to move motors!</strong> See the <a href="http://files.panucatt.com/datasheets/x5mini_wiring.pdf">Wiring Diagram</a> for jumper details.
   </sl-alert>
   {:/nomarkdown}

## Using the Serial Console

You can also connect to the X5 with any serial console program, which should be set to local echo and Linefeed line endings.

Typing `help` will show a list of console commands available. Useful commands include:

- `version` - Shows the current Smoothie version
- `ls /sd` - Lists the files on the SD card
- `play /sd/file` - Prints the file from the SD card

## LCD Panel Support

- The **Viki 2 LCD** is plug-and-play with the v2 board.
- To use the **original VIKI LCD**, you will need to use a workaround with a $3 mini pro Arduino. See the [Universal Panel Adapter](https://github.com/wolfmanjm/universal-panel-adapter) guide.

## Technical Notes

- The output of the fan connector is 2.4A
