
# SD Card

When the Smoothieboard is connected via USB to a computer, the SD Card will present as a removable drive. G-code files stored here may be played without the need of a host computer. (A display panel is useful to have fully host-free operation)

> [!WARNING]
> It is not recommended you allow the SD card to auto mount, and it is highly recommended that the SD card be unmounted at all times except when files need to be copied. This is especially true on Macs which like to randomly read and write the SD card, if this happens during a print it will cause pauses and other printing problems.
> Also, concurrent access of the SD card via the host and the Smoothie is not supported. Smoothie must be reset after copying files to or from the host mount point.

A method of Disabling auto mount on OSX is mentioned [here](https://wolfpaulus.com/jounal/mac/noautomount/).

## Files that may be found on the SD Card

- **FIRMWARE.CUR**: Copy of firmware file, currently flashed onto the Smoothieboard.
- **config** or **config.txt**: One or the other, not both, Defines Smoothieware configuration options needed for the attached device.
- **config-override**: Created when the G-code `M500` is played. See [supported G-codes](supported-g-codes).
- **on_boot.gcode**: Played on startup of Smoothieboard. Can be used to initialize the Smoothie driven device.
- **firmware.bin**: Firmware update file, if present is flashed onto the Smoothieboard, and renamed to FIRMWARE.CUR after the update completes.

## Setting up a new SD Card

New SD cards are normally formatted as FAT32/VFAT so you can simply copy the firmware file and the config file to the SD card.

If you need to reformat an SD card, search for 'format SD card FAT32'. Under Linux using GUI interfaces or on the command line you'll want to use `cfdisk` (partition type 0C) and `mkfs.vfat`.

To get the firmware, see the [Getting Smoothie page](http://smoothieware.org/getting-smoothie). Copy the downloaded firmware binary to the SD card as `firmware.bin`. On boot, the Smoothieboard will flash the Smoothieboard and rename the file to FIRMWARE.CUR.

Copy an existing config file or download an example from the GitHub repo linked from the [Configuring Smoothie](http://smoothieware.org/configuring-smoothie) page.

The Smoothieboard only needs the "config" file on the SD card to work properly.
