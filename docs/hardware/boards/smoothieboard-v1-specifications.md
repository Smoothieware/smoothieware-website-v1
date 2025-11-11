---
permalink: /smoothieboard-v1-specifications
---

# Smoothieboard v1 Technical Specifications

Smoothieboard v1 has been in production since 2013. It's a proven, reliable 32-bit CNC controller that works with 3D printers, laser cutters, CNC mills, and more. The v1 is still manufactured and will continue alongside the newer v2.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>First French OSHWA Certification:</strong> Smoothieboard v1 was the first French project to receive Open Source Hardware Association certification (FR000001) in 2016. Full design files are available on <a href="https://github.com/arthurwolf/SmoothieBoard">GitHub</a>.
</sl-alert>
{:/nomarkdown}

## Board Variants

Smoothieboard v1 comes in three variants based on the number of stepper drivers:

| Variant | Stepper Drivers | Small MOSFETs | Large MOSFETs | Typical Use                        |
| ------- | --------------- | ------------- | ------------- | ---------------------------------- |
| **3X**  | 3               | 2             | 0             | Basic 3D printers, simple CNC      |
| **4X**  | 4               | 2             | 2             | Dual-extruder printers, 4-axis CNC |
| **5X**  | 5               | 3             | 3             | Multi-extruder, 5-axis machines    |

All variants share the same microcontroller, connectivity options, and 4 thermistor inputs. The main differences are driver count and MOSFET outputs.

## Processor and Memory

| Component             | Specification                        |
| --------------------- | ------------------------------------ |
| **Microcontroller**   | NXP LPC1769                          |
| **Architecture**      | ARM Cortex-M3 (32-bit)               |
| **Clock Speed**       | 120 MHz                              |
| **Flash Memory**      | 512 kB                               |
| **RAM**               | 64 kB                                |
| **Floating Point**    | Software emulation (no hardware FPU) |
| **Package Type**      | LQFP                                 |
| **Operating Voltage** | 3.3V (logic)                         |

This was a significant upgrade from 8-bit boards when launched in 2013. The 32-bit processor provides smoother motion planning, higher step rates, and room for more complex features.

### Performance

The LPC1769 runs at 120MHz which gives it plenty of headroom for advanced motion planning. The motion planner does look-ahead across multiple move commands to calculate smooth acceleration and deceleration curves. This means cleaner prints, smoother cuts, and less vibration compared to simpler 8-bit boards that often jerk between moves.

Step generation is handled by hardware timers for precise timing with minimal jitter. The board can handle high step rates without the processor breaking a sweat - you'll hit mechanical limits of your machine long before you hit processor limits.

## Stepper Motor Drivers

| Specification           | Value                                         |
| ----------------------- | --------------------------------------------- |
| **Driver IC**           | Allegro A5984                                 |
| **Driver Type**         | Bipolar stepper motor driver                  |
| **Maximum Current**     | 2A continuous per driver                      |
| **Maximum Voltage**     | 35V                                           |
| **Microstepping**       | 1/1, 1/2, 1/4, 1/8, 1/16, 1/32                |
| **Current Control**     | Digital (set in config file)                  |
| **Thermal Performance** | Full 2A capable with good heat-sinking        |
| **Protection**          | Over-current, over-temperature, short-circuit |

### Current Setting

Motor current is set in the [configuration file](configuring-smoothie), not with potentiometers. This is one of the nice things about Smoothieboards - no fiddling with tiny potentiometers with a screwdriver. Just edit a text file:

```
alpha_current   1.5    # X axis motor current in Amps
beta_current    1.5    # Y axis motor current
gamma_current   1.5    # Z axis motor current
delta_current   1.5    # Extruder motor current
```

The current settings are <setting v1="alpha_current" v2="current control.alpha.current"></setting>, <setting v1="beta_current" v2="current control.beta.current"></setting>, <setting v1="gamma_current" v2="current control.gamma.current"></setting>, and <setting v1="delta_current" v2="current control.delta.current"></setting>.

Typical values range from 0.5A for small motors to 2.0A for larger NEMA 17 motors. Check your motor's datasheet for the rated current. You want to set it to the motor's rated current, or slightly below. Setting it too high won't make your motors stronger - it'll just make them hotter.

### Microstepping

Set per-driver in the config file. Most users run 1/16 or 1/32 for a balance of smoothness and performance:

```
microseconds    16     # 1/16 microstepping
```

Higher microstepping (1/32) is quieter but may reduce high-speed performance slightly. The higher the microstepping, the more steps the processor needs to send for the same movement, which can become a bottleneck at very high speeds.

### External Drivers

Step, direction, and enable pins are broken out for all drivers on headers. This means you can connect external drivers if you need more than 5 axes or higher current capability. This is common for large CNC machines with big NEMA 23 or NEMA 34 motors that need 4A or more, or for multi-extruder 3D printers.

The external driver interface is standard step/direction, compatible with most external driver boards including Gecko drives, TB6600, DM542, and similar.

## Power MOSFETs

### Small MOSFETs

| Specification      | Value                         |
| ------------------ | ----------------------------- |
| **Type**           | ZXMN4A06 (SMT)                |
| **Current Rating** | 5A continuous                 |
| **Voltage Rating** | 24V maximum                   |
| **Typical Use**    | Hotends (40-50W), fans (2-5W) |

The 3X has 2 small MOSFETs, the 4X has 2, and the 5X has 3.

### Large MOSFETs

