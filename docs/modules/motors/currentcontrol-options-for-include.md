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
                <p>This turns on digital control of your stepper driver currents through a digipot chip, so you set motor currents in software instead of turning a potentiometer by hand.</p>
                <p>You need this enabled for any of the current settings below to do anything.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="digipotchip"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This selects which digipot chip handles current control. Different boards use different chips, so this has to match your hardware.</p>
                <ul>
                    <li>mcp4451: Smoothieboard v1 and X5</li>
                    <li>ad5206: early prototypes</li>
                </ul>
                <p>Get the chip wrong and current control just won't work.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="digipot_max_current"></setting></td>
            <td><setting no-version v2="tmc2590.{motor}.max_current"></setting></td>
            <td class="description-cell">
                <p>This is the maximum current, in amps, you can set for any motor. It's a safety ceiling that stops you from asking for more current than the hardware can handle.</p>
                <p>A standard Smoothieboard with the onboard drivers is typically good for 2.0A. Boards with upgraded drivers can usually take 2.4A. Go over your driver's rating and you can damage both the driver and the motor.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="digipot_factor"></setting></td>
            <td><setting no-version v2="tmc2590.{motor}.sense_resistor"></setting></td>
            <td class="description-cell">
                <p>This is the factor Smoothie uses to convert a current in amps to a digipot wiper position (0-255). It depends on your sense resistor and digipot chip, so it's hardware-specific. Most Smoothieboards default to 113.5.</p>
                <p>It comes from factor = 255 * R_sense / V_ref, where V_ref is usually 2.5V. Get this wrong and the current you set won't match the current you actually get.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_current"></setting></td>
            <td><setting no-version v2="current control.alpha.current"></setting></td>
            <td class="description-cell">
                <p>This sets the motor current, in amps, for the alpha axis (X on a Cartesian machine).</p>
                <p>V1 uses digipot control (MCP4451). V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards, or PWM control on BOARD_MINIALPHA.</p>
                <p>Most motors want somewhere between 0.5A and 2.0A. More current gives you more torque, but the motor and driver run hotter.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.alpha.pin"></setting></td>
            <td class="description-cell">
                <p>This is the PWM pin that controls the alpha axis current on boards using PWM-based current control, which in practice means BOARD_MINIALPHA.</p>
                <p>Most Smoothieboards don't need this, they use SPI-controlled TMC drivers or external drivers with their own hardware current adjustment. It only matters for boards with an analog current reference input.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_current"></setting></td>
            <td><setting no-version v2="current control.beta.current"></setting></td>
            <td class="description-cell">
                <p>This sets the motor current, in amps, for the beta axis (Y on a Cartesian machine).</p>
                <p>V1 uses digipot control (MCP4451). V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards, or PWM control on BOARD_MINIALPHA. Most motors want somewhere between 0.5A and 2.0A.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.beta.pin"></setting></td>
            <td class="description-cell">
                <p>This is the PWM pin that controls the beta axis current on boards using PWM-based current control, mainly BOARD_MINIALPHA.</p>
                <p>Most Smoothieboards don't need this, they use SPI-controlled TMC drivers or external drivers with their own hardware current adjustment.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_current"></setting></td>
            <td><setting no-version v2="current control.gamma.current"></setting></td>
            <td class="description-cell">
                <p>This sets the motor current, in amps, for the gamma axis (Z on a Cartesian machine).</p>
                <p>V1 uses digipot control (MCP4451). V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards, or PWM control on BOARD_MINIALPHA.</p>
                <p>Z often wants more current than X or Y, since it's lifting the toolhead or the bed, especially on bigger machines.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.gamma.pin"></setting></td>
            <td class="description-cell">
                <p>This is the PWM pin that controls the gamma axis current on boards using PWM-based current control, mainly BOARD_MINIALPHA.</p>
                <p>Most Smoothieboards don't need this, they use SPI-controlled TMC drivers or external drivers with their own hardware current adjustment.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_current"></setting></td>
            <td><setting no-version v2="current control.delta.current"></setting></td>
            <td class="description-cell">
                <p>This sets the motor current, in amps, for the delta axis (A). That's usually your first extruder, E0, on a 3D printer, or a rotary A axis on a CNC machine.</p>
                <p>V1 uses digipot control (MCP4451). V2 uses SPI-controlled TMC2590/TMC2660 drivers on Prime boards, or PWM control on BOARD_MINIALPHA.</p>
                <p>Extruder motors usually run somewhere between 0.8A and 1.5A, depending on whether it's direct drive or geared.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.delta.pin"></setting></td>
            <td class="description-cell">
                <p>This is the PWM pin that controls the delta axis current on boards using PWM-based current control, mainly BOARD_MINIALPHA.</p>
                <p>Most Smoothieboards don't need this, they use SPI-controlled TMC drivers or external drivers with their own hardware current adjustment.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="epsilon_current"></setting></td>
            <td><setting no-version v2="current control.epsilon.current"></setting></td>
            <td class="description-cell">
                <p>This sets the motor current, in amps, for the epsilon axis (B). That's usually your second extruder, E1, on a 3D printer, or a rotary B axis on a CNC machine.</p>
                <p>V1 defaults to -1 (disabled), since epsilon isn't standard on v1 boards. V2 Prime boards only have onboard TMC drivers for the first four axes (XYZA), so epsilon usually runs off an external driver.</p>
                <p>Leave it at -1 to disable the channel, that also stops Smoothie trying to configure a digipot for hardware that isn't there.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.epsilon.pin"></setting></td>
            <td class="description-cell">
                <p>This is the PWM pin that controls the epsilon axis current on boards using PWM-based current control, mainly BOARD_MINIALPHA.</p>
                <p>Most Smoothieboards don't need this.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="zeta_current"></setting></td>
            <td><setting no-version v2="current control.zeta.current"></setting></td>
            <td class="description-cell">
                <p>This sets the motor current, in amps, for the zeta axis (C). That's usually your third extruder, E2, on a 3D printer, or a rotary C axis on a CNC machine. Default is -1, which disables the channel.</p>
                <p>Works with both the MCP4451 and AD5206 digipot chips. V2 Prime boards only have onboard TMC drivers for the first four axes (XYZA), so zeta usually runs off an external driver.</p>
            </td>
        </tr>
        <tr>
            <td class="empty-cell">—</td>
            <td><setting no-version v2="current control.zeta.pin"></setting></td>
            <td class="description-cell">
                <p>This is the PWM pin that controls the zeta axis current on boards using PWM-based current control, mainly BOARD_MINIALPHA.</p>
                <p>Most Smoothieboards don't need this.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="eta_current"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This sets the current for the seventh stepper driver, channel 6 of the digipot. Only the MCP4451 chip has this channel, AD5206 doesn't. Default is -1, which disables it.</p>
                <p>You'll rarely need this outside a custom multi-extruder or multi-axis setup. Try to use it with AD5206 and you'll get configuration errors.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="theta_current"></setting></td>
            <td class="empty-cell">—</td>
            <td class="description-cell">
                <p>This sets the current for the eighth stepper driver, channel 7 of the digipot, the last one, and it's only on the MCP4451 chip. Default is -1, which disables it.</p>
                <p>That's as many axes as the MCP4451 digipot supports. You'd only need this on a specialized machine running 8 independent motor drivers.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
