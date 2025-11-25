---
permalink: /lpc4337-pin-usage
---

# LPC4337 Pin Usage

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Outdated Design</strong>
  <br><br>
  This page documents an early Smoothie v2 prototype design that used the LPC4337 microcontroller. This design has been superseded - <strong>Smoothie v2 boards now use the STM32H7 microcontroller</strong>. This page is kept for historical reference only.
</sl-alert>
{:/nomarkdown}

This page documents the pin assignments for the LPC4337 microcontroller used in early Smoothie v2 prototypes.

The table below shows how each ARM pin is mapped to GPIO pins and their usage in different board versions.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>For Smoothie v1 Users</strong>
  <br><br>
  If you're using Smoothie v1 with the LPC1769, see the <a href="lpc1769-pin-usage">LPC1769 Pin Usage</a> page instead.
</sl-alert>
{:/nomarkdown}

## Pin Reference Table

| ARM Pin | GPIO Pin | LPCXpresso | v2-proto1 | v2pro-proto1 | Comment |
| ------- | -------- | ---------- | --------- | ------------ | ------- |
| P0_0    | GPIO0_0  | D12/-      | *eth rxd1* | *eth rxd1*   | `ssp1_miso` |
| P0_1    | GPIO0_1  | D11/-      | *eth txen* | *eth txen*   | `ssp1_mosi` |
| P1_0    | GPIO0_4  | D8/-       | *eth led y* | *eth led y* |         |
| P1_1    | GPIO0_8  | -/-        | *boot0*    | *boot0*      | `ssp1_miso`, select boot source, led1, `pwm` |
| P1_2    | GPIO0_9  | -/D9       | *boot1*    | *boot1*      | `ssp0_mosi`, select boot source, led2, `pwm` |
| P1_3    | GPIO0_10 | D9/D12     | spi1 miso  | spi1 miso    | `pwm`, `ssp1_miso` |
| P1_4    | GPIO0_11 |            | spi1 mosi  | spi1 mosi    | `pwm`, `ssp1_mosi` |
| P1_5    | GPIO1_8  |            | spi1 ssel  | spi1 ssel    | `pwm`, `ssp1_ssel` |
| P1_6    | GPIO1_9  |            | *sd cmd*   | *sd cmd*     | `sd_cmd` |
| P1_7    | GPIO1_0  |            | ?          | servo1       | `pwm` |
| P1_8    | GPIO1_1  |            | ?          | servo2       | `pwm` |
| P1_9    | GPIO1_2  |            | *sd dat0*  | *sd dat0*    | `pwm`, `sd_dat0` |
| P1_10   | GPIO1_3  |            | *sd dat1*  | *sd dat1*    | `pwm`, `sd_dat1` |
| P1_11   | GPIO1_4  |            | *sd dat2*  | *sd dat2*    | `pwm`, `sd_dat2` |
| P1_12   | GPIO1_5  |            | *sd dat3*  | *sd dat3*    | `sd_dat3` |
| P1_13   | GPIO1_6  |            | *sd cd*    | *sd cd*      | `uart1-tx`, `sd_cd` |
| P1_14   | GPIO1_7  |            | ?          | fpga ssel    | `uart1-rx` |
| P1_15   | GPIO0_2  |            | *eth rxd0* | *eth rxd0*   | `uart2-tx` |
| P1_16   | GPIO0_3  |            | *eth crs*  | *eth crs*    | `uart2-rx` |
| P1_17   | GPIO0_12 |            | *eth mdio* | *eth mdio*   | `can1-tx` |
| P1_18   | GPIO0_13 |            | *eth txd0* | *eth txd0*   | `can1-rx` |
| P1_19   | -        | D13/-      | *eth ref clk* | *eth ref clk* | `ssp1_sck` |
| P1_20   | GPIO0_15 |            | *eth txd1* | *eth txd1*   | `ssp1_ssel` |
| P2_0    | GPIO5_0  |            | *uart0 txd* | *uart0 txd* | debug uart `uart0-tx` |
| P2_1    | GPIO5_1  |            | *uart0 rxd* | *uart0 rxd* | debug uart `uart0-rx` |
| P2_2    | GPIO5_2  |            | mosfet1    | mosfet1      |         |
| P2_3    | GPIO5_3  |            | i2c1 sda   |              | `i2c1-sda`, `uart3-tx` |
| P2_4    | GPIO5_4  |            | i2c1 scl   |              | `i2c1-scl`, `uart3-rx` |
| P2_5    | GPIO5_5  |            | mosfet2    | mosfet2      |         |
| P2_6    | GPIO5_6  |            | mosfet3    | mosfet3      |         |
| P2_7    | GPIO0_7  |            | *isp*      | *isp*        | `pwm`, bootloader programming button |
| P2_8    | GPIO5_7  |            | *boot2*    | *boot2*      | `pwm`, select boot source, led3 |
| P2_9    | GPIO1_10 |            | *boot3*    | *boot3*      | `pwm`, select boot source, led4 |
| P2_10   | GPIO0_14 |            | uart2 txd  |              | `pwm`, `uart2-tx` |
| P2_11   | GPIO1_11 |            | uart2 rxd  |              | `pwm`, `uart2-rx` |
| P2_12   | GPIO1_12 |            | ?          | servo4       | `pwm` |
| P2_13   | GPIO1_13 |            | ?          | fpga init    |         |
| P3_0    | -        |            | -          | -            | `ssp0_sck` |
| P3_1    | GPIO5_8  |            | can0 rd    |              | `can0-rx` |
| P3_2    | GPIO5_9  |            | can0 td    |              | `can0-tx` |
| P3_3    | -        |            | spi0 sck   |              | `ssp0_sck`, `spi-sck`, `spifi-sck` |
| P3_4    | GPIO1_14 |            | uart1 txd  |              | `uart1-tx`, `spifi-sio3` |
| P3_5    | GPIO1_15 |            | uart1 rxd  |              | `uart1-rx`, `spifi-sio2` |
| P3_6    | GPIO0_6  |            | spi0 miso  |              | `spi-miso`, `spifi-miso`, `ssp0-ssel`, `ssp0_miso` |
| P3_7    | GPIO5_10 |            | spi0 mosi  |              | `spi-mosi`, `spifi-mosi`, `ssp0_miso`, `ssp0_mosi` |
| P3_8    | GPIO5_11 |            | spi0 ssel  |              | `spi-ssel`, `spifi-cs`, `ssp0_mosi`, `ssp0_ssel` |
| P4_0    | GPIO2_0  |            | pause btn  | pause btn    |         |
| P4_1    | GPIO2_1  |            | uart3 txd  |              | `uart3-tx`, `pwm`, `adc` |
| P4_2    | GPIO2_2  |            | uart3 rxd  |              | `uart3-rx`, `pwm` |
| P4_3    | GPIO2_3  |            | pause led  | pause led    | `pwm`, `adc` |
| P4_4    | GPIO2_4  |            | dac        |              | `dac`, `pwm` |
| P4_5    | GPIO2_5  |            | ?          | fpga sck     | `pwm` |
| P4_6    | GPIO2_6  |            | ?          | fpga mosi    | `pwm` |
| P4_7    | -        |            | -          | -            | not connected (no useful function) |
| P4_8    | GPIO5_12 |            | ?          | fpga miso    | `can1-tx` |
| P4_9    | GPIO5_13 |            | ?          | fpga sio2    | `can1-rx` |
| P4_10   | GPIO5_14 |            | ?          | fpga sio3    |         |
| P5_0    | GPIO2_9  |            | es xmin    | es xmin      |         |
| P5_1    | GPIO2_10 |            | es xmax    | es xmax      |         |
| P5_2    | GPIO2_11 |            | es ymin    | es ymin      |         |
| P5_3    | GPIO2_12 |            | es ymax    | es ymax      |         |
| P5_4    | GPIO2_13 |            | es zmin    | es zmin      |         |
| P5_5    | GPIO2_14 |            | es zmax    | es zmax      |         |
| P5_6    | GPIO2_15 |            | ?          | fpga prog    | `uart1-tx` |
| P5_7    | GPIO2_7  |            | ?          | fpga done    | `uart1-rx` |
| P6_0    | -        |            | -          | -            | not connected (no useful function) |
| P6_1    | GPIO3_0  |            | mot1 step  | mot1 step    |         |
| P6_2    | GPIO3_1  |            | mot1 dir   | mot1 dir     |         |
| P6_3    | GPIO3_2  |            | mot2 step  | mot2 step    |         |
| P6_4    | GPIO3_3  |            | mot2 dir   | mot2 dir     | `uart0-rx` |
| P6_5    | GPIO3_4  |            | mot3 step  | mot3 step    | `pwm`, `uart0-rx` |
| P6_6    | GPIO0_5  |            | mosfet4    | mosfet4      |         |
| P6_7    | GPIO5_15 |            | mosfet5    | mosfet5      |         |
| P6_8    | GPIO5_16 |            | mosfet6    | mosfet6      |         |
| P6_9    | GPIO3_5  |            | mot3 dir   | mot3 dir     |         |
| P6_10   | GPIO3_6  |            | mot4 step  | mot4 step    |         |
| P6_11   | GPIO3_7  |            | mot4 dir   | mot4 dir     |         |
| P6_12   | GPIO2_8  |            | pwmout     | pwmout       | `pwm` |
| P7_0    | GPIO3_8  |            | mot5 step  | mot5 step    | `pwm` |
| P7_1    | GPIO3_9  |            | mot5 dir   | mot5 dir     | `pwm`, `uart2-tx` |
| P7_2    | GPIO3_10 |            | mot1 en    | 5v ext enn   | `uart2-rx` |
| P7_3    | GPIO3_11 |            | mot2 en    | host pwr     |         |
| P7_4    | GPIO3_12 |            | mot3 en    | ssr1         | `pwm`, `adc` |
| P7_5    | GPIO3_13 |            | mot4 en    | ssr2         | `pwm`, `adc` |
| P7_6    | GPIO3_14 |            | mot5 en    | servo3       | `pwm` |
| P7_7    | GPIO3_15 |            | *eth mdc*  | *eth mdc*    | `pwm`, `adc` |
| P8_0    | GPIO4_0  |            |            |              |         |
| P8_1    | GPIO4_1  |            |            |              |         |
| P8_2    | GPIO4_2  |            |            |              |         |
| P8_3    | GPIO4_3  |            |            |              |         |
| P8_4    | GPIO4_4  |            |            |              |         |
| P8_5    | GPIO4_5  |            |            |              |         |
| P8_6    | GPIO4_6  |            |            |              |         |
| P8_7    | GPIO4_7  |            |            |              |         |
| P8_8    |          |            |            |              |         |
| P9_0    | GPIO4_12 |            |            |              | `ssp0_ssel` |
| P9_1    | GPIO4_13 |            |            |              | `ssp0_miso` |
| P9_2    | GPIO4_14 |            |            |              | `ssp0_mosi` |
| P9_3    | GPIO4_15 |            |            |              | `uart3_tx` |
| P9_4    | GPIO5_17 |            |            |              | `uart3_rx` |
| P9_5    | GPIO5_18 |            |            |              | `uart0_tx` |
| P9_6    | GPIO4_11 |            |            |              | `uart0_rx` |
| PA_0    |          |            |            |              |         |
| PA_1    | GPIO4_8  |            |            |              | `uart2_tx` |
| PA_2    | GPIO4_9  |            |            |              | `uart2_rx` |
| PA_3    | GPIO4_10 |            |            |              |         |
| PA_4    | GPIO5_19 |            |            |              | `pwm` |
| PB_0    | GPIO5_20 |            |            |              |         |
| PB_1    | GPIO5_21 |            |            |              | `pwm` |
| PB_2    | GPIO5_22 |            |            |              | `pwm` |
| PB_3    | GPIO5_23 |            |            |              | `pwm` |
| PB_4    | GPIO5_24 |            |            |              |         |
| PB_5    | GPIO5_25 |            |            |              |         |
| PB_6    | GPIO5_26 |            |            |              | `adc` |
| PC_0    |          |            |            |              | `adc`, `sd_clk` |
| PC_1    | GPIO6_0  |            |            |              |         |
| PC_2    | GPIO6_1  |            |            |              |         |
| PC_3    | GPIO6_2  |            |            |              | `dac`, `adc` |
| PC_4    | GPIO6_3  |            |            |              |         |
| PC_5    | GPIO6_4  |            |            |              |         |
| PC_6    | GPIO6_5  |            |            |              |         |
| PC_7    | GPIO6_6  |            |            |              |         |
| PC_8    | GPIO6_7  |            |            |              |         |
| PC_9    | GPIO6_8  |            |            |              |         |
| PC_10   | GPIO6_9  |            |            |              |         |
| PC_11   | GPIO6_10 |            |            |              |         |
| PC_12   | GPIO6_11 |            |            |              |         |
| PC_13   | GPIO6_12 |            |            |              | `uart1_tx` |
| PC_14   | GPIO6_13 |            |            |              | `uart1_rx` |
| PD_0    | GPIO6_14 |            |            |              | `pwm` |
| PD_1    | GPIO6_15 |            |            |              |         |
| PD_2    | GPIO6_16 |            |            |              | `pwm` |
| PD_3    | GPIO6_17 |            |            |              | `pwm` |
| PD_4    | GPIO6_18 |            |            |              | `pwm` |
| PD_5    | GPIO6_19 |            |            |              | `pwm` |
| PD_6    | GPIO6_20 |            |            |              | `pwm` |
| PD_7    | GPIO6_21 |            |            |              |         |
| PD_8    | GPIO6_22 |            |            |              |         |
| PD_9    | GPIO6_23 |            |            |              | `pwm` |
| PD_10   | GPIO6_24 |            |            |              |         |
| PD_11   | GPIO6_25 |            |            |              | `pwm` |
| PD_12   | GPIO6_26 |            |            |              | `pwm` |
| PD_13   | GPIO6_27 |            |            |              | `pwm` |
| PD_14   | GPIO6_28 |            |            |              | `pwm` |
| PD_15   | GPIO6_29 |            |            |              | `pwm` |
| PD_16   | GPIO6_30 |            |            |              | `pwm` |
| PE_0    | GPIO7_0  |            |            |              |         |
| PE_1    | GPIO7_1  |            |            |              |         |
| PE_2    | GPIO7_2  |            |            |              |         |
| PE_3    | GPIO7_3  |            |            |              |         |
| PE_4    | GPIO7_4  |            |            |              |         |
| PE_5    | GPIO7_5  |            |            |              | `adc` |
| PE_6    | GPIO7_6  |            |            |              | `adc` |
| PE_7    | GPIO7_7  |            |            |              |         |
| PE_8    | GPIO7_8  |            |            |              |         |
| PE_9    | GPIO7_9  |            |            |              |         |
| PE_10   | GPIO7_10 |            |            |              |         |
| PE_11   | GPIO7_11 |            |            |              |         |
| PE_12   | GPIO7_12 |            |            |              |         |
| PE_13   | GPIO7_13 |            |            |              |         |
| PE_14   | GPIO7_14 |            |            |              |         |
| PE_15   | GPIO7_15 |            |            |              |         |
| PF_0    |          |            |            |              |         |
| PF_1    | GPIO7_16 |            |            |              |         |
| PF_2    | GPIO7_17 |            |            |              |         |
| PF_3    | GPIO7_18 |            |            |              |         |
| PF_4    | GPIO7_19 |            | adc0       | adc0         | `adc` |
| PF_5    | GPIO7_20 |            | adc1       | adc1         | `adc` |
| PF_6    | GPIO7_21 |            | adc2       | adc2         | `adc` |
| PF_7    | GPIO7_22 |            | adc3       | adc3         | `adc` |
| PF_8    | GPIO7_23 |            | adc4       | adc4         | `adc` |
| PF_9    | GPIO7_24 |            | adc5       | adc5         | `adc` |
| PF_10   | GPIO7_25 |            | adc6       | adc6         | `adc` |
| PF_11   | GPIO7_26 |            | adc7       | adc7         | `adc` |

## Notes

### Pin Conventions

Items in *italics* are hardcoded and cannot be easily changed.

The `pwm` capability indicates that the pin supports hardware PWM generation.

### Comparison to LPC1769

The LPC4337 is significantly more powerful than the LPC1769.

Key improvements include:

- More GPIO pins available
- More memory for complex operations
- Additional peripheral interfaces
- Higher clock speeds

## Related Documentation

- [LPC1769 Pin Usage](lpc1769-pin-usage) - For Smoothie v1 boards
- [Smoothieboard](smoothieboard) - Main hardware documentation
