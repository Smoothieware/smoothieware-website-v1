---
permalink: /lpc1769-pin-usage
---


# LPC1769 Pin Usage

This page documents all pin assignments for the LPC1769 microcontroller on Smoothieboard.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="cpu"></sl-icon>
  This comprehensive reference shows how every pin on the LPC1769 is assigned on Smoothieboard. Use this to identify available pins for custom functionality.
</sl-alert>
{:/nomarkdown}

## Pin list

The following table shows all pin assignments on the LPC1769 microcontroller:

| ARM Pin | Smoothie Pin | mBed Pin | LPCXpresso Pin | Assignment | Comment |
| ------- | ------------ | -------- | -------------- | ---------- | ------- |
| <raw>P0.0</raw> | {::nomarkdown}<pin>0.0</pin>{:/nomarkdown} | <raw>P9</raw> | <raw>9</raw> | i2c1 sda | Internal I2C bus. Used for digipots and port expander. |
| <raw>P0.1</raw> | {::nomarkdown}<pin>0.1</pin>{:/nomarkdown} | <raw>P10</raw> | <raw>10</raw> | i2c1 scl | Internal I2C bus. Used for digipots and port expander. |
| <raw>P0.2</raw> | {::nomarkdown}<pin>0.2</pin>{:/nomarkdown} | <raw>USBTX</raw> | <raw>21</raw> | uart0 txd | Used for ISP programming of the bootloader and for debugging. |
| <raw>P0.3</raw> | {::nomarkdown}<pin>0.3</pin>{:/nomarkdown} | <raw>USBRX</raw> | <raw>22</raw> | uart0 rxd | Used for ISP programming of the bootloader and for debugging. |
| <raw>P0.4</raw> | {::nomarkdown}<pin>0.4</pin>{:/nomarkdown} | <raw>P30</raw> | <raw>38</raw> | alpha_en_pin | |
| <raw>P0.5</raw> | {::nomarkdown}<pin>0.5</pin>{:/nomarkdown} | <raw>P29</raw> | <raw>39</raw> | alpha_dir_pin | |
| <raw>P0.6</raw> | {::nomarkdown}<pin>0.6</pin>{:/nomarkdown} | <raw>P8</raw> | <raw>8</raw> | spi1 ssel | sdcard |
| <raw>P0.7</raw> | {::nomarkdown}<pin>0.7</pin>{:/nomarkdown} | <raw>P7</raw> | <raw>7</raw> | spi1 sck | sdcard |
| <raw>P0.8</raw> | {::nomarkdown}<pin>0.8</pin>{:/nomarkdown} | <raw>P6</raw> | <raw>6</raw> | spi1 miso | sdcard |
| <raw>P0.9</raw> | {::nomarkdown}<pin>0.9</pin>{:/nomarkdown} | <raw>P5</raw> | <raw>5</raw> | spi1 mosi | sdcard |
| <raw>P0.10</raw> | {::nomarkdown}<pin>0.10</pin>{:/nomarkdown} | <raw>P28</raw> | <raw>40</raw> | beta_en_pin | also i2c2 sda |
| <raw>P0.11</raw> | {::nomarkdown}<pin>0.11</pin>{:/nomarkdown} | <raw>P27</raw> | <raw>41</raw> | beta_dir_pin | also i2c2 scl |
| <raw>P0.15</raw> | {::nomarkdown}<pin>0.15</pin>{:/nomarkdown} | <raw>P13</raw> | <raw>13</raw> | spi0 sck | User spi port. used for rrd glcd |
| <raw>P0.16</raw> | {::nomarkdown}<pin>0.16</pin>{:/nomarkdown} | <raw>P14</raw> | <raw>14</raw> | spi0 ssel | User spi port. used for rrd glcd cs |
| <raw>P0.17</raw> | {::nomarkdown}<pin>0.17</pin>{:/nomarkdown} | <raw>P12</raw> | <raw>12</raw> | spi0 miso | User spi port. |
| <raw>P0.18</raw> | {::nomarkdown}<pin>0.18</pin>{:/nomarkdown} | <raw>P11</raw> | <raw>11</raw> | spi0 mosi | User spi port. used for rrd glcd |
| <raw>P0.19</raw> | {::nomarkdown}<pin>0.19</pin>{:/nomarkdown} | - | <raw>Pad17</raw> | gamma_en_pin | also i2c3 sda on lpcxpresso e2prom |
| <raw>P0.20</raw> | {::nomarkdown}<pin>0.20</pin>{:/nomarkdown} | - | <raw>Pad18</raw> | gamma_dir_pin | also i2c3 scl on lpcxpresso e2prom |
| <raw>P0.21</raw> | {::nomarkdown}<pin>0.21</pin>{:/nomarkdown} | - | <raw>23</raw> | delta_en_pin | |
| <raw>P0.22</raw> | {::nomarkdown}<pin>0.22</pin>{:/nomarkdown} | - | <raw>24</raw> | delta_dir_pin | lpcxpresso led |
| <raw>P0.23</raw> | {::nomarkdown}<pin>0.23</pin>{:/nomarkdown} | <raw>P15</raw> | <raw>15</raw> | hotend.thermistor_pin | |
| <raw>P0.24</raw> | {::nomarkdown}<pin>0.24</pin>{:/nomarkdown} | <raw>P16</raw> | <raw>16</raw> | bed.thermistor_pin | |
| <raw>P0.25</raw> | {::nomarkdown}<pin>0.25</pin>{:/nomarkdown} | <raw>P17</raw> | <raw>17</raw> | thermistor2 | |
| <raw>P0.26</raw> | {::nomarkdown}<pin>0.26</pin>{:/nomarkdown} | <raw>P18</raw> | <raw>18</raw> | thermistor3 | |
| <raw>P0.27</raw> | {::nomarkdown}<pin>0.27</pin>{:/nomarkdown} | - | <raw>25</raw> | i2c0 sda | User i2c port. sd cd on rrd glcd adapter |
| <raw>P0.28</raw> | {::nomarkdown}<pin>0.28</pin>{:/nomarkdown} | - | <raw>26</raw> | i2c0 scl | User i2c port. sd cs2 on rrd glcd adapter |
| <raw>P0.29</raw> | {::nomarkdown}<pin>0.29</pin>{:/nomarkdown} | <raw>31</raw> | <raw>37</raw> | USB-D+ | |
| <raw>P0.30</raw> | {::nomarkdown}<pin>0.30</pin>{:/nomarkdown} | <raw>32</raw> | <raw>36</raw> | USB-D- | |
| <raw>P1.0</raw> | {::nomarkdown}<pin>1.0</pin>{:/nomarkdown} | | | eth txd0 | |
| <raw>P1.1</raw> | {::nomarkdown}<pin>1.1</pin>{:/nomarkdown} | | | eth txd1 | |
| <raw>P1.4</raw> | {::nomarkdown}<pin>1.4</pin>{:/nomarkdown} | | | eth tx en | |
| <raw>P1.8</raw> | {::nomarkdown}<pin>1.8</pin>{:/nomarkdown} | | | eth crs | |
| <raw>P1.9</raw> | {::nomarkdown}<pin>1.9</pin>{:/nomarkdown} | | | eth rxd0 | |
| <raw>P1.10</raw> | {::nomarkdown}<pin>1.10</pin>{:/nomarkdown} | | | eth rxd1 | |
| <raw>P1.14</raw> | {::nomarkdown}<pin>1.14</pin>{:/nomarkdown} | | | eth rx err | |
| <raw>P1.15</raw> | {::nomarkdown}<pin>1.15</pin>{:/nomarkdown} | | | eth ref clk | |
| <raw>P1.16</raw> | {::nomarkdown}<pin>1.16</pin>{:/nomarkdown} | | | eth mdc | |
| <raw>P1.17</raw> | {::nomarkdown}<pin>1.17</pin>{:/nomarkdown} | | | eth mdio | |
| <raw>P1.18</raw> | {::nomarkdown}<pin>1.18</pin>{:/nomarkdown} | <raw>LED1</raw> | <raw>Pad1</raw> | led1 | h/w `PWM` capable. can be free if leds_disable is set true in config. |
| <raw>P1.19</raw> | {::nomarkdown}<pin>1.19</pin>{:/nomarkdown} | - | <raw>Pad2</raw> | led2 | can be free if leds_disable is set true in config. |
| <raw>P1.20</raw> | {::nomarkdown}<pin>1.20</pin>{:/nomarkdown} | <raw>LED2</raw> | <raw>Pad3</raw> | led3 | h/w `PWM` capable. can be free if leds_disable is set true in config. |
| <raw>P1.21</raw> | {::nomarkdown}<pin>1.21</pin>{:/nomarkdown} | <raw>LED3</raw> | <raw>Pad4</raw> | led4 | h/w `PWM` capable. can be free if leds_disable is set true in config. |
| <raw>P1.22</raw> | {::nomarkdown}<pin>1.22</pin>{:/nomarkdown} | - | <raw>Pad5</raw> | 3rd small fet | spare on 3 and 4 driver boards |
| <raw>P1.23</raw> | {::nomarkdown}<pin>1.23</pin>{:/nomarkdown} | <raw>LED4</raw> | <raw>Pad6</raw> | 3rd large fet | spare on 3 and 4 driver boards, h/w `PWM` capable |
| <raw>P1.24</raw> | {::nomarkdown}<pin>1.24</pin>{:/nomarkdown} | - | <raw>Pad7</raw> | alpha_min_endstop | h/w `PWM` capable |
| <raw>P1.25</raw> | {::nomarkdown}<pin>1.25</pin>{:/nomarkdown} | - | <raw>Pad8</raw> | alpha_max_endstop | |
| <raw>P1.26</raw> | {::nomarkdown}<pin>1.26</pin>{:/nomarkdown} | - | <raw>Pad9</raw> | beta_min_endstop | h/w `PWM` capable |
| <raw>P1.27</raw> | {::nomarkdown}<pin>1.27</pin>{:/nomarkdown} | - | <raw>Pad10</raw> | beta_max_endstop | |
| <raw>P1.28</raw> | {::nomarkdown}<pin>1.28</pin>{:/nomarkdown} | - | <raw>Pad11</raw> | gamma_min_endstop | |
| <raw>P1.29</raw> | {::nomarkdown}<pin>1.29</pin>{:/nomarkdown} | - | <raw>Pad12</raw> | gamma_max_endstop | |
| <raw>P1.30</raw> | {::nomarkdown}<pin>1.30</pin>{:/nomarkdown} | <raw>P19</raw> | <raw>19</raw> | **spare** | used for click button on rrd glcd |
| <raw>P1.31</raw> | {::nomarkdown}<pin>1.31</pin>{:/nomarkdown} | <raw>P20</raw> | <raw>20</raw> | **spare** | used for buzzer on rrd glcd |
| <raw>P2.0</raw> | {::nomarkdown}<pin>2.0</pin>{:/nomarkdown} | <raw>P26</raw> | <raw>42</raw> | alpha_step_pin | h/w `PWM` capable |
| <raw>P2.1</raw> | {::nomarkdown}<pin>2.1</pin>{:/nomarkdown} | <raw>P25</raw> | <raw>43</raw> | beta_step_pin | h/w `PWM` capable |
| <raw>P2.2</raw> | {::nomarkdown}<pin>2.2</pin>{:/nomarkdown} | <raw>P24</raw> | <raw>44</raw> | gamma_step_pin | h/w `PWM` capable |
| <raw>P2.3</raw> | {::nomarkdown}<pin>2.3</pin>{:/nomarkdown} | <raw>P23</raw> | <raw>45</raw> | delta_step_pin | h/w `PWM` capable |
| <raw>P2.4</raw> | {::nomarkdown}<pin>2.4</pin>{:/nomarkdown} | <raw>P22</raw> | <raw>46</raw> | psu.output_pin | h/w `PWM` capable |
| <raw>P2.5</raw> | {::nomarkdown}<pin>2.5</pin>{:/nomarkdown} | <raw>P21</raw> | <raw>47</raw> | bed.heater_pin | h/w `PWM` capable |
| <raw>P2.6</raw> | {::nomarkdown}<pin>2.6</pin>{:/nomarkdown} | - | <raw>48</raw> | fan.output_pin | |
| <raw>P2.7</raw> | {::nomarkdown}<pin>2.7</pin>{:/nomarkdown} | - | <raw>49</raw> | hotend.heater_pin | |
| <raw>P2.8</raw> | {::nomarkdown}<pin>2.8</pin>{:/nomarkdown} | - | <raw>50</raw> | epsilon_step_pin | spare on 3 and 4 driver |
| <raw>P2.9</raw> | {::nomarkdown}<pin>2.9</pin>{:/nomarkdown} | - | <raw>Pad19</raw> | USB soft connect | |
| <raw>P2.10</raw> | {::nomarkdown}<pin>2.10</pin>{:/nomarkdown} | - | <raw>51</raw> | ISP button | |
| <raw>P2.11</raw> | {::nomarkdown}<pin>2.11</pin>{:/nomarkdown} | - | <raw>52</raw> | **spare** | used for pause/kill/back pin on glcd |
| <raw>P2.12</raw> | {::nomarkdown}<pin>2.12</pin>{:/nomarkdown} | - | <raw>53</raw> | kill button | Hardwired in Bootloader as ISP button and in kill module as pause button |
| <raw>P2.13</raw> | {::nomarkdown}<pin>2.13</pin>{:/nomarkdown} | - | <raw>27</raw> | epsilon_dir_pin | spare on 3 and 4 driver |
| <raw>P3.25</raw> | {::nomarkdown}<pin>3.25</pin>{:/nomarkdown} | - | <raw>Pad13</raw> | **spare** | used for encoder pin for all panels, h/w `PWM` capable |
| <raw>P3.26</raw> | {::nomarkdown}<pin>3.26</pin>{:/nomarkdown} | - | <raw>Pad14</raw> | **spare** | used for encoder pin for all panels, h/w `PWM` capable |
| <raw>P4.28</raw> | {::nomarkdown}<pin>4.28</pin>{:/nomarkdown} | - | <raw>Pad15</raw> | play/pause led | |
| <raw>P4.29</raw> | {::nomarkdown}<pin>4.29</pin>{:/nomarkdown} | - | <raw>Pad16</raw> | epsilon_en_pin | spare on 3 and 4 driver cannot be used in opendrain |

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Hardwired Pins:</strong><br><br>
  The following pins are hardwired and would need to be changed in source code: <pin>0.2</pin> <pin>0.3</pin>, <pin>0.6</pin>-<pin>0.9</pin>, <pin>0.29</pin>, <pin>0.30</pin>, <pin>2.9</pin>, <pin>2.10</pin>, <pin>2.12</pin>. The rest are configurable in config.<br><br>

  Some pins are also setup as outputs and changed in the Bootloader and those are not configurable, these pins are: <pin>1.18</pin>, <pin>1.19</pin>, <pin>1.20</pin>, <pin>1.21</pin>, <pin>4.28</pin>, <pin>2.4</pin>, <pin>2.5</pin>, <pin>2.6</pin>, <pin>2.7</pin>. However once booted these can be reassigned if needed.<br><br>

  <code>P0.*</code> and <code>P2.*</code> can be setup as interrupt enabled pins.
