
### PID Autotuning

Smoothie can automatically tune (find) your P, I, and D factors using a process described [here](http://brettbeauregard.com/blog/2012/01/arduino-pid-autotune-library/).

Here is an example of the G-code command used to launch PID autotune:

{::nomarkdown}<mcode>M303</mcode>{:/nomarkdown} E0 S190

- {::nomarkdown}<raw>E0</raw>{:/nomarkdown} is the number of the heater or bed temperature control module, determined by the order that they appear in the config file. Here it would be 0 for the hotend, and 1 for the bed.
- {::nomarkdown}<raw>S190</raw>{:/nomarkdown} is the temperature to autotune for. Use the temperature you will be using your heater at in real life. For a hotend here we use 190°C.

When you run the command, tuning begins:

```
Target: 190.0
Start PID tune, command is M303 E0 S190
T: Starting PID Autotune, M304 aborts
ok
T:  21.3/190.0 @80 1 0/8
T:  22.0/190.0 @80 1 0/8
T:  22.3/190.0 @80 1 0/8
T:  22.1/190.0 @80 1 0/8
Etc...
```

It continues for 3 to 8 cycles, heating up, cooling down. Then:

```
Cycle 4: max: 246.189, min: 227.627, avg separation: 0.418274
	Ku: 34.9838, Pu: 39.85
	Trying:
	Kp:  21.0
	Ki: 1.053
	Kd:   105
PID Autotune Complete! The settings above have been loaded into memory, but not written to your config file.
```

Now edit your configuration to use those three values ({::nomarkdown}<raw>Kp</raw>{:/nomarkdown} is {::nomarkdown}<raw>p_factor</raw>{:/nomarkdown}, {::nomarkdown}<raw>Ki</raw>{:/nomarkdown} is {::nomarkdown}<raw>i_factor</raw>{:/nomarkdown}, {::nomarkdown}<raw>Kd</raw>{:/nomarkdown} is {::nomarkdown}<raw>d_factor</raw>{:/nomarkdown}), reset, and temperature control should work much better. (Also {::nomarkdown}<mcode>M301</mcode>{:/nomarkdown} can be used to set the PID values and saved with {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown})

Alternatively, you can also enter the following G-code:

{::nomarkdown}<mcode>M500</mcode>{:/nomarkdown}

Which will save the configuration values automatically in a configuration override file.

Learn more about configuration overrides [here](configuring-smoothie).

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Do not send <mcode>M303</mcode> over the web interface, use Telnet, Pronterface, or any other serial terminal.<br><br>If sent over the web, the answers will accumulate in Smoothie's RAM and may crash it.
</sl-alert>
{:/nomarkdown}