| Specification      | Value                  |
| ------------------ | ---------------------- |
| **Type**           | AOT240L (through-hole) |
| **Current Rating** | 12A continuous         |
| **Voltage Rating** | 24V maximum            |
| **Typical Use**    | Heated beds (100-300W) |

The 3X has no large MOSFETs, the 4X has 2, and the 5X has 3.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Power Input Required:</strong> MOSFET power is separate from motor power. Each MOSFET group (small and large) requires its own 12-24V power input. See the <a href="mosfets.md">MOSFET documentation</a> for wiring details.
</sl-alert>
{:/nomarkdown}

### MOSFET Control and Protection

All MOSFETs are PWM-capable for precise temperature control. The PWM frequency is configurable in the firmware. Most heaters work well with the default frequency, but some SSRs may need adjustment.

Each MOSFET output includes a flyback diode for protection against inductive loads. These diodes protect the MOSFET from voltage spikes when switching inductive loads like fans or relays.

The firmware includes thermal runaway protection - if a temperature sensor reads too high, too low, or doesn't change when it should, the firmware will shut off the heater and sound an alarm. This is a critical safety feature that can prevent fires.

You can also configure minimum and maximum temperature limits per heater in the config file.

For more details on MOSFET usage, see the [MOSFET documentation](mosfets) and [temperature control guide](temperaturecontrol).

## Temperature Sensing

All variants have 4 thermistor inputs:

| Specification         | Value                                  |
| --------------------- | -------------------------------------- |
| **Number of Inputs**  | 4 (all variants)                       |
| **Type**              | Thermistor (NTC)                       |
| **ADC Resolution**    | 12-bit (4096 values)                   |
| **Voltage Range**     | 0-3.3V via voltage divider             |
| **Temperature Range** | -50°C to +300°C (thermistor-dependent) |
| **Accuracy**          | ±1-2°C typical                         |

Supported thermistor types include:
- Semitec 104GT-2 (the most common RepRap thermistor)
- EPCOS 100K B57560G104F
- Honeywell 100K 135-104LAG-J01
- Custom thermistor tables can be defined in config

Thermistors connect via 3-pin headers (Signal, VCC, GND). The on-board pull-up resistor is typically 4.7kΩ. If you're using a different thermistor type, you may need to adjust the configuration to match.

The 12-bit ADC gives you 4096 discrete values across the 0-3.3V range, which translates to good temperature resolution. Combined with proper PID tuning, you can typically hold hotend temperatures within 1-2°C of the target.

For more on temperature control, see the [temperature control module documentation](temperaturecontrol).

## Endstops and Limit Switches

All variants have 6 endstop inputs:

| Input | Label | Typical Use              |
| ----- | ----- | ------------------------ |
| 1     | X min | X-axis homing            |
| 2     | X max | X-axis limit (optional)  |
| 3     | Y min | Y-axis homing            |
| 4     | Y max | Y-axis limit (optional)  |
| 5     | Z min | Z-axis homing or Z-probe |
| 6     | Z max | Z-axis limit (optional)  |

Endstops connect via 3-pin headers (Signal, VCC, GND). They can be configured as normally-open or normally-closed, and the logic can be inverted in software. This flexibility means you can use just about any type of switch or sensor.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  In Smoothie, endstops do three things:<br><br>
  1. <strong>Homing</strong> - Move until endstop is hit, then back off<br>
  2. <strong>Hard endstops</strong> - Stop immediately when endstop is hit (optional)<br>
  3. <strong>Soft endstops</strong> - Once homed, don't go beyond configured limits (optional)
</sl-alert>
{:/nomarkdown}

The inputs are 3.3V or 5V tolerant, and you can configure pull-ups or pull-downs in firmware. This means you can directly connect most mechanical switches, optical sensors, or Hall-effect sensors without extra circuitry.

### Supported Endstop Types

**Mechanical Switches:**
- Micro switches (normally open or normally closed)
- Lever switches
- Limit switches

**Optical Endstops:**
- Optical interrupters (like the classic RepRap optical endstop)
- Reflective sensors

**Magnetic Sensors:**
- Hall-effect sensors
- Reed switches

### Z-Probes

Any endstop input can be used as a Z-probe for auto-bed leveling. Supported probe types include:
- Mechanical switches (simple touch probes)
- BLTouch / 3DTouch
- Capacitive sensors (with level shifting to 3.3V)
- Inductive sensors (with level shifting to 3.3V)

The probe repeatability depends mostly on the probe type and your mechanical setup. A good BLTouch or well-built mechanical probe can achieve repeatability better than 0.01mm.

See the [Z-probe guide](z-probe-guide) and [leveling strategy documentation](leveling-strategy) for details.

## Connectivity

### USB

| Specification | Value                             |
| ------------- | --------------------------------- |
| **Standard**  | USB 2.0                           |
| **Type**      | Composite Device                  |
| **Functions** | MSD (Mass Storage) + CDC (Serial) |
| **Connector** | USB Type B                        |
| **Cable**     | Standard USB A-to-B cable         |

**USB Mass Storage (MSD):** When you connect the board to a computer via USB, the SD card shows up as a USB drive. You can drag and drop G-code files, edit the config file directly, copy over a new firmware binary - all without needing any special software. This is incredibly convenient for configuration and file management.

**USB Serial (CDC):** The board also appears as a virtual COM port. This is what host software uses to send G-code commands in real-time. Compatible with [Pronterface](pronterface), [Repetier-Host](repetier), [OctoPrint](octoprint), and pretty much any software that can talk to a serial port.

