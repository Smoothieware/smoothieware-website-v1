
# LPC1769 Pin Usage 1.5

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

**NOTE:** The *italicized* pins are hardcoded and would need to be changed in the source code (P0.2, P0.3, P0.6 - P0.9, P0.29, P0.30, P2.9, P2.10). The rest are soft configurable in config.
**v1.5 NOTES:** The **blue** tagged pins have had their function changed for Smoothieboard v1.5

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

- 1.5 new functions: dac, 5v pwm out, edison uart, 2 servos; optional function (not populated and pins free by default): rs485
- the 5 enable pins will go on an 8 pin i2c io expander (PCA9554B); MS1, MS2, and RESET/SLEEP stepper pins will have pull-ups to expander pins
- expander pins unassigned: 0
- mcu pins spared without fpga: 2
- mcu pins spared without edison: 2
- mcu pins unassigned: 0
- functions unassigned: 0
- for rrd display support recommended that rs485 pins be used for encoder and two fpga pins be used for buttons
- balance: 0 mcu pins remaining
- I'm pretty sure this is currently 1 pin short of full backwards compatibility
