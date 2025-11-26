---
permalink: /smoothieboard-v2-schematic
title: Smoothieboard V2 Prime Schematic Reference
---

# Smoothieboard V2 Prime Schematic Reference

This page provides a complete technical reference for the Smoothieboard V2 Prime hardware, extracted from the KiCad schematics. It covers all major subsystems including the microcontroller, power system, motor drivers, MOSFETs, inputs, and expansion headers.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="file-earmark-code"></sl-icon>
  <strong>Source:</strong> <code>smoothiev2-prime-2660.pdf</code> (KiCad 5.1.9)<br>
  <strong>Board Type:</strong> TMC2660 variant (Board ID 1)<br>
  <strong>Schematic Pages:</strong> 13 sheets
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Related Pages:</strong>
  <a href="/smoothieboard-v2-prime">V2 Prime Specifications</a> |
  <a href="/stm32h7-pin-usage">STM32H7 Pin Usage</a> |
  <a href="/smoothieboard-v2-differences">V1 vs V2 Differences</a>
</sl-alert>
{:/nomarkdown}

---

## Schematic Page Overview

Click on any schematic image to view full size.

### Main Sheet (Page 1)

{::nomarkdown}
<a href="/images/v2-schematic/schematic-page-01.png">
  <img src="/images/v2-schematic/schematic-page-01.png" alt="V2 Prime Main Schematic" style="max-width: 100%; border: 1px solid #444; margin: 1rem 0;"/>
</a>
{:/nomarkdown}

The main sheet contains the STM32H745 microcontroller and top-level connections to all hierarchical blocks.

### Ethernet (Page 2)

{::nomarkdown}
<a href="/images/v2-schematic/schematic-page-02.png">
  <img src="/images/v2-schematic/schematic-page-02.png" alt="Ethernet Schematic" style="max-width: 100%; border: 1px solid #444; margin: 1rem 0;"/>
</a>
{:/nomarkdown}

Ethernet PHY and RJ45 connector with auto-MDIX support.

### MOSFETs (Page 3)

{::nomarkdown}
<a href="/images/v2-schematic/schematic-page-03.png">
  <img src="/images/v2-schematic/schematic-page-03.png" alt="MOSFET Outputs Schematic" style="max-width: 100%; border: 1px solid #444; margin: 1rem 0;"/>
</a>
{:/nomarkdown}

All MOSFET outputs: bed, hotends, fans, and SSR outputs.

### Inputs (Page 4)

{::nomarkdown}
<a href="/images/v2-schematic/schematic-page-04.png">
  <img src="/images/v2-schematic/schematic-page-04.png" alt="Inputs Schematic" style="max-width: 100%; border: 1px solid #444; margin: 1rem 0;"/>
</a>
{:/nomarkdown}

Thermistor inputs, endstops, and probe input with protection circuitry.

### Expansion Headers (Page 5)

{::nomarkdown}
<a href="/images/v2-schematic/schematic-page-05.png">
  <img src="/images/v2-schematic/schematic-page-05.png" alt="Expansion Headers Schematic" style="max-width: 100%; border: 1px solid #444; margin: 1rem 0;"/>
</a>
{:/nomarkdown}

Gadgeteer expansion headers GA through GI.

### Power Supply (Page 6)

{::nomarkdown}
<a href="/images/v2-schematic/schematic-page-06.png">
  <img src="/images/v2-schematic/schematic-page-06.png" alt="Power Supply Schematic" style="max-width: 100%; border: 1px solid #444; margin: 1rem 0;"/>
</a>
{:/nomarkdown}

Main power system: DC-DC converters, voltage regulators, and current limiters.

### Ideal Diode Circuits (Pages 7-9)

{::nomarkdown}
<a href="/images/v2-schematic/schematic-page-07.png">
  <img src="/images/v2-schematic/schematic-page-07.png" alt="Ideal Diode Schematic 1" style="max-width: 32%; border: 1px solid #444; display: inline-block;"/>
</a>
<a href="/images/v2-schematic/schematic-page-08.png">
  <img src="/images/v2-schematic/schematic-page-08.png" alt="Ideal Diode Schematic 2" style="max-width: 32%; border: 1px solid #444; display: inline-block;"/>
</a>
<a href="/images/v2-schematic/schematic-page-09.png">
  <img src="/images/v2-schematic/schematic-page-09.png" alt="Ideal Diode Schematic 3" style="max-width: 32%; border: 1px solid #444; display: inline-block;"/>
</a>
{:/nomarkdown}

Three identical ideal diode circuits for automatic power source selection.

### Motor Drivers (Pages 10-13)

{::nomarkdown}
<a href="/images/v2-schematic/schematic-page-10.png">
  <img src="/images/v2-schematic/schematic-page-10.png" alt="Motor Driver A Schematic" style="max-width: 24%; border: 1px solid #444; display: inline-block;"/>
