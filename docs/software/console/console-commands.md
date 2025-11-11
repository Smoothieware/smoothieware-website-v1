---
permalink: /console-commands
---

# Console commands

{::nomarkdown}
<a href="/images/coding.png">
  <img src="/images/coding.png" alt="Console" style="width: 150px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

In Smoothie, when connected to your board via Serial, in the same way that you can send Gcodes, you can also send some commands to manipulate the firmware's behavior and get information.

Here are the different commands, grouped by module.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Not all of the console commands are documented here, feel free to add any that have been missed.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Commands are meant as shortcuts/easier to use alternatives to G/M-codes when users are interacting directly with the machine via one of the serial ports.
  <br><br>
  If you are developing a host, you should use G/M-codes to interface programmatically with the machine, as they are more consistent in their format and answers and easier to parse.
  <br><br>
  Commands on the other hand have no guarantee to have any of that, they are meant for manual use.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Pronterface</strong> requires that you prefix your commands with the <code>@</code> character.
  <br><br>
  So for example if you want to use the <code>help</code> command, send:
  <br><br>
  <code>@help</code>
  <br><br>
  On other hosts you can use <code>M1000 command</code>
</sl-alert>
{:/nomarkdown}

---

## SimpleShell

SimpleShell is a small unix-like shell module that allows you to browse the file system (SD card or other) and act on files.

This provides a powerful command-line interface for managing files and executing commands.

### help

`help` - Give a list of commands

Here is an example output (as of March 2019):

```plaintext
commands:
version
mem [-v]
ls [-s]|folder
cd folder
pwd
cat file limit|[-d|10]
rm file
mv file newfile
remount
play file [-v]
progress - shows progress of current play
abort - abort currently playing file
reset - reset smoothie
dfu - enter dfu boot loader
break - break into debugger
config-get <configuration_source> <configuration_setting>
config-set <configuration_source> <configuration_setting> <value>
get pos|wcs|state|status|fk|ik
get temp bed|hotend
set_temp bed|hotend 185
switch name value
net
load file - loads a configuration override file from specified name or config-override
save file - saves a configuration override file as specified filename or as config-override
upload filename - saves a stream of text to the named file
calc_thermistor -s0 T1,R1,T2,R2,T3,R3 - calculate the Steinhart Hart coefficients for a thermistor
thermistors - print out the predefined thermistors
md5sum file - prints md5 sum of the given file
```

Note: Smoothie now also supports GRBL-like commands like `?` and `!` (when in grbl mode): [Configuring Grbl v0.8](https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.8)

### ls

`ls`

```plaintext
ls [-s] folder
```

List the files in the current folder (if no folder parameter is passed) or list them in the folder passed as a parameter (can be absolute or relative).

The `-s` parameter will also return the file sizes.

Examples:

```plaintext
ls
ls relative/path
ls /sd/absolute/path
ls -s /sd/
```

Example output of a `ls -s /sd/` command:

```plaintext
config 21080
firmware.cur 284520
tt.nc 7500020
webif/
linearballbearingmount.nc 20140
```

### cd

`cd`

```plaintext
cd folder
```

Change the current folder to the folder passed as a parameter (can be absolute or relative).

Examples:

```plaintext
cd relative/path
cd /sd/absolute/path
```

### cat

`cat`

```plaintext
cat file limit
```

Outputs the content of the file given as a parameter to the standard output (limited to number of `limit` lines if that parameter is passed).

Examples:

```plaintext
cat filename
cat filename 10
```

### play

`play`

```plaintext
play file [-v]
```

Executes a file line by line as if each line were received on the serial console, and sends any output to the standard output.
Appending `-v` will print the commands executed to the console.

Examples:

```plaintext
play /sd/gcode_file -v
play list_of_configuration_changes
```

See the specific documentation at the [Player](player) page.

### progress

`progress`

Displays the current status of execution of the play command

Example:

```plaintext
progress
```

Example output:

```plaintext
0 % complete, elapsed time: 31 s, est time: 326055 s
```

### abort

`abort`

```plaintext
abort
```

Stops an execution of play

{% include troubleshooting/stopping-smoothie-for-include.md %}

### mem

`mem`

```plaintext
mem -v
mem
```

Returns information about RAM usage

Example output of a `mem` command:

```plaintext
Unused Heap: 8396 bytes
Used Heap Size: 18252
Allocated: 12156, Free: 4744
Total Free RAM: 13140 bytes
Free AHB0: 13152, AHB1: 10440
```

### break

`break`

```plaintext
break
```

Breaks into [MRI debugging mode](mri-debugging)

### net

`net`

Displays network information (like your IP address)

Example:

```plaintext
net
```

Example output of a `net` command:

```plaintext
IP Addr: 192.168.0.13
IP GW: 192.168.0.1
IP mask: 255.255.255.0
MAC Address: 00:1F:11:02:04:20
```

### rm

`rm`

Removes a file

```plaintext
rm filename
```

