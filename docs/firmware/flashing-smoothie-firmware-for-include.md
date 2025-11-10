# Flashing Smoothie Firmware

Here is how to flash a new firmware to your Smoothieboard.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieboards come pre-flashed</strong><br><br>

  You should not <strong>need</strong> to flash your Smoothieboard when you get it. You only need to do so to update it to a newer version of the firmware if you wish or if the pre-flashed firmware is not functioning properly.<br><br>

  It is a good idea to flash your board to the latest stable version anyway when you first receive it.<br><br>

  When you upgrade to a newer version, make sure you also upgrade your <a href="configuring-smoothie">configuration file</a>, to make sure the firmware can understand it. We try very hard to maintain backwards compatibility, however in the years since the start of the project, there have been a few very rare changes, so having a very old configuration with a very recent firmware can rarely cause problems.<br><br>

  When upgrading from such a very old firmware, make sure you read <a href="https://github.com/smoothieware/smoothieware/blob/edge/upgrade-notes.md">the upgrade notes</a>.
</sl-alert>
{:/nomarkdown}

## Prerequisites

This guide presumes your Smoothieboard is already flashed with the [DFU bootloader](flashing-the-bootloader) ( it is already if you bought the board, it probably isn't if you built it yourself ).

## Step by Step

### Download

The latest bin is available at [Smoothieware FirmwareBin](https://github.com/Smoothieware/Smoothieware/tree/edge/FirmwareBin)

For detailed instructions and all the ways you can obtain a pre-made binary file or make your own, see [Getting Smoothie](getting-smoothie).

### Copy

Copy the file `firmware.bin` and `config.txt` to a micro SD card, then safely remove the SD card from your computer.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Filename</strong><br><br>

  Make sure the file is named <code>firmware.bin</code>, and not anything else.<br><br>

  Also make sure you downloaded the file itself, and not the HTML page containing it, as this would cause chaos. A good method is to check the MD5 sum for the file you downloaded ( or opening it in a web browser ).
</sl-alert>
{:/nomarkdown}

Make sure you eject the SD card from your computer properly ( "eject" in your file explorer's menus ).

### Power

Plug the SD card into the SmoothieBoard SD card slot, then plug a mini USB cable into the board. (pictures ???)

### Observe

Smoothie will boot and you should see the LEDs count up for a few seconds, then they will start flashing, at this point Smoothie has flashed the latest version of Smoothie and is running.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>SD Card Problems</strong><br><br>

  If there is a problem with the SD card, LED4 will be off.<br><br>

  If this happens, you need to format the SD card to FAT32, and if that fails, use another SD card.<br><br>

  If the LEDs do not perform the count up sequence your firmware flashing did not complete.<br><br>

  If this happens, you need to verify your formatting and naming of your files which should be:
  <ul>
    <li><code>firmware.bin</code></li>
    <li><code>config.txt</code></li>
  </ul>
</sl-alert>
{:/nomarkdown}

### Verification

You can make sure the new firmware was flashed by looking at the content of the SD card.

If the firmware was flashed successfully, the filename should have changed from `firmware.bin` to `FIRMWARE.CUR`.

The `config.txt` will always remain `config.txt`.

### Connect

You can now connect to Smoothie with [Pronterface](pronterface) ( or any other host program, see [Software](software) ) at any baud rate, look for a serial USB device on your computer.

If running Windows you may need to install the [Windows Drivers](windows-drivers).

Mac OS/X and Linux have the drivers built in.

You can ignore any messages about missing DFU drivers.

### Terminal

You can also connect to Smoothie with any serial console program, which should be set to local echo and Linefeed line endings.

Typing `help` will show a list of console commands available.

## Useful Commands

Some useful commands are:

- `version` - Shows the current Smoothie version
- `ls /sd` - Lists the files on the SD card
- `play /sd/file` - Prints the file from the SD card

More commands can be found on the [Console commands list](console-commands) and useful G-codes are in the [Supported G-codes list](supported-g-codes).
