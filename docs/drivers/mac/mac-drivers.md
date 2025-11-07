---
permalink: /mac-drivers
---


# Mac Drivers and SD Card Issues

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Good News:</strong> Smoothieboard appears as a USB Mass Storage device on Mac OS X and generally works without additional drivers.
</sl-alert>
{:/nomarkdown}

However, there are some common issues that Mac users may encounter.

This page addresses the most common Mac-specific problems and their solutions.

## SD Card Slow to Unmount on Mac OS X

This issue is due to Spotlight indexing the card, especially when large STL files are on the card.

The SD card may take a very long time to unmount or eject, which can be frustrating when you need to quickly make changes.

### Solutions

There are two solutions to fix this issue:

#### Solution 1: Disable Spotlight Indexing

Type this Terminal command when the SD card is mounted:

```bash
mdutil -i off /Volumes/Smoothie/
```

This disables Spotlight indexing for the Smoothie SD card volume.

#### Solution 2: Prevent Indexing with a Marker File

Place an empty file named `.metadata_never_index` at the volume root.

This can be done very quickly with the following Terminal command:

```bash
cd /Volumes/Smoothie/
touch .metadata_never_index
```

This creates a marker file that tells macOS not to index this volume.

### Recommended Approach

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="star"></sl-icon>
  <strong>Recommended:</strong> Solution 2 (marker file) is preferred as it is persistent and will continue to work even if you reformat the SD card and restore the marker file.
</sl-alert>
{:/nomarkdown}

Solution 1 needs to be re-run each time the SD card is mounted on a new Mac.

## Serial Communication

For serial communication with Smoothieboard on Mac OS X, no additional drivers are required.

The board will appear as a serial device at `/dev/tty.usbmodem*` (the exact name may vary).

You can connect using any serial terminal program such as:

- Screen (built-in): `screen /dev/tty.usbmodem* 115200`
- CoolTerm
- Serial (Mac App Store)
- Pronterface (for 3D printing)

## Related Documentation

- [USB](usb) - General USB communication documentation
- [SD Card](sd-card) - SD card setup and usage
- [Pronterface](pronterface) - Recommended host software for 3D printing
