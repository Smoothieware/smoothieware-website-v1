# UART port

Smoothieboard has a [UART](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver/transmitter) port.

This is a hardware "serial" port independent from the main "USB" serial port.

You can connect to this serial port using a "USB to UART" adapter, such as an FTDI TTL cable.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The Smoothieboard communicates with 3.3V TTL logic and can only handle a maximum of 5V on the inputs.
</sl-alert>
{:/nomarkdown}

This port is used at boot time to send a lot of debugging information from the Smoothieboard to you.

If you are running into trouble, this can sometimes be useful as errors and warnings are displayed there.

Once this is done, you can then use the UART port the same way you would use the USB/Serial or the Telnet port: you send it commands or G-codes, and you get answers.

As the UART has NO FLOW CONTROL, you MUST rigidly use the ping-pong protocol, sending ONE line of G-code per `ok` received.

You configure the baud rate for the UART port in the [configuration file](configuring-smoothie) by changing the `uart0.baud_rate` configuration option.

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
