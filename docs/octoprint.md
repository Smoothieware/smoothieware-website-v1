
# Octoprint Connection Guide

[Octoprint](http://octoprint.org) is a popular web interface for 3D printers that provides remote control and monitoring capabilities.

There are 3 different ways to connect Octoprint to Smoothie:

- **Ethernet** - Network connection via socat
- **USB** - Direct USB serial connection
- **UART pins** - Serial connection via UART pins

## Connecting via Ethernet

Octoprint can't connect via network natively, so we'll use `socat` (a fork of famous `netcat`) to create a local pipe to route traffic to Smoothie.

### Step 1: Install socat

First install it (all the following examples are for [OctoPi](https://octopi.octoprint.org)):

```bash
sudo apt-get install socat
```

### Step 2: Test the socat connection

Now try this command (replace `SMOOTHIE_IP` with your Smoothieboard address, like `192.168.0.10`):

```bash
sudo socat pty,wait-slave,link=/dev/ttySmoothie,perm=0660,group=tty tcp:SMOOTHIE_IP:23
```

You'll see no output (that's ok). Leave the command running. We'll finalize that later.

### Step 3: Configure Octoprint

Proceed to Octoprint [Web UI](http://octopi.local).

Go to **OctoPrint Settings** → **Serial Connection**:

1. Set **Additional serial ports** to `/dev/ttySmoothie`
2. **Save**, then reopen the same settings page
3. Set **Serial Port** to `/dev/ttySmoothie`
4. Set **Baudrate** to maximum: `250000`
5. **Save** and close

### Step 4: Test the connection

Now try to connect to the printer. If it connects, we should finalize the configuration and add `socat` to system startup.

### Step 5: Make socat persistent

Open `/etc/rc.local`:

```bash
sudo nano /etc/rc.local
```

Go down with the ↓ key until you reach the end of the file. The last line is usually `exit 0`.

**Before this line** add the following (replace `SMOOTHIE_IP` with Smoothie IP address):

```bash
socat pty,wait-slave,link=/dev/ttySmoothie,perm=0660,group=tty tcp:SMOOTHIE_IP:23 &
```

Save & exit: `Ctrl+O`, `Enter`, `Ctrl+X`.

Reboot and check if it works.

### Performance Note: Ethernet Can Be Slow

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Performance Warning:</strong> Try to print (stream) some file from Octoprint (not from Smoothie's SD card). You may notice that it streams gcode <strong>awkwardly slow</strong> even on a fast network connection. This is a known issue for some users, which means you should prefer USB to Ethernet connection for best performance.
</sl-alert>
{:/nomarkdown}

It might be working for you. Please leave a note somewhere if the speed is fine via `socat`.

Still, you can upload to SD (slow too: 1 MB/min for some users) and use Octoprint to start/stop jobs and control printer status.

## Connecting via USB / UART

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Recommended Method:</strong> USB connection is generally faster and more reliable than Ethernet for Octoprint.
</sl-alert>
{:/nomarkdown}

Detailed instructions are described on Octoprint wiki at [Setup OctoPrint with Smoothie](https://github.com/foosel/OctoPrint/wiki/Setup-OctoPrint-with-Smoothie).

### Important Setting

Set the **"Ignore any unhandled errors from the firmware"** setting in Octoprint to ensure smooth operation with Smoothie.

## Additional Resources

- [Octoprint Official Website](http://octoprint.org)
- [OctoPi Downloads](https://octopi.octoprint.org)
- [Smoothie Network Documentation](network)
