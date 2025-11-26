---
permalink: /stm32h7-pin-usage
---


# STM32H745 Pin Usage (V2 Prime)

This page documents all pin assignments for the STM32H745XIHx microcontroller on Smoothieboard V2 Prime.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="cpu"></sl-icon>
  This comprehensive reference shows how every pin on the STM32H745 is assigned on Smoothieboard V2 Prime (TMC2660 variant). Use this to identify available pins for custom functionality via the Gadgeteer expansion headers.
</sl-alert>
{:/nomarkdown}

## Pin List

The following table shows all pin assignments on the STM32H745XIHx microcontroller:

| STM32 Pin | Smoothie Pin | BGA Position | Assignment | Comment |
| --------- | ------------ | ------------ | ---------- | ------- |
| <raw>PA0</raw> | {::nomarkdown}<pin>PA0</pin>{:/nomarkdown} | <raw>N5</raw> | GPIO | General purpose |
| <raw>PA0_C</raw> | {::nomarkdown}<pin>ADC1_0</pin>{:/nomarkdown} | <raw>N5</raw> | Board Temp (T4) | Config: `ADC1_0`, buffered via LMV324 |
| <raw>PA1</raw> | {::nomarkdown}<pin>PA1</pin>{:/nomarkdown} | <raw>N4</raw> | ETH_REFCLK | 50MHz Ethernet reference clock |
| <raw>PF11</raw> | {::nomarkdown}<pin>ADC1_1</pin>{:/nomarkdown} | <raw>P5</raw> | Thermistor 1 (T1) | Config: `ADC1_1`, buffered via LMV324 |
| <raw>PF12</raw> | {::nomarkdown}<pin>ADC1_2</pin>{:/nomarkdown} | <raw>R7</raw> | Thermistor 2 (T2) | Config: `ADC1_2`, buffered via LMV324 |
| <raw>PA2</raw> | {::nomarkdown}<pin>PA2</pin>{:/nomarkdown} | <raw>N3</raw> | ETH_MDIO | Ethernet management data I/O |
| <raw>PA3</raw> | {::nomarkdown}<pin>PA3</pin>{:/nomarkdown} | <raw>U2</raw> | Expansion GH | ADC1_CH15 available |
| <raw>PA4</raw> | {::nomarkdown}<pin>PA4</pin>{:/nomarkdown} | <raw>U3</raw> | I2C2_SCL | User I2C bus clock |
| <raw>PA5</raw> | {::nomarkdown}<pin>PA5</pin>{:/nomarkdown} | <raw>T3</raw> | Expansion GH | DAC1_OUT2 available |
| <raw>PA6</raw> | {::nomarkdown}<pin>PA6</pin>{:/nomarkdown} | <raw>R3</raw> | Expansion GH | ADC1_CH3 available |
| <raw>PA7</raw> | {::nomarkdown}<pin>PA7</pin>{:/nomarkdown} | <raw>R5</raw> | ETH_CRSDV | Ethernet carrier sense/data valid |
| <raw>PA8</raw> | {::nomarkdown}<pin>PA8</pin>{:/nomarkdown} | <raw>E15</raw> | Expansion GH | GPIO |
| <raw>PA9</raw> | {::nomarkdown}<pin>PA9</pin>{:/nomarkdown} | <raw>D15</raw> | Expansion GH | GPIO |
| <raw>PA10</raw> | {::nomarkdown}<pin>PA10</pin>{:/nomarkdown} | <raw>D14</raw> | Expansion GI | GPIO |
| <raw>PA11</raw> | {::nomarkdown}<pin>PA11</pin>{:/nomarkdown} | <raw>E17</raw> | USB_DEV_D- | USB device data minus |
| <raw>PA12</raw> | {::nomarkdown}<pin>PA12</pin>{:/nomarkdown} | <raw>E16</raw> | USB_DEV_D+ | USB device data plus |
| <raw>PA13</raw> | {::nomarkdown}<pin>PA13</pin>{:/nomarkdown} | <raw>C15</raw> | SWDIO | Debug data (hardcoded) |
| <raw>PA14</raw> | {::nomarkdown}<pin>PA14</pin>{:/nomarkdown} | <raw>B14</raw> | SWCLK | Debug clock (hardcoded) |
| <raw>PA15</raw> | {::nomarkdown}<pin>PA15</pin>{:/nomarkdown} | <raw>A14</raw> | TDI | JTAG data in |
| <raw>PB0</raw> | {::nomarkdown}<pin>PB0</pin>{:/nomarkdown} | <raw>U5</raw> | PROBE | Probe input via comparator |
| <raw>PB1</raw> | {::nomarkdown}<pin>PB1</pin>{:/nomarkdown} | <raw>T5</raw> | I2C2_SDA | User I2C bus data |
| <raw>PB2</raw> | {::nomarkdown}<pin>PB2</pin>{:/nomarkdown} | <raw>R6</raw> | QSPI_SCK | QSPI flash clock |
| <raw>PB3</raw> | {::nomarkdown}<pin>PB3</pin>{:/nomarkdown} | <raw>C6</raw> | SPI1_SCK / SWO | User SPI clock / trace output |
| <raw>PB4</raw> | {::nomarkdown}<pin>PB4</pin>{:/nomarkdown} | <raw>B7</raw> | SPI1_MISO | User SPI data in |
| <raw>PB5</raw> | {::nomarkdown}<pin>PB5</pin>{:/nomarkdown} | <raw>A5</raw> | SPI1_MOSI | User SPI data out |
| <raw>PB6</raw> | {::nomarkdown}<pin>PB6</pin>{:/nomarkdown} | <raw>B5</raw> | QSPI_CS | QSPI flash chip select |
| <raw>PB7</raw> | {::nomarkdown}<pin>PB7</pin>{:/nomarkdown} | <raw>C5</raw> | GPIO | General purpose |
| <raw>PB8</raw> | {::nomarkdown}<pin>PB8</pin>{:/nomarkdown} | <raw>D5</raw> | GPIO | General purpose |
| <raw>PB9</raw> | {::nomarkdown}<pin>PB9</pin>{:/nomarkdown} | <raw>D4</raw> | GPIO | General purpose |
| <raw>PB10</raw> | {::nomarkdown}<pin>PB10</pin>{:/nomarkdown} | <raw>P11</raw> | Expansion GI | GPIO |
| <raw>PB11</raw> | {::nomarkdown}<pin>PB11</pin>{:/nomarkdown} | <raw>P12</raw> | Expansion GI | GPIO |
| <raw>PB12</raw> | {::nomarkdown}<pin>PB12</pin>{:/nomarkdown} | <raw>T14</raw> | Motor B CS | TMC2660 chip select |
| <raw>PB13</raw> | {::nomarkdown}<pin>PB13</pin>{:/nomarkdown} | <raw>U14</raw> | USB_PWR_ON | USB host power control |
| <raw>PB14</raw> | {::nomarkdown}<pin>PB14</pin>{:/nomarkdown} | <raw>U15</raw> | USB_HOST_D+ | USB host data plus |
| <raw>PB15</raw> | {::nomarkdown}<pin>PB15</pin>{:/nomarkdown} | <raw>T15</raw> | USB_HOST_D- | USB host data minus |
| <raw>PC0</raw> | {::nomarkdown}<pin>PC0</pin>{:/nomarkdown} | <raw>L2</raw> | SSR1 | Solid state relay output 1 |
| <raw>PC1</raw> | {::nomarkdown}<pin>PC1</pin>{:/nomarkdown} | <raw>M2</raw> | ETH_MDC | Ethernet management clock |
| <raw>PC2</raw> | {::nomarkdown}<pin>PC2</pin>{:/nomarkdown} | <raw>M3</raw> | Expansion (GH) | ADC1_4 available as `ADC1_4` |
| <raw>PC3</raw> | {::nomarkdown}<pin>PC3</pin>{:/nomarkdown} | <raw>M4</raw> | Expansion (GH) | ADC1_5 available as `ADC1_5` |
| <raw>PC4</raw> | {::nomarkdown}<pin>PC4</pin>{:/nomarkdown} | <raw>T4</raw> | VMOT_SENSE | Motor voltage sense (11:1 divider) |
| <raw>PC5</raw> | {::nomarkdown}<pin>PC5</pin>{:/nomarkdown} | <raw>U4</raw> | VFET_SENSE | MOSFET voltage sense (11:1 divider) |
| <raw>PC6</raw> | {::nomarkdown}<pin>PC6</pin>{:/nomarkdown} | <raw>F14</raw> | Expansion GC | GPIO |
| <raw>PC7</raw> | {::nomarkdown}<pin>PC7</pin>{:/nomarkdown} | <raw>F13</raw> | Expansion GC | GPIO |
| <raw>PC8</raw> | {::nomarkdown}<pin>PC8</pin>{:/nomarkdown} | <raw>E13</raw> | SD_D0 | SD card data 0 (hardcoded) |
| <raw>PC9</raw> | {::nomarkdown}<pin>PC9</pin>{:/nomarkdown} | <raw>E14</raw> | SD_D1 | SD card data 1 (hardcoded) |
| <raw>PC10</raw> | {::nomarkdown}<pin>PC10</pin>{:/nomarkdown} | <raw>A13</raw> | SD_D2 | SD card data 2 (hardcoded) |
| <raw>PC11</raw> | {::nomarkdown}<pin>PC11</pin>{:/nomarkdown} | <raw>B13</raw> | SD_D3 | SD card data 3 (hardcoded) |
| <raw>PC12</raw> | {::nomarkdown}<pin>PC12</pin>{:/nomarkdown} | <raw>C12</raw> | SD_CK | SD card clock (hardcoded) |
| <raw>PC13</raw> | {::nomarkdown}<pin>PC13</pin>{:/nomarkdown} | <raw>E3</raw> | GPIO | General purpose |
| <raw>PC14</raw> | {::nomarkdown}<pin>PC14</pin>{:/nomarkdown} | <raw>C2</raw> | XTAL_LSE_IN | 32.768kHz crystal in (hardcoded) |
| <raw>PC15</raw> | {::nomarkdown}<pin>PC15</pin>{:/nomarkdown} | <raw>C1</raw> | XTAL_LSE_OUT | 32.768kHz crystal out (hardcoded) |
| <raw>PD0</raw> | {::nomarkdown}<pin>PD0</pin>{:/nomarkdown} | <raw>D13</raw> | UART4_RX | Expansion GD UART receive |
| <raw>PD1</raw> | {::nomarkdown}<pin>PD1</pin>{:/nomarkdown} | <raw>E12</raw> | UART4_TX | Expansion GD UART transmit |
| <raw>PD2</raw> | {::nomarkdown}<pin>PD2</pin>{:/nomarkdown} | <raw>D12</raw> | SD_CMD | SD card command (hardcoded) |
| <raw>PD3</raw> | {::nomarkdown}<pin>PD3</pin>{:/nomarkdown} | <raw>B12</raw> | Expansion GD | GPIO |
| <raw>PD4</raw> | {::nomarkdown}<pin>PD4</pin>{:/nomarkdown} | <raw>A12</raw> | Expansion GD | GPIO |
| <raw>PD5</raw> | {::nomarkdown}<pin>PD5</pin>{:/nomarkdown} | <raw>A11</raw> | USART2_TX / Debug TX | Debug UART transmit |
| <raw>PD6</raw> | {::nomarkdown}<pin>PD6</pin>{:/nomarkdown} | <raw>B11</raw> | USART2_RX / Debug RX | Debug UART receive |
| <raw>PD7</raw> | {::nomarkdown}<pin>PD7</pin>{:/nomarkdown} | <raw>C11</raw> | Expansion GD | GPIO |
| <raw>PD8</raw> | {::nomarkdown}<pin>PD8</pin>{:/nomarkdown} | <raw>U16</raw> | USART3_TX | Expansion UART transmit |
| <raw>PD9</raw> | {::nomarkdown}<pin>PD9</pin>{:/nomarkdown} | <raw>T17</raw> | USART3_RX | Expansion UART receive |
| <raw>PD10</raw> | {::nomarkdown}<pin>PD10</pin>{:/nomarkdown} | <raw>T16</raw> | GPIO | General purpose |
| <raw>PD11</raw> | {::nomarkdown}<pin>PD11</pin>{:/nomarkdown} | <raw>R15</raw> | QSPI_IO0 | QSPI flash data 0 |
| <raw>PD12</raw> | {::nomarkdown}<pin>PD12</pin>{:/nomarkdown} | <raw>R16</raw> | QSPI_IO1 | QSPI flash data 1 |
| <raw>PD13</raw> | {::nomarkdown}<pin>PD13</pin>{:/nomarkdown} | <raw>R17</raw> | QSPI_IO3 | QSPI flash data 3 |
| <raw>PD14</raw> | {::nomarkdown}<pin>PD14</pin>{:/nomarkdown} | <raw>P16</raw> | MOTSPI_MOSI | Motor SPI data out (hardcoded) |
| <raw>PD15</raw> | {::nomarkdown}<pin>PD15</pin>{:/nomarkdown} | <raw>P15</raw> | Expansion GC | GPIO |
| <raw>PE0</raw> | {::nomarkdown}<pin>PE0</pin>{:/nomarkdown} | <raw>C4</raw> | Expansion GE | GPIO |
| <raw>PE1</raw> | {::nomarkdown}<pin>PE1</pin>{:/nomarkdown} | <raw>B4</raw> | Expansion GE | GPIO |
| <raw>PE2</raw> | {::nomarkdown}<pin>PE2</pin>{:/nomarkdown} | <raw>C3</raw> | QSPI_IO2 | QSPI flash data 2 |
| <raw>PE3</raw> | {::nomarkdown}<pin>PE3</pin>{:/nomarkdown} | <raw>D3</raw> | Expansion GE | GPIO |
| <raw>PE4</raw> | {::nomarkdown}<pin>PE4</pin>{:/nomarkdown} | <raw>D2</raw> | MOTSPI_MISO | Motor SPI data in (hardcoded) |
| <raw>PE5</raw> | {::nomarkdown}<pin>PE5</pin>{:/nomarkdown} | <raw>D1</raw> | TIM15_CH1 | Expansion GE PWM |
| <raw>PE6</raw> | {::nomarkdown}<pin>PE6</pin>{:/nomarkdown} | <raw>E5</raw> | TIM15_CH2 | Expansion GE PWM |
| <raw>PE7</raw> | {::nomarkdown}<pin>PE7</pin>{:/nomarkdown} | <raw>U9</raw> | Expansion GE | GPIO |
| <raw>PE8</raw> | {::nomarkdown}<pin>PE8</pin>{:/nomarkdown} | <raw>T9</raw> | Expansion GE | GPIO |
| <raw>PE9</raw> | {::nomarkdown}<pin>PE9</pin>{:/nomarkdown} | <raw>P9</raw> | TIM1_CH1 | Timer 1 channel 1 PWM |
| <raw>PE10</raw> | {::nomarkdown}<pin>PE10</pin>{:/nomarkdown} | <raw>N9</raw> | Motor D Step / BDET | Motor D step, also board detect bit 3 |
| <raw>PE11</raw> | {::nomarkdown}<pin>PE11</pin>{:/nomarkdown} | <raw>P10</raw> | TIM1_CH2 | Timer 1 channel 2 PWM |
| <raw>PE12</raw> | {::nomarkdown}<pin>PE12</pin>{:/nomarkdown} | <raw>R10</raw> | Motor D Dir / TIM1_CH3 | Motor D direction |
| <raw>PE13</raw> | {::nomarkdown}<pin>PE13</pin>{:/nomarkdown} | <raw>T10</raw> | TIM1_CH4 | Timer 1 channel 4 PWM (spare) |
| <raw>PE14</raw> | {::nomarkdown}<pin>PE14</pin>{:/nomarkdown} | <raw>U10</raw> | Motor C Step | TMC2660 motor C step |
| <raw>PE15</raw> | {::nomarkdown}<pin>PE15</pin>{:/nomarkdown} | <raw>R11</raw> | Motor C Dir | TMC2660 motor C direction |
| <raw>PF0</raw> | {::nomarkdown}<pin>PF0</pin>{:/nomarkdown} | <raw>G4</raw> | Expansion GF | GPIO |
| <raw>PF1</raw> | {::nomarkdown}<pin>PF1</pin>{:/nomarkdown} | <raw>G3</raw> | Expansion GF | GPIO |
| <raw>PF2</raw> | {::nomarkdown}<pin>PF2</pin>{:/nomarkdown} | <raw>G1</raw> | Expansion GF | GPIO |
| <raw>PF3</raw> | {::nomarkdown}<pin>PF3</pin>{:/nomarkdown} | <raw>H4</raw> | BDET_PF3 | Board detect bit 0 (hardcoded) |
| <raw>PF4</raw> | {::nomarkdown}<pin>PF4</pin>{:/nomarkdown} | <raw>J5</raw> | Expansion GF | GPIO |
| <raw>PF5</raw> | {::nomarkdown}<pin>PF5</pin>{:/nomarkdown} | <raw>J4</raw> | BDET_PF5 | Board detect bit 1 (hardcoded) |
| <raw>PF6</raw> | {::nomarkdown}<pin>PF6</pin>{:/nomarkdown} | <raw>K2</raw> | Expansion GF | GPIO |
| <raw>PF7</raw> | {::nomarkdown}<pin>PF7</pin>{:/nomarkdown} | <raw>K3</raw> | BDET_PF7 | Board detect bit 2 (hardcoded) |
| <raw>PF8</raw> | {::nomarkdown}<pin>PF8</pin>{:/nomarkdown} | <raw>K4</raw> | Expansion GF | GPIO |
| <raw>PF9</raw> | {::nomarkdown}<pin>PF9</pin>{:/nomarkdown} | <raw>L4</raw> | Expansion GF | GPIO |
| <raw>PF10</raw> | {::nomarkdown}<pin>PF10</pin>{:/nomarkdown} | <raw>L3</raw> | Expansion GG | GPIO |
| <raw>PF11</raw> | {::nomarkdown}<pin>PF11</pin>{:/nomarkdown} | <raw>T7</raw> | Motor B Dir | TMC2660 motor B direction |
| <raw>PF12</raw> | {::nomarkdown}<pin>PF12</pin>{:/nomarkdown} | <raw>R7</raw> | Motor B Step | TMC2660 motor B step |
| <raw>PF13</raw> | {::nomarkdown}<pin>PF13</pin>{:/nomarkdown} | <raw>P7</raw> | Expansion GG | GPIO |
| <raw>PF14</raw> | {::nomarkdown}<pin>PF14</pin>{:/nomarkdown} | <raw>P8</raw> | I2C4_SCL | Expansion GG I2C clock |
| <raw>PF15</raw> | {::nomarkdown}<pin>PF15</pin>{:/nomarkdown} | <raw>R9</raw> | I2C4_SDA | Expansion GG I2C data |
| <raw>PG0</raw> | {::nomarkdown}<pin>PG0</pin>{:/nomarkdown} | <raw>T8</raw> | Motor A Step | TMC2660 motor A step |
| <raw>PG1</raw> | {::nomarkdown}<pin>PG1</pin>{:/nomarkdown} | <raw>U8</raw> | Motor A Dir | TMC2660 motor A direction |
| <raw>PG2</raw> | {::nomarkdown}<pin>PG2</pin>{:/nomarkdown} | <raw>H16</raw> | CARD_DET | SD card detection |
| <raw>PG3</raw> | {::nomarkdown}<pin>PG3</pin>{:/nomarkdown} | <raw>H15</raw> | Expansion GB | GPIO |
| <raw>PG4</raw> | {::nomarkdown}<pin>PG4</pin>{:/nomarkdown} | <raw>H14</raw> | Expansion GB | GPIO |
| <raw>PG5</raw> | {::nomarkdown}<pin>PG5</pin>{:/nomarkdown} | <raw>G14</raw> | Expansion GB | GPIO |
| <raw>PG6</raw> | {::nomarkdown}<pin>PG6</pin>{:/nomarkdown} | <raw>G15</raw> | Expansion GC | GPIO |
| <raw>PG7</raw> | {::nomarkdown}<pin>PG7</pin>{:/nomarkdown} | <raw>F16</raw> | Expansion GC | GPIO |
| <raw>PG8</raw> | {::nomarkdown}<pin>PG8</pin>{:/nomarkdown} | <raw>F15</raw> | Expansion GC | GPIO |
| <raw>PG9</raw> | {::nomarkdown}<pin>PG9</pin>{:/nomarkdown} | <raw>A10</raw> | ESXMAX | X max endstop |
| <raw>PG10</raw> | {::nomarkdown}<pin>PG10</pin>{:/nomarkdown} | <raw>A9</raw> | ESXMIN | X min endstop |
| <raw>PG11</raw> | {::nomarkdown}<pin>PG11</pin>{:/nomarkdown} | <raw>B9</raw> | ESYMIN | Y min endstop |
| <raw>PG12</raw> | {::nomarkdown}<pin>PG12</pin>{:/nomarkdown} | <raw>C9</raw> | ESYMAX | Y max endstop |
| <raw>PG13</raw> | {::nomarkdown}<pin>PG13</pin>{:/nomarkdown} | <raw>D9</raw> | ESZMIN | Z min endstop |
| <raw>PG14</raw> | {::nomarkdown}<pin>PG14</pin>{:/nomarkdown} | <raw>D8</raw> | ESZMAX | Z max endstop |
| <raw>PG15</raw> | {::nomarkdown}<pin>PG15</pin>{:/nomarkdown} | <raw>D6</raw> | GPIO | General purpose |
| <raw>PH0</raw> | {::nomarkdown}<pin>PH0</pin>{:/nomarkdown} | <raw>J2</raw> | XTAL_HSE_IN | 25MHz crystal in (hardcoded) |
| <raw>PH1</raw> | {::nomarkdown}<pin>PH1</pin>{:/nomarkdown} | <raw>J1</raw> | XTAL_HSE_OUT | 25MHz crystal out (hardcoded) |
| <raw>PH2</raw> | {::nomarkdown}<pin>PH2</pin>{:/nomarkdown} | <raw>N2</raw> | ExtraFET | Extra switched output |
| <raw>PH3</raw> | {::nomarkdown}<pin>PH3</pin>{:/nomarkdown} | <raw>P2</raw> | Expansion GG | GPIO |
| <raw>PH4</raw> | {::nomarkdown}<pin>PH4</pin>{:/nomarkdown} | <raw>P3</raw> | Expansion GG | GPIO |
| <raw>PH5</raw> | {::nomarkdown}<pin>PH5</pin>{:/nomarkdown} | <raw>P4</raw> | Expansion GG | GPIO |
| <raw>PH6</raw> | {::nomarkdown}<pin>PH6</pin>{:/nomarkdown} | <raw>T11</raw> | TIM8_CH1 | Timer 8 channel 1 PWM |
| <raw>PH7</raw> | {::nomarkdown}<pin>PH7</pin>{:/nomarkdown} | <raw>U13</raw> | TIM8_CH4 / I2C3_SCL | Timer 8 ch4 / I2C3 clock |
| <raw>PH8</raw> | {::nomarkdown}<pin>PH8</pin>{:/nomarkdown} | <raw>T13</raw> | TIM8_CH2 / I2C3_SDA | Timer 8 ch2 / I2C3 data |
| <raw>PH9</raw> | {::nomarkdown}<pin>PH9</pin>{:/nomarkdown} | <raw>R13</raw> | TIM8_CH3 | Timer 8 channel 3 PWM |
| <raw>PH10</raw> | {::nomarkdown}<pin>PH10</pin>{:/nomarkdown} | <raw>P13</raw> | Expansion GI | GPIO |
| <raw>PH11</raw> | {::nomarkdown}<pin>PH11</pin>{:/nomarkdown} | <raw>P14</raw> | Expansion GI | GPIO |
| <raw>PH12</raw> | {::nomarkdown}<pin>PH12</pin>{:/nomarkdown} | <raw>R14</raw> | Expansion GI | GPIO |
| <raw>PH13</raw> | {::nomarkdown}<pin>PH13</pin>{:/nomarkdown} | <raw>D16</raw> | MOT_EN | Motor enable (shared, active low) |
| <raw>PH14</raw> | {::nomarkdown}<pin>PH14</pin>{:/nomarkdown} | <raw>B17</raw> | Expansion GI | GPIO |
| <raw>PH15</raw> | {::nomarkdown}<pin>PH15</pin>{:/nomarkdown} | <raw>B16</raw> | GPIO | General purpose |
| <raw>PI0</raw> | {::nomarkdown}<pin>PI0</pin>{:/nomarkdown} | <raw>A16</raw> | MSD LED | Mass storage mode indicator |
| <raw>PI1</raw> | {::nomarkdown}<pin>PI1</pin>{:/nomarkdown} | <raw>A15</raw> | GPIO | General purpose |
| <raw>PI2</raw> | {::nomarkdown}<pin>PI2</pin>{:/nomarkdown} | <raw>B15</raw> | GPIO | General purpose |
| <raw>PI3</raw> | {::nomarkdown}<pin>PI3</pin>{:/nomarkdown} | <raw>C14</raw> | GPIO | General purpose |
| <raw>PI4</raw> | {::nomarkdown}<pin>PI4</pin>{:/nomarkdown} | <raw>A4</raw> | GPIO | General purpose |
| <raw>PI5</raw> | {::nomarkdown}<pin>PI5</pin>{:/nomarkdown} | <raw>A3</raw> | GPIO | General purpose |
| <raw>PI6</raw> | {::nomarkdown}<pin>PI6</pin>{:/nomarkdown} | <raw>A2</raw> | GPIO | General purpose |
| <raw>PI7</raw> | {::nomarkdown}<pin>PI7</pin>{:/nomarkdown} | <raw>B3</raw> | GPIO | General purpose |
| <raw>PI8</raw> | {::nomarkdown}<pin>PI8</pin>{:/nomarkdown} | <raw>E4</raw> | GPIO | General purpose |
| <raw>PI9</raw> | {::nomarkdown}<pin>PI9</pin>{:/nomarkdown} | <raw>E2</raw> | GPIO | General purpose |
| <raw>PI10</raw> | {::nomarkdown}<pin>PI10</pin>{:/nomarkdown} | <raw>F3</raw> | MOTSPI_SCK | Motor SPI clock (hardcoded) |
| <raw>PI11</raw> | {::nomarkdown}<pin>PI11</pin>{:/nomarkdown} | <raw>F4</raw> | Expansion GA | GPIO |
| <raw>PI12</raw> | {::nomarkdown}<pin>PI12</pin>{:/nomarkdown} | <raw>H1</raw> | Expansion GA | GPIO |
| <raw>PI13</raw> | {::nomarkdown}<pin>PI13</pin>{:/nomarkdown} | <raw>H2</raw> | Expansion GA | GPIO |
| <raw>PI14</raw> | {::nomarkdown}<pin>PI14</pin>{:/nomarkdown} | <raw>H3</raw> | Expansion GA | GPIO |
| <raw>PI15</raw> | {::nomarkdown}<pin>PI15</pin>{:/nomarkdown} | <raw>P5</raw> | Expansion GA | GPIO |
| <raw>PJ0</raw> | {::nomarkdown}<pin>PJ0</pin>{:/nomarkdown} | <raw>N6</raw> | Expansion GA | GPIO |
| <raw>PJ1</raw> | {::nomarkdown}<pin>PJ1</pin>{:/nomarkdown} | <raw>P6</raw> | Expansion GA | GPIO |
| <raw>PJ2</raw> | {::nomarkdown}<pin>PJ2</pin>{:/nomarkdown} | <raw>T6</raw> | Motor A CS | TMC2660 motor A chip select |
| <raw>PJ3</raw> | {::nomarkdown}<pin>PJ3</pin>{:/nomarkdown} | <raw>U6</raw> | Motor C CS | TMC2660 motor C chip select |
| <raw>PJ4</raw> | {::nomarkdown}<pin>PJ4</pin>{:/nomarkdown} | <raw>U7</raw> | Motor D CS | TMC2660 motor D chip select |
| <raw>PJ5</raw> | {::nomarkdown}<pin>PJ5</pin>{:/nomarkdown} | <raw>R12</raw> | OUTPUTENABLE | Master FET output enable |
| <raw>PJ6</raw> | {::nomarkdown}<pin>PJ6</pin>{:/nomarkdown} | <raw>N15</raw> | HEA_G | Hotend A MOSFET gate |
| <raw>PJ7</raw> | {::nomarkdown}<pin>PJ7</pin>{:/nomarkdown} | <raw>N14</raw> | HEB_G | Hotend B MOSFET gate |
| <raw>PJ8</raw> | {::nomarkdown}<pin>PJ8</pin>{:/nomarkdown} | <raw>N13</raw> | FAN1_G | Fan 1 MOSFET gate |
| <raw>PJ9</raw> | {::nomarkdown}<pin>PJ9</pin>{:/nomarkdown} | <raw>M14</raw> | FAN2_G | Fan 2 MOSFET gate |
| <raw>PJ10</raw> | {::nomarkdown}<pin>PJ10</pin>{:/nomarkdown} | <raw>L14</raw> | BED_G | Bed MOSFET gate |
| <raw>PJ11</raw> | {::nomarkdown}<pin>PJ11</pin>{:/nomarkdown} | <raw>K14</raw> | SSR2 | Solid state relay output 2 |
| <raw>PJ12</raw> | {::nomarkdown}<pin>PJ12</pin>{:/nomarkdown} | <raw>D11</raw> | ILED3 | Debug LED 3 |
| <raw>PJ13</raw> | {::nomarkdown}<pin>PJ13</pin>{:/nomarkdown} | <raw>E10</raw> | ILED2 | Debug LED 2 |
| <raw>PJ14</raw> | {::nomarkdown}<pin>PJ14</pin>{:/nomarkdown} | <raw>D10</raw> | ILED1 | Debug LED 1 |
| <raw>PJ15</raw> | {::nomarkdown}<pin>PJ15</pin>{:/nomarkdown} | <raw>B10</raw> | ILED4 | Debug LED 4 |
| <raw>PK0</raw> | {::nomarkdown}<pin>PK0</pin>{:/nomarkdown} | <raw>J14</raw> | SG_TST_A | Motor A StallGuard output |
| <raw>PK1</raw> | {::nomarkdown}<pin>PK1</pin>{:/nomarkdown} | <raw>J15</raw> | SG_TST_B | Motor B StallGuard output |
| <raw>PK2</raw> | {::nomarkdown}<pin>PK2</pin>{:/nomarkdown} | <raw>H17</raw> | SG_TST_C | Motor C StallGuard output |
| <raw>PK3</raw> | {::nomarkdown}<pin>PK3</pin>{:/nomarkdown} | <raw>C8</raw> | SG_TST_D | Motor D StallGuard output |
| <raw>PK4</raw> | {::nomarkdown}<pin>PK4</pin>{:/nomarkdown} | <raw>B8</raw> | Expansion GB | GPIO |
| <raw>PK5</raw> | {::nomarkdown}<pin>PK5</pin>{:/nomarkdown} | <raw>A8</raw> | Expansion GB | GPIO |
| <raw>PK6</raw> | {::nomarkdown}<pin>PK6</pin>{:/nomarkdown} | <raw>C7</raw> | Expansion GB | GPIO |
| <raw>PK7</raw> | {::nomarkdown}<pin>PK7</pin>{:/nomarkdown} | <raw>D7</raw> | Expansion GB | GPIO |
| <raw>BOOT0</raw> | {::nomarkdown}<pin>BOOT0</pin>{:/nomarkdown} | <raw>E8</raw> | BOOT0 | Boot mode (LOW=flash, HIGH=DFU) |
| <raw>NRST</raw> | {::nomarkdown}<pin>NRST</pin>{:/nomarkdown} | <raw>K1</raw> | MCU_RESET | System reset (active low) |

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Hardwired Pins:</strong><br><br>
  The following pins are hardwired and would need source code changes to modify:
  <ul>
    <li>USB Device: <pin>PA11</pin>, <pin>PA12</pin></li>
    <li>Debug (SWD): <pin>PA13</pin> (SWDIO), <pin>PA14</pin> (SWCLK)</li>
    <li>SD Card (SDIO): <pin>PC8</pin>-<pin>PC12</pin>, <pin>PD2</pin></li>
    <li>Crystals: <pin>PH0</pin>, <pin>PH1</pin> (HSE), <pin>PC14</pin>, <pin>PC15</pin> (LSE)</li>
    <li>Motor SPI: <pin>PD14</pin> (MOSI), <pin>PE4</pin> (MISO), <pin>PI10</pin> (SCK)</li>
    <li>Board detect: <pin>PF3</pin>, <pin>PF5</pin>, <pin>PF7</pin>, <pin>PE10</pin></li>
  </ul>
  All other pins can be reassigned via the configuration file.
