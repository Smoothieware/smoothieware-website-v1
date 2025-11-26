---
permalink: /usb
---


# USB Port



Smoothieboard has USB connectivity that provides multiple interfaces for communicating with and controlling your board.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

You can plug a USB cable into the Smoothieboard, and plug that cable into your computer to control your Smoothieboard using [Software](software) on your computer.

**Available USB Interfaces:**

- **USB MSD (Mass Storage)** - Access the SD card as a removable drive (like a USB thumb drive)
- **USB ACM (Serial)** - Send commands, G-codes, and receive responses; used by host programs
- **USB DFU (Device Firmware Update)** - Program firmware (Linux only, developers only)

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

You can plug a USB cable into the Smoothieboard to control it via [Software](software) on your computer. V2 adds dual USB support and improved mass storage handling.

**Available USB Interfaces:**

- **USB Device (USB2)**
  - **USB ACM (Serial)** - Virtual COM port for sending commands and G-codes
  - **USB MSC (Mass Storage)** - Access the SD card as a removable drive with safer mounting (button or command controlled)

- **USB Host (USB1)** - Expansion header for future device support (keyboards, WiFi adapters, etc.)

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Best Practices

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Avoiding USB Disconnections:</strong> Follow these guidelines to ensure reliable USB connections.
</sl-alert>
{:/nomarkdown}



To avoid USB disconnections and ensure stable communication:

- **Use a short cable** - Keep your USB cable as short as possible (ideally less than 50 cm / 2 feet), shielded, with ferrite beads if possible
- **Same power source** - Plug your machine and controlling computer into the same power strip
- **Clean power** - Ensure your electrical installation is stable and free from interference
- **Avoid interference** - Keep away from large motors, refrigerators, neon bulbs, and other strong electrical noise sources

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

If all of those rules are applied, USB will work fine in the vast majority of cases.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Additionally for V2:

- **MSD Mount Timing** - When enabling MSD mode, wait a moment before accessing the SD card to allow the file system to stabilize
- **External 5V Power** - If experiencing power-related issues, consider providing external 5V power via the 5vin header instead of relying solely on USB
- **Cable Quality** - V2's improved power delivery benefits from high-quality USB cables; cheap or damaged cables may cause intermittent disconnections

If all guidelines are followed, USB will work reliably in nearly all cases.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Drivers



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### Linux and Mac

If using Linux or Mac, just plug the USB cable into the computer and the Smoothieboard, and everything should work right out of the box.

No driver installation is required.

### Windows

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Windows 10 Users:</strong> Do NOT install the driver if you're using Windows 10. Installing it could cause trouble. The driver is only required for older Windows versions.
</sl-alert>
{:/nomarkdown}

If you are using Windows (older than 10), you need to install a driver.

You can find this driver at: [Windows drivers](windows-drivers)

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

### Linux and Mac

Just plug the USB cable into the computer and the Smoothieboard, and everything should work right out of the box.

No driver installation is required.

### Windows

Modern Windows versions (7 and later) recognize V2's USB composite device automatically.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  V2 uses standard USB CDC/ACM and MSC classes, so no proprietary drivers are needed on any platform.
</sl-alert>
{:/nomarkdown}

The Smoothieboard will appear as:
- A serial port (COM port) for command communication
- A removable disk drive for SD card access

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Usage



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Once the driver is installed, the Smoothieboard should be recognized as:
- **Mass Storage Device** - Access files on the SD card (like a USB thumb drive)
- **Serial (COM) Device** - Send commands and G-codes (e.g., via [Pronterface](pronterface))

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

The Smoothieboard should be recognized as:

- **Serial (COM) Device** - Send commands and G-codes via the USB ACM interface (e.g., via [Pronterface](pronterface))
- **Mass Storage Device** - Access SD card files (appears as a removable disk)

**MSD (Mass Storage) Activation:**

By default, V2 does NOT automatically mount the SD card via USB (safer operation). To access the SD card:

- **Via Pushbutton**: Press the MSD button on the board (typically on the top edge) to toggle MSD mode
- **Via Command**: Use a G-code or serial command to enable MSD mode (check firmware documentation)
- **LED Indicator**: An LED shows when MSD mode is active

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}


