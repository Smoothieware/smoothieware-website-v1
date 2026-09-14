---
permalink: /subroutines
title: O-word Subroutines
---

# O-word Subroutines

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieware V2 only:</strong> SmoothieV2 implements a small subset of LinuxCNC-style O-word subroutines. It supports definition and calls, but it does not support parameters, expressions, conditionals, loops, or the full LinuxCNC O-code language.
</sl-alert>
{:/nomarkdown}

Subroutines group several commands under one alphanumeric name. Define a routine with `o <name> sub`, finish it with `o <name> endsub`, then run it with `o <name> call`.

```gcode
o park sub
G0 Z20
G0 X0 Y0
M5
o park endsub

o park call
```

A space is required between `o` and the name. The name may contain letters or numbers.

## Commands

| Command | Result |
|---------|--------|
| `o <name> sub` | Starts a definition and replaces an existing routine with the same name |
| `o <name> endsub` | Ends the active definition |
| `o <name> call` | Dispatches each stored line in order |
| `o <name> list` | Prints the stored lines; intended as a development aid |
| `o <name> save` | Writes the definition to `<name>.sub` in the current directory; intended as a development aid |

Smoothie stores definitions in RAM. They disappear on reset unless you save and load them from storage.

## Loading saved routines

`o park save` creates `park.sub` with the `sub` and `endsub` lines included. Use the [Player module](/player) to play that file after each reset and restore the definition into RAM. Playing the definition records its lines; it does not call the routine.

The `save` command overwrites a file of the same name in the current working directory. Change to the intended directory with `cd` before saving.

## Limits

- Only one definition can be active on a console connection.
- Defining a name again replaces its old lines.
- Calling an undefined name reports an error.
- Calls dispatch stored commands without waiting for each move to finish before dispatching the next line. Normal planner ordering still applies.
- Parameters and nested language constructs from LinuxCNC are unsupported.

## Source

[`CommandShell.cpp`](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L2195-L2347) implements the O-word command subset.
