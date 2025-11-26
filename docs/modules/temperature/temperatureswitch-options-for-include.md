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
            <td class="description-cell">Creates and enables a new TemperatureSwitch module instance. When set to true, this module will monitor temperature from a specified TemperatureControl module and automatically control a Switch module based on configured thresholds and trigger conditions. Multiple temperature switch instances can be configured simultaneously by using different instance names. Each instance requires a unique module name (e.g., hotend, bed, chamber). Module will not function unless enabled and must be accompanied by valid designator and switch configuration.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.designator"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.designator"></setting></td>
            <td class="description-cell">Specifies which TemperatureControl module to monitor by matching its designator character. The temperature switch reads the current temperature from the temperature control module with this designator and uses it to determine when to trigger the switch. If multiple temperature control modules share the same designator, the highest temperature among them is used for comparison. For backward compatibility, <code>temperatureswitch.hotend</code> defaults to designator <code>T</code> if not specified (deprecated behavior). Empty designator string causes the temperature switch to be considered invalid and non-functional. Case-sensitive matching - <code>T</code> and <code>t</code> are different designators. The temperature reading is polled at intervals defined by heatup_poll and cooldown_poll settings.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.switch"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.switch"></setting></td>
            <td class="description-cell">Specifies the name of the Switch module to be controlled by this temperature switch. When temperature conditions are met, this switch will be toggled on or off according to the configured trigger mode and inversion settings. The switch must be configured and enabled in the switch module settings before it can be controlled. The specified switch must exist and be properly configured with output_pin and output_type. Typically controls one of the small MOSFETs on the Smoothieboard. Switch state is only changed when armed (either always armed if arm_mcode=0, or manually armed via M-code).</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.type"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.switch"></setting></td>
            <td class="description-cell">Legacy parameter name for specifying the switch module to control. This parameter has been replaced by <code>temperatureswitch.switch</code> but is still supported for backward compatibility with older configurations. New configurations should use the <code>switch</code> parameter instead. Only used as fallback if <code>temperatureswitch.{name}.switch</code> is not defined. Maintained for backward compatibility with configurations from older Smoothieware versions. Functionally identical to <code>temperatureswitch.{name}.switch</code> parameter. Not recommended for new configurations - use <code>switch</code> parameter for clarity.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.threshold_temp"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.threshold_temp"></setting></td>
            <td class="description-cell">Sets the temperature threshold in degrees Celsius at which the switch state changes. The exact behavior depends on the trigger mode: in "level" mode, the switch turns on above this temperature and off below it; in "rising" mode, the switch triggers when crossing upward through this threshold; in "falling" mode, the switch triggers when crossing downward through this threshold. Temperature comparison uses: <code>current_temp >= threshold_temp</code> for HIGH_TEMP state determination. For typical hotend cooling applications, set this 10-20°C below the hotend operating temperature. Inverted mode reverses the on/off logic but uses the same threshold comparison. Temperature is read from the highest value among all temperature controllers matching the configured designator. The threshold applies regardless of whether the switch is inverted or not - inversion only affects the final switch output state.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.heatup_poll"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.heatup_poll"></setting></td>
            <td class="description-cell">Defines the polling interval in seconds when the system is in the LOW_TEMP state (below threshold temperature). This controls how frequently the temperature is checked while heating up. A shorter interval provides faster response when temperature rises toward the threshold, but increases system overhead. The polling occurs on the second tick event, so actual timing may vary by ±1 second. Active when current temperature &lt; threshold_temp (LOW_TEMP state). Faster polling during heatup ensures timely switch activation. After temperature crosses threshold, automatically switches to cooldown_poll interval. Initial state uses heatup_poll interval and performs first check immediately. Lower values (e.g., 5-10 seconds) provide quicker response but consume more processing time. Higher values (e.g., 20-30 seconds) reduce overhead but may delay switch activation.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.cooldown_poll"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.cooldown_poll"></setting></td>
            <td class="description-cell">Defines the polling interval in seconds when the system is in the HIGH_TEMP state (at or above threshold temperature). This controls how frequently the temperature is checked while at operating temperature or cooling down. A longer interval reduces system overhead during stable high-temperature operation, while still monitoring for temperature drops that should trigger switch state changes. Active when current temperature >= threshold_temp (HIGH_TEMP state). Slower polling during stable operation reduces system load. After temperature falls below threshold, automatically switches to heatup_poll interval. Suitable for applications where switch should remain on for extended periods. Polling occurs on the second tick event, so actual timing may vary by ±1 second. Higher values reduce processing overhead when temperature is stable above threshold.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.trigger"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.trigger"></setting></td>
            <td class="description-cell">Determines the triggering behavior mode of the temperature switch. This setting controls whether the switch responds to sustained temperature levels, rising temperature edges, or falling temperature edges. The mode fundamentally changes how temperature threshold crossings are interpreted and affects the arming behavior. <strong>Level mode:</strong> Switch follows temperature state continuously. When armed and temperature >= threshold, switch is on; when temperature &lt; threshold, switch is off. Remains active as long as armed. <strong>Rising mode:</strong> Switch activates only when transitioning from LOW_TEMP to HIGH_TEMP (edge detection). Requires arming via M-code for each activation cycle. <strong>Falling mode:</strong> Switch deactivates only when transitioning from HIGH_TEMP to LOW_TEMP (edge detection). Requires arming via M-code for each activation cycle. Edge-triggered modes (rising/falling) automatically disarm after triggering, requiring re-arming for subsequent triggers. Invalid trigger values default to "level" mode. State changes only occur when temperature crosses the threshold boundary, not during stable states. Works in conjunction with inverted setting - inversion is applied after trigger logic determines switch state.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.inverted"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.inverted"></setting></td>
            <td class="description-cell">Reverses the normal switch control logic. When enabled, the switch turns off when temperature exceeds the threshold (instead of turning on), and turns on when temperature falls below the threshold. This is useful for heaters or devices that should activate during cooling rather than heating. The inversion occurs at the final switch control stage, after all trigger logic has been evaluated. <strong>Normal mode (false):</strong> Temperature >= threshold → switch on; temperature &lt; threshold → switch off. <strong>Inverted mode (true):</strong> Temperature >= threshold → switch off; temperature &lt; threshold → switch on. Inversion is applied in set_switch() function after trigger type determines the desired state. Works with all trigger modes (level, rising, falling). Temperature threshold comparison logic remains unchanged; only the final switch output is inverted. Useful for controlling heating elements that should turn off when target temperature is reached. Common use case: emergency cooling systems that activate when temperature drops too low.</td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.arm_mcode"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.arm_mcode"></setting></td>
            <td class="description-cell">Defines a custom M-code command that must be executed to arm the temperature switch before it can trigger. This provides manual control over when the temperature switch is active, preventing unwanted switch activation. Setting to 0 disables the arming requirement, making the switch always armed and operating automatically based on temperature. <strong>When set to 0:</strong> Switch is always armed and operates automatically. <strong>When set to M-code:</strong> Switch starts disarmed and requires manual arming via G-code command. <strong>Arming command:</strong> <code>M&lt;code&gt; S1</code> arms the switch (e.g., <code>M1100 S1</code>). <strong>Disarming command:</strong> <code>M&lt;code&gt; S0</code> disarms the switch (e.g., <code>M1100 S0</code>). <strong>Level trigger mode:</strong> Switch remains armed and continues operating while armed. <strong>Edge trigger modes (rising/falling):</strong> Switch automatically disarms after triggering once, requiring re-arming for subsequent triggers. Provides safety mechanism for critical temperature-dependent operations. Disarmed switches do not control their associated switch modules. Module only registers for G-code events if arm_mcode != 0.</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