Example:

```plaintext
rm /sd/file.gcode
```

### pwd

`pwd`

Shows the current folder

```plaintext
pwd
```

---

### suspend

`suspend`

Will suspend a print in progress it does the following...

1. Send pause to upstream host, or pause if printing from sd
2. Wait for empty queue
3. Save the current position, extruder position, temperatures - any state that would need to be restored
4. Retract by specified amount either on command line or in config (not implemented yet)
5. Turn off heaters (unless the config has `leave_heaters_on_suspend true`)
6. Optionally run after_suspend gcode (set in config defines gcode to run eg. `after_suspend G91G0E20G90`)

User may jog or remove and insert filament at this point, extruding or retracting as needed.

### resume

`resume`

Will resume a suspended print it does the following...

1. Restore the temperatures and wait for them to get up to temp
2. Optionally run before_resume gcode if specified
3. Restore the position it was at and E and any other saved state
4. Resume sd print or send resume upstream

### thermistors

`thermistors`

Prints a list of thermistor presets known to Smoothie with their numerical IDs.

---

## Config

The config module is in charge of storing and retrieving configuration values (in/from the `config` file, see [Configuring Smoothie](configuring-smoothie)).

It also provides a few commands to manipulate those values.

### config-get

`config-get`

```plaintext
config-get <configuration_source> <configuration_setting>
```

Outputs the value of this configuration setting to the standard output. The value is taken from the `config` file.

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>WARNING it is HIGHLY recommended to NOT use this command</strong> as it uses a huge amount of memory to reload the config file and may <strong>CRASH</strong>.
  <br><br>
  Use <code>cat /sd/config</code> instead.
</sl-alert>
{:/nomarkdown}

`<configuration_source>`: This optional parameter selects where to read the value from. Valid sources are 'local' and 'sd'. Leaving this parameter out will read the current live settings in use.

`<configuration_setting>`: This parameter selects which value should be read.

Examples:

```plaintext
config-get acceleration
config-get sd alpha_steps_per_mm
```

### config-set

`config-set`

```plaintext
config-set <configuration_source> <configuration_setting> <value>
```

Changes the value of this configuration setting to the value passed as a parameter.

**Note:** This command cannot currently "insert" characters, and just replaces ones that are already present.

So if the new value has a length that would require inserting characters not to go over the end of the line, it will be refused.

This is why all the lines in your config file must have extra whitespace (which are very useful to get nicely formatted comment columns, see [Configuring Smoothie](configuring-smoothie)).

`<configuration_source>`: This parameter selects where to write the value to. Valid sources are 'firm' and 'sd'.

`<configuration_setting>`: This parameter selects which value should be set.

`<value>`: The value to write.

Note you need to then reset your board, either by cycling the power, or by issuing the `reset` command.

Configuration changes are not taken into account until the config file is read again, which happens when the board starts.

Example:

```plaintext
config-set sd acceleration 1000
```

### config-load

`config-load`

```plaintext
config-load load|unload|dump|checksum
```

`load`: will load the config cache - used for testing
`unload`: will free the config cache - used for testing
`dump`: will dump the config cache showing the checksums - used for testing
`checksum`: will calculate and display the checksum for the given key

```plaintext
config-load dump
```

### fire

`fire`

{::nomarkdown}
The following commands are available for testing lasers (prepend `@` in pronterface or <mcode>M1000</mcode> in other hosts):
{:/nomarkdown}

- `fire nnn` where nnn is 0-100 percentage of power (example `fire 10` will turn on laser at 10%)
- `fire off` turn off the test fire and return to automatic mode.

See the [Laser module](laser) for more information.

And be very careful as this command will leave your laser on indefinitely, it is the only thing that can do that, and it is dangerous.

### Host commands

These are commands designed to return information to a Host program like Smoopi. Some are instant and reply regardless of the state of the buffers.

{::nomarkdown}
`$G` return gcode state eg `GC:<gcode>G0</gcode> <gcode>G54</gcode> <gcode>G17</gcode> <gcode>G21</gcode> <gcode>G90</gcode> <gcode>G94</gcode> <mcode>M0</mcode> <mcode>M5</mcode> <mcode>M9</mcode> T0 F15000.0 S0.8000`
{:/nomarkdown}

`$I` same as `$G` but sends no ok and is instant

`$H` Home

`$J` Xnnn Ynnn Znnn Snnn issue jog command, axis can be XYZABC optional S is scale of max_rate

`$S` switches return switch state(s) for the named switches

`$X` release ALARM state

`$#` returns the WCS states and values

`?` instantly returns the current running state, axis positions, feedrates and temperatures eg `<Idle|MPos:0.0000,0.0000,470.7656,85.1522|WPos:0.0000,0.0000,470.5656|F:15000.0,279.0|T:22.2,0.0|B:22.2,0.0>`

### Stopping Smoothie

{% include troubleshooting/stopping-smoothie-for-include.md %}
