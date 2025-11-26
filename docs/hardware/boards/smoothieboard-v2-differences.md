---
permalink: /smoothieboard-v2-differences
title: Smoothieboard V2 vs V1 - Complete Comparison
---

# Smoothieboard V2 vs V1 - Complete Comparison

This comprehensive guide documents all the differences between Smoothieboard V2 and V1, including hardware specifications, firmware architecture, configuration changes, and migration considerations.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Target Audience:</strong> Users migrating from V1 to V2, developers porting code, and anyone evaluating which version to choose. For basic V2 specifications, see <a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a>.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<a href="/images/v2-prime.png">
  <img src="/images/v2-prime.png" alt="Smoothieboard V2 Prime" style="float: right; margin-left: 1rem; max-width: 300px"/>
</a>
{:/nomarkdown}

## Quick Comparison

| Feature | V1 (LPC1769) | V2 (STM32H745) | Improvement |
|---------|--------------|----------------|-------------|
| **CPU Clock** | 120 MHz | 480 MHz | 4x faster |
| **Flash** | 512 KB | 2 MB | 4x more |
| **RAM** | 64 KB | 1 MB | 16x more |
| **Step Rate** | 100 kHz | 200 kHz | 2x faster |
| **Microstepping** | 1/32 | 1/256 | 8x finer |
| **SD Card Speed** | 0.4-0.5 MB/s | 10-25 MB/s | 20-50x faster |
| **Stepper Drivers** | A5984 (basic) | TMC2660/2590 (silent) | Much quieter |
| **Expansion GPIO** | Limited | 90 pins (Gadgeteer) | Extensive |
| **Price** | $100-150 | $230 | Higher |

---

## 1. Hardware Platform

### 1.1 Microcontroller Comparison

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="cpu"></sl-icon>
  <strong>Major Upgrade:</strong> The STM32H745 is a significantly more powerful processor, enabling faster motion, more features, and better multitasking through its RTOS-based architecture.
</sl-alert>
{:/nomarkdown}

#### V1: NXP LPC1769

| Specification | Value |
|--------------|-------|
| **Core** | ARM Cortex-M3 |
| **Clock** | 100-120 MHz |
| **Flash** | 512 KB |
| **RAM** | 64 KB (32 KB local + 32 KB AHB SRAM) |
| **FPU** | None (software emulation) |
| **Cache** | None |

#### V2: STM32H745

| Specification | Value |
|--------------|-------|
| **Core** | Dual-core: Cortex-M7 (480MHz) + Cortex-M4 (240MHz) |
| **Flash** | 2 MB |
| **RAM** | 1 MB total (DTCM: 128KB, ITCM: 128KB, AXI SRAM: 512KB, SRAM1-4: 352KB) |
| **FPU** | Double-precision (M7), single-precision (M4) |
| **Cache** | 16KB I-cache + 16KB D-cache |
| **Package** | 265-pin BGA |

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>M4 Core Status:</strong> The M4 core is currently unused/disabled in firmware (configured to sleep on boot). Enabling dual-core operation requires considerable development work. Potential future uses include UI, networking, or data logging.
</sl-alert>
{:/nomarkdown}

### 1.2 Board Variants

**V2 Prime (In Production):**
- STM32H745 dual-core processor
- 4x TMC2660 or TMC2590 stepper drivers
- 9x Gadgeteer expansion headers (90 pins)
- Ethernet (10/100 Mbps)
- Dual USB (Device + Host)
- SDIO SD card interface
- Price: $230 USD
- OSHWA certified: FR000021

**V2 Mini (Development Postponed):**
- Lower-cost variant, not currently available
- COVID and tariffs delayed development

**V2 Pro (Cancelled):**
- Was planned to include FPGA for megahertz step rates
- Cancelled with the LPC4330 redesign

### 1.3 Physical Specifications

| Dimension | V1 | V2 |
|-----------|----|----|
| **Length** | 129 mm | ~140-150 mm |
| **Width** | 105 mm | ~120-130 mm |
| **Mounting** | 4 corner M3 holes | 4 corner M3 holes |

---

## 2. Stepper Motor Drivers

### 2.1 Driver Comparison

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="volume-mute"></sl-icon>
  <strong>Silent Operation:</strong> The TMC drivers in V2 support StealthChop2 for near-silent operation - you can run a 3D printer in your bedroom without waking anyone up.
</sl-alert>
{:/nomarkdown}

| Feature | V1 (A5984) | V2 (TMC2660/2590) |
|---------|------------|-------------------|
| **Count** | 3-5x | 4x |
| **Max Current** | 2A | 2.8A (2660) / 5.0A (2590) |
| **Microstepping** | Up to 1/32 | Up to 1/256 |
| **Silent Mode** | No | StealthChop2 |
| **Sensorless Homing** | No | StallGuard4 |
| **Dynamic Current** | No | CoolStep |
| **Interface** | Digital pot (I2C) | SPI configuration |