</sl-alert>
{:/nomarkdown}

## Pin Format Reference

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Pin Format:** `port.pin` with optional modifiers

- Basic format: `1.24`, `2.0`, `0.11`
- Pull-up modifier: `1.24^` (enable internal pull-up)
- Inverted logic: `1.24!` (invert pin logic)
- Open-drain: `2.0o` (configure as open-drain)
- Combined: `1.24^!` (pull-up + inverted)

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Pin Format:** Similar `port.pin` format with additional options

- Basic format: `PA.0`, `PB.5`, or numeric `1.24`, `2.0`
- Named pins: Board-specific named pins may be available
- Modifiers: Similar to V1 (pull-up `^`, inverted `!`, open-drain `o`)
- Check board-specific documentation for exact pin names and available features

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## Migration Guide: V1 to V2 Pin Configuration

This section shows real-world examples of converting V1 pin configurations to V2 format.

### Stepper Motor Pin Configuration

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

```
# Alpha (X) axis motor configuration
alpha_step_pin                      2.0
alpha_dir_pin                       0.5
alpha_en_pin                        0.4

# Beta (Y) axis motor configuration
beta_step_pin                       2.1
beta_dir_pin                        0.11
beta_en_pin                         0.10
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```
# Alpha (X) axis motor configuration
alpha_step_pin                      2.0
alpha_dir_pin                       0.5
alpha_en_pin                        0.4