</a>
<a href="/images/v2-schematic/schematic-page-11.png">
  <img src="/images/v2-schematic/schematic-page-11.png" alt="Motor Driver B Schematic" style="max-width: 24%; border: 1px solid #444; display: inline-block;"/>
</a>
<a href="/images/v2-schematic/schematic-page-12.png">
  <img src="/images/v2-schematic/schematic-page-12.png" alt="Motor Driver C Schematic" style="max-width: 24%; border: 1px solid #444; display: inline-block;"/>
</a>
<a href="/images/v2-schematic/schematic-page-13.png">
  <img src="/images/v2-schematic/schematic-page-13.png" alt="Motor Driver D Schematic" style="max-width: 24%; border: 1px solid #444; display: inline-block;"/>
</a>
{:/nomarkdown}

Four identical TMC2660 stepper motor driver circuits (Alpha, Beta, Gamma, Delta).

---

## 1. Schematic Sheet Structure

| Sheet | File | Description |
|-------|------|-------------|
| 1/13 | `smoothiev2-prime-2660.sch` | Main sheet - MCU, top-level connections |
| 2/13 | `ethernet.sch` | Ethernet PHY and RJ45 connector |
| 3/13 | `mosfets.sch` | MOSFET outputs for heaters/fans |
| 4/13 | `inputs.sch` | Thermistors, endstops, probe inputs |
| 5/13 | `expansion.sch` | Gadgeteer expansion headers GA-GI |
| 6/13 | `power.sch` | Power supply, DC-DC converters |
| 7/13 | `IdealDiode.sch` | Ideal diode circuit (5V regulator) |
| 8/13 | `IdealDiode.sch` | Ideal diode circuit (USB) |
| 9/13 | `IdealDiode.sch` | Ideal diode circuit (external 5V) |
| 10/13 | `driver-2660.sch` | Motor driver A (TMC2660) |
| 11/13 | `driver-2660.sch` | Motor driver B (TMC2660) |
| 12/13 | `driver-2660.sch` | Motor driver C (TMC2660) |
| 13/13 | `driver-2660.sch` | Motor driver D (TMC2660) |

---

## 2. Microcontroller (STM32H745XIHx)

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>STM32H745 MCU</h4></div>
  <a href="/images/v2-schematic/parts/mcu-stm32h745.png">
    <img src="/images/v2-schematic/parts/mcu-stm32h745.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Full STM32H745XIHx BGA265 pinout
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="cpu"></sl-icon>
  <strong>Part:</strong> STM32H745XIHx (Reference Designator: U2)<br>
  <strong>Package:</strong> 265-pin BGA<br>
  <strong>Cores:</strong> Dual-core Cortex-M7 (480MHz) + Cortex-M4 (240MHz)<br>
  <strong>Note:</strong> M4 core currently unused/disabled in firmware
</sl-alert>
{:/nomarkdown}

### 2.1 Key Pin Assignments

For the complete pin assignment table, see [STM32H7 Pin Usage](/stm32h7-pin-usage).

**Motor Driver SPI Bus:**

| Signal | MCU Pin | Function |
|--------|---------|----------|
| MOTSPI_COPI | {::nomarkdown}<pin>PD14</pin>{:/nomarkdown} | SPI MOSI to all drivers |
| MOTSPI_CIPO | {::nomarkdown}<pin>PE4</pin>{:/nomarkdown} | SPI MISO from all drivers |
| MOTSPI_SCK | {::nomarkdown}<pin>PI10</pin>{:/nomarkdown} | SPI clock to all drivers |

**Motor Chip Selects:**

| Driver | MCU Pin | Signal |
|--------|---------|--------|
| Alpha (A) | {::nomarkdown}<pin>PJ2</pin>{:/nomarkdown} | CS_A |
| Beta (B) | {::nomarkdown}<pin>PB12</pin>{:/nomarkdown} | CS_B |
| Gamma (C) | {::nomarkdown}<pin>PJ3</pin>{:/nomarkdown} | CS_C |
| Delta (D) | {::nomarkdown}<pin>PJ4</pin>{:/nomarkdown} | CS_D |

**Motor Step/Direction:**

| Driver | Step Pin | Dir Pin |
|--------|----------|---------|
| Alpha (A) | {::nomarkdown}<pin>PG0</pin>{:/nomarkdown} | {::nomarkdown}<pin>PG1</pin>{:/nomarkdown} |
| Beta (B) | {::nomarkdown}<pin>PF12</pin>{:/nomarkdown} | {::nomarkdown}<pin>PF11</pin>{:/nomarkdown} |
| Gamma (C) | {::nomarkdown}<pin>PE14</pin>{:/nomarkdown} | {::nomarkdown}<pin>PE15</pin>{:/nomarkdown} |
| Delta (D) | {::nomarkdown}<pin>PE10</pin>{:/nomarkdown} | {::nomarkdown}<pin>PE12</pin>{:/nomarkdown} |

**Motor Enable (Shared):**