</sl-alert>
{:/nomarkdown}

## MCU Overview

| Property | Value |
| -------- | ----- |
| <raw>Part Number</raw> | <raw>STM32H745XIHx</raw> |
| <raw>Package</raw> | <raw>265-pin BGA</raw> |
| <raw>Core</raw> | <raw>Dual-core: Cortex-M7 @ 480MHz + Cortex-M4 @ 240MHz</raw> |
| <raw>Flash</raw> | <raw>2 MB</raw> |
| <raw>RAM</raw> | <raw>1 MB total</raw> |
| <raw>FPU</raw> | <raw>Double-precision (M7), Single-precision (M4)</raw> |

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> The M4 core is currently unused/disabled in the V2 firmware. Only the M7 core runs Smoothieware.
</sl-alert>
{:/nomarkdown}

## Pin Naming Convention

V2 uses several pin naming formats depending on the function:

### GPIO Pins
- Format: <raw>P</raw> + <raw>Port Letter (A-K)</raw> + <raw>Pin Number (0-15)</raw>
- Example: {::nomarkdown}<pin>PG0</pin>{:/nomarkdown} = Port G, Pin 0

### ADC/Thermistor Pins
- Format: <raw>ADC</raw> + <raw>Peripheral (1 or 3)</raw> + <raw>_</raw> + <raw>Channel (0-6)</raw>
- Example: {::nomarkdown}<pin>ADC1_0</pin>{:/nomarkdown} = ADC1 channel 0 (board temp)
- Example: {::nomarkdown}<pin>ADC1_1</pin>{:/nomarkdown} = ADC1 channel 1 (thermistor 1)
- Use this format for thermistor_pin configuration

