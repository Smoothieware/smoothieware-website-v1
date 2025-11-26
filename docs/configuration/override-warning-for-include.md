
# Config Override Warning

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Override doing its job but the user not realizing the full extents of its effects</strong>

  If you are here because you are editing your configuration file, but none of the changes you make to the file seem to have any effect on the machine's behavior, it's possible your config-override file is "overriding" (it's its job) the "main" config file's settings, and so you are seeing those override settings in action, not the settings you are modifying.

  This is a fairly common situation for users who have set everything up, then go back to try to change something in config, only to see no effect, but they do not remember/realize they have a config-override set up, and do not realize the effect it is having.

  So if you are modifying config, make sure you think about the override and its effects.

  And if at all possible, while debugging issues, simply remove your config override file (save it first of course).
</sl-alert>
{:/nomarkdown}

## What is Config Override?

The config-override file is a special file that Smoothie uses to store settings that should take precedence over your main configuration file.

This is particularly useful when you want to save calibration values or other settings that shouldn't be in your main config file.



### Enabling Config Override

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

In **Smoothieware V1**, the config-override file is **automatically active** if it exists on your SD card. You do not need to enable it—if the file is present, it will override settings from your main config file.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

In **Smoothieware V2**, config-override functionality must be **explicitly enabled** by adding this setting to your `config.ini`:

```
[general]
config-override = true
```

Without this setting, any existing `config-override.ini` file will be ignored, and only your main config file will be used.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}





## How to Check for Override Issues

If your configuration changes aren't taking effect:

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

1. Check if you have a `config-override` file on your SD card (no extension)
2. If it exists, the override is **automatically active**—it will be loaded on every boot
3. Review its contents to see what settings are being overridden
4. Either modify the override file or temporarily remove it for testing
5. Remember to save a backup before removing any files

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

1. First check if `general.config-override` is set to `true` in your `[general]` section—if `false` or missing, config-override is disabled
2. If enabled, check if you have a `config-override.ini` file on your SD card
3. Review its contents to see what settings are being overridden
4. Either modify the override file or temporarily disable it by setting `config-override = false`
5. Remember to save a backup before removing any files

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## When to Use Config Override

Config override is most useful for:

- Storing calibration values that you've dialed in
- Keeping machine-specific settings separate from your main config
- Allowing M500 command to save settings without editing the main config file

## Best Practices

- Document what settings you've saved to config-override
- Keep a backup of your override file



{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

- When troubleshooting, temporarily remove the config-override file to isolate issues
- Consider whether a setting should be in main config or override

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

- When troubleshooting, set `config-override = false` to disable override without deleting the file (just change it back to `true` when done)
- When migrating from V1, remember to add `config-override = true` to your `[general]` section if you want this feature enabled
- Consider whether a setting should be in main config or override

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}