| Signal | MCU Pin | Function |
|--------|---------|----------|
| MOT_EN | {::nomarkdown}<pin>PH13</pin>{:/nomarkdown} | Shared enable (active low) |

### 2.2 Crystal Oscillators

**High-Speed External (HSE) - 25MHz:**
- Pins: {::nomarkdown}<pin>PH0</pin>{:/nomarkdown} (XTAL_HSE_IN), {::nomarkdown}<pin>PH1</pin>{:/nomarkdown} (XTAL_HSE_OUT)
- Component: Y2 (Crystal)
- Load Capacitors: C65, C66 (5.6pF each)
- Purpose: Main system clock source

**Low-Speed External (LSE) - 32.768kHz:**
- Pins: {::nomarkdown}<pin>PC14</pin>{:/nomarkdown} (XTAL_LSE_IN), {::nomarkdown}<pin>PC15</pin>{:/nomarkdown} (XTAL_LSE_OUT)
- Component: Y3 (Crystal_GND24)
- Purpose: RTC clock source

### 2.3 Debug Interface

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>SWD/JTAG Connector</h4></div>
  <a href="/images/v2-schematic/parts/swd-jtag.png">
    <img src="/images/v2-schematic/parts/swd-jtag.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Standard ARM debug connector (J41)
</div>
{:/nomarkdown}

| Signal | MCU Pin | Function |
|--------|---------|----------|
| SWDIO | {::nomarkdown}<pin>PA13</pin>{:/nomarkdown} | Debug data |
| SWCLK | {::nomarkdown}<pin>PA14</pin>{:/nomarkdown} | Debug clock |
| SWO | {::nomarkdown}<pin>PB3</pin>{:/nomarkdown} | Trace output |
| TDI | {::nomarkdown}<pin>PA15</pin>{:/nomarkdown} | JTAG data in |

### 2.4 Debug UART

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Debug UART (J30)</h4></div>
  <a href="/images/v2-schematic/parts/debug-uart.png">
    <img src="/images/v2-schematic/parts/debug-uart.png" style="width: 400px; height: auto;"/>
  </a><br/>
  3-pin serial debug header
</div>
{:/nomarkdown}

| Pin | Signal | MCU Pin |
|-----|--------|---------|
| 1 | GND | Ground |
| 2 | RX | {::nomarkdown}<pin>PD6</pin>{:/nomarkdown} |
| 3 | TX | {::nomarkdown}<pin>PD5</pin>{:/nomarkdown} |

Baud rate: 115200 8N1

### 2.5 QSPI Flash

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>QSPI Flash (AT25SF081)</h4></div>
  <a href="/images/v2-schematic/parts/qspi-flash.png">
    <img src="/images/v2-schematic/parts/qspi-flash.png" style="width: 400px; height: auto;"/>
  </a><br/>
  8Mbit Quad-SPI flash for firmware storage
</div>
{:/nomarkdown}

| Signal | MCU Pin | Function |
|--------|---------|----------|
| QSPI_IO0 | {::nomarkdown}<pin>PD11</pin>{:/nomarkdown} | Data 0 |
| QSPI_IO1 | {::nomarkdown}<pin>PD12</pin>{:/nomarkdown} | Data 1 |
| QSPI_IO2 | {::nomarkdown}<pin>PE2</pin>{:/nomarkdown} | Data 2 |
| QSPI_IO3 | {::nomarkdown}<pin>PD13</pin>{:/nomarkdown} | Data 3 |
| QSPI_SCK | {::nomarkdown}<pin>PB2</pin>{:/nomarkdown} | Clock |
| QSPI_CS | {::nomarkdown}<pin>PB6</pin>{:/nomarkdown} | Chip select |

### 2.6 MicroSD and Board Detection

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>MicroSD + Board Detection</h4></div>
  <a href="/images/v2-schematic/parts/microsd-board-detect.png">
    <img src="/images/v2-schematic/parts/microsd-board-detect.png" style="width: 400px; height: auto;"/>
  </a><br/>
  SDIO interface and 4-bit board ID detection
</div>
{:/nomarkdown}

**MicroSD (SDIO):** High-speed 4-bit interface (10-25 MB/s) vs V1's SPI (~0.5 MB/s).

**Board Detection:** 4-bit ID via PF3, PF5, PF7, PE10 determines driver variant (TMC2590 vs TMC2660).

---

## 3. Power System

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>5V DC-DC Converter (TPS5430)</h4></div>
  <a href="/images/v2-schematic/parts/power-5v-dcdc.png">
    <img src="/images/v2-schematic/parts/power-5v-dcdc.png" style="width: 400px; height: auto;"/>
  </a><br/>
  VMOT to 5V @ 3A buck converter
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Dual Power Architecture:</strong> The V2 Prime has separate power inputs for motors (Vmot) and MOSFETs (VFET), plus three possible sources for 5V logic power with automatic source selection via ideal diode circuits.
</sl-alert>
{:/nomarkdown}

