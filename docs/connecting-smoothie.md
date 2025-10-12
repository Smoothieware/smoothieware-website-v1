---
layout: default
title: Connecting to Smoothie
---

# Connecting to Smoothie

{::nomarkdown}
<img src="images/circuit.png" alt="Circuit Connection" width="300" height="auto" style="float: right; margin-left: 1rem;"/>
{:/nomarkdown}

This documentation is currently being developed.

## Available connection methods

Smoothie supports multiple ways to connect and communicate:

- **USB** - See the [USB](usb) documentation for details on USB serial communication

- **Ethernet** - See the [Network](network) documentation for Ethernet connectivity

- **UART** - See the [UART](uart) documentation for serial UART communication

- **Bluetooth** - See the [Bluetooth Serial](bluetooth-serial) documentation for wireless connectivity

- **WiFi** - See the [WiFi](wifi) documentation for wireless network connectivity

Each connection method has its own advantages and use cases.

## Getting started

For most users, the simplest way to connect is via USB:

1. Connect your Smoothieboard to your computer using a USB cable

2. Install the appropriate [Windows drivers](windows-drivers) if needed

3. Use host [software](software) like Pronterface or bCNC to communicate with the board

4. See [Console Commands](console-commands) for available commands

For more advanced setups, consider using Ethernet for more reliable connectivity, especially in electrically noisy environments.
