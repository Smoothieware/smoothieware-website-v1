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
                <p>Set this to true and Smoothie creates a new TemperatureSwitch module. It watches the temperature from a TemperatureControl module you specify, and switches a Switch module on or off based on the thresholds and trigger mode you set.</p>
                <p>You can run several temperature switch instances at once, just give each one its own name, like hotend, bed, or chamber.</p>
                <p>It won't do anything unless it's enabled, and you also need a valid designator and switch configured.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.designator"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.designator"></setting></td>
            <td class="description-cell">
                <p>This tells Smoothie which TemperatureControl module to watch, by matching its designator character. The temperature switch reads the current temperature from whichever module has this designator, and uses it to decide when to trigger.</p>
                <p>If several temperature control modules share the same designator, Smoothie uses the highest of their temperatures. Matching is case-sensitive, so <code>T</code> and <code>t</code> are different designators.</p>
                <p>For backward compatibility, <code>temperatureswitch.hotend</code> defaults to designator <code>T</code> if you don't set one, though that's deprecated behavior. Leave the designator empty and the temperature switch just won't work.</p>
                <p>Temperature is polled at the intervals set by heatup_poll and cooldown_poll.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.switch"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.switch"></setting></td>
            <td class="description-cell">
                <p>This is the name of the Switch module this temperature switch controls. When temperature conditions are met, Smoothie toggles it on or off, according to your trigger mode and inversion settings.</p>
                <p>That switch needs to already exist and be configured in the switch module settings, with output_pin and output_type set. It usually controls one of the small MOSFETs on the Smoothieboard.</p>
                <p>The switch state only changes while armed, either always armed if arm_mcode=0, or armed manually through an M-code.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.type"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.switch"></setting></td>
            <td class="description-cell">
                <p>This is the old parameter name for the switch module to control. It works exactly like <code>temperatureswitch.{name}.switch</code>, and Smoothie only falls back to it if that parameter isn't defined.</p>
                <p>It's been replaced by <code>temperatureswitch.switch</code>, and is only kept around for backward compatibility with older configs. For a new config, use <code>switch</code> instead.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.threshold_temp"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.threshold_temp"></setting></td>
            <td class="description-cell">
                <p>This sets the temperature threshold, in Celsius, where the switch state changes. What exactly happens depends on the trigger mode:</p>
                <ul>
                    <li><strong>level</strong> mode: the switch turns on above this temperature and off below it</li>
                    <li><strong>rising</strong> mode: the switch triggers when temperature crosses upward through this threshold</li>
                    <li><strong>falling</strong> mode: the switch triggers when temperature crosses downward through this threshold</li>
                </ul>
                <p>Smoothie compares with <code>current_temp >= threshold_temp</code> to decide the HIGH_TEMP state, reading the highest temperature among all controllers matching your designator.</p>
                <p>For a typical hotend cooling setup, set this 10-20°C below the hotend's operating temperature. Inverted mode flips the on/off logic, but the threshold comparison stays the same either way, since inversion only changes the final switch output.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.heatup_poll"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.heatup_poll"></setting></td>
            <td class="description-cell">
                <p>This sets the polling interval, in seconds, while the system is in the LOW_TEMP state, meaning current temperature is below threshold_temp, so while it's heating up. Shorten it and you get a faster response as temperature climbs toward the threshold, but it costs more processing time.</p>
                <p>Smoothie starts in this state and checks immediately. Once temperature crosses the threshold, polling switches over to the cooldown_poll interval automatically. Polling happens on the second tick, so actual timing can be off by up to a second.</p>
                <p>Something like 5-10 seconds gets you a quick response at the cost of more processing time. Something like 20-30 seconds costs less overhead, but can delay switch activation.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.cooldown_poll"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.cooldown_poll"></setting></td>
            <td class="description-cell">
                <p>This sets the polling interval, in seconds, while the system is in the HIGH_TEMP state, meaning current temperature is at or above threshold_temp, whether that's stable operation or cooling down. A longer interval cuts overhead during stable high-temperature operation, while still catching the temperature drop that should flip the switch.</p>
                <p>Slower polling here reduces system load, which suits applications where the switch stays on for long stretches. Once temperature falls below the threshold, polling switches back to the heatup_poll interval automatically.</p>
                <p>Polling happens on the second tick, so actual timing can be off by up to a second.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.trigger"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.trigger"></setting></td>
            <td class="description-cell">
                <p>This sets how the temperature switch triggers: whether it follows sustained temperature levels, or fires on rising or falling temperature edges. It changes how threshold crossings get interpreted, and it affects arming too.</p>
                <ul>
                    <li><strong>Level mode:</strong> the switch follows temperature continuously. Armed and temperature >= threshold, it's on. Temperature &lt; threshold, it's off. Stays active as long as it's armed.</li>
                    <li><strong>Rising mode:</strong> the switch activates only when temperature crosses from LOW_TEMP up to HIGH_TEMP. Needs arming via M-code for each activation.</li>
                    <li><strong>Falling mode:</strong> the switch deactivates only when temperature crosses from HIGH_TEMP down to LOW_TEMP. Also needs arming via M-code for each activation.</li>
                </ul>
                <p>Rising and falling both disarm themselves automatically after triggering, so you need to re-arm for the next one. An invalid trigger value falls back to level mode.</p>
                <p>State only changes when temperature crosses the threshold, not while it's holding steady. This works alongside the inverted setting, which gets applied after the trigger logic decides the switch state.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.inverted"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.inverted"></setting></td>
            <td class="description-cell">
                <p>This flips the switch logic around. Normally the switch turns on above the threshold, but with this enabled it turns off above the threshold and on below it instead. That's handy for something like a cooling device that should kick in as things cool down, rather than heat up.</p>
                <p>Off (the default), temperature at or above the threshold means the switch is on, and below it means off. On, that flips: at or above the threshold the switch goes off, and below it, on.</p>
                <p>The inversion happens right at the end, in <code>set_switch()</code>, after the trigger logic has already worked out what it wants to do, so it works the same way across all trigger modes (level, rising, falling). The threshold comparison itself doesn't change, only the final output does.</p>
                <p>One common use: an emergency cooling system that should switch on when temperature drops too low.</p>
            </td>
        </tr>
        <tr>
            <td><setting no-version v1="temperatureswitch.{name}.arm_mcode"></setting></td>
            <td><setting no-version v2="temperature switch.{name}.arm_mcode"></setting></td>
            <td class="description-cell">
                <p>This sets a custom M-code you have to send to arm the temperature switch before it'll trigger. It gives you manual control over when the switch is live, so it doesn't fire when you don't want it to, and it works as a safety catch for anything temperature-critical: a disarmed switch won't control its switch module at all.</p>
                <ul>
                    <li>Set to <code>0</code>: arming is turned off entirely. The switch is always armed and runs automatically off temperature (it doesn't even register for G-code events).</li>
                    <li>Set to an M-code: the switch starts disarmed, and you have to arm it manually with a G-code command.</li>
                </ul>
                <p>Send <code>M&lt;code&gt; S1</code> to arm it (e.g., <code>M1100 S1</code>), and <code>M&lt;code&gt; S0</code> to disarm it (e.g., <code>M1100 S0</code>).</p>
                <p>In level trigger mode, the switch stays armed and keeps operating for as long as it's armed. In the edge modes (rising/falling), it disarms itself automatically after triggering once, so you'll need to re-arm it for the next trigger.</p>
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
