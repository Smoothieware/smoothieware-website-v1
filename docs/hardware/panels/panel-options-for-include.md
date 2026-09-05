
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
                <p>This turns on the panel module. A panel gives you a screen, an encoder wheel and/or some buttons, so you can control your machine without a computer attached.</p>
                <p>Turn it on and Smoothie loads the LCD driver, sets up your input devices, and starts listening for system events so it can show machine status and take your input.</p>
                <p>Turn it off and the panel module is removed from memory entirely.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.lcd"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="critical">Required</tag>
                <tag type="enum">reprap_discount_glcd, st7565_glcd, ssd1306_oled, viki2, mini_viki2, universal_adapter</tag>
                <p>This tells Smoothie which panel you've got connected. Each panel needs its own interface and driver, so you have to set the right type here.</p>
                <p>This value decides which driver gets loaded. Different panels need different pins, buttons, and have different display capabilities.</p>
                <tag type="note">RRD GLCD does not support SPI CS pin sharing</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_channel"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">SPI</tag>
                <tag type="default">0</tag>
                <p>This picks which SPI channel the panel talks over. The Smoothieboard has two SPI channels, each with its own pins.</p>
                <p>Change it and you change which physical pins carry MOSI, MISO, and SCLK. Most panels use channel 0.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_cs_pin"></setting></td>
            <td><setting no-version v2="PD3"></setting></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="default">nc</tag>
                <p>This is the CS (Chip Select) pin, used to pick the panel out on the SPI bus. CS is what lets several devices share the same SPI port, since only the selected device responds.</p>
                <p>Pull CS low and the panel responds to SPI commands. Leave it high and the panel ignores everything on the bus.</p>
                <tag type="critical">RRD GLCD does not support CS and requires being alone on its SPI port</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.spi_frequency"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">SPI</tag>
                <tag type="performance">Speed</tag>
                This sets the SPI port frequency. Some panels need it set explicitly, and it controls how fast the Smoothieboard talks to the panel.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.contrast"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="display">Visual</tag>
                <tag type="default">9</tag>
                This sets the contrast, for panels that support it: <code>viki2</code>, <code>mini_viki2</code>, and <code>st7565_glcd</code>. If your display looks too faint or too dark, adjust this.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.reverse"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="display">Visual</tag>
                <tag type="default">false</tag>
                Set this to <code>true</code> and the screen orientation flips. Use it if your panel ends up mounted upside down.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.menu_offset"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="display">Visual</tag>
                <tag type="default">0</tag>
                <p>This is how many lines to offset the menu by on screen. Some panels need this set to <code>1</code>.</p>
                <p>If your menu items aren't lining up right on your display, adjust this value.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_a_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Encoder</tag>
                <p>This is the A pin for your encoder wheel. Encoders have two pins, A and B. If you're not using an encoder, set this to <code>nc</code>.</p>
                <p>Use the <code>^</code> modifier to set which way the menu moves, <code>!</code> for pull-up/pull-down, and <code>^</code> to invert.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_b_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Encoder</tag>
                <p>This is the B pin for your encoder wheel. Encoders have two pins, A and B. If you're not using an encoder, set this to <code>nc</code>.</p>
                <p>Use the <code>^</code> modifier to set which way the menu moves, <code>!</code> for pull-up/pull-down, and <code>^</code> to invert.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.encoder_resolution"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="input">Encoder</tag>
                <tag type="default">2</tag>
                This is how many pulses your encoder emits per detent, per click. If menu navigation feels too sensitive or not sensitive enough, adjust this.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.click_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                <p>This is the pin for the click button, "enter" or "select", the one you press to pick menu items, confirm actions, and accept value changes.</p>
                <p>Use the <code>!</code> modifier to invert the signal polarity, for active-low buttons.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.back_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                <p>This is the pin for the back button, "escape" or "cancel". It takes you back to the previous menu level or cancels what you're doing.</p>
                <p>On Viki2 panels, this same pin can be used for the back button or the pause button.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.up_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                This is the pin for the up button, used for menu navigation when you don't have an encoder. Use the <code>!</code> modifier to invert the signal polarity.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.down_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                This is the pin for the down button, used for menu navigation when you don't have an encoder. Use the <code>!</code> modifier to invert the signal polarity.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.pause_button_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="input">Button</tag>
                This is the pin for the pause button, so you can pause the current operation immediately without digging through a menu.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.longpress_delay"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="input">Button</tag>
                <tag type="timing">Delay</tag>
                This is the delay in milliseconds before a button press counts as a long press. Long presses can trigger different menu functions than short ones.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.buzz_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="output">Buzzer</tag>
                <p>This is the pin for the buzzer, which gives you audio feedback on button presses and alerts.</p>
                <p>Some panels have a buzzer built in, and it needs this pin set to work.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.red_led_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="output">LED</tag>
                <p>This is the pin for the red LED on Viki2 panels. It's usually used to show heating status or errors.</p>
                <p>Only Viki2 and similar panels with status LEDs have this.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.blue_led_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="output">LED</tag>
                <p>This is the pin for the blue LED on Viki2 panels. It's usually used to show cooling or idle status.</p>
                <p>Only Viki2 and similar panels with status LEDs have this.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.a0_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="display">Control</tag>
                <tag type="default">nc</tag>
                <p>If you're using a Viki or an SSD1306, this pin drives the display's C/D (Command/Data) pin.</p>
                <p>It's how the display tells command bytes apart from data bytes over SPI.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.rst_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="display">Control</tag>
                <tag type="default">nc</tag>
                <p>If you're using an SSD1306, this pin is sometimes needed and connects to the display's reset pin.</p>
                <p>It's used to initialize the display controller.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.busy_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="default">nc</tag>
                <p>If you're using the <code>universal_adapter</code>, connect this pin to the adapter to ask whether it's busy.</p>
                <p>The universal adapter uses this pin for daisy-chaining several devices together.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.alpha_jog_feedrate"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="motion">Jogging</tag>
                <tag type="axis">X/Alpha</tag>
                <tag type="default">6000</tag>
                <p>This is the X (Alpha) axis jogging feedrate, in millimeters per minute, used when you jog from the panel screen.</p>
                <p>Set it based on what your machine can handle and how fast you want to jog.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.beta_jog_feedrate"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="motion">Jogging</tag>
                <tag type="axis">Y/Beta</tag>
                <tag type="default">6000</tag>
                <p>This is the Y (Beta) axis jogging feedrate, in millimeters per minute, used when you jog from the panel screen.</p>
                <p>Set it based on what your machine can handle and how fast you want to jog.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.gamma_jog_feedrate"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="motion">Jogging</tag>
                <tag type="axis">Z/Gamma</tag>
                <tag type="default">200</tag>
                <p>This is the Z (Gamma) axis jogging feedrate, in millimeters per minute, used when you jog from the panel screen.</p>
                <p>It's usually slower than XY jogging, for precision and safety.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.hotend_temperature"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="temperature">Preset</tag>
                <tag type="3d-printer">Hotend</tag>
                <tag type="default">185</tag>
                <p>This is the temperature the hotend goes to when you use the pre-heating menu item on the panel. It's a one-button preset for heating to whatever temperature you use most.</p>
                <p>Set it to match the filament you use most often.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.bed_temperature"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="temperature">Preset</tag>
                <tag type="3d-printer">Heated bed</tag>
                <tag type="default">60</tag>
                <p>This is the temperature the bed goes to when you use the pre-heating menu item on the panel. It's a one-button preset for heating to whatever temperature you use most.</p>
                <p>Set it to match the filament you use most often.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="storage">SD card</tag>
                <tag type="default">false</tag>
                <p>Set this to <code>true</code> if your panel has an external SD card slot, or if you want to hook up a second SD card slot to one of the Smoothieboard's SPI ports.</p>
                <p>This gives you an SD card interface on top of the onboard one.</p>
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
                <p>This sets which SPI channel the external SD card is on.</p>
                <p>If the SD card shares the panel's SPI port, this has to match the panel's channel. If it's on its own port, it can be a different channel.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.spi_cs_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="storage">SD card</tag>
                <p>This sets the CS (Chip Select) pin for the external SD card.</p>
                <p>It's how several devices can share the same SPI port, as long as each one has its own CS pin.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.external_sd.sdcd_pin"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="hardware">Pin</tag>
                <tag type="storage">SD card</tag>
                <tag type="default">nc</tag>
                <p>This is the SD card detect pin, which tells Smoothie when a card is inserted or removed.</p>
                <p>If you're not using card detect, set it to <code>nc</code>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="panel.display_extruder"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="display">Visual</tag>
                <tag type="3d-printer">Multi-extruder</tag>
                This sets which extruder's temperature shows on the panel. Handy on multi-extruder setups, so you see the status of whichever extruder is active.
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.{name}.enable"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="menu">Custom</tag>
                <tag type="critical">Required for custom menu</tag>
                <p>Set this to <code>true</code> and it creates a new custom menu entry for the panel, named <code>{name}</code>. Replace <code>{name}</code> with whatever you want to call it.</p>
                <p>You can add as many custom entries as you like, as long as each one has a different name.</p>
                <tag type="note">{name} is case sensitive</tag>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.{name}.name"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="menu">Custom</tag>
                <p>This is the name shown in the panel's menus, what you see when browsing.</p>
                <p>Underscores (<code>_</code>) get converted to spaces when displayed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="custom_menu.{name}.command"></setting></td>
            <td><tag type="unavailable">Not in V2</tag></td>
            <td class="description-cell">
                <tag type="menu">Custom</tag>
                <tag type="gcode">Commands</tag>
                <p>This is the command that runs when you select this menu entry.</p>
                <p>Use <code>_</code> instead of a literal space, both in the menu name and in the command, since it gets converted to a space. Use <code>|</code> to separate multiple commands to run one after another.</p>
                <tag type="example">M80_S30|G1_X10 executes M80 S30 followed by G1 X10</tag>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
