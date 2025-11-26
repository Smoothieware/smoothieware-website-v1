---
permalink: /configuration-options
---

# Configuration Options

{::nomarkdown}
<link rel="stylesheet" href="/assets/css/config-tables.css">
<script src="/assets/js/config-tables.js"></script>
<a href="/images/board.png">
  <img src="/images/board.png" alt="Configuration" width="150" height="150" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

This is a comprehensive list of configuration options understood by the Smoothie firmware.

Some advanced options are omitted from this list and are not recommended for general use.

## Getting More Information

If you want more information about a given module, how it works and how to configure it, (and any advanced options that are not in this list) you can refer to that module's specific documentation page.

For information on pin options and electrical settings (pull up, pull down, open drain, etc.), please refer to [configuring-smoothie](configuring-smoothie).

---

## System & General Settings

The system configuration controls core firmware behavior including step generation frequency, USB modes, LED indicators, and communication interfaces. These settings affect fundamental system operation and should be configured before other modules. For complete documentation, see the system settings section.

{% include modules/other/system-options-for-include.md %}

## Motion Control

The Motion Control module is the heart of Smoothie's kinematic system. It handles coordinate transformation, acceleration planning, and real-time motion execution. This module converts G-code commands into precise stepper motor movements based on your machine's kinematics (cartesian, delta, CoreXY, etc.). For complete documentation, see the [Motion Control](/motion-control) page.

{% include modules/motion/motion-control-options-for-include.md %}

## Actuators (Stepper Motors)

Actuators define the physical stepper motors that move your machine's axes. Each actuator has configuration for pin assignments, steps per millimeter, maximum speeds, microstepping, and optional features like motor reversal and slaving for dual-motor setups. Proper actuator configuration is essential for accurate motion control.

{% include modules/motion/actuators-options-for-include.md %}

## Motion Planner

The motion planner performs lookahead optimization across queued moves to calculate optimal acceleration profiles and cornering speeds. It uses junction deviation instead of traditional jerk control for smoother motion. The planner queue size and junction deviation values significantly impact motion quality and print speed.

{% include modules/motion/planner-options-for-include.md %}

## Conveyor

The conveyor module enables continuous belt or conveyor functionality, allowing infinite Z-axis printing on belt printers or continuous part production systems. This advanced feature coordinates motion between the standard axes and a moving work surface.

{% include modules/motion/conveyor-options-for-include.md %}

## Motors & Current Control

Current control manages the electrical current delivered to stepper motor drivers, either through digital potentiometers (digipot) on older boards or through integrated TMC driver control on newer boards. Proper current settings prevent motor overheating while ensuring adequate torque. For complete documentation, see the [Current Control](/currentcontrol) page.

{% include modules/motors/currentcontrol-options-for-include.md %}

## Endstops

Endstops define the physical limit switches that establish your machine's home position and travel limits. They can be configured as minimum or maximum position stops, with various electrical configurations (normally open, normally closed, pull-up, pull-down). Proper endstop configuration is critical for safe homing and preventing crashes. For complete documentation, see the [Endstops](/endstops) page.

{% include modules/endstops-probes/endstops-options-for-include.md %}

## Z Probe

The Z Probe module enables bed leveling and probing functionality using various probe types including mechanical switches, proximity sensors, and BLTouch devices. The probe is used to measure bed surface topology for automatic compensation. For complete documentation, see the [ZProbe](/zprobe) page.

{% include modules/endstops-probes/zprobe-options-for-include.md %}

## Leveling Strategies

Leveling strategies define how the firmware compensates for bed irregularities or calibrates delta geometry. Different strategies are optimized for different machine types and use cases.

### Three Point Leveling Strategy

Three-point leveling uses measurements at three corners to calculate a plane that represents the bed surface. This is the simplest leveling strategy, suitable for rigid beds with minimal warping. It's commonly used on delta printers for initial calibration.

{% include modules/leveling/three-point-strategy-options-for-include.md %}

### Delta Calibration Strategy

Delta calibration strategy performs comprehensive calibration of linear delta kinematics including tower positions, delta radius, arm lengths, and Z-height. This strategy is specifically designed for delta printers and uses multiple probe points to optimize geometric parameters.

