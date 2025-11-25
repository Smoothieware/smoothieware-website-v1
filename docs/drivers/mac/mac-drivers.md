---
permalink: /mac-drivers
---


# Mac Drivers and USB Communication

{::nomarkdown}
<review id="mac-drivers:version-intro">
<proposal>
{:/nomarkdown}

Smoothieware works well on macOS without additional drivers. Both V1 and V2 use standard USB CDC/ACM (virtual serial port) and work out of the box.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**Smoothieware V1** (Smoothieboard) appears as both a USB Mass Storage device and a virtual serial port on macOS. While no drivers are required, there are some common SD card issues that Mac users should be aware of.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Smoothieware V2** provides improved USB handling with better SD card access control via MSD mode (controlled by pushbutton or command). No additional drivers are required.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Good News:</strong> Smoothieboard appears as a USB Mass Storage device on Mac OS X and generally works without additional drivers.
</sl-alert>
{:/nomarkdown}

However, there are some common issues that Mac users may encounter.

This page addresses the most common Mac-specific problems and their solutions.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## SD Card Issues on macOS

{::nomarkdown}
<review id="mac-drivers:sd-card-issues">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### V1: Slow to Unmount Due to Spotlight Indexing

Smoothieware V1 (Smoothieboard) appears as a USB Mass Storage device on macOS, and Spotlight indexing can cause the SD card to take a very long time to unmount or eject. This is especially noticeable when large STL files are on the card.

#### Solutions

**Solution 1: Disable Spotlight Indexing**

Type this Terminal command when the SD card is mounted:

```bash
mdutil -i off /Volumes/Smoothie/
```

This disables Spotlight indexing for the Smoothie SD card volume.

**Solution 2: Prevent Indexing with a Marker File (Recommended)**

Place an empty file named `.metadata_never_index` at the volume root:

```bash
cd /Volumes/Smoothie/
touch .metadata_never_index
```

This creates a marker file that tells macOS not to index this volume.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="star"></sl-icon>
  <strong>Recommended:</strong> Solution 2 (marker file) is preferred as it is persistent and will continue to work even if you reformat the SD card and restore the marker file.
</sl-alert>
{:/nomarkdown}

Note: Solution 1 needs to be re-run each time the SD card is mounted on a new Mac.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

### V2: Improved SD Card Handling

Smoothieware V2 provides better SD card access control. The MSD (Mass Storage Device) mode is controlled via a pushbutton or command, preventing accidental USB mounting and Spotlight indexing issues. This design is much more reliable on macOS.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

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

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Serial Communication

{::nomarkdown}
<review id="mac-drivers:serial-communication">
<proposal>
{:/nomarkdown}

Both V1 and V2 use standard USB CDC/ACM (virtual serial port) for communication. No additional drivers are required on macOS.

The board will appear as a serial device at `/dev/tty.usbmodem*` (the exact name may vary).

You can connect using any serial terminal program such as:

- Screen (built-in): `screen /dev/tty.usbmodem* 115200`
- CoolTerm
- Serial (Mac App Store)
- Pronterface (for 3D printing)

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

For serial communication with Smoothieboard on Mac OS X, no additional drivers are required.

The board will appear as a serial device at `/dev/tty.usbmodem*` (the exact name may vary).

You can connect using any serial terminal program such as:

- Screen (built-in): `screen /dev/tty.usbmodem* 115200`
- CoolTerm
- Serial (Mac App Store)
- Pronterface (for 3D printing)

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Related Documentation

- [USB](usb) - General USB communication documentation
- [SD Card](sd-card) - SD card setup and usage
- [Pronterface](pronterface) - Recommended host software for 3D printing
