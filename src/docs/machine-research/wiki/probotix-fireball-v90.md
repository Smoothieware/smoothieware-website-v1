# Probotix Fireball V90 CNC router

Research status: wiki-sourced machine-specific dossier; the MakeICT wiki marks the machine retired. Probotix legacy documentation is separately used for optional-kit context. Captured 2026-09-28.

## Identity and status

MakeICT’s equipment inventory identifies a Probotix Fireball V90 CNC mill/router and marks it retired. The associated V90 wiki page preserves a user guide. It is not evidence of a currently usable machine.

## Wiki-recorded configuration and use

- Bed: 12 × 18 inches; cutting area: 11 × 17 inches.
- Z travel: 3 inches minus cutter length.
- Input: G-code. The wiki names pycam for STL-to-G-code and describes other software that had been used.
- 1/8-inch shanks are listed. The article warns that small bits break easily and describes the cone/collet orientation.
- Limit switches are in series: the guide says a trip stops the machine but does not identify which switch caused it.
- An E-stop to the right of the screen stops movement but does not turn off the router.
- The G-code cutting-motor control is reported inactive; the router motor is switched and speed-adjusted with hardware controls.

## Wiki-transcribed control facts

The page lists G20/G21 unit selection, G00 rapid positioning, G01 feed movement, and G90/G91 absolute/relative positioning. It warns to raise Z before rapid moves and to ask for experienced help before attempting aluminium. Steel is explicitly discouraged because the frame is not suitable.

## Optional Probotix motor/driver kit and DB25 reference

The legacy Probotix V90 page says the basic motor/driver kit includes motors, motor drivers, a breakout board, power supply, a DB25 cable, and an IDC cable connecting the drivers to the breakout board. It separately says a complete running machine needs a PC with a parallel port. The base V90 kit itself is described as a mechanical frame with no motors or electronics. These statements describe offered kit options, not the retired MakeICT unit's installed electronics. The guide gives no DB25 pin schedule, cable-end direction, mating-face view, or breakout-board revision. The atlas therefore enumerates pins 1–25 as nominal DB25 positions, labels their functions unknown, and leaves every one OPEN.

## Connections and pinout

| Circuit | Wiki evidence | Pinout |
|---|---|---|
| Limit switches | Series-connected according to the wiki | No connector or conductor assignments given |
| E-stop | Stops motion, leaves router powered | No contact/polarity/safety-chain diagram |
| Router power/speed | Controlled with hardware switch and internal speed-control knob | No terminal map or voltage details |
| Stepper drivers | Wiki warns to disable motors before moving a tripped axis and says an earlier driver failed | No board/driver pinout |

## Visual evidence and sources

The MakeICT machine page is a text operating guide; the inspected version contains no wiring image. The separate Probotix legacy page supplies optional motor/driver-kit context only; neither page supplies a connector pinout for the retired MakeICT machine. [MakeICT V90 wiki page](https://wiki.makeict.org/wiki/V90) · [equipment inventory](https://wiki.makeict.org/wiki/Equipment) · [Probotix V90 legacy product guide](https://www.probotix.com/wiki/index.php/V90).

## Evidence limits

The wiki is a historical user guide for retired equipment. Do not use its troubleshooting text as live repair instructions or as a substitute for verifying the installed controller.