### PWM Pins
- Format: <raw>PWM</raw> + <raw>Timer (1 or 2)</raw> + <raw>_</raw> + <raw>Channel (1-4)</raw>
- Example: {::nomarkdown}<pin>PWM1_1</pin>{:/nomarkdown} = Timer 1, Channel 1

### Pin Modifiers

| Modifier | Function | Example |
| -------- | -------- | ------- |
| <raw>!</raw> | Invert signal | {::nomarkdown}<pin>PG0!</pin>{:/nomarkdown} |
| <raw>^</raw> | Enable pull-up | {::nomarkdown}<pin>PG10^</pin>{:/nomarkdown} |
| <raw>v</raw> | Enable pull-down | {::nomarkdown}<pin>PG10v</pin>{:/nomarkdown} |
| <raw>o</raw> | Open-drain mode | {::nomarkdown}<pin>PH13o</pin>{:/nomarkdown} |
| <raw>-</raw> | No pull (floating) | {::nomarkdown}<pin>PG10-</pin>{:/nomarkdown} |

## Motor Driver Pins

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>TMC2660 Motor Driver Circuit</h4></div>
  <a href="/images/v2-schematic/parts/motor-driver-tmc2660.png">
    <img src="/images/v2-schematic/parts/motor-driver-tmc2660.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Each of the 4 drivers uses this identical circuit
