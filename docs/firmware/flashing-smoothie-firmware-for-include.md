# Flashing Smoothie Firmware

Here is how to flash a new firmware to your Smoothieboard.

{::nomarkdown}
<review id="flashing-smoothie:pre-flashed-alert">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

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

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieboards V2 come pre-flashed</strong><br><br>

  Smoothieboard V2 (Prime) comes with firmware pre-flashed. You only need to flash if you want to update to a newer version, use a custom build, or recover from a corrupted firmware.<br><br>

  It is recommended to update to the latest stable version when you first receive your board, as it may include important bug fixes and improvements.<br><br>

  When upgrading firmware versions, ensure your configuration file is compatible with the new version. V2 uses an INI-style configuration format (different from V1). See <a href="configuring-smoothie">configuration guide</a> and <a href="https://github.com/smoothieware/smoothieware/blob/edge/upgrade-notes.md">upgrade notes</a> for details.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

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

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Prerequisites

{::nomarkdown}
<review id="flashing-smoothie:prerequisites">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

This guide presumes your Smoothieboard is already flashed with the [DFU bootloader](flashing-the-bootloader) ( it is already if you bought the board, it probably isn't if you built it yourself ).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This guide covers flashing firmware to Smoothieboard V2 (Prime) with STM32H745 microcontroller. No bootloader installation is needed (unlike V1) - V2 firmware updates are handled through the bootloader that comes pre-installed.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

This guide presumes your Smoothieboard is already flashed with the [DFU bootloader](flashing-the-bootloader) ( it is already if you bought the board, it probably isn't if you built it yourself ).

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Step by Step

{::nomarkdown}
<review id="flashing-smoothie:download-section">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### Download

The latest bin is available at [Smoothieware FirmwareBin](https://github.com/Smoothieware/Smoothieware/tree/edge/FirmwareBin)

For detailed instructions and all the ways you can obtain a pre-made binary file or make your own, see [Getting Smoothie](getting-smoothie).

### Copy

Copy the file `firmware.bin` and `config.txt` to a micro SD card, then safely remove the SD card from your computer.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

### Download V2 Firmware

Get the latest V2 firmware binary from:
- **Official builds:** [Smoothieware V2 FirmwareBin](https://github.com/Smoothieware/smoothieware-v2/releases) - Stable releases and pre-built binaries
- **Edge/dev builds:** [V2 Edge builds](https://github.com/Smoothieware/smoothieware-v2/tree/edge) - Latest development versions

For building your own firmware from source, see [Compiling Smoothieware](compiling-smoothie).

### Copy to SD Card (V2)

Copy the firmware file to a micro SD card:
1. Rename the firmware binary to `flashme.bin` (or `firmware.bin` for the active firmware slot)
2. Copy to the root directory of your SD card
3. Safely eject the SD card from your computer

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

### Download

The latest bin is available at [Smoothieware FirmwareBin](https://github.com/Smoothieware/Smoothieware/tree/edge/FirmwareBin)

For detailed instructions and all the ways you can obtain a pre-made binary file or make your own, see [Getting Smoothie](getting-smoothie).

### Copy

Copy the file `firmware.bin` and `config.txt` to a micro SD card, then safely remove the SD card from your computer.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<review id="flashing-smoothie:filename-warning">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Filename</strong><br><br>

  Make sure the file is named <code>firmware.bin</code>, and not anything else.<br><br>

  Also make sure you downloaded the file itself, and not the HTML page containing it, as this would cause chaos. A good method is to check the MD5 sum for the file you downloaded ( or opening it in a web browser ).
</sl-alert>
{:/nomarkdown}

Make sure you eject the SD card from your computer properly ( "eject" in your file explorer's menus ).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Filename - Important for V2</strong><br><br>

  For automatic flashing on boot, name the file <code>flashme.bin</code> (not just <code>firmware.bin</code>).<br><br>

  Make sure you downloaded the binary file itself, and not the HTML page. Verify by checking file size and, if available, MD5 checksum from the release notes.<br><br>

  Example: If you see the file size is 4 KB instead of 100+ KB, it's probably an HTML page - re-download correctly.
</sl-alert>
{:/nomarkdown}

Always safely eject the SD card from your computer before inserting it into the Smoothieboard.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Filename</strong><br><br>

  Make sure the file is named <code>firmware.bin</code>, and not anything else.<br><br>

  Also make sure you downloaded the file itself, and not the HTML page containing it, as this would cause chaos. A good method is to check the MD5 sum for the file you downloaded ( or opening it in a web browser ).
</sl-alert>
{:/nomarkdown}

Make sure you eject the SD card from your computer properly ( "eject" in your file explorer's menus ).

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### Power

{::nomarkdown}
<review id="flashing-smoothie:power-section">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Plug the SD card into the SmoothieBoard SD card slot, then plug a mini USB cable into the board. (pictures ???)

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Insert the SD card into the Smoothieboard V2 SD card slot, then connect a USB-C cable to power the board. The board will boot automatically and check for the <raw>flashme.bin</raw> file.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Plug the SD card into the SmoothieBoard SD card slot, then plug a mini USB cable into the board. (pictures ???)

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### Observe

{::nomarkdown}
<review id="flashing-smoothie:observe-section">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

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

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

When the board powers on, it will check for the <raw>flashme.bin</raw> file on the SD card. The firmware flashing process is automatic:

1. **Check**: Board validates the <raw>flashme.bin</raw> file (MD5 checksum, file size, magic number)
2. **Flash**: If valid, the firmware is programmed into the board's internal flash memory
3. **Verify**: Board confirms successful write and renames the file to <raw>flashme.old</raw>
4. **Boot**: Board boots with the new firmware

Watch the board's status indicator or serial console output (115200 baud) to confirm the flashing process completes successfully.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>V2 Firmware Flashing Troubleshooting</strong><br><br>

  <strong>File not found or not flashing:</strong> Ensure the file is named exactly <code>flashme.bin</code> (not <code>firmware.bin</code>) and is in the SD card root directory.<br><br>

  <strong>Invalid file error:</strong> The firmware file may be corrupted. Verify MD5 checksum from release notes and re-download if necessary.<br><br>

  <strong>SD card problems:</strong> Format the card to FAT32 if flashing doesn't work. Use a different SD card to test.<br><br>

  <strong>Rollback:</strong> If you need to restore the previous firmware, copy the <code>flashme.old</code> file and rename it to <code>flashme.bin</code>, then reboot.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

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

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### Verification

{::nomarkdown}
<review id="flashing-smoothie:verification-section">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

You can make sure the new firmware was flashed by looking at the content of the SD card.

If the firmware was flashed successfully, the filename should have changed from `firmware.bin` to `FIRMWARE.CUR`.

The `config.txt` will always remain `config.txt`.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

After flashing, verify successful completion by checking the SD card contents. The firmware file status changes indicate success:

- **Successful flash**: <raw>flashme.bin</raw> is renamed to <raw>flashme.old</raw>
- **Failed flash**: <raw>flashme.bin</raw> remains unchanged (check file integrity and re-download if needed)

The active firmware is identified by checking the serial console at startup or using the version command.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

You can make sure the new firmware was flashed by looking at the content of the SD card.

If the firmware was flashed successfully, the filename should have changed from `firmware.bin` to `FIRMWARE.CUR`.

The `config.txt` will always remain `config.txt`.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### Connect

{::nomarkdown}
<review id="flashing-smoothie:connect-section">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

You can now connect to Smoothie with [Pronterface](pronterface) ( or any other host program, see [Software](software) ) at any baud rate, look for a serial USB device on your computer.

If running Windows you may need to install the [Windows Drivers](windows-drivers).

Mac OS/X and Linux have the drivers built in.

You can ignore any messages about missing DFU drivers.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

You can now connect to Smoothieboard V2 with [Pronterface](pronterface) or any other host program (see [Software](software)) via USB. The board appears as a serial USB device on your computer.

**Connection:**
- Linux/Mac: Drivers built-in, use `/dev/ttyACM0` or similar
- Windows: Drivers typically installed automatically; if not, check Device Manager

Baud rate: The V2 firmware uses **115200 baud** for serial communication (unlike V1 which is variable).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

You can now connect to Smoothie with [Pronterface](pronterface) ( or any other host program, see [Software](software) ) at any baud rate, look for a serial USB device on your computer.

If running Windows you may need to install the [Windows Drivers](windows-drivers).

Mac OS/X and Linux have the drivers built in.

You can ignore any messages about missing DFU drivers.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### Terminal

{::nomarkdown}
<review id="flashing-smoothie:terminal-section">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

You can also connect to Smoothie with any serial console program, which should be set to local echo and Linefeed line endings.

Typing `help` will show a list of console commands available.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

You can also connect to Smoothieboard V2 with any serial console program:

- **Baud rate**: 115200
- **Echo**: Local echo enabled
- **Line endings**: Linefeed (LF) or Carriage Return + Linefeed (CRLF)

Type `help` to see available console commands.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

You can also connect to Smoothie with any serial console program, which should be set to local echo and Linefeed line endings.

Typing `help` will show a list of console commands available.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Useful Commands

{::nomarkdown}
<review id="flashing-smoothie:useful-commands">
<proposal>
{:/nomarkdown}

Some useful console commands are:

- `version` - Shows the current Smoothieware version and build info
- `ls /sd` - Lists the files on the SD card
- `play /sd/file` - Sends a G-code file from SD card to the machine

More commands can be found on the [Console commands list](console-commands) and useful G-codes are in the [Supported G-codes list](supported-g-codes).

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Some useful commands are:

- `version` - Shows the current Smoothie version
- `ls /sd` - Lists the files on the SD card
- `play /sd/file` - Prints the file from the SD card

More commands can be found on the [Console commands list](console-commands) and useful G-codes are in the [Supported G-codes list](supported-g-codes).

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
