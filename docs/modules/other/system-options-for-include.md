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
                <p>Maximum step generation frequency in Hertz — the theoretical ceiling at which the firmware can generate step pulses across all motors, based on MCU speed and firmware overhead.</p>
                <p>Actual achievable speed depends on this frequency together with microstepping and steps per millimeter.</p>
                <ul>
                    <li>V1 default: 100kHz</li>
                    <li>V2 default: 200kHz (50kHz in debug builds)</li>
                </ul>
                <p>Higher frequencies allow faster machine movement but need more CPU processing power.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="microseconds_per_step_pulse"></setting></td>
            <td><setting no-version v2="system.step_pulse_us"></setting></td>
            <td class="description-cell">
                <p>Duration of the step pulse sent to stepper drivers, in microseconds — how long the STEP signal stays high before returning low.</p>
                <p>Increase this if stepper motors are missing steps, behaving erratically, or making unusual noises.</p>
                <p>Most modern drivers work fine with 1µs pulses; older drivers may need 2-3µs. Some external drivers specify a minimum pulse width in their datasheet — check it if unsure.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="dfu_enable"></setting></td>
            <td><setting no-version v2="system.dfu_enable"></setting></td>
            <td class="description-cell">
                <p>Enable DFU (Device Firmware Update) mode for developers. When enabled, the board can enter DFU mode for low-level firmware flashing via USB without needing the SD card bootloader.</p>
                <p>Primarily for firmware developers and advanced users who need to flash firmware directly to the microcontroller's internal flash memory.</p>
                <p>Disabled by default for safety, to prevent accidental bricking of the board. Only enable if you understand the risks and need direct flash access.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="msd_disable"></setting></td>
            <td><setting no-version v2="system.msc_enable"></setting></td>
            <td class="description-cell">
                <p>Enable Mass Storage Class mode, which allows the SD card to be accessed as a USB drive when connected to a computer — you can drag and drop files directly to the board's SD card without removing it.</p>
                <p>NOTE: the V1 setting is inverted (msd_disable) and requires special firmware to function, while V2 uses standard msc_enable logic and is enabled by default.</p>
                <p>Disabling this can improve USB serial reliability on some systems.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.msc_led"></setting></td>
            <td class="description-cell">
                <p>LED that flashes when the board is in Mass Storage Class mode and the SD card is being accessed — provides visual feedback that the SD card is being read or written via USB, warning you not to disconnect the cable during file operations.</p>
                <p>The LED flashes rapidly during active transfers and stays off when no transfers are occurring. Only used when msc_enable is true.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="play_led_disable"></setting></td>
            <td><setting no-version v2="system.aux_play_led"></setting></td>
            <td class="description-cell">
                <p>Optional secondary play LED pin that mirrors the main play LED state. In V1, this setting disables the play LED; in V2, it specifies an auxiliary LED pin.</p>
                <p>Useful for lighted kill buttons, external status indicators, or remote control panels that need to show when the machine is running (playing G-code from SD card) or idle.</p>
                <p>The LED turns on when actively executing G-code and turns off when idle or paused.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.fets_enable_pin"></setting></td>
            <td class="description-cell">
                <p>Global enable pin for all FETs (Field Effect Transistors) controlling heaters, fans, and other high-power outputs. This is typically a NOT-enable signal (active low) that controls power to all output FETs — when the pin is high (disabled), all FET outputs are turned off as a safety measure.</p>
                <p>Both this pin and fets_power_enable_pin must be in the correct state for FETs to operate, providing hardware-level safety control over all high-power outputs.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.fets_power_enable_pin"></setting></td>
            <td class="description-cell">
                <p>Global power enable pin for FETs — typically an active-high enable signal that controls the power supply to all FET circuits. On the Prime board, this controls a separate power rail that supplies the FET drivers.</p>
                <p>Both this pin and fets_enable_pin must be in the correct state for FETs to operate. This dual-control approach provides enhanced safety by requiring two independent signals for high-power output operation, preventing accidental activation.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.flash_on_boot"></setting></td>
            <td class="description-cell">
                <p>Automatically flash firmware from a flashme.bin file if present on the SD card at boot. When enabled, the system checks for a valid flashme.bin file on startup and automatically performs the firmware update if found; the file is renamed to flashme.old after successful flashing.</p>
                <p>Disable this if you want manual control over firmware updates or if automatic updates interfere with your workflow. Useful for automated deployment in production environments.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="grbl_mode"></setting></td>
            <td><setting no-version v2="general.grbl_mode"></setting></td>
            <td class="description-cell">
                <p>Enables GRBL compatibility mode for CNC applications. When enabled, the firmware responds with GRBL-style status messages and command acknowledgments, making it compatible with GRBL-based software and sender applications like bCNC, Universal G-code Sender, and similar CNC control programs.</p>
                <p>This mode changes how certain G-codes are interpreted and how responses are formatted to match GRBL's behavior. Essential for using GRBL-specific features in CAM software.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="general.config-override"></setting></td>
            <td class="description-cell">
                <p>Enables config-override functionality, allowing runtime configuration changes to be saved with <mcode>M500</mcode> and loaded automatically on boot — settings can be overridden and persisted without modifying the main config.ini file.</p>
                <p>Unlike v1, where the override file was always active if present, v2 requires this feature to be explicitly enabled.</p>
                <p>Useful for storing calibration values, PID tuning, and other runtime-adjustable parameters that should persist across reboots.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="second_usb_serial_enable"></setting></td>
            <td><setting no-version v2="consoles.second_usb_serial_enable"></setting></td>
            <td class="description-cell">
                <p>Enable a second USB serial console port for simultaneous connections. When enabled, the board presents two USB serial interfaces (composite device), allowing both a host application (like Pronterface) and a terminal to be connected at the same time.</p>
                <p>Both ports share the same USB connection but appear as separate COM/tty devices to the host operating system.</p>
                <p>Useful for debugging while running a print job, or for having both manual control and automated monitoring.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="uart0.baud_rate"></setting></td>
            <td><setting no-version v2="uart console.baudrate"></setting></td>
            <td class="description-cell">
                <p>UART communication speed in bits per second — must match the baudrate configured on the connected device. Higher baudrates allow faster communication and G-code streaming.</p>
                <p>Common values are 9600, 19200, 38400, 57600, and 115200. The V1 setting applies to UART0 (primary serial port), while V2 allows per-UART configuration.</p>
                <p>Note that higher baudrates may be less reliable over long cable runs or in electrically noisy environments.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.bits"></setting></td>
            <td class="description-cell">
                <p>Number of data bits per character transmitted over UART. Standard serial communication uses 8 bits, which can represent 256 different values (0-255) per character.</p>
                <p>This should match the configuration of the device you're communicating with. Some older systems may use 7-bit communication, but this is rare in modern applications.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.channel"></setting></td>
            <td class="description-cell">
                <p>UART hardware channel number to use. Different boards support different numbers of UART channels; channel 0 is typically the primary debug UART.</p>
                <p>The Smoothieboard supports multiple UART channels with different pin assignments. Consult your board's pinout documentation to determine which channel corresponds to which physical pins.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.console"></setting></td>
            <td class="description-cell">
                <p>Use the UART as a console interface for sending and receiving commands, versus using it for raw data transmission.</p>
                <p>When true, the UART behaves like the USB serial console, accepting G-code commands and providing response messages. When false, it can be used for raw binary communication or specialized protocols.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.enable"></setting></td>
            <td class="description-cell">
                <p>Enable UART console for serial communication over hardware UART pins. When enabled, the board can communicate via a dedicated UART channel in addition to USB serial, allowing simultaneous connections or communication with other microcontrollers.</p>
                <p>Useful for interfacing with external devices like touchscreens, Raspberry Pi, or other embedded systems.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.parity"></setting></td>
            <td class="description-cell">
                <p>Parity checking mode for error detection. Must match the parity setting of the connected device.</p>
                <ul>
                    <li>none: no parity bit is added, maximizing data throughput.</li>
                    <li>odd / even: an extra bit is added to make the total number of 1-bits odd or even respectively, allowing detection of single-bit errors.</li>
                </ul>
                <p>Parity checking is less common in modern short-distance serial communication but can be useful for noisy environments.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.stop_bits"></setting></td>
            <td class="description-cell">
                <p>Number of stop bits appended after each character. Stop bits provide synchronization time between characters, allowing the receiver to prepare for the next character.</p>
                <p>Most modern serial communication uses 1 stop bit, though 2 stop bits can be used for slower or noisier communication links. Must match the configuration of the connected device.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">
                <p>Sets the PWM frequency for hardware PWM timer 1 in Hertz. V2 uses two hardware PWM timers (PWM1 and PWM2), each with 4 channels; all channels on the same timer share the same frequency.</p>
                <p>Typical values range from 1000Hz (for heaters) to 20000Hz (for fans and motor control).</p>
                <p>Lower frequencies reduce electromagnetic interference but may cause audible noise in some devices. Higher frequencies are quieter but may not be compatible with all hardware.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="pwm2.frequency"></setting></td>
            <td class="description-cell">
                <p>Sets the PWM frequency for hardware PWM timer 2 in Hertz. V2 uses two hardware PWM timers (PWM1 and PWM2), each with 4 channels; all channels on the same timer share the same frequency.</p>
                <p>Typical values range from 1000Hz (for heaters) to 20000Hz (for fans and motor control).</p>
                <p>Having two independent timers allows using different frequencies for different output types (e.g., 1kHz for heaters on PWM1, 20kHz for fans on PWM2).</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
