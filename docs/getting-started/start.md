---
permalink: /start
layout: default
title: Smoothieware Home
---

# Smoothieware

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="arrow-right-circle"></sl-icon>
  This page has been moved to the <a href="index">main homepage</a>. You will find all the same content there with improved formatting and organization.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Choose Your Version</strong><br>
  Smoothieware has two major versions. Select your version using the version selector at the top of the page to see documentation and guides specific to your hardware.
</sl-alert>
{:/nomarkdown}



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### Smoothieware V1

You're using the **original Smoothieware V1** platform with the LPC1769-based Smoothieboard.

**Getting Started:**
- Review the [unboxing guide](/unboxing) for hardware setup
- Follow the [configuration guide](/configuring-smoothie) to set up your machine
- Check [community support](/community) - most active on IRC (#smoothie @ freenode)
- See the [machine guides](#step-by-step-guides) for your specific machine type

**Key Resources:**
- Configuration uses simple key-value format in `config.txt`
- [Motion control](/motion-control) documentation for axis setup
- [Tool documentation](/tools) for extruders, lasers, and spindles

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

### Smoothieware V2

You're using the **new Smoothieware V2** platform with the STM32H745-based Smoothieboard V2 Prime.

**Getting Started:**
- Review the [unboxing guide](/unboxing) for hardware setup
- Follow the [configuration guide](/configuring-smoothie) to set up your machine
- Check [community support](/community) - most active on Maker Forums and Discord
- See the [machine guides](#step-by-step-guides) for your specific machine type

**Key Differences from V1:**
- More powerful dual-core processor (STM32H745)
- 16× more RAM, 4× more flash storage
- Enhanced stepper drivers with advanced features
- INI-style configuration format
- Expanded I/O capabilities with Gadgeteer expansion headers

**Key Resources:**
- Configuration uses INI-style format with sections
- [Architecture Overview](/howitworks) guide for technical details
- [Motion control](/motion-control) documentation adapted for V2
- [Configuration Options](/configuration-options) for all supported settings

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## Quick Links

### Step-by-Step Guides

- [3D Printer Guide](3d-printer-guide) - Complete setup for 3D printers
- [Laser Cutter Guide](laser-cutter-guide) - Setup for laser cutting
- [CNC Mill Guide](cnc-mill-guide) - Setup for CNC milling
- [Pick and Place Guide](/pick-and-place-guide) - Setup for pick and place machines

### Getting Started

- [Smoothieboard](smoothieboards) - About the Smoothieboard controller
- [Getting Smoothieboard](getting-smoothieboard) - Where to buy
- [Configuring Smoothie](configuring-smoothie) - Configuration guide
- [Troubleshooting](troubleshooting) - When things don't work

### Documentation

- [Basics](basics) - Fundamental concepts
- [Communication](communication) - Connecting to Smoothieboard
- [Motion Control](motion-control) - Motion system configuration
- [Tools](tools) - Extruders, lasers, spindles, and more
- [Using Smoothie](using-smoothie) - Operating your machine

### Support

- [Troubleshooting](troubleshooting) - Common problems and solutions
- [Contributing](contributing) - Help improve Smoothieware
- [Email Support](mailto:wolf.arthur@gmail.com) - Get help from the community

[View Full Documentation](index)
