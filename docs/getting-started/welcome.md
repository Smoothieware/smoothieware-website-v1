---
permalink: /welcome
layout: default
title: Welcome to Smoothieware
---

# Welcome to Smoothieware

Smoothieware is an open-source G-code interpreter and CNC control system that turns your computer (or SBC) into a powerful motion controller for 3D printers, laser cutters, CNC mills, pick-and-place machines, and other automated equipment.

This documentation covers both **Smoothieware V1** (stable, feature-complete) and **Smoothieware V2** (modern redesign with improved architecture).

## Quick Start

Select your version to get tailored guidance:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### You're Using Smoothieware V1

**V1 is a mature, stable, production-ready firmware** for the LPC1769-based Smoothieboard. It's been refined over years and powers thousands of machines.

**Start here:**
1. [Installing Firmware](/firmware/installing-firmware-lpc) - Flash V1 firmware to your board
2. [Configuring Smoothie](/configuration/configuring-smoothie) - Set up your machine configuration
3. [Getting Help](/getting-help-community) - Join the IRC channel or forum

**Key resources:**
- [Configuration Options](/configuration/configuration-options) - Complete settings reference
- [G-code Reference](/gcode-reference) - Supported G-codes and M-codes
- [Hardware Documentation](/hardware) - Board specifications and pinouts
- [Machine-Specific Guides](/machine-guides) - 3D printer, laser, CNC setup

**Communication:**
- [IRC (Recommended)](/irc) - Real-time chat on #smoothie @ irc.freenode.net
- [Forum](https://forum.makerforums.info/) - Threaded discussions
- [Mailing Lists](http://groups.google.com/group/smoothieware-support) - Email-based support

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

### You're Using Smoothieware V2

**V2 is a modern redesign** with improved architecture, better hardware abstraction, and new features. It runs on modern hardware (LPC1778, LPC1847, ST32F4xx) and is actively developed.

**Start here:**
1. [Installing Firmware](/flashing-smoothie-firmware) - Flash V2 firmware to your board
2. [Configuration Guide](/configuring-smoothie) - Learn V2's INI-style configuration
3. [Getting Help](/getting-help-community) - Join Maker Forums or Discord

**Key differences from V1:**
- Modern hardware platforms (multiple chip options)
- Improved motion control and kinematics
- Better networking and connectivity
- Active development with new features
- Requires configuration file migration if upgrading from V1

**Key resources:**
- [V1 to V2 Migration](/migrating) - Upgrading from V1
- [Architecture Overview](/howitworks) - How Smoothie works internally
- [Configuration Options](/configuration-options) - All configuration settings
- [V2 Development](/compiling-v2-dev) - Building from source

**Communication:**
- [Maker Forums](https://forum.makerforums.info/) - Most active V2 community
- [Discord](https://forum.makerforums.info/) - Real-time community chat (invite in forums)
- [Mailing Lists](http://groups.google.com/group/smoothie-dev) - Development discussions
- [IRC](/irc) - #smoothiedev @ irc.freenode.net (less active)

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## About This Documentation

This documentation site covers:

- **Getting Started** - Installation, configuration, first steps
- **Configuration** - All settings and options for your version
- **Hardware** - Board specifications, pinouts, wiring
- **Firmware** - Flashing and updating your firmware
- **Modules** - Specialized functionality (temperature control, leveling, etc.)
- **G-code Reference** - Supported commands and syntax
- **Troubleshooting** - Common issues and solutions
- **Developer Guides** - Architecture, development, contributing

## Need Help?

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

**V1 Users:**
- **Quick questions?** Join [IRC](/irc) for real-time help
- **Detailed discussions?** Post on the [Forum](https://forum.makerforums.info/)
- **Email support?** [Support Mailing List](http://groups.google.com/group/smoothieware-support)

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Users:**
- **Community help?** [Maker Forums](https://forum.makerforums.info/) (most active)
- **Real-time chat?** [Discord](https://forum.makerforums.info/) (community-run)
- **Email support?** [Support Mailing List](http://groups.google.com/group/smoothieware-support)

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Version Selection</strong><br>
  Use the version selector in the navigation bar to switch between V1 and V2 documentation. This site shows version-specific content based on your selection.
</sl-alert>
{:/nomarkdown}

## Contributing

This documentation is community-maintained. If you find errors, have suggestions, or want to contribute:

1. See [Editing the Wiki](/editing-the-wiki) for contribution guidelines
2. Fork the [GitHub repository](https://github.com/Smoothieware/smoothieware-website-v1)
3. Submit a pull request with your improvements

Even small contributions make a huge difference for new users!

## Learn More

- **[About Smoothieware](/about)** - Project history and philosophy
- **[Community](/community)** - Join the Smoothie community
- **[GitHub Repositories](https://github.com/Smoothieware)** - Source code
- **[License](/license)** - GNU GPL v3