</div>
{:/nomarkdown}

The V2 Prime has 4 onboard TMC2660 stepper drivers. All drivers share an SPI bus and enable signal.

### Step and Direction Pins

| Driver | Axis | Step Pin | Dir Pin | Chip Select | StallGuard |
| ------ | ---- | -------- | ------- | ----------- | ---------- |
| <raw>A</raw> | <raw>Alpha (X)</raw> | {::nomarkdown}<pin>PG0</pin>{:/nomarkdown} | {::nomarkdown}<pin>PG1</pin>{:/nomarkdown} | {::nomarkdown}<pin>PJ2</pin>{:/nomarkdown} | {::nomarkdown}<pin>PK0</pin>{:/nomarkdown} |
| <raw>B</raw> | <raw>Beta (Y)</raw> | {::nomarkdown}<pin>PF12</pin>{:/nomarkdown} | {::nomarkdown}<pin>PF11</pin>{:/nomarkdown} | {::nomarkdown}<pin>PB12</pin>{:/nomarkdown} | {::nomarkdown}<pin>PK1</pin>{:/nomarkdown} |
| <raw>C</raw> | <raw>Gamma (Z)</raw> | {::nomarkdown}<pin>PE14</pin>{:/nomarkdown} | {::nomarkdown}<pin>PE15</pin>{:/nomarkdown} | {::nomarkdown}<pin>PJ3</pin>{:/nomarkdown} | {::nomarkdown}<pin>PK2</pin>{:/nomarkdown} |
| <raw>D</raw> | <raw>Delta (E)</raw> | {::nomarkdown}<pin>PE10</pin>{:/nomarkdown} | {::nomarkdown}<pin>PE12</pin>{:/nomarkdown} | {::nomarkdown}<pin>PJ4</pin>{:/nomarkdown} | {::nomarkdown}<pin>PK3</pin>{:/nomarkdown} |

### Shared Motor SPI Bus

| Function | Smoothie Pin | Description |
| -------- | ------------ | ----------- |
| <raw>MOSI</raw> | {::nomarkdown}<pin>PD14</pin>{:/nomarkdown} | SPI data to drivers (MOTSPI_COPI) |
| <raw>MISO</raw> | {::nomarkdown}<pin>PE4</pin>{:/nomarkdown} | SPI data from drivers (MOTSPI_CIPO) |
| <raw>SCK</raw> | {::nomarkdown}<pin>PI10</pin>{:/nomarkdown} | SPI clock (MOTSPI_SCK) |
| <raw>Enable</raw> | {::nomarkdown}<pin>PH13</pin>{:/nomarkdown} | Shared enable for all drivers (active low) |

## Thermistor/ADC Pins

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Thermistor Input Circuit</h4></div>
  <a href="/images/v2-schematic/parts/inputs-full.png">
    <img src="/images/v2-schematic/parts/inputs-full.png" style="width: 400px; height: auto;"/>
  </a><br/>
  4 buffered thermistor inputs via LMV324 op-amp
</div>
{:/nomarkdown}

V2 Prime has 4 buffered thermistor inputs via an LMV324 op-amp buffer, plus additional unbuffered ADC channels.

### Buffered Thermistor Inputs

| Input | Config Pin | STM32 Pin | Connector | Description |
| ----- | ---------- | --------- | --------- | ----------- |
| <raw>T1</raw> | {::nomarkdown}<pin>ADC1_1</pin>{:/nomarkdown} | <raw>PF11</raw> | <raw>J25</raw> | Thermistor 1 (Hotend) |
| <raw>T2</raw> | {::nomarkdown}<pin>ADC1_2</pin>{:/nomarkdown} | <raw>PF12</raw> | <raw>J24</raw> | Thermistor 2 (Bed) |
| <raw>T3</raw> | {::nomarkdown}<pin>ADC1_3</pin>{:/nomarkdown} | <raw>PB0</raw> | <raw>J26</raw> | Thermistor 3 |
| <raw>T4</raw> | {::nomarkdown}<pin>ADC1_0</pin>{:/nomarkdown} | <raw>PA0_C</raw> | <raw>J27-J29</raw> | Board Temperature |

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Config Format:</strong> Use the ADC channel name (e.g., <code>ADC1_1</code>) in your config file, NOT the STM32 pin name. For example: <code>temperature_control.hotend.thermistor_pin = ADC1_1</code>
</sl-alert>
{:/nomarkdown}

### Voltage Monitoring ADC Channels

| Signal | Smoothie Pin | ADC Channel | Divider Ratio | Purpose |
| ------ | ------------ | ----------- | ------------- | ------- |
| <raw>VMOT</raw> | {::nomarkdown}<pin>PC4</pin>{:/nomarkdown} | <raw>ADC1_CH13</raw> | <raw>11:1</raw> | Motor supply voltage |
| <raw>VFET</raw> | {::nomarkdown}<pin>PC5</pin>{:/nomarkdown} | <raw>ADC1_CH15</raw> | <raw>11:1</raw> | MOSFET supply voltage |
| <raw>Board Temp</raw> | <raw>TH1</raw> | <raw>Internal</raw> | <raw>-</raw> | Onboard thermistor |

## Endstop Pins

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Endstop Input Circuit</h4></div>
  <a href="/images/v2-schematic/parts/inputs-full.png">
    <img src="/images/v2-schematic/parts/inputs-full.png" style="width: 400px; height: auto;"/>
  </a><br/>
  6 endstops with ESD protection and configurable pull resistors
</div>
{:/nomarkdown}

6 endstop inputs with ESD protection and configurable pull-up/pull-down via solder jumpers.

