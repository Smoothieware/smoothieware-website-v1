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
            <td><setting no-version v1="base_stepping_frequency"></setting></td>
            <td><setting no-version v2="system.step_frequency"></setting></td>
            <td class="description-cell">
                <p>This is the fastest rate at which the firmware can generate step pulses, across all motors, based on your MCU's speed and the firmware's own overhead.</p>
                <p>How fast your machine actually moves also depends on microstepping and steps per millimeter.</p>
                <p>V1 defaults to 100kHz. V2 defaults to 200kHz (50kHz in debug builds). Raise it and the machine can move faster, but the CPU has to work harder to keep up.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="microseconds_per_step_pulse"></setting></td>
            <td><setting no-version v2="system.step_pulse_us"></setting></td>
            <td class="description-cell">
                <p>This sets how long the STEP signal stays high before dropping back down, in microseconds.</p>
                <p>If your stepper motors are missing steps, behaving erratically, or making odd noises, try raising this value.</p>
                <p>Most modern drivers are happy with 1µs pulses. Older drivers can need 2-3µs. If you're using an external driver, check its datasheet for the minimum pulse width it needs.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="dfu_enable"></setting></td>
            <td><setting no-version v2="system.dfu_enable"></setting></td>
            <td class="description-cell">
                <p>This turns on DFU (Device Firmware Update) mode. With it enabled, the board can drop into DFU mode and flash firmware over USB directly, without going through the SD card bootloader.</p>
                <p>It's really for firmware developers and advanced users who need to write straight to the microcontroller's internal flash.</p>
                <p>It's off by default, on purpose, since a mistake here can brick the board. Only turn it on if you understand what you're doing and actually need direct flash access.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="msd_disable"></setting></td>
            <td><setting no-version v2="system.msc_enable"></setting></td>
            <td class="description-cell">
                <p>This turns on Mass Storage Class mode, so the SD card shows up as a USB drive when you plug the board into a computer. You can drag and drop files onto it without pulling the card out.</p>
                <p>Note that the V1 setting is inverted (msd_disable) and needs special firmware to work at all, while V2 uses normal msc_enable logic and ships enabled by default.</p>
                <p>If you're having USB serial reliability trouble, try disabling this.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.msc_led"></setting></td>
            <td class="description-cell">
                <p>This is the LED that flashes when the SD card is being read or written over USB in Mass Storage Class mode. It's your warning not to unplug the cable mid-transfer.</p>
                <p>It flashes fast while a transfer is happening and stays off otherwise. Only used when msc_enable is true.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="play_led_disable"></setting></td>
            <td><setting no-version v2="system.aux_play_led"></setting></td>
            <td class="description-cell">
                <p>This is an optional second play LED pin that mirrors the main play LED. In V1 this setting disables the play LED, in V2 it sets an auxiliary LED pin instead.</p>
                <p>Handy for a lighted kill button, an external status light, or a remote panel that needs to show whether the machine is running a G-code file from SD or sitting idle.</p>
                <p>The LED turns on while G-code is executing and turns off when idle or paused.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.fets_enable_pin"></setting></td>
            <td class="description-cell">
                <p>This is the global enable pin for every FET on the board, the ones driving heaters, fans, and other high-power outputs. It's normally a NOT-enable signal (active low), so when the pin goes high, every FET output shuts off as a safety measure.</p>
                <p>Both this pin and fets_power_enable_pin need to be in the right state for the FETs to work at all, that's your hardware-level safety control over all the high-power outputs.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.fets_power_enable_pin"></setting></td>
            <td class="description-cell">
                <p>This is the global power enable pin for the FETs, usually active-high, controlling the power supply to all the FET circuits. On the Prime board it switches a separate power rail that feeds the FET drivers.</p>
                <p>Both this pin and fets_enable_pin need to be in the right state for the FETs to work. Needing two independent signals like this is a deliberate safety measure, it stops the outputs turning on by accident.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.flash_on_boot"></setting></td>
            <td class="description-cell">
                <p>With this on, Smoothie checks the SD card for a flashme.bin file on every boot, and if it finds a valid one, it flashes it automatically. Once it's done, the file gets renamed to flashme.old.</p>
                <p>Turn it off if you'd rather update firmware manually, or if automatic updates get in the way of your workflow. It's handy for automated deployment in production.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="grbl_mode"></setting></td>
            <td><setting no-version v2="general.grbl_mode"></setting></td>
            <td class="description-cell">
                <p>This turns on GRBL compatibility mode for CNC work. With it enabled, Smoothie replies with GRBL-style status messages and command acknowledgments, so it works with GRBL-based senders like bCNC or Universal G-code Sender.</p>
                <p>It changes how some G-codes get interpreted and how responses are formatted to match GRBL. You'll need it on if your CAM software expects GRBL-specific behavior.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="general.config-override"></setting></td>
            <td class="description-cell">
                <p>This turns on config-override, so you can save runtime configuration changes with <mcode>M500</mcode> and have them load automatically on boot. Settings get overridden and kept without touching the main config.ini file.</p>
                <p>In v1 the override file was always active if it existed. In v2 you have to turn this on explicitly.</p>
                <p>Good for storing calibration values, PID tuning, and anything else you want to survive a reboot.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="second_usb_serial_enable"></setting></td>
            <td><setting no-version v2="consoles.second_usb_serial_enable"></setting></td>
            <td class="description-cell">
                <p>This turns on a second USB serial console port, so you can have two connections at once. With it on, the board presents itself as two USB serial interfaces, so something like Pronterface and a terminal can both be connected at the same time.</p>
                <p>Both ports run over the same USB connection, but your OS sees them as separate COM/tty devices.</p>
                <p>Handy for debugging while a print is running, or for keeping manual control and automated monitoring open together.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="uart0.baud_rate"></setting></td>
            <td><setting no-version v2="uart console.baudrate"></setting></td>
            <td class="description-cell">
                <p>This is the UART speed in bits per second. It has to match whatever the connected device is set to. A higher baudrate means faster communication and G-code streaming.</p>
                <p>Common values are 9600, 19200, 38400, 57600, and 115200. The V1 setting only applies to UART0, the primary serial port, while V2 lets you configure each UART separately.</p>
                <p>Higher baudrates can get less reliable over long cable runs or in electrically noisy environments.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.bits"></setting></td>
            <td class="description-cell">
                <p>This sets how many data bits go out per character over UART. Standard serial uses 8 bits, which covers 256 possible values (0-255) per character.</p>
                <p>It needs to match the device on the other end. Some older systems use 7-bit communication, but that's rare these days.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.channel"></setting></td>
            <td class="description-cell">
                <p>This sets which UART hardware channel to use. Different boards support different numbers of channels, and channel 0 is usually the primary debug UART.</p>
                <p>The Smoothieboard has several UART channels, each on different pins. Check your board's pinout documentation to see which channel maps to which physical pins.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.console"></setting></td>
            <td class="description-cell">
                <p>This decides whether the UART works as a console for sending and receiving commands, or gets used for raw data instead.</p>
                <p>Set to true, it behaves like the USB serial console, taking G-code commands and sending back responses. Set to false, you can use it for raw binary data or whatever specialized protocol you need.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.enable"></setting></td>
            <td class="description-cell">
                <p>This turns on the UART console, for serial communication over the hardware UART pins. With it enabled, the board can talk over a dedicated UART channel on top of USB serial, so you can have both connected at once, or talk to another microcontroller.</p>
                <p>Useful for hooking up external devices like a touchscreen, a Raspberry Pi, or other embedded systems.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.parity"></setting></td>
            <td class="description-cell">
                <p>This sets the parity checking mode for error detection. It has to match the connected device.</p>
                <ul>
                    <li>none: no parity bit, maximum throughput.</li>
                    <li>odd / even: an extra bit is added so the total number of 1-bits comes out odd or even, which lets you catch single-bit errors.</li>
                </ul>
                <p>Parity checking isn't common in modern short-distance serial links, but it can help in noisy environments.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.stop_bits"></setting></td>
            <td class="description-cell">
                <p>This sets how many stop bits get appended after each character. They give the receiver a bit of time to get ready for the next character.</p>
                <p>Most modern serial links use 1 stop bit. 2 stop bits can help on slower or noisier links. It has to match the device on the other end.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">
                <p>This sets the PWM frequency, in Hertz, for hardware PWM timer 1. V2 has two hardware PWM timers, PWM1 and PWM2, each with 4 channels, and all the channels on one timer share the same frequency.</p>
                <p>Typical values run from 1000Hz for heaters up to 20000Hz for fans and motor control.</p>
                <p>Lower frequencies cut electromagnetic interference but can make some devices audibly whine. Higher frequencies are quieter but not every piece of hardware handles them well.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="pwm2.frequency"></setting></td>
            <td class="description-cell">
                <p>This sets the PWM frequency, in Hertz, for hardware PWM timer 2. Same deal as PWM1: V2 has two hardware PWM timers, each with 4 channels, and all channels on the same timer share one frequency.</p>
                <p>Typical values run from 1000Hz for heaters up to 20000Hz for fans and motor control.</p>
                <p>Having two independent timers means you can run different frequencies for different outputs, say 1kHz for heaters on PWM1 and 20kHz for fans on PWM2.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
