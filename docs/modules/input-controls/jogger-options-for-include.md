
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
            <td><setting no-version v1="jogger.enable"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Set this to true and the Jogger module turns on. It lets you drive the machine with a joystick, smooth continuous motion in whatever direction you push, instead of the usual discrete jog steps.</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.data_source_alpha"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This is the name of the Joystick module the first (alpha) jog axis reads from. It's how you wire a joystick instance to that axis.</p>
                <p>Use the name you gave a configured joystick module, something like "horizontal" or "vertical".</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.data_source_beta"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This is the name of the Joystick module the second (beta) jog axis reads from. Same idea as the alpha data source, just for the second axis.</p>
                <p>Use the name you gave a configured joystick module, something like "horizontal" or "vertical".</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.jog_axes"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This is a comma-separated list of machine axes the jogger controls, given in order: alpha axis first, then beta, and so on.</p>
                <p>Smoothie starts with the first item in the list. Send the toggle axes command, M778 by default, and it cycles to the next one.</p>
                <ul>
                    <li>Valid axis letters are X, Y, Z, A, B, C</li>
                    <li>Use "-" for no axis</li>
                    <li>Don't put spaces in the list</li>
                </ul>
                <p>For example, "XY,XZ,-Z" toggles between XY control, XZ control, and no alpha axis with Z on the beta axis.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.m_code_set"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This picks the M-code number for the "set axes" command. Set it to 777 and you'd send M777 to set the jog axes.</p>
                <p>It lets you tell the joystick directly which axes to control, for example M777 XY sets jogging to X and Y.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.m_code_toggle"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This picks the M-code number for the "toggle axes" command. Set it to 778 and you'd send M778 to toggle the jog axes.</p>
                <p>It cycles through whatever combinations you set in jog_axes, so you can switch between control modes, XY mode, XZ mode, and so on.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.max_speed"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This caps how fast the machine jogs, in mm/min. It's the speed you get with the joystick pushed all the way. Leave it unset and the jogger falls back to your general "default_seek_rate" (the <gcode>G0</gcode> speed).</p>
                <p>Lower it for finer control. Raise it for faster positioning.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.dead_zone"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This is the threshold the joystick has to cross before the machine starts moving, a value between 0 and 1 for how far off center it needs to go. Set it to 0.05 and the joystick has to move 5% from center before anything happens.</p>
                <p>It's there to stop small joystick movements or electrical noise from causing unwanted motion. If you're seeing drift, raise this value.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.nonlinearity"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This curves how joystick movement translates to speed. Push it above 1.0 and small joystick movements produce proportionally slower speeds, which gives you finer control near center. At 1.0 it's linear, 50% joystick movement gives 50% of max speed.</p>
                <ul>
                    <li>1.0: linear</li>
                    <li>1.5: a slight curve, better control</li>
                    <li>2.0: a more pronounced curve</li>
                    <li>3.0: very sensitive near center</li>
                </ul>
                <p>Higher values give you more precision for small adjustments, but you'll need to push the joystick further to reach full speed.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.refresh_rate"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This is how many times per second Smoothie reads the joysticks and updates the jog motion. Push it higher and control feels smoother and more responsive, but it costs more CPU time.</p>
                <p>100 Hz is typical. Keep it matched to the joystick module's own refresh_rate setting.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.segment_frequency"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">
                <p>This sets how many tiny movement segments per second the jogger generates. It breaks continuous motion into small discrete segments to keep it smooth. More segments per second means smoother motion, but more processing. 10 Hz is typical.</p>
                <p>Don't confuse this with refresh_rate. Refresh_rate is how often Smoothie reads the joystick position, this is how often it generates new movement commands.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