| Endstop | Smoothie Pin | BGA Pin | Signal | Jumper |
| ------- | ------------ | ------- | ------ | ------ |
| <raw>X Min</raw> | {::nomarkdown}<pin>PG10</pin>{:/nomarkdown} | <raw>A9</raw> | <raw>ESXMIN</raw> | <raw>JP1</raw> |
| <raw>X Max</raw> | {::nomarkdown}<pin>PG9</pin>{:/nomarkdown} | <raw>A10</raw> | <raw>ESXMAX</raw> | <raw>JP2</raw> |
| <raw>Y Min</raw> | {::nomarkdown}<pin>PG11</pin>{:/nomarkdown} | <raw>B9</raw> | <raw>ESYMIN</raw> | <raw>JP3</raw> |
| <raw>Y Max</raw> | {::nomarkdown}<pin>PG12</pin>{:/nomarkdown} | <raw>C9</raw> | <raw>ESYMAX</raw> | <raw>JP4</raw> |
| <raw>Z Min</raw> | {::nomarkdown}<pin>PG13</pin>{:/nomarkdown} | <raw>D9</raw> | <raw>ESZMIN</raw> | <raw>JP5</raw> |
| <raw>Z Max</raw> | {::nomarkdown}<pin>PG14</pin>{:/nomarkdown} | <raw>D8</raw> | <raw>ESZMAX</raw> | <raw>JP6</raw> |

### Endstop Pull Configuration Jumpers

Each endstop has a 3-way solder jumper (JP1-JP6) to configure pull-up or pull-down:
- Position 1-2 (default): Pull to 3.3V
- Position 2-3: Pull to GND
- Position 2 center: Pull to 5V

## Probe Input

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Probe Input Circuit</h4></div>
  <a href="/images/v2-schematic/parts/inputs-full.png">
    <img src="/images/v2-schematic/parts/inputs-full.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Probe input with comparator and JP7 voltage range selector
</div>
{:/nomarkdown}

| Signal | Smoothie Pin | Connector | Description |
| ------ | ------------ | --------- | ----------- |
| <raw>PROBE</raw> | {::nomarkdown}<pin>PB0</pin>{:/nomarkdown} | <raw>J22</raw> | Probe input via comparator |

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>CRITICAL - JP7 Jumper:</strong><br><br>
  The probe input voltage range is controlled by jumper JP7 (bottom side near probe input):
  <ul>
    <li><strong>JP7 intact (default):</strong> Input range 0-5V only</li>
    <li><strong>JP7 cut:</strong> Input range 2.9V to 26V (for 24V inductive probes)</li>
  </ul>
  <strong>WARNING:</strong> Using a >5V probe with JP7 intact will damage the board!
</sl-alert>
{:/nomarkdown}

## MOSFET Output Pins

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>MOSFET Output Circuit</h4></div>
  <a href="/images/v2-schematic/parts/mosfet-outputs.png">
    <img src="/images/v2-schematic/parts/mosfet-outputs.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Hotend and fan MOSFET outputs with gate driver
</div>
{:/nomarkdown}

### Heater and Fan Outputs

| Output | Smoothie Pin | Signal | Connector | Current Rating |
| ------ | ------------ | ------ | --------- | -------------- |
| <raw>Hotend A</raw> | {::nomarkdown}<pin>PJ6</pin>{:/nomarkdown} | <raw>HEA_G</raw> | <raw>J17</raw> | <raw>~5A</raw> |
| <raw>Hotend B</raw> | {::nomarkdown}<pin>PJ7</pin>{:/nomarkdown} | <raw>HEB_G</raw> | <raw>J18</raw> | <raw>~5A</raw> |
| <raw>Fan 1</raw> | {::nomarkdown}<pin>PJ8</pin>{:/nomarkdown} | <raw>FAN1_G</raw> | <raw>J19</raw> | <raw>~5A</raw> |
| <raw>Fan 2</raw> | {::nomarkdown}<pin>PJ9</pin>{:/nomarkdown} | <raw>FAN2_G</raw> | <raw>J20</raw> | <raw>~5A</raw> |
| <raw>Bed</raw> | {::nomarkdown}<pin>PJ10</pin>{:/nomarkdown} | <raw>BED_G</raw> | <raw>J13-J14</raw> | <raw>~10-12A</raw> |

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Safety Feature:</strong> Hotend A, Hotend B, Fan 1, and Fan 2 are controlled by a highside PFET cutoff circuit. The bed FET is independent and not affected by the cutoff.
</sl-alert>
{:/nomarkdown}

### SSR and Extra Outputs

| Output | Smoothie Pin | Signal | Connector | Description |
| ------ | ------------ | ------ | --------- | ----------- |
| <raw>SSR1</raw> | {::nomarkdown}<pin>PC0</pin>{:/nomarkdown} | <raw>SSR1</raw> | <raw>J44</raw> | Logic-level SSR output |
| <raw>SSR2</raw> | {::nomarkdown}<pin>PJ11</pin>{:/nomarkdown} | <raw>SSR2</raw> | <raw>J45</raw> | Logic-level SSR output |
| <raw>ExtraFET</raw> | {::nomarkdown}<pin>PH2</pin>{:/nomarkdown} | <raw>ExtraFET</raw> | <raw>-</raw> | Additional switched output |

### Output Enable

| Signal | Smoothie Pin | Description |
| ------ | ------------ | ----------- |
| <raw>OUTPUTENABLE</raw> | {::nomarkdown}<pin>PJ5</pin>{:/nomarkdown} | Master enable for all FET outputs |

## PWM/Timer Pins

V2 has multiple hardware timer channels available for PWM:

### Timer 1 Channels

| Channel | Smoothie Pin | BGA Pin | Function |
| ------- | ------------ | ------- | -------- |
| <raw>TIM1_CH1</raw> | {::nomarkdown}<pin>PE9</pin>{:/nomarkdown} | <raw>P9</raw> | PWM output |
| <raw>TIM1_CH2</raw> | {::nomarkdown}<pin>PE11</pin>{:/nomarkdown} | <raw>P10</raw> | PWM output |
| <raw>TIM1_CH3</raw> | {::nomarkdown}<pin>PE12</pin>{:/nomarkdown} | <raw>R10</raw> | PWM output |
| <raw>TIM1_CH4</raw> | {::nomarkdown}<pin>PE13</pin>{:/nomarkdown} | <raw>T10</raw> | PWM output (spare) |

### Timer 8 Channels

| Channel | Smoothie Pin | BGA Pin | Function |
| ------- | ------------ | ------- | -------- |
| <raw>TIM8_CH1</raw> | {::nomarkdown}<pin>PH6</pin>{:/nomarkdown} | <raw>T11</raw> | PWM output |
| <raw>TIM8_CH2</raw> | {::nomarkdown}<pin>PH8</pin>{:/nomarkdown} | <raw>T13</raw> | PWM output |
| <raw>TIM8_CH3</raw> | {::nomarkdown}<pin>PH9</pin>{:/nomarkdown} | <raw>R13</raw> | PWM output |
| <raw>TIM8_CH4</raw> | {::nomarkdown}<pin>PH7</pin>{:/nomarkdown} | <raw>U13</raw> | PWM output |

## Communication Interfaces

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>USB Host + Device Circuit</h4></div>
  <a href="/images/v2-schematic/parts/usb-host-device.png">
    <img src="/images/v2-schematic/parts/usb-host-device.png" style="width: 400px; height: auto;"/>
  </a><br/>
  USB-B device connector with SD card interface
</div>
{:/nomarkdown}

### USB Device

| Signal | Smoothie Pin | BGA Pin | Connector |
| ------ | ------------ | ------- | --------- |
| <raw>USB_DEV_D+</raw> | {::nomarkdown}<pin>PA12</pin>{:/nomarkdown} | <raw>E16</raw> | <raw>J1 (USB-B)</raw> |
| <raw>USB_DEV_D-</raw> | {::nomarkdown}<pin>PA11</pin>{:/nomarkdown} | <raw>E17</raw> | <raw>J1 (USB-B)</raw> |

### USB Host

| Signal | Smoothie Pin | BGA Pin | Connector |
| ------ | ------------ | ------- | --------- |
| <raw>USB_HOST_D+</raw> | {::nomarkdown}<pin>PB14</pin>{:/nomarkdown} | <raw>U15</raw> | <raw>J2 (USB-A)</raw> |
| <raw>USB_HOST_D-</raw> | {::nomarkdown}<pin>PB15</pin>{:/nomarkdown} | <raw>T15</raw> | <raw>J2 (USB-A)</raw> |
| <raw>USB_PWR_ON</raw> | {::nomarkdown}<pin>PB13</pin>{:/nomarkdown} | <raw>U14</raw> | Host power control |

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> USB Host functionality has hardware support but firmware is not yet implemented.
</sl-alert>
{:/nomarkdown}

### Ethernet (RMII)

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Ethernet PHY Circuit</h4></div>
  <a href="/images/v2-schematic/parts/ethernet-phy.png">
    <img src="/images/v2-schematic/parts/ethernet-phy.png" style="width: 400px; height: auto;"/>
  </a><br/>
  LAN8720A PHY with RJ45 connector and magnetics
</div>
{:/nomarkdown}

| Signal | Smoothie Pin | Description |
| ------ | ------------ | ----------- |
| <raw>ETH_TXD0</raw> | {::nomarkdown}<pin>PG13</pin>{:/nomarkdown} | Transmit data 0 |
| <raw>ETH_TXD1</raw> | {::nomarkdown}<pin>PG12</pin>{:/nomarkdown} | Transmit data 1 |
| <raw>ETH_TXEN</raw> | {::nomarkdown}<pin>PG11</pin>{:/nomarkdown} | Transmit enable |
| <raw>ETH_RXD0</raw> | {::nomarkdown}<pin>PC4</pin>{:/nomarkdown} | Receive data 0 |
| <raw>ETH_RXD1</raw> | {::nomarkdown}<pin>PC5</pin>{:/nomarkdown} | Receive data 1 |
| <raw>ETH_CRSDV</raw> | {::nomarkdown}<pin>PA7</pin>{:/nomarkdown} | Carrier sense/data valid |
| <raw>ETH_MDIO</raw> | {::nomarkdown}<pin>PA2</pin>{:/nomarkdown} | Management data I/O |
| <raw>ETH_MDC</raw> | {::nomarkdown}<pin>PC1</pin>{:/nomarkdown} | Management data clock |
| <raw>ETH_REFCLK</raw> | {::nomarkdown}<pin>PA1</pin>{:/nomarkdown} | 50MHz reference clock |

### I2C Buses

| Bus | SDA Pin | SCL Pin | Purpose |
| --- | ------- | ------- | ------- |
| <raw>I2C2</raw> | {::nomarkdown}<pin>PB1</pin>{:/nomarkdown} | {::nomarkdown}<pin>PA4</pin>{:/nomarkdown} | User I2C |
| <raw>I2C3</raw> | {::nomarkdown}<pin>PH8</pin>{:/nomarkdown} | {::nomarkdown}<pin>PH7</pin>{:/nomarkdown} | Additional I2C |

