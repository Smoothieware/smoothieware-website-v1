
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
            <td class="description-cell">If true, enable the Jogger module. The Jogger module allows you to control machine movement using joystick input, providing smooth continuous motion in the direction of the joystick rather than discrete steps.</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.data_source_alpha"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Specifies the module name of the Joystick module that the alpha (first) jog axis will read from. This connects a joystick instance to the first axis of jogging control. The value should be the name of a configured joystick module (e.g., "horizontal", "vertical").</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.data_source_beta"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Specifies the module name of the Joystick module that the beta (second) jog axis will read from. This connects a joystick instance to the second axis of jogging control. The value should be the name of a configured joystick module (e.g., "horizontal", "vertical").</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.jog_axes"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets a comma-separated list of machine axes which will be controlled by the jogger. Axis letters are given in order of jog axis alpha, beta, etc. The first item in the list will be used on startup. Issuing the toggle axes command (M778 by default) will cycle between the items in the list. Valid machine letters are X, Y, Z, A, B, C. Use "-" for no axis controlled. Do not use spaces in the list. Example: "XY,XZ,-Z" allows toggling between XY control, XZ control, and no alpha axis with Z beta axis.</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.m_code_set"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets which M-code number the "set axes" command will use. For example, if set to 777, use M777 to set the jog axes. This command allows you to directly specify which axes to control with the joystick (e.g., M777 XY sets jogging to control X and Y axes).</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.m_code_toggle"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets which M-code number the "toggle axes" command will use. For example, if set to 778, use M778 to toggle the jog axes. This command cycles through the axis combinations specified in the jog_axes setting, allowing you to switch between different control modes (e.g., XY mode, XZ mode, etc.).</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.max_speed"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets the maximum speed the machine will jog in mm/min. This is the speed reached when the joystick is pushed to its maximum extent. If not specified, the Jogger uses the general configuration "default_seek_rate" (<gcode>G0</gcode> speed). Lower values provide finer control, higher values allow faster positioning.</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.dead_zone"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets the threshold the joystick must cross before movement occurs. This is a value between 0 and 1 representing the fraction of joystick movement required to start jogging. For example, 0.05 means the joystick must be moved 5% from center before motion begins. This prevents unwanted motion from small joystick movements or electrical noise. Increase this value if you experience drift or unwanted motion.</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.nonlinearity"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets the non-linearity of the joystick to speed conversion function. Values greater than 1.0 create a curved response where small joystick movements result in proportionally slower speeds, giving finer control near center. A value of 1.0 is linear (50% joystick movement = 50% max speed). Typical values: 1.0 (linear), 1.5 (slight curve for better control), 2.0 (more pronounced curve), 3.0 (very sensitive near center). Higher values provide more precise control for small adjustments but require larger movements to reach full speed.</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.refresh_rate"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Specifies how many times per second to read the joysticks and update the jog motion. Higher values provide smoother, more responsive control but use more CPU time. Typical value is 100 Hz. Must be coordinated with the joystick module's refresh_rate setting.</td>
        </tr>
        <tr>
            <td><setting no-version v1="jogger.segment_frequency"></setting></td>
            <td class="not-available">Not available in v2</td>
            <td class="description-cell">Sets the number of tiny movement segments per second while jogging. The jogger breaks continuous motion into small discrete segments for smooth execution. Higher values create smoother motion but require more processing. Typical value is 10 Hz. This is different from refresh_rate - refresh_rate determines how often joystick position is read, while segment_frequency determines how often new movement commands are generated.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
