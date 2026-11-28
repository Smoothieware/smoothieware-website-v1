---
title: "Flashing smoothie firmware"
permalink: /flashing-smoothie-firmware
redirect_from:
  - /flashing-smoothie
---

{::nomarkdown}
<span id="flashing-smoothie"></span>
{:/nomarkdown}

{::nomarkdown}
<span id="flashing-smoothie-firmware"></span>
{:/nomarkdown}

Smoothieboards normally arrive with firmware installed. Flashing replaces that firmware; it is useful for updating or installing a custom build. Select your board version above, then follow the matching instructions below.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Preserve your configuration</strong><br><br>
  Before updating, save a copy of your machine's SD card configuration and a known-working firmware binary, if you have one. Check that the new firmware is compatible with your configuration. Do not replace a working machine configuration with an example file without adapting it to the machine.
</sl-alert>
{:/nomarkdown}

## Prerequisites

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

The SD card update method requires the [SD bootloader](/flashing-the-bootloader). Purchased Smoothieboards normally have it installed; a homemade board may need it installed first. Use a FAT32-formatted microSD card.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

These instructions are for Smoothieboard V2 Prime with **working firmware**. The running firmware performs the SD card update; it is not an independent preinstalled SD bootloader. Keep the machine's working `config.ini` in the SD card root. If the board cannot run its firmware, use the [recovery instructions](#recovery) instead.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## Step by Step

{::nomarkdown}
<span id="download-v2-firmware"></span>
{:/nomarkdown}

