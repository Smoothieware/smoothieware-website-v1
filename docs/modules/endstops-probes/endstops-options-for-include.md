
<!-- learning-diagram:24-endstops-signal -->
{::nomarkdown}
<figure id="learning-diagram-24-endstops-signal" style="scroll-margin-top: 16vh; "clear: both; max-width: 960px; margin: 2rem auto;">
  <a href="/images/learning-diagrams/24-endstops-signal.svg">
    <img src="/images/learning-diagrams/24-endstops-signal.svg" alt="Endstop signal path: A physical switch reaches firmware as a limit event." style="display: block; width: 100%; height: auto; border-radius: 0.75rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; color: #526174; font-size: 0.92rem; text-align: center;">Visual guide: A physical switch reaches firmware as a limit event.</figcaption>
</figure>
{:/nomarkdown}
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
            <td><setting no-version v1="endstops_enable"></setting></td>
            <td><em>Always enabled if configured in v2</em></td>
            <td class="description-cell">
                <p>Master enable switch for the traditional root-level endstop configuration method.</p>
                <p>When set to <raw>true</raw>, Smoothieware loads endstop configuration using the <setting no-version v1="alpha_*"></setting>, <setting no-version v1="beta_*"></setting>, <setting no-version v1="gamma_*"></setting> syntax.</p>
                <p>In v2, endstops are always enabled if configured.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="corexy_homing"></setting></td>
            <td><setting no-version v2="endstops.common.corexy_homing"></setting></td>
            <td class="description-cell">
                <p>Enables CoreXY-specific homing behavior. When enabled, X and Y axes home individually (one at a time) rather than simultaneously, and both motors stop when either endstop is triggered.</p>
                <p><strong>CRITICAL:</strong> Must be enabled for CoreXY and H-Bot kinematics to prevent incorrect homing behavior.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_homing"></setting></td>
            <td><setting no-version v2="endstops.common.delta_homing"></setting></td>
            <td class="description-cell">
                <p>Enables linear delta robot homing behavior. When enabled, <gcode>G28</gcode> homes all three towers simultaneously by moving the Z axis, and all three tower endstops (alpha, beta, gamma) must trigger during homing.</p>
                <p>Applies trim values to correct for endstop position variations.</p>
                <p><strong>CRITICAL:</strong> Must be enabled for linear delta kinematics.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="rdelta_homing"></setting></td>
            <td><setting no-version v2="endstops.common.rdelta_homing"></setting></td>
            <td class="description-cell">
                <p>Enables rotary delta robot homing behavior. Similar to linear delta, but endstop positions represent actuator angles (in degrees), not cartesian coordinates.</p>
                <p><strong>CRITICAL:</strong> Must be enabled for rotary delta kinematics.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="scara_homing"></setting></td>
            <td><setting no-version v2="endstops.common.scara_homing"></setting></td>
            <td class="description-cell">
                <p>Enables SCARA robot arm homing behavior. When enabled, disables the arm solution during homing (homes in actuator space, not cartesian space).</p>
                <p>Resets arms to plausible minimum angles (-30, 30, 0) before homing to prevent extreme positions.</p>
                <p><strong>CRITICAL:</strong> Must be enabled for SCARA kinematics.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="homing_order"></setting></td>
            <td><setting no-version v2="endstops.common.homing_order"></setting></td>
            <td class="description-cell">
                <p>Specifies a custom homing order, forcing axes to home one at a time in the specified sequence. Must be 3-6 characters specifying axis letters (XYZABC) in the desired order.</p>
                <p><strong>IMPORTANT:</strong> Any axis not specified in the string will NOT be homed.</p>
                <ul>
                    <li><raw>XYZ</raw> — home X, then Y, then Z</li>
                    <li><raw>ZXY</raw> — Z first</li>
                    <li><raw>XYZAB</raw> — for machines with A and B axes</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="home_z_first"></setting></td>
            <td><setting no-version v2="endstops.common.home_z_first"></setting></td>
            <td class="description-cell">
                <p>Controls whether the Z axis homes before or after the X and Y axes.</p>
                <ul>
                    <li><raw>false</raw> (default): X and Y home first (simultaneously), then Z homes.</li>
                    <li><raw>true</raw>: Z homes first, then X and Y home (simultaneously).</li>
                </ul>
                <p>Useful for machines with auto bed leveling probes that need Z clearance before XY movement.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="move_to_origin_after_home"></setting></td>
            <td><setting no-version v2="endstops.common.move_to_origin_after_home"></setting></td>
            <td class="description-cell">
                <p>Controls whether the machine automatically moves to the origin (0,0 or 0,0,0) after homing completes.</p>
                <ul>
                    <li>Cartesian default: <raw>false</raw> — stay at homed position (endstop location)</li>
                    <li>Delta default: <raw>true</raw> — move to origin (deltas are typically not at 0,0 after homing due to trim)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="park_after_home"></setting></td>
            <td><em>Not documented in v2</em></td>
            <td class="description-cell">
                <p>If enabled, moves to a predefined park position after homing instead of moving to origin. The park position is set using <gcode>G28.1</gcode>.</p>
                <p><strong>IMPORTANT:</strong> Mutually exclusive with <setting no-version v1="move_to_origin_after_home"></setting>.</p>
                <p>Position is saved to config-override if <mcode>M500</mcode> is used after <gcode>G28.1</gcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop_debounce_count"></setting></td>
            <td><setting no-version v2="endstops.common.debounce_count"></setting></td>
            <td class="description-cell">
                <p>Number of consecutive reads required to confirm a limit switch trigger — provides debouncing for limit switches (not homing endstops).</p>
                <p><strong>IMPORTANT:</strong> Only used for limit switches (when <raw>&lt;axis&gt;_limit_enable</raw> is true).</p>
                <p>Higher values provide more filtering but slower response to limit triggers. Default of 100 is suitable for most mechanical switches.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop_debounce_ms"></setting></td>
            <td><setting no-version v2="endstops.common.debounce_ms"></setting></td>
            <td class="description-cell">
                <p>Debounce time in milliseconds for homing endstops. When an endstop is triggered during homing, it must remain triggered for this duration before being accepted as a valid trigger.</p>
                <p><strong>IMPORTANT:</strong> Only used for homing endstops during <gcode>G28</gcode>.</p>
                <ul>
                    <li>Optical endstops typically use 0 (no debounce needed due to clean switching)</li>
                    <li>Mechanical switches typically use 1-5ms</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_trim_mm"></setting></td>
            <td><setting no-version v2="endstops.common.alpha_trim_mm"></setting></td>
            <td class="description-cell">
                <p>DELTA/SCARA ONLY. Software trim for the alpha tower/joint endstop, compensating for small variations in endstop positions between towers.</p>
                <ul>
                    <li>Positive values move the effective endstop position toward the endstop (shortens the tower)</li>
                    <li>Negative values move away from the endstop (lengthens the tower)</li>
                </ul>
                <p>Units are millimeters for linear deltas, degrees for rotary deltas. Set via <mcode>M666</mcode> X## command.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_trim_mm"></setting></td>
            <td><setting no-version v2="endstops.common.beta_trim_mm"></setting></td>
            <td class="description-cell">
                <p>DELTA/SCARA ONLY. Software trim for the beta tower/joint endstop, compensating for small variations in endstop positions between towers.</p>
                <ul>
                    <li>Positive values move the effective endstop position toward the endstop (shortens the tower)</li>
                    <li>Negative values move away from the endstop (lengthens the tower)</li>
                </ul>
                <p>Units are millimeters for linear deltas, degrees for rotary deltas. Set via <mcode>M666</mcode> Y## command.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_trim_mm"></setting></td>
            <td><setting no-version v2="endstops.common.gamma_trim_mm"></setting></td>
            <td class="description-cell">
                <p>DELTA/SCARA ONLY. Software trim for the gamma tower/joint endstop, compensating for small variations in endstop positions between towers.</p>
                <ul>
                    <li>Positive values move the effective endstop position toward the endstop (shortens the tower)</li>
                    <li>Negative values move away from the endstop (lengthens the tower)</li>
                </ul>
                <p>Units are millimeters for linear deltas, degrees for rotary deltas. Set via <mcode>M666</mcode> Z## command.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_min_endstop"></setting></td>
            <td><setting no-version v2="endstops.minx.pin"></setting></td>
            <td class="description-cell">Alpha (X axis or alpha tower) minimum limit endstop pin. Set to <raw>nc</raw> if not installed on your machine. Example: <pin>1.24^</pin></td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_endstop"></setting></td>
            <td><setting no-version v2="endstops.maxx.pin"></setting></td>
            <td class="description-cell">Alpha (X axis or alpha tower) maximum limit endstop pin. Set to <raw>nc</raw> if not installed on your machine. Example: <pin>1.25^</pin></td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_homing_direction"></setting></td>
            <td><setting no-version v2="endstops.minx.homing_direction"></setting></td>
            <td class="description-cell">
                <p>In which direction to home.</p>
                <ul>
                    <li><raw>home_to_min</raw>: homing (using the <gcode>G28</gcode> G-code) moves until it hits the minimum endstop, then sets the current position to <setting no-version v1="alpha_min"></setting>.</li>
                    <li><raw>home_to_max</raw>: homing moves until it hits the maximum endstop, then sets the current position to <setting no-version v1="alpha_max"></setting>.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_min"></setting></td>
            <td><setting no-version v2="endstops.minx.homing_position"></setting></td>
            <td class="description-cell">
                <p>This gets loaded after homing when <setting no-version v1="alpha_homing_direction"></setting> is set to <raw>home_to_min</raw> and the minimum endstop is hit.</p>
                <p><strong>NOTE:</strong> the homing offset is added to this with <mcode>M206</mcode> Xnnn.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max"></setting></td>
            <td><setting no-version v2="endstops.maxx.homing_position"></setting></td>
            <td class="description-cell">This gets loaded after homing when <setting no-version v1="alpha_homing_direction"></setting> is set to <raw>home_to_max</raw> and the maximum endstop is hit.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_max_travel"></setting></td>
            <td><setting no-version v2="endstops.minx.max_travel"></setting></td>
            <td class="description-cell">
                <p>This determines how far the X axis can travel looking for the endstop before it gives up.</p>
                <p><strong>CRITICAL:</strong> Set this value larger than your actual machine travel distance to prevent false failures.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_limit_enable"></setting></td>
            <td><setting no-version v2="endstops.minx.limit_enable"></setting></td>
            <td class="description-cell">If set to true, the machine will stop if one of the alpha (X axis or alpha tower) endstops are hit during normal operation. Machine halts and enters ALARM state.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_fast_homing_rate_mm_s"></setting></td>
            <td><setting no-version v2="endstops.minx.fast_rate"></setting></td>
            <td class="description-cell">Speed, in millimetres/second, at which to home for the alpha actuator (X axis or alpha tower). This is the first phase of the two-stage homing process.</td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_slow_homing_rate_mm_s"></setting></td>
            <td><setting no-version v2="endstops.minx.slow_rate"></setting></td>
            <td class="description-cell">
                <p>Speed, in millimetres/second, at which to re-home for the alpha actuator (X axis or alpha tower) once the endstop has been hit once — the precision phase of the two-stage homing process.</p>
                <p>Slower speeds provide more accurate and repeatable homing positions.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_homing_retract_mm"></setting></td>
            <td><setting no-version v2="endstops.minx.retract"></setting></td>
            <td class="description-cell">Distance to retract the alpha actuator (X axis or alpha tower) once the endstop is first hit, before re-homing at a slower speed. Must be large enough to fully release the endstop switch.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_min_endstop"></setting></td>
            <td><setting no-version v2="endstops.miny.pin"></setting></td>
            <td class="description-cell">Beta (Y axis or beta tower) minimum limit endstop pin. Set to <raw>nc</raw> if not installed on your machine. Example: <pin>1.26^</pin></td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_endstop"></setting></td>
            <td><setting no-version v2="endstops.maxy.pin"></setting></td>
            <td class="description-cell">Beta (Y axis or beta tower) maximum limit endstop pin. Set to <raw>nc</raw> if not installed on your machine. Example: <pin>1.27^</pin></td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_homing_direction"></setting></td>
            <td><setting no-version v2="endstops.miny.homing_direction"></setting></td>
            <td class="description-cell">
                <p>In which direction to home.</p>
                <ul>
                    <li><raw>home_to_min</raw>: homing (using the <gcode>G28</gcode> G-code) moves until it hits the minimum endstop, then sets the current position to <setting no-version v1="beta_min"></setting>.</li>
                    <li><raw>home_to_max</raw>: homing moves until it hits the maximum endstop, then sets the current position to <setting no-version v1="beta_max"></setting>.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_min"></setting></td>
            <td><setting no-version v2="endstops.miny.homing_position"></setting></td>
            <td class="description-cell">This gets loaded after homing when <setting no-version v1="beta_homing_direction"></setting> is set to <raw>home_to_min</raw> and the minimum endstop is hit.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max"></setting></td>
            <td><setting no-version v2="endstops.maxy.homing_position"></setting></td>
            <td class="description-cell">This gets loaded after homing when <setting no-version v1="beta_homing_direction"></setting> is set to <raw>home_to_max</raw> and the maximum endstop is hit.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_max_travel"></setting></td>
            <td><setting no-version v2="endstops.miny.max_travel"></setting></td>
            <td class="description-cell">
                <p>This determines how far the Y axis can travel looking for the endstop before it gives up.</p>
                <p><strong>CRITICAL:</strong> Set this value larger than your actual machine travel distance to prevent false failures.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_limit_enable"></setting></td>
            <td><setting no-version v2="endstops.miny.limit_enable"></setting></td>
            <td class="description-cell">If set to true, the machine will stop if one of the beta (Y axis or beta tower) endstops are hit during normal operation. Machine halts and enters ALARM state.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_fast_homing_rate_mm_s"></setting></td>
            <td><setting no-version v2="endstops.miny.fast_rate"></setting></td>
            <td class="description-cell">Speed, in millimetres/second, at which to home for the beta actuator (Y axis or beta tower). This is the first phase of the two-stage homing process.</td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_slow_homing_rate_mm_s"></setting></td>
            <td><setting no-version v2="endstops.miny.slow_rate"></setting></td>
            <td class="description-cell">
                <p>Speed, in millimetres/second, at which to re-home for the beta actuator (Y axis or beta tower) once the endstop has been hit once — the precision phase of the two-stage homing process.</p>
                <p>Slower speeds provide more accurate and repeatable homing positions.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_homing_retract_mm"></setting></td>
            <td><setting no-version v2="endstops.miny.retract"></setting></td>
            <td class="description-cell">Distance to retract the beta actuator (Y axis or beta tower) once the endstop is first hit, before re-homing at a slower speed. Must be large enough to fully release the endstop switch.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_min_endstop"></setting></td>
            <td><setting no-version v2="endstops.minz.pin"></setting></td>
            <td class="description-cell">Gamma (Z axis or gamma tower) minimum limit endstop pin. Set to <raw>nc</raw> if not installed on your machine. Example: <pin>1.28^</pin></td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_endstop"></setting></td>
            <td><setting no-version v2="endstops.maxz.pin"></setting></td>
            <td class="description-cell">Gamma (Z axis or gamma tower) maximum limit endstop pin. Set to <raw>nc</raw> if not installed on your machine. Example: <pin>1.29^</pin></td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_homing_direction"></setting></td>
            <td><setting no-version v2="endstops.minz.homing_direction"></setting></td>
            <td class="description-cell">
                <p>In which direction to home.</p>
                <ul>
                    <li><raw>home_to_min</raw>: homing (using the <gcode>G28</gcode> G-code) moves until it hits the minimum endstop, then sets the current position to <setting no-version v1="gamma_min"></setting>.</li>
                    <li><raw>home_to_max</raw>: homing moves until it hits the maximum endstop, then sets the current position to <setting no-version v1="gamma_max"></setting>.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_min"></setting></td>
            <td><setting no-version v2="endstops.minz.homing_position"></setting></td>
            <td class="description-cell">This gets loaded after homing when <setting no-version v1="gamma_homing_direction"></setting> is set to <raw>home_to_min</raw> and the minimum endstop is hit.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max"></setting></td>
            <td><setting no-version v2="endstops.maxz.homing_position"></setting></td>
            <td class="description-cell">This gets loaded after homing when <setting no-version v1="gamma_homing_direction"></setting> is set to <raw>home_to_max</raw> and the maximum endstop is hit.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_max_travel"></setting></td>
            <td><setting no-version v2="endstops.minz.max_travel"></setting></td>
            <td class="description-cell">
                <p>This determines how far the Z axis can travel looking for the endstop before it gives up.</p>
                <p><strong>CRITICAL:</strong> Set this value larger than your actual machine travel distance to prevent false failures.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_limit_enable"></setting></td>
            <td><setting no-version v2="endstops.minz.limit_enable"></setting></td>
            <td class="description-cell">If set to true, the machine will stop if one of the gamma (Z axis or gamma tower) endstops are hit during normal operation. Machine halts and enters ALARM state.</td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_fast_homing_rate_mm_s"></setting></td>
            <td><setting no-version v2="endstops.minz.fast_rate"></setting></td>
            <td class="description-cell">
                <p>Speed, in millimetres/second, at which to home for the gamma actuator (Z axis or gamma tower) — the first phase of the two-stage homing process.</p>
                <p>The Z-axis typically uses a slower rate (4-10 mm/s) for safety, to prevent bed crashes.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_slow_homing_rate_mm_s"></setting></td>
            <td><setting no-version v2="endstops.minz.slow_rate"></setting></td>
            <td class="description-cell">
                <p>Speed, in millimetres/second, at which to re-home for the gamma actuator (Z axis or gamma tower) once the endstop has been hit once — the precision phase of the two-stage homing process.</p>
                <p>The Z-axis often uses the slowest rate (1-5 mm/s) for maximum precision.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_homing_retract_mm"></setting></td>
            <td><setting no-version v2="endstops.minz.retract"></setting></td>
            <td class="description-cell">
                <p>Distance to retract the gamma actuator (Z axis or gamma tower) once the endstop is first hit, before re-homing at a slower speed.</p>
                <p>The Z-axis often uses smaller values (1-3 mm) to minimize travel, but the value must still be large enough to fully release the endstop switch.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
