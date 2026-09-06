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
            <td><setting no-version v1="temperatureswitch.{name}.enable"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.enable"></setting></td>
            <td class="description-cell">
                <p>Creates and enables a new TemperatureSwitch module instance. When set to true, this module monitors temperature from a specified TemperatureControl module and automatically controls a Switch module based on configured thresholds and trigger conditions.</p>
                <p>Multiple temperature switch instances can be configured simultaneously by using different instance names — each instance requires a unique module name (e.g., hotend, bed, chamber).</p>
                <p>The module will not function unless enabled, and must be accompanied by valid designator and switch configuration.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.designator"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.designator"></setting></td>
            <td class="description-cell">
                <p>Specifies which TemperatureControl module to monitor by matching its designator character. The temperature switch reads the current temperature from the temperature control module with this designator and uses it to determine when to trigger the switch.</p>
                <p>If multiple temperature control modules share the same designator, the highest temperature among them is used for comparison. Matching is case-sensitive — <raw>T</raw> and <raw>t</raw> are different designators.</p>
                <ul>
                    <li>For backward compatibility, <raw>temperatureswitch.hotend</raw> defaults to designator <raw>T</raw> if not specified (deprecated behavior)</li>
                    <li>An empty designator string causes the temperature switch to be considered invalid and non-functional</li>
                </ul>
                <p>The temperature reading is polled at intervals defined by the heatup_poll and cooldown_poll settings.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.switch"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.switch"></setting></td>
            <td class="description-cell">
                <p>Specifies the name of the Switch module to be controlled by this temperature switch. When temperature conditions are met, this switch is toggled on or off according to the configured trigger mode and inversion settings.</p>
                <p>The switch must be configured and enabled in the switch module settings before it can be controlled — the specified switch must exist and be properly configured with output_pin and output_type. It typically controls one of the small MOSFETs on the Smoothieboard.</p>
                <p>Switch state is only changed when armed (either always armed if arm_mcode=0, or manually armed via M-code).</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.type"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.switch"></setting></td>
            <td class="description-cell">
                <p>Legacy parameter name for specifying the switch module to control. Functionally identical to the <setting v1="temperatureswitch.{name}.switch" v2="temperature switch.{name}.switch"></setting> parameter, and only used as a fallback if that parameter is not defined.</p>
                <p>This parameter has been replaced by <setting v1="temperatureswitch.{name}.switch" v2="temperature switch.{name}.switch"></setting>, but is still supported for backward compatibility with older Smoothieware configurations. Not recommended for new configurations — use the <raw>switch</raw> parameter instead, for clarity.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.threshold_temp"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.threshold_temp"></setting></td>
            <td class="description-cell">
                <p>Sets the temperature threshold in degrees Celsius at which the switch state changes. The exact behavior depends on the trigger mode:</p>
                <ul>
                    <li><strong>level</strong> mode: switch turns on above this temperature and off below it</li>
                    <li><strong>rising</strong> mode: switch triggers when crossing upward through this threshold</li>
                    <li><strong>falling</strong> mode: switch triggers when crossing downward through this threshold</li>
                </ul>
                <p>Temperature comparison uses <raw>current_temp >= threshold_temp</raw> for HIGH_TEMP state determination. Temperature is read from the highest value among all temperature controllers matching the configured designator.</p>
                <p>For typical hotend cooling applications, set this 10-20°C below the hotend operating temperature. Inverted mode reverses the on/off logic but uses the same threshold comparison — the threshold applies regardless of whether the switch is inverted or not, since inversion only affects the final switch output state.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.heatup_poll"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.heatup_poll"></setting></td>
            <td class="description-cell">
                <p>Defines the polling interval in seconds when the system is in the LOW_TEMP state (current temperature &lt; threshold_temp) — i.e. while heating up. A shorter interval gives faster response when temperature rises toward the threshold, but increases system overhead.</p>
                <p>The initial state uses the heatup_poll interval and performs its first check immediately. Once temperature crosses the threshold, polling automatically switches to the cooldown_poll interval. Polling occurs on the second tick event, so actual timing may vary by ±1 second.</p>
                <ul>
                    <li>Lower values (e.g., 5-10 seconds): quicker response, more processing time consumed</li>
                    <li>Higher values (e.g., 20-30 seconds): less overhead, may delay switch activation</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.cooldown_poll"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.cooldown_poll"></setting></td>
            <td class="description-cell">
                <p>Defines the polling interval in seconds when the system is in the HIGH_TEMP state (current temperature >= threshold_temp) — at or above operating temperature, or cooling down. A longer interval reduces system overhead during stable high-temperature operation, while still monitoring for temperature drops that should trigger switch state changes.</p>
                <p>Slower polling during stable operation reduces system load, and is suitable for applications where the switch should remain on for extended periods. Once temperature falls below the threshold, polling automatically switches to the heatup_poll interval.</p>
                <p>Polling occurs on the second tick event, so actual timing may vary by ±1 second. Higher values reduce processing overhead when temperature is stable above threshold.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.trigger"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.trigger"></setting></td>
            <td class="description-cell">
                <p>Determines the triggering behavior mode of the temperature switch — whether it responds to sustained temperature levels, rising temperature edges, or falling temperature edges. The mode fundamentally changes how temperature threshold crossings are interpreted, and affects the arming behavior.</p>
                <ul>
                    <li><strong>Level mode:</strong> switch follows temperature state continuously. When armed and temperature >= threshold, switch is on; when temperature &lt; threshold, switch is off. Remains active as long as armed.</li>
                    <li><strong>Rising mode:</strong> switch activates only when transitioning from LOW_TEMP to HIGH_TEMP (edge detection). Requires arming via M-code for each activation cycle.</li>
                    <li><strong>Falling mode:</strong> switch deactivates only when transitioning from HIGH_TEMP to LOW_TEMP (edge detection). Requires arming via M-code for each activation cycle.</li>
                </ul>
                <p>Edge-triggered modes (rising/falling) automatically disarm after triggering, requiring re-arming for subsequent triggers. Invalid trigger values default to "level" mode.</p>
                <p>State changes only occur when temperature crosses the threshold boundary, not during stable states. Works in conjunction with the inverted setting — inversion is applied after trigger logic determines switch state.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.inverted"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.inverted"></setting></td>
            <td class="description-cell">
                <p>Reverses the normal switch control logic. When enabled, the switch turns off when temperature exceeds the threshold (instead of turning on), and turns on when temperature falls below the threshold. This is useful for heaters or devices that should activate during cooling rather than heating.</p>
                <ul>
                    <li><strong>Normal mode (false):</strong> temperature >= threshold → switch on; temperature &lt; threshold → switch off</li>
                    <li><strong>Inverted mode (true):</strong> temperature >= threshold → switch off; temperature &lt; threshold → switch on</li>
                </ul>
                <p>The inversion occurs at the final switch control stage, applied in the <raw>set_switch()</raw> function after trigger logic has determined the desired state — it works with all trigger modes (level, rising, falling). Temperature threshold comparison logic is unchanged; only the final switch output is inverted.</p>
                <p>Useful for controlling heating elements that should turn off when target temperature is reached. Common use case: emergency cooling systems that activate when temperature drops too low.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.arm_mcode"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.arm_mcode"></setting></td>
            <td class="description-cell">
                <p>Defines a custom M-code command that must be executed to arm the temperature switch before it can trigger. This provides manual control over when the temperature switch is active, preventing unwanted switch activation. It also acts as a safety mechanism for critical temperature-dependent operations — disarmed switches do not control their associated switch modules.</p>
                <ul>
                    <li><strong>When set to 0:</strong> the arming requirement is disabled; the switch is always armed and operates automatically based on temperature (module does not register for G-code events)</li>
                    <li><strong>When set to an M-code:</strong> the switch starts disarmed and requires manual arming via G-code command</li>
                    <li><strong>Arming command:</strong> <raw>M&lt;code&gt; S1</raw> arms the switch (e.g., <mcode>M1100 S1</mcode>)</li>
                    <li><strong>Disarming command:</strong> <raw>M&lt;code&gt; S0</raw> disarms the switch (e.g., <mcode>M1100 S0</mcode>)</li>
                    <li><strong>Level trigger mode:</strong> the switch remains armed and continues operating while armed</li>
                    <li><strong>Edge trigger modes (rising/falling):</strong> the switch automatically disarms after triggering once, requiring re-arming for subsequent triggers</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
