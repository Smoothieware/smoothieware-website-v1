---
permalink: /landing-page-cnc-controller
title: CNC Controller Board - Smoothieboard v2 Prime
---

# CNC Board Failed Again? Upgrade to Reliable 32-Bit Control

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Tired of cheap controllers failing mid-project?</strong> Smoothieboard v2 offers reliable 32-bit control backed by 15 years of community support. One board handles CNC milling, laser cutting, and 3D printing. OSHWA certified open hardware. <strong>Used by 350+ makers worldwide.</strong>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.robosprout.com/product-category/smoothieboards" style="display: inline-block; background: #0066cc; color: white; padding: 1rem 2rem; font-size: 1.25rem; font-weight: bold; text-decoration: none; border-radius: 8px;">
    Shop Now - $200 at Robosprout
  </a>
  <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
    ✓ In Stock | ✓ Ships in 2-3 Days | ✓ OSHWA Certified
  </div>
</div>
{:/nomarkdown}

---

## Frustrated with Your Current CNC Controller?

### Common Controller Limitations:

- ❌ **8-Bit Processing Limits** - GRBL's 2KB RAM limits motion planning buffer; users report "out of program storage space" with complex toolpaths
- ❌ **Configuration Complexity** - GRBL/Marlin require firmware recompilation (5-30 min) for many configuration changes
- ❌ **Limited Multi-Axis Support** - Budget 8-bit controllers designed for 3-axis; adding 4th/5th/6th axes requires custom builds
- ❌ **Spotty Documentation** - Cheap controllers often have minimal or poorly translated documentation
- ❌ **No Network Control** - Most budget controllers are USB-only; cable disconnections can interrupt jobs
- ❌ **Limited Expandability** - 8-bit Arduino boards have limited GPIO for adding features

### With Smoothieboard v2:

- ✅ **32-Bit Dual-Core Power** - STM32H745 @ 400MHz with 1MB RAM (500x more than GRBL's 2KB)
- ✅ **Handles Complex Toolpaths** - Deep motion planning buffer handles large CAM files from Fusion 360, VCarve, etc.
- ✅ **Text-File Configuration** - Edit config.txt, save, reboot (30 sec) - no firmware recompilation needed
- ✅ **Drag-and-Drop Firmware Updates** - Copy firmware.bin to SD card, automatic flash - no compilation tools needed
- ✅ **Native 6-Axis Support** - X,Y,Z,A,B,C built-in; no custom builds or pin remapping required
- ✅ **Network Control** - Built-in Ethernet with HTTP web interface, Telnet console, Simple FTP
- ✅ **GRBL Compatibility Mode** - Can parse GRBL-style G-code for easy migration
- ✅ **250+ Pages Documentation** - Comprehensive, organized, community-supported
- ✅ **63 GPIO Expansion** - 8 Gadgeteer headers for adding rotary axes, probes, sensors, custom features

---

## 32-Bit Power Under the Hood

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="cpu"></sl-icon>
  <strong>Technical Specifications</strong>
</sl-alert>
{:/nomarkdown}

**Processor:**
- STM32H745 dual-core (Cortex-M7 400MHz + M4 240MHz)
- 1MB Flash, 1MB RAM
- Handles complex calculations 8-bit boards can't

**Stepper Drivers:**
- TMC2660 (1.2-2.2A) or TMC2590 (2.5-4.6A) options
- SPI-controlled, quiet operation
- Microstepping up to 256

**Connectivity:**
- Ethernet (HTTP, Telnet, Simple FTP)
- USB host + device
- SDIO for fast SD card access
- 8× expansion headers (63 GPIO total)

**Applications:**
- CNC Mills (3-5 axis)
- Laser Cutters (CO2, diode, fiber)
- 3D Printers (Cartesian, Delta, CoreXY)
- Pick-and-place machines
- Custom automation

---

## Built by Makers, for Makers

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="people"></sl-icon>
  <strong>Community Proven</strong> - Smoothieboard has been the controller of choice for the maker community for over 15 years. Open-source hardware and firmware means you own it, you can fix it, you can improve it.
</sl-alert>
{:/nomarkdown}

**What the Community Says:**

> "Upgraded from GRBL to Smoothieboard - night and day difference. Actually handles my 3D surfacing toolpaths now."
>
> — r/hobbycnc community member

> "Been running Smoothie on my laser cutter for 3 years. Rock solid, never fails. Best upgrade I ever made."
>
> — MakerForums user

---

## How Smoothieboard Stacks Up

| Feature | 8-Bit GRBL Controllers | Smoothieboard v2 |
|---------|------------------------|------------------|
| **Processor** | ATmega328 @ 16MHz | STM32H745 dual-core @ 400MHz |
| **RAM** | 2KB (documented limit) | 1MB (500x more) |
| **Flash Storage** | 32KB | 1MB |
| **Configuration** | Recompile for many changes | Text-file config (30 sec) |
| **Firmware Updates** | Compile + flash (5-10 min) | Drag-and-drop .bin (1 min) |
| **Multi-Axis** | 3-axis (4+ requires mods) | Native 6-axis (X,Y,Z,A,B,C) |
| **Networking** | USB only | Ethernet + USB + Web Interface |
| **Console** | Limited $$ commands | Full Telnet/USB console |
| **GRBL Mode** | N/A (native) | Compatibility mode available |
| **Applications** | CNC primarily | CNC + Laser + 3D Print |
| **Expansion** | Limited Arduino GPIO | 63 GPIO via 8 Gadgeteer headers |
| **Stepper Drivers** | A4988/DRV8825 (basic) | TMC2660/TMC2590 (silent) |
| **Documentation** | Wiki, scattered | 250+ pages organized |
| **Open Source** | Firmware only | OSHWA certified HW+FW (FR000021) |

---

## Never Feel Stuck

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="book"></sl-icon>
  <strong>Comprehensive Documentation</strong>
</sl-alert>
{:/nomarkdown}

**What You Get:**
- **250+ pages of documentation** - [Browse the full docs](/)
- **Step-by-step guides** - [3D Printer Guide](3d-printer-guide), [Laser Guide](laser-cutter-guide), [CNC Mill Guide](cnc-mill-guide)
- **Active community forums** - 24-hour average response time
- **Configuration examples** - For every common machine type
- **Regular firmware updates** - 15 years of continuous development

**Key Resources:**
- [Full Documentation](/)
- [Configuration Guide](configuring-smoothie)
- [Supported G-Codes](supported-g-codes)
- [GitHub Repository](https://github.com/Smoothieware/Smoothieware)

---

## Ready to Upgrade?

### Smoothieboard v2 Prime - $200

**What's Included:**
- Smoothieboard v2 Prime board
- Choice of TMC2660 or TMC2590 stepper drivers
- Pre-flashed with latest firmware
- Quick start guide
- Access to full documentation

**Where to Buy:**
- **[Robosprout (USA)](https://www.robosprout.com/product-category/smoothieboards)** - Official US reseller, in stock, ships in 2-3 days
- **[Robotseed (Europe)](http://robotseed.com)** - EU reseller, ships in 3-5 days

{::nomarkdown}
<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.robosprout.com/product-category/smoothieboards" style="display: inline-block; background: #28a745; color: white; padding: 1.5rem 3rem; font-size: 1.5rem; font-weight: bold; text-decoration: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    Shop Smoothieboard v2 - $200
  </a>
  <div style="margin-top: 1rem;">
    <img src="/images/oshw-logo.svg" alt="OSHWA Certified" style="height: 40px; display: inline-block; margin: 0 10px;" />
    <span style="display: inline-block; margin: 0 10px; font-weight: bold;">OSHWA FR000021</span>
  </div>
  <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
    ✓ In Stock - Ships Today | ✓ 15 Years Proven | ✓ Used by 350+ Makers
  </div>
</div>
{:/nomarkdown}

---

## OSHWA Certified Open Hardware

Smoothieboard v2 is certified by the Open Source Hardware Association (OSHWA) under certification FR000021. This means:

- **You own it** - No vendor lock-in
- **You can fix it** - Design files available
- **You can modify it** - Improve it for your needs
- **You can build it** - Make your own if you want
- **Community-driven** - 15 years of collaborative development

This is more than just an open-source firmware running on proprietary hardware. Smoothieboard v2 is **fully open** - hardware, firmware, and documentation.

---

## Frequently Asked Questions

**Q: Will this work with my existing CNC/laser/3D printer?**
A: If your machine currently uses a motion controller (GRBL, Marlin, etc.), Smoothieboard can replace it. Wiring is straightforward - connect stepper motors, endstops, and any heaters or laser controls.

**Q: Is it difficult to set up?**
A: If you built or wired your current machine, you can handle Smoothieboard. Configuration is done via a text file (no firmware compilation needed). Our 250+ page documentation walks you through every step.

**Q: What software can I use with Smoothieboard?**
A: Any software that sends G-code works. For CNC: bCNC, CNCjs, Universal G-Code Sender. For lasers: LightBurn, LaserGRBL, LaserWeb. For 3D printing: OctoPrint, Pronterface, Repetier-Host.

**Q: Can I add more features later?**
A: Absolutely. With 63 GPIO pins available via expansion headers, you can add rotary axes, tool changers, probes, sensors, whatever you can imagine.

**Q: How is this different from GRBL?**
A: Smoothieboard is a complete hardware + firmware solution with a 32-bit processor (vs GRBL's 8-bit). Key advantages: 1MB RAM vs 32KB, text-file configuration vs recompiling firmware, built-in Ethernet, native 6-axis support, and extensive documentation. See our [GRBL Alternative](landing-page-grbl-alternative) page for detailed comparison.

**Q: Do you offer support?**
A: We have extensive documentation (250+ pages), active community forums, and IRC channels. Average response time is under 24 hours. For commercial support inquiries, [contact us](contact).

---

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="tools"></sl-icon>
  <strong>Building or Upgrading a Machine?</strong> Check out our detailed guides for your specific application:
  <ul style="margin-top: 1rem;">
    <li><a href="/3d-printer-guide">3D Printer Installation Guide</a></li>
    <li><a href="/laser-cutter-guide">Laser Cutter Installation Guide</a></li>
    <li><a href="/cnc-mill-guide">CNC Mill Installation Guide</a></li>
    <li><a href="/landing-page-k40-laser-upgrade">K40 Laser Upgrade Guide</a></li>
  </ul>
</sl-alert>
{:/nomarkdown}