Baud rate is typically 115200 but this is configurable.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Mac Users:</strong> Macs like to write hidden files (`.DS_Store`, `.Trashes`, etc.) to mounted drives. These files can interfere with the board's operation when printing from SD card. It's best to unmount the USB drive when you're not actively transferring files. See the <a href="sd-card.md">SD card documentation</a> for details.
</sl-alert>
{:/nomarkdown}

### Ethernet

| Specification        | Value                              |
| -------------------- | ---------------------------------- |
| **Standard**         | 10/100 Mbps Ethernet               |
| **Connector**        | RJ45                               |
| **PHY**              | On-board                           |
| **Auto-negotiation** | Yes                                |
| **Availability**     | Optional on 3X/4X, standard on 5XC |

The Ethernet interface is one of the standout features of Smoothieboard. Most other CNC controllers don't have built-in networking. You get several protocols:

**HTTP (Port 80):**
The board can host a web interface served from files on the SD card. You access it by typing the board's IP address into a web browser. From the web interface you can:
- Upload G-code files
- Send commands
- Monitor machine status
- Start/stop jobs
- View temperature graphs

The web interface runs entirely on the board - no external server needed. Just put the HTML/CSS/JavaScript files on the SD card and the board serves them.

**Telnet (Port 23, configurable):**
Telnet lets you send G-code commands over the network. It's like USB serial, but over Ethernet. This is useful for network-aware host software or custom scripts. Multiple concurrent Telnet connections are supported, so you can have several clients connected at once.

**Simple FTP (Port 115):**
This is Simple File Transfer Protocol (not to be confused with SFTP which is SSH File Transfer Protocol). It runs on port 115 and lets you upload/download files to the SD card. This is a legacy protocol and only works with specific FTP clients configured for this protocol variant.

**Optional: 9P/Styx:**
Some firmware variants support the 9P (Plan 9 Filesystem Protocol) or Styx protocol. This lets you mount the SD card as a network filesystem on your computer. It's an advanced feature that requires a 9P client, but it's pretty neat if you want your SD card to appear as a network drive.

**Network Configuration:**
You can configure the network settings (DHCP or static IP) in the config file. Some firmware variants support mDNS/Bonjour for hostname resolution, so you can access the board by name instead of IP address.

For more details, see the [network module documentation](network).

### SD Card

| Specification        | Value                                    |
| -------------------- | ---------------------------------------- |
| **Interface**        | SPI (Serial Peripheral Interface)        |
| **Slot Type**        | MicroSD (some variants use full-size SD) |
| **Card Included**    | 2GB MicroSD typical                      |
| **Maximum Capacity** | 32GB (SDHC) recommended                  |
| **File System**      | FAT32                                    |
| **Read Speed**       | ~400-500 kB/s (limited by SPI)           |

The SD card is the brains of the configuration and file storage. It holds:

**config.txt** - This is the main configuration file where all your machine settings live. It's a plain text file with a simple syntax. Change any setting, save the file, reboot the board, and your changes take effect. No firmware recompile needed.

**firmware.bin** - When you want to update the firmware, you drop a `firmware.bin` file on the SD card. When the board boots and sees this file, it automatically flashes the new firmware and deletes the file. Easy firmware updates without needing a programmer or special software.

{::nomarkdown}
**G-code files** - Your print/cut/mill files live here. The board can play them directly from the SD card using the `play` command or the <mcode>M24</mcode> G-code.
{:/nomarkdown}

**Web interface files** - If you're using the Ethernet features, the HTML/CSS/JavaScript for the web interface lives here.

**Documentation** - Some SD cards come with documentation bundles pre-loaded.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>SD Card Speed Limitation:</strong> The SPI interface limits SD card speed to around 400-500 kB/s. This is fine for most G-code files, but very large or complex files (like high-resolution laser raster images) might benefit from streaming via USB or Ethernet instead. This limitation is fixed in <a href="smoothieboard-v2-prime.md">v2</a> with an SDIO interface that's much faster.
</sl-alert>
{:/nomarkdown}

Use a good quality SD card. Cheap cards can be unreliable and cause weird issues. Format as FAT32 (not exFAT or NTFS). Cards up to 32GB work fine - larger cards might work but aren't officially supported.

## Power Requirements

### Motor Power (Main Input)

| Specification         | Value                                          |
| --------------------- | ---------------------------------------------- |
| **Voltage Range**     | 12-24V DC                                      |
| **Recommended**       | 24V for better performance                     |
| **Typical Current**   | 5-15A (depends on motors and usage)            |
| **Peak Current**      | Up to 20A+ (all motors moving at high current) |
| **Connector Options** | Screw terminal, Molex, power jack              |

24V is better than 12V for stepper motors. At higher voltage, motors can reach higher speeds and they run cooler at the same power level because they draw less current. The only downside is you might need different heaters and fans rated for 24V instead of 12V.

### MOSFET Power

Each MOSFET group needs separate 12-24V power:

**Small MOSFETs (Hotends, Fans):**
- Voltage: 12-24V DC
- Max current per MOSFET: 5A
- Max total per power circuit: 10A
- Typical use: Hotend heaters (40-50W), fans (2-5W)

**Large MOSFETs (Heated Beds):**
- Voltage: 12-24V DC
- Max current per MOSFET: 12A
- Max total per power circuit: 24A
- Typical use: Heated beds (100-200W @ 12V, 200-300W @ 24V)

You can use the same voltage for all power inputs, or mix voltages (e.g., 12V bed, 24V hotend) if you have a specific reason. See the [power input documentation](main-power-input) for wiring details.

### Logic Power (5V)

The board needs 5V for its logic circuits:

**Option 1: USB Power**
- Supplied via USB from computer
- Limited to 500mA (USB 2.0 spec)
- Sufficient for board only
- Not enough if you're connecting USB-powered devices like webcams

**Option 2: External 5V**
- Via screw terminal or power jack
- Recommended: 2A capable supply
- Better for standalone operation (when not connected to computer)

**Option 3: On-Board Regulator (Add-On)**
- Optional component (not included standard)
- You have to purchase and solder it yourself to the designated footprint
- Converts 12-24V from main power input to 5V
- Output typically 1.5-3A depending on which regulator you choose
- Advantage: Single power supply for entire system

The board automatically selects the best 5V source from whatever's available (USB, external input, or on-board regulator). It won't back-feed power between sources.

### Power Budget Example

Here's a typical 3D printer with 5 motors running on 24V:

- Motors: 5× 1.5A = 7.5A @ 24V = 180W
- Hotend: 40W @ 24V = 1.7A
- Heated bed: 200W @ 24V = 8.3A
- Fans: 10W @ 24V = 0.4A
- Logic: ~12W from 24V rail (via regulator)

**Total: ~442W, about 18A @ 24V**

For this setup, you'd want a 24V power supply rated for at least 25A (600W) to have some headroom. Never run a power supply at 100% capacity continuously - you want at least 20-30% headroom for longevity and safety.

## Physical Specifications

| Specification              | Value                         |
| -------------------------- | ----------------------------- |
| **Dimensions**             | 129mm × 105mm (5.08" × 4.13") |
| **Mounting Holes**         | 4 corners, M3 screws          |
| **Mounting Hole Diameter** | 3mm                           |
| **PCB Thickness**          | 1.6mm (standard)              |

The board fits in most standard electronics enclosures designed for RepRap electronics. The mounting holes use standard spacing.

**Connectors:**
- **Stepper motors:** 4-pin headers, 0.1" (2.54mm) pitch
- **Endstops:** 3-pin headers, 0.1" pitch
- **Thermistors:** 3-pin headers, 0.1" pitch
- **MOSFETs:** 2-pin or 3-pin screw terminals
- **Power inputs:** Screw terminals, Molex, or power jacks (variant-dependent)
- **USB:** Type B connector
- **Ethernet:** RJ45 (if equipped)
- **SD card:** MicroSD push-push or push-pull slot

### Environmental Specs

| Specification             | Value                                   |
| ------------------------- | --------------------------------------- |
| **Operating Temperature** | 0°C to +50°C (ambient)                  |
| **Storage Temperature**   | -20°C to +70°C                          |
| **Humidity**              | 20-80% RH (non-condensing)              |
| **Cooling**               | Passive (heatsinks, natural convection) |

The stepper drivers have heatsinks and they do get warm under load. In an enclosed space, consider adding a small fan for active cooling. The board will work passively cooled in open air at typical room temperatures, but enclosed electronics boxes can get hot.

Don't run the board in condensing humidity or anywhere it might get wet. These are not weatherproof.

## Firmware

