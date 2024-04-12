
# Configuration file

One of the really appreciated features of the Smoothie firmware is that it doesn't require editing source code, compiling, or flashing, in order to edit the configuration.

Instead, Smoothie is configured simply by editing a configuration file on its sd-card.

Simply edit the configuration file, **unmount/safely eject** the sdcard from the host ( in your operating system's menus, not physically ) and reset the board ( press the reset button, unplug the USB cable, or issue the `reset` command ).

You can find a default config file for 3D printing [here in the github repository](https://github.com/Smoothieware/Smoothieware/raw/edge/ConfigSamples/Smoothieboard/config) or by clicking on the big blue button just below:

```html
<br/>
<a href="https://github.com/Smoothieware/Smoothieware/raw/edge/ConfigSamples/Smoothieboard/config" class="btn btn-primary btn-lg" style="width:100%"> <img src="/images/download-icon.png " style="width:48px; margin-right:48px"><b>Click here</b> to get the latest configuration file example</a>
<br/>
```

Please remember that the config file on the SD card you got with your Smoothieboard may not be current, always download the newest version with the button above.

The file consists of key and value pairs. Most values are commented to indicate what they mean, but a lot of them are also explained in this documentation.

Example:

```plaintext
default_feed_rate                 4000                 # Default rate ( mm/minute ) for G1/G2/G3 moves
```

Where `default_feed_rate` is the configuration option, `4000` is the value ( which you can change ), and everything after `#` is a comment ( that Smoothie will ignore ).

You can find a complete list of possible configuration options [here](/configuration-options.md).

{% include_relative donate.md %}

> [!SUCCESS]
> **Deltas**
>
> If you are configuring a delta 3D printer, you will save a lot of time and effort by starting with the delta example file instead of the normal example file.
>
> You can find the delta example file [here](https://github.com/Smoothieware/Smoothieware/blob/edge/ConfigSamples/Smoothieboard.delta/config).

> [!DANGER]
> **Comments**
>
> If a line begins with a `#`, it means it is commented and Smoothie will ignore it. Anything after a `#` is also ignored ( like the explanations at the end of the lines ).
>
> Some values are commented by default, you need to uncomment them by removing the `#` at the beginning of the line if you want them to take effect.
>
> For example this line:
>
> ```plaintext
> #default_feed_rate                 4000                 # Default rate ( mm/minute ) for G1/G2/G3 moves
> ```
>
> Will completely be ignored by Smoothie. To make Smoothie take it into account again, remove the `#` character at the beginning.

> [!DANGER]
> **Line length**
>
> Make sure all your lines are shorter than 132 characters. Lines longer than this can cause issues.
>
> This should not be a problem if you do not add further comments, just be careful if you do.

Smoothie will not work without a valid configuration file on the SD card.

The filename must be `config` or `config.txt`

> [!WARNING]
> **Note**
>
> It is not recommended you allow the sdcard to [auto mount](https://technet.microsoft.com/en-us/library/cc753703(v=ws.11).aspx), and it is highly recommended that the sdcard be unmounted at all times except when files need to be copied or the config file needs to be edited.
>
> "Unmounting" does not refer to a physical action, do not confuse it with "removing" the card from the board. "unmounting" just means "telling your computer to stop accessing the card", which is usually done by clicking menus with your mouse ( on windows this is usually called "safely eject" ).
>
> Concurrent access to the sdcard via the host and the smoothie is not supported. The sdcard must be safely removed or unmounted then smoothie reset after copying or editing files from the host mount point.
>
> This is especially true on Macs which randomly like to read and write the sdcard. If this happens during a print it will cause pauses and other printing problems.

> [!NOTE]
> **This is optional**
>
> Smoothieboard comes with a configuration file already on the SD card. You need to get only a new configuration file if you are making your own board, or if you are upgrading your firmware.

> [!WARNING]
> **IMPORTANT**
>
> If you are upgrading from a previous version of master or edge check for upgrade notes in the github root directory.
> [Upgrade notes](https://github.com/Smoothieware/Smoothieware/blob/edge/upgrade-notes.md)

## Options

You can find all configuration options on this page: [All configuration options](http://smoothieware.org/configuration-options)

And you can also find the configuration options for each module, in that module's page.

## Includes

You don't need to put all of your configuration in a single file.

You can have "includes" in your main "config" file.

Here is how it works:

First, make a file with a new name, for example, "myconfig", containing configuration options:

```plaintext
acceleration 100
```

Then in your main ( file named "config" ) config file, you can do:

```plaintext
include myconfig
```

And now, when configuration is read, Smoothie will read both files, and take their options into account as if they were a single file.

If you have a long and complex configuration, this can be helpful to organize better.

## Encoding

If you make the config file by yourself please save it using ANSI encoding.

Using Unicode can cause problems.

To avoid problems, use the default file on github ( see link above ) as your starting point.

> [!DANGER]
> **Notepad++**
>
> If you use Notepad++ to edit the configuration file, make sure you switch the file encoding to "ANSI" (done with 2 clicks) - click "Encoding" on the Menu bar then click "ANSI". It's easy.  Otherwise, Notepad++ will change the encoding to UTF8 by default.
>
> Another good simple text editor that runs under Windows and will edit Smoothie config files with no problems is: [Gedit](https://wiki.gnome.org/Apps/Gedit)
>
> ANSI and UTF8 are equivalent for a subset of characters but sometimes quotes and such can be replaced with Unicode variants.

## Console configuration commands

There are [console commands](http://smoothieware.org/console-commands) that allow you to edit the configuration file over serial, without having to open the file in a text editor.

These commands are:

```plaintext
config-get sd acceleration
```

Will return the current acceleration setting from the SD card

```plaintext
config-set sd acceleration 1000
```

Will set the current acceleration setting to 1000.

You need to reset the board after changing a value for it to be taken into account.

You can find more information at [Console Commands](http://smoothieware.org/console-commands).

## Config Overrides

Many settings in smoothie can be set immediately with `M` commands, these settings are lost on reset, however they can be saved to a non-volatile storage (similar to EEPROM on other systems). The values in the configuration file will be overridden for those configuration options.

There is a set of M-codes (`M50x`) documented below that allow you to save all the current settings that have Mxxx commands to set them. This is particularly convenient for parameters that require tuning, as you can use a command to modify them without having to open the file and reset the board.

As these settings can be temporarily overridden with Mxxx commands there is a way to save these settings. Once saved they are reloaded on reset or boot overriding the settings in the config file. If you then edit the config file, make sure the setting you are editing is not being overridden by the override file (`M503` will tell you if there is an active override file). This can sometimes explain why editing the config file appears to have no effect.

| M-code | Description | Example |
| ------ | ----------- | ------- |
| `M500` | Save settings to an override file  | |
| `M501` | load config-override file optionally specifying the extension | `M501` - loads `config-override`, `M501 test1` - loads `config-override.test1` |
| `M502` | Delete the override file, reverting to config settings at next reset  |  |
| `M503` | Display overridden settings if any |  |
| `M504` | Save the settings to an override file with specified extension | `M504` blue-pla |

> [!DANGER]
> **Crashing**
>
> Do not issue `M500` or `M504` when printing, or the machine could crash or the SD card become corrupted.
> Also do not issue M500 in a gcode file, it is not intended to be executed that way and may well crash the system. It is a manual command only.

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

> [!DANGER]
> **Do not**
>
> Edit the config-override file yourself, only use the commands to edit the values.

## Advanced pin configuration

{% include_relative pin-configuration.md %}

## Hard setting configuration

You can do away with an editable configuration file altogether if that makes sense in your setup. For example, if you don't want users to have an easy way to edit the configuration by editing the configuration file on the SD card.

To do this, remove the configuration file from the SD card. Then follow the instructions at [Compiling Smoothie](http://smoothieware.org/compiling-smoothie) but before compiling, edit the file named "config.default" to contain the values you want. Then compile, and flash to the board.

Now the firmware will be configured with the values you set, but users won't be able to edit them using the SD card, and modifying values will require compiling and reflashing.

This is useful for example if you are an OEM selling machines where users are not meant to play around with configuration.
