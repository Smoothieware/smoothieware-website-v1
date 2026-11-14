{::nomarkdown}
<span id="flashing-smoothie"></span>
{:/nomarkdown}

# Flashing Smoothie Firmware

Smoothieboards normally arrive with firmware installed. Flashing replaces that firmware; it is useful for updating or installing a custom build. Select your board version above, then follow the matching instructions below.

Before updating, save a copy of your machine's SD card configuration and a known-working firmware binary, if you have one. Check that the new firmware is compatible with your configuration. Do not replace a working machine configuration with an example file without adapting it to the machine.

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

Make sure you download the binary itself, not the HTML page displaying it. If the publisher provides a checksum, compare it with the downloaded file.

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

### Power and update

Insert the card in the board and power or reset it. Do not remove power or the card during the update.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

The bootloader looks for `firmware.bin` and flashes it. The LEDs count up during the process; the board then starts the firmware.

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

Connect a USB cable and use [Pronterface](/pronterface) or another [host program](/software), or use a serial console with line-feed line endings. The board appears as a serial USB device. On Windows, see [Windows drivers](/windows-drivers) if needed. Type `help` for commands and `version` for the running firmware version. See the [console commands](/console-commands) and [supported G-codes](/supported-g-codes) references.

## Troubleshooting

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

- **The file was not renamed:** Check that the card is readable, formatted as FAT32, and that `firmware.bin` is in its root with the exact name. Try another card if necessary. Check that the [SD bootloader](/flashing-the-bootloader) is installed.
- **The board starts but the machine behaves differently:** Check the running version, your saved configuration and the [upgrade notes](https://github.com/Smoothieware/Smoothieware/blob/edge/upgrade-notes.md).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

- **The update does not start:** Check that the running firmware starts successfully, `config.ini` is present, and `flashme.bin` is in the card root. Check whether `flash_on_boot` is disabled; a running board can instead update with the `flash` console command. Check the console for errors.
- **The image is rejected:** Obtain a complete binary built for Prime and check its integrity. Try another readable FAT32 card if the card is suspect.
- **You need to return to an older version:** Use a separately saved, known-working Prime binary as `flashme.bin` and update again while the firmware is running. `flashme.old` is not the previous firmware. If the firmware cannot run, follow the recovery instructions below.

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

If the firmware cannot run, an SD-card self-update cannot repair it. The [SmoothieV2 initial bootstrap and debrick instructions](https://github.com/Smoothieware/SmoothieV2/blob/master/Firmware/README.md#initial-bootstrap-or-debrick) describe recovery using BOOT0 USB flashing or a supported hardware programmer. Follow the instructions for your board and the firmware build you intend to install.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