# Beta (Y) axis motor configuration
beta_step_pin                       2.1
beta_dir_pin                        0.11
beta_en_pin                         0.10

# V2 maintains backward compatibility with numeric pin format
# Named pin aliases may be available depending on board
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Endstop Configuration with Modifiers

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

```
# Min endstops with pull-up resistors
alpha_min_endstop                   1.24^
beta_min_endstop                    1.26^
gamma_min_endstop                   1.28^

# Max endstops inverted logic
alpha_max_endstop                   1.25!
beta_max_endstop                    1.27!
gamma_max_endstop                   1.29!
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```
# Min endstops with pull-up resistors
alpha_min_endstop                   1.24^
beta_min_endstop                    1.26^
gamma_min_endstop                   1.28^

# Max endstops inverted logic
alpha_max_endstop                   1.25!
beta_max_endstop                    1.27!
gamma_max_endstop                   1.29!

# Modifier syntax remains the same in V2
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Heater and Temperature Sensor Configuration

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

```
# Hotend configuration
temperature_control.hotend.heater_pin    2.7
temperature_control.hotend.thermistor_pin 0.23

# Heated bed configuration
temperature_control.bed.heater_pin       2.5
temperature_control.bed.thermistor_pin   0.24
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```
# Hotend configuration
temperature_control.hotend.heater_pin    2.7
temperature_control.hotend.thermistor_pin 0.23

