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
            <td class="description-cell">Maximum step generation frequency in Hertz. This is the theoretical maximum rate at which the firmware can generate step pulses across all motors, based on MCU speed and firmware overhead. The actual achievable speed depends on this frequency, microstepping, and steps per millimeter. V1 default is 100kHz, V2 default is 200kHz (50kHz in debug builds). Higher frequencies enable faster machine movement but require more CPU processing power.</td>
        </tr>
        <tr>
            <td><setting no-version v1="microseconds_per_step_pulse"></setting></td>
            <td><setting no-version v2="system.step_pulse_us"></setting></td>
            <td class="description-cell">Duration of the step pulse sent to stepper drivers in microseconds. This controls how long the STEP signal remains high before returning low. Increase this value if stepper motors are missing steps, behaving erratically, or making unusual noises. Most modern stepper drivers work fine with 1µs pulses, but older drivers may require 2-3µs pulses for reliable operation. Some external drivers explicitly specify minimum pulse width requirements in their datasheets.</td>
        </tr>
        <tr>
            <td><setting no-version v1="dfu_enable"></setting></td>
            <td><setting no-version v2="system.dfu_enable"></setting></td>
            <td class="description-cell">Enable DFU (Device Firmware Update) mode for developers. When enabled, the board can enter DFU mode for low-level firmware flashing via USB without needing the SD card bootloader. This is primarily for firmware developers and advanced users who need to flash firmware directly to the microcontroller's internal flash memory. Disabled by default for safety to prevent accidental bricking of the board. Only enable if you understand the risks and need direct flash access.</td>
        </tr>
        <tr>
            <td><setting no-version v1="msd_disable"></setting></td>
            <td><setting no-version v2="system.msc_enable"></setting></td>
            <td class="description-cell">Enable Mass Storage Class mode which allows the SD card to be accessed as a USB drive when connected to a computer. When enabled, you can drag and drop files directly to the board's SD card without removing it. NOTE: V1 setting is inverted (msd_disable) and requires special firmware to function, while V2 uses standard msc_enable logic and is enabled by default. Disabling this can improve USB serial reliability on some systems.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.msc_led"></setting></td>
            <td class="description-cell">LED that flashes when the board is in Mass Storage Class mode and the SD card is being accessed. Provides visual feedback when the SD card is being read or written via USB, warning you not to disconnect the cable during file operations. The LED flashes rapidly during active transfers and stays off when no transfers are occurring. Only used when msc_enable is true.</td>
        </tr>
        <tr>
            <td><setting no-version v1="play_led_disable"></setting></td>
            <td><setting no-version v2="system.aux_play_led"></setting></td>
            <td class="description-cell">Optional secondary play LED pin that mirrors the main play LED state. In V1, this setting disables the play LED. In V2, this specifies an auxiliary LED pin. Useful for lighted kill buttons, external status indicators, or remote control panels that need to show when the machine is running (playing G-code from SD card) or idle. The LED turns on when actively executing G-code and turns off when idle or paused.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.fets_enable_pin"></setting></td>
            <td class="description-cell">Global enable pin for all FETs (Field Effect Transistors) controlling heaters, fans, and other high-power outputs. This is typically a NOT-enable signal (active low) that controls power to all output FETs. When this pin is high (disabled), all FET outputs are turned off as a safety measure. Both this pin and fets_power_enable_pin must be in the correct state for FETs to operate. This provides hardware-level safety control over all high-power outputs.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.fets_power_enable_pin"></setting></td>
            <td class="description-cell">Global power enable pin for FETs. This is typically an active high enable signal that controls the power supply to all FET circuits. On the Prime board, this controls a separate power rail that supplies the FET drivers. Both this pin and fets_enable_pin must be in the correct state for FETs to operate. This dual-control approach provides enhanced safety by requiring two independent signals for high-power output operation, preventing accidental activation.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="system.flash_on_boot"></setting></td>
            <td class="description-cell">Automatically flash firmware from flashme.bin file if present on SD card at boot. When enabled, the system checks for a valid flashme.bin file on startup and automatically performs the firmware update if found. The file is renamed to flashme.old after successful flashing. Disable this if you want manual control over firmware updates or if automatic updates interfere with your workflow. Useful for automated deployment in production environments.</td>
        </tr>
        <tr>
            <td><setting no-version v1="grbl_mode"></setting></td>
            <td><setting no-version v2="general.grbl_mode"></setting></td>
            <td class="description-cell">Enables GRBL compatibility mode for CNC applications. When enabled, the firmware responds with GRBL-style status messages and command acknowledgments, making it compatible with GRBL-based software and sender applications like bCNC, Universal G-code Sender, and similar CNC control programs. This mode changes how certain G-codes are interpreted and how responses are formatted to match GRBL's behavior. Essential for using GRBL-specific features in CAM software.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="general.config-override"></setting></td>
            <td class="description-cell">Enables config-override functionality allowing runtime configuration changes to be saved with M500 and loaded automatically on boot. When enabled, settings can be overridden and persisted without modifying the main config.ini file. Unlike v1 where the override file was always active if present, v2 requires explicit enabling of this feature. This is useful for storing calibration values, PID tuning, and other runtime-adjustable parameters that should persist across reboots.</td>
        </tr>
        <tr>
            <td><setting no-version v1="second_usb_serial_enable"></setting></td>
            <td><setting no-version v2="consoles.second_usb_serial_enable"></setting></td>
            <td class="description-cell">Enable a second USB serial console port for simultaneous connections. When enabled, the board presents two USB serial interfaces (composite device), allowing both a host application (like Pronterface) and a terminal to be connected at the same time. Both ports share the same USB connection but appear as separate COM/tty devices to the host operating system. Useful for debugging while running a print job, or for having both manual control and automated monitoring.</td>
        </tr>
        <tr>
            <td><setting no-version v1="uart0.baud_rate"></setting></td>
            <td><setting no-version v2="uart console.baudrate"></setting></td>
            <td class="description-cell">UART communication speed in bits per second. Must match the baudrate configured on the connected device. Higher baudrates allow faster communication and G-code streaming. Common values are 9600, 19200, 38400, 57600, and 115200. V1 setting applies to UART0 (primary serial port), while V2 allows per-UART configuration. Note that higher baudrates may be less reliable over long cable runs or in electrically noisy environments.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.bits"></setting></td>
            <td class="description-cell">Number of data bits per character transmitted over UART. Standard serial communication uses 8 bits, which can represent 256 different values (0-255) per character. This should match the configuration of the device you're communicating with. Some older systems may use 7-bit communication, but this is rare in modern applications.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.channel"></setting></td>
            <td class="description-cell">UART hardware channel number to use. Different boards support different numbers of UART channels. Channel 0 is typically the primary debug UART. The Smoothieboard supports multiple UART channels with different pin assignments. Consult your board's pinout documentation to determine which channel corresponds to which physical pins.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.console"></setting></td>
            <td class="description-cell">Use the UART as a console interface for sending and receiving commands, versus using it for raw data transmission. When true, the UART behaves like the USB serial console, accepting G-code commands and providing response messages. When false, it can be used for raw binary communication or specialized protocols.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.enable"></setting></td>
            <td class="description-cell">Enable UART console for serial communication over hardware UART pins. When enabled, the board can communicate via a dedicated UART channel in addition to USB serial, allowing simultaneous connections or communication with other microcontrollers. Useful for interfacing with external devices like touchscreens, Raspberry Pi, or other embedded systems.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.parity"></setting></td>
            <td class="description-cell">Parity checking mode for error detection. "none" means no parity bit is added, maximizing data throughput. "odd" and "even" add an extra bit to make the total number of 1-bits odd or even respectively, allowing detection of single-bit errors. Must match the parity setting of the connected device. Parity checking is less common in modern short-distance serial communication but can be useful for noisy environments.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="uart console.stop_bits"></setting></td>
            <td class="description-cell">Number of stop bits appended after each character. Stop bits provide synchronization time between characters, allowing the receiver to prepare for the next character. Most modern serial communication uses 1 stop bit, though 2 stop bits can be used for slower or noisier communication links. Must match the configuration of the connected device.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="pwm1.frequency"></setting></td>
            <td class="description-cell">Sets the PWM frequency for hardware PWM timer 1 in Hertz. V2 uses two hardware PWM timers (PWM1 and PWM2), each with 4 channels. All channels on the same timer share the same frequency. Typical values range from 1000Hz (for heaters) to 20000Hz (for fans and motor control). Lower frequencies reduce electromagnetic interference but may cause audible noise in some devices. Higher frequencies are quieter but may not be compatible with all hardware.</td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="pwm2.frequency"></setting></td>
            <td class="description-cell">Sets the PWM frequency for hardware PWM timer 2 in Hertz. V2 uses two hardware PWM timers (PWM1 and PWM2), each with 4 channels. All channels on the same timer share the same frequency. Typical values range from 1000Hz (for heaters) to 20000Hz (for fans and motor control). Having two independent timers allows using different frequencies for different output types (e.g., 1kHz for heaters on PWM1, 20kHz for fans on PWM2).</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
