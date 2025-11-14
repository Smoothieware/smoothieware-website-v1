---
permalink: /configuring-smoothie
---

# Configuration File

{::nomarkdown}
<a href="/images/board.png">
  <img src="/images/board.png" alt="Configuration" style="width: 150px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

One of the really appreciated features of the Smoothie firmware is that it doesn't require editing source code, compiling, or flashing in order to edit the configuration.

Instead, Smoothie is configured simply by editing a configuration file on its SD card.

This makes Smoothie incredibly user-friendly and accessible, even for beginners.

## How to Edit Configuration

Simply edit the configuration file, **unmount/safely eject** the SD card from the host (in your operating system's menus, not physically), and reset the board (press the reset button, unplug the USB cable, or issue the `reset` command).

The configuration changes will be applied immediately after the board resets.

## Getting the Configuration File

You can find a default config file for 3D printing [here in the github repository](https://github.com/Smoothieware/Smoothieware/raw/edge/ConfigSamples/Smoothieboard/config) or by clicking on the big blue button just below:

{::nomarkdown}
<div style="margin: 2rem 0;">
  <sl-button variant="primary" size="large" href="https://github.com/Smoothieware/Smoothieware/raw/edge/ConfigSamples/Smoothieboard/config" style="width:100%; max-width: 600px;">
    <a href="/images/download-icon.png">
      <img src="/images/download-icon.png" style="width: 32px; margin-right: 16px; vertical-align: middle;"/>
    </a>
    <b>Click here</b> to get the latest configuration file example
  </sl-button>
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Please remember that the config file on the SD card you got with your Smoothieboard may not be current. Always download the newest version with the button above.
</sl-alert>
{:/nomarkdown}

## Configuration File Format

The file consists of key and value pairs. Most values are commented to indicate what they mean, but a lot of them are also explained in this documentation.

Example:

```plaintext
default_feed_rate                 4000                 # Default rate ( mm/minute ) for G1/G2/G3 moves
```

Where {::nomarkdown}<setting v1="default_feed_rate" v2="motion control.default_feed_rate"></setting>{:/nomarkdown} is the configuration option, `4000` is the value (which you can change), and everything after `#` is a comment (that Smoothie will ignore).

This simple format makes the configuration very readable and easy to understand.

You can find a complete list of possible configuration options [here](configuration-options).

{% include project/donate-for-include.md %}

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Deltas</strong>
  <p>If you are configuring a delta 3D printer, you will save a lot of time and effort by starting with the delta example file instead of the normal example file.</p>
  <p>You can find the delta example file <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/ConfigSamples/Smoothieboard.delta/config">here</a>.</p>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Comments</strong>
  <p>If a line begins with a <code>#</code>, it means it is commented and Smoothie will ignore it. Anything after a <code>#</code> is also ignored (like the explanations at the end of the lines).</p>
  <p>Some values are commented by default, you need to uncomment them by removing the <code>#</code> at the beginning of the line if you want them to take effect.</p>
  <p>For example this line:</p>
  <pre>#default_feed_rate                 4000                 # Default rate ( mm/minute ) for G1/G2/G3 moves</pre>
  <p>Will completely be ignored by Smoothie. To make Smoothie take it into account again, remove the <code>#</code> character at the beginning.</p>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Line length</strong>
  <p>Make sure all your lines are shorter than 132 characters. Lines longer than this can cause issues.</p>
  <p>This should not be a problem if you do not add further comments, just be careful if you do.</p>
</sl-alert>
{:/nomarkdown}

## File Requirements

Smoothie will not work without a valid configuration file on the SD card.

The filename must be `config` or `config.txt`

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>SD Card Mounting</strong>
  <p>It is not recommended you allow the SD card to <a href="https://technet.microsoft.com/en-us/library/cc753703(v=ws.11).aspx">auto mount</a>, and it is highly recommended that the SD card be unmounted at all times except when files need to be copied or the config file needs to be edited.</p>
  <p><strong>"Unmounting" does not refer to a physical action</strong>, do not confuse it with "removing" the card from the board. "Unmounting" just means "telling your computer to stop accessing the card", which is usually done by clicking menus with your mouse (on Windows this is usually called "safely eject").</p>
  <p>Concurrent access to the SD card via the host and the Smoothie is not supported. The SD card must be safely removed or unmounted then Smoothie reset after copying or editing files from the host mount point.</p>
  <p>This is especially true on Macs which randomly like to read and write the SD card. If this happens during a print it will cause pauses and other printing problems.</p>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>This is optional</strong>
  <p>Smoothieboard comes with a configuration file already on the SD card. You only need to get a new configuration file if you are making your own board, or if you are upgrading your firmware.</p>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>IMPORTANT</strong>
  <p>If you are upgrading from a previous version of master or edge, check for upgrade notes in the github root directory.</p>
  <p><a href="https://github.com/smoothieware/smoothieware/blob/edge/upgrade-notes.md">Upgrade notes</a></p>
</sl-alert>
{:/nomarkdown}

## Options

You can find all configuration options on this page: [All configuration options](/configuration-options)

And you can also find the configuration options for each module, in that module's page.

## Includes

You don't need to put all of your configuration in a single file.

You can have "includes" in your main "config" file.

Here is how it works:

First, make a file with a new name, for example, "myconfig", containing configuration options:

```plaintext
acceleration 100
```

Then in your main (file named "config") config file, you can do:

```plaintext
include myconfig
```

And now, when configuration is read, Smoothie will read both files, and take their options into account as if they were a single file.

If you have a long and complex configuration, this can be helpful to organize better.

## Encoding

If you make the config file by yourself please save it using ANSI encoding.

Using Unicode can cause problems.

To avoid problems, use the default file on github (see link above) as your starting point.

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Notepad++</strong>
  <p>If you use Notepad++ to edit the configuration file, make sure you switch the file encoding to "ANSI" (done with 2 clicks) - click "Encoding" on the Menu bar then click "ANSI". It's easy. Otherwise, Notepad++ will change the encoding to UTF8 by default.</p>
  <p>Another good simple text editor that runs under Windows and will edit Smoothie config files with no problems is: <a href="https://wiki.gnome.org/Apps/Gedit">Gedit</a></p>
  <p>ANSI and UTF8 are equivalent for a subset of characters but sometimes quotes and such can be replaced with Unicode variants.</p>
</sl-alert>
{:/nomarkdown}

## Console configuration commands

There are [console commands](/console-commands) that allow you to edit the configuration file over serial, without having to open the file in a text editor.

These commands are:

```plaintext
config-get sd acceleration
```

Will return the current {::nomarkdown}<setting v1="acceleration" v2="motion control.default_acceleration"></setting>{:/nomarkdown} setting from the SD card

```plaintext
config-set sd acceleration 1000
```

Will set the current {::nomarkdown}<setting v1="acceleration" v2="motion control.default_acceleration"></setting>{:/nomarkdown} setting to 1000.

You need to reset the board after changing a value for it to be taken into account.

You can find more information at [Console Commands](/console-commands).

## Config Overrides

Many settings in Smoothie can be set immediately with `M` commands, these settings are lost on reset, however they can be saved to a non-volatile storage (similar to EEPROM on other systems). The values in the configuration file will be overridden for those configuration options.

There is a set of M-codes (`M50x`) documented below that allow you to save all the current settings that have M-codes to set them. This is particularly convenient for parameters that require tuning, as you can use a command to modify them without having to open the file and reset the board.

As these settings can be temporarily overridden with M-codes there is a way to save these settings. Once saved they are reloaded on reset or boot overriding the settings in the config file. If you then edit the config file, make sure the setting you are editing is not being overridden by the override file ({::nomarkdown}<mcode>M503</mcode>{:/nomarkdown} will tell you if there is an active override file). This can sometimes explain why editing the config file appears to have no effect.

### M-code Reference Table

| M-code | Description | Example |
| ------ | ----------- | ------- |
| <mcode>M500</mcode> | Save settings to an override file  | |
| <mcode>M501</mcode> | Load config-override file optionally specifying the extension | <mcode>M501</mcode> - loads `config-override`, <mcode>M501</mcode> test1 - loads `config-override.test1` |
| <mcode>M502</mcode> | Delete the override file, reverting to config settings at next reset  |  |
| <mcode>M503</mcode> | Display overridden settings if any |  |
| <mcode>M504</mcode> | Save the settings to an override file with specified extension | <mcode>M504</mcode> blue-pla |

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Crashing</strong>
  <p>Do not issue <mcode>M500</mcode> or <mcode>M504</mcode> when printing, or the machine could crash or the SD card become corrupted.</p>
  <p>Also do not issue <mcode>M500</mcode> in a G-code file, it is not intended to be executed that way and may well crash the system. It is a manual command only.</p>
</sl-alert>
{:/nomarkdown}

### Example Override Values

```plaintext
;Steps per unit:
M92 X80.00000 Y80.00000 Z1259.84253
;Acceleration mm/sec^2:
M204 S2000.00000
;X- Junction Deviation, S - Minimum Planner speed:
M205 X0.05000 S0.00000
;Max feedrates in mm/sec, XYZ cartesian, ABC actuator:
M203 X333.00000 Y333.00000 Z3.33330 A333.00000 B333.00000 C3.33330
;E Steps per mm:
M92 E367.0000
;Extruder current:
M907 E1.50000
;PID settings:
M301 S1 P35.5000 I2.5830 D122.0000
;Home offset (mm):
M206 X-15.00 Y15.00 Z5.90

Additionally, a delta will save...
M665/666 is used when you want to make an adjustment during calibration and not have to reboot your Smoothie.
;Trim (mm). Note M666 expect all values to be specified as negative and with a decimal point in mm
;Example M666 X-6.14 Y-0.97 Z-6.05
M666

;M665 allows you to set the diagonal rod length L, the delta_radius R, and Max Z all in mm. The L and R values are optional if you don't want/need to override the config settings.
;Example: M665 L220.0 R113.8 Z244.0
M665
```

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Do not</strong>
  <p>Edit the config-override file yourself, only use the commands to edit the values.</p>
</sl-alert>
{:/nomarkdown}

## Advanced pin configuration

{% include hardware/pins/pin-configuration-for-include.md %}

## Related Configuration Features

### Startup Automation

Beyond the main configuration file, Smoothie also supports startup automation through the [on_boot.gcode](on_boot.gcode) file. This allows you to automatically execute G-code commands every time your board boots up.

This is useful for:
- Automatically homing axes on startup
- Setting default temperatures or speeds
- Initializing machine state
- Running calibration routines

See the [on_boot.gcode documentation](on_boot.gcode) for details on how to set this up.

### SD Card Files

For more information about other special files on the SD card (like `config-override`, `firmware.bin`, etc.), see the [SD Card documentation](sd-card).

## Hard setting configuration

You can do away with an editable configuration file altogether if that makes sense in your setup. For example, if you don't want users to have an easy way to edit the configuration by editing the configuration file on the SD card.

To do this, remove the configuration file from the SD card. Then follow the instructions at [Compiling Smoothie](/compiling-smoothie) but before compiling, edit the file named "config.default" to contain the values you want. Then compile, and flash to the board.

Now the firmware will be configured with the values you set, but users won't be able to edit them using the SD card, and modifying values will require compiling and reflashing.

This is useful for example if you are an OEM selling machines where users are not meant to play around with configuration.
