---
permalink: /smoothieboard-v2-prime
---

# Smoothieboard v2 Prime Technical Specifications

Smoothieboard v2 Prime is the current production version of the Smoothie controller board. It's a complete redesign from v1, featuring a dual-core STM32H745 microcontroller, TMC2660 or TMC2590 stepper drivers, extensive GPIO expansion via Gadgeteer headers, and much faster SD card access.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Now Shipping:</strong> Smoothieboard v2 Prime is in production and available for retail purchase as of February 2025. Three years in the making due to chip shortage challenges, but worth the wait. Available at <a href="https://www.robosprout.com/">RoboSprout</a>.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Design Change:</strong> The v2 was originally designed around an LPC4330 processor. The chip went out of stock worldwide in 2020 due to Covid (weeks before final prototype). The board was completely redesigned around the STM32H745, which turned out to be a better chip anyway. See <a href="smoothieboard-v2-original">Smoothieboard v2 Original</a> for the full story.
</sl-alert>
{:/nomarkdown}

## Quick Specs

| Feature              | Value                                           |
| -------------------- | ----------------------------------------------- |
| **Processor**        | STM32H745 dual-core (M7 @ 480MHz + M4 @ 240MHz) |
| **Memory**           | 2MB Flash, 1MB RAM                              |
| **Stepper Drivers**  | 4× TMC2660 or TMC2590 (1/256 microstepping)     |
| **GPIO Expansion**   | 56 pins via 8× Gadgeteer headers                |
| **SD Card**          | SDIO interface (20-50× faster than v1's SPI)    |
| **Power Regulation** | On-board 3A @ 5V regulator                      |
| **Networking**       | Ethernet (HTTP, Telnet, auto-update)            |
| **OSHWA Cert**       | FR000021                                        |
| **Retail Price**     | ~$200 USD                                       |

## What's Better Than v1

The improvements are substantial, some of them:

**Processing Power:**
- 4× faster core (480MHz M7 vs 120MHz M3)
- 4× more Flash (2MB vs 512kB)
- 16× more RAM (1MB vs 64kB)
- Actual floating-point hardware (v1 used software emulation)
- Dual-core vs single-core

**SD Card Speed:**
- v1 used SPI interface (~400-500 kB/s)
- v2 uses SDIO interface (10-25 MB/s)
- This was the #1 user complaint about v1 - finally fixed

**Drivers:**
- Modern TMC drivers vs old A5984
- Much quieter (StealthChop mode)
- Up to 1/256 microstepping vs 1/32
- StallGuard sensorless homing capability
- Higher currents available (TMC2590 up to 4.6A vs 2A on v1)

**Expansion:**
- 56 GPIO pins vs limited on v1
- Standardized Gadgeteer headers
- Can add displays, sensors, external drivers easily

**Power:**
- On-board 3A 5V regulator (v1 required external 5V or soldering optional regulator)

**What v1 Has That v2 Doesn't:**
- More on-board drivers (v1 5X has 5 drivers, v2 has 4)
- Lower price (v1 is $100-150, v2 is $200)

If you need 5 on-board drivers, `v1 5X` is your only option right now. Otherwise `v2` is better in almost every way. Also note it's very easy to wire external drivers, `v2` is designed to be very modular and extendable.

## Processor

The STM32H745 is a beast compared to v1's LPC1769:

| Spec         | Value                                                       |
| ------------ | ----------------------------------------------------------- |
| **Chip**     | STMicroelectronics STM32H745                                |
| **Cores**    | 2× (M7 primary + M4 secondary)                              |
| **M7 Speed** | Up to 480MHz                                                |
| **M4 Speed** | Up to 240MHz                                                |
| **Flash**    | 2MB                                                         |
| **RAM**      | 1MB total (distributed across SRAM1/2/3/4)                  |
| **FPU**      | Yes (both cores - M7 double precision, M4 single precision) |
| **Package**  | 265-pin BGA                                                 |

The M7 core runs the main firmware - motion planning, step generation, temperature control, networking, everything. The M4 core is currently unused but available for future features or advanced user development.

The FreeRTOS operating system (unlike v1's bare-metal approach) allows better multitasking. Separate tasks handle motion, networking, and I/O without blocking each other.

### Performance Characteristics

**vs Smoothieboard v1:**
- CPU Speed: 4× faster (480 MHz M7 vs 120 MHz M3)
- Cores: Dual-core vs single-core
- Flash: 4× more (2 MB vs 512 kB)
- RAM: 16× more (1 MB vs 64 kB)
- FPU: Double precision (M7) vs none (M3 used software emulation)

**Real-World Impact:**
- Smoother motion planning with more look-ahead
- More complex features possible without running out of memory
- Faster G-code parsing
- Better multitasking capability (networking doesn't slow down motion)
- Room for future firmware expansion

The 32 kB L1 cache on the M7 (instruction + data) helps with performance for frequently-executed code paths like motion planning loops.

## Stepper Drivers

Two variants available with different current ratings:

### TMC2660 Variant (Lower Current)

Best for 3D printers and machines with NEMA 17 motors:

| Specification           | Value                                            |
| ----------------------- | ------------------------------------------------ |
| **Driver IC**           | Trinamic TMC2660                                 |
| **Number**              | 4                                                |
| **Ideal Current Range** | 1.2-2.2A per driver                              |
| **Absolute Maximum**    | 2.8A peak (not recommended continuous)           |
| **Microstepping**       | 1, 1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256 |
| **Logic Voltage**       | 3.3V                                             |
| **Motor Voltage**       | 4.75V-24V                                        |

Perfect for typical 1.5-1.8A NEMA 17 motors. Lower heat generation than TMC2590.

### TMC2590 Variant (Higher Current)

Best for CNC machines with NEMA 23/24 motors:

| Specification           | Value                                            |
| ----------------------- | ------------------------------------------------ |
| **Driver IC**           | Trinamic TMC2590                                 |
| **Number**              | 4                                                |
| **Ideal Current Range** | 2.5-4.6A per driver                              |
| **Absolute Maximum**    | 5.0A peak                                        |
| **Microstepping**       | 1, 1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256 |
| **Logic Voltage**       | 3.3V                                             |
| **Motor Voltage**       | 4.75V-24V                                        |

Handles big motors for CNC milling and routing. Generates more heat - fan recommended.

### TMC Features (Both Variants)

Both driver types support advanced features:

**StealthChop2:** Ultra-quiet operation, perfect for 3D printers in quiet environments. Automatically switches to SpreadCycle at higher velocities. You can actually run a printer in your bedroom without waking anyone up.

**SpreadCycle:** High-performance chopping algorithm with excellent torque. Dynamic current control. Better for CNC and high-speed applications where you care more about torque than noise.

**StallGuard4:** Sensorless homing - detect motor stalls without endstops. Requires tuning but pretty cool when it works. Useful for saving endstop inputs or for axes where mounting switches is difficult.

**CoolStep:** Automatic current reduction when motor is lightly loaded. Saves energy and reduces heat. The driver monitors load and backs off current when full torque isn't needed.

**1/256 Microstepping:** Smoothest possible motion. Much better than v1's 1/32 maximum. Higher microstepping means smoother movement and quieter operation, at the cost of slightly lower top speed (more step pulses needed for same distance).

### Driver Configuration

Motor current is set by sense resistors on the PCB (factory configured for each variant). Not user-adjustable without SMD soldering skills.

Microstepping and advanced features are configured in the firmware config file - no hardware changes needed. Typical settings: 1/16 or 1/32 for balance of smoothness and performance.

The two variants use identical PCB layouts - just different TMC chips populated. They're drop-in compatible from a firmware and connectivity standpoint. Same pinout, same connectors, same everything except the current rating.

## Power MOSFETs

### Low-Current Outputs (Hotends, Fans)

- 4× outputs (hotend1, hotend2, fan1, fan2)
- ~5A per output (verify with specific board revision)
- Up to 24V
- PWM capable for temperature control
- Individual LED on each output

**Safety Feature:** All 4 share a common +VFET power rail controlled by a high-side P-channel MOSFET. This acts as a watchdog - firmware can kill all outputs instantly. If a low-side FET fails shorted (stuck on), the high-side can still disconnect power. It's thermal runaway protection taken seriously. This is better than v1 where a failed MOSFET could keep a heater on even if firmware tried to shut it off.

### Heated Bed Output

- 2× MOSFETs in parallel for higher current
- ~10-12A combined capacity
- Independent of high-side watchdog (deliberate design choice)
- Handles typical heated bed loads (200-300W)

The bed output is independent of the high-side watchdog for a good reason - you don't want a thermal runaway detection on hotend1 to also kill power to the bed, which might be heating for a different print. Each output is controlled independently by firmware.

### Additional Outputs (SSRs)

SSR1, SSR2 outputs are signal-level (low current, typically milliamps). Use these to drive solid-state relay coils for high-power loads like spindles or large heated chambers. Not meant for directly driving high-current loads.

### Power Input (VFET)

Two XT30 connectors provide power to all MOSFET outputs:
- 15A per connector
- 30A total combined capacity

Why 2× XT30 instead of 1× XT60? Lower vertical profile (XT60 is taller, interferes with enclosures) and better support for 12V systems. A 250W heated bed at 12V draws 21A - you need both connectors. At 24V it's only 10A - one connector works but use both for reliability.

**Power Distribution Examples:**

**Example 1: 24V System**
- Heated bed: 250W @ 24V = 10.4A
- 2× Hotends: 80W @ 24V = 3.3A
- 2× Fans: 10W @ 24V = 0.4A
- **Total: ~14A** → Single XT30 sufficient (but use both for reliability)

**Example 2: 12V System**
- Heated bed: 250W @ 12V = 20.8A
- 2× Hotends: 80W @ 12V = 6.7A
- 2× Fans: 10W @ 12V = 0.8A
- **Total: ~28A** → **MUST use both XT30 connectors**

This is why the dual XT30 design was chosen. 12V systems need the combined capacity.

## Temperature Sensing

**3× Buffered ADC Inputs:**
- ESD protected + buffered for stability
- 16-bit resolution (via oversampling on 12-bit ADC)
- 0-3.3V range (via voltage divider)
- 100K NTC thermistors typical (configurable in firmware)
- Better noise immunity than v1's unbuffered inputs

The buffering on the main 3 inputs is a nice improvement. v1 occasionally had noise issues with thermistor readings - v2 addresses this with dedicated input conditioning circuitry.

**6× Unbuffered ADC Inputs:**
- Available on Gadgeteer headers
- For auxiliary sensors
- Standard GPIO protection only
- 16-bit resolution (via oversampling)

**1× On-Board Thermistor:**
- Monitors board temperature
- Thermal shutdown if board overheats
- Useful for enclosed builds (can detect insufficient cooling)
- Accessible via firmware (can be logged or monitored)

Use case: If your board temperature hits 50-60°C, you probably need better ventilation in your enclosure. The firmware can warn you or even shut down before damage occurs.

**Total ADC Resources:**

| Type                 | Count | Use                                   |
| -------------------- | ----- | ------------------------------------- |
| Buffered + Protected | 3     | Primary thermistors (hotends, bed)    |
| Unbuffered           | 6     | Auxiliary sensors, voltage monitoring |
| On-Board             | 1     | Board temperature                     |
| **Total**            | 10    | Extensive sensing capability          |

## Endstops and Probe

**6× Endstop Inputs:**

- X/Y/Z min and max
- All buffered + ESD protected (major improvement over v1)
- Noise immunity in electrically noisy CNC environments
- 3.3V logic (some pins 5V tolerant)
- Configurable pull-ups/pull-downs in firmware

The buffering and ESD protection is a significant reliability improvement. v1 would occasionally get false triggers in noisy environments (CNC routers with big spindles, plasma cutters, etc.). v2 addresses this with proper input conditioning.

**Dedicated Probe Input:**
- Comparator-based for fast, clean switching
- Supports up to 24V active probes (via voltage divider + protection)
- Simple mechanical switches work too (0V/3.3V)
- BLTouch, inductive sensors, capacitive sensors all supported
- Fast response time (comparator-based, not just GPIO)

There's a planned daughterboard for 40V+ inductive probes (future expansion). The comparator-based approach gives cleaner switching than GPIO-based probing - important for precision bed leveling.

## Gadgeteer Expansion Headers

This is one of the biggest features of v2:

**8× Headers (labeled GA through GH):**
- 10 pins each
- 7× GPIO per header = 56 total GPIO available
- Plus 5V, 3.3V, GND on each header
- Standardized pinout inspired by .NET Gadgeteer project

**Standard Pinout (All Headers):**
```
Pin 1:  GPIO (function varies by header)
Pin 2:  GPIO
Pin 3:  GPIO
Pin 4:  GPIO
Pin 5:  GPIO
Pin 6:  GPIO
Pin 7:  GPIO
Pin 8:  5V
Pin 9:  3.3V
Pin 10: GND
```

Each header has a mix of capabilities:
- **SPI:** High-speed data (multiple devices can share bus with different CS pins)
- **I2C:** Multiple devices on 2 wires (sensors, displays, I/O expanders)
- **ADC:** 6 unbuffered analog inputs across headers
- **GPIO:** Standard digital I/O (most pins)
- **PWM:** Pulse width modulation (on some pins)
- **UART:** Serial communication (on some headers)

See the [pinout documentation](https://github.com/Smoothieware/SmoothieV2/blob/master/pins.md) for exact functions per header. Each header (GA through GH) has specific pin functions documented there.

**Use Cases:**
- LCD displays and touchscreens (SPI or I2C interfaces)
- Raspberry Pi connection for OctoPrint/Klipper (UART + power)
- Additional stepper drivers (step/dir/enable signals)
- Sensors (distance, position, environmental via I2C/ADC)
- Camera/vision interfaces (future, requires firmware development)
- GPIO expanders for even more I/O
- Custom modules designed by community

**Power Delivery on Headers:**

The 5V on headers is sourced from the on-board regulator (3A total). Be careful with power budget:

**5V Budget Example:**
- Board logic: ~300-500mA
- Raspberry Pi 3: ~500-1500mA (idle to active)
- 7" touchscreen: ~400-700mA
- **Total: ~1.2-2.7A** (within 3A capacity)
- Remaining: 300-800mA for other peripherals

The 3.3V on headers is sourced from main 3.3V regulator (board logic power). Limited current available - typical budget: 100-500mA total across all headers. Use this for low-power sensors and logic, not power-hungry devices.

## Connectivity

### USB

USB 2.0 composite device with two functions:

**Mass Storage Device (MSD):** Press the MSD button on the board and the SD card appears as a USB drive. Drag and drop files, edit config, update firmware. When you eject, the board resets and reloads everything. There's an LED indicator showing MSD mode is active.

The button prevents accidental MSD mount during operation (which was a problem on v1 where it would auto-mount and interrupt prints).

**Serial (CDC):** Virtual COM port for sending G-code commands from host software. Standard baud rate 115200 (configurable in firmware).

### USB Host

The board has USB host capability via pins on a Gadgeteer header (PB12-PB15). Hardware is ready but firmware support isn't implemented yet. Future potential for:
- USB flash drives (G-code storage)
- USB keyboards (direct input)
- USB webcams (time-lapse, monitoring)
- USB Wi-Fi adapters

Requires firmware development but the hardware capability is there.

### Ethernet

10/100 Mbps Ethernet with on-board PHY and auto-negotiation:

**HTTP (Port 80):** Web interface served from SD card. Upload files, send commands, monitor status, view temperature graphs. RESTful API for custom applications. The web interface runs entirely on the board - no external server needed.

**Telnet (Port 23):** Send G-code over network. Multiple concurrent connections supported. Like USB serial but over Ethernet.

**Simple FTP (Port 115):** Legacy file transfer protocol from v1. Upload/download files to SD card. This is Simple File Transfer Protocol (not SSH SFTP) - runs on port 115.

**Auto-Update Feature:** Send `update` command via network. The board checks for firmware on SD card, verifies integrity (checksum), flashes new firmware, reboots automatically. Zero manual intervention for firmware updates over the network. Huge convenience for headless setups.

Network configuration (DHCP or static IP) is in the config file. mDNS/Bonjour hostname resolution is supported - access the board as `smoothieboard.local` instead of memorizing IP addresses.

### SD Card

SDIO interface - this is huge:

- v1: SPI interface (~400-500 kB/s)
- v2: SDIO interface (10-25 MB/s)
- **20-50× faster**

Large G-code files load instantly. Web interface is responsive. Raster laser images that would take minutes to load on v1 now load in seconds. This addresses the #1 complaint about v1.

Maximum 32GB SDHC, FAT32 format. Comes with firmware, config, and documentation pre-loaded.

**SD Card Contents:**

- `config.txt` - Main configuration file
- `firmware.bin` - Firmware binary (auto-flashes on boot if newer)
- G-code files (`.gcode`, `.nc`, `.ngc`)
- Web interface files (HTML, CSS, JavaScript in `/www/`)
- Documentation (optional `/docs/`)
- Log files (if logging enabled)

## Power System

### Motor Power (Vmot)

- XT30 connector
- 12-24V DC (24V recommended)
- Powers stepper drivers + on-board 5V regulator
- Typical draw: 5-20A depending on motors

24V is better than 12V for motors - higher top speeds, motors run cooler at same power (lower current), less voltage drop in wiring.

### On-Board 5V Regulator

This is a nice feature v1 lacked as standard:

- 3A continuous output
- Switching regulator (high efficiency, ~85-90% typical)
- Powers board logic + peripherals
- Input from Vmot (12-24V)

Sufficient for board + Raspberry Pi 3 + 7" touchscreen. No need for external 5V supply in most cases.

### 5V Input Options

**Option 1: On-Board Regulator (Preferred)**

- Powered by Vmot (motor power input)
- 3A capacity
- Single power supply for entire system

**Option 2: USB Power**

| Specification     | Value                                               |
| ----------------- | --------------------------------------------------- |
| **Source**        | USB port (from computer)                            |
| **Current Limit** | ~500mA (USB spec limit)                             |
| **Jumpers**       | Physical jumpers can be cut to disable USB 5V input |
| **Use Case**      | Testing, low-power operation without Vmot           |

**USB Jumper Feature:**

Cut jumpers to hardware-disable USB 5V input. Prevents Raspberry Pi from attempting to power board via USB. Useful when RPi connected to board via USB but both powered separately.

**Option 3: External 5V Input**

| Specification        | Value                                          |
| -------------------- | ---------------------------------------------- |
| **Connector**        | 5V input header (screw terminal or pin header) |
| **Current Capacity** | Depends on external supply (2-5A recommended)  |
| **Use Case**         | Alternative to on-board regulator              |

### Ideal Diode Protection

| Feature              | Value                                               |
| -------------------- | --------------------------------------------------- |
| **Protection Type**  | Ideal diode ORing                                   |
| **Protected Inputs** | All 3× 5V sources (regulator, USB, external input)  |
| **Function**         | Automatic source selection, backflow prevention     |
| **Voltage Drop**     | Minimal (~tens of mV, vs ~600mV for standard diode) |

**How It Works:**

Board automatically selects best 5V source from whatever's available. Prevents backfeeding between sources. No manual switching required. Protects against incorrect wiring.

**Priority (Typical):**

1. On-board regulator (if Vmot present)
2. External 5V input
3. USB power (if jumpers intact)

This means you can plug in multiple 5V sources without damaging anything - the board intelligently chooses the best source.

### VFET Power (MOSFET Outputs)

Covered above - 2× XT30, 12-24V, powers all heaters/fans/bed.

### Power LED Indicators

| LED          | Indicates                      |
| ------------ | ------------------------------ |
| **Vmot LED** | Motor power present (12-24V)   |
| **Vfet LED** | MOSFET power present (12-24V)  |
| **3.3V LED** | Logic power present (board on) |

**MOSFET Output LEDs:**

- Individual LED for each MOSFET output
- Hotend1, Hotend2, Bed, Fan1, Fan2, SSR1, SSR2
- Visual confirmation of output state
- Super useful for troubleshooting (is the firmware trying to heat?)

**MSD LED:**

- Indicates Mass Storage Device mode active
- Flashes when SD card mounted to computer
- Helps you remember to eject the drive before disconnecting

**Debug LEDs:**

- 4× MCU debug LEDs
- Programmable from firmware
- Used for status indication, error codes
- Can be customized for different purposes

### Power Budget Examples

**Typical 3D Printer (24V System):**

- 4× stepper motors @ 1.5A: 6A @ 24V = 144W
- Hotend heater: 40W @ 24V = 1.7A
- Heated bed: 250W @ 24V = 10.4A
- Fans: 10W @ 24V = 0.4A
- Board logic + peripherals (5V regulator from 24V): ~50W equivalent @ 24V
- **Total: ~18-20A @ 24V = 450-480W**
- **Recommended PSU: 24V, 25-30A (600-720W)** for headroom

**Typical CNC Router (24V System):**

- 4× stepper motors @ 3A: 12A @ 24V = 288W
- Spindle (via SSR, separate PSU): N/A (not from board)
- Board logic: ~50W equivalent @ 24V
- **Total: ~15A @ 24V = 360W** (motors + board)
- **Recommended PSU: 24V, 20A (480W)** (plus separate spindle PSU)

The CNC example shows why you might want external drivers for high-current motors - 3A is pushing the limit even for TMC2590. For big NEMA 34 motors drawing 6A+, definitely use external drivers.

## Physical Specifications

### Board Dimensions

**Note:** Official dimensions not published yet. Estimated based on component layout and photos.

| Specification              | Estimated Value                      |
| -------------------------- | ------------------------------------ |
| **Length**                 | ~140-150 mm (larger than v1's 129mm) |
| **Width**                  | ~120-130 mm (larger than v1's 105mm) |
| **PCB Thickness**          | Standard (1.6mm typical)             |
| **Mounting Holes**         | 4 corners (standard spacing)         |
| **Mounting Hole Diameter** | 3-3.2mm (M3 screws)                  |

**For Exact Dimensions:**
- Check CAD files on GitHub: [https://github.com/Smoothieware/Smoothieboard2](https://github.com/Smoothieware/Smoothieboard2)
- KiCAD or Gerber files contain precise measurements
- Contact RoboSprout for official mechanical drawings

**Size Comparison to v1:**
Larger footprint due to:
- 8× Gadgeteer headers (significant board space)
- Additional connectors (2× XT30 for VFET vs simpler v1 power)
- More complex PCB layout (more layers, more routing)
- Additional protection circuitry

### Component Layout

**Major Components:**
- STM32H745 BGA (center of board)
- 4× TMC2660 or TMC2590 drivers (near motor connectors for short traces)
- Ethernet PHY (near RJ45 connector)
- Power circuitry (near power inputs)
- 8× Gadgeteer headers (one or two sides of board)
- USB, Ethernet connectors (one edge)
- XT30 power connectors (edges for easy access)

The layout is designed to minimize noise - power circuitry separated from sensitive analog inputs, short high-current traces, proper grounding planes.

### Connectors Summary

| Connector Type         | Count    | Purpose                                           |
| ---------------------- | -------- | ------------------------------------------------- |
| **XT30**               | 3        | Vmot (motors), 2× VFET (MOSFETs)                  |
| **Motor (4-pin)**      | 4        | Stepper motor connections                         |
| **Endstop (3-pin)**    | 6        | X/Y/Z min/max endstops                            |
| **Thermistor (3-pin)** | 3        | Buffered ADC temperature inputs                   |
| **Gadgeteer (10-pin)** | 8        | Expansion headers                                 |
| **MOSFET Output**      | Variable | Screw terminals or headers for bed, hotends, fans |
| **USB**                | 1        | USB Type B or Micro USB (verify with revision)    |
| **Ethernet (RJ45)**    | 1        | Network connection                                |
| **MicroSD Slot**       | 1        | SD card storage                                   |
| **Probe Input**        | 1        | Dedicated probe connector                         |
| **5V Input**           | 1        | External 5V input (optional)                      |

### Environmental Specifications

| Specification             | Value                                                              |
| ------------------------- | ------------------------------------------------------------------ |
| **Operating Temperature** | 0°C to +50°C (ambient, with adequate cooling)                      |
| **Storage Temperature**   | -20°C to +70°C                                                     |
| **Humidity**              | 20-80% RH (non-condensing)                                         |
| **Cooling**               | Passive (heatsinks on drivers) + optional active (fan recommended) |

**Cooling Recommendations:**
- **TMC2660 Variant:** Passive cooling usually sufficient in open air. Fan recommended in enclosures or warm environments.
- **TMC2590 Variant:** Active cooling (fan) recommended, especially at high currents (>3A). 40-60mm fan blowing across stepper drivers works well.
- **Enclosed Builds:** Always add a fan for enclosed electronics boxes. Temperature can build up quickly.
- **On-Board Thermistor:** Monitor board temperature via firmware. If it hits >50-60°C, add more cooling.

## Firmware

**Smoothieware V2:**
- Target: STM32H745
- OS: FreeRTOS (better multitasking than v1's bare-metal)
- License: GPL
- Source: [github.com/Smoothieware/SmoothieV2](https://github.com/Smoothieware/SmoothieV2)
- Language: C++
- Build System: CMake + ARM GCC toolchain

### Firmware Architecture

**Dual-Core Usage:**
- **M7 Core:** Main firmware, motion control, real-time tasks
- **M4 Core:** Currently unused/disabled (available for future features)

**FreeRTOS Benefits:**
- Better multitasking than v1's bare-metal approach
- Separate tasks for motion, networking, I/O
- Priority-based scheduling (motion gets highest priority)
- More responsive system (networking doesn't block motion)

**Modules (Modular Architecture):**
- Motion planner
- Stepper control (TMC driver interface)
- Temperature control (PID, bang-bang)
- Endstop handling
- Probe/Z-probe
- Laser control
- Extruder control
- Network stack (HTTP, Telnet, SFTP)
- SD card file system
- Configuration parser
- G-code interpreter

Same modular approach as v1 - each module can be enabled/disabled in config.

### Key Features

**Text-File Configuration:** Same philosophy as v1 - `config.txt` on SD card. Human-readable, no firmware recompile needed for routine changes. Example configs available for different machine types.

**G-Code Support:**
- Standard G-code (NIST RS274)
- RepRap dialect (3D printer specific M-codes)
- GRBL mode (CNC compatibility)
- Laser extensions (power control, raster mode)
- Custom M-codes for Smoothie-specific features

**Advanced Motion Control:**
- Look-ahead planner (analyzes upcoming moves for smooth acceleration)
- Smooth acceleration/deceleration curves
- Jerk control (limits speed change rate to minimize vibration)
- Per-axis acceleration and speed limits

**Dual-Motor Axis Support (New in V2):**
Configure 2 motors to act as a single axis (e.g., dual Y motors on a gantry). Independent control of each motor.

**Auto-Alignment Feature:** Probe across axis to measure misalignment, automatically compensate during homing. Example: Y-axis with 2 motors/ballscrews - probe X-axis endpoints to detect Y-axis misalignment, correct in software. Maintains mechanical precision over time as machine settles.

**Temperature Control:** PID for hotends (tunable), bang-bang or PID for beds, thermal runaway protection (mandatory), pre-heat sequences.

### Firmware Updates

Three methods:

1. **Drag-and-Drop:** Enter MSD mode, drag firmware.bin to SD card, eject, board auto-flashes.
2. **Auto-Update:** Send `update` command via network, board handles everything automatically.
3. **SD Card Direct:** Remove card, copy firmware.bin, re-insert, reboot.

Easy firmware updates - no programmer or special tools needed. The auto-update feature is particularly nice for headless setups where you can't easily access the SD card.

### Host Software

Works with:
- OctoPrint, Pronterface, Repetier-Host (3D printing)
- Smoothie Web Interface (built-in, served from SD card)
- LightBurn, LaserGRBL (lasers)
- bCNC, Universal G-Code Sender (CNC)
- Klipper (potentially, via external host like Raspberry Pi - experimental)

Connection via USB serial, Telnet, HTTP API, or standalone from SD card.

## Supported Machines

### 3D Printers

**Cartesian (X/Y/Z):**
- Prusa i3 style printers
- CoreXY kinematics (X and Y motors work together)
- H-Bot kinematics
- IDEX (independent dual extruder) - requires external 5th driver

**Delta:**
- Linear delta printers (Kossel, Rostock style)
- Delta kinematics built into firmware (handles trigonometry automatically)
- Auto-calibration support (probe bed to calculate delta radius and offsets)

**Extruders:**
- Single extruder (Bowden or direct drive)
- Dual extruder (needs external 5th driver or use one on-board driver for 2nd extruder)
- Multi-material (MMU) support via external drivers/multiplexer

**Hotends:**
- E3D, Volcano, other standard hotends
- PID temperature control with auto-tuning
- Multiple heater/thermistor pairs supported

### Laser Cutters and Engravers

**CO2 Lasers:**
- 30W-100W+ CO2 tubes
- K40 laser cutter upgrades (very popular - replaces awful stock controller)
- Larger industrial CO2 lasers
- PWM laser power control (configurable frequency)

**Diode Lasers:**
- 5W-40W diode laser modules
- Raster and vector engraving modes
- Grayscale engraving (PWM modulation for shading)

**Laser-Specific Features:**
- Laser clustering (high-speed raster mode with LightBurn)
- Laser test fire button (low power, manual control for alignment)
- Laser safety interlocks (can require homing before laser enables)
- Configurable laser PWM frequency (5-20 kHz typical, some power supplies are picky)
- Air assist control (via MOSFET output to air pump)

### CNC Mills and Routers

**Machine Types:**
- 3-axis CNC routers (X/Y/Z)
- 4-axis CNC (X/Y/Z + rotary axis, use 4th on-board driver or external driver)
- Small CNC mills
- Large-format routers
- PCB mills (excellent precision with v2's smooth motion)

**Spindle Control:**
- PWM spindle speed control (via MOSFET output or SSR)
- On/off spindle control (simple relay)
- Spindle speed override (real-time adjustment during cutting)
- VFD control (via Modbus, requires expansion module or custom firmware)

**CNC Features:**
- GRBL-mode compatibility (toggle in config for CNC-focused G-code)
- Work coordinate systems (G54-G59)
- Tool length offsets
- Tool change support (manual or ATC)
- Probing (tool length, work surface, work offsets)
- Arc support (G2/G3 for circular interpolation)

### Pick-and-Place Machines

**Applications:**
- SMT pick-and-place (surface mount components)
- 4-axis control (X, Y, Z, rotation for component orientation)
- Vacuum control (via MOSFET outputs to vacuum pump solenoid)
- Vision system integration (via Gadgeteer expansion, requires custom firmware)
- Custom G-code sequences for P&P operations

### Other Applications

- **Pen Plotters:** XY motion with Z-axis servo for pen up/down
- **Foam Cutters:** Hot-wire foam cutting (XY table + wire temperature via MOSFET)
- **Vinyl Cutters:** XY motion with blade pressure control
- **3D Scanning:** Turntable + laser line scanner (via Gadgeteer expansion)
- **Automated Testing:** Custom motion profiles, sensor integration, data logging
- **Art Installations:** Creative motion control projects, LED control

The configurable firmware means you can adapt it to unusual applications.

## Development History

**The Short Version:**
Originally designed around NXP LPC4330 processor. Kickstarter September 2019, planned delivery April 2020. LPC4330 went out of stock worldwide in late 2020 (weeks before final prototype). Completely redesigned around STM32H745. First shipments May 2023. Retail availability February 2025. 3-year delay but the STM32H745 is actually better than the LPC4330 would have been.

**Chip Shortage Impact:**
LPC4330 sold out globally during COVID pandemic. Grey market prices hit $500/chip. Even after switching to STM32H745, chip costs increased (~$25/chip vs typical $5-10 for older MCUs). This affects board pricing but was unavoidable.

Kickstarter backers paid for LPC4330 board ($155), got STM32H745 board (same price) - free upgrade but long wait.

See [smoothieboard-v2-original](smoothieboard-v2-original) for the full story with detailed timeline and comparison tables showing why STM32H745 is better.

## Open Source Hardware

OSHWA certification FR000021. Full design files on GitHub:
- Hardware: [github.com/Smoothieware/Smoothieboard2](https://github.com/Smoothieware/Smoothieboard2)
- Firmware: [github.com/Smoothieware/SmoothieV2](https://github.com/Smoothieware/SmoothieV2)

KiCAD schematics, PCB layouts, BOM (bill of materials), Gerber files all available. True open hardware - anyone can manufacture, modify, sell it. Community can design expansion boards and derivative designs.

## Pricing and Availability

**Current Status (February 2025):**
- ✅ In production
- ✅ Retail availability
- ✅ Kickstarter fulfilled
- Lead time: Immediate to 1-2 weeks

**Where to Buy:**
Official retailer is RoboSprout: [robosprout.com](https://www.robosprout.com/)

**Price:** ~$200 USD for either TMC2660 or TMC2590 variant.

**What's Included:**
- Board (fully assembled, tested)
- MicroSD card with firmware and config
- Documentation links

**Not Included:**
- Motors, power supply, cables, heaters, thermistors, mechanical parts

## Known Limitations

**Only 4 On-Board Drivers:**
Dual extrusion or 5-axis CNC needs external 5th driver. v1 5X has 5 drivers if you need that.

**USB Host Not Implemented:**
Hardware ready (pins broken out), firmware not done yet. Can't use USB flash drives or webcams directly (yet).

**M4 Core Unused:**
Dual-core MCU but only M7 runs firmware currently. M4 available for future features or advanced development. Communication/synchronization between the cores is a significant challenge that is being worked on.

## Support

**Official Documentation:** [smoothieware.org](http://smoothieware.org/) - comprehensive guides, config examples, module documentation, troubleshooting.

**Community:**
- [Maker Forums](https://forum.makerforums.info/) - active Smoothie community
- [GitHub Issues](https://github.com/Smoothieware/SmoothieV2/issues) - bug reports, feature requests
- Discord (community-run, check forums for link)

**Vendor Support:** RoboSprout for warranty and purchase questions.

## Troubleshooting Quick Reference

### Board Won't Power On

**Check:**
- [ ] Vmot power connected (12-24V to XT30)
- [ ] USB or 5V external power connected
- [ ] 3.3V LED lit (if not, board not powered)
- [ ] No short circuits (check with multimeter)
- [ ] Power supply adequate (check voltage under load)

### Steppers Won't Move

**Check:**
- [ ] Motor current set in config file (alpha_current, beta_current, etc.)
- [ ] Motors wired correctly (coil pairs: 1A-1B, 2A-2B)
- [ ] Enable pin not stuck disabled (check config)
- [ ] Send simple G-code command (e.g., `G0 X10`)
- [ ] Driver not overheated (thermal shutdown - let it cool)
- [ ] Vmot power present (check LED)

### Heater Won't Heat

**Check:**
- [ ] VFET power connected (12-24V to 2× XT30)
- [ ] Heater element not shorted or open (check resistance with multimeter)
- [ ] Correct heater pin in config (HOTEND1, HOTEND2, BED, etc.)
- [ ] Temperature reading correct (send `M105` command)
- [ ] PID values set (temperature_control.hotend.p_factor, etc.)
- [ ] MOSFET output LED lit when heating commanded

### SD Card Not Detected

**Check:**
- [ ] Card formatted FAT32 (not exFAT, not NTFS)
- [ ] Card capacity ≤32GB (SDHC supported, SDXC may not work)
- [ ] Card inserted fully, seated correctly (should click)
- [ ] Try different SD card (card may be corrupted)
- [ ] Reformat card with SD Formatter tool (backup data first)

### Network Not Working

**Check:**
- [ ] Ethernet cable connected (check link LED on RJ45 connector)
- [ ] Network enabled in config (network.enable true)
- [ ] IP address assigned (DHCP or static configured correctly)
- [ ] Firewall not blocking (try from same subnet first)
- [ ] Ping smoothieboard (or IP address) from computer
- [ ] Try Telnet (port 23) or HTTP (port 80) individually to isolate issue

### Temperature Reading Incorrect

**Check:**
- [ ] Correct thermistor type in config (EPCOS100K, Semitec, etc.)
- [ ] Thermistor wiring not shorted or open (check continuity)
- [ ] Thermistor connected to correct input (ADC0, ADC1, ADC2)
- [ ] Temperature reading stable (wild fluctuation indicates noise issues)
- [ ] Room temperature reading ~20-25°C initially (sanity check)

### Firmware Update Failed

**Check:**
- [ ] Firmware file named exactly `firmware.bin` (case-sensitive on some systems)
- [ ] Firmware file in root directory of SD card (not in subfolder)
- [ ] Firmware file correct architecture (STM32H745, not LPC1769 from v1)
- [ ] SD card not corrupted
- [ ] Try different SD card
- [ ] Power cycle after copying firmware (triggers auto-flash on boot)

For detailed troubleshooting beyond these quick checks, see the [full troubleshooting guide](troubleshooting).

## Appendix: Pin Reference

### Gadgeteer Header Pinout

**Standard Pinout (All Headers):**
```
Pin 1:  GPIO (function varies by header)
Pin 2:  GPIO
Pin 3:  GPIO
Pin 4:  GPIO
Pin 5:  GPIO
Pin 6:  GPIO
Pin 7:  GPIO
Pin 8:  5V
Pin 9:  3.3V
Pin 10: GND
```

**Specific Functions per Header:**
- See [https://github.com/Smoothieware/SmoothieV2/blob/master/pins.md](https://github.com/Smoothieware/SmoothieV2/blob/master/pins.md)
- Each header (GA through GH) has different GPIO functions
- Some GPIOs are SPI, I2C, ADC, PWM, or standard GPIO
- Pinout documentation shows exact functions for each pin on each header

### Motor Connector Pinout

**4-Pin Motor Connector:**
```
Pin 1: Coil A - Phase 1 (1A)
Pin 2: Coil A - Phase 2 (1B)
Pin 3: Coil B - Phase 1 (2A)
Pin 4: Coil B - Phase 2 (2B)
```

**Wiring Bipolar Stepper:**
- Identify coil pairs with multimeter (continuity test between wires)
- Coil A → Pins 1, 2
- Coil B → Pins 3, 4
- If motor runs backwards, swap one coil pair (e.g., swap pins 1 and 2)

### Endstop Connector Pinout

**3-Pin Endstop Header:**
```
Pin 1: Signal (to MCU)
Pin 2: VCC (3.3V or 5V, configurable in firmware)
Pin 3: GND
```

**Switch Wiring:**
- Normally Open (NO): Switch connects Signal to GND when triggered
- Normally Closed (NC): Switch disconnects Signal from GND when triggered
- Configure in firmware: `endstop_type normally_open` or `normally_closed`
- Pull-ups can be enabled in firmware if needed

## Related Pages

- [Smoothieboard v1 Specifications](smoothieboard-v1-specifications) - Comparison and v1 details
- [Smoothieboard v2 Original (LPC4330)](smoothieboard-v2-original) - The cancelled design story
- [Smoothieboards Main Page](smoothieboards) - All board variants
- [Configuring Smoothie](configuring-smoothie) - Configuration guide
- [Getting a Smoothieboard](getting-smoothieboard) - Where to buy

---

*Last updated: 2025-10-21*
*OSHWA Certification: FR000021*
*Source: [smoothieware.org](http://smoothieware.org/)*
