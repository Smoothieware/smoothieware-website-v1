
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
                <p>Enables the panel interface module. Panels provide a screen, an encoder wheel and/or a set of buttons, used to control your machine without requiring a computer connection.</p>
                <p>When enabled, the panel module initializes the LCD driver, configures input devices, and registers for system events to display machine status and accept user input.</p>
                <p>If disabled, the panel module is completely removed from memory.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.lcd"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="critical">Required</tag>
                <tag type="enum">reprap_discount_glcd, st7565_glcd, ssd1306_oled, viki2, mini_viki2, universal_adapter</tag>
                <p>Specifies the type of panel connected to the Smoothieboard. Each panel has specific interface and driver requirements, so the correct panel type must be set.</p>
                <p>The value determines which panel driver is loaded and initialized. Different panels have different pin requirements, button configurations, and display capabilities.</p>
                <tag type="note">RRD GLCD does not support SPI CS pin sharing</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_channel"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">SPI</tag>
                <tag type="default">0</tag>
                <p>Selects which SPI channel to use for panel communication. The Smoothieboard has two SPI channels with different pin assignments.</p>
                <p>Channel selection affects which physical pins are used for MOSI, MISO, and SCLK signals. Most panels use channel 0 by default.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_cs_pin"></setting></td>
            <td><setting no-version v2="PD3"></setting></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="default">nc</tag>
                <p>Specifies the CS (Chip Select) pin used to select the panel device on the SPI bus. CS allows multiple devices to share the same SPI port by activating only the selected device.</p>
                <p>When CS is low (active), the panel responds to SPI commands; when high (inactive), the panel ignores SPI traffic.</p>
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
                <p>Number of lines to offset the menu lines by on screen. On some panels, this value must be set to <code>1</code>.</p>
                <p>Adjust if menu items don't align properly on your display.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_a_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Encoder</tag>
                <p>A pin for the encoder wheel. Encoders have two pins, A and B; set this to <code>nc</code> if you use no encoder.</p>
                <p>The <code>^</code> modifier defines menu move direction. Use <code>!</code> for pull-up/pull-down and <code>^</code> to invert.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_b_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Encoder</tag>
                <p>B pin for the encoder wheel. Encoders have two pins, A and B; set this to <code>nc</code> if you use no encoder.</p>
                <p>The <code>^</code> modifier defines menu move direction. Use <code>!</code> for pull-up/pull-down and <code>^</code> to invert.</p>
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
                <p>Pin for the click ("enter" or "select") button, typically pressed to select menu items, confirm actions, and accept value changes.</p>
                <p>The <code>!</code> modifier inverts the signal polarity (use for active-low buttons).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.back_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                <p>Pin for the back ("escape" or "cancel") button, which returns to the previous menu level or cancels the current operation.</p>
                <p>On Viki2 panels, this pin may be used for either back button or pause button functionality.</p>
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
                <p>Pin for the buzzer, which provides audio feedback for button presses and alerts.</p>
                <p>Some panels have a built-in buzzer that requires this pin to be configured.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.red_led_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="output">LED</tag>
                <p>Pin for the red LED on Viki2 panels, which typically indicates heating status or errors.</p>
                <p>Only available on Viki2 and similar panels with status LEDs.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.blue_led_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="output">LED</tag>
                <p>Pin for the blue LED on Viki2 panels, which typically indicates cooling or idle status.</p>
                <p>Only available on Viki2 and similar panels with status LEDs.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.a0_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="display">Control</tag>
                <tag type="default">nc</tag>
                <p>If using a Viki or SSD1306, this pin drives the C/D (Command/Data) pin on the display.</p>
                <p>It distinguishes between command and data bytes in the SPI communication.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.rst_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="display">Control</tag>
                <tag type="default">nc</tag>
                <p>If using an SSD1306, this pin is sometimes required and connects to the reset pin on the display.</p>
                <p>The reset pin is used to initialize the display controller.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.busy_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="default">nc</tag>
                <p>If using the <code>universal_adapter</code>, this pin can be connected to the adapter to ask whether it is busy.</p>
                <p>The universal adapter uses this pin for daisy-chaining multiple devices.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.alpha_jog_feedrate"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="motion">Jogging</tag>
                <tag type="axis">X/Alpha</tag>
                <tag type="default">6000</tag>
                <p>X (Alpha) axis jogging feedrate in millimeters/minute, used when jogging from the panel screen.</p>
                <p>Adjust based on your machine's capabilities and desired jogging speed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.beta_jog_feedrate"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="motion">Jogging</tag>
                <tag type="axis">Y/Beta</tag>
                <tag type="default">6000</tag>
                <p>Y (Beta) axis jogging feedrate in millimeters/minute, used when jogging from the panel screen.</p>
                <p>Adjust based on your machine's capabilities and desired jogging speed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.gamma_jog_feedrate"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="motion">Jogging</tag>
                <tag type="axis">Z/Gamma</tag>
                <tag type="default">200</tag>
                <p>Z (Gamma) axis jogging feedrate in millimeters/minute, used when jogging from the panel screen.</p>
                <p>Typically slower than XY jogging, for precision and safety.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.hotend_temperature"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="temperature">Preset</tag>
                <tag type="3d-printer">Hotend</tag>
                <tag type="default">185</tag>
                <p>Temperature to set the hotend to when using the pre-heating menu item on the panel — a quick-access, one-button preset for heating to a commonly used temperature.</p>
                <p>Set this to match your most commonly used filament type.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.bed_temperature"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="temperature">Preset</tag>
                <tag type="3d-printer">Heated bed</tag>
                <tag type="default">60</tag>
                <p>Temperature to set the bed to when using the pre-heating menu item on the panel — a quick-access, one-button preset for heating to a commonly used temperature.</p>
                <p>Set this to match your most commonly used filament type.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="storage">SD card</tag>
                <tag type="default">false</tag>
                <p>Set to <code>true</code> if your panel has an external SD card slot, or if you want to connect a second SD card slot to one of your Smoothieboard's SPI ports.</p>
                <p>Enables an additional SD card interface beyond the onboard SD slot.</p>
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
                <p>Set the SPI channel the external SD card is on.</p>
                <p>This must match the SPI channel used by the panel if they share the same SPI port, or can be a different channel if separate.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.spi_cs_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="storage">SD card</tag>
                <p>Set the CS (Chip Select) pin for the external SD card.</p>
                <p>This allows multiple devices to share the same SPI port, as long as each has a unique CS pin.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.sdcd_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="storage">SD card</tag>
                <tag type="default">nc</tag>
                <p>SD card detect signal pin, which detects when an SD card is inserted or removed.</p>
                <p>Set to <code>nc</code> if you don't use an SD card detect signal.</p>
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
                <p>When set to <code>true</code>, creates a new custom menu entry for the panel with the name <code>{name}</code>. Replace <code>{name}</code> with your menu identifier.</p>
                <p>You can create any number of custom entries, as long as each has a different name.</p>
                <tag type="note">{name} is case sensitive</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.{name}.name"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="menu">Custom</tag>
                <p>The name displayed in the panel's menus — what the user sees when browsing the menu.</p>
                <p>Underscores (<code>_</code>) are converted to spaces when displayed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.{name}.command"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="menu">Custom</tag>
                <tag type="gcode">Commands</tag>
                <p>The command executed when the menu entry is selected and clicked.</p>
                <p>The <code>_</code> character is converted to a space in both the menu name and the command (use <code>_</code> instead of a literal space), and <code>|</code> separates multiple commands to run in sequence.</p>
                <tag type="example">M80_S30|G1_X10 executes M80 S30 followed by G1 X10</tag>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
