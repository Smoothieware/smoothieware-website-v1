---
permalink: /landing-page-3d-printer
title: 3D Printer Controller - 32-Bit Without the Complexity
---

# Done with Marlin Recompilation? Switch to Smoothieboard

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="printer"></sl-icon>
  <strong>Tired of recompiling Marlin firmware every time you want to change a setting?</strong> Smoothieboard v2 offers 32-bit performance with text-file configuration. Fast prints, smooth motion, endless expandability. Works with Cartesian, Delta, CoreXY, and more. <strong>The open-source upgrade your printer deserves.</strong>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="https://www.robosprout.com/product-category/smoothieboards" style="display: inline-block; background: #28a745; color: white; padding: 1rem 2rem; font-size: 1.25rem; font-weight: bold; text-decoration: none; border-radius: 8px;">
    Upgrade to 32-Bit - $200
  </a>
  <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
    ✓ Text-File Config | ✓ No More Recompilation | ✓ Multi-Material Ready
  </div>
</div>
{:/nomarkdown}

---

## 8-Bit Board Holding Your Printer Back?

### Common Frustrations with 8-Bit Boards:

- ❌ **Marlin Recompilation Required** - Change PID values? Recompile (10-30 min). New stepper driver? Recompile. Different hotend? Recompile. Every configuration change requires PlatformIO compilation.
- ❌ **Limited Expansion** - Want multi-material (3+ extruders)? Many 8-bit boards lack available GPIO pins for additional steppers, heaters, and thermistors.
- ❌ **Configuration Complexity** - Marlin's configuration.h files require understanding C++ preprocessor directives and firmware compilation.
- ❌ **Firmware Updates Take Time** - Compiling and flashing Marlin firmware takes 10-30 minutes per update, making experimentation tedious.
- ❌ **Limited Processing Power** - ATmega2560 @ 16MHz with 8-16KB RAM limits motion planning buffer depth and acceleration calculations.

**Sound Familiar?**

You've spent hours:
- Fighting PlatformIO compilation errors
- Searching for the "right" Marlin configuration
- Recompiling firmware just to change a single number
- Wondering why "editing one setting" requires 10 minutes of compilation

**There's a Better Way.**

---

## 32-Bit Power with RepRap Simplicity

### What Changes with Smoothieboard:

**Configuration Made Simple:**
- ✅ **Text-File Editing** - Open `config.txt`, edit numbers, save, reboot. Done in 30 seconds.
- ✅ **No Compilation Required** - Change PID, speeds, steps/mm instantly
- ✅ **Drag-and-Drop Firmware Updates** - Copy `firmware.bin` to SD card, reboot. Automatic flash. No compilation tools needed.
- ✅ **Easy Experimentation** - Try settings, revert if needed, no penalties
- ✅ **Well-Documented** - 250+ pages of clear, organized configuration documentation
- ✅ **Console Commands** - Telnet or USB access for real-time debugging and control

**Performance Improvements:**
- ✅ **Fast Prints** - 32-bit STM32H745 @ 400MHz handles high speeds smoothly
- ✅ **Silent Operation** - TMC2660/TMC2590 drivers with StealthChop2 for near-silent stepper motors
- ✅ **Better Motion Quality** - Advanced trajectory planning reduces ringing and artifacts
- ✅ **No Stuttering** - 1MB RAM and 400MHz processor handle complex models without bottlenecks
- ✅ **Smooth Microstepping** - Up to 1/256 microstepping for ultra-smooth motion

**Expandability:**
- ✅ **Multi-Material** - Support for 5+ extruders (63 GPIO available on v2 Prime)
- ✅ **Chamber Heaters** - Multiple heater control for enclosed printers
- ✅ **Filament Sensors** - Runout detection, encoder-based jam monitoring
- ✅ **Chamber Temperature** - Additional thermistor inputs
- ✅ **Web Interface** - Built-in HTTP server for browser-based monitoring and control
- ✅ **Network Control** - Ethernet with Telnet, HTTP, and Simple FTP (no USB cable needed)
- ✅ **Custom Features** - Modular firmware architecture makes contributions simple

---

## Printer Architecture Support

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="gear"></sl-icon>
  <strong>Works with Every 3D Printer Design</strong>
</sl-alert>
{:/nomarkdown}

