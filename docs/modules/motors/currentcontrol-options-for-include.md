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
            <td><setting no-version v1="currentcontrol_module_enable"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Enables digital control of stepper motor driver currents via a digipot chip — allows software configuration of motor currents through the digipot interface instead of manual potentiometer adjustment.</p>
                <p>Required for using current settings in the configuration file.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="digipotchip"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Selects the digipot (digital potentiometer) chip used for current control. Different boards use different digipot chips, and this setting must match your hardware.</p>
                <ul>
                    <li>mcp4451: Smoothieboard v1 and X5</li>
                    <li>ad5206: early prototypes</li>
                </ul>
                <p>Incorrect chip selection will result in non-functional current control.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="digipot_max_current"></setting></td>
            <td><setting no-version v2="tmc2590.{motor}.max_current"></setting></td>
            <td class="description-cell">
                <p>Maximum current in amperes that can be set for any motor — a safety limit that prevents setting currents higher than the hardware can safely handle.</p>
                <ul>
                    <li>Standard Smoothieboard with onboard drivers: typically 2.0A</li>
                    <li>Boards with upgraded drivers: typically 2.4A</li>
                </ul>
                <p>Exceeding driver current ratings can damage both drivers and motors.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="digipot_factor"></setting></td>
            <td><setting no-version v2="tmc2590.{motor}.sense_resistor"></setting></td>
            <td class="description-cell">
                <p>Conversion factor for translating current values (in amperes) to digipot wiper positions (0-255). This is hardware-specific and depends on the sense resistor value and digipot chip characteristics. Default is 113.5 for most Smoothieboards.</p>
                <p>Calculated from the formula: factor = 255 * R_sense / V_ref, where V_ref is typically 2.5V. Incorrect values result in actual motor current not matching configured values.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_current"></setting></td>
            <td><setting no-version v2="current control.alpha.current"></setting></td>
            <td class="description-cell">
                <p>Sets the motor current for the alpha axis (X axis in Cartesian machines) in Amperes — controls how much current is delivered to the stepper motor driver.</p>
                <p>V1 uses digipot control (MCP4451), while V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards or PWM control on BOARD_MINIALPHA.</p>
                <p>Typical values range from 0.5A to 2.0A depending on motor specifications. Higher current provides more torque but generates more heat.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.alpha.pin"></setting></td>
            <td class="description-cell">
                <p>PWM pin for controlling the alpha axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA).</p>
                <p>Most Smoothieboard configurations do not use this setting, as they rely on SPI-controlled TMC drivers or external drivers with hardware current adjustment. Only relevant for boards with analog current reference inputs.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_current"></setting></td>
            <td><setting no-version v2="current control.beta.current"></setting></td>
            <td class="description-cell">
                <p>Sets the motor current for the beta axis (Y axis in Cartesian machines) in Amperes — controls how much current is delivered to the stepper motor driver.</p>
                <p>V1 uses digipot control (MCP4451), while V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards or PWM control on BOARD_MINIALPHA. Typical values range from 0.5A to 2.0A depending on motor specifications.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.beta.pin"></setting></td>
            <td class="description-cell">
                <p>PWM pin for controlling the beta axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA).</p>
                <p>Most Smoothieboard configurations do not use this setting, as they rely on SPI-controlled TMC drivers or external drivers with hardware current adjustment.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_current"></setting></td>
            <td><setting no-version v2="current control.gamma.current"></setting></td>
            <td class="description-cell">
                <p>Sets the motor current for the gamma axis (Z axis in Cartesian machines) in Amperes — controls how much current is delivered to the stepper motor driver.</p>
                <p>V1 uses digipot control (MCP4451), while V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards or PWM control on BOARD_MINIALPHA.</p>
                <p>The Z-axis often benefits from higher current values for lifting the toolhead or bed, especially on larger machines.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.gamma.pin"></setting></td>
            <td class="description-cell">
                <p>PWM pin for controlling the gamma axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA).</p>
                <p>Most Smoothieboard configurations do not use this setting, as they rely on SPI-controlled TMC drivers or external drivers with hardware current adjustment.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_current"></setting></td>
            <td><setting no-version v2="current control.delta.current"></setting></td>
            <td class="description-cell">
                <p>Sets the motor current for the delta axis (A axis, typically first extruder E0 on 3D printers, or rotary A axis on CNC machines) in Amperes — controls how much current is delivered to the stepper motor driver.</p>
                <p>V1 uses digipot control (MCP4451), while V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards or PWM control on BOARD_MINIALPHA.</p>
                <p>Extruder motors often require 0.8A to 1.5A depending on whether they are direct drive or geared.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.delta.pin"></setting></td>
            <td class="description-cell">
                <p>PWM pin for controlling the delta axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA).</p>
                <p>Most Smoothieboard configurations do not use this setting, as they rely on SPI-controlled TMC drivers or external drivers with hardware current adjustment.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="epsilon_current"></setting></td>
            <td><setting no-version v2="current control.epsilon.current"></setting></td>
            <td class="description-cell">
                <p>Sets the motor current for the epsilon axis (B axis, typically second extruder E1 on 3D printers, or rotary B axis on CNC machines) in Amperes.</p>
                <p>V1 default is -1 (disabled) since epsilon is not standard on v1 boards. V2 Prime boards have only the first four axes (XYZA) with onboard TMC drivers; epsilon typically uses an external driver.</p>
                <p>Setting to -1 disables the channel and prevents digipot configuration attempts for non-existent hardware.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.epsilon.pin"></setting></td>
            <td class="description-cell">
                <p>PWM pin for controlling the epsilon axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA).</p>
                <p>Most Smoothieboard configurations do not use this setting.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zeta_current"></setting></td>
            <td><setting no-version v2="current control.zeta.current"></setting></td>
            <td class="description-cell">
                <p>Sets the motor current for the zeta axis (C axis, typically third extruder E2 on 3D printers, or rotary C axis on CNC machines) in Amperes. Default value of -1 disables this channel.</p>
                <p>Available on both MCP4451 and AD5206 digipot chips. V2 Prime boards have only the first four axes (XYZA) with onboard TMC drivers; zeta typically uses an external driver.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.zeta.pin"></setting></td>
            <td class="description-cell">
                <p>PWM pin for controlling the zeta axis motor current on boards that use PWM-based current control (specifically BOARD_MINIALPHA).</p>
                <p>Most Smoothieboard configurations do not use this setting.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="eta_current"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Current setting for the seventh stepper motor driver current control, channel 6 of the digipot (available only on the MCP4451 chip, not AD5206). Default value of -1 disables this channel.</p>
                <p>Very rarely used except on custom multi-extruder or multi-axis setups. Attempting to use with AD5206 will cause configuration errors.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="theta_current"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>Current setting for the eighth stepper motor driver current control, channel 7 of the digipot (last channel, available only on the MCP4451 chip). Default value of -1 disables this channel.</p>
                <p>This is the maximum number of axes supported by the MCP4451 digipot. Extremely rare usage, only for specialized machines requiring 8 independent motor drivers.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
