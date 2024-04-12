
In Smoothie, you can create multiple instances of some modules.

For example, if your machine has several extruders, you can create several Extruder modules.

There is no limit to how many modules you can create.

Modules are created by choosing a module name, and setting the `enable` option to `true` for that module.

```markdown
extruder.first.enable     true
extruder.second.enable    true
extruder.third.enable     true
```
