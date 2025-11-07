# Proposed Documentation Hierarchy for Smoothieware Website

This hierarchy organizes 265 documentation pages into logical folders while maintaining flat URLs via Jekyll permalink configuration.

```
docs/
│
├── getting-started/
│   ├── index.md - Main documentation homepage featuring guides for 3D printers, laser cutters, CNC mills, and comprehensive firmware documentation
│   ├── welcome.md - DokuWiki welcome page with tips for creating pages and customizing the wiki (appears to be placeholder content)
│   ├── start.md - Placeholder page that redirects to the main Smoothieware homepage with quick links to documentation and guides
│   ├── homepage-draft.md - Draft homepage introducing Smoothieware as a free, open-source G-code interpreter and CNC control system
│   ├── basics.md - Introduction to Smoothie firmware fundamentals, covering what it is, typical workflows, communication methods, and basic electrical concepts
│   ├── smoothie.md - Placeholder page introducing Smoothie as a free, open-source G-code interpreter and CNC control system for ARM Cortex-M3 processors running on Smoothieboard
│   ├── unboxing.md - Getting started guide explaining how to unbox and connect a Smoothieboard via USB or network, manage the SD card configuration, and update the firmware
│   ├── unboxing-fr.md - French language guide for getting started with the Smoothieboard, covering USB connection, SD card usage, network connectivity, and firmware updates
│   ├── getting-smoothie.md - Explains how to obtain and flash Smoothieware firmware binaries, including CNC-specific builds
│   ├── getting-smoothieboard.md - Lists resellers and distributors for purchasing Smoothieboard in North America and Europe
│   ├── connecting-smoothie.md - Documents the various connection methods available for communicating with Smoothieware boards including USB, Ethernet, UART, Bluetooth, and WiFi
│   ├── guides.md - Provides an index page with links to machine-specific setup guides for 3D printers, laser cutters, and CNC mills
│   └── glossary.md - Defines common technical terms used throughout the Smoothieware documentation
│
├── hardware/
│   │
│   ├── boards/
│   │   ├── smoothieboard.md - Main documentation page that includes the comprehensive Smoothieboards documentation via Jekyll include
│   │   ├── smoothieboards.md - Overview of all available Smoothieboard versions including v1, v2-prime, v2-mini, and v2-pro with quick reference table comparing processors, drivers, and best use cases
│   │   ├── smoothieboard-v1.md - Comprehensive documentation of Smoothieboard v1, an open-source CNC controller based on LPC1769 microcontroller, covering its design goals, features, USB, and Ethernet connectivity
│   │   ├── smoothieboard-v1-old.md - Historical documentation of the original Smoothieboard v1 based on LPC1769 or LPC1768 Cortex-M3 chip, describing its uses for 3D printers, laser cutters, and CNC machines
│   │   ├── smoothieboard-v1-specifications.md - Detailed technical specifications of Smoothieboard v1 covering processor specs, stepper motor drivers, MOSFET outputs, thermistor inputs, and configuration details for all three board variants
│   │   ├── smoothieboard-v2-prime.md - Comprehensive technical specifications for the STM32H745-based Smoothieboard v2 Prime production controller board with TMC stepper drivers, Gadgeteer expansion headers, and dual-core processing capabilities
│   │   ├── smoothieboard-v2-original.md - Historical documentation of the cancelled original Smoothieboard v2 design based on LPC4330 microcontroller, explaining the chip shortage crisis and migration to the STM32H745-based v2 Prime design
│   │   ├── smoothieboard-beta.md - Legacy documentation of the original 4-axis Smoothieboard beta released in January 2013, an open-source CNC controller board based on the LPC1769 microcontroller
│   │   ├── smoothieboard-beta-guide.md - Historical guide for the first beta batch of Smoothieboards from January 2013, covering unpacking, connectors, and setup for new users of that early hardware
│   │   ├── smoothieboard-pcb.md - Reference guide showing detailed views and images of the Smoothieboard printed circuit board layout from various angles for design and component placement understanding
│   │   ├── smoothieboard-schematic.md - Documentation providing access to open-source Smoothieboard schematic diagrams, PCB layouts, and design files available on GitHub under CERN OHL v.1.2 license
│   │   ├── azteeg-x5.md - Quick start guide for the Azteeg X5 mini controller board, covering firmware installation and basic configuration steps
│   │   ├── smoothiedriver.md - Documentation for external motor driver PCBs designed to connect to no-driver Smoothieboard variants with support for stepper, DC, and BLDC motor controllers
│   │   └── smoothie-on-a-breadboard.md - Educational reference for building a Smoothie controller using an LPCXpresso 1769 breakout board and breadboards (not recommended for actual machine use)
│   │
│   ├── pins/
│   │   ├── pinout.md - Visual wiring diagrams and pin capability maps for the Smoothieboard showing all pin locations and their available functions
│   │   ├── pin-configuration.md - Reference for understanding pin configuration syntax including modifiers for inversion, open-drain, pull-up/pull-down, and repeater modes
│   │   ├── lpc1769-pin-usage.md - Provides a comprehensive reference table of all pin assignments for the LPC1769 microcontroller on Smoothieboard
│   │   ├── lpc1769-pin-usage-1-5.md - Documents the LPC1769 microcontroller pin assignments for Smoothieboard version 1.5, including comparisons with version 1.0 and Edison/FPGA pin configurations
│   │   ├── lpc4337-pin-usage.md - Documents the pin assignments for the LPC4337 microcontroller used in Smoothie v2 prototypes with mappings across different board versions
│   │   └── pwm-capable.md - Reference table of hardware PWM capable pins on different Smoothieboard versions and their typical assignments
│   │
│   ├── power/
│   │   ├── main-power-input.md - Comprehensive guide for choosing appropriate power supply units for Smoothieboard, covering voltage/current requirements, EMI filtering, and fuses/circuit breakers
│   │   ├── logic-power.md - Documentation on the three different methods for providing 5V logic power to Smoothieboard, including via USB, voltage regulator, or direct 5V input
│   │   ├── voltageregulator.md - Explains voltage regulator installation and specifications for powering Smoothieboard standalone without USB or 5V input
│   │   ├── power-supply-control.md - Instructions for controlling a power supply's ON/OFF signal from Smoothie using the Switch module with configuration examples and safety considerations
│   │   ├── mosfets.md - Comprehensive guide to Smoothieboard's MOSFET outputs for controlling high-power devices with safety warnings
│   │   ├── mosfets-table.md - Reference table and specifications for all MOSFET outputs on the Smoothieboard
│   │   └── fuse-protection.md - Explains the importance of using electrical fuses to protect Smoothieboards from short circuits and overloads
│   │
│   ├── panels/
│   │   ├── panel.md - Comprehensive documentation for wiring and configuring various supported panel types including RepRapDiscount GLCD, Viki2, and SSD1306 OLED displays
│   │   ├── panel-guide.md - Overview of panel controllers (LCD screens with input methods) that allow standalone machine control without a computer connection
│   │   ├── panel-options.md - Reference table of all configuration parameters available for panel module including LCD type, SPI settings, encoder pins, and custom menu options
│   │   ├── smoothiepanel.md - History and overview of the SmoothiePanel control interface lineage from Alpha through Proto5 Epsilon, which uses the same LPC176x MCU as Smoothieboard itself
│   │   ├── smoothiepanelalpha.md - Historical documentation of the abandoned SmoothiePanel Alpha prototype from 2013 that used ARM Cortex-M0 for integrated panel control
│   │   ├── smoothiepanel-beta.md - Documentation for the SmoothiePanel Beta prototype that brought a 20x4 display and user interface controls down to a single I2C port
│   │   ├── smoothiepanel-beta-errata.md - Known issues and workarounds for the SmoothiePanel Beta Proto1 boards covering I2C pinout problems, resistor grounding, and pull-up resistor configurations
│   │   ├── smoothiepanel-gamma.md - Specifications for the SmoothiePanel Gamma prototype using an ARM Cortex-M0 with USB capability and customizable interface panels to address I2C noise issues from the Beta version
│   │   ├── rrdglcdadapter.md - Assembly and configuration instructions for the RRD GLCD Adapter board that connects a RepRapDiscount GLCD panel to Smoothieboard
│   │   └── lcd-screen-design.md - Documentation of proposed LCD screen display improvements for the panel system, showing the current watch screen layout and requested design changes
│   │
│   ├── wiring/
│   │   ├── how-to-wire.md - Comprehensive guide covering electrical safety, wire selection, cable management, connectors, and best practices for machine wiring
│   │   ├── stepper-motors.md - Comprehensive guide to stepper motors including theory, wiring, and selection criteria for CNC applications
│   │   ├── warning.md - Comprehensive safety guide covering polarity, motor disconnection, shorts prevention, grounding, and other critical electrical safety precautions
│   │   └── general-appendixes.md - Provides general appendix information including wiring guidance, connector crimping, and firmware setup instructions
│   │
│   └── accessories/
│       ├── accessory.md - Overview of the Smoothieware Mini system, a free firmware for ARM-based accessory boards that extend Smoothieboard functionality
│       └── smoothie-accessory-protocol.md - Technical specification document describing the protocol for communicating with Smoothie accessories and peripherals, including master/slave relationships and hardware protocols like UART, I2C, and SPI
│
├── machine-guides/
│   │
│   ├── 3d-printers/
│   │   ├── 3d-printer-guide.md - Step-by-step guide for installing and configuring a Smoothieboard in a 3D printer, covering wiring, motors, thermistors, heating elements, fans, and endstops
│   │   ├── extruder-guide.md - Comprehensive guide to configuring and using extruders for 3D printing including steps per millimeter, retraction, and firmware examples
│   │   ├── multiple-extruders.md - Instructions for configuring multiple extruders and hotends on a Smoothieboard
│   │   ├── delta.md - Comprehensive guide to configuring and calibrating Smoothieware for linear delta 3D printers including parameter tuning and automatic/manual calibration methods
│   │   ├── landing-page-3d-printer.md - Marketing landing page highlighting Smoothieboard v2 as a 32-bit upgrade from Marlin with text-file configuration
│   │   └── landing-page-3d-printing.md - Marketing page showcasing 32-bit 3D printing control with support for 200+ printer models and easy configuration
│   │
│   ├── laser-cutters/
│   │   ├── laser-cutter-guide.md - A comprehensive step-by-step guide for installing and configuring Smoothieboard in laser cutting machines, covering wiring, software setup, and safety procedures
│   │   ├── laser-guides.md - A collection of machine-specific guides and references for converting various laser cutter models to use Smoothieboard, including Blue Box, K40, and other laser machine conversions
│   │   ├── blue-box-guide.md - Comprehensive setup guide for replacing electronics in cheap Chinese K40 laser cutters with a Smoothieboard controller
│   │   ├── bluebox-guide.md - Alternative guide for installing Smoothieboard in blue box laser cutting machines with detailed power supply and motor control wiring instructions
│   │   ├── lcjbdz-guide.md - A detailed conversion guide for installing Smoothieboard in Red Box (LCJBDZ) laser cutters, including wiring, safety modifications, and endstop configurations
│   │   ├── laser-warning.md - Safety warnings and guidelines emphasizing the extreme hazards of laser cutters, including dangers to eyesight, fire risks, and required safety precautions
│   │   ├── landing-page-k40-laser-upgrade.md - Marketing landing page for K40 laser cutter owners upgrading from failing M2 Nano controllers to Smoothieboard
│   │   ├── landing-page-laser-controller.md - Marketing landing page for professional laser control with full LightBurn support and rotary axis capabilities
│   │   └── landing-page-laser-cutting.md - Marketing page showcasing Smoothieboard as professional laser cutter controller with smooth raster engraving and grayscale control
│   │
│   ├── cnc-mills/
│   │   ├── cnc-mill-guide.md - A step-by-step guide for installing a Smoothieboard in a CNC milling machine, covering hardware connections and configuration
│   │   ├── pcb-milling.md - Documentation for using Smoothieware's built-in leveling strategies for PCB milling with grid probing and two-corner leveling mode
│   │   ├── atc.md - Guide for setting up automated tool changer systems on CNC machines using Smoothie and Fusion360 post-processors
│   │   ├── landing-page-cnc-controller.md - Marketing landing page for CNC mill control featuring 32-bit power, multi-axis support, and OSHWA certification
│   │   ├── landing-page-cnc-milling.md - Marketing page for CNC mill retrofit with Fusion 360 compatibility, 4-5 axis support, and professional features
│   │   ├── landing-page-cnc-mill.md - Marketing landing page highlighting Smoothieboard as an affordable professional CNC mill controller alternative
│   │   └── landing-page-grbl-alternative.md - Marketing page for GRBL users seeking 32-bit upgrade with 1MB RAM, 6-axis support, and text-file configuration
│   │
│   ├── other-machines/
│   │   ├── pick-and-place.md - Step-by-step installation guide for setting up a Smoothieboard in a Pick and Place machine including firmware, motors, endstops, and vacuum system configuration
│   │   ├── pick-and-place-control.md - Guide to configuring vacuum systems, sensors, solenoids, and servo controls for Pick and Place machines to manipulate electronic components
│   │   ├── embroidery.md - Comprehensive guide to embroidery machine control with Smoothieware covering toolchain, hardware, stitch types, and machine operations
│   │   ├── landing-page-vinyl-cutter.md - Marketing page for vinyl cutter controller replacement supporting 200+ models and professional cutting applications
│   │   └── syringe-covid19-notes.md - Technical notes on stepper motor control and torque detection methods for a COVID-19 syringe pusher project
│   │
│   └── landing-pages.md - Index and overview document describing all Smoothieboard landing pages with audience targeting and marketing integration
│
├── configuration/
│   ├── configuring-smoothie.md - Describes how to configure Smoothie by editing the configuration file on the SD card without needing to recompile firmware
│   ├── configuration-options.md - A comprehensive reference table of all configuration options understood by the Smoothie firmware
│   ├── configurator.md - Explains the Configurator module that allows manipulation of Smoothie configuration using console commands
│   ├── override-warning.md - Explains how the config-override file takes precedence over main configuration settings and provides troubleshooting guidance for when configuration changes don't take effect
│   └── sd-card.md - Documentation of SD card setup, file requirements, and usage for Smoothieboard including firmware storage, configuration files, and troubleshooting tips
│
├── modules/
│   │
│   ├── motion/
│   │   ├── motion-control.md - Explains how to configure motion control parameters like acceleration, junction deviation, and maximum speeds
│   │   ├── motion-control-options.md - Complete reference table of all configuration options for motion control settings
│   │   ├── arm-solutions.md - Documentation of supported kinematics solutions for converting Cartesian coordinates to actuator positions for various machine types
│   │   ├── cartesian.md - Explains the Cartesian arm solution, the most common machine configuration where each motor corresponds directly to an X, Y, or Z axis
│   │   ├── hbot.md - Explains how to configure and use H-Bot and CoreXY crossed-belt motion systems for 3D printers and CNC machines
│   │   ├── morgan-scara.md - Brief documentation for the Morgan SCARA arm solution with links to source code and related resources
│   │   ├── rotary-delta.md - Information about the experimental rotary delta arm solution for Smoothieware, including its challenges, limitations, and references to source code
│   │   └── 6axis.md - Documentation for configuring and compiling Smoothieware to support more than three axes for rotational movements in CNC machines
│   │
│   ├── extruders/
│   │   ├── extruder.md - Full documentation for the extruder module with configuration examples, G-codes, and M-codes for multi-extruder setups
│   │   ├── extruder-options.md - Complete configuration options reference for the extruder module including pinouts, speeds, and retraction parameters
│   │   └── filament-detector.md - Documentation for the filament detector module that monitors filament advancement using an encoder to prevent printing failures
│   │
│   ├── temperature/
│   │   ├── temperaturecontrol.md - Main documentation for the Temperature Control module that manages heating and cooling of hotends and heated beds
│   │   ├── temperaturecontrol-options.md - Complete configuration reference for all Temperature Control module parameters and settings
│   │   ├── temperaturecontrol-pid.md - Explanation of PID control theory and how to configure proportional, integral, and derivative factors for temperature stability
│   │   ├── temperaturecontrol-pid-autotuning.md - Guide to automatically tuning PID values using the M303 command for optimal temperature regulation
│   │   ├── temperaturecontrol-fine-tuning.md - Tips and tricks for optimizing temperature control settings for common scenarios like heater overshoot
│   │   ├── temperaturecontrol-thermistor-choice.md - Explains how to select and configure thermistors for temperature control, including support for multiple thermistor models and manual parameter definition using beta values or Steinhart Hart coefficients
│   │   ├── temperatureswitch.md - Documents the TemperatureSwitch module that automatically controls output switches based on configurable temperature thresholds, commonly used for cooling fan or water pump control
│   │   ├── temperatureswitch-options.md - Provides a comprehensive reference table of all configuration options available for the TemperatureSwitch module including enable, designator, switch selection, polling intervals, and trigger modes
│   │   ├── pt100.md - Documentation for using PT100 temperature sensors with Smoothieboard, covering PTC characteristics, amplifier requirements, and configuration details
│   │   ├── steinharthart.md - Guide for calculating and configuring Steinhart-Hart thermistor coefficients for temperature sensors
│   │   ├── safety-thermistor.md - Guide to implementing a second safety thermistor on hot-ends to prevent over-heating by automatically shutting off the power supply if temperature exceeds a threshold
│   │   └── sensor-types.md - Comprehensive comparison of endstop and probe sensor types for CNC machines and 3D printers, including mechanical switches, optical, Hall effect, inductive, capacitive, FSR, IR, and BLTouch options with pros, cons, and recommendations
│   │
│   ├── endstops-probes/
│   │   ├── endstops.md - Complete documentation on endstops including homing configuration, limit switches, soft endstops, and origin positioning
│   │   ├── endstop.md - Redirect page pointing to the main Endstops documentation page with links to configuration and homing information
│   │   ├── endstops-options.md - Complete configuration reference table for all endstop module options including homing direction, speeds, and trim settings
│   │   ├── guide-endstops.md - Describes what endstops are and how they function for homing, hard endstops, and limit switches on Smoothie machines
│   │   ├── zprobe.md - Complete technical documentation for configuring and using Z-probes with Smoothieware, including probing strategies and G-code commands
│   │   ├── zprobe-options.md - Reference documentation detailing all Z-probe configuration options, probe speeds, pin settings, and supported probe types
│   │   ├── z-probe-guide.md - Overview guide explaining Z-probe functionality for machine calibration, bed leveling, and tool height detection in CNC and 3D printing operations
│   │   ├── touchprobe.md - Documentation for the deprecated Touchprobe module that supported probe moves using G31 command, with guidance to use the modern ZProbe module instead
│   │   └── using-fsrs.md - Explains how to use Force Sensing Resistors (FSRs) as bed leveling sensors with Smoothieboard for automatic bed leveling
│   │
│   ├── leveling/
│   │   ├── delta-calibration-strategy-options.md - Documents the configuration options for the delta calibration leveling strategy used to automatically calibrate linear delta 3D printer beds
│   │   ├── delta-grid-calibration-options.md - Describes the configuration options for the delta grid leveling strategy which performs automatic bed leveling on delta printers by probing multiple points
│   │   ├── rectangular-grid-calibration-options.md - Configuration reference for the rectangular grid leveling strategy, documenting all available options for bed probing and Z-axis compensation
│   │   └── three-point-strategy-options.md - Documents the three-point leveling strategy configuration options that probe three bed points to define a plane and maintain Z-axis parallelism during printing
│   │
│   ├── laser/
│   │   ├── laser.md - Technical documentation on the Laser module in Smoothieware that controls CO2 and diode laser tubes, including wiring, configuration, and G-code commands
│   │   └── laser-options.md - A configuration reference table listing all available options for the laser module in Smoothieware with their default values and descriptions
│   │
│   ├── spindle/
│   │   ├── spindle-control.md - Overview page for controlling CNC spindle motors via Smoothieboard, covering VFD and MOSFET control methods
│   │   ├── spindle-module.md - Detailed firmware module documentation for spindle control supporting PWM, analog voltage, and Modbus RS485 communication methods
│   │   ├── spindle-mosfet-control.md - Guide for directly controlling low-power DC spindle motors using Smoothieboard MOSFET outputs with critical safety warnings about flyback diode protection
│   │   └── spindle-options.md - Deprecated configuration options table for the legacy spindle module PID control parameters
│   │
│   ├── player/
│   │   ├── player.md - Documentation for the Player module that executes G-code files from the SD card with support for play, pause, resume, and suspend commands
│   │   ├── player-options.md - Configuration reference for Player module settings including boot G-code execution, suspend/resume behavior, and heater control options
│   │   ├── playled.md - Guide to configuring and wiring the Play LED indicator that shows when Smoothieboard is actively executing G-code from the SD card
│   │   ├── printing-from-sd-card.md - Guide for transferring G-code files to the SD card and running them using serial terminal, web interface, or panel menus
│   │   └── tools.md - A brief overview explaining that tools are modules controlling physical CNC machine components like extruders and laser heads
│   │
│   ├── input-controls/
│   │   ├── switch.md - Documentation for the Switch module that controls basic input/output from buttons, switches, and GPIO pins
│   │   ├── switch-options.md - Complete configuration reference for all Switch module parameters and settings
│   │   ├── jogger.md - Documentation for the deprecated Jogger module that enables smooth joystick-based machine movement and jog control
│   │   ├── jogger-options.md - Complete reference of configuration options for the Jogger module's speed mapping and axis control
│   │   ├── jogger-dev.md - Developer documentation for writing custom joystick modules that work with Smoothieware's jogger functionality
│   │   ├── joystick.md - Documentation for the Joystick module that enables analog input from potentiometers and joysticks for machine control and jogging
│   │   ├── joystick-options.md - Configuration reference for analog joystick input modules on Smoothieboard with auto-zeroing capabilities
│   │   ├── joystick-dev.md - Developer guide for integrating joystick input into custom Smoothieware modules using public data requests
│   │   ├── killbutton.md - Guide to implementing emergency kill buttons and E-stop controls on Smoothieboard with LED and simple button options
│   │   ├── kill-pause-button.md - Configuration instructions for pause and kill button functionality with hardware wiring and LED status indicators
│   │   └── emergencystop.md - Guide for implementing proper emergency stop circuits to safely stop all motors and power systems in CNC machines
│   │
│   ├── network/
│   │   ├── network.md - Documentation for connecting Smoothieboard to an Ethernet network and accessing it via telnet, web, and SFTP
│   │   ├── network-options.md - Reference table of all network configuration options for Smoothieware
│   │   ├── wifi.md - Documents WiFi connectivity options for Smoothieboard v1, including ESP3D and WiFi/Ethernet bridge solutions
│   │   ├── bluetooth-serial.md - Instructions for adding Bluetooth wireless connectivity to a Smoothieboard using HC-05 modules and Arduino configuration
│   │   ├── uart.md - Explains how to use the Smoothieboard's UART serial port for debug output and command communication, including baud rate configuration and terminal software recommendations
│   │   └── communication.md - Describes the RepRap ping-pong protocol used for communication between the Smoothieboard and host systems, including behavior of ok responses
│   │
│   ├── motors/
│   │   ├── advancedmotordriver.md - Configuration guide for using SPI-based stepper motor driver chips like Panucatt Bigfoot and TMC series drivers with Smoothie
│   │   ├── currentcontrol.md - Explains how to configure stepper motor current using digital potentiometers in Smoothieware configuration files instead of manual adjustment
│   │   └── drillingcycles.md - Explains the canned drilling cycles module that implements G-code drilling cycles G81-G89 to reduce serial port instruction volume for CNC operations
│   │
│   └── other/
│       ├── drillingcycles-options.md - Configuration options reference for the drilling cycles module's canned cycles feature for CNC drilling operations
│       └── utils.md - Documents utility modules in Smoothieware that provide system-level features like file playback, motor control, and user interface elements
│
├── gcode-reference/
│   │
│   ├── supported-g-codes.md - Reference list of G-codes and M-codes supported by Smoothieware with examples and descriptions
│   │
│   ├── g-codes/
│   │   ├── g0.md - Describes the G0 G-code command which executes rapid, uncoordinated moves without activating the tool in CNC and 3D printing applications
│   │   ├── g1.md - G1 is a G-code command that moves the tool while activating it (cutting, extruding, or engraving)
│   │   ├── g2.md - G2 moves the tool while activating it in a clockwise arc motion
│   │   ├── g3.md - G3 is the counter-clockwise version of the G2 arc command with identical parameters and syntax
│   │   ├── g4.md - G4 pauses machine execution for a specified duration in seconds or milliseconds
│   │   ├── g10.md - Explains the G10 G-code command that retracts filament from the hotend in 3D printers and its alternate CNC meaning
│   │   ├── g11.md - Documents the G11 G-code command which reverses the filament retraction performed by G10 in 3D printers
│   │   ├── g17.md - Describes the G17 G-code command that sets arc motion interpretation to the XY plane for G2 and G3 commands
│   │   ├── g18.md - Describes the G18 G-code command that sets arc motion interpretation to the XZ plane for G2 and G3 commands
│   │   ├── g19.md - Describes the G19 G-code command that sets arc motion interpretation to the YZ plane for G2 and G3 commands
│   │   ├── g20.md - G20 sets the unit system to imperial inches for all subsequent machine movements
│   │   ├── g21.md - G21 sets the unit system to metric millimeters for all subsequent machine movements (default mode)
│   │   ├── g28.md - G28 has different meanings depending on whether Smoothie is configured for CNC (go to origin) or Reprap (home to endstops)
│   │   ├── g28-reprap.md - G28 for Reprap machines seeks the endstops on specified axes and sets that position as the new origin
│   │   ├── g28-cnc.md - G28 for CNC mills moves the tool to a previously recorded origin point in machine coordinates
│   │   ├── g28-1.md - G28.1 records and stores the current machine position as the origin point for later G28 commands
│   │   ├── g30.md - G30 probes the Z axis (or other axes with variants) to find workpiece location, tool length, or bed level on printers and mills
│   │   ├── g54.md - G54 selects work coordinate system 1 to define different coordinate reference points for multiple setups or workpieces
│   │   ├── g90.md - G90 sets positioning mode to absolute coordinates relative to the workspace origin point
│   │   ├── g91.md - G91 sets positioning mode to relative coordinates, where positions are relative to the current machine position
│   │   ├── g92.md - Describes the G92 G-code command with specific use cases for 3D printers, such as resetting extruder position
│   │   └── g92-cnc.md - Explains the G92 G-code command for setting coordinate system offsets in CNC applications
│   │
│   └── m-codes/
│       ├── m3.md - Describes the M3 G-code command used to start a spindle at a specific rotation speed for CNC milling operations
│       ├── m5.md - Documents the M5 G-code command which stops the spindle's rotation in CNC applications
│       ├── m20.md - Explains the M20 command which lists the contents of the SD card connected to Smoothieboard and outputs the file list to the serial port
│       ├── m21.md - Describes the M21 command, which exists for compatibility with other firmware but performs no operation in Smoothieware since SD card initialization is automatic
│       ├── m23.md - Documents the M23 command used to select a file from the SD card for printing with the M24 command
│       ├── m24.md - Explains the M24 command which starts printing the file selected with M23, with support for resuming paused prints
│       └── m1234.md - A stub documentation page for the M1234 command that currently lacks proper documentation and needs community contributions
│
├── software/
│   │
│   ├── software.md - Comprehensive list of software applications that interface with or generate G-code for Smoothieware controllers, organized by category
│   │
│   ├── host-software/
│   │   ├── pronterface.md - Overview of Pronterface host software for controlling Smoothieboard via USB or Ethernet, including connection setup and file upload instructions
│   │   ├── octoprint.md - Guide to connecting Octoprint web interface to Smoothieboard via Ethernet, USB, or UART connections for remote 3D printer control
│   │   ├── bcnc.md - Guide to using bCNC software as a CNC control interface with Smoothieboard, including compatibility notes and setup instructions
│   │   ├── smoopi.md - Feature-rich host software written specifically for Smoothie that runs on Raspberry Pi with touchscreen or desktop computers for controlling 3D printers, CNC machines, and laser cutters
│   │   └── laserweb.md - An overview of LaserWeb, a web-based interface for controlling laser cutters with Smoothieware, currently with placeholder documentation
│   │
│   ├── cam-software/
│   │   ├── simplify3d.md - Discusses compatibility issues between Simplify3D slicing software and Smoothie firmware, including problems with excessive line segments and links to G-code cleanup tools
│   │   └── fusion360.md - An introductory page about using Fusion 360 CAD software with Smoothieware CNC machines, with video tutorial and planned documentation
│   │
│   ├── web-interface/
│   │   ├── install-web-interface.md - Step-by-step instructions for downloading and installing the web interface onto a Smoothieboard's SD card
│   │   └── missing-web-interface.md - Explains why the web interface may not be available and how to install it on the SD card
│   │
│   └── console/
│       └── console-commands.md - Explains the console commands available when connected to a Smoothie board via serial, organized by module, designed for manual user interaction
│
├── developers/
│   │
│   ├── developers-guide.md - Provides developers with essential information for coding Smoothie modules including configuration systems, coding standards, and pull request submission procedures
│   ├── coding-standards.md - Documents coding standards and best practices for developers contributing to the Smoothieware project
│   ├── contributing.md - Outlines how developers and community members can contribute to the Smoothieware project through code, documentation, bug reports, and user support
│   ├── contribution-guidlines.md - Sets forth the standards and guidelines that pull requests must meet to be accepted into the Smoothieware project
│   │
│   ├── compilation/
│   │   ├── compiling-smoothie.md - Instructions for compiling Smoothie firmware from source code using GCC and the proper toolchain
│   │   ├── compiling-v2-dev.md - Tutorial for compiling and installing NuttX on the Bambino 200E board for Smoothie V2 development
│   │   └── compiling-v2-libcxx-dev.md - Guide for setting up and compiling Smoothie V2 with libcxx development environment and NuttX dependencies
│   │
│   ├── module-development/
│   │   ├── moduleexample.md - Step-by-step tutorial on how to create a basic Smoothie module using a laser control example
│   │   ├── module-name.md - Documents how to create and configure multiple instances of modules like extruders and temperature controls
│   │   └── listofevents.md - A reference table of all the system events that modules can register for in Smoothieware, enabling inter-module communication and responding to system activities
│   │
│   ├── debugging/
│   │   ├── mri-debugging.md - Guide to using the MRI (Monitor for Remote Inspection) debug monitor with GDB for crash analysis
│   │   └── eclipse.md - Installation and setup guide for using Eclipse IDE with GNU toolchain to develop and debug Smoothieware firmware
│   │
│   └── architecture/
│       ├── howitworks.md - Technical deep-dive into the inner workings of Smoothieware's G-code processing pipeline from serial input to stepper control
│       ├── portability-refactor.md - Documentation of the plan to refactor Smoothieware's hardware-specific code into a centralized hardware abstraction layer (HAL) for easier porting to new processors
│       ├── queue-refactor.md - Detailed proposal to refactor the motion queue system to use a more compact binary action format instead of storing G-code strings, improving RAM usage and performance
│       └── accel-branch.md - Historical documentation describing Smoothie's acceleration and stepping algorithms, including performance analysis and optimizations
│
├── firmware/
│   │
│   ├── flashing-smoothie.md - Explains how to flash the Smoothieware firmware onto a Smoothieboard using the SD card bootloader
│   ├── flashing-smoothie-firmware.md - Step-by-step instructions for flashing new firmware to a Smoothieboard via SD card and verifying successful installation
│   ├── flashing-the-bootloader.md - Provides step-by-step instructions for flashing the SD bootloader onto LPC1769 or SmoothieBoard using serial programming tools
│   ├── latest-firmware.md - A full-featured page displaying the latest commits to the Smoothieware project with detailed information and links to the GitHub repository
│   ├── latest-firmware-compact.md - A compact version of the firmware commits page showing the 5 most recent commits from both the edge and master branches of Smoothieware
│   ├── v1.md - Provides access to Smoothie v1 documentation snapshot and links to the v1.smoothieware.org documentation archive
│   │
│   └── builds/
│       ├── builds-edge.md - Provides automated firmware builds for the edge branch of Smoothieware with download links and commit information
│       ├── builds-feature-motor.md - Provides automated builds for the feature/motor experimental branch with recent builds and binary file downloads
│       ├── builds-feature-slaveswitch.md - Provides automated builds for the feature/slaveswitch branch that allows switch modules to mirror robot axis values
│       └── third-party-branches.md - Lists community-maintained firmware branches and forks providing additional features like auto-calibration, multi-axis support, and specialized machine capabilities
│
├── migration/
│   ├── migrating.md - Guides for migrating configurations from other firmwares like Marlin and GRBL to Smoothie
│   ├── from-grbl.md - A comprehensive guide for GRBL users migrating to Smoothieware, mapping equivalent configuration options and commands
│   ├── from-marlin.md - A detailed guide for Marlin users transitioning to Smoothieware, explaining corresponding configuration parameters and features
│   └── grbl-mode.md - Explains Smoothie's support for two G-code dialects: the RepRap dialect for 3D printing and the GRBL dialect for CNC milling
│
├── troubleshooting/
│   ├── troubleshooting.md - Comprehensive troubleshooting guide covering power supply problems, configuration issues, movement problems, and step-by-step debugging procedures with LED indicator interpretation
│   ├── error.md - Reference list of all Smoothie firmware error codes with their causes, solutions, and associated parameters
│   ├── stopping-smoothie.md - Detailed explanation of different methods to stop Smoothie during operation including abort, suspend, and emergency stop
│   └── gamma-max.md - Guides users on configuring Z height by setting the gamma_max or gamma_min values after machine homing
│
├── drivers/
│   │
│   ├── windows/
│   │   ├── windows-drivers.md - Provides instructions for downloading, installing, and troubleshooting USB drivers for Smoothieboard on Windows systems
│   │   └── windows-systeminfo.md - Explains how to collect and submit Windows system information for troubleshooting driver compatibility issues
│   │
│   ├── linux/
│   │   └── linux-drivers.md - Instructions for configuring Linux systems to work with Smoothieboard, including udev rules, user permissions, and troubleshooting for various distributions
│   │
│   ├── mac/
│   │   └── mac-drivers.md - Addresses Mac-specific issues with Smoothieboard, particularly SD card slow unmounting due to Spotlight indexing and provides solutions
│   │
│   └── usb.md - Describes the USB port features, driver installation, and best practices for reliable USB communication with Smoothieboard
│
├── community/
│   │
│   ├── community.md - Lists community resources and communication channels including IRC, forums, and mailing lists for getting help and connecting with other users
│   ├── getting-help-community.md - Lists the available communication channels for getting support from the Smoothieware community, including IRC, forums, and mailing lists
│   ├── contact.md - Provides contact information and instructions for reaching out to the Smoothieware community and project maintainers for support
│   │
│   ├── irc/
│   │   └── irc.md - Information about connecting to Smoothieware's IRC channel and community discussion guidelines
│   │
│   ├── forum/
│   │   ├── forum-guidelines.md - Outlines best practices and recommendations for posting questions and discussions in the Smoothieware community forum
│   │   ├── forum-welcome-mat.md - Welcomes users to the Smoothieware forum and directs them to the forum guidelines and access link
│   │   └── help-guidelines.md - Provides community guidelines and best practices for asking for help in the Smoothieware forums and IRC
│   │
│   └── mailing-lists/
│       ├── mailing-lists-welcome-mat.md - Introduces Smoothie's two mailing lists (support and developer) and provides guidelines for posting questions and discussions to the community
│       └── google-plus-welcome-mat.md - Directs users to the Google+ Smoothie Community and includes community guidelines for posting
│
├── project/
│   │
│   ├── donate.md - Solicits donations to support the continued development of the free and open-source Smoothie firmware project
│   ├── gallery.md - Showcases a collection of projects and machines powered by Smoothieware and Smoothieboard
│   ├── policy.md - Guidelines for creating and distributing Smoothieboard derivatives, firmware, and using the "Smoothie" name in open hardware projects
│   │
│   ├── github/
│   │   ├── github.md - Provides instructions on how to contribute to the Smoothieware project by forking the repository and submitting pull requests
│   │   ├── editing-the-wiki.md - Instructions for contributing to the Smoothieware documentation by forking the repository, editing markdown files, and submitting pull requests
│   │   └── how-to-edit-pages.md - Quick guide for creating and editing pages on the Jekyll-based documentation website
│   │
│   ├── news/
│   │   ├── blog.md - Blog page listing various Smoothie project updates and announcements spanning several years
│   │   ├── new-features.md - List of new features added to Smoothie in 2013
│   │   ├── coronavirus.md - Offers priority support and resources for individuals using Smoothieware to help with COVID-19 relief efforts and healthcare manufacturing
│   │   └── todo.md - The Smoothieware project's master TODO list tracking planned improvements, new features, and ongoing work for both v1 firmware and v2 hardware development
│   │
│   └── design/
│       └── logo-proposals.md - A gallery of logo design proposals submitted by Smoothie community members for the project branding
│
└── meta/
    ├── test.md - A general testing and development page used for validating documentation features, component rendering, and styling changes
    ├── test-components.md - A test page demonstrating Shoelace component integration with various alert variants, buttons, and badges for verifying component rendering
    ├── playground.md - Sandbox page for testing documentation formatting features, Shoelace components, and markdown syntax before applying to production content
    ├── search_site.md - Placeholder page for the site's search functionality
    ├── menu.md - An internal placeholder page displaying social media and navigation icons used for the website's top menu
    ├── dokuwiki.md - Describes DokuWiki as a simple open-source wiki software platform that doesn't require a database and offers access controls and plugins
    ├── syntax.md - Guide to DokuWiki markup syntax and formatting for creating wiki documentation pages
    └── welcome.md - DokuWiki welcome page with tips for creating pages and customizing the wiki (appears to be placeholder content)
```

