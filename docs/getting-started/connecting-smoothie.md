---
permalink: /connecting-smoothie
layout: default
title: Connecting to Smoothie
---

# Connecting to Smoothie

{::nomarkdown}
<a href="/images/circuit.png">
  <img src="/images/circuit.png" alt="Circuit Connection" style="width: 150px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Smoothieboard supports multiple connection methods to communicate with your machine. Choose the method that best fits your use case and environment.

## Available connection methods

Smoothie supports several ways to connect and communicate:



{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

- **USB** - Virtual serial port and mass storage device via single USB cable (easiest for beginners)
- **Ethernet** - Remote connectivity via RJ45 Ethernet cable; requires network infrastructure
- **UART** - Hardware serial port via USB-to-UART adapter (good for debugging boot messages)
- **Telnet** - Access over Ethernet network (via network module)

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

- **USB** - Virtual serial port and mass storage via single USB cable; supports dual USB with host expansion
- **Ethernet** - Network connectivity for remote control and OTA firmware updates
- **UART** - Hardware serial port via USB-to-UART adapter (improved debug output)
- **Telnet** - Network-based terminal access (similar to v1)

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Quick Start Guide



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### For USB (Recommended)

1. **Connect the cable** - Plug a USB cable into the Smoothieboard and your computer
2. **Install drivers** (Windows only) - See [Windows drivers](windows-drivers) for older Windows versions
3. **Open host software** - Launch [Pronterface](pronterface), [bCNC](bcnc), or [LaserWeb](laserweb)
4. **Select serial port** - Choose your Smoothieboard's COM/serial port from the software
5. **Connect and send commands** - See [Console Commands](console-commands) for available commands

### For Ethernet

1. **Configure network** - Set <setting v1="network.enable"></setting> to `true` in your config
2. **Set IP address** - Use `network.ip_address auto` for DHCP or specify a static IP
3. **Connect cable** - Plug Ethernet cable into Smoothieboard and your router
4. **Access via Telnet** - Connect using [Pronterface](pronterface) with `IP:23` or terminal client
5. **Find IP address** - Check your router's admin interface or use a network scanner

### For UART (Debugging)

1. **Get adapter** - Purchase a USB-to-UART adapter (FTDI TTL cable, 3.3V)
2. **Connect to board** - TX/RX/GND to UART pins on Smoothieboard header
3. **Install drivers** - Follow adapter manufacturer's instructions
4. **Open terminal** - Use Putty, Picocom, or Cutecom at 115200 baud (boot) or 9600 baud (configured)
5. **Monitor boot messages** - See debug output during startup and communicate with board

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

### For USB (Recommended)

1. **Connect the cable** - Plug a USB cable into the Smoothieboard's USB2 Device port and your computer
2. **No drivers needed** - V2 uses standard USB CDC/ACM and MSC classes (all platforms supported)
3. **Open host software** - Launch [Pronterface](pronterface), [bCNC](bcnc), or other compatible software
4. **Select serial port** - Choose your Smoothieboard's COM/serial port from the software
5. **For SD card access** - Press the MSD button on the board to toggle mass storage mode, or use a command

**V2 USB Advantages:**
- Dual USB support (Device on USB2, Host expansion on USB1)
- Controlled MSD mount (safer operation)
- Standard drivers on all platforms
- Better power delivery and stability

### For Ethernet

1. **Enable network** - Set <setting v2="network.enable"></setting> to `true` in your config
2. **Configure IP** - Use `network.ip_address = auto` for DHCP or specify static IP
3. **Connect cable** - Plug Ethernet cable into Smoothieboard and your router
4. **Access board** - Use web interface (port 80), Telnet (port 23), or SFTP (port 115)
5. **Find IP address** - Check router's interface, use network scanner, or enable serial console

**V2 Network Advantages:**
- OTA (Over-The-Air) firmware updates via network
- Improved FreeRTOS+TCP stack (more reliable than v1's uIP)
- Web interface for configuration and control
- Better performance for multiple concurrent connections

### For UART (Debugging)

1. **Get adapter** - USB-to-UART adapter rated for 3.3V logic (FTDI TTL, CH340, etc.)
2. **Connect** - TX/RX/GND to UART pins on Smoothieboard header
3. **Install drivers** - Follow adapter manufacturer's instructions
4. **Open terminal** - Use Putty, Picocom, or Cutecom at 9600 baud initially
5. **Monitor startup** - View detailed boot messages and debug information

**Important:** Set <setting v2="uart console.baudrate"></setting> in your config (default 115200 after boot)

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Choosing a Connection Method

| Method | Best For | Advantages | Considerations |
|--------|----------|------------|---|
| **USB** | Beginners, single-machine operation | Simple setup, no network needed, portable | Cable length limits, potential EMI issues |
| **Ethernet** | Production, remote access, noisy environments | Long distances, reliable, network features | Requires network infrastructure, static IP recommended |
| **UART** | Troubleshooting, debugging boot issues | Direct hardware access, boot messages | Slower, requires USB adapter, not for production |

## Connection Reliability



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### USB Reliability

- Use a **short, high-quality, shielded USB cable** (under 2 meters / 6 feet)
- **Ferrite beads** on the cable help reduce EMI
- Keep the cable **away from large motors, welders, and electrical noise sources**
- Connect both machine and computer to the **same power strip**
- If experiencing disconnects, **switch to Ethernet** for a more stable connection

### Ethernet Reliability

- Use a **standard Ethernet cable** (CAT5e or better)
- Connect to a **proper Ethernet router** (not directly to computer without crossover configuration)
- Set a **static IP address** to avoid DHCP timeouts
- The network stack has **buffer limitations** with some DHCP servers

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

### USB Reliability

- Use a **short, high-quality USB cable** (under 2 meters / 6 feet)
- V2's improved power delivery makes it **more tolerant of longer/cheaper cables** than v1
- Avoid **EMI interference** from large motors and electrical noise
- Provide **external 5V power** via the 5vin header if experiencing power-related issues
- Allow **momentary stabilization** when entering MSD (mass storage) mode

### Ethernet Reliability

- Use a **standard Ethernet cable** (CAT5e or better)
- Connect via a **proper Ethernet router** for best reliability
- Set a **static IP address** for predictable access
- Check the **Ethernet link LED** on the RJ45 connector to verify connection
- V2's FreeRTOS+TCP stack is **more robust** than v1's uIP and handles DHCP better

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Detailed Documentation

For in-depth information on each connection method, see:

- **[USB Documentation](usb)** - Serial communication, mass storage, drivers, and best practices
- **[Network (Ethernet) Documentation](network)** - IP configuration, DHCP, static IP, web server, telnet access
- **[UART Documentation](uart)** - Hardware serial port, baud rate configuration, troubleshooting
- **[Bluetooth Serial Documentation](bluetooth-serial)** - Wireless serial connectivity (if available)
- **[WiFi Documentation](wifi)** - Wireless network connectivity (module-dependent)

## Next Steps

1. **Connect to your board** using your chosen method
2. **Send a test command** - Try `M114` to query current position
3. **See [Console Commands](console-commands)** for available commands
4. **Explore [host software](software)** - Pronterface, bCNC, LaserWeb, etc.
5. **Troubleshooting** - See individual method documentation if issues arise