### 3.1 Power Architecture Overview

```
VMOT (12-24V) ──────┬──► TPS5430 DC-DC ──► 5V (3A) ──┬──► Ideal Diode
                    │                                 │
                    └──► Motor Drivers               └──► MT3410L DC-DC ──► 3.3V (1.2A)

USB 5V ─────────────┬──► MT9700 Current Limit ──► Ideal Diode ──┐
                    │                                            │
                    └──► USB Functions                           ├──► 5V Rail
                                                                 │
External 5V ────────────► MT9700 Current Limit ──► Ideal Diode ──┘
```

### 3.2 Main 5V DC-DC Converter (TPS5430DDA)

| Specification | Value |
|--------------|-------|
| **Reference** | U21 |
| **Input** | VMOT (12-24V, max 36V) |
| **Output** | 5V @ 3A continuous |
| **Type** | Synchronous buck converter |
| **Efficiency** | ~90% |
| **Output Inductor** | L3 (22µH) |
| **Output Capacitors** | C112, C119 (22µF each) |

**Disable Jumper:**
- **JP16:** Cut to disable onboard 5V regulator
- **Location:** Near OSHW logo, top side

### 3.3 3.3V DC-DC Converter (MT3410L)

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>3.3V DC-DC (MT3410L)</h4></div>
  <a href="/images/v2-schematic/parts/power-3v3-dcdc-limiter.png">
    <img src="/images/v2-schematic/parts/power-3v3-dcdc-limiter.png" style="width: 400px; height: auto;"/>
  </a><br/>
  5V to 3.3V @ 1.2A buck converter
</div>
{:/nomarkdown}

| Specification | Value |
|--------------|-------|
| **Reference** | U22 |
| **Input** | 5V |
| **Output** | 3.3V @ 1.2A |
| **Output Inductor** | L4 (2.2µH) |

### 3.4 Current-Limited Outputs

| Output | Component | Current Limit | Purpose |
|--------|-----------|--------------|---------|
| 5V_LIM | U19 (MT9700) | 0.32A | Endstops, expansion |
| 3V3_LIM | U20 (MT9700) | 0.32A | Endstops, expansion |

### 3.5 Ideal Diode Circuits

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Ideal Diode Circuit</h4></div>
  <a href="/images/v2-schematic/parts/ideal-diode.png">
    <img src="/images/v2-schematic/parts/ideal-diode.png" style="width: 400px; height: auto;"/>
  </a><br/>
  MOSFET-based power source selection
</div>
{:/nomarkdown}

Three identical ideal diode circuits (pages 7-9) enable automatic selection between power sources:
- **5V Regulator Output** → 5V rail
- **USB 5V** → 5V rail (current limited)
- **External 5V** → 5V rail (current limited)

Uses SQ3493EV dual N-channel MOSFETs with MBT3906DW1 transistor control.

### 3.6 VMOT Undervoltage Lockout

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>VMOT Undervoltage Detect</h4></div>
  <a href="/images/v2-schematic/parts/power-vmot-uvlo.png">
    <img src="/images/v2-schematic/parts/power-vmot-uvlo.png" style="width: 400px; height: auto;"/>
  </a><br/>
  BD4722G voltage detector for motor power monitoring
</div>
{:/nomarkdown}

The UVLO circuit (U25 BD4722G) monitors VMOT and signals the MCU when voltage drops below safe operating threshold. This prevents motor driver damage during brownout conditions.

### 3.7 External 5V and USB Power

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>External 5V + USB Current Limiting</h4></div>
  <a href="/images/v2-schematic/parts/power-ext-5v-usb.png">
    <img src="/images/v2-schematic/parts/power-ext-5v-usb.png" style="width: 400px; height: auto;"/>
  </a><br/>
  MT9700 current limiters protect external inputs
</div>
{:/nomarkdown}

Both USB 5V and external 5V inputs are protected by MT9700 current limiting switches:
- **USB 5V (U18):** Limited to 1.44A (R63=4.7k)
- **External 5V (J10):** Limited to 0.32A (R65=21.5k)

### 3.8 RTC Backup Battery

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>RTC Backup Battery</h4></div>
  <a href="/images/v2-schematic/parts/power-rtc-backup.png">
    <img src="/images/v2-schematic/parts/power-rtc-backup.png" style="width: 400px; height: auto;"/>
  </a><br/>
  CR2032 battery holder for RTC timekeeping
</div>
{:/nomarkdown}

A CR2032 coin cell (B5817WS holder) maintains RTC time when main power is off.

### 3.9 Power Connectors

| Connector | Type | Pins | Function |
|-----------|------|------|----------|
| J5 | Screw Terminal | 4 | VMOT input |
| J6 | Screw Terminal | 4 | VFET input 1 |
| J7 | Screw Terminal | 4 | VFET input 2 |
| J8 | Screw Terminal | 4 | VMOT input (alternate) |
| J10 | Conn_01x02 | 2 | External 5V input |

