---
permalink: /configurator
---

# Configurator

{::nomarkdown}
<a href="/images/coding.png">
  <img src="/images/coding.png" alt="Configuration" style="width: 150px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

The Configurator module allows you to manipulate configuration using console commands.

This provides a powerful interface for adjusting Smoothie's settings without editing the config file directly.



The Configurator module allows you to manipulate configuration using console commands.

This provides a powerful interface for adjusting Smoothie's settings without editing the config file directly.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

## V1 Overview

In Smoothieware V1, the Configurator provides three console commands that work with a custom configuration format based on checksums and key-value pairs. The configuration is loaded from the SD card `/sd/config` file.

The three main commands are:

- **config-get**: Query configuration values from cache or specific sources (ROM, SD, EEPROM)
- **config-set**: Write configuration values to a source (typically SD card)
- **config-load**: Debug and manage the configuration cache (load, unload, dump, checksum)

Settings use a flat key-value structure. For example: `alpha_steps_per_mm`, `temperature_control.hotend.thermistor_pin`

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

## V2 Overview

In Smoothieware V2, the Configurator has been completely redesigned to work with a standard INI-based configuration system. The configuration is stored in `/sd/config.ini` and uses hierarchical sections.

The two available commands are:

- **config-get**: Retrieve all key-value pairs from a specific section
- **config-set**: Set or delete a key in a section

Settings are organized hierarchically in INI sections. For example: `[alpha]` section with `steps_per_mm` key.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



For detailed information, see the [Console Commands](console-commands) documentation.
