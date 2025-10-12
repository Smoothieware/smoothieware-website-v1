
# Module Names

In Smoothie, you can create multiple instances of some modules.

For example, if your machine has several extruders, you can create several Extruder modules.

There is no limit to how many modules you can create.

## Creating Module Instances

Modules are created by choosing a module name, and setting the `enable` option to `true` for that module.

The module name can be any identifier you choose (like `first`, `second`, `left`, `right`, etc.).

## Example

```gcode
extruder.first.enable     true
extruder.second.enable    true
extruder.third.enable     true
```

Each instance can then have its own configuration options using the same naming pattern.