### 3.10 Complete Power System

{::nomarkdown}
<div class='panel panel-default' style='width:100%;padding:10px;margin:1rem 0'>
  <div class='panel-heading'><h4 class='panel-title'>Full Power System Schematic</h4></div>
  <a href="/images/v2-schematic/parts/power-full.png">
    <img src="/images/v2-schematic/parts/power-full.png" style="width: 100%; height: auto;"/>
  </a><br/>
  Complete power supply schematic showing all regulators, current limiters, and power distribution
</div>
{:/nomarkdown}

---

## 4. Motor Drivers (TMC2660)

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Motor Driver Blocks (Main Sheet)</h4></div>
  <a href="/images/v2-schematic/parts/motor-drivers-sheet.png">
    <img src="/images/v2-schematic/parts/motor-drivers-sheet.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Hierarchical block showing drivers A/B with shared SPI bus
</div>
{:/nomarkdown}

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Motor Driver Blocks C/D</h4></div>
  <a href="/images/v2-schematic/parts/motor-drivers-sheet-2.png">
    <img src="/images/v2-schematic/parts/motor-drivers-sheet-2.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Hierarchical block showing drivers C/D (Gamma/Delta)
</div>
{:/nomarkdown}

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>TMC2660 Driver Circuit</h4></div>
  <a href="/images/v2-schematic/parts/motor-driver-tmc2660.png">
    <img src="/images/v2-schematic/parts/motor-driver-tmc2660.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Each of the 4 motor drivers uses this circuit
</div>
{:/nomarkdown}

### 4.1 Driver Overview

| Driver | Reference | Sheet | Axis |
|--------|-----------|-------|------|
| A | U3 | 10/13 | Alpha (X) |
| B | U5 | 11/13 | Beta (Y) |
| C | U6 | 12/13 | Gamma (Z) |
| D | U7 | 13/13 | Delta (E) |

### 4.2 TMC2660 Specifications

| Specification | Value |
|--------------|-------|
| **Package** | 44-pin QFN |
| **Motor Current** | Up to 2.8A peak (1.2-2.2A ideal) |
| **Motor Voltage** | Up to 30V |
| **Microstepping** | Up to 1/256 |
| **Interface** | SPI for configuration |

**Features:**
- StealthChop2 (silent operation)
- SpreadCycle (high performance)
- StallGuard4 (sensorless homing)
- CoolStep (dynamic current)

### 4.3 Current Sense Resistors

| Driver | Resistors | Notes |
|--------|-----------|-------|
| A | R17, R18 | Set at assembly |
| B | R21, R22 | Set at assembly |
| C | R25, R26 | Set at assembly |
| D | R29, R30 | Set at assembly |

**Current Calculation:**
- Peak current = 0.165V / R_sense
- For 0.1Ω: I_peak = 1.65A
- For 0.05Ω: I_peak = 3.3A

### 4.4 StallGuard Outputs

| Driver | MCU Pin | Signal |
|--------|---------|--------|
| A | {::nomarkdown}<pin>PK0</pin>{:/nomarkdown} | SG_TST_A |
| B | {::nomarkdown}<pin>PK1</pin>{:/nomarkdown} | SG_TST_B |
| C | {::nomarkdown}<pin>PK2</pin>{:/nomarkdown} | SG_TST_C |
| D | {::nomarkdown}<pin>PK3</pin>{:/nomarkdown} | SG_TST_D |

---

## 5. MOSFET Outputs

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>MOSFETs Block (Main Sheet)</h4></div>
  <a href="/images/v2-schematic/parts/mosfets-sheet.png">
    <img src="/images/v2-schematic/parts/mosfets-sheet.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Hierarchical block showing all MOSFET output signals
</div>
{:/nomarkdown}

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>MOSFET Gate Driver (74HCT541)</h4></div>
  <a href="/images/v2-schematic/parts/mosfet-buffer-ssr.png">
    <img src="/images/v2-schematic/parts/mosfet-buffer-ssr.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Buffer IC with master output enable control
</div>
{:/nomarkdown}

### 5.1 Output Summary

| Output | MOSFET | Current | LED | MCU Signal |
|--------|--------|---------|-----|------------|
| Bed | 2x WSD30L40DN (parallel) | ~10-12A | D25 | BED_G |
| Hotend A | WSD3066DN | ~5A | D26 | HEA_G ({::nomarkdown}<pin>PJ6</pin>{:/nomarkdown}) |
| Hotend B | WSD3066DN | ~5A | D27 | HEB_G ({::nomarkdown}<pin>PJ7</pin>{:/nomarkdown}) |
| Fan 1 | WSD3066DN | ~5A | D28 | FAN1_G ({::nomarkdown}<pin>PJ8</pin>{:/nomarkdown}) |
| Fan 2 | WSD3066DN | ~5A | D29, D30 | FAN2_G ({::nomarkdown}<pin>PJ9</pin>{:/nomarkdown}) |
| SSR1 | CJ2301 S1 | Signal | D24 | {::nomarkdown}<pin>PC0</pin>{:/nomarkdown} |
| SSR2 | CJ2301 S1 | Signal | - | {::nomarkdown}<pin>PJ11</pin>{:/nomarkdown} |
| ExtraFET | Via buffer | - | - | {::nomarkdown}<pin>PH2</pin>{:/nomarkdown} |

