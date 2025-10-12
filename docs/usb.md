
# USB port

Smoothieboard has a USB port.

You can plug a USB cable into the Smoothieboard, and plug that cable into your computer, and you'll then be able to control your Smoothieboard using [Software](software) on your computer.

## Features

The USB port exposes several interfaces:

- USB MSD (Mass Storage), which allows you to access the SD card via your web browser, the same way you would for your phone or camera
- USB ACM (Serial), which allows you to talk to the Smoothieboard, send it commands and G-codes, and receive answers. It is also the interface used to control the board via "host" programs.
- USB DFU, which is used (only on Linux) to program the firmware, for developers only.

## Take care

A few things to be careful of to avoid USB disconnections:

- Make sure your USB cable is as short as possible (less than 50 centimeters or two feet is ideal), is shielded, and ideally has ferrite beads.
- Make sure your machine and the computer controlling it are plugged into the same power strip.
- Make sure your local electrical installation is not subject to variations and interference.
- Make sure there are no large motors, fridges, neon bulbs or other strong sources of electrical interference in the same room.

If all of those rules are applied, USB will work fine in the vast majority of cases.

## Drivers

If using Linux or Mac, just plug the USB cable into the computer and the Smoothieboard, and everything should work right out of the box.

If you are using Windows (older than 10) however, you need to install a driver.

You can find this driver at the following URL: [Windows drivers](http://smoothieware.org/windows-drivers)

If you are using Windows 10, you do not need to install the driver, and installing the driver could cause trouble. For all older versions, the driver is required.

## Usage

Once the driver is installed, the Smoothieboard should be recognized both as a Mass Storage Device (similar to a USB thumb drive), allowing you to access the files on the SD cards, as well as a Serial (COM) device, allowing you to send commands (for example via [Pronterface](pronterface)).
