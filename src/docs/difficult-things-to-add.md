# Difficult Things to Add

This file contains documentation improvement suggestions that require significant work, are missing necessary information, or need complex assets to be created.

**Criteria for inclusion:**
- Creating new dedicated pages
- Creating images, diagrams, schematics, or pinout graphics
- Performance benchmarks or test results
- Interactive tools or converters
- Information that requires V2 hardware verification or testing
- Large-scale refactoring or restructuring
- Items requiring user input or decisions

---

## docs/getting-started/glossary.md
`/glossary`

- Create comprehensive list of ALL terms that should be defined (requires full audit)
- Add STM32H7-specific terms once V2 hardware details are finalized
- Research actual firmware source code to verify V1/V2 behavioral differences for each term

---

## docs/hardware/panels/rrdglcdadapter.md
`/rrdglcdadapter`

- Create V2 migration path documentation (requires: knowing what V2 display options exist and how to migrate)
- Create comparison images showing V1 vs V2 display setups
- Create detailed wiring diagrams for V2 display connections

---

## docs/hardware/panels/smoothiepanel.md
`/smoothiepanel`

- Create dedicated "Panel Upgrade Path from V1 to V2" page with step-by-step instructions
- Create migration checklist with hardware compatibility matrix
- Document V2 I2C panel alternatives with wiring diagrams

---

## docs/modules/input-controls/emergencystop.md
`/emergencystop`

- Create professional schematics showing complete emergency circuit with contactors (current images are generic placeholders)
- Create wiring diagram showing integration with Smoothieboard kill button
- Add actual oscilloscope/testing screenshots showing proper emergency stop behavior
- Create comprehensive safety validation checklist with real test procedures

---

## docs/modules/input-controls/jogger.md
`/jogger`

- Create MPG (Manual Pulse Generator) page for V2 as replacement documentation
- Document V2 MPG architecture with block diagrams
- Create migration tool or script for converting jogger configs to MPG configs

---

## docs/modules/input-controls/joystick.md
`/joystick`

- Create comprehensive analog input comparison (LPC1769 ADC vs STM32H745 ADC characteristics)
- Create calibration procedure with visual guides
- Benchmark response times and resolution differences between V1 and V2

---

## docs/migration/ (general)

- Create comprehensive "V1 to V2 Migration Guide" page as a standalone document
- Create automated configuration converter tool (V1 flat format to V2 INI format)
- Create visual migration flowchart showing decision points
- Benchmark and document performance differences (step rates, processing, memory)

---

## docs/migration/from-grbl.md
`/from-grbl`

- Create interactive side-by-side configuration comparison tool
- Document complete GRBL command vs Smoothie command mapping (comprehensive table)
- Create "GRBL to Smoothie V2" dedicated migration path

---

## docs/migration/from-marlin.md
`/from-marlin`

- Create interactive thermistor mapping tool (Marlin numbers to Smoothie model names)
- Document ALL Marlin features and their Smoothie equivalents (comprehensive audit)
- Create visual kinematics comparison showing Marlin vs Smoothie configuration approaches

---

## docs/modules/endstops-probes/endstops.md
`/endstops`

- Create endstop wiring diagrams for each board version (V1 3X/4X/5X, V2 Prime/Mini)
- Create troubleshooting flowchart for endstop issues
- Benchmark and document debounce behavior differences between V1 and V2

---

## docs/modules/endstops-probes/guide-endstops.md
`/guide-endstops`

- Create complete pin mapping table for ALL supported boards (V1 and V2 variants)
- Create visual wiring guide with actual photographs
- Create NC vs NO comparison with oscilloscope captures showing actual signals

---

## docs/modules/endstops-probes/zprobe.md
`/zprobe`

- Create V2-specific probe wiring diagrams
- Create visual calibration guide with bed mesh visualizations
- Benchmark probe accuracy differences between V1 and V2
- Create comparison table of supported probe types with performance characteristics

