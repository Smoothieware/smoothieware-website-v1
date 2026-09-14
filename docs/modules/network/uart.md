---
permalink: /uart
---

# UART ports

Smoothieboard has hardware [UART](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver/transmitter) serial ports independent from USB serial.

This is a hardware "serial" port independent from the main "USB" serial port.

You can connect to this serial port using a "USB to UART" adapter, such as an FTDI TTL cable.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The Smoothieboard communicates with 3.3V TTL logic and can only handle a maximum of 5V on the inputs.
</sl-alert>
{:/nomarkdown}

The debug UART sends boot messages, errors, and warnings. Smoothieware V2 also lets you select one of two auxiliary UART channels as a command console or a serial-output target.

If you are running into trouble, this can sometimes be useful as errors and warnings are displayed there.

With a UART configured as a console, you can use it like USB serial or the network shell: send commands or G-code and read the responses.

As the UART has NO FLOW CONTROL, you MUST rigidly use the ping-pong protocol, sending ONE line of G-code per `ok` received.

You configure the baud rate in the [configuration file](configuring-smoothie) with <setting v1="uart0.baud_rate" v2="uart console.baudrate"></setting>.

## V2 auxiliary UART configuration

```ini
[uart console]
enable = true
console = true
channel = 0
baudrate = 115200
bits = 8
stop_bits = 1
parity = none
```

`console = true` enables command input and output. Set it to `false` when an external device should receive only messages sent through `echo -1`.

## Send text to a connected device (V2 only)

{% include modules/network/echo-uart-for-include.md %}

This lets Smoothie act as a simple serial-output controller: a command, GPIO input, or button can send a short command to a connected feeder, Arduino, PLC, or other serial device. For input-triggered examples, see [Switch](/switch) and [Button Box](/button-box).

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  On Linux machines, the output of the serial debug port is not nicely formatted because the Smoothieboard sends only a LF, but a CRLF is needed.<br><br>Picocom offers a parameter to fix that: <code>picocom -b 115200 /dev/ttyUSB0 --imap lfcrlf</code>.
</sl-alert>
{:/nomarkdown}

For reading the initial debug startup messages, the serial port communication settings are:

- Baudrate: 9600
- Character bits: 8
- Parity bit: None
- Stop bit: 1

The following software will give you a basic terminal interface to communicate with the Smoothieboard over UART:

- [Putty](http://www.putty.org/) and [RealTerm](https://sourceforge.net/projects/realterm/) for Windows
- [Cutecom](http://cutecom.sourceforge.net/) and [Picocom](https://linux.die.net/man/8/picocom) for Linux and MacOS