**Smoothieware V1:**
- Open-source (GPL license)
- [Source code on GitHub](https://github.com/Smoothieware/Smoothieware)
- Written in C++
- Built with GCC ARM toolchain
- Bare-metal (no RTOS) for deterministic real-time performance

### Firmware Features

**Motion Control:**
The motion control system uses an advanced look-ahead planner. When you send a bunch of G-code moves, the firmware looks ahead at upcoming moves and plans smooth acceleration and deceleration curves that flow from one move to the next. This is what gives you smooth prints and cuts without the "jerky" motion you get from simpler controllers.

Jerk control limits how fast the speed can change, which minimizes vibrations and ringing in your prints. You can configure acceleration and max speed per axis.

**G-Code Interpretation:**
The firmware understands standard RepRap/NIST G-code. There's also a GRBL-mode toggle for CNC-focused G-code compatibility. Laser-specific extensions let you control laser power and use special raster modes for image engraving. Full support for 3D printer M-codes (temperature control, fan control, etc.).

**Temperature Control:**
PID control for hotends gives you stable temperature with minimal overshoot. You can use PID or bang-bang control for heated beds (bang-bang is simpler and works fine for high thermal mass items like beds). PID parameters are configurable per heater. Thermal runaway protection will shut down heaters if something goes wrong. You can set up pre-heat sequences, configure multiple zones, and use multiple temperature sensors.

**Modular Architecture:**
Smoothieware is built from modules. Each module handles a specific function:

- **Switch Module:** Endstops, limit switches, general switches
- **Temperature Control Module:** Heaters, thermistors, PID loops
- **Extruder Module:** Filament extrusion with acceleration matching
- **Laser Module:** Laser power control, raster engraving, vector cutting
- **ZProbe Module:** Auto-bed leveling, probing, mesh compensation
- **Player Module:** Play G-code files from SD card
- **Panel Module:** LCD display support (many types)
- **Network Module:** Ethernet, HTTP server, Telnet, file transfer
- **Endstops Module:** Homing and limit switch handling
- **Kill Button Module:** Emergency stop functionality

And many more. Each module can be enabled or disabled in the config file. This keeps the firmware flexible - you only load what you need.

### Configuration

All configuration lives in `config.txt` on the SD card. It's a plain text file with a simple syntax:

```
# This is a comment
option_name   value   # value for this option
```

Human-readable, well-documented, lots of examples available for different machine types. Need to change something? Edit the file, save it, reboot the board. Done. No recompiling firmware, no uploading hex files, no fiddling with Arduino IDE.

The official documentation has comprehensive config file guides and example configs for common machine types (Prusa i3, CoreXY, Delta printers, laser cutters, CNC mills, etc.).

### Firmware Updates

Updating firmware is stupidly simple:
1. Download `firmware.bin` from the [Smoothieware releases](getting-smoothie)
2. Drag it onto the SD card (via USB mass storage)
3. Reboot the board
4. The board sees the firmware file, flashes it, deletes the file, boots with new firmware

No programmer needed, no special software, no command-line tools. Just drag and drop.

### Host Software Compatibility

**Tested and working:**
- **Pronterface** (PrintRun) - Popular 3D printer control software
- **Repetier-Host** - Another good 3D printer controller
- **OctoPrint** - Web-based 3D printer control (via USB or Ethernet)
- **LightBurn** - Laser cutting and engraving (commercial, excellent software)
- **LaserGRBL** - Free laser control software (GRBL mode)
- **bCNC** - CNC control software (GRBL mode)
- **Universal G-Code Sender** - CNC control
- **Smoothie Web Interface** - Built-in web UI served from board

Most software that can talk to a serial port will work. The board responds to standard G-code commands.

## Supported Machine Types

### 3D Printers

**Cartesian (X/Y/Z):**
The most common type. Prusa i3 style, classic Mendel, custom builds - they all work. CoreXY kinematics are fully supported (where X and Y motors work together to move the toolhead). H-Bot kinematics work too.

For single extruder, you only need a 3X board. For dual extrusion you need a 4X (or 3X with external driver). For three or more extruders you need a 5X or external drivers.

**Delta Printers:**
Full support for linear delta kinematics (Kossel, Rostock, and similar). The firmware handles all the trigonometry to convert Cartesian coordinates to delta motor positions. You configure your delta radius, rod length, and other parameters in the config file. Delta calibration tools are built into the firmware.

**Extruder Types:**
Works with both Bowden and direct-drive extruders. The firmware has acceleration matching for extruders - when the toolhead slows down, the extruder slows down proportionally. This prevents blobbing and stringing.

### Laser Cutters and Engravers

**CO2 Lasers:**
The K40 laser cutter is a super popular upgrade path - replace the awful stock controller with a Smoothieboard and suddenly you have a real machine. Works with larger CO2 lasers too. PWM controls laser power, and you can configure laser safety interlocks.

**Diode Lasers:**
5W to 40W diode laser modules work great. The firmware supports both raster engraving (like printing an image) and vector cutting (following paths).

**Laser-Specific Features:**
- Laser clustering (high-speed raster mode) - works with LightBurn
- Laser test fire button
- Configurable PWM frequency (some laser power supplies are picky)
- Laser safety interlocks (require homing before firing laser)
- Grayscale engraving support

### CNC Mills and Routers

**Machine Types:**
- 3-axis CNC routers
- 4-axis CNC (rotary axis) with 4X/5X boards
- Small CNC mills
- PCB mills (very popular - excellent precision)
- 5-axis machines with 5X board

**Spindle Control:**
Use a MOSFET output to control spindle speed via PWM, or just on/off. Spindle speed override is supported. Many people use VFD (Variable Frequency Drive) spindles controlled via PWM signal from the board.

**CNC Features:**
- GRBL-mode compatibility (toggle in config)
- Work coordinate systems (G54-G59)
- Tool length offsets
- Probing for tool length and work surface
- Arc support (G2/G3)

### Pick-and-Place Machines

People have built SMT pick-and-place machines with Smoothieboards. The 4X or 5X works well - X, Y, Z, and rotation axis. Use MOSFET outputs to control vacuum pumps. Custom G-code handles pick-and-place operations.

### Other Applications

- Pen plotters (just disable the Z-axis lift and use a servo to lift the pen)
- Foam cutters (hot wire) - control wire temperature with MOSFET
- Vinyl cutters
- Custom automation and robotics
- Pretty much anything that needs coordinated multi-axis motion control

The beauty of configurable firmware is you can adapt it to weird applications.

## GPIO and Expansion

**Broken Out Pins:**
- Step/Direction/Enable for all stepper drivers (lets you add external drivers)
- MOSFET control pins (add external MOSFET boards for more outputs)
- Limited general-purpose GPIO on expansion headers
- SPI, I2C, UART buses available for peripherals

**Voltage Levels:**
GPIO pins are 3.3V logic. Some pins are 5V tolerant (check the pinout diagram) but don't assume - check first.

**Expansion Use Cases:**
- External stepper drivers (beyond the on-board count)
- [LCD displays](panel) - many types supported (RepRap Discount Full Graphic, GLCD, character LCDs, OLED, etc.)
- Rotary encoders for manual control
- Additional sensors (accelerometers, temperature, whatever you need)
- Custom I/O modules for special applications

See the [GPIO documentation](gpio) for pinouts and details.

## Open Source Hardware

### OSHWA Certification

| Item                     | Value                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| **Certification Number** | FR000001                                                                                       |
| **Date**                 | 2016                                                                                           |
| **Significance**         | First French OSHWA certification                                                               |
| **Verify**               | [https://certification.oshwa.org/fr000001.html](https://certification.oshwa.org/fr000001.html) |

This means the hardware is certified open-source. Full design files are available, anyone can manufacture it, modify it, sell it. True open hardware.

### Licensing

**Hardware License:** CERN Open Hardware License (OHL)
- Complete design files available on GitHub
- Schematics, PCB layouts, bill of materials
- Anyone can manufacture, modify, distribute, sell

**Firmware License:** GNU General Public License (GPL)
- Complete source code on GitHub
- Can be modified and redistributed under GPL terms
- Fork it, improve it, contribute back

### Design Files

**Repositories:**
- Hardware design: [https://github.com/arthurwolf/SmoothieBoard](https://github.com/arthurwolf/SmoothieBoard)
- Firmware source: [https://github.com/Smoothieware/Smoothieware](https://github.com/Smoothieware/Smoothieware)
- Documentation: [http://smoothieware.org/](http://smoothieware.org/)

**Available Files:**
- Eagle schematic files (.sch)
- Eagle PCB layout files (.brd)
- Bill of Materials (BOM) in Excel format
- Gerber files for PCB manufacturing
- Component placement files
- Design guidelines and notes

**Community Contributions:**
The open-source nature has led to interesting community projects. People have designed expansion boards, alternative layouts, and derivative designs. The Cohesion3D boards (designed for lasers) are based on Smoothieboard designs. This is the beauty of open hardware - the community can build on the work.

## Pricing and Availability

### Current Status

| Item             | Status                                  |
| ---------------- | --------------------------------------- |
| **Production**   | Active (2013-Present)                   |
| **Availability** | In stock at multiple vendors            |
| **Lead Time**    | Usually immediate to 1-2 weeks          |
| **End of Life**  | Not planned (v1 continues alongside v2) |

The v1 isn't going away when v2 is fully available. It's a different market segment - v1 is the affordable option, v2 is the high-end option.

### Where to Buy

**Official Source:**
- RoboSprout - [https://www.robosprout.com/](https://www.robosprout.com/)
- This is the official retail channel run by the Smoothieboard project

**Other Vendors:**
Various electronics distributors stock Smoothieboards. Check the [official documentation](getting-smoothieboard) for current vendor list.

### Pricing (Approximate, USD)

| Variant | Typical Price | Notes                                   |
| ------- | ------------- | --------------------------------------- |
| **3X**  | $100-120      | Entry-level, 3 drivers, 2 small MOSFETs |
| **4X**  | $120-140      | Mid-range, 4 drivers, 2 large MOSFETs   |
| **5X**  | $130-150      | High-end, 5 drivers, 3 large MOSFETs    |
| **5XC** | $140-160      | 5X with Ethernet standard               |

Prices vary by vendor, region, and current supply. Authentic boards cost more than clones but you get quality components, testing, and support.

**About Clones:**
There are clones out there. Some are fine, some are garbage. Problems with clones include: wrong components, poor quality control, no testing, no support, no guarantee they'll work. Buy from reputable sources.

### What's Included

**In the box (typically):**
- Smoothieboard (assembled, tested, ready to use)
- 2GB MicroSD card with firmware and example config files
- Documentation (on SD card, links to online docs)

**Not included (buy separately):**
- Stepper motors
- Power supply
- Cables and wire
- Heaters, thermistors, fans
- Mechanical components (frame, rails, bearings, etc.)
- Voltage regulator (optional add-on)
- USB cable (sometimes included, sometimes not)

You're buying the board and basic software. Everything else is on you.

## Support and Community

### Official Documentation

The documentation at [smoothieware.org](http://smoothieware.org/) is comprehensive. Covers:
- Getting started guides
- Configuration tutorials (step by step for different machines)
- Module documentation (detailed reference for every module)
- G-code reference
- Troubleshooting guides
- Hardware guides
- Wiring diagrams

The docs are a wiki, so community members contribute and improve them over time.

### Community Support

**Forums:**
- [Maker Forums](https://forum.makerforums.info/) - Active Smoothie community, helpful people
- Google Groups mailing list (less active these days)

**Chat:**
- Discord servers (community-run, check the forums for current links)
- IRC #smoothiedev on Freenode (not very active anymore)

**Social Media:**
- Twitter/X: @smoothieware
- Facebook groups (various community groups)

### Getting Help

**If you have configuration issues:**
1. Read the docs first (seriously, they're good)
2. Check the example configs for your machine type
3. Ask in the forums - post your config file
4. Include details: board version, what you're trying to do, what's not working

**If you have hardware problems:**
1. Contact your vendor/seller first (warranty issues)
2. Check the forums - many hardware issues have been solved before
3. Look for known issues on GitHub

**If you find a firmware bug:**
1. Check if it's already reported on GitHub
2. File a detailed bug report with steps to reproduce
3. The maintainers are responsive and helpful

The community is generally helpful. Don't ask "is anyone there?" - just ask your question with details. Someone will usually respond within a few hours.

## Comparison to Other Boards

### vs. 8-Bit Boards (RAMPS, etc.)

**Smoothieboard Advantages:**
- ✅ 32-bit processor (smoother motion, more features, faster)
- ✅ Built-in networking (most 8-bit boards don't have Ethernet)
- ✅ Text-file configuration (no recompiling Marlin and uploading)
- ✅ Higher step rates, better precision
- ✅ More memory (can handle more complex features)
- ✅ On-board drivers (no separate driver modules to wire up)

**Smoothieboard Disadvantages:**
- ❌ Higher cost ($100-150 vs $20-50 for 8-bit)
- ❌ Less common (fewer machine kits include it)

If you're building a budget machine and every dollar counts, 8-bit is fine. If you want better performance and nicer features, 32-bit is worth it.

## Known Limitations

Every board has limitations. Here are the ones you should know about:

**SD Card Speed (SPI Interface):**
The SPI interface limits SD card performance to about 400-500 kB/s. This is fine for most G-code files. Where you'll notice it:
- Large laser raster images (high resolution engraving)
- Very complex 3D prints with huge G-code files
- Fast data logging

Workaround: Stream via USB or Ethernet for complex files. Or upgrade to v2 which has SDIO (much faster).

**No Hardware FPU:**
The Cortex-M3 doesn't have a hardware floating-point unit. Complex math uses software emulation which is slower. In practice this rarely matters - you'll hit other limits first. But it's worth knowing about if you're doing custom firmware development with heavy calculations.

**A5984 Drivers (Not TMC):**
The A5984 drivers are good, reliable, proven drivers. But they're not as advanced as the modern TMC series:
- Noisier than TMC drivers (more audible motor whine)
- No StallGuard (sensorless homing feature)
- No silent operation modes (StealthChop)
- No advanced diagnostics

They work fine for most applications. If you want the quietest possible machine, v2 with TMC drivers is better.

**Limited GPIO Expansion:**
Compared to v2's 56 GPIO pins on Gadgeteer headers, v1 has limited expansion. You can add external I/O expanders or use external driver boards, but it's less convenient than v2's expansion system.

**No On-Board 5V Regulator (Standard):**
You have to supply 5V separately (via USB or external supply) or purchase and solder on an optional voltage regulator. This is a minor inconvenience. v2 has a built-in 3A regulator.

### Things That Aren't Really Limitations

**12V vs 24V:**
Some people worry about whether to use 12V or 24V. Use 24V. It's better for motors (higher speeds, less heat). The only reason to use 12V is if you already have a 12V power supply and don't want to buy a new one. Otherwise, 24V all the way.

**Heated Bed Current:**
The large MOSFETs are rated for 12A each. A big heated bed at 24V might draw 10A or more. If you're pushing the limits, consider using an external SSR (Solid State Relay) or contactor to switch the bed. This is common practice for big beds anyway.

## Board Revisions

### Known Revisions

**v1.0:**
- Original production version (2013)
- Some boards use LPC1768, some use LPC1769
- Functionally very similar, LPC1769 has a bit more RAM

**v1.1:**
- Minor PCB layout improvements
- Component sourcing changes (same components, different suppliers)
- Functionally identical to v1.0 from user perspective

**Notes:**
All v1.x boards run the same firmware. Your config file works across all revisions. The minor hardware differences don't affect user experience - you probably won't even know which revision you have unless you look closely at the board.

## Safety and Compliance

### Electrical Safety

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Electrical Safety Warnings:</strong><br><br>
  • The board handles up to 24V and 30A+ total current - this can kill you<br>
  • Heated components reach 200-300°C - these will burn you badly<br>
  • Always disconnect ALL power before working on wiring<br>
  • Use proper wire gauge for current loads (undersized wire causes fires)<br>
  • Use properly rated power supplies with proper safety certifications<br>
  • Follow your local electrical codes and regulations<br><br>
  If you don't know what you're doing with mains voltage wiring, hire an electrician or learn first. House fires are bad.
</sl-alert>
{:/nomarkdown}

**Recommended Safety Practices:**

**Wiring:**
- Use ferrules on stranded wire ends for screw terminals (prevents stray strands)
- Use proper strain relief on all cables
- Fuse all power inputs (protects against short circuits)
- Use wire rated for the current (14 AWG for 15A, 12 AWG for 20A, etc.)

**Machine Safety:**
- Emergency stop button (E-stop) on the machine that cuts all power
- Thermal runaway protection enabled in firmware (should be default)
- Smoke detector in your workspace
- Fire extinguisher nearby (Class C for electrical fires)
- Never leave the machine unattended during operation

**Testing:**
- Test all wiring before applying power
- Check for shorts with a multimeter
- Start with low current settings and work up
- Monitor temperatures during first runs

### Laser Safety

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Laser Safety Warnings:</strong><br><br>
  • Class 4 lasers (>500mW) can cause instant permanent blindness<br>
  • Laser-appropriate safety goggles are REQUIRED (not optional, required)<br>
  • Requires proper enclosure with interlocks<br>
  • Follow all local laser safety regulations<br>
  • Never bypass safety interlocks<br>
  • Know your laser's wavelength and get the right goggles for it<br><br>
  Lasers are not toys. Treat them with respect. See the <a href="laser-warning.md">laser safety documentation</a> for details.
</sl-alert>
{:/nomarkdown}

The firmware has laser safety features:
- Laser interlocks (can require homing before laser enables)
- Emergency laser shutoff
- Laser enable pin (hardware safety)

But firmware safety is secondary to physical safety (enclosure, interlocks, goggles).

### Regulatory Compliance

**CE/FCC:**
Smoothieboards are sold as components, not complete machines. The end-user (you) is responsible for compliance of the complete system. Your complete machine might need proper shielding, filtering, and grounding to meet emissions regulations. If you're selling machines commercially, you need to get them certified.

**RoHS:**
RoHS compliance varies by manufacturer and vendor. Check with your specific vendor if this matters to you. Most authentic boards are RoHS compliant but confirm before buying if it's a requirement.

## Warranty and Support

### Warranty

**Manufacturer Warranty:**
Typically 30-90 days depending on vendor. Covers manufacturing defects - dead on arrival, component failures, that sort of thing.

**Does NOT cover:**
- User damage (wrong wiring, overvoltage, reverse polarity, etc.)
- Normal wear and tear
- Modifications to the board
- Damage from misuse

**If something's wrong:**
Contact your vendor's support. You'll need proof of purchase and probably photos of the issue. Keep original packaging in case you need to return it.

Most vendors are reasonable about warranty issues. If the board arrived dead or fails within the warranty period through no fault of yours, they'll usually replace it.

### Support

**Vendor Support:**
- RoboSprout: Contact via website
- Other vendors: Check vendor website for support options

**Community Support (Free):**
- [Maker Forums](https://forum.makerforums.info/)
- Documentation at [smoothieware.org](http://smoothieware.org/)
- GitHub Issues (for firmware bugs): [https://github.com/Smoothieware/Smoothieware/issues](https://github.com/Smoothieware/Smoothieware/issues)

Community support is usually pretty good. The forums have a lot of experienced users who are happy to help.

## Appendix: Quick Reference

### Pin Labels

**Stepper Drivers (4-pin):**
- 1A, 1B, 2A, 2B (these are the motor coil connections)
- Connect motor coil pairs to 1A/1B and 2A/2B
- If motor goes the wrong direction, swap one coil pair

**Endstops (3-pin):**
- S (Signal), + (VCC), - (Ground)
- Labeled: X min, X max, Y min, Y max, Z min, Z max
- Can connect normally-open or normally-closed switches

**Thermistors (3-pin):**
- S (Signal), + (VCC), - (Ground)
- Labeled: TH0, TH1, TH2, TH3
- Connect thermistor between S and ground, polarity doesn't matter

**MOSFETs (2-pin):**
- + (Positive), - (Negative)
- Mind your polarity (+ to +, - to -)
- Labels vary by board variant

### Common Config Values

**Stepper Current:**
```
alpha_current   1.5    # X motor (Amps)
beta_current    1.5    # Y motor
gamma_current   1.5    # Z motor
delta_current   1.5    # E (extruder) motor
epsilon_current 1.5    # E1 (second extruder)
```

**Microstepping:**
```
microseconds    16     # 1/16 microstepping
# or
microseconds    32     # 1/32 microstepping (quieter)
```

**Temperature Control (Example for Hotend):**
{::nomarkdown}
```
temperature_control.hotend.enable               true
temperature_control.hotend.thermistor_pin       0.23
temperature_control.hotend.heater_pin           2.7
temperature_control.hotend.thermistor           Semitec
temperature_control.hotend.set_m_code           104
temperature_control.hotend.set_and_wait_m_code  109
```

Key temperature control settings include <setting v1="temperature_control.{name}.enable" v2="temperature control.enable"></setting>, <setting v1="temperature_control.{name}.thermistor_pin" v2="temperature control.thermistor_pin"></setting>, and <setting v1="temperature_control.{name}.heater_pin" v2="temperature control.heater_pin"></setting>.
{:/nomarkdown}

See the [configuration documentation](configuring-smoothie) for complete details.

## Troubleshooting Quick Reference

**Board won't power on:**
1. Check 5V supply (USB connected or external 5V connected)
2. Look for power LED (should be lit)
3. Check for short circuits (disconnect all peripherals, try again)
4. Try different USB cable/port or different 5V supply

**Motors won't move:**
{::nomarkdown}
1. Check current setting in config file (needs to be >0)
2. Verify motor wiring (coil pairs correct - check continuity)
3. Check enable pin state (some configs disable motors by default)
4. Send simple test command: <gcode>G0</gcode> X10 (should move X axis 10mm)
5. Feel the motor - does it get warm? If cold, no current. If scorching hot, current too high.
6. Are you setting your speeds too high? This is a common issue that can cause a motor to not be able to move.
{:/nomarkdown}

**Heater won't heat:**
1. Check MOSFET power input (needs 12-24V separate from motor power)
2. Measure heater resistance (should be 10-30Ω for typical hotend, 1-2Ω for bed)
{::nomarkdown}
3. Check config file (correct pins, PID values loaded)
4. Send <mcode>M105</mcode> - does it report temperature?
5. Manually enable heater: <mcode>M104</mcode> S200 (set hotend to 200°C)
{:/nomarkdown}

**Temperature reads wrong:**
1. Check thermistor type in config matches physical thermistor
2. Check thermistor connections (loose wires)
3. If reading -273°C or similar, thermistor is disconnected
4. If reading room temp and not changing, heater might be bad

**SD card not detected:**
1. Format as FAT32 (not exFAT, not NTFS)
2. Try different SD card (cheap cards can be flaky)
3. Max 32GB capacity (larger cards might not work)
4. Make sure card is inserted fully (should click)
5. Try reformatting card with SD Formatter tool

**Network not working:**
1. Check Ethernet cable (try different cable)
2. Check network settings in config file
3. Try DHCP first, static IP second
4. Check router - does it see the device?
5. Try accessing by IP directly in browser

For more detailed troubleshooting, see the [troubleshooting guide](troubleshooting).

## Related Documentation

**Getting Started:**
- [Smoothieboard Main Page](smoothieboard-v1)
- [Getting a Smoothieboard](getting-smoothieboard)
- [Getting Started Guide](getting-started)
- [Configuring Smoothie](configuring-smoothie)

**Application Guides:**
- [3D Printer Setup](3d-printer-guide)
- [Laser Cutter Setup](laser)
- [CNC Mill Setup](cnc-mill-guide)
- [Pick and Place](/pick-and-place-guide)

**Module Documentation:**
- [Temperature Control](temperaturecontrol)
- [Endstops](endstops)
- [Network Module](network)
- [Panel (LCD) Module](panel)

**Hardware:**
- [Smoothieboard v2 Prime](smoothieboard-v2-prime)
- [Power Input](main-power-input)
- [MOSFET Outputs](mosfets)

**Community:**
- [Getting Help](getting-help-community)
- [Contributing](contribution-guidlines)

---

*Page last updated: 2025-10-21*