---

## docs/modules/endstops-probes/using-fsrs.md
`/using-fsrs`

- Create FSR installation guide with photographs
- Create FSR vs BLTouch comprehensive comparison table with pros/cons
- Create calibration procedure with visual examples
- Document actual voltage characteristics and thresholds

---

## docs/modules/extruders/extruder.md
`/extruder`

- Create comprehensive V1 to V2 extruder configuration conversion guide
- Create extruder calibration tool/calculator
- Create visual guide for multi-extruder setups with wiring diagrams

---

## docs/modules/extruders/filament-detector.md
`/filament-detector`

- Create detailed hardware assembly guide with photographs
- Create encoder calibration procedure with visual steps
- Test and document compatibility with various encoder types

---

## docs/hardware/pins/lpc1769-pin-usage.md
`/lpc1769-pin-usage`

- Create visual pinout diagram (schematic-quality image)
- Create interactive pin assignment tool
- Create "Available Pins for Custom Use" guide with wiring examples

---

## docs/hardware/pins/lpc4337-pin-usage.md
`/lpc4337-pin-usage`

- Create STM32H7 equivalent page (since LPC4337 is superseded)
- Document complete STM32H745 pin assignments for V2 boards
- Create visual pinout diagrams for V2 Prime and V2 Mini boards

---

## docs/hardware/pins/pin-configuration-for-include.md

- Create comprehensive pin syntax reference with ALL modifiers for both V1 and V2
- Create visual guide showing pin modifier effects
- Document all hardware-specific pin limitations

---

## docs/machine-guides/laser-cutters/blue-box-guide.md
`/blue-box-guide`

- Create complete V2 laser configuration guide
- Create laser safety checklist with regulatory compliance notes
- Create power supply wiring diagrams
- Create step-by-step focusing procedure with images

---

## docs/machine-guides/laser-cutters/bluebox-guide.md
`/bluebox-guide`

- Create comprehensive safety interlock wiring diagrams
- Create LightBurn integration guide with screenshots
- Create material-specific power/speed reference table
- Create ventilation and exhaust setup guide

---

## docs/machine-guides/cnc/cnc-mill-guide.md
`/cnc-mill-guide`

- Create V2 CNC-specific configuration guide
- Create spindle control wiring diagrams for various VFD types
- Create toolpath testing procedures with example G-code

---

## docs/machine-guides/cnc/pcb-milling.md
`/pcb-milling`

- Create isolation routing guide with visual examples
- Create probe Z-height calibration procedure for PCB work
- Create software toolchain guide (Eagle/KiCad to G-code)

---

## docs/meta/syntax.md
`/syntax`

- Create visual cheat sheet for all syntax elements
- Create syntax validation tool
- Create comprehensive example library

---

## docs/getting-started/getting-smoothie.md
`/getting-smoothie`

- Create version selection decision tree
- Create hardware requirement comparison matrix
- Create visual guide to identifying board versions

---

## docs/index.md (homepage)

- Create visual board comparison (V1 variants vs V2 variants)
- Create performance benchmark comparisons
- Create interactive board selector tool
- Update all promotional images to include V2 hardware

---

## docs/hardware/boards/smoothieboard-v2-prime.md
`/smoothieboard-v2-prime`

- Create detailed pinout diagrams
- Create assembly and installation guide with photographs
- Create feature comparison matrix vs other boards (Duet, SKR, etc.)
- Create step-by-step setup wizard/checklist

---

## docs/hardware/boards/smoothieboards-for-include.md

- Create visual board comparison chart with images
- Create decision guide flowchart for board selection
- Create price/performance comparison table
- Create availability and sourcing guide

---

## General Infrastructure

- Create automated V1 to V2 config converter tool
- Create searchable configuration database
- Create interactive wiring diagram builder
- Create comprehensive test suite for configuration validation
- Create video tutorial series for common tasks

---