### 5.2 Safety System

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Safety Cutoff Circuit</h4></div>
  <a href="/images/v2-schematic/parts/mosfet-outputs.png">
    <img src="/images/v2-schematic/parts/mosfet-outputs.png" style="width: 400px; height: auto;"/>
  </a><br/>
  High-side PFET cutoff for hotends and fans
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="shield-check"></sl-icon>
  <strong>High-Side PFET Cutoff:</strong> A P-channel MOSFET (Q26) can instantly cut power to all 4 low-current FETs (hotends and fans). The bed output is intentionally independent - a thermal runaway on the hotend shouldn't kill the bed.
</sl-alert>
{:/nomarkdown}

**74HCT541 Buffer (U9):**
- Buffers MCU signals to MOSFET gates
- OUTPUTENABLE signal provides master control ({::nomarkdown}<pin>PJ5</pin>{:/nomarkdown})

### 5.3 VFET Voltage Monitoring

| Signal | Components | Divider Ratio |
|--------|------------|---------------|
| FETSENSE | R69 (100k), R70 (1k), R71 (10k) | 11:1 |

### 5.4 Complete MOSFET Schematic

{::nomarkdown}
<div class='panel panel-default' style='width:100%;padding:10px;margin:1rem 0'>
  <div class='panel-heading'><h4 class='panel-title'>Full MOSFET Output Schematic</h4></div>
  <a href="/images/v2-schematic/parts/mosfets-full.png">
    <img src="/images/v2-schematic/parts/mosfets-full.png" style="width: 100%; height: auto;"/>
  </a><br/>
  Complete MOSFET output schematic showing bed, hotends, fans, SSR outputs, and safety cutoff
</div>
{:/nomarkdown}

---

## 6. Inputs

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Inputs Block (Main Sheet)</h4></div>
  <a href="/images/v2-schematic/parts/inputs-sheet.png">
    <img src="/images/v2-schematic/parts/inputs-sheet.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Hierarchical block showing all input signals
</div>
{:/nomarkdown}

### 6.1 Thermistor Inputs

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Thermistor Buffer Circuit</h4></div>
  <a href="/images/v2-schematic/parts/inputs-full.png">
    <img src="/images/v2-schematic/parts/inputs-full.png" style="width: 400px; height: auto;"/>
  </a><br/>
  4 buffered thermistor inputs via LMV324 op-amp
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="thermometer-half"></sl-icon>
  <strong>Buffered Inputs:</strong> Thermistor inputs are buffered through an LMV324 quad op-amp configured as voltage followers, providing better noise immunity and ESD protection than V1.
</sl-alert>
{:/nomarkdown}

| Channel | Op-Amp | Connector | MCU Pin | ADC |
|---------|--------|-----------|---------|-----|
| T1 | U12A | J25 | {::nomarkdown}<raw>PA0_C</raw>{:/nomarkdown} | ADC1_INP16 |
| T2 | U12B | J24 | {::nomarkdown}<raw>PA1_C</raw>{:/nomarkdown} | ADC1_INP17 |
| T3 | U12C | J26 | {::nomarkdown}<raw>PC2_C</raw>{:/nomarkdown} | ADC3_INP0 |
| T4 | U12D | J27-J29 | {::nomarkdown}<raw>PC3_C</raw>{:/nomarkdown} | ADC3_INP1 |

*Note: The `_C` suffix pins are STM32 hardware names for dedicated analog inputs. In config files, use ADC format: `ADC1_0`, `ADC1_1`, `ADC1_2`, `ADC1_3`*

### 6.2 Endstop Inputs

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Endstop Input Circuit</h4></div>
  <a href="/images/v2-schematic/parts/inputs-full.png">
    <img src="/images/v2-schematic/parts/inputs-full.png" style="width: 400px; height: auto;"/>
  </a><br/>
  6 endstops with ESD protection and pull configuration
</div>
{:/nomarkdown}

| Endstop | MCU Pin | Connector |
|---------|---------|-----------|
| X Min | {::nomarkdown}<pin>PG10</pin>{:/nomarkdown} | - |
| X Max | {::nomarkdown}<pin>PG9</pin>{:/nomarkdown} | - |
| Y Min | {::nomarkdown}<pin>PG11</pin>{:/nomarkdown} | - |
| Y Max | {::nomarkdown}<pin>PG12</pin>{:/nomarkdown} | - |
| Z Min | {::nomarkdown}<pin>PG13</pin>{:/nomarkdown} | - |
| Z Max | {::nomarkdown}<pin>PG14</pin>{:/nomarkdown} | - |

