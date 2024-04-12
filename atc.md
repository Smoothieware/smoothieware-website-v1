
# Automated Tool Change

An automated tool changer is a system allowing a CNC machine to automatically change tools/effectors. This is commonly seen in high-end CNC routers/machining centers where the spindle has the ability to use a set of different "collets", grabbed and released using compressed air. But more recently we've also seen the Reprap community show different implementations for 3D printers, where different extruders can be grabbed and released independently.

This page documents how to set up ATC with a Smoothieboard.

## Status

This feature is currently in beta/actively being implemented. We need your help with testing and with the actually coding, please don't hesitate if you feel like you can give the project some of your time.

## Methods

There are two different possible methods to implement ATC, depending on which part of the CAM toolchain actually implements the tool chain:

- ATC in the post-processor, where the post-processor adds to the program at the right moments the right G-codes to do the tool change.
- ATC in the controller, where Smoothieboard receives commands like `T1`, `T2` etc, and converts those into the right G-codes to do the tool change.

Status: Right now, we are concentrating on implementing ATC with a post-processor for Fusion360. This is because it's faster/easier to figure things out that way. However, once that method is mature it'll be trivial to do the implementation within Smoothie (which was mostly done already in the "recursive" branch on github).

### Smoothie ATC Method

*To be implemented*

### Fusion360 Post-Processor Method

This method requires you use a custom post-processor for Fusion360. Whenever a tool change has to occur, the post-processor inserts the right sequence of commands into the G-code file to release the previous tool and grab the new one.

- First get the Post-Processor at [Smoothie-Fusion360-PostProcessor](https://github.com/arthurwolf/Smoothie-Fusion360-PostProcessor)
- In the "Post-Process" window in Fusion360, specify you want to use this post-processor instead of the default Smoothie one.
- In the post-processor options, configure your tool rack's position and design.
- Generate G-code and test

## Physical setup example

*To be added*

## Example Gcode sequences

### Example tool grab

```gcode
; Grabbing tool 1 in preparation for section 0
M1001
M1007
G53 G0 Z200 F500
G53 G0 X96 F2000
G53 G0 Y968 F1500
G53 G0 Z115 F500
M1003
M1006
G4 S5.
G53 G0 Z91 F500
M1004
M1005
G4 S5.
M1008
M1002
G53 G0 Y938 F1500
G53 G0 Z200 F500
; Tool 1 was grabbed
```

### Example tool release

```gcode
; Releasing tool 1 after it was used in section 3
M1001
M1007
G53 G0 Z200 F500
G53 G0 X96 F2000
G53 G0 Y938 F1500
G53 G0 Z92 F500
G53 G0 Y968 F1500
M1003
M1006
G4 S5.
; Start tool up procedure
G91 G2 Z0.5 J0.025 G90
G91 G2 Z0.5 J0.075 G90
G91 G2 Z0.5 J0.125 G90
G91 G2 Z0.5 J0.175 G90
G91 G2 Z0.5 J0.225 G90
G91 G2 Z0.5 J0.275 G90
G91 G2 Z0.5 J0.325 G90
G91 G2 Z0.5 J0.375 G90
G91 G2 Z0.5 J0.425 G90
G91 G2 Z0.5 J0.475 G90
G91 G2 Z0.5 J0.525 G90
G91 G2 Z0.5 J0.575 G90
G91 G2 Z0.5 J0.625 G90
G91 G2 Z0.5 J0.675 G90
G91 G2 Z0.5 J0.725 G90
G91 G2 Z0.5 J0.775 G90
G91 G2 Z0.5 J0.825 G90
G91 G2 Z0.5 J0.875 G90
G91 G2 Z0.5 J0.925 G90
G91 G2 Z0.5 J0.975 G90
G53 G0 Z200 F500
; Stop tool up procedure
M1004
M1005
G4 S5.
M1008
M1002
; Tool 1 was released
```