### 2.2 TMC2660 vs TMC2590

| Specification | TMC2660 | TMC2590 |
|--------------|---------|---------|
| **Ideal Current** | 1.2-2.2A | 2.5-4.6A |
| **Best For** | 3D printers (NEMA 17) | CNC (NEMA 23/24) |
| **Thermal** | Lower heat, passive cooling OK | Higher heat, may need fan |
| **Board ID** | 1 | 0 |

### 2.3 Configuration Changes

**V1 Motor Configuration:**
```
alpha_steps_per_mm 100
alpha_step_pin 2.0
alpha_dir_pin 0.5
alpha_en_pin 0.4
alpha_current 1.5
alpha_max_rate 30000.0
```

**V2 Motor Configuration:**
```ini
[actuator]
alpha.steps_per_mm = 100
alpha.step_pin = PG0
alpha.dir_pin = PG1
alpha.en_pin = PJ2
alpha.max_rate = 30000
alpha.microsteps = 32
alpha.driver = tmc2660

[tmc2660]
alpha.current = 1500  # mA (not A like v1)
alpha.step_interpolation = false
```

Key changes:
- Setting names use dots: {::nomarkdown}<setting v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting>{:/nomarkdown}
- Pin names changed: {::nomarkdown}<pin>2.0</pin>{:/nomarkdown} (v1) vs {::nomarkdown}<pin>PG0</pin>{:/nomarkdown} (v2)
- Current in milliamps (v2) vs amps (v1)
- INI sections replace flat config

---

## 3. Power System

### 3.1 Power Architecture

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Dual Power Design:</strong> V2 separates motor power (Vmot) from MOSFET power (VFET), providing better isolation and current handling.
</sl-alert>
{:/nomarkdown}

| Input | V1 | V2 |
|-------|----|----|
| **Motor Power** | Single input, 12-24V | Vmot via XT30, 12-24V |
| **MOSFET Power** | Shared with motor | VFET via 2x XT30, 12-24V (30A total) |
| **Logic 5V** | Regulator or USB | 3 sources with ideal diode OR |
| **5V Regulator** | Optional (solder on) | Onboard 3A |

**V2 5V Power Sources (automatic selection):**
1. **Onboard Regulator:** 3A from Vmot (JP16 to disable)
2. **USB Power:** ~500mA (JP15 to disable)
3. **External 5V:** Via 5VIN header

### 3.2 MOSFET Outputs

| Output | V1 | V2 |
|--------|----|----|
| **Low-current FETs** | 3x ~5A | 4x ~5A (hotend1, hotend2, fan1, fan2) |
| **Bed FET** | 3x ~12A | 2x parallel ~10-12A |
| **Safety** | None | High-side PFET watchdog on 4 low-current FETs |
| **SSR Outputs** | None | 2x logic-level outputs |

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="shield-check"></sl-icon>
  <strong>Thermal Runaway Protection:</strong> V2's high-side PFET can instantly kill all 4 low-current outputs. If a MOSFET fails shorted, the watchdog can still disconnect power - a significant safety improvement over V1.
</sl-alert>
{:/nomarkdown}

---

## 4. Inputs and Expansion

### 4.1 ADC Inputs (Thermistors)

| Feature | V1 | V2 |
|---------|----|----|
| **ADC Resolution** | 12-bit | 16-bit (oversampled) |
| **Buffered Inputs** | Basic | 3x with ESD protection + op-amp buffer |
| **Unbuffered** | - | 6x on Gadgeteer headers |
| **Board Thermistor** | No | Yes (PCB temperature monitoring) |
| **Voltage Monitoring** | No | Yes (Vmot, Vfet, Vbat via ADC3) |

### 4.2 Endstops

| Feature | V1 | V2 |
|---------|----|----|
| **Count** | 6 (X/Y/Z min/max) | 6 (X/Y/Z min/max) |
| **Protection** | Basic | Buffered + ESD protected |
| **Current Limiting** | No | Yes (3.3V and 5V outputs) |

### 4.3 Probe Input

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>CRITICAL WARNING:</strong> The JP7 jumper controls probe input voltage range. Default (JP7 intact) is for &lt;5V operation. For probes &gt;5V (like many inductive probes), you <strong>MUST cut JP7</strong> or you will damage the board!
</sl-alert>
{:/nomarkdown}

| Feature | V1 | V2 |
|---------|----|----|
| **Input Type** | Basic | Comparator-based |
| **Voltage Range** | ~5V | 3-45V (configurable via JP7) |
| **Protection** | Basic | ESD + buffering + comparator |

### 4.4 Gadgeteer Expansion Headers