### Download

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Get a firmware binary appropriate for your board and machine from [Smoothieware FirmwareBin](https://github.com/Smoothieware/Smoothieware/tree/edge/FirmwareBin). For available variants and build instructions, see [Getting Smoothie](/getting-smoothie). Read the [upgrade notes](https://github.com/Smoothieware/Smoothieware/blob/edge/upgrade-notes.md) when moving from an old version.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Download the [Prime firmware binary](https://download.smoothieware.org/pr.bin) and its [MD5 checksum](https://download.smoothieware.org/pr.md5), or consult the [SmoothieV2 releases](https://github.com/Smoothieware/SmoothieV2/releases). For a custom build, see the [source repository](https://github.com/Smoothieware/SmoothieV2) and [Compiling Smoothie](/compiling-smoothie). Use a binary built for **Prime**; binaries for other targets are not interchangeable.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Download the actual binary</strong><br><br>
  Download the firmware file itself, not the HTML page displaying it. When a checksum is supplied, calculate the downloaded file's checksum using the same algorithm and compare the complete values before copying it to the card. A mismatch means the file should not be flashed; download it again and recheck.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<span id="copy"></span><span id="copy-to-sd-card-v2"></span>
{:/nomarkdown}

### Copy to the SD card

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

1. Copy the firmware binary to the **root** of the microSD card and name it exactly `firmware.bin`.
2. Keep your machine's existing `config.txt` on the card. If setting up a new machine, prepare the configuration for that machine using [Configuring Smoothie](/configuring-smoothie).
3. Safely eject the card from your computer.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

1. Copy the Prime firmware binary to the **root** of the microSD card and name it exactly `flashme.bin`.
2. Keep your machine's existing `config.ini` on the card. See [Configuring Smoothie](/configuring-smoothie) when preparing a new configuration.
3. Safely eject the card from your computer.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<span id="power"></span><span id="observe"></span>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Check the filename</strong><br><br>
  Use the exact filename shown for your board in the SD card root. Check that your computer has not added an extra <code>.bin</code> extension. Safely eject the card before removing it.
</sl-alert>
{:/nomarkdown}

### Power and update

Insert the card in the board and power or reset it. Do not remove power or the card during the update.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

The bootloader looks for `firmware.bin` and flashes it. During flashing, the LEDs count up for a few seconds; the board then starts the firmware and its LEDs begin flashing. Check the filename and running version below rather than relying on the LED sequence alone.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

The running firmware checks for `flashme.bin` during startup and, if it is valid, starts the update. This automatic check can be disabled by the `flash_on_boot` setting. If the board is running but automatic flashing is disabled, connect a console and issue `flash` after copying the file. The command is refused while the machine is busy or heaters are on.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Verification

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

After the board has restarted, inspect the SD card. The bootloader normally renames `firmware.bin` to `FIRMWARE.CUR`. Then connect to the board and use the `version` console command to check the running firmware. A renamed file alone does not establish that the machine's configuration and functions are correct.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

After the board has restarted, connect to it and use the `version` console command to check the running firmware. The updater may rename the submitted image to `flashme.old` even if programming fails. It is **not** a backup of the previous firmware. The renamed file alone does not establish that the new firmware is running correctly or that the machine's configuration is correct.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Check the configuration and machine functions before returning the machine to normal use.

{::nomarkdown}
<span id="terminal"></span><span id="useful-commands"></span>
{:/nomarkdown}

### Connect

Follow [Connecting to Smoothie](/connecting-smoothie) to connect a host or console to your board. Send `version` to check the running firmware; see the [console commands](/console-commands) reference for other commands.

## Troubleshooting

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

- The file was not renamed or the LEDs did not count up: Check that the card is readable, formatted as FAT32, and that `firmware.bin` is in its root with the exact name. Check for a hidden second extension and confirm that the file is the binary, not an HTML download page. Check that the [SD bootloader](/flashing-the-bootloader) is installed.
- LED4 is off: This can point to an SD card or card-access problem. Power down, remove the card and check it on a computer. Preserve its files before formatting; if needed, format as FAT32, restore the files, safely eject it and try again. If the problem persists, try another card. See [Troubleshooting](/troubleshooting) for the LED patterns and further checks.
- The board starts but the machine behaves differently: Check the running version, your saved configuration and the [upgrade notes](https://github.com/Smoothieware/Smoothieware/blob/edge/upgrade-notes.md).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

- The update does not start: Check that the running firmware starts successfully, `config.ini` is present, and `flashme.bin` is in the card root. Check whether `flash_on_boot` is disabled; a running board can instead update with the `flash` console command. Check the console for errors.
- The image is rejected: Obtain a complete binary built for Prime and compare its checksum when one is available. Confirm the exact filename, including any hidden extension. Try another readable FAT32 card if the card is suspect.
- You need to return to an older version: Use a separately saved, known-working Prime binary as `flashme.bin` and update again while the firmware is running. `flashme.old` is not the previous firmware. If the firmware cannot run, follow the recovery instructions below.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## Recovery

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

If the SD bootloader is missing or damaged, see [Flashing the Bootloader](/flashing-the-bootloader) for installation and recovery.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

If the firmware cannot run, the SD-card update cannot start. You can instead use the microcontroller's USB device firmware update (DFU) mode to write a Prime firmware binary directly to internal flash. This replaces the installed firmware. Preserve your SD card configuration and use the correct, checksum-verified Prime binary from the download step above.

1. Install [dfu-util](https://dfu-util.sourceforge.net/) on your computer. Connect the board's USB device port to the computer using a data-capable cable; see [Connecting to Smoothie](/connecting-smoothie) for the connection. Power the board as described there.

   > **Installing dfu-util on Linux**
   >
   > Ubuntu, Debian and derivatives:
   >
   >     sudo apt-get update
   >     sudo apt-get install dfu-util
   >
   > Fedora:
   >
   >     sudo dnf install dfu-util
   >
   > Arch Linux:
   >
   >     sudo pacman -S dfu-util
   >
   > On Ubuntu, the package is in the Universe repository. If it cannot be found, enable Universe and update the package lists.

2. Press and hold **BOOT0 (labelled MSC on the board)**. While holding it, press and release **RST**. Then release BOOT0. The board should now be in USB DFU mode rather than running Smoothie.
3. In a terminal, list DFU devices:

   ```text
   dfu-util -l
   ```

   Look for the STM32 device, normally identified as `0483:df11`, and its internal flash entry. If it does not appear, check the USB data cable, power and button sequence; USB permissions or drivers may also need attention. Disconnect other DFU devices before continuing so you do not flash the wrong device.
4. In the directory containing the downloaded `pr.bin`, run:

   ```text
   dfu-util -d 0483:df11 -a 0 -s 0x08000000 -D pr.bin
   ```

   This writes the binary to the start of internal flash. If your Prime binary has a different filename, substitute its actual path. Wait for the command to finish successfully; do not disconnect power or USB during the write.
5. If the SD card still contains a failed or unwanted `flashme.bin`, power down and remove or rename that file on a computer before restarting, so it cannot trigger another update. Keep your `config.ini`. Safely eject and reinsert the card, then power the board and press **RST** without holding BOOT0. Connect to the board and check `version`, its configuration and machine functions as described above.

If DFU is not detected or the firmware still does not start, consult the [initial bootstrap and debrick instructions](https://github.com/Smoothieware/SmoothieV2/blob/master/Firmware/README.md#initial-bootstrap-or-debrick) for supported hardware programmer recovery and board option-byte details. Avoid changing option bytes or erasing flash indiscriminately; those operations can affect recovery.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