### UART/USART

| UART | TX Pin | RX Pin | Purpose |
| ---- | ------ | ------ | ------- |
| <raw>USART3</raw> | {::nomarkdown}<pin>PD8</pin>{:/nomarkdown} | {::nomarkdown}<pin>PD9</pin>{:/nomarkdown} | Available on expansion |
| <raw>UART4</raw> | {::nomarkdown}<pin>PD1</pin>{:/nomarkdown} | {::nomarkdown}<pin>PD0</pin>{:/nomarkdown} | Available on expansion |

### SPI Buses

| Bus | MOSI | MISO | SCK | Purpose |
| --- | ---- | ---- | --- | ------- |
| <raw>Motor SPI</raw> | {::nomarkdown}<pin>PD14</pin>{:/nomarkdown} | {::nomarkdown}<pin>PE4</pin>{:/nomarkdown} | {::nomarkdown}<pin>PI10</pin>{:/nomarkdown} | TMC2660 drivers |
| <raw>SPI1</raw> | {::nomarkdown}<pin>PB5</pin>{:/nomarkdown} | {::nomarkdown}<pin>PB4</pin>{:/nomarkdown} | {::nomarkdown}<pin>PB3</pin>{:/nomarkdown} | User SPI (displays) |

## Storage

### MicroSD (SDIO Interface)

| Signal | Smoothie Pin | Description |
| ------ | ------------ | ----------- |
| <raw>SD_D0</raw> | {::nomarkdown}<pin>PC8</pin>{:/nomarkdown} | Data line 0 |
| <raw>SD_D1</raw> | {::nomarkdown}<pin>PC9</pin>{:/nomarkdown} | Data line 1 |
| <raw>SD_D2</raw> | {::nomarkdown}<pin>PC10</pin>{:/nomarkdown} | Data line 2 |
| <raw>SD_D3</raw> | {::nomarkdown}<pin>PC11</pin>{:/nomarkdown} | Data line 3 |
| <raw>SD_CMD</raw> | {::nomarkdown}<pin>PD2</pin>{:/nomarkdown} | Command |
| <raw>SD_CK</raw> | {::nomarkdown}<pin>PC12</pin>{:/nomarkdown} | Clock |
| <raw>CARD_DET</raw> | {::nomarkdown}<pin>PG2</pin>{:/nomarkdown} | Card detection |

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="speedometer"></sl-icon>
  <strong>Performance:</strong> V2 uses SDIO interface (10-25 MB/s) instead of V1's SPI interface (~0.5 MB/s) - approximately 20-50× faster!
</sl-alert>
{:/nomarkdown}

### QSPI Flash

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>QSPI Flash Circuit</h4></div>
  <a href="/images/v2-schematic/parts/qspi-flash.png">
    <img src="/images/v2-schematic/parts/qspi-flash.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Quad-SPI flash for firmware storage
</div>
{:/nomarkdown}

| Signal | Smoothie Pin | Description |
| ------ | ------------ | ----------- |
| <raw>QSPI_IO0</raw> | {::nomarkdown}<pin>PD11</pin>{:/nomarkdown} | Data 0 |
| <raw>QSPI_IO1</raw> | {::nomarkdown}<pin>PD12</pin>{:/nomarkdown} | Data 1 |
| <raw>QSPI_IO2</raw> | {::nomarkdown}<pin>PE2</pin>{:/nomarkdown} | Data 2 |
| <raw>QSPI_IO3</raw> | {::nomarkdown}<pin>PD13</pin>{:/nomarkdown} | Data 3 |
| <raw>QSPI_SCK</raw> | {::nomarkdown}<pin>PB2</pin>{:/nomarkdown} | Clock |
| <raw>QSPI_CS</raw> | {::nomarkdown}<pin>PB6</pin>{:/nomarkdown} | Chip select |

## Debug Interface

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>SWD/JTAG Debug Interface</h4></div>
  <a href="/images/v2-schematic/parts/swd-jtag.png">
    <img src="/images/v2-schematic/parts/swd-jtag.png" style="width: 400px; height: auto;"/>
  </a><br/>
  Standard ARM debug connector with UART
</div>
{:/nomarkdown}

### SWD/JTAG (J41)

| Pin | Signal | Smoothie Pin | Description |
| --- | ------ | ------------ | ----------- |
| <raw>1</raw> | <raw>VTref</raw> | <raw>3V3</raw> | Reference voltage |
| <raw>2</raw> | <raw>SWDIO</raw> | {::nomarkdown}<pin>PA13</pin>{:/nomarkdown} | Debug data |
| <raw>3</raw> | <raw>GND</raw> | <raw>GND</raw> | Ground |
| <raw>4</raw> | <raw>SWCLK</raw> | {::nomarkdown}<pin>PA14</pin>{:/nomarkdown} | Debug clock |
| <raw>5</raw> | <raw>GND</raw> | <raw>GND</raw> | Ground |
| <raw>6</raw> | <raw>SWO</raw> | {::nomarkdown}<pin>PB3</pin>{:/nomarkdown} | Trace output |
| <raw>8</raw> | <raw>TDI</raw> | {::nomarkdown}<pin>PA15</pin>{:/nomarkdown} | JTAG data in |
| <raw>10</raw> | <raw>RESET</raw> | <raw>NRST</raw> | System reset |

### Debug UART (J30)

| Pin | Signal | Smoothie Pin | Description |
| --- | ------ | ------------ | ----------- |
| <raw>1</raw> | <raw>GND</raw> | <raw>GND</raw> | Ground |
| <raw>2</raw> | <raw>RX</raw> | {::nomarkdown}<pin>PD6</pin>{:/nomarkdown} | MCU receive (connect to TX) |
| <raw>3</raw> | <raw>TX</raw> | {::nomarkdown}<pin>PD5</pin>{:/nomarkdown} | MCU transmit (connect to RX) |

Baud rate: <raw>115200 8N1</raw>

## System Pins

### Crystals

| Crystal | Frequency | Input Pin | Output Pin | Purpose |
| ------- | --------- | --------- | ---------- | ------- |
| <raw>HSE</raw> | <raw>25 MHz</raw> | {::nomarkdown}<pin>PH0</pin>{:/nomarkdown} | {::nomarkdown}<pin>PH1</pin>{:/nomarkdown} | Main system clock |
| <raw>LSE</raw> | <raw>32.768 kHz</raw> | {::nomarkdown}<pin>PC14</pin>{:/nomarkdown} | {::nomarkdown}<pin>PC15</pin>{:/nomarkdown} | RTC clock |

### Boot Configuration

| Signal | Smoothie Pin | BGA Pin | Description |
| ------ | ------------ | ------- | ----------- |
| <raw>BOOT0</raw> | {::nomarkdown}<pin>BOOT0</pin>{:/nomarkdown} | <raw>E8</raw> | Boot mode (LOW=flash, HIGH=DFU) |
| <raw>NRST</raw> | {::nomarkdown}<pin>NRST</pin>{:/nomarkdown} | <raw>K1</raw> | System reset (active low) |

### Board Detection

| Signal | Smoothie Pin | BGA Pin | Description |
| ------ | ------------ | ------- | ----------- |
| <raw>BDET_PF3</raw> | {::nomarkdown}<pin>PF3</pin>{:/nomarkdown} | <raw>H4</raw> | Board ID bit 0 |
| <raw>BDET_PF5</raw> | {::nomarkdown}<pin>PF5</pin>{:/nomarkdown} | <raw>J4</raw> | Board ID bit 1 |
| <raw>BDET_PF7</raw> | {::nomarkdown}<pin>PF7</pin>{:/nomarkdown} | <raw>K3</raw> | Board ID bit 2 |
| <raw>BDET_PE10</raw> | {::nomarkdown}<pin>PE10</pin>{:/nomarkdown} | <raw>N9</raw> | Board ID bit 3 |

Board ID values:
- <raw>ID 0 (0000)</raw>: V2 Prime with TMC2590 drivers
- <raw>ID 1 (0001)</raw>: V2 Prime with TMC2660 drivers

## LED Indicators

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>LED Indicator Circuit</h4></div>
  <a href="/images/v2-schematic/parts/leds.png">
    <img src="/images/v2-schematic/parts/leds.png" style="width: 400px; height: auto;"/>
  </a><br/>
  4 debug LEDs showing boot progress
</div>
{:/nomarkdown}

| LED | Smoothie Pin | Signal | Description |
| --- | ------------ | ------ | ----------- |
| <raw>LED1</raw> | {::nomarkdown}<pin>PJ14</pin>{:/nomarkdown} | <raw>ILED1</raw> | Debug LED 1 (boot phase 4) |
| <raw>LED2</raw> | {::nomarkdown}<pin>PJ13</pin>{:/nomarkdown} | <raw>ILED2</raw> | Debug LED 2 (boot phase 3) |
| <raw>LED3</raw> | {::nomarkdown}<pin>PJ12</pin>{:/nomarkdown} | <raw>ILED3</raw> | Debug LED 3 (boot phase 2) |
| <raw>LED4</raw> | {::nomarkdown}<pin>PJ15</pin>{:/nomarkdown} | <raw>ILED4</raw> | Debug LED 4 (boot phase 1) |
| <raw>MSD</raw> | {::nomarkdown}<pin>PI0</pin>{:/nomarkdown} | <raw>MSD</raw> | Mass storage mode indicator |

## Gadgeteer Expansion Headers

{::nomarkdown}
<div class='panel panel-default wrap_right' style='width:420px;padding:10px;float:right;margin-left:1rem'>
  <div class='panel-heading'><h4 class='panel-title'>Expansion Headers Schematic</h4></div>
  <a href="/images/v2-schematic/parts/expansion-headers.png">
    <img src="/images/v2-schematic/parts/expansion-headers.png" style="width: 400px; height: auto;"/>
  </a><br/>
  9 Gadgeteer-style 10-pin expansion headers
</div>
{:/nomarkdown}

V2 Prime has 9 Gadgeteer-style 10-pin expansion headers (GA through GI).

### Standard Header Pinout

All headers follow this pinout:

| Pin | Function |
| --- | -------- |
| <raw>1</raw> | <raw>3.3V</raw> |
| <raw>2</raw> | <raw>5V</raw> |
| <raw>3-9</raw> | <raw>GPIO (varies by header)</raw> |
| <raw>10</raw> | <raw>GND</raw> |

### Header Pin Assignments

#### Header GA (J32) - Motor SPI / Encoder