V2 introduces 9 standardized Gadgeteer headers (GA through GI):

| Per Header | Value |
|------------|-------|
| **Pins** | 10 |
| **GPIO** | 7 |
| **Power** | 5V + 3.3V + GND |
| **Total GPIO** | 63 pins |

**Power Budget:**
- 5V: 3A total from onboard regulator
- 3.3V: 100-500mA total

**Use Cases:**
- Displays (LCD, touchscreens)
- Additional thermistors (via daughterboard)
- External stepper drivers
- Sensors, Raspberry Pi, custom boards

---

## 5. Connectivity

### 5.1 Storage

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="speedometer"></sl-icon>
  <strong>SD Card Speed:</strong> This was the #1 user complaint about V1 - finally fixed! V2's SDIO interface is 20-50x faster than V1's SPI interface.
</sl-alert>
{:/nomarkdown}

| Feature | V1 | V2 |
|---------|----|----|
| **Interface** | SPI | SDIO |
| **Speed** | 0.4-0.5 MB/s | 10-25 MB/s |
| **Max Capacity** | 32 GB SDHC | 32 GB SDHC |

### 5.2 USB

| Feature | V1 | V2 |
|---------|----|----|
| **Ports** | 1 (Device) | 2 (Device + Host) |
| **Speed** | 12 Mbps (Full Speed) | 12 Mbps (Full Speed) |
| **Functions** | CDC/ACM + MSC | CDC/ACM + MSC (MTP planned) |
| **Host Support** | No | Hardware present, firmware WIP |

### 5.3 Ethernet

| Feature | V1 | V2 |
|---------|----|----|
| **Speed** | 10/100 Mbps | 10/100 Mbps |
| **Stack** | uIP (lightweight) | FreeRTOS+TCP (full-featured) |
| **Throughput** | ~1 Mbps | ~10 Mbps |

**V2 Network Services:**
- HTTP (port 80): Web interface, file upload, RESTful API
- Telnet (port 23): G-code over network
- SFTP (port 115): File transfer
- **Auto-Update (NEW):** Network firmware updates
- **NTP (NEW):** Time synchronization

---

## 6. Firmware Architecture

### 6.1 Operating System

| Feature | V1 | V2 |
|---------|----|----|
| **Architecture** | Bare-metal superloop | FreeRTOS multitasking |
| **Concurrency** | Single-threaded | Multi-threaded with task scheduling |
| **Event System** | Global event bus | Direct module communication |
| **Step Ticker** | 100 kHz | 200 kHz (50 kHz in debug) |

**RTOS Benefits:**
- Preemptive multitasking (predictable timing)
- Network/USB don't slow down motion
- Stack overflow detection
- Better memory management

### 6.2 Module System

**V1:** Event-based with broadcast model
```cpp
class Module {
    virtual void on_main_loop(void *);
    virtual void on_gcode_received(void *);
    // ~9 events total
};
```

**V2:** Configuration-based with direct communication
```cpp
class Module {
    Module(const char* group, const char* instance);
    virtual bool configure(ConfigReader& cr);
    virtual bool request(const char *key, void *value);
    static Module* lookup(const char *group, const char *instance);
};
```

### 6.3 Configuration Format

**V1:** Custom checksum-based key-value (flat file)
```
alpha_steps_per_mm 100
beta_steps_per_mm 100
default_feed_rate 4000
```

**V2:** Standard INI with sections
```ini
[motion control]
default_feed_rate = 4000
default_acceleration = 1000.0

[actuator]
alpha.steps_per_mm = 100
alpha.max_rate = 30000
```

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="file-earmark-text"></sl-icon>
  <strong>Config Migration:</strong> V1 and V2 config files are NOT compatible. Manual conversion is required - there is no automatic migration tool.
</sl-alert>
{:/nomarkdown}

---

## 7. Configuration Reference

### 7.1 Key Setting Mappings

| Setting | |
|---------|---|
| **Steps/mm** | {::nomarkdown}<setting v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting>{:/nomarkdown} |
| **Max rate** | {::nomarkdown}<setting v1="alpha_max_rate" v2="actuator.alpha.max_rate"></setting>{:/nomarkdown} |
| **Acceleration** | {::nomarkdown}<setting v1="acceleration" v2="motion control.default_acceleration"></setting>{:/nomarkdown} |
| **Junction deviation** | {::nomarkdown}<setting v1="junction_deviation" v2="planner.xy_junction_deviation"></setting>{:/nomarkdown} |
| **Step pin** | {::nomarkdown}<setting v1="alpha_step_pin" v2="actuator.alpha.step_pin"></setting>{:/nomarkdown} |
| **Motor current** | {::nomarkdown}<setting v1="alpha_current" v2="tmc2660.alpha.current"></setting>{:/nomarkdown} |
| **Heater enable** | {::nomarkdown}<setting v1="temperature_control.hotend.enable" v2="hotend.enable"></setting>{:/nomarkdown} |
| **PID P** | {::nomarkdown}<setting v1="temperature_control.hotend.p_factor" v2="hotend.p_factor"></setting>{:/nomarkdown} |

