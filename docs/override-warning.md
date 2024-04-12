
> [!WARNING]
> **Override doing its job but the user not realizing the full extents of its effects**
> 
> If you are here because you are editing your configuration file, but none of the changes you make to the file seem to have any effect on the machine's behavior, it's possible your config-override file is "overriding" (it's its job) the "main" config file's settings, and so you are seeing those override settings in action, not the settings you are modifying.
> 
> This is a fairly common situation for users who have set everything up, then go back to try to change something in config, only to see no effect, but they do not remember/realize they have a config-override set up, and do not realize the effect it is having.
> 
> So if you are modifying config, make sure you think about the override and its effects.
> 
> And if at all possible, while debugging issues, simply remove your config override file (save it first of course).
