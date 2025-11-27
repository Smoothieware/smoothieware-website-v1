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

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>V1 Commands:</strong> The V1 firmware uses a module called <code>SimpleShell</code> for command handling. Commands support the traditional flat config file format.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>V2 Commands:</strong> The V2 firmware uses a <code>CommandShell</code> module with several new commands and changes. Commands support the INI-style config format. Type <code>cmd -h</code> to get help on any specific command.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

---

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## SimpleShell

SimpleShell is a small unix-like shell module that allows you to browse the file system (SD card or other) and act on files.

This provides a powerful command-line interface for managing files and executing commands.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## CommandShell

CommandShell is the V2 equivalent of V1's SimpleShell. It provides a unix-like shell for browsing the file system and executing commands, with several enhancements for the V2 architecture.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### help

`help` - Give a list of commands

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

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

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

In V2, use `help` to see available commands, and `cmd -h` to get help on a specific command.

Example output:

```plaintext
$#
$G
$H
$I
$J
$P
$S
break
cat
cd
config-get
config-set
cp
date
dl
dfu
echo
ed
flash
get
gpio
help
load
ls
md5sum
mem
mkdir
modules
msc
mv
qspi
reset
rm
ry
switch
test
truncate
version

use cmd -h to get help on that command
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Note: Smoothie also supports GRBL-like commands like `?` and `!` (when in grbl mode): [Configuring Grbl v0.8](https://github.com/grbl/grbl/wiki/Configuring-Grbl-v0.8)

### ls

`ls`

List the files in the current folder (if no folder parameter is passed) or list them in the folder passed as a parameter (can be absolute or relative).

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```plaintext
ls [-s] folder
```

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

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```plaintext
ls [-1] folder
```

By default, V2 shows file permissions, size, timestamp, and name. The `-1` parameter shows a simple listing (names only).

Examples:

```plaintext
ls
ls relative/path
ls /sd/absolute/path
ls -1 /sd/
```

Example output of `ls /sd/`:

```plaintext
drw-        0 2024-03-15 10:23 firmware/
-rw-    21080 2024-03-14 09:15 config.ini
-rw-   284520 2024-03-14 16:30 firmware.bin
-rw-  7500020 2024-03-12 14:22 tt.nc
```

Example output of `ls -1 /sd/`:

```plaintext
firmware/
config.ini
firmware.bin
tt.nc
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

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

Returns information about RAM usage

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```plaintext
mem [-v]
```

The `-v` parameter shows verbose heap information.

Example output of a `mem` command:

```plaintext
Unused Heap: 8396 bytes
Used Heap Size: 18252
Allocated: 12156, Free: 4744
Total Free RAM: 13140 bytes
Free AHB0: 13152, AHB1: 10440
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```plaintext
mem
```

Shows memory usage including RTOS task information, heap status, and memory regions.

Example output:

```plaintext
Heap: Total: 524288, Free: 489216, Used: 35072
DTCMRAM: Total: 131072, Free: 98304, Used: 32768
SRAM: Free: 262144

RTOS Task List:
Name            State   Prio    Stack   Num
IDLE            Ready   0       120     1
CommandShell    Ready   2       256     4
Main            Running 3       512     2
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### break

`break`

```plaintext
break
```

Breaks into [MRI debugging mode](mri-debugging)

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

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

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The <code>net</code> command is only available in V1. Network functionality in V2 may be accessed differently depending on the network module implementation.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
</versioned>
{:/nomarkdown}

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

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### pwd

`pwd`

Shows the current folder

```plaintext
pwd
```

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The <code>pwd</code> command is only available in V1. In V2, the current directory is shown in the prompt, or use <code>ls</code> without arguments to see where you are.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
</versioned>
{:/nomarkdown}

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

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### thermistors

`thermistors`

Prints a list of thermistor presets known to Smoothie with their numerical IDs.

### calc_thermistor

`calc_thermistor`

```plaintext
calc_thermistor [-s0] T1,R1,T2,R2,T3,R3
```

Calculate the Steinhart-Hart coefficients for a thermistor using three temperature/resistance pairs.

Options:
- `-sN` : Save the calculated coefficients to thermistor preset N

Example:

```plaintext
calc_thermistor 25,10000,100,950,220,47
```

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The <code>thermistors</code> and <code>calc_thermistor</code> commands are only available in V1.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
</versioned>
{:/nomarkdown}

---

## Config

The config module is in charge of storing and retrieving configuration values (in/from the `config` file, see [Configuring Smoothie](configuring-smoothie)).

It also provides a few commands to manipulate those values.

### config-get

`config-get`

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

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

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```plaintext
config-get [section name] key
config-get [section name]
config-get key
```

Gets configuration values from the INI-style config file. V2 uses sections (in square brackets) to organize settings.

Examples:

```plaintext
config-get [motion] default_acceleration
config-get [motion]
config-get default_acceleration
```

Example output of `config-get [motion]`:

```plaintext
[motion]
default_acceleration = 1000
default_seek_rate = 100
junction_deviation = 0.05
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### config-set

`config-set`

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

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

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```plaintext
config-set [section name] key = value
config-set [section name] key value
config-set key = value
```

Sets configuration values in the INI-style config file. V2 uses sections (in square brackets) to organize settings.

Note you need to reset your board after changing configuration for changes to take effect.

Examples:

```plaintext
config-set [motion] default_acceleration = 1500
config-set [motion] default_acceleration 1500
config-set default_acceleration = 1500
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

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

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The <code>config-load</code> command is only available in V1. V2 handles configuration loading differently.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
</versioned>
{:/nomarkdown}

