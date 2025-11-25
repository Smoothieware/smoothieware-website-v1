---
permalink: /smoothie
---


# Smoothie

## What is Smoothieware?

Smoothieware is a free, opensource, high-performance G-code interpreter and CNC control system designed for modern ARM-based microcontrollers. It enables precise motion control for various machines including 3D printers, laser cutters, CNC mills, and pick-and-place machines.

The project consists of:
- **Firmware**: Real-time control software running on dedicated hardware
- **Controller Board**: Specialized PCB (Smoothieboard) with motor drivers and expansion capabilities
- **Community**: Active developers and users providing support and extensions

{::nomarkdown}
<review id="smoothie:hardware-overview">
<proposal>
{:/nomarkdown}

## Hardware Platform

Smoothieware runs on specialized controller hardware designed for precision motion control. There are two main versions currently in use:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### Smoothieware V1 - LPC1769 Platform

**Processor:**
- Microcontroller: NXP LPC1769 (ARM Cortex-M3)
- Clock Speed: 100-120 MHz
- Flash Memory: 512 KB
- RAM: 64 KB (32 KB local SRAM + 32 KB AHB SRAM)
- Architecture: Single-core 32-bit processor
- No hardware floating-point unit (FPU)

**Smoothieboard V1 Features:**
- 4 stepper motor drivers (bipolar capable)
- Temperature control for up to 3 heaters (hotend, heated bed, etc.)
- 3-axis endstop inputs with support for homing
- PWM outputs for spindle, fans, and heaters
- SD card support for storing G-code files
- Ethernet connectivity (100 Mbps)
- USB serial communication
- Expansion through connectors

**Best For:**
- 3D printers (RepRap and custom designs)
- Laser cutters and engravers
- Desktop CNC mills
- Small pick-and-place machines
- Educational robotics projects

**Performance Characteristics:**
- Suitable for standard motion control applications
- Step rates: up to ~40 kHz typical
- Real-time motion planning with acceleration management
- Adequate for hobby and semi-professional use

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

### Smoothieware V2 - STM32H745 Platform

**Processor:**
- Microcontroller: STM32H745 (Dual-core ARM)
  - M7 Core: 480 MHz (primary, currently used)
  - M4 Core: 240 MHz (optional co-processor, currently disabled)
- Flash Memory: 2 MB (4× larger than V1)
- RAM: 1 MB total (16× larger than V1)
  - DTCM: 128 KB (data tightly-coupled)
  - ITCM: 128 KB (instruction tightly-coupled)
  - AXI SRAM: 512 KB (high-speed)
  - Additional SRAM: 352 KB
- Architecture: Dual-core with dedicated caches
- Hardware floating-point units on both cores

**Smoothieboard V2 Prime Features:**
- 4 TMC2660/TMC2590 stepper drivers (advanced motion control ICs)
- 9 Gadgeteer expansion headers (90 pins total for modules)
- Temperature control capabilities
- Advanced endstop and sensor inputs
- PWM and digital I/O for various actuators
- SD card support (SDIO interface)
- Fast Ethernet (10/100 Mbps)
- Dual USB (Device + Host for debugging and connectivity)
- Extensive protection and monitoring circuitry
- OSHWA certified (FR000021)

**Performance Improvement Over V1:**
- CPU: 4.8× faster clock speed
- Performance: 8.2× more DMIPS (million instructions per second)
- Memory: 4× flash capacity, 16× RAM capacity
- Step rates: Support for much higher frequencies
- Processing power enables complex features and real-time algorithms

**Best For:**
- High-precision 3D printing with advanced features
- Professional laser cutting and engraving
- Industrial-grade CNC machining
- Complex multi-axis motion control
- Machines requiring real-time closed-loop feedback
- Applications needing network connectivity and remote operation

**Development Status:**
- Production: Available from RoboSprout and authorized distributors
- Price: ~$230 USD (as of Feb 2025)
- Firmware: Actively developed with frequent updates
- Community: Growing ecosystem of users and developers

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Smoothie is a free, opensource, high performance G-code interpreter and CNC control system for the ARM Cortex-M3 chip.

It is designed to run on the powerful [Smoothieboard](smoothieboard) 32bit controller.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Getting Started

Choose your path based on which version of Smoothieware you're using:

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

**V1 Users:**

1. [Getting Started Guide](start) - Quick setup instructions
2. [Smoothieboard Documentation](smoothieboard) - Hardware details
3. [Configuration Guide](configuring-smoothie) - Software setup
4. [FAQ](../community/faq) - Common questions answered

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Users:**

1. [Getting Started Guide](start) - Quick setup instructions (V2-specific)
2. [Smoothieboard V2 Documentation](smoothieboard) - Hardware details
3. [Configuration Guide](configuring-smoothie) - Software setup (V2-specific)
4. [Migration Guide](../migration) - Upgrading from V1 to V2

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## Communication & Support

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Support Channels:**

- [IRC](/irc) - Real-time chat (#smoothie on irc.freenode.net) - most active
- [Forum](https://forum.makerforums.info/) - Threaded discussions
- [Support Mailing List](http://groups.google.com/group/smoothieware-support) - Email-based support
- [Dev Mailing List](http://groups.google.com/group/smoothie-dev) - Development discussions
- [GitHub Issues](https://github.com/Smoothieware/Smoothieware/issues) - Bug reports and feature requests

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Support Channels:**

- [Maker Forums](https://forum.makerforums.info/) - Most active V2 discussions
- [Discord](https://discord.gg/) - Community Discord server (check forums for invite link)
- [GitHub Discussions](https://github.com/Smoothieware/Smoothieware/discussions) - Development discussions
- [Support Mailing List](http://groups.google.com/group/smoothieware-support) - Email-based support
- [IRC](/irc) - #smoothiedev on irc.freenode.net (less active for V2)

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## Contributing

The Smoothie project welcomes contributions from developers, users, and enthusiasts. Whether you want to:

- Improve documentation
- Report bugs and suggest features
- Develop new modules or features
- Create guides and tutorials
- Help test firmware releases

See the [Contributing Guide](../project/contributing) and [Editing the Wiki](../project/github/editing-the-wiki) pages for more information.

You can also [contact the project maintainers](mailto:wolf.arthur@gmail.com) to discuss how you can help.

## Learn More

For detailed information about specific topics:

- [Homepage](index) - Main documentation
- [Developer Guide](../developers/developers-guide) - Software architecture and development
- [Configuration Options](../configuration/configuration-options) - All available settings
- [G-code Reference](../gcode-reference/) - Supported G-codes and M-codes
- [Troubleshooting](../troubleshooting/) - Common problems and solutions
- [Community Resources](community) - User projects and links