## Summary

This proposed hierarchy organizes 265 documentation files into 17 major categories:

1. **getting-started/** (13 files) - Introduction, welcome, basics, first steps
2. **hardware/** (78 files) - Boards, pins, power, panels, wiring, accessories
3. **machine-guides/** (26 files) - 3D printers, laser cutters, CNC mills, other machines
4. **configuration/** (5 files) - Configuration files and options
5. **modules/** (86 files) - All firmware modules organized by function
6. **gcode-reference/** (31 files) - G-codes and M-codes documentation
7. **software/** (11 files) - Host software, CAM, web interface, console
8. **developers/** (15 files) - Development guides, compilation, debugging
9. **firmware/** (7 files) - Flashing, versions, builds
10. **migration/** (4 files) - Migrating from other firmware
11. **troubleshooting/** (4 files) - Problem solving and errors
12. **drivers/** (5 files) - Platform-specific USB drivers
13. **community/** (9 files) - Forums, IRC, mailing lists, support
14. **project/** (11 files) - Donations, gallery, GitHub, blog, design
15. **meta/** (8 files) - Testing pages, internal tools

## Benefits

- **Logical organization** - Related content grouped together
- **Flat URLs maintained** - All pages still accessible at `smoothieware.org/pagename`
- **Easier maintenance** - Contributors can find and edit related pages more easily
- **Better navigation** - Future improvements to site navigation will benefit from structure
- **SEO preserved** - No URL changes means no broken links or lost search rankings
