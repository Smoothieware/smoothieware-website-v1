


<!-- learning-diagram:24-endstops-signal -->
{::nomarkdown}
<figure id="learning-diagram-24-endstops-signal" style="clear: both; max-width: 960px; margin: 2rem auto; scroll-margin-top: 16vh;">
  <a href="/images/learning-diagrams/24-endstops-signal.svg">
    <img src="/images/learning-diagrams/24-endstops-signal.svg" alt="An endstop gives the machine a known limit: The carriage touches a switch. Smoothie reads the input and stops the move." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto; border-radius: 0.1rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; font-size: 0.92rem; opacity: 0.82; text-align: center;">An endstop gives the machine a known limit <a href="#learning-diagram-24-endstops-signal" aria-label="Permanent link to An endstop gives the machine a known limit" style="margin-left: 0.35rem; text-decoration: none;">#</a></figcaption>
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
                <p>This turns on the traditional, root-level way of configuring endstops.</p>
                <p>Set it to <raw>true</raw> and Smoothie loads your endstop configuration using the <setting no-version v1="alpha_*"></setting>, <setting no-version v1="beta_*"></setting>, <setting no-version v1="gamma_*"></setting> syntax.</p>
                <p>In v2 you don't need this: endstops are always enabled once you've configured them.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="corexy_homing"></setting></td>
            <td><setting no-version v2="endstops.common.corexy_homing"></setting></td>
            <td class="description-cell">
                <p>If you have a CoreXY or H-Bot, this needs to be on, or homing won't work right.</p>
                <p>With it on, X and Y home one at a time instead of together, and both motors stop as soon as either endstop triggers.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="delta_homing"></setting></td>
            <td><setting no-version v2="endstops.common.delta_homing"></setting></td>
            <td class="description-cell">
                <p>Linear deltas need this on. With it enabled, <gcode>G28</gcode> homes all three towers at once by moving the Z axis, and all three tower endstops (alpha, beta, gamma) have to trigger during the move.</p>
                <p>Trim values then get applied to correct for small differences between the towers' endstop positions.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="rdelta_homing"></setting></td>
            <td><setting no-version v2="endstops.common.rdelta_homing"></setting></td>
            <td class="description-cell">
                <p>Rotary deltas need this on. It works like linear delta homing, except the endstop positions are actuator angles in degrees, not cartesian coordinates.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="scara_homing"></setting></td>
            <td><setting no-version v2="endstops.common.scara_homing"></setting></td>
            <td class="description-cell">
                <p>Set this to true on a SCARA. It switches off the arm solution during homing, so the machine homes in actuator space instead of cartesian space.</p>
                <p>Before homing starts, the arms reset to safe minimum angles (-30, 30, 0) so they don't end up somewhere extreme.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="homing_order"></setting></td>
            <td><setting no-version v2="endstops.common.homing_order"></setting></td>
            <td class="description-cell">
                <p>This lets you force axes to home one at a time, in a custom order. Give it 3 to 6 characters naming the axes (XYZABC) in the order you want them homed.</p>
                <p>So <raw>XYZ</raw> homes X, then Y, then Z. <raw>ZXY</raw> homes Z first. <raw>XYZAB</raw> works for machines with A and B axes too.</p>
                <p><strong>IMPORTANT:</strong> any axis you leave out of the string won't get homed at all.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="home_z_first"></setting></td>
            <td><setting no-version v2="endstops.common.home_z_first"></setting></td>
            <td class="description-cell">
                <p>This controls whether Z homes before or after X and Y.</p>
                <ul>
                    <li><raw>false</raw> (default): X and Y home first, together, then Z homes.</li>
                    <li><raw>true</raw>: Z homes first, then X and Y home together.</li>
                </ul>
                <p>If you've got a bed probe that needs Z clearance before it can move over the bed, set this to true.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="move_to_origin_after_home"></setting></td>
            <td><setting no-version v2="endstops.common.move_to_origin_after_home"></setting></td>
            <td class="description-cell">
                <p>This controls whether the machine moves to the origin (0,0 or 0,0,0) automatically once homing is done.</p>
                <ul>
                    <li>Cartesian machines default to <raw>false</raw>: the machine just stays where it homed, at the endstop.</li>
                    <li>Delta machines default to <raw>true</raw>: the machine moves to the origin, since trim usually means deltas don't end up at 0,0 after homing.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="park_after_home"></setting></td>
            <td><em>Not documented in v2</em></td>
            <td class="description-cell">
                <p>If you enable this, the machine moves to a predefined park position after homing instead of moving to the origin. You set that park position with <gcode>G28.1</gcode>.</p>
                <p><strong>IMPORTANT:</strong> you can't use this together with <setting no-version v1="move_to_origin_after_home"></setting>.</p>
                <p>Run <mcode>M500</mcode> after <gcode>G28.1</gcode> and the park position gets saved to config-override.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop_debounce_count"></setting></td>
            <td><setting no-version v2="endstops.common.debounce_count"></setting></td>
            <td class="description-cell">
                <p>This sets how many consecutive reads have to confirm a trigger before Smoothie accepts it. That's what debounces your limit switches (not the homing endstops).</p>
                <p><strong>IMPORTANT:</strong> this only applies to limit switches, when <raw>&lt;axis&gt;_limit_enable</raw> is true.</p>
                <p>Raise it and you get more filtering, but a slower response when a limit switch actually triggers. The default of 100 works fine for most mechanical switches.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="endstop_debounce_ms"></setting></td>
            <td><setting no-version v2="endstops.common.debounce_ms"></setting></td>
            <td class="description-cell">
                <p>This is the debounce time, in milliseconds, for homing endstops. When an endstop triggers during homing, it has to stay triggered for this long before Smoothie accepts it.</p>
                <p><strong>IMPORTANT:</strong> this only applies to homing endstops, during <gcode>G28</gcode>.</p>
                <p>Optical endstops switch cleanly, so 0 is usually fine. Mechanical switches usually need 1-5ms.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="alpha_trim_mm"></setting></td>
            <td><setting no-version v2="endstops.common.alpha_trim_mm"></setting></td>
            <td class="description-cell">
                <p>DELTA/SCARA ONLY. This is the software trim for the alpha tower (or joint, on a SCARA) endstop, and it compensates for small differences in endstop position between towers.</p>
                <p>Positive values shorten the tower, moving the effective endstop position toward the endstop. Negative values lengthen it, moving away from the endstop.</p>
                <p>Units are millimeters on linear deltas, degrees on rotary deltas. Set it with <mcode>M666</mcode> X##.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="beta_trim_mm"></setting></td>
            <td><setting no-version v2="endstops.common.beta_trim_mm"></setting></td>
            <td class="description-cell">
                <p>DELTA/SCARA ONLY. This is the software trim for the beta tower (or joint, on a SCARA) endstop, and it compensates for small differences in endstop position between towers.</p>
                <p>Positive values shorten the tower, moving the effective endstop position toward the endstop. Negative values lengthen it, moving away from the endstop.</p>
                <p>Units are millimeters on linear deltas, degrees on rotary deltas. Set it with <mcode>M666</mcode> Y##.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_trim_mm"></setting></td>
            <td><setting no-version v2="endstops.common.gamma_trim_mm"></setting></td>
            <td class="description-cell">
                <p>DELTA/SCARA ONLY. This is the software trim for the gamma tower (or joint, on a SCARA) endstop, and it compensates for small differences in endstop position between towers.</p>
                <p>Positive values shorten the tower, moving the effective endstop position toward the endstop. Negative values lengthen it, moving away from the endstop.</p>
                <p>Units are millimeters on linear deltas, degrees on rotary deltas. Set it with <mcode>M666</mcode> Z##.</p>
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
                <p><strong>CRITICAL:</strong> set this bigger than your actual travel distance, or you'll get false failures.</p>
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
                <p>Speed, in millimetres/second, at which to re-home the alpha actuator (X axis or alpha tower) once it's hit the endstop the first time. This is the precision phase of the two-stage homing process.</p>
                <p>The slower you go, the more accurate and repeatable your homing gets.</p>
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
                <p><strong>CRITICAL:</strong> set this bigger than your actual travel distance, or you'll get false failures.</p>
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
                <p>Speed, in millimetres/second, at which to re-home the beta actuator (Y axis or beta tower) once it's hit the endstop the first time. This is the precision phase of the two-stage homing process.</p>
                <p>The slower you go, the more accurate and repeatable your homing gets.</p>
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
                <p><strong>CRITICAL:</strong> set this bigger than your actual travel distance, or you'll get false failures.</p>
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
                <p>Speed, in millimetres/second, at which to home the gamma actuator (Z axis or gamma tower). This is the first phase of the two-stage homing process.</p>
                <p>The Z axis usually wants a slower rate here (4-10 mm/s), so you don't crash it into the bed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="gamma_slow_homing_rate_mm_s"></setting></td>
            <td><setting no-version v2="endstops.minz.slow_rate"></setting></td>
            <td class="description-cell">
                <p>Speed, in millimetres/second, at which to re-home the gamma actuator (Z axis or gamma tower) once it's hit the endstop the first time. This is the precision phase of the two-stage homing process.</p>
                <p>The Z axis often uses the slowest rate here (1-5 mm/s), for the best precision.</p>
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