| Pin | Smoothie Pin | Alternate Function |
| --- | ------------ | ------------------ |
| <raw>3</raw> | {::nomarkdown}<pin>PJ0</pin>{:/nomarkdown} | GPIO |
| <raw>4</raw> | {::nomarkdown}<pin>PJ1</pin>{:/nomarkdown} | GPIO |
| <raw>5</raw> | {::nomarkdown}<pin>PI11</pin>{:/nomarkdown} | GPIO |
| <raw>6</raw> | {::nomarkdown}<pin>PI12</pin>{:/nomarkdown} | GPIO |
| <raw>7</raw> | {::nomarkdown}<pin>PI13</pin>{:/nomarkdown} | GPIO |
| <raw>8</raw> | {::nomarkdown}<pin>PI14</pin>{:/nomarkdown} | GPIO |
| <raw>9</raw> | {::nomarkdown}<pin>PI15</pin>{:/nomarkdown} | GPIO |

#### Header GB (J33)

| Pin | Smoothie Pin | Alternate Function |
| --- | ------------ | ------------------ |
| <raw>3</raw> | {::nomarkdown}<pin>PK4</pin>{:/nomarkdown} | GPIO |
| <raw>4</raw> | {::nomarkdown}<pin>PK5</pin>{:/nomarkdown} | GPIO |
| <raw>5</raw> | {::nomarkdown}<pin>PK6</pin>{:/nomarkdown} | GPIO |
| <raw>6</raw> | {::nomarkdown}<pin>PK7</pin>{:/nomarkdown} | GPIO |
| <raw>7</raw> | {::nomarkdown}<pin>PG3</pin>{:/nomarkdown} | GPIO |
| <raw>8</raw> | {::nomarkdown}<pin>PG4</pin>{:/nomarkdown} | GPIO |
| <raw>9</raw> | {::nomarkdown}<pin>PG5</pin>{:/nomarkdown} | GPIO |

#### Header GC (J34)

| Pin | Smoothie Pin | Alternate Function |
| --- | ------------ | ------------------ |
| <raw>3</raw> | {::nomarkdown}<pin>PG6</pin>{:/nomarkdown} | GPIO |
| <raw>4</raw> | {::nomarkdown}<pin>PG7</pin>{:/nomarkdown} | GPIO |
| <raw>5</raw> | {::nomarkdown}<pin>PG8</pin>{:/nomarkdown} | GPIO |
| <raw>6</raw> | {::nomarkdown}<pin>PC6</pin>{:/nomarkdown} | GPIO |
| <raw>7</raw> | {::nomarkdown}<pin>PC7</pin>{:/nomarkdown} | GPIO |
| <raw>8</raw> | {::nomarkdown}<pin>PD15</pin>{:/nomarkdown} | GPIO |
| <raw>9</raw> | {::nomarkdown}<pin>PD14</pin>{:/nomarkdown} | GPIO |

#### Header GD (J35) - UART / PWM

| Pin | Smoothie Pin | Alternate Function |
| --- | ------------ | ------------------ |
| <raw>3</raw> | {::nomarkdown}<pin>PD0</pin>{:/nomarkdown} | UART4_RX |
| <raw>4</raw> | {::nomarkdown}<pin>PD1</pin>{:/nomarkdown} | UART4_TX |
| <raw>5</raw> | {::nomarkdown}<pin>PD3</pin>{:/nomarkdown} | GPIO |
| <raw>6</raw> | {::nomarkdown}<pin>PD4</pin>{:/nomarkdown} | GPIO |
| <raw>7</raw> | {::nomarkdown}<pin>PD5</pin>{:/nomarkdown} | USART2_TX |
| <raw>8</raw> | {::nomarkdown}<pin>PD6</pin>{:/nomarkdown} | USART2_RX |
| <raw>9</raw> | {::nomarkdown}<pin>PD7</pin>{:/nomarkdown} | GPIO |

#### Header GE (J36) - Timer / PWM

| Pin | Smoothie Pin | Alternate Function |
| --- | ------------ | ------------------ |
| <raw>3</raw> | {::nomarkdown}<pin>PE0</pin>{:/nomarkdown} | GPIO |
| <raw>4</raw> | {::nomarkdown}<pin>PE1</pin>{:/nomarkdown} | GPIO |
| <raw>5</raw> | {::nomarkdown}<pin>PE3</pin>{:/nomarkdown} | GPIO |
| <raw>6</raw> | {::nomarkdown}<pin>PE5</pin>{:/nomarkdown} | TIM15_CH1 |
| <raw>7</raw> | {::nomarkdown}<pin>PE6</pin>{:/nomarkdown} | TIM15_CH2 |
| <raw>8</raw> | {::nomarkdown}<pin>PE7</pin>{:/nomarkdown} | GPIO |
| <raw>9</raw> | {::nomarkdown}<pin>PE8</pin>{:/nomarkdown} | GPIO |

#### Header GF (J37)

| Pin | Smoothie Pin | Alternate Function |
| --- | ------------ | ------------------ |
| <raw>3</raw> | {::nomarkdown}<pin>PF0</pin>{:/nomarkdown} | GPIO |
| <raw>4</raw> | {::nomarkdown}<pin>PF1</pin>{:/nomarkdown} | GPIO |
| <raw>5</raw> | {::nomarkdown}<pin>PF2</pin>{:/nomarkdown} | GPIO |
| <raw>6</raw> | {::nomarkdown}<pin>PF4</pin>{:/nomarkdown} | GPIO |
| <raw>7</raw> | {::nomarkdown}<pin>PF6</pin>{:/nomarkdown} | GPIO |
| <raw>8</raw> | {::nomarkdown}<pin>PF8</pin>{:/nomarkdown} | GPIO |
| <raw>9</raw> | {::nomarkdown}<pin>PF9</pin>{:/nomarkdown} | GPIO |

#### Header GG (J38) - I2C

| Pin | Smoothie Pin | Alternate Function |
| --- | ------------ | ------------------ |
| <raw>3</raw> | {::nomarkdown}<pin>PF10</pin>{:/nomarkdown} | GPIO |
| <raw>4</raw> | {::nomarkdown}<pin>PF13</pin>{:/nomarkdown} | GPIO |
| <raw>5</raw> | {::nomarkdown}<pin>PF14</pin>{:/nomarkdown} | I2C4_SCL |
| <raw>6</raw> | {::nomarkdown}<pin>PF15</pin>{:/nomarkdown} | I2C4_SDA |
| <raw>7</raw> | {::nomarkdown}<pin>PH3</pin>{:/nomarkdown} | GPIO |
| <raw>8</raw> | {::nomarkdown}<pin>PH4</pin>{:/nomarkdown} | GPIO |
| <raw>9</raw> | {::nomarkdown}<pin>PH5</pin>{:/nomarkdown} | GPIO |

#### Header GH (J39) - ADC

| Pin | Smoothie Pin | Alternate Function |
| --- | ------------ | ------------------ |
| <raw>3</raw> | {::nomarkdown}<pin>PA3</pin>{:/nomarkdown} | ADC1_CH15 |
| <raw>4</raw> | {::nomarkdown}<pin>PA5</pin>{:/nomarkdown} | DAC1_OUT2 |
| <raw>5</raw> | {::nomarkdown}<pin>PA6</pin>{:/nomarkdown} | ADC1_CH3 |
| <raw>6</raw> | {::nomarkdown}<pin>PB0</pin>{:/nomarkdown} | ADC1_CH9 |
| <raw>7</raw> | {::nomarkdown}<pin>PB1</pin>{:/nomarkdown} | ADC1_CH5 |
| <raw>8</raw> | {::nomarkdown}<pin>PA8</pin>{:/nomarkdown} | GPIO |
| <raw>9</raw> | {::nomarkdown}<pin>PA9</pin>{:/nomarkdown} | GPIO |

#### Header GI (J40)

| Pin | Smoothie Pin | Alternate Function |
| --- | ------------ | ------------------ |
| <raw>3</raw> | {::nomarkdown}<pin>PA10</pin>{:/nomarkdown} | GPIO |
| <raw>4</raw> | {::nomarkdown}<pin>PH10</pin>{:/nomarkdown} | GPIO |
| <raw>5</raw> | {::nomarkdown}<pin>PH11</pin>{:/nomarkdown} | GPIO |
| <raw>6</raw> | {::nomarkdown}<pin>PH12</pin>{:/nomarkdown} | GPIO |
| <raw>7</raw> | {::nomarkdown}<pin>PB10</pin>{:/nomarkdown} | GPIO |
| <raw>8</raw> | {::nomarkdown}<pin>PB11</pin>{:/nomarkdown} | GPIO |
| <raw>9</raw> | {::nomarkdown}<pin>PH14</pin>{:/nomarkdown} | GPIO |

## Complete BGA Pin Reference

### ADC Channel Mapping (Thermistors)

The firmware maps ADC channel names to physical pins. Use the Config Pin in your config files:

| Config Pin | STM32 Pin | ADC Hardware | Typical Use |
| ---------- | --------- | ------------ | ----------- |
| {::nomarkdown}<pin>ADC1_0</pin>{:/nomarkdown} | <raw>PA0_C</raw> | <raw>ADC1_INP0</raw> | Board Temperature (T4) |
| {::nomarkdown}<pin>ADC1_1</pin>{:/nomarkdown} | <raw>PF11</raw> | <raw>ADC1_INP2</raw> | Thermistor 1 (T1) |
| {::nomarkdown}<pin>ADC1_2</pin>{:/nomarkdown} | <raw>PF12</raw> | <raw>ADC1_INP6</raw> | Thermistor 2 (T2) |
| {::nomarkdown}<pin>ADC1_3</pin>{:/nomarkdown} | <raw>PB0</raw> | <raw>ADC1_INP9</raw> | Thermistor 3 (T3) |
| {::nomarkdown}<pin>ADC1_4</pin>{:/nomarkdown} | <raw>PC2</raw> | <raw>ADC1_INP12</raw> | Expansion (GH) |
| {::nomarkdown}<pin>ADC1_5</pin>{:/nomarkdown} | <raw>PC3</raw> | <raw>ADC1_INP13</raw> | Expansion (GH) |
| {::nomarkdown}<pin>ADC1_6</pin>{:/nomarkdown} | <raw>PA3</raw> | <raw>ADC1_INP15</raw> | Expansion (GH) |

### Power Pins Summary