**Cartesian (Prusa-Style):**
- Prusa i3 clones, Ender 3, CR-10, custom Cartesian builds

**CoreXY:**
- Voron 2.4, Voron Trident, RatRig V-Core, HevORT, custom CoreXY

**Delta:**
- Rostock Max, Kossel / Mini Kossel, Anycubic Predator, custom Delta builds

**Others:**
- H-Bot / Markforged kinematics
- SCARA printers (Morgan SCARA)
- Belt printers
- Polar / Radial designs

**Kinematics Automatically Handled** - Linear delta math, CoreXY transformations, SCARA calculations all built-in.

---

## Smoothie vs Marlin: The Comparison

| Feature | Marlin (8-bit) | Smoothieboard v2 |
|---------|----------------|------------------|
| **Processor** | ATmega2560 @ 16MHz | STM32H745 @ 400MHz |
| **Memory** | 8-16KB RAM | 1MB RAM |
| **Configuration** | Recompile firmware (10-30 min) | Edit text file (30 seconds) |
| **Firmware Updates** | Compile + flash (10-30 min) | Drag-and-drop .bin file (1 min) |
| **PID Tuning** | Recompile | Change 3 numbers, reboot |
| **Steps/mm Change** | Recompile | Edit line, save, reboot |
| **Stepper Drivers** | A4988/DRV8825 (basic) | TMC2660/TMC2590 (silent) |
| **Microstepping** | Typically 1/16 | Up to 1/256 |
| **Expansion GPIO** | Limited on most boards | 63 GPIO available |
| **Network Control** | Requires add-on | Built-in Ethernet |
| **Learning Curve** | High (firmware development) | Low (text editing) |
| **Open Source** | Firmware only | OSHWA HW+FW (FR000021) |

**Example: Changing Extruder Steps/mm**

**Marlin:** Edit Configuration.h → Install PlatformIO → Compile (5 min wait) → Upload → Test → Repeat if wrong. **Total: 15-30 minutes.**

**Smoothie:** Edit {::nomarkdown}<setting v1="extruder.hotend.steps_per_mm" v2="extruder.hotend.steps_per_mm"></setting>{:/nomarkdown} → Save → Reboot. **Total: 30 seconds.**

---

## Not Klipper, Not Marlin - Just Smoothie

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>How Smoothie Compares to Alternatives</strong>
</sl-alert>
{:/nomarkdown}

**vs Klipper:**
- ✅ **No Raspberry Pi Required** - Standalone controller, simpler setup
- ✅ **Lower Total Cost** - No $35-75 Pi needed
- ✅ **Less Complexity** - One device instead of two
- ✅ **Easier Setup** - No Linux, SSH, or Pi configuration needed
- ❌ **Input Shaper** - Klipper has this feature, Smoothie doesn't (yet)

**vs Marlin:**
- ✅ **32-Bit Performance** - 25x faster processor than 8-bit Marlin
- ✅ **Text-File Config** - vs firmware recompilation
- ✅ **More Memory** - 1MB vs 16KB
- ✅ **Easier to Use** - No PlatformIO, Arduino IDE, or compilation needed

**When to Choose Smoothie:**
- Want standalone controller (no Raspberry Pi)
- Value simplicity and ease of configuration
- Prefer OSHWA open hardware
- Don't need bleeding-edge features like input shaper

---

## Multi-Material & Advanced Features

**Multi-Material Printing:**
- Support for 2-10 extruders (plenty of GPIO available)
- Independent temperature control per extruder
- Tool change scripting (configurable via G-code)
- Compatible with multi-material systems

**Chamber Control:**
- Heated chamber support for enclosed printers
- Chamber temperature monitoring
- Exhaust fan control based on temperature
- Safety interlocks for overheating protection

**Filament Management:**
- Filament runout sensors (simple or switch-based)
- Encoder-based filament monitoring (detects jams/tangles)
- Auto-pause on filament runout
- Resume print after filament change

**Advanced Sensors:**
- BLTouch bed leveling probe support
- Inductive/capacitive probe support
- Strain gauge bed leveling
- Custom sensor integration via GPIO

---

## Configuration Example: See How Easy It Is

**Smoothie config.txt Example (Human-Readable):**

