
# Unboxing

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**Smoothieboard V1:**

Your Smoothieboard comes with a micro [SD card](sd-card) in the microSD slot.

The boards come pre-flashed with the latest firmware.

With a basic configuration file installed on the SD card, no preparation is needed before you can connect Smoothieboard to your computer and start interacting with it.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Smoothieboard V2 Prime:**

Your Smoothieboard V2 Prime comes with an SD card (2-8 GB) in the SDIO slot, pre-loaded with firmware and a default configuration.

The boards come pre-flashed with the latest firmware.

With a default configuration file already installed on the SD card, you can connect your board immediately. The V2 also includes an onboard Ethernet port for network connectivity, which is the recommended communication method.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

The first thing you might want to do before you start connecting your board is to look at our list of [Software](software), and install a "host" program to talk to the board.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Own a non-Smoothieboard board?</strong><br><br>
  If you don't have a Smoothieboard but have or consider purchasing an MKS board, please make sure you read <a href="troubleshooting#what-is-wrong-with-mks">What's wrong with MKS</a>
</sl-alert>
{:/nomarkdown}

# Connecting via USB

{::nomarkdown}
<a href="/images/files-on-sd.png">
  <img src="/images/files-on-sd.png" alt="SD card - Files on your Smoothieboard's SD card" style="width: 320px; height: auto; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

A good first step is to connect your board to your computer to familiarize yourself with it.

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

Connect a [USB-B](http://en.wikipedia.org/wiki/USB#.22A.22_.26_.22B.22_connectors) cable to the USB connector on the board, and to your computer.

A moment after connection, your computer will recognize the Smoothieboard as a [USB Mass Storage Device](http://en.wikipedia.org/wiki/USB_mass_storage_device_class) (like a USB disk-drive or an SD card reader), showing you the files present on the SD card.

Drivers are needed for Windows 7/8, while Linux and Mac OS X directly support the device, you can [find those drivers here](/windows-drivers).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Connect a USB-C cable to the USB connector on the board, and to your computer.

A moment after connection, your computer will recognize the Smoothieboard V2 as a [USB Mass Storage Device](http://en.wikipedia.org/wiki/USB_mass_storage_device_class) (like a USB disk-drive or an SD card reader), showing you the files present on the SD card.

USB drivers are typically not needed on Linux, Mac OS X, or modern Windows systems. The SDIO SD card interface provides much faster transfer rates (10-25 MB/s) compared to USB Mass Storage.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

This allows you to add, copy, edit, or delete any file you'd like.

Already present on the SD card is a configuration file.

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

This file is named "config" and contains all of the configuration options for your board in a flat text format.

The file is read when you start or reset your board.

You edit the [configuration](/configuring-smoothie) simply by editing this file in a [Text Editor](https://wiki.gnome.org/Apps/Gedit), saving it, and resetting the board.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This file uses INI-style sections (e.g., `[actuator]`, `[motion control]`) with hierarchical settings.

The file is read when you start or reset your board.

You edit the [configuration](/configuring-smoothie) by editing this file in a [Text Editor](https://wiki.gnome.org/Apps/Gedit), saving it, and resetting the board. V2 configuration is structured differently from V1, so refer to the [configuration guide](/configuring-smoothie) for proper formatting.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

No need to recompile or flash the board.

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  You can read more about configuring your Smoothieboard at <a href="/configuring-smoothie">Configuring Smoothie</a>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The SD card can also be used to flash a more recent version of the firmware to your board, while the pre-flashed firmware should work this is not always the case, see <a href="getting-smoothie">where to get the binary file</a> and <a href="flashing-smoothie-firmware">how to flash it via the SD card</a>.<br><br>It can also be used to store and play <a href="http://en.wikipedia.org/wiki/G-code">G-Code</a> files, see <a href="player">Player</a>.
</sl-alert>
{:/nomarkdown}

USB Mass Storage is not the only thing you get when you connect the board.

The board also exposes a [USB CDC](http://en.wikipedia.org/wiki/USB_communications_device_class) Serial interface, allowing you to send G-Code and receive answers.

(There is also a DFU interface for flashing firmwares but that's mostly for developers).

The CDC (Serial) interface is the interface host programs like [Pronterface](pronterface) use to allow you to interact with your machine.

If you are already familiar with it, you can try connecting right now and get an answer from the board.

If not, we explain it all later in this guide.

# Connecting via the network

{::nomarkdown}
<a href="/images/network-cables.png">
  <img src="/images/network-cables.png" alt="Network - Hope you have fewer cables than this" style="width: 320px; height: auto; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Network (Optional):**

The Smoothieboard V1 can optionally be connected to an Ethernet network via USB-to-Ethernet adapter or external network expansion.

This allows you to access a web interface the board can serve, and control the machine via your browser.

It also allows you to connect software that supports it (like [Pronterface](pronterface) and [Visicut](visicut)) via the network.

Network connectivity is optional and disabled by default, but is easy to enable and configure if you have the appropriate hardware.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Network (Built-in):**

The Smoothieboard V2 Prime includes an onboard Ethernet port (RJ45) with integrated PHY, allowing direct connection to your local Ethernet network via standard network cable.

This allows you to access a web interface the board serves, and control the machine via your browser.

It also allows you to connect software that supports it (like [Pronterface](pronterface) and [Visicut](visicut)) to your Smoothieboard via the network.

Network is disabled by default but is very easy to enable and configure. It is the recommended primary method of communicating with your V2 Smoothieboard.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

You can find all the information you need about using the network interface here: [Network interface](/network)

# Updating your firmware

{::nomarkdown}
<a href="/images/firmware-upgrade.png">
  <img src="/images/firmware-upgrade.png" alt="Updating the firmware" style="width: 320px; height: auto; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Before starting, a very good idea is to ensure you have the latest firmware version.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Firmware Update (SD Card Method):**

1. Download the latest `firmware.bin` file
2. Copy it onto the SD card
3. Reset the Smoothieboard

The new firmware will "flash" (you will see the LEDs on the board do a little "dance"), and you will then have the latest version.

This is particularly useful if you ever need to ask for help, as people helping you will be assuming you have the latest version.

You can find the file, and information on how to flash it, at [Flashing Smoothie Firmware](/flashing-smoothie-firmware).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Firmware Update (Multiple Methods):**

**Method 1: SD Card (Recommended for first update):**
1. Download the latest `firmware.bin` file
2. Copy it onto the SD card
3. Reset the Smoothieboard V2

The new firmware will "flash" (you will see the LEDs on the board do a little "dance"), and you will then have the latest version.

**Method 2: Network Update (requires Ethernet):**
Once you have network configured, you can update directly via the command:
```
update http://example.com/firmware.bin
```

This is particularly useful if you ever need to ask for help, as people helping you will be assuming you have the latest version.

You can find the file, and information on how to flash it, at [Flashing Smoothie Firmware](/flashing-smoothie-firmware).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