| Type | Count | Voltage |
| ---- | ----- | ------- |
| <raw>VDD</raw> | <raw>15</raw> | <raw>3.3V</raw> |
| <raw>VSS</raw> | <raw>30+</raw> | <raw>GND</raw> |
| <raw>VDDA</raw> | <raw>1</raw> | <raw>3.3V (analog)</raw> |
| <raw>VSSA</raw> | <raw>1</raw> | <raw>GND (analog)</raw> |
| <raw>VREF+</raw> | <raw>1</raw> | <raw>3.3V (ADC ref)</raw> |
| <raw>VREF-</raw> | <raw>1</raw> | <raw>GND (ADC ref)</raw> |
| <raw>VBAT</raw> | <raw>1</raw> | <raw>3V (RTC backup)</raw> |
| <raw>VDDLDO</raw> | <raw>3</raw> | <raw>1.2V (internal)</raw> |
| <raw>VCAP</raw> | <raw>3</raw> | <raw>1.2V (core caps)</raw> |

## STM32H7 ADC Channels Summary

This table shows the relationship between Smoothieware config names and STM32 hardware.

| Config Name | STM32 Pin | ADC Hardware | Assignment |
| ----------- | --------- | ------------ | ---------- |
| {::nomarkdown}<pin>ADC1_0</pin>{:/nomarkdown} | <raw>PA0_C</raw> | <raw>ADC1_INP0</raw> | Board Temperature |
| {::nomarkdown}<pin>ADC1_1</pin>{:/nomarkdown} | <raw>PF11</raw> | <raw>ADC1_INP2</raw> | Thermistor 1 |
| {::nomarkdown}<pin>ADC1_2</pin>{:/nomarkdown} | <raw>PF12</raw> | <raw>ADC1_INP6</raw> | Thermistor 2 |
| {::nomarkdown}<pin>ADC1_3</pin>{:/nomarkdown} | <raw>PB0</raw> | <raw>ADC1_INP9</raw> | Thermistor 3 |
| {::nomarkdown}<pin>ADC1_4</pin>{:/nomarkdown} | <raw>PC2</raw> | <raw>ADC1_INP12</raw> | Expansion (GH) |
| {::nomarkdown}<pin>ADC1_5</pin>{:/nomarkdown} | <raw>PC3</raw> | <raw>ADC1_INP13</raw> | Expansion (GH) |
| {::nomarkdown}<pin>ADC1_6</pin>{:/nomarkdown} | <raw>PA3</raw> | <raw>ADC1_INP15</raw> | Expansion (GH) |
| {::nomarkdown}<pin>ADC3_0</pin>{:/nomarkdown} | <raw>PC0</raw> | <raw>ADC3_INP10</raw> | Voltage Monitor |
| {::nomarkdown}<pin>PC4</pin>{:/nomarkdown} | <raw>PC4</raw> | <raw>ADC1_INP4</raw> | VMOT sense |
| {::nomarkdown}<pin>PC5</pin>{:/nomarkdown} | <raw>PC5</raw> | <raw>ADC1_INP8</raw> | VFET sense |

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> ADC pins are NOT 5V tolerant. Maximum input voltage is 3.3V. The buffered thermistor inputs (T1-T4) have protection circuitry; unbuffered ADC pins on expansion headers do not.
</sl-alert>
{:/nomarkdown}

## Hardcoded vs Configurable Pins

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Hardcoded Pins:</strong><br><br>
  The following pins are hardcoded in firmware and would need source code changes to modify:
  <ul>
    <li>USB Device: <pin>PA11</pin>, <pin>PA12</pin></li>
    <li>Debug: <pin>PA13</pin> (SWDIO), <pin>PA14</pin> (SWCLK)</li>
    <li>SD Card (SDIO): <pin>PC8</pin>-<pin>PC12</pin>, <pin>PD2</pin></li>
    <li>Crystals: <pin>PH0</pin>, <pin>PH1</pin>, <pin>PC14</pin>, <pin>PC15</pin></li>
    <li>Motor SPI: <pin>PD14</pin>, <pin>PE4</pin>, <pin>PI10</pin></li>
    <li>Board detect: <pin>PF3</pin>, <pin>PF5</pin>, <pin>PF7</pin>, <pin>PE10</pin></li>
  </ul>
  All other pins can be reassigned via the configuration file.
</sl-alert>
{:/nomarkdown}

## Configuration Jumpers Summary

| Jumper | Type | Location | Default | Function |
| ------ | ---- | -------- | ------- | -------- |
| <raw>JP1-JP6</raw> | <raw>3-way solder</raw> | <raw>Near endstops</raw> | <raw>3.3V pull-up</raw> | Endstop pull configuration |
| <raw>JP7</raw> | <raw>2-way solder</raw> | <raw>Bottom, near probe</raw> | <raw>Bridged</raw> | Probe voltage range (<5V/2.9-26V) |
| <raw>JP15</raw> | <raw>2-way solder</raw> | <raw>Bottom, near 5V</raw> | <raw>Open</raw> | Disable USB 5V input |
| <raw>JP16</raw> | <raw>2-way solder</raw> | <raw>Top, near OSHW</raw> | <raw>Open</raw> | Disable onboard 5V regulator |
| <raw>JP17</raw> | <raw>2-way solder</raw> | <raw>-</raw> | <raw>Bridged</raw> | Configuration |

## V1 to V2 Pin Mapping Reference

For users migrating from V1, here's how key functions map between versions:

| Function | V1 Pin | V2 Pin | Notes |
| -------- | ------ | ------ | ----- |
| <raw>Alpha Step</raw> | {::nomarkdown}<pin>2.0</pin>{:/nomarkdown} | {::nomarkdown}<pin>PG0</pin>{:/nomarkdown} | |
| <raw>Alpha Dir</raw> | {::nomarkdown}<pin>0.5</pin>{:/nomarkdown} | {::nomarkdown}<pin>PG1</pin>{:/nomarkdown} | |
| <raw>Alpha Enable</raw> | {::nomarkdown}<pin>0.4</pin>{:/nomarkdown} | {::nomarkdown}<pin>PH13</pin>{:/nomarkdown} | Shared enable in V2 |
| <raw>Hotend Therm</raw> | {::nomarkdown}<pin>0.23</pin>{:/nomarkdown} | {::nomarkdown}<pin>ADC1_1</pin>{:/nomarkdown} | Buffered in V2, maps to PF11 |
| <raw>Bed Therm</raw> | {::nomarkdown}<pin>0.24</pin>{:/nomarkdown} | {::nomarkdown}<pin>ADC1_2</pin>{:/nomarkdown} | Buffered in V2, maps to PF12 |
| <raw>X Min Endstop</raw> | {::nomarkdown}<pin>1.24</pin>{:/nomarkdown} | {::nomarkdown}<pin>PG10</pin>{:/nomarkdown} | |
| <raw>Hotend Heater</raw> | {::nomarkdown}<pin>2.7</pin>{:/nomarkdown} | {::nomarkdown}<pin>PJ6</pin>{:/nomarkdown} | Via 74HCT541 buffer |
| <raw>Bed Heater</raw> | {::nomarkdown}<pin>2.5</pin>{:/nomarkdown} | {::nomarkdown}<pin>PJ10</pin>{:/nomarkdown} | Via 74HCT541 buffer |

## Related Documentation

- [V2 Schematic Reference](/v2-schematic) - Complete schematic documentation
- [Smoothieboard V2](/smoothieboard-v2) - Main V2 documentation
- [LPC1769 Pin Usage](/lpc1769-pin-usage) - V1 pin reference (for comparison)
- [Pin Configuration](/pin-configuration) - How to configure pins in config file

## V2 Prime Schematic Pages

The following images are extracted from the V2 Prime (TMC2660 variant) KiCad schematic PDF:

{::nomarkdown}
<style>
.schematic-figure {
  width: 100%;
  margin: 2em 0;
}
.schematic-figure img {
  width: 100%;
  height: auto;
  border: 1px solid #444;
  border-radius: 4px;
}
.schematic-figure figcaption {
  text-align: center;
  font-size: 0.9em;
  color: #aaa;
  margin-top: 0.5em;
  font-style: italic;
}
</style>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-01.png">
    <img src="/images/v2-schematic/schematic-page-01.png" alt="Schematic Page 1">
  </a>
  <figcaption>Page 1: Main Sheet - MCU and Top-Level Connections</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-02.png">
    <img src="/images/v2-schematic/schematic-page-02.png" alt="Schematic Page 2">
  </a>
  <figcaption>Page 2: Ethernet PHY (LAN8720A)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-03.png">
    <img src="/images/v2-schematic/schematic-page-03.png" alt="Schematic Page 3">
  </a>
  <figcaption>Page 3: MOSFET Outputs (Heaters, Fans, SSR)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-04.png">
    <img src="/images/v2-schematic/schematic-page-04.png" alt="Schematic Page 4">
  </a>
  <figcaption>Page 4: Inputs (Thermistors, Endstops, Probe)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-05.png">
    <img src="/images/v2-schematic/schematic-page-05.png" alt="Schematic Page 5">
  </a>
  <figcaption>Page 5: Expansion Headers (Gadgeteer GA-GI)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-06.png">
    <img src="/images/v2-schematic/schematic-page-06.png" alt="Schematic Page 6">
  </a>
  <figcaption>Page 6: Power Supply (5V, 3.3V regulators)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-07.png">
    <img src="/images/v2-schematic/schematic-page-07.png" alt="Schematic Page 7">
  </a>
  <figcaption>Page 7: Ideal Diode Circuit (5V Regulator)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-08.png">
    <img src="/images/v2-schematic/schematic-page-08.png" alt="Schematic Page 8">
  </a>
  <figcaption>Page 8: Ideal Diode Circuit (USB)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-09.png">
    <img src="/images/v2-schematic/schematic-page-09.png" alt="Schematic Page 9">
  </a>
  <figcaption>Page 9: Ideal Diode Circuit (External 5V)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-10.png">
    <img src="/images/v2-schematic/schematic-page-10.png" alt="Schematic Page 10">
  </a>
  <figcaption>Page 10: Motor Driver A (TMC2660)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-11.png">
    <img src="/images/v2-schematic/schematic-page-11.png" alt="Schematic Page 11">
  </a>
  <figcaption>Page 11: Motor Driver B (TMC2660)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-12.png">
    <img src="/images/v2-schematic/schematic-page-12.png" alt="Schematic Page 12">
  </a>
  <figcaption>Page 12: Motor Driver C (TMC2660)</figcaption>
</figure>

<figure class="schematic-figure">
  <a href="/images/v2-schematic/schematic-page-13.png">
    <img src="/images/v2-schematic/schematic-page-13.png" alt="Schematic Page 13">
  </a>
  <figcaption>Page 13: Motor Driver D (TMC2660)</figcaption>
</figure>
{:/nomarkdown}