# Heated bed configuration
temperature_control.bed.heater_pin       2.5
temperature_control.bed.thermistor_pin   0.24

# Pin assignments remain compatible in V2
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Fan and Switch Configuration

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

```
# Cooling fan
switch.fan.output_pin               2.6

# PSU control (inverted, open-drain)
switch.psu.output_pin               2.4!o

# Auxiliary outputs
switch.misc.output_pin              1.22
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```
# Cooling fan
switch.fan.output_pin               2.6

# PSU control (inverted, open-drain)
switch.psu.output_pin               2.4!o

# Auxiliary outputs
switch.misc.output_pin              1.22

# Modifier combinations (!o) work the same in V2
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## Pin Format Comparison Table

The following table shows common pin assignments with V1 and V2 format side-by-side:

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

| Function | V1 Pin Format | Notes |
| -------- | ------------- | ----- |
| Alpha Step | `2.0` | Basic numeric format |
| Alpha Dir | `0.5` | Port.pin notation |
| Alpha Enable | `0.4` | Standard output |
| Alpha Min Endstop | `1.24^` | With pull-up |
| Alpha Max Endstop | `1.25!` | Inverted logic |
| Hotend Heater | `2.7` | PWM capable |
| Hotend Thermistor | `0.23` | ADC input |
| Bed Heater | `2.5` | PWM capable |
| Bed Thermistor | `0.24` | ADC input |
| Fan Output | `2.6` | Standard output |
| PSU Control | `2.4!o` | Inverted + open-drain |
| Spare I/O | `1.30^` | With pull-up |
| LED | `1.18` | PWM capable |

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

