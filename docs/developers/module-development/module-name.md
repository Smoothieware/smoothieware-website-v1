---
permalink: /module-name
---


# Module Names

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="puzzle"></sl-icon>
  <strong>Multiple Instances:</strong> Smoothie allows you to create multiple instances of certain modules for maximum flexibility.
</sl-alert>
{:/nomarkdown}

In Smoothie, you can create multiple instances of some modules.

For example, if your machine has several extruders, you can create several Extruder modules.

There is no limit to how many modules you can create.

## Creating Module Instances



Modules are created by choosing a module name, and setting the `enable` option to `true` for that module.

The module name can be any identifier you choose (like `first`, `second`, `left`, `right`, etc.).

Here's how you would create three separate extruder modules:

{::nomarkdown}
<versioned orientation="horizontal">
<v1>
{:/nomarkdown}

```gcode
extruder.first.enable     true
extruder.second.enable    true
extruder.third.enable     true
```

Each instance can then have its own configuration options using the same naming pattern:

```gcode
extruder.first.steps_per_mm           92.4
extruder.first.max_speed              50

extruder.second.steps_per_mm          90.0
extruder.second.max_speed             50
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[extruder]
first.enable = true
second.enable = true
third.enable = true
```

Each instance can then have its own configuration options using the same pattern:

```ini
[extruder]
first.steps_per_mm = 92.4
first.max_speed = 50

second.steps_per_mm = 90.0
second.max_speed = 50
```

{::nomarkdown}
</v2>
</versioned>

{:/nomarkdown}

## Supported Modules

Not all modules support multiple instances.

Check the specific module documentation to see if it supports multiple instances.

Common modules that support multiple instances:

- Extruder
- Temperature Control
- Switch
- Z Probe


