
# Pronterface

Pronterface is a host software for Reprap electronics, originally developed by [Kliment](https://github.com/kliment/Printrun).

It is mostly oriented towards 3D printing but can also be used to control laser cutters and CNC routers.

Pronterface's website is at [http://www.pronterface.com/](http://www.pronterface.com/)

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <p><em>Image: The pronterface interface (image file missing: images/pronterface-raw.png)</em></p>
</div>
{:/nomarkdown}

Mainly for 3D printers, but very useful for debugging problems with any types of machine because it does communication very well and reports problems instead of ignoring them.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Pronterface is designed for 3D printers and will do weird things for CNC mills and laser cutters (like ignoring some commands).<br><br>For CNC mills/routers, use <a href="bcnc">bCNC</a> and for laser cutters use <a href="visicut">Visicut</a>.
</sl-alert>

## Getting it

Pronterface's download instructions are located [here](http://www.pronterface.com/index.html#download).

There are [pre-packaged versions for Windows and MacOSX](http://koti.kapsi.fi/~kliment/printrun/)

Linux users have [specific instructions](https://github.com/kliment/Printrun/blob/master/README.md#ubuntudebian)

## Connecting to Smoothie

There are two ways to connect to Smoothie using Pronterface, via USB, or via Ethernet.

### USB Connection

Everybody has USB, and Smoothie does too.

Smoothie uses serial over USB (ACM), allowing Pronterface to send commands and G-codes for execution, and even to upload files.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Contrary to Ethernet, USB can fail due to <a href="http://en.wikipedia.org/wiki/Electromagnetic_interference">EMI</a> and <a href="http://en.wikipedia.org/wiki/Ground_loop_%28electricity%29">ground loop</a> problems.<br><br>Those problems will mostly manifest as your board "disconnecting", this means it would become un-responsive, the machine would stop moving, and sometimes your host computer may indicate that a USB disconnect occurred.<br><br>Ways to fight those problems include: - Make sure your USB cable is as short as possible - It should be shielded - It should have ferrite at one end, or even better, both ends - The machine shouldn't be placed in an electromagnetically noisy environment.<br><br>- The machine, and the computer controlling it, should be connected as close as possible in the electrical installation, ideally they should be plugged in the same power strip.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Using a Smoothieboard with the Windows operating system, requires the prior installation of drivers.<br><br>Those drivers as well as instructions on how to install them, can be found at the <a href="windows-drivers">Windows Drivers</a> page.<br><br>Please make sure you install the drivers, and restart the computer, before you try to connect to Smoothie via Pronterface.
</sl-alert>

To connect to Smoothie, follow this procedure:

- Click on `Port`, this refreshes the list of boards connected to the computer
- Select your board in the drop-down menu next to the `Port` button. This can be something like `/dev/ttyACM0` on a Linux machine, or `COM1` on a Windows machine
- You **do not** need to set a baud rate, Smoothie will use the fastest speed possible over USB, and any baud rate setting is ignored.
- Click on `Connect`

If everything works correctly, the Pronterface log panel on the right should show something like:

```
Connecting...
Printer is now online.
```

Now, Pronterface will start reading and displaying temperatures, and will allow you to interact with your machine.

### Ethernet

Smoothieboard has an ethernet connector, it exposes a web interface, but also a serial (telnet) interface.

You can use that interface to connect to Smoothieboard over Ethernet, using Pronterface.

First of all, set up your Smoothieboard to activate Ethernet: see the [Network](network) page.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  It is not recommended that you talk to your Smoothieboard over Wifi, it introduces a certain lag, that can make the interface annoying, or even unusable.<br><br>Make sure your computer is connected to your network switch and then to your Smoothieboard, using ethernet cable all the way.
</sl-alert>

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  Make sure you have the right option set in Pronterface.<br><br>Go into the <code>Settings > Options</code> menu, then go to the <code>Printer Settings</code> tab, and check that the <code>TCP streaming mode</code> option is checked.<br><br>If it is not, you will probably experience slow transfers and streaming.
</sl-alert>

Once you have confirmed that the Network functionality works normally (for example by accessing the Web Interface), you can now try to connect using Pronterface.

First, find your Smoothieboard's IP address, here we will for example say it is `192.168.1.10`.

Now, in the `Port` drop-down menu, where the USB serial port name usually is, enter:

`192.168.1.10:23`

And click on `Connect`.

If everything works correctly, the Pronterface log panel on the right should show something like:

```
Connecting...
Printer is now online.
```

Now, Pronterface will start reading and displaying temperatures, and will allow you to interact with your machine.

## Sending commands

In addition to all of the nice buttons and controls the Pronterface interface offers, you can use the `Send` input box and button to send G-codes and commands to your Smoothieboard manually.

### G-codes

Sending G-codes requires no special treatment at all, simply input the G-code into the `Send` input box (lower right), and hit the `Send` button.

You can [find a list of useful G-codes here](supported-g-codes).

### Commands

In addition to G-codes, Smoothie understands a set of commands.

You can [find a list of useful commands here](console-commands).

However, sending commands is not as trivial as sending G-codes.

Because Pronterface is used to G-codes, but not commands, it will ignore commands if you input those as-is.

So, you need to add a `@` character before the command to send it.

For example, to send the `version` command, you need to actually send `@version`.

## Sending files

Smoothieboard has an SD card, which is used to store [configuration](configuring-smoothie), but also G-code files.

You can use Pronterface to send G-code files to the Smoothieboard, which are then stored, and which you can then play as you wish.

This is useful in particular if you have problems with USB connection errors, or insufficient USB speed (both extremely rare problems).

To send a G-code file to your Smoothieboard, follow this procedure:

- Click on `Load file`
- Select your file
- Pronterface will load and analyze the file
- Click on `SD`
- Click on `SD Upload` in the menu that popped out
- Enter a filename (with Smoothie you can ignore the warning about using an 8.3-type filename and just use a normal filename)
- Now the file will upload over the serial interface, you can monitor the progress in the bottom bar
