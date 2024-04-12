
| Parameter | Value | Description |
| --------- | ----- | ----------- |
| `panel.enable` | true | Set to true to enable the panel interface. Panels are a screen, an encoder wheel and/or a set of buttons, used to control your machine. |
| `panel.lcd` | `reprap_discount_glcd` | Type of panel we are connecting. Each panel has a specific interface so we need to specify which panel we will be connecting. The currently supported panel types are `reprap_discount_glcd`, `st7565_glcd`, `ssd1306_oled`, `viki2`, `mini_viki2` and `universal_adapter`. |
| `panel.spi_channel` | 0 | SPI channel to use |
| `panel.spi_cs_pin` | `0.16` | CS (Chip Select) pin to use, this can be used to have several different devices on the same SPI port, as long as each device has a separate CS pin. Note that the RRD GLCD panel does not support this and requires being alone on its port. |
| `panel.spi_frequency` | 500000 | SPI port frequency - some panels need it explicitly set |
| `panel.contrast` | 9 | Contrast value for panels that support it (`viki2`, `mini_viki2` and `st7565_glcd`) |
| `panel.reverse` | false | If set to true, reverse the screen. |
| `panel.busy_pin` | `nc` | If using the `universal_adapter`, this pin can be connected to the adapter to ask it if it is busy or not. |
| `panel.a0_pin` | `nc` | If using a viki or SSD1306 this is needed to drive the C/D pin on the display |
| `panel.rst_pin` | `nc` | If using an SSD1306 this pin is sometimes required and connects to the reset pin on the display |
| `panel.encoder_a_pin` | `3.25!^` | A pin for the encoder wheel. Encoders have two pins: A and B. Set to `nc` if you use no encoder. ^ defines menu move direction |
| `panel.encoder_b_pin` | `3.26!^` | B pin for the encoder wheel. Encoders have two pins: A and B. Set to `nc` if you use no encoder. ^ defines menu move direction |
| `panel.encoder_resolution` | `2` | The number of pulses the encoder emits per detent/click |
| `panel.click_button_pin` | `1.30!^` | Pin for the click ("enter") button |
| `panel.buzz_pin` | `1.31` | Pin for the buzzer |
| `panel.back_button_pin` | `2.11!^` | Pin for the back button |
| `panel.up_button_pin` | `0.1!` | Pin for the up button |
| `panel.down_button_pin` | `0.0!` | Pin for the down button |
| `panel.menu_offset` | 0 | On some panels, this value must be set to 1. This is a number of lines to offset the menu lines by on screen. |
| `panel.alpha_jog_feedrate` | 6000 | X jogging feedrate in millimetres/minute. This is used when jogging using the panel screen. |
| `panel.beta_jog_feedrate` | 6000 | Y jogging feedrate in millimetres/minute. This is used when jogging using the panel screen. |
| `panel.gamma_jog_feedrate` | 200 | Z jogging feedrate in millimetres/minute. This is used when jogging using the panel screen. |
| `panel.hotend_temperature` | 185 | Temperature to set the hotend to when using the pre-heating menu item |
| `panel.bed_temperature` | 60 | Temperature to set the bed to when using the pre-heating menu item |
| `panel.external_sd` | true | Set to true if your panel has an external SD card slot, or if you want to connect a second SD card slot to one of your Smoothieboard's SPI ports |
| `panel.external_sd.spi_channel` | 0 | Set the SPI channel the external SD card is on |
| `panel.external_sd.spi_cs_pin` | `2.8` | Set the CS (Chip Select) pin for the external SD card, this allows you to use multiple devices on the same SPI port, as long as they each have a CS pin |
| `panel.external_sd.sdcd_pin` | `2.13!^` | SD card detect signal pin, set to `nc` if you don't use an SD card detect signal |
| `custom_menu.menu_name.enable` | true | When set to true, create a new custom menu entry for the panel with the name `menu_name`. You can create any number of custom entries as long as they have different names. **NOTE** `menu_name` is case sensitive |
| `custom_menu.menu_name.name` | `Power_on` | The name that will be displayed in the panel's menus |
| `custom_menu.menu_name.command` | `M80_S30|G1_X10` | The command that will be executed when the menu entry is selected and clicked. Note that the `_` character gets converted to space in the menu and commands (and must be used instead of the space character), and the `|` character is used to separate multiple commands |