```
# Extruder Configuration
extruder.hotend.enable              true
extruder.hotend.steps_per_mm        140
extruder.hotend.max_speed           50

# Hotend Temperature Control
temperature_control.hotend.enable   true
temperature_control.hotend.thermistor_pin  0.23
temperature_control.hotend.heater_pin      2.7
temperature_control.hotend.thermistor      EPCOS100K

# Heated Bed Configuration
temperature_control.bed.enable      true
temperature_control.bed.thermistor_pin  0.24
temperature_control.bed.heater_pin  2.5
temperature_control.bed.thermistor  Honeywell100K
```

**That's it. Human-readable. No compilation needed.**

Change PID values? Edit three numbers. Save. Reboot. Done.

---

## Software Compatibility

### Works with Your Favorite Tools:

**Slicers (All Compatible):**
- ✅ **PrusaSlicer / SuperSlicer** - Standard G-code output
- ✅ **Cura** - Excellent support
- ✅ **Simplify3D** - Full compatibility
- ✅ **IdeaMaker**
- ✅ **Slic3r** and variants

**Host Software:**
- ✅ **OctoPrint** - Popular choice (via Raspberry Pi + USB)
- ✅ **Pronterface** - Direct USB control
- ✅ **Repetier-Host** - Full support
- ✅ **Smoothie Web Interface** - Built-in HTTP server for network control

**Your Workflow Doesn't Change:** Slice → Send G-code → Print

---

## Frequently Asked Questions

**Q: Will this work with my [Ender 3 / CR-10 / Prusa] printer?**

A: Yes, if it uses standard 3D printer architecture. Wiring is similar to any control board swap (steppers, endstops, heaters, thermistors).

**Q: Is it easier to set up than Marlin?**

A: Initial wiring is the same as any board. Configuration is MUCH easier - text file editing vs firmware compilation.

**Q: Can I use OctoPrint?**

A: Yes. OctoPrint connects via USB (or network - Smoothie has Ethernet built-in).

**Q: What about automatic bed leveling (ABL)?**

A: Fully supported. BLTouch, inductive probes, capacitive probes all work with proper configuration.

**Q: Will my sliced G-code from PrusaSlicer/Cura work?**

A: Yes. Standard G-code from any slicer works perfectly.

**Q: Can I add more extruders later for multi-material?**

A: Absolutely. Just add more extruder module configurations and wire up the hardware. No firmware limits.

**Q: Does it support input shaper like Klipper?**

A: Not currently. If input shaper is critical for you, Klipper might be a better choice. Smoothie focuses on simplicity and standalone operation.

**Q: Is it faster than my 8-bit board?**

A: The processor is 25x faster, yes. Motion is smoother at high speeds. Whether YOU can print faster depends on your printer's mechanical limits (not the controller).

---

## Ready to Upgrade Your 3D Printer?

### Smoothieboard v2 Prime - $200

**What's Included:**
- Smoothieboard v2 Prime board
- Choice of TMC2660 or TMC2590 stepper drivers
- Pre-flashed firmware ready to configure
- Quick start guide

**Free 3D Printing Resources:**
- [3D printer wiring guide](3d-printer-guide)
- Sample configurations (Cartesian, Delta, CoreXY)
- OctoPrint setup instructions
- Slicer configuration examples
- Community forum support

**Where to Buy:**
- **[Robosprout (USA)](https://www.robosprout.com/product-category/smoothieboards)** - In stock, ships internationally

{::nomarkdown}
<div style="text-align: center; margin: 3rem 0;">
  <a href="https://www.robosprout.com/product-category/smoothieboards" style="display: inline-block; background: #28a745; color: white; padding: 1.5rem 3rem; font-size: 1.5rem; font-weight: bold; text-decoration: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    Upgrade Your 3D Printer - $200
  </a>
  <div style="margin-top: 1.5rem;">
    <strong>✓ No More Marlin Recompilation</strong><br>
    ✓ 32-Bit Performance<br>
    ✓ Multi-Material Ready<br>
    ✓ Text-File Configuration<br>
    ✓ Works with All Slicers & OctoPrint
  </div>
</div>
{:/nomarkdown}

---

**Related Pages:**
- [Complete 3D Printer Installation Guide](3d-printer-guide)
- [Temperature Control Configuration](temperaturecontrol)
- [Extruder Setup](extruder)
- [Supported Arm Solutions](arm-solutions) (Cartesian, Delta, CoreXY, etc.)
