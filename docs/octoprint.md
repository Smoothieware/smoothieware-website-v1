
# Connection methods

There are 3 different ways to connect [Octoprint](http://octoprint.org) to Smoothie:

- Ethernet
- USB
- UART pins

## Connecting via Ethernet

Octoprint can't connect via network natively, so we'll use `socat` (a fork of famous `netcat`) to create a local pipe to route traffic to Smoothie.

First install it (all the following examples are for [OctoPi](https://octopi.octoprint.org)):

```bash
sudo apt-get install socat
```

Now try this command (replace `SMOOTHIE_IP` with your Smoothieboard address, like `192.168.0.10`):

```bash
sudo socat pty,wait-slave,link=/dev/ttySmoothie,perm=0660,group=tty tcp:SMOOTHIE_IP:23
```

You'll see no output (that's ok). Leave the command running. We'll finalize that later.

---

Proceed to Octoprint [Web UI](http://octopi.local).

Go to **OctoPrint Settings** → **Serial Connection**:

Set **Additional serial ports** to `/dev/ttySmoothie`.

**Save**, then reopen the same settings page.

Set **Serial Port** to `/dev/ttySmoothie`.

Set **Baudrate** to maximum: `250000`.

**Save** and close.

---

Now try to connect to the printer. If it connects, we should finalize the configuration and add `socat` to system startup.

Open `/etc/rc.local`:

```bash
sudo nano /etc/rc.local
```

Go down with the ↓ key until you reach the end of the file. The last line is usually `exit 0`. **Before this line** add the following (replace `SMOOTHIE_IP` with Smoothie IP address):

```bash
socat pty,wait-slave,link=/dev/ttySmoothie,perm=0660,group=tty tcp:SMOOTHIE_IP:23 &
```

Save & exit: `Ctrl+O`, `Enter`, `Ctrl+X`.

Reboot and check if it works.

### Sorry, it's slow

Try to print (stream) some file from Octoprint (not from Smoothie's SD card). You may notice that it streams gcode **awkwardly slow** even on a fast network connection. That's how it happens for some of the users. That means you should prefer USB to Ethernet connection.

It might be working for you. Please leave a note somewhere if the speed is fine via `socat`.

Still, you can upload to SD (slow too: 1 MB/min for some users) and use Octoprint to start/stop jobs and control printer status.

## Connecting via USB / UART

Described on Octoprint wiki at [Setup OctoPrint with Smoothie](https://github.com/foosel/OctoPrint/wiki/Setup-OctoPrint-with-Smoothie).

Set the "Ignore any unhandled errors from the firmware" setting in Octoprint.

_TODO: add some more documentation here._