All endstops are buffered and ESD protected.

### 6.3 Probe Input

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Probe Input Circuit</h4></div>
  <a href="/images/v2-schematic/parts/inputs-full.png">
    <img src="/images/v2-schematic/parts/inputs-full.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Comparator-based probe input with JP7 voltage range selector
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>JP7 CRITICAL:</strong> The probe input voltage range is controlled by jumper JP7 on the bottom side near the probe input.
  <ul>
    <li><strong>JP7 Intact (default):</strong> For probes &lt;5V (BLTouch, mechanical switches)</li>
    <li><strong>JP7 Cut:</strong> REQUIRED for probes &gt;5V (inductive, capacitive, up to 45V)</li>
  </ul>
  <strong>Using a &gt;5V probe without cutting JP7 will damage the board!</strong>
</sl-alert>
{:/nomarkdown}

| Specification | Value |
|--------------|-------|
| **MCU Pin** | {::nomarkdown}<pin>PB0</pin>{:/nomarkdown} |
| **Input Type** | Comparator-based |
| **Voltage Range** | 3-45V (configurable via JP7) |
| **Protection** | ESD + buffering + comparator |

---

## 7. Expansion Headers (Gadgeteer)

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Expansion Headers Schematic</h4></div>
  <a href="/images/v2-schematic/parts/expansion-headers.png">
    <img src="/images/v2-schematic/parts/expansion-headers.png" style="width: 400px; height: auto;"/>
  </a><br/>
  9 Gadgeteer-style 10-pin expansion headers
</div>
{:/nomarkdown}

### 7.1 Header Overview

| Header | Pins 3-9 Functions | Special Features |
|--------|-------------------|------------------|
| GA | GPIO | Motor SPI, encoder |
| GB | GPIO | General GPIO |
| GC | GPIO | General GPIO |
| GD | UART4 (PD0 RX, PD1 TX), GPIO | Serial communication |
| GE | TIM15 PWM (PE5 CH1, PE6 CH2), GPIO | PWM outputs |
| GF | GPIO | General GPIO |
| GG | I2C4 (PF14 SCL, PF15 SDA), GPIO | I2C bus |
| GH | ADC capable, GPIO | Analog inputs |
| GI | GPIO | General GPIO |

### 7.2 Standard Pinout (All Headers)

| Pin | Function |
|-----|----------|
| 1-7 | GPIO (varies by header) |
| 8 | 5V |
| 9 | 3.3V |
| 10 | GND |

### 7.3 MCU-Side Connections

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Expansion Headers MCU Side</h4></div>
  <a href="/images/v2-schematic/parts/expansion-headers-mcu.png">
    <img src="/images/v2-schematic/parts/expansion-headers-mcu.png" style="width: 400px; height: auto;"/>
  </a><br/>
  MCU pin assignments for all expansion headers
</div>
{:/nomarkdown}

The expansion headers connect to dedicated GPIO banks on the MCU, with some headers providing special peripheral functions:
- **GD:** UART4 for serial communication
- **GE:** TIM15 for PWM output
- **GG:** I2C4 for sensor/display buses
- **GH:** ADC channels for analog input

---

## 8. USB

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>USB Host + Device Circuit</h4></div>
  <a href="/images/v2-schematic/parts/usb-host-device.png">
    <img src="/images/v2-schematic/parts/usb-host-device.png" style="width: 400px; height: auto;"/>
  </a><br/>
  USB-B device and SD card interface
</div>
{:/nomarkdown}

### 8.1 USB Device

| Signal | MCU Pin |
|--------|---------|
| USB_DEV_D- | {::nomarkdown}<pin>PA11</pin>{:/nomarkdown} |
| USB_DEV_D+ | {::nomarkdown}<pin>PA12</pin>{:/nomarkdown} |

### 8.2 USB Host (Hardware Present)

| Signal | MCU Pin |
|--------|---------|
| USB_HOST_D- | {::nomarkdown}<pin>PB15</pin>{:/nomarkdown} |
| USB_HOST_D+ | {::nomarkdown}<pin>PB14</pin>{:/nomarkdown} |
| USB_PWR_ON | {::nomarkdown}<pin>PB13</pin>{:/nomarkdown} |

---

## 9. Ethernet

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Ethernet Block (Main Sheet)</h4></div>
  <a href="/images/v2-schematic/parts/ethernet-sheet.png">
    <img src="/images/v2-schematic/parts/ethernet-sheet.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Hierarchical block showing Ethernet signals
</div>
{:/nomarkdown}

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Ethernet PHY (LAN8720A)</h4></div>
  <a href="/images/v2-schematic/parts/ethernet-phy.png">
    <img src="/images/v2-schematic/parts/ethernet-phy.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Complete Ethernet interface with integrated magnetics RJ45
