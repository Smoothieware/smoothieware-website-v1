---
permalink: /sd-card
layout: default
title: SD Card
---

# SD Card

When the Smoothieboard is connected via USB to a computer, the SD Card will present as a removable drive.

G-code files stored here may be played without the need of a host computer.

(A display panel is useful to have fully host-free operation)

---

## Important Warning About SD Card Access

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Critical:</strong> It is not recommended you allow the SD card to auto mount, and it is highly recommended that the SD card be unmounted at all times except when files need to be copied.
  <br/><br/>
  This is especially true on Macs which like to randomly read and write the SD card. If this happens during a print it will cause pauses and other printing problems.
  <br/><br/>
  Also, concurrent access of the SD card via the host and the Smoothie is not supported. Smoothie must be reset after copying files to or from the host mount point.
</sl-alert>
{:/nomarkdown}

A method of disabling auto mount on macOS is mentioned [here](https://wolfpaulus.com/jounal/mac/noautomount/).

---

## Files That May Be Found on the SD Card

| File | Description |
| ---- | ----------- |
| **FIRMWARE.CUR** | Copy of firmware file currently flashed onto the Smoothieboard |
| **config** or **config.txt** | One or the other, not both. Defines Smoothieware configuration options needed for the attached device |
| **config-override** | Created when the G-code `M500` is played. See [supported G-codes](supported-g-codes) |
| **on_boot.gcode** | Played on startup of Smoothieboard. Can be used to initialize the Smoothie driven device |
| **firmware.bin** | Firmware update file. If present, is flashed onto the Smoothieboard and renamed to FIRMWARE.CUR after the update completes |

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Tip:</strong> The <code>on_boot.gcode</code> file is particularly useful for running initialization commands every time your machine starts. See <a href="on_boot.gcode">on_boot.gcode documentation</a> for more details.
</sl-alert>
{:/nomarkdown}

---

## Setting Up a New SD Card

New SD cards are normally formatted as FAT32/VFAT so you can simply copy the firmware file and the config file to the SD card.

### Reformatting an SD Card

If you need to reformat an SD card:

**Windows/Mac:** Search for 'format SD card FAT32' and use your operating system's disk utility.

**Linux:** You can use GUI interfaces or on the command line:

- Use `cfdisk` (partition type 0C) for partitioning
- Use `mkfs.vfat` for formatting

### Getting the Firmware

To get the firmware, see the [Getting Smoothie page](getting-smoothie).

Copy the downloaded firmware binary to the SD card as `firmware.bin`.

On boot, the Smoothieboard will flash itself and rename the file to FIRMWARE.CUR.

### Getting the Config File

Copy an existing config file or download an example from the GitHub repo linked from the [Configuring Smoothie](configuring-smoothie) page.

The Smoothieboard only needs the "config" file on the SD card to work properly.

---

## SD Card Requirements

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>SD Card Specifications:</strong>
  <ul>
    <li>Format: FAT32/VFAT</li>
    <li>Recommended size: 2GB to 32GB</li>
    <li>Class 4 or higher recommended for good performance</li>
    <li>Avoid cards larger than 32GB as they may have compatibility issues</li>
  </ul>
</sl-alert>
{:/nomarkdown}

---

## Troubleshooting

If you're having issues with your SD card:

1. Try reformatting the card as FAT32
2. Test with a different SD card
3. Ensure the card is properly seated in the slot
4. Check that the card is not write-protected
5. Verify the config file is named correctly (case sensitive on some systems)

---

## Further Reading

- [Getting Smoothie firmware](getting-smoothie)
- [Configuring Smoothie](configuring-smoothie)
- [on_boot.gcode](on_boot.gcode)
- [Supported G-codes](supported-g-codes)
- [Player module](player)
