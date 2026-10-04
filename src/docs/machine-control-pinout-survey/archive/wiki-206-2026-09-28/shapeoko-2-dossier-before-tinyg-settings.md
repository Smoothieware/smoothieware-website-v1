# Shapeoko 2 CNC router

## Identity

RaumZeitLabor's wiki has a dedicated “Shapeoko 2” machine page. This exact model identity is distinct from Shapeoko 3 and later generations.

## Wiki evidence

- [RaumZeitLabor Shapeoko 2 page](https://wiki.raumzeitlabor.de/wiki/Shapeoko_2): machine-specific discussion of CNC routing, 2.5D work and its GRBL-era control context.
- [RaumZeitLabor main page](https://wiki.raumzeitlabor.de/wiki/Hauptseite): lists Shapeoko 2 among the lab's devices.

## Operation and visuals

The wiki gives an active-machine workflow and says to plan carefully because cutting failures can damage the work or injure the operator. It names materials tested on this installation (HDPE, plywood, aluminum and Delrin) and gives source-specific feed/pass examples; those are historical shop values, not universal settings. The page documents a TinyG controller, 115200 baud 8N1 with hardware flow control, 260 × 275 × 70 mm working area, 300 W spindle, eight limit switches and a machine E-stop. The page contains connector photographs; its pin table is transcribed below.

## Pinout

The wiki numbers the individual conductors printed on the drag-chain motor cable. These are **cable-core numbers**, not positions in a motor connector housing. Its general cable assignment is:

| Cable core | Colour | Source motor role |
|---:|---|---|
| 1 | red | B1 / B+ |
| 2 | blue | B2 / B− |
| 3 | green | A1 / A− |
| 4 | black | A2 / A+ |

The source separately labels the X-stepper exception: 1 green A1, 2 red B1, 3 black A2, 4 blue B2. It also warns that green and black are swapped on the **left Y stepper**; the exact resulting contact/cable-core assignment for that motor is not independently tabulated. Do not use either table as a universal coil-colour convention or as the SmoothieBox driver input schedule. The sensor connector map is:

| Contact | Signal | Wire colour |
|---:|---|---|
| 1 | GND | brown |
| 2 | X endstop min | white |
| 3 | X endstop max | grey |
| 4 | Y endstop min | yellow |
| 5 | Y endstop max | green |
| 6 | Z endstop max | pink |
| 7 | Z min / probe | violet |
| 8 | unused | blue |

These are the wiki's labels for the documented installation and TinyG-era wiring. Confirm connector orientation and revision on hardware before reuse; the article also notes unresolved planned hardware changes.

## Limits

The page is historical and does not establish that the installation remains active. Controller, spindle, dimensions and safety interlocks are not sufficiently specified in the captured text.