### fire

`fire`

The following commands are available for testing lasers (prepend `@` in pronterface or {::nomarkdown}<mcode>M1000</mcode>{:/nomarkdown} in other hosts):

- `fire nnn` where nnn is 0-100 percentage of power (example `fire 10` will turn on laser at 10%)
- `fire off` turn off the test fire and return to automatic mode.

See the [Laser module](laser) for more information.

And be very careful as this command will leave your laser on indefinitely, it is the only thing that can do that, and it is dangerous.

### Host commands

These are commands designed to return information to a Host program like Smoopi. Some are instant and reply regardless of the state of the buffers.

`$G` return gcode state eg `GC:{::nomarkdown}<gcode>G0</gcode>{:/nomarkdown} {::nomarkdown}<gcode>G54</gcode>{:/nomarkdown} {::nomarkdown}<gcode>G17</gcode>{:/nomarkdown} {::nomarkdown}<gcode>G21</gcode>{:/nomarkdown} {::nomarkdown}<gcode>G90</gcode>{:/nomarkdown} {::nomarkdown}<gcode>G94</gcode>{:/nomarkdown} {::nomarkdown}<mcode>M0</mcode>{:/nomarkdown} {::nomarkdown}<mcode>M5</mcode>{:/nomarkdown} {::nomarkdown}<mcode>M9</mcode>{:/nomarkdown} T0 F15000.0 S0.8000`

`$I` same as `$G` but sends no ok and is instant

`$H` Home

`$J` Xnnn Ynnn Znnn Snnn issue jog command, axis can be XYZABC optional S is scale of max_rate

`$S` switches return switch state(s) for the named switches

`$X` release ALARM state

`$#` returns the WCS states and values

`?` instantly returns the current running state, axis positions, feedrates and temperatures eg `<Idle|MPos:0.0000,0.0000,470.7656,85.1522|WPos:0.0000,0.0000,470.5656|F:15000.0,279.0|T:22.2,0.0|B:22.2,0.0>`

{::nomarkdown}
<versioned orientation="vertical">
<v2>
{:/nomarkdown}

`$P` probe command (V2 only) - performs probing operations

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Stopping Smoothie

{% include troubleshooting/stopping-smoothie-for-include.md %}

---

{::nomarkdown}
<versioned orientation="vertical">
<v2>
{:/nomarkdown}

## V2-Only Commands

The following commands are only available in V2 firmware.

### cp

`cp`

```plaintext
cp source destination
```

Copy a file from source to destination.

Example:

```plaintext
cp /sd/config.ini /sd/config.bak
```

### ry

`ry`

```plaintext
ry filename
```

Receive a file using YMODEM protocol. This replaces the V1 `upload` command.

Example:

```plaintext
ry /sd/newfile.gcode
```

### dl

`dl`

```plaintext
dl filename
```

Fast binary download of a file. Used for high-speed file transfers.

Example:

```plaintext
dl /sd/firmware.bin
```

### truncate

`truncate`

```plaintext
truncate filename size
```

Truncate a file to the specified size.

Example:

```plaintext
truncate /sd/log.txt 1000
```

### date

`date`

```plaintext
date
date YYYY-MM-DD HH:MM:SS
```

Get or set the system date and time. Without arguments, displays the current date/time. With arguments, sets the date/time.

Examples:

```plaintext
date
date 2024-03-15 14:30:00
```

### gpio

`gpio`

```plaintext
gpio list
gpio set pin_name value
gpio get pin_name
```

Control and query GPIO pins directly.

Examples:

```plaintext
gpio list
gpio set PA0 1
gpio get PA0
```

### modules

`modules`

```plaintext
modules
```

List all loaded modules and their status.

Example output:

```plaintext
Loaded modules:
  Motion - enabled
  TemperatureControl - enabled
  Laser - disabled
  Player - enabled
```

### ed

`ed`

```plaintext
ed filename
```

Simple line editor for editing files directly on the SD card.

Example:

```plaintext
ed /sd/config.ini
```

### flash

`flash`

```plaintext
flash
```

Flash new firmware from the file `flashme.bin` on the SD card. The board will reboot after flashing.

### msc

`msc`

```plaintext
msc
```

Enable USB Mass Storage Class mode, allowing the SD card to be accessed as a USB drive from the host computer. This is useful for file transfers without removing the SD card.

### qspi

`qspi`

```plaintext
qspi read address length
qspi write address data
qspi erase address length
```

Direct access to QSPI flash memory. Used for advanced operations.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The <code>qspi</code> command is for advanced users. Improper use can corrupt firmware or data.
</sl-alert>
{:/nomarkdown}

### get volts

In V2, the `get` command has an additional option:

```plaintext
get volts
```

Returns voltage readings from the board's ADC inputs.

Example output:

```plaintext
VIN: 24.1V
3V3: 3.31V
VBAT: 3.12V
```

### get temp chip

In V2, `get temp` has an additional option:

```plaintext
get temp chip
```

Returns the internal chip temperature sensor reading.

Example output:

```plaintext
Chip temperature: 42.5°C
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
