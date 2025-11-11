---
permalink: /lpc1769-pin-usage-1-5
---


# LPC1769 Pin Usage 1.5

This page documents the pin assignments for the LPC1769 microcontroller on Smoothieboard version 1.5.

It includes comparisons with version 1.0, as well as Edison and FPGA pin configurations.

## Smoothieboard 1.0 vs 1.5

| ARM Pin | mBed Pin | LPCXpresso Pin | Smoothieboard 1.0 | Smoothieboard 1.5 (Proposed) | Comment |
| ------- | -------- | -------------- | ----------------- | ---------------------------- | ------- |
| P0.0    | P9       | 9              | i2c1 sda          | i2c1 sda                     | All: Internal I2C bus. Used for digipots and port expander. |
| P0.1    | P10      | 10             | i2c1 scl          | i2c1 scl                     | All: Internal I2C bus. Used for digipots and port expander. |
| P0.2    | USBTX    | 21             | `uart0 txd`       | `uart0 txd`                  | All: Used for ISP programming of the bootloader and for debugging. |
| P0.3    | USBRX    | 22             | `uart0 rxd`       | `uart0 rxd`                  | All: Used for ISP programming of the bootloader and for debugging. |
| P0.4    | P30      | 38             | alpha_en_pin      | **spare**                    | 1.5: recommended for encoder <br> *Note: also is rs485 rd2* |
| P0.5    | P29      | 39             | alpha_dir_pin     | **spare**                    | 1.5: recommended for encoder <br> *Note: also is rs485 td2* |
| P0.6    | P8       | 8              | `spi1 ssel`       | `spi1 ssel`                  | All: sdcard |
| P0.7    | P7       | 7              | `spi1 sck`        | `spi1 sck`                   | All: sdcard |
| P0.8    | P6       | 6              | `spi1 miso`       | `spi1 miso`                  | All: sdcard |
| P0.9    | P5       | 5              | `spi1 mosi`       | `spi1 mosi`                  | All: sdcard |
| P0.10   | P28      | 40             | beta_en_pin       | **spare** <br> uart1 txd     | 1.5: connected to edison uart1 rxd <br> *Note: also i2c2 sda* |
| P0.11   | P27      | 41             | beta_dir_pin      | **spare** <br> uart1 rxd     | 1.5: connected to edison uart1 txd <br> *Note: also i2c2 scl* |
| ...     | ...      | ...            | ...               | ...                          | ... |

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> The <em>italicized</em> pins are hardcoded and would need to be changed in the source code (<pin>0.2</pin>, <pin>0.3</pin>, <pin>0.6</pin> - <pin>0.9</pin>, <pin>0.29</pin>, <pin>0.30</pin>, <pin>2.9</pin>, <pin>2.10</pin>). The rest are soft configurable in config.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="bookmark"></sl-icon>
  <strong>v1.5 Changes:</strong> The <strong>blue</strong> tagged pins have had their function changed for Smoothieboard v1.5
</sl-alert>
{:/nomarkdown}

## Edison Pin Usage

| Chip Pin | Module Pin | Breakout Pin | Arduino Pin | Smoothieboard 1.5 | Comment |
| -------- | ---------- | ------------ | ----------- | ----------------- | ------- |
| GP109    | 55         | J17.11       |             | spi5 sck          |         |
| GP110    | 53         | J18.10       |             | spi5 ssel a       |         |
| GP111    | 51         | J17.10       |             | spi5 ssel b       |         |
| ...      | ...        | ...          | ...         | ...               | ...     |

## FPGA Pin Usage

| FPGA Pin | Papilio Pin (One/Pro/Duo) | Zpuino Pin | Smoothieboard 1.5 | Comment |
| -------- | -------------------------- | ---------- | ----------------- | ------- |
| B1.40P   | BH3                        | P62        | mcu clkout        |         |
| B1.40N   | osc in                     | -          | osc in            |         |
| B2.1P    |                            |            | spi0 sck          | main fpga spi slave port |
| ...      | ...                        | ...        | ...               | ...     |

## Summary

Version 1.5 introduces several changes and optimizations compared to version 1.0.

### New Functions in v1.5

The following new functions are available in version 1.5:

- DAC (Digital-to-Analog Converter)
- 5V PWM output
- Edison UART interface
- 2 servo outputs
- Optional RS485 (not populated by default, pins free)

### Pin Allocation Details

The pin allocation for version 1.5 uses advanced techniques to maximize available functionality:

- The 5 enable pins will go on an 8-pin I2C IO expander (PCA9554B)
- MS1, MS2, and RESET/SLEEP stepper pins will have pull-ups to expander pins
- Expander pins unassigned: 0
- MCU pins spared without FPGA: 2
- MCU pins spared without Edison: 2
- MCU pins unassigned: 0
- Functions unassigned: 0

### Display Support

For RRD display support, it is recommended that:

- RS485 pins be used for encoder
- Two FPGA pins be used for buttons

### Compatibility Notes

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Compatibility:</strong> This configuration currently appears to be 1 pin short of full backwards compatibility with v1.0. Balance: 0 MCU pins remaining.
</sl-alert>
{:/nomarkdown}

## Related Documentation

- [LPC1769 Pin Usage](lpc1769-pin-usage) - General pin usage documentation
- [Smoothieboard](smoothieboard) - Main Smoothieboard documentation
- [Pinout](pinout) - Visual pinout diagrams
