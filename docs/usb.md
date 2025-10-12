
# USB Port

Smoothieboard has a USB port that provides multiple interfaces for communicating with and controlling your board.

You can plug a USB cable into the Smoothieboard, and plug that cable into your computer, and you'll then be able to control your Smoothieboard using [Software](software) on your computer.

## Features

The USB port exposes several interfaces:

### USB MSD (Mass Storage)

Allows you to access the SD card via your web browser, the same way you would for your phone or camera.

### USB ACM (Serial)

Allows you to talk to the Smoothieboard, send it commands and G-codes, and receive answers.

This is also the interface used to control the board via "host" programs.

### USB DFU (Device Firmware Update)

Used (only on Linux) to program the firmware. This is for developers only.

## Best Practices

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Avoiding USB Disconnections:</strong> Follow these guidelines to ensure reliable USB connections.
</sl-alert>
{:/nomarkdown}

A few things to be careful of to avoid USB disconnections:

- **Use a short cable** - Make sure your USB cable is as short as possible (less than 50 centimeters or two feet is ideal), is shielded, and ideally has ferrite beads
- **Same power source** - Make sure your machine and the computer controlling it are plugged into the same power strip
- **Clean power** - Make sure your local electrical installation is not subject to variations and interference
- **Avoid interference** - Make sure there are no large motors, fridges, neon bulbs or other strong sources of electrical interference in the same room

If all of those rules are applied, USB will work fine in the vast majority of cases.

## Drivers

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

## Usage

Once the driver is installed, the Smoothieboard should be recognized both as a Mass Storage Device (similar to a USB thumb drive), allowing you to access the files on the SD cards, as well as a Serial (COM) device, allowing you to send commands (for example via [Pronterface](pronterface)).
