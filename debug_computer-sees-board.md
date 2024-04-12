
We have established that you can access the files on the Smoothieboard's SD card via the USB connection.

This USB connection also has a Serial interface. This is used to control the board.

The host program (control interface on your computer) uses the Serial interface to send [commands](http://smoothieware.org/console-commands.md) and [G-Codes](http://smoothieware.org/supported-g-codes.md) to your Smoothieboard.

In this step, we check if this serial interface is working correctly.

## Step 1: Install Pronterface

We will be using Pronterface to test the serial interface.

Make sure you use Pronterface and not another host program that you might prefer, for this (when doing diagnostics like this it's important to maintain a controlled situation).

You can find instructions on installing Pronterface [here](http://smoothieware.org/pronterface.md).

## Step 2: Plug in the board

Connect the USB cable to your Smoothieboard, and to your computer's USB port.

## Step 3: Attempt to connect

Launch Pronterface, then follow this procedure:

- Click on `Port`, this refreshes the list of boards connected to the computer
- Select your board in the drop-down menu next to the `Port` button. This can be something like `/dev/ttyACM0` on a Linux machine, or `COM1` on a Windows machine
- You **do not** need to set a baud rate, Smoothie will use the fastest speed possible over USB, and any baud rate setting is ignored.
- Click on `Connect`

If everything works correctly, the Pronterface log panel on the right, should show something like:

```
Connecting...
Printer is now online.
```

If this is what you see, click on **Yes**.

If you see something else, for example:

```
Serial error: could not open port /dev/ttyACM0: [Errno 2] No such file or directory: '/dev/ttyACM0'
```

, click on **No**.

---

[**Yes**](http://smoothieware.org/debug:can_connect_over_serial.md)

[**No**](http://smoothieware.org/debug:no_serial.md)
