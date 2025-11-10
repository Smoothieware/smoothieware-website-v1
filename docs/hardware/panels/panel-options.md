---
permalink: /panel-options
---

{::nomarkdown}
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><setting v1="panel.enable"></setting></td>
<td>true</td>
<td>Set to true to enable the panel interface. Panels are a screen, an encoder wheel and/or a set of buttons, used to control your machine.</td>
</tr>
<tr>
<td><setting v1="panel.lcd"></setting></td>
<td><code>reprap_discount_glcd</code></td>
<td>Type of panel we are connecting. Each panel has a specific interface so we need to specify which panel we will be connecting. The currently supported panel types are <code>reprap_discount_glcd</code>, <code>st7565_glcd</code>, <code>ssd1306_oled</code>, <code>viki2</code>, <code>mini_viki2</code> and <code>universal_adapter</code>.</td>
</tr>
<tr>
<td><setting v1="panel.spi_channel"></setting></td>
<td>0</td>
<td>SPI channel to use</td>
</tr>
<tr>
<td><setting v1="panel.spi_cs_pin"></setting></td>
<td><code>0.16</code></td>
<td>CS (Chip Select) pin to use, this can be used to have several different devices on the same SPI port, as long as each device has a separate CS pin. Note that the RRD GLCD panel does not support this and requires being alone on its port.</td>
</tr>
<tr>
<td><setting v1="panel.spi_frequency"></setting></td>
<td>500000</td>
<td>SPI port frequency - some panels need it explicitly set</td>
</tr>
<tr>
<td><setting v1="panel.contrast"></setting></td>
<td>9</td>
<td>Contrast value for panels that support it (<code>viki2</code>, <code>mini_viki2</code> and <code>st7565_glcd</code>)</td>
</tr>
<tr>
<td><setting v1="panel.reverse"></setting></td>
<td>false</td>
<td>If set to true, reverse the screen.</td>
</tr>
<tr>
<td><setting v1="panel.busy_pin"></setting></td>
<td><code>nc</code></td>
<td>If using the <code>universal_adapter</code>, this pin can be connected to the adapter to ask it if it is busy or not.</td>
</tr>
<tr>
<td><setting v1="panel.a0_pin"></setting></td>
<td><code>nc</code></td>
<td>If using a viki or SSD1306 this is needed to drive the C/D pin on the display</td>
</tr>
<tr>
<td><setting v1="panel.rst_pin"></setting></td>
<td><code>nc</code></td>
<td>If using an SSD1306 this pin is sometimes required and connects to the reset pin on the display</td>
</tr>
<tr>
<td><setting v1="panel.encoder_a_pin"></setting></td>
<td><code>3.25!^</code></td>
<td>A pin for the encoder wheel. Encoders have two pins: A and B. Set to <code>nc</code> if you use no encoder. ^ defines menu move direction</td>
</tr>
<tr>
<td><setting v1="panel.encoder_b_pin"></setting></td>
<td><code>3.26!^</code></td>
<td>B pin for the encoder wheel. Encoders have two pins: A and B. Set to <code>nc</code> if you use no encoder. ^ defines menu move direction</td>
</tr>
<tr>
<td><setting v1="panel.encoder_resolution"></setting></td>
<td><code>2</code></td>
<td>The number of pulses the encoder emits per detent/click</td>
</tr>
<tr>
<td><setting v1="panel.click_button_pin"></setting></td>
<td><code>1.30!^</code></td>
<td>Pin for the click ("enter") button</td>
</tr>
<tr>
<td><setting v1="panel.buzz_pin"></setting></td>
<td><code>1.31</code></td>
<td>Pin for the buzzer</td>
</tr>
<tr>
<td><setting v1="panel.back_button_pin"></setting></td>
<td><code>2.11!^</code></td>
<td>Pin for the back button</td>
</tr>
<tr>
<td><setting v1="panel.up_button_pin"></setting></td>
<td><code>0.1!</code></td>
<td>Pin for the up button</td>
</tr>
<tr>
<td><setting v1="panel.down_button_pin"></setting></td>
<td><code>0.0!</code></td>
<td>Pin for the down button</td>
</tr>
<tr>
<td><setting v1="panel.menu_offset"></setting></td>
<td>0</td>
<td>On some panels, this value must be set to 1. This is a number of lines to offset the menu lines by on screen.</td>
</tr>
<tr>
<td><setting v1="panel.alpha_jog_feedrate"></setting></td>
<td>6000</td>
<td>X jogging feedrate in millimetres/minute. This is used when jogging using the panel screen.</td>
</tr>
<tr>
<td><setting v1="panel.beta_jog_feedrate"></setting></td>
<td>6000</td>
<td>Y jogging feedrate in millimetres/minute. This is used when jogging using the panel screen.</td>
</tr>
<tr>
<td><setting v1="panel.gamma_jog_feedrate"></setting></td>
<td>200</td>
<td>Z jogging feedrate in millimetres/minute. This is used when jogging using the panel screen.</td>
</tr>
<tr>
<td><setting v1="panel.hotend_temperature"></setting></td>
<td>185</td>
<td>Temperature to set the hotend to when using the pre-heating menu item</td>
</tr>
<tr>
<td><setting v1="panel.bed_temperature"></setting></td>
<td>60</td>
<td>Temperature to set the bed to when using the pre-heating menu item</td>
</tr>
<tr>
<td><setting v1="panel.external_sd"></setting></td>
<td>true</td>
<td>Set to true if your panel has an external SD card slot, or if you want to connect a second SD card slot to one of your Smoothieboard's SPI ports</td>
</tr>
<tr>
<td><setting v1="panel.external_sd.spi_channel"></setting></td>
<td>0</td>
<td>Set the SPI channel the external SD card is on</td>
</tr>
<tr>
<td><setting v1="panel.external_sd.spi_cs_pin"></setting></td>
<td><code>2.8</code></td>
<td>Set the CS (Chip Select) pin for the external SD card, this allows you to use multiple devices on the same SPI port, as long as they each have a CS pin</td>
</tr>
<tr>
<td><setting v1="panel.external_sd.sdcd_pin"></setting></td>
<td><code>2.13!^</code></td>
<td>SD card detect signal pin, set to <code>nc</code> if you don't use an SD card detect signal</td>
</tr>
<tr>
<td><setting v1="custom_menu.{name}.enable"></setting></td>
<td>true</td>
<td>When set to true, create a new custom menu entry for the panel with the name <code>menu_name</code>. You can create any number of custom entries as long as they have different names. <strong>NOTE</strong> <code>menu_name</code> is case sensitive</td>
</tr>
<tr>
<td><setting v1="custom_menu.{name}.name"></setting></td>
<td><code>Power_on</code></td>
<td>The name that will be displayed in the panel's menus</td>
</tr>
<tr>
<td><setting v1="custom_menu.{name}.command"></setting></td>
<td><code>M80_S30|G1_X10</code></td>
<td>The command that will be executed when the menu entry is selected and clicked. Note that the <code>_</code> character gets converted to space in the menu and commands (and must be used instead of the space character), and the <code>|</code> character is used to separate multiple commands</td>
</tr>
</tbody>
</table>
{:/nomarkdown}
