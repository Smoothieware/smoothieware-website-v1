---
permalink: /panel
---


# Using Panel controllers with Smoothieboard

« Panels » are a combination of a LCD screen, and some sort of input method ( encoder wheel, or buttons ).

They are used to control your machine without having to use a host computer and a USB or Ethernet connection.

To use a Panel, you need to wire it to your Smoothieboard, and to set it up in your configuration file. 

This page describes the wiring and configuration for the currently supported panel types.

## Supported Panels

The following panels are currently supported by Smoothie :

- [ReprapDiscount GLCD](http://reprap.org/wiki/RepRapDiscount_Full_Graphic_Smart_Controller)
- [Universal Panel Adapter](https://github.com/wolfmanjm/universal-panel-adapter)
- Viki2 and Miniviki2, from [panucatt](http://www.panucatt.com/)
- SSD1306 based OLED displays

Supported SPI chips:-  ST7565, ST7920, SSD1306

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  I2C and parallel panels are not supported directly, however using a cheap Arduino Mini Pro, Uno or Nano you can use the following I2C panels or a regular Reprap style Parallel style LCD using the universal panel adapter <a href="https://github.com/wolfmanjm/universal-panel-adapter">universal panel adapter</a> and the <code>universal_adapter</code> driver : - old Viki lcd I2C - Most reprap style parallel LCD - Parallel - Panelolu2 probably works but not tested - I2C
</sl-alert>

## Configuration

### All configuration options

Here are all the configuration options available for the Panel module :

| Option | Example value | Explanation |
| ------ | ------------- | ----------- |
{% include hardware/panels/panel-options-for-include.md %}

### Custom menu entries

{::nomarkdown}
<review id="panel:custom-menu-entries">
<proposal>
{:/nomarkdown}

Menu entries can be added from the config file for simple commands, for instance the following adds a Power on and Power off menu entry.
Note that _ will be converted to a space when displayed in the Menu. Commands can be seperated with a |. If you want to add a menu entry that probes your z-axis you will have to use a command like {::nomarkdown}<gcode>G30</gcode>{:/nomarkdown} Z0 followed by a {::nomarkdown}<gcode>G0</gcode>{:/nomarkdown} Z10. For this you need a custom menu entry "custom_menu.zprobe.command G30Z0|G0Z10". This moves the z-axis down untill it hits the probe, sets Z to 0 and moves 10 back up.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**

```markdown
custom_menu.power_on.enable              true              #
custom_menu.power_on.name                Power_on          #
custom_menu.power_on.command             M80               #

custom_menu.power_off.enable             true              #
custom_menu.power_off.name               Power_off         #
custom_menu.power_off.command            M81               #
```

Another example for filament change:

```markdown
custom_menu.filament_change_c.enable               true                                                   #
custom_menu.filament_change_c.name                 Change Filament                                        #
custom_menu.filament_change_c.command              G91|G1_Z0.6_F12000|G90|G1_X0_Y0|G91|G1_Z-0.6|G90|M25   #

custom_menu.filament_change_r.enable               true              #
custom_menu.filament_change_r.name                 Resume            #
custom_menu.filament_change_r.command              M24               #
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**

```ini
[custom_menu.power_on]
enable = true
name = Power_on
command = M80

[custom_menu.power_off]
enable = true
name = Power_off
command = M81
```

Another example for filament change:

```ini
[custom_menu.filament_change_c]
enable = true
name = Change Filament
command = G91|G1_Z0.6_F12000|G90|G1_X0_Y0|G91|G1_Z-0.6|G90|M25

[custom_menu.filament_change_r]
enable = true
name = Resume
command = M24
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Menu entries can be added from the config file for simple commands, for instance the following adds a Power on and Power off menu entry.
Note that _ will be converted to a space when displayed in the Menu. Commands can be seperated with a |. If you want to add a menu entry that probes your z-axis you will have to use a command like {::nomarkdown}<gcode>G30</gcode>{:/nomarkdown} Z0 followed by a {::nomarkdown}<gcode>G0</gcode>{:/nomarkdown} Z10. For this you need a custom menu entry "custom_menu.zprobe.command G30Z0|G0Z10". This moves the z-axis down untill it hits the probe, sets Z to 0 and moves 10 back up.

```markdown
custom_menu.power_on.enable              true              #
custom_menu.power_on.name                Power_on          #
custom_menu.power_on.command             M80               #

custom_menu.power_off.enable             true              #
custom_menu.power_off.name               Power_off         #
custom_menu.power_off.command            M81               #
```

Another example for filament change :

```markdown
custom_menu.filament_change_c.enable               true                                                   #
custom_menu.filament_change_c.name                 Change Filament                                        #
custom_menu.filament_change_c.command              G91|G1_Z0.6_F12000|G90|G1_X0_Y0|G91|G1_Z-0.6|G90|M25   #

custom_menu.filament_change_r.enable               true              #
custom_menu.filament_change_r.name                 Resume            #
custom_menu.filament_change_r.command              M24               #
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### External SD card setup

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>WARNING</strong> using the external sdcard for printing from is not recommended, and is <strong>NOT</strong> supported. Running SPI over long (or even short) cables is problematic, and can cause random hangs and/or corrupted data. I am not aware of a way to fix this other than using differential buffer drivers.
</sl-alert>

For the RRD GLCD it **CANNOT** share the same SPI as the LCD so it must be hooked up to the onboard sdcard SPI and use a spare pin for the sdcs.
Also note that an external SDcard sharing the SPI port with the onboard/internal sdcard **must** be ejected before rebooting as the bootloader does not like the external card. **NOTE** Smoothie will **not** boot if the external sdcard is inserted in the RRD LCD sdcard slot at boot time, it must be inserted after it has booted.

If the lcd panel has an sdcard reader it can be enabled with the following config:

```markdown
# setup for external sd card on the viki2 which shares the lcd spi port with the sdcard
panel.external_sd                         true           # set to true if there is an extrernal sdcard on the panel
panel.external_sd.spi_channel             0              # set spi channel the sdcard is on
panel.external_sd.spi_cs_pin              0.27            # set spi chip select for the sdcard
panel.external_sd.sdcd_pin                0.28!^          # sd detect signal (set to nc if no sdcard detect)
```

```markdown
# setup for external sd card on the RRD GLCD which shares the onboard sdcard SPI port
panel.external_sd                        true             # set to true if there is an extrernal sdcard on the panel
panel.external_sd.spi_channel            1                # set spi channel the sdcard is on
panel.external_sd.spi_cs_pin             0.27             # set spi chip select for the sdcard (or any spare pin)
panel.external_sd.sdcd_pin               0.28!^           # sd detect signal (set to nc if no sdcard detect) (or any spare pin)
```

### Using the spare button as a Kill switch

The button on the glcd and Viki2 can be wired as a Kill button by following [This guide](killbutton). In that case the
<setting v1="panel.back_button_pin"></setting> should be commented out.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/temporary/lcd-panel-generic.jpg">
    <img src="/images/temporary/lcd-panel-generic.jpg" alt="A RRD GLCD showing Smoothie's watch screen" style="width: 400px; max-width: 100%; height: auto;"/>
  </a>
  <p><em>A RRD GLCD showing Smoothie's "watch" screen</em></p>
</div>
{:/nomarkdown}

## Reprap Discount GLCD

The Reprapdiscount GLCD is a black and white graphical display with an encoder control button that allows you to control your Smoothieboard.

It is one of the most popular options for panel controllers.

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Power from the 5v line directly, from the 5v uart pin with a decoupling capacitor of at least 0.1uF, from a + pin on an unused endstop, or an external 5V power supply capable of delivering at least 500 mA.
</sl-alert>

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong><a href="http://www.audioholics.com/home-theater-connection/connecting-an-external-amp-to-a-receiver/image">MOAR</a></strong><br><br>
  If you are using the onboard 5V regulator to step down from 12/24V, check the current draw required for your panel - depending on the color/backlight on your GLCD, it may require >250 mA for the backlight.<br><br>
  The normal recommended 5V regulator will not supply enough current for those panels - if the panel powers up, it will have very low contrast.<br><br>
  Use Recom part <code>R-78E5.0-**1.0**</code> instead - it will supply 1 amp (vs 0.5 amps for the normally recommended regulator).<br><br>
  It is available at Digikey, and likely at other major electronics component sites.<br><br>
  See <a href="voltageregulator.md">Voltage Regulator</a>.<br><br>
  As an alternative to replacing the R-78E5.0 part on the Smoothieboard, solder a 5V 0.5 amp or 1 amp regulator to the adaptor card in the location marked. Ordinary 7805 regulators will work in that role. See <a href="https://en.wikipedia.org/wiki/78xx">78xx</a>
</sl-alert>

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Adapter</strong><br><br>
  There is an adapter board to easily connect a ReprapDiscount GLCD to a Smoothieboard with flat cable, however note this is entirely optional.<br><br>
  You can find information about it at the <a href="rrdglcdadapter.md">RRDGLCDAdapter</a> page.<br><br>
  It's sources are available on <a href="https://github.com/llegoff/GlcdAdapter2">github</a>.<br><br>
  Note that you may have to solder physical pins to the board for pins <pin>3.25</pin> and <pin>3.26</pin>, otherwise the rotary encoder will not work.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Clones Note that there are a lot of clones of the official RRD GLCD, and their connectors are reversed.<br><br>If you buy one of them, you need to modify your adapter board, by removing the sockets of the 10-pin connectors and rotating them 180 degrees each.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  SPI thermocouples Because the RRD GLCD does not implement SPI correctly, it has to be alone on it's SPI port.<br><br>This means you won't be able to use SPI thermocouples and the RRD GLCD together on the same board, unfortunately.
</sl-alert>

### Manual wiring

On the back of the GLCD EXP1 is to left and EXP2 is to right, pin 1 is bottom left, pin 2 is top left etc.
5v is EXP1 pin 10, Gnd is EXP1 pin 9

{::nomarkdown}
<review id="panel:glcd-manual-wiring">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**

```markdown
# config settings
panel.enable                          true              # set to true to enable the panel code
panel.lcd                             reprap_discount_glcd     # set type of panel
panel.spi_channel                     0                 # spi channel to use  ; GLCD EXP1 Pins 3,5 (MOSI, SCLK)
panel.spi_cs_pin                      0.16              # spi chip select     ; GLCD EXP1 Pin 4
panel.encoder_a_pin                   3.25!^            # encoder pin         ; GLCD EXP2 Pin 3
panel.encoder_b_pin                   3.26!^            # encoder pin         ; GLCD EXP2 Pin 5
panel.click_button_pin                1.30!^            # click button        ; GLCD EXP1 Pin 2
panel.buzz_pin                        1.31              # pin for buzzer      ; GLCD EXP1 Pin 1
panel.back_button_pin                 2.11!^            # 2.11 menu back      ; GLCD EXP2 Pin 8
# setup for external sd card on the GLCD which uses the onboard sdcard SPI port
panel.external_sd                     true              # set to true if there is an extrernal sdcard on the panel
panel.external_sd.spi_channel         1                 # set spi channel the sdcard is on
panel.external_sd.spi_cs_pin          0.28              # set spi chip select for the sdcard (or any spare pin)
panel.external_sd.sdcd_pin            0.27!^            # sd detect signal (set to nc if no sdcard detect) (or any spare pin)
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**

```ini
[panel]
enable = true
lcd = reprap_discount_glcd
spi_channel = 0
spi_cs_pin = PG7
encoder_a_pin = PJ3
encoder_b_pin = PJ4
click_button_pin = PJ5
buzz_pin = PJ6
back_button_pin = PJ7

[panel.external_sd]
enable = true
spi_channel = 1
spi_cs_pin = PC1
sdcd_pin = PC0
```

Note: V2 uses STM32 pin naming (e.g., PG7 instead of 0.16).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

```markdown
# config settings
panel.enable                          true              # set to true to enable the panel code
panel.lcd                             reprap_discount_glcd     # set type of panel
panel.spi_channel                     0                 # spi channel to use  ; GLCD EXP1 Pins 3,5 (MOSI, SCLK)
panel.spi_cs_pin                      0.16              # spi chip select     ; GLCD EXP1 Pin 4
panel.encoder_a_pin                   3.25!^            # encoder pin         ; GLCD EXP2 Pin 3
panel.encoder_b_pin                   3.26!^            # encoder pin         ; GLCD EXP2 Pin 5
panel.click_button_pin                1.30!^            # click button        ; GLCD EXP1 Pin 2
panel.buzz_pin                        1.31              # pin for buzzer      ; GLCD EXP1 Pin 1
panel.back_button_pin                 2.11!^            # 2.11 menu back      ; GLCD EXP2 Pin 8
# setup for external sd card on the GLCD which uses the onboard sdcard SPI port
panel.external_sd                     true              # set to true if there is an extrernal sdcard on the panel
panel.external_sd.spi_channel         1                 # set spi channel the sdcard is on
panel.external_sd.spi_cs_pin          0.28              # set spi chip select for the sdcard (or any spare pin)
panel.external_sd.sdcd_pin            0.27!^            # sd detect signal (set to nc if no sdcard detect) (or any spare pin)
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

You can find a list of pins on the Smoothieboard to connect to the panel [here](http://chibidibidiwah.wdfiles.com/local--files/panel/smoothieboard2sd.jpg) and [here](http://chibidibidiwah.wdfiles.com/local--files/panel/GLCDPINOUTS2SD.jpg).

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Pin numbering 5vdc availability presumes a 5vdc source (power from SBUS, 5V input, or optionally installed 5v converter VBB).
</sl-alert>
Be aware that RRD does not follow proper conventions for pin numbering. The pin 1 indicator on the ribbon is actually pin 10 in the RRD schematic. The image above is numbered according to the RRD inset schematics. 

{::nomarkdown}
<a href="/images/temporary/lcd-panel-generic.jpg">
  <img src="/images/temporary/lcd-panel-generic.jpg" alt="GLCD Wiring" style="width: 200px; height: auto;"/>
</a>
{:/nomarkdown}
## RRD GLCD to Azteeg X5 Mini v1.1 interface board

This interface board is simple to install, eliminates custom cables, frustration, and wire mess.

It is compatible with Azteeg X5 Mini v1.1 motion controller and is available from [www.UltiBots.com](http://www.ultibots.com/glcd-to-azteeg-x5-mini-board). Source files are on our [GitHub](https://github.com/UltiBots/GLCD2X5).

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/temporary/cable-duct-generic.jpg">
    <img src="/images/temporary/cable-duct-generic.jpg" alt="GLCD to Azteeg X5 Mini Wiring Harness" style="width: 400px; max-width: 100%; height: auto;"/>
  </a>
  <p><em>GLCD to Azteeg X5 Mini Wiring Harness</em></p>
</div>
{:/nomarkdown}

[PDF Download](https://smoothieware.github.io/Webif-pack/documentation/web/images/glcdtoazteegx5miniwiringharness.pdf)
## Azteeg X5 Mini to RRD GLCD wiring harness

This wiring harness uses three 2x10, one 1x2 .100" crimp housings and one heat shrinked female pin to connect the RRD GLCD to an Azteeg X5 Mini.

**Note:** This information is compatible with Azteeg X5 Mini v1.0 motion controllers.

## Viki2 from panucatt.com

[Viki2](http://www.panucatt.com/product_p/vikilcd2.htm) wires to an Azteeg X5 mini with a flat cable as it has 1:1 pin mapping. The ConfigSample for the Azteeg mini has the config settings required, just uncomment them,

The config for Azteeg X5 is different to smoothieboard and is shown in the file [here](https://github.com/Smoothieware/Smoothieware/blob/2f88d440ee3f79cb5202d242967b555fa35c7423/ConfigSamples/AzteegX5Mini/config#L178).

Here is an example config for a 4 driver smoothieboard

**NOTE** a 5 driver does not have enough free pins to use all the features

```markdown
# For 4 driver Smoothie board NOT azteeg X5 or 5 driver smoothie
panel.enable                                 true              # set to true to enable the panel code
panel.lcd                                    viki2             # set type of panel
panel.spi_channel                            0                 # set spi channel to use P0_18,P0_15 MOSI,SCLK
panel.spi_cs_pin                             0.16              # set spi chip select
panel.encoder_a_pin                          3.25!^            # encoder pin
panel.encoder_b_pin                          3.26!^            # encoder pin
panel.click_button_pin                       1.30!^            # click button
panel.a0_pin                                 2.11              # st7565 needs an a0
#panel.contrast                              8                 # some panels need contrast set, this is for viki2
#panel.encoder_resolution                    4                 # number of clicks to move 1 item
panel.buzz_pin                               1.31              # pin for buzzer
panel.red_led_pin                            1.22              # pin for red led on viki2 (5 driver can't use this)
panel.blue_led_pin                           1.23              # pin for blue led on viki2 (5 driver can't use this)
#panel.back_button_pin                        1.30!^           # optionally using the red buttin as a back button
# setup for external sd card on the viki2
panel.external_sd                            true              # set to true if there is an extrernal sdcard on the panel
panel.external_sd.spi_channel                0                 # set spi channel the sdcard is on
panel.external_sd.spi_cs_pin                 2.8               # set spi chip select for the sdcard (NOTE 5 drvier can't use this)
panel.external_sd.sdcd_pin                   2.13!^            # sd detect signal (set to nc if no sdcard detect) (NOTE 5 drvier can't use this)
```

**Using the suggested firmware above the wiring for the Viki 2.0 on a 4 driver smoothieboard is as follows:**

```markdown
SDCD to P0.27
BTN to P1.30
SDCS to P2.8
LCS to P0.16
SCK to P0.15
GND to 5v power supply's ground or a ground pin on the smoothieboard
ENCB to P3.26
ENCA to P3.25
MISO to P0.17
A0 to P2.11
MOSI to P0.18
=Vin to 5v power supply

BTN to None, Viki 2.0 has 2 Blue BTN wires that do the same thing
Buzzer to P1.31
Blue-LED to P1.23
Red-LED to P1.22
```

This wiring uses this [smoothie pin map](https://raw.githubusercontent.com/Bouni/smoothieboard-graphics/master/smoothieboard-wiring.png) and this [Viki 2.0 wiring guide](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/1015877726/original/Viki2_Wiring_Diagram.pdf?AWSAccessKeyId=AKIAJ2JSYZ7O3I4JO6DA&Expires=1454541217&Signature=MMRFZtl%2BpEqk7VniywwRSn7JXhI%3D&response-content-type=application%2Fpdf).

5 driver smoothieboard, disables buzzer and uses red led instead

```markdown
# For 5 driver Smoothie board NOT azteeg X5
panel.enable                                 true              # set to true to enable the panel code
panel.lcd                                    viki2             # set type of panel
panel.spi_channel                            0                 # set spi channel to use P0_18,P0_15 MOSI,SCLK
panel.spi_cs_pin                             0.16              # set spi chip select
panel.encoder_a_pin                          3.25!^            # encoder pin
panel.encoder_b_pin                          3.26!^            # encoder pin
panel.click_button_pin                       1.30!^            # click button
panel.a0_pin                                 2.11              # st7565 needs an a0
#panel.contrast                              8                 # some panels need contrast set, this is for viki2
#panel.encoder_resolution                    4                 # number of clicks to move 1 item
#panel.buzz_pin                              1.31              # pin for buzzer (use red led OR buzzer not both)
panel.red_led_pin                            1.31              # pin for red led on viki2
#panel.blue_led_pin                          1.23              # pin for blue led on viki2 (5 driver can't use this)
#panel.back_button_pin                       1.30!^            # optionally using the red button as a back button (NOT available on 5 driver)
# setup for external sd card on the viki2
panel.external_sd                            true              # set to true if there is an extrernal sdcard on the panel
panel.external_sd.spi_channel                0                 # set spi channel the sdcard is on
panel.external_sd.spi_cs_pin                 0.27              # set spi chip select for the sdcard
panel.external_sd.sdcd_pin                   0.28!^            # sd detect signal (set to nc if no sdcard detect)
```

## LCD 12864 with ST 7920 driver

Works with the Reprapdiscount GLCD driver and is available for around 7¬ or 10$.
Just wire