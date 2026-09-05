


<!-- learning-diagram:48-extruder-options -->
{::nomarkdown}
<figure id="learning-diagram-48-extruder-options" style="clear: both; max-width: 960px; margin: 2rem auto; scroll-margin-top: 16vh;">
  <a href="/images/learning-diagrams/48-extruder-options.svg">
    <img src="/images/learning-diagrams/48-extruder-options.svg" alt="Extruder settings control one material path: Steps per millimeter, speed, temperature, and retraction affect different parts of the feed." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto; border-radius: 0.1rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; font-size: 0.92rem; opacity: 0.82; text-align: center;">Extruder settings control one material path <a href="#learning-diagram-48-extruder-options" aria-label="Permanent link to Extruder settings control one material path" style="margin-left: 0.35rem; text-decoration: none;">#</a></figcaption>
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
            <td><setting no-version v1="extruder.hotend.enable"></setting></td>
            <td><setting no-version v2="extruder.hotend.enable"></setting></td>
            <td class="description-cell">
                <p>This turns the extruder instance on. Set it to <raw>false</raw> and everything else configured for it is ignored.</p>
                <p>Each extruder you enable gets its own module, and you switch to it with a tool change command like <raw>T0</raw> or <raw>T1</raw>.</p>
                <p>To add more extruders, repeat the pattern: <raw>extruder.hotend.enable</raw>, <raw>extruder.hotend2.enable</raw>, and so on.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.steps_per_mm"></setting></td>
            <td><setting no-version v2="extruder.hotend.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>This is how many stepper motor steps it takes to push one millimeter of filament through the extruder. Get it wrong and every print under- or over-extrudes.</p>
                <p>It depends on your motor's steps per revolution (200 is typical for 1.8° motors), your microstepping setting (16x microstepping gives 3200 steps/rev), and your hobbed bolt diameter and gear ratio. Work it out as <raw>(motor_steps_per_rev × microstepping) / (hobbed_bolt_circumference × gear_ratio)</raw>. For example, <raw>(200 × 16) / (3.14159 × 7mm × 1) ≈ 145 steps/mm</raw>.</p>
                <p>Fine-tune it by extruding a known length and measuring what actually came out. You can adjust it live with <mcode>M92 E&lt;value&gt;</mcode> and save it with <mcode>M500</mcode>. [Learn more](extruder.md#steps_per_millimeter)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.filament_diameter"></setting></td>
            <td><setting no-version v2="extruder.hotend.filament_diameter"></setting></td>
            <td class="description-cell">
                <p>Set your filament diameter here, in millimeters, and Smoothie switches to volumetric extrusion: any value above <raw>0.01mm</raw> makes it read E values in G-code as cubic millimeters of filament instead of linear millimeters.</p>
                <p>Standard filament is <raw>1.75mm</raw> or <raw>3.0mm</raw> (sometimes 2.85mm). Set it to <raw>0</raw> and volumetric extrusion is off, back to plain linear E values.</p>
                <p>You can change it at runtime with <mcode>M200 D&lt;diameter&gt;</mcode>, say <mcode>M200 D1.75</mcode>, or turn it off with <mcode>M200 D0</mcode>. Handy if you switch between filament sizes or your slicer already outputs volumetric E values. [Learn more](extruder.md#filament-diameter)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.acceleration"></setting></td>
            <td><setting no-version v2="actuator.delta.acceleration"></setting></td>
            <td class="description-cell">
                <p>This is the extruder motor's maximum acceleration, in <raw>mm/s²</raw>. It sets how fast the extruder can change speed during an extrusion move.</p>
                <p>Push it too high and you'll get filament grinding or skipped steps. Too low and you can get artifacts on rapid direction changes. Most setups sit somewhere between <raw>500</raw> and <raw>3000 mm/s²</raw>.</p>
                <p>This affects retraction moves and the E-axis part of combined moves, so tune it to what your extruder and filament can handle. You can change it at runtime with <mcode>M204 E&lt;value&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.max_speed"></setting></td>
            <td><setting no-version v2="motion control.max_speed"></setting></td>
            <td class="description-cell">
                <p>This caps how fast the extruder can feed filament, in <raw>mm/s</raw>. Smoothie never pushes the extruder past this speed, no matter what the G-code or motion planner asks for.</p>
                <p>Most setups run somewhere between <raw>50</raw> and <raw>200 mm/s</raw>, depending on the extruder type and hotend. Direct drive extruders usually handle higher speeds than Bowden ones.</p>
                <p>Set it too high and you'll get grinding or skipped steps. Set it too low and you're capping your print speed. It applies to both printing moves and retractions, and you can set it separately for each extruder in a multi-extruder setup.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.step_pin"></setting></td>
            <td><setting no-version v2="extruder.hotend.step_pin"></setting></td>
            <td class="description-cell">
                <p>This is the pin that sends the step signal to your extruder driver. Every pulse moves the motor one microstep, and the pin toggles high and low to build the pulse train that actually drives it.</p>
                <p>On a Smoothieboard you'll typically use <pin>2.3</pin> for E0 (delta axis) or <pin>2.8</pin> for E1 (epsilon axis). Append <raw>!</raw> to invert it, like <raw>2.3!</raw>, if you need to.</p>
                <p>Step frequency works out to <raw>speed_mm_s × steps_per_mm</raw>, so a <raw>100mm/s</raw> move at <raw>145 steps/mm</raw> comes out to <raw>14,500 steps/second</raw>. Make sure your controller can keep up with that at your maximum speed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.dir_pin"></setting></td>
            <td><setting no-version v2="extruder.hotend.dir_pin"></setting></td>
            <td class="description-cell">
                <p>This is the pin that tells the extruder driver which way to turn, forward to extrude or backward to retract. Smoothie sets this pin before it sends any step pulses.</p>
                <p>On a Smoothieboard that's typically <pin>0.22</pin> for E0 (delta axis) or <pin>2.13</pin> for E1 (epsilon axis). If your extruder moves the wrong way, retracting when it should extrude, invert the pin by appending <raw>!</raw>, like <raw>0.22!</raw>.</p>
                <p>Test it by sending <gcode>G1 E10 F100</gcode> and checking that filament comes out of the nozzle.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.en_pin"></setting></td>
            <td><setting no-version v2="extruder.hotend.en_pin"></setting></td>
            <td class="description-cell">
                <p>This is the enable pin for the extruder driver. Make it active and the driver holds the motor with full torque; make it inactive and the motor freewheels, with no holding torque.</p>
                <p>On a Smoothieboard that's typically <pin>0.21</pin> for E0 (delta axis) or <pin>0.10</pin> for E1 (epsilon axis). Most drivers are active-low, so they enable when the pin goes LOW, but some are active-high. Append <raw>!</raw> to invert if you need to, like <raw>0.21!</raw>.</p>
                <p>Smoothie enables the motor automatically before a move and can disable it after a timeout (see <setting v1="alpha_stepper_motor.disable_on_halt"></setting>). You can also control it by hand: <mcode>M17</mcode> enables, <mcode>M18</mcode>/<mcode>M84</mcode> disables.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.x_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend2.x_offset"></setting></td>
            <td class="description-cell">
                <p>This is how far this extruder's nozzle sits from the primary extruder (T0) on the X axis, in millimeters. It only matters in multi-extruder setups, and Smoothie applies it automatically whenever you switch tools with <raw>T1</raw>, <raw>T2</raw>, and so on.</p>
                <p>A positive value means this nozzle sits to the right of T0. To measure it, home the machine, move to a reference point with T0, switch to this tool, and see how far you need to move to land back on the same point.</p>
                <p>T0 should always keep its offsets at <raw>0,0,0</raw>. Only set offsets on the secondary extruders (T1, T2, and so on).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.y_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend2.y_offset"></setting></td>
            <td class="description-cell">
                <p>This is how far this extruder's nozzle sits from the primary extruder (T0) on the Y axis, in millimeters. Like the X offset, it only matters in multi-extruder setups.</p>
                <p>A positive value means this nozzle sits further back (away from Y=0) than T0. See <setting no-version v1="extruder.hotend.x_offset"></setting> for how to measure it and how it's used.</p>
                <p>Get this right or your layers won't line up when the machine switches extruders mid-print, in multi-material or multi-color jobs.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.z_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend2.z_offset"></setting></td>
            <td class="description-cell">
                <p>This is how far this extruder's nozzle sits from the primary extruder (T0) on the Z axis, in millimeters. It only matters in multi-extruder setups, and it directly affects your first layer when you switch extruders.</p>
                <p>A positive value means this nozzle sits higher, further from the bed, than T0. To calibrate it, home Z, move to a known position with T0, switch to this tool, and measure the height difference. Even 0.05mm off can wreck a first layer.</p>
                <p>Some slicers can compensate for Z offset in the G-code, but it's better to set it in firmware so it's consistent across every print.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_length"></setting></td>
            <td class="description-cell">
                <p>This is how much filament to pull back during a firmware retraction, in millimeters. <gcode>G10</gcode> retracts by this amount and <gcode>G11</gcode> pushes it back, which relieves pressure in the nozzle and stops oozing and stringing on travel moves.</p>
                <p>Direct drive extruders usually want <raw>0.5-2mm</raw>. Bowden setups need more, usually <raw>4-7mm</raw>.</p>
                <p>Too little and you get stringing. Too much and you risk clogs or air gaps. The total retract amount is this value plus <setting no-version v1="extruder.hotend.retract_recover_length"></setting> when that's negative. You can change it at runtime with <mcode>M207 S&lt;length&gt;</mcode>, for example <mcode>M207 S1.5</mcode>. Many slicers can use firmware retraction instead of generating their own E moves. [Learn more about retraction](extruder.md#retract)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_feedrate"></setting></td>
            <td class="description-cell">
                <p>This is how fast filament retracts during a firmware retraction, in <raw>mm/s</raw>, used by <gcode>G10</gcode>. Smoothie stores and uses it internally in mm/s, but the <mcode>M207</mcode> command itself expects mm/min, so multiply by 60 when you send it.</p>
                <p>Typical values run <raw>25-60 mm/s</raw> (<raw>1500-3600 mm/min</raw>).</p>
                <p>Faster retractions cut down on stringing, but push it too far and you'll get grinding or skipped steps. Direct drive can usually go faster than Bowden. You want it fast enough to relieve pressure quickly, without damaging the filament or jamming the extruder. Change it at runtime with <mcode>M207 F&lt;mm_per_min&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_recover_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_recover_length"></setting></td>
            <td class="description-cell">
                <p>This adds, or removes, filament on top of the retracted amount when the extruder recovers (unretracts), used by <gcode>G11</gcode>. The total recovery distance is <setting no-version v1="extruder.hotend.retract_length"></setting> plus this value.</p>
                <ul>
                    <li>Typical range: <raw>-0.2 to +0.2mm</raw></li>
                    <li>Positive primes the nozzle, useful after long travel moves</li>
                    <li>Negative recovers a bit less than what was retracted, which can help with oozy materials</li>
                    <li><raw>0</raw> recovers exactly what was retracted</li>
                </ul>
                <p>Use it to compensate for oozing during travel or pressure changes in the melt zone. If you're getting blobs after a travel move, turn it down. If you're getting gaps instead, turn it up. Change it at runtime with <mcode>M208 S&lt;length&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_recover_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_recover_feedrate"></setting></td>
            <td class="description-cell">
                <p>This is how fast filament comes back during unretraction, in <raw>mm/s</raw>, used by <gcode>G11</gcode>. Like the retract feedrate, Smoothie stores it in mm/s internally but the <mcode>M208</mcode> command expects mm/min, so multiply by 60.</p>
                <p>Typical values run <raw>10-40 mm/s</raw> (<raw>600-2400 mm/min</raw>), usually slower than the retract speed.</p>
                <p>A slower recovery gives pressure in the nozzle time to build back up smoothly, which helps avoid blobs. Too slow and you'll get gaps at the start of extrusion instead. Keep it below <setting no-version v1="extruder.hotend.retract_feedrate"></setting>. Change it at runtime with <mcode>M208 F&lt;mm_per_min&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_zlift_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_zlift_length"></setting></td>
            <td class="description-cell">
                <p>This is Z-hop: how far the nozzle lifts during a retraction, in millimeters. When <gcode>G10</gcode> runs, the nozzle lifts by this amount right after retracting, and on <gcode>G11</gcode> it drops back down to the original height after unretraction.</p>
                <p>Typical values run <raw>0.2-1.0mm</raw>. Set it to <raw>0</raw> and Z-lift is off.</p>
                <p>Z-hop keeps the nozzle from dragging through or knocking over printed parts during travel, which matters most on tall thin features, parts with a lot of Z variation, or materials that like to warp. It costs you print time though, since it's extra Z movement. Change it at runtime with <mcode>M207 Z&lt;length&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_zlift_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_zlift_feedrate"></setting></td>
            <td class="description-cell">
                <p>This is the speed for the Z axis during a Z-lift, in <raw>mm/min</raw>, used both when lifting (on <gcode>G10</gcode>) and lowering (on <gcode>G11</gcode>) whenever <setting no-version v1="extruder.hotend.retract_zlift_length"></setting> is above zero. Note it's in mm/min, not mm/s like most other extruder speeds.</p>
                <p>Typical values run <raw>3000-9000 mm/min</raw> (<raw>50-150 mm/s</raw>).</p>
                <p>Faster Z-lift cuts travel overhead, but it can cause ringing or put extra stress on your Z axis. Don't push it past your Z axis's maximum speed. Change it at runtime with <mcode>M207 Q&lt;mm_per_min&gt;</mcode>.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
