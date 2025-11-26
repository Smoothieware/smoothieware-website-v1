
{::nomarkdown}
<table class="config-options-table">
    <thead>
        <tr>
            <th style="width: 25%;">V1 Setting</th>
            <th style="width: 25%;">V2 Setting</th>
            <th style="width: 50%;">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><setting no-version v1="panel.enable"></setting></td>
            <td><setting no-version v2="display.enable"></setting></td>
            <td class="description-cell">
                <tag type="critical">Master enable</tag>
                <tag type="module">Panel</tag>
                Enables the panel interface module. Panels provide a screen, an encoder wheel and/or a set of buttons, used to control your machine without requiring a computer connection. When enabled, the panel module initializes the LCD driver, configures input devices, and registers for system events to display machine status and accept user input. If disabled, the panel module is completely removed from memory.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.lcd"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="critical">Required</tag>
                <tag type="enum">reprap_discount_glcd, st7565_glcd, ssd1306_oled, viki2, mini_viki2, universal_adapter</tag>
                Specifies the type of panel connected to the Smoothieboard. Each panel has a specific interface and driver requirements, so the correct panel type must be specified. The value determines which panel driver will be loaded and initialized. Different panels have different pin requirements, button configurations, and display capabilities.
                <tag type="note">RRD GLCD does not support SPI CS pin sharing</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_channel"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">SPI</tag>
                <tag type="default">0</tag>
                Selects which SPI channel to use for panel communication. The Smoothieboard has two SPI channels with different pin assignments. Channel selection affects which physical pins are used for MOSI, MISO, and SCLK signals. Most panels use channel 0 by default.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_cs_pin"></setting></td>
            <td><setting no-version v2="PD3"></setting></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="default">nc</tag>
                Specifies the CS (Chip Select) pin used to select the panel device on the SPI bus. CS allows multiple devices to share the same SPI port by activating only the selected device. When CS is low (active), the panel responds to SPI commands; when high (inactive), the panel ignores SPI traffic.
                <tag type="critical">RRD GLCD does not support CS and requires being alone on its SPI port</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_frequency"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">SPI</tag>
                <tag type="performance">Speed</tag>
                SPI port frequency - some panels need it explicitly set. This setting controls the communication speed between the Smoothieboard and the panel.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.contrast"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="display">Visual</tag>
                <tag type="default">9</tag>
                Contrast value for panels that support it. Supported panels: <code>viki2</code>, <code>mini_viki2</code>, and <code>st7565_glcd</code>. Adjust this value if the display appears too faint or too dark.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.reverse"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="display">Visual</tag>
                <tag type="default">false</tag>
                If set to <code>true</code>, reverse the screen orientation. Use this if your panel is mounted upside down.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.menu_offset"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="display">Visual</tag>
                <tag type="default">0</tag>
                On some panels, this value must be set to <code>1</code>. This is a number of lines to offset the menu lines by on screen. Adjust if menu items don't align properly on your display.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_a_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Encoder</tag>
                A pin for the encoder wheel. Encoders have two pins: A and B. Set to <code>nc</code> if you use no encoder. The <code>^</code> modifier defines menu move direction. Use <code>!</code> for pull-up/pull-down and <code>^</code> to invert.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_b_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Encoder</tag>
                B pin for the encoder wheel. Encoders have two pins: A and B. Set to <code>nc</code> if you use no encoder. The <code>^</code> modifier defines menu move direction. Use <code>!</code> for pull-up/pull-down and <code>^</code> to invert.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_resolution"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="input">Encoder</tag>
                <tag type="default">2</tag>
                The number of pulses the encoder emits per detent/click. Adjust this if the encoder is too sensitive or not sensitive enough for menu navigation.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.click_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                Pin for the click ("enter" or "select") button. This button is typically pressed to select menu items, confirm actions, and accept value changes. The <code>!</code> modifier inverts the signal polarity (use for active-low buttons).
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.back_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                Pin for the back ("escape" or "cancel") button. This button returns to the previous menu level or cancels the current operation. On Viki2 panels, this pin may be used for either back button or pause button functionality.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.up_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                Pin for the up button. Used for menu navigation when no encoder is present. The <code>!</code> modifier inverts the signal polarity.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.down_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                Pin for the down button. Used for menu navigation when no encoder is present. The <code>!</code> modifier inverts the signal polarity.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.pause_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                Pin for the pause button. Allows immediate pause of the current operation. This is a convenience feature for quick access to pause functionality.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.longpress_delay"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="input">Button</tag>
                <tag type="timing">Delay</tag>
                Delay in milliseconds before a button press is considered a "long press". Long press actions may trigger different menu functions than short presses.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.buzz_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="output">Buzzer</tag>
                Pin for the buzzer. The buzzer provides audio feedback for button presses and alerts. Some panels have built-in buzzers that require this pin to be configured.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.red_led_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="output">LED</tag>
                Pin for the red LED on Viki2 panels. The red LED typically indicates heating status or errors. Only available on Viki2 and similar panels with status LEDs.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.blue_led_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="output">LED</tag>
                Pin for the blue LED on Viki2 panels. The blue LED typically indicates cooling or idle status. Only available on Viki2 and similar panels with status LEDs.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.a0_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="display">Control</tag>
                <tag type="default">nc</tag>
                If using a Viki or SSD1306, this pin is needed to drive the C/D (Command/Data) pin on the display. This pin distinguishes between command and data bytes in the SPI communication.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.rst_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="display">Control</tag>
                <tag type="default">nc</tag>
                If using an SSD1306, this pin is sometimes required and connects to the reset pin on the display. The reset pin is used to initialize the display controller.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.busy_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="default">nc</tag>
                If using the <code>universal_adapter</code>, this pin can be connected to the adapter to ask if it is busy or not. The universal adapter uses this for daisy-chaining multiple devices.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.alpha_jog_feedrate"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="motion">Jogging</tag>
                <tag type="axis">X/Alpha</tag>
                <tag type="default">6000</tag>
                X (Alpha) axis jogging feedrate in millimeters/minute. This is used when jogging using the panel screen. Adjust based on your machine's capabilities and desired jogging speed.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.beta_jog_feedrate"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="motion">Jogging</tag>
                <tag type="axis">Y/Beta</tag>
                <tag type="default">6000</tag>
                Y (Beta) axis jogging feedrate in millimeters/minute. This is used when jogging using the panel screen. Adjust based on your machine's capabilities and desired jogging speed.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.gamma_jog_feedrate"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="motion">Jogging</tag>
                <tag type="axis">Z/Gamma</tag>
                <tag type="default">200</tag>
                Z (Gamma) axis jogging feedrate in millimeters/minute. This is used when jogging using the panel screen. Typically slower than XY jogging for precision and safety.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.hotend_temperature"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="temperature">Preset</tag>
                <tag type="3d-printer">Hotend</tag>
                <tag type="default">185</tag>
                Temperature to set the hotend to when using the pre-heating menu item on the panel. This provides a quick-access one-button preset for heating the hotend to a commonly used temperature. Set to match your most commonly used filament type.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.bed_temperature"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="temperature">Preset</tag>
                <tag type="3d-printer">Heated bed</tag>
                <tag type="default">60</tag>
                Temperature to set the bed to when using the pre-heating menu item on the panel. This provides a quick-access one-button preset for heating the bed to a commonly used temperature. Set to match your most commonly used filament type.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="storage">SD card</tag>
                <tag type="default">false</tag>
                Set to <code>true</code> if your panel has an external SD card slot, or if you want to connect a second SD card slot to one of your Smoothieboard's SPI ports. Enables additional SD card interface beyond the onboard SD slot.
                <tag type="warning">External SD cards over SPI cables can be unreliable - NOT recommended for printing</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.spi_channel"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">SPI</tag>
                <tag type="storage">SD card</tag>
                <tag type="default">0</tag>
                Set the SPI channel the external SD card is on. This must match the SPI channel used by the panel if they share the same SPI port, or can be a different channel if separate.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.spi_cs_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="storage">SD card</tag>
                Set the CS (Chip Select) pin for the external SD card. This allows you to use multiple devices on the same SPI port, as long as they each have a unique CS pin.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.sdcd_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="storage">SD card</tag>
                <tag type="default">nc</tag>
                SD card detect signal pin. Set to <code>nc</code> if you don't use an SD card detect signal. This pin detects when an SD card is inserted or removed.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.display_extruder"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="display">Visual</tag>
                <tag type="3d-printer">Multi-extruder</tag>
                Controls which extruder's temperature is displayed on panels. Useful for multi-extruder setups to show the currently active extruder's status.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.{name}.enable"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="menu">Custom</tag>
                <tag type="critical">Required for custom menu</tag>
                When set to <code>true</code>, create a new custom menu entry for the panel with the name <code>{name}</code>. You can create any number of custom entries as long as they have different names. Replace <code>{name}</code> with your menu identifier.
                <tag type="note">{name} is case sensitive</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.{name}.name"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="menu">Custom</tag>
                The name that will be displayed in the panel's menus. Underscores (<code>_</code>) are converted to spaces when displayed. This is what the user sees when browsing the menu.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.{name}.command"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="menu">Custom</tag>
                <tag type="gcode">Commands</tag>
                The command that will be executed when the menu entry is selected and clicked. The <code>_</code> character gets converted to space in the menu and commands (and must be used instead of the space character), and the <code>|</code> character is used to separate multiple commands that should be executed in sequence.
                <tag type="example">M80_S30|G1_X10 executes M80 S30 followed by G1 X10</tag>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
