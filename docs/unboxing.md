
<div class='panel panel-default wrap_right' style='width:340px;padding:10px '>
<div class='panel-heading'><h4 class='panel-title'>USB Connectors</h4></div>
<img src='images/usb-cable.png' width='320px'><br/>
Smoothie uses USB-B
</div>

# Unboxing

Your Smoothieboard comes with a micro [SD card](sd-card.md) in the microSD slot.

The boards come pre-flashed. With a basic configuration file installed on the SD card, no preparation is needed before you can connect Smoothieboard to your computer and start interacting with it.

The first thing you might want to do before you start connecting your board is to look at our list of [Software](software.md), and install a "host" program to talk to the board.

> [!WARNING]
> Don't have a Smoothieboard? If you don't have a Smoothieboard but have or consider purchasing an MKS board, please make sure you read [What's wrong with MKS](http://smoothieware.org/troubleshooting#what-is-wrong-with-mks)

# Connecting via USB

A good first step is to connect your board to your computer to familiarize yourself with it. Connect a [USB-B](http://en.wikipedia.org/wiki/USB#.22A.22_.26_.22B.22_connectors) cable to the USB connector on the board, and to your computer.

<div class='panel panel-default wrap_right' style='width:340px;padding:10px '>
<div class='panel-heading'><h4 class='panel-title'>SD card</h4></div>

<img src='images/smoothie-config-screencap.png' width='320px'><br/>

Files on your Smoothieboard's SD card
</div>

A moment after connection, your computer will recognize the Smoothieboard as a [USB Mass Storage Device](http://en.wikipedia.org/wiki/USB_mass_storage_device_class) (like a USB disk-drive or an SD card reader), showing you the files present on the SD card. Drivers are needed for Windows 7/8, while Linux and Mac OS X directly support the device, you can [find those drivers here](http://smoothieware.org/windows-drivers).

This allows you to add, copy, edit, or delete any file you'd like. Already present on the SD card is a file named "config". This file contains all of the configuration options for your board and is read when you start or reset your board. You edit the [configuration](http://smoothieware.org/configuring-smoothie) simply by editing this file in a [Text Editor](https://wiki.gnome.org/Apps/Gedit), saving it, and resetting the board. No need to recompile or flash the board.

> [!SUCCESS]
> You can read more about configuring your Smoothieboard at [Configuring Smoothie](http://smoothieware.org/configuring-smoothie)

> [!NOTE]
> The SD card can also be used to flash a more recent version of the firmware to your board, while the pre-flashed firmware should work this is not always the case, see [where to get the binary file](getting-smoothie.md) and [how to flash it via the SD card](flashing-smoothie-firmware.md).
> 
> It can also be used to store and play [G-Code](http://en.wikipedia.org/wiki/G-code) files, see [Player](player.md).

USB Mass Storage is not the only thing you get when you connect the board. The board also exposes a [USB CDC](http://en.wikipedia.org/wiki/USB_communications_device_class) Serial interface, allowing you to send G-Code and receive answers. (There is also a DFU interface for flashing firmwares but that's mostly for developers).

The CDC (Serial) interface is the interface host programs like [Pronterface](pronterface.md) use to allow you to interact with your machine. If you are already familiar with it, you can try connecting right now and get an answer from the board. If not, we explain it all later in this guide.

# Connecting via the network

<div class='panel panel-default wrap_right' style='width:340px;padding:10px '>
<div class='panel-heading'><h4 class='panel-title'>Network</h4></div>
<img src='images/network.switches.jpg' width='320px'><br/>
Hope you have fewer cables than this
</div>

The other main communication interface present on the Smoothieboard, apart from the USB port, is the Ethernet port, which allows you to connect your board to your local Ethernet network, and talk to the board via TCP/IP. 

This is the same kind of technology you would find on a network-connected 2D printer, for example.

It allows you to access a web interface the board serves, and control the machine via your browser.

It also allows you to connect some software that supports it (like [Pronterface](pronterface.md) and [Visicut](visicut.md)) to your Smoothieboard via the network.

Network is disabled by default but is very easy to enable and configure.

It is also the recommended main method of communicating with your Smoothieboard.

You can find all the information you need about using the network interface here: [Network interface](http://smoothieware.org/network)

# Updating your firmware

Now that you have your board, a very good idea before starting is to update your firmware to the latest version.

You do this by downloading the latest `firmware.bin` file, copying it onto the SD card, and resetting the SmoothieBoard.

Then, the new firmware will "flash" (you will see the LEDs on the board do a little "dance"), and you will then have the latest version.

This is particularly useful if you ever need to ask for help, as people helping you will be assuming you have the latest version.

You can find the file, and information on how to flash it, at [Flashing Smoothie Firmware](http://smoothieware.org/flashing-smoothie-firmware).