| Function | V2 Pin Format | Notes |
| -------- | ------------- | ----- |
| Alpha Step | `2.0` or `PA.0` | Numeric or named format |
| Alpha Dir | `0.5` or `PA.5` | Board-dependent naming |
| Alpha Enable | `0.4` or `PA.4` | Check board docs |
| Alpha Min Endstop | `1.24^` | Modifier syntax same |
| Alpha Max Endstop | `1.25!` | Inverted logic same |
| Hotend Heater | `2.7` | PWM capable |
| Hotend Thermistor | `0.23` | ADC input |
| Bed Heater | `2.5` | PWM capable |
| Bed Thermistor | `0.24` | ADC input |
| Fan Output | `2.6` | Standard output |
| PSU Control | `2.4!o` | Modifiers work same |
| Spare I/O | `1.30^` | Pull-up syntax same |
| LED | `1.18` | PWM capable |

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## LPC176x ADC channels and pins

| Adc Channel | Port Pin | Pin Functions | Associated PINSEL Register |
| ----------- | -------- | ------------- | -------------------------- |
| AD0 P0.23 | 0-GPIO, | 1-AD0[0], 2-I2SRX_CLK, 3-CAP3[0] | 14,15 bits of PINSEL1 |
| AD1 P0.24 | 0-GPIO, | 1-AD0[1], 2-I2SRX_WS, 3-CAP3[1] | 16,17 bits of PINSEL1 |
| AD2 P0.25 | 0-GPIO, | 1-AD0[2], 2-I2SRX_SDA, 3-TXD3 | 18,19 bits of PINSEL1 |
| AD3 P0.26 | 0-GPIO, | 1-AD0[3], 2-AOUT, 3-RXD3 | 20,21 bits of PINSEL1 |
| AD4 P1.30 | 0-GPIO, | 1-VBUS, 2- , 3-AD0[4] | 28,29 bits of PINSEL3 |
| AD5 P1.31 | 0-GPIO, | 1-SCK1, 2- , 3-AD0[5] | 30,31 bits of PINSEL3 |
| AD6 P0.3 | 0-GPIO, | 1-RXD0, 2-AD0[6], 3- | 6,7 bits of PINSEL0 * not available on Smoothieboard |
| AD7 P0.2 | 0-GPIO, | 1-TXD0, 2-AD0[7], 3- | 4,5 bits of PINSEL0 * not available on Smoothieboard |

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  ADC pins are not 5v tolerant.
</sl-alert>
{:/nomarkdown}

## Pinout

{% include hardware/pins/pinout-for-include.md %}