</div>
{:/nomarkdown}

### 9.1 LAN8720A PHY

| Specification | Value |
|--------------|-------|
| **Part** | LAN8720A |
| **Interface** | RMII (Reduced MII) |
| **Speed** | 10/100 Mbps |
| **Features** | Auto-MDIX, Auto-negotiation |

### 9.2 RMII Signals

| Signal | MCU Pin | Function |
|--------|---------|----------|
| ETH_TXD0 | {::nomarkdown}<pin>PG13</pin>{:/nomarkdown} | Transmit data 0 |
| ETH_TXD1 | {::nomarkdown}<pin>PG12</pin>{:/nomarkdown} | Transmit data 1 |
| ETH_TXEN | {::nomarkdown}<pin>PG11</pin>{:/nomarkdown} | Transmit enable |
| ETH_RXD0 | {::nomarkdown}<pin>PC4</pin>{:/nomarkdown} | Receive data 0 |
| ETH_RXD1 | {::nomarkdown}<pin>PC5</pin>{:/nomarkdown} | Receive data 1 |
| ETH_CRSDV | {::nomarkdown}<pin>PA7</pin>{:/nomarkdown} | Carrier sense/data valid |
| ETH_MDIO | {::nomarkdown}<pin>PA2</pin>{:/nomarkdown} | Management data I/O |
| ETH_MDC | {::nomarkdown}<pin>PC1</pin>{:/nomarkdown} | Management data clock |
| ETH_REFCLK | {::nomarkdown}<pin>PA1</pin>{:/nomarkdown} | 50MHz reference clock |

### 9.3 RJ45 Connector

The board uses an RJ45 connector with integrated magnetics (HR911105A), including link and activity LEDs.

---

## 10. Board Detection

The board automatically detects its type via 4 board ID pins:

| Pin | MCU Pin | Function |
|-----|---------|----------|
| BDET_PF3 | {::nomarkdown}<pin>PF3</pin>{:/nomarkdown} | Board detect bit 0 |
| BDET_PF5 | {::nomarkdown}<pin>PF5</pin>{:/nomarkdown} | Board detect bit 1 |
| BDET_PF7 | {::nomarkdown}<pin>PF7</pin>{:/nomarkdown} | Board detect bit 2 |
| BDET_PE10 | {::nomarkdown}<pin>PE10</pin>{:/nomarkdown} | Board detect bit 3 |

- **Board ID 0:** TMC2590 drivers
- **Board ID 1:** TMC2660 drivers

---

## 10. LED Indicators

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Debug LED Circuit</h4></div>
  <a href="/images/v2-schematic/parts/leds.png">
    <img src="/images/v2-schematic/parts/leds.png" style="width: 400px; height: auto;"/>
  </a><br/>
  4 debug LEDs showing boot progress
</div>
{:/nomarkdown}

### 10.1 Debug LEDs

| LED | MCU Pin | Phase |
|-----|---------|-------|
| ILED1 | {::nomarkdown}<pin>PJ14</pin>{:/nomarkdown} | Phase 4 |
| ILED2 | {::nomarkdown}<pin>PJ13</pin>{:/nomarkdown} | Phase 3 |
| ILED3 | {::nomarkdown}<pin>PJ12</pin>{:/nomarkdown} | Phase 2 |
| ILED4 | {::nomarkdown}<pin>PJ15</pin>{:/nomarkdown} | Phase 1 |

**Boot Sequence:**
1. LED 4: HAL, UART, RTC, board ID
2. LED 3: Tickers creation
3. LED 2: Module configuration
4. LED 1: Ticker startup, ADC
5. All on: Boot complete

### 10.2 Other LEDs

| LED | Function |
|-----|----------|
| MSD LED | Mass Storage mode ({::nomarkdown}<pin>PI0</pin>{:/nomarkdown}) |
| Vmot LED | Motor power present |
| Vfet LED | MOSFET power present |
| 3.3V LED | Logic power present |
| Per-MOSFET LEDs | Output state |

---

## 12. Mounting Holes

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>PCB Mounting Holes</h4></div>
  <a href="/images/v2-schematic/parts/mounting-holes.png">
    <img src="/images/v2-schematic/parts/mounting-holes.png" style="width: 400px; height: auto;"/>
  </a><br/>
  4 mounting holes (H1-H4) with grounding pads
</div>
{:/nomarkdown}

The board includes four M3 mounting holes at standard locations. Holes H3 and H4 include grounding pads for chassis connection.

---

## Related Pages

- [Smoothieboard V2 Prime](/smoothieboard-v2-prime) - Technical specifications
- [STM32H7 Pin Usage](/stm32h7-pin-usage) - Complete pin assignments
- [Smoothieboard V2 Differences](/smoothieboard-v2-differences) - V1 vs V2 comparison
- [Pin Configuration](/pin-configuration) - How to configure pins

---

*Last updated: November 2025*