{% include modules/leveling/delta-calibration-strategy-options-for-include.md %}

### Delta Grid Calibration

Delta grid calibration creates a detailed height map of the build surface specifically for delta printers, accounting for both mechanical imperfections and bed surface irregularities. This provides more detailed compensation than three-point leveling.

{% include modules/leveling/delta-grid-calibration-options-for-include.md %}

### Rectangular Grid Leveling

Rectangular grid leveling creates a detailed height map using probe points arranged in a regular grid pattern. This strategy provides the most accurate compensation for beds with significant warping or irregularities. It's commonly used on Cartesian and CoreXY printers.

{% include modules/leveling/rectangular-grid-options-for-include.md %}

## Extruder

The Extruder module controls filament extrusion for 3D printing, managing the stepper motor that pushes filament through the hotend. It handles acceleration, retraction, and coordinates with temperature control for safe operation. For complete documentation, see the [Extruder](/extruder) page.

{% include modules/extruders/extruder-options-for-include.md %}

## Temperature Control

The Temperature Control module manages heating and cooling for components like hotends, heated beds, and heated chambers. It supports multiple temperature sensors (thermistor, thermocouple, PT100), PID control for precise temperature regulation, and comprehensive safety features including thermal runaway protection. For complete documentation, see the [Temperature Control](/temperaturecontrol) page.

{% include modules/temperature/temperaturecontrol-options-for-include.md %}

## Temperature Switch

The Temperature Switch module automatically controls outputs (fans, coolers, heaters) based on temperature thresholds. This is commonly used for hotend cooling fans that turn on when the hotend reaches a certain temperature, or chamber heaters that maintain ambient temperature. For complete documentation, see the [Temperature Switch](/temperatureswitch) page.

{% include modules/temperature/temperatureswitch-options-for-include.md %}

## Tools

### Laser

The Laser module provides PWM control for laser cutters and engravers, with power modulation based on feed rate and optional fire button support. It includes safety features and supports both continuous and pulsed operation modes. For complete documentation, see the [Laser](/laser) page.

{% include modules/laser/laser-options-for-include.md %}

### Spindle

The Spindle module controls spindle motors for CNC milling and routing operations. It supports both PWM speed control and relay-based on/off control, with configurable speed ranges and direction control. For complete documentation, see the [Spindle](/spindle-module) page.

{% include modules/spindle/spindle-options-for-include.md %}

## Input Controls

### Switch

The Switch module provides general-purpose digital I/O control, allowing you to define custom switches and buttons that trigger actions, control outputs, or execute G-code sequences. Switches can be momentary or toggle, with configurable input and output pins. For complete documentation, see the [Switch](/switch) page.

{% include modules/input-controls/switch-options-for-include.md %}

### Joystick

The Joystick module enables manual machine control using analog joystick inputs, allowing operators to jog axes smoothly without G-code commands. This is useful for manual positioning, tool changes, and setup operations.

{% include modules/input-controls/joystick-options-for-include.md %}

### Jogger

The Jogger module provides simple manual jog controls using buttons or encoders, with configurable step sizes and speeds. Unlike the joystick module which uses analog inputs, jogger uses discrete digital inputs for precise incremental movements.

{% include modules/input-controls/jogger-options-for-include.md %}

## Panel & Display

The Panel module handles communication with LCD displays and control panels, supporting various display types including RepRap Discount Full Graphic Smart Controller, Viki2, and other common 3D printer displays. Panels provide local control without requiring a host computer. For complete documentation, see the [Panel](/panel) page.

{% include hardware/panels/panel-options-for-include.md %}

## Network

The Network module enables Ethernet connectivity on supported boards, allowing remote control, file upload, and web interface access. Network functionality requires appropriate hardware support. For complete documentation, see the [Network](/network) page.

{% include modules/network/network-options-for-include.md %}

## Player

The Player module manages G-code file execution from the SD card, including file selection, pause/resume, progress tracking, and status reporting. It coordinates with all other modules during print execution. For complete documentation, see the [Player](/player) page.

{% include modules/player/player-options-for-include.md %}

## Miscellaneous

Additional configuration options for specialized features and modules.

{% include modules/other/miscellaneous-options-for-include.md %}
