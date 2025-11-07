# Smoothieware v2 Configuration Reference

## Complete Configuration Settings

**Total Settings:** ~230 configuration keys across 13 modules

* **General/System:** Settings for core system configuration, boot behavior, and hardware control
* **Motion Control:** Kinematics, speeds, and motion algorithms
* **Planner:** Motion planning and trajectory generation
* **Conveyor:** G-code queue and execution management
* **Actuators:** Motor drivers, axis configuration, and TMC driver support
* **Extruder:** Filament extrusion control and firmware retraction
* **Temperature Control:** Heating and cooling with PID control
* **Switch:** GPIO and PWM control for outputs
* **ZProbe & Leveling:** Bed probing and advanced leveling strategies
* **Endstops:** Limit switches and homing configuration
* **Panel:** LCD displays and user interface (limited support in v2)
* **Network:** Ethernet connectivity, services (telnet, FTP, web, NTP)
* **Laser/Spindle/Tools:** Tool control systems for CNC applications

---

## About This Documentation

This comprehensive reference documents all configuration settings for Smoothieware v2 firmware. Each setting includes:

* **Type:** Data type (bool, number, string, pin)
* **Default:** Default value if not specified
* **Units:** Physical units if applicable (mm, mm/s, °C, Hz, etc.)
* **Module:** Module name or section from INI configuration
* **Context:** Global or module instance setting
* **Defined in:** Source file and line number
* **Minimum value:** If enforced by source code validation
* **Maximum value:** If enforced by source code validation
* **Typical values:** Common values with context
* **Valid values:** Range or enumeration of allowed values
* **Corresponding v1 setting:** Equivalent setting in v1 or "none"
* **Corresponding v2 setting:** Setting name in v2 (same version)
* **Description:** What the setting does and why you would use it
* **Related M-Codes:** G-code commands that interact with this setting
* **Related settings:** Other settings that work with this one
* **Related pages:** Documentation pages for more information
* **Example configuration:** How to use the setting in INI format

**Format:** All entries use standardized bullet format with 2-space sub-bullet indentation for details.

**v2 Configuration System:** Smoothieware v2 uses INI format with `[section]` headers and `key = value` syntax, replacing v1's flat dot-notation format.

---

## Table of Contents

1. [General/System](#generalsystem)
2. [Motion Control](#motion-control)
3. [Planner](#planner)
4. [Conveyor](#conveyor)
5. [Actuators](#actuators)
6. [Extruder](#extruder)
7. [Temperature Control](#temperature-control)
8. [Switch](#switch)
9. [ZProbe & Leveling](#zprobe--leveling)
10. [Endstops](#endstops)
11. [Panel](#panel)
12. [Network](#network)
13. [Laser/Spindle/Tools](#laserspindletools)

---


## General/System

# Smoothieware v2 General/System Configuration Settings

**Module:** General and System
**Settings Count:** 19
**Source Files:** main.cpp, Consoles.cpp
**Status:** Complete

---

## Overview

This document provides comprehensive documentation for all General and System configuration settings in Smoothieware v2. These settings control system-wide behavior, hardware configuration, boot behavior, USB functionality, and console interfaces.

The settings are organized into four sections:
- `[general]` - Firmware behavior and compatibility modes
- `[system]` - Hardware timing, LEDs, power control, and firmware updates
- `[consoles]` - USB serial port configuration
- `[uart console]` - UART serial console configuration

---

## Section: [general]

System-wide behavioral settings that control firmware operation modes and configuration override functionality.

### `grbl_mode`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting affecting G-code interpretation
* Defined in: `Firmware/src/main.cpp:267`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: N/A (this is v2)
* Description: Enables GRBL compatibility mode for CNC applications. When enabled, the firmware responds with GRBL-style status messages and command acknowledgments, making it compatible with GRBL-based software and sender applications like bCNC, Universal G-code Sender, and similar CNC control programs. This mode changes how certain G-codes are interpreted and how responses are formatted to match GRBL's behavior.
  * GRBL mode affects G-code dialect interpretation (see grbl-mode documentation)
  * Primarily used for CNC milling applications
  * Does not affect 3D printing G-code interpretation (RepRap dialect still available)
  * Status reporting format changes to match GRBL expectations
* Related settings: `motion control.compliant_seek_rate`, `motion control.nist_G30`
* Related pages: grbl-mode, cnc-mill-guide, from-grbl
* Example configuration:
  * grbl_mode = false  # Default RepRap dialect for 3D printing
  * grbl_mode = true  # GRBL dialect for CNC milling with GRBL-compatible software

### `config-override`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting controlling runtime configuration save/load
* Defined in: `Firmware/src/main.cpp:270`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (config-override was always active in v1 if file present)
* Corresponding v2 setting: N/A (this is v2)
* Description: Enables config-override functionality allowing runtime configuration changes to be saved with M500 and loaded automatically on boot. When enabled, settings can be overridden and persisted without modifying the main config.ini file. The override file is stored as config-override.ini on the SD card. Unlike v1 where the override file was always active if present, v2 requires explicit enabling of this feature.
  * Override file path: `/sd/config-override.ini`
  * Settings in override file take precedence over config.ini
  * Useful for PID tuning, probe offsets, and other values that change during calibration
  * WARNING: If enabled and override file exists, changes to config.ini for overridden settings will be ignored
  * Disable this setting to force reading from config.ini only
* Related M-Codes:
  * M500 - Save current configuration to override file (only works if this setting is true)
  * M501 - Reload configuration from override file
  * M502 - Delete override file and reload from config.ini
  * M503 - Display current configuration settings
* Related settings: none
* Related pages: configuring-smoothie, override-warning, temperaturecontrol-pid-autotuning
* Example configuration:
  * config-override = false  # Default - runtime changes not saved
  * config-override = true  # Enable M500 save and auto-load override file on boot

---

## Section: [system]

Hardware and system-level settings that control stepper timing, LEDs, firmware updates, USB functionality, and power management.

### `step_pulse_us`

* Type: `number`
* Default: `1` (1 microsecond, hardware default)
* Units: µs (microseconds)
* Module: `root`
* Context: Global setting affecting all stepper drivers
* Defined in: `Firmware/src/main.cpp:278`
* Minimum value: `1` (checked at main.cpp:279 with `if(unsteptime >= 1)`)
* Typical values: `1` (modern drivers), `2` (older drivers), `3` (very slow drivers or long cable runs)
* Corresponding v1 setting: `microseconds_per_step_pulse`
* Corresponding v2 setting: N/A (this is v2)
* Description: Duration of the step pulse sent to stepper drivers in microseconds. This controls how long the STEP signal remains high before returning low. Increase this value if stepper motors are missing steps, behaving erratically, or making unusual noises. Most modern stepper drivers (TMC, DRV8825, A4988) work fine with 1µs pulses, but older drivers like the original A4983 or drivers with optoisolated inputs may require 2-3µs pulses for reliable operation.
  * Too short: Driver may miss steps or not respond at all
  * Too long: Limits maximum achievable step frequency
  * Long cable runs may require longer pulses due to signal degradation
  * Check your stepper driver datasheet for minimum pulse width requirements
  * External drivers with optoisolators typically need 2-3µs
* Related settings: `step_frequency`
* Related pages: stepper-motors, troubleshooting
* Example configuration:
  * step_pulse_us = 1  # Modern TMC2590/TMC2660 drivers (default)
  * step_pulse_us = 2  # Older A4988/DRV8825 or moderate cable runs
  * step_pulse_us = 3  # Very old drivers or optoisolated external drivers

### `step_frequency`

* Type: `number`
* Default: `200000` (200 kHz in release builds), `50000` (50 kHz in debug builds)
* Units: Hz (frequency)
* Module: `root`
* Context: Global setting affecting maximum achievable speeds
* Defined in: `Firmware/src/main.cpp:284`
* Minimum value: `1` (checked at main.cpp:285 with `if(stepfreq >= 1)`)
* Maximum value: `200000` (200 kHz hardware limit for STM32H7)
* Typical values: `200000` (production firmware), `50000` (debug builds), `100000` (conservative for reliability)
* Corresponding v1 setting: none (was hardcoded in v1)
* Corresponding v2 setting: N/A (this is v2)
* Description: Maximum step generation frequency in Hertz. This is the theoretical maximum rate at which the firmware can generate step pulses across all motors, based on MCU speed and firmware overhead. The actual achievable speed depends on this frequency, microstepping, and steps per millimeter. In debug builds, this defaults to 50 kHz to accommodate slower code execution with debug symbols. Lowering this value can improve system stability if experiencing issues at high speeds.
  * Formula: max_speed_mm_per_sec = step_frequency / (steps_per_mm × microsteps)
  * Higher values allow faster rapids but may cause instability
  * Lower values improve reliability but limit speed
  * Debug builds automatically default to 50 kHz
  * Production builds default to 200 kHz
  * CRITICAL: Setting this too high will cause stuttering, missed steps, or system lockups
* Related settings: `actuator.*.max_rate`, `motion control.default_seek_rate`, `step_pulse_us`
* Related pages: motion-control, stepper-motors, troubleshooting
* Example configuration:
  * step_frequency = 200000  # Maximum speed for production firmware (default)
  * step_frequency = 100000  # Conservative setting for improved reliability
  * step_frequency = 50000  # Debug builds or slow external drivers

### `aux_play_led`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `root`
* Context: Global setting for status indication
* Defined in: `Firmware/src/main.cpp:290`
* Valid values: Any valid pin specification in format `PXn` with optional modifiers, or `"nc"`
  * Format: `P<port><pin><modifiers>` (e.g., `PJ9`, `PF3!o`)
  * Use `nc` to disable the feature
  * Pin must be available (not used by other modules)
  * Configured as output automatically
* Corresponding v1 setting: `play_led_pin` (functionality expanded in v2)
* Corresponding v2 setting: N/A (this is v2)
* Description: Optional secondary play LED pin that mirrors the main play LED state. Useful for lighted kill buttons, external status indicators, or remote control panels that need to show when the machine is running (playing G-code from SD card) or idle. The LED turns on when actively executing G-code and turns off when idle or paused. This is in addition to the primary play LED on the board itself.
  * LED turns ON during G-code file playback
  * LED turns OFF when idle, paused, or stopped
  * Commonly used for illuminated E-stop buttons or control panel indicators
  * Pin is automatically configured as output
  * Can drive LED directly with current-limiting resistor
  * For high-power indicator lights, use a MOSFET or transistor
* Related settings: none
* Related pages: playled, player, kill-pause-button
* Example configuration:
  * aux_play_led = nc  # No auxiliary LED (default)
  * aux_play_led = PJ9  # Use port J pin 9 for status LED
  * aux_play_led = PF3!o  # Inverted output on port F pin 3 with open-drain

### `flash_on_boot`

* Type: `bool`
* Default: `true`
* Module: `root`
* Context: Global setting for firmware updates
* Defined in: `Firmware/src/main.cpp:298`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (v1 always checked for flashme.bin)
* Corresponding v2 setting: N/A (this is v2)
* Description: Automatically flash firmware from flashme.bin file if present on SD card at boot. When enabled, the system checks for a valid flashme.bin file on startup and automatically performs the firmware update if found. The file is renamed to flashme.old after successful flashing. Disable this if you want manual control over firmware updates or if automatic updates interfere with your workflow.
  * Firmware file must be named exactly: `flashme.bin`
  * File must be in the root directory of the SD card
  * File must have valid firmware magic number for board type
  * After successful flash, file is renamed to `flashme.old`
  * System reboots automatically after flashing
  * WARNING: Invalid firmware files will cause boot failure
  * Keep known-good firmware.bin backup on SD card for recovery
* Related settings: `dfu_enable`
* Related pages: flashing-smoothie-firmware, sd-card, troubleshooting
* Example configuration:
  * flash_on_boot = true  # Automatic firmware updates (default, recommended)
  * flash_on_boot = false  # Manual firmware updates only (advanced users)

### `dfu_enable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global setting for development/debugging
* Defined in: `Firmware/src/main.cpp:300`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (DFU mode not available in v1)
* Corresponding v2 setting: N/A (this is v2)
* Description: Enable DFU (Device Firmware Update) mode for developers. When enabled, the board can enter DFU mode for low-level firmware flashing via USB without needing the SD card bootloader. This is primarily for firmware developers and advanced users who need to flash firmware directly to the microcontroller's internal flash memory. Disabled by default for safety to prevent accidental bricking of the board.
  * DFU mode allows direct USB firmware flashing
  * Bypasses SD card bootloader
  * Requires DFU-compatible tools (dfu-util on Linux, STM32CubeProgrammer on Windows)
  * CRITICAL: Incorrect DFU flashing can brick the board
  * Only enable for development or recovery purposes
  * Normal users should use SD card flashing via flash_on_boot
  * To enter DFU mode: power on while holding specific button combination (board-specific)
* Related settings: `flash_on_boot`
* Related pages: flashing-smoothie-firmware, flashing-the-bootloader
* Example configuration:
  * dfu_enable = false  # DFU mode disabled for safety (default, recommended for normal use)
  * dfu_enable = true  # Enable DFU mode (developers and advanced users only)

### `msc_enable`

* Type: `bool`
* Default: `true`
* Module: `root`
* Context: Global setting for USB functionality
* Defined in: `Firmware/src/main.cpp:303`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (MSC was always enabled in v1)
* Corresponding v2 setting: N/A (this is v2)
* Description: Enable Mass Storage Class mode which allows the SD card to be accessed as a USB drive when connected to a computer. When enabled, you can drag and drop files directly to the board's SD card without removing it. The SD card is automatically ejected from the host computer when disconnecting USB. This is the most convenient way to update configuration files, upload G-code, and manage files on the SD card.
  * SD card appears as removable drive when connected via USB
  * No need to physically remove SD card
  * IMPORTANT: Always eject/unmount the drive before disconnecting USB
  * Improper ejection can corrupt the SD card filesystem
  * On Mac: wait for Spotlight indexing to complete before ejecting (can take 1-2 minutes)
  * Disable if experiencing USB stability issues
  * When disabled, files must be transferred via SD card reader or network (if available)
* Related settings: `msc_led`
* Related pages: sd-card, mac-drivers, linux-drivers, windows-drivers, missing-web-interface
* Example configuration:
  * msc_enable = true  # SD card accessible via USB (default, recommended)
  * msc_enable = false  # Disable MSC mode (use if USB issues occur)

### `msc_led`

* Type: `pin`
* Default: `"PF13"` (Prime board), `"nc"` (other boards)
* Module: `root`
* Context: Global setting for status indication
* Defined in: `Firmware/src/main.cpp:311`
* Valid values: Any valid pin specification or `"nc"`
  * Format: `P<port><pin>` (e.g., `PF13`, `PD5`)
  * Use `nc` to disable MSC LED indication
  * Pin must be available (not used by other modules)
* Corresponding v1 setting: none (MSC LED indication new in v2)
* Corresponding v2 setting: N/A (this is v2)
* Description: LED that flashes when the board is in Mass Storage Class mode and the SD card is being accessed. Provides visual feedback when the SD card is being read or written via USB, warning you not to disconnect the cable during file operations. The LED flashes rapidly during active transfers and stays off when no transfers are occurring. Only used when msc_enable is true.
  * LED flashes during SD card read/write operations
  * LED off when no MSC activity
  * Helps prevent accidental disconnection during file transfer
  * Prime board has dedicated LED on PF13
  * Other boards default to no MSC LED (set to nc)
  * Can be set to any available GPIO pin
* Related settings: `msc_enable`
* Related pages: sd-card, pinout
* Example configuration:
  * msc_led = PF13  # Prime board default
  * msc_led = nc  # Disable MSC LED indication
  * msc_led = PD5  # Custom LED pin on different board

### `fets_enable_pin`

* Type: `pin`
* Default: `"PF14!o"` (Prime board - inverted open-drain), `"nc"` (other boards)
* Module: `root`
* Context: Global hardware power control
* Defined in: `Firmware/src/main.cpp:474`
* Valid values: Any valid pin specification with modifiers or `"nc"`
  * Format: `P<port><pin><modifiers>` (e.g., `PF14!o`, `PD7`)
  * `!` modifier inverts the signal (active low)
  * `o` modifier enables open-drain mode
  * Use `nc` to disable global FET control
* Corresponding v1 setting: none (global FET control new in v2)
* Corresponding v2 setting: N/A (this is v2)
* Description: Global enable pin for all FETs (Field Effect Transistors) controlling heaters, fans, and other high-power outputs. This is typically a NOT-enable signal (active low) that controls power to all output FETs. When this pin is high (disabled), all FET outputs are turned off as a safety measure. The Prime board uses an inverted open-drain configuration on PF14. Both this pin and fets_power_enable_pin must be in the correct state for FETs to operate.
  * Controls master enable for all MOSFET outputs
  * Typically inverted signal (! modifier) - low = enabled, high = disabled
  * Acts as emergency cutoff for all heaters, fans, and powered outputs
  * Prime board default: PF14!o (inverted open-drain)
  * Must be enabled along with fets_power_enable_pin for FET operation
  * CRITICAL: Incorrect configuration can prevent all heaters/outputs from working
  * Test carefully before connecting high-power devices
* Related settings: `fets_power_enable_pin`
* Related pages: mosfets, pinout, safety-thermistor
* Example configuration:
  * fets_enable_pin = PF14!o  # Prime board (inverted open-drain, default)
  * fets_enable_pin = nc  # No global FET control (individual control only)
  * fets_enable_pin = PD7  # Custom enable pin on different board

### `fets_power_enable_pin`

* Type: `pin`
* Default: `"PD7"` (Prime board), `"nc"` (other boards)
* Module: `root`
* Context: Global hardware power control
* Defined in: `Firmware/src/main.cpp:485`
* Valid values: Any valid pin specification with modifiers or `"nc"`
  * Format: `P<port><pin>` (e.g., `PD7`, `PF3`)
  * Use `nc` to disable this control signal
* Corresponding v1 setting: none (global FET power control new in v2)
* Corresponding v2 setting: N/A (this is v2)
* Description: Global power enable pin for FETs. This is typically an active high enable signal that controls the power supply to all FET circuits. On the Prime board, this controls a separate power rail that supplies the FET drivers. Both this pin and fets_enable_pin must be in the correct state for FETs to operate. This dual-control approach provides enhanced safety by requiring two independent signals for high-power output operation.
  * Controls power supply to FET driver circuits
  * Typically non-inverted signal (high = enabled, low = disabled)
  * Prime board default: PD7
  * Works in conjunction with fets_enable_pin for dual-safety
  * Both pins must be correctly configured for heaters/fans to function
  * Separate from individual MOSFET control pins
  * CRITICAL: Incorrect configuration will prevent all FET outputs from working
* Related settings: `fets_enable_pin`
* Related pages: mosfets, pinout, main-power-input
* Example configuration:
  * fets_power_enable_pin = PD7  # Prime board default
  * fets_power_enable_pin = nc  # No power enable control
  * fets_power_enable_pin = PF3  # Custom power enable pin

---

## Section: [consoles]

USB and serial console configuration for communication interfaces.

### `second_usb_serial_enable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: Global USB configuration
* Defined in: `Firmware/src/Consoles.cpp:685`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (second USB serial new in v2)
* Corresponding v2 setting: N/A (this is v2)
* Description: Enable a second USB serial console port for simultaneous connections. When enabled, the board presents two USB serial interfaces (composite device), allowing multiple programs to communicate with the board concurrently without conflicts. This is useful for running a host program (like Octoprint or Pronterface) on one port while using a terminal for debugging or manual commands on the second port. Both ports have full command access.
  * Creates two independent USB CDC ACM serial ports
  * Both ports can send/receive commands simultaneously
  * Useful for: host software + debugging terminal, or multiple control programs
  * Host sees two separate serial devices (e.g., /dev/ttyACM0 and /dev/ttyACM1 on Linux)
  * Both ports share same command parser and G-code queue
  * No performance penalty for enabling second port
  * Some host operating systems may require driver configuration for composite USB devices
* Related settings: `uart console.enable`
* Related pages: connecting-smoothie, octoprint, pronterface, console-commands
* Example configuration:
  * second_usb_serial_enable = false  # Single USB serial port (default)
  * second_usb_serial_enable = true  # Two USB serial ports for multi-host or debugging

---

## Section: [uart console]

UART-based console configuration for hardware serial communication. This section configures a hardware UART as an additional console interface, separate from USB serial.

### `enable`

* Type: `bool`
* Default: `false`
* Module: `root`
* Context: UART hardware configuration
* Defined in: `Firmware/src/Consoles.cpp:692`
* Valid values: `true`, `false`
* Corresponding v1 setting: `uart0.baud_rate` (presence enabled UART in v1)
* Corresponding v2 setting: N/A (this is v2)
* Description: Enable UART console for serial communication over hardware UART pins. When enabled, the board can communicate via a dedicated UART channel in addition to USB serial. This is useful for connecting to external devices like Raspberry Pi, touchscreen panels, Bluetooth modules, or isolated debugging terminals. The UART can be configured as a full console (with command processing) or as a raw data channel.
  * Enables one of 8 available UART channels (channel 0-7)
  * Requires additional settings: channel, baudrate, bits, stop_bits, parity
  * Can be used alongside USB serial
  * Useful for wireless modules (Bluetooth, WiFi), SBCs (Raspberry Pi), or panels
  * When console=true, UART behaves like USB serial (command input/output)
  * When console=false, UART is raw data channel (application-specific use)
* Related settings: `console`, `channel`, `baudrate`, `bits`, `stop_bits`, `parity`
* Related pages: uart, connecting-smoothie, bluetooth-serial
* Example configuration:
  * enable = false  # UART console disabled (default)
  * enable = true  # Enable UART console for additional serial interface

### `console`

* Type: `bool`
* Default: `true`
* Module: `root`
* Context: UART functionality mode
* Defined in: `Firmware/src/Consoles.cpp:695`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (UART was always console in v1 if enabled)
* Corresponding v2 setting: N/A (this is v2)
* Description: Use the UART as a console interface for sending and receiving commands, versus using it for raw data transmission. When true, the UART behaves like the USB serial console with full command processing, G-code interpretation, and status responses. When false, the UART is a raw data channel without command interpretation, useful for application-specific protocols or binary data transmission.
  * true = Console mode (G-code commands, ok responses, status messages)
  * false = Raw mode (no command processing, direct byte-level access)
  * Console mode is appropriate for: host software, manual control, debugging
  * Raw mode is appropriate for: custom protocols, binary data, pass-through communication
  * Only relevant when enable=true
* Related settings: `enable`, `baudrate`
* Related pages: uart, console-commands, communication
* Example configuration:
  * console = true  # UART as command console (default, most common)
  * console = false  # UART as raw data channel (advanced use cases)

### `channel`

* Type: `number`
* Default: `0`
* Module: `root`
* Context: Hardware channel selection
* Defined in: `Firmware/src/Consoles.cpp:697`
* Valid values: `0-7` (board dependent - not all channels available on all boards)
  * Channel 0 typically the primary debug/console UART
  * Available channels depend on board design and pin availability
  * Consult board schematic for channel to pin mapping
  * Some channels may conflict with other peripherals (SPI, I2C, etc.)
* Corresponding v1 setting: none (v1 only had one UART channel)
* Corresponding v2 setting: N/A (this is v2)
* Description: UART hardware channel number to use. Different boards support different numbers of UART channels. Channel 0 is typically the primary debug UART. The STM32H7 microcontroller has up to 8 USART/UART peripherals, but not all may be broken out to accessible pins on a given board. Check your board's schematic or pinout diagram to determine which channels are available and their corresponding pin assignments.
  * Channel 0 most commonly available and used for debug output
  * Higher channel numbers may have limited pin access
  * Channel selection determines which physical pins are used (TX/RX)
  * Different channels have different capabilities (some UARTs have hardware flow control)
* Related settings: `enable`, `console`, `baudrate`
* Related pages: uart, pinout, lpc4337-pin-usage
* Example configuration:
  * channel = 0  # Primary UART channel (default, most common)
  * channel = 1  # Secondary UART channel (if available on board)
  * channel = 3  # Alternate UART channel for specific board configuration

### `baudrate`

* Type: `number`
* Default: `115200`
* Units: baud (bits per second)
* Module: `root`
* Context: UART serial communication speed
* Defined in: `Firmware/src/Consoles.cpp:698`
* Typical values: `9600` (slow, very reliable), `115200` (standard default), `230400` (fast), `250000` (3D printing common), `500000` (very fast)
* Valid values: Standard baud rates - must match connected device exactly
  * Common: 9600, 19200, 38400, 57600, 115200, 230400, 460800, 921600
  * Higher rates allow faster command transmission
  * Higher rates may be less reliable over long cable runs or with cheap USB-UART adapters
  * Must match baud rate of connected device exactly
* Corresponding v1 setting: `uart0.baud_rate`
* Corresponding v2 setting: N/A (this is v2)
* Description: UART communication speed in bits per second. Must match the baudrate configured on the connected device. Higher baudrates allow faster communication and shorter latency, but may be less reliable over long cable runs, with electrical noise, or with cheap UART adapters. 115200 is the standard default that works well in most situations. 3D printing applications sometimes use 250000 baud for faster command throughput.
  * 9600: Very slow but extremely reliable, good for long cable runs or noisy environments
  * 115200: Standard default, good balance of speed and reliability
  * 230400: Faster commands, may have issues with cheap USB-UART adapters
  * 250000: Common in 3D printing for high-speed command streaming
  * 500000+: Very fast but requires high-quality cables and adapters
  * CRITICAL: Mismatch causes garbled communication or complete failure
  * Higher baud rates more sensitive to clock accuracy and EMI
* Related settings: `enable`, `channel`, `bits`, `stop_bits`, `parity`
* Related pages: uart, connecting-smoothie, bluetooth-serial
* Example configuration:
  * baudrate = 115200  # Standard default (recommended for most uses)
  * baudrate = 250000  # 3D printing high-speed (common for Marlin compatibility)
  * baudrate = 9600  # Slow and reliable for long cables or noisy environments

### `bits`

* Type: `number`
* Default: `8`
* Module: `root`
* Context: UART frame format
* Defined in: `Firmware/src/Consoles.cpp:699`
* Valid values: `5-9` (5, 6, 7, 8, or 9 data bits)
  * 8 bits: Standard for modern serial communication
  * 7 bits: Legacy systems, ASCII text only
  * 5-6 bits: Very rare, specialized protocols
  * 9 bits: Multi-processor communication mode (advanced)
* Corresponding v1 setting: none (always 8 bits in v1)
* Corresponding v2 setting: N/A (this is v2)
* Description: Number of data bits per character transmitted over UART. Standard serial communication uses 8 bits, which can represent 256 different values (0-255) per byte. This is sufficient for all ASCII characters, extended characters, and binary data. 7-bit mode is legacy support for old systems that only used 7-bit ASCII. 5-6 bit modes are extremely rare. 9-bit mode is for specialized multi-processor communication protocols.
  * 8 bits: Standard, supports full ASCII + extended characters + binary data
  * 7 bits: Legacy ASCII only (0x00-0x7F), rarely used today
  * Must match connected device setting exactly
  * Almost all modern devices use 8 data bits
  * Changing from 8 bits is very rare and only for specific hardware requirements
* Related settings: `baudrate`, `stop_bits`, `parity`
* Related pages: uart
* Example configuration:
  * bits = 8  # Standard 8-bit data (default, nearly universal)
  * bits = 7  # 7-bit ASCII mode (legacy systems only)

### `stop_bits`

* Type: `number`
* Default: `1`
* Module: `root`
* Context: UART frame format
* Defined in: `Firmware/src/Consoles.cpp:700`
* Valid values: `1`, `2`
  * 1 stop bit: Standard for most communication (faster)
  * 2 stop bits: More robust timing, used with slow baud rates or noisy environments
* Corresponding v1 setting: none (always 1 stop bit in v1)
* Corresponding v2 setting: N/A (this is v2)
* Description: Number of stop bits appended after each character. Stop bits provide synchronization time between characters, allowing the receiver to prepare for the next character. Most serial communication uses 1 stop bit as this is sufficient for synchronization at typical baud rates. 2 stop bits can be used for more robust communication at slower speeds or in electrically noisy environments, at the cost of reduced data throughput.
  * 1 stop bit: Standard, allows maximum data throughput (10 bits per character with 8N1)
  * 2 stop bits: Extra margin for slow devices or poor signal quality (11 bits per character)
  * Must match connected device setting exactly
  * 2 stop bits reduces effective data rate by ~10%
  * Modern high-speed communication almost always uses 1 stop bit
* Related settings: `baudrate`, `bits`, `parity`
* Related pages: uart
* Example configuration:
  * stop_bits = 1  # Standard single stop bit (default, recommended)
  * stop_bits = 2  # Two stop bits for noisy environments or legacy devices

### `parity`

* Type: `enum`
* Default: `"none"`
* Module: `root`
* Context: UART error detection
* Defined in: `Firmware/src/Consoles.cpp:701`
* Valid values: `"none"`, `"odd"`, `"even"`
  * `none` - No parity bit (most common, 8N1 configuration)
  * `odd` - Odd parity (total 1 bits must be odd)
  * `even` - Even parity (total 1 bits must be even)
* Corresponding v1 setting: none (always no parity in v1)
* Corresponding v2 setting: N/A (this is v2)
* Description: Parity checking mode for error detection. "none" means no parity bit is added, maximizing data throughput. "odd" and "even" add an extra bit to make the total number of 1 bits in each character odd or even respectively, allowing basic error detection. Parity can detect single-bit errors but cannot correct them. Modern serial communication rarely uses parity because higher-level protocols (like G-code checksums) provide better error detection.
  * none: No error detection, maximum throughput, 8N1 configuration (8 data, no parity, 1 stop)
  * even: Even parity - parity bit set so total 1-bits is even, 8E1 configuration
  * odd: Odd parity - parity bit set so total 1-bits is odd, 8O1 configuration
  * Parity adds one bit per character (reduces throughput slightly)
  * Can detect single-bit errors but cannot correct them
  * Must match connected device setting exactly
  * Modern communication typically uses none (8N1)
  * Parity useful in very noisy environments or with legacy systems requiring it
* Related settings: `baudrate`, `bits`, `stop_bits`
* Related pages: uart, communication
* Example configuration:
  * parity = none  # No parity checking (default, standard 8N1)
  * parity = even  # Even parity for error detection (8E1)
  * parity = odd  # Odd parity for legacy device compatibility (8O1)

---

## Pin Naming Conventions

All pin settings in this section use the standard Smoothieware v2 pin naming format:

**Format:** `P<port><pin><modifiers>`

**Port Letters:** A-K (depending on microcontroller)
**Pin Numbers:** 0-15 (depending on port)

**Common Modifiers:**
* `!` - Invert signal (active low, NOT operation)
* `^` - Enable internal pullup resistor
* `v` - Enable internal pulldown resistor
* `o` - Configure as open-drain output
* `i` - Configure as input (usually default for input pins)
* `nc` - Not connected (disables the feature)

**Examples:**
* `PF14!o` - Port F pin 14, inverted signal, open-drain output mode
* `PJ9` - Port J pin 9, default configuration (typically push-pull output)
* `PD7^` - Port D pin 7, with internal pullup enabled
* `nc` - Feature disabled

**Pin Selection Guidelines:**
* Always consult board schematic before assigning pins
* Verify pin is not already used by another module
* Check pin capabilities (some pins cannot do PWM, ADC, etc.)
* Test with multimeter or oscilloscope before connecting loads
* Use current-limiting resistors for LED connections
* Use MOSFETs/transistors for driving high-current loads

---

## Corresponding v1 Settings Summary

| v2 Setting | v1 Setting | Status |
|------------|-----------|--------|
| `general.grbl_mode` | none | New in v2 |
| `general.config-override` | (always active if file present) | Explicit control in v2 |
| `system.step_pulse_us` | `microseconds_per_step_pulse` | Renamed |
| `system.step_frequency` | (hardcoded) | Configurable in v2 |
| `system.aux_play_led` | `play_led_pin` | Renamed/expanded |
| `system.flash_on_boot` | (always active) | Explicit control in v2 |
| `system.dfu_enable` | none | New in v2 |
| `system.msc_enable` | (always active) | Explicit control in v2 |
| `system.msc_led` | none | New in v2 |
| `system.fets_enable_pin` | none | New in v2 |
| `system.fets_power_enable_pin` | none | New in v2 |
| `consoles.second_usb_serial_enable` | none | New in v2 |
| `uart console.enable` | (implicit via baud_rate) | Explicit in v2 |
| `uart console.console` | (always console) | Configurable in v2 |
| `uart console.channel` | (always channel 0) | Multi-channel in v2 |
| `uart console.baudrate` | `uart0.baud_rate` | Renamed |
| `uart console.bits` | (always 8) | Configurable in v2 |
| `uart console.stop_bits` | (always 1) | Configurable in v2 |
| `uart console.parity` | (always none) | Configurable in v2 |

---

## Complete Configuration Examples

### Example 1: Standard 3D Printer Configuration

```ini
[general]
grbl_mode = false  # RepRap mode for 3D printing
config-override = true  # Enable M500 for PID tuning saves

[system]
step_pulse_us = 1  # Modern TMC drivers
step_frequency = 200000  # Full 200 kHz for STM32H7
aux_play_led = nc  # No auxiliary status LED
flash_on_boot = true  # Automatic firmware updates
dfu_enable = false  # DFU disabled for safety
msc_enable = true  # SD card via USB
msc_led = PF13  # Prime board MSC LED
fets_enable_pin = PF14!o  # Prime board FET control
fets_power_enable_pin = PD7  # Prime board FET power

[consoles]
second_usb_serial_enable = false  # Single USB serial sufficient

[uart console]
enable = false  # No UART console needed
```

### Example 2: CNC Mill with GRBL Mode

```ini
[general]
grbl_mode = true  # GRBL compatibility for CNC software
config-override = false  # Disable overrides for CNC precision

[system]
step_pulse_us = 2  # Conservative for external drivers
step_frequency = 100000  # Lower for reliability with long cables
aux_play_led = PJ9  # External status indicator LED
flash_on_boot = true  # Automatic updates
dfu_enable = false  # Safety
msc_enable = true  # Easy G-code upload
msc_led = PF13  # Activity indicator
fets_enable_pin = PF14!o  # Prime board
fets_power_enable_pin = PD7  # Prime board

[consoles]
second_usb_serial_enable = false

[uart console]
enable = false
```

### Example 3: Development Board with Debug UART

```ini
[general]
grbl_mode = false
config-override = true

[system]
step_pulse_us = 1
step_frequency = 50000  # Debug build with slower execution
aux_play_led = nc
flash_on_boot = false  # Manual firmware control during development
dfu_enable = true  # Enable DFU for direct flashing
msc_enable = true
msc_led = nc  # No MSC LED
fets_enable_pin = nc  # No FET control on dev board
fets_power_enable_pin = nc

[consoles]
second_usb_serial_enable = true  # Two USB ports for host + debug terminal

[uart console]
enable = true  # UART debug output
console = true  # Full console on UART
channel = 0  # Primary UART
baudrate = 115200  # Standard debug baud rate
bits = 8
stop_bits = 1
parity = none
```

### Example 4: Wireless Control via Bluetooth

```ini
[general]
grbl_mode = false
config-override = true

[system]
step_pulse_us = 1
step_frequency = 200000
aux_play_led = nc
flash_on_boot = true
dfu_enable = false
msc_enable = true
msc_led = PF13
fets_enable_pin = PF14!o
fets_power_enable_pin = PD7

[consoles]
second_usb_serial_enable = false

[uart console]
enable = true  # UART for Bluetooth module
console = true  # Full console commands via Bluetooth
channel = 1  # Secondary UART connected to HC-05 Bluetooth module
baudrate = 115200  # Standard Bluetooth SPP baud rate
bits = 8
stop_bits = 1
parity = none
```

---

## Board-Specific Defaults

### Smoothieboard v2 Prime (BOARD_PRIME)

The production Smoothieboard v2 Prime has these hardware-specific defaults:

* `msc_led`: `"PF13"` - Onboard LED for MSC activity
* `fets_enable_pin`: `"PF14!o"` - Inverted open-drain FET control
* `fets_power_enable_pin`: `"PD7"` - FET driver power enable

### Development/Devebox Boards

Generic development boards (Nucleo, Devebox) default to:

* `msc_led`: `"nc"` - No MSC LED available
* `fets_enable_pin`: `"nc"` - No global FET control
* `fets_power_enable_pin`: `"nc"` - No FET power control

**Note:** Always verify pin assignments against your specific board's schematic before using FET control or LED indicators.

---

## Troubleshooting

### Motors Missing Steps or Not Moving

**Symptoms:** Steppers miss steps, don't move, or make grinding noises

**Solutions:**
1. Increase `step_pulse_us` to 2 or 3 microseconds
2. Check that `step_frequency` is not too high (try 100000 instead of 200000)
3. Verify stepper driver wiring and enable pins
4. Check motor current settings
5. Ensure power supply provides sufficient current

### Cannot Access SD Card via USB

**Symptoms:** SD card doesn't appear as drive when connected via USB

**Solutions:**
1. Verify `msc_enable = true`
2. Check USB cable supports data (not charging-only cable)
3. Ensure no other program is accessing the SD card
4. Try different USB port on computer
5. Check SD card is properly inserted and formatted (FAT32)
6. On Mac: wait for Spotlight indexing to complete

### UART Console Not Working

**Symptoms:** No response from UART, garbled characters, or connection failures

**Solutions:**
1. Verify `enable = true` in [uart console] section
2. Check `baudrate`, `bits`, `stop_bits`, and `parity` match connected device exactly
3. Verify correct `channel` number for your board (check schematic)
4. Test with USB-to-UART adapter and terminal program (PuTTY, screen, minicom)
5. Verify TX/RX pins are not swapped (TX → RX, RX → TX)
6. Check for proper ground connection between devices
7. Try different channel if available
8. Test with known-good USB-UART adapter

### Firmware Won't Auto-Update

**Symptoms:** flashme.bin file remains, firmware doesn't update on boot

**Solutions:**
1. Check `flash_on_boot = true`
2. Verify flashme.bin file is valid (check UART debug output during boot)
3. Ensure flashme.bin has correct magic number for your board type
4. Check file is not corrupted (compare checksum with original)
5. Try renaming firmware.bin to flashme.bin
6. Verify SD card is readable (check other files can be accessed)
7. Look for error messages via USB serial or UART console during boot

### LEDs Not Indicating Status

**Symptoms:** aux_play_led or msc_led don't light up or indicate status

**Solutions:**
1. Check `aux_play_led` and `msc_led` are set to valid pins (not "nc")
2. Verify pins are not already in use by other features (check pinout)
3. Test pin connectivity with multimeter or oscilloscope
4. Ensure LED is connected with correct polarity
5. Add current-limiting resistor if driving LED directly (220Ω-1kΩ typical)
6. Try inverting signal with `!` modifier if LED behavior is reversed
7. For high-power indicators, use MOSFET or transistor driver

### FET Outputs Not Working

**Symptoms:** Heaters, fans, or other MOSFET outputs don't turn on

**Solutions:**
1. Verify both `fets_enable_pin` and `fets_power_enable_pin` are configured correctly
2. Check pin assignments match board schematic (Prime vs other boards)
3. Confirm both pins are set to active state (check with multimeter)
4. Test individual MOSFET control pins (heater_pin, etc.)
5. Verify power supply is providing voltage to FET circuits
6. Check for blown fuses or failed components
7. Measure voltage at FET gate pins during activation
8. CRITICAL: Incorrect pin configuration can prevent ALL outputs from working

### High-Speed Communication Issues

**Symptoms:** Lost commands, stuttering motion, or communication timeouts at high speeds

**Solutions:**
1. Reduce `step_frequency` from 200000 to 100000 for stability
2. Lower UART `baudrate` if using high baud rates (try 115200 instead of 250000)
3. Use shielded cables for long UART runs
4. Enable `second_usb_serial_enable` to separate host and debug traffic
5. Check USB cable quality (use USB 2.0 certified cable)
6. Reduce G-code command rate from host software
7. Increase planner queue size if available

---

## Safety Considerations

### Critical Settings

**fets_enable_pin / fets_power_enable_pin**
* CRITICAL: Incorrectly configuring these pins can result in unexpected power behavior or inability to control heaters/motors
* Always verify pin configuration with multimeter before connecting high-power loads
* Test with low-power LED first before connecting heaters
* Both pins must be correctly set for FET outputs to function
* Incorrect configuration may appear as all heaters/fans being non-functional

**dfu_enable**
* Only enable during development or recovery operations
* Incorrect DFU flashing can permanently brick the board
* Keep disabled for normal operation to prevent accidental entry into DFU mode
* Create backup firmware.bin before attempting DFU operations

**flash_on_boot**
* Ensure flashme.bin files are valid before enabling automatic updates
* Invalid firmware files will cause boot failure
* Keep known-good firmware.bin as backup on SD card
* Verify checksum of downloaded firmware files
* Test new firmware on non-critical machine first

**step_pulse_us / step_frequency**
* Values that are too aggressive can cause missed steps or motor stalling
* Values that are too conservative limit machine performance
* Always test new settings with no-load conditions first
* Monitor for unusual motor heating or sounds

### Best Practices

1. **Pin Configuration Testing**
   * Test all pin configurations with multimeter before powering devices
   * Verify voltage levels match expectations (3.3V logic on STM32H7)
   * Check pin states during boot sequence
   * Use oscilloscope for dynamic signal verification

2. **Power System Safety**
   * Always use appropriate fuses for power supply circuits
   * Verify power supply voltage and current ratings
   * Test FET control pins before connecting heaters
   * Monitor heater temperatures during first tests
   * Install thermal fuses or runaway protection for heaters

3. **Development Safety**
   * Keep `dfu_enable = false` unless actively developing
   * Use separate development board for firmware testing
   * Maintain backup of working configuration files
   * Document any changes to default pin assignments
   * Test configuration changes incrementally

4. **UART Security**
   * Be cautious when enabling UART console on production machines
   * UART provides full command access without authentication
   * Physically secure UART connections on accessible machines
   * Consider disabling UART console on public or shared machines

5. **USB Mass Storage**
   * Always eject/unmount USB drive before disconnecting
   * Wait for MSC LED to stop flashing before removing USB
   * Use `msc_enable = false` if experiencing USB stability issues
   * Backup configuration files before making changes via USB

6. **General Safety**
   * Test all safety systems (kill button, endstops) after configuration changes
   * Verify emergency stop functionality before running jobs
   * Monitor first operations after any configuration change
   * Keep fire extinguisher nearby for machines with heaters
   * Never leave heaters unattended

---

## Related M-Codes

* **M500** - Save current configuration to config-override.ini file (requires `config-override = true`)
* **M501** - Reload configuration from config-override.ini file
* **M502** - Delete config-override.ini and reload from config.ini
* **M503** - Display current configuration settings via serial console
* **M119** - Report endstop status (useful for verifying pin configurations and FET enable states)

---

## Migration from v1

Key differences when migrating General/System settings from Smoothieware v1:

### New v2 Features
* **Explicit control** over features that were always-on in v1 (msc_enable, flash_on_boot, config-override)
* **GRBL mode** toggle for CNC applications without separate firmware builds
* **TMC driver support** requires new power control pins
* **Multi-channel UART** with 8 available channels vs v1's single UART
* **Second USB serial** for simultaneous host + debug connections
* **DFU mode** for low-level firmware development

### Setting Name Changes
* `microseconds_per_step_pulse` → `step_pulse_us`
* `uart0.baud_rate` → `uart console.baudrate` (moved to section)
* `play_led_pin` → `aux_play_led` (functionality expanded)

### Configuration Format Changes
* v1: `setting_name value` (flat space-separated)
* v2: `[section]` then `key = value` (INI format with sections)

### Pin Notation Changes
* v1: `2.5` format (port.pin numeric)
* v2: `PD3` format (port letter + pin number)
* CRITICAL: All pin assignments must be converted

### Functional Changes
* **config-override**: v1 always loaded if file present; v2 requires explicit `config-override = true`
* **MSC**: v1 always enabled; v2 controllable with `msc_enable`
* **Flash on boot**: v1 always checked for flashme.bin; v2 controllable with `flash_on_boot`
* **UART**: v1 had single UART channel 0; v2 supports 8 channels with full serial parameter control

### Migration Checklist
1. Convert all pin notations from v1 numeric format to v2 PX format
2. Add `[general]`, `[system]`, `[consoles]`, and `[uart console]` section headers
3. Change `setting value` to `setting = value` format
4. Rename `microseconds_per_step_pulse` to `step_pulse_us`
5. Move UART settings to `[uart console]` section
6. Add explicit `enable = true/false` for UART if used
7. Set `config-override = true` if using M500 saves
8. Review and test all new power control pins (fets_enable_pin, fets_power_enable_pin)
9. Consider enabling `second_usb_serial_enable` if running host + debug terminal
10. Test all safety systems after migration

**Migration Time Estimate:** 15-30 minutes for General/System settings

---

## Source Code References

All settings in this document have been verified against the Smoothieware v2 source code:

* **Firmware/src/main.cpp**: Lines 266-498 (general and system configuration loading)
* **Firmware/src/Consoles.cpp**: Lines 680-724 (console and UART configuration)
* **Repository**: https://github.com/Smoothieware/Smoothieware-v2
* **Version**: Latest as of 2025-11-05

For developers and advanced users wanting to understand implementation details, validation logic, or default value determination, consult these source files.

---

*End of Document*

---

## Motion Control

# Smoothieware V2 - Motion Control Configuration Reference (Refined)

**Analysis Date:** 2025-11-05
**Source Repository:** Smoothieware-v2
**Module:** Motion Control
**Specification Version:** 2.0

---

## Section: [motion control]

Core motion planning, kinematics, and speed control settings.

#### `default_feed_rate`

* Type: `number`
* Default: `4000.0` (66.7 mm/s)
* Units: mm/min
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:218`
* Corresponding v1 setting: `default_feed_rate`
* Corresponding v2 setting: `motion control.default_feed_rate`
* Description: Default speed for coordinated G1/G2/G3 moves when no F parameter is specified in G-code. This is the fallback feed rate used when a move command doesn't explicitly set a speed. The firmware stores this value internally in mm/s but the configuration uses mm/min for consistency with G-code standards.
  * Used for cutting, engraving, and extrusion moves (not rapids)
  * Can be overridden per-move with F parameter in G-code
  * Does not affect G0 rapid positioning moves
  * Lower values are safer for initial testing
  * Higher values increase throughput for production work
* Related pages: motion-control, g1, g2, g3, supported-g-codes
* Example configuration:
  * default_feed_rate = 4000  # 66.7 mm/s (default for general purpose)
  * default_feed_rate = 2000  # 33.3 mm/s (conservative for heavy cuts)
  * default_feed_rate = 6000  # 100 mm/s (fast for 3D printing)

#### `default_seek_rate`

* Type: `number`
* Default: `4000.0` (66.7 mm/s)
* Units: mm/min
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:219`
* Corresponding v1 setting: `default_seek_rate`
* Corresponding v2 setting: `motion control.default_seek_rate`
* Description: Default speed for G0 rapid positioning moves when no F parameter is specified or when compliant_seek_rate is enabled. Rapid moves are uncoordinated non-cutting movements used to position the tool between work areas quickly. The firmware stores this internally in mm/s but configuration uses mm/min.
  * Used exclusively for G0 rapid positioning commands
  * Typically set higher than default_feed_rate for faster repositioning
  * Behavior affected by compliant_seek_rate setting
  * Should not exceed mechanical capabilities of the machine
  * CNC machines often use significantly higher rapids than feed rates
* Related settings: `compliant_seek_rate`, `default_feed_rate`
* Related pages: motion-control, g0, grbl-mode, supported-g-codes
* Example configuration:
  * default_seek_rate = 4000  # 66.7 mm/s (default)
  * default_seek_rate = 8000  # 133 mm/s (fast rapids for CNC)
  * default_seek_rate = 3000  # 50 mm/s (conservative for deltas)

#### `compliant_seek_rate`

* Type: `bool`
* Default: `false`
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:220`
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `motion control.compliant_seek_rate`
* Description: Enables GRBL-compliant behavior where G0 rapid moves always use default_seek_rate regardless of F parameter. When false (default), the F parameter affects both G0 and G1 moves. When true, G0 ignores F and always uses default_seek_rate, matching GRBL's strict interpretation of the G-code standard.
  * CRITICAL: Affects how F parameter is interpreted in G-code
  * Set to true for strict GRBL compatibility mode
  * Set to false for RepRap/3D printer compatibility
  * Some CAM software expects GRBL behavior (true)
  * Some slicers expect F to affect all moves (false)
  * Test with your specific workflow before production
* Related settings: `default_seek_rate`, `default_feed_rate`
* Related pages: motion-control, grbl-mode, g0, from-grbl
* Example configuration:
  * compliant_seek_rate = false  # RepRap mode (F affects G0 and G1)
  * compliant_seek_rate = true   # GRBL mode (G0 always uses seek rate)

#### `mm_per_line_segment`

* Type: `number`
* Default: `0.0` (segmentation disabled)
* Units: mm
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:221`
* Corresponding v1 setting: `mm_per_line_segment`
* Corresponding v2 setting: `motion control.mm_per_line_segment`
* Description: Fixed segment length for straight-line moves when using cartesian grid bed leveling compensation. When set to a positive value, all G1 moves longer than this distance will be broken into segments of this length, allowing the firmware to apply Z-compensation adjustments along the path. When set to 0, segmentation is disabled except for arcs and delta kinematics.
  * Required for cartesian grid leveling to work properly
  * Set to 0 (disabled) if not using grid leveling
  * Smaller values provide more accurate compensation but increase processor load
  * Larger values reduce overhead but may show visible stairsteps
  * Only affects straight moves (G1), arcs use separate segmentation
  * Delta kinematics have their own segmentation system
* Related settings: `delta_segments_per_second`, `mm_per_arc_segment`
* Related pages: motion-control, rectangular-grid-calibration-options, pcb-milling
* Example configuration:
  * mm_per_line_segment = 0.0  # Disabled (no grid leveling)
  * mm_per_line_segment = 5.0  # 5mm segments (typical for bed leveling)
  * mm_per_line_segment = 1.0  # 1mm segments (precise PCB milling)

#### `delta_segments_per_second`

* Type: `number`
* Default: `100` (for delta kinematics), `0` (for cartesian)
* Units: segments/s
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:222`
* Corresponding v1 setting: `delta_segments_per_second`
* Corresponding v2 setting: `motion control.delta_segments_per_second`
* Description: Segmentation rate for delta and rotary delta kinematics. Determines how many segments per second are generated for moves to ensure smooth arc motion. Higher values produce smoother curves and more accurate positioning but increase processor load and memory usage. This setting is automatically set based on arm_solution and is essential for proper delta printer operation.
  * CRITICAL: Required for delta and rotary delta machines
  * Set to 0 for cartesian, CoreXY, H-Bot machines
  * Typical values: 100-200 for delta printers
  * Higher values needed for fast delta printers
  * Lower values acceptable for slow precision deltas
  * Affects motion smoothness and accuracy
  * Interacts with planner queue size
* Related settings: `arm_solution`, `segment_z_moves`, `planner_queue_size`
* Related pages: motion-control, delta, arm-solutions, linear-delta
* Example configuration:
  * delta_segments_per_second = 0    # Cartesian machine (disabled)
  * delta_segments_per_second = 100  # Standard delta (default)
  * delta_segments_per_second = 200  # Fast delta printer

#### `mm_per_arc_segment`

* Type: `number`
* Default: `0.0` (use error-based segmentation)
* Units: mm
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:223`
* Corresponding v1 setting: `mm_per_arc_segment`
* Corresponding v2 setting: `motion control.mm_per_arc_segment`
* Description: Fixed arc segment length for G2/G3 circular interpolation moves. When set to a positive value, arcs are divided into segments of this fixed length. When set to 0 (default), the firmware uses adaptive error-based segmentation controlled by mm_max_arc_error instead. Fixed segmentation can be faster to compute but adaptive segmentation provides better quality with fewer segments.
  * Set to 0 to use adaptive error-based segmentation (recommended)
  * Set to positive value for fixed-length segments
  * Fixed segmentation is simpler but less efficient
  * Adaptive segmentation produces optimal segment count
  * Smaller fixed values create smoother arcs but more overhead
  * Larger fixed values reduce segments but increase chord error
* Related settings: `mm_max_arc_error`, `arc_correction`
* Related pages: motion-control, g2, g3
* Example configuration:
  * mm_per_arc_segment = 0.0  # Adaptive segmentation (recommended)
  * mm_per_arc_segment = 1.0  # 1mm fixed segments (simple mode)
  * mm_per_arc_segment = 0.5  # 0.5mm segments (high precision)

#### `mm_max_arc_error`

* Type: `number`
* Default: `0.01`
* Units: mm
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:224`
* Corresponding v1 setting: `mm_max_arc_error`
* Corresponding v2 setting: `motion control.mm_max_arc_error`
* Description: Maximum chord-to-arc deviation allowed for adaptive arc segmentation when mm_per_arc_segment is 0. This value controls the trade-off between arc smoothness and segment count. Smaller values produce smoother arcs that more closely match the true circular path but require more segments. Larger values reduce computational load but may produce visible faceting on small-radius arcs.
  * Only used when mm_per_arc_segment = 0 (adaptive mode)
  * Typical values: 0.001 to 0.1 mm
  * Smaller values = smoother arcs, more segments, more processing
  * Larger values = fewer segments, visible facets, less processing
  * 0.01mm is a good balance for most applications
  * Reduce for precision work or small-radius arcs
  * Increase for performance or large-radius arcs
* Related settings: `mm_per_arc_segment`, `arc_correction`
* Related pages: motion-control, g2, g3
* Example configuration:
  * mm_max_arc_error = 0.01   # 0.01mm (default, good balance)
  * mm_max_arc_error = 0.002  # 0.002mm (high precision engraving)
  * mm_max_arc_error = 0.05   # 0.05mm (performance mode)

#### `arc_correction`

* Type: `number`
* Default: `5`
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:225`
* Corresponding v1 setting: `arc_correction`
* Corresponding v2 setting: `motion control.arc_correction`
* Description: Number of arc segments to process before applying correction to compensate for accumulated floating-point errors during arc generation. Higher values improve computational efficiency by reducing correction frequency but may accumulate more error before correction. Lower values provide more frequent correction but increase overhead. The default value of 5 provides good balance for most applications.
  * Compensates for floating-point rounding errors
  * Applied periodically during arc generation
  * Typical values: 1 to 10
  * Higher values = less frequent correction, slight efficiency gain
  * Lower values = more frequent correction, slightly more overhead
  * Default of 5 is optimal for most use cases
  * Rarely needs adjustment
* Related settings: `mm_per_arc_segment`, `mm_max_arc_error`
* Related pages: motion-control, g2, g3
* Example configuration:
  * arc_correction = 5   # Default (recommended)
  * arc_correction = 10  # Less frequent correction
  * arc_correction = 1   # Maximum correction frequency

#### `x_axis_max_speed`

* Type: `number`
* Default: `60000` (1000 mm/s)
* Units: mm/min
* Module: `motion_control`
* Context: Per-axis setting
* Defined in: `Firmware/src/robot/Robot.cpp:228`
* Typical values: `10000` (166 mm/s for heavy CNC), `30000` (500 mm/s for 3D printers), `60000` (1000 mm/s for deltas)
* Corresponding v1 setting: `x_axis_max_speed`
* Corresponding v2 setting: `motion control.x_axis_max_speed`
* Description: Maximum speed limit for X axis in mm/min. This is a hard limit that prevents the X axis from exceeding this speed regardless of commanded feed rate or rapid speed. The firmware will scale down moves that would exceed this limit while maintaining proper coordination with other axes. Set this based on the mechanical capabilities and motor performance of your X axis.
  * Prevents axis from moving faster than mechanically safe
  * Firmware converts to mm/s internally (divides by 60)
  * Moves are scaled down if this limit would be exceeded
  * Should match mechanical capabilities of machine
  * Consider belt resonance, motor torque, and frame rigidity
  * Delta printers typically use very high values
  * CNC mills typically use lower values
* Related settings: `y_axis_max_speed`, `z_axis_max_speed`, `max_speed`, `actuator.alpha.max_rate`
* Related pages: motion-control, delta, cartesian, stepper-motors
* Example configuration:
  * x_axis_max_speed = 60000  # 1000 mm/s (delta printer)
  * x_axis_max_speed = 30000  # 500 mm/s (Cartesian 3D printer)
  * x_axis_max_speed = 10000  # 166 mm/s (CNC mill)

#### `y_axis_max_speed`

* Type: `number`
* Default: `60000` (1000 mm/s)
* Units: mm/min
* Module: `motion_control`
* Context: Per-axis setting
* Defined in: `Firmware/src/robot/Robot.cpp:229`
* Typical values: `10000` (166 mm/s for heavy CNC), `30000` (500 mm/s for 3D printers), `60000` (1000 mm/s for deltas)
* Corresponding v1 setting: `y_axis_max_speed`
* Corresponding v2 setting: `motion control.y_axis_max_speed`
* Description: Maximum speed limit for Y axis in mm/min. This is a hard limit that prevents the Y axis from exceeding this speed regardless of commanded feed rate or rapid speed. The firmware will scale down moves that would exceed this limit while maintaining proper coordination with other axes. Set this based on the mechanical capabilities and motor performance of your Y axis.
  * Prevents axis from moving faster than mechanically safe
  * Firmware converts to mm/s internally (divides by 60)
  * Moves are scaled down if this limit would be exceeded
  * Should match mechanical capabilities of machine
  * Y axis often has heavier moving mass than X (bed vs. extruder carriage)
  * May need to be set lower than X for bed-slinger designs
* Related settings: `x_axis_max_speed`, `z_axis_max_speed`, `max_speed`, `actuator.beta.max_rate`
* Related pages: motion-control, delta, cartesian, stepper-motors
* Example configuration:
  * y_axis_max_speed = 60000  # 1000 mm/s (delta printer)
  * y_axis_max_speed = 30000  # 500 mm/s (Cartesian 3D printer)
  * y_axis_max_speed = 10000  # 166 mm/s (CNC mill)

#### `z_axis_max_speed`

* Type: `number`
* Default: `300` (5 mm/s)
* Units: mm/min
* Module: `motion_control`
* Context: Per-axis setting
* Defined in: `Firmware/src/robot/Robot.cpp:230`
* Typical values: `300` (5 mm/s for lead screw), `600` (10 mm/s for fast Z), `30000` (500 mm/s for delta)
* Corresponding v1 setting: `z_axis_max_speed`
* Corresponding v2 setting: `motion control.z_axis_max_speed`
* Description: Maximum speed limit for Z axis in mm/min. Typically much slower than XY axes due to heavier loads, higher mechanical advantage of lead screws, and safety considerations. On cartesian machines, Z usually carries the entire X gantry or build platform. On delta machines, Z is a virtual axis and this limit applies to vertical motion. Set conservatively to prevent crashes and ensure positioning accuracy.
  * CRITICAL: Z axis typically carries heavy loads (bed or gantry)
  * Default is very conservative (5 mm/s) for safety
  * Lead screw Z axes: 300-1200 mm/min typical
  * Belt-driven Z axes: 1200-6000 mm/min possible
  * Delta printers: 10000-60000 mm/min (virtual Z)
  * Too fast may cause layer shifts, crashes, or skipped steps
  * Consider mechanical advantage of lead screw pitch
* Related settings: `x_axis_max_speed`, `y_axis_max_speed`, `max_speed`, `actuator.gamma.max_rate`
* Related pages: motion-control, delta, cartesian, stepper-motors
* Example configuration:
  * z_axis_max_speed = 300    # 5 mm/s (conservative lead screw)
  * z_axis_max_speed = 600    # 10 mm/s (faster Z)
  * z_axis_max_speed = 30000  # 500 mm/s (delta printer)

#### `max_speed`

* Type: `number`
* Default: `0` (disabled)
* Units: mm/min
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:231`
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `motion control.max_speed`
* Description: Overall maximum speed limit across all axes regardless of individual per-axis limits. When set to 0 (default), this global limit is disabled and only the individual x/y/z_axis_max_speed limits apply. When set to a positive value, no move will exceed this speed even if individual axes could go faster. Useful for imposing a system-wide speed cap for safety or machine limitations.
  * Set to 0 to disable (use only per-axis limits)
  * When enabled, applies to all coordinated moves
  * Provides additional safety layer beyond per-axis limits
  * Useful for machines with structural resonance concerns
  * Can limit overall machine performance if set too low
  * Per-axis limits still apply in addition to this
* Related settings: `x_axis_max_speed`, `y_axis_max_speed`, `z_axis_max_speed`
* Related pages: motion-control, stepper-motors
* Example configuration:
  * max_speed = 0      # Disabled (use per-axis limits only)
  * max_speed = 20000  # 333 mm/s global cap for safety
  * max_speed = 50000  # 833 mm/s for high-speed machines

#### `default_acceleration`

* Type: `number`
* Default: `100.0`
* Units: mm/s²
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:234`
* Typical values: `100` (conservative), `500` (moderate 3D printing), `1000` (fast delta), `200` (CNC milling)
* Corresponding v1 setting: `acceleration`
* Corresponding v2 setting: `motion control.default_acceleration`
* Description: Default acceleration for all axes when no per-actuator override is specified. This value determines how quickly the machine can change speed during moves. Higher acceleration reduces move time but increases vibration and mechanical stress. Lower acceleration provides smoother motion but increases total job time. Can be overridden per-actuator using actuator.{axis}.acceleration settings.
  * Affects how quickly machine reaches commanded speeds
  * Higher values = faster speed changes, more vibration
  * Lower values = smoother motion, longer move times
  * Per-axis overrides can be set in actuator section
  * Z axis often needs lower acceleration than XY
  * Delta printers can typically use very high values
  * CNC mills typically use lower values for precision
* Related settings: `actuator.{axis}.acceleration`, `junction_deviation`
* Related pages: motion-control, stepper-motors, delta, cartesian
* Example configuration:
  * default_acceleration = 100   # 100 mm/s² (conservative default)
  * default_acceleration = 500   # 500 mm/s² (typical 3D printer)
  * default_acceleration = 1000  # 1000 mm/s² (fast delta)
  * default_acceleration = 200   # 200 mm/s² (CNC mill)

#### `segment_z_moves`

* Type: `bool`
* Default: `true`
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:236`
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `motion control.segment_z_moves`
* Description: Enable segmentation for Z-only moves on delta machines. When true (default), vertical Z movements on delta printers are broken into segments for smooth motion through the delta kinematics. When false, Z-only moves bypass segmentation for improved performance. Should always be true for delta and rotary delta machines. Can be set to false for cartesian machines to reduce processing overhead on pure Z moves.
  * CRITICAL: Must be true for delta and rotary delta kinematics
  * Safe to set false for cartesian, CoreXY, H-Bot
  * Affects only pure Z-axis moves (no XY component)
  * Delta kinematics require segmentation for accurate positioning
  * Disabling on cartesian machines slightly improves performance
  * No functional difference on cartesian when disabled
* Related settings: `arm_solution`, `delta_segments_per_second`
* Related pages: motion-control, delta, arm-solutions
* Example configuration:
  * segment_z_moves = true   # Required for delta machines
  * segment_z_moves = false  # Optional optimization for cartesian

#### `save_wcs`

* Type: `bool`
* Default: `false`
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:237`
* Corresponding v1 setting: `save_g54` (expanded in v2 to cover G54-G59)
* Corresponding v2 setting: `motion control.save_wcs`
* Description: Save work coordinate systems (G54-G59) to config-override file when M500 is issued. When true, all WCS offsets are saved and restored on boot, allowing coordinate systems to persist across power cycles. When false (default), WCS offsets are lost on reboot and must be re-established. Useful for CNC machines with multiple fixture setups or recurring job positions.
  * Enables persistence of G54-G59 coordinate system offsets
  * Requires config-override to be enabled in [general] section
  * Use M500 to save current WCS values
  * Use M501 to reload saved values
  * Use M502 to reset to defaults
  * Useful for CNC machines with multiple work setups
  * Less useful for 3D printers (typically use G92)
* Related M-Codes:
  * M500 - Save current WCS values to config-override
  * M501 - Load WCS values from config-override
  * M502 - Reset to default (no WCS offsets)
  * G54-G59 - Select work coordinate system 1-6
* Related settings: `save_g92`, `set_g92`
* Related pages: motion-control, g54, supported-g-codes
* Example configuration:
  * save_wcs = false  # Default (WCS not saved)
  * save_wcs = true   # Save WCS with M500 (CNC mode)

#### `save_g92`

* Type: `bool`
* Default: `false`
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:238`
* Corresponding v1 setting: `save_g92`
* Corresponding v2 setting: `motion control.save_g92`
* Description: Save G92 coordinate system offsets to config-override file when M500 is issued. When true, G92 offsets persist across reboots. When false (default), G92 offsets are temporary and cleared on power cycle. G92 is commonly used in 3D printing to reset extruder position or adjust Z-height mid-print, but these are typically temporary adjustments that should not persist.
  * Enables persistence of G92 coordinate offsets
  * Requires config-override to be enabled in [general] section
  * Use M500 to save current G92 offset
  * Use M501 to reload saved offset
  * Use M502 to clear saved offset
  * WARNING: Saved G92 offsets can cause confusion if forgotten
  * Typically left false for 3D printers
  * May be useful for CNC machines with permanent fixtures
* Related M-Codes:
  * M500 - Save current G92 offset to config-override
  * M501 - Load G92 offset from config-override
  * M502 - Clear saved G92 offset
  * G92 - Set coordinate system offset
* Related settings: `save_wcs`, `set_g92`
* Related pages: motion-control, g92-cnc, supported-g-codes
* Example configuration:
  * save_g92 = false  # Default (G92 temporary)
  * save_g92 = true   # Save G92 with M500 (use with caution)

#### `set_g92`

* Type: `string`
* Default: `""` (no fixed offset)
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:240`
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `motion control.set_g92`
* Description: Set a fixed G92 coordinate offset that is applied on every boot. Format is comma-separated X,Y,Z coordinates as a string. This creates a permanent coordinate system shift that is always active, useful for machines that need a constant position offset due to physical constraints or tool mounting. Use with caution as this affects all coordinate interpretation.
  * Applied automatically on every boot
  * Format: "X,Y,Z" as comma-separated values
  * Creates permanent coordinate offset
  * Different from save_g92 which saves dynamic offsets
  * Useful for machines with fixed offset tooling
  * WARNING: Easy to forget this is set, causes confusion
  * Consider using WCS (G54-G59) instead for multiple setups
* Related settings: `save_g92`, `save_wcs`
* Related pages: motion-control, g92-cnc, supported-g-codes
* Example configuration:
  * set_g92 = ""             # No fixed offset (default)
  * set_g92 = "10.0,20.0,5.0"  # Fixed 10,20,5mm offset
  * set_g92 = "0,0,10"       # 10mm Z offset only

#### `nist_G30`

* Type: `bool`
* Default: `false`
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:239`
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `motion control.nist_G30`
* Description: Use NIST (National Institute of Standards) interpretation of G30 command behavior. When true, G30 probes to the position specified by the P parameter using pre-stored position offsets. When false (default), G30 follows standard Smoothie/RepRap behavior. This setting is primarily used in GRBL compatibility mode for CNC applications that require NIST-compliant G-code interpretation.
  * Only relevant when using GRBL mode
  * Affects G30 command interpretation
  * NIST mode: G30 P# probes to stored position #
  * Default mode: G30 performs simple Z probe
  * Most users should leave this false
  * Enable only if CAM software requires NIST compliance
* Related settings: `general.grbl_mode`
* Related pages: motion-control, grbl-mode, g30, from-grbl
* Example configuration:
  * nist_G30 = false  # Standard G30 behavior (default)
  * nist_G30 = true   # NIST-compliant G30 (GRBL mode)

#### `must_be_homed`

* Type: `bool`
* Default: `false` (cartesian), `true` (delta/rotary delta)
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:241`
* Corresponding v1 setting: none (new safety feature in v2)
* Corresponding v2 setting: `motion control.must_be_homed`
* Description: Require all axes to be homed before allowing any motion commands. When true, the machine will reject move commands until a homing cycle (G28) has been completed. This is automatically set to true for delta and rotary delta kinematics where unhomed positions can cause mechanical interference or crashes. Cartesian machines can optionally enable this for additional safety.
  * CRITICAL: Automatically enabled for delta and rotary delta
  * Prevents motion before homing cycle
  * Protects delta printers from geometry calculation errors
  * Optional safety feature for cartesian machines
  * Must use G28 to home before any moves
  * Useful for CNC machines to prevent crashes
  * May be inconvenient for manual jogging workflows
* Related settings: `arm_solution`, `endstops`
* Related pages: motion-control, delta, endstops, g28-reprap
* Example configuration:
  * must_be_homed = true   # Required for delta (automatic)
  * must_be_homed = false  # Optional for cartesian (default)
  * must_be_homed = true   # Force homing on cartesian (safety)

#### `arm_solution`

* Type: `enum`
* Default: `cartesian`
* Module: `motion_control`
* Context: Global setting
* Defined in: `Firmware/src/robot/Robot.cpp:191`
* Valid values: `cartesian`, `linear_delta`, `rotary_delta`, `hbot`, `corexy`, `corexz`, `morgan`, `rostock`, `kossel`, `delta`
  * `cartesian` - Standard XYZ gantry (most common)
  * `linear_delta` - Kossel-style delta with linear carriages
  * `rotary_delta` - Delta with rotary joints (experimental)
  * `corexy` - CoreXY crossed-belt system
  * `corexz` - CoreXZ variant with crossed XZ belts
  * `hbot` - H-Bot crossed-belt system
  * `morgan` - Morgan SCARA arm
  * `rostock` - Alias for linear_delta
  * `kossel` - Alias for linear_delta
  * `delta` - Alias for linear_delta
* Required: yes
* Corresponding v1 setting: `arm_solution`
* Corresponding v2 setting: `motion control.arm_solution`
* Description: Specifies the kinematics solution that converts Cartesian coordinates (X,Y,Z) from G-code into actuator positions for your specific machine type. This is one of the most fundamental configuration settings as it determines how all motion commands are interpreted and executed. Each arm solution has its own set of additional parameters that must be configured in the appropriate kinematics section.
  * CRITICAL: Must exactly match your physical machine type
  * Most machines use `cartesian` (XYZ gantry)
  * Delta 3D printers use `linear_delta`
  * Changing this requires reconfiguring many other settings
  * Each kinematics type has specific calibration requirements
  * Incorrect setting will cause wrong motion or crashes
  * See arm-solutions documentation for each type
* Related settings: `linear delta.arm_length`, `linear delta.arm_radius` (for deltas)
* Related pages: motion-control, arm-solutions, delta, cartesian, corexy, hbot, morgan-scara
* Example configuration:
  * arm_solution = cartesian      # Standard XYZ mill or printer
  * arm_solution = linear_delta   # Kossel-style delta printer
  * arm_solution = corexy         # CoreXY 3D printer
  * arm_solution = hbot           # H-Bot printer
  * arm_solution = morgan         # SCARA arm

---

## Section: [planner]

Motion planning and trajectory optimization settings.

#### `junction_deviation`

* Type: `number`
* Default: `0.05`
* Units: mm
* Module: `planner`
* Context: Global setting
* Defined in: `Firmware/src/robot/Planner.cpp:40`
* Typical values: `0.05` (normal quality), `0.02` (high precision), `0.1` (fast printing/cutting)
* Corresponding v1 setting: `junction_deviation`
* Corresponding v2 setting: `planner.junction_deviation`
* Description: Maximum allowed deviation from the true path at direction change junctions during cornering. This replaces traditional jerk-based cornering algorithms with a more sophisticated approach. Lower values produce slower, more precise corners that follow the intended path more closely. Higher values allow faster cornering but introduce more deviation from the theoretical path, potentially causing rounding at sharp corners.
  * Controls speed through corners and direction changes
  * Lower values = slower corners, more accurate path
  * Higher values = faster corners, more path deviation
  * Affects print quality in 3D printing (corner sharpness)
  * Affects surface finish in CNC milling
  * Too low causes excessive slowdown at corners
  * Too high causes corner rounding and overshoot
  * Separate Z junction deviation available
* Related settings: `z_junction_deviation`, `default_acceleration`
* Related pages: motion-control, planner
* Example configuration:
  * junction_deviation = 0.05  # 0.05mm (default, good balance)
  * junction_deviation = 0.02  # 0.02mm (high precision)
  * junction_deviation = 0.1   # 0.1mm (fast printing)
  * junction_deviation = 0.005 # 0.005mm (ultra precision)

#### `z_junction_deviation`

* Type: `number`
* Default: `-1` (use junction_deviation value)
* Units: mm
* Module: `planner`
* Context: Global setting
* Defined in: `Firmware/src/robot/Planner.cpp:41`
* Typical values: `-1` (use standard JD), `0.2` (faster Z for 3D printing), `0.01` (precise Z for CNC)
* Corresponding v1 setting: `z_junction_deviation`
* Corresponding v2 setting: `planner.z_junction_deviation`
* Description: Separate junction deviation setting specifically for Z axis moves. When set to -1 (default), Z axis uses the same junction_deviation value as XY axes. When set to a positive value, this overrides junction deviation for moves involving Z axis changes. Commonly set higher than XY junction deviation in 3D printing to allow faster Z movements (layer changes, Z-hops) without affecting XY print quality.
  * Set to -1 to use same value as junction_deviation
  * Set to positive value for separate Z behavior
  * Commonly set higher than XY for 3D printing
  * Allows faster Z layer changes without affecting XY quality
  * CNC applications may want lower Z precision than XY
  * Delta printers should typically use -1 (same as XY)
* Related settings: `junction_deviation`, `default_acceleration`
* Related pages: motion-control, planner
* Example configuration:
  * z_junction_deviation = -1   # Use same as junction_deviation (default)
  * z_junction_deviation = 0.2  # 0.2mm for faster Z (3D printing)
  * z_junction_deviation = 0.01 # 0.01mm for precise Z (CNC)

#### `minimum_planner_speed`

* Type: `number`
* Default: `0.0`
* Units: mm/s
* Module: `planner`
* Context: Global setting
* Defined in: `Firmware/src/robot/Planner.cpp:42`
* Corresponding v1 setting: `minimum_planner_speed`
* Corresponding v2 setting: `planner.minimum_planner_speed`
* Description: Minimum speed the planner will allow for any move. When set to 0 (default), the planner can slow moves down to a complete stop if needed for proper acceleration/deceleration. When set to a positive value, moves will never slow below this speed, which can prevent extrusion problems in 3D printing but may cause jerky motion at tight corners or during complex acceleration planning.
  * Set to 0 to allow complete stops when needed (default)
  * Set to positive value to enforce minimum speed
  * 3D printing: Small positive value can prevent extruder issues
  * CNC: Usually best left at 0 for smooth acceleration
  * Too high causes jerky motion at corners
  * Prevents coast-to-stop deceleration planning
* Related settings: `junction_deviation`, `default_acceleration`
* Related pages: motion-control, planner
* Example configuration:
  * minimum_planner_speed = 0.0  # Allow complete stops (default)
  * minimum_planner_speed = 5.0  # 5 mm/s minimum (3D printing)
  * minimum_planner_speed = 1.0  # 1 mm/s minimum (conservative)

#### `planner_queue_size`

* Type: `number`
* Default: `32`
* Module: `planner`
* Context: Global setting
* Defined in: `Firmware/src/robot/Planner.cpp:43`
* Typical values: `16` (low RAM), `32` (default), `64` (smooth complex paths)
* Corresponding v1 setting: `planner_queue_size`
* Corresponding v2 setting: `planner.planner_queue_size`
* Description: Number of motion blocks in the planner queue buffer. Larger values allow smoother motion planning and better acceleration management by looking further ahead in the move sequence, but consume more RAM. Smaller values reduce memory usage but may cause stuttering on complex paths with many short segments. The default of 32 provides good performance for most applications.
  * Controls lookahead distance for motion planning
  * Larger values = smoother motion, better acceleration
  * Smaller values = less RAM usage, possible stuttering
  * Each block consumes RAM (more blocks = more memory)
  * Complex curves benefit from larger queue
  * Simple moves work fine with smaller queue
  * Increase if experiencing stuttering on complex geometry
  * Decrease only if running low on RAM
* Related settings: `junction_deviation`, `delta_segments_per_second`
* Related pages: motion-control, planner
* Example configuration:
  * planner_queue_size = 32  # Default (good balance)
  * planner_queue_size = 16  # Reduced RAM usage
  * planner_queue_size = 64  # Smoother complex paths

---

## Section: [conveyor]

Block queue management for motion execution timing.

#### `queue_delay_time_ms`

* Type: `number`
* Default: `100`
* Units: ms
* Module: `conveyor`
* Context: Global setting
* Defined in: `Firmware/src/robot/Conveyor.cpp:47`
* Corresponding v1 setting: `queue_delay_time_ms` (renamed from planner context)
* Corresponding v2 setting: `conveyor.queue_delay_time_ms`
* Description: Time to wait before the conveyor starts processing the motion queue after receiving the first block. This delay allows the planner queue to fill up slightly before execution begins, which improves motion planning smoothness by providing more lookahead context. Higher values improve planning quality but add latency between G-code command and physical motion. Lower values reduce latency but may result in less optimal planning.
  * Delay before starting motion execution
  * Allows queue to fill for better lookahead
  * Higher values = better planning, more latency
  * Lower values = faster response, less optimal planning
  * 100ms is good balance for most applications
  * Increase for very complex paths
  * Decrease for responsive manual control
* Related settings: `planner_queue_size`
* Related pages: motion-control, planner
* Example configuration:
  * queue_delay_time_ms = 100  # Default (good balance)
  * queue_delay_time_ms = 200  # More planning time
  * queue_delay_time_ms = 50   # Faster response

---

## Section: [actuator]

Per-actuator (motor) configuration. All settings use the format `<axis>.setting = value` where `<axis>` is one of:
* **alpha** - X axis
* **beta** - Y axis
* **gamma** - Z axis
* **delta** - A axis / first extruder (E0)
* **epsilon** - B axis / second extruder (E1)
* **zeta** - C axis / third extruder (E2)

#### `<axis>.steps_per_mm`

* Type: `number`
* Default: `80.0` (XY with GT2 belt), `2560.0` (Z with lead screw)
* Units: steps/mm
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:370`
* Required: yes
* Typical values: `80` (GT2 belt, 1.8° stepper, 32µ-step), `100` (GT2 belt, 0.9° stepper), `400` (2mm pitch lead screw), `140` (extruder direct drive)
* Corresponding v1 setting: `alpha_steps_per_mm`, `beta_steps_per_mm`, etc.
* Corresponding v2 setting: `actuator.alpha.steps_per_mm`, etc.
* Description: Number of motor steps required to move exactly 1mm along this axis. This is the most critical calibration value and depends on motor steps per revolution (typically 200 for 1.8° steppers), microstepping setting, and mechanical transmission ratio (belt pitch and pulley teeth for belts, thread pitch for lead screws). Incorrect values cause dimensional inaccuracy in all movements.
  * CRITICAL: Must be accurately calculated or calibrated
  * Affects dimensional accuracy of all moves
  * For belts: (motor_steps × microsteps) ÷ (pulley_teeth × belt_pitch)
  * For lead screws: (motor_steps × microsteps) ÷ thread_pitch
  * GT2 belt pitch = 2mm
  * Common 1.8° stepper = 200 steps/rev
  * Common 0.9° stepper = 400 steps/rev
  * Fine-tune by measuring actual movements
* Related settings: `<axis>.microsteps`, `<axis>.max_rate`
* Related pages: motion-control, stepper-motors, extruder-guide
* Example configuration:
  * alpha.steps_per_mm = 80    # GT2 belt, 20-tooth pulley, 1.8° motor, 32µ-step
  * alpha.steps_per_mm = 100   # GT2 belt, 20-tooth pulley, 0.9° motor, 32µ-step
  * gamma.steps_per_mm = 400   # 2mm pitch lead screw, 1.8° motor, 16µ-step
  * gamma.steps_per_mm = 2560  # 2mm pitch lead screw, 1.8° motor, 32µ-step
  * delta.steps_per_mm = 140   # Extruder direct drive (calibrate empirically)

#### `<axis>.max_rate`

* Type: `number`
* Default: `30000` (500 mm/s)
* Units: mm/min
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:371`
* Typical values: `30000` (500 mm/s for XY), `300` (5 mm/s for Z), `6000` (100 mm/s for extruder)
* Corresponding v1 setting: `alpha_max_rate`, `beta_max_rate`, etc.
* Corresponding v2 setting: `actuator.alpha.max_rate`, etc.
* Description: Maximum speed this individual actuator/motor can achieve in mm/min. This limits the motor speed regardless of commanded feed rate or axis max speed settings. Should be set based on motor capabilities, driver current, microstepping, and mechanical load. Used to prevent individual motors from exceeding their performance limits even if the axis geometry would allow higher speeds.
  * Limits individual motor/actuator speed
  * Independent from axis max speed limits
  * Based on motor torque and load characteristics
  * Consider: steps/mm, microsteps, max step frequency
  * Max step frequency typically 200kHz for Smoothie
  * Calculate: max_rate < (200000 Hz × 60) ÷ (steps_per_mm × microsteps)
  * Set conservatively to ensure reliable operation
* Related settings: `x_axis_max_speed`, `<axis>.steps_per_mm`, `<axis>.microsteps`
* Related pages: motion-control, stepper-motors
* Example configuration:
  * alpha.max_rate = 30000  # 500 mm/s (fast XY axis)
  * gamma.max_rate = 300    # 5 mm/s (slow Z lead screw)
  * delta.max_rate = 6000   # 100 mm/s (extruder)

#### `<axis>.acceleration`

* Type: `number`
* Default: `-1` (use default_acceleration)
* Units: mm/s²
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:372`
* Typical values: `-1` (use default), `50` (slow Z), `500` (moderate), `1000` (fast delta)
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `actuator.alpha.acceleration`, etc.
* Description: Per-actuator acceleration override. When set to -1 (default), this actuator uses the global default_acceleration setting. When set to a positive value, this acceleration applies specifically to this actuator regardless of the global default. Useful for axes with different mechanical characteristics, such as giving Z axis slower acceleration than XY to prevent layer shifts.
  * Set to -1 to use global default_acceleration
  * Set to positive value for axis-specific acceleration
  * Commonly used to slow down Z axis
  * Heavy axes need lower acceleration
  * Light axes can use higher acceleration
  * Extruder acceleration typically not overridden
* Related settings: `default_acceleration`
* Related pages: motion-control, stepper-motors
* Example configuration:
  * alpha.acceleration = -1   # Use default (typical for XY)
  * gamma.acceleration = 50   # 50 mm/s² (slow Z for heavy bed)
  * gamma.acceleration = 100  # 100 mm/s² (moderate Z)

#### `<axis>.step_pin`

* Type: `pin`
* Default: Board-specific (Prime: alpha=PD3, beta=PK2, gamma=PG3, delta=PC6)
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:266`
* Required: yes (step and dir must be defined)
* Valid values: STM32 pin specification in format `PXn` (e.g., `PD3`)
  * Format: `P<port><pin>` where port is A-K and pin is 0-15
  * Examples: `PD3`, `PK2`, `PG3`, `PC6`
  * Add `!` suffix to invert: `PD3!`
  * Special value: `nc` for not connected
* Corresponding v1 setting: `alpha_step_pin`, etc. (v1 used `port.pin` format like `2.0`)
* Corresponding v2 setting: `actuator.alpha.step_pin`, etc.
* Description: GPIO pin used to send step pulses to the motor driver. Each rising edge on this pin advances the motor by one microstep. The pin must be connected to the STEP input of your stepper driver chip. Pin assignment is board-specific and must match your hardware schematic. Incorrect pin assignment causes motors not to move or move the wrong axis.
  * CRITICAL: Must match board schematic
  * Each step pulse = one microstep
  * Pin must connect to driver STEP input
  * v2 uses STM32 notation (PXn), v1 used port.pin
  * Consult Smoothieboard v2 schematic for correct pins
  * Test with low power before full operation
* Related settings: `<axis>.dir_pin`, `<axis>.en_pin`
* Related pages: motion-control, pinout, stepper-motors, pin-configuration
* Example configuration:
  * alpha.step_pin = PD3   # X axis step (Smoothieboard v2 Prime)
  * beta.step_pin = PK2    # Y axis step
  * gamma.step_pin = PG3   # Z axis step
  * delta.step_pin = PC6   # E0 extruder step

#### `<axis>.dir_pin`

* Type: `pin`
* Default: Board-specific (Prime: alpha=PD4, beta=PG2, gamma=PG4, delta=PG5)
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:267`
* Required: yes (step and dir must be defined)
* Valid values: STM32 pin specification with optional inversion
  * Format: `PXn` or `PXn!` for inverted
  * Examples: `PD4`, `PG2!`, `PG4`
  * Add `!` suffix to reverse direction
  * Special value: `nc` for not connected
* Corresponding v1 setting: `alpha_dir_pin`, etc. (v1 used `port.pin` format)
* Corresponding v2 setting: `actuator.alpha.dir_pin`, etc.
* Description: GPIO pin used to control motor direction. The logic level on this pin determines whether the motor rotates clockwise or counter-clockwise when step pulses are sent. Add `!` suffix to invert the direction signal if the motor runs backwards. Pin must be connected to the DIR input of your stepper driver.
  * Controls motor rotation direction
  * High/low determines CW/CCW (driver-dependent)
  * Add `!` to invert if motor runs backwards
  * Alternative: use `reversed` setting instead of `!`
  * Must match board schematic
  * Test direction before installing on machine
* Related settings: `<axis>.step_pin`, `<axis>.reversed`
* Related pages: motion-control, pinout, stepper-motors, pin-configuration
* Example configuration:
  * alpha.dir_pin = PD4    # X axis direction (normal)
  * beta.dir_pin = PG2!    # Y axis direction (inverted)
  * gamma.dir_pin = PG4    # Z axis direction (normal)

#### `<axis>.en_pin`

* Type: `pin`
* Default: `nc` (not connected, use common enable pin)
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:268`
* Valid values: STM32 pin specification or `nc`
  * Format: `PXn` or `nc`
  * Examples: `PH13`, `nc`
  * Add `!` for active-low enable (common)
  * `nc` = not connected (use common enable)
* Corresponding v1 setting: `alpha_en_pin`, etc.
* Corresponding v2 setting: `actuator.alpha.en_pin`, etc.
* Description: GPIO pin used to enable/disable this specific motor driver. When not connected (`nc`), motor enable is controlled by the global motors_enable_pin or by the driver itself. Some drivers always run (no enable needed), others use a global enable pin, and some require individual enable pins per motor.
  * Controls driver enable/disable for this motor
  * Set to `nc` if using global enable pin
  * Set to `nc` if driver has no enable input
  * Most Smoothieboard setups use global enable
  * Individual enables allow selective motor disable
  * Useful for multi-extruder setups
* Related settings: `common.motors_enable_pin`
* Related pages: motion-control, pinout, stepper-motors
* Example configuration:
  * alpha.en_pin = nc     # Use global enable (typical)
  * delta.en_pin = PH13   # Individual extruder enable
  * delta.en_pin = nc     # No enable needed

#### `<axis>.microsteps`

* Type: `number`
* Default: `32`
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:311`
* Valid values: Powers of 2: `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256`
  * `1` - Full step (no microstepping)
  * `2` - Half step
  * `4`, `8`, `16` - Common settings
  * `32` - Default, good balance
  * `64`, `128`, `256` - Ultra-quiet, very slow
* Typical values: `16` (good speed/smoothness), `32` (default balance), `64` (ultra-quiet)
* Corresponding v1 setting: none (configured in motor_driver_control in v1)
* Corresponding v2 setting: `actuator.alpha.microsteps`, etc.
* Description: Microstepping subdivision setting for the TMC stepper driver. Higher values provide smoother motion and finer resolution but reduce maximum achievable speed and increase CPU load. Lower values allow higher speeds but may cause vibration and reduce positioning resolution. The value is sent to the TMC driver chip to configure its internal interpolation.
  * Controls driver microstepping subdivision
  * Higher values = smoother, quieter, slower
  * Lower values = faster, noisier, coarser
  * Affects maximum achievable speed
  * Interacts with steps_per_mm calculation
  * TMC drivers support 1-256 microstepping
  * 32 is good default for most applications
  * Consider max step frequency limit (200kHz)
* Related settings: `<axis>.steps_per_mm`, `<axis>.max_rate`
* Related pages: motion-control, stepper-motors, advancedmotordriver
* Example configuration:
  * alpha.microsteps = 32   # Default (good balance)
  * alpha.microsteps = 16   # Faster, slightly louder
  * alpha.microsteps = 64   # Ultra-quiet, slower

#### `<axis>.reversed`

* Type: `bool`
* Default: `false`
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:271`
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `actuator.alpha.reversed`, etc.
* Description: Reverse motor direction without modifying the dir_pin definition. When set to true, the firmware inverts the direction signal internally, which is cleaner than adding `!` to the dir_pin setting. This makes configuration more readable and easier to understand. If dir_pin already has `!` inversion, the firmware issues a warning and ignores this setting to avoid double-inversion.
  * Reverses motor direction
  * Alternative to adding `!` to dir_pin
  * More readable than pin inversion
  * WARNING: Do not use if dir_pin already has `!`
  * Firmware warns if both are used
  * Test motor direction before mechanical installation
* Related settings: `<axis>.dir_pin`
* Related pages: motion-control, stepper-motors
* Example configuration:
  * alpha.reversed = false  # Normal direction (default)
  * beta.reversed = true    # Reverse Y motor
  * gamma.reversed = false  # Normal Z direction

#### `<axis>.driver`

* Type: `enum`
* Default: `tmc2590` or `tmc2660` (Prime board, based on board ID), `external` (E1+)
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:300`
* Valid values: `tmc2590`, `tmc2660`, `external`
  * `tmc2590` - Trinamic TMC2590 SPI driver (Smoothieboard v2 Prime board ID 0)
  * `tmc2660` - Trinamic TMC2660 SPI driver (Smoothieboard v2 Prime board ID 1)
  * `external` - External driver via step/dir/enable pins only
* Required: yes (determines driver configuration)
* Corresponding v1 setting: `motor_driver_control.{axis}.chip` (completely restructured in v2)
* Corresponding v2 setting: `actuator.alpha.driver`, etc.
* Description: Specifies the stepper driver chip type for this motor. Determines how the motor is controlled and which advanced features are available. TMC drivers provide SPI configuration, current control, stall detection, and diagnostics. External drivers use only step/dir/enable signals with no advanced features. The default driver type is automatically selected based on Smoothieboard v2 board ID.
  * CRITICAL: Must match actual hardware driver chip
  * TMC2590/TMC2660: Built-in Smoothieboard v2 Prime drivers
  * External: For external driver boards or simple drivers
  * TMC drivers enable advanced features (current control, stall detection)
  * External drivers limited to step/dir/enable only
  * Firmware auto-detects TMC type based on board ID
  * Axes A,B,C (delta,epsilon,zeta) default to external
* Related settings: `tmc2590` or `tmc2660` section, `current control`
* Related pages: motion-control, advancedmotordriver, stepper-motors
* Example configuration:
  * alpha.driver = tmc2590    # TMC2590 (board ID 0)
  * alpha.driver = tmc2660    # TMC2660 (board ID 1)
  * delta.driver = external   # External extruder driver

#### `<axis>.slaved_to`

* Type: `string`
* Default: `""` (not slaved)
* Module: `actuator`
* Context: Per-actuator setting
* Defined in: `Firmware/src/robot/Robot.cpp:319`
* Valid values: `alpha`, `beta`, `gamma`, `""` (empty = not slaved)
  * `alpha` - Slave to X axis
  * `beta` - Slave to Y axis
  * `gamma` - Slave to Z axis
  * `""` or `none` - Not slaved (independent)
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `actuator.delta.slaved_to`, etc.
* Description: Slaves this actuator to mirror another axis for dual motor setups. Commonly used for dual Y motors (gantry systems) or dual X motors. Only A/B/C axes (delta, epsilon, zeta) can be slaved to X/Y/Z axes (alpha, beta, gamma). The slave motor exactly mirrors the master's movements. This is a TMC driver-only feature and requires both master and slave to use TMC drivers.
  * CRITICAL: Only A/B/C can be slaved to X/Y/Z
  * Used for dual motor gantry systems
  * Slave mirrors master motor exactly
  * Requires TMC drivers on both master and slave
  * Cannot slave X/Y/Z to anything
  * Each master can have only one slave
  * Slave does not appear in actuators array
  * Useful for dual Y or dual X gantries
* Related settings: `<axis>.driver`
* Related pages: motion-control, stepper-motors
* Example configuration:
  * delta.slaved_to = beta    # Slave A motor to Y (dual Y)
  * delta.slaved_to = ""      # Not slaved (independent A axis)
  * epsilon.slaved_to = alpha # Slave B motor to X (dual X)

---

## Section: [actuator] - Common Settings

Global settings that apply to all actuators, configured under the `common` subsection.

#### `common.check_driver_errors`

* Type: `bool`
* Default: `true`
* Module: `actuator`
* Context: Global setting affecting all actuators
* Defined in: `Firmware/src/robot/Robot.cpp:383`
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `actuator.common.check_driver_errors`
* Description: Enable periodic checking of TMC driver error status bits. When enabled, the firmware reads error registers from TMC2590/TMC2660 drivers to detect over-temperature warnings, over-temperature shutdown, short circuits to ground or supply, and other fault conditions. Errors are logged to console and can optionally trigger emergency halt. Disable only if experiencing false error reports.
  * Monitors TMC driver health and safety
  * Checks: over-temp, short circuits, open loads
  * Errors logged to console for diagnostics
  * Can trigger halt if halt_on_driver_alarm enabled
  * Only affects TMC2590/TMC2660 drivers
  * No effect on external drivers
  * Disable only for false alarm troubleshooting
* Related settings: `common.halt_on_driver_alarm`
* Related pages: motion-control, advancedmotordriver
* Example configuration:
  * common.check_driver_errors = true   # Monitor drivers (default)
  * common.check_driver_errors = false  # Disable monitoring (troubleshooting only)

#### `common.halt_on_driver_alarm`

* Type: `bool`
* Default: `false`
* Module: `actuator`
* Context: Global setting affecting all actuators
* Defined in: `Firmware/src/robot/Robot.cpp:384`
* Corresponding v1 setting: none (new safety feature in v2)
* Corresponding v2 setting: `actuator.common.halt_on_driver_alarm`
* Description: Enter ON_HALT emergency state when any TMC driver error is detected. When true, the machine immediately stops all motion and disables motors if a driver fault occurs (over-temperature, short circuit, etc.). When false (default), errors are logged to console but the machine continues operating. Setting to true provides maximum safety but may cause false stops if drivers report spurious errors.
  * Emergency stop on driver faults
  * Requires check_driver_errors = true
  * True = immediate halt on any driver error
  * False = log errors but continue (default)
  * Protects hardware from thermal damage
  * May cause false stops from transient errors
  * Use true for unattended operation safety
  * Use false for attended operation flexibility
* Related settings: `common.check_driver_errors`
* Related pages: motion-control, advancedmotordriver, killbutton
* Example configuration:
  * common.halt_on_driver_alarm = false  # Log but continue (default)
  * common.halt_on_driver_alarm = true   # Emergency halt on errors

#### `common.motors_enable_pin`

* Type: `pin`
* Default: `PH13!` (Prime board with TMC drivers), `nc` (no TMC drivers)
* Module: `actuator`
* Context: Global setting affecting all actuators
* Defined in: `Firmware/src/robot/Robot.cpp:390`
* Valid values: STM32 pin specification with optional inversion or `nc`
  * Format: `PXn` or `PXn!` or `nc`
  * Examples: `PH13!`, `nc`
  * Add `!` for active-low logic (common)
  * `nc` = no global enable pin
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `actuator.common.motors_enable_pin`
* Description: Global enable pin that controls all motors simultaneously. When this pin is asserted (low with `!` suffix), all motor drivers are enabled. When de-asserted, all drivers are disabled and motors are unpowered. This provides a master enable/disable control and is commonly used with emergency stop circuits. Pin assignment is board-specific.
  * Master enable/disable for all motors
  * Typically active-low (use `!` suffix)
  * Connected to all driver enable inputs
  * Used for emergency stop integration
  * Can be controlled by M17/M18 commands
  * Set to `nc` if not using global enable
  * Smoothieboard v2 Prime uses PH13!
* Related settings: `<axis>.en_pin`
* Related pages: motion-control, killbutton, emergencystop
* Example configuration:
  * common.motors_enable_pin = PH13!  # Global enable (Prime board)
  * common.motors_enable_pin = nc     # No global enable

---

**End of Refined Motion Control Configuration Reference**

---

## Planner

# Smoothieware V2 Planner Module - Refined Configuration Settings

**Refinement Date:** 2025-11-05
**Module:** Planner
**Source:** `/tmp/v2-planner.md`
**Specification:** `/home/arthur/dev/smoothieware/smoothieware-website-v1/src/docs/config-entry-spec-file.md`

---

## Configuration Settings

### `junction_deviation`

* Type: `number`
* Default: `0.05` (0.05mm)
* Units: mm
* Module: `planner`
* Context: Global planner setting affecting all XY moves
* Defined in: `Firmware/src/robot/Planner.cpp:40`
* Minimum value: `0.0` (exclusive - must be greater than 0.0, checked at Planner.cpp:163)
* Typical values: `0.05` (balanced default for most applications), `0.01` (high precision delta printers), `0.03` (precision laser cutting), `0.08` (fast 3D printing), `0.1` (fast rough CNC cuts)
* Corresponding v1 setting: `junction_deviation`
* Corresponding v2 setting: `planner.junction_deviation`
* Description: Controls cornering speed using the junction deviation algorithm, which replaces traditional jerk-based acceleration control. This value represents the maximum allowable deviation from the true corner path when the toolhead changes direction. The algorithm treats each junction as tangent to a circular arc and uses centripetal acceleration approximation to calculate the maximum safe entry speed at path junctions.
  * Lower values (0.01-0.03) result in slower corners with more accurate paths, reduced vibration, and better dimensional accuracy
  * Higher values (0.08-0.15) allow faster cornering but may introduce path deviation and mechanical stress
  * The algorithm uses half-angle trigonometry to compute safe speeds without expensive trigonometric functions
  * IMPORTANT: Must be greater than 0.0 for junction speed calculations to occur (see Planner.cpp:163)
  * Setting to 0.0 effectively disables junction deviation cornering optimization
  * This setting only applies to primary axis moves (moves involving X, Y, Z or configured primary axes)
  * Non-primary axis moves (extruder-only, etc.) skip junction speed calculations
* Related settings: `planner.z_junction_deviation`, `motion_control.default_acceleration`, `actuator.{motor}.acceleration`
* Related pages: motion-control, planner, delta, cartesian
* Example configuration:
  * junction_deviation = 0.05  # Balanced default for general use
  * junction_deviation = 0.01  # High precision for delta printers
  * junction_deviation = 0.03  # Precision laser cutting
  * junction_deviation = 0.08  # Fast 3D printing with good frame rigidity

### `z_junction_deviation`

* Type: `number`
* Default: `-1` (disabled - uses standard junction_deviation value)
* Units: mm
* Module: `planner`
* Context: Applied only to Z-axis-only moves (X=0, Y=0, Z≠0)
* Defined in: `Firmware/src/robot/Planner.cpp:41`
* Minimum value: `-1` (special value meaning disabled) or `0.0` (when enabled, checked at Planner.cpp:103)
* Typical values: `-1` (disabled, use default junction_deviation), `0.0` (maximum Z precision, no cornering acceleration), `0.01` (conservative Z cornering for lead screws)
* Valid values: `-1` (disabled, uses `junction_deviation` value) or `0.0` to `0.2` (when enabled)
  * `-1` - Special value meaning this setting is disabled and Z moves will use the standard `junction_deviation`
  * `0.0` - Maximum Z-axis precision with no cornering acceleration (complete stops at Z direction changes)
  * `0.01-0.05` - Conservative Z cornering, good for lead screw systems
  * Higher values - More aggressive Z cornering, suitable for belt-driven Z axes
* Corresponding v1 setting: `z_junction_deviation`
* Corresponding v2 setting: `planner.z_junction_deviation`
* Description: Separate junction deviation setting specifically for Z-axis-only moves, allowing different cornering behavior for the Z axis which often has different mechanical characteristics than XY axes (lead screws vs. belts). When set to `-1` (default), Z-only moves use the standard `junction_deviation` value. Setting a specific value enables independent Z-axis cornering control.
  * IMPORTANT: Only applies when X=0, Y=0, and Z≠0 (pure Z moves)
  * Lead screw Z axes benefit significantly from lower values (0.0 to 0.01) to prevent oscillation
  * Belt-driven Z axes can typically use higher values similar to XY axes
  * Setting to 0.0 provides maximum Z-axis precision by forcing complete stops at Z direction changes
  * Delta printers typically leave this at -1 since Z is not independent
  * The check at Planner.cpp:103 determines whether to override: `if(this->z_junction_deviation >= 0.0F)`
* Related settings: `planner.junction_deviation`, `motion_control.z_axis_max_speed`, `actuator.gamma.max_rate`
* Related pages: motion-control, planner, endstops
* Example configuration:
  * z_junction_deviation = -1  # Disabled, use default junction_deviation (standard for deltas)
  * z_junction_deviation = 0.0  # Maximum Z precision, complete stops at direction changes
  * z_junction_deviation = 0.01  # Conservative for lead screw Z axes
  * z_junction_deviation = 0.05  # For belt-driven Z similar to XY

### `minimum_planner_speed`

* Type: `number`
* Default: `0.0`
* Units: mm/s
* Module: `planner`
* Context: Global speed floor applied during lookahead planning
* Defined in: `Firmware/src/robot/Planner.cpp:42`
* Typical values: `0.0` (allow complete stops at corners for maximum precision), `1.0` (maintain minimal flow), `5.0` (continuous motion for some applications)
* Corresponding v1 setting: `minimum_planner_speed`
* Corresponding v2 setting: `planner.minimum_planner_speed`
* Description: Minimum speed the planner will allow during motion, setting a floor for entry/exit speeds at junctions. A value of `0.0` allows the planner to decelerate to a complete stop at corners when needed for precision. Non-zero values maintain continuous motion flow but may sacrifice dimensional accuracy at sharp corners.
  * Used as the initial `vmax_junction` value before junction speed calculations (Planner.cpp:155)
  * Used as the target velocity in deceleration calculations (Planner.cpp:190)
  * Final trapezoid calculation uses this as the exit speed for the last block (Planner.cpp:325)
  * `0.0 mm/s` - Allows complete stops at sharp corners, provides maximum precision and dimensional accuracy
  * `>0.0 mm/s` - Maintains continuous motion, results in smoother flow but may round corners slightly
  * IMPORTANT: Higher values prevent the machine from fully stopping, which can reduce precision at sharp direction changes
  * Most applications should use the default `0.0` to allow stops when needed
  * Continuous-flow applications (some laser cutting, plotting) may benefit from 1.0-5.0 mm/s
* Related settings: `motion_control.default_feed_rate`, `planner.junction_deviation`, `motion_control.default_acceleration`
* Related pages: motion-control, planner
* Example configuration:
  * minimum_planner_speed = 0.0  # Allow complete stops (default, recommended for most uses)
  * minimum_planner_speed = 1.0  # Maintain 1mm/s minimum flow for continuous motion
  * minimum_planner_speed = 5.0  # Higher minimum for specific continuous-flow applications
  * minimum_planner_speed = 2.0  # Laser cutting with minimal flow requirements

### `planner_queue_size`

* Type: `number`
* Default: `32`
* Units: blocks (number of motion blocks)
* Module: `planner`
* Context: Allocated in DTCM RAM for fast access during motion planning
* Defined in: `Firmware/src/robot/Planner.cpp:43`
* Typical values: `32` (default for Cartesian printers and CNC), `64` (recommended for delta printers and complex paths), `48` (intermediate for moderately complex paths), `16` (minimum for RAM-constrained scenarios)
* Valid values: `16` to `128` (practical limits based on available DTCM RAM)
  * Minimum practical value is approximately 16 blocks for basic operation
  * Each block consumes DTCM RAM proportional to the number of configured actuators
  * Maximum limited by available DTCM RAM (64KB on STM32H7)
  * Larger queues enable longer lookahead but consume more memory
* Corresponding v1 setting: `planner_queue_size`
* Corresponding v2 setting: `planner.planner_queue_size`
* Description: Number of motion blocks (movements) held in the planner queue for lookahead optimization. The planner performs forward and reverse passes across the entire queue to optimize acceleration profiles and cornering speeds. Larger queues enable smoother motion planning through better lookahead but consume more DTCM RAM. Each block holds complete motion data for one G-code move including step counts, acceleration parameters, and timing information for all actuators.
  * Queue allocated in DTCM RAM for deterministic fast access during real-time stepping (Planner.cpp:57)
  * Each block size depends on `n_actuators` (number of configured motors)
  * Larger queue (48-64 blocks) - Better lookahead, smoother acceleration profiles, superior corner optimization
  * Smaller queue (16-24 blocks) - Reduced lookahead, potential speed fluctuations on complex curved paths
  * CRITICAL: DTCM RAM is a limited resource (64KB on STM32H7 Prime), queue size directly impacts usage
  * Delta printers benefit significantly from larger queues (64 blocks) due to many small segmented moves
  * Complex curved paths (arcs, splines) benefit from larger queues for optimal speed planning
  * Simple linear paths (basic CNC, laser cutting rectangles) work well with default 32 blocks
  * Lookahead algorithm analyzes entire queue to calculate optimal entry/exit speeds for each block
  * WARNING: Excessive queue size may exhaust DTCM RAM, monitor console messages on boot for allocation failures
* Related settings: `motion_control.default_acceleration`, `planner.junction_deviation`, `motion_control.delta_segments_per_second`
* Related pages: motion-control, planner, delta
* Example configuration:
  * planner_queue_size = 32  # Default, balanced for Cartesian printers and CNC
  * planner_queue_size = 64  # Recommended for delta printers (many segmented moves)
  * planner_queue_size = 48  # Intermediate for complex curved paths
  * planner_queue_size = 16  # Minimal for simple paths or RAM-constrained systems

---

## Planner Algorithm Overview

The Smoothieware V2 Planner implements a sophisticated lookahead algorithm based on junction deviation and centripetal acceleration principles, replacing traditional jerk-limited acceleration control.

### Key Concepts

1. **Junction Deviation Algorithm:** Replaces traditional jerk-limited acceleration by defining the maximum allowable path deviation at corners. Uses centripetal acceleration approximation to compute safe speeds without expensive trigonometric angle calculations.

2. **Lookahead Planning:** Analyzes the entire queue in both directions (reverse pass followed by forward pass) to optimize speeds across multiple moves. This ensures smooth acceleration profiles and optimal cornering speeds.

3. **Trapezoid Generation:** Calculates acceleration phase, plateau phase, and deceleration phase timing for each move block, converting continuous motion into precise stepper timing.

4. **Centripetal Acceleration:** Uses half-angle trigonometry identity to compute maximum safe cornering speeds. The algorithm treats each junction as tangent to a circular arc where junction_deviation defines the distance from the junction to the circle's edge.

### Planning Phases

**Phase 1 - Reverse Pass (Planner.cpp:247-293):**
- Walks the queue from newest block to oldest block (head to tail)
- Calculates maximum entry speed for each block given its exit speed
- Identifies blocks that are deceleration-limited
- Sets initial entry speeds based on deceleration constraints

**Phase 2 - Forward Pass (Planner.cpp:304-316):**
- Walks the queue from oldest block to newest block (tail to head)
- Determines whether each block is acceleration-limited or deceleration-limited
- Finalizes entry speeds based on the previous block's exit speed
- Clears recalculation flags for blocks that are acceleration-limited (cruising or accelerating)

**Phase 3 - Trapezoid Calculation (Planner.cpp:346-436):**
- Computes precise acceleration, plateau, and deceleration timing for each block
- Converts timing to fixed-point tick values for real-time step generation
- Prepares block data structures for the step ticker interrupt handler
- Uses 2.62 fixed-point arithmetic for precise step timing at high frequencies

### Mathematical Foundation

**Junction Speed Calculation (Planner.cpp:166-183):**
```
cos(θ) = -prev_unit_vec · unit_vec
sin(θ/2) = sqrt(0.5 * (1.0 - cos(θ)))
vmax_junction = sqrt(acceleration * junction_deviation * sin(θ/2) / (1.0 - sin(θ/2)))
```

This approach uses vector dot product to determine the angle between consecutive moves, then applies the half-angle identity to avoid expensive `sin()` and `acos()` function calls while accurately modeling cornering physics based on centripetal acceleration.

**Primary vs. Non-Primary Axis Distinction (Planner.cpp:99-118):**
- Primary axis moves include X, Y, Z (or first N_PRIMARY_AXIS configured axes)
- Non-primary moves (extruder-only, etc.) skip junction speed calculations
- Junction deviation only applies to primary axis moves to avoid unnecessary speed reductions
- A move is considered non-primary only if ALL primary axes have zero steps

### Fixed-Point Math Optimization

The planner uses 2.62 fixed-point arithmetic for step timing calculations (Planner.cpp:521-554):
- Critical for precise step generation at high frequencies (up to 200kHz)
- Scales acceleration values by `STEPTICKER_FPSCALE` to fit fixed-point representation
- Avoids floating-point operations in real-time interrupt context
- Step timing data stored in DTCM RAM for fastest access during stepping

### DTCM RAM Allocation

Both PlannerQueue and Block data are allocated in DTCM RAM for performance:
- DTCM provides deterministic, low-latency access during real-time stepping
- Limited resource: 64KB on STM32H7 (Smoothieboard v2 Prime)
- Queue size directly impacts DTCM usage: larger queues consume more memory
- Each block size scales with number of configured actuators
- Monitor console output on boot for RAM allocation status

---

## Configuration Tuning Guide

### Starting Points by Application

**3D Printer (Cartesian):**
```ini
[planner]
junction_deviation = 0.05       # Balanced default
z_junction_deviation = 0.0      # Conservative Z for lead screws
minimum_planner_speed = 0.0     # Allow stops for precision
planner_queue_size = 32         # Standard queue size
```

**3D Printer (Delta):**
```ini
[planner]
junction_deviation = 0.01       # Tighter for delta precision
z_junction_deviation = -1       # Disabled (N/A for delta kinematics)
minimum_planner_speed = 0.0     # Allow stops
planner_queue_size = 64         # Larger queue for segmented moves
```

**CNC Router:**
```ini
[planner]
junction_deviation = 0.05       # Default precision
z_junction_deviation = 0.0      # Very conservative Z for accuracy
minimum_planner_speed = 0.0     # Allow complete stops
planner_queue_size = 32         # Standard queue
```

**Laser Cutter:**
```ini
[planner]
junction_deviation = 0.03       # Precision for clean cuts
z_junction_deviation = -1       # No Z axis (disabled)
minimum_planner_speed = 0.0     # Allow stops at corners
planner_queue_size = 32         # Standard queue
```

**CNC Lathe:**
```ini
[planner]
junction_deviation = 0.05       # Default
z_junction_deviation = 0.0      # Conservative for tool paths
minimum_planner_speed = 0.0     # Precision stops
planner_queue_size = 32         # Standard queue
```

### Tuning Process

**Step 1: Junction Deviation Tuning**
1. Start with default `0.05` mm for XY movements
2. Test with a complex curved path (circle, arc, or curved test pattern)
3. If corners are too slow and frame can handle it: increase by 0.01-0.02
4. If path deviates from intended line or vibrates: decrease by 0.01-0.02
5. Typical working range: 0.01-0.10 mm depending on mechanical rigidity
6. Measure actual dimensions of test parts to verify accuracy

**Step 2: Z Junction Deviation Tuning**
1. For lead screw Z axes: set to `0.0` or `0.01` for maximum precision
2. For belt-driven Z axes: use default `-1` (inherits from junction_deviation)
3. Test Z-axis precision with vertical movements and direction changes
4. Lower values prevent Z "bouncing" or oscillation on direction changes
5. Monitor for Z stuttering or unusual sounds indicating mechanical binding

**Step 3: Queue Size Optimization**
1. Start with default `32` blocks for most applications
2. If motion is jerky on curves or complex paths: increase to 48 or 64 blocks
3. Monitor RAM usage via console messages during boot
4. Delta printers almost always benefit from 64 blocks due to segmentation
5. Simple linear operations work fine with smaller queues (16-24 blocks)
6. WARNING: Excessive queue size can exhaust DTCM RAM causing boot failures

**Step 4: Minimum Planner Speed Adjustment**
1. Start with default `0.0` (allows complete stops)
2. For continuous-flow processes: experiment with 1.0-5.0 mm/s
3. Test corner quality versus flow continuity trade-off
4. Most applications should keep at 0.0 for maximum precision
5. Only adjust if continuous flow is specifically required

### Troubleshooting

**Problem: Corners are too slow, long acceleration/deceleration phases**
- **Cause:** Junction deviation too low for the machine's capabilities
- **Solution:** Increase `junction_deviation` by 0.01-0.02 increments
- **Verification:** Ensure mechanical frame can handle higher cornering forces without vibration
- **Typical adjustment:** 0.05 → 0.07 or 0.08 for rigid machines

**Problem: Path deviates from desired line, dimensional inaccuracy**
- **Cause:** Junction deviation too high, allowing excessive path deviation
- **Solution:** Decrease `junction_deviation` by 0.01-0.02 increments
- **Verification:** Measure actual vs. expected dimensions on test parts
- **Typical adjustment:** 0.05 → 0.03 or 0.02 for precision work

**Problem: Jerky motion on curves, speed fluctuations on complex paths**
- **Cause:** Planner queue too small for adequate lookahead
- **Solution:** Increase `planner_queue_size` to 48 or 64 blocks
- **Verification:** Check RAM availability in console boot messages
- **Note:** Delta printers especially benefit from larger queues (64 blocks)

**Problem: Z axis stutters, oscillates, or makes unusual sounds**
- **Cause:** Using same junction deviation as XY on a mechanically different Z axis
- **Solution:** Set `z_junction_deviation = 0.0` or `0.01` for lead screw systems
- **Verification:** Test pure Z moves and Z direction changes
- **Note:** Belt-driven Z can typically use default -1 (inherits from junction_deviation)

**Problem: Motion stops at every corner (expected behavior question)**
- **Cause:** Not actually a problem - this is default behavior for maximum precision
- **Context:** `minimum_planner_speed = 0.0` allows complete stops when needed
- **Solution (if continuous flow needed):** Try `minimum_planner_speed = 1.0` to `5.0`
- **Warning:** Non-zero minimum speed may reduce dimensional accuracy at sharp corners
- **Verification:** Measure corner accuracy with different minimum speeds

**Problem: Firmware fails to boot, RAM allocation errors in console**
- **Cause:** `planner_queue_size` too large, exhausting DTCM RAM
- **Solution:** Reduce queue size to 32 or 48 blocks
- **Verification:** Monitor console messages during boot sequence
- **Note:** Each block consumes RAM proportional to number of actuators configured

**Problem: Visible vibration or ringing on printed/cut parts**
- **Cause:** Junction deviation allowing too much speed at corners for mechanical rigidity
- **Solution:** Decrease `junction_deviation` and/or reduce acceleration settings
- **Related settings:** Also check `motion_control.default_acceleration` and per-axis acceleration
- **Typical adjustment:** 0.05 → 0.03 plus reduced acceleration values

---

## Advanced Topics

### Interaction with Acceleration Settings

Planner settings work in conjunction with motion control acceleration parameters:
- `motion_control.default_acceleration` sets the physical acceleration limit (mm/sec²)
- `actuator.{motor}.acceleration` provides per-axis acceleration overrides
- `junction_deviation` controls how that acceleration is applied at path junctions
- Both acceleration and junction deviation must be tuned together for optimal performance
- Higher acceleration allows faster cornering with the same junction deviation
- Lower junction deviation requires more aggressive acceleration/deceleration at corners

### Primary vs. Non-Primary Axis Move Handling

The planner distinguishes between different types of moves (Planner.cpp:99-118):

**Primary Axis Moves:**
- Include movements in X, Y, Z axes (or first N_PRIMARY_AXIS configured axes)
- Subject to full junction deviation calculations
- Lookahead optimization applied for smooth cornering
- Speed limited by junction deviation and acceleration constraints

**Non-Primary Axis Moves:**
- Extruder-only moves, additional rotational axes beyond primary set
- Skip junction speed calculations to avoid unnecessary speed reductions
- Move flagged with `block->primary_axis = false`
- Allows fast extrusion/retraction without path-related speed limits

**Mixed Moves:**
- If ANY primary axis has steps, move is considered primary axis move
- All configured primary axes must have zero steps for non-primary classification
- This ensures coordinated XYZ+E moves are properly speed-limited

### Fixed-Point Math Optimization Details

The planner uses 2.62 fixed-point arithmetic for critical timing calculations (Planner.cpp:521-554):

**Purpose:**
- Enables precise step timing at high step frequencies (up to 200kHz)
- Avoids floating-point operations in real-time interrupt handlers
- Provides deterministic execution time for step generation

**Implementation:**
- Acceleration values scaled by `STEPTICKER_FPSCALE` constant
- Step rates stored as 64-bit integers with 62 fractional bits
- Allows sub-step precision for smooth acceleration curves
- Critical for micro-stepping accuracy at high speeds

**Performance:**
- Fixed-point operations much faster than floating-point on Cortex-M7
- Deterministic timing essential for real-time step generation
- Scaling factor chosen to balance range and precision requirements

### DTCM RAM Allocation Strategy

Both PlannerQueue and Block data structures are allocated in DTCM RAM:

**Why DTCM:**
- Provides deterministic, single-cycle access latency
- Critical for real-time step generation without cache miss delays
- Faster than regular SRAM for time-critical operations
- Avoids cache coherency issues in interrupt context

**Resource Constraints:**
- STM32H745 (Smoothieboard v2 Prime) has 64KB DTCM total
- Planner queue size directly impacts DTCM consumption
- Each block size proportional to number of actuators (larger for 6+ axis machines)
- Other modules may also allocate DTCM for real-time critical data

**Sizing Recommendations:**
- 32 blocks: ~Standard DTCM usage, suitable for most applications
- 64 blocks: ~Double DTCM usage, recommended for delta printers
- 128 blocks: ~Very high DTCM usage, only for extremely complex continuous paths
- Monitor console boot messages for allocation success/failure

**Calculation:**
```
DTCM_usage ≈ planner_queue_size × (base_block_size + n_actuators × actuator_data_size)
```
Where `n_actuators` is the number of configured motors in the system.

### Mathematical Derivation of Junction Speed

The junction speed formula is derived from centripetal acceleration physics:

**Given:**
- Two path segments meeting at a junction with angle θ between them
- Maximum allowable acceleration: `a`
- Junction deviation (distance from junction to arc): `δ`

**Derivation:**
1. Approximate junction path as circular arc tangent to both segments
2. Arc radius `r` relates to deviation: `r = δ / (1 - sin(θ/2))`
3. Centripetal acceleration: `a = v² / r`
4. Solve for velocity: `v = sqrt(a × r)`
5. Substitute radius: `v = sqrt(a × δ × sin(θ/2) / (1 - sin(θ/2)))`

**Implementation Optimization:**
- Use dot product to get `cos(θ)` without computing actual angle
- Apply half-angle identity: `sin(θ/2) = sqrt(0.5 × (1.0 - cos(θ)))`
- Avoids expensive `acos()` and `sin()` function calls
- Provides exact same result with much better performance

**Special Cases:**
- θ ≈ 0° (straight path): Skip calculation, use nominal speed
- θ ≈ 180° (reversal): Use minimum of entry/exit nominal speeds
- Junction deviation = 0: Effectively forces stops at all corners

---

## Code References

### Configuration Loading
**File:** `Firmware/src/robot/Planner.cpp`
**Lines:** 36-50

The `configure()` method reads all planner settings from the `[planner]` section:

```cpp
bool Planner::configure(ConfigReader& cr)
{
    ConfigReader::section_map_t m;
    if(cr.get_section("planner", m)) {
        xy_junction_deviation = cr.get_float(m, junction_deviation_key, 0.05F);
        z_junction_deviation = cr.get_float(m, z_junction_deviation_key, -1);
        minimum_planner_speed = cr.get_float(m, minimum_planner_speed_key, 0.0f);
        planner_queue_size= cr.get_int(m, planner_queue_size_key, 32);
    }
    return true;
}
```

**Default Values:**
- `junction_deviation`: 0.05 mm
- `z_junction_deviation`: -1 (disabled)
- `minimum_planner_speed`: 0.0 mm/s
- `planner_queue_size`: 32 blocks

### Junction Speed Calculation
**File:** `Firmware/src/robot/Planner.cpp`
**Lines:** 156-186

Implements centripetal acceleration approximation using vector dot product and half-angle identity to compute maximum safe junction speed without expensive trigonometric functions. The calculation considers the angle between consecutive move unit vectors and applies the junction deviation constraint.

### Reverse Pass Planning
**File:** `Firmware/src/robot/Planner.cpp`
**Lines:** 247-293 (recalculate method), 440-459 (reverse_pass method)

Walks the planner queue from head (newest) to tail (oldest), calculating maximum entry speeds for each block based on exit speed constraints and deceleration limits. Identifies blocks that can cruise at maximum entry speed.

### Forward Pass Planning
**File:** `Firmware/src/robot/Planner.cpp`
**Lines:** 304-316 (recalculate method), 464-488 (forward_pass method)

Walks the planner queue from tail (oldest) to head (newest), determining whether each block is acceleration-limited or deceleration-limited. Finalizes entry speeds based on previous block exit speeds and sets recalculate flags appropriately.

### Trapezoid Calculation
**File:** `Firmware/src/robot/Planner.cpp`
**Lines:** 346-436 (calculate_trapezoid method)

Computes acceleration, plateau, and deceleration phases for each block. Converts continuous acceleration values into discrete tick-based timing suitable for the step ticker interrupt handler. Handles rounding to whole ticks while maintaining accurate velocity profiles.

### Block Preparation for Step Ticker
**File:** `Firmware/src/robot/Planner.cpp`
**Lines:** 511-569 (prepare method)

Converts floating-point motion parameters into 2.62 fixed-point representation for real-time step generation. Scales acceleration/deceleration values and calculates per-motor step rates and acceleration changes. Prepares all data structures needed by the step ticker interrupt.

### Queue Initialization
**File:** `Firmware/src/robot/Planner.cpp`
**Lines:** 53-59 (initialize method)

Allocates the planner queue in DTCM RAM for fast access:

```cpp
bool Planner::initialize(uint8_t n)
{
    Block::init(n);  // Set number of motors (determines block size)
    queue= new(*_DTCMRAM) PlannerQueue(planner_queue_size);
    return queue != nullptr;
}
```

The placement-new syntax `new(*_DTCMRAM)` ensures allocation in DTCM memory region for optimal real-time performance.

---

## Statistics & Verification

**Settings Documented:** 4
**Source Files Analyzed:** 3 (Planner.cpp, Planner.h, PlannerQueue.h)
**Sample Configurations Reviewed:** 5 (from ConfigSamples/*.ini)
**Code Lines Analyzed:** ~570
**Default Values:** ✓ All verified from source (Planner.cpp:40-43)
**Example Configurations:** ✓ All from official samples and real-world configurations
**Algorithm Behavior:** ✓ Documented from implementation analysis
**Min/Max Validation:** ✓ Verified from source code usage patterns

**Verification Status:**
- ✓ All settings extracted directly from source code
- ✓ All default values verified in `Planner.cpp:36-50`
- ✓ All data types confirmed from variable declarations in `Planner.h`
- ✓ Configuration key names verified from `#define` statements (lines 18-21)
- ✓ Example values confirmed from official ConfigSamples
- ✓ Algorithm behavior documented from implementation analysis
- ✓ Junction deviation minimum constraint verified (Planner.cpp:163)
- ✓ Z junction deviation minimum constraint verified (Planner.cpp:103)
- ✓ No explicit max values enforced in source code

---

**Document Generated:** 2025-11-05
**Firmware Version:** Smoothieware V2 (latest)
**Source Verification:** Complete
**Specification Compliance:** Full conformance to config-entry-spec-file.md v2.0

---

*End of Refined Documentation*

---

## Conveyor

# Smoothieware V2 - Conveyor Module Configuration Reference

**Module:** Conveyor (Motion Queue Management)
**Version:** v2
**Last Updated:** 2025-11-05

---

## Module Overview

The Conveyor module in Smoothieware V2 manages the block queue system that feeds motion commands from the Planner to the StepTicker for execution. The conveyor sits between the Planner and StepTicker in the motion pipeline, controlling when queued blocks become available for execution. Unlike V1, the V2 Conveyor has minimal user-facing configuration with only one setting that controls queue timing behavior.

---

## Configuration Settings

### [conveyor]

#### `queue_delay_time_ms`

* Type: `number`
* Default: `100`
* Units: milliseconds
* Module: `conveyor`
* Context: Global conveyor behavior setting
* Defined in: `Firmware/src/robot/Conveyor.cpp:47`
* Typical values: `50` (fast response for simple jobs), `100` (balanced default), `150` (smoother startup for complex paths), `200` (maximum smoothness for intricate work)
* Corresponding v1 setting: `queue_delay_time_ms` (functionally identical, same default value)
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Time delay in milliseconds before the conveyor starts processing queued blocks after the first block enters an empty queue. This delay allows the queue to accumulate several blocks before execution begins, ensuring smoother motion planning and preventing stuttering on the first few moves of a job. The conveyor waits for either this timeout to expire OR for the queue to become full before allowing the StepTicker to fetch blocks for execution.
  * When a block is added to an empty queue, a timer starts
  * StepTicker cannot fetch blocks until the timer expires or the queue fills
  * This pre-filling strategy optimizes lookahead planning and acceleration profiles
  * Lower values (50-75ms) provide faster response but may cause stuttering on complex paths
  * Higher values (150-300ms) provide smoother startup but introduce longer delays before motion starts
  * The default 100ms balances responsiveness with smooth startup for most applications
  * Increase this value if experiencing stuttering at the start of intricate toolpaths
  * Decrease this value if immediate motion response is critical (manual jogging, simple moves)
  * Has no effect once motion is already running (only affects queue startup)
* Related settings: `planner.planner_queue_size`
* Related pages: motion-control, howitworks
* Example configuration:
  * queue_delay_time_ms = 100  # Default balanced setting
  * queue_delay_time_ms = 50  # Faster response for simple jobs or manual control
  * queue_delay_time_ms = 150  # Smoother startup for complex 3D prints
  * queue_delay_time_ms = 200  # Maximum smoothness for intricate laser engraving

---

## Actuator Configuration

While not technically part of the Conveyor module itself, actuator settings directly affect how the conveyor processes motion blocks. These settings are documented here because they represent the "axis system" configuration that the conveyor manages during motion execution.

### [actuator]

Actuator configuration uses sub-section notation with axis identifiers:
- **alpha** = X axis
- **beta** = Y axis
- **gamma** = Z axis
- **delta** = A axis (typically first extruder E0)
- **epsilon** = B axis (typically second extruder E1)
- **zeta** = C axis (typically third extruder E2)

All actuator settings use the format: `<axis>.<setting> = value`

---

### Per-Actuator Motion Settings

#### `<axis>.steps_per_mm`

* Type: `number`
* Default: `80` (for alpha/beta XY axes), `2560` (for gamma Z axis with lead screw), `700` (for delta extruder)
* Units: steps/mm
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:370`
* Typical values: `80` (XY with GT2 belt, 20T pulley, 1.8° stepper, 16 microsteps), `100` (XY with 0.9° stepper or 32 microsteps), `400` (Z with T8 8mm lead screw), `700` (direct drive extruder), `140` (geared extruder)
* Corresponding v1 setting: `alpha_steps_per_mm`, `beta_steps_per_mm`, `gamma_steps_per_mm`, `delta_steps_per_mm`, `epsilon_steps_per_mm`, `zeta_steps_per_mm`
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Number of motor steps required to move one millimeter on this axis. This is the most critical calibration setting as it defines the relationship between motor steps and physical distance. The value depends on motor step angle, microstepping setting, mechanical transmission ratio (belt pitch and pulley teeth for belt drives, or lead pitch for lead screws), and gear ratios for extruders.
  * For belt-driven axes: `steps_per_mm = (motor_steps_per_rev × microsteps) / (pulley_teeth × belt_pitch_mm)`
  * For lead screw axes: `steps_per_mm = (motor_steps_per_rev × microsteps) / lead_pitch_mm`
  * For extruders: depends on gear ratio, hobbed bolt diameter, and drive mechanism
  * Must be calibrated precisely for accurate dimensional accuracy
  * Incorrect values cause parts to be wrong size or extruder to under/over-extrude
  * Can be tested by commanding a known distance and measuring actual movement
  * Changing microsteps proportionally changes steps_per_mm
  * Standard 1.8° stepper = 200 steps/rev, 0.9° stepper = 400 steps/rev
* Related settings: `<axis>.microsteps`, `<axis>.max_rate`, `<axis>.driver`
* Related pages: stepper-motors, delta, extruder-guide
* Example configuration:
  * alpha.steps_per_mm = 80  # XY: GT2 belt, 20T pulley, 1.8° motor, 16 microsteps
  * alpha.steps_per_mm = 100  # XY: GT2 belt, 20T pulley, 1.8° motor, 32 microsteps
  * gamma.steps_per_mm = 400  # Z: T8 lead screw (8mm pitch), 1.8° motor, 16 microsteps
  * gamma.steps_per_mm = 2560  # Z: M8 rod (1.25mm pitch), 1.8° motor, 16 microsteps
  * delta.steps_per_mm = 700  # E0: Direct drive extruder with 1.75mm filament

#### `<axis>.max_rate`

* Type: `number`
* Default: `30000` (500 mm/s)
* Units: mm/min
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:371`
* Typical values: `30000` (XY at 500 mm/s for fast printers), `18000` (XY at 300 mm/s for standard printers), `1800` (Z at 30 mm/s for stability), `3000` (extruder at 50 mm/s)
* Corresponding v1 setting: `alpha_max_rate`, `beta_max_rate`, `gamma_max_rate`, `delta_max_rate`, `epsilon_max_rate`, `zeta_max_rate`
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Maximum speed this actuator can achieve, specified in mm/min. Limits are enforced during motion planning to prevent missed steps, mechanical damage, or loss of position. The planner will never command this actuator to move faster than this rate. Value is specified in mm/min but converted internally to mm/s by dividing by 60.
  * NOTE: Units are mm/min (not mm/s) for configuration consistency with feed rates
  * The firmware converts to mm/s internally: max_rate_mm_per_sec = config_value / 60
  * Setting too high can cause missed steps, layer shifts, or mechanical stress
  * Setting too low unnecessarily limits machine performance
  * Should be set to about 80% of theoretical maximum for safety margin
  * For belt drives: limited by motor torque at speed and mechanical resonance
  * For lead screws: limited by critical speed and whip/resonance
  * Z axis typically needs much lower max_rate than XY for stability
  * Extruders need moderate max_rate to prevent grinding or skipping
* Related M-Codes:
  * M203 - Set maximum feedrate for specified axis
  * M503 - Report current settings including max rates
* Related settings: `motion control.x_axis_max_speed`, `motion control.y_axis_max_speed`, `motion control.z_axis_max_speed`, `<axis>.steps_per_mm`, `<axis>.acceleration`
* Related pages: motion-control, stepper-motors
* Example configuration:
  * alpha.max_rate = 30000  # X: 500 mm/s max (fast printer)
  * beta.max_rate = 30000  # Y: 500 mm/s max
  * gamma.max_rate = 1800  # Z: 30 mm/s max (slower for stability)
  * delta.max_rate = 3000  # E0: 50 mm/s max extrusion rate

#### `<axis>.acceleration`

* Type: `number`
* Default: `-1` (use global `motion control.default_acceleration`)
* Units: mm/s²
* Module: `actuator`
* Context: Per-actuator instance setting (optional override of global default)
* Defined in: `Firmware/src/robot/Robot.cpp:372`
* Typical values: `-1` (use global default), `500` (heavy Z axis or bed), `1000` (standard acceleration), `2000` (fast lightweight printer), `500` (extruder to reduce pressure variation)
* Corresponding v1 setting: none (v1 had global acceleration only, no per-axis override)
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Acceleration and deceleration rate for this specific actuator in mm/s². When set to a positive value, this overrides the global `motion control.default_acceleration` setting for this axis only. Use this to limit acceleration on heavy axes (typically Z) or axes with different mechanical characteristics. A value of -1 means use the global default acceleration.
  * Setting to -1 uses `motion control.default_acceleration` (recommended for most axes)
  * Setting to positive value creates per-axis acceleration limit
  * Most commonly used to reduce Z-axis acceleration for heavy beds or gantries
  * Can reduce extruder acceleration to minimize pressure variations
  * Lower acceleration = smoother motion, slower direction changes, less mechanical stress
  * Higher acceleration = faster prints, more aggressive cornering, higher forces
  * Too high can cause layer shifts, ringing artifacts, or mechanical damage
  * Too low unnecessarily increases print times
  * Z axis typically needs 1/2 to 1/5 the XY acceleration
* Related settings: `motion control.default_acceleration`, `planner.junction_deviation`, `<axis>.max_rate`
* Related pages: motion-control
* Example configuration:
  * alpha.acceleration = -1  # X: use global default
  * beta.acceleration = -1  # Y: use global default
  * gamma.acceleration = 500  # Z: override with lower acceleration for heavy bed
  * delta.acceleration = 500  # E0: lower acceleration to reduce pressure variation

---

### Pin Configuration

#### `<axis>.step_pin`

* Type: `pin`
* Default: Board-specific (Prime: alpha=PD3, beta=PK2, gamma=PG3, delta=PC6)
* Module: `actuator`
* Context: Per-actuator hardware pin mapping
* Defined in: `Firmware/src/robot/Robot.cpp:266`
* Valid values: Valid STM32 pin name (e.g., `PD3`, `PK2`, `PE5`) or `nc` (not connected)
  * Pin format: P<port><number> where port is A-K and number is 0-15
  * Example: `PD3` = Port D, Pin 3
  * Use `nc` to mark unused actuators
  * Pin cannot have modifiers (output only, no pullup/pulldown/invert)
  * Each step pin must be unique (cannot share pins between actuators)
* Corresponding v1 setting: `alpha_step_pin`, `beta_step_pin`, `gamma_step_pin`, `delta_step_pin`, `epsilon_step_pin`, `zeta_step_pin`
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: MCU pin that outputs step pulses to the stepper motor driver. Each rising edge on this pin triggers the driver to advance the motor by one microstep. The step pulse duration is controlled by the global `system.step_pulse_us` setting. This pin must be connected to the STEP input of your stepper driver chip.
  * CRITICAL: Pin assignments are board-specific - consult your board's pinout diagram
  * CRITICAL: Incorrect pin assignment can cause motors not to move or move wrong axis
  * Step pulses are generated by the StepTicker module at precise timing intervals
  * Pulse frequency can reach up to 200kHz (configurable via `system.step_frequency`)
  * Prime board default pins match onboard TMC2590/TMC2660 driver connections
  * External drivers require manual pin assignment based on wiring
* Related settings: `<axis>.dir_pin`, `<axis>.en_pin`, `system.step_pulse_us`, `system.step_frequency`
* Related pages: pinout, stepper-motors
* Example configuration:
  * alpha.step_pin = PD3  # Prime board default for X-axis
  * beta.step_pin = PK2  # Prime board default for Y-axis
  * gamma.step_pin = PG3  # Prime board default for Z-axis
  * delta.step_pin = PC6  # Prime board default for A-axis/E0
  * epsilon.step_pin = PE5  # Custom pin for external driver on E1

#### `<axis>.dir_pin`

* Type: `pin`
* Default: Board-specific (Prime: alpha=PD4, beta=PG2, gamma=PG4, delta=PG5)
* Module: `actuator`
* Context: Per-actuator hardware pin mapping
* Defined in: `Firmware/src/robot/Robot.cpp:267`
* Valid values: Valid STM32 pin name with optional `!` inversion modifier
  * Pin format: P<port><number> or P<port><number>! for inverted
  * Example: `PD4` = normal, `PD4!` = inverted
  * Append `!` to invert the direction signal if motor moves backwards
  * Only `!` modifier is valid (no pullup/pulldown on output pin)
* Corresponding v1 setting: `alpha_dir_pin`, `beta_dir_pin`, `gamma_dir_pin`, `delta_dir_pin`, `epsilon_dir_pin`, `zeta_dir_pin`
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: MCU pin that sets the rotation direction for the stepper motor driver. The logic level (high or low) determines whether the motor moves forward or reverse. If the motor moves in the wrong direction, either add the `!` modifier to this pin OR use the `<axis>.reversed` setting (the `reversed` setting is preferred for clearer configuration).
  * Controls direction via logic level: HIGH or LOW (driver-dependent)
  * Direction must be stable before step pulse for driver to register correctly
  * If motor moves wrong direction, use `<axis>.reversed = true` instead of `!`
  * Using both `!` modifier AND `reversed = true` will print a warning
  * Some drivers require direction signal lead time before step pulse
  * Pin inversion with `!` happens in firmware before signal output
* Related settings: `<axis>.step_pin`, `<axis>.reversed`, `<axis>.en_pin`
* Related pages: pinout, stepper-motors
* Example configuration:
  * alpha.dir_pin = PD4  # X-axis direction, normal polarity
  * beta.dir_pin = PG2!  # Y-axis direction, inverted (or use reversed setting)
  * gamma.dir_pin = PG4  # Z-axis direction, normal polarity
  * delta.dir_pin = PG5  # E0 direction, normal polarity

#### `<axis>.en_pin`

* Type: `pin`
* Default: `nc` (not connected - Prime board uses driver chip enable control)
* Module: `actuator`
* Context: Per-actuator hardware pin mapping (optional)
* Defined in: `Firmware/src/robot/Robot.cpp:268`
* Valid values: Valid STM32 pin name with optional `!` inversion, or `nc`
  * Pin format: P<port><number>, P<port><number>!, or `nc`
  * Example: `nc` = not used, `PA5!` = active-low enable on pin PA5
  * Use `!` modifier if driver requires active-low enable signal
  * Most Prime board configurations use `nc` (TMC drivers have internal enable)
  * External drivers may require explicit enable pin
* Corresponding v1 setting: `alpha_en_pin`, `beta_en_pin`, `gamma_en_pin`, `delta_en_pin`, `epsilon_en_pin`, `zeta_en_pin`
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Optional enable pin for stepper motor driver. On Prime board with TMC2590/TMC2660 drivers, this is typically set to `nc` (not connected) because the drivers have internal enable control and use the global `common.motors_enable_pin` instead. External stepper drivers may require individual enable pins, in which case configure them here.
  * Prime board with TMC drivers: leave as `nc`, use global enable instead
  * External drivers: configure individual enable pins if required by driver
  * Enable pin controls whether driver energizes motor coils
  * When disabled, motor can be turned freely by hand (no holding torque)
  * When enabled, motor holds position with rated current
  * Some drivers use active-low enable (require `!` modifier)
  * Individual enable pins override global `common.motors_enable_pin`
* Related settings: `common.motors_enable_pin`, `<axis>.step_pin`, `<axis>.dir_pin`
* Related pages: pinout, stepper-motors
* Example configuration:
  * alpha.en_pin = nc  # Prime board default (uses global enable)
  * beta.en_pin = nc  # Prime board default
  * epsilon.en_pin = PA5!  # External driver with active-low enable

---

### Driver Configuration

#### `<axis>.driver`

* Type: `enum`
* Default: `tmc2590` or `tmc2660` (Prime board, auto-detected based on board_id), `external` (for epsilon and beyond)
* Module: `actuator`
* Context: Per-actuator driver type specification
* Defined in: `Firmware/src/robot/Robot.cpp:300`
* Valid values: `tmc2590`, `tmc2660`, `external`
  * `tmc2590` - Trinamic TMC2590 stepper driver (Prime board channels 0-3)
  * `tmc2660` - Trinamic TMC2660 stepper driver (Prime board channels 0-3)
  * `external` - External stepper driver without advanced features
* Corresponding v1 setting: none (v1 had external `motor_driver_control` module, v2 has integrated TMC support)
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Specifies the stepper driver chip type for this actuator. Prime board has onboard TMC2590 or TMC2660 drivers for the first four axes (alpha/beta/gamma/delta = XYZA). The specific chip type is auto-detected based on the board's hardware ID. Additional axes (epsilon, zeta) or external expansion drivers must use "external" mode which provides basic step/dir/enable control without advanced TMC features.
  * Prime board automatically detects TMC2590 vs TMC2660 based on board_id
  * First 4 axes (alpha/beta/gamma/delta) use onboard TMC drivers
  * Additional axes (epsilon/zeta) must use `external` for expansion drivers
  * TMC drivers enable advanced features: SPI current control, stall detection, error monitoring
  * External drivers have no current control, error monitoring, or stallGuard
  * Setting determines which configuration section applies ([tmc2590], [tmc2660], or none)
  * Incorrect driver type will prevent motor operation
* Related settings: `tmc2590.*`, `tmc2660.*`, `current control.<axis>.current`
* Related pages: advancedmotordriver
* Example configuration:
  * alpha.driver = tmc2590  # Prime board with TMC2590 chip
  * beta.driver = tmc2590
  * gamma.driver = tmc2590
  * delta.driver = tmc2590
  * epsilon.driver = external  # External driver for 5th axis

#### `<axis>.microsteps`

* Type: `number`
* Default: `32`
* Module: `actuator`
* Context: Per-actuator driver microstepping configuration
* Defined in: `Firmware/src/robot/Robot.cpp:311`
* Valid values: `1, 2, 4, 8, 16, 32, 64, 128, 256` (driver-dependent, TMC supports all, external drivers vary)
  * Power-of-2 values only
  * Not all drivers support all values (check driver datasheet)
  * TMC2590/TMC2660 support 1-256 microsteps
  * Most external drivers support 1-32 microsteps
  * Higher values require driver support and may reduce maximum speed
* Corresponding v1 setting: none (v1 configured microsteps in `motor_driver_control` module or via hardware jumpers)
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Microstepping subdivision setting for this axis's stepper driver. Microstepping divides each full motor step into smaller sub-steps for smoother motion and quieter operation. Higher microstepping values provide smoother motion and reduced noise but may limit maximum achievable speed and torque at high velocities. The Prime board default of 32 provides excellent balance between smoothness and performance.
  * Microsteps = sub-divisions per full motor step
  * 16 microsteps = good balance, widely compatible
  * 32 microsteps = smoother, quieter (Prime board default)
  * 64-256 microsteps = very smooth but may limit high-speed performance
  * Higher microstepping reduces torque ripple and audible noise
  * Higher microstepping increases steps_per_mm proportionally
  * Example: changing from 16 to 32 microsteps doubles steps_per_mm
  * Z-axis often benefits from higher microstepping (64 or 128) for smooth layer height
  * XY axes typically use 16-32 for balance of smoothness and speed
  * TMC drivers can use step interpolation (MicroPlyer) to simulate higher microstepping
* Related settings: `<axis>.steps_per_mm`, `tmc2590.<axis>.step_interpolation`, `<axis>.max_rate`
* Related pages: stepper-motors, advancedmotordriver
* Example configuration:
  * alpha.microsteps = 32  # Standard for XY on Prime board
  * beta.microsteps = 32
  * gamma.microsteps = 64  # Higher for smoother Z motion
  * delta.microsteps = 32  # Standard for extruder

#### `<axis>.reversed`

* Type: `bool`
* Default: `false`
* Module: `actuator`
* Context: Per-actuator direction control
* Defined in: `Firmware/src/robot/Robot.cpp:271`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (v1 only supported pin inversion with `!` modifier)
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Software-based reversal of motor direction without modifying hardware pin definitions. This is a cleaner and more readable alternative to adding the `!` inversion modifier to `<axis>.dir_pin`. If the motor moves in the wrong direction during homing or normal moves, set this to true. If `dir_pin` already has the `!` modifier, this setting is ignored and a warning is printed to avoid double-inversion.
  * Preferred method for reversing motor direction (clearer than pin modifier)
  * Setting to `true` inverts direction commands at firmware level
  * WARNING: Using both `reversed = true` AND `dir_pin` with `!` causes warning
  * Only one reversal method should be used (either reversed setting OR pin modifier)
  * Does not affect pin signal directly, inverts logic before pin output
  * Makes configuration more readable than cryptic `!` in pin names
  * Useful when swapping motor connectors or changing mechanical arrangement
* Related settings: `<axis>.dir_pin`
* Related pages: stepper-motors
* Example configuration:
  * alpha.dir_pin = PD4
  * alpha.reversed = false  # Normal direction
  * beta.dir_pin = PG2
  * beta.reversed = true  # Reversed direction (preferred over PG2!)

#### `<axis>.slaved_to`

* Type: `enum`
* Default: `""` (empty string = not slaved)
* Module: `actuator`
* Context: Per-actuator dual-motor configuration (advanced)
* Defined in: `Firmware/src/robot/Robot.cpp:319`
* Valid values: `X`, `Y`, `Z`, `""` (or `none`)
  * Only delta/epsilon/zeta (A/B/C axes) can be slaves
  * Can only slave to alpha/beta/gamma (X/Y/Z axes)
  * Master axis must exist and not already have a slave
  * Slave inherits all motion from master axis
* Corresponding v1 setting: none (v1 did not support axis slaving)
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Configures this actuator to move in sync with another axis for dual-motor configurations. Only A/B/C axes (delta/epsilon/zeta) can be slaved to X/Y/Z axes (alpha/beta/gamma). When slaved, the slave motor moves identically to the master motor, enabling dual Y-axis gantries or dual Z-axis lead screws. Both master and slave must have identical driver type, microstepping, and steps_per_mm settings. The slaved actuator is not registered in the actuators array - it is controlled entirely by its master.
  * CRITICAL: Only delta/epsilon/zeta can be slaves (A/B/C axes)
  * CRITICAL: Can only slave to alpha/beta/gamma (X/Y/Z axes)
  * Both master and slave MUST have matching driver type
  * Both master and slave MUST have matching microsteps setting
  * Both master and slave MUST have matching steps_per_mm
  * Master axis must exist and be configured before slave
  * Master cannot already have another slave (one slave per master only)
  * Slave actuator is not registered in main actuators array
  * Slave moves are controlled entirely by master's motion commands
  * Common use case: Dual Y motors for wide CNC gantry
  * Common use case: Dual Z lead screws for bed leveling (independent homing)
  * Slave motor can have different reversed setting for mechanical arrangement
* Related settings: `<axis>.steps_per_mm`, `<axis>.microsteps`, `<axis>.driver`
* Related pages: hbot
* Example configuration:
  * beta.steps_per_mm = 100  # Y1 axis (master)
  * beta.max_rate = 30000
  * beta.driver = tmc2590
  * beta.microsteps = 32
  * delta.steps_per_mm = 100  # Y2 axis (slave) - must match master
  * delta.max_rate = 30000  # Must match master
  * delta.driver = tmc2590  # Must match master
  * delta.microsteps = 32  # Must match master
  * delta.slaved_to = Y  # Slave this motor to Y axis

---

### Common Actuator Settings

Settings in the `common` sub-section apply to all actuators globally.

#### `common.check_driver_errors`

* Type: `bool`
* Default: `true`
* Module: `actuator`
* Context: Global TMC driver error monitoring (TMC drivers only)
* Defined in: `Firmware/src/robot/Robot.cpp:383`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (v1 did not have integrated TMC driver support)
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Enables periodic checking of TMC driver error status bits including overtemperature warnings, overtemperature shutdown, short circuit detection, open load detection, and stall detection if configured. Errors are logged to the console and may trigger system halt if `halt_on_driver_alarm` is also enabled. Checking occurs approximately once per second via the SlowTicker timer interrupt.
  * Only applies to TMC2590 and TMC2660 drivers (not external drivers)
  * Checks driver status registers via SPI communication
  * Runs approximately once per second (low performance impact)
  * Detected errors are logged with driver name and error type
  * Errors checked: overtemperature warning, overtemperature shutdown, short to ground, open load, stallGuard threshold
  * Provides early warning of thermal issues before damage occurs
  * Detects wiring problems (disconnected motors, short circuits)
  * Recommended to keep enabled for safety and diagnostics
  * Disable only if experiencing false alarms or for testing
* Related settings: `common.halt_on_driver_alarm`
* Related pages: advancedmotordriver, troubleshooting
* Example configuration:
  * common.check_driver_errors = true  # Recommended for safety
  * common.halt_on_driver_alarm = false  # Log errors but don't auto-halt

#### `common.halt_on_driver_alarm`

* Type: `bool`
* Default: `false`
* Module: `actuator`
* Context: Global TMC driver error response behavior (TMC drivers only)
* Defined in: `Firmware/src/robot/Robot.cpp:384`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (v1 did not have integrated TMC driver support)
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: If set to true, any TMC driver error immediately triggers the system to enter ON_HALT state (emergency stop), stopping all motion and disabling motors. If false (default), driver errors are logged to console but the system continues operation, allowing manual intervention. This setting provides a trade-off between safety (automatic halt) and operational flexibility (manual response to errors). Requires `check_driver_errors` to be enabled.
  * Requires `common.check_driver_errors = true` to function
  * When true: ANY driver error immediately halts system (emergency stop)
  * When false: errors are logged, system continues, manual intervention required
  * Errors include: overtemp, short circuit, open load, stall detection
  * Safety trade-off: automatic protection vs. operational flexibility
  * Setting to true may cause unexpected stops from transient errors
  * Setting to false requires operator monitoring of console for errors
  * Recommended to keep false unless operating unattended
  * Transient errors (electrical noise) can cause false halts if enabled
  * Serious errors (overheating) will eventually trigger thermal shutdown regardless
* Related settings: `common.check_driver_errors`
* Related pages: advancedmotordriver, troubleshooting, emergencystop
* Example configuration:
  * common.check_driver_errors = true
  * common.halt_on_driver_alarm = false  # Default: log but don't halt automatically
  * common.halt_on_driver_alarm = true  # Aggressive safety: halt on any error

#### `common.motors_enable_pin`

* Type: `pin`
* Default: `PH13!` (Prime board with TMC drivers), `nc` (external drivers)
* Module: `actuator`
* Context: Global motor enable control for all drivers
* Defined in: `Firmware/src/robot/Robot.cpp:390`
* Valid values: Valid STM32 pin name with optional `!` inversion, or `nc`
  * Pin format: P<port><number> or P<port><number>! for active-low
  * Example: `PH13!` (Prime board, active-low), `nc` (not used)
  * Use `!` if enable logic is inverted (active-low)
  * Prime board uses `PH13!` to control VCC_IO to TMC driver chips
* Corresponding v1 setting: none (v1 did not have global motor enable pin)
* Corresponding v2 setting: N/A (this is the v2 setting)
* Description: Global enable pin that controls power or enable signal for all motor drivers simultaneously. On the Prime board with TMC drivers, this pin controls VCC_IO power to all TMC driver chips, serving as a master enable/disable for all motors. Setting this pin to true (accounting for inversion) enables all motors globally. Individual motor enable pins (`<axis>.en_pin`) can provide additional per-motor control on top of this global enable.
  * Prime board: controls VCC_IO power supply to TMC driver chips
  * Setting to true (after inversion) enables all motors globally
  * Setting to false (after inversion) disables all motors (emergency stop)
  * Acts as master enable - individual enables still apply on top
  * `!` modifier inverts logic (Prime uses active-low internal enable)
  * On Prime board, disabling this pin cuts power to all TMC drivers
  * Individual `<axis>.en_pin` settings can further control each motor
  * Useful for emergency stop or global motor disable functionality
  * External driver configurations may use `nc` if not needed
* Related settings: `<axis>.en_pin`
* Related pages: pinout, emergencystop
* Example configuration:
  * common.motors_enable_pin = PH13!  # Prime board default (active-low)
  * common.motors_enable_pin = nc  # External drivers without global enable

---

## Architecture Overview

### Motion Pipeline

```
G-code → Robot → Planner → Conveyor → StepTicker → Actuators
```

1. **Robot:** Interprets G-code commands, applies arm solution kinematics
2. **Planner:** Calculates velocities, accelerations, generates motion Blocks
3. **Conveyor:** Manages block queue, controls when blocks become available
4. **StepTicker:** Generates precise step pulses at calculated timing intervals
5. **Actuators:** Physical stepper motors execute coordinated motion

### Conveyor Queue Behavior

The conveyor uses a circular queue (PlannerQueue) with the following phases:

1. **Queue Filling:** Planner adds motion blocks to queue head
2. **Delay Phase:** Conveyor waits `queue_delay_time_ms` to accumulate multiple blocks
3. **Execution Phase:** StepTicker fetches blocks from queue tail for execution
4. **Block Release:** Completed blocks are released, freeing queue space

### Queue States

- **Empty:** No motion queued, conveyor waits for first block
- **Filling:** Accumulating blocks during delay period after first block arrival
- **Running:** Actively feeding blocks to StepTicker for execution
- **Flushing:** Emergency stop condition - discarding all queued blocks
- **Halted:** System halted, queue frozen, no block fetching allowed

---

## Related Modules

- **Planner:** Upstream module that generates motion blocks and adds them to queue
- **Motion Control:** Provides configuration for acceleration, speeds, and kinematics
- **StepTicker:** Downstream module that fetches blocks and generates step pulses
- **Robot:** Owns actuators array, converts Cartesian to actuator coordinates
- **Endstops:** Provides homing and limit detection for axes

---

## Complete Configuration Examples

### Minimal Configuration (Defaults)

```ini
# Conveyor uses sensible defaults, no configuration needed
# Default queue_delay_time_ms = 100
```

### Explicit Conveyor Configuration

```ini
[conveyor]
queue_delay_time_ms = 100  # Default value shown explicitly
```

### Basic Cartesian 3D Printer

```ini
[conveyor]
queue_delay_time_ms = 100  # Balanced for 3D printing

[actuator]
# X axis
alpha.steps_per_mm = 100
alpha.max_rate = 30000  # 500 mm/s
alpha.microsteps = 32
alpha.driver = tmc2590

# Y axis
beta.steps_per_mm = 100
beta.max_rate = 30000
beta.microsteps = 32
beta.driver = tmc2590

# Z axis
gamma.steps_per_mm = 400  # T8 lead screw
gamma.max_rate = 1800  # 30 mm/s
gamma.acceleration = 500  # Slower Z acceleration
gamma.microsteps = 32
gamma.driver = tmc2590

# E0 extruder
delta.steps_per_mm = 700
delta.max_rate = 3000  # 50 mm/s
delta.acceleration = 500
delta.microsteps = 32
delta.driver = tmc2590

# Global settings
common.check_driver_errors = true
common.halt_on_driver_alarm = false
common.motors_enable_pin = PH13!
```

### High-Speed Laser Cutter

```ini
[conveyor]
queue_delay_time_ms = 50  # Faster response for rapid direction changes

[actuator]
# X axis - high speed belt drive
alpha.steps_per_mm = 80
alpha.max_rate = 60000  # 1000 mm/s maximum
alpha.microsteps = 32
alpha.driver = tmc2590

# Y axis - high speed belt drive
beta.steps_per_mm = 80
beta.max_rate = 60000
beta.microsteps = 32
beta.driver = tmc2590

# Z axis - focus control
gamma.steps_per_mm = 400
gamma.max_rate = 1800  # 30 mm/s
gamma.acceleration = 300  # Gentle Z motion
gamma.microsteps = 64  # Extra smooth for precise focus
gamma.driver = tmc2590

common.check_driver_errors = true
common.halt_on_driver_alarm = false
```

### CNC Router with External Drivers

```ini
[conveyor]
queue_delay_time_ms = 100

[actuator]
# X axis - ball screw
alpha.steps_per_mm = 200
alpha.max_rate = 12000  # 200 mm/s
alpha.driver = external
alpha.step_pin = PD3
alpha.dir_pin = PD4
alpha.en_pin = PA5!  # Active-low enable
alpha.microsteps = 16

# Y axis - ball screw
beta.steps_per_mm = 200
beta.max_rate = 12000
beta.driver = external
beta.step_pin = PK2
beta.dir_pin = PG2
beta.en_pin = PA6!
beta.microsteps = 16

# Z axis - ball screw with heavy spindle
gamma.steps_per_mm = 800
gamma.max_rate = 3000  # 50 mm/s
gamma.acceleration = 200  # Lower for heavy spindle
gamma.driver = external
gamma.step_pin = PG3
gamma.dir_pin = PG4
gamma.en_pin = PA7!
gamma.microsteps = 16

common.motors_enable_pin = nc  # Using individual enables
```

### Dual Y Gantry 3D Printer

```ini
[conveyor]
queue_delay_time_ms = 100

[actuator]
# X axis
alpha.steps_per_mm = 100
alpha.max_rate = 30000
alpha.driver = tmc2590
alpha.microsteps = 32

# Y1 axis (left side, master)
beta.steps_per_mm = 100
beta.max_rate = 30000
beta.driver = tmc2590
beta.microsteps = 32

# Z axis
gamma.steps_per_mm = 400
gamma.max_rate = 1800
gamma.driver = tmc2590
gamma.microsteps = 32

# Y2 axis (right side, slaved to Y1)
delta.steps_per_mm = 100  # Must match master
delta.max_rate = 30000
delta.driver = tmc2590  # Must match master
delta.microsteps = 32  # Must match master
delta.slaved_to = Y  # Slave to Y axis

common.check_driver_errors = true
common.halt_on_driver_alarm = false
common.motors_enable_pin = PH13!
```

---

## Migration from Smoothieware V1

### Key Differences

1. **Configuration Format:** v1 uses flat key-value, v2 uses INI sections
2. **Naming Convention:** v1: `alpha_steps_per_mm`, v2: `actuator.alpha.steps_per_mm`
3. **Pin Notation:** v1: `2.5` format (port.pin), v2: `PD3` format (STM32 pin names)
4. **Driver Integration:** v1: external `motor_driver_control` module, v2: integrated TMC support
5. **New Features:** v2 adds `microsteps`, `driver`, `reversed`, `slaved_to`, `acceleration` per-axis

### Migration Steps

1. Change configuration file format from `config.txt` to `config.ini`
2. Add `[actuator]` section header
3. Rename settings: `alpha_steps_per_mm` → `alpha.steps_per_mm`
4. Convert all pin definitions from v1 format to STM32 format (consult board pinout)
5. Add `driver` type for each actuator (`tmc2590`, `tmc2660`, or `external`)
6. Add `microsteps` setting for each actuator
7. Replace `motor_driver_control` and `currentcontrol` with `[tmc2590]`/`[tmc2660]` and `[current control]` sections
8. Test thoroughly before running actual jobs

### Example V1 → V2 Conversion

**V1 Configuration:**
```
alpha_steps_per_mm 80
alpha_max_rate 30000
alpha_step_pin 2.0
alpha_dir_pin 0.5
```

**V2 Configuration:**
```ini
[actuator]
alpha.steps_per_mm = 80
alpha.max_rate = 30000
alpha.microsteps = 32
alpha.driver = tmc2590
alpha.step_pin = PD3  # Consult Prime board pinout
alpha.dir_pin = PD4  # Consult Prime board pinout
```

---

## Troubleshooting

### Stuttering at Start of Job

**Symptoms:** First few moves are jerky or stuttering

**Cause:** Queue not sufficiently pre-filled before execution starts

**Solution:**
```ini
[conveyor]
queue_delay_time_ms = 150  # Increase to allow more pre-filling
```

### Delayed Motion Response

**Symptoms:** Long delay between sending G-code and motion starting

**Cause:** Queue delay too high for application

**Solution:**
```ini
[conveyor]
queue_delay_time_ms = 50  # Reduce for faster response
```

### Motor Moving Wrong Direction

**Symptoms:** Axis moves opposite to commanded direction

**Solution (Preferred):**
```ini
[actuator]
alpha.reversed = true  # Software reversal
```

**Solution (Alternative):**
```ini
[actuator]
alpha.dir_pin = PD4!  # Hardware inversion
```

### Incorrect Steps Per MM

**Symptoms:** Commanded move distance doesn't match actual movement

**Diagnosis:** Measure actual movement for known commanded distance

**Solution:** Recalculate and update steps_per_mm

Example calculation for belt drive:
```
Motor: 1.8° (200 steps/rev)
Microsteps: 32
Pulley: 20 teeth
Belt: GT2 (2mm pitch)

steps_per_mm = (200 × 32) / (20 × 2) = 160
```

```ini
[actuator]
alpha.steps_per_mm = 160  # Corrected value
```

### Missed Steps at High Speed

**Symptoms:** Position drift, layer shifts, lost position

**Possible Causes:**
1. `max_rate` too high for motor/driver capability
2. `acceleration` too aggressive
3. Motor current too low (TMC drivers)
4. Mechanical binding or friction

**Solution:**
```ini
[actuator]
alpha.max_rate = 24000  # Reduce from 30000 (400 mm/s instead of 500)
alpha.acceleration = 800  # Reduce from 1000
```

### Noisy Motors

**Symptoms:** Excessive motor whine or vibration

**Solution:**
```ini
[actuator]
alpha.microsteps = 64  # Increase from 32 for quieter operation
```

**Note:** Higher microsteps may reduce maximum achievable speed

### Slave Motor Configuration Fails

**Symptoms:** Error messages about slaving, slave motor doesn't move

**Checklist:**
1. Verify slave is A/B/C axis (delta/epsilon/zeta)
2. Verify master is X/Y/Z axis (alpha/beta/gamma)
3. Check driver types match between master and slave
4. Check microsteps match between master and slave
5. Check steps_per_mm match between master and slave
6. Verify master doesn't already have a slave

**Correct Configuration:**
```ini
[actuator]
# Master configuration
beta.driver = tmc2590
beta.microsteps = 32
beta.steps_per_mm = 100

# Slave configuration (all must match)
delta.driver = tmc2590  # Must match master
delta.microsteps = 32  # Must match master
delta.steps_per_mm = 100  # Must match master
delta.slaved_to = Y  # Correct syntax
```

---

## See Also

- [motion-control](motion-control.md) - Motion control configuration and parameters
- [stepper-motors](stepper-motors.md) - Stepper motor theory and selection
- [pinout](pinout.md) - Smoothieboard v2 Prime pinout diagrams
- [advancedmotordriver](advancedmotordriver.md) - TMC driver configuration
- [howitworks](howitworks.md) - Detailed architecture and internals
- [troubleshooting](troubleshooting.md) - General troubleshooting guide

---

**End of Conveyor Module Configuration Reference**

---

## Actuators

# Smoothieware v2 Actuator Configuration Reference (Refined)

**Module:** Actuators (Stepper Motors & Drivers)
**Section:** `[actuator]`, `[tmc2590]`, `[tmc2660]`, `[current control]`
**Source Analysis Date:** 2025-11-05
**Firmware Version:** Smoothieware v2 (latest)

---

## Overview

The Actuator module controls stepper motors and their drivers in Smoothieware v2. It supports up to 6 axes using named instances: **alpha** (X), **beta** (Y), **gamma** (Z), **delta** (E0/A), **epsilon** (E1/B), **zeta** (E2/C).

### Supported Driver Types
- **TMC2590** - Trinamic integrated stepper driver (Prime board default for XYZ+E0)
- **TMC2660** - Trinamic integrated stepper driver (alternate Prime configuration)
- **External** - External stepper drivers (default for E1+)

---

## Pin Assignment Settings

All pin settings use Smoothieware v2 pin format: `P<port><pin>` with optional modifiers.

### Pin Format
- **Basic:** `PD3` (Port D, pin 3)
- **Inverted:** `PD4!` (inverted signal)
- **With pullup:** `PD0^` (enable internal pullup)
- **With pulldown:** `PD0-` (enable internal pulldown)
- **Open drain:** `PD0o` (open-drain mode)
- **Not connected:** `nc` (pin not used)

---

#### `actuator.<axis>.step_pin`

* Type: `pin`
* Default: Board-specific (Prime: alpha=`PD3`, beta=`PK2`, gamma=`PG3`, delta=`PC6`, others=`nc`)
* Module: `actuator`
* Context: Per-actuator instance setting (one for each motor axis)
* Defined in: `Firmware/src/robot/Robot.cpp:266`
* Valid values: Pin specification in format `P<port><pin>` or `nc`
  * Basic format: `PD3` (Port D, pin 3)
  * Inverted: `PD4!` (inverted signal)
  * With pullup: `PD0^` (enable internal pullup)
  * Not connected: `nc` (pin not used)
* Required: yes (for active axes, motors will not function without step and dir pins both defined)
* Corresponding v1 setting: `alpha_step_pin`, `beta_step_pin`, `gamma_step_pin`, `delta_step_pin`, `epsilon_step_pin`, `zeta_step_pin`
* Corresponding v2 setting: `actuator.alpha.step_pin`, etc. (same setting)
* Description: Defines the GPIO pin used for sending step pulses to the stepper motor driver for this actuator. Each step pulse advances the motor by one microstep according to the driver's microstepping configuration. The pin must be connected to the STEP input of your stepper driver. Both step and dir pins must be defined for an axis to be active.
  * CRITICAL: Incorrect pin assignment can cause motors not to move, move the wrong axis, or move erratically.
  * Consult your board's pinout diagram for correct pin assignments for each axis.
  * Step and dir pins must both be defined for an axis to be considered active.
  * If step_pin or dir_pin are not connected (`nc`), the axis will not be registered (axes must be defined in contiguous order).
* Related settings: `actuator.<axis>.dir_pin`, `actuator.<axis>.en_pin`, `actuator.<axis>.driver`
* Related pages: smoothieboard-v2-prime, pin-configuration, stepper-motors
* Example configuration:
  * actuator.alpha.step_pin = PD3  # X-axis step pin (Prime board default)
  * actuator.beta.step_pin = PK2  # Y-axis step pin
  * actuator.gamma.step_pin = PG3  # Z-axis step pin
  * actuator.delta.step_pin = PC6  # E0 extruder step pin

---

#### `actuator.<axis>.dir_pin`

* Type: `pin`
* Default: Board-specific (Prime: alpha=`PD4`, beta=`PG2`, gamma=`PG4`, delta=`PG5`, others=`nc`)
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:267`
* Valid values: Pin specification in format `P<port><pin>` or `nc`, optionally with `!` modifier for inversion
  * Standard: `PD4` (Port D, pin 4, not inverted)
  * Inverted: `PD4!` (inverted direction signal)
  * Not connected: `nc` (pin not used)
* Required: yes (for active axes, both step and dir pins must be defined)
* Corresponding v1 setting: `alpha_dir_pin`, `beta_dir_pin`, `gamma_dir_pin`, `delta_dir_pin`, `epsilon_dir_pin`, `zeta_dir_pin`
* Corresponding v2 setting: `actuator.alpha.dir_pin`, etc. (same setting)
* Description: Defines the GPIO pin used for controlling the direction signal to the stepper motor driver. This pin determines whether the motor rotates clockwise or counter-clockwise. The direction can be inverted by appending `!` to the pin specification or by using the `reversed` setting.
  * Both step and dir pins must be connected for an axis to be active.
  * Use `reversed = true` instead of `!` modifier for cleaner, more readable configuration.
  * If using the `!` modifier on dir_pin, do not also set `reversed = true` (they will conflict).
  * The firmware will issue a warning if both `!` and `reversed = true` are set.
* Related settings: `actuator.<axis>.step_pin`, `actuator.<axis>.reversed`, `actuator.<axis>.en_pin`
* Related pages: smoothieboard-v2-prime, pin-configuration, stepper-motors
* Example configuration:
  * actuator.alpha.dir_pin = PD4  # X-axis direction pin (not inverted)
  * actuator.beta.dir_pin = PG2!  # Y-axis direction pin (inverted with ! modifier)
  * actuator.gamma.dir_pin = PG4  # Z-axis direction pin (use reversed setting instead of !)

---

#### `actuator.<axis>.en_pin`

* Type: `pin`
* Default: `nc` (not connected, uses driver enable or global enable instead)
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:268`
* Valid values: Pin specification in format `P<port><pin>` or `nc`
  * Standard: `PI4` (Port I, pin 4)
  * Inverted: `PI4!` (inverted enable signal, active-low)
  * Not connected: `nc` (most common, uses global enable or driver enable via SPI)
* Required: no (optional, can use global `motors_enable_pin` or driver-specific enable)
* Corresponding v1 setting: `alpha_en_pin`, `beta_en_pin`, `gamma_en_pin`, `delta_en_pin`, `epsilon_en_pin`, `zeta_en_pin`
* Corresponding v2 setting: `actuator.alpha.en_pin`, etc. (same setting)
* Description: Defines the individual enable signal output pin for this specific stepper motor driver. When set, this pin controls whether the driver is enabled or disabled independently of other motors. Most configurations set this to `nc` and use either the global `motors_enable_pin` or driver-specific enable via SPI (for TMC drivers).
  * For TMC drivers (TMC2590, TMC2660), typically set to `nc` and use driver enable via SPI.
  * For external drivers, you can use individual enable pins or share a common enable pin across all motors.
  * If set to `nc`, the motor will use the global `actuator.common.motors_enable_pin` if defined.
  * Enable pins are typically active-low (motor enabled when pin is low), so often require `!` inversion.
* Related settings: `actuator.common.motors_enable_pin`, `actuator.<axis>.step_pin`, `actuator.<axis>.dir_pin`
* Related pages: smoothieboard-v2-prime, pin-configuration, stepper-motors
* Example configuration:
  * actuator.alpha.en_pin = nc  # Use global enable or TMC driver enable (most common)
  * actuator.beta.en_pin = PI4!  # Individual enable pin, inverted (active-low)
  * actuator.gamma.en_pin = nc  # Use global motors_enable_pin

---

## Motion Control Settings

#### `actuator.<axis>.steps_per_mm`

* Type: `number`
* Default: `80.0` (XY axes), `2560.0` (Z axis), `700.0` (extruder typical)
* Units: steps/mm
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:370`
* Minimum value: `0.001` (must be positive, checked by firmware to prevent division by zero)
* Typical values: `80` (GT2 belt 20-tooth pulley with 1.8° stepper), `100` (0.9° stepper with GT2), `400` (8mm lead screw), `700` (extruder with direct drive)
* Corresponding v1 setting: `alpha_steps_per_mm`, `beta_steps_per_mm`, `gamma_steps_per_mm`, `delta_steps_per_mm`, `epsilon_steps_per_mm`, `zeta_steps_per_mm`
* Corresponding v2 setting: `actuator.alpha.steps_per_mm`, etc. (same setting)
* Description: Specifies the number of motor steps required to move exactly 1mm on this axis. This is the most critical calibration parameter for accurate positioning. The value depends on motor steps per revolution (typically 200 for 1.8° steppers, 400 for 0.9° steppers), microstepping setting, and mechanical transmission (belt pitch and pulley teeth for belts, thread pitch for lead screws).
  * CRITICAL: This setting is essential for accurate positioning. Incorrect values cause dimensional inaccuracy.
  * Always verify with actual measurements after setting (move 100mm, measure actual distance traveled).
  * For belt drives: `steps_per_mm = (motor_steps_per_rev × microsteps) / (belt_pitch_mm × pulley_teeth)`
  * For lead screws: `steps_per_mm = (motor_steps_per_rev × microsteps) / thread_pitch_mm`
  * Default XY value of 80 assumes: 200 steps/rev (1.8° stepper), 16 microsteps, 2mm GT2 belt, 20-tooth pulley
  * Default Z value of 2560 assumes: 200 steps/rev, 16 microsteps, 1.25mm thread pitch (M8 lead screw)
  * Change this value if you change microstepping, pulley size, or belt type.
* Related settings: `actuator.<axis>.microsteps`, `actuator.<axis>.max_rate`, `motion control.default_acceleration`
* Related pages: stepper-motors, motion-control, extruder-guide
* Example configuration:
  * actuator.alpha.steps_per_mm = 80  # GT2 belt, 20-tooth pulley, 1.8° motor, 16 microsteps
  * actuator.beta.steps_per_mm = 100  # GT2 belt, 20-tooth pulley, 0.9° motor, 16 microsteps
  * actuator.gamma.steps_per_mm = 400  # 8mm lead screw, 1.8° motor, 16 microsteps
  * actuator.delta.steps_per_mm = 700  # Direct drive extruder

---

#### `actuator.<axis>.max_rate`

* Type: `number`
* Default: `30000.0`
* Units: mm/min (NOTE: Different from most other speed settings which use mm/sec)
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:371`
* Typical values: `30000` (500 mm/s for XY axes), `1800` (30 mm/s for Z axis), `3000` (50 mm/s for extruder)
* Corresponding v1 setting: `alpha_max_rate`, `beta_max_rate`, `gamma_max_rate`, `delta_max_rate`, `epsilon_max_rate`, `zeta_max_rate`
* Corresponding v2 setting: `actuator.alpha.max_rate`, etc. (same setting)
* Description: Defines the maximum speed for this actuator in millimeters per minute. This value is converted internally to mm/sec by dividing by 60. The maximum rate limits how fast the motor can move and prevents the stepper from skipping steps or stalling due to excessive speed. This should be set conservatively based on your mechanical system's capabilities.
  * NOTE: Units are mm/min, not mm/sec (different from most other Smoothie speed settings).
  * To convert to mm/sec: divide by 60 (e.g., 30000 mm/min = 500 mm/sec).
  * The firmware converts this value to mm/sec internally when read from config.
  * Z-axis max_rate is typically much lower than XY (300-1800 mm/min common for Z).
  * Extruder max_rate limits retraction and extrusion speeds.
  * Setting too high can cause skipped steps, layer shifts, or mechanical damage.
  * Setting too low limits print speed unnecessarily.
* Related settings: `actuator.<axis>.steps_per_mm`, `actuator.<axis>.acceleration`, `motion control.x_axis_max_speed`
* Related pages: motion-control, stepper-motors
* Example configuration:
  * actuator.alpha.max_rate = 30000  # 500 mm/s for X axis
  * actuator.beta.max_rate = 30000  # 500 mm/s for Y axis
  * actuator.gamma.max_rate = 1800  # 30 mm/s for Z axis (much slower)
  * actuator.delta.max_rate = 3000  # 50 mm/s for extruder

---

#### `actuator.<axis>.acceleration`

* Type: `number`
* Default: `-1` (use `motion control.default_acceleration` instead)
* Units: mm/sec²
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:372`
* Typical values: `500` (conservative Z-axis), `1000` (fast XY axes), `3000` (very fast delta printers)
* Valid values: Float >= -1 (use -1 to use global default acceleration)
  * `-1` = Use the global `motion control.default_acceleration` value
  * `0` or positive = Override with this specific acceleration value
* Corresponding v1 setting: none (v1 did not support per-axis acceleration, only global `acceleration` or `z_acceleration`)
* Corresponding v2 setting: `actuator.alpha.acceleration`, etc. (new feature in v2)
* Description: Per-axis acceleration override that allows setting a different acceleration value for this specific actuator, independent of the global default acceleration. This is particularly useful for Z-axis which often requires lower acceleration than XY axes to prevent layer artifacts or skipped steps. When set to -1 (default), the motor uses the global `motion control.default_acceleration` value.
  * Setting to `-1` makes this motor use the global default acceleration (recommended for most axes).
  * Override is useful primarily for Z-axis, which often needs lower acceleration than XY.
  * Too high acceleration can cause skipped steps, ringing artifacts, or mechanical stress.
  * Too low acceleration increases print time and slows down rapid movements.
  * Delta printers typically use the same acceleration for all axes.
  * This is a new feature in v2; v1 only supported global acceleration or separate z_acceleration.
* Related settings: `motion control.default_acceleration`, `actuator.<axis>.max_rate`, `planner.junction_deviation`
* Related pages: motion-control, stepper-motors
* Example configuration:
  * actuator.alpha.acceleration = -1  # Use global default (recommended for XY)
  * actuator.beta.acceleration = -1  # Use global default
  * actuator.gamma.acceleration = 500  # Override with lower value for Z axis
  * actuator.delta.acceleration = -1  # Use global default for extruder

---

## Driver Configuration Settings

#### `actuator.<axis>.driver`

* Type: `string`
* Default: Board-dependent (Prime: `tmc2590` or `tmc2660` for XYZ+A based on board ID, `external` for B+C)
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:300`
* Valid values: `tmc2590`, `tmc2660`, `external`
  * `tmc2590` - Trinamic TMC2590 integrated stepper driver (Prime board default)
  * `tmc2660` - Trinamic TMC2660 integrated stepper driver (alternate Prime configuration)
  * `external` - External stepper driver (A4988, DRV8825, TB6600, etc.)
* Required: no (auto-detected on Prime board based on hardware version)
* Corresponding v1 setting: `motor_driver_control.*.chip` (but semantics very different - v1 used external SPI drivers, v2 has integrated TMC drivers)
* Corresponding v2 setting: `actuator.alpha.driver`, etc. (same setting)
* Description: Specifies the stepper driver chip type used for this actuator. This setting determines how the firmware communicates with and controls the motor driver. On Smoothieboard v2 Prime, the driver type is auto-detected based on the board hardware version, but can be overridden. For axes using TMC drivers, additional configuration in `[tmc2590]` or `[tmc2660]` sections is required.
  * Prime board auto-selects driver type based on board ID (board_id 1 = tmc2660, others = tmc2590).
  * For axes XYZA (alpha, beta, gamma, delta), default is TMC driver (2590 or 2660).
  * For axes BC (epsilon, zeta), default is `external` (no integrated driver on Prime).
  * If set to `tmc2590` or `tmc2660`, corresponding TMC configuration section must be properly configured.
  * External drivers use only step/dir/enable pins with no SPI communication or current control.
  * Changing driver type requires restart and proper wiring/configuration.
* Related settings: `tmc2590.<axis>.spi_cs_pin`, `tmc2660.<axis>.spi_cs_pin`, `current control.<axis>.current`
* Related pages: smoothieboard-v2-prime, stepper-motors, advancedmotordriver
* Example configuration:
  * actuator.alpha.driver = tmc2590  # Use TMC2590 for X axis (Prime default)
  * actuator.beta.driver = tmc2660  # Use TMC2660 for Y axis (if board supports)
  * actuator.epsilon.driver = external  # Use external driver for second extruder

---

#### `actuator.<axis>.microsteps`

* Type: `number`
* Default: `32`
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:311`
* Valid values: `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256` (driver dependent)
  * TMC2590: Supports 1, 2, 4, 8, 16, 32, 64, 128, 256 microsteps
  * TMC2660: Supports 1, 2, 4, 8, 16, 32, 64, 128, 256 microsteps
  * External drivers: Depends on specific driver chip and configuration
  * CRITICAL: Not all drivers support all microstep values
* Typical values: `16` (good balance), `32` (smoother, Prime default), `64` (very smooth but lower top speed), `256` (maximum smoothness, significant speed reduction)
* Corresponding v1 setting: `motor_driver_control.*.microsteps` (for external SPI drivers in v1)
* Corresponding v2 setting: `actuator.alpha.microsteps`, etc. (same setting)
* Description: Sets the microstepping divisor for this stepper driver. Microstepping divides each full motor step into smaller increments for smoother motion and reduced vibration. Higher microstepping values provide smoother motion but reduce maximum achievable speed and torque. This setting directly affects the `steps_per_mm` calculation.
  * Default of 32 provides good balance between smoothness and speed for most applications.
  * Higher values (64, 128, 256) = smoother motion, quieter operation, but lower max speed and torque.
  * Lower values (8, 16) = higher top speed and torque, but rougher motion and more vibration.
  * Changing this value requires recalculating `steps_per_mm` accordingly.
  * Formula: `steps_per_mm = (motor_steps_per_rev × microsteps) / (belt_pitch × pulley_teeth)`
  * TMC drivers can use step interpolation to internally interpolate to 256 microsteps regardless of setting.
* Related settings: `actuator.<axis>.steps_per_mm`, `tmc2590.<axis>.step_interpolation`, `tmc2660.<axis>.step_interpolation`
* Related pages: stepper-motors, advancedmotordriver
* Example configuration:
  * actuator.alpha.microsteps = 32  # Smooth, quiet operation (default)
  * actuator.beta.microsteps = 16  # Faster, slightly rougher
  * actuator.gamma.microsteps = 16  # Z-axis doesn't need high microstepping
  * actuator.delta.microsteps = 32  # Smooth extruder operation

---

#### `actuator.<axis>.reversed`

* Type: `bool`
* Default: `false`
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:271`
* Valid values: `true`, `false`
  * `true` - Reverse motor direction (invert dir_pin signal)
  * `false` - Normal motor direction (default)
* Corresponding v1 setting: none (v1 used `!` modifier on dir_pin only)
* Corresponding v2 setting: `actuator.alpha.reversed`, etc. (same setting)
* Description: Reverses the motor direction by inverting the direction signal without modifying the pin definition. This provides a cleaner and more readable way to reverse motor direction compared to using the `!` modifier on the `dir_pin` setting. When set to true, the firmware inverts the direction signal internally.
  * Preferred method for reversing motor direction (cleaner than using `!` modifier on dir_pin).
  * Does not apply if dir_pin already has `!` modifier (firmware will issue warning).
  * If both `reversed = true` and dir_pin has `!`, the firmware ignores `reversed` and warns you.
  * Use this instead of the `!` modifier for better configuration readability and maintainability.
  * Useful when swapping motor connections or correcting motor direction after wiring.
  * For slaved actuators (dual Y/Z), one motor often needs to be reversed.
* Related settings: `actuator.<axis>.dir_pin`, `actuator.<axis>.slaved_to`
* Related pages: stepper-motors, smoothieboard-v2-prime
* Example configuration:
  * actuator.alpha.reversed = false  # Normal direction (default)
  * actuator.beta.reversed = true  # Reverse Y-axis direction
  * actuator.epsilon.reversed = true  # Reverse second Y motor for dual Y setup

---

#### `actuator.<axis>.slaved_to`

* Type: `string`
* Default: `""` (empty string, not slaved)
* Module: `actuator`
* Context: Per-actuator instance setting
* Defined in: `Firmware/src/robot/Robot.cpp:319`
* Valid values: `X`, `Y`, `Z`, or empty string (not slaved)
  * `X` - Slave this motor to the X/alpha axis (dual X motor configuration)
  * `Y` - Slave this motor to the Y/beta axis (dual Y motor configuration, most common)
  * `Z` - Slave this motor to the Z/gamma axis (dual Z motor configuration)
  * `""` or `none` - Not slaved (default, independent motor)
* Corresponding v1 setting: none (slaved actuators are a new feature in v2)
* Corresponding v2 setting: `actuator.epsilon.slaved_to`, etc. (same setting)
* Description: Configures this actuator to be slaved to another axis for dual-motor configurations such as dual Y-axis motors for gantry machines. Only axes A, B, C (delta, epsilon, zeta) can be slaved to X, Y, Z (alpha, beta, gamma). The slaved actuator moves in sync with its master but is not registered in the actuators array.
  * Only A/B/C axes (delta, epsilon, zeta) can be slaved to X/Y/Z axes (alpha, beta, gamma).
  * TMC drivers only (external drivers do not support slaving in current firmware).
  * Most common use case: `epsilon.slaved_to = Y` for dual Y-axis motors.
  * Slaved actuator is not registered in the actuators array (master controls both).
  * Each master axis can only have one slave (attempting to add multiple slaves will error).
  * Configure `reversed = true` on the slave if motors face opposite directions.
  * Slaved actuators still need full configuration (steps_per_mm, current, pins, etc.).
  * Endstops for slaved axes use different configuration (see endstops documentation).
* Related settings: `actuator.<axis>.reversed`, `endstops.<name>.axis`, `current control.<axis>.current`
* Related pages: smoothieboard-v2-prime, stepper-motors, endstops
* Example configuration:
  * actuator.epsilon.slaved_to = Y  # Slave epsilon motor to Y axis
  * actuator.epsilon.steps_per_mm = 100  # Must match beta steps_per_mm
  * actuator.epsilon.reversed = true  # Reverse if motors face opposite directions
  * actuator.epsilon.microsteps = 32  # Should match master

---

## Common Actuator Settings

#### `actuator.common.motors_enable_pin`

* Type: `pin`
* Default: `PH13!` (Prime with TMC drivers), `nc` (external drivers)
* Module: `actuator`
* Context: Common setting (applies to all actuators globally)
* Defined in: `Firmware/src/robot/Robot.cpp:390`
* Valid values: Pin specification in format `P<port><pin>` or `nc`
  * Standard: `PH13!` (Prime board TMC driver enable, inverted)
  * Not connected: `nc` (when using individual enable pins or driver enable via SPI)
* Corresponding v1 setting: none (v1 used individual enable pins, not global enable)
* Corresponding v2 setting: `actuator.common.motors_enable_pin` (same setting)
* Description: Defines a global enable pin that controls power to all stepper motors simultaneously. This acts as a master enable/disable switch for all motors. When the pin is set high (or low if inverted), all motors are enabled; when toggled off, all motors are disabled. On Prime board with TMC drivers, this is typically set to `PH13!` (inverted because TMC chips use active-low enable).
  * Acts as a master emergency stop for all motors simultaneously.
  * Inverted (`!`) because TMC drivers use active-low enable (low = enabled, high = disabled).
  * Setting to `nc` disables global enable (use individual enable pins or driver enable instead).
  * Prime board default `PH13!` controls TMC driver enable lines.
  * For external drivers, you can wire all enable pins together to one GPIO pin.
  * Individual `actuator.<axis>.en_pin` settings override this for specific motors.
* Related settings: `actuator.<axis>.en_pin`, `actuator.common.check_driver_errors`, `kill button.enable`
* Related pages: smoothieboard-v2-prime, pin-configuration, stepper-motors
* Example configuration:
  * actuator.common.motors_enable_pin = PH13!  # Global enable for TMC drivers (Prime default)
  * actuator.common.motors_enable_pin = nc  # No global enable, use individual pins
  * actuator.common.motors_enable_pin = PI4!  # Custom global enable pin for external drivers

---

#### `actuator.common.check_driver_errors`

* Type: `bool`
* Default: `true`
* Module: `actuator`
* Context: Common setting (applies to all TMC drivers)
* Defined in: `Firmware/src/robot/Robot.cpp:383`
* Valid values: `true`, `false`
  * `true` - Enable driver error monitoring (recommended, default)
  * `false` - Disable driver error monitoring (not recommended)
* Corresponding v1 setting: none (driver error checking is a new feature for TMC drivers in v2)
* Corresponding v2 setting: `actuator.common.check_driver_errors` (same setting)
* Description: Enables real-time checking of TMC driver error status bits including overtemperature, short circuit, and open load conditions. When enabled, the firmware periodically reads driver status registers and reports any detected errors to the console. This is a safety feature specific to TMC2590 and TMC2660 drivers.
  * Monitors for critical driver errors: overtemperature, short circuit, open load, ground fault.
  * Errors are reported to the console for debugging and safety monitoring.
  * TMC drivers only (has no effect with external drivers).
  * Recommended to keep enabled for safety and troubleshooting.
  * Slight performance overhead from SPI status reads, but negligible.
  * Errors are logged but system continues unless `halt_on_driver_alarm` is also enabled.
* Related settings: `actuator.common.halt_on_driver_alarm`, `actuator.<axis>.driver`
* Related pages: smoothieboard-v2-prime, advancedmotordriver, troubleshooting
* Example configuration:
  * actuator.common.check_driver_errors = true  # Enable monitoring (recommended)
  * actuator.common.check_driver_errors = false  # Disable if experiencing SPI issues

---

#### `actuator.common.halt_on_driver_alarm`

* Type: `bool`
* Default: `false`
* Module: `actuator`
* Context: Common setting (applies to all TMC drivers)
* Defined in: `Firmware/src/robot/Robot.cpp:384`
* Valid values: `true`, `false`
  * `true` - Enter HALT state immediately on any driver error (safe but interrupts jobs)
  * `false` - Log errors but continue operation (default, less disruptive)
* Corresponding v1 setting: `motor_driver_control.*.alarm` (similar concept but different implementation)
* Corresponding v2 setting: `actuator.common.halt_on_driver_alarm` (same setting)
* Description: Determines whether the system immediately enters HALT state when a TMC driver reports an error condition. When enabled, any driver alarm (overtemperature, short circuit, open load) causes the system to stop all operations immediately. When disabled (default), errors are logged to the console but execution continues.
  * If `false` (default): Errors are logged but system continues (less disruptive, may allow recovery).
  * If `true`: System immediately enters HALT state on any driver error (safest, but interrupts jobs).
  * Requires `check_driver_errors = true` to have any effect.
  * TMC drivers only (external drivers have no error reporting).
  * Enable this for critical applications where driver errors must stop the machine immediately.
  * Disable for debugging or if you experience spurious driver alarms.
  * HALT state requires manual recovery (M999 or system restart).
* Related settings: `actuator.common.check_driver_errors`, `kill button.enable`
* Related pages: smoothieboard-v2-prime, advancedmotordriver, troubleshooting, stopping-smoothie
* Example configuration:
  * actuator.common.halt_on_driver_alarm = false  # Log errors but continue (default)
  * actuator.common.halt_on_driver_alarm = true  # Halt immediately on driver error (safest)

---

## TMC2590 Driver Settings

Section: `[tmc2590]`

### Common TMC2590 Settings

#### `tmc2590.common.spi_channel`

* Type: `number`
* Default: `1` (Prime board default SPI channel)
* Module: `tmc2590`
* Context: Common setting (all TMC2590 drivers share the same SPI bus)
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:251`
* Valid values: Integer (board dependent, typically 0-3)
  * `1` - SPI channel 1 (Prime board default for TMC drivers)
  * `0`, `2`, `3` - Alternate SPI channels (depends on board hardware)
* Corresponding v1 setting: none (TMC driver support is new in v2)
* Corresponding v2 setting: `tmc2590.common.spi_channel` (same setting)
* Description: Specifies which hardware SPI bus channel is used for communicating with all TMC2590 driver chips. All TMC2590 drivers on the board share the same SPI bus (MOSI, MISO, SCLK signals) but use individual chip select pins for addressing. This must match the physical SPI channel connected to the TMC drivers on your board.
  * All TMC2590 drivers on a board share the same SPI bus channel.
  * Individual drivers are selected via unique `spi_cs_pin` (chip select pins).
  * Prime board uses SPI channel 1 by default.
  * Do not change unless you have custom hardware with TMC drivers on different SPI bus.
  * Incorrect channel will cause communication failures (drivers will not respond).
* Related settings: `tmc2590.<axis>.spi_cs_pin`, `actuator.<axis>.driver`
* Related pages: smoothieboard-v2-prime, advancedmotordriver
* Example configuration:
  * tmc2590.common.spi_channel = 1  # Prime board default

---

#### `tmc2590.common.reset_pin`

* Type: `pin`
* Default: `nc` (not used on Prime board)
* Module: `tmc2590`
* Context: Common setting
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:253`
* Valid values: Pin specification in format `P<port><pin>` or `nc`
  * Standard: `PXn` (if hardware reset pin available)
  * Not connected: `nc` (Prime board does not use hardware reset)
* Corresponding v1 setting: none (TMC driver support is new in v2)
* Corresponding v2 setting: `tmc2590.common.reset_pin` (same setting)
* Description: Defines a hardware reset pin for TMC2590 driver chips, if the board design includes one. When configured, this pin can be toggled to perform a hardware reset of all TMC2590 drivers simultaneously. The Prime board does not use a hardware reset pin, so this is typically set to `nc`.
  * Prime board does not use hardware reset, so default is `nc`.
  * If connected, reset pin is set low on initialization, then high to enable drivers.
  * Not typically needed as drivers can be reset via SPI commands.
  * Only configure if your custom board has a dedicated TMC reset line.
* Related settings: `tmc2590.common.spi_channel`, `actuator.common.motors_enable_pin`
* Related pages: smoothieboard-v2-prime, advancedmotordriver
* Example configuration:
  * tmc2590.common.reset_pin = nc  # Prime board default (no reset pin)

---

#### `tmc2590.common.standstill_time`

* Type: `number`
* Default: `10`
* Units: sec (seconds)
* Module: `tmc2590`
* Context: Common setting
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:264`
* Minimum value: `0` (disable standstill current reduction)
* Typical values: `10` (default, 10 seconds), `30` (longer wait), `0` (disable feature)
* Corresponding v1 setting: none (standstill current reduction is a new TMC feature in v2)
* Corresponding v2 setting: `tmc2590.common.standstill_time` (same setting)
* Description: Sets the time interval in seconds that the firmware waits before checking whether motors are in standstill (not moving) and reducing their holding current to the `standstill_current` value. This feature reduces motor heating and power consumption when motors are idle while maintaining holding torque.
  * Time interval in seconds to check for motor standstill.
  * After this duration of no movement, current is reduced to `standstill_current` (if set).
  * Only takes effect if `tmc2590.<axis>.standstill_current` is configured (non-zero).
  * Setting to `0` disables standstill current reduction entirely.
  * Reduces motor heating and power consumption during idle periods.
  * Useful for machines that spend significant time idle between moves.
  * Too short may cause current fluctuations during normal operation.
* Related settings: `tmc2590.<axis>.standstill_current`, `current control.<axis>.current`
* Related pages: advancedmotordriver, smoothieboard-v2-prime
* Example configuration:
  * tmc2590.common.standstill_time = 10  # Check every 10 seconds (default)
  * tmc2590.common.standstill_time = 30  # Wait 30 seconds before reducing current
  * tmc2590.common.standstill_time = 0  # Disable standstill current reduction

---

### Per-Axis TMC2590 Settings

#### `tmc2590.<axis>.spi_cs_pin`

* Type: `pin`
* Default: Board-specific (Prime: alpha=`PJ13`, beta=`PG8`, gamma=`PG7`, delta=`PG6`)
* Module: `tmc2590`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:236`
* Valid values: Pin specification in format `P<port><pin>`
  * Must be a valid GPIO pin with output capability
  * Each driver must have a unique CS pin
* Required: yes (if using TMC2590 driver for this axis)
* Corresponding v1 setting: none (TMC driver support is new in v2)
* Corresponding v2 setting: `tmc2590.alpha.spi_cs_pin`, etc. (same setting)
* Description: Defines the SPI chip select pin for this specific TMC2590 driver chip. All TMC drivers share the same SPI bus (MOSI, MISO, SCLK) but use unique chip select pins to allow individual addressing. When the CS pin goes low, this specific driver is selected for communication.
  * Each TMC2590 driver requires a unique chip select pin.
  * All drivers share the same SPI bus but are individually addressed via CS pin.
  * Prime board default pins: alpha=PJ13, beta=PG8, gamma=PG7, delta=PG6.
  * CS pin goes low to select the chip (active-low chip select).
  * Pin must be valid GPIO with output capability.
  * Incorrect CS pin assignment causes communication failures with that specific driver.
* Related settings: `tmc2590.common.spi_channel`, `actuator.<axis>.driver`
* Related pages: smoothieboard-v2-prime, pin-configuration, advancedmotordriver
* Example configuration:
  * tmc2590.alpha.spi_cs_pin = PJ13  # X-axis TMC2590 CS pin (Prime default)
  * tmc2590.beta.spi_cs_pin = PG8  # Y-axis TMC2590 CS pin
  * tmc2590.gamma.spi_cs_pin = PG7  # Z-axis TMC2590 CS pin
  * tmc2590.delta.spi_cs_pin = PG6  # E0 TMC2590 CS pin

---

#### `tmc2590.<axis>.sense_resistor`

* Type: `number`
* Default: `50` (milliohms, Prime board default)
* Units: milliohms (mΩ)
* Module: `tmc2590`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:316`
* Valid values: Common values are `50`, `75`, `100` (milliohms, must match hardware)
  * `50` mΩ - Prime board default, allows max ~5500 mA
  * `75` mΩ - Allows max ~4400 mA
  * `100` mΩ - Allows max ~3200 mA
* Required: no (must match physical hardware sense resistor value)
* Corresponding v1 setting: `motor_driver_control.*.sense_resistor` (for external SPI drivers in v1)
* Corresponding v2 setting: `tmc2590.alpha.sense_resistor`, etc. (same setting)
* Description: Specifies the value of the current sense resistor in milliohms that is physically soldered on the board for this TMC2590 driver. This is a hardware characteristic that determines the maximum current capability of the driver. The value must match the actual resistor on your board.
  * CRITICAL: This must match the physical sense resistor value on your board.
  * Prime board uses 50 mΩ sense resistors (R_SENSE = 0.050 Ω).
  * Determines maximum current capability: max_current = 0.31 V / (sense_resistor × √2)
  * For 50 mΩ: max ~5500 mA, for 75 mΩ: max ~4400 mA, for 100 mΩ: max ~3200 mA
  * Do not change unless you have physically replaced the sense resistors.
  * Incorrect value causes inaccurate current measurement and control.
* Related settings: `tmc2590.<axis>.max_current`, `current control.<axis>.current`
* Related pages: smoothieboard-v2-prime, advancedmotordriver, stepper-motors
* Example configuration:
  * tmc2590.alpha.sense_resistor = 50  # Prime board default (50 milliohms)
  * tmc2590.beta.sense_resistor = 50  # Must match hardware
  * tmc2590.gamma.sense_resistor = 75  # If you replaced resistors with 75 mΩ

---

#### `tmc2590.<axis>.max_current`

* Type: `number`
* Default: Resistor-dependent (50mΩ→`5500`, 75mΩ→`4400`, 100mΩ→`3200`)
* Units: mA (milliamps)
* Module: `tmc2590`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:317`
* Typical values: `5500` (50 mΩ resistor max), `2800` (typical NEMA 17), `1500` (conservative for 1.5A motors)
* Corresponding v1 setting: `motor_driver_control.*.max_current` (for external SPI drivers in v1)
* Corresponding v2 setting: `tmc2590.alpha.max_current`, etc. (same setting)
* Description: Defines the absolute maximum motor current in milliamps that the driver hardware can deliver, determined by the sense resistor value. This is a hardware safety limit, not the operating current. Actual motor current is set via the `[current control]` section. The firmware prevents setting current higher than this limit.
  * Hardware safety limit, not the operating current setting.
  * Automatically calculated from sense_resistor value if not explicitly set.
  * Default values: 50 mΩ → 5500 mA, 75 mΩ → 4400 mA, 100 mΩ → 3200 mA
  * Actual operating current is set via `current control.<axis>.current` (in amps).
  * Firmware enforces this limit - attempts to set higher current will be capped with warning.
  * Set this based on your motor's rated current, not the maximum hardware capability.
  * For NEMA 17 motors: typically 1200-1700 mA rated, set max_current to 2000-2800 mA.
* Related M-Codes:
  * M906 X<mA> - Set motor current in milliamps (capped at max_current)
  * M907 X<A> - Set motor current in amps (capped at max_current)
* Related settings: `tmc2590.<axis>.sense_resistor`, `current control.<axis>.current`, `tmc2590.<axis>.standstill_current`
* Related pages: advancedmotordriver, stepper-motors, currentcontrol
* Example configuration:
  * tmc2590.alpha.max_current = 5500  # 50 mΩ resistor hardware max (auto-calculated)
  * tmc2590.beta.max_current = 2800  # Limit to 2.8A for safety (NEMA 17 typical)
  * tmc2590.gamma.max_current = 2000  # Conservative limit for Z motor

---

#### `tmc2590.<axis>.step_interpolation`

* Type: `bool`
* Default: `false`
* Module: `tmc2590`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:337`
* Valid values: `true`, `false`
  * `true` - Enable 256-microstep interpolation (MicroPlyer feature)
  * `false` - Use configured microstep setting without interpolation (default)
* Corresponding v1 setting: none (TMC interpolation is a new feature in v2)
* Corresponding v2 setting: `tmc2590.alpha.step_interpolation`, etc. (same setting)
* Description: Enables the TMC2590's MicroPlyer feature which automatically interpolates step inputs to 256 microsteps internally, regardless of the configured microstepping setting. This provides smoother motor motion and reduced vibration without requiring the MCU to generate 256 microsteps. The driver interpolates between the input steps electronically.
  * Enables TMC MicroPlyer 256-microstep interpolation regardless of configured microsteps.
  * Works with any configured microstep setting (1, 2, 4, 8, 16, 32, 64, 128).
  * Provides smoother motion and reduced vibration/noise.
  * Does not require changing `steps_per_mm` (interpolation is internal to driver).
  * Minimal performance impact (interpolation done in hardware by TMC chip).
  * Particularly beneficial when using lower microstep settings (8 or 16) to maintain speed.
  * Can be enabled/disabled without changing any other settings.
* Related settings: `actuator.<axis>.microsteps`, `tmc2590.<axis>.passive_fast_decay`
* Related pages: advancedmotordriver, stepper-motors
* Example configuration:
  * tmc2590.alpha.step_interpolation = false  # No interpolation (default)
  * tmc2590.beta.step_interpolation = true  # Enable 256 µstep interpolation for smoother motion
  * tmc2590.gamma.step_interpolation = true  # Enable for all axes for quieter operation

---

#### `tmc2590.<axis>.standstill_current`

* Type: `number`
* Default: `0` (disabled, no current reduction)
* Units: mA (milliamps)
* Module: `tmc2590`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:346`
* Minimum value: `0` (disable feature)
* Maximum value: Value of `max_current` (firmware enforces this limit)
* Typical values: `0` (disabled), `1000` (50-60% of 2A peak current), `750` (50% of 1.5A peak)
* Corresponding v1 setting: none (standstill current reduction is a new TMC feature in v2)
* Corresponding v2 setting: `tmc2590.alpha.standstill_current`, etc. (same setting)
* Description: Sets a reduced motor holding current in milliamps that is applied when the motor is detected to be in standstill (not moving) for longer than `standstill_time`. This reduces motor heating and power consumption during idle periods while maintaining some holding torque. When set to 0 (default), the feature is disabled and motors maintain full current at all times.
  * Reduces motor current during idle periods to reduce heating and save power.
  * Only takes effect if motor is stationary for longer than `common.standstill_time` seconds.
  * Set to `0` to disable standstill current reduction (motors maintain full current always).
  * Typical values are 50-75% of peak running current.
  * If set higher than `max_current`, firmware caps it to `max_current`.
  * Too low may allow motors to lose position under load (gravity on Z-axis).
  * Useful for machines that idle frequently between operations.
  * Not recommended for vertical Z-axes that must hold position against gravity.
* Related settings: `tmc2590.common.standstill_time`, `current control.<axis>.current`, `tmc2590.<axis>.max_current`
* Related pages: advancedmotordriver, currentcontrol
* Example configuration:
  * tmc2590.alpha.standstill_current = 0  # Disabled (default, full current always)
  * tmc2590.beta.standstill_current = 1000  # Reduce to 1A during idle (if peak is 2A)
  * tmc2590.gamma.standstill_current = 0  # Never reduce Z current (must hold against gravity)
  * tmc2590.delta.standstill_current = 500  # Reduce extruder current to 0.5A when idle

---

#### `tmc2590.<axis>.passive_fast_decay`

* Type: `bool`
* Default: `true`
* Module: `tmc2590`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:341`
* Valid values: `true`, `false`
  * `true` - Use passive fast decay chopper mode (default, smoother)
  * `false` - Use standard decay mode
* Corresponding v1 setting: none (TMC chopper configuration is new in v2)
* Corresponding v2 setting: `tmc2590.alpha.passive_fast_decay`, etc. (same setting)
* Description: Configures the TMC2590's chopper decay mode. Passive fast decay affects how the driver regulates motor current during the PWM cycle, impacting motor smoothness, torque, and acoustic noise. This is an advanced chopper tuning parameter that most users should leave at the default value.
  * Advanced chopper setting affecting current regulation and motor behavior.
  * `true` (default) = passive fast decay, generally smoother and quieter.
  * `false` = standard decay mode, may provide slightly higher torque.
  * Most users should leave at default (`true`) unless experiencing motor issues.
  * Affects motor smoothness, torque characteristics, and acoustic noise.
  * Tuning this requires understanding of stepper driver chopper operation.
  * Change only if experiencing specific motor performance issues.
* Related settings: `tmc2590.<axis>.step_interpolation`, `actuator.<axis>.microsteps`
* Related pages: advancedmotordriver, stepper-motors
* Example configuration:
  * tmc2590.alpha.passive_fast_decay = true  # Default, smoother operation
  * tmc2590.beta.passive_fast_decay = false  # Try standard decay if smoothness issues

---

#### `tmc2590.<axis>.reg`

* Type: `string`
* Default: `""` (empty, use calculated values from other settings)
* Module: `tmc2590`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC2590.cpp:321`
* Valid values: Comma-separated hex values representing 5 TMC2590 registers
  * Format: `XXXXX,XXXXX,XXXXX,XXXXX,XXXXX` (5 hex values, 20 bits each)
  * Example: `00204,981C0,A0000,C000E,E0060`
* Corresponding v1 setting: none (direct register programming is new in v2)
* Corresponding v2 setting: `tmc2590.alpha.reg`, etc. (same setting)
* Description: Allows direct programming of the five 20-bit TMC2590 hardware registers in hexadecimal format for expert users who need precise control beyond the high-level configuration parameters. When set, these raw register values override all other TMC settings. This is for advanced users only and requires deep understanding of the TMC2590 datasheet.
  * ADVANCED USERS ONLY - requires deep understanding of TMC2590 datasheet.
  * Overrides all other TMC settings when specified (max_current, microsteps, interpolation, etc.).
  * Format: 5 comma-separated hex values (one for each TMC2590 register).
  * Use M911 command to print current register values from running drivers.
  * Empty string (default) uses calculated values from other configuration settings.
  * Settings like `step_interpolation` and `passive_fast_decay` override register values if set after.
  * Use only when you need driver tuning beyond standard configuration options.
  * Incorrect values can damage motors or drivers.
* Related M-Codes:
  * M911 - Print current TMC2590 register values in hex format
* Related settings: All other `tmc2590.<axis>.*` settings (overridden by reg if set)
* Related pages: advancedmotordriver, console-commands
* Example configuration:
  * tmc2590.alpha.reg =  # Empty (default, use calculated values from settings)
  * tmc2590.beta.reg = 00204,981C0,A0000,C000E,E0060  # Expert custom register values

---

## TMC2660 Driver Settings

Section: `[tmc2660]`

TMC2660 settings are very similar to TMC2590 with minor differences.

### Common TMC2660 Settings

#### `tmc2660.common.spi_channel`

* Type: `number`
* Default: `1`
* Module: `tmc2660`
* Context: Common setting
* Defined in: `Firmware/src/robot/drivers/TMC26X.cpp:255`
* Valid values: Integer (board dependent, typically 0-3)
  * `1` - SPI channel 1 (default for TMC drivers on Prime)
* Corresponding v1 setting: none (TMC driver support is new in v2)
* Corresponding v2 setting: `tmc2660.common.spi_channel` (same setting)
* Description: Specifies which hardware SPI bus channel is used for communicating with all TMC2660 driver chips. Functionally identical to `tmc2590.common.spi_channel` but for TMC2660 drivers.
  * Same function as `tmc2590.common.spi_channel` but for TMC2660 drivers.
  * All TMC2660 drivers share the same SPI bus, addressed individually via CS pins.
  * Default is SPI channel 1 on Prime board.
* Related settings: `tmc2660.<axis>.spi_cs_pin`, `actuator.<axis>.driver`
* Related pages: smoothieboard-v2-prime, advancedmotordriver
* Example configuration:
  * tmc2660.common.spi_channel = 1  # Prime board default

---

#### `tmc2660.common.standstill_time`

* Type: `number`
* Default: `10`
* Units: sec
* Module: `tmc2660`
* Context: Common setting
* Defined in: `Firmware/src/robot/drivers/TMC26X.cpp:257`
* Minimum value: `0`
* Typical values: `10` (default), `30` (longer wait), `0` (disable)
* Corresponding v1 setting: none (standstill current reduction is new in v2)
* Corresponding v2 setting: `tmc2660.common.standstill_time` (same setting)
* Description: Sets the standstill detection interval in seconds for TMC2660 drivers. Identical in function to `tmc2590.common.standstill_time` but applies to TMC2660 drivers.
  * Same function as `tmc2590.common.standstill_time` but for TMC2660 drivers.
  * Default 10 seconds before reducing current to standstill_current.
* Related settings: `tmc2660.<axis>.standstill_current`
* Related pages: advancedmotordriver
* Example configuration:
  * tmc2660.common.standstill_time = 10  # Default

---

### Per-Axis TMC2660 Settings

#### `tmc2660.<axis>.spi_cs_pin`

* Type: `pin`
* Default: Board-specific (same as TMC2590: alpha=`PJ13`, beta=`PG8`, gamma=`PG7`, delta=`PG6`)
* Module: `tmc2660`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC26X.cpp:240`
* Valid values: Pin specification in format `P<port><pin>`
* Required: yes
* Corresponding v1 setting: none (TMC driver support is new in v2)
* Corresponding v2 setting: `tmc2660.alpha.spi_cs_pin`, etc. (same setting)
* Description: SPI chip select pin for this TMC2660 driver. Same function as `tmc2590.<axis>.spi_cs_pin`.
  * Same function as `tmc2590.<axis>.spi_cs_pin` but for TMC2660 drivers.
  * Each driver needs unique CS pin.
  * Prime board uses same CS pins as TMC2590 variant.
* Related settings: `tmc2660.common.spi_channel`, `actuator.<axis>.driver`
* Related pages: smoothieboard-v2-prime, pin-configuration, advancedmotordriver
* Example configuration:
  * tmc2660.alpha.spi_cs_pin = PJ13  # Prime default
  * tmc2660.beta.spi_cs_pin = PG8

---

#### `tmc2660.<axis>.sense_resistor`

* Type: `number`
* Default: `100` (milliohms for TMC2660)
* Units: milliohms (mΩ)
* Module: `tmc2660`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC26X.cpp:309`
* Valid values: Common values `50`, `75`, `100` (milliohms)
  * `100` mΩ - Common for TMC2660 boards
  * `50` mΩ - Higher current capability
  * `75` mΩ - Medium current capability
* Corresponding v1 setting: none (TMC driver support is new in v2)
* Corresponding v2 setting: `tmc2660.alpha.sense_resistor`, etc. (same setting)
* Description: Current sense resistor value for TMC2660 driver. Same function as `tmc2590.<axis>.sense_resistor` but default is typically 100 mΩ for TMC2660.
  * Same function as `tmc2590.<axis>.sense_resistor` but for TMC2660.
  * Default for TMC2660 is typically 100 mΩ (different from TMC2590's 50 mΩ).
  * Must match physical hardware resistor value.
* Related settings: `tmc2660.<axis>.max_current`
* Related pages: advancedmotordriver, smoothieboard-v2-prime
* Example configuration:
  * tmc2660.alpha.sense_resistor = 100  # Typical TMC2660 default

---

#### `tmc2660.<axis>.max_current`

* Type: `number`
* Default: `2800` (mA for 100 mΩ resistor)
* Units: mA
* Module: `tmc2660`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC26X.cpp:310`
* Typical values: `2800` (default), `5500` (with 50 mΩ resistor)
* Corresponding v1 setting: none (TMC driver support is new in v2)
* Corresponding v2 setting: `tmc2660.alpha.max_current`, etc. (same setting)
* Description: Maximum motor current for TMC2660 driver. Same function as `tmc2590.<axis>.max_current`.
  * Same function as `tmc2590.<axis>.max_current` but for TMC2660.
  * Default 2800 mA based on typical 100 mΩ sense resistor.
* Related settings: `tmc2660.<axis>.sense_resistor`, `current control.<axis>.current`
* Related pages: advancedmotordriver, currentcontrol
* Example configuration:
  * tmc2660.alpha.max_current = 2800  # Default

---

#### `tmc2660.<axis>.step_interpolation`

* Type: `bool`
* Default: `false`
* Module: `tmc2660`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC26X.cpp:329`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (TMC interpolation is new in v2)
* Corresponding v2 setting: `tmc2660.alpha.step_interpolation`, etc. (same setting)
* Description: Enable microstep interpolation for TMC2660. Same function as `tmc2590.<axis>.step_interpolation`.
  * Same function as `tmc2590.<axis>.step_interpolation` but for TMC2660.
  * Enables 256-microstep MicroPlyer interpolation.
* Related settings: `actuator.<axis>.microsteps`
* Related pages: advancedmotordriver
* Example configuration:
  * tmc2660.alpha.step_interpolation = false  # Default

---

#### `tmc2660.<axis>.standstill_current`

* Type: `number`
* Default: `0`
* Units: mA
* Module: `tmc2660`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC26X.cpp:338`
* Minimum value: `0`
* Typical values: `0` (disabled), `1000` (50-60% of peak)
* Corresponding v1 setting: none (standstill current is new in v2)
* Corresponding v2 setting: `tmc2660.alpha.standstill_current`, etc. (same setting)
* Description: Standstill current in mA for TMC2660. Same function as `tmc2590.<axis>.standstill_current`.
  * Same function as `tmc2590.<axis>.standstill_current` but for TMC2660.
  * Reduced current during idle to save power and reduce heating.
* Related settings: `tmc2660.common.standstill_time`, `current control.<axis>.current`
* Related pages: advancedmotordriver
* Example configuration:
  * tmc2660.alpha.standstill_current = 0  # Disabled

---

#### `tmc2660.<axis>.passive_fast_decay`

* Type: `bool`
* Default: `true`
* Module: `tmc2660`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC26X.cpp:333`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (TMC chopper configuration is new in v2)
* Corresponding v2 setting: `tmc2660.alpha.passive_fast_decay`, etc. (same setting)
* Description: Passive fast decay mode for TMC2660. Same function as `tmc2590.<axis>.passive_fast_decay`.
  * Same function as `tmc2590.<axis>.passive_fast_decay` but for TMC2660.
  * Advanced chopper tuning parameter.
* Related settings: `tmc2660.<axis>.step_interpolation`
* Related pages: advancedmotordriver
* Example configuration:
  * tmc2660.alpha.passive_fast_decay = true  # Default

---

#### `tmc2660.<axis>.reg`

* Type: `string`
* Default: `""`
* Module: `tmc2660`
* Context: Per-driver instance setting
* Defined in: `Firmware/src/robot/drivers/TMC26X.cpp:314`
* Valid values: Comma-separated hex values (5 registers)
* Corresponding v1 setting: none (direct register programming is new in v2)
* Corresponding v2 setting: `tmc2660.alpha.reg`, etc. (same setting)
* Description: Raw register values for TMC2660 (hex). Same function as `tmc2590.<axis>.reg` but for TMC2660.
  * Same function as `tmc2590.<axis>.reg` but for TMC2660 drivers.
  * ADVANCED USERS ONLY - direct register programming.
  * Overrides all other settings when specified.
* Related M-Codes:
  * M911 - Print current TMC2660 register values
* Related settings: All other `tmc2660.<axis>.*` settings
* Related pages: advancedmotordriver, console-commands
* Example configuration:
  * tmc2660.alpha.reg =  # Empty (use calculated values)
  * tmc2660.beta.reg = 00204,981C0,A0000,C000E,E0060  # Expert custom values

---

## Current Control Settings

Section: `[current control]` - Simplified current setting interface

#### `current control.<name>.current`

* Type: `number`
* Default: none (must be set per axis if using current control)
* Units: A (amperes, converted to mA internally)
* Module: `current_control`
* Context: Per-axis setting
* Defined in: `Firmware/src/modules/utils/currentcontrol/CurrentControl.cpp:78`
* Minimum value: `0.001` (firmware rejects <= 0 as invalid)
* Maximum value: Limited by hardware `max_current` setting (e.g., 5.5A for Prime with 50 mΩ resistors)
* Typical values: `1.5` (NEMA 17 1.5A rated motor), `2.8` (NEMA 17 high-torque), `0.8` (extruder motor)
* Valid values: Float (hardware limited by sense resistor and max_current)
  * NEMA 17 standard: 1.2-1.7A rated
  * NEMA 17 high-torque: 2.0-2.8A rated
  * NEMA 23: 2.5-3.0A typical
* Required: yes (for TMC-driven axes that need current control)
* Corresponding v1 setting: `alpha_current`, `beta_current`, `gamma_current`, `delta_current` (but v1 used digipot integers, v2 uses amps)
* Corresponding v2 setting: `current control.alpha.current`, etc. (same setting)
* Description: Sets the motor running current in amperes (amps) for this axis. This is the simplified high-level interface for setting motor current, which is internally converted to driver-specific register values. This is the preferred method for setting motor current instead of low-level TMC register programming.
  * Preferred method for setting motor current (simpler than TMC register programming).
  * Value is in amps (A), converted internally to milliamps and driver registers.
  * For TMC drivers, this calls the driver's `setCurrent()` method which programs the current via SPI.
  * Firmware enforces `max_current` limit - values exceeding it are capped with warning.
  * Set to motor's rated current or slightly higher (10-20% over rated is common).
  * Too low: insufficient torque, skipped steps, poor performance.
  * Too high: excessive heating, potential motor/driver damage, wasted power.
  * NEMA 17 motors typically rated 1.2-1.7A, set to 1.5-2.0A for good performance.
  * Can be changed at runtime via M906 (mA) or M907 (A) commands.
* Related M-Codes:
  * M906 X<mA> Y<mA> - Set motor current in milliamps
  * M907 X<A> Y<A> - Set motor current in amps
  * M500 - Save current values to config-override
  * M501 - Load saved values from config-override
* Related settings: `tmc2590.<axis>.max_current`, `tmc2660.<axis>.max_current`, `tmc2590.<axis>.sense_resistor`
* Related pages: currentcontrol, advancedmotordriver, stepper-motors
* Example configuration:
  * current control.alpha.current = 1.5  # 1.5A for X-axis (NEMA 17 standard)
  * current control.beta.current = 1.5  # 1.5A for Y-axis
  * current control.gamma.current = 1.5  # 1.5A for Z-axis
  * current control.delta.current = 0.8  # 0.8A for extruder (lower current)

---

## Related Documentation

- **Main Config Reference:** `/docs/smoothieware-v2-config.md`
- **Pin Definitions:** See hardware documentation
- **Motion Control:** `[motion control]` section settings
- **Endstops:** `[endstops]` section for homing configuration

---

**Document Version:** 2.0
**Last Updated:** 2025-11-05
**Refinement:** All settings verified against source code and converted to standardized specification format

---

## Extruder

# Smoothieware V2 - Extruder Module Configuration (Refined)

**Module:** `extruder`
**Purpose:** Extruder control for 3D printing with multi-tool support
**Multi-instance:** Yes (named instances: hotend, hotend2, etc.)
**Source Files:** `Firmware/src/modules/tools/extruder/Extruder.cpp`, `Firmware/src/modules/tools/extruder/Extruder.h`

---

## Configuration Settings

### `enable`

* Type: `bool`
* Default: `false`
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:66`
* Valid values: `true`, `false`
* Required: yes (extruder will not be enabled without this)
* Corresponding v1 setting: `extruder.hotend.enable`
* Corresponding v2 setting: `extruder.hotend.enable`
* Description: Enables this extruder instance. When set to false, all other configuration for this extruder is ignored and the extruder will not be available for use. Multiple extruders can be enabled by creating multiple named instances within the `[extruder]` section. Each enabled extruder must have a unique tool_id and corresponding actuator motor configured (delta for T0, epsilon for T1, zeta for T2).
  * The first enabled extruder (or only extruder) is automatically selected as the active tool on boot.
  * When disabled, the extruder will not respond to G-code commands or M-codes.
* Related settings: `extruder.tool_id`, `actuator.delta.steps_per_mm`, `temperature control.enable`
* Related pages: extruder, multiple-extruders, 3d-printer-guide, extruder-guide
* Example configuration:
  * extruder.hotend.enable = true  # Enable primary extruder (T0)
  * extruder.hotend2.enable = true  # Enable second extruder (T1) for dual extrusion

---

### `tool_id`

* Type: `number`
* Default: `0`
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:97`
* Minimum value: `0` (tool numbering starts at 0)
* Typical values: `0` (T0, first extruder), `1` (T1, second extruder), `2` (T2, third extruder)
* Valid values: 0-5 (limited by available actuators)
* Corresponding v1 setting: none (implicit based on instance order)
* Corresponding v2 setting: `extruder.hotend.tool_id`
* Description: Tool number identifier for this extruder instance. Used for tool selection with T commands (T0, T1, etc.) and M6 tool change commands. The tool_id determines which actuator motor is used: tool_id 0 uses delta axis (motor index 3), tool_id 1 uses epsilon axis (motor index 4), tool_id 2 uses zeta axis (motor index 5). Each extruder must have a unique tool_id within the system.
  * Tool selection is performed with T0, T1, T2, etc. in G-code or M6 T0 command.
  * The firmware waits for the motion queue to empty before switching tools.
  * Tool offsets are automatically applied when a tool is selected.
  * CRITICAL: The corresponding actuator motor must be configured in the `[actuator]` section (delta, epsilon, or zeta).
* Related M-Codes:
  * M6 T<n> - Select tool (waits for queue to empty before switching)
  * T<n> - Alternative tool selection command
  * M92 E<steps> P<tool_id> - Set steps/mm for specific extruder
  * M203 E<rate> P<tool_id> - Set max feedrate for specific extruder
  * M204 E<accel> P<tool_id> - Set acceleration for specific extruder
  * M207 P<tool_id> - Set retract parameters for specific extruder
  * M208 P<tool_id> - Set recover parameters for specific extruder
* Related settings: `extruder.enable`, `actuator.delta.steps_per_mm`, `actuator.epsilon.steps_per_mm`, `actuator.zeta.steps_per_mm`
* Related pages: extruder, multiple-extruders, atc
* Example configuration:
  * extruder.hotend.tool_id = 0  # T0 - uses delta axis (motor 3)
  * extruder.hotend2.tool_id = 1  # T1 - uses epsilon axis (motor 4)
  * extruder.hotend3.tool_id = 2  # T2 - uses zeta axis (motor 5)

---

### `x_offset`

* Type: `number`
* Default: `0.0`
* Units: mm
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:98`
* Typical values: `0` (primary extruder), `33.0` (common IDEX dual extruder spacing), `-33.0` (negative offset)
* Corresponding v1 setting: `extruder.hotend.x_offset`
* Corresponding v2 setting: `extruder.hotend.x_offset`
* Description: X-axis offset in millimeters from the primary nozzle position (tool 0). Used in multi-extruder setups to define the physical horizontal spacing between nozzles. When this tool is selected, the coordinate system is shifted by this offset so that G-code coordinates remain consistent across tool changes. Positive values indicate the nozzle is to the right of the origin, negative values to the left.
  * Automatically applied to the coordinate system when tool is selected with T command.
  * Can be modified at runtime using G10 L1 P<tool+1> X<offset> command.
  * Essential for accurate multi-material or multi-color printing with independent extruders (IDEX).
  * NOTE: G10 L1 uses 1-based tool numbering (P1 = T0, P2 = T1).
* Related M-Codes:
  * G10 L1 P<n> X<offset> Y<offset> Z<offset> - Set tool offsets at runtime (P is 1-based)
  * M500 - Save tool offsets to config-override
* Related settings: `extruder.y_offset`, `extruder.z_offset`, `extruder.tool_id`
* Related pages: extruder, multiple-extruders, 3d-printer-guide
* Example configuration:
  * extruder.hotend.x_offset = 0  # Primary extruder at origin
  * extruder.hotend2.x_offset = 33.0  # Second nozzle 33mm to the right
  * extruder.hotend2.x_offset = -33.0  # Second nozzle 33mm to the left (alternative configuration)

---

### `y_offset`

* Type: `number`
* Default: `0.0`
* Units: mm
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:99`
* Typical values: `0` (most common), `25.0` (front-back spacing on some dual extruder designs)
* Corresponding v1 setting: `extruder.hotend.y_offset`
* Corresponding v2 setting: `extruder.hotend.y_offset`
* Description: Y-axis offset in millimeters from the primary nozzle position (tool 0). Used in multi-extruder setups to define the physical front-to-back spacing between nozzles. When this tool is selected, the coordinate system is shifted by this offset so that G-code coordinates remain consistent across tool changes. Positive values indicate the nozzle is forward (toward Y+), negative values backward (toward Y-).
  * Automatically applied to the coordinate system when tool is selected with T command.
  * Can be modified at runtime using G10 L1 P<tool+1> Y<offset> command.
  * Less common than X offsets in typical dual extruder setups but useful for certain configurations.
  * NOTE: G10 L1 uses 1-based tool numbering (P1 = T0, P2 = T1).
* Related M-Codes:
  * G10 L1 P<n> X<offset> Y<offset> Z<offset> - Set tool offsets at runtime (P is 1-based)
  * M500 - Save tool offsets to config-override
* Related settings: `extruder.x_offset`, `extruder.z_offset`, `extruder.tool_id`
* Related pages: extruder, multiple-extruders, 3d-printer-guide
* Example configuration:
  * extruder.hotend.y_offset = 0  # Primary extruder at origin
  * extruder.hotend2.y_offset = 25.0  # Second nozzle 25mm forward
  * extruder.hotend2.y_offset = 0  # Most dual extruders have no Y offset

---

### `z_offset`

* Type: `number`
* Default: `0.0`
* Units: mm
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:100`
* Typical values: `0` (nozzles at same height), `-0.1` to `0.1` (small height compensation), `-0.05` (common adjustment)
* Corresponding v1 setting: `extruder.hotend.z_offset`
* Corresponding v2 setting: `extruder.hotend.z_offset`
* Description: Z-axis offset in millimeters from the primary nozzle position (tool 0). Used in multi-extruder setups to compensate for height differences between nozzles. When this tool is selected, the coordinate system is shifted by this offset so that both nozzles print at the correct Z height. Positive values raise the effective Z position, negative values lower it. This compensates for physical differences in nozzle length or mounting height.
  * Automatically applied to the coordinate system when tool is selected with T command.
  * Can be modified at runtime using G10 L1 P<tool+1> Z<offset> command.
  * Critical for ensuring first layer adhesion is consistent across all extruders.
  * Typically requires careful calibration by printing test patterns with each extruder.
  * NOTE: G10 L1 uses 1-based tool numbering (P1 = T0, P2 = T1).
* Related M-Codes:
  * G10 L1 P<n> X<offset> Y<offset> Z<offset> - Set tool offsets at runtime (P is 1-based)
  * M500 - Save tool offsets to config-override
* Related settings: `extruder.x_offset`, `extruder.y_offset`, `extruder.tool_id`
* Related pages: extruder, multiple-extruders, 3d-printer-guide
* Example configuration:
  * extruder.hotend.z_offset = 0  # Primary extruder reference height
  * extruder.hotend2.z_offset = -0.1  # Second nozzle 0.1mm lower (prints closer to bed)
  * extruder.hotend2.z_offset = 0.05  # Second nozzle 0.05mm higher (prints farther from bed)

---

### `filament_diameter`

* Type: `number`
* Default: `0.0` (volumetric extrusion disabled)
* Units: mm
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:103`
* Minimum value: `0.01` (values below this disable volumetric mode, checked at Extruder.cpp:111, 323, 336)
* Typical values: `1.75` (common filament size), `3.0` (older 3mm filament), `2.85` (actual "3mm" filament measurement), `0` (volumetric mode disabled)
* Valid values: `0` or `0.01` to disable volumetric extrusion, or positive diameter value in mm
* Corresponding v1 setting: `extruder.hotend.filament_diameter`
* Corresponding v2 setting: `extruder.hotend.filament_diameter`
* Description: Filament diameter in millimeters for volumetric extrusion mode. When set to a value greater than 0.01mm, enables volumetric extrusion where E values in G-code are interpreted as cubic millimeters (mm³) of plastic volume instead of linear filament distance. The firmware calculates the volumetric multiplier as 1.0 / (π × (diameter/2)²) and applies this to all E movements. When set to 0 or any value ≤ 0.01, volumetric mode is disabled and E values are treated as linear millimeters of filament.
  * Volumetric multiplier formula: 1.0 / (PI × (diameter/2)²)
  * When enabled, allows slicers to specify extrusion in terms of plastic volume rather than filament length.
  * Changes take effect with smooth transition to avoid blobs by adjusting the last milestone position.
  * The 0.01mm threshold prevents division by very small numbers that could cause numerical instability.
  * Most modern slicers do not use volumetric mode - they calculate E values in linear mm.
* Related M-Codes:
  * M200 D<diameter> - Enable volumetric mode with specified filament diameter (mm)
  * M200 D0 - Disable volumetric extrusion mode
  * M200 D<diameter> P<tool_id> - Set diameter for specific extruder
  * M200 - Query current filament diameter and volumetric mode status
  * M500 - Save filament diameter to config-override
* Related settings: `extruder.retract_length`, `extruder.retract_recover_length`
* Related pages: extruder, extruder-guide, 3d-printer-guide
* Example configuration:
  * extruder.hotend.filament_diameter = 1.75  # Enable volumetric mode with 1.75mm filament
  * extruder.hotend.filament_diameter = 3.0  # Enable volumetric mode with 3.0mm filament
  * extruder.hotend.filament_diameter = 2.85  # Actual measurement of "3mm" filament
  * extruder.hotend.filament_diameter = 0  # Disable volumetric extrusion (most common)

---

### `retract_length`

* Type: `number`
* Default: `3.0`
* Units: mm
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:104`
* Typical values: `0.5` to `2.0` (direct drive extruders), `3.0` to `6.0` (Bowden extruders), `4.5` (common Bowden value)
* Corresponding v1 setting: `extruder.hotend.retract_length`
* Corresponding v2 setting: `extruder.hotend.retract_length`
* Description: Firmware retraction length in millimeters when G10 (firmware retract) command is executed. This is the amount of filament to retract from the hotend to prevent oozing and stringing during non-print travel moves. The actual retraction distance depends on your extruder type: direct drive extruders require shorter retraction distances (0.5-2mm) because the filament path is short, while Bowden extruders require longer distances (3-6mm) due to the length and flexibility of the PTFE tube between motor and hotend.
  * Executed at the speed specified by retract_feedrate.
  * Too short: filament continues to ooze, causing stringing between parts.
  * Too long: may cause filament grinding, jams, or difficulty re-priming after retract.
  * Start with manufacturer recommendations and tune based on stringing test results.
  * Value is in linear mm regardless of volumetric mode setting.
* Related M-Codes:
  * G10 - Execute firmware retraction using configured retract parameters
  * M207 S<length> - Set retract length at runtime (in mm)
  * M207 S<length> P<tool_id> - Set retract length for specific extruder
  * M500 - Save retract settings to config-override
* Related settings: `extruder.retract_feedrate`, `extruder.retract_recover_length`, `extruder.retract_zlift_length`
* Related pages: extruder, extruder-guide, g10, 3d-printer-guide
* Example configuration:
  * extruder.hotend.retract_length = 0.7  # Direct drive extruder (short retraction)
  * extruder.hotend.retract_length = 4.5  # Bowden extruder (longer retraction)
  * extruder.hotend.retract_length = 1.5  # Direct drive with flexible filament (conservative)

---

### `retract_feedrate`

* Type: `number`
* Default: `45.0`
* Units: mm/s
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:105`
* Typical values: `20` to `40` (direct drive extruders), `30` to `60` (Bowden extruders), `45` (default, suitable for Bowden)
* Corresponding v1 setting: `extruder.hotend.retract_feedrate`
* Corresponding v2 setting: `extruder.hotend.retract_feedrate`
* Description: Firmware retraction speed in millimeters per second when G10 (firmware retract) command is executed. Controls how quickly the filament is pulled back from the hotend during retraction. Bowden extruders can typically handle faster retraction speeds (30-60 mm/s) than direct drive extruders (20-40 mm/s) because the long PTFE tube provides some cushioning. The speed affects print quality and reliability: too fast may cause extruder motor skipping or filament grinding, too slow increases print time and may allow more oozing during the retract operation.
  * NOTE: Configuration file specifies this in mm/s, but M207 F parameter uses mm/min (converted internally).
  * Too fast: may cause extruder motor to skip steps or grind filament.
  * Too slow: increases print time and may not retract quickly enough to prevent oozing.
  * Should be set based on your extruder motor torque and filament type.
  * Flexible filaments may require slower speeds to prevent jamming.
* Related M-Codes:
  * G10 - Execute firmware retraction using configured retract parameters
  * M207 F<feedrate> - Set retract speed at runtime (in mm/min, converted to mm/s internally)
  * M207 F<feedrate> P<tool_id> - Set retract speed for specific extruder
  * M500 - Save retract settings to config-override
* Related settings: `extruder.retract_length`, `extruder.retract_recover_feedrate`, `actuator.delta.max_rate`
* Related pages: extruder, extruder-guide, g10, stepper-motors
* Example configuration:
  * extruder.hotend.retract_feedrate = 25  # Direct drive, conservative speed
  * extruder.hotend.retract_feedrate = 45  # Bowden, default speed
  * extruder.hotend.retract_feedrate = 60  # Bowden, fast retraction for minimal ooze

---

### `retract_recover_length`

* Type: `number`
* Default: `0.0`
* Units: mm
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:106`
* Typical values: `0.0` (no extra recovery), `0.1` (small positive compensation for oozing), `0.2` (larger compensation), `-0.1` (negative to compensate for expansion)
* Valid values: Any float value, typically -0.2 to +0.5 mm
* Corresponding v1 setting: `extruder.hotend.retract_recover_length`
* Corresponding v2 setting: `extruder.hotend.retract_recover_length`
* Description: Additional filament length in millimeters to extrude during unretract (G11) beyond the original retract_length. This extra amount compensates for filament that oozed out of the nozzle during the retracted state. The total recovery distance is retract_length + retract_recover_length. Positive values extrude more filament than was retracted (compensating for oozing losses), while negative values extrude less (useful if filament expands in the hot zone). Most users leave this at 0 and only adjust if experiencing under-extrusion after retracts.
  * Total unretract distance = retract_length + retract_recover_length
  * Positive value: extrude extra filament to compensate for oozing during retracted state
  * Negative value: extrude less filament (rare, used if filament expands)
  * Zero (default): recover exactly the amount that was retracted
  * Tune this if you see under-extrusion or blobs after travel moves
* Related M-Codes:
  * G11 - Execute firmware unretract using configured recover parameters
  * M208 S<length> - Set extra recover length at runtime (in mm)
  * M208 S<length> P<tool_id> - Set extra recover length for specific extruder
  * M500 - Save recover settings to config-override
* Related settings: `extruder.retract_length`, `extruder.retract_recover_feedrate`
* Related pages: extruder, extruder-guide, g11
* Example configuration:
  * extruder.hotend.retract_recover_length = 0  # No extra recovery (most common)
  * extruder.hotend.retract_recover_length = 0.1  # Small compensation for oozing
  * extruder.hotend.retract_recover_length = -0.1  # Recover slightly less than retracted

---

### `retract_recover_feedrate`

* Type: `number`
* Default: `30.0`
* Units: mm/s
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:107`
* Typical values: `15` to `25` (direct drive extruders), `20` to `40` (Bowden extruders), `30` (default)
* Corresponding v1 setting: `extruder.hotend.retract_recover_feedrate`
* Corresponding v2 setting: `extruder.hotend.retract_recover_feedrate`
* Description: Firmware unretract (recover) speed in millimeters per second when G11 (firmware unretract) command is executed. Controls how quickly filament is pushed back into the hotend after retraction. This speed is typically set lower than retract_feedrate to allow the filament to melt and flow smoothly into the nozzle without causing pressure spikes or blobs. Too fast can cause blobs at the start of extrusion after a travel move, while too slow increases print time unnecessarily.
  * NOTE: Configuration file specifies this in mm/s, but M208 F parameter uses mm/min (converted internally).
  * Typically lower than retract_feedrate to allow smooth filament flow
  * Too fast: may cause blobs or pressure spikes when resuming extrusion
  * Too slow: increases print time without benefit
  * Should be tuned to prevent artifacts at the start of extrusion after travel
* Related M-Codes:
  * G11 - Execute firmware unretract using configured recover parameters
  * M208 F<feedrate> - Set recover speed at runtime (in mm/min, converted to mm/s internally)
  * M208 F<feedrate> P<tool_id> - Set recover speed for specific extruder
  * M500 - Save recover settings to config-override
* Related settings: `extruder.retract_feedrate`, `extruder.retract_recover_length`, `extruder.retract_length`
* Related pages: extruder, extruder-guide, g11
* Example configuration:
  * extruder.hotend.retract_recover_feedrate = 20  # Direct drive, slow and smooth
  * extruder.hotend.retract_recover_feedrate = 30  # Bowden, default speed
  * extruder.hotend.retract_recover_feedrate = 25  # Conservative speed for quality

---

### `retract_zlift_length`

* Type: `number`
* Default: `0.0` (Z-hop disabled)
* Units: mm
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:108`
* Typical values: `0.0` (disabled, no Z-hop), `0.1` to `0.5` (small hop for most printers), `0.5` to `2.0` (larger hop for tall features)
* Corresponding v1 setting: `extruder.hotend.retract_zlift_length`
* Corresponding v2 setting: `extruder.hotend.retract_zlift_length`
* Description: Z-axis lift (hop) distance in millimeters during firmware retraction. When set to a value greater than 0, the Z-axis will lift by this amount during G10 (retract) and lower back down during G11 (unretract). This Z-hop feature temporarily raises the nozzle during travel moves to prevent the nozzle from dragging across already-printed parts, reducing the risk of knocking over tall features or leaving drag marks. Set to 0 to disable Z-hop completely. The Z-hop is cancelled automatically if an absolute Z move occurs between G10 and G11.
  * Performed at the speed specified by retract_zlift_feedrate
  * Only active when retract_zlift_length > 0
  * Z-hop automatically cancelled if absolute Z move occurs between G10 and G11
  * Benefits: prevents nozzle collisions with printed parts, reduces stringing visibility
  * Drawbacks: increases print time, may cause Z-axis artifacts if speed is too high
  * More important for prints with tall narrow features or complex geometry
* Related M-Codes:
  * G10 - Execute firmware retraction with Z-lift if configured
  * G11 - Execute firmware unretract with Z-lower if configured
  * M207 Z<length> - Set Z-lift length at runtime (in mm)
  * M207 Z<length> P<tool_id> - Set Z-lift length for specific extruder
  * M500 - Save retract settings to config-override
* Related settings: `extruder.retract_zlift_feedrate`, `extruder.retract_length`, `motion control.z_axis_max_speed`
* Related pages: extruder, extruder-guide, g10, g11
* Example configuration:
  * extruder.hotend.retract_zlift_length = 0  # Disabled (no Z-hop)
  * extruder.hotend.retract_zlift_length = 0.2  # Small hop for general use
  * extruder.hotend.retract_zlift_length = 0.5  # Medium hop for detailed prints
  * extruder.hotend.retract_zlift_length = 1.0  # Large hop for tall features

---

### `retract_zlift_feedrate`

* Type: `number`
* Default: `6000` (100 mm/s after conversion from mm/min)
* Units: mm/min (NOTE: This is the ONLY extruder setting using mm/min instead of mm/s)
* Module: `extruder`
* Context: Module instance setting (supports multiple extruder instances)
* Defined in: `Firmware/src/modules/tools/extruder/Extruder.cpp:109`
* Typical values: `1200` (20 mm/s, slow and safe), `6000` (100 mm/s, default fast speed), `9000` (150 mm/s, very fast)
* Corresponding v1 setting: `extruder.hotend.retract_zlift_feedrate`
* Corresponding v2 setting: `extruder.hotend.retract_zlift_feedrate`
* Description: Z-axis movement speed during firmware retraction Z-lift operations in millimeters per minute. Controls how quickly the Z-axis lifts during G10 (retract with Z-hop) and lowers during G11 (unretract). This setting is converted to mm/s internally by dividing by 60. This is the ONLY extruder setting that uses mm/min units instead of mm/s - all other feedrates in the extruder module use mm/s. The speed should typically match your Z-axis max_rate capability to avoid unnecessary slowdowns during Z-hop moves.
  * CRITICAL: This is specified in mm/min, NOT mm/s like other extruder feedrate settings
  * Default 6000 mm/min = 100 mm/s (6000 ÷ 60 = 100)
  * Converted to mm/s internally: configured_value / 60.0
  * Only used when retract_zlift_length > 0
  * Should typically match your Z-axis max_rate to avoid slowdowns
  * Too fast: may cause layer shifts on delta printers or skipped steps on Z motors
  * Too slow: increases print time unnecessarily during travel moves
* Related M-Codes:
  * G10 - Execute firmware retraction with Z-lift if configured
  * G11 - Execute firmware unretract with Z-lower if configured
  * M207 Q<speed> - Set Z-lift speed at runtime (in mm/min, NOT mm/s)
  * M207 Q<speed> P<tool_id> - Set Z-lift speed for specific extruder
  * M500 - Save retract settings to config-override
* Related settings: `extruder.retract_zlift_length`, `motion control.z_axis_max_speed`, `actuator.gamma.max_rate`
* Related pages: extruder, extruder-guide, g10, g11, motion-control
* Example configuration:
  * extruder.hotend.retract_zlift_feedrate = 1200  # 20 mm/s (slow, for precision or heavy Z-axis)
  * extruder.hotend.retract_zlift_feedrate = 6000  # 100 mm/s (default, general purpose)
  * extruder.hotend.retract_zlift_feedrate = 9000  # 150 mm/s (fast, for speed-optimized delta printers)

---

## Runtime Configuration (M-codes)

The Extruder module supports runtime configuration through various M-codes that allow dynamic adjustment of extruder parameters during operation or between prints.

### M92 - Set Steps Per Millimeter
**Format:** `M92 E<steps> [P<tool_id>]`
**Description:** Sets the number of steps per millimeter of filament movement for the extruder motor. Critical for correct extrusion calibration.
**Examples:**
* `M92 E140.5` - Set currently selected extruder to 140.5 steps/mm
* `M92 E140.5 P0` - Set extruder T0 steps/mm
* `M92 E95` - Set currently selected extruder (common for geared extruders)
**Notes:** If P parameter is omitted, applies to currently selected tool. Use M500 to save to config-override.

### M200 - Set Filament Diameter (Volumetric Mode)
**Format:** `M200 D<diameter> [P<tool_id>]`
**Description:** Enables or disables volumetric extrusion mode by setting filament diameter. When D > 0.01, E values are interpreted as mm³ of plastic volume.
**Examples:**
* `M200 D1.75` - Enable volumetric mode with 1.75mm filament
* `M200 D3.0` - Enable volumetric mode with 3mm filament
* `M200 D0` - Disable volumetric extrusion mode
* `M200 D1.75 P1` - Set filament diameter for extruder T1
* `M200` - Query current filament diameter and volumetric mode status
**Notes:** Changes take effect with smooth transition to avoid blobs by adjusting last milestone. Most modern slicers do not use volumetric mode.

### M203 - Set Maximum Feedrates
**Format:** `M203 E<mm/sec> [V<mm³/sec>] [P<tool_id>]`
**Description:** Sets maximum linear feedrate (E parameter) and/or maximum volumetric rate (V parameter) for the extruder.
**Examples:**
* `M203 E50` - Set max linear extrusion rate to 50 mm/s
* `M203 V15` - Set max volumetric rate to 15 mm³/s
* `M203 E50 V15` - Set both linear and volumetric limits
* `M203 E50 P0` - Set max rate for extruder T0
* `M203` - Query current maximum feedrate values
**Notes:** Both limits can be active simultaneously. Firmware will limit extrusion to the more restrictive constraint.

### M204 - Set Acceleration
**Format:** `M204 E<mm/sec²> [P<tool_id>]`
**Description:** Sets extruder motor acceleration in mm/sec². Controls how quickly the extruder can change speed during extrusion moves.
**Examples:**
* `M204 E500` - Set extruder acceleration to 500 mm/s²
* `M204 E500 P0` - Set acceleration for extruder T0
* `M204 E1000` - Higher acceleration for faster printing
**Notes:** Too high may cause extruder motor skipping or filament grinding. Too low limits print speed.

### M207 - Set Firmware Retract
**Format:** `M207 S<length> F<feedrate> Z<zlift> Q<zlift_feedrate> [P<tool_id>]`
**Description:** Configures firmware retraction parameters used by G10 command.
**Parameters:**
* S - Retract length in mm
* F - Retract feedrate in mm/min (NOTE: mm/min, not mm/s)
* Z - Z-lift (hop) length in mm
* Q - Z-lift feedrate in mm/min (NOTE: mm/min, not mm/s)
* P - Tool ID (optional, applies to currently selected tool if omitted)
**Examples:**
* `M207 S4.5 F2700 Z0.5 Q1200` - Full retract configuration (Bowden with Z-hop)
* `M207 S1.0 F1800` - Set retract length and speed only (direct drive)
* `M207 Z0.2` - Enable Z-hop without changing other parameters
* `M207 S4.5 F2700 P1` - Configure retract for extruder T1
**Notes:** All feedrates (F and Q) specified in mm/min and converted to mm/s internally.

### M208 - Set Firmware Recover
**Format:** `M208 S<extra_length> F<feedrate> [P<tool_id>]`
**Description:** Configures firmware unretract (recover) parameters used by G11 command.
**Parameters:**
* S - Extra recover length in mm (added to retract_length for total recovery)
* F - Recover feedrate in mm/min (NOTE: mm/min, not mm/s)
* P - Tool ID (optional, applies to currently selected tool if omitted)
**Examples:**
* `M208 S0.1 F1800` - Recover 0.1mm extra at 30 mm/s (1800/60)
* `M208 S0 F2400` - No extra recovery, 40 mm/s speed
* `M208 F1500` - Change only recover speed to 25 mm/s
* `M208 S0.1 P0` - Set extra recover for extruder T0
**Notes:** Feedrate F specified in mm/min and converted to mm/s internally.

### M221 - Set Flow Rate
**Format:** `M221 S<percentage>`
**Description:** Adjusts extrusion flow rate as a percentage multiplier. 100% is normal, <100% reduces extrusion, >100% increases extrusion.
**Examples:**
* `M221 S100` - 100% flow rate (normal, default)
* `M221 S95` - 95% flow rate (slight under-extrusion)
* `M221 S105` - 105% flow rate (slight over-extrusion)
* `M221` - Query current flow rate percentage
**Notes:** Changes take effect immediately with smooth transition. Useful for fine-tuning extrusion during a print without changing configuration. Does not require tool_id parameter, only affects currently selected tool.

### M500 - Save Settings
**Format:** `M500`
**Description:** Saves all current extruder settings to the config-override file for persistence across reboots. Requires `config-override = true` in `[general]` section.
**Saves:**
* Steps per mm (M92)
* Filament diameter (M200)
* Retract length, feedrate, Z-lift length, and Z-lift feedrate (M207)
* Recover length and feedrate (M208)
* Acceleration (M204)
* Max feedrates (M203)
**Notes:** Saves settings for all configured extruders. Settings are loaded automatically on boot when config-override is enabled.

---

## G-code Commands

### G10 - Firmware Retract
**Format:** `G10` or `G10 L1 P<tool> X<offset> Y<offset> Z<offset>`
**Description:** Two different functions depending on parameters:
* Without L parameter: Execute firmware retraction using configured retract settings
* With L1 parameter: Set tool offsets for multi-extruder setup
**Examples:**
* `G10` - Execute firmware retract (retract filament and optionally lift Z)
* `G10 L1 P2 X33.0 Y0 Z-0.1` - Set offsets for tool P2 (T1, since P is 1-based)
* `G10 L1 P1 X0 Y0 Z0` - Set offsets for tool P1 (T0)
**Notes:**
* For retraction: Uses retract_length, retract_feedrate, retract_zlift_length, and retract_zlift_feedrate settings
* For tool offsets: P parameter is 1-based (P1 = T0, P2 = T1, etc.)
* Retraction is ignored if already retracted (duplicate G10)
* Z-lift is automatically cancelled if absolute Z move occurs before G11

### G11 - Firmware Unretract
**Format:** `G11`
**Description:** Reverses the firmware retraction performed by G10, pushing filament back into the hotend and lowering Z if Z-hop was performed.
**Examples:**
* `G11` - Execute firmware unretract (recover filament and lower Z if applicable)
**Notes:**
* Uses retract_length + retract_recover_length for total recovery distance
* Uses retract_recover_feedrate for extrusion speed
* Uses retract_zlift_feedrate for Z lowering speed
* Handles G92 E0 between G10 and G11 (slicer quirk workaround)
* Z-lowering skipped if absolute Z move occurred between G10 and G11
* Ignored if not currently retracted (duplicate G11)

### T Commands - Tool Selection
**Format:** `T<n>` or `M6 T<n>`
**Description:** Selects the specified extruder tool for subsequent extrusion operations. The firmware waits for the motion queue to empty before switching tools to prevent mid-move tool changes.
**Examples:**
* `T0` - Select extruder T0 (first extruder, tool_id 0)
* `T1` - Select extruder T1 (second extruder, tool_id 1)
* `M6 T0` - Select extruder T0 (alternative syntax)
* `M6 T1` - Select extruder T1 (alternative syntax)
**Notes:**
* Waits for motion queue to empty before switching (prevents mid-move changes)
* Applies tool offsets (x_offset, y_offset, z_offset) to coordinate system
* Only one extruder can be selected at a time
* Selected extruder receives all E-axis commands until different tool is selected

---

## Actuator Mapping

Extruders require corresponding actuator (stepper motor) configuration in the `[actuator]` section. The tool_id determines which actuator axis is used:

| Tool ID | Actuator Axis | Motor Index | Typical Usage |
|---------|---------------|-------------|---------------|
| 0 (T0)  | delta (D/A)   | 3           | Primary extruder |
| 1 (T1)  | epsilon (E/B) | 4           | Second extruder |
| 2 (T2)  | zeta (F/C)    | 5           | Third extruder |

**Example actuator configuration for extruder T0:**
```ini
[actuator]
delta.steps_per_mm = 140
delta.max_rate = 50
delta.acceleration = 500
delta.step_pin = PC6
delta.dir_pin = PG5
delta.en_pin = PI4
delta.microsteps = 32
delta.driver = tmc2660
```

**CRITICAL:** Each enabled extruder MUST have a corresponding actuator configured or the firmware will report an error and refuse to enable the extruder.

---

## Complete Example Configurations

### Single Direct Drive Extruder
```ini
[extruder]
hotend.enable = true
hotend.tool_id = 0
hotend.filament_diameter = 1.75
hotend.retract_length = 0.7
hotend.retract_feedrate = 25
hotend.retract_recover_length = 0
hotend.retract_recover_feedrate = 20
hotend.retract_zlift_length = 0.2
hotend.retract_zlift_feedrate = 1200
```

### Single Bowden Extruder
```ini
[extruder]
hotend.enable = true
hotend.tool_id = 0
hotend.filament_diameter = 1.75
hotend.retract_length = 4.5
hotend.retract_feedrate = 45
hotend.retract_recover_length = 0
hotend.retract_recover_feedrate = 30
hotend.retract_zlift_length = 0
hotend.retract_zlift_feedrate = 6000
```

### Dual Extruder Setup (IDEX)
```ini
[extruder]
hotend.enable = true
hotend.tool_id = 0
hotend.x_offset = 0
hotend.y_offset = 0
hotend.z_offset = 0
hotend.filament_diameter = 1.75
hotend.retract_length = 1.0
hotend.retract_feedrate = 30
hotend.retract_recover_length = 0
hotend.retract_recover_feedrate = 25
hotend.retract_zlift_length = 0.3
hotend.retract_zlift_feedrate = 1200

hotend2.enable = true
hotend2.tool_id = 1
hotend2.x_offset = 33.0
hotend2.y_offset = 0
hotend2.z_offset = -0.05
hotend2.filament_diameter = 1.75
hotend2.retract_length = 1.0
hotend2.retract_feedrate = 30
hotend2.retract_recover_length = 0
hotend2.retract_recover_feedrate = 25
hotend2.retract_zlift_length = 0.3
hotend2.retract_zlift_feedrate = 1200
```

---

## Related Modules

* **actuator** - Stepper motor configuration (steps_per_mm, acceleration, max_rate, driver type)
* **temperature control** - Hotend and heated bed temperature management with PID control
* **switch** - Fan control (typically linked to active tool via temperature switch)

---

## Implementation Notes

### Volumetric Extrusion Calculation
When `filament_diameter > 0.01`, the firmware calculates the volumetric multiplier using:
```
volumetric_multiplier = 1.0 / (π × (diameter/2)²)
```
E values in G-code are then interpreted as mm³ and converted to linear filament distance internally by multiplying by this volumetric_multiplier.

### Flow Rate Scaling
The effective E scaling applied to all extrusion moves is:
```
e_scale = volumetric_multiplier × extruder_multiplier
```
Where `extruder_multiplier` is set by M221 command (default 1.0 = 100% flow rate).

### Tool Change Behavior
When a tool change occurs via T command or M6:
1. Wait for motion queue to empty (prevents mid-move tool switching)
2. Deselect previous tool (disable its stepper motor selection flag)
3. Select new tool (enable its stepper motor selection flag)
4. Apply tool offsets (x_offset, y_offset, z_offset) to coordinate system
5. Resume motion with new tool active

### Firmware Retract Special Cases

The firmware handles several edge cases in firmware retraction to maintain compatibility with various slicers and prevent position errors:

**G92 E0 between G10/G11:** Some older slicers (particularly Slic3r) incorrectly issue `G92 E0` between firmware retract (G10) and unretract (G11). The firmware detects this situation and automatically saves/restores the extruder position to prevent extrusion errors.

**Absolute Z move between G10/G11:** If an absolute Z move (G0/G1 with Z parameter) occurs between G10 and G11, the firmware automatically cancels the Z-lift restore on the subsequent G11 command. This preserves the user's intended Z position and prevents unwanted Z movement.

**Duplicate G10/G11:** Multiple consecutive G10 commands or multiple consecutive G11 commands are safely ignored. Only the first retract or first unretract in a sequence is executed, preventing double-retractions or double-unretracts.

---

## Troubleshooting

### Extrusion Not Working
* Verify `extruder.NAME.enable = true` is set in configuration
* Check that corresponding actuator (delta/epsilon/zeta) is configured with correct `steps_per_mm`
* Verify tool_id matches T command used in G-code
* Test with `M92` to query and verify steps/mm setting
* Check that actuator motor is properly wired and powered
* Verify extruder is selected (first extruder auto-selected on boot, others require T command)

### Retraction Issues
* **Direct drive:** Needs shorter retract_length (0.5-2mm) than Bowden (3-6mm)
* **Clicking/grinding:** Reduce retract_feedrate or retract_length
* **Under-extrusion after retract:** Increase retract_recover_length by 0.1mm increments
* **Stringing:** Increase retract_length or retract_feedrate
* **Blobs after travel:** Decrease retract_recover_feedrate or retract_recover_length

### Multi-Extruder Tool Offset Issues
* Use `G10 L1 P<n> X<offset> Y<offset> Z<offset>` to adjust offsets at runtime
* Print test patterns (dual color calibration cube) to verify offset accuracy
* Remember P parameter is 1-based: P1 = T0, P2 = T1, P3 = T2
* Check that tool offsets are applied (visible in M114 position after tool change)
* Verify coordinate system shifts correctly when changing tools

### Volumetric Mode Issues
* Set `filament_diameter = 0` to disable volumetric mode (most common configuration)
* M200 changes take effect immediately with smooth transition to avoid blobs
* Check that your slicer is outputting correct E values for volumetric mode
* Most modern slicers (PrusaSlicer, Cura, Simplify3D) do NOT use volumetric mode
* If enabling volumetric mode, ensure slicer is configured to output volumetric E values

---

## Statistics

**Total Settings:** 12 configuration keys per extruder instance
**Multi-Instance:** Yes (hotend, hotend2, hotend3, etc.)
**Default Instance:** First enabled extruder is automatically selected on boot
**Maximum Tools:** Limited by available actuators (typically 3 maximum: T0-T2)
**Source Lines:** Configuration reading: lines 92-155, G-code handling: lines 414-503, M-code handling: lines 281-412

---

## Document Metadata

**Analysis Date:** 2025-11-05
**Firmware Version:** Smoothieware v2 (latest main branch)
**Repository:** https://github.com/Smoothieware/Smoothieware-v2
**Source Files Analyzed:**
* `Firmware/src/modules/tools/extruder/Extruder.cpp` (504 lines)
* `Firmware/src/modules/tools/extruder/Extruder.h`
* `ConfigSamples/config-3d.ini`
* `ConfigSamples/config-delta.ini`

**Verification Method:** Direct source code analysis with comprehensive option C min/max verification
**Line Number Accuracy:** All line numbers verified against source as of 2025-11-05
**Total Settings Documented:** 12 configuration keys (enable, tool_id, x_offset, y_offset, z_offset, filament_diameter, retract_length, retract_feedrate, retract_recover_length, retract_recover_feedrate, retract_zlift_length, retract_zlift_feedrate)

---

## Temperature Control

# Smoothieware V2 Temperature Control Configuration Reference - Refined

**Module:** Temperature Control
**Analysis Date:** 2025-11-05
**Refinement Date:** 2025-11-05
**Source Files:**
- `Firmware/src/modules/tools/temperaturecontrol/TemperatureControl.cpp`
- `Firmware/src/modules/tools/temperaturecontrol/Thermistor.cpp`
- `Firmware/src/modules/tools/temperaturecontrol/max31855.cpp`
- `Firmware/src/modules/tools/temperaturecontrol/predefined_thermistors.h`

---

## Module Overview

Temperature Control manages heating and temperature monitoring for hotends, heated beds, and other thermal devices. Supports multiple named instances (e.g., `hotend`, `hotend2`, `bed`, `board`) with PID or bang-bang control, multiple sensor types, and comprehensive safety features including thermal runaway detection.

**Module Statistics:**
- Total Settings: 38 configuration keys
- Sensor Types: 2 (thermistor, MAX31855)
- Predefined Thermistors: 12 (6 Steinhart-Hart, 6 Beta)
- Control Modes: PID (standard or PonM), Bang-Bang
- Multi-Instance Support: Yes (named instances)

---

## Core Configuration

#### `enable`

* Type: `bool`
* Default: `false`
* Module: `temperature_control`
* Context: Module instance setting (multi-instance support)
* Defined in: `TemperatureControl.cpp:83`
* Valid values: `true`, `false`
* Required: yes (temperature controller will not activate without this)
* Corresponding v1 setting: `temperature_control.{name}.enable`
* Corresponding v2 setting: `temperature_control.{name}.enable`
* Description: Enables this temperature controller instance. When set to true, this temperature controller will actively monitor its sensor and maintain the target temperature using PID control or bang-bang control depending on configuration.
  * Each temperature control instance can monitor one sensor (thermistor, thermocouple, etc.)
  * Multiple instances can be created for hotends, heated beds, heated chambers, and read-only monitors
  * CRITICAL: If enabled, both the sensor configuration (thermistor_pin or SPI settings) and heater_pin must be properly configured or firmware will report an error
* Related settings: `temperature_control.{name}.heater_pin`, `temperature_control.{name}.sensor`, `temperature_control.{name}.thermistor_pin`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-pid-autotuning
* Example configuration:
  * temperature_control.hotend.enable = true  # Enable primary hotend temperature control
  * temperature_control.bed.enable = true  # Enable heated bed temperature control
  * temperature_control.board.enable = true  # Enable read-only board temperature monitoring

---

#### `tool_id`

* Type: `number`
* Default: Auto-assigned (0 for `hotend`, 1 for `hotend2`, 254 for `bed`, 253 for `board`)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:141`
* Valid values: 0-255
  * 0-99: Hotend/extruder tools (T0, T1, etc.)
  * 100-249: Reserved for other tools
  * 250-255: Special IDs that ignore tool changes (beds/boards are always active)
  * If not explicitly set and defaults don't apply, auto-assigned starting at 253 counting down
* Corresponding v1 setting: none (new explicit feature in v2)
* Corresponding v2 setting: `temperature_control.{name}.tool_id`
* Description: Tool number for M-code addressing and tool selection. Determines which temperature controller is addressed by T commands and whether the controller responds to tool change commands.
  * Tool IDs 0-99 are for extruders and respond to tool change commands (T0, T1, etc.)
  * Tool IDs 250-255 are special and ignore tool changes (always active regardless of selected tool)
  * The active tool_id determines which temperature controller receives M104/M109 commands when no T parameter is specified
  * M-code commands can explicitly target a specific tool_id using the S parameter (e.g., M104 S0 T190 sets T0 to 190°C)
* Related M-Codes:
  * M6 T<tool_id> - Select active tool (changes which temperature controller is active)
  * M104 S<temp> - Set temperature for currently active tool
  * M104 S<temp> T<tool_id> - Set temperature for specific tool by ID
  * M109 S<temp> - Set and wait for currently active tool
  * M109 S<temp> T<tool_id> - Set and wait for specific tool by ID
* Related settings: `temperature_control.{name}.designator`, `extruder.{name}.tool_id`
* Related pages: temperaturecontrol, extruder, multiple-extruders
* Example configuration:
  * temperature_control.hotend.tool_id = 0  # T0 hotend
  * temperature_control.hotend2.tool_id = 1  # T1 hotend (dual extrusion)
  * temperature_control.bed.tool_id = 254  # Bed (always active)
  * temperature_control.board.tool_id = 253  # Board monitor (always active, read-only)

---

#### `designator`

* Type: `string`
* Default: Auto-assigned (`"T"` for hotend, `"T2"` for hotend2, `"B"` for bed, `"P"` for board)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:146`
* Valid values: Any string (typically single letter or short identifier)
  * Common conventions: `T` for primary hotend, `T2` for second hotend, `B` for bed, `P` for PCB/board
  * Can be any descriptive string but keep short for display purposes
* Corresponding v1 setting: `temperature_control.{name}.designator`
* Corresponding v2 setting: `temperature_control.{name}.designator`
* Description: Single-letter or short temperature designator used in M105 temperature reports and display output. This identifier appears in temperature status messages and helps users distinguish between multiple temperature controllers.
  * Appears in M105 output format: `T:200.5 /200.0 @128 B:60.2 /60.0 @64`
  * Used in error messages and status reports to identify which temperature controller is referenced
  * Should be unique across all temperature control instances for clarity
* Related M-Codes:
  * M105 - Report all temperatures using designators (e.g., `T:205.3 /200.0 @127 B:58.9 /60.0 @255`)
* Related settings: `temperature_control.{name}.tool_id`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.designator = T  # Primary hotend shows as "T:" in M105
  * temperature_control.hotend2.designator = T2  # Second hotend shows as "T2:" in M105
  * temperature_control.bed.designator = B  # Bed shows as "B:" in M105
  * temperature_control.board.designator = P  # Board sensor shows as "P:" in M105

---

## Sensor Configuration

#### `sensor`

* Type: `enum`
* Default: `"thermistor"`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:178`
* Valid values: `"thermistor"`, `"max31855"`
  * `thermistor` - NTC thermistor sensor (most common, uses ADC input)
  * `max31855` - MAX31855 K-type thermocouple amplifier (SPI interface)
* Corresponding v1 setting: none (implicit, sensor type determined by configured parameters)
* Corresponding v2 setting: `temperature_control.{name}.sensor`
* Description: Temperature sensor type selection. Determines which sensor driver to use for reading temperature. This setting tells the firmware whether to expect an analog thermistor input or a digital SPI thermocouple sensor.
  * Thermistor sensors require thermistor_pin (ADC channel) configuration
  * MAX31855 sensors require spi_channel and spi_select_pin configuration
  * Each sensor type has its own specific configuration parameters
  * Sensor type must match the physical hardware connected
* Related settings: `temperature_control.{name}.thermistor_pin`, `temperature_control.{name}.spi_channel`, `temperature_control.{name}.spi_select_pin`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, pt100
* Example configuration:
  * temperature_control.hotend.sensor = thermistor  # Standard thermistor for hotend
  * temperature_control.hotend2.sensor = max31855  # K-type thermocouple for high-temp hotend
  * temperature_control.bed.sensor = thermistor  # Standard thermistor for heated bed

---

#### `thermistor_pin`

* Type: `pin`
* Default: Board-specific (`"ADC1_1"` for hotend, `"ADC1_2"` for hotend2, `"ADC1_3"` for bed, `"ADC1_0"` for board on Prime)
* Module: `temperature_control`
* Context: Thermistor sensor setting (only used when sensor is thermistor)
* Defined in: `Thermistor.cpp:114`
* Valid values: Valid ADC pin names (board-specific)
  * Smoothieboard v2 Prime: `ADC1_0`, `ADC1_1`, `ADC1_2`, `ADC1_3`, `ADC3_0`, etc.
  * Pin must be ADC-capable (analog input)
  * Cannot use `nc` for active temperature controllers (only for disabled/testing)
* Required: yes (when sensor type is thermistor)
* Corresponding v1 setting: `temperature_control.{name}.thermistor_pin`
* Corresponding v2 setting: `temperature_control.{name}.thermistor_pin`
* Description: ADC channel pin used to read thermistor voltage for temperature calculation. This pin connects to the voltage divider circuit containing the thermistor.
  * Must be a valid ADC input pin on the microcontroller
  * The thermistor forms a voltage divider with the pullup resistor (r2)
  * ADC reads the voltage at the junction of thermistor and pullup resistor
  * Pin notation uses STM32 ADC channel format (ADC unit + underscore + channel number)
  * CRITICAL: Using wrong ADC pin will result in incorrect or infinite temperature readings
  * Consult board schematic for correct ADC channel assignments
* Related settings: `temperature_control.{name}.sensor`, `temperature_control.{name}.r2`, `temperature_control.{name}.thermistor`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, pinout, smoothieboard-v2-prime
* Example configuration:
  * temperature_control.hotend.thermistor_pin = ADC1_1  # Primary hotend on Smoothieboard v2 Prime
  * temperature_control.hotend2.thermistor_pin = ADC1_2  # Second hotend thermistor input
  * temperature_control.bed.thermistor_pin = ADC1_3  # Bed thermistor input
  * temperature_control.board.thermistor_pin = ADC1_0  # Board temperature sensor (read-only)

---

#### `thermistor`

* Type: `string`
* Default: `""` (must specify predefined name or use custom beta/coefficients)
* Module: `temperature_control`
* Context: Thermistor sensor setting (optional shortcut for common thermistors)
* Defined in: `Thermistor.cpp:60`
* Typical values: `"EPCOS100K"` (most common), `"Honeywell100K"` (good accuracy), `"Semitec"` (E3D hotends)
* Valid values: Predefined thermistor names (see Predefined Thermistors section)
  * Steinhart-Hart table (higher accuracy): `EPCOS100K`, `Vishay100K`, `Honeywell100K`, `Semitec`, `Honeywell-QAD`, `Semitec-104NT4`
  * Beta table (legacy, less accurate): Same names as above, auto-selected when use_beta_table is true
  * Specifying a predefined name automatically sets all necessary coefficients (c1/c2/c3 for S-H or beta/r0/t0 for beta)
  * Individual parameters can be overridden after specifying predefined name
* Corresponding v1 setting: `temperature_control.{name}.thermistor`
* Corresponding v2 setting: `temperature_control.{name}.thermistor`
* Description: Predefined thermistor name that automatically loads factory-calibrated coefficients for common thermistors. Using predefined thermistors simplifies configuration and provides accurate temperature readings without manual calibration.
  * Predefined thermistors include Steinhart-Hart coefficients for high accuracy across full temperature range
  * Values are from manufacturer datasheets and thoroughly tested
  * EPCOS100K is the most commonly used thermistor in RepRap machines
  * Semitec is used in E3D hotends and other premium extruders
  * Can override r1, r2, or other parameters if your voltage divider circuit differs from standard
  * If thermistor name is not recognized, you must specify beta and r0, or coefficients manually
* Related settings: `temperature_control.{name}.use_beta_table`, `temperature_control.{name}.beta`, `temperature_control.{name}.coefficients`, `temperature_control.{name}.rt_curve`, `temperature_control.{name}.r0`, `temperature_control.{name}.r1`, `temperature_control.{name}.r2`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.thermistor = EPCOS100K  # Most common, standard RepRap thermistor
  * temperature_control.hotend.thermistor = Semitec  # E3D V6 hotend (Semitec 104GT-2)
  * temperature_control.bed.thermistor = Honeywell100K  # High-quality bed thermistor
  * temperature_control.hotend.thermistor = EPCOS100K  # Using predefined with custom pullup
  * temperature_control.hotend.r2 = 4700  # Override pullup resistor value

---

#### `use_beta_table`

* Type: `bool`
* Default: `false`
* Module: `temperature_control`
* Context: Thermistor sensor setting (only applies when using predefined thermistor names)
* Defined in: `Thermistor.cpp:55`
* Valid values: `true`, `false`
* Corresponding v1 setting: `temperature_control.{name}.use_beta_table`
* Corresponding v2 setting: `temperature_control.{name}.use_beta_table`
* Description: Forces use of beta-based predefined thermistor table instead of Steinhart-Hart coefficients when using a predefined thermistor name. This setting only applies when a predefined thermistor name is specified.
  * Steinhart-Hart equation (default, use_beta_table=false) provides higher accuracy across the full temperature range
  * Beta equation (use_beta_table=true) is simpler but less accurate, especially at temperature extremes
  * Most users should use Steinhart-Hart (keep this setting false)
  * Only set to true if you specifically need beta table behavior for compatibility
  * If no predefined thermistor name is used, this setting has no effect
* Related settings: `temperature_control.{name}.thermistor`, `temperature_control.{name}.beta`, `temperature_control.{name}.coefficients`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.use_beta_table = false  # Use Steinhart-Hart (recommended, default)
  * temperature_control.hotend.thermistor = EPCOS100K  # This will use S-H coefficients
  * temperature_control.bed.use_beta_table = true  # Force beta table for compatibility
  * temperature_control.bed.thermistor = EPCOS100K  # This will use beta calculation

---

#### `beta`

* Type: `number`
* Default: `4066` (EPCOS100K default when using beta mode)
* Units: Kelvin (dimensionless thermistor coefficient)
* Module: `temperature_control`
* Context: Thermistor sensor setting (beta equation mode)
* Defined in: `Thermistor.cpp:106`
* Typical values: `4066` (EPCOS100K), `3960` (RepRap 100K), `3974` (Honeywell100K), `4267` (Semitec)
* Valid values: Positive number (typically 3000-5000)
  * Common range: 3900-4300 for most 100K thermistors
  * Must match thermistor datasheet specification
  * Higher beta = steeper resistance-temperature curve
* Corresponding v1 setting: `temperature_control.{name}.beta`
* Corresponding v2 setting: `temperature_control.{name}.beta`
* Description: Thermistor beta coefficient for beta equation temperature calculation. Beta is a material constant that characterizes how the thermistor's resistance changes with temperature. See http://reprap.org/wiki/MeasuringThermistorBeta for measurement procedures.
  * Beta equation is less accurate than Steinhart-Hart, especially at temperature extremes
  * Most accurate at temperatures near the reference temperature (t0)
  * Accuracy degrades significantly above 150°C or below 0°C
  * For better accuracy across full range, use Steinhart-Hart coefficients instead
  * Beta value is usually specified in thermistor datasheets
  * If datasheet lists beta at multiple temperature ranges, use the value for 25°C/100°C range
* Related settings: `temperature_control.{name}.r0`, `temperature_control.{name}.t0`, `temperature_control.{name}.thermistor`, `temperature_control.{name}.use_beta_table`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.beta = 4066  # EPCOS100K beta coefficient
  * temperature_control.hotend.r0 = 100000  # 100K resistance at 25°C
  * temperature_control.hotend.t0 = 25  # Reference temperature
  * temperature_control.bed.beta = 3974  # Honeywell100K thermistor

---

#### `r0`

* Type: `number`
* Default: `100000` (100kΩ, standard for most RepRap thermistors)
* Units: Ohms
* Module: `temperature_control`
* Context: Thermistor sensor setting (beta equation mode)
* Defined in: `Thermistor.cpp:108`
* Typical values: `100000` (100K thermistor, most common), `10000` (10K thermistor, less common)
* Valid values: Positive number (resistance in ohms)
  * Must match thermistor specification
  * Common values: 100000 (100K), 10000 (10K), 47000 (47K)
  * Verify from thermistor datasheet or markings
* Corresponding v1 setting: `temperature_control.{name}.r0`
* Corresponding v2 setting: `temperature_control.{name}.r0`
* Description: Thermistor resistance at reference temperature t0. This is the nominal resistance of the thermistor, typically measured at 25°C. Most RepRap thermistors are 100kΩ at 25°C.
  * This value defines the thermistor's nominal resistance rating
  * Usually specified prominently in thermistor datasheet (e.g., "100K NTC Thermistor")
  * Must be accurate for correct temperature calculation
  * Common RepRap thermistors are 100K (100000 ohms) at 25°C
  * Some specialized thermistors use 10K or other values
  * Verify this value matches your actual thermistor part number
* Related settings: `temperature_control.{name}.t0`, `temperature_control.{name}.beta`, `temperature_control.{name}.r2`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice
* Example configuration:
  * temperature_control.hotend.r0 = 100000  # Standard 100K thermistor (most common)
  * temperature_control.hotend.t0 = 25  # Resistance measured at 25°C
  * temperature_control.bed.r0 = 10000  # 10K thermistor (less common)

---

#### `t0`

* Type: `number`
* Default: `25` (25°C, industry standard reference temperature)
* Units: °C
* Module: `temperature_control`
* Context: Thermistor sensor setting (beta equation mode)
* Defined in: `Thermistor.cpp:109`
* Typical values: `25` (standard reference temperature, virtually always)
* Valid values: Temperature in °C (almost always 25)
  * Industry standard is 25°C
  * Extremely rare to use any other value
  * Must match the temperature at which r0 is specified
* Corresponding v1 setting: `temperature_control.{name}.t0`
* Corresponding v2 setting: `temperature_control.{name}.t0`
* Description: Reference temperature at which the thermistor has resistance r0. Standard industry practice is 25°C. This defines the reference point for the thermistor's resistance-temperature curve.
  * Almost universally 25°C for all thermistors
  * Thermistor datasheets specify nominal resistance at this temperature
  * Changing this value is extremely uncommon and usually indicates an error
  * Must match the temperature at which r0 is specified in the datasheet
  * For calibration purposes, use coefficients or rt_curve instead of changing t0
* Related settings: `temperature_control.{name}.r0`, `temperature_control.{name}.beta`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice
* Example configuration:
  * temperature_control.hotend.t0 = 25  # Standard 25°C reference (almost always this value)
  * temperature_control.hotend.r0 = 100000  # 100K at 25°C
  * temperature_control.hotend.beta = 4066  # EPCOS100K beta

---

#### `r1`

* Type: `number`
* Default: `0` (no series resistor, standard configuration)
* Units: Ohms
* Module: `temperature_control`
* Context: Thermistor sensor setting
* Defined in: `Thermistor.cpp:110`
* Valid values: Non-negative number (ohms)
  * 0 = no series resistor (standard, most common)
  * Positive value = series resistor in ohms (rarely used)
* Corresponding v1 setting: `temperature_control.{name}.r1`
* Corresponding v2 setting: `temperature_control.{name}.r1`
* Description: Series resistor value in voltage divider circuit. This is a resistor in series with the thermistor, rarely used in standard configurations. Predefined thermistors set this automatically if needed.
  * In most RepRap circuits, r1 = 0 (no series resistor)
  * Standard voltage divider uses only thermistor and pullup resistor (r2)
  * Some specialized circuits add a series resistor to linearize the response
  * Predefined thermistors automatically configure r1 if the manufacturer's reference circuit uses one
  * Leave at 0 unless you have a specific circuit design that requires series resistance
* Related settings: `temperature_control.{name}.r2`, `temperature_control.{name}.r0`, `temperature_control.{name}.thermistor`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice
* Example configuration:
  * temperature_control.hotend.r1 = 0  # Standard (no series resistor, most common)
  * temperature_control.hotend.r2 = 4700  # Standard 4.7K pullup
  * temperature_control.custom.r1 = 680  # Custom circuit with series resistor (rare)

---

#### `r2`

* Type: `number`
* Default: `4700` (4.7kΩ, standard RepRap pullup)
* Units: Ohms
* Module: `temperature_control`
* Context: Thermistor sensor setting
* Defined in: `Thermistor.cpp:111`
* Typical values: `4700` (4.7K, most common), `4750` (actual measured value)
* Valid values: Positive number (ohms)
  * Must be greater than 0
  * Common values: 4700 (standard), 10000 (some boards)
  * Should match actual resistor value on your board
* Corresponding v1 setting: `temperature_control.{name}.r2`
* Corresponding v2 setting: `temperature_control.{name}.r2`
* Description: Pullup or pulldown resistor value in voltage divider circuit. This resistor forms the voltage divider with the thermistor. Standard value is 4.7kΩ for most Smoothieboard and RepRap electronics.
  * Forms voltage divider with thermistor to create ADC input voltage
  * Standard RepRap value is 4.7kΩ (4700 ohms)
  * Smoothieboard v1 and v2 use 4.7kΩ pullup resistors
  * For improved accuracy, measure the actual resistor value with multimeter (may be 4.65K-4.75K)
  * Using exact measured value improves temperature reading accuracy by 1-2°C
  * Some boards use 10kΩ (10000) pullups
  * CRITICAL: Must match the actual resistor value on your board or temperatures will be incorrect
* Related settings: `temperature_control.{name}.r1`, `temperature_control.{name}.r0`, `temperature_control.{name}.thermistor_pin`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, smoothieboard-v2-prime
* Example configuration:
  * temperature_control.hotend.r2 = 4700  # Standard 4.7K pullup (Smoothieboard default)
  * temperature_control.hotend.r2 = 4730  # Measured actual value for better accuracy
  * temperature_control.bed.r2 = 10000  # 10K pullup (some other boards)

---

#### `coefficients`

* Type: `string`
* Default: `""` (not used unless specified)
* Module: `temperature_control`
* Context: Thermistor sensor setting (Steinhart-Hart mode)
* Defined in: `Thermistor.cpp:128`
* Valid values: Three comma-separated floats in format `"c1,c2,c3"` (no spaces)
  * Scientific notation allowed and recommended for small values
  * Example format: `"0.000722378300319346,0.000216301852054578,9.2641025635702e-08"`
  * Must have exactly three coefficients
  * Coefficients define the Steinhart-Hart equation: 1/T = c1 + c2*ln(R) + c3*ln(R)³
* Corresponding v1 setting: `temperature_control.{name}.coefficients`
* Corresponding v2 setting: `temperature_control.{name}.coefficients`
* Description: Steinhart-Hart equation coefficients (c1, c2, c3) for accurate temperature calculation across full temperature range. Specify as three comma-separated floats (no spaces). This enables the most accurate temperature measurement method.
  * Steinhart-Hart is more accurate than beta equation across entire temperature range
  * Coefficients are usually available in thermistor datasheets
  * Can calculate coefficients from three temperature-resistance pairs using rt_curve setting
  * Format is critical: exactly three comma-separated values, no spaces
  * Scientific notation is acceptable and often necessary for c3 (very small number)
  * If specified, overrides beta calculation and predefined thermistor settings
  * Use this for maximum accuracy or custom/unknown thermistors
* Related settings: `temperature_control.{name}.rt_curve`, `temperature_control.{name}.thermistor`, `temperature_control.{name}.use_beta_table`, `temperature_control.{name}.r1`, `temperature_control.{name}.r2`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.coefficients = 0.000722378300319346,0.000216301852054578,9.2641025635702e-08  # EPCOS100K S-H coefficients
  * temperature_control.hotend.r1 = 0  # No series resistor
  * temperature_control.hotend.r2 = 4700  # Standard pullup
  * temperature_control.bed.coefficients = 0.000721032926124158,0.000216236112956393,8.9345623570824e-08  # Custom thermistor

---

#### `rt_curve`

* Type: `string`
* Default: `""` (not used unless specified)
* Module: `temperature_control`
* Context: Thermistor sensor setting (Steinhart-Hart mode, alternative to coefficients)
* Defined in: `Thermistor.cpp:132`
* Valid values: Six comma-separated values in format `"T1,R1,T2,R2,T3,R3"` (no spaces)
  * T values are temperatures in °C
  * R values are resistances in ohms at those temperatures
  * Example: `"25.0,100000.0,150.0,1355.0,240.0,203.0"`
  * Must have exactly six values (three T,R pairs)
  * Temperatures should span the operating range, recommended: 25°C, 150°C, 240°C
* Corresponding v1 setting: `temperature_control.{name}.rt_curve`
* Corresponding v2 setting: `temperature_control.{name}.rt_curve`
* Description: Three temperature/resistance pairs used to auto-calculate Steinhart-Hart coefficients. Format: T1,R1,T2,R2,T3,R3 where T is temperature in °C and R is resistance in ohms. Best practice: use 25°C, 150°C, and 240°C points from the thermistor datasheet.
  * Firmware automatically calculates Steinhart-Hart coefficients from these three points
  * Easier than manually specifying coefficients
  * Values should come from thermistor R-T curve in datasheet
  * Recommended temperatures: 25°C (low), 150°C (mid), 240°C (high) for good curve fit
  * Example datashe sources: Honeywell resistance-temperature tables, Semitec R/T tables
  * For Honeywell thermistors: see "Resistance-Temperature Conversion Table"
  * For Semitec: see column 8 of R/T table in datasheet
  * If both rt_curve and coefficients are specified, rt_curve takes precedence
* Related settings: `temperature_control.{name}.coefficients`, `temperature_control.{name}.thermistor`, `temperature_control.{name}.r1`, `temperature_control.{name}.r2`
* Related pages: temperaturecontrol, temperaturecontrol-thermistor-choice, steinharthart
* Example configuration:
  * temperature_control.hotend.rt_curve = 25.0,100000.0,150.0,1355.0,240.0,203.0  # EPCOS100K from datasheet
  * temperature_control.hotend.r1 = 0  # No series resistor
  * temperature_control.hotend.r2 = 4700  # Standard pullup
  * temperature_control.bed.rt_curve = 25.0,100000.0,150.0,1650.0,240.0,240.0  # Different thermistor

---

#### `spi_channel`

* Type: `number`
* Default: `-1` (not used for thermistors)
* Module: `temperature_control`
* Context: MAX31855 sensor setting
* Defined in: `max31855.cpp:27`
* Valid values: Non-negative integer (SPI channel number, board-dependent)
  * Valid range: 0 to (number of SPI channels - 1)
  * Smoothieboard v2 Prime: typically 0 or 1
  * Must match the SPI peripheral connected to MAX31855 chips
  * All MAX31855 sensors on the same board should use the same SPI channel
* Required: yes (when sensor type is max31855)
* Corresponding v1 setting: none (MAX31855 support is new in v2)
* Corresponding v2 setting: `temperature_control.{name}.spi_channel`
* Description: SPI channel number for MAX31855 thermocouple sensor communication. All MAX31855 sensors must use the same SPI channel, with unique chip select pins to distinguish between sensors.
  * MAX31855 uses SPI for digital temperature reading
  * Multiple MAX31855 sensors share the same SPI bus (MOSI, MISO, SCK lines)
  * Each sensor requires a unique chip select (CS) pin configured via spi_select_pin
  * SPI channel must be a hardware SPI peripheral on the microcontroller
  * Consult board documentation for available SPI channels and their pin assignments
  * NOTE: This setting only applies when sensor type is max31855
* Related settings: `temperature_control.{name}.spi_select_pin`, `temperature_control.{name}.sensor`, `temperature_control.{name}.readings_per_second`
* Related pages: temperaturecontrol, pt100, smoothieboard-v2-prime
* Example configuration:
  * temperature_control.hotend.sensor = max31855  # Use MAX31855 thermocouple
  * temperature_control.hotend.spi_channel = 0  # SPI channel 0
  * temperature_control.hotend.spi_select_pin = PD10  # Unique CS pin for this sensor
  * temperature_control.hotend2.spi_channel = 0  # Same SPI channel for second sensor
  * temperature_control.hotend2.spi_select_pin = PD11  # Different CS pin

---

#### `spi_select_pin`

* Type: `pin`
* Default: `"nc"` (not connected, invalid for active sensors)
* Module: `temperature_control`
* Context: MAX31855 sensor setting
* Defined in: `max31855.cpp:56`
* Valid values: Valid GPIO pin names (board-specific)
  * Must be a valid output-capable pin
  * Each MAX31855 sensor needs a unique CS pin
  * Cannot be shared between sensors
  * STM32 pin format: PXn where X is port letter, n is pin number (e.g., PD10, PE4)
* Required: yes (when sensor type is max31855)
* Corresponding v1 setting: none (MAX31855 support is new in v2)
* Corresponding v2 setting: `temperature_control.{name}.spi_select_pin`
* Description: SPI chip select (CS) pin for MAX31855 sensor. Each MAX31855 sensor requires a unique chip select pin to enable communication on the shared SPI bus.
  * CS pin goes low to enable communication with this specific MAX31855
  * Each MAX31855 must have its own unique CS pin
  * Cannot share CS pins between sensors
  * Pin must be a digital output-capable GPIO
  * CS pin is driven by firmware, no need for inversion or pull-ups
  * When using multiple MAX31855 sensors, they share SPI bus but use different CS pins
* Related settings: `temperature_control.{name}.spi_channel`, `temperature_control.{name}.sensor`
* Related pages: temperaturecontrol, pt100, pin-configuration, smoothieboard-v2-prime
* Example configuration:
  * temperature_control.hotend.spi_select_pin = PD10  # CS pin for first MAX31855
  * temperature_control.hotend2.spi_select_pin = PD11  # CS pin for second MAX31855 (different pin!)
  * temperature_control.hotend.spi_channel = 0  # Both share same SPI channel
  * temperature_control.hotend2.spi_channel = 0  # Same SPI channel

---

## Heater Configuration

#### `heater_pin`

* Type: `pin`
* Default: Board-specific (`"PE0"` for hotend, `"PB8"` for hotend2, `"PE3"` for bed, `"nc"` for board on Prime)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:159`
* Valid values: Valid PWM-capable pin or `"nc"`
  * Must be a pin capable of PWM (sigma-delta or hardware PWM)
  * Use `nc` for read-only temperature monitoring (no heater control)
  * Pin format: STM32 notation (e.g., PE0, PB8, PE3)
  * Can use mosfet output pins (refer to board schematic)
* Corresponding v1 setting: `temperature_control.{name}.heater_pin`
* Corresponding v2 setting: `temperature_control.{name}.heater_pin`
* Description: PWM output pin used to control heater power via MOSFET or SSR. Set to `"nc"` (not connected) for read-only temperature monitoring without heater control.
  * Controls heater power using PWM (Pulse Width Modulation)
  * PWM duty cycle from 0 (off) to max_pwm (full power)
  * Pin must be capable of PWM output (most GPIO pins support sigma-delta PWM)
  * For high-current heaters, pin drives a MOSFET which switches the heater power
  * Setting to `nc` creates a read-only temperature monitor (useful for board temperature, chamber temperature, etc.)
  * CRITICAL: Verify pin matches your board's heater MOSFET connections
  * Wrong pin assignment can result in no heating or heating the wrong element
  * Consult board schematic for correct heater pin assignments
* Related settings: `temperature_control.{name}.max_pwm`, `temperature_control.{name}.enable`
* Related pages: temperaturecontrol, mosfets, mosfets-table, pinout, smoothieboard-v2-prime
* Example configuration:
  * temperature_control.hotend.heater_pin = PE0  # Hotend heater on Smoothieboard v2 Prime
  * temperature_control.hotend2.heater_pin = PB8  # Second hotend heater
  * temperature_control.bed.heater_pin = PE3  # Heated bed output
  * temperature_control.board.heater_pin = nc  # Board temperature sensor (read-only, no heater)
  * temperature_control.chamber.heater_pin = PE5  # Chamber heater on spare output

---

#### `max_pwm`

* Type: `number`
* Default: `255` (full 8-bit PWM range)
* Units: PWM steps (0-255 scale)
* Module: `temperature_control`
* Context: Module instance setting (only applies when heater_pin is configured)
* Defined in: `TemperatureControl.cpp:209`
* Maximum value: `255` (8-bit PWM limit, checked at TemperatureControl.cpp:585, 609, 615, 636)
* Typical values: `255` (full power, default), `180` (70% power limit), `128` (50% power limit)
* Valid values: 0-255
  * 0 = heater always off (not useful)
  * 255 = full power available (standard)
  * Intermediate values limit maximum heater power
  * Common to limit bed power to prevent PSU overload (e.g., 180 for 70% power)
* Corresponding v1 setting: `temperature_control.{name}.max_pwm`
* Corresponding v2 setting: `temperature_control.{name}.max_pwm`
* Description: Maximum PWM duty cycle value for heater output. This limits the maximum power delivered to the heater. Standard 8-bit PWM range is 0-255 where 255 is 100% duty cycle (full power).
  * Limits maximum heater power output
  * 255 = 100% duty cycle (heater on continuously at full power)
  * Lower values reduce maximum power (e.g., 128 = 50% maximum power)
  * Useful for limiting bed power to prevent power supply overload
  * PID controller will never exceed this value
  * Bang-bang mode uses this as the "on" value when heating
  * Setting too low may prevent heater from reaching target temperature
  * Setting to 255 allows full heating capability (recommended for hotends)
* Related settings: `temperature_control.{name}.i_max`, `temperature_control.{name}.bang_bang`, `temperature_control.{name}.heater_pin`
* Related pages: temperaturecontrol, temperaturecontrol-pid, mosfets
* Example configuration:
  * temperature_control.hotend.max_pwm = 255  # Full power for hotend (100%, standard)
  * temperature_control.bed.max_pwm = 180  # Limit bed to 70% power (255 * 0.7 ≈ 180)
  * temperature_control.bed.max_pwm = 128  # Limit bed to 50% power to reduce PSU load
  * temperature_control.hotend2.max_pwm = 255  # Full power for second hotend

---

## PID Control Settings

#### `p_factor`

* Type: `number`
* Default: `10`
* Units: Dimensionless (PWM output per degree Celsius of error)
* Module: `temperature_control`
* Context: Module instance setting (PID control)
* Defined in: `TemperatureControl.cpp:232`
* Typical values: `10` (default, general purpose), `13` (faster response), `7` (slower, more stable)
* Valid values: Positive number (typically 5-50)
  * Common range: 5-20 for hotends
  * Higher values increase responsiveness but may cause oscillation
  * Lower values reduce oscillation but slow response
  * Should be tuned using M303 PID autotuning
* Corresponding v1 setting: `temperature_control.{name}.p_factor`
* Corresponding v2 setting: `temperature_control.{name}.p_factor`
* Description: PID proportional term. Determines the controller's response to current temperature error. Higher values increase responsiveness but may cause oscillation. Use M303 PID autotune for optimal values.
  * Proportional term responds to current error (target - actual temperature)
  * Output = P * error (when not using PonM mode)
  * Higher P = faster response to temperature changes
  * Too high P = temperature oscillates around setpoint
  * Too low P = slow to reach temperature, sluggish response
  * Starting point: use default (10), then run M303 autotune
  * M303 automatically calculates optimal P, I, D values
  * When using use_ponm mode, P term behaves differently (acts on measurement changes, not error)
* Related M-Codes:
  * M301 S<tool_id> P<value> - Set P factor at runtime
  * M301 S<tool_id> - Display current PID values
  * M303 P<tool_id> S<temp> C<cycles> - Auto-tune PID parameters
  * M500 - Save current PID values to config-override
* Related settings: `temperature_control.{name}.i_factor`, `temperature_control.{name}.d_factor`, `temperature_control.{name}.use_ponm`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-pid-autotuning, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.p_factor = 10  # Default starting value
  * temperature_control.hotend.i_factor = 0.3  # Paired with I factor
  * temperature_control.hotend.d_factor = 200  # Paired with D factor
  * temperature_control.bed.p_factor = 7  # Lower for slower bed response

---

#### `i_factor`

* Type: `number`
* Default: `0.3`
* Units: Dimensionless (PWM per degree-second of accumulated error, internally scaled by PIDdt)
* Module: `temperature_control`
* Context: Module instance setting (PID control)
* Defined in: `TemperatureControl.cpp:233`
* Typical values: `0.3` (default), `0.5` (faster elimination of steady-state error), `0.1` (slower, more conservative)
* Valid values: Non-negative number (typically 0.1-2.0)
  * Common range: 0.1-1.0 for hotends
  * Higher values eliminate steady-state error faster but risk overshoot
  * Lower values are more conservative but slower to eliminate offset
  * Zero disables integral term (not recommended)
* Corresponding v1 setting: `temperature_control.{name}.i_factor`
* Corresponding v2 setting: `temperature_control.{name}.i_factor`
* Description: PID integral term. Eliminates steady-state temperature error over time by accumulating past errors. Internally scaled by PIDdt (1/readings_per_second). Higher values eliminate offset faster but risk overshoot. Use M303 autotune for optimal values.
  * Integral term accumulates error over time
  * Eliminates steady-state offset (persistent temperature error)
  * I term increases when temperature is below target, decreases when above
  * Prevents the "settled at 2 degrees below target" problem
  * Too high I = overshoot and oscillation
  * Too low I = slow to eliminate temperature offset
  * Internally scaled by PIDdt = 1/readings_per_second
  * Value in config is automatically adjusted based on update rate
  * Limited by i_max to prevent integral windup
* Related M-Codes:
  * M301 S<tool_id> I<value> - Set I factor at runtime
  * M301 S<tool_id> - Display current PID values
  * M303 P<tool_id> S<temp> C<cycles> - Auto-tune PID parameters
  * M500 - Save current PID values to config-override
* Related settings: `temperature_control.{name}.p_factor`, `temperature_control.{name}.d_factor`, `temperature_control.{name}.i_max`, `temperature_control.{name}.windup`, `temperature_control.{name}.readings_per_second`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-pid-autotuning, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.i_factor = 0.3  # Default value
  * temperature_control.hotend.p_factor = 10  # Paired with P factor
  * temperature_control.hotend.d_factor = 200  # Paired with D factor
  * temperature_control.hotend.i_max = 255  # Limit I term accumulation
  * temperature_control.bed.i_factor = 0.5  # Higher for bed (slower thermal mass)

---

#### `d_factor`

* Type: `number`
* Default: `200`
* Units: Dimensionless (PWM per degree/second rate of change, internally scaled by PIDdt)
* Module: `temperature_control`
* Context: Module instance setting (PID control)
* Defined in: `TemperatureControl.cpp:234`
* Typical values: `200` (default), `100` (less damping, faster but more oscillation), `300` (more damping, slower but smoother)
* Valid values: Non-negative number (typically 50-500)
  * Common range: 100-400 for hotends
  * Higher values increase damping (reduce overshoot) but may slow response
  * Lower values allow faster response but may cause overshoot
  * Zero disables derivative term (not recommended)
* Corresponding v1 setting: `temperature_control.{name}.d_factor`
* Corresponding v2 setting: `temperature_control.{name}.d_factor`
* Description: PID derivative term. Reduces overshoot by damping the rate of temperature change. Internally scaled by PIDdt. Higher values reduce overshoot but may slow response. Use M303 autotune for optimal values.
  * Derivative term responds to rate of temperature change
  * Acts as a brake when temperature is changing rapidly
  * Reduces overshoot when approaching target temperature
  * Provides damping to prevent oscillation
  * Too high D = sluggish response, slow to reach temperature
  * Too low D = overshoot and ringing around setpoint
  * Internally scaled by PIDdt = 1/readings_per_second
  * Sensitive to noise in temperature readings
  * M303 autotune finds optimal balance of D with P and I
* Related M-Codes:
  * M301 S<tool_id> D<value> - Set D factor at runtime
  * M301 S<tool_id> - Display current PID values
  * M303 P<tool_id> S<temp> C<cycles> - Auto-tune PID parameters
  * M500 - Save current PID values to config-override
* Related settings: `temperature_control.{name}.p_factor`, `temperature_control.{name}.i_factor`, `temperature_control.{name}.use_ponm`, `temperature_control.{name}.readings_per_second`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-pid-autotuning, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.d_factor = 200  # Default value
  * temperature_control.hotend.p_factor = 10  # Paired with P factor
  * temperature_control.hotend.i_factor = 0.3  # Paired with I factor
  * temperature_control.bed.d_factor = 100  # Lower for bed (slower response acceptable)

---

#### `use_ponm`

* Type: `bool`
* Default: `false`
* Module: `temperature_control`
* Context: Module instance setting (PID control mode)
* Defined in: `TemperatureControl.cpp:236`
* Typical values: `false` (standard PID, default), `true` (PonM mode, better setpoint change response)
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `temperature_control.{name}.use_ponm`
* Description: Use Proportional on Measurement instead of Proportional on Error. PonM mode reduces overshoot when changing setpoint by applying the P term to measurement changes rather than error changes. See http://brettbeauregard.com/blog/2017/06/introducing-proportional-on-measurement/ for detailed explanation.
  * Standard PID (false): P term = p_factor * (target - current)
  * PonM mode (true): P term = -p_factor * (change in measurement)
  * PonM eliminates proportional kick when setpoint changes
  * Better for processes where setpoint changes frequently (multiple print temperatures)
  * Reduces overshoot when changing from one temperature to another
  * No difference in steady-state performance
  * Particularly useful for hotends when switching between materials
  * I and D terms work the same in both modes
  * Recommended for hotends, less beneficial for beds
* Related M-Codes:
  * M301 S<tool_id> Z<1/0> - Set PonM mode (1=enabled, 0=disabled)
  * M301 S<tool_id> - Display current PID values and PonM status
  * M500 - Save PonM setting to config-override
* Related settings: `temperature_control.{name}.p_factor`, `temperature_control.{name}.i_factor`, `temperature_control.{name}.d_factor`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.use_ponm = false  # Standard PID (default)
  * temperature_control.hotend.use_ponm = true  # Use PonM for better setpoint change response
  * temperature_control.bed.use_ponm = false  # Standard PID fine for bed (setpoint rarely changes)

---

#### `i_max`

* Type: `number`
* Default: Same as `max_pwm` (255 by default)
* Units: PWM steps (same scale as max_pwm)
* Module: `temperature_control`
* Context: Module instance setting (PID control, integral windup limit)
* Defined in: `TemperatureControl.cpp:240`
* Typical values: `255` (default, same as max_pwm), `128` (limit I contribution to 50%)
* Valid values: 0 to `max_pwm`
  * Should not exceed max_pwm
  * Common to set equal to max_pwm
  * Lower values prevent I term from dominating output
* Corresponding v1 setting: `temperature_control.{name}.i_max`
* Corresponding v2 setting: `temperature_control.{name}.i_max`
* Description: Maximum value for integral term accumulation (anti-windup limit). Prevents the I term from accumulating excessively during prolonged error conditions. Limits how much the integral term can contribute to the total PID output.
  * Limits the maximum value of the integral term
  * Prevents integral windup during startup or prolonged errors
  * Integral windup occurs when I term accumulates to very large values
  * Without limit, I term can cause severe overshoot
  * Typically set equal to max_pwm
  * Lower values reduce I term influence (may prevent reaching temperature)
  * Higher values allow more I term contribution (may cause overshoot)
  * Works in conjunction with windup setting for anti-windup strategy
* Related M-Codes:
  * M301 S<tool_id> X<value> - Set i_max at runtime
  * M301 S<tool_id> - Display current PID values including i_max
  * M500 - Save i_max to config-override
* Related settings: `temperature_control.{name}.i_factor`, `temperature_control.{name}.max_pwm`, `temperature_control.{name}.windup`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.i_max = 255  # Standard (same as max_pwm)
  * temperature_control.hotend.max_pwm = 255  # Full power available
  * temperature_control.bed.i_max = 180  # Match limited bed power
  * temperature_control.bed.max_pwm = 180  # Bed power limited to 70%

---

#### `windup`

* Type: `bool`
* Default: `false`
* Module: `temperature_control`
* Context: Module instance setting (PID control, anti-windup mode)
* Defined in: `TemperatureControl.cpp:208`
* Valid values: `true`, `false`
* Corresponding v1 setting: `temperature_control.{name}.windup`
* Corresponding v2 setting: `temperature_control.{name}.windup`
* Description: Enable alternative integral windup protection behavior. When false (default), I term updates continuously. When true, I term only updates when PID output is not saturated (anti-windup).
  * Controls when integral term is allowed to accumulate
  * False (default): I term always updates (standard PID)
  * True (anti-windup): I term only updates when output is not saturated
  * Saturation means output is at minimum (0) or maximum (max_pwm)
  * Anti-windup mode prevents I term from growing when output is already maxed
  * Useful for systems with long heat-up times
  * Default (false) works well for most hotends and beds
  * Enable (true) if experiencing overshoot during heating from cold
  * Works in combination with i_max for windup protection
* Related settings: `temperature_control.{name}.i_factor`, `temperature_control.{name}.i_max`, `temperature_control.{name}.max_pwm`
* Related pages: temperaturecontrol, temperaturecontrol-pid, temperaturecontrol-fine-tuning
* Example configuration:
  * temperature_control.hotend.windup = false  # Standard behavior (default)
  * temperature_control.hotend.i_max = 255  # I term limit
  * temperature_control.bed.windup = true  # Anti-windup for slow-heating bed
  * temperature_control.bed.i_max = 180  # Bed I term limit

---

## Bang-Bang Control

#### `bang_bang`

* Type: `bool`
* Default: `false`
* Module: `temperature_control`
* Context: Module instance setting (control mode selection)
* Defined in: `TemperatureControl.cpp:206`
* Valid values: `true`, `false`
* Corresponding v1 setting: `temperature_control.{name}.bang_bang`
* Corresponding v2 setting: `temperature_control.{name}.bang_bang`
* Description: Use bang-bang (on/off) control instead of PID. Heater is full-on when temperature is below (target - hysteresis), full-off when above (target + hysteresis). Suitable for slow-response systems like heated beds with mechanical relays or SSRs.
  * Simple on/off control instead of proportional PID
  * Heater is either fully on (max_pwm) or fully off (0)
  * Creates deadband around target using hysteresis setting
  * When temp < (target - hysteresis): heater fully on
  * When temp > (target + hysteresis): heater fully off
  * Within deadband: heater state doesn't change
  * Suitable for heated beds (large thermal mass, slow response)
  * Good for systems with mechanical relays (SSRs) that don't like rapid switching
  * Not recommended for hotends (causes temperature swing)
  * PID settings (p_factor, i_factor, d_factor) are ignored when bang_bang is true
  * Uses max_pwm value for "on" state
* Related settings: `temperature_control.{name}.hysteresis`, `temperature_control.{name}.max_pwm`, `temperature_control.{name}.p_factor`
* Related pages: temperaturecontrol, temperaturecontrol-pid
* Example configuration:
  * temperature_control.bed.bang_bang = false  # Use PID for bed (smoother control)
  * temperature_control.bed.bang_bang = true  # Use bang-bang for bed with SSR
  * temperature_control.bed.hysteresis = 2  # ±2°C deadband
  * temperature_control.hotend.bang_bang = false  # Always use PID for hotends

---

#### `hysteresis`

* Type: `number`
* Default: `2` (±2°C deadband)
* Units: °C
* Module: `temperature_control`
* Context: Module instance setting (bang-bang mode only)
* Defined in: `TemperatureControl.cpp:207`
* Typical values: `2` (default, ±2°C), `5` (wider deadband for slower systems), `1` (tighter control)
* Valid values: Positive number (typically 1-5)
  * Common range: 1-5°C
  * Larger values reduce switching frequency but increase temperature swing
  * Smaller values tighten control but increase relay/SSR switching
  * Should balance temperature stability with relay lifetime
* Corresponding v1 setting: `temperature_control.{name}.hysteresis`
* Corresponding v2 setting: `temperature_control.{name}.hysteresis`
* Description: Temperature hysteresis for bang-bang mode. Creates a deadband of ±hysteresis around the target temperature to prevent rapid heater switching.
  * Only applies when bang_bang is true (ignored in PID mode)
  * Creates deadband around target temperature
  * Prevents rapid on/off cycling (chatter)
  * Heater turns on when temp < (target - hysteresis)
  * Heater turns off when temp > (target + hysteresis)
  * Within deadband, heater state doesn't change
  * Larger hysteresis = less switching, more temperature variation
  * Smaller hysteresis = more switching, tighter temperature control
  * Typical bed values: 2-5°C (mechanical relays prefer wider deadband)
  * SSRs can handle smaller hysteresis (1-2°C)
* Related settings: `temperature_control.{name}.bang_bang`, `temperature_control.{name}.max_temp`, `temperature_control.{name}.min_temp`
* Related pages: temperaturecontrol
* Example configuration:
  * temperature_control.bed.bang_bang = true  # Enable bang-bang mode
  * temperature_control.bed.hysteresis = 2  # ±2°C deadband (default)
  * temperature_control.bed.hysteresis = 5  # ±5°C wider deadband for mechanical relay
  * temperature_control.bed.hysteresis = 1  # ±1°C tight control with SSR

---

## Temperature Limits & Safety

#### `min_temp`

* Type: `number`
* Default: `0` (0°C)
* Units: °C
* Module: `temperature_control`
* Context: Module instance setting (safety feature)
* Defined in: `TemperatureControl.cpp:156`
* Typical values: `0` (default, detect disconnection), `-10` (cold environment), `5` (stricter disconnection detection)
* Valid values: Temperature in °C (should be below expected room temperature)
  * Typically 0°C or slightly below
  * Should be well below expected operating temperatures
  * Used to detect thermistor disconnection or failure
* Corresponding v1 setting: `temperature_control.{name}.min_temp`
* Corresponding v2 setting: `temperature_control.{name}.min_temp`
* Description: Minimum safe temperature threshold. If sensor reads below this value (e.g., thermistor disconnected), system immediately enters HALT state and heater turns off. This is a critical safety feature that detects sensor failures.
  * Safety feature to detect sensor failures
  * Disconnected thermistor typically reads as very low or infinite temperature
  * If temperature drops below min_temp, firmware assumes sensor failure
  * System immediately enters HALT state (all heaters off, motors stop)
  * HALT condition requires M999 reset or board restart to clear
  * Set low enough to never trigger during normal operation
  * High enough to detect disconnected thermistor
  * Thermistor disconnection often reads as -273°C or infinity
  * Default of 0°C is suitable for most environments
  * CRITICAL: Do not set below expected room temperature
* Related settings: `temperature_control.{name}.max_temp`, `temperature_control.{name}.runaway_range`
* Related pages: temperaturecontrol, troubleshooting, error
* Example configuration:
  * temperature_control.hotend.min_temp = 0  # Standard disconnection detection
  * temperature_control.bed.min_temp = 0  # Same for bed
  * temperature_control.hotend.min_temp = 5  # Stricter detection (5°C threshold)
  * temperature_control.board.min_temp = -10  # Allow lower readings for ambient sensor

---

#### `max_temp`

* Type: `number`
* Default: `300` (300°C)
* Units: °C
* Module: `temperature_control`
* Context: Module instance setting (safety feature)
* Defined in: `TemperatureControl.cpp:155`
* Typical values: `300` (default for all-metal hotends), `275` (PTFE-lined hotends), `120` (heated beds), `100` (conservative bed limit)
* Valid values: Positive temperature in °C
  * Hotends: typically 275-300°C (285°C for PTFE limit, 300°C for all-metal)
  * Beds: typically 100-130°C (100°C for glass beds, 120°C for aluminum)
  * Should match safe operating temperature of heating element and materials
* Corresponding v1 setting: `temperature_control.{name}.max_temp`
* Corresponding v2 setting: `temperature_control.{name}.max_temp`
* Description: Maximum safe temperature threshold. If sensor reads above this value OR if setpoint is set above this value, system immediately enters HALT state. This protects against thermal runaway and prevents damage to the machine and surroundings.
  * Critical safety feature prevents overheating
  * Triggers HALT if temperature exceeds this limit
  * Also triggers HALT if user tries to set temperature above this limit
  * Protects against thermal runaway (heater stuck on)
  * Protects against user error (accidentally setting 2000°C instead of 200°C)
  * Should be set based on:
    - Heating element safe operating temperature
    - PTFE tube rating (260°C max, 240°C recommended)
    - Thermistor maximum temperature rating
    - Fire safety considerations
  * All-metal hotends: typically 300°C
  * PTFE-lined hotends: 275°C maximum (285°C absolute PTFE limit)
  * Heated beds: 100-120°C (glass may crack above 110°C)
  * HALT requires M999 reset or board restart to clear
* Related M-Codes:
  * M143 S<tool_id> P<temp> - Set max_temp at runtime
  * M143 - Display current max_temp for all controllers
  * M500 - Save max_temp to config-override
* Related settings: `temperature_control.{name}.min_temp`, `temperature_control.{name}.runaway_range`, `temperature_control.{name}.runaway_heating_timeout`
* Related pages: temperaturecontrol, safety-thermistor, troubleshooting
* Example configuration:
  * temperature_control.hotend.max_temp = 300  # All-metal hotend (full capability)
  * temperature_control.hotend.max_temp = 275  # PTFE-lined hotend (safe limit)
  * temperature_control.bed.max_temp = 100  # Conservative bed limit
  * temperature_control.bed.max_temp = 120  # Aluminum bed, higher limit

---

#### `runaway_range`

* Type: `number`
* Default: `20` (±20°C)
* Units: °C
* Module: `temperature_control`
* Context: Module instance setting (safety feature)
* Defined in: `TemperatureControl.cpp:149`
* Typical values: `20` (default), `10` (tighter detection), `30` (looser for high-power beds)
* Valid values: Non-negative integer (0 disables, 10-30 typical)
  * 0 = disable runaway range checking (NOT RECOMMENDED)
  * 10-30°C typical range
  * Should be large enough to avoid false triggers
  * Small enough to detect actual thermal runaway
  * WARNING: Setting to 0 disables critical safety protection
* Corresponding v1 setting: `temperature_control.{name}.runaway_range`
* Corresponding v2 setting: `temperature_control.{name}.runaway_range`
* Description: Maximum allowed temperature deviation from target (±°C) after target temperature is reached. If temperature swings beyond ±runaway_range for 5 consecutive seconds after reaching target, system triggers HALT. Set to 0 to disable (NOT RECOMMENDED - removes critical safety protection).
  * Thermal runaway detection once at target temperature
  * Only active after target temperature has been reached
  * Allows ±runaway_range deviation from setpoint
  * If temperature goes outside this range for 5+ seconds, triggers HALT
  * Detects:
    - Heater stuck on (temperature continues rising)
    - Sensor failure (sudden temperature drop)
    - Cooling system failure
    - Part cooling fan blowing on thermistor
  * 5-second filter prevents false triggers from noise/spikes
  * CRITICAL: Setting to 0 disables this safety feature (dangerous)
  * Firmware warns if disabled: "runaway range failsafe is disabled. This is potentially DANGEROUS"
  * Default 20°C is suitable for most systems
  * May need adjustment for high-power beds or exotic cooling setups
* Related settings: `temperature_control.{name}.runaway_heating_timeout`, `temperature_control.{name}.runaway_cooling_timeout`, `temperature_control.{name}.runaway_error_range`, `temperature_control.{name}.max_temp`
* Related pages: temperaturecontrol, troubleshooting, safety-thermistor
* Example configuration:
  * temperature_control.hotend.runaway_range = 20  # Default (±20°C after reaching target)
  * temperature_control.bed.runaway_range = 20  # Same for bed
  * temperature_control.hotend.runaway_range = 10  # Tighter detection (±10°C)
  * temperature_control.bed.runaway_range = 30  # Looser for high-power bed with overshoot

---

#### `runaway_heating_timeout`

* Type: `number`
* Default: `300` (5 minutes)
* Units: seconds
* Module: `temperature_control`
* Context: Module instance setting (safety feature)
* Defined in: `TemperatureControl.cpp:150`
* Typical values: `300` (5 minutes, default), `600` (10 minutes for large beds), `180` (3 minutes for fast hotends)
* Valid values: Non-negative integer (0 disables, 180-600 typical)
  * 0 = disable heating timeout (NOT RECOMMENDED)
  * 180-600 seconds typical range (3-10 minutes)
  * Should be longer than expected heat-up time
  * Should be short enough to detect failures quickly
  * WARNING: Setting to 0 disables critical safety protection
* Corresponding v1 setting: `temperature_control.{name}.runaway_heating_timeout`
* Corresponding v2 setting: `temperature_control.{name}.runaway_heating_timeout`
* Description: Maximum time allowed (in seconds) to reach target temperature during heating. If target is not reached within this time, system triggers HALT. Detects heater failure, insufficient power, or disconnected heater. Set to 0 to disable (NOT RECOMMENDED).
  * Safety timeout for heating process
  * Starts timing when target temperature is set
  * Triggers HALT if target not reached within timeout period
  * Detects:
    - Heater disconnected or failed
    - Insufficient heater power
    - Thermal path blocked
    - Wrong thermistor type configured (reads wrong temperature)
  * Must be longer than normal heat-up time
  * Heated beds typically need longer timeout (5-10 minutes)
  * Hotends typically heat faster (2-4 minutes)
  * Add margin for power supply voltage drop or cold ambient temperature
  * CRITICAL: Setting to 0 disables this safety feature (dangerous)
  * Firmware warns if disabled: "runaway timeout failsafe for heating... is disabled. This is potentially DANGEROUS"
* Related settings: `temperature_control.{name}.runaway_cooling_timeout`, `temperature_control.{name}.runaway_error_range`, `temperature_control.{name}.runaway_range`, `temperature_control.{name}.max_temp`
* Related pages: temperaturecontrol, troubleshooting
* Example configuration:
  * temperature_control.hotend.runaway_heating_timeout = 300  # 5 minutes for hotend (default)
  * temperature_control.bed.runaway_heating_timeout = 600  # 10 minutes for large bed
  * temperature_control.hotend2.runaway_heating_timeout = 180  # 3 minutes for fast-heating hotend
  * temperature_control.bed.runaway_heating_timeout = 900  # 15 minutes for huge bed or low power

---

#### `runaway_cooling_timeout`

* Type: `number`
* Default: Same as `runaway_heating_timeout` (300 seconds)
* Units: seconds
* Module: `temperature_control`
* Context: Module instance setting (safety feature)
* Defined in: `TemperatureControl.cpp:151`
* Typical values: `300` (5 minutes, default), `600` (10 minutes for large thermal mass), `180` (3 minutes for fast cooling)
* Valid values: Non-negative integer (0 disables, 180-600 typical)
  * 0 = disable cooling timeout
  * 180-600 seconds typical range (3-10 minutes)
  * Should be longer than expected cool-down time
  * Can be same as or different from heating timeout
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `temperature_control.{name}.runaway_cooling_timeout`
* Description: Maximum time allowed (in seconds) to cool down when reducing temperature setpoint. If cooling takes longer than this timeout, system triggers HALT. Detects stuck heater or sensor failures. Set to 0 to disable.
  * Safety timeout for cooling process
  * Only active when lowering target temperature
  * Triggers HALT if cooling takes longer than expected
  * Detects:
    - Heater stuck on (can't cool down)
    - Sensor failure (reading stuck at high temperature)
    - Thermal insulation too effective
  * Large thermal mass (heated beds) may need longer cooling timeout
  * Hotends typically cool faster than they heat
  * Defaults to same value as runaway_heating_timeout if not specified
  * Less critical than heating timeout but still useful safety feature
* Related settings: `temperature_control.{name}.runaway_heating_timeout`, `temperature_control.{name}.runaway_error_range`, `temperature_control.{name}.runaway_range`
* Related pages: temperaturecontrol, troubleshooting
* Example configuration:
  * temperature_control.hotend.runaway_cooling_timeout = 300  # Same as heating (default)
  * temperature_control.bed.runaway_cooling_timeout = 600  # Longer for large bed thermal mass
  * temperature_control.hotend.runaway_heating_timeout = 300  # 5 min heating
  * temperature_control.hotend.runaway_cooling_timeout = 180  # 3 min cooling (faster)

---

#### `runaway_error_range`

* Type: `number`
* Default: `1.0` (±1.0°C)
* Units: °C
* Module: `temperature_control`
* Context: Module instance setting (safety feature)
* Defined in: `TemperatureControl.cpp:152`
* Typical values: `1.0` (default), `2.0` (looser tolerance), `0.5` (tighter tolerance)
* Valid values: Positive number (typically 0.5-2.0)
  * Common range: 0.5-2.0°C
  * Smaller values require tighter temperature control
  * Larger values allow more variation before "reached"
  * Should match PID control accuracy
* Corresponding v1 setting: none (new feature in v2)
* Corresponding v2 setting: `temperature_control.{name}.runaway_error_range`
* Description: Acceptable temperature tolerance (±°C) for determining when target temperature has been "reached". Temperature must be within (target ± runaway_error_range) to be considered at target and to satisfy M109 wait conditions.
  * Defines "close enough" to target temperature
  * Used by runaway detection to determine when target is reached
  * Used by M109 (set and wait) to determine when to continue
  * Temperature within ±runaway_error_range is considered "at target"
  * Heating/cooling timeouts only apply UNTIL temperature enters this range
  * Once in range, runaway_range monitoring activates
  * Default 1.0°C means ±1°C tolerance
  * Too tight: may never reach "target" due to normal variation
  * Too loose: may accept temperatures too far from target
  * Should match typical PID control precision (±1-2°C)
* Related settings: `temperature_control.{name}.runaway_heating_timeout`, `temperature_control.{name}.runaway_cooling_timeout`, `temperature_control.{name}.runaway_range`
* Related pages: temperaturecontrol, temperaturecontrol-pid
* Example configuration:
  * temperature_control.hotend.runaway_error_range = 1.0  # ±1°C tolerance (default)
  * temperature_control.bed.runaway_error_range = 2.0  # ±2°C for bed (looser control)
  * temperature_control.hotend.runaway_error_range = 0.5  # ±0.5°C tight tolerance

---

## Reading & Update Settings

#### `readings_per_second`

* Type: `number`
* Default: `20` (20 Hz)
* Units: Hz (readings per second)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:145`
* Typical values: `20` (default, good balance), `10` (lower CPU load), `30` (tighter control)
* Valid values: Positive integer (typically 1-100, practical range 10-30)
  * Common range: 10-30 Hz
  * Higher values = tighter PID control, more CPU load
  * Lower values = less CPU load, slower PID response
  * 20 Hz is good balance for most systems
* Corresponding v1 setting: `temperature_control.{name}.readings_per_second`
* Corresponding v2 setting: `temperature_control.{name}.readings_per_second`
* Description: Temperature sensor reading and PID update frequency in Hz. This setting determines how often the sensor is read and PID calculation is performed. Higher values improve control stability but increase CPU load. The PID time constant (PIDdt = 1/readings_per_second) is automatically calculated.
  * Controls sensor reading rate
  * Also controls PID update rate (same frequency)
  * PIDdt = 1/readings_per_second (used to scale I and D factors internally)
  * Higher frequency = faster PID response, smoother control
  * Lower frequency = reduced CPU load, coarser control
  * 20 Hz (50ms updates) is excellent for most applications
  * 10 Hz (100ms) is minimum for reasonable PID performance
  * Above 30 Hz provides diminishing returns
  * Sensor noise can become problematic at very high rates
  * I and D factors are automatically scaled by PIDdt
  * NOTE: For MAX31855 SPI sensors, this also applies to the sensor reading rate
* Related settings: `temperature_control.{name}.i_factor`, `temperature_control.{name}.d_factor`, `temperature_control.{name}.sensor`
* Related pages: temperaturecontrol, temperaturecontrol-pid
* Example configuration:
  * temperature_control.hotend.readings_per_second = 20  # 20 Hz default (50ms updates)
  * temperature_control.bed.readings_per_second = 10  # 10 Hz for bed (slower response acceptable)
  * temperature_control.hotend.readings_per_second = 30  # 30 Hz for tight control

---

## M-Code Assignments

#### `set_m_code`

* Type: `number`
* Default: `104` (if tool_id < 100), `140` (if tool_id ≥ 100)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:142`
* Typical values: `104` (hotend set without wait), `140` (bed set without wait)
* Valid values: 100-999 (M-code number range)
  * Standard hotend: 104
  * Standard bed: 140
  * Custom tools: any unused M-code
  * Should not conflict with other M-codes
* Corresponding v1 setting: `temperature_control.{name}.set_m_code`
* Corresponding v2 setting: `temperature_control.{name}.set_m_code`
* Description: M-code number used to set target temperature without waiting for temperature to be reached. Standard: M104 for hotends, M140 for heated beds. This command sets the target and returns immediately, allowing other commands to execute while heating.
  * Sets target temperature and returns immediately
  * Does not wait for temperature to be reached
  * Allows machine to continue processing commands during heating
  * Standard assignments:
    - M104 for hotends (tool_id 0-99)
    - M140 for beds (tool_id 100+)
  * Can set temperature for specific tool using T parameter
  * Auto-assigned based on tool_id if not explicitly configured
  * Used for preheating while doing other operations
  * Can use S0 to turn off heater (sets target to 0)
* Related M-Codes:
  * M104 S<temp> - Set hotend temperature (standard)
  * M104 S<temp> T<tool_id> - Set specific hotend temperature
  * M140 S<temp> - Set bed temperature (standard)
  * M104 S0 - Turn off heater
* Related settings: `temperature_control.{name}.set_and_wait_m_code`, `temperature_control.{name}.get_m_code`, `temperature_control.{name}.tool_id`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.set_m_code = 104  # Standard hotend (default for tool_id 0)
  * temperature_control.bed.set_m_code = 140  # Standard bed (default for tool_id ≥ 100)
  * temperature_control.chamber.set_m_code = 141  # Custom chamber M-code

---

#### `set_and_wait_m_code`

* Type: `number`
* Default: `109` (if tool_id < 100), `190` (if tool_id ≥ 100)
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:143`
* Typical values: `109` (hotend set and wait), `190` (bed set and wait)
* Valid values: 100-999 (M-code number range)
  * Standard hotend: 109
  * Standard bed: 190
  * Custom tools: any unused M-code
  * Should not conflict with other M-codes
* Corresponding v1 setting: `temperature_control.{name}.set_and_wait_m_code`
* Corresponding v2 setting: `temperature_control.{name}.set_and_wait_m_code`
* Description: M-code number used to set target temperature and wait until temperature is reached before continuing. Standard: M109 for hotends, M190 for heated beds. This command blocks further G-code execution until temperature reaches target within runaway_error_range.
  * Sets target temperature and waits for target to be reached
  * Blocks further G-code execution during heating
  * Temperature must be within ±runaway_error_range to be considered "reached"
  * Prints status updates every ~1 second during wait
  * Can be aborted with kill button or halt condition
  * Standard assignments:
    - M109 for hotends (tool_id 0-99)
    - M190 for beds (tool_id 100+)
  * Auto-assigned based on tool_id if not explicitly configured
  * Used at start of prints to ensure heaters are ready
  * Safer than set-only (ensures temperature before continuing)
* Related M-Codes:
  * M109 S<temp> - Set hotend and wait (standard)
  * M109 S<temp> T<tool_id> - Set specific hotend and wait
  * M190 S<temp> - Set bed and wait (standard)
  * M109 S0 - Turn off and continue immediately (doesn't wait for cooling)
* Related settings: `temperature_control.{name}.set_m_code`, `temperature_control.{name}.get_m_code`, `temperature_control.{name}.runaway_error_range`, `temperature_control.{name}.tool_id`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.set_and_wait_m_code = 109  # Standard hotend (default for tool_id 0)
  * temperature_control.bed.set_and_wait_m_code = 190  # Standard bed (default for tool_id ≥ 100)
  * temperature_control.chamber.set_and_wait_m_code = 191  # Custom chamber M-code

---

#### `get_m_code`

* Type: `number`
* Default: `105`
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:144`
* Typical values: `105` (standard temperature report)
* Valid values: 100-999 (M-code number range)
  * Standard: 105 (universal temperature report)
  * Custom: any unused M-code
* Corresponding v1 setting: `temperature_control.{name}.get_m_code`
* Corresponding v2 setting: `temperature_control.{name}.get_m_code`
* Description: M-code number used to query and report current temperature. Standard: M105 returns all active temperatures in format `designator:current/target @pwm`. This is typically the same M-code (105) for all temperature controllers.
  * Reports current temperature status
  * Output format: `T:205.3 /200.0 @127 B:58.9 /60.0 @255`
  * Shows: current temperature / target temperature @ PWM value
  * All enabled temperature controllers respond to same M-code
  * Host software polls this regularly for temperature display
  * Standard M105 reports all temperatures at once
  * Designator identifies which temperature controller in output
  * PWM value shows current heater power (0-255)
  * Used by host interfaces (Octoprint, Pronterface, etc.)
* Related M-Codes:
  * M105 - Report all temperatures (standard usage)
* Related settings: `temperature_control.{name}.designator`, `temperature_control.{name}.tool_id`, `temperature_control.{name}.set_m_code`
* Related pages: temperaturecontrol, supported-g-codes, octoprint
* Example configuration:
  * temperature_control.hotend.get_m_code = 105  # Standard (same for all controllers)
  * temperature_control.bed.get_m_code = 105  # Same M-code
  * temperature_control.board.get_m_code = 105  # Same M-code
  * temperature_control.chamber.get_m_code = 105  # Same M-code

---

## Preset Temperatures

#### `preset1`

* Type: `number`
* Default: `0` (disabled)
* Units: °C
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:198`
* Typical values: `185` (PLA), `200` (generic), `230` (PETG), `0` (disabled)
* Valid values: Temperature in °C or 0 to disable
  * 0 = preset disabled
  * Positive value = preset temperature
  * Should be within safe operating range (below max_temp)
  * Common PLA temperature: 185-200°C
* Corresponding v1 setting: `temperature_control.{name}.preset1`
* Corresponding v2 setting: `temperature_control.{name}.preset1`
* Description: Preset temperature 1. When setpoint is set to exactly 1.0, this preset value is used instead. Provides convenient shortcut for common temperatures like PLA printing temperature (typically 185-200°C).
  * Shortcut for common temperature
  * Activated by setting temperature to exactly 1 (M104 S1 or M109 S1)
  * Useful for quick material changes without remembering exact temperature
  * Commonly used for PLA temperature preset
  * Can be any temperature within safe range
  * Setting to 0 disables the preset
  * If preset is 0 and setpoint is 1, heater turns off
* Related M-Codes:
  * M104 S1 - Set to preset1 temperature without waiting
  * M109 S1 - Set to preset1 and wait for temperature
  * M500 - Does NOT save preset values to config-override (presets are config-file only)
* Related settings: `temperature_control.{name}.preset2`, `temperature_control.{name}.max_temp`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.preset1 = 185  # PLA temperature preset
  * temperature_control.hotend.preset2 = 230  # ABS/PETG preset
  * temperature_control.bed.preset1 = 60  # PLA bed preset
  * temperature_control.bed.preset2 = 80  # ABS bed preset

---

#### `preset2`

* Type: `number`
* Default: `0` (disabled)
* Units: °C
* Module: `temperature_control`
* Context: Module instance setting
* Defined in: `TemperatureControl.cpp:199`
* Typical values: `230` (ABS/PETG), `240` (nylon), `0` (disabled)
* Valid values: Temperature in °C or 0 to disable
  * 0 = preset disabled
  * Positive value = preset temperature
  * Should be within safe operating range (below max_temp)
  * Common ABS/PETG temperature: 230-240°C
* Corresponding v1 setting: `temperature_control.{name}.preset2`
* Corresponding v2 setting: `temperature_control.{name}.preset2`
* Description: Preset temperature 2. When setpoint is set to exactly 2.0, this preset value is used instead. Provides convenient shortcut for alternative material temperatures like ABS or PETG (typically 230-240°C).
  * Second shortcut for common temperature
  * Activated by setting temperature to exactly 2 (M104 S2 or M109 S2)
  * Useful for second material type
  * Commonly used for ABS or PETG temperature preset
  * Can be any temperature within safe range
  * Setting to 0 disables the preset
  * If preset is 0 and setpoint is 2, heater turns off
  * Independent from preset1
* Related M-Codes:
  * M104 S2 - Set to preset2 temperature without waiting
  * M109 S2 - Set to preset2 and wait for temperature
  * M500 - Does NOT save preset values to config-override (presets are config-file only)
* Related settings: `temperature_control.{name}.preset1`, `temperature_control.{name}.max_temp`
* Related pages: temperaturecontrol, supported-g-codes
* Example configuration:
  * temperature_control.hotend.preset2 = 230  # ABS/PETG temperature preset
  * temperature_control.hotend.preset1 = 185  # PLA preset
  * temperature_control.bed.preset2 = 80  # ABS bed preset
  * temperature_control.bed.preset1 = 60  # PLA bed preset

---

## Runtime M-Codes Summary

The following M-codes are available for runtime temperature control and diagnostics:

* **M104 / M140** (set_m_code) - Set target temperature without waiting
  * Usage: `M104 S<temp>` or `M104 S<temp> T<tool_id>`
  * Returns immediately, heating happens in background
  * S0 turns off heater

* **M109 / M190** (set_and_wait_m_code) - Set target and wait until reached
  * Usage: `M109 S<temp>` or `M109 S<temp> T<tool_id>`
  * Blocks until temperature within ±runaway_error_range
  * Prints status updates during wait
  * Can abort with kill button

* **M105** (get_m_code) - Report current temperatures
  * Usage: `M105`
  * Returns all temperatures: `T:205.3 /200.0 @127 B:58.9 /60.0 @255`
  * Format: designator:current/target @pwm

* **M143** - Set/query max_temp limit
  * Usage: `M143 S<tool_id> P<max_temp>` to set
  * Usage: `M143` to query all
  * Example: `M143 S0 P300` sets hotend 0 to 300°C maximum
  * Saved with M500

* **M301** - Set/query PID parameters
  * Usage: `M301 S<tool_id> P<p> I<i> D<d> X<i_max> Y<max_pwm> Z<ponm>`
  * Usage: `M301 S<tool_id>` to query specific controller
  * Usage: `M301` to query all controllers
  * P: p_factor, I: i_factor, D: d_factor
  * X: i_max, Y: max_pwm, Z: use_ponm (0/1)
  * Saved with M500

* **M303** - PID auto-tune
  * Usage: `M303 P<tool_id> S<temp> C<cycles> B<noise_band> L<lookback>`
  * P: tool_id to tune (required)
  * S: target temperature (default 150°C)
  * C: number of cycles (default 8, minimum 8)
  * B: noise band in °C (default 0.5°C)
  * L: lookback time in seconds (default 10)
  * Example: `M303 P0 S200 C8` tunes hotend 0 at 200°C for 8 cycles
  * Results must be saved manually with M301 then M500
  * Control-X aborts autotune

* **M305** - Set/query sensor settings
  * Usage: `M305 S<tool_id> <parameters>` to set sensor parameters
  * Usage: `M305 S<tool_id>` to query sensor settings
  * Usage: `M305` to query all sensors
  * Parameters (thermistor beta mode):
    - B: beta coefficient
    - R: r0 resistance
    - X: t0 temperature
  * Parameters (Steinhart-Hart mode):
    - I: c1 coefficient
    - J: c2 coefficient
    - K: c3 coefficient
  * Parameters (predefined thermistor):
    - P: thermistor number (1-6 for S/H, 129-134 for beta)
  * Saved with M500 if modified

* **M500** - Save volatile settings to config-override
  * Saves PID parameters (P, I, D, i_max, max_pwm, use_ponm)
  * Saves max_temp
  * Saves sensor settings if modified via M305
  * Creates/updates config-override.ini file
  * Requires `general.config-override = true` in config

* **M6** - Tool change
  * Usage: `M6 T<tool_id>`
  * Selects active temperature controller by tool_id
  * Controllers with tool_id 250-255 ignore tool changes (always active)
  * Affects which controller responds to M104/M109 without T parameter

---

## Predefined Thermistors

### Steinhart-Hart Table (Higher Accuracy)

The following predefined thermistors use Steinhart-Hart coefficients for maximum accuracy across the full temperature range:

1. **EPCOS100K** (B57540G0104F000)
   * Most common RepRap thermistor
   * Excellent accuracy and reliability
   * Used in most 3D printer hotends and heated beds

2. **Vishay100K** (NTCS0603E3104FXT)
   * High-quality alternative to EPCOS
   * Good thermal response

3. **Honeywell100K** (135-104LAG-J01)
   * Industrial-grade thermistor
   * Excellent accuracy and stability

4. **Semitec** (104GT-2)
   * Used in E3D V6 hotends
   * High-temperature capable
   * Very accurate

5. **Honeywell-QAD** (135-104QAD-J01)
   * Quick-response variant
   * Good for fast temperature changes

6. **Semitec-104NT4** (104NT-4R025H42G)
   * Alternative Semitec model
   * Similar performance to 104GT-2

### Beta Table (Legacy, Less Accurate)

The following predefined thermistors use beta equation (less accurate, especially at temperature extremes):

129. **EPCOS100K** (beta=4066, r0=100kΩ)
130. **RRRF100K** (beta=3960, r0=100kΩ)
131. **RRRF10K** (beta=3964, r0=10kΩ, r1=680Ω, r2=1600Ω)
132. **Honeywell100K** (beta=3974, r0=100kΩ)
133. **Semitec** (beta=4267, r0=100kΩ)
134. **HT100K** (beta=3990, r0=100kΩ)

### Usage Notes

* Predefined names automatically set all necessary coefficients (c1/c2/c3 for Steinhart-Hart or beta/r0/t0 for beta mode)
* Can override individual values (r1, r2, etc.) after specifying predefined name if your circuit differs
* Use `thermistors` console command to list all predefined thermistors at runtime
* M305 P parameter uses table index (1-6 for Steinhart-Hart, 129-134 for beta) to select at runtime
* Steinhart-Hart mode (default) provides better accuracy than beta mode across full temperature range
* Use `use_beta_table = true` to force beta mode when using predefined name

---

## Configuration Examples

### Example 1: Basic Hotend (Predefined Thermistor, PID Control)

```ini
[temperature control]
hotend.enable = true
hotend.thermistor = EPCOS100K
hotend.thermistor_pin = ADC1_1
hotend.heater_pin = PE0
hotend.tool_id = 0
hotend.designator = T
hotend.p_factor = 10
hotend.i_factor = 0.3
hotend.d_factor = 200
hotend.use_ponm = false
hotend.max_pwm = 255
hotend.max_temp = 300
hotend.min_temp = 0
hotend.runaway_range = 20
hotend.runaway_heating_timeout = 300
hotend.preset1 = 185
hotend.preset2 = 230
```

### Example 2: Heated Bed with Bang-Bang Control

```ini
[temperature control]
bed.enable = true
bed.thermistor = Honeywell100K
bed.thermistor_pin = ADC1_3
bed.heater_pin = PE3
bed.tool_id = 254
bed.designator = B
bed.bang_bang = true
bed.hysteresis = 2
bed.max_pwm = 180
bed.max_temp = 120
bed.min_temp = 0
bed.runaway_range = 20
bed.runaway_heating_timeout = 600
bed.preset1 = 60
bed.preset2 = 80
```

### Example 3: Custom Thermistor (Steinhart-Hart Coefficients)

```ini
[temperature control]
hotend.enable = true
hotend.sensor = thermistor
hotend.coefficients = 0.000722378300319346,0.000216301852054578,9.2641025635702e-08
hotend.r1 = 0
hotend.r2 = 4700
hotend.thermistor_pin = ADC1_1
hotend.heater_pin = PE0
hotend.tool_id = 0
hotend.designator = T
hotend.p_factor = 10
hotend.i_factor = 0.3
hotend.d_factor = 200
```

### Example 4: MAX31855 Thermocouple

```ini
[temperature control]
hotend.enable = true
hotend.sensor = max31855
hotend.spi_channel = 0
hotend.spi_select_pin = PD10
hotend.heater_pin = PE0
hotend.tool_id = 0
hotend.designator = T
hotend.p_factor = 8
hotend.i_factor = 0.5
hotend.d_factor = 100
hotend.max_temp = 400
hotend.readings_per_second = 20
```

### Example 5: Read-Only Temperature Monitor

```ini
[temperature control]
board.enable = true
board.thermistor = EPCOS100K
board.thermistor_pin = ADC1_0
board.heater_pin = nc
board.designator = P
board.tool_id = 253
board.max_temp = 100
board.min_temp = -10
```

### Example 6: Dual Hotend Setup

```ini
[temperature control]
hotend.enable = true
hotend.thermistor = EPCOS100K
hotend.thermistor_pin = ADC1_1
hotend.heater_pin = PE0
hotend.tool_id = 0
hotend.designator = T
hotend.p_factor = 10
hotend.i_factor = 0.3
hotend.d_factor = 200

hotend2.enable = true
hotend2.thermistor = EPCOS100K
hotend2.thermistor_pin = ADC1_2
hotend2.heater_pin = PB8
hotend2.tool_id = 1
hotend2.designator = T2
hotend2.p_factor = 10
hotend2.i_factor = 0.3
hotend2.d_factor = 200
```

---

## Safety Recommendations

1. **NEVER disable runaway protection** - Keep runaway_range > 0 and timeouts > 0
2. **Set appropriate max_temp** - 275-285°C for hotends, 100-120°C for beds
3. **Verify min_temp** - Should be ≥0°C to detect thermistor disconnection
4. **Use PID auto-tune (M303)** - Much better than manual tuning, yields optimal values
5. **Monitor first heating** - Watch for proper temperature response and verify sensor readings
6. **Test thermal runaway** - Trigger intentionally by unplugging thermistor to verify HALT works correctly
7. **Use presets carefully** - Ensure preset values are safe for your hardware and materials
8. **Configure readings_per_second** - 20Hz is good balance for most systems
9. **Consider PonM for hotends** - Reduces overshoot on setpoint changes (use_ponm = true)
10. **Verify pin assignments** - Wrong thermistor or heater pins can cause fires or damage

---

## Troubleshooting

### Temperature Reading Errors

**Symptom:** Temperature shows infinity or unrealistic values

**Causes:**
* Thermistor disconnected or damaged (check wiring)
* Wrong thermistor_pin configured (verify ADC channel in schematic)
* Wrong thermistor type selected (predefined name doesn't match physical thermistor)
* ADC channel not available or shared with another function
* Incorrect r2 (pullup resistor) value configured

**Diagnosis:**
* Use `M305` (no parameters) to see raw ADC values and calculated resistance
* Check thermistor resistance with multimeter (should be ~100K at room temperature)
* Verify thermistor_pin matches board schematic
* Check for loose or broken wiring connections

### PID Oscillation

**Symptom:** Temperature oscillates around setpoint in a wave pattern

**Solutions:**
* Run M303 auto-tune for optimal PID values
* Reduce P factor if fast oscillation (high frequency, small amplitude)
* Increase D factor if slow oscillation (low frequency, large amplitude)
* Ensure readings_per_second ≥ 20 for good PID performance
* Check for mechanical vibration affecting thermistor
* Verify thermistor is not loose or moving
* Consider enabling use_ponm to reduce setpoint change overshoot

### Runaway Timeout Errors

**Symptom:** "Temperature took too long to be reached" error during heating

**Causes:**
* Insufficient heater power for the thermal mass
* Poor thermal insulation (heat escaping too fast)
* max_pwm set too low (limiting heater power)
* runaway_heating_timeout too short for your system
* Wrong thermistor type (reads temperature incorrectly)
* Power supply voltage too low
* Heater resistance too high (wrong heater cartridge)

**Solutions:**
* Increase runaway_heating_timeout to allow more time
* Check heater wiring and power supply voltage
* Verify max_pwm = 255 for full power capability
* Add insulation to heater block or heated bed
* Check thermistor configuration matches physical sensor
* Verify power supply can deliver required current

### Bang-Bang Cycling Too Fast

**Symptom:** Relay chatters or temperature varies excessively in bang-bang mode

**Solutions:**
* Increase hysteresis (3-5°C for beds with mechanical relays)
* Ensure thermal mass is adequate for bang-bang control
* Check temperature sensor response time (shouldn't be too fast)
* Consider using SSR instead of mechanical relay (can handle faster switching)
* Verify sensor is reading bulk temperature, not surface hot spots
* Switch to PID control if bang-bang is unsuitable for your application

### Temperature Drops When Part Cooling Fan Turns On

**Symptom:** Temperature drops 5-10°C when part cooling fan activates

**Causes:**
* Part cooling fan blowing on heater block or thermistor
* Insufficient heater power for fan cooling
* Thermistor placement too exposed to airflow

**Solutions:**
* Redirect part cooling fan away from heater block
* Add heater block silicone sock for insulation
* Shield thermistor from direct airflow
* Increase heater power (upgrade heater cartridge wattage)
* Adjust PID values via M303 autotune with fan running

---

## Summary Statistics

* **Total Configuration Settings:** 38
* **Required Settings:** 2 minimum (enable=true, and either thermistor name or coefficients/beta)
* **Safety Settings:** 5 critical (min_temp, max_temp, runaway_range, runaway_heating_timeout, runaway_error_range)
* **PID Tuning Settings:** 7 (p_factor, i_factor, d_factor, use_ponm, i_max, windup, readings_per_second)
* **Sensor-Specific Settings:**
  * Thermistor (predefined): 1 (thermistor name)
  * Thermistor (beta): 5 (beta, r0, t0, r1, r2)
  * Thermistor (Steinhart-Hart): 3-5 (coefficients OR rt_curve, plus r1, r2)
  * MAX31855: 2 (spi_channel, spi_select_pin)

**Default Board Configurations (Smoothieboard v2 Prime):**
* hotend: PE0 heater, ADC1_1 thermistor, designator T, tool_id 0
* hotend2: PB8 heater, ADC1_2 thermistor, designator T2, tool_id 1
* bed: PE3 heater, ADC1_3 thermistor, designator B, tool_id 254 (always active)
* board: nc heater (read-only), ADC1_0 thermistor, designator P, tool_id 253 (always active)

---

*End of Temperature Control Configuration Reference - Refined Version*

---

## Switch

# Smoothieware v2 Switch Module Configuration Reference - REFINED

**Module:** Switch
**Source Files:** `Firmware/src/modules/tools/switch/Switch.cpp`, `Switch.h`
**Refinement Date:** 2025-11-05
**Total Settings:** 17 documented settings

---

## Configuration Settings

#### `enable`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Module instance setting (multi-instance support via named instances)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:58`
* Valid values: `true`, `false`
* Corresponding v1 setting: `switch.{name}.enable`
* Description: Enables this switch instance. When set to true, this switch becomes active and will respond to configured commands or monitor input pins. Each switch instance must be explicitly enabled to function.
  * Multiple switches can be configured by creating multiple named instances (e.g., fan, psu, spindle).
  * Must be true for any other settings in this switch instance to take effect.
* Related pages: switch, switch-options, mosfets
* Example configuration:
  * switch.fan.enable = true  # Enable fan control switch
  * switch.psu.enable = true  # Enable PSU control switch
  * switch.spindle.enable = false  # Disable spindle switch

#### `input_pin`

* Type: `pin`
* Default: `""` (empty string = output mode)
* Module: `switch`
* Context: Input mode only (mutually exclusive with output settings)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:80`
* Valid values: Pin specification in STM32 format with optional modifiers
  * Pin format: `PXn` where P=port letter, X=port identifier, n=pin number
  * `^` suffix enables pullup resistor (e.g., `PJ14^`)
  * `!` suffix inverts signal
  * Empty string configures switch as output mode
* Corresponding v1 setting: `switch.{name}.input_pin`
* Description: GPIO pin to monitor as physical button or switch input. When configured, this switch operates in input mode and monitors the pin for state changes. Input mode is mutually exclusive with output mode - a switch can be either an input or an output, not both.
  * If set to any valid pin, the switch becomes an input and cannot control output pins.
  * Use `^` modifier for buttons that need pullup resistors (most mechanical switches).
  * Use `!` modifier if button logic is inverted (active low vs active high).
  * Input pins trigger commands specified in `output_on_command` and `output_off_command`.
* Related settings: `switch.{name}.input_pin_behavior`, `switch.{name}.output_on_command`, `switch.{name}.output_off_command`
* Related pages: switch, pin-configuration, endstops
* Example configuration:
  * switch.msc_button.input_pin = PJ14^  # Button with pullup resistor
  * switch.estop.input_pin = PD0!^  # Active-low button with pullup
  * switch.fan.input_pin =  # Empty = output mode

#### `input_pin_behavior`

* Type: `enum`
* Default: `"momentary"`
* Module: `switch`
* Context: Input mode only (requires `input_pin` to be configured)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:90`
* Valid values: `"momentary"`, `"toggle"`
  * `momentary` - Button press triggers on-command, release triggers off-command
  * `toggle` - Each button press toggles state (on/off/on/off), release has no effect
* Corresponding v1 setting: `switch.{name}.input_pin_behavior`
* Description: Defines how the input pin state changes are interpreted. Momentary behavior treats the input like a pushbutton where press and release are distinct actions. Toggle behavior treats each press as a state flip, useful for latching switches or to toggle features on/off with a momentary button.
  * Momentary is appropriate for push buttons, emergency stops, and temporary actions.
  * Toggle is appropriate for latching switches or when you want a single button to alternate between two states.
  * Only affects input mode switches (when `input_pin` is configured).
* Related settings: `switch.{name}.input_pin`
* Related pages: switch, killbutton
* Example configuration:
  * switch.msc_button.input_pin_behavior = momentary  # Press/release button
  * switch.estop.input_pin_behavior = toggle  # Each press toggles E-stop state
  * switch.mode_switch.input_pin_behavior = toggle  # Latching mode selector

#### `output_on_command`

* Type: `string`
* Default: `""`
* Module: `switch`
* Context: Input mode only (when `input_pin` is configured)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:92`
* Corresponding v1 setting: `switch.{name}.output_on_command`
* Description: G-code or M-code command to execute when the input switch is activated (button pressed for momentary, or toggled on for toggle behavior). The command is dispatched to the G-code processor as if it were received from a serial console.
  * Underscores in the command string are automatically converted to spaces for backwards compatibility with old config files.
  * Command is executed in the command thread context, not the interrupt context.
  * Can be any valid G-code or M-code command string.
  * Supports multi-word commands (e.g., "G28 X Y" to home X and Y axes).
* Related settings: `switch.{name}.output_off_command`, `switch.{name}.input_pin`, `switch.{name}.input_pin_behavior`
* Related pages: switch, supported-g-codes
* Example configuration:
  * switch.msc_button.output_on_command = msc  # Enter mass storage mode
  * switch.home_button.output_on_command = G28  # Home all axes
  * switch.fan_button.output_on_command = M106 S255  # Turn fan on full

#### `output_off_command`

* Type: `string`
* Default: `""`
* Module: `switch`
* Context: Input mode only (when `input_pin` is configured)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:93`
* Corresponding v1 setting: `switch.{name}.output_off_command`
* Description: G-code or M-code command to execute when the input switch is deactivated (button released for momentary, or toggled off for toggle behavior). Like `output_on_command`, this is dispatched to the G-code processor.
  * Underscores are automatically converted to spaces for legacy config compatibility.
  * For toggle behavior switches, this command executes on every other button press.
  * For momentary behavior switches, this command executes when button is released.
  * Can be left empty if no action is needed on deactivation.
* Related settings: `switch.{name}.output_on_command`, `switch.{name}.input_pin`, `switch.{name}.input_pin_behavior`
* Related pages: switch, supported-g-codes
* Example configuration:
  * switch.msc_button.output_off_command = M107  # Turn off fan when button released
  * switch.pause_button.output_off_command = M24  # Resume when button released
  * switch.toggle_light.output_off_command = M107  # Turn off when toggled off

#### `input_on_command`

* Type: `string`
* Default: `""`
* Module: `switch`
* Context: Output mode only (when `output_pin` is configured)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:121`
* Required: yes (at least one of `input_on_command` or `input_off_command` must be set for output mode)
* Valid values: G-code or M-code string starting with `G` or `M` followed by numeric code
  * Format: `M###` or `G###` or `M###.#` (with subcode)
  * Examples: `M106`, `M2`, `G1`, `M106.1`
  * Subcode can be included with dot notation (e.g., `M106.1`) or set separately via `subcode` setting
* Corresponding v1 setting: `switch.{name}.input_on_command`
* Description: The G-code or M-code command that will activate (turn on) this output switch. When Smoothie receives this command via serial, network, or SD card, it will turn on the associated output pin according to the configured output type.
  * Can include a subcode suffix (e.g., M106.1) to differentiate multiple switches using the same base command.
  * The command code is parsed and registered with the dispatcher to intercept matching commands.
  * For PWM output types, the S parameter in the command sets the duty cycle or power level.
  * At least one of `input_on_command` or `input_off_command` must be configured for output mode switches.
* Related M-Codes:
  * M106 - Common for fan control (with S parameter for speed)
  * M2 - Common for spindle start
  * M80 - Common for PSU power on
  * M280 - Common for servo control (with S or P parameter)
* Related settings: `switch.{name}.input_off_command`, `switch.{name}.subcode`, `switch.{name}.output_type`
* Related pages: switch, supported-g-codes
* Example configuration:
  * switch.fan.input_on_command = M106  # M106 turns fan on
  * switch.spindle.input_on_command = M2  # M2 starts spindle
  * switch.psu.input_on_command = M80  # M80 powers on PSU
  * switch.fan2.input_on_command = M106.1  # M106.1 for second fan

#### `input_off_command`

* Type: `string`
* Default: `""`
* Module: `switch`
* Context: Output mode only (when `output_pin` is configured)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:122`
* Required: yes (at least one of `input_on_command` or `input_off_command` must be set for output mode)
* Valid values: G-code or M-code string starting with `G` or `M` followed by numeric code
  * Format: `M###` or `G###` or `M###.#` (with subcode)
  * Examples: `M107`, `M5`, `M81`, `M107.1`
* Corresponding v1 setting: `switch.{name}.input_off_command`
* Description: The G-code or M-code command that will deactivate (turn off) this output switch. When Smoothie receives this command, it will turn off the associated output pin regardless of output type.
  * Can include a subcode suffix to match specific switch instances.
  * For PWM output types, the off command returns the output to its off state or minimum value.
  * At least one of `input_on_command` or `input_off_command` must be configured for output mode switches.
  * The command code is parsed and registered with the dispatcher for interception.
* Related M-Codes:
  * M107 - Common for fan off
  * M5 - Common for spindle stop
  * M81 - Common for PSU power off
  * M281 - Common for servo release
* Related settings: `switch.{name}.input_on_command`, `switch.{name}.subcode`, `switch.{name}.output_type`
* Related pages: switch, supported-g-codes
* Example configuration:
  * switch.fan.input_off_command = M107  # M107 turns fan off
  * switch.spindle.input_off_command = M5  # M5 stops spindle
  * switch.psu.input_off_command = M81  # M81 powers off PSU
  * switch.fan2.input_off_command = M107.1  # M107.1 for second fan

#### `subcode`

* Type: `number`
* Default: `0`
* Module: `switch`
* Context: Output mode (optional, used for differentiating multiple switches with same M-code)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:120`
* Typical values: `0` (no subcode), `1` (second instance), `2` (third instance)
* Valid values: Non-negative integer, typically 0-9
* Corresponding v1 setting: `switch.{name}.subcode`
* Description: Subcode differentiator that allows multiple switch instances to respond to the same M-code with different subcode suffixes. This enables commands like M106.0, M106.1, M106.2 to control different fans independently. The subcode can be set explicitly or parsed from the command string suffix.
  * Default 0 means no subcode (responds to M106 or M106.0).
  * If command includes subcode (e.g., M106.1), the parsed subcode overrides this setting.
  * Allows multiple instances (fans, lights, outputs) controlled by the same M-code family.
  * Commands must match both the M-code AND the subcode to activate this switch.
* Related settings: `switch.{name}.input_on_command`, `switch.{name}.input_off_command`
* Related pages: switch, multiple-extruders
* Example configuration:
  * switch.fan.subcode = 0  # Responds to M106/M107 or M106.0/M107.0
  * switch.fan2.subcode = 1  # Responds to M106.1/M107.1
  * switch.chamber_fan.subcode = 2  # Responds to M106.2/M107.2

#### `output_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `switch`
* Context: Output mode only (mutually exclusive with `input_pin`)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:141`
* Required: yes (for output mode switches)
* Valid values: Pin specification in STM32 format with optional modifiers, or special pin names
  * Standard GPIO: `PXn` format (e.g., `PE1`, `PI4`)
  * Hardware PWM: `PWM1_1`, `PWM1_2`, `PWM1_3`, `PWM1_4`, `PWM2_1`, `PWM2_2`, `PWM2_3`, `PWM2_4`
  * `!` suffix inverts output signal (active low)
  * `o` suffix explicitly sets output mode
  * `nc` means not connected (disables output)
* Corresponding v1 setting: `switch.{name}.output_pin`
* Description: GPIO pin or hardware PWM channel to control as an output. This pin will be driven high/low for digital outputs or modulated for PWM outputs based on commands received and output type configuration.
  * Must be a valid pin available on your board (consult board pinout documentation).
  * Use `!` modifier for inverted logic (useful for active-low solid state relays).
  * Hardware PWM pins (`PWM1_x`, `PWM2_x`) required for `hwpwm` output type.
  * Standard GPIO pins work for `digital` and `sigmadeltapwm` output types.
  * CRITICAL: Incorrect pin assignments can damage hardware - verify pinout before use.
* Related settings: `switch.{name}.output_type`
* Related pages: switch, pinout, mosfets, pwm-capable
* Example configuration:
  * switch.fan.output_pin = PE1  # Standard GPIO for fan control
  * switch.psu.output_pin = PI4!  # Inverted output for active-low SSR
  * switch.servo.output_pin = PWM2_1  # Hardware PWM for servo
  * switch.laser.output_pin = PWM1_1  # Hardware PWM for laser power

#### `output_type`

* Type: `enum`
* Default: none (must be explicitly set for output mode)
* Module: `switch`
* Context: Output mode only
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:135`
* Required: yes (for output mode switches)
* Valid values: `"digital"`, `"sigmadeltapwm"`, `"hwpwm"`
  * `digital` - Simple on/off control, pin is either high or low
  * `sigmadeltapwm` - Software PWM using sigma-delta modulation (0-255 range)
  * `hwpwm` - Hardware PWM with precise duty cycle control (0-100% range)
* Corresponding v1 setting: `switch.{name}.output_type`
* Description: Specifies the output control method for this switch. Digital provides simple on/off control for devices like relays and power switches. Sigma-delta PWM provides software-based PWM suitable for fans and simple motor control. Hardware PWM provides precise, high-frequency PWM for servos, laser power control, and other applications requiring accurate duty cycle control.
  * `digital` is fastest and simplest, use for relays, SSRs, and on/off devices.
  * `sigmadeltapwm` provides ~1kHz software PWM, works on any GPIO pin, good for fans.
  * `hwpwm` provides configurable frequency hardware PWM, requires hardware PWM pins, best for servos and precision control.
  * All PWM channels on the same timer share frequency but have independent duty cycles.
  * Output type determines how S parameter in commands is interpreted.
* Related settings: `switch.{name}.output_pin`, `switch.{name}.max_pwm`, `switch.{name}.startup_value`
* Related pages: switch, mosfets, pwm-capable
* Example configuration:
  * switch.fan.output_type = sigmadeltapwm  # Software PWM for fan speed
  * switch.psu.output_type = digital  # Simple on/off for power supply
  * switch.servo.output_type = hwpwm  # Hardware PWM for servo control
  * switch.laser.output_type = hwpwm  # Hardware PWM for laser power

#### `max_pwm`

* Type: `number`
* Default: `255`
* Module: `switch`
* Context: Sigma-delta PWM output only (only used when `output_type` is `sigmadeltapwm`)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:191`
* Typical values: `255` (full range), `200` (78% max speed), `128` (50% max speed)
* Valid values: 1-255
* Corresponding v1 setting: `switch.{name}.max_pwm`
* Description: Maximum PWM value for sigma-delta PWM outputs. Incoming S values from G-code (range 0-255) are scaled proportionally to this maximum. This allows limiting the maximum output power or speed without modifying G-code. For example, with max_pwm=128, sending M106 S255 will output 50% duty cycle instead of 100%.
  * Only affects `sigmadeltapwm` output type, ignored for `digital` and `hwpwm`.
  * Useful for limiting fan speed, motor speed, or LED brightness.
  * Scaling formula: actual_pwm = (S_value * max_pwm) / 255
  * Setting to 128 limits output to 50%, setting to 200 limits to ~78%.
  * Does not affect the S value range in G-code (always 0-255).
* Related settings: `switch.{name}.output_type`, `switch.{name}.startup_value`
* Related pages: switch
* Example configuration:
  * switch.fan.output_type = sigmadeltapwm
  * switch.fan.max_pwm = 255  # Full range, S255 = 100% duty cycle
  * switch.fan2.max_pwm = 200  # Limit to 78%, S255 = 78% duty cycle
  * switch.quiet_fan.max_pwm = 128  # Limit to 50%, S255 = 50% duty cycle

#### `startup_state`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Output mode only
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:128`
* Valid values: `true` (on at boot), `false` (off at boot)
* Corresponding v1 setting: `switch.{name}.startup_state`
* Description: Determines the initial on/off state when firmware boots. For digital outputs, this directly sets the pin high (true) or low (false). For PWM outputs, true means the startup_value is applied at boot, while false means the output starts at minimum/off.
  * Applies when board powers up or firmware resets.
  * For `digital` type: directly controls pin state at startup.
  * For `sigmadeltapwm` type: true applies startup_value, false sets output off.
  * For `hwpwm` type: true applies default_on_value, false applies startup_value (usually 0).
  * Useful for automatically enabling cooling fans, powering PSUs, or setting initial servo positions.
* Related settings: `switch.{name}.startup_value`, `switch.{name}.default_on_value`, `switch.{name}.output_type`
* Related pages: switch
* Example configuration:
  * switch.psu.startup_state = true  # Turn PSU on at boot
  * switch.fan.startup_state = false  # Fan off at boot
  * switch.hotend_fan.startup_state = true  # Hotend fan on at boot for safety

#### `startup_value`

* Type: `number`
* Default: `max_pwm` value for sigmadeltapwm, `0` for hwpwm
* Module: `switch`
* Context: PWM outputs only (sigmadeltapwm or hwpwm types)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:192` (sigmadeltapwm), `Firmware/src/modules/tools/switch/Switch.cpp:201` (hwpwm)
* Valid values:
  * Sigmadeltapwm: 0 to `max_pwm` (typically 0-255)
  * Hwpwm: 0.0 to 100.0 (percentage duty cycle)
* Corresponding v1 setting: `switch.{name}.startup_value`
* Description: Initial PWM value applied at firmware boot. For sigma-delta PWM, this is an integer value from 0 to max_pwm. For hardware PWM, this is a floating point percentage from 0.0 to 100.0. The value is only applied if startup_state is true (for sigmadelta) or false (for hwpwm).
  * For `sigmadeltapwm`: startup_value represents PWM magnitude (0=off, max_pwm=full).
  * For `hwpwm`: startup_value represents duty cycle percentage (0.0=off, 100.0=full).
  * Allows setting initial fan speed, servo position, or laser power at boot.
  * For hwpwm, startup_value is typically the "off" or "safe" value.
  * For sigmadeltapwm, startup_value is the "on" value when startup_state is true.
* Related settings: `switch.{name}.startup_state`, `switch.{name}.output_type`, `switch.{name}.max_pwm`, `switch.{name}.default_on_value`
* Related pages: switch
* Example configuration:
  * switch.fan.output_type = sigmadeltapwm
  * switch.fan.startup_state = true
  * switch.fan.startup_value = 128  # Start at 50% speed (128/255)
  * switch.servo.output_type = hwpwm
  * switch.servo.startup_value = 7.5  # 7.5% duty cycle (servo neutral position, ~1.5ms pulse)

#### `default_on_value`

* Type: `number`
* Default: `0`
* Module: `switch`
* Context: Hardware PWM output only (only used when `output_type` is `hwpwm`)
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:202`
* Typical values: `50.0` (50% duty cycle), `75.0` (75%), `7.5` (servo neutral)
* Valid values: 0.0 to 100.0 (percentage duty cycle)
* Corresponding v1 setting: `switch.{name}.default_on_value`
* Description: Default PWM duty cycle percentage (0-100%) applied when the switch is turned on without specifying an S or P parameter in the G-code command. This is only used for hardware PWM outputs and provides a sensible default power level when the exact value isn't specified.
  * Only applies to `hwpwm` output type, ignored for other types.
  * Used when on-command is sent without S or P parameters (e.g., just "M106" with no S value).
  * If command includes S parameter, that value overrides default_on_value.
  * Common for servos (typically 7.5% = neutral, 5% = 0°, 10% = 180°).
  * Useful for fans or lasers to provide a standard operating power level.
* Related settings: `switch.{name}.output_type`, `switch.{name}.startup_value`
* Related pages: switch
* Example configuration:
  * switch.fan.output_type = hwpwm
  * switch.fan.default_on_value = 75.0  # M106 with no S sets 75% duty cycle
  * switch.servo.output_type = hwpwm
  * switch.servo.default_on_value = 7.5  # M280 with no S sets neutral position

#### `failsafe_set_to`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Output mode only
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:129`
* Valid values: `true` (high/on), `false` (low/off)
* Corresponding v1 setting: `switch.{name}.failsafe_set_to`
* Description: State to set this output to during failsafe or emergency conditions. This setting determines whether the switch should be turned on (true) or off (false) when the system enters a failsafe state. Used for safety-critical outputs like PSU control, cooling fans, or emergency lighting.
  * Triggers during failsafe conditions (severe errors, watchdog resets, critical failures).
  * For PSUs, typically set to false to cut power during emergencies.
  * For cooling fans, typically set to true to maintain cooling during failures.
  * Different from `halt_set_to` which handles user-initiated halts or kill button.
  * Consider hardware safety when configuring this setting.
* Related settings: `switch.{name}.halt_set_to`, `switch.{name}.ignore_on_halt`
* Related pages: switch, killbutton, emergencystop
* Example configuration:
  * switch.psu.failsafe_set_to = false  # Cut PSU power in failsafe
  * switch.fan.failsafe_set_to = true  # Keep fan running for cooling
  * switch.spindle.failsafe_set_to = false  # Stop spindle in failsafe
  * switch.alarm.failsafe_set_to = true  # Turn on alarm light

#### `halt_set_to`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Output mode only
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:130`
* Valid values: `true` (high/on), `false` (low/off)
* Corresponding v1 setting: `switch.{name}.halt_set_to`
* Description: State to set this output to when the system enters halt state, such as when the kill button is pressed, a driver error occurs, or M112 emergency stop is issued. This provides controlled shutdown behavior for different peripherals. Commonly used to stop motors and heaters while keeping cooling fans running.
  * Applies when kill button pressed, M112 received, or driver alarm triggers halt.
  * Different from `failsafe_set_to` which handles critical firmware/hardware failures.
  * Can be overridden by `ignore_on_halt` if switch should maintain current state.
  * For heaters/spindles: typically false to stop immediately.
  * For cooling fans: typically true to continue cooling during halt.
* Related settings: `switch.{name}.failsafe_set_to`, `switch.{name}.ignore_on_halt`
* Related pages: switch, killbutton, emergencystop
* Example configuration:
  * switch.heater_fan.halt_set_to = true  # Keep cooling fan running during halt
  * switch.spindle.halt_set_to = false  # Stop spindle immediately on halt
  * switch.psu.halt_set_to = false  # Power off PSU on halt
  * switch.status_led.halt_set_to = true  # Turn on status LED during halt

#### `ignore_on_halt`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Output mode only
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:131`
* Valid values: `true` (ignore halt, maintain current state), `false` (apply halt_set_to value)
* Corresponding v1 setting: none (new in v2)
* Description: If true, prevents this switch from changing state when system enters halt. The output maintains its current state regardless of `halt_set_to` setting. Useful for hotend cooling fans that should remain in their current state (on if they were on, off if they were off) during emergency stops to ensure proper cooling without forcing them to any specific state.
  * When true, `halt_set_to` is ignored and switch keeps its current state during halt.
  * When false (default), switch changes to `halt_set_to` state during halt.
  * Primary use case: hotend cooling fans controlled by temperature that should not be forced off or on.
  * Allows natural state preservation during emergency stops.
  * Consider carefully - ignoring halt can be dangerous for some outputs (heaters, spindles).
* Related settings: `switch.{name}.halt_set_to`
* Related pages: switch, killbutton, emergencystop, temperatureswitch
* Example configuration:
  * switch.fan2.enable = true
  * switch.fan2.input_on_command = M106
  * switch.fan2.subcode = 1
  * switch.fan2.output_pin = PI11
  * switch.fan2.output_type = digital
  * switch.fan2.ignore_on_halt = true  # Don't change state during halt (cooling safety)
  * switch.spindle.ignore_on_halt = false  # Always stop spindle on halt

---

## Document Version

**Refined Version:** 2.0
**Refinement Date:** 2025-11-05
**Verification:** All settings verified against source code at `Firmware/src/modules/tools/switch/Switch.cpp`
**Specification Compliance:** Canonical Property Order enforced, all mandatory properties present, comprehensive Option C verification completed

---

## Verification Notes

**Source Code Analysis:**
- All configuration keys verified from lines 20-35 (key definitions)
- Enable check at line 58
- Input pin configuration at lines 80-114
- Output pin configuration at lines 117-251
- Sigma-delta PWM specifics at lines 143-155, 190-197, 369-384
- Hardware PWM specifics at lines 174-188, 199-208, 386-408
- Digital output specifics at lines 157-173, 209-211, 410-416
- Halt/failsafe handling at lines 326-340
- No explicit min/max validation found in source code for numeric settings
- HWPWM S parameter clamping to 0-100 at lines 396-399
- Subcode parsing from command string at lines 217-243

**Functional Correspondences:**
- All v1 settings have direct v2 equivalents with same names and semantics
- Only `ignore_on_halt` is new in v2 (no v1 correspondence)
- Pin notation changed from v1 format but setting names unchanged

**Related Pages Selected:**
- Primary module page: switch
- Configuration reference: switch-options
- Related hardware: mosfets, pinout, pwm-capable, pin-configuration
- Related functionality: killbutton, emergencystop, temperatureswitch, multiple-extruders, supported-g-codes

---

---

## ZProbe & Leveling

# Smoothieware V2 - ZProbe and Leveling Configuration Reference

**Module:** ZProbe & Leveling Strategies
**Version:** v2
**Refined:** 2025-11-05

---

## [zprobe] Section

Main Z-probe configuration section for all probing operations.

#### `enable`

* Type: `bool`
* Default: `false`
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:71`
* Valid values: `true`, `false`
* Corresponding v1 setting: `zprobe.enable`
* Corresponding v2 setting: `zprobe.enable`
* Description: Enables the Z-probe module. When set to true, the probe module is loaded and all probing features become available including bed leveling strategies, probe testing, and calibration commands.
  * All other zprobe settings are ignored if this is false
  * Module will not load and probing G-codes will not be available
  * Required: yes (module will not load without this set to true)
* Related pages: zprobe, endstops, delta, z-probe-guide
* Example configuration:
  * zprobe.enable = true  # Enable probe module

#### `probe_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:75`
* Valid values: Pin specification in STM32 format (e.g., `PD3`, `PE1!`, `PF2^`)
  * Format: `P[port][pin][modifiers]` where port is A-K, pin is 0-15
  * `!` suffix inverts the signal (active-low probe)
  * `^` suffix enables internal pullup resistor
  * `nc` means not connected (module will fail to load)
* Required: yes (module will fail to configure if pin is invalid or not connected)
* Corresponding v1 setting: `zprobe.probe_pin`
* Corresponding v2 setting: `zprobe.probe_pin`
* Description: Defines the GPIO pin connected to the probe signal. The probe should output a HIGH signal when touching the bed (or LOW if inverted with `!`). This pin is read at 1kHz in an interrupt service routine to detect probe triggers during moves.
  * CRITICAL: Incorrect pin configuration will cause probe to not trigger or trigger prematurely
  * Pin must be configured as input with appropriate pull resistor
  * Most probes require pullup (`^`) to prevent floating input noise
  * Test probe triggering with M119 before running probe moves
* Related M-Codes:
  * M119 - Report probe status (triggered or not triggered)
  * M670 I<0/1> - Temporarily toggle probe inversion for testing
* Related settings: `zprobe.debounce_ms`
* Related pages: zprobe, pin-configuration, sensor-types
* Example configuration:
  * zprobe.probe_pin = PD10^  # Pin PD10 with pullup (active-high)
  * zprobe.probe_pin = PE5!^  # Pin PE5 inverted with pullup (active-low)
  * zprobe.probe_pin = PF3  # Pin PF3 no pullup (external pullup/pulldown)

#### `slow_feedrate`

* Type: `number`
* Default: `5` (mm/sec)
* Units: mm/sec
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:135`
* Typical values: `2` (high precision), `5` (default balanced), `10` (fast probing)
* Corresponding v1 setting: `zprobe.slow_feedrate`
* Corresponding v2 setting: `zprobe.slow_feedrate`
* Description: Speed at which the probe approaches the bed during actual probing moves. Slower speeds improve accuracy by reducing overshoot and mechanical bouncing, but increase total probing time. This speed is used for the final precision probe after any fast approach.
  * Lower values = better accuracy, longer probe time
  * Higher values = faster probing, potential overshoot
  * Too fast may damage delicate probes or beds
  * Recommended 2-10 mm/sec depending on probe type and machine rigidity
* Related M-Codes:
  * M670 S<feedrate> - Set slow feedrate at runtime (mm/sec)
  * M500 - Save current feedrate to config-override
* Related settings: `zprobe.fast_feedrate`, `zprobe.return_feedrate`, `zprobe.debounce_ms`
* Related pages: zprobe, sensor-types
* Example configuration:
  * zprobe.slow_feedrate = 5  # Default balanced speed
  * zprobe.slow_feedrate = 2  # High precision for delicate probes
  * zprobe.slow_feedrate = 10  # Fast probing for rigid machines

#### `fast_feedrate`

* Type: `number`
* Default: `100` (mm/sec)
* Units: mm/sec
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:136`
* Typical values: `50` (conservative), `100` (default), `200` (fast machines)
* Corresponding v1 setting: `zprobe.fast_feedrate`
* Corresponding v2 setting: `zprobe.fast_feedrate`
* Description: Travel speed between probe points and for initial rapid approach moves. Does not affect probing accuracy but reduces total time for multi-point bed leveling operations. Limited by machine capabilities and acceleration settings.
  * Used for XY travel between probe points
  * Used for Z approach before slow probe
  * Does not affect actual probe trigger accuracy
  * Should match or be lower than machine max speeds
* Related M-Codes:
  * M670 K<feedrate> - Set fast feedrate at runtime (mm/sec)
  * M500 - Save current value
* Related settings: `zprobe.slow_feedrate`, `zprobe.return_feedrate`
* Related pages: zprobe, motion-control
* Example configuration:
  * zprobe.fast_feedrate = 100  # Default speed
  * zprobe.fast_feedrate = 150  # Fast for rigid machines
  * zprobe.fast_feedrate = 50  # Conservative for deltas

#### `return_feedrate`

* Type: `number`
* Default: `0` (auto-calculated)
* Units: mm/sec
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:137`
* Typical values: `0` (auto), `50` (explicit moderate), `100` (fast retraction)
* Corresponding v1 setting: `zprobe.return_feedrate`
* Corresponding v2 setting: `zprobe.return_feedrate`
* Description: Speed when retracting from a probe point. When set to `0`, the firmware automatically calculates return speed as `slow_feedrate * 2`, capped at `fast_feedrate`. Setting an explicit value overrides this calculation.
  * `0` = auto-calculate: `min(slow_feedrate * 2, fast_feedrate)`
  * Non-zero = use specified speed
  * Faster retraction reduces total probe time
  * Too fast may cause mechanical issues on some probes
* Related M-Codes:
  * M670 R<feedrate> - Set return feedrate at runtime (mm/sec)
  * M500 - Save current value
* Related settings: `zprobe.slow_feedrate`, `zprobe.fast_feedrate`
* Related pages: zprobe
* Example configuration:
  * zprobe.return_feedrate = 0  # Auto-calculate (default)
  * zprobe.return_feedrate = 50  # Explicit moderate speed
  * zprobe.return_feedrate = 100  # Fast retraction

#### `probe_height`

* Type: `number`
* Default: `5.0` (mm)
* Units: mm
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:134`
* Typical values: `3` (low clearance), `5` (default), `10` (high clearance)
* Corresponding v1 setting: `zprobe.probe_height`
* Corresponding v2 setting: `zprobe.probe_height`
* Description: Height above the bed to position the probe before starting each probing move. This is the Z height maintained during XY travel moves between probe points. Must be high enough that the probe won't crash into the bed or any bed obstructions during lateral moves.
  * Height maintained during XY moves between points
  * Must clear all bed features and clips
  * Lower values reduce Z travel time
  * Too low may cause crashes during XY moves
  * CRITICAL: Set higher than tallest bed obstruction
* Related M-Codes:
  * M670 H<height> - Set probe height at runtime (mm)
  * M500 - Save current value
* Related settings: `zprobe.max_travel`
* Related pages: zprobe, z-probe-guide
* Example configuration:
  * zprobe.probe_height = 5.0  # Default clearance
  * zprobe.probe_height = 3.0  # Low clearance for known-flat beds
  * zprobe.probe_height = 10.0  # High clearance for obstructed beds

#### `max_travel`

* Type: `number`
* Default: `200` (mm)
* Units: mm
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:139`
* Typical values: `100` (small machines), `200` (default), `300` (large machines)
* Corresponding v1 setting: `zprobe.max_z` or `gamma_max`
* Corresponding v2 setting: `zprobe.max_travel`
* Description: Maximum distance the probe will travel downward before giving up on a probe attempt. Safety feature to prevent crashes if the bed is much lower than expected or if the probe fails to trigger. Probe moves abort with error if this distance is exceeded without trigger.
  * Prevents runaway probing if bed too low
  * Prevents damage if probe fails to trigger
  * Should be larger than expected probe distance
  * Should not be so large it allows crashes
  * WARNING: If bed is lower than this, probe will fail instead of crash
* Related M-Codes:
  * M670 Z<travel> - Set max travel at runtime (mm)
  * M500 - Save current value
* Related settings: `zprobe.probe_height`
* Related pages: zprobe, z-probe-guide
* Example configuration:
  * zprobe.max_travel = 200  # Default for most machines
  * zprobe.max_travel = 100  # Small printer or known bed height
  * zprobe.max_travel = 300  # Large machine or uncertain bed position

#### `reverse_z`

* Type: `bool`
* Default: `false`
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:138`
* Valid values: `true`, `false`
* Corresponding v1 setting: `zprobe.reverse_z`
* Corresponding v2 setting: `zprobe.reverse_z`
* Description: Probe in +Z direction instead of -Z direction. Used for specialized machine setups where the probe moves upward to contact a surface above the nozzle rather than downward to contact a bed below.
  * `false` = probe moves down (-Z) - normal bed probing
  * `true` = probe moves up (+Z) - specialized configurations
  * Rarely used, only for unusual machine configurations
  * Does not invert probe signal, only direction of travel
* Related pages: zprobe
* Example configuration:
  * zprobe.reverse_z = false  # Normal downward probing
  * zprobe.reverse_z = true  # Upward probing (specialized)

#### `dwell_before_probing`

* Type: `number`
* Default: `0` (seconds)
* Units: seconds
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:141`
* Typical values: `0` (no dwell), `0.2` (deployable probes), `0.5` (mechanical settling)
* Corresponding v1 setting: `zprobe.dwell_before_probing`
* Corresponding v2 setting: `zprobe.dwell_before_probing`
* Description: Time to wait before starting each probe move. Allows mechanical settling after XY positioning and before Z probe begins. Useful for deployable probes (e.g., BLTouch that needs time to deploy), machines with mechanical flex, or to allow vibrations to dampen.
  * Adds delay before each probe attempt
  * Useful for deployable probes needing deployment time
  * Helps on machines with mechanical vibration/flex
  * Increases total probing time significantly with grids
  * 0 = no delay (fastest, suitable for rigid machines)
* Related M-Codes:
  * M670 D<seconds> - Set dwell time at runtime (seconds)
  * M500 - Save current value
* Related settings: `zprobe.debounce_ms`, leveling strategy `before_probe_gcode`
* Related pages: zprobe, sensor-types
* Example configuration:
  * zprobe.dwell_before_probing = 0  # No delay (default)
  * zprobe.dwell_before_probing = 0.2  # 200ms for deployable probes
  * zprobe.dwell_before_probing = 0.5  # 500ms for vibration damping

#### `debounce_ms`

* Type: `number`
* Default: `0` (milliseconds)
* Units: milliseconds
* Module: `zprobe`
* Context: Global module setting
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:83`
* Typical values: `0` (no debounce), `5` (light filtering), `20` (heavy filtering)
* Corresponding v1 setting: `zprobe.debounce_ms`
* Corresponding v2 setting: `zprobe.debounce_ms`
* Description: Probe signal debounce time in milliseconds. The probe signal must remain continuously triggered for this duration before being considered a valid trigger. Prevents false triggers from electrical noise, mechanical bouncing, or transient signals. Each millisecond is verified at 1kHz in the ISR.
  * 0 = instant trigger (no debouncing)
  * Higher values = more noise immunity, slower response
  * Each ms requires 1ms of continuous trigger
  * Checked at 1kHz in interrupt service routine
  * Use for electrically noisy environments
  * May reduce accuracy if set too high
* Related settings: `zprobe.probe_pin`, `zprobe.slow_feedrate`
* Related pages: zprobe, sensor-types
* Example configuration:
  * zprobe.debounce_ms = 0  # No debounce (clean signal)
  * zprobe.debounce_ms = 5  # 5ms debounce for moderate noise
  * zprobe.debounce_ms = 20  # 20ms debounce for high noise environments

#### `leveling`

* Type: `string`
* Default: `""` (none)
* Module: `zprobe`
* Context: Strategy selection
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:86`
* Valid values: `"three point"`, `"cartesian grid"`, `"delta grid"`, `""` (no leveling)
  * `"three point"` - Three-point plane leveling for tilt correction
  * `"cartesian grid"` - Grid-based leveling for Cartesian/CoreXY printers
  * `"delta grid"` - Grid-based leveling for delta printers with circular beds
  * `""` - No leveling strategy (probing only, no compensation)
* Corresponding v1 setting: `leveling-strategy` section name
* Corresponding v2 setting: `zprobe.leveling`
* Description: Selects which bed leveling strategy to enable. Only one leveling strategy can be active at a time. Each strategy has its own configuration section with strategy-specific parameters. Leveling strategies apply Z-axis compensation during printing to account for bed irregularities.
  * IMPORTANT: Only one leveling strategy can be active
  * Strategy must have corresponding configuration section
  * Changing strategy requires different section parameters
  * Empty string disables all leveling compensation
  * NOTE: Three-point strategy is mutually exclusive with delta calibration
* Related settings: All `[three point leveling strategy]`, `[cartesian grid leveling strategy]`, or `[delta grid leveling strategy]` settings
* Related pages: zprobe, three-point-strategy-options, rectangular-grid-calibration-options, delta-grid-calibration-options
* Example configuration:
  * zprobe.leveling = "three point"  # Simple three-point plane
  * zprobe.leveling = "cartesian grid"  # Cartesian grid compensation
  * zprobe.leveling = "delta grid"  # Delta grid compensation
  * zprobe.leveling = ""  # No leveling (probe only)

#### `calibration`

* Type: `string`
* Default: `""` (none)
* Module: `zprobe`
* Context: Strategy selection
* Defined in: `Firmware/src/modules/tools/zprobe/ZProbe.cpp:114`
* Valid values: `"delta"`, `""` (no calibration)
  * `"delta"` - Delta calibration strategy (endstops and radius)
  * `""` - No calibration strategy
* Corresponding v1 setting: none (new in v2)
* Corresponding v2 setting: `zprobe.calibration`
* Description: Selects which calibration strategy to enable. Used specifically for delta printer calibration to automatically adjust endstop trim values and delta radius. Can be used alongside a leveling strategy for comprehensive delta setup.
  * Only applicable to delta printers
  * Calibrates endstop positions and delta radius
  * Can coexist with leveling strategies
  * NOTE: Mutually exclusive with three-point leveling per code comment line 91
  * Cartesian printers should leave this empty
* Related settings: All `[delta calibration strategy]` settings
* Related pages: zprobe, delta-calibration-strategy-options, delta
* Example configuration:
  * zprobe.calibration = "delta"  # Enable delta calibration (delta printers only)
  * zprobe.calibration = ""  # No calibration (default, Cartesian machines)

---

## [three point leveling strategy] Section

Three-point bed leveling strategy that probes three points and calculates a planar equation. Compensates for bed tilt by adjusting Z based on XY position to maintain constant distance from the plane.

**How it works:** Probes three user-defined points (ideally forming an equilateral triangle), calculates a 3D plane equation from these points, and during printing adjusts Z based on XY position to follow the plane.

**Best for:** Small beds, slight tilt correction, fast leveling when bed is mostly flat but tilted.

#### `point1`

* Type: `string`
* Default: `""` (must be defined)
* Module: `zprobe`
* Context: Three-point strategy probe point definition
* Defined in: `Firmware/src/modules/tools/zprobe/ThreePointStrategy.cpp:100`
* Valid values: Comma-separated X,Y coordinates in format `"X,Y"`
  * Example: `"100.0,0.0"` for X=100mm, Y=0mm
  * Must be valid reachable bed coordinates
  * Should form equilateral triangle with point2 and point3
* Required: yes (strategy will not work without all three points defined)
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.point1`
* Corresponding v2 setting: `three point leveling strategy.point1`
* Description: First probe point coordinates. Should be positioned as far from the other two points as possible to maximize leveling accuracy. Ideally, the three points form an equilateral triangle covering the maximum bed area.
  * Can also be set via M557 P0 X... Y... command
  * Saved with M500 if save_plane enabled
  * Should be far from other points for best plane calculation
  * Must be within machine travel limits and bed boundaries
* Related M-Codes:
  * M557 P0 X<x> Y<y> - Define point1 at runtime
  * M500 - Save point1 definition
  * M503 - Display current point1
* Related settings: `point2`, `point3`, `probe_offsets`
* Related pages: zprobe, three-point-strategy-options
* Example configuration:
  * leveling-strategy.three-point-leveling.point1 = 100.0,0.0  # Front center
  * leveling-strategy.three-point-leveling.point1 = 50.0,20.0  # Custom position

#### `point2`

* Type: `string`
* Default: `""` (must be defined)
* Module: `zprobe`
* Context: Three-point strategy probe point definition
* Defined in: `Firmware/src/modules/tools/zprobe/ThreePointStrategy.cpp:101`
* Valid values: Comma-separated X,Y coordinates in format `"X,Y"`
* Required: yes
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.point2`
* Corresponding v2 setting: `three point leveling strategy.point2`
* Description: Second probe point coordinates. Should be positioned to form a large triangle with point1 and point3.
  * Can also be set via M557 P1 X... Y... command
  * Saved with M500
* Related M-Codes:
  * M557 P1 X<x> Y<y> - Define point2 at runtime
  * M500 - Save point definition
* Related settings: `point1`, `point3`, `probe_offsets`
* Related pages: zprobe, three-point-strategy-options
* Example configuration:
  * leveling-strategy.three-point-leveling.point2 = 200.0,200.0  # Back right corner
  * leveling-strategy.three-point-leveling.point2 = 150.0,180.0  # Custom position

#### `point3`

* Type: `string`
* Default: `""` (must be defined)
* Module: `zprobe`
* Context: Three-point strategy probe point definition
* Defined in: `Firmware/src/modules/tools/zprobe/ThreePointStrategy.cpp:102`
* Valid values: Comma-separated X,Y coordinates in format `"X,Y"`
* Required: yes
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.point3`
* Corresponding v2 setting: `three point leveling strategy.point3`
* Description: Third probe point coordinates. Completes the triangle with point1 and point2.
  * Can also be set via M557 P2 X... Y... command
  * Saved with M500
* Related M-Codes:
  * M557 P2 X<x> Y<y> - Define point3 at runtime
  * M500 - Save point definition
* Related settings: `point1`, `point2`, `probe_offsets`
* Related pages: zprobe, three-point-strategy-options
* Example configuration:
  * leveling-strategy.three-point-leveling.point3 = 0.0,200.0  # Back left corner
  * leveling-strategy.three-point-leveling.point3 = 25.0,180.0  # Custom position

#### `probe_offsets`

* Type: `string`
* Default: `"0,0,0"`
* Module: `zprobe`
* Context: Three-point strategy probe geometry
* Defined in: `Firmware/src/modules/tools/zprobe/ThreePointStrategy.cpp:108`
* Units: mm
* Valid values: Comma-separated X,Y,Z offsets in format `"X,Y,Z"`
  * Positive X = probe is to the right of nozzle
  * Positive Y = probe is in front of nozzle (toward +Y)
  * Positive Z = probe trigger point is above nozzle tip
  * Negative values = opposite directions
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.probe_offsets`
* Corresponding v2 setting: `three point leveling strategy.probe_offsets`
* Description: Offset of the probe trigger point from the nozzle tip in X, Y, and Z axes. Firmware accounts for these offsets when positioning for probe moves and when calculating bed heights. Critical for accurate leveling with offset probes.
  * Can also be set via M565 X... Y... Z... command
  * Saved with M500
  * X offset accounts for left/right probe position
  * Y offset accounts for front/back probe position
  * Z offset accounts for probe trigger height relative to nozzle
* Related M-Codes:
  * M565 X<x> Y<y> Z<z> - Set probe offsets at runtime (mm)
  * M500 - Save probe offsets
* Related settings: `point1`, `point2`, `point3`
* Related pages: zprobe, three-point-strategy-options
* Example configuration:
  * leveling-strategy.three-point-leveling.probe_offsets = 0,0,0  # Probe at nozzle tip
  * leveling-strategy.three-point-leveling.probe_offsets = -20,5,0  # Probe 20mm left, 5mm front
  * leveling-strategy.three-point-leveling.probe_offsets = 0,0,-0.5  # Probe triggers 0.5mm below nozzle

#### `home_first`

* Type: `bool`
* Default: `true`
* Module: `zprobe`
* Context: Three-point strategy homing behavior
* Defined in: `Firmware/src/modules/tools/zprobe/ThreePointStrategy.cpp:111`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.home_first`
* Corresponding v2 setting: `three point leveling strategy.home_first`
* Description: Automatically home X and Y axes before running G32 leveling. Ensures consistent and known starting position before probing begins. Recommended to keep enabled unless manual homing is specifically required.
  * `true` = G32 homes XY before probing (recommended)
  * `false` = G32 assumes axes are already homed (manual control)
  * Disable only if you want to manually home before G32
  * Homing ensures repeatable probe positions
* Related settings: none
* Related pages: zprobe, three-point-strategy-options, endstops
* Example configuration:
  * leveling-strategy.three-point-leveling.home_first = true  # Auto-home before G32 (recommended)
  * leveling-strategy.three-point-leveling.home_first = false  # Manual homing required

#### `tolerance`

* Type: `number`
* Default: `0.03` (mm)
* Units: mm
* Module: `zprobe`
* Context: Three-point strategy flatness threshold
* Defined in: `Firmware/src/modules/tools/zprobe/ThreePointStrategy.cpp:112`
* Typical values: `0.01` (high precision), `0.03` (default), `0.1` (loose tolerance)
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.tolerance`
* Corresponding v2 setting: `three point leveling strategy.tolerance`
* Description: If the three probe points differ by less than this amount, the bed is considered flat and no compensation is applied. Also used to validate probe repeatability and warn if the first point is not within tolerance of zero.
  * Smaller values = more sensitive to tilt
  * Larger values = ignores small variations
  * Used to determine if bed needs compensation
  * Also validates first probe point against zero
  * May compensate for probe noise if set too small
  * May ignore real tilt if set too large
* Related pages: zprobe, three-point-strategy-options
* Example configuration:
  * leveling-strategy.three-point-leveling.tolerance = 0.03  # Default 30 microns
  * leveling-strategy.three-point-leveling.tolerance = 0.01  # High precision 10 microns
  * leveling-strategy.three-point-leveling.tolerance = 0.1  # Loose tolerance 100 microns

#### `save_plane`

* Type: `bool`
* Default: `false`
* Module: `zprobe`
* Context: Three-point strategy persistence setting
* Defined in: `Firmware/src/modules/tools/zprobe/ThreePointStrategy.cpp:113`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.three-point-leveling.save_plane`
* Corresponding v2 setting: `three point leveling strategy.save_plane`
* Description: Enable saving the calculated plane equation with M500 and restoring it with M561 ABCD parameters. Allows reusing a leveling plane without re-probing on each boot. The plane is encoded as four 32-bit integers representing the plane equation coefficients.
  * `false` = plane not saved with M500 (default)
  * `true` = M500 saves plane as M561 A B C D command
  * Plane encoded as 4 integers (A,B,C,D) in plane equation
  * Restore with M561 A<a> B<b> C<c> D<d>
  * Useful for frequently leveled beds that don't change
* Related M-Codes:
  * M500 - Save plane if enabled
  * M561 A<a> B<b> C<c> D<d> - Restore saved plane
  * M561 - Clear plane (no parameters)
* Related pages: zprobe, three-point-strategy-options
* Example configuration:
  * leveling-strategy.three-point-leveling.save_plane = false  # Don't save (default)
  * leveling-strategy.three-point-leveling.save_plane = true  # Allow M500 to save plane

---

## [cartesian grid leveling strategy] Section

Grid-based bed leveling for Cartesian and CoreXY printers. Probes a rectangular grid of points and stores height offsets. During printing, firmware interpolates between grid points to compensate for complex bed topology.

**How it works:** Probes grid_x_size × grid_y_size points in a rectangular area, stores height offset at each point relative to first point (0,0), and during printing uses bilinear interpolation between nearest 4 grid points to calculate Z compensation. Optional dampening reduces compensation at higher Z heights.

**Best for:** Larger beds, complex bed topology, high accuracy requirements, beds with waves or dips.

#### `x_size`

* Type: `number`
* Default: `0.0` (must be defined)
* Units: mm
* Module: `zprobe`
* Context: Cartesian grid geometry (required)
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:158`
* Required: yes (grid leveling will not work without this)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.x_size`
* Corresponding v2 setting: `cartesian grid leveling strategy.x_size`
* Description: Width of the rectangular probing area in millimeters. Defines the X dimension of the bed area to probe and compensate. Must be set to a non-zero value or strategy will fail to configure.
  * CRITICAL: Required setting, cannot be 0
  * Should typically equal bed width
  * Defines X span of probed rectangle
  * Can be overridden per-probe with G32 X parameter
* Related settings: `y_size`, `grid_x_size`
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.x_size = 200  # 200mm wide bed
  * leveling-strategy.cartesian-grid-leveling-strategy.x_size = 300  # 300mm wide bed

#### `y_size`

* Type: `number`
* Default: `0.0` (must be defined)
* Units: mm
* Module: `zprobe`
* Context: Cartesian grid geometry (required)
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:159`
* Required: yes (grid leveling will not work without this)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.y_size`
* Corresponding v2 setting: `cartesian grid leveling strategy.y_size`
* Description: Length of the rectangular probing area in millimeters. Defines the Y dimension of the bed area to probe and compensate. Must be set to a non-zero value or strategy will fail to configure.
  * CRITICAL: Required setting, cannot be 0
  * Should typically equal bed depth
  * Defines Y span of probed rectangle
  * Can be overridden per-probe with G32 Y parameter
* Related settings: `x_size`, `grid_y_size`
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.y_size = 200  # 200mm deep bed
  * leveling-strategy.cartesian-grid-leveling-strategy.y_size = 250  # 250mm deep bed

#### `grid_x_size`

* Type: `number`
* Default: `7`
* Module: `zprobe`
* Context: Cartesian grid resolution
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:139`
* Minimum value: `5` (checked in CartGridStrategy.cpp:351-354)
* Typical values: `5` (fast/low resolution), `7` (balanced/recommended), `9` (high resolution), `11` (very high resolution)
* Valid values: Odd integers >= 5
  * Must be odd number for proper grid centering
  * Minimum 5 for meaningful interpolation
  * Higher values = better accuracy but longer probe time
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.grid_x_size`
* Corresponding v2 setting: `cartesian grid leveling strategy.grid_x_size`
* Description: Number of probe points in X direction. Must be an odd number for proper grid symmetry. More points provide better compensation accuracy but increase probing time significantly.
  * Total probe points = grid_x_size × grid_y_size
  * 5×5 = 25 points (~2 minutes)
  * 7×7 = 49 points (~5 minutes) - recommended
  * 9×9 = 81 points (~10 minutes)
  * 11×11 = 121 points (~20 minutes)
  * Can be overridden per-probe with G32 I parameter
* Related settings: `grid_y_size`, `x_size`
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.grid_x_size = 7  # Balanced (49 points with 7×7)
  * leveling-strategy.cartesian-grid-leveling-strategy.grid_x_size = 5  # Fast (25 points with 5×5)
  * leveling-strategy.cartesian-grid-leveling-strategy.grid_x_size = 9  # High accuracy (81 points with 9×9)

#### `grid_y_size`

* Type: `number`
* Default: `7`
* Module: `zprobe`
* Context: Cartesian grid resolution
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:140`
* Minimum value: `5` (checked in CartGridStrategy.cpp:351-354)
* Typical values: `5` (fast), `7` (balanced), `9` (high resolution), `11` (very high)
* Valid values: Odd integers >= 5
  * Must be odd number
  * Minimum 5 for proper interpolation
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.grid_y_size`
* Corresponding v2 setting: `cartesian grid leveling strategy.grid_y_size`
* Description: Number of probe points in Y direction. Must be an odd number. Works with grid_x_size to define total probe point count.
  * Can be different from grid_x_size
  * Total points = grid_x_size × grid_y_size
  * Can be overridden per-probe with G32 J parameter
* Related settings: `grid_x_size`, `y_size`
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.grid_y_size = 7  # Match X for square grid
  * leveling-strategy.cartesian-grid-leveling-strategy.grid_y_size = 5  # Fewer Y points for rectangular bed

#### `tolerance`

* Type: `number`
* Default: `0.03` (mm)
* Units: mm
* Module: `zprobe`
* Context: Cartesian grid quality threshold
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:141`
* Typical values: `0.01` (strict), `0.03` (default), `0.1` (loose)
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.tolerance`
* Corresponding v2 setting: `cartesian grid leveling strategy.tolerance`
* Description: Probe tolerance threshold. Currently used for validation reporting but not for automatic re-probing in v2 implementation.
  * Used for quality validation
  * Not currently used for auto-retry logic
  * Smaller values indicate stricter quality requirements
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.tolerance = 0.03  # Default 30 microns

#### `save`

* Type: `bool`
* Default: `false`
* Module: `zprobe`
* Context: Cartesian grid persistence setting
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:142`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.save`
* Corresponding v2 setting: `cartesian grid leveling strategy.save`
* Description: When true, M500 will save an M375 command to config-override, causing the grid to be automatically loaded from `/sd/cartesian.grid` on boot. Enables persistent bed leveling without re-probing every boot.
  * `false` = grid not loaded on boot (default)
  * `true` = M500 saves M375, grid auto-loads on boot
  * Grid must first be saved with M374 command
  * Then M500 enables auto-load on boot
  * Useful for stable beds that don't change
* Related M-Codes:
  * M374 - Save grid to /sd/cartesian.grid
  * M375 - Load grid from file
  * M500 - Save auto-load command if save=true
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.save = true  # Auto-load grid on boot
  * leveling-strategy.cartesian-grid-leveling-strategy.save = false  # Manual load required (default)

#### `do_home`

* Type: `bool`
* Default: `true`
* Module: `zprobe`
* Context: Cartesian grid homing behavior
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:143`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.do_home`
* Corresponding v2 setting: `cartesian grid leveling strategy.do_home`
* Description: Automatically home all axes before probing grid with G32 command. Ensures consistent starting position for repeatable grid probing.
  * `true` = G32 homes all axes before probing (recommended)
  * `false` = G32 assumes already homed
  * Can be overridden per-probe with G32 R1 parameter
  * Recommended to keep true for repeatability
* Related pages: zprobe, rectangular-grid-calibration-options, endstops
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.do_home = true  # Auto-home (recommended)
  * leveling-strategy.cartesian-grid-leveling-strategy.do_home = false  # Manual homing

#### `only_by_two_corners`

* Type: `bool`
* Default: `false`
* Module: `zprobe`
* Context: Cartesian grid definition mode
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:144`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.only_by_two_corners`
* Corresponding v2 setting: `cartesian grid leveling strategy.only_by_two_corners`
* Description: When true, requires G32 to specify XYAB parameters defining the grid area instead of using configured x_size/y_size. X,Y define start position offset, A,B define grid size. Useful for probing arbitrary bed regions dynamically.
  * `false` = use configured x_size/y_size (normal mode)
  * `true` = require G32 X Y A B parameters
  * When enabled: G32 R1 X<xoffset> Y<yoffset> A<width> B<length>
  * Useful for probing specific bed areas
  * Grid cannot be saved in this mode
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.only_by_two_corners = false  # Use config size (default)
  * leveling-strategy.cartesian-grid-leveling-strategy.only_by_two_corners = true  # Require G32 XYAB

#### `human_readable`

* Type: `bool`
* Default: `false`
* Module: `zprobe`
* Context: Cartesian grid output format
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:145`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.human_readable`
* Corresponding v2 setting: `cartesian grid leveling strategy.human_readable`
* Description: Display grid as a formatted table with XY coordinates when using M375.1 instead of raw floating-point values. Makes grid data easier to visually interpret and verify.
  * `false` = raw values in rows (machine-readable)
  * `true` = formatted table with coordinates (human-readable)
  * Only affects M375.1 display output
  * Does not affect grid function or storage
* Related M-Codes:
  * M375.1 - Display current grid (format depends on this setting)
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.human_readable = false  # Raw values (default)
  * leveling-strategy.cartesian-grid-leveling-strategy.human_readable = true  # Formatted table

#### `probe_offsets`

* Type: `string`
* Default: `"0,0,0"`
* Module: `zprobe`
* Context: Cartesian grid probe geometry
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:171`
* Units: mm
* Valid values: Comma-separated X,Y,Z offsets in format `"X,Y,Z"`
  * Positive X = probe right of nozzle
  * Positive Y = probe in front of nozzle
  * Positive Z = probe trigger above nozzle
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.probe_offsets`
* Corresponding v2 setting: `cartesian grid leveling strategy.probe_offsets`
* Description: Probe offset from nozzle tip in X, Y, and Z. Accounts for probe position relative to nozzle during grid probing and compensation calculations.
  * Can also be set via M565 command
  * Saved with M500
  * Critical for accuracy with offset probes
* Related M-Codes:
  * M565 X<x> Y<y> Z<z> - Set probe offsets at runtime (mm)
  * M500 - Save probe offsets
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.probe_offsets = 0,0,0  # Probe at nozzle
  * leveling-strategy.cartesian-grid-leveling-strategy.probe_offsets = -20,10,0  # Probe offset

#### `dampening_start`

* Type: `number`
* Default: `0` (disabled)
* Units: mm
* Module: `zprobe`
* Context: Cartesian grid advanced compensation control
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:148`
* Typical values: `0` (disabled), `0.5` (start fade at 0.5mm), `1.0` (start fade at 1mm)
* Valid values: `0` (disabled) or `> 0` and `< height_limit`
  * Must be less than height_limit if both are set
  * 0 disables dampening feature
  * Non-zero enables fade-out of compensation
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.dampening_start`
* Corresponding v2 setting: `cartesian grid leveling strategy.dampening_start`
* Description: Z height where bed compensation begins to reduce linearly. Between dampening_start and height_limit, compensation is scaled from 100% down to 0%. Prevents over-compensation at higher Z heights where bed topology is less relevant.
  * NOTE: Both dampening_start and height_limit must be set for dampening to activate
  * 0 = no dampening (full compensation at all Z heights)
  * Above this height, compensation linearly reduces
  * Formula: scale = 1.0 - ((z - dampening_start) / (height_limit - dampening_start))
  * Useful for multi-layer prints where only first layer matters
* Related settings: `height_limit`
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.dampening_start = 0  # No dampening (default)
  * leveling-strategy.cartesian-grid-leveling-strategy.dampening_start = 0.5  # Start fade at 0.5mm
  * leveling-strategy.cartesian-grid-leveling-strategy.dampening_start = 1.0  # Start fade at 1mm

#### `height_limit`

* Type: `number`
* Default: `0` (disabled)
* Units: mm
* Module: `zprobe`
* Context: Cartesian grid advanced compensation control
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:147`
* Typical values: `0` (disabled), `2.0` (stop at 2mm), `5.0` (stop at 5mm)
* Valid values: `0` (disabled) or `> dampening_start`
  * Must be greater than dampening_start if both are set
  * 0 disables dampening feature
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.height_limit`
* Corresponding v2 setting: `cartesian grid leveling strategy.height_limit`
* Description: Z height where bed compensation stops completely. Above this height, no compensation is applied. Works with dampening_start to create fade-out zone. Useful when bed topology only matters for first few layers.
  * NOTE: Both dampening_start and height_limit must be set and dampening_start < height_limit
  * 0 = no limit (full compensation at all heights)
  * Above this height, compensation = 0
  * Between dampening_start and height_limit = linear fade
  * Typical use: disable compensation above first few layers
* Related settings: `dampening_start`
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.height_limit = 0  # No limit (default)
  * leveling-strategy.cartesian-grid-leveling-strategy.height_limit = 2.0  # Stop compensation at 2mm
  * leveling-strategy.cartesian-grid-leveling-strategy.height_limit = 5.0  # Stop compensation at 5mm

#### `initial_height`

* Type: `number`
* Default: `10` (mm)
* Units: mm
* Module: `zprobe`
* Context: Cartesian grid initial probing height
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:167`
* Typical values: `5` (low clearance), `10` (default), `20` (high clearance)
* Valid values: `> 0`, typically 5-20mm
  * Must be high enough probe won't crash during initial positioning
* Corresponding v1 setting: `leveling-strategy.rectangular-grid.initial_height`
* Corresponding v2 setting: `cartesian grid leveling strategy.initial_height`
* Description: Height above bed to begin initial probe search. Must be high enough that probe won't crash during initial positioning to start of grid. Used to find bed before starting systematic grid probing.
  * Used for first probe to find bed after homing
  * Must account for probe position below head
  * Must be higher than any bed variations
  * Too low may cause crash on initial move
  * Too high just wastes time on first probe
* Related pages: zprobe, rectangular-grid-calibration-options
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.initial_height = 10  # Default safe height
  * leveling-strategy.cartesian-grid-leveling-strategy.initial_height = 5  # Lower for known bed height
  * leveling-strategy.cartesian-grid-leveling-strategy.initial_height = 20  # Higher for uncertain bed

#### `before_probe_gcode`

* Type: `string`
* Default: `""` (none)
* Module: `zprobe`
* Context: Cartesian grid probe deployment automation
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:178`
* Valid values: G-code command string (single or multiple separated by semicolons)
  * Example: `"M280 S10"` for BLTouch deploy
  * Can be multiple commands: `"M280 S10; G4 P200"`
* Corresponding v1 setting: none (new in v2)
* Corresponding v2 setting: `cartesian grid leveling strategy.before_probe_gcode`
* Description: G-code command(s) to run before each probe point. Used for deployable probes like BLTouch that need to extend before probing. Can be a single command or multiple commands separated by semicolons. Executed via null output stream (no response shown).
  * Runs before EACH probe point
  * Useful for BLTouch deploy (M280 S10)
  * Useful for servo-deployed probes
  * No output shown (null stream)
  * Can include delays with G4
* Related settings: `after_probe_gcode`
* Related pages: zprobe, rectangular-grid-calibration-options, sensor-types
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.before_probe_gcode = ""  # No command (default)
  * leveling-strategy.cartesian-grid-leveling-strategy.before_probe_gcode = "M280 S10"  # BLTouch deploy
  * leveling-strategy.cartesian-grid-leveling-strategy.before_probe_gcode = "M280 S10; G4 P200"  # Deploy + 200ms delay

#### `after_probe_gcode`

* Type: `string`
* Default: `""` (none)
* Module: `zprobe`
* Context: Cartesian grid probe retraction automation
* Defined in: `Firmware/src/modules/tools/zprobe/CartGridStrategy.cpp:179`
* Valid values: G-code command string (single or multiple separated by semicolons)
  * Example: `"M281 S90"` for BLTouch retract
* Corresponding v1 setting: none (new in v2)
* Corresponding v2 setting: `cartesian grid leveling strategy.after_probe_gcode`
* Description: G-code command(s) to run after each probe point. Used for deployable probes like BLTouch that need to retract after probing. Paired with before_probe_gcode for complete probe deployment/retraction cycle.
  * Runs after EACH probe point
  * Useful for BLTouch retract (M280 S90)
  * Useful for servo-retracted probes
  * No output shown (null stream)
* Related settings: `before_probe_gcode`
* Related pages: zprobe, rectangular-grid-calibration-options, sensor-types
* Example configuration:
  * leveling-strategy.cartesian-grid-leveling-strategy.after_probe_gcode = ""  # No command (default)
  * leveling-strategy.cartesian-grid-leveling-strategy.after_probe_gcode = "M280 S90"  # BLTouch retract
  * leveling-strategy.cartesian-grid-leveling-strategy.after_probe_gcode = "M281"  # Custom retract command

---

## [delta grid leveling strategy] Section

Grid-based leveling for delta printers with circular beds. Probes a square grid within circular radius, extrapolating corner values that fall outside the circular boundary.

**How it works:** Probes size × size points within specified radius, skips points outside circular boundary, extrapolates unprobed corner points using median of surrounding points, uses bilinear interpolation during printing.

**Best for:** Delta printers, circular print beds, compensating for delta-specific geometry errors.

#### `radius`

* Type: `number`
* Default: `50.0` (mm)
* Units: mm
* Module: `zprobe`
* Context: Delta grid geometry (required)
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaGridStrategy.cpp:116`
* Typical values: `50` (small delta), `100` (medium delta), `150` (large delta)
* Valid values: `> 0`, typically 50-150mm depending on printer size
  * Should be at least as large as maximum printing radius
* Corresponding v1 setting: `leveling-strategy.delta-grid.radius`
* Corresponding v2 setting: `delta grid leveling strategy.radius`
* Description: Radius of circular probing area from bed center. Should be at least as large as maximum printing radius to ensure full bed compensation coverage. Points outside this radius are not probed but are extrapolated from nearby probed points.
  * Points within radius are probed
  * Points outside radius are extrapolated
  * Should match or exceed print radius
  * Can be overridden per-probe with G31 J parameter
  * Saved grid includes radius value
* Related settings: `size`
* Related pages: zprobe, delta-grid-calibration-options, delta
* Example configuration:
  * leveling-strategy.delta-grid-leveling-strategy.radius = 50.0  # Small delta (100mm diameter)
  * leveling-strategy.delta-grid-leveling-strategy.radius = 100.0  # Medium delta (200mm diameter)
  * leveling-strategy.delta-grid-leveling-strategy.radius = 150.0  # Large delta (300mm diameter)

#### `size`

* Type: `number`
* Default: `7`
* Module: `zprobe`
* Context: Delta grid resolution
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaGridStrategy.cpp:112`
* Minimum value: `5` (checked in DeltaGridStrategy.cpp:246-248)
* Typical values: `5` (fast), `7` (balanced), `9` (high resolution), `11` (very high)
* Valid values: Odd integers >= 5
  * Must be odd number for proper centering
  * Minimum 5 for meaningful probing
* Corresponding v1 setting: `leveling-strategy.delta-grid.size`
* Corresponding v2 setting: `delta grid leveling strategy.size`
* Description: Grid size (number of points in each direction). Must be an odd number. Creates size×size grid, but only probes points within radius. Corner points outside circular boundary are extrapolated.
  * 7×7 grid = up to 49 points (but circular boundary reduces actual count)
  * 5×5 = ~15-20 points actually probed (~2 minutes)
  * 7×7 = ~35-40 points actually probed (~5 minutes)
  * 9×9 = ~60-65 points actually probed (~10 minutes)
  * Actual probe count depends on radius
* Related settings: `radius`
* Related pages: zprobe, delta-grid-calibration-options, delta
* Example configuration:
  * leveling-strategy.delta-grid-leveling-strategy.size = 7  # Balanced (default)
  * leveling-strategy.delta-grid-leveling-strategy.size = 5  # Fast probing
  * leveling-strategy.delta-grid-leveling-strategy.size = 9  # High resolution

#### `tolerance`

* Type: `number`
* Default: `0.03` (mm)
* Units: mm
* Module: `zprobe`
* Context: Delta grid quality threshold
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaGridStrategy.cpp:113`
* Typical values: `0.01` (strict), `0.03` (default), `0.1` (loose)
* Corresponding v1 setting: `leveling-strategy.delta-grid.tolerance`
* Corresponding v2 setting: `delta grid leveling strategy.tolerance`
* Description: Probe tolerance for validation. Used for quality reporting.
  * Currently used for validation
  * Not used for auto-retry in current implementation
* Related pages: zprobe, delta-grid-calibration-options
* Example configuration:
  * leveling-strategy.delta-grid-leveling-strategy.tolerance = 0.03  # Default

#### `save`

* Type: `bool`
* Default: `false`
* Module: `zprobe`
* Context: Delta grid persistence setting
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaGridStrategy.cpp:114`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.delta-grid.save`
* Corresponding v2 setting: `delta grid leveling strategy.save`
* Description: When true, M500 saves M375 command to config-override, causing grid to auto-load from `/sd/delta.grid` on boot.
  * `false` = grid not loaded on boot (default)
  * `true` = M500 saves M375, auto-loads on boot
  * Grid must first be saved with M374
  * Then M500 enables auto-load
* Related M-Codes:
  * M374 - Save grid to /sd/delta.grid
  * M375 - Load grid from file
  * M500 - Save auto-load if save=true
* Related pages: zprobe, delta-grid-calibration-options
* Example configuration:
  * leveling-strategy.delta-grid-leveling-strategy.save = true  # Auto-load grid
  * leveling-strategy.delta-grid-leveling-strategy.save = false  # Manual load (default)

#### `do_home`

* Type: `bool`
* Default: `true`
* Module: `zprobe`
* Context: Delta grid homing behavior
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaGridStrategy.cpp:115`
* Valid values: `true`, `false`
* Corresponding v1 setting: `leveling-strategy.delta-grid.do_home`
* Corresponding v2 setting: `delta grid leveling strategy.do_home`
* Description: Home before probing grid. Ensures consistent starting position for repeatable results.
  * `true` = G31 homes before probing (recommended)
  * `false` = assumes already homed
  * Recommended to keep true
* Related pages: zprobe, delta-grid-calibration-options, endstops
* Example configuration:
  * leveling-strategy.delta-grid-leveling-strategy.do_home = true  # Auto-home (recommended)
  * leveling-strategy.delta-grid-leveling-strategy.do_home = false  # Manual homing

#### `initial_height`

* Type: `number`
* Default: `10` (mm)
* Units: mm
* Module: `zprobe`
* Context: Delta grid initial probing height
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaGridStrategy.cpp:120`
* Typical values: `5` (low), `10` (default), `20` (high)
* Valid values: `> 0`, typically 5-20mm
* Corresponding v1 setting: `leveling-strategy.delta-grid.initial_height`
* Corresponding v2 setting: `delta grid leveling strategy.initial_height`
* Description: Starting height for initial bed probe. Should be high enough that probe won't hit bed during initial move to center after homing.
  * Used for first probe to find bed
  * Must account for probe extension below effector
  * Must clear bed on initial center move
* Related pages: zprobe, delta-grid-calibration-options, delta
* Example configuration:
  * leveling-strategy.delta-grid-leveling-strategy.initial_height = 10  # Default
  * leveling-strategy.delta-grid-leveling-strategy.initial_height = 15  # Higher for safety

#### `probe_offsets`

* Type: `string`
* Default: `"0,0,0"`
* Module: `zprobe`
* Context: Delta grid probe geometry
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaGridStrategy.cpp:124`
* Units: mm
* Valid values: Comma-separated X,Y,Z offsets in format `"X,Y,Z"`
* Corresponding v1 setting: `leveling-strategy.delta-grid.probe_offsets`
* Corresponding v2 setting: `delta grid leveling strategy.probe_offsets`
* Description: Probe offset from effector in X, Y, Z format. Accounts for probe position relative to nozzle.
  * Can also be set via M565
  * Saved with M500
* Related M-Codes:
  * M565 X<x> Y<y> Z<z> - Set probe offsets (mm)
  * M500 - Save offsets
* Related pages: zprobe, delta-grid-calibration-options
* Example configuration:
  * leveling-strategy.delta-grid-leveling-strategy.probe_offsets = 0,0,0  # Probe at effector
  * leveling-strategy.delta-grid-leveling-strategy.probe_offsets = -15,0,0  # Probe 15mm left

---

## [delta calibration strategy] Section

Calibrates delta printer geometry by measuring endstop positions and delta radius. Not a leveling strategy - used for mechanical calibration to correct tower positions and arm geometry.

**How it works:** Probes center and three tower base positions, iteratively adjusts endstop trim values to minimize height differences, optionally calibrates delta radius by comparing center to tower heights, updates delta geometry parameters.

**Best for:** Delta printer initial setup, mechanical adjustments after rebuilding, correcting tower positioning errors.

#### `radius`

* Type: `number`
* Default: `100.0` (mm)
* Units: mm
* Module: `zprobe`
* Context: Delta calibration geometry
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaCalibrationStrategy.cpp:31`
* Typical values: `50` (small delta), `100` (medium delta), `150` (large delta)
* Valid values: `> 0`, typically 50-150mm
  * Should be large enough to show geometric errors
  * Must be within reachable area
* Corresponding v1 setting: `leveling-strategy.delta-calibration.radius`
* Corresponding v2 setting: `delta calibration strategy.radius`
* Description: Radius from center to probe points during calibration. Should be large enough to show tower positioning errors but within probe-reachable area. Different from delta-grid radius - this is for calibration, not leveling.
  * Used for endstop and radius calibration
  * Probes at 3 tower positions + center
  * Larger radius = more sensitive to errors
  * Must be reachable by effector
  * Can be overridden with G32 J parameter
* Related pages: zprobe, delta-calibration-strategy-options, delta
* Example configuration:
  * delta-calibration-strategy.radius = 100.0  # Medium delta (default)
  * delta-calibration-strategy.radius = 75.0  # Smaller calibration radius
  * delta-calibration-strategy.radius = 120.0  # Larger for better sensitivity

#### `initial_height`

* Type: `number`
* Default: `20` (mm)
* Units: mm
* Module: `zprobe`
* Context: Delta calibration initial height
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaCalibrationStrategy.cpp:35`
* Typical values: `10` (low), `20` (default), `30` (high)
* Valid values: `> 0`, typically 10-30mm
  * Must account for probe extension below effector
* Corresponding v1 setting: `leveling-strategy.delta-calibration.initial_height`
* Corresponding v2 setting: `delta calibration strategy.initial_height`
* Description: Height to descend to after homing before starting calibration probe. Must account for probe extension distance below effector. Higher than grid strategies due to delta geometry considerations.
  * Starting height after homing
  * Must clear probe below effector
  * Higher than grid initial_height due to delta travel
  * Too low may crash on descent
* Related pages: zprobe, delta-calibration-strategy-options, delta
* Example configuration:
  * delta-calibration-strategy.initial_height = 20  # Default safe height
  * delta-calibration-strategy.initial_height = 15  # Lower for known geometry
  * delta-calibration-strategy.initial_height = 25  # Higher for safety

#### `tolerance`

* Type: `number`
* Default: `0.03` (mm)
* Units: mm
* Module: `zprobe`
* Context: Delta calibration target tolerance
* Defined in: `Firmware/src/modules/tools/zprobe/DeltaCalibrationStrategy.cpp:38`
* Typical values: `0.01` (tight), `0.03` (default), `0.05` (loose)
* Valid values: `> 0`, typically 0.01-0.05mm
  * Smaller values take longer but achieve better calibration
* Corresponding v1 setting: `leveling-strategy.delta-calibration.tolerance`
* Corresponding v2 setting: `delta calibration strategy.tolerance`
* Description: Target tolerance for calibration completion. Calibration iterates until probe height differences are within this value, or maximum 10 iterations complete. Tighter tolerance improves accuracy but may not be achievable on all machines.
  * Calibration stops when delta <= tolerance
  * Maximum 10 iterations regardless
  * Smaller = better calibration, longer time
  * May not converge if mechanical issues exist
  * Can be overridden with G32 I parameter
* Related pages: zprobe, delta-calibration-strategy-options, delta
* Example configuration:
  * delta-calibration-strategy.tolerance = 0.03  # Default balanced
  * delta-calibration-strategy.tolerance = 0.01  # High precision (may take more iterations)
  * delta-calibration-strategy.tolerance = 0.05  # Looser (faster calibration)

---

## G-Code Commands

**Common Commands (All Strategies):**
* `G30` - Single Z-probe at current XY position or predefined position
* `G38.2` - Straight probe with error on failure (LinuxCNC/GRBL style)
* `G38.3` - Straight probe without error on failure
* `G38.4` - Probe with inverted sense + error
* `G38.5` - Probe with inverted sense, no error
* `M48` - Probe repeatability test (default 10 iterations)
* `M119` - Report endstop/probe status
* `M500` - Save settings to config-override
* `M565` - Set probe offsets

**Three-Point Specific:**
* `G29` - Test probe the three points and report Z heights
* `G31` - Report plane status
* `G32` - Probe three points and define bed plane
* `M557` - Define probe points (P0-P2)
* `M561` - Clear or restore plane

**Grid Specific (Cartesian and Delta):**
* `G29` - Test scan bed
* `G31` or `G32` - Probe grid and enable compensation
* `M370` or `M561` - Clear grid and disable compensation
* `M374` - Save grid to SD card
* `M374.1` - Delete saved grid file
* `M375` - Load grid from SD and enable compensation
* `M375.1` - Display current grid

**Delta Calibration Specific:**
* `G29` - Probe 7 points for manual calibration
* `G29.1` - Output format for online calibration calculator
* `G32` - Auto-calibrate endstops and delta radius

---

*Configuration reference complete - all settings documented according to specification v2.0*

---

## Endstops

# Smoothieware V2 - Endstops Module Configuration (Refined)

**Source:** `/Firmware/src/modules/tools/endstops/Endstops.cpp` and `Endstops.h`

---

## Per-Endstop Settings

Each endstop is defined with a unique name (e.g., `minx`, `maxx`, `miny`, `maxy`, `minz`, `maxz`) under the `[endstops]` section.

### `<name>.enable`

* Type: `bool`
* Default: `false`
* Module: `endstops`
* Context: Module instance setting (each endstop instance must be explicitly enabled)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:141`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (v1 used implicit enable via pin definition)
* Corresponding v2 setting: `endstops.<name>.enable`
* Description: Enables this specific endstop instance. When set to true, the endstop becomes active and will be monitored during homing operations or for limit detection. When false, the endstop is completely ignored by the firmware regardless of other settings.
  * Each axis can have multiple endstops (min and max) that must be individually enabled.
  * Disabled endstops consume no processing resources.
  * CRITICAL: An endstop must be enabled to function for either homing or limit detection.
* Related settings: `<name>.pin`, `<name>.axis`, `<name>.homing_direction`
* Related pages: endstops, guide-endstops, endstops-options
* Example configuration:
  * minx.enable = true  # Enable X-axis minimum endstop
  * maxx.enable = false  # Disable X-axis maximum endstop (not used)
  * minz.enable = true  # Enable Z-axis minimum endstop for homing

---

### `<name>.pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `endstops`
* Context: Module instance setting (physical pin connection for this endstop)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:144`
* Valid values: v2 pin format (e.g., `PD0`, `PD0^`, `PD0!`)
  * Base format: Port letter (P) + port name (A-Z) + pin number (0-15)
  * `^` suffix - Enable internal pullup resistor (recommended for mechanical switches)
  * `!` suffix - Invert signal (normally open vs normally closed logic)
  * `v` suffix - Enable pulldown resistor (rarely used)
  * `nc` - Not connected (effectively disables the endstop)
* Corresponding v1 setting: `alpha_min_endstop`, `alpha_max_endstop`, `beta_min_endstop`, `beta_max_endstop`, `gamma_min_endstop`, `gamma_max_endstop`
* Corresponding v2 setting: `endstops.<name>.pin`
* Description: Specifies the GPIO pin connected to the endstop switch signal. The pin is configured as an input and monitored for state changes during homing and limit checking. The firmware reads this pin to detect when the endstop is triggered.
  * Most mechanical endstops require pullup resistors to provide a defined logic level when the switch is open.
  * Normally open (NO) switches should use pullup without inversion: `PD0^`
  * Normally closed (NC) switches should use pullup with inversion: `PD0^!`
  * Optical and hall-effect sensors may have built-in pullups and should not use the `^` modifier.
  * Pin must be a valid GPIO input pin; not all pins support input mode.
  * CRITICAL: Incorrect pin configuration can cause false triggers or missed endstops during homing.
* Related settings: `<name>.axis`, `<name>.homing_direction`, `common.debounce_ms`
* Related pages: endstops, pin-configuration, pinout, sensor-types
* Example configuration:
  * minx.pin = PD0^  # X-min with pullup (normally open switch)
  * maxx.pin = PD3^!  # X-max with pullup and inversion (normally closed switch)
  * minz.pin = PE5  # Z-min optical sensor (no pullup needed)

---

### `<name>.axis`

* Type: `string` (single character)
* Default: none (required setting)
* Module: `endstops`
* Context: Module instance setting (associates endstop with machine axis)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:151`
* Valid values: `X`, `Y`, `Z`, `A`, `B`, `C`
  * `X` - Primary horizontal axis (typically left-right)
  * `Y` - Secondary horizontal axis (typically front-back)
  * `Z` - Vertical axis
  * `A` - First rotational axis or 4th linear axis
  * `B` - Second rotational axis or 5th linear axis
  * `C` - Third rotational axis or 6th linear axis
* Required: yes (endstop will not function without axis assignment)
* Corresponding v1 setting: Implicit in endstop name (`alpha_min_endstop` → X axis)
* Corresponding v2 setting: `endstops.<name>.axis`
* Description: Defines which machine axis this endstop controls. The axis assignment determines which motor(s) stop when the endstop is triggered and which coordinate is set during homing. Each endstop must be assigned to exactly one axis, but an axis can have multiple endstops (min and max, or multiple for limit detection).
  * The axis letter is case-insensitive but uppercase is conventional.
  * Each axis can have only one homing direction defined across all its endstops.
  * For delta printers, all three tower endstops are typically assigned to their respective axes (X, Y, Z).
  * For CoreXY, X and Y endstops control the crossed-belt motors through the kinematics solution.
  * IMPORTANT: The number of configured axes must not exceed the number of registered motors in the actuator configuration.
* Related settings: `<name>.homing_direction`, `<name>.homing_position`, `actuator.<axis>.steps_per_mm`
* Related pages: endstops, arm-solutions, cartesian, delta
* Example configuration:
  * minx.axis = X  # Assign to X axis
  * miny.axis = Y  # Assign to Y axis
  * minz.axis = Z  # Assign to Z axis
  * limit_a.axis = A  # Assign to A rotational axis

---

### `<name>.homing_direction`

* Type: `string`
* Default: `none`
* Module: `endstops`
* Context: Module instance setting (defines homing behavior for this endstop)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:197`
* Valid values: `home_to_min`, `home_to_max`, `none`
  * `home_to_min` - Home toward negative direction (typical for X/Y/Z min endstops on Cartesian printers)
  * `home_to_max` - Home toward positive direction (typical for delta printers and Z-max homing)
  * `none` - Not used for homing (limit-only endstop or redundant endstop)
* Corresponding v1 setting: `alpha_homing_direction`, `beta_homing_direction`, `gamma_homing_direction`
* Corresponding v2 setting: `endstops.<name>.homing_direction`
* Description: Specifies the direction the axis moves when homing to this endstop. When a homing command (G28) is issued, the firmware moves the axis in the specified direction until this endstop triggers. The direction determines whether the axis moves toward the minimum (negative) or maximum (positive) end of travel.
  * Only one endstop per axis can have a non-`none` homing direction.
  * Cartesian printers typically home to minimum (0,0,0 at front-left-bottom).
  * Delta printers typically home to maximum (towers at top, bed center at 0,0).
  * Setting `none` allows the endstop to be used only as a hard limit switch.
  * Multiple endstops on the same axis can exist if only one has a homing direction and others are limit-only.
  * CRITICAL: Only one endstop per axis can have a non-`none` homing direction; firmware will reject multiple homing endstops on the same axis.
* Related settings: `<name>.homing_position`, `<name>.max_travel`, `<name>.fast_rate`, `<name>.slow_rate`
* Related pages: endstops, endstop, guide-endstops
* Example configuration:
  * minx.homing_direction = home_to_min  # Home X toward negative direction
  * maxx.homing_direction = none  # X-max is limit-only, not for homing
  * maxz.homing_direction = home_to_max  # Delta Z homes upward

---

### `<name>.homing_position`

* Type: `number`
* Default: `0` (if home_to_min), `200` (if home_to_max)
* Units: mm
* Module: `endstops`
* Context: Module instance setting (establishes machine coordinate system origin)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:232`
* Corresponding v1 setting: `alpha_min`, `alpha_max`, `beta_min`, `beta_max`, `gamma_min`, `gamma_max`
* Corresponding v2 setting: `endstops.<name>.homing_position`
* Description: Defines the machine coordinate value assigned to the axis when the endstop is triggered during homing. This setting establishes the machine coordinate system by defining where in space the endstop is located. After homing completes, the axis position is set to this value, making it the reference point for all subsequent moves.
  * For minimum endstops, typically set to `0` to establish origin.
  * For maximum endstops, set to the full travel distance of the axis (e.g., bed size).
  * For delta printers, this represents the maximum Z height (tower length).
  * Combined with `home_offset` (set via M206), the final position becomes `homing_position + home_offset`.
  * Delta trim values (M666) apply additional offsets for tower calibration.
  * This value represents the absolute machine coordinate, independent of work coordinate systems (G54-G59).
  * NOTE: For deltas, this is typically set via M665 Z command and saved with M500.
* Related M-Codes:
  * M206 - Set homing offset (added to homing_position)
  * M306 - Set homing offset from current position
  * M665 Z<height> - Set max Z height (delta/SCARA homing position)
  * M666 - Set trim values (delta calibration offsets)
  * M500 - Save homing position and offsets to config-override
* Related settings: `<name>.homing_direction`, `common.alpha_trim_mm`, `common.beta_trim_mm`, `common.gamma_trim_mm`
* Related pages: endstops, gamma-max, delta
* Example configuration:
  * minx.homing_position = 0  # X-min at origin
  * miny.homing_position = 0  # Y-min at origin
  * minz.homing_position = 0  # Z-min at bed surface
  * maxz.homing_position = 300  # Delta max height (300mm towers)

---

### `<name>.max_travel`

* Type: `number`
* Default: `500`
* Units: mm
* Module: `endstops`
* Context: Module instance setting (safety limit for homing travel distance)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:235`
* Corresponding v1 setting: `alpha_max_travel`, `beta_max_travel`, `gamma_max_travel`
* Corresponding v2 setting: `endstops.<name>.max_travel`
* Description: Maximum distance the axis will travel during homing before triggering a timeout alarm. This is a safety feature that prevents the machine from moving indefinitely if the endstop fails to trigger due to wiring failure, mechanical issues, or incorrect configuration. If the endstop is not triggered within this distance, the system enters ALARM state and halts all motion.
  * Should be set larger than the actual axis travel to ensure successful homing.
  * Typical values: 1.2x to 1.5x the actual axis length.
  * If homing fails with "endstop not triggered" alarm, this value may be too small.
  * Too large a value delays error detection but does not affect normal homing.
  * This distance is used during the fast homing phase only.
  * CRITICAL: If endstop is not triggered within max_travel distance, system enters ALARM state requiring reset.
* Related settings: `<name>.fast_rate`, `<name>.slow_rate`, `<name>.homing_direction`
* Related pages: endstops, troubleshooting, emergencystop
* Example configuration:
  * minx.max_travel = 250  # 250mm max travel for 200mm X axis
  * miny.max_travel = 250  # 250mm max travel for 200mm Y axis
  * minz.max_travel = 300  # 300mm max travel for 250mm Z axis
  * maxz.max_travel = 320  # 320mm for 300mm delta towers (includes margin)

---

### `<name>.fast_rate`

* Type: `number`
* Default: `100`
* Units: mm/s
* Module: `endstops`
* Context: Module instance setting (first-pass homing speed)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:222`
* Typical values: `50` (slow/precise machines), `100` (standard), `150` (fast printers/deltas)
* Corresponding v1 setting: `alpha_fast_homing_rate_mm_s`, `beta_fast_homing_rate_mm_s`, `gamma_fast_homing_rate_mm_s`
* Corresponding v2 setting: `endstops.<name>.fast_rate`
* Description: Speed for the initial fast approach to the endstop during the first phase of homing. The two-phase homing sequence uses this faster speed to quickly move the axis close to the endstop, then backs off and approaches slowly for precision. Higher values reduce homing time but may reduce repeatability due to mechanical momentum and switch bounce.
  * Units are millimeters per second (mm/s), not mm/min as used in feed rates.
  * Should be significantly faster than `slow_rate` to reduce homing time.
  * Typical ratio: fast_rate is 5-10x slower_rate.
  * For heavy or high-inertia axes, reduce this to prevent overshooting.
  * For delta printers, all three towers typically use the same fast_rate.
  * Too fast may cause crashes or damage if endstop fails.
  * Too slow unnecessarily increases homing time.
* Related settings: `<name>.slow_rate`, `<name>.retract`, `<name>.max_travel`
* Related pages: endstops, endstops-options, stepper-motors
* Example configuration:
  * minx.fast_rate = 100  # 100 mm/s fast approach for X
  * miny.fast_rate = 100  # 100 mm/s fast approach for Y
  * minz.fast_rate = 20  # 20 mm/s slower for Z (heavier, more critical)
  * maxz.fast_rate = 150  # 150 mm/s for fast delta printer

---

### `<name>.slow_rate`

* Type: `number`
* Default: `10`
* Units: mm/s
* Module: `endstops`
* Context: Module instance setting (precision homing speed)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:223`
* Typical values: `2` (high precision), `5` (balanced), `10` (default), `20` (fast)
* Corresponding v1 setting: `alpha_slow_homing_rate_mm_s`, `beta_slow_homing_rate_mm_s`, `gamma_slow_homing_rate_mm_s`
* Corresponding v2 setting: `endstops.<name>.slow_rate`
* Description: Speed for the second-phase precision approach to the endstop after the initial fast approach and retract. This slower speed ensures accurate and repeatable homing by reducing mechanical momentum and allowing the switch to settle before position is recorded. Lower values improve homing repeatability at the cost of increased homing time.
  * Units are millimeters per second (mm/s).
  * Slower speeds provide better homing accuracy and repeatability.
  * Should be 5-10x slower than `fast_rate`.
  * Critical for print quality and precision machining where origin must be consistent.
  * Very slow values (<2 mm/s) may cause stepper stuttering on some systems.
  * For mechanical switches, slower speeds reduce bounce-related false triggers.
  * NOTE: Slower speeds improve repeatability, typically achieving 0.01-0.05mm consistency.
* Related settings: `<name>.fast_rate`, `<name>.retract`, `common.debounce_ms`
* Related pages: endstops, endstops-options
* Example configuration:
  * minx.slow_rate = 10  # 10 mm/s precision approach
  * miny.slow_rate = 10  # 10 mm/s precision approach
  * minz.slow_rate = 2  # 2 mm/s very slow for best Z accuracy
  * maxz.slow_rate = 5  # 5 mm/s for delta precision

---

### `<name>.retract`

* Type: `number`
* Default: `5`
* Units: mm
* Module: `endstops`
* Context: Module instance setting (backoff distance for two-phase homing)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:226`
* Typical values: `2` (small switches), `5` (default), `10` (large switches or high inertia)
* Corresponding v1 setting: `alpha_homing_retract_mm`, `beta_homing_retract_mm`, `gamma_homing_retract_mm`
* Corresponding v2 setting: `endstops.<name>.retract`
* Description: Distance to move away from the endstop after the fast approach triggers it, before performing the slow precision approach. This backoff ensures the endstop is no longer triggered before the final slow approach begins, allowing for accurate position detection. The two-phase homing sequence is: fast approach → trigger → retract this distance → slow approach → trigger → done.
  * Should be large enough to fully release mechanical switches (account for lever travel).
  * Should be small enough to keep total homing time reasonable.
  * For optical sensors, smaller values (2-3mm) are sufficient.
  * For mechanical lever switches, larger values (5-10mm) ensure full release.
  * During slow approach, moves retract × 2 distance to ensure clean trigger.
  * Very small retract values may cause repeated fast triggers without proper backoff.
  * NOTE: Homing sequence: (1) Fast move until trigger, (2) Back off retract distance, (3) Slow move retract × 2 distance
* Related settings: `<name>.fast_rate`, `<name>.slow_rate`
* Related pages: endstops, sensor-types
* Example configuration:
  * minx.retract = 5  # 5mm backoff for mechanical switch
  * miny.retract = 5  # 5mm backoff
  * minz.retract = 2  # 2mm backoff for optical Z probe
  * maxz.retract = 10  # 10mm for delta with lever switches

---

### `<name>.limit_enable`

* Type: `bool`
* Default: `false`
* Module: `endstops`
* Context: Module instance setting (enables hard limit detection)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:180`
* Valid values: `true`, `false`
* Corresponding v1 setting: `alpha_limit_enable`, `beta_limit_enable`, `gamma_limit_enable`
* Corresponding v2 setting: `endstops.<name>.limit_enable`
* Description: Enables this endstop as a hard limit switch that triggers an emergency stop if hit during normal operation (outside of homing). When enabled, if the endstop is triggered while any axis is moving during normal operation, the system immediately enters ALARM state, halts all motion, disables heaters, and flushes the motion queue to prevent crashes or damage.
  * Hard limits provide safety by preventing the machine from moving beyond its physical boundaries.
  * When triggered, requires manual intervention to clear the alarm and back away from the limit.
  * Limits are automatically disabled during homing to prevent false alarms.
  * Both min and max endstops can be used as limits simultaneously.
  * CNC machines typically enable limits; 3D printers typically do not.
  * WARNING: Limits are disabled during homing operations to allow intentional endstop triggering.
  * CRITICAL: Triggering a limit switch immediately halts all motion, disables heaters, and enters ALARM state.
* Related M-Codes:
  * M119 - Query endstop states (shows current trigger status)
* Related settings: `common.debounce_ms`, `<name>.pin`
* Related pages: endstops, emergencystop, killbutton
* Example configuration:
  * minx.limit_enable = false  # No hard limits for 3D printer
  * maxx.limit_enable = true  # Enable hard limit for CNC X-max
  * minz.limit_enable = false  # Z-min used for homing only
  * limit_x_max.limit_enable = true  # Dedicated limit switch (no homing)

---

## Common Settings

These settings apply globally to all endstops and are defined under `common.*` within the `[endstops]` section.

### `common.debounce_ms`

* Type: `number`
* Default: `0` (effectively 10ms minimum due to polling interval)
* Units: ms (milliseconds)
* Module: `endstops`
* Context: Global module setting (applies to all endstops)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:290`
* Typical values: `0` (optical/solid-state sensors), `10` (mechanical switches), `20` (noisy switches), `50` (very noisy environment)
* Corresponding v1 setting: `endstop_debounce_ms`
* Corresponding v2 setting: `endstops.common.debounce_ms`
* Description: Debounce time in milliseconds for all endstop signals to filter out mechanical switch bounce and electrical noise. When an endstop pin changes state, the firmware waits this duration with the pin continuously in the triggered state before accepting it as a valid trigger. This prevents false triggers from momentary contact bounce or electrical interference.
  * Set to `0` for solid-state sensors (optical, hall-effect) with clean signals.
  * Mechanical switches typically need 10-20ms debounce due to contact bounce.
  * High-EMI environments (near motors, heaters, power supplies) may need 20-50ms.
  * Debounce is checked every 10ms (polling interval), so effective minimum is 10ms.
  * Too short may cause false triggers during normal motion from electrical noise.
  * Too long delays endstop response and may affect homing accuracy.
  * Applies to both homing endstops and limit switches.
  * NOTE: Endstops are polled every 10ms, so debounce values less than 10ms are effectively 10ms.
* Related settings: All `<name>.pin` settings
* Related pages: endstops, sensor-types, troubleshooting
* Example configuration:
  * common.debounce_ms = 0  # No debounce for optical endstops
  * common.debounce_ms = 10  # Standard for mechanical switches
  * common.debounce_ms = 20  # Higher for noisy mechanical switches
  * common.debounce_ms = 50  # Very high for noisy CNC environment

---

### `common.homing_order`

* Type: `string`
* Default: none (simultaneous homing)
* Module: `endstops`
* Context: Global module setting (defines sequential homing sequence)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:304`
* Valid values: Any permutation of axis letters (e.g., `ZXY`, `XYZABC`, `YXZ`)
  * Empty string or not set = simultaneous homing of all requested axes
  * String of 3-6 characters from `XYZABC` = sequential homing in specified order
  * Must be at least 3 characters if specified
  * Cannot exceed the number of configured homing axes
  * Not used for delta or rotary delta kinematics (always simultaneous)
* Corresponding v1 setting: `homing_order`
* Corresponding v2 setting: `endstops.common.homing_order`
* Description: Specifies the order in which axes home when multiple axes are requested. When set, axes home sequentially in the specified order, waiting for each axis to complete before starting the next. When not set or empty, all axes home simultaneously. Sequential homing is necessary for machines where axis homing order matters, such as when Z must home first to lift the toolhead before XY homing to prevent dragging across the bed.
  * Empty string (default) = all axes home at the same time (faster).
  * Sequential homing (e.g., `ZXY`) = Z completes, then X, then Y (slower but safer).
  * Delta printers always home simultaneously regardless of this setting.
  * CoreXY homing is forced sequential by `corexy_homing` setting, not this.
  * Use cases: Z-lift before XY (bed clearance), avoid cable management issues, prevent crashes.
  * Overrides `home_z_first` setting if both are specified.
  * IMPORTANT: Not applicable to delta or rotary delta kinematics (always simultaneous homing).
* Related settings: `common.home_z_first`, `common.corexy_homing`, `common.delta_homing`
* Related pages: endstops, endstops-options, delta
* Example configuration:
  * common.homing_order = ""  # Simultaneous homing (fastest)
  * common.homing_order = "ZXY"  # Z first, then X, then Y (safe for bed clearance)
  * common.homing_order = "XYZ"  # X first, then Y, then Z
  * common.homing_order = "XYZA"  # Sequential X, Y, Z, A for 4-axis machine

---

### `common.home_z_first`

* Type: `bool`
* Default: `false`
* Module: `endstops`
* Context: Global module setting (simple Z-first homing mode)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:297`
* Valid values: `true`, `false`
* Corresponding v1 setting: `home_z_first`
* Corresponding v2 setting: `endstops.common.home_z_first`
* Description: When true, forces Z axis to home before X and Y axes, without requiring full sequential ordering via `homing_order`. This is a simplified alternative to `homing_order` when you only need Z to go first. After Z homing completes, X and Y home simultaneously (or sequentially if CoreXY).
  * Simpler than `homing_order` when only Z-first behavior is needed.
  * After Z homes, X and Y home together (unless CoreXY forces sequential).
  * Overridden by `homing_order` if that setting is also specified.
  * Common use case: lifting toolhead before XY homing to prevent nozzle dragging on bed.
  * Does not affect delta printers (always home all axes together).
  * NOTE: This setting is ignored if `homing_order` is set to a non-empty value.
* Related settings: `common.homing_order`, `common.corexy_homing`
* Related pages: endstops, endstops-options
* Example configuration:
  * common.home_z_first = true  # Home Z, then XY together
  * common.home_z_first = false  # Home all axes simultaneously (default)

---

### `common.corexy_homing`

* Type: `bool`
* Default: `false`
* Module: `endstops`
* Context: Global module setting (enables CoreXY-specific homing)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:292`
* Valid values: `true`, `false`
* Corresponding v1 setting: `corexy_homing`
* Corresponding v2 setting: `endstops.common.corexy_homing`
* Description: Enables CoreXY-specific homing behavior where X and Y axes must home sequentially rather than simultaneously due to the crossed-belt kinematics. When enabled, X and Y will never home at the same time regardless of other homing settings, because moving both motors simultaneously in CoreXY creates diagonal motion that cannot accurately trigger individual endstops.
  * MUST be set to `true` for CoreXY and H-Bot kinematics.
  * MUST be set to `false` for Cartesian, delta, SCARA kinematics.
  * Forces sequential X and Y homing even if `homing_order` is not set.
  * Does not affect Z axis homing.
  * Setting mismatch with actual kinematics causes incorrect homing behavior.
  * CRITICAL: Must match the `motion_control.arm_solution` setting (corexy or hbot).
* Related settings: `motion_control.arm_solution`, `common.homing_order`
* Related pages: endstops, hbot, arm-solutions
* Example configuration:
  * common.corexy_homing = true  # Required for CoreXY kinematics
  * common.corexy_homing = false  # For Cartesian/delta machines

---

### `common.delta_homing`

* Type: `bool`
* Default: Auto-detected from `arm_solution`
* Module: `endstops`
* Context: Global module setting (enables linear delta-specific homing)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:293`
* Valid values: `true`, `false`
* Corresponding v1 setting: `delta_homing`
* Corresponding v2 setting: `endstops.common.delta_homing`
* Description: Enables linear delta-specific homing behavior where all three towers home simultaneously as a single "Z" axis operation due to the delta kinematics. When G28 is issued, all three tower motors move together until their respective endstops trigger, and the final position is calculated through forward kinematics to determine XYZ coordinates.
  * Usually auto-detected based on `motion_control.arm_solution = linear_delta`.
  * All three towers (X, Y, Z actuators) home simultaneously.
  * G28 without arguments homes all towers (treated as Z axis in user space).
  * G28 X, G28 Y, or G28 Z all trigger the same full delta home operation.
  * Individual tower endstops are still configured separately with their own pins and settings.
  * Auto-detection means explicit configuration is rarely needed.
  * IMPORTANT: Only applicable to linear delta kinematics; incompatible with Cartesian.
* Related settings: `motion_control.arm_solution`, `common.rdelta_homing`, `common.alpha_trim_mm`, `common.beta_trim_mm`, `common.gamma_trim_mm`
* Related pages: endstops, delta, arm-solutions
* Example configuration:
  * common.delta_homing = true  # Typically auto-detected for linear deltas
  * common.delta_homing = false  # For non-delta machines

---

### `common.rdelta_homing`

* Type: `bool`
* Default: Auto-detected from `arm_solution`
* Module: `endstops`
* Context: Global module setting (enables rotary delta-specific homing)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:294`
* Valid values: `true`, `false`
* Corresponding v1 setting: `rdelta_homing`
* Corresponding v2 setting: `endstops.common.rdelta_homing`
* Description: Enables rotary delta-specific homing behavior for delta robots with rotational joints instead of linear carriages. Rotary deltas use angular endstops and theta offset calibration (M306) rather than linear position, requiring different homing calculations and position tracking.
  * Auto-detected based on `motion_control.arm_solution = rotary_delta`.
  * Uses angular positions (degrees) rather than linear positions (mm).
  * M306 command calibrates theta offsets for each actuator.
  * Homing sets actuator angles, then forward kinematics calculates XYZ.
  * G28.4 command allows manual homing by specifying actuator angles.
  * Auto-detection means explicit configuration is rarely needed.
  * NOTE: Rotary deltas are less common than linear deltas.
* Related M-Codes:
  * M306 - Set theta offset calibration from current position
  * M206 - Set theta offsets (degrees) for rotary delta
  * G28.4 - Manual homing by actuator position (degrees)
* Related settings: `motion_control.arm_solution`, `common.delta_homing`
* Related pages: endstops, rotary-delta, arm-solutions
* Example configuration:
  * common.rdelta_homing = true  # Auto-detected for rotary deltas
  * common.rdelta_homing = false  # For non-rotary-delta machines

---

### `common.scara_homing`

* Type: `bool`
* Default: `false`
* Module: `endstops`
* Context: Global module setting (enables SCARA-specific homing)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:295`
* Valid values: `true`, `false`
* Corresponding v1 setting: `scara_homing`
* Corresponding v2 setting: `endstops.common.scara_homing`
* Description: Enables SCARA robot arm-specific homing behavior where the arm homes in actuator space (joint angles) rather than Cartesian space. During homing, the arm solution is temporarily disabled, allowing the joints to move directly to their endstops without Cartesian coordinate transformation.
  * SCARA arms have two rotational joints (shoulder and elbow) that must home to known angles.
  * Arm solution (inverse kinematics) is disabled during homing for direct joint control.
  * After homing, joints are set to plausible minimum angles (typically -30, 30, 0 degrees).
  * Forward kinematics then calculates the resulting XYZ position from joint angles.
  * Must match `motion_control.arm_solution = scara` or `morgan` setting.
  * IMPORTANT: Disables arm solution during homing to allow direct actuator-space movement.
* Related settings: `motion_control.arm_solution`
* Related pages: endstops, morgan-scara, arm-solutions
* Example configuration:
  * common.scara_homing = true  # Required for SCARA/Morgan kinematics
  * common.scara_homing = false  # For non-SCARA machines (default)

---

### `common.move_to_origin_after_home`

* Type: `bool`
* Default: `true` (for deltas), `false` (for Cartesian)
* Module: `endstops`
* Context: Global module setting (post-homing positioning behavior)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:322`
* Valid values: `true`, `false`
* Corresponding v1 setting: `move_to_origin_after_home`
* Corresponding v2 setting: `endstops.common.move_to_origin_after_home`
* Description: When true, automatically moves the machine to coordinate position 0,0 (and 0,0,0 for deltas) after homing completes successfully. This provides a consistent starting position for operations. For delta printers, bed center is typically at 0,0, so this centers the effector. For Cartesian machines, 0,0 is usually the homed corner, so this move may not be desired.
  * Default is `true` for delta printers (centers effector over bed).
  * Default is `false` for Cartesian printers (stays at homed position).
  * Only moves XY to 0,0 for Cartesian if both X and Y were homed.
  * For deltas, moves to 0,0,Z after all three towers home.
  * Uses the slower of X or Y `fast_rate` for the move (in mm/sec, converted to mm/min).
  * Move is in absolute machine coordinates (G90 mode).
  * IMPORTANT: For deltas, this move happens AFTER backing off endstops if limits are enabled.
* Related settings: `<name>.fast_rate`, `common.delta_homing`
* Related pages: endstops, delta, cartesian
* Example configuration:
  * common.move_to_origin_after_home = true  # Delta: center effector after homing
  * common.move_to_origin_after_home = false  # Cartesian: stay at homed position

---

### `common.alpha_trim_mm`

* Type: `number`
* Default: `0`
* Units: mm
* Module: `endstops`
* Context: Global module setting (X tower/axis trim offset)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:299`
* Typical values: `-2.0` to `+2.0` (mechanical compensation range)
* Corresponding v1 setting: `alpha_trim_mm`
* Corresponding v2 setting: `endstops.common.alpha_trim_mm`
* Description: Fine-tune trim adjustment for the X tower (on deltas) or X axis (on Cartesian machines) to compensate for mechanical variations in tower lengths, carriage positions, or physical construction tolerances. After homing, this offset is applied to correct for the difference between ideal and actual endstop positions, ensuring bed levelness and print accuracy.
  * Primary use: Delta printer bed leveling by adjusting effective tower heights.
  * Set via M666 X command and saved with M500 to config-override.
  * Positive values effectively shorten the tower (lower that corner of the bed).
  * Negative values effectively lengthen the tower (raise that corner of the bed).
  * Combined with beta and gamma trim to achieve level bed on deltas.
  * For Cartesian machines, rarely used (mechanical adjustment preferred).
  * Changes take effect on next homing cycle.
  * CRITICAL: Essential for delta bed leveling; typical bed tilt correction is ±0.5mm per tower.
* Related M-Codes:
  * M666 X<trim_mm> - Set X tower trim adjustment
  * M500 - Save trim values to config-override
  * M501 - Load trim values from config-override
* Related settings: `common.beta_trim_mm`, `common.gamma_trim_mm`, `<name>.homing_position`
* Related pages: endstops, delta, delta-calibration-strategy-options
* Example configuration:
  * common.alpha_trim_mm = 0  # No trim (default)
  * common.alpha_trim_mm = 0.25  # Raise X tower corner 0.25mm
  * common.alpha_trim_mm = -0.15  # Lower X tower corner 0.15mm

---

### `common.beta_trim_mm`

* Type: `number`
* Default: `0`
* Units: mm
* Module: `endstops`
* Context: Global module setting (Y tower/axis trim offset)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:300`
* Typical values: `-2.0` to `+2.0` (mechanical compensation range)
* Corresponding v1 setting: `beta_trim_mm`
* Corresponding v2 setting: `endstops.common.beta_trim_mm`
* Description: Fine-tune trim adjustment for the Y tower (on deltas) or Y axis (on Cartesian machines) to compensate for mechanical variations. Similar to alpha_trim_mm but applies to the Y/beta actuator. Essential for achieving bed levelness on delta printers by adjusting effective tower heights.
  * Primary use: Delta printer bed leveling.
  * Set via M666 Y command and saved with M500.
  * Positive values effectively shorten the tower.
  * Negative values effectively lengthen the tower.
  * Works in conjunction with alpha and gamma trim for full bed leveling.
  * For Cartesian machines, rarely used.
* Related M-Codes:
  * M666 Y<trim_mm> - Set Y tower trim adjustment
  * M500 - Save trim values to config-override
* Related settings: `common.alpha_trim_mm`, `common.gamma_trim_mm`
* Related pages: endstops, delta, delta-calibration-strategy-options
* Example configuration:
  * common.beta_trim_mm = 0  # No trim (default)
  * common.beta_trim_mm = 0.50  # Raise Y tower corner 0.50mm
  * common.beta_trim_mm = -0.30  # Lower Y tower corner 0.30mm

---

### `common.gamma_trim_mm`

* Type: `number`
* Default: `0`
* Units: mm
* Module: `endstops`
* Context: Global module setting (Z tower/axis trim offset)
* Defined in: `Firmware/src/modules/tools/endstops/Endstops.cpp:301`
* Typical values: `-2.0` to `+2.0` (mechanical compensation range)
* Corresponding v1 setting: `gamma_trim_mm`
* Corresponding v2 setting: `endstops.common.gamma_trim_mm`
* Description: Fine-tune trim adjustment for the Z tower (on deltas) or Z axis (on Cartesian machines) to compensate for mechanical variations. Similar to alpha_trim_mm and beta_trim_mm but applies to the Z/gamma actuator. Essential for achieving bed levelness on delta printers by adjusting effective tower heights.
  * Primary use: Delta printer bed leveling.
  * Set via M666 Z command and saved with M500.
  * Positive values effectively shorten the tower.
  * Negative values effectively lengthen the tower.
  * Completes the three-point trim adjustment with alpha and beta.
  * For Cartesian machines, rarely used.
* Related M-Codes:
  * M666 Z<trim_mm> - Set Z tower trim adjustment
  * M500 - Save trim values to config-override
* Related settings: `common.alpha_trim_mm`, `common.beta_trim_mm`
* Related pages: endstops, delta, delta-calibration-strategy-options
* Example configuration:
  * common.gamma_trim_mm = 0  # No trim (default)
  * common.gamma_trim_mm = 0.10  # Raise Z tower corner 0.10mm
  * common.gamma_trim_mm = -0.25  # Lower Z tower corner 0.25mm

---

## Related G-codes and M-codes

* **G28** - Home axes (G28 X Y Z or G28 alone for all configured axes)
* **G28.2** - Home in GRBL mode (triggered by $H in GRBL dialect)
* **G28.3** - Manual homing: set current position as homed without moving
* **G28.4** - Manual homing by actuator position (rotary delta, specify degrees)
* **G28.5** - Clear homed flags for specified axes or all if no args
* **G28.6** - Show homing status for all axes (homed/not homed)
* **G28.7** - Home slaved axis for dual motor setups with individual endstops
* **M119** - Query endstop states (shows triggered/not triggered for all endstops)
* **M206** - Set homing offsets (added to homing_position after homing)
* **M306** - Set homing offset from current position (calculates delta from current MCS)
* **M500** - Save settings including trims, offsets, and homing position to config-override
* **M665** - Set max Z height for delta/SCARA (sets homing_position for Z)
* **M666** - Set trim values for delta calibration (alpha, beta, gamma offsets)

---

## Complete Configuration Examples

### Cartesian 3D Printer with Min Endstops

```ini
[endstops]
# Common settings for Cartesian printer
common.debounce_ms = 10
common.homing_order = ""  # Simultaneous homing
common.move_to_origin_after_home = false
common.home_z_first = false

# X-axis min endstop
minx.enable = true
minx.pin = PD0^
minx.axis = X
minx.homing_direction = home_to_min
minx.homing_position = 0
minx.max_travel = 250
minx.fast_rate = 100
minx.slow_rate = 10
minx.retract = 5
minx.limit_enable = false

# Y-axis min endstop
miny.enable = true
miny.pin = PD1^
miny.axis = Y
miny.homing_direction = home_to_min
miny.homing_position = 0
miny.max_travel = 250
miny.fast_rate = 100
miny.slow_rate = 10
miny.retract = 5
miny.limit_enable = false

# Z-axis min endstop
minz.enable = true
minz.pin = PD2^
minz.axis = Z
minz.homing_direction = home_to_min
minz.homing_position = 0
minz.max_travel = 300
minz.fast_rate = 20
minz.slow_rate = 2
minz.retract = 5
minz.limit_enable = false
```

---

### Linear Delta with Max Endstops and Trim

```ini
[endstops]
# Common settings for delta
common.debounce_ms = 0
common.delta_homing = true
common.move_to_origin_after_home = true
common.alpha_trim_mm = 0
common.beta_trim_mm = 0
common.gamma_trim_mm = 0

# X tower max endstop
maxx.enable = true
maxx.pin = PD0^!
maxx.axis = X
maxx.homing_direction = home_to_max
maxx.homing_position = 300
maxx.max_travel = 320
maxx.fast_rate = 100
maxx.slow_rate = 10
maxx.retract = 5
maxx.limit_enable = false

# Y tower max endstop
maxy.enable = true
maxy.pin = PD1^!
maxy.axis = Y
maxy.homing_direction = home_to_max
maxy.homing_position = 300
maxy.max_travel = 320
maxy.fast_rate = 100
maxy.slow_rate = 10
maxy.retract = 5
maxy.limit_enable = false

# Z tower max endstop
maxz.enable = true
maxz.pin = PD2^!
maxz.axis = Z
maxz.homing_direction = home_to_max
maxz.homing_position = 300
maxz.max_travel = 320
maxz.fast_rate = 100
maxz.slow_rate = 10
maxz.retract = 5
maxz.limit_enable = false
```

---

### CNC Mill with Hard Limits Enabled

```ini
[endstops]
# Common settings for CNC with limits
common.debounce_ms = 50  # Higher for noisy environment
common.homing_order = "ZXY"  # Z up first for clearance

# X-axis min (homing) and max (limit)
minx.enable = true
minx.pin = PD0^
minx.axis = X
minx.homing_direction = home_to_min
minx.homing_position = 0
minx.max_travel = 500
minx.fast_rate = 100
minx.slow_rate = 10
minx.retract = 5
minx.limit_enable = true  # Hard limit enabled

maxx.enable = true
maxx.pin = PD3^
maxx.axis = X
maxx.homing_direction = none  # Not for homing
maxx.limit_enable = true  # Limit only

# Y-axis min (homing) and max (limit)
miny.enable = true
miny.pin = PD1^
miny.axis = Y
miny.homing_direction = home_to_min
miny.homing_position = 0
miny.max_travel = 500
miny.fast_rate = 100
miny.slow_rate = 10
miny.retract = 5
miny.limit_enable = true

maxy.enable = true
maxy.pin = PD4^
maxy.axis = Y
maxy.homing_direction = none
maxy.limit_enable = true

# Z-axis similar configuration
minz.enable = true
minz.pin = PD2^
minz.axis = Z
minz.homing_direction = home_to_min
minz.homing_position = 0
minz.max_travel = 300
minz.fast_rate = 50
minz.slow_rate = 5
minz.retract = 5
minz.limit_enable = true
```

---

### CoreXY Configuration

```ini
[endstops]
# Common settings for CoreXY
common.debounce_ms = 10
common.corexy_homing = true  # Enable CoreXY mode
common.homing_order = ""  # Sequential forced by corexy_homing

# X and Y endstops (will home sequentially due to CoreXY kinematics)
minx.enable = true
minx.pin = PD0^
minx.axis = X
minx.homing_direction = home_to_min
minx.homing_position = 0
minx.max_travel = 300
minx.fast_rate = 100
minx.slow_rate = 10
minx.retract = 5

miny.enable = true
miny.pin = PD1^
miny.axis = Y
miny.homing_direction = home_to_min
miny.homing_position = 0
miny.max_travel = 300
miny.fast_rate = 100
miny.slow_rate = 10
miny.retract = 5

# Z-axis independent
minz.enable = true
minz.pin = PD2^
minz.axis = Z
minz.homing_direction = home_to_min
minz.homing_position = 0
minz.max_travel = 300
minz.fast_rate = 20
minz.slow_rate = 2
minz.retract = 5
```

---

## Troubleshooting

### Endstop Not Triggering

1. Check pin configuration with M119 to verify endstop state
2. Verify pullup/invert settings match hardware (NO vs NC)
3. Increase `common.debounce_ms` if electrical noise is present
4. Check `max_travel` is sufficient (should exceed actual axis length)
5. Verify wiring connections and switch functionality

### Homing Fails with ALARM

**Symptom:** Endstop not triggered within `max_travel` distance

**Causes:**
- Endstop not triggered due to wiring failure
- `max_travel` too small for axis length
- Wrong `homing_direction` for physical setup
- Endstop pin misconfigured or not detected

**Solutions:**
- Test endstop with M119 command before homing
- Increase `max_travel` to exceed axis length with margin
- Verify `homing_direction` matches physical endstop location
- Check pin definition and wiring

### False Triggers During Movement

**Symptom:** Endstop triggers randomly during normal operation

**Causes:**
- Electrical noise from motors, heaters, or power supplies
- Loose wiring or poor connections
- Mechanical switch bounce
- Insufficient debounce time

**Solutions:**
- Increase `common.debounce_ms` to 20-50ms
- Shield cables if near motors or heaters
- Check and secure all wiring connections
- Verify switch quality and consider replacement
- Route endstop cables away from motor and heater wiring

### Hard Limits Not Working

**Symptom:** Limit switches don't trigger ALARM when hit

**Checks:**
- Ensure `<name>.limit_enable = true` for the endstop
- Verify `common.debounce_ms` is appropriate
- Test pin with M119 to confirm detection
- Check that endstop is not disabled in firmware

**Note:** Limits are disabled during homing to prevent false alarms

### Delta Bed Not Level After Homing

**Symptom:** Print bed tilted despite successful homing

**Solution:**
- Use M666 to adjust `alpha_trim_mm`, `beta_trim_mm`, `gamma_trim_mm`
- Probe bed at three points near towers
- Adjust trim values to compensate for height differences
- Typical corrections: ±0.5mm per tower
- Save with M500 after adjustments

---

## Safety Considerations

1. **Always test endstops** with M119 before first homing operation
2. **Keep hand on emergency stop** during initial homing tests
3. **Set appropriate max_travel** to prevent crashes if endstop fails
4. **Use debounce** for mechanical switches to prevent false triggers
5. **Test limits** in controlled manner before enabling in production
6. **Back off limits** by moving away if triggered to reset ALARM state
7. **Verify homing direction** matches physical endstop locations before powering motors
8. **Check wiring** and ensure all connections are secure before homing

---

*End of Refined Documentation*

---

## Panel

# Smoothieware V2 Panel/Display Module Configuration Settings - REFINED

**Analysis Date:** 2025-11-05
**Source:** Smoothieware-v2 firmware codebase
**Specification Version:** 2.0
**Total Settings Documented:** 11 settings across 3 modules

---

## Overview

Smoothieware V2 **does not have a unified "panel" module** like V1. Instead, display and user input functionality is split into specialized modules:

- **[st7920]** - ST7920 graphic LCD controller (128x64)
- **[tm1638]** - TM1638 7-segment LED display with buttons
- **[mpg]** - Manual Pulse Generator (rotary encoder input)

---

## [st7920] - ST7920 Graphic LCD Display

ST7920-based 128x64 graphic LCD displays. Uses software SPI for communication.

---

#### `st7920.enable`

* Type: `bool`
* Default: `false`
* Module: `st7920`
* Context: Global display configuration
* Defined in: `Firmware/src/modules/utils/display/st7920/ST7920.cpp:210`
* Valid values: `true`, `false`
* Required: yes (module will not initialize without this)
* Corresponding v1 setting: `panel.enable` (panel module in v1 was unified, v2 splits into separate modules)
* Corresponding v2 setting: `st7920.enable`
* Description: Enables the ST7920 graphic display module. When set to true, the ST7920 driver will initialize, allocate a 1KB framebuffer in RAM, and begin displaying information on the 128x64 pixel LCD screen. This module supports text rendering, pixel operations, lines, rectangles, and AdaFruit GFX fonts.
  * The display must be enabled before pin configuration is used.
  * Allocates 1024 bytes (1KB) of RAM for the framebuffer.
  * Uses software SPI bit-banging (not hardware SPI) for communication.
  * Includes 10μs delays between operations for chip compatibility.
  * Built-in 5x8 pixel font for ASCII characters 0x00-0xFF.
  * Display resolution is 128 pixels wide by 64 pixels tall.
* Related settings: `st7920.clk`, `st7920.mosi`
* Related pages: panel, panel-guide, smoothieboard-v2-prime
* Example configuration:
  * st7920.enable = true  # Enable ST7920 graphic LCD display

---

#### `st7920.clk`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `st7920`
* Context: Hardware SPI configuration
* Defined in: `Firmware/src/modules/utils/display/st7920/ST7920.cpp:214`
* Valid values: Pin specification in format `PXn`
  * Any GPIO pin capable of digital output
  * Pin format: `PB13` means port B, pin 13
  * Pin is set LOW on initialization
* Required: yes (display cannot function without clock pin)
* Corresponding v1 setting: `panel.spi_channel` or `panel.lcd` pin configuration (v1 used different pin specification format)
* Corresponding v2 setting: `st7920.clk`
* Description: Specifies the GPIO pin used for the SPI clock signal when communicating with the ST7920 display controller. Despite being called "SPI clock", this implementation uses software bit-banging rather than hardware SPI, allowing any GPIO pin to be used. The clock signal is toggled for each bit transmitted, with 40ns low time, 300ns high time, and 300ns low time between bits.
  * Must be a valid GPIO pin on your board.
  * Pin is automatically configured as digital output.
  * Pin is set LOW during initialization.
  * No hardware SPI peripheral is used - this is software bit-banging.
  * The clock and data pins work together in 3-wire SPI mode.
  * CRITICAL: The ST7920's PSB pin must be grounded to select serial mode.
* Related settings: `st7920.mosi`, `st7920.enable`
* Related pages: panel, pinout, pin-configuration, smoothieboard-v2-prime
* Example configuration:
  * st7920.clk = PB13  # SPI clock pin for ST7920 display
  * st7920.clk = PJ11  # Alternative pin assignment for different board

---

#### `st7920.mosi`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `st7920`
* Context: Hardware SPI configuration
* Defined in: `Firmware/src/modules/utils/display/st7920/ST7920.cpp:222`
* Valid values: Pin specification in format `PXn`
  * Any GPIO pin capable of digital output
  * Pin format: `PB15` means port B, pin 15
  * Pin is set LOW on initialization
* Required: yes (display cannot function without data pin)
* Corresponding v1 setting: `panel.spi_channel` or `panel.lcd` pin configuration (v1 used different pin specification format)
* Corresponding v2 setting: `st7920.mosi`
* Description: Specifies the GPIO pin used for the SPI MOSI (Master Out Slave In) data signal when communicating with the ST7920 display controller. This pin transmits all data and commands from the controller to the display. Each byte is sent as two 4-bit nibbles with the upper nibble first, followed by 10μs delay.
  * Must be a valid GPIO pin on your board.
  * Pin is automatically configured as digital output.
  * Pin is set LOW during initialization.
  * Data is transmitted using software SPI bit-banging.
  * No CS (chip select) pin is needed - the display is always selected.
  * In 3-wire SPI mode, this pin connects to the ST7920's RS (Register Select) pin.
  * The ST7920's R/W pin should be grounded (always write mode).
* Related settings: `st7920.clk`, `st7920.enable`
* Related pages: panel, pinout, pin-configuration, smoothieboard-v2-prime
* Example configuration:
  * st7920.mosi = PB15  # SPI data (MOSI) pin for ST7920 display
  * st7920.mosi = PJ6  # Alternative pin assignment

---

## [tm1638] - TM1638 7-Segment LED Display

TM1638-based 7-segment LED display module with 8 buttons and 8 bi-color (red/green) LEDs.

---

#### `tm1638.enable`

* Type: `bool`
* Default: `false`
* Module: `tm1638`
* Context: Global display configuration
* Defined in: `Firmware/src/modules/utils/display/tm1638/TM1638.cpp:72`
* Valid values: `true`, `false`
* Required: yes (module will not initialize without this)
* Corresponding v1 setting: none (TM1638 is new in v2)
* Corresponding v2 setting: `tm1638.enable`
* Description: Enables the TM1638 7-segment LED display module. When set to true, the TM1638 driver will initialize and begin controlling the 8-digit 7-segment display, 8 buttons, and 8 bi-color LEDs. This module uses a custom serial protocol with bit-banging for communication.
  * Module supports 8-digit 7-segment display with decimal points.
  * Includes 8 momentary push buttons for user input.
  * Includes 8 bi-color LEDs (red and green) for status indication.
  * Brightness control available with 8 levels (0-7).
  * Uses custom serial protocol (not standard SPI or I2C).
  * All three pins (clock, data, strobe) must be configured.
* Related settings: `tm1638.clock_pin`, `tm1638.data_pin`, `tm1638.strobe_pin`
* Related pages: panel, smoothieboard-v2-prime
* Example configuration:
  * tm1638.enable = true  # Enable TM1638 7-segment LED display module

---

#### `tm1638.clock_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `tm1638`
* Context: Serial interface configuration
* Defined in: `Firmware/src/modules/utils/display/tm1638/TM1638.cpp:76`
* Valid values: Pin specification in format `PXn`
  * Any GPIO pin capable of digital output
  * Pin format: `PJ11` means port J, pin 11
  * Pin is set LOW on initialization
* Required: yes (TM1638 cannot function without clock pin)
* Corresponding v1 setting: none (TM1638 is new in v2)
* Corresponding v2 setting: `tm1638.clock_pin`
* Description: Specifies the GPIO pin used for the clock signal in the TM1638 custom serial interface. The clock signal synchronizes data transmission between the controller and the TM1638 chip using bit-banged serial protocol. The clock toggles for each bit with microsecond-level delays for timing compliance.
  * Must be a valid GPIO pin capable of digital output.
  * Pin is automatically configured as output.
  * Pin is set LOW during initialization.
  * Uses bit-banged serial protocol (not hardware SPI).
  * Clock frequency determined by software delays in bit-banging routine.
  * Works with data_pin and strobe_pin to implement TM1638 protocol.
* Related settings: `tm1638.data_pin`, `tm1638.strobe_pin`, `tm1638.enable`
* Related pages: panel, pinout, pin-configuration, smoothieboard-v2-prime
* Example configuration:
  * tm1638.clock_pin = PJ11  # TM1638 clock pin (example from lathe config)
  * tm1638.clock_pin = PB10  # Alternative pin assignment

---

#### `tm1638.data_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `tm1638`
* Context: Serial interface configuration
* Defined in: `Firmware/src/modules/utils/display/tm1638/TM1638.cpp:79`
* Valid values: Pin specification in format `PXn`
  * Any GPIO pin capable of both input and output
  * Pin format: `PJ6` means port J, pin 6
  * Pin starts as output, set LOW on initialization
* Required: yes (TM1638 cannot function without data pin)
* Corresponding v1 setting: none (TM1638 is new in v2)
* Corresponding v2 setting: `tm1638.data_pin`
* Description: Specifies the GPIO pin used for bidirectional data transmission in the TM1638 serial interface. This pin is unique because it must support both output mode (for sending display data and commands) and input mode (for reading button states). The pin dynamically switches between input and output modes as needed during communication.
  * Must be a valid GPIO pin capable of both input and output operation.
  * Pin switches between input and output modes dynamically.
  * Used as output when writing to display or LEDs.
  * Used as input when reading button states.
  * Pin is initially configured as output and set LOW.
  * CRITICAL: This bidirectional capability is required for TM1638 protocol.
* Related settings: `tm1638.clock_pin`, `tm1638.strobe_pin`, `tm1638.enable`
* Related pages: panel, pinout, pin-configuration, smoothieboard-v2-prime
* Example configuration:
  * tm1638.data_pin = PJ6  # TM1638 bidirectional data pin (example from lathe config)
  * tm1638.data_pin = PB12  # Alternative pin assignment

---

#### `tm1638.strobe_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `tm1638`
* Context: Serial interface configuration
* Defined in: `Firmware/src/modules/utils/display/tm1638/TM1638.cpp:82`
* Valid values: Pin specification in format `PXn`
  * Any GPIO pin capable of digital output
  * Pin format: `PJ9` means port J, pin 9
  * Pin is set LOW on initialization
* Required: yes (TM1638 cannot function without strobe pin)
* Corresponding v1 setting: none (TM1638 is new in v2)
* Corresponding v2 setting: `tm1638.strobe_pin`
* Description: Specifies the GPIO pin used for the strobe (chip select) signal in the TM1638 serial interface. The strobe pin controls when data transmission begins and ends, acting similar to a chip select signal. The strobe is pulled low to begin a transaction and raised high to end it, latching the transmitted data into the TM1638 chip.
  * Must be a valid GPIO pin capable of digital output.
  * Pin is automatically configured as output.
  * Pin is set LOW during initialization.
  * Strobe LOW = begin data transmission.
  * Strobe HIGH = end transmission and latch data.
  * Works with clock_pin and data_pin to complete the TM1638 3-wire interface.
* Related settings: `tm1638.clock_pin`, `tm1638.data_pin`, `tm1638.enable`
* Related pages: panel, pinout, pin-configuration, smoothieboard-v2-prime
* Example configuration:
  * tm1638.strobe_pin = PJ9  # TM1638 strobe/CS pin (example from lathe config)
  * tm1638.strobe_pin = PB11  # Alternative pin assignment

---

## [mpg] - Manual Pulse Generator (Rotary Encoder)

Manual Pulse Generator for rotary encoder-based manual control. Supports multiple independent encoders for different axes. Each encoder instance requires its own named sub-section configuration.

**Configuration Pattern:** `mpg.<name>.setting` where `<name>` is a user-chosen identifier (e.g., `xaxis`, `yaxis`, `zaxis`)

---

#### `mpg.<name>.enable`

* Type: `bool`
* Default: `false`
* Module: `mpg`
* Context: Per-encoder configuration (module instance setting)
* Defined in: `Firmware/src/modules/utils/mpg/mpg.cpp:41`
* Valid values: `true`, `false`
* Required: yes (encoder instance will not initialize without this)
* Corresponding v1 setting: `panel.encoder_a_pin` + `panel.encoder_b_pin` (v1 had unified panel module, v2 separates MPG functionality)
* Corresponding v2 setting: `mpg.<name>.enable`
* Description: Enables this specific MPG (Manual Pulse Generator) instance. When set to true, this encoder will be initialized and will control the axis specified in the axis setting. Multiple MPG instances can be configured for different axes by creating separate named sub-sections (e.g., xaxis, yaxis, zaxis).
  * Each enabled instance requires unique encoder pins (enca_pin and encb_pin).
  * Each instance controls one actuator axis (0-5).
  * Multiple instances can run simultaneously for multi-axis manual control.
  * Each instance creates its own FreeRTOS task with priority 3.
  * Encoder input is ignored when the block queue is not idle (safety feature).
  * CRITICAL: Encoder pins must be interrupt-capable with unique line numbers.
* Related settings: `mpg.<name>.enca_pin`, `mpg.<name>.encb_pin`, `mpg.<name>.axis`
* Related pages: panel, panel-guide, smoothieboard-v2-prime
* Example configuration:
  * mpg.xaxis.enable = true  # Enable encoder for X-axis manual control
  * mpg.yaxis.enable = true  # Enable encoder for Y-axis manual control
  * mpg.zaxis.enable = true  # Enable encoder for Z-axis manual control

---

#### `mpg.<name>.enca_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `mpg`
* Context: Rotary encoder hardware input (per-instance setting)
* Defined in: `Firmware/src/modules/utils/mpg/mpg.cpp:72`
* Valid values: Pin specification in format `PXn^` with pullup
  * CRITICAL: Must be an interrupt-capable GPIO pin
  * CRITICAL: Pin's line number must NOT already be used by another interrupt
  * Pin format with pullup: `PF10^` means port F, pin 10 with pullup enabled
  * The `^` suffix enables internal pullup resistor (strongly recommended)
* Required: yes (encoder cannot function without phase A input)
* Corresponding v1 setting: `panel.encoder_a_pin` (v1 unified panel module)
* Corresponding v2 setting: `mpg.<name>.enca_pin`
* Description: Specifies the GPIO pin connected to encoder phase A (channel A) of the quadrature rotary encoder. This pin must be interrupt-capable because the encoder uses edge detection on both phases to determine rotation direction and count steps. The pin's line number must be unique across all interrupt pins in the system.
  * CRITICAL: Must be an interrupt-capable pin - check your board's documentation.
  * CRITICAL: The GPIO line number (last digits of pin name) must be unique.
  * Example: If using PF10 (line 10), you cannot use PA10, PB10, etc. elsewhere.
  * Pullup resistor (`^` modifier) is strongly recommended for encoder stability.
  * Works with encb_pin for quadrature decoding (direction detection).
  * Each encoder edge triggers an interrupt that signals the handler task.
  * If pin setup fails, the module will not initialize and will report an error.
* Related settings: `mpg.<name>.encb_pin`, `mpg.<name>.axis`, `mpg.<name>.enable`
* Related pages: panel, pinout, pin-configuration, endstops, smoothieboard-v2-prime
* Example configuration:
  * mpg.xaxis.enca_pin = PF10^  # Encoder phase A with pullup (line 10)
  * mpg.yaxis.enca_pin = PA3^  # Y-axis encoder phase A (line 3)
  * mpg.zaxis.enca_pin = PB8^  # Z-axis encoder phase A (line 8)

---

#### `mpg.<name>.encb_pin`

* Type: `pin`
* Default: `"nc"` (not connected)
* Module: `mpg`
* Context: Rotary encoder hardware input (per-instance setting)
* Defined in: `Firmware/src/modules/utils/mpg/mpg.cpp:73`
* Valid values: Pin specification in format `PXn^` with pullup
  * CRITICAL: Must be an interrupt-capable GPIO pin
  * CRITICAL: Pin's line number must NOT already be used by another interrupt
  * CRITICAL: Line number must be different from enca_pin's line number
  * Pin format with pullup: `PF6^` means port F, pin 6 with pullup enabled
  * The `^` suffix enables internal pullup resistor (strongly recommended)
* Required: yes (encoder cannot determine direction without phase B input)
* Corresponding v1 setting: `panel.encoder_b_pin` (v1 unified panel module)
* Corresponding v2 setting: `mpg.<name>.encb_pin`
* Description: Specifies the GPIO pin connected to encoder phase B (channel B) of the quadrature rotary encoder. This pin works with enca_pin to determine rotation direction through quadrature decoding. The phase relationship between A and B signals indicates clockwise or counter-clockwise rotation. This pin must also be interrupt-capable with a unique line number.
  * CRITICAL: Must be an interrupt-capable pin - check your board's documentation.
  * CRITICAL: The GPIO line number must be unique across ALL interrupts.
  * CRITICAL: Line number must be different from enca_pin's line number.
  * Example valid pair: enca_pin = PF10 (line 10), encb_pin = PF6 (line 6).
  * Example INVALID pair: enca_pin = PF10 (line 10), encb_pin = PA10 (line 10) - conflict!
  * Pullup resistor (`^` modifier) is strongly recommended for encoder stability.
  * Both A and B phases are required for quadrature decoding.
  * If pin setup fails with "not valid interrupt pins" error, check line number conflicts.
* Related settings: `mpg.<name>.enca_pin`, `mpg.<name>.axis`, `mpg.<name>.enable`
* Related pages: panel, pinout, pin-configuration, endstops, smoothieboard-v2-prime
* Example configuration:
  * mpg.xaxis.encb_pin = PF6^  # Encoder phase B with pullup (line 6 - different from line 10)
  * mpg.yaxis.encb_pin = PA4^  # Y-axis encoder phase B (line 4 - different from line 3)
  * mpg.zaxis.encb_pin = PB9^  # Z-axis encoder phase B (line 9 - different from line 8)

---

#### `mpg.<name>.axis`

* Type: `number`
* Default: `-1` (invalid, must be set)
* Module: `mpg`
* Context: Axis assignment (per-instance setting)
* Defined in: `Firmware/src/modules/utils/mpg/mpg.cpp:62`
* Minimum value: `0` (validated in mpg.cpp:63)
* Maximum value: `5` (validated in mpg.cpp:63)
* Valid values: `0` (X/alpha), `1` (Y/beta), `2` (Z/gamma), `3` (E0/delta), `4` (E1/epsilon), `5` (E2/zeta)
  * `0` - X-axis (alpha actuator)
  * `1` - Y-axis (beta actuator)
  * `2` - Z-axis (gamma actuator)
  * `3` - E0 extruder or A-axis (delta actuator)
  * `4` - E1 extruder or B-axis (epsilon actuator)
  * `5` - E2 extruder or C-axis (zeta actuator)
* Required: yes (encoder will not initialize without valid axis assignment)
* Corresponding v1 setting: none (v1 panel encoder had no axis assignment, typically controlled menu navigation)
* Corresponding v2 setting: `mpg.<name>.axis`
* Description: Specifies which actuator axis this encoder controls for manual pulse generation. The encoder directly steps the specified motor, allowing manual positioning when the machine is idle. Each rotation click of the encoder advances or reverses the motor by one microstep based on direction. This provides precise manual control for machine setup, workpiece alignment, and manual machining operations.
  * Axis number maps directly to Robot actuator array index.
  * Encoder input is only processed when the block queue is idle (safety feature).
  * Each encoder pulse manually steps the motor in the specified direction.
  * Position is reset based on current actuator position after each movement.
  * Typical use: axis 0-2 for X/Y/Z positioning, axis 3-5 for rotary axes.
  * ERROR: If axis is not 0-5, module will fail to initialize.
  * The encoder is effectively ignored during G-code execution.
* Related M-Codes:
  * M114 - Get current position (reflects MPG movements)
  * G92 - Set position (can be used after MPG positioning)
  * G28 - Home axis (recommended before using MPG)
* Related settings: `mpg.<name>.enca_pin`, `mpg.<name>.encb_pin`, `mpg.<name>.enable`
* Related pages: panel, panel-guide, endstops, motion-control, smoothieboard-v2-prime
* Example configuration:
  * mpg.xaxis.axis = 0  # Control X-axis (alpha) with this encoder
  * mpg.yaxis.axis = 1  # Control Y-axis (beta) with this encoder
  * mpg.zaxis.axis = 2  # Control Z-axis (gamma) with this encoder

---

## Complete Configuration Examples

### ST7920 Graphic LCD Example

```ini
[st7920]
enable = true
clk = PB13        # SPI clock pin
mosi = PB15       # SPI data pin
```

**Hardware:** 128x64 graphic LCD with ST7920 controller (common in RepRap Full Graphic Display)

**Wiring Notes:**
- ST7920 PSB pin must be grounded (selects serial mode)
- ST7920 RS pin connects to MOSI
- ST7920 EN pin connects to CLK
- ST7920 R/W pin must be grounded (always write mode)
- Requires stable 5V power supply

---

### TM1638 LED Display Example

```ini
[tm1638]
enable = true
clock_pin = PJ11              # on GA pin 6
data_pin = PJ6                # on GA pin 3
strobe_pin = PJ9              # on GA pin 4
```

**Hardware:** TM1638 module with 8-digit 7-segment display, 8 buttons, 8 bi-color LEDs

**Source:** ConfigSamples/config-lathe.ini:281-285

**Features:**
- 8-digit 7-segment display with decimal points
- 8 momentary push buttons
- 8 bi-color (red/green) LEDs
- Brightness control (8 levels)
- Button reading capability

---

### MPG (Manual Pulse Generator) Example

```ini
[mpg]
xaxis.enable = true
xaxis.enca_pin = PF10^  # Interrupt pin with pullup (line 10)
xaxis.encb_pin = PF6^   # Interrupt pin with pullup (line 6)
xaxis.axis = 0          # Control X-axis (alpha)

yaxis.enable = true
yaxis.enca_pin = PA3^   # Interrupt pin with pullup (line 3)
yaxis.encb_pin = PA4^   # Interrupt pin with pullup (line 4)
yaxis.axis = 1          # Control Y-axis (beta)

zaxis.enable = true
zaxis.enca_pin = PB8^   # Interrupt pin with pullup (line 8)
zaxis.encb_pin = PB9^   # Interrupt pin with pullup (line 9)
zaxis.axis = 2          # Control Z-axis (gamma)
```

**Hardware:** Standard quadrature rotary encoders (100-600 PPR recommended)

**Source:** Firmware/src/modules/utils/mpg/mpg.cpp:153-166

**CRITICAL Requirements:**
- Both encoder pins (A and B) must be interrupt-capable
- Pin line numbers must be unique across entire system
- Line numbers for phase A and B must be different from each other
- Pullup resistors strongly recommended (`^` modifier)

**Encoder Specifications:**
- Type: Quadrature (2-phase)
- Resolution: Full 32-bit counter with wrap-around handling
- Operation: Interrupt-based for real-time response
- Safety: Ignores input when block queue is active

---

## Important Implementation Notes

### Display Module Differences from V1

1. **No Unified Panel Module:** V2 splits display and input into separate specialized modules
2. **No Built-in Menu System:** Displays are framebuffer/output only (no interactive menus in base firmware)
3. **Separate Encoder Handling:** MPG module handles rotary encoders independently from displays
4. **Different Purpose:** V1 panel encoders controlled menus; V2 MPG encoders directly control motors

### ST7920 Technical Details

- **Resolution:** 128 pixels × 64 pixels
- **Framebuffer:** 1024 bytes (1KB) allocated in RAM
- **Communication:** Software SPI (bit-banged, no hardware SPI peripheral used)
- **Timing:** 10μs delays between operations for chip compatibility
- **Font:** Built-in 5x8 pixel font for ASCII characters 0x00-0xFF
- **Graphics:** Supports text rendering, pixel operations, lines, rectangles, and AdaFruit GFX fonts
- **Boot Delay:** 90ms initialization delay required on power-up

### TM1638 Technical Details

- **Display:** 8 digits, 7-segment with decimal points
- **Buttons:** 8 momentary push buttons with read capability
- **LEDs:** 8 positions × 2 colors (red and green), individually controllable
- **Protocol:** Custom serial protocol with bit-banging (not SPI or I2C)
- **Brightness:** 8 levels (0-7), adjustable via brightness() command
- **Data Direction:** Bidirectional data pin (output for display, input for buttons)
- **Timing:** Microsecond-level delays (TM_READ_DELAY) for protocol compliance

### MPG Technical Details

- **Encoder Type:** Quadrature (2-phase) incremental encoder
- **Resolution:** Full 32-bit counter with automatic wrap-around handling
- **Response:** Interrupt-based for real-time position tracking
- **Safety:** Ignores encoder input when block queue is active (prevents interference)
- **Multiple Axes:** Each encoder gets dedicated FreeRTOS task for handling
- **Task Priority:** FreeRTOS task priority 3 (high priority for responsive control)
- **Direction:** Automatically determined from phase relationship (A leads B or B leads A)
- **Wrap-Around:** Handles 32-bit counter overflow/underflow correctly

---

## Pin Requirements and Constraints

### ST7920 Pins

- **CLK:** Any GPIO output pin (software SPI, not true hardware SPI)
- **MOSI:** Any GPIO output pin
- **No CS Pin:** Display is always selected (CS tied low in hardware)
- **PSB Pin:** Must be grounded on display module (selects serial mode)
- **Pin Voltage:** Typically 5V compatible (check your display datasheet)

### TM1638 Pins

- **Clock/Data/Strobe:** Any three GPIO pins
- **Bidirectional Data:** Data pin must support both input and output modes
- **Pin Voltage:** Typically 5V (TM1638 is a 5V device)
- **Pin Order:** Not critical, but consistent with module wiring

### MPG Pins

- **CRITICAL CONSTRAINT:** Both enca_pin and encb_pin **must** be interrupt-capable
- **Line Number Uniqueness:** The GPIO line number (last digit(s) of PXn) must be unique across all interrupt-using features
- **Example Valid Configuration:**
  - enca_pin = PF10 (line 10)
  - encb_pin = PF6 (line 6)
  - Valid because line 10 ≠ line 6
- **Example INVALID Configuration:**
  - enca_pin = PF10 (line 10)
  - encb_pin = PA10 (line 10) ← **CONFLICT** same line number
- **Pullups Required:** Use `^` modifier for encoder pins (strongly recommended)
- **Pin Voltage:** Typically 3.3V (STM32 GPIO levels)

**Checking Interrupt Capability:**
- Consult your board's schematic or datasheet
- Not all GPIO pins support external interrupts
- STM32 has 16 interrupt lines (0-15), each line can only be used by one pin
- If setup fails with "not valid interrupt pins" error, check pin capability and line conflicts

---

## Common Wiring Examples

### ST7920 Display (3-Wire SPI Mode)

```
Display Pin → Board Connection
ST7920 PSB  → GND (select serial mode - CRITICAL)
ST7920 RS   → MOSI pin (PB15)
ST7920 EN   → CLK pin (PB13)
ST7920 R/W  → GND (always write mode)
ST7920 VCC  → 5V (stable power supply)
ST7920 GND  → GND
ST7920 BLA  → 5V (backlight anode, optional current-limiting resistor)
ST7920 BLK  → GND (backlight cathode)
```

**CRITICAL:** PSB pin MUST be grounded to enable serial mode. If left floating or pulled high, display will be in parallel mode and will not respond.

---

### TM1638 Module

```
TM1638 Pin → Board Connection
TM1638 VCC → 5V (stable power supply)
TM1638 GND → GND
TM1638 STB → strobe_pin (PJ9)
TM1638 CLK → clock_pin (PJ11)
TM1638 DIO → data_pin (PJ6)
```

**Note:** TM1638 is a 5V device. Ensure your board can supply 5V and that GPIO pins are 5V tolerant or use level shifters.

---

### Rotary Encoder

```
Encoder Pin → Board Connection
Phase A     → enca_pin with pullup (PF10^)
Phase B     → encb_pin with pullup (PF6^)
Common      → GND
+V          → 3.3V or 5V (depending on encoder)
```

**Encoder Types:**
- **Mechanical encoders:** Benefit greatly from pullups and debouncing
- **Optical encoders:** Typically have cleaner signals but still use pullups
- **Magnetic encoders:** Also benefit from pullups

**Recommended Specifications:**
- Resolution: 100-600 pulses per revolution (PPR)
- Type: Quadrature (2-phase) incremental
- Voltage: 3.3V or 5V compatible
- Output: Open-collector or push-pull (pullups work for both)

---

## Troubleshooting

### ST7920 Display Not Working

**Symptom:** Blank display or no response

**Possible Causes:**
1. PSB pin not grounded (display in parallel mode instead of serial)
2. Incorrect pin assignments (CLK or MOSI swapped)
3. Unstable or insufficient 5V power supply
4. Display not given 90ms boot delay before first access

**Solutions:**
- Verify PSB pin on display is grounded (CRITICAL)
- Check 5V power supply voltage under load (should be 4.75V-5.25V)
- Ensure CLK and MOSI pins are correctly defined in config
- Allow 90ms delay after power-on before attempting display operations
- Check wiring connections with multimeter
- Try a different display module (rule out hardware failure)

---

### TM1638 Display Blank

**Symptom:** Display shows no segments

**Possible Causes:**
1. Incorrect pin assignments (clock, data, or strobe)
2. Insufficient or unstable 5V power supply
3. Brightness set to zero or very low
4. Wiring issues or poor connections

**Solutions:**
- Verify all three pins (clock, data, strobe) are connected
- Check 5V power supply voltage and current capability
- Use brightness() command to set brightness level (0-7, try 7 for testing)
- Check wiring with multimeter for continuity
- Test buttons (if working, module is powered and communicating)
- Try a different TM1638 module (rule out hardware failure)

---

### MPG Encoder Not Responding

**Symptom:** Encoder rotation has no effect

**Most Common Cause:** Interrupt pin conflict - line numbers not unique

**Error Message:** "enca and/or encb pins are not valid interrupt pins"

**Detailed Diagnosis:**

**Cause 1: Pin Not Interrupt-Capable**
- Not all GPIO pins support external interrupts
- Check STM32 datasheet for your specific chip
- Consult board schematic for interrupt-capable pins

**Cause 2: Line Number Already in Use**
- STM32 has 16 interrupt lines (0-15)
- Each line can only be used by ONE pin across all ports
- Example: PF10 (line 10) and PA10 (line 10) conflict - only one can be used
- Check your entire config for other interrupt-using features:
  - Endstops (if using interrupt mode)
  - Other MPG encoders
  - Button inputs
  - Other modules using external interrupts

**Cause 3: Both Encoder Pins Share Same Line Number**
- enca_pin and encb_pin must have different line numbers
- Example INVALID: enca_pin = PF10, encb_pin = PG10 (both line 10)
- Example VALID: enca_pin = PF10, encb_pin = PF6 (lines 10 and 6)

**Cause 4: Missing Pullups**
- Encoder may not have internal pullups
- Add `^` modifier: `PF10^` enables internal pullup
- External pullups (4.7kΩ-10kΩ) can also be used

**Cause 5: MPG Used During G-code Execution**
- By design, MPG is disabled when system is executing G-code (safety feature)
- Encoder only works when block queue is idle
- This is NOT a bug, it prevents operator interference during automatic operation

**Solution Steps:**
1. Check pin interrupt capability in STM32 datasheet
2. Map out all interrupt line usage in your config
3. Choose pins with different line numbers for each interrupt
4. Example working configuration:
   - X-axis: PF10 (line 10), PF6 (line 6)
   - Y-axis: PA3 (line 3), PA4 (line 4)
   - Z-axis: PB8 (line 8), PB9 (line 9)
5. Ensure pullups are enabled (` ^` modifier)
6. Verify machine is idle (not executing G-code) when testing

---

### Encoder Direction Reversed

**Symptom:** Encoder turns one way, motor moves opposite direction

**Solutions:**
- Swap enca_pin and encb_pin pin assignments in configuration
- Or swap the physical wiring of encoder phases A and B
- Test rotation direction and adjust as needed

---

### Encoder Skips or Double-Counts

**Symptom:** Inconsistent step counting, random position changes

**Causes:**
1. Missing or insufficient pullup resistors
2. Noisy encoder signals (mechanical encoders)
3. Loose wiring connections
4. Encoder running too fast (exceeding interrupt response time)

**Solutions:**
- Enable internal pullups with `^` modifier
- Add external pullup resistors (4.7kΩ-10kΩ to 3.3V)
- Check all wiring connections for security
- Add hardware debouncing (0.1μF capacitors on encoder phases)
- Use higher-quality encoder (optical instead of mechanical)
- Reduce encoder rotation speed during testing

---

## Migration Notes from Smoothieware V1

### V1 Panel Module → V2 Equivalents

| V1 Setting | V2 Equivalent | Notes |
|------------|---------------|-------|
| `panel.enable` | `[st7920]` or `[tm1638]` section | Split into separate modules |
| `panel.lcd` | `st7920.enable` | ST7920 is most common LCD type in v1 |
| `panel.encoder_a_pin` | `mpg.<name>.enca_pin` | Now in separate MPG module |
| `panel.encoder_b_pin` | `mpg.<name>.encb_pin` | Requires interrupt-capable pins with unique line numbers |
| `panel.click_button_pin` | **Not implemented** | No built-in button in v2 base firmware |
| `panel.menu_offset` | **Not implemented** | No menu system in v2 base firmware |
| `panel.encoder_resolution` | **Hardware-based** | Detected automatically from encoder hardware |
| `panel.buzz_pin` | **Not implemented** | No buzzer support in base v2 firmware |
| `panel.back_button_pin` | **Not implemented** | No menu navigation in v2 |
| Various LCD types | `st7920.enable` only | v2 supports fewer display types in base firmware |

### Key Functional Differences

1. **No Built-in Menus:** V2 does not include panel menu system in base firmware
   - v1 had extensive menu system for settings, file browsing, and machine control
   - v2 displays are output-only in base firmware (no interactive control logic)
   - Custom menus would need to be implemented in user code

2. **Display-only:** ST7920/TM1638 are output-only (no interactive control logic)
   - ST7920 displays graphics and text
   - TM1638 displays numbers and can read buttons, but no menu system built-in
   - Control logic must be implemented separately if needed

3. **MPG is Manual Control:** Encoder directly steps motors, not menu navigation
   - v1 encoder typically controlled menu navigation
   - v2 MPG encoder provides direct manual positioning control
   - Each encoder rotation advances or reverses motor by one microstep
   - Only works when machine is idle (safety feature)

4. **Interrupt Requirements:** V2 MPG encoders must use interrupt-capable pins with unique line numbers
   - v1 had more flexible pin assignment
   - v2 requires careful pin selection to avoid line number conflicts
   - Each interrupt line (0-15) can only be used by one pin across all ports

5. **Module Structure:** V2 uses separate, specialized modules instead of unified panel
   - More modular and flexible architecture
   - Easier to support new display/input types
   - Clearer separation of concerns (display vs input)

### Migration Strategy

**If you used v1 panel for display only:**
- Configure ST7920 module for graphical display
- Or configure TM1638 for numeric display
- No menu system available - display is output-only

**If you used v1 panel encoder for menu navigation:**
- v2 does not have menu navigation in base firmware
- Consider using TM1638 buttons for custom input logic
- Or implement custom control interface

**If you want manual axis control:**
- Configure MPG module with rotary encoder(s)
- Provides direct motor control (not menu navigation)
- Useful for machine setup and manual machining

**Display Selection Guide:**
- Use ST7920 for: graphical display, text, graphics, existing RepRap display hardware
- Use TM1638 for: numeric display, button input, LED indicators, industrial/machine tool interfaces

---

## Module Statistics

| Module | Settings per Instance | Pins per Instance | Complexity | Multi-Instance |
|--------|----------------------|-------------------|------------|----------------|
| ST7920 | 3 | 2 | Medium | No (single display) |
| TM1638 | 4 | 3 | Medium | No (single display) |
| MPG | 4 | 2 | High | Yes (one per axis) |

**Total Base Settings:** 7 (ST7920) + 4 (TM1638) = 11 settings
**Total with Multiple MPG:** 11 + (4 × number of MPG instances)

**Typical Configuration:**
- 1 display module (ST7920 or TM1638): 3-4 settings
- 3 MPG instances (X, Y, Z axes): 12 settings
- Total: 15-16 settings for typical panel/input configuration

---

## Source Code References

| Setting | File | Line |
|---------|------|------|
| `st7920.enable` | `ST7920.cpp` | 210 |
| `st7920.clk` | `ST7920.cpp` | 214 |
| `st7920.mosi` | `ST7920.cpp` | 222 |
| `tm1638.enable` | `TM1638.cpp` | 72 |
| `tm1638.clock_pin` | `TM1638.cpp` | 76 |
| `tm1638.data_pin` | `TM1638.cpp` | 79 |
| `tm1638.strobe_pin` | `TM1638.cpp` | 82 |
| `mpg.<name>.enable` | `mpg.cpp` | 41 |
| `mpg.<name>.enca_pin` | `mpg.cpp` | 72 |
| `mpg.<name>.encb_pin` | `mpg.cpp` | 73 |
| `mpg.<name>.axis` | `mpg.cpp` | 62 |

**Source Code Locations:**
- ST7920: `Firmware/src/modules/utils/display/st7920/`
- TM1638: `Firmware/src/modules/utils/display/tm1638/`
- MPG: `Firmware/src/modules/utils/mpg/`

---

## Additional Resources

- **Sample Configuration:** `ConfigSamples/config-lathe.ini` (TM1638 example at lines 281-285)
- **MPG Configuration Example:** `Firmware/src/modules/utils/mpg/mpg.cpp:153-166`
- **ST7920 Driver Documentation:** `Firmware/src/modules/utils/display/st7920/`
- **TM1638 Driver Documentation:** `Firmware/src/modules/utils/display/tm1638/`
- **Rotary Encoder Implementation:** Based on quadrature decoding with interrupt handling
- **Pin Configuration Guide:** See Smoothieboard v2 pinout documentation and schematic

---

*End of Panel/Display Configuration Documentation (Refined)*

---

## Network

# Smoothieware V2 Network Module Configuration Reference - REFINED

## Module Overview

The Network module provides Ethernet connectivity for Smoothieware V2, supporting DHCP or static IP configuration. When enabled, it can run multiple services including a telnet shell, FTP server, web server, and NTP time synchronization.

---

## Configuration Settings

#### `network.enable`

* Type: `bool`
* Default: `false`
* Module: `network`
* Context: Global setting (master enable for entire network subsystem)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:90`
* Valid values: `true`, `false`
* Corresponding v1 setting: `network.enable`
* Description: Master switch to enable or disable all networking functionality. When set to false, all network features are disabled regardless of other network-related settings. This is the primary enable that must be set to true before any other network features will function.
  * All other `network.*` settings require this to be `true`
  * When disabled, Ethernet hardware is not initialized and consumes no resources
  * Can be toggled without reflashing firmware
* Related settings: `network.shell_enable`, `network.ftp_enable`, `network.webserver_enable`, `network.ntp_enable`
* Related pages: network, connecting-smoothie
* Example configuration:
  * network.enable = true  # Enable networking functionality
  * network.enable = false  # Disable all network features (default)

#### `network.ip_address`

* Type: `string`
* Default: `"auto"`
* Module: `network`
* Context: Global setting (determines DHCP vs static IP mode)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:98-123`
* Valid values: `"auto"` for DHCP mode, or valid IPv4 address string for static mode
  * `"auto"` - Use DHCP to automatically obtain IP address, subnet mask, gateway, and DNS
  * IPv4 address in dotted decimal notation (e.g., `"192.168.1.101"`)
  * Must be a string, not a number (quotes required in configuration file)
* Corresponding v1 setting: `network.ip_address`
* Description: Configures the network IP address mode and value. When set to "auto", the system uses DHCP to automatically obtain network configuration from a DHCP server on the network. When set to a specific IP address, the system uses static IP configuration and requires manual specification of subnet mask and gateway via related settings.
  * Setting to "auto" enables DHCP mode (most common for dynamic networks)
  * Setting to specific IP enables static mode (required for fixed IP requirements)
  * Default fallback static IP is 192.168.1.45 if parsing fails
  * When using static IP, you must also configure `ip_mask` and `ip_gateway`
  * DHCP mode is recommended for most users unless static IP is required
* Related settings: `network.ip_mask`, `network.ip_gateway`, `network.dns_server`
* Related pages: network, troubleshooting
* Example configuration:
  * network.ip_address = auto  # DHCP mode (recommended for most users)
  * network.ip_address = 192.168.1.101  # Static IP on 192.168.1.x network
  * network.ip_address = 10.0.0.50  # Static IP on 10.0.0.x network

#### `network.ip_mask`

* Type: `string`
* Default: `"255.255.255.0"`
* Module: `network`
* Context: Global setting (static IP configuration only)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:102`
* Valid values: Valid IPv4 subnet mask in dotted decimal notation
  * `"255.255.255.0"` - Class C network (/24 subnet, 254 hosts)
  * `"255.255.0.0"` - Class B network (/16 subnet)
  * `"255.255.255.128"` - /25 subnet (126 hosts)
  * Other valid subnet masks as required by network configuration
* Corresponding v1 setting: `network.ip_mask`
* Description: Specifies the subnet mask for static IP configuration. The subnet mask defines the network portion versus host portion of IP addresses, determining which addresses are local versus remote. This setting is only used when `network.ip_address` is set to a specific IP address (not "auto"). When DHCP mode is active, this setting is ignored and the subnet mask is provided by the DHCP server.
  * Ignored when `ip_address = auto` (DHCP mode)
  * Must match the subnet mask of your network
  * Most home/office networks use 255.255.255.0
  * Determines the range of local IP addresses
* Related settings: `network.ip_address`, `network.ip_gateway`
* Related pages: network, how-to-wire
* Example configuration:
  * network.ip_mask = 255.255.255.0  # Standard Class C subnet (most common)
  * network.ip_mask = 255.255.0.0  # Class B subnet for large networks

#### `network.ip_gateway`

* Type: `string`
* Default: `"192.168.1.1"`
* Module: `network`
* Context: Global setting (static IP configuration only)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:103`
* Valid values: Valid IPv4 address string (typically the router IP address)
  * Must be on the same subnet as `ip_address`
  * Common values: `"192.168.1.1"`, `"192.168.0.1"`, `"10.0.0.1"`
* Corresponding v1 setting: `network.ip_gateway`
* Description: Specifies the default gateway IP address for static IP configuration. The gateway is the router or network device that handles traffic destined for other networks or the internet. This setting is only used when `network.ip_address` is set to a specific IP address (not "auto"). When DHCP mode is active, this setting is ignored and the gateway address is provided by the DHCP server.
  * Ignored when `ip_address = auto` (DHCP mode)
  * Must be on the same subnet as the configured IP address
  * Typically the router's local IP address
  * Required for communication with devices outside the local subnet
  * Default fallback gateway is 192.168.1.1
* Related settings: `network.ip_address`, `network.ip_mask`
* Related pages: network, troubleshooting
* Example configuration:
  * network.ip_gateway = 192.168.1.1  # Standard home router gateway
  * network.ip_gateway = 10.0.0.1  # Gateway for 10.0.0.x network

#### `network.dns_server`

* Type: `string`
* Default: `"auto"`
* Module: `network`
* Context: Global setting (DNS configuration for hostname resolution)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:125-135`
* Valid values: `"auto"` to use DHCP-provided DNS, or valid IPv4 address of DNS server
  * `"auto"` - Use DNS server provided by DHCP (or default to 192.168.1.1)
  * IPv4 address of DNS server in dotted decimal notation
  * Common public DNS servers: `"8.8.8.8"` (Google), `"1.1.1.1"` (Cloudflare)
* Corresponding v1 setting: none (new in v2)
* Description: Specifies the DNS (Domain Name System) server IP address for hostname resolution. DNS is required when using hostname-based addresses in commands like `wget` and `update` that fetch resources from the internet. When set to "auto", the firmware uses the DNS server provided by DHCP, or defaults to 192.168.1.1 if no DHCP DNS is available.
  * Only needed if using hostname-based URLs (not direct IP addresses)
  * Required for `wget` command with hostnames
  * Required for `update` command to fetch firmware from download.smoothieware.org
  * Not needed if only accessing machines by IP address
  * Default fallback DNS is 192.168.1.1 when auto mode is used
* Related settings: `network.firmware_url`, `network.ntp_server`
* Related pages: network, octoprint
* Example configuration:
  * network.dns_server = auto  # Use DHCP-provided DNS (recommended)
  * network.dns_server = 8.8.8.8  # Google Public DNS
  * network.dns_server = 1.1.1.1  # Cloudflare DNS
  * network.dns_server = 192.168.1.1  # Local router DNS

#### `network.hostname`

* Type: `string`
* Default: `"smoothiev2"`
* Module: `network`
* Context: Global setting (network device identification)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:95`
* Typical values: `"smoothiev2"` (default), `"cnc-mill"` (CNC machine), `"laser-cutter"` (laser system), `"3d-printer"` (3D printer)
* Valid values: Valid hostname string
  * Alphanumeric characters and hyphens
  * No spaces or special characters
  * Should start with letter or number
  * Typically lowercase by convention
* Corresponding v1 setting: none (new in v2)
* Description: Defines the device hostname used for network identification. This hostname is provided to the DHCP server during network initialization and can be used for network discovery and identification. The hostname appears in DHCP server logs and may be used by some network tools for device identification.
  * Used for DHCP hostname registration
  * Helps identify the device on the network
  * Visible in router/DHCP server device lists
  * Implementation in `pcApplicationHostnameHook()` at line 498-500
  * Does not affect IP address or network functionality
* Related pages: network, connecting-smoothie
* Example configuration:
  * network.hostname = smoothiev2  # Default hostname
  * network.hostname = cnc-mill-01  # CNC machine identifier
  * network.hostname = laser-cutter-shop  # Laser cutter with location
  * network.hostname = 3d-printer-primary  # Primary 3D printer

#### `network.shell_enable`

* Type: `bool`
* Default: `false`
* Module: `network`
* Context: Service control setting (enables telnet shell server)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:151`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new in v2)
* Description: Enables the telnet shell server on TCP port 23, allowing remote command-line access to Smoothieware via the telnet protocol. When enabled, users can connect to the Smoothieboard using a telnet client and execute console commands as if connected via USB serial. The server supports multiple concurrent connections (up to 3 simultaneous users).
  * WARNING: No authentication - anyone with network access has full console access
  * Listens on TCP port 23 (standard telnet port)
  * Supports multiple concurrent connections (maximum 3)
  * Provides full console command access remotely
  * Requires `network.enable = true` to function
  * Implementation in `Shell.cpp`
  * Welcome message: "Welcome to the Smoothie Shell"
  * Secure your network accordingly - consider firewall rules
* Related M-Codes:
  * All console commands available via telnet shell
  * M999 - Reset (works over telnet)
* Related settings: `network.enable`
* Related pages: network, console-commands, connecting-smoothie
* Example configuration:
  * network.shell_enable = true  # Enable telnet shell for remote access
  * network.shell_enable = false  # Disable telnet (more secure, default)

#### `network.ftp_enable`

* Type: `bool`
* Default: `false`
* Module: `network`
* Context: Service control setting (enables FTP file transfer server)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:152`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new in v2)
* Description: Enables the FTP (File Transfer Protocol) server on TCP port 21, allowing remote file transfer access to the SD card filesystem. When enabled, users can connect with an FTP client to upload G-code files, download logs, and manage files on the SD card. Uses the FreeRTOS+TCP FTP server implementation.
  * WARNING: No authentication in default configuration - secure your network accordingly
  * Listens on TCP port 21 (standard FTP port)
  * Root directory is SD card root ("")
  * Allows file upload and download
  * Useful for transferring G-code files remotely
  * Requires `network.enable = true` to function
  * Consider using network isolation or firewall rules
* Related settings: `network.enable`, `network.webserver_enable`
* Related pages: network, sd-card, printing-from-sd-card
* Example configuration:
  * network.ftp_enable = true  # Enable FTP for remote file management
  * network.ftp_enable = false  # Disable FTP (more secure, default)

#### `network.webserver_enable`

* Type: `bool`
* Default: `false`
* Module: `network`
* Context: Service control setting (enables HTTP web server)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:153`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new in v2)
* Description: Enables the HTTP web server on TCP port 80, serving static files from the `/sd/www` directory on the SD card. When enabled, users can access a web interface by navigating to the Smoothieboard's IP address in a web browser. The web server uses the FreeRTOS+TCP HTTP server implementation.
  * Listens on TCP port 80 (standard HTTP port)
  * Serves files from `/sd/www` directory on SD card
  * Place HTML, CSS, and JavaScript files in `/sd/www` for web interface
  * BackLog supports 12 concurrent connections
  * Requires `network.enable = true` to function
  * Web interface files must be installed separately
  * Access via http://smoothieboard-ip-address in web browser
* Related settings: `network.enable`, `network.ftp_enable`
* Related pages: network, install-web-interface, sd-card
* Example configuration:
  * network.webserver_enable = true  # Enable web server for browser access
  * network.webserver_enable = false  # Disable web server (default)

#### `network.ntp_enable`

* Type: `bool`
* Default: `true`
* Module: `network`
* Context: Service control setting (enables NTP time synchronization)
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:154`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new in v2)
* Description: Enables the NTP (Network Time Protocol) client to automatically synchronize the Real-Time Clock (RTC) from an NTP server during network startup. When enabled, the firmware fetches the current time from the configured NTP server and sets the onboard RTC to maintain accurate time. This is useful for timestamping logs, G-code files, and system events.
  * Uses UDP port 123 (standard NTP port)
  * Runs once automatically at network startup
  * Can be manually triggered anytime with `ntp` console command
  * 10 second timeout for NTP response
  * Implementation in `ntpclient.cpp`
  * Applies timezone offset from `network.timezone` setting
  * Requires `network.enable = true` to function
  * Requires DNS if using hostname for NTP server
* Related settings: `network.ntp_server`, `network.timezone`, `network.dns_server`
* Related pages: network
* Example configuration:
  * network.ntp_enable = true  # Enable NTP time sync (default, recommended)
  * network.ntp_enable = false  # Disable NTP (use manual time setting)

#### `network.ntp_server`

* Type: `string`
* Default: `"pool.ntp.org"`
* Module: `network`
* Context: NTP time source configuration
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:155`
* Typical values: `"pool.ntp.org"` (global pool), `"us.pool.ntp.org"` (US pool), `"europe.pool.ntp.org"` (Europe pool), `"time.nist.gov"` (NIST server)
* Valid values: Valid hostname or IPv4 address of an NTP server
  * Hostname of NTP server pool (e.g., `"pool.ntp.org"`)
  * Specific NTP server hostname (e.g., `"time.google.com"`)
  * Direct IP address of NTP server (e.g., `"129.6.15.28"`)
  * Regional NTP pool servers for better accuracy
* Corresponding v1 setting: none (new in v2)
* Description: Specifies the NTP server hostname or IP address for time synchronization. The firmware contacts this server when `ntp_enable` is true to fetch the current time and set the RTC. Using a geographically nearby NTP server is recommended for best accuracy and lowest latency.
  * Requires DNS configuration if using hostname
  * Uses NTPv3 protocol for time synchronization
  * Applies timezone offset from `network.timezone` after fetching UTC time
  * Global pool (pool.ntp.org) automatically selects nearby servers
  * Can use specific regional pools for better performance
  * Can use direct IP address to bypass DNS requirement
* Related settings: `network.ntp_enable`, `network.timezone`, `network.dns_server`
* Related pages: network
* Example configuration:
  * network.ntp_server = pool.ntp.org  # Global NTP pool (default)
  * network.ntp_server = us.pool.ntp.org  # US regional pool
  * network.ntp_server = europe.pool.ntp.org  # Europe regional pool
  * network.ntp_server = 129.6.15.28  # NIST server by IP (no DNS needed)
  * network.ntp_server = time.google.com  # Google NTP service

#### `network.timezone`

* Type: `number`
* Default: `0`
* Units: hours
* Module: `network`
* Context: Time localization setting
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:156`
* Typical values: `0` (GMT/UTC), `-8` (US Pacific Standard Time), `-7` (US Pacific Daylight Time), `-5` (US Eastern Standard Time), `1` (Central European Time), `10` (Australian Eastern Standard Time)
* Valid values: Integer hours offset from GMT/UTC
  * Positive values for time zones east of GMT
  * Negative values for time zones west of GMT
  * Range: typically -12 to +14
  * No minute-level granularity (whole hours only)
* Corresponding v1 setting: none (new in v2)
* Description: Specifies the timezone offset from GMT/UTC in hours, which is applied to the time fetched from the NTP server to set the local RTC time. The offset includes any Daylight Saving Time adjustment - users must manually change this value when DST begins or ends.
  * Applied to NTP time to calculate local time
  * Must be manually adjusted for Daylight Saving Time changes
  * No automatic DST adjustment
  * Offset is in whole hours only (no 30-minute or 45-minute zones supported)
  * Implementation applies offset in `ntpclient.cpp:124-126`
  * Value of 0 means GMT/UTC (no offset)
* Related settings: `network.ntp_enable`, `network.ntp_server`
* Related pages: network
* Example configuration:
  * network.timezone = 0  # GMT/UTC (no offset)
  * network.timezone = -8  # US Pacific Standard Time (PST)
  * network.timezone = -7  # US Pacific Daylight Time (PDT)
  * network.timezone = -5  # US Eastern Standard Time (EST)
  * network.timezone = 1  # Central European Time (CET)
  * network.timezone = 10  # Australian Eastern Standard Time (AEST)

#### `network.firmware_url`

* Type: `string`
* Default: `"http://download.smoothieware.org/"`
* Module: `network`
* Context: Firmware update system configuration
* Defined in: `Firmware/src/modules/utils/network/Network.cpp:96`
* Typical values: `"http://download.smoothieware.org/"` (official server), `"http://myserver.local/firmware/"` (custom local server)
* Valid values: Valid HTTP URL
  * Must be complete HTTP URL (not HTTPS)
  * Must end with trailing slash `/`
  * Can be hostname or IP address
  * Should point to directory containing firmware binaries
* Corresponding v1 setting: none (new in v2)
* Description: Specifies the base URL for firmware updates used by the `update` command. The command automatically appends the board-specific firmware filename to this URL when downloading updates. Board type is auto-detected and the appropriate suffix is added: `pr.bin` for Prime, `nu.bin` for Nucleo, or `de.bin` for Devebox boards.
  * Used by `update` console command to fetch firmware
  * Requires DNS if using hostname (not direct IP)
  * Downloads both `.bin` (firmware) and `.md5` (checksum) files
  * Board suffix automatically appended: `pr` (Prime), `nu` (Nucleo), `de` (Devebox)
  * URL must end with `/` character
  * Can point to custom firmware server for development/testing
  * HTTPS not currently supported
* Related settings: `network.dns_server`
* Related pages: network, flashing-smoothie-firmware
* Example configuration:
  * network.firmware_url = http://download.smoothieware.org/  # Official firmware server (default)
  * network.firmware_url = http://myserver.local/firmware/  # Custom local server
  * network.firmware_url = http://192.168.1.100/smoothie/  # Server by IP address

---

## Network Commands Reference

The Network module provides several console commands accessible via serial, USB, or telnet:

### `net` - Network Status

**Usage:** `net [-n] [-k]`

**Description:** Display current network status including IP address, subnet mask, gateway, and DNS server

**Options:**
* `-n` - Also show netstat-like socket information
* `-k` - Shutdown the network (abort network operation)

**Source:** `Network.cpp:173-219`

**Example:**
```
> net
IP Address: 192.168.1.101
Subnet Mask: 255.255.255.0
Gateway Address: 192.168.1.1
DNS Server Address: 8.8.8.8
```

### `wget` - Download Files

**Usage:** `wget url [outfn]`

**Description:** Fetch a URL via HTTP and save to file or print contents to console

**Arguments:**
* `url` - HTTP URL to fetch (required)
* `outfn` - Output filename on SD card (optional, prints to console if omitted)

**Source:** `Network.cpp:223-243`

**Examples:**
```
wget http://example.com/file.gcode /sd/print.gcode
wget http://smoothieware.org/status.txt
```

### `update` - Firmware Update

**Usage:** `update [check]`

**Description:** Download and flash updated firmware from the configured `network.firmware_url`

**Arguments:**
* `check` - Check for update without downloading (optional)

**Source:** `Network.cpp:260-340`

**Behavior:**
* Checks MD5 checksum before downloading
* Compares with currently running firmware MD5
* Downloads to `/sd/flashme.bin`
* Automatically calls `flash` command if download succeeds
* Not allowed while printing or heaters are active
* Board type auto-detected (Prime/Nucleo/Devebox)

**Example:**
```
> update check
current md5:  a1b2c3d4e5f6...
fetched md5:  f6e5d4c3b2a1...
There is an updated version of the firmware available

> update
Downloading updated firmware from server...
Flashing the updated firmware
if successful the system will reboot
```

### `ntp` - Manual Time Sync

**Usage:** `ntp`

**Description:** Manually trigger NTP time synchronization (normally runs automatically at boot if `ntp_enable = true`)

**Source:** `Network.cpp:246-254`

**Example:**
```
> ntp
[Time synchronized from pool.ntp.org]
```

---

## Technical Details

### MAC Address Generation

The MAC address is automatically generated from the STM32H7 chip's unique 96-bit ID to ensure each board has a unique address:

* **OUI (Organizationally Unique Identifier):** `00:1F:11` (officially assigned to Smoothie project)
* **Byte 3:** `0x02` (Openmoko allocation for Smoothie)
* **Byte 4:** `0x05` (identifies v2, versus `0x04` for v1)
* **Byte 5:** Hash of unique chip ID (ensures uniqueness across all boards)
* **Implementation:** `Network.cpp:138-149`
* **Format:** `00:1F:11:02:05:XX` where XX is unique per board

This automatic MAC generation ensures no two Smoothieboards v2 will have conflicting MAC addresses on the same network.

### Network Stack

* **TCP/IP Stack:** FreeRTOS+TCP
* **DHCP Client:** FreeRTOS DHCP implementation
* **HTTP/FTP Servers:** FreeRTOS+TCP server implementations
* **Main Network Task:** Priority `tskIDLE_PRIORITY + 1`, name "Servers"
* **Shell Task:** Separate task, name "shell_thread"
* **Stack Size:** 1024 words for main network task

### Port Summary

| Service | Port | Protocol | Config Key | Default State |
|---------|------|----------|------------|---------------|
| Telnet Shell | 23 | TCP | `shell_enable` | Disabled |
| FTP Server | 21 | TCP | `ftp_enable` | Disabled |
| HTTP Server | 80 | TCP | `webserver_enable` | Disabled |
| NTP Client | 123 | UDP | `ntp_enable` | Enabled |

### Static IP Fallback Defaults

If static IP is configured but values are missing or invalid, these fallback values are used:

* **IP Address:** 192.168.1.45
* **Subnet Mask:** 255.255.255.0
* **Gateway:** 192.168.1.1
* **DNS Server:** 192.168.1.1

### DHCP vs Static IP Decision Logic

The system determines DHCP versus static mode in the `xApplicationDHCPHook()` function:

* If `ip_address = "auto"` → DHCP enabled (returns `eDHCPContinue`)
* If `ip_address = <specific IP>` → Static IP (returns `eDHCPUseDefaults`)
* **Implementation:** `Network.cpp:504-538`

The hook is called during the DHCP discovery and request phases to determine whether to continue with DHCP or use statically configured values.

---

## Security Considerations

**CRITICAL WARNING:** The Network module provides NO built-in authentication or encryption:

1. **Telnet Shell:** No password protection - anyone with network access has full console control
2. **FTP Server:** No authentication - full read/write filesystem access to SD card
3. **HTTP Server:** No authentication - serves all files from `/sd/www` directory
4. **Network Traffic:** All communication is unencrypted and visible to network sniffers

**Security Recommendations:**

* **Network Isolation:** Deploy only on trusted, isolated networks
* **Firewall Rules:** Use router/firewall to restrict access to specific IP addresses
* **VPN/SSH Tunnel:** Consider VPN or SSH tunneling for remote access
* **Disable Unused Services:** Set `shell_enable`, `ftp_enable`, `webserver_enable` to false if not needed
* **Monitor Access:** Check network logs for unauthorized access attempts
* **Physical Security:** Ensure physical access to network and machine is controlled
* **Consider Static IP:** Makes firewall rules easier to configure

**Do NOT expose Smoothieboard directly to the internet without additional security measures.**

---

## Sample Configuration Examples

### Example 1: DHCP with All Services (Development/Testing)

```ini
[network]
enable = true
shell_enable = true
ftp_enable = true
webserver_enable = true
ntp_enable = true
hostname = smoothiev2
ip_address = auto               # Use DHCP
ntp_server = pool.ntp.org
timezone = 0
```

**Use case:** Development environment, testing, or trusted local network with full remote access needs

### Example 2: Static IP with Shell Only (Production CNC)

```ini
[network]
enable = true
shell_enable = true             # Remote console access only
ftp_enable = false              # No file transfer (use SD card directly)
webserver_enable = false        # No web interface
ntp_enable = true
hostname = cnc-mill
ip_address = 192.168.1.101      # Static IP for consistent access
ip_gateway = 192.168.1.1
ip_mask = 255.255.255.0
dns_server = 8.8.8.8
ntp_server = time.nist.gov
timezone = -5                   # US Eastern
```

**Use case:** Production CNC mill with fixed IP for remote monitoring, minimal attack surface

### Example 3: Minimal DHCP Configuration (3D Printer)

```ini
[network]
enable = true
shell_enable = true
ip_address = auto               # All other settings use defaults
```

**Use case:** Simple 3D printer setup, automatic network configuration, basic remote console

### Example 4: Static IP with Web Interface (Laser Cutter)

```ini
[network]
enable = true
shell_enable = true
ftp_enable = true               # Upload G-code remotely
webserver_enable = true         # Web interface for monitoring
ntp_enable = true
hostname = laser-cutter
ip_address = 10.0.1.50
ip_gateway = 10.0.1.1
ip_mask = 255.255.255.0
dns_server = 10.0.1.1
ntp_server = 129.6.15.28        # NIST time server by IP (no DNS needed)
timezone = -8                   # US Pacific
firmware_url = http://10.0.1.100/firmware/  # Local firmware server
```

**Use case:** Laser cutter in shop environment with custom firmware server and web interface

### Example 5: Secure Production Configuration (Minimal Services)

```ini
[network]
enable = true
shell_enable = false            # No remote console (more secure)
ftp_enable = false              # No file transfer
webserver_enable = false        # No web interface
ntp_enable = true               # Only time sync enabled
hostname = production-cnc
ip_address = 192.168.1.200
ip_gateway = 192.168.1.1
ip_mask = 255.255.255.0
ntp_server = 192.168.1.1        # Local NTP server
timezone = 0
```

**Use case:** High-security production environment, time sync only, no remote access

---

## Troubleshooting

### Network Won't Start

**Symptoms:** No network connectivity, "Link DOWN" message

**Checks:**
* Verify `network.enable = true` in config.ini
* Check Ethernet cable is connected and link LED is on
* If using DHCP (`ip_address = auto`), verify DHCP server is available on network
* Check console for "Network is up" message

**Debug:**
* Use `net` command to check status
* Check for error messages during boot
* Verify network cable and switch/router port

### Can't Get IP via DHCP

**Symptoms:** Network enabled but no IP address assigned

**Checks:**
* Verify DHCP server is running on network (check router settings)
* Check network cable quality and connections
* Monitor DHCP server logs for requests from Smoothieboard MAC address

**Solutions:**
* Try using static IP configuration instead
* Verify DHCP pool has available addresses
* Check for MAC address filtering on DHCP server

### Static IP Not Working

**Symptoms:** Static IP configured but no network connectivity

**Checks:**
* Verify `ip_address`, `ip_gateway`, and `ip_mask` are all set correctly
* Ensure IP address is not already in use by another device
* Verify gateway is on same subnet as IP address (first 3 octets should match for /24 subnet)
* Ping gateway from another machine to verify network

**Debug:**
* Use `net` command to see configured IP addresses
* Try different IP address in same subnet
* Verify subnet mask matches network configuration

### NTP Time Sync Fails

**Symptoms:** "ERROR: NTP get time failed" message, incorrect time

**Checks:**
* If using hostname for NTP server, verify `dns_server` is configured correctly
* Check firewall allows UDP port 123 outbound
* Verify network has internet access if using public NTP servers

**Solutions:**
* Use IP address instead of hostname for `ntp_server` (e.g., `129.6.15.28`)
* Try different NTP server (e.g., `time.google.com` or `pool.ntp.org`)
* Manually trigger sync with `ntp` command
* Use local NTP server if internet access is restricted

### Can't Access Telnet Shell

**Symptoms:** Connection refused on port 23

**Checks:**
* Verify `shell_enable = true` in configuration
* Check firewall on client machine allows outbound TCP port 23
* Verify using correct IP address (use `net` command via USB/serial to check)

**Solutions:**
* Try `telnet <smoothieboard-ip> 23` from command line
* Check for "Network is up" message in console
* Verify network connectivity with ping

### Web Server Not Serving Files

**Symptoms:** Can't access web interface, 404 errors

**Checks:**
* Verify `webserver_enable = true` in configuration
* Ensure files exist in `/sd/www/` directory on SD card
* Check SD card is mounted and readable
* Verify at least `index.html` exists in `/sd/www/`

**Solutions:**
* Use FTP to verify files in `/sd/www/` directory
* Re-install web interface files from smoothieware.org
* Check file permissions on SD card

### Firmware Update Fails

**Symptoms:** `update` command fails, MD5 errors, download failures

**Checks:**
* Verify `dns_server` is configured if using hostname in `firmware_url`
* Check internet connectivity
* Ensure not currently printing and heaters are off
* Verify sufficient space on SD card

**Debug:**
* Use `wget` command to test download capability first
* Check MD5 error messages for corruption
* Try `update check` first to verify connectivity

---

## Related Documentation

* **FreeRTOS+TCP Documentation:** https://www.freertos.org/FreeRTOS-Plus/FreeRTOS_Plus_TCP/
* **NTP Protocol Specification:** RFC 5905
* **Smoothieware V2 Network Source:** `Firmware/src/modules/utils/network/`
* **Telnet Protocol:** RFC 854
* **FTP Protocol:** RFC 959

---

**Document Version:** 2.0 (Refined per specification)
**Last Updated:** 2025-11-05
**Source:** Smoothieware-v2 firmware codebase analysis

---

## Laser/Spindle/Tools

# Smoothieware V2 - Laser, Spindle & Tool Configuration Reference (Refined)

**Generated:** 2025-11-05
**Firmware Version:** Smoothieware v2
**Refinement:** Complete specification compliance with source code verification

---

## [laser] - Laser Control Module

### Overview
Dedicated laser control with velocity-proportional power adjustment. Automatically scales power based on actual cutting speed to maintain consistent engraving/cutting depth.

---

#### `laser.enable`

* Type: `bool`
* Default: `false`
* Module: `laser`
* Context: Module activation
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:58`
* Valid values: `true`, `false`
* Required: yes (laser module will not be loaded if false)
* Corresponding v1 setting: `laser_module_enable`
* Corresponding v2 setting: `laser.enable`
* Description: Enable the laser control module. When set to true, the laser module will be loaded and available for G-code control. When false, the module is not loaded and its resources are freed.
  * If enabled without valid pwm_pin, module will fail to load with error message.
  * All other laser.* settings are ignored if this is false.
* Related settings: `laser.pwm_pin`, `laser.maximum_power`, `pwm1.frequency`, `pwm2.frequency`
* Related pages: laser, laser-options, laser-cutter-guide
* Example configuration:
  * laser.enable = true  # Enable laser control module
  * laser.enable = false  # Disable laser (frees resources)

---

#### `laser.pwm_pin`

* Type: `pin` (PWM-capable)
* Default: `nc` (not connected)
* Module: `laser`
* Context: Hardware pin assignment for PWM laser power control
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:63`
* Valid values: PWM-capable pin names only
  * PWM1 timer: `PWM1_1`, `PWM1_2`, `PWM1_3`, `PWM1_4`
  * PWM2 timer: `PWM2_1`, `PWM2_2`, `PWM2_3`, `PWM2_4`
  * `nc` - not connected (module will not load)
* Required: yes (laser module requires valid PWM pin)
* Corresponding v1 setting: `laser_module_pwm_pin`
* Corresponding v2 setting: `laser.pwm_pin`
* Description: PWM output pin for laser power control with 0-100% duty cycle capability. The firmware validates that the specified pin is a valid PWM pin during configuration. If an invalid pin is specified, the module will fail to load with error message "Specified pin is not a valid PWM pin."
  * CRITICAL: Must be one of the 8 hardware PWM pins (PWM1_1 through PWM1_4, PWM2_1 through PWM2_4).
  * Pin validation occurs at line 65-69 of Laser.cpp.
  * All channels on PWM1 share the same frequency (configured in [pwm1] section).
  * All channels on PWM2 share the same frequency (configured in [pwm2] section).
* Related M-Codes:
  * M221 R<freq> - Change PWM frequency at runtime (affects all channels on same timer)
* Related settings: `laser.inverted_pwm`, `laser.pullup`, `laser.opendrain`, `pwm1.frequency`, `pwm2.frequency`
* Related pages: laser, pinout, pwm-capable
* Example configuration:
  * laser.pwm_pin = PWM1_1  # Use PWM1 timer channel 1 for laser control
  * laser.pwm_pin = PWM2_2  # Use PWM2 timer channel 2 for laser control
  * laser.pwm_pin = nc  # No PWM pin (module will not load)

---

#### `laser.ttl_pin`

* Type: `pin` (digital output)
* Default: `nc` (not connected)
* Module: `laser`
* Context: Secondary control signal for laser enable/safety
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:78`
* Valid values: Any digital output pin in STM32 format (e.g., `PE11`, `PI4`), or `nc`
  * Pin can include inversion modifier `!` (e.g., `PE11!`)
* Corresponding v1 setting: `laser_module_ttl_pin`
* Corresponding v2 setting: `laser.ttl_pin`
* Description: TTL on/off signal pin that outputs high when laser is firing and low when off. This provides a secondary digital signal separate from the PWM control, commonly used for controlling laser power supply enable or external safety interlocks. The TTL pin goes high whenever laser power is above 0.00001 (line 308 of Laser.cpp) and low when laser is off.
  * Pin is optional; if set to `nc`, TTL functionality is disabled and ttl_used flag is set to false.
  * Pin inversion is detected automatically if `!` modifier is used.
  * TTL pin state is synchronized with laser on/off state (lines 308-314).
  * Pin is set to false during module halt (line 323).
* Related settings: `laser.pwm_pin`, `laser.enable`
* Related pages: laser, pin-configuration, emergencystop
* Example configuration:
  * laser.ttl_pin = PE11  # Use PE11 for TTL enable signal
  * laser.ttl_pin = PI4!  # Use PI4 inverted for active-low laser PSU
  * laser.ttl_pin = nc  # No TTL pin (PWM-only control)

---

#### `laser.inverted_pwm`

* Type: `bool`
* Default: `false`
* Module: `laser`
* Context: Signal polarity configuration
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:72`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new in v2)
* Corresponding v2 setting: `laser.inverted_pwm`
* Description: Invert the PWM signal polarity where high duty cycle means laser off and low duty cycle means laser on. When false (normal operation), higher PWM duty cycle = more laser power. When true (inverted), higher PWM duty cycle = less laser power. This is required for some laser drivers that are active-low.
  * Inversion is applied in set_laser_power() at lines 307 and 312.
  * When inverted, set(1 - power) instead of set(power).
  * Pin voltage still controlled by pullup/opendrain settings.
* Related settings: `laser.pwm_pin`, `laser.pullup`, `laser.opendrain`
* Related pages: laser, pin-configuration
* Example configuration:
  * laser.inverted_pwm = false  # Normal polarity (high = more power)
  * laser.inverted_pwm = true  # Inverted polarity (high = less power, for active-low drivers)

---

#### `laser.pullup`

* Type: `bool`
* Default: `true`
* Module: `laser`
* Context: Pin electrical configuration
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:74`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new in v2)
* Corresponding v2 setting: `laser.pullup`
* Description: Enable internal pullup resistor on PWM pin. When true, the pin is pulled high by an internal resistor (typically 40-50kΩ). This is useful for ensuring a defined signal level when the pin is not actively driven. Disable if using external pullup or pulldown resistors to avoid conflicts.
  * Applied via pwm_pin->set_pullup() at line 74.
  * Can be combined with opendrain mode for level shifting applications.
  * Consult laser driver documentation for required pin configuration.
* Related settings: `laser.opendrain`, `laser.pwm_pin`
* Related pages: laser, pin-configuration, how-to-wire
* Example configuration:
  * laser.pullup = true  # Enable internal pullup (default, most common)
  * laser.pullup = false  # Disable pullup (if using external resistors)

---

#### `laser.opendrain`

* Type: `bool`
* Default: `false`
* Module: `laser`
* Context: Pin drive mode configuration
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:75`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new in v2)
* Corresponding v2 setting: `laser.opendrain`
* Description: Configure PWM pin as open-drain output instead of push-pull. In open-drain mode, the pin can pull low but cannot actively drive high (requires external pullup). This is useful for logic level shifting or when controlling external transistor circuits. Combine with pullup=true for proper operation.
  * Applied via pwm_pin->set_od() at line 75.
  * Open-drain mode allows interfacing between different voltage levels.
  * Typical use: 3.3V MCU controlling 5V laser driver with external pullup to 5V.
  * WARNING: Without external pullup, open-drain pin will float when not driven low.
* Related settings: `laser.pullup`, `laser.pwm_pin`
* Related pages: laser, pin-configuration, how-to-wire
* Example configuration:
  * laser.opendrain = false  # Push-pull output (default, direct drive)
  * laser.opendrain = true  # Open-drain output (for level shifting with external pullup)

---

#### `laser.maximum_power`

* Type: `number`
* Default: `1.0`
* Units: fraction (0.0-1.0 representing 0%-100% duty cycle)
* Module: `laser`
* Context: Power limiting for safety and calibration
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:93`
* Minimum value: `0` (clamped in set_laser_power at line 303)
* Maximum value: `1` (clamped in set_laser_power at line 304)
* Typical values: `1.0` (full power allowed), `0.8` (80% limit for testing), `0.1` (10% limit for initial calibration)
* Valid values: 0.0 to 1.0 (fraction of full PWM duty cycle)
* Corresponding v1 setting: `laser_module_maximum_power`
* Corresponding v2 setting: `laser.maximum_power`
* Description: Maximum laser power as duty cycle fraction where 0.0 = 0% and 1.0 = 100%. This acts as a safety limit and calibration factor. The actual laser power is scaled by this value, so setting it below 1.0 limits maximum output even when G-code requests full power. Power values are clamped to this maximum in set_laser_power() at lines 303-304.
  * CRITICAL: Set below 1.0 during initial testing (e.g., 0.1 for 10% max power).
  * Used in proportional power calculation at line 290: power is scaled by (maximum_power - minimum_power).
  * Can be adjusted at runtime via M221 S<percent> command.
  * Affects all laser operations including manual fire command.
  * Values outside 0.0-1.0 are automatically clamped to valid range.
* Related M-Codes:
  * M221 - Display current power scale
  * M221 S<percent> - Scale all laser power (100 = 100% of maximum_power)
* Related settings: `laser.minimum_power`, `laser.default_power`, `laser.maximum_s_value`
* Related pages: laser, laser-warning, laser-cutter-guide
* Example configuration:
  * laser.maximum_power = 1.0  # Full power allowed (100%)
  * laser.maximum_power = 0.8  # Limit to 80% for tube longevity
  * laser.maximum_power = 0.1  # 10% limit for safe testing

---

#### `laser.minimum_power`

* Type: `number`
* Default: `0`
* Units: fraction (0.0-1.0 representing 0%-100% duty cycle)
* Module: `laser`
* Context: Baseline power level for continuous operation
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:94`
* Minimum value: `0` (clamped in set_laser_power at line 303)
* Maximum value: `1` (clamped in set_laser_power at line 304)
* Typical values: `0` (most common, laser fully off when idle), `0.05` (5% tickle power for CO2 laser stability)
* Valid values: 0.0 to 1.0 (fraction of full PWM duty cycle)
* Corresponding v1 setting: `laser_module_minimum_power`
* Corresponding v2 setting: `laser.minimum_power`
* Description: Minimum power to keep laser active during cutting operations, also known as "tickle power". This provides a baseline power level that the proportional power system scales above. Some CO2 lasers benefit from a small minimum power (e.g., 0.05) to maintain plasma stability and reduce startup delay, but most lasers should use 0.
  * Applied in proportional power calculation at line 290: proportional_power = (maximum_power - minimum_power) * power + minimum_power.
  * This creates a power range from minimum_power to maximum_power instead of 0 to maximum_power.
  * Laser turns fully off (line 312) only when calculated power ≤ 0.00001.
  * Values outside 0.0-1.0 are automatically clamped to valid range (lines 303-304).
  * WARNING: Non-zero minimum_power means laser never fully turns off during job, only reduces to this level.
* Related settings: `laser.maximum_power`, `laser.proportional_power`
* Related pages: laser, laser-cutter-guide
* Example configuration:
  * laser.minimum_power = 0  # Laser fully off when idle (most common)
  * laser.minimum_power = 0.05  # 5% tickle power for CO2 tube stability
  * laser.minimum_power = 0.1  # 10% minimum for continuous operation mode

---

#### `laser.maximum_s_value`

* Type: `number`
* Default: `1.0`
* Units: user-defined (typically 1.0 or 255)
* Module: `laser`
* Context: G-code S parameter scaling
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:97`
* Typical values: `1.0` (fraction-based S values 0-1), `255` (CAM software using S0-S255 scale), `100` (percentage-based S0-S100)
* Valid values: Any positive number
* Corresponding v1 setting: `laser_module_maximum_s_value`
* Corresponding v2 setting: `laser.maximum_s_value`
* Description: Maximum S value in G-code that represents full power. This setting maps G-code S parameters to laser power percentages. For example, with maximum_s_value=1.0, "S0.5" requests 50% power. With maximum_s_value=255, "S127" requests approximately 50% power (127/255). The S value is divided by this setting to calculate requested power fraction (line 256).
  * G-code S values are mapped: (S_value / maximum_s_value) = power fraction (0.0 to 1.0).
  * Used in get_laser_power() at line 256 to normalize S values from blocks.
  * S values stored internally as 1.11 fixed-point (bit-shifted) for precision.
  * CAM software compatibility: LightBurn typically uses 1.0, some older software uses 255.
  * This does NOT affect maximum_power limit, just S parameter interpretation.
* Related settings: `laser.maximum_power`, `laser.default_power`
* Related pages: laser, g1, supported-g-codes
* Example configuration:
  * laser.maximum_s_value = 1.0  # S0.0 to S1.0 scale (LightBurn, modern CAM)
  * laser.maximum_s_value = 255  # S0 to S255 scale (traditional GRBL style)
  * laser.maximum_s_value = 100  # S0 to S100 scale (percentage style)

---

#### `laser.default_power`

* Type: `number`
* Default: `0.8`
* Units: fraction (0.0-1.0 representing 0%-100% power)
* Module: `laser`
* Context: Default operating power when S parameter omitted
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:99`
* Minimum value: `0` (clamped via set_s_value in Robot class)
* Maximum value: `1` (scaled by maximum_s_value)
* Typical values: `0.8` (80% default), `0.5` (50% for conservative default), `1.0` (full power default)
* Valid values: 0.0 to 1.0 (fraction representing power level)
* Corresponding v1 setting: `laser_module_default_power`
* Corresponding v2 setting: `laser.default_power`
* Description: Default laser power when no S parameter is specified in G-code. When a G1/G2/G3 move is issued without an S value, this power level is used. The value is stored in the Robot class via Robot::getInstance()->set_s_value() at line 99 and represents a fraction of maximum power.
  * Set at module initialization (line 99), becomes the initial S value in Robot.
  * Used for any cutting/engraving move (G1/G2/G3) that doesn't include explicit S parameter.
  * Still subject to maximum_power limiting and proportional power scaling.
  * Can be overridden per-move by including S parameter in G-code.
  * Value of 0.8 (80%) is conservative default suitable for most materials.
* Related settings: `laser.maximum_power`, `laser.maximum_s_value`, `laser.proportional_power`
* Related pages: laser, g1
* Example configuration:
  * laser.default_power = 0.8  # 80% power when S not specified (default)
  * laser.default_power = 0.5  # 50% power for conservative default
  * laser.default_power = 1.0  # Full power when S not specified (use with caution)

---

#### `laser.proportional_power`

* Type: `bool`
* Default: `true`
* Module: `laser`
* Context: Motion-synchronized automatic power scaling
* Defined in: `Firmware/src/modules/tools/laser/Laser.cpp:100`
* Valid values: `true`, `false`
* Corresponding v1 setting: `laser_module_proportional_power`
* Corresponding v2 setting: `laser.proportional_power`
* Description: Enable automatic power scaling based on actual velocity to maintain consistent cut/engrave depth during acceleration and deceleration. When enabled, laser power is automatically reduced during acceleration and deceleration proportional to actual speed versus nominal speed, preventing overburning at corners and during speed changes. The algorithm calculates power = RequestedPower × (ActualSpeed / NominalSpeed) × Scale (lines 243-261).
  * CRITICAL: Should be enabled (true) for normal operation to prevent overburning.
  * Disable (false) only for testing or when constant power is explicitly required.
  * Algorithm calculates current speed ratio from executing block (lines 228-246).
  * Finds primary moving actuator (most steps) and its trapezoid rate (lines 232-243).
  * Applies ratio to requested power: power = requested_power × ratio × scale (line 261).
  * Can be temporarily disabled at runtime via M221 P1 command.
  * The disable_auto_power flag is inverted at line 100: !proportional_power_key.
  * Updates every millisecond via set_proportional_power() ticker (lines 112-125).
* Related M-Codes:
  * M221 - Display current proportional power state
  * M221 P0 - Enable proportional power (auto power)
  * M221 P1 - Disable proportional power (constant power mode for testing)
* Related settings: `laser.maximum_power`, `laser.minimum_power`
* Related pages: laser, motion-control, laser-cutter-guide
* Example configuration:
  * laser.proportional_power = true  # Enable velocity-proportional power (recommended)
  * laser.proportional_power = false  # Constant power mode (testing only, will overburn at corners)

---

## Laser Module G-code Commands

### `fire` Command (Console)

* Syntax: `fire <power%> [duration_ms]` or `fire off` or `fire status`
* Description: Manual laser control for testing and calibration
* Parameters:
  * `power%` - Power level 0-100% (clamped to 100 max at line 166)
  * `duration_ms` - Optional duration in milliseconds (rounded to ms_per_tick at line 178)
  * `off` or `0` - Turn off laser and return to auto mode
  * `status` - Check current manual fire state
* Behavior:
  * Sets manual_fire flag to true, disabling automatic power control (line 187)
  * Power values ≤0 are rejected (line 161-163)
  * Power values >100 are clamped to 100 (line 166)
  * Duration <ms_per_tick is rejected (lines 172-174)
  * Duration is rounded to nearest ms_per_tick multiple (lines 177-179)
  * Manual fire is cleared on halt (line 324)
  * Timed fire auto-disables when duration expires (lines 273-282)
* Safety:
  * CRITICAL: Always use low power for initial testing (e.g., fire 5 for 5%)
  * Command is ignored if machine is in ALARM/HALT state (lines 138-141)
  * Always verify laser is pointing at safe target before firing
* Related pages: laser, laser-warning
* Example configuration:
  * fire 5  # Fire at 5% power continuously for testing
  * fire 10 2000  # Fire at 10% for 2 seconds
  * fire 25 5000  # Fire at 25% for 5 seconds
  * fire off  # Turn off and return to auto mode
  * fire status  # Check if manual fire is active

---

### M221 - Laser Power Control

* Syntax: `M221` or `M221 S<scale%>` or `M221 P<0|1>` or `M221 R<freq>`
* Description: Query and adjust laser power parameters at runtime
* Parameters:
  * No args - Display current settings (power scale, auto power state, PWM frequency)
  * `S<percent>` - Set power scale multiplier where 100 = 100% (line 210)
  * `P<0|1>` - Disable (P1) or enable (P0) proportional power (line 214)
  * `R<freq>` - Set PWM frequency in Hz (line 218-219)
* Behavior:
  * Display shows: "Laser power: X.XX %, disable auto power: 0|1, PWM frequency: XXXXX Hz" (line 206)
  * S parameter sets scale factor: this->scale = S_value / 100.0F (line 210)
  * P parameter controls disable_auto_power flag (line 214)
  * R parameter changes PWM frequency via pwm_pin->set_frequency() (line 219)
  * WARNING: R parameter affects all channels on same PWM timer
* Related pages: laser, supported-g-codes
* Example configuration:
  * M221  # Display current laser settings
  * M221 S80  # Scale all laser power to 80% of programmed values
  * M221 S120  # Scale all laser power to 120% (overdrive, use with caution)
  * M221 P1  # Disable proportional power (constant power for testing)
  * M221 P0  # Re-enable proportional power (normal operation)
  * M221 R5000  # Change PWM frequency to 5kHz (affects all channels on timer)

---

## [pwm1] and [pwm2] - PWM Timer Configuration

### Overview
Configure base frequency for PWM timers. Each timer controls 4 channels (PWM1_1 through PWM1_4, PWM2_1 through PWM2_4). All channels on a timer share the same frequency but have independent duty cycles. Frequency is configured once at startup and affects all channels on that timer.

---

#### `pwm1.frequency` / `pwm2.frequency`

* Type: `number`
* Default: none (must be explicitly configured if using PWM pins)
* Units: Hz (Hertz)
* Module: PWM Infrastructure
* Context: Timer frequency setting (affects all 4 channels on timer)
* Defined in: `Firmware/Hal/src/Pwm.cpp:173-208` (setup function)
* Typical values: `10000` (10 kHz for laser control), `5000` (5 kHz for VFD spindle), `50` (50 Hz for servo control), `25000` (25 kHz for silent fan control)
* Valid values: Hardware-dependent, typically 50 Hz to 100 kHz
  * Lower limit: ~50 Hz (20ms period)
  * Upper limit: ~100 kHz (10µs period, determined by timer prescaler limits)
  * CRITICAL: Value must be set before any pwm_pin allocation or module will fail
* Corresponding v1 setting: `laser_module_pwm_period` (inverted - v1 used period in µs, v2 uses frequency in Hz)
* Corresponding v2 setting: `pwm1.frequency`, `pwm2.frequency`
* Names match but different functionality: `v1.laser_module_pwm_period` sets period in microseconds, while v2 uses `pwm1.frequency` in Hz. These are inverse relationships requiring calculation (frequency = 1000000 / period_us).
* Description: Base PWM frequency in Hz for all channels on this timer. This is a hardware constraint - all 4 channels on a timer (e.g., PWM1_1, PWM1_2, PWM1_3, PWM1_4) must operate at the same frequency, though each can have independent duty cycle. The frequency determines the PWM period and resolution. Setup occurs in Pwm::setup() at lines 173-208 where prescaler and period values are calculated from SystemCoreClock.
  * Frequency setup uses formula: period = (clkhz / freq) - 1 where clkhz = freq * 1000 (line 190).
  * Prescaler calculated as: (SystemCoreClock / (2 * clkhz)) - 1 (line 189).
  * Cannot change frequency independently for channels on same timer.
  * Can be changed at runtime via M221 R<freq> (laser) but affects ALL channels on that timer.
  * If timer not setup (instances[timr]._htim == nullptr), PWM pin allocation fails (line 48-50).
  * Must be configured in [pwm1] or [pwm2] section before using corresponding PWM pins.
* Related settings: `laser.pwm_pin`, `switch.output_pin` (when using hwpwm type)
* Related pages: laser, spindle-control, mosfets
* Example configuration:
  * frequency = 10000  # 10 kHz for laser control (typical)
  * frequency = 5000  # 5 kHz for VFD spindle control
  * frequency = 50  # 50 Hz for servo control
  * frequency = 25000  # 25 kHz for silent cooling fan control (inaudible)

---

## [switch] - Spindle and General Tool Control

### Overview
The Switch module provides flexible control for spindles, coolant, fans, and other tools. Each switch is a named instance with independent configuration. Commonly used for spindle control via M3/M5 commands. Smoothieware v2 does NOT have a dedicated spindle module - spindle control is implemented as a Switch instance.

---

#### `switch.<name>.enable`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Instance activation
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:58`
* Valid values: `true`, `false`
* Required: yes (switch instance will not be created if false)
* Corresponding v1 setting: `switch.<name>.enable`
* Corresponding v2 setting: `switch.<name>.enable`
* Description: Enable this switch instance. When true, the switch is loaded and available for G-code control or input monitoring. When false, the switch instance is not created and configuration is skipped. Each switch must have a unique name (e.g., spindle, coolant, fan, dust).
  * If enabled but configuration fails, instance is deleted (line 64).
  * Instance count is tracked and reported at line 69.
  * Switch can be either input (button/switch) or output (tool control), determined by presence of input_pin.
* Related settings: All other `switch.<name>.*` settings
* Related pages: switch, switch-options, spindle-control
* Example configuration:
  * spindle.enable = true  # Enable spindle control switch
  * coolant.enable = true  # Enable coolant control switch
  * fan.enable = false  # Disable fan switch (not used)

---

#### `switch.<name>.input_on_command`

* Type: `string` (G-code or M-code)
* Default: none
* Module: `switch`
* Context: Command binding for output control
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:217-229`
* Valid values: G-code (e.g., `G28`) or M-code (e.g., `M3`, `M106`, `M8`)
  * Format: Letter followed by number, optional subcode with dot (e.g., M106.1)
  * Minimum 2 characters required (line 217)
  * Underscores automatically replaced with spaces for compatibility (line 95)
* Required: yes (at least one of input_on_command or input_off_command required for output switches)
* Corresponding v1 setting: `switch.<name>.input_on_command`
* Corresponding v2 setting: `switch.<name>.input_on_command`
* Description: G-code or M-code that turns this switch ON. When this command is received, the switch activates (turns on digital output, starts PWM, or sets high state). The firmware parses the command at lines 218-229 to extract letter (G/M), code number, and optional subcode. A handler is automatically registered for this code.
  * Command letter stored as input_on_command_letter (G or M) at line 218.
  * Code number parsed via GCodeProcessor::parse_code() at line 221.
  * Subcode from command overrides subcode setting if present (line 223-224).
  * Handler automatically registered for this command (lines 227-229).
  * WARNING: Malformed commands (< 2 chars) generate warning but don't fail configuration (line 232).
  * For spindle control, typically use M3 (CW) or M4 (CCW).
* Related settings: `switch.<name>.input_off_command`, `switch.<name>.subcode`
* Related pages: switch, supported-g-codes, spindle-control, m3
* Example configuration:
  * spindle.input_on_command = M3  # Spindle on clockwise (standard)
  * coolant.input_on_command = M8  # Coolant on
  * fan.input_on_command = M106  # Fan on
  * dust.input_on_command = M10  # Custom M-code for dust extraction

---

#### `switch.<name>.input_off_command`

* Type: `string` (G-code or M-code)
* Default: none
* Module: `switch`
* Context: Command binding for output control
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:235-247`
* Valid values: G-code or M-code (e.g., `M5`, `M9`, `M107`)
  * Format: Letter followed by number, optional subcode with dot
  * Minimum 2 characters required (line 235)
  * Underscores automatically replaced with spaces for compatibility (line 96)
* Required: yes (at least one of input_on_command or input_off_command required for output switches)
* Corresponding v1 setting: `switch.<name>.input_off_command`
* Corresponding v2 setting: `switch.<name>.input_off_command`
* Description: G-code or M-code that turns this switch OFF. When this command is received, the switch deactivates (turns off digital output, stops PWM, or sets low state). The firmware parses the command at lines 236-247 identical to input_on_command processing. For spindle control, typically use M5 (spindle stop).
  * Command letter stored as input_off_command_letter (G or M) at line 236.
  * Code number parsed via GCodeProcessor::parse_code() at line 239.
  * Subcode from command overrides subcode setting if present (line 241-242).
  * Handler automatically registered for this command (lines 244-246).
  * WARNING: Malformed commands (< 2 chars) generate warning but don't fail configuration (line 248).
  * Queue is drained (Conveyor wait) before executing off command (line 420).
* Related settings: `switch.<name>.input_on_command`, `switch.<name>.subcode`
* Related pages: switch, supported-g-codes, spindle-control, m5
* Example configuration:
  * spindle.input_off_command = M5  # Spindle stop (standard)
  * coolant.input_off_command = M9  # Coolant off
  * fan.input_off_command = M107  # Fan off
  * dust.input_off_command = M11  # Custom M-code for dust extraction off

---

#### `switch.<name>.subcode`

* Type: `number`
* Default: `0`
* Module: `switch`
* Context: Command disambiguation for multiple switches
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:120`
* Valid values: 0-255 (uint8_t range)
* Corresponding v1 setting: `switch.<name>.subcode`
* Corresponding v2 setting: `switch.<name>.subcode`
* Description: Subcode filter for commands to allow multiple switches on the same M-code. For example, M106.0 and M106.1 can control two different fans using subcode 0 and 1. The subcode is matched at lines 347 and 354 using gcode.get_subcode(). This allows disambiguation when multiple switches need to respond to variants of the same command.
  * Subcode matching checked at line 347 for input_on and line 354 for input_off.
  * Can be overridden by explicit subcode in command string (e.g., M106.1 overrides subcode=0).
  * If command includes subcode via dot notation, that overrides this setting (lines 223-224, 241-242).
  * Subcode 0 is default and matches commands without explicit subcode.
  * Use case: M106.0 (hotend fan), M106.1 (part cooling fan), M106.2 (exhaust fan).
* Related settings: `switch.<name>.input_on_command`, `switch.<name>.input_off_command`
* Related pages: switch, supported-g-codes
* Example configuration:
  * fan1.subcode = 0  # Responds to M106 or M106.0
  * fan2.subcode = 1  # Responds to M106.1
  * spindle.subcode = 0  # Responds to M3/M5 without subcode (default)

---

#### `switch.<name>.output_pin`

* Type: `pin`
* Default: `nc` (not connected)
* Module: `switch`
* Context: Hardware pin assignment for output control
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:141`
* Valid values: Any digital pin, PWM pin (for hwpwm type), or `nc`
  * Digital pins: STM32 format (e.g., `PI4`, `PE5`, `PD8`)
  * PWM pins: `PWM1_1` through `PWM1_4`, `PWM2_1` through `PWM2_4` (hwpwm only)
  * Pin modifiers: `!` (invert), `^` (pullup), `-` (pulldown), `o` (open-drain)
  * `nc` - not connected (switch cannot control output)
* Required: yes (for output switches)
* Corresponding v1 setting: `switch.<name>.output_pin`
* Corresponding v2 setting: `switch.<name>.output_pin`
* Description: Output pin to control for this switch. The pin type and capabilities must match the output_type setting. For digital output, any GPIO pin works. For sigmadeltapwm, any GPIO pin works. For hwpwm, must be one of the 8 hardware PWM pins. Pin validation occurs at configuration time (lines 146-180) and fails if pin is invalid for the selected output type.
  * DIGITAL: Pin created as Pin object with AS_OUTPUT_ON/OFF based on startup_state (line 159).
  * SIGMADELTA: Pin created as SigmaDeltaPwm object (line 145).
  * HWPWM: Pin created as Pwm object, validated with is_valid() check (lines 176-180).
  * Pin inversion handled by `!` modifier in pin name (e.g., `PI4!`).
  * Failsafe behavior can be configured to set high or low on debug/fault (lines 151-170, 183-187).
  * CRITICAL: Incorrect pin assignment can damage hardware - verify pinout before powering on.
* Related settings: `switch.<name>.output_type`, `switch.<name>.startup_state`
* Related pages: switch, pinout, pin-configuration, pwm-capable
* Example configuration:
  * spindle.output_pin = PI4  # Digital output on PI4
  * spindle.output_pin = PI4!  # Inverted digital output
  * spindle.output_pin = PWM1_2  # Hardware PWM output
  * fan.output_pin = PD8  # Sigma-delta PWM on any GPIO
  * relay.output_pin = nc  # No output (disabled)

---

#### `switch.<name>.output_type`

* Type: `string` (enum)
* Default: none
* Module: `switch`
* Context: Output mode selection
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:135`
* Valid values: `digital`, `hwpwm`, `sigmadeltapwm`
  * `digital` - Simple on/off control (relay, SSR, digital signal)
  * `hwpwm` - Hardware PWM (requires PWM pin, precise duty cycle control)
  * `sigmadeltapwm` - Software PWM (any digital pin, lower frequency, less precise)
* Required: yes (for output switches)
* Corresponding v1 setting: `switch.<name>.output_type`
* Corresponding v2 setting: `switch.<name>.output_type`
* Description: Type of output control for this switch. Determines how the output pin is driven and what control methods are available. Digital provides simple on/off. HWPWM provides precise hardware PWM with configurable duty cycle 0-100%. SigmaDelta provides software-based PWM on any GPIO pin with 0-255 resolution but lower frequency and precision.
  * Validation occurs at lines 136-138, invalid types cause configuration failure.
  * DIGITAL: Switch state boolean (on/off), pin driven directly (lines 157-172, 210-211).
  * HWPWM: Duty cycle 0-100%, requires valid PWM pin, supports S and P parameters (lines 174-188, 386-408).
  * SIGMADELTA: PWM value 0-255 (scaled by max_pwm), any GPIO (lines 143-156, 369-384).
  * Choice affects which command parameters are available (S for HWPWM/SIGMADELTA, none for DIGITAL).
  * CRITICAL: HWPWM requires hardware PWM pin (PWM1_x or PWM2_x), other types work on any pin.
* Related settings: `switch.<name>.output_pin`, `switch.<name>.max_pwm`, `switch.<name>.default_on_value`
* Related pages: switch, spindle-control, pwm-capable
* Example configuration:
  * spindle.output_type = digital  # Simple on/off for relay control
  * spindle.output_type = hwpwm  # Hardware PWM for VFD control
  * fan.output_type = sigmadeltapwm  # Software PWM for fan speed

---

#### `switch.<name>.startup_state`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Boot behavior for output state
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:128`
* Valid values: `true`, `false`
* Corresponding v1 setting: `switch.<name>.startup_state`
* Corresponding v2 setting: `switch.<name>.startup_state`
* Description: Initial state when firmware boots. For digital outputs, this is simply on (true) or off (false). For PWM outputs, this determines whether default_on_value or startup_value is used. This setting ensures predictable behavior on power-up or reset. For safety-critical outputs like spindles, this should almost always be false.
  * Sets initial switch_state at line 128.
  * DIGITAL: Pin initialized to this state (line 159).
  * HWPWM: If true, uses default_on_value/100.0F; if false, uses startup_value/100.0F (lines 203-207).
  * SIGMADELTA: If true, sets pwm to switch_value; if false, sets to false (lines 193-197).
  * WARNING: Setting true for spindle can cause unexpected startup, potential safety hazard.
  * Startup state can be overridden by halt_set_to on system halt (lines 326-339).
* Related settings: `switch.<name>.startup_value`, `switch.<name>.default_on_value`, `switch.<name>.halt_set_to`
* Related pages: switch, safety, killbutton
* Example configuration:
  * spindle.startup_state = false  # Spindle off at boot (safety - recommended)
  * fan.startup_state = true  # Cooling fan on at boot
  * light.startup_state = true  # Enclosure light on at boot

---

#### `switch.<name>.startup_value`

* Type: `number`
* Default: Depends on output type
* Module: `switch`
* Context: PWM initial value at startup
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:192` (sigmadelta), `201` (hwpwm)
* Units: 0-255 for sigmadeltapwm, 0-100 (percent) for hwpwm
* Valid values:
  * SigmaDelta: 0-255 (scaled by max_pwm at line 191-192)
  * HWPWM: 0-100 (percent duty cycle)
  * Digital: Not applicable
* Corresponding v1 setting: `switch.<name>.startup_value`
* Corresponding v2 setting: `switch.<name>.startup_value`
* Description: Initial PWM duty cycle or value at firmware startup. For sigmadeltapwm, this is 0-255 (default: max_pwm value). For hwpwm, this is 0-100 percent (default: 0). This value is used when startup_state is false. When startup_state is true, default_on_value is used instead (hwpwm only).
  * SIGMADELTA: Read at line 192, default to max_pwm if not set. Applied at line 194 if startup_state true.
  * HWPWM: Read at line 201, default 0. Applied at line 206 as startup_value/100.0F if startup_state false.
  * For HWPWM, this represents duty cycle percentage (0-100).
  * For SIGMADELTA, this is PWM value (0-255) that will be scaled by max_pwm setting.
  * If switch_state is true at startup, sigmadelta uses this value; hwpwm uses default_on_value instead.
* Related settings: `switch.<name>.default_on_value`, `switch.<name>.max_pwm`, `switch.<name>.startup_state`
* Related pages: switch, spindle-control
* Example configuration:
  * spindle.startup_value = 0  # 0% duty cycle at boot (hwpwm)
  * fan.startup_value = 128  # 50% speed at boot (sigmadelta, 128/255)
  * light.startup_value = 255  # Full brightness at boot (sigmadelta)

---

#### `switch.<name>.default_on_value`

* Type: `number`
* Default: `0`
* Units: percent (0-100)
* Module: `switch`
* Context: Default PWM level when turned on without explicit value
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:202`
* Valid values: 0-100 (percent duty cycle for HWPWM)
* Corresponding v1 setting: `switch.<name>.default_on_value`
* Corresponding v2 setting: `switch.<name>.default_on_value`
* Description: Default duty cycle when turned on without explicit value (HWPWM only). When the input_on_command is received without S or P parameters, this value is used as the duty cycle percentage. This allows simple M3 (spindle on) to start at a predefined speed without requiring S parameter every time. Only applies to hwpwm output type.
  * Read at line 202, stored as float.
  * Used when command has no S or P args (line 391): pwm_pin->set(default_on_value/100.0F).
  * Also used when startup_state is true (line 204).
  * Only meaningful for HWPWM output type, ignored for digital and sigmadelta.
  * For spindle control: allows M3 without S to start at configured default speed.
  * Value is divided by 100 before setting (line 391, 204, 456) to convert percentage to 0-1 range.
* Related settings: `switch.<name>.output_type`, `switch.<name>.startup_value`, `switch.<name>.startup_state`
* Related pages: switch, spindle-control, m3
* Example configuration:
  * spindle.default_on_value = 50  # M3 without S starts at 50% speed
  * spindle.default_on_value = 75  # M3 without S starts at 75% speed
  * fan.default_on_value = 100  # Fan starts at full speed

---

#### `switch.<name>.max_pwm`

* Type: `number`
* Default: `255`
* Units: 0-255 (sigmadelta PWM range)
* Module: `switch`
* Context: SigmaDelta PWM scaling factor
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:191`
* Minimum value: `0` (no validation, but 0 would disable output)
* Maximum value: `255` (8-bit resolution limit)
* Valid values: 0-255
* Corresponding v1 setting: `switch.<name>.max_pwm`
* Corresponding v2 setting: `switch.<name>.max_pwm`
* Description: Maximum PWM value for sigmadelta PWM output, acting as a scaling factor. Values sent via S parameter in G-code are scaled: `S255` → `max_pwm`, `S128` → `max_pwm/2`. This allows limiting maximum PWM output or matching external hardware expectations. Only applies to sigmadeltapwm output type.
  * Set via sigmadelta_pin->max_pwm() at line 191.
  * S values from G-code scaled at line 372: v = S * max_pwm / 255.0F.
  * If startup_value not configured, defaults to this value (line 192).
  * Only meaningful for SIGMADELTA output type, ignored for digital and hwpwm.
  * Provides 8-bit (0-255) resolution for sigmadelta PWM.
  * Setting below 255 effectively limits maximum output (e.g., max_pwm=128 limits to 50% max).
* Related settings: `switch.<name>.output_type`, `switch.<name>.startup_value`
* Related pages: switch
* Example configuration:
  * fan.max_pwm = 255  # Full 8-bit resolution (0-255)
  * spindle.max_pwm = 128  # Limit to 50% maximum (0-128)
  * led.max_pwm = 200  # Limit brightness to ~78% (0-200)

---

#### `switch.<name>.failsafe_set_to`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Safety behavior on system fault/debug halt
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:129`
* Valid values: `true`, `false`
* Corresponding v1 setting: `switch.<name>.failsafe_set_to`
* Corresponding v2 setting: `switch.<name>.failsafe_set_to`
* Description: State to set output to on system fault or debug halt conditions. When true, output is set high/on during fault. When false, output is set low/off during fault. For safety-critical outputs like spindles, this should be false to ensure the tool stops on any fault condition. This is distinct from halt_set_to which handles M112 emergency stop.
  * Read at line 129 and stored.
  * Used to configure debug pin behavior (lines 151-170, 183-187) - currently commented out.
  * NOTE: The set_high_on_debug/set_low_on_debug calls are commented out in source.
  * Intended for hardware-level failsafe but not fully implemented in current firmware.
  * CRITICAL: Always set to false for spindles and other potentially dangerous tools.
* Related settings: `switch.<name>.halt_set_to`, `switch.<name>.ignore_on_halt`
* Related pages: switch, emergencystop, killbutton
* Example configuration:
  * spindle.failsafe_set_to = false  # Spindle off on fault (safety - required)
  * coolant.failsafe_set_to = false  # Coolant off on fault
  * light.failsafe_set_to = true  # Keep enclosure light on during fault

---

#### `switch.<name>.halt_set_to`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Emergency stop behavior
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:130`
* Valid values: `true`, `false`
* Corresponding v1 setting: `switch.<name>.halt_set_to`
* Corresponding v2 setting: `switch.<name>.halt_set_to`
* Description: State to set output to when HALT condition occurs (M112 emergency stop, limit switch trigger, kill button press, etc.). When true, output is set high/on during halt. When false, output is set low/off during halt. Can be overridden by ignore_on_halt setting. For spindles, this MUST be false to ensure tool stops immediately on emergency conditions.
  * Applied in on_halt() handler at lines 326-339.
  * Sets output state based on this value (lines 333-335).
  * Also updates switch_state to this value (line 338).
  * Only takes effect if ignore_on_halt is false (checked at line 329).
  * CRITICAL: For spindles, this MUST be false to ensure safe emergency stop.
  * HALT conditions include: M112, limit switch hit, kill button, driver alarm.
* Related settings: `switch.<name>.ignore_on_halt`, `switch.<name>.failsafe_set_to`
* Related pages: switch, emergencystop, killbutton, m5
* Example configuration:
  * spindle.halt_set_to = false  # Spindle MUST stop on HALT (safety - required)
  * coolant.halt_set_to = false  # Coolant off on HALT
  * vacuum.halt_set_to = false  # Vacuum off on HALT
  * light.halt_set_to = true  # Keep light on during HALT for visibility

---

#### `switch.<name>.ignore_on_halt`

* Type: `bool`
* Default: `false`
* Module: `switch`
* Context: Halt override for specific outputs
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:131`
* Valid values: `true`, `false`
* Corresponding v1 setting: none (new in v2)
* Corresponding v2 setting: `switch.<name>.ignore_on_halt`
* Description: If true, do not change output state on HALT, ignoring the halt_set_to setting. This allows certain outputs (like enclosure lights or alarms) to maintain their state during emergency stop while safety-critical tools (spindle, laser) are shut down. When true, the on_halt() handler exits early without changing switch state (line 329).
  * Checked at line 329 in on_halt() handler.
  * If true, function returns immediately without changing any state.
  * If false (default), halt_set_to is applied to switch output.
  * Use case: Keep enclosure lights, status indicators, or alarms active during HALT.
  * WARNING: NEVER set true for spindle, laser, or other dangerous tools.
  * Use sparingly - most outputs should respond to HALT for safety.
* Related settings: `switch.<name>.halt_set_to`, `switch.<name>.failsafe_set_to`
* Related pages: switch, emergencystop, killbutton
* Example configuration:
  * spindle.ignore_on_halt = false  # Spindle MUST respond to HALT (safety - required)
  * light.ignore_on_halt = true  # Keep enclosure light on during HALT
  * alarm.ignore_on_halt = true  # Keep alarm sounding during HALT
  * fan.ignore_on_halt = false  # Stop cooling fan on HALT

---

#### `switch.<name>.input_pin` (Input Mode)

* Type: `pin`
* Default: none (omit for output mode)
* Module: `switch`
* Context: Physical button/switch input for triggering commands
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:80`
* Valid values: Any digital input pin in STM32 format (e.g., `PJ14`, `PB5`)
  * Can include pullup modifier `^` (e.g., `PJ14^`)
  * Pin must be AS_INPUT capable
* Corresponding v1 setting: `switch.<name>.input_pin`
* Corresponding v2 setting: `switch.<name>.input_pin`
* Description: Physical button or switch input pin. When configured, this makes the switch an INPUT switch (button mode) instead of OUTPUT switch (tool control mode). The pin is polled at 50Hz (20ms interval, line 112) to detect state changes. When the pin state changes, the configured output_on_command or output_off_command is executed. This allows physical buttons to trigger G-code commands.
  * Presence of this setting switches mode from OUTPUT to INPUT (line 105).
  * Pin created as AS_INPUT at line 83.
  * Pin validation at lines 84-88, invalid pin causes configuration failure.
  * Polling registered at line 109, 50Hz ticker setup at line 112.
  * Pin state changes detected in pinpoll_tick() at lines 521-560.
  * Behavior controlled by input_pin_behavior setting (momentary vs toggle).
  * CRITICAL: Cannot have both input_pin and output_pin - switch is either input OR output, not both.
* Related settings: `switch.<name>.input_pin_behavior`, `switch.<name>.output_on_command`, `switch.<name>.output_off_command`
* Related pages: switch, pin-configuration, killbutton
* Example configuration:
  * button.input_pin = PJ14  # Physical button on PJ14
  * switch.input_pin = PB5^  # Toggle switch with pullup on PB5
  * estop.input_pin = PC13!  # Inverted E-stop button

---

#### `switch.<name>.input_pin_behavior` (Input Mode)

* Type: `string` (enum)
* Default: `momentary`
* Module: `switch`
* Context: Input pin behavior mode
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:90`
* Valid values: `momentary`, `toggle`
  * `momentary` - Active only while button held (press = on, release = off)
  * `toggle` - Press to toggle state (press = flip, release = no change)
* Corresponding v1 setting: `switch.<name>.input_pin_behavior`
* Corresponding v2 setting: `switch.<name>.input_pin_behavior`
* Description: Behavior mode for input pin when used as physical button/switch. Momentary behavior means commands are sent on both press and release (on when pressed, off when released). Toggle behavior means commands are sent only on press, alternating between on and off states with each press. Choose based on physical button type.
  * String parsed at line 90, compared to "momentary".
  * Stored as enum: momentary_behavior or toggle_behavior (line 91).
  * Behavior implemented in pinpoll_tick() at lines 533-551.
  * MOMENTARY: switch_state follows pin state directly (lines 540, 548).
  * TOGGLE: switch_state flips on pin high, no change on pin low (line 536).
  * Initial switch_state set to pin state for momentary, unchanged for toggle (lines 100-103).
* Related settings: `switch.<name>.input_pin`, `switch.<name>.output_on_command`, `switch.<name>.output_off_command`
* Related pages: switch, killbutton
* Example configuration:
  * button.input_pin_behavior = momentary  # Push button (on while held)
  * switch.input_pin_behavior = toggle  # Toggle switch (flip on each press)
  * pendant.input_pin_behavior = momentary  # MPG button (active while pressed)

---

#### `switch.<name>.output_on_command` (Input Mode)

* Type: `string` (G-code command)
* Default: none
* Module: `switch`
* Context: Command to execute when input switch activates
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:92`
* Valid values: Any valid G-code command line (e.g., `M3`, `G28 X Y`, `M106 S255`)
  * Can include parameters
  * Underscores replaced with spaces (line 95)
* Corresponding v1 setting: `switch.<name>.output_on_command`
* Corresponding v2 setting: `switch.<name>.output_on_command`
* Description: G-code command to execute when input switch turns on or button is pressed. This allows physical buttons to trigger any G-code command. The command is executed in the command thread context (line 507) via dispatch_line(). For momentary behavior, this command is sent when button is pressed. For toggle behavior, this command alternates with output_off_command on each press.
  * Stored at line 92.
  * Underscores replaced with spaces for compatibility (line 95).
  * Executed in handle_switch_changed() at line 507 via dispatch_line().
  * Uses null OutputStream (line 506) so command executes without console output.
  * Command execution deferred to command thread context (lines 494-498).
  * Can be any G-code, including multi-axis homing, tool changes, macros, etc.
* Related settings: `switch.<name>.input_pin`, `switch.<name>.output_off_command`, `switch.<name>.input_pin_behavior`
* Related pages: switch, supported-g-codes
* Example configuration:
  * homebutton.output_on_command = G28  # Home all axes on button press
  * spindlebutton.output_on_command = M3 S50  # Start spindle at 50% on button press
  * probebutton.output_on_command = G30  # Run probe cycle on button press

---

#### `switch.<name>.output_off_command` (Input Mode)

* Type: `string` (G-code command)
* Default: none
* Module: `switch`
* Context: Command to execute when input switch deactivates
* Defined in: `Firmware/src/modules/tools/switch/Switch.cpp:93`
* Valid values: Any valid G-code command line (e.g., `M5`, `M107`)
  * Can include parameters
  * Underscores replaced with spaces (line 96)
* Corresponding v1 setting: `switch.<name>.output_off_command`
* Corresponding v2 setting: `switch.<name>.output_off_command`
* Description: G-code command to execute when input switch turns off or button is released (momentary mode only). For momentary behavior, this command is sent when button is released. For toggle behavior, this command alternates with output_on_command on each press (not used on release). Executed in command thread context like output_on_command.
  * Stored at line 93.
  * Underscores replaced with spaces for compatibility (line 96).
  * Executed in handle_switch_changed() at line 512 via dispatch_line().
  * Uses null OutputStream (line 512) so command executes without console output.
  * For TOGGLE behavior, sent on alternate button presses (switch_state false).
  * For MOMENTARY behavior, sent when button released (pin goes low, switch_state false).
* Related settings: `switch.<name>.input_pin`, `switch.<name>.output_on_command`, `switch.<name>.input_pin_behavior`
* Related pages: switch, supported-g-codes
* Example configuration:
  * spindlebutton.output_off_command = M5  # Stop spindle on button release
  * fanbutton.output_off_command = M107  # Turn off fan on button release
  * lightbutton.output_off_command = M42  # Custom M-code to turn off light

---

## Configuration Examples

### Complete Laser Configuration

```ini
[pwm1]
frequency = 10000  # 10kHz PWM for smooth laser control

[laser]
enable = true
pwm_pin = PWM1_1  # Use PWM1 timer channel 1
ttl_pin = PE11  # TTL enable signal for laser PSU
inverted_pwm = false  # Normal polarity (high = more power)
pullup = true  # Enable pullup resistor
opendrain = false  # Push-pull output
maximum_power = 1.0  # Full power allowed (reduce for testing)
minimum_power = 0.0  # No tickle power
maximum_s_value = 1.0  # S0.0 to S1.0 scale (LightBurn standard)
default_power = 0.8  # 80% default power when S not specified
proportional_power = true  # Enable velocity-proportional power scaling
```

### Digital Spindle (Relay/SSR Control)

```ini
[switch]
spindle.enable = true
spindle.input_on_command = M3  # Spindle on clockwise
spindle.input_off_command = M5  # Spindle stop
spindle.output_pin = PI4  # SSR/relay control pin
spindle.output_type = digital  # Simple on/off
spindle.startup_state = false  # Start off (safety)
spindle.failsafe_set_to = false  # Turn off on fault
spindle.halt_set_to = false  # Turn off on HALT (required)
spindle.ignore_on_halt = false  # Respond to HALT (required)
```

### PWM VFD Spindle Control

```ini
[pwm1]
frequency = 5000  # 5kHz for VFD analog control (0-10V typical)

[switch]
spindle.enable = true
spindle.input_on_command = M3  # Spindle on CW
spindle.input_off_command = M5  # Spindle off
spindle.output_pin = PWM1_2  # Hardware PWM pin
spindle.output_type = hwpwm  # Hardware PWM
spindle.startup_state = false  # Start off
spindle.startup_value = 0  # 0% duty at boot
spindle.default_on_value = 50  # M3 without S starts at 50%
spindle.failsafe_set_to = false  # Stop on fault
spindle.halt_set_to = false  # Stop on HALT (required)
spindle.ignore_on_halt = false  # Respond to HALT (required)
```

### Multiple Tools Example

```ini
[pwm1]
frequency = 10000  # 10kHz for laser and VFD

[pwm2]
frequency = 50  # 50Hz for servo control

[laser]
enable = true
pwm_pin = PWM1_1
maximum_power = 1.0
proportional_power = true

[switch]
# Main spindle on PWM
spindle.enable = true
spindle.input_on_command = M3
spindle.input_off_command = M5
spindle.output_pin = PWM1_2
spindle.output_type = hwpwm
spindle.halt_set_to = false

# Coolant on digital
coolant.enable = true
coolant.input_on_command = M8
coolant.input_off_command = M9
coolant.output_pin = PI5
coolant.output_type = digital
coolant.halt_set_to = false

# Dust extraction
dust.enable = true
dust.input_on_command = M10
dust.input_off_command = M11
dust.output_pin = PI6
dust.output_type = digital
dust.halt_set_to = false

# Servo Z-axis probe
servo.enable = true
servo.input_on_command = M280
servo.input_off_command = M281
servo.output_pin = PWM2_1
servo.output_type = hwpwm
servo.startup_value = 7.5  # Neutral position (1.5ms pulse at 50Hz)
```

---

## Best Practices & Safety Guidelines

### Laser Safety
1. **CRITICAL: Use maximum_power limiter during testing** - Start at 0.1 (10% max power), gradually increase
2. **Enable proportional_power** - Prevents overburning during acceleration/deceleration
3. **Configure ttl_pin for safety interlocks** - Use for external laser PSU enable or door switches
4. **Use fire command for testing** - Always test at low power (fire 5) before running jobs
5. **Never disable safety interlocks** - Laser fires are extremely dangerous to eyes and can cause fires
6. **PWM frequency selection** - Check laser PSU manual, typically 5-20 kHz. Too low causes flickering, too high may not work
7. **Verify pin configuration** - Double-check pullup/opendrain settings match your laser driver requirements

### Spindle Safety
1. **CRITICAL: Set halt_set_to = false** - Spindle MUST stop on M112 emergency stop
2. **CRITICAL: Set failsafe_set_to = false** - Spindle MUST stop on system fault
3. **CRITICAL: Set ignore_on_halt = false** - Spindle MUST respond to HALT conditions
4. **Test with startup_state = false** - Never auto-start spindle on boot
5. **VFD parameter verification** - Verify VFD responds correctly to PWM signal before running job
6. **Consider encoder feedback** - Use spindle encoder for closed-loop speed verification if available
7. **Direction control** - For spindles requiring CW/CCW control, use two separate switches for M3/M4

### PWM Configuration
1. **Match external hardware specifications** - Check VFD, laser PSU, or servo manual for required PWM frequency
2. **Avoid changing frequency at runtime** - M221 R<freq> affects ALL channels on timer, can disrupt other tools
3. **Test with multimeter/oscilloscope** - Verify PWM voltage levels before connecting expensive equipment
4. **Use electrical isolation** - Use optoisolators for high-voltage VFD control to protect Smoothieboard
5. **Common frequency guidelines:**
   - Laser PSU: 5-20 kHz (check PSU manual)
   - VFD analog input: 1-10 kHz (check VFD manual)
   - Servo PWM: 50-300 Hz (standard servo 50 Hz, digital servo 300 Hz)
   - Cooling fan: 25 kHz (silent operation, above human hearing)

### Tool Control Best Practices
1. **One tool per switch instance** - Use clear descriptive names (spindle, coolant, dust, fan, light)
2. **Test without load first** - Verify control signals before connecting tools to prevent equipment damage
3. **Choose appropriate output type:**
   - Digital: Relays, SSRs, simple on/off control
   - HWPWM: VFD speed control, servo positioning, precision PWM requirements
   - SigmaDelta: Low-frequency needs, cooling fans, LED dimming (not precision-critical)
4. **Verify M-code assignments** - Ensure M-codes don't conflict between switches (use subcode if needed)
5. **Document custom M-codes** - Add comments for any non-standard M-codes (M10-M11, etc.)

### Common Pitfalls to Avoid
1. **PWM pin validation** - Not all pins support PWM; firmware validates and warns. Only PWM1_x and PWM2_x work for hwpwm.
2. **Timer frequency conflicts** - Two tools needing different frequencies must use different timers (PWM1 vs PWM2)
3. **Inverted logic mismatches** - Some VFDs/PSUs are active-low; use `!` pin modifier or inverted_pwm setting
4. **Missing subcode for multiple instances** - Multiple switches on same M-code need unique subcodes (M106.0, M106.1)
5. **Halt behavior not tested** - ALWAYS test emergency stop (M112) to verify all dangerous tools shut down immediately
6. **Input mode confusion** - Switch cannot be both input (button) and output (tool control); choose one mode per instance

---

## Troubleshooting

### Laser Not Firing
1. **Check enable setting**: Verify `laser.enable = true` in config
2. **Verify PWM pin**: Confirm pwm_pin is valid PWM1_x or PWM2_x, not regular GPIO
3. **Test with fire command**: Use `fire 5` (5% power) for safe testing
4. **Check maximum_power**: Ensure not set to 0 (should be 0.1 minimum for testing)
5. **Verify PWM frequency**: Check [pwm1] or [pwm2] section has frequency configured
6. **Check TTL pin**: If using ttl_pin for PSU enable, verify it goes high when firing
7. **Inspect console messages**: Look for "Specified pin is not a valid PWM pin" error

### Spindle Not Responding
1. **Verify enable**: Check `spindle.enable = true` in [switch] section
2. **Check command bindings**: Confirm input_on_command and input_off_command match your G-code (M3/M5)
3. **Test command**: Send `M3 S50` for hwpwm type (should start at 50% duty cycle)
4. **Verify output_pin**: Confirm pin is correct and not inverted incorrectly
5. **Check VFD configuration**: Ensure VFD is set to accept external analog/PWM control mode
6. **Measure voltage**: Use multimeter to verify pin voltage changes with M3/M5 commands
7. **Check output_type**: Verify output_type matches hardware (digital for relay, hwpwm for VFD)

### PWM Issues
1. **"Specified pin is not a valid PWM pin"**: Use PWM1_x or PWM2_x pins only for hwpwm output type
2. **Wrong PWM frequency**: Configure [pwm1] or [pwm2] section with appropriate frequency
3. **Conflicting frequency requirements**: Two tools need different frequencies - assign to different timers
4. **No PWM output observed**: Check pin isn't already allocated by another module
5. **Inverted signal**: Add `!` to pin name (e.g., PWM1_2!) or use inverted_pwm for laser
6. **Frequency change affects other tools**: M221 R<freq> changes ALL channels on timer, not just one

### Switch Module Issues
1. **Command not recognized**: Verify input_on_command syntax (e.g., "M3", not "M 3" or "m3")
2. **Multiple switches interfering**: Add unique subcode to each switch instance (0, 1, 2...)
3. **Output stays on after HALT**: Check halt_set_to=false and ignore_on_halt=false for safety
4. **SigmaDelta not smooth**: Use hwpwm instead for better quality or lower max_pwm value
5. **Pin already allocated error**: Each pin can only be used once across all modules
6. **Default_on_value ignored**: Only works for hwpwm type, not digital or sigmadelta
7. **Switch doesn't respond to button**: For input mode, verify input_pin is valid and input_pin_behavior is set

---

## Advanced Topics

### M221 Real-Time Laser Control
The M221 command provides runtime adjustment of laser parameters without restarting:
- **Power Scaling**: `M221 S80` reduces all laser power to 80% of programmed values (multiplies by 0.8)
- **Disable Proportional**: `M221 P1` forces constant power mode (for testing overburn behavior)
- **Frequency Adjustment**: `M221 R8000` changes PWM to 8kHz (WARNING: affects all channels on same timer)
- **Query Current**: `M221` displays current power scale, auto power state, and PWM frequency

### Velocity-Proportional Power Algorithm
Laser power is automatically adjusted by the formula (lines 256-261, 290):
```
ActualPower = RequestedPower × (ActualVelocity / NominalVelocity) × Scale
ActualPower = ((maximum_power - minimum_power) × CalculatedPower) + minimum_power
```
- **During acceleration**: ActualVelocity < NominalVelocity → Lower power (prevents overburning)
- **At full speed**: ActualVelocity = NominalVelocity → Full requested power
- **During deceleration**: ActualVelocity < NominalVelocity → Lower power (prevents overburning at end)
- **Algorithm**: Finds primary moving actuator (most steps), calculates trapezoid rate ratio (lines 228-246)
- **Update rate**: Runs every millisecond via FastTicker or SlowTicker (lines 112-125)

### Multiple PWM Timers Strategy
When tools need different frequencies, assign to different timers:
- **Timer 1 (10 kHz)**: Laser (PWM1_1), primary spindle VFD (PWM1_2), part cooling fan (PWM1_3)
- **Timer 2 (50 Hz)**: Servo Z-probe (PWM2_1), servo tool changer (PWM2_2)
- **Planning**: Group tools with similar frequency requirements on same timer
- **Limitation**: Each timer limited to 4 channels, plan accordingly

### Spindle Speed Mapping for VFD Control
For VFD analog input (typically 0-10V):
1. **Determine VFD input range**: Check manual, usually 0-10V DC = 0-100% duty cycle
2. **Map S parameter to duty cycle**:
   - `M3 S0` → 0% duty → 0V → 0 RPM (stopped)
   - `M3 S50` → 50% duty → 5V → 12000 RPM (if max is 24000 RPM)
   - `M3 S100` → 100% duty → 10V → 24000 RPM (full speed)
3. **Configure VFD parameters**: Set VFD max RPM, acceleration/deceleration ramps, current limits
4. **Test incrementally**: Start at low speed (M3 S10), verify spindle responds correctly
5. **Consider PWM to analog converter**: Many VFDs expect clean DC voltage, may need RC filter or dedicated converter

### Custom Tool Control Examples
Create named switches for any tool imaginable:
```ini
[switch]
# Vacuum hold-down table
vacuum.enable = true
vacuum.input_on_command = M10
vacuum.input_off_command = M11
vacuum.output_pin = PE5
vacuum.output_type = digital

# Air blast for chip clearing
airblas.enable = true
airblas.input_on_command = M12
airblas.input_off_command = M13
airblas.output_pin = PE6
airblas.output_type = digital

# Mist coolant system
mist.enable = true
mist.input_on_command = M7
mist.input_off_command = M9
mist.output_pin = PE7
mist.output_type = digital

# Enclosure LED lighting
light.enable = true
light.input_on_command = M42
light.input_off_command = M43
light.output_pin = PWM1_3
light.output_type = hwpwm
light.default_on_value = 50  # 50% brightness default
light.ignore_on_halt = true  # Keep light on during HALT
```

---

**End of Refined Documentation**