### 7.2 V2 Configuration Sections

```ini
[general]
[system]
[motion control]
[planner]
[actuator]
[tmc2660] or [tmc2590]
[current control]
[endstops]
[zprobe]
[temperature control]
[extruder]
[switch]
[voltage monitor]
[network]
```

### 7.3 Pin Naming Changes

**V1 pins:** `Port.Pin` format (e.g., {::nomarkdown}<pin>2.0</pin>{:/nomarkdown}, {::nomarkdown}<pin>0.5</pin>{:/nomarkdown})

**V2 pins:** `PortPin` format (e.g., {::nomarkdown}<pin>PG0</pin>{:/nomarkdown}, {::nomarkdown}<pin>PA5</pin>{:/nomarkdown})

**Pin modifiers (same concept, both versions):**
- `!` - Invert
- `^` - Pullup
- `v` - Pulldown
- `o` - Open-drain
- `-` - No pull

Example: {::nomarkdown}<pin>PG10^</pin>{:/nomarkdown} (PG10 with pullup enabled)

---

## 8. Feature Status

### 8.1 Modules Ported from V1

| Module | Status | Notes |
|--------|--------|-------|
| Endstops | Working | Enhanced with slaved axis |
| Extruder | Working | |
| Laser | Working | |
| Temperature Control | Working | PID control |
| Temperature Switch | Working | Fan control |
| ZProbe | Working | Bed leveling |
| Switch | Working | I/O control |
| Kill Button | Working | |
| Player | Working | G-code playback |
| Network | Complete Rewrite | Much more capable |
| Current Control | Enhanced | TMC SPI control |
| Filament Detector | Working | |
| Drilling Cycles | Working | Renamed drillcycles |

### 8.2 New in V2

| Feature | Description |
|---------|-------------|
| **Display Drivers** | ST7920, TM1638 support |
| **Buttonbox** | Input switches, matrix keypads |
| **Lathe Module** | G33 threading, spindle sync |
| **MPG** | Manual Pulse Generator support |
| **Silent Steppers** | StealthChop2 |
| **OTA Updates** | Network firmware updates |
| **Dual Motors/Axis** | Software parallel motor support |

### 8.3 Not Yet Ported

- SCARA calibration
- Rotary Delta calibration
- Some advanced features

---

## 9. When to Choose Each Version

### Choose V2 If:

- Need 200 kHz step rates (fast motion, fine microstepping)
- Want silent stepper operation (StealthChop2)
- Require extensive expansion (90 GPIO pins)
- Need fast SD card access (large G-code files)
- Want network features (web, telnet, OTA updates)
- Building CNC lathe (G33 threading)
- Future-proof investment
- Budget allows $230

### Choose V1 If:

- Budget limited ($100-120)
- Need mature, stable firmware
- Prefer extensive documentation
- Simple application (basic 3D printer)
- Need 5 on-board drivers (V1 5X variant)
- Want proven reliability

---

## 10. Troubleshooting Quick Reference

### Board Won't Power
- Check Vmot power connected (12-24V to XT30)
- Check USB or external 5V connected
- Verify 3.3V LED is lit
- Check for short circuits

### Steppers Won't Move
- Verify motor current set in config
- Check motor wiring (coil pairs correct)
- Send simple G-code: `G0 X10`
- Check driver not overheated
- Verify Vmot LED is lit

### Heater Won't Heat
- Check VFET power connected (both XT30s for high current)
- Verify heater element resistance
- Check correct heater pin in config
- Verify temperature reads correctly: `M105`
- Check MOSFET output LED lights when heating

### SD Card Not Detected
- Format as FAT32 (not exFAT)
- Capacity 32GB or less
- Try different SD card
- Check card fully inserted

### Network Not Working
- Verify Ethernet cable connected (check link LED)
- Confirm `network.enable = true` in config
- Check IP assignment (DHCP or static)
- Try ping from computer
- Test Telnet (port 23) or HTTP (port 80) individually

---

## Related Pages

- [Smoothieboard V2 Prime](/smoothieboard-v2-prime) - Technical specifications
- [Smoothieboard V2 Schematic Reference](/smoothieboard-v2-schematic) - Hardware schematics
- [STM32H7 Pin Usage](/stm32h7-pin-usage) - Complete pin assignments
- [Smoothieboards](/smoothieboards) - All board versions
- [Configuring Smoothie](/configuring-smoothie) - Configuration guide

---

*Last updated: November 2025*
