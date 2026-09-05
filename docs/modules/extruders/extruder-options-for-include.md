
<!-- learning-diagram:48-extruder-options -->
{::nomarkdown}
<figure id="learning-diagram-48-extruder-options" style="clear: both; max-width: 960px; margin: 2rem auto; scroll-margin-top: 16vh;">
  <a href="/images/learning-diagrams/48-extruder-options.svg">
    <img src="/images/learning-diagrams/48-extruder-options.svg" alt="Extruder controls: Material-path settings work together." style="display: block; width: 100%; height: auto; border-radius: 0.75rem;"/>
  </a>
  <figcaption style="margin-top: 0.6rem; font-size: 0.92rem; opacity: 0.82; text-align: center;">Visual guide: Material-path settings work together.</figcaption>
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
                <p>Whether to activate this extruder instance. All configuration for it is ignored if set to <raw>false</raw>.</p>
                <p>Each enabled extruder creates a separate extruder module instance that can be controlled with tool change commands (<raw>T0</raw>, <raw>T1</raw>, etc.).</p>
                <p>Use the <setting no-version v1="extruder.hotend.enable"></setting> pattern to create multiple extruder instances (e.g., <raw>extruder.hotend.enable</raw>, <raw>extruder.hotend2.enable</raw>).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.steps_per_mm"></setting></td>
            <td><setting no-version v2="extruder.hotend.steps_per_mm"></setting></td>
            <td class="description-cell">
                <p>Number of stepper motor steps required to move one millimeter of filament through the extruder — a critical calibration value.</p>
                <p>Depends on your stepper motor steps/revolution (typically 200 for 1.8° motors), microstepping setting (e.g. 16x = 3200 steps/rev), and your extruder gear ratio/hobbed bolt diameter. Calculate as: <raw>(motor_steps_per_rev × microstepping) / (hobbed_bolt_circumference × gear_ratio)</raw>. Example: <raw>(200 × 16) / (3.14159 × 7mm × 1) ≈ 145 steps/mm</raw>.</p>
                <p>Fine-tune by extruding a known length and measuring actual extrusion. Can be adjusted at runtime with <mcode>M92 E&lt;value&gt;</mcode> and saved with <mcode>M500</mcode>. [Learn more](extruder.md#steps_per_millimeter)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.filament_diameter"></setting></td>
            <td><setting no-version v2="extruder.hotend.filament_diameter"></setting></td>
            <td class="description-cell">
                <p>Filament diameter in millimeters for volumetric extrusion mode. When set to a value greater than <raw>0.01mm</raw>, E values in G-code are interpreted as cubic millimeters of filament volume instead of linear millimeters.</p>
                <ul>
                    <li>Standard values: <raw>1.75mm</raw> or <raw>3.0mm</raw> (2.85mm)</li>
                    <li><raw>0</raw>: disables volumetric extrusion, using standard linear E values</li>
                </ul>
                <p>Can be changed at runtime with <mcode>M200 D&lt;diameter&gt;</mcode> (e.g., <mcode>M200 D1.75</mcode>) or disabled with <mcode>M200 D0</mcode>. Useful when switching between different filament sizes or when your slicer outputs volumetric E values. [Learn more](extruder.md#filament-diameter)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.acceleration"></setting></td>
            <td><setting no-version v2="actuator.delta.acceleration"></setting></td>
            <td class="description-cell">
                <p>Maximum acceleration for the extruder stepper motor in <raw>mm/s²</raw>, controlling how quickly the extruder can change speed during extrusion moves.</p>
                <p>Higher values allow faster speed changes but may cause filament grinding or skipped steps if too aggressive; lower values produce smoother extrusion but may cause artifacts during rapid direction changes. Typical values: <raw>500-3000 mm/s²</raw>.</p>
                <p>Affects extruder-only moves (retractions) and the E-axis component of combined moves. Adjust based on your extruder's mechanical capabilities and filament characteristics. Can be changed at runtime with <mcode>M204 E&lt;value&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.max_speed"></setting></td>
            <td><setting no-version v2="motion control.max_speed"></setting></td>
            <td class="description-cell">
                <p>Maximum allowable speed for the extruder stepper motor in <raw>mm/s</raw> — the firmware never moves the extruder faster than this, regardless of what speeds are requested in G-code or calculated during motion planning.</p>
                <p>Typical values: <raw>50-200 mm/s</raw>, depending on extruder type and hotend capabilities. Direct drive extruders can typically handle higher speeds than Bowden extruders.</p>
                <p>Too high a value may cause grinding or skipped steps; too low limits print speed. Affects both printing moves and retractions, and can be set per-extruder for multi-extruder setups.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.step_pin"></setting></td>
            <td><setting no-version v2="extruder.hotend.step_pin"></setting></td>
            <td class="description-cell">
                <p>Pin for the extruder stepper motor driver's step signal. Each step pulse moves the motor one microstep according to the driver's microstepping configuration, toggling high/low to create the pulse train that drives the motor.</p>
                <ul>
                    <li>Typical Smoothieboard pins: <pin>2.3</pin> (E0/delta axis), <pin>2.8</pin> (E1/epsilon axis)</li>
                    <li>Can be inverted by appending <raw>!</raw> (e.g., <raw>2.3!</raw>)</li>
                </ul>
                <p>Step frequency equals <raw>speed_mm_s × steps_per_mm</raw>, so a <raw>100mm/s</raw> move with <raw>145 steps/mm</raw> produces <raw>14,500 steps/second</raw>. Ensure your controller can handle the step frequency at maximum speed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.dir_pin"></setting></td>
            <td><setting no-version v2="extruder.hotend.dir_pin"></setting></td>
            <td class="description-cell">
                <p>Pin for the extruder stepper motor driver's direction signal. Controls whether the motor rotates forward (extrude) or backward (retract); the direction pin must be set before step pulses are sent.</p>
                <p>Typical Smoothieboard pins: <pin>0.22</pin> (E0/delta axis), <pin>2.13</pin> (E1/epsilon axis). If your extruder moves the wrong way (retracting when it should extrude), invert this pin by appending <raw>!</raw> (e.g., <raw>0.22!</raw>).</p>
                <p>Test direction by sending <gcode>G1 E10 F100</gcode> and verify filament extrudes forward out of the nozzle.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.en_pin"></setting></td>
            <td><setting no-version v2="extruder.hotend.en_pin"></setting></td>
            <td class="description-cell">
                <p>Pin for the extruder stepper motor driver's enable signal. When active, the motor driver is powered and holds position with full torque; when inactive, the driver is disabled and the motor freewheels (no holding torque).</p>
                <p>Typical Smoothieboard pins: <pin>0.21</pin> (E0/delta axis), <pin>0.10</pin> (E1/epsilon axis). Most drivers are active-low (enabled when pin is LOW), but some are active-high — append <raw>!</raw> to invert if needed (e.g., <raw>0.21!</raw>).</p>
                <p>The motor automatically enables before moves and can disable after a timeout (see <setting v1="alpha_stepper_motor.disable_on_halt"></setting>). Manual control: <mcode>M17</mcode> enables, <mcode>M18</mcode>/<mcode>M84</mcode> disables.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.x_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend2.x_offset"></setting></td>
            <td class="description-cell">
                <p>X-axis offset of this extruder's nozzle from the primary extruder (T0), in millimeters. Used only in multi-extruder setups to compensate for physical nozzle position differences; the firmware automatically applies these offsets when switching tools with <raw>T1</raw>, <raw>T2</raw>, etc.</p>
                <p>Positive values mean this extruder's nozzle is to the right of T0. Measure the offset by homing, moving to a reference point with T0, switching to this tool, and measuring the distance needed to return to the same point.</p>
                <p>The primary extruder (T0) should always have offsets of <raw>0,0,0</raw>; only set offsets for secondary extruders (T1, T2, etc.).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.y_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend2.y_offset"></setting></td>
            <td class="description-cell">
                <p>Y-axis offset of this extruder's nozzle from the primary extruder (T0), in millimeters. Used only in multi-extruder setups to compensate for physical nozzle position differences.</p>
                <p>Positive values mean this extruder's nozzle is toward the back (away from Y=0) compared to T0. See <setting no-version v1="extruder.hotend.x_offset"></setting> for the calibration procedure and usage details.</p>
                <p>Must be accurately calibrated for proper layer alignment when switching between extruders during multi-material or multi-color prints.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.z_offset"></setting></td>
            <td><setting no-version v2="extruder.hotend2.z_offset"></setting></td>
            <td class="description-cell">
                <p>Z-axis offset of this extruder's nozzle from the primary extruder (T0), in millimeters. Used only in multi-extruder setups to compensate for different nozzle heights — critical for proper first layer when switching extruders.</p>
                <p>Positive values mean this extruder's nozzle is higher (further from the bed) than T0. Calibrate by homing Z, moving to a known position with T0, switching to this tool, and measuring the height difference. Even small differences (0.05mm) can cause first layer problems.</p>
                <p>Some slicers can compensate for Z-offset in G-code, but it's best to configure it in firmware for consistent behavior across all print jobs.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_length"></setting></td>
            <td class="description-cell">
                <p>Amount of filament to retract during firmware retraction, in millimeters. Used by <gcode>G10</gcode> (retract) and <gcode>G11</gcode> (unretract) to pull filament back, relieving nozzle pressure and preventing oozing/stringing during travel moves.</p>
                <ul>
                    <li>Typical values: <raw>0.5-2mm</raw> for direct drive, <raw>4-7mm</raw> for Bowden</li>
                </ul>
                <p>Too little retraction causes stringing; too much can cause clogs or air gaps. The total retract amount includes this length plus <setting no-version v1="extruder.hotend.retract_recover_length"></setting> (if negative). Can be changed at runtime with <mcode>M207 S&lt;length&gt;</mcode> (e.g., <mcode>M207 S1.5</mcode>). Many slicers can use firmware retraction instead of generating explicit E moves. [Learn more about retraction](extruder.md#retract)</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_feedrate"></setting></td>
            <td class="description-cell">
                <p>Speed at which filament is retracted during firmware retraction, in <raw>mm/s</raw>. Used by <gcode>G10</gcode>. Stored and used internally in <raw>mm/s</raw>, but the <mcode>M207</mcode> command expects <raw>mm/min</raw> (multiply by 60).</p>
                <ul>
                    <li>Typical values: <raw>25-60 mm/s</raw> (<raw>1500-3600 mm/min</raw>)</li>
                </ul>
                <p>Faster retractions reduce stringing but may cause grinding or skipped steps if too fast. Direct drive can typically handle faster retractions than Bowden. Speed should be fast enough to quickly relieve pressure but not so fast that it damages filament or causes extruder jamming. Can be changed at runtime with <mcode>M207 F&lt;mm_per_min&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_recover_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_recover_length"></setting></td>
            <td class="description-cell">
                <p>Additional length of filament to extrude when recovering (unretract) beyond the retracted amount. Used by <gcode>G11</gcode>. Total recover distance = <setting no-version v1="extruder.hotend.retract_length"></setting> + this value.</p>
                <ul>
                    <li>Typical values: <raw>-0.2 to +0.2mm</raw></li>
                    <li>Positive: primes the nozzle (useful after long travels)</li>
                    <li>Negative: recovers slightly less than retracted (can help with oozy materials)</li>
                    <li><raw>0</raw>: recovers exactly the retracted amount</li>
                </ul>
                <p>Compensates for material properties, oozing during travel, or pressure changes in the melt zone. Fine-tune to eliminate blobs (reduce value) or gaps (increase value) after travel moves. Can be changed at runtime with <mcode>M208 S&lt;length&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_recover_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_recover_feedrate"></setting></td>
            <td class="description-cell">
                <p>Speed at which filament is recovered (unretracted) during firmware unretraction, in <raw>mm/s</raw>. Used by <gcode>G11</gcode>. Stored and used internally in <raw>mm/s</raw>, but the <mcode>M208</mcode> command expects <raw>mm/min</raw> (multiply by 60).</p>
                <ul>
                    <li>Typical values: <raw>10-40 mm/s</raw> (<raw>600-2400 mm/min</raw>), usually slower than retract speed</li>
                </ul>
                <p>Slower recovery speeds help prevent blobs and allow time for pressure in the nozzle to build back up smoothly. Too fast can cause blobs; too slow can cause gaps at the start of extrusion. Should generally be less than <setting no-version v1="extruder.hotend.retract_feedrate"></setting>. Can be changed at runtime with <mcode>M208 F&lt;mm_per_min&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_zlift_length"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_zlift_length"></setting></td>
            <td class="description-cell">
                <p>Amount to lift the Z-axis during retraction, in millimeters (Z-hop / Z-lift feature). When <gcode>G10</gcode> runs, the nozzle lifts by this amount after retracting; during <gcode>G11</gcode>, it lowers back to the original height after unretraction.</p>
                <ul>
                    <li>Typical values: <raw>0.2-1.0mm</raw></li>
                    <li><raw>0</raw>: disables Z-lift</li>
                </ul>
                <p>Z-hop reduces the chance of the nozzle dragging through or knocking over printed parts during travel moves — especially useful for tall thin features, parts with significant Z-variation, or materials prone to warping. Trade-off: increases print time due to extra Z movements. Can be changed at runtime with <mcode>M207 Z&lt;length&gt;</mcode>.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="extruder.hotend.retract_zlift_feedrate"></setting></td>
            <td><setting no-version v2="extruder.hotend.retract_zlift_feedrate"></setting></td>
            <td class="description-cell">
                <p>Speed for Z-axis movement during Z-lift operations, in <raw>mm/min</raw> — used for both lifting (during <gcode>G10</gcode>) and lowering (during <gcode>G11</gcode>) moves when <setting no-version v1="extruder.hotend.retract_zlift_length"></setting> is greater than zero. Note: this is specified in <raw>mm/min</raw> (not <raw>mm/s</raw> like most other extruder speeds).</p>
                <ul>
                    <li>Typical values: <raw>3000-9000 mm/min</raw> (<raw>50-150 mm/s</raw>)</li>
                </ul>
                <p>Faster Z-lift reduces travel time overhead but may cause ringing or mechanical stress on Z-axis components. Should not exceed the Z-axis maximum speed. Can be changed at runtime with <mcode>M207 Q&lt;mm_per_min&gt;</mcode>.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
