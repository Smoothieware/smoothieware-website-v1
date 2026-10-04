# TwoTrees TS2-40W machine-side axis scope

Research capture: 2026-09-26. Atlas profile: `laserplot-32` (ordinary TS2-40W, not the larger TS2-40W MAX). This note corrects the machine-side interpretation of an older grouped diagram; it supplies no connector cavity map or SmoothieBox conductor.

## Manufacturer evidence

The [TwoTrees TS2 series brief introduction](https://wiki.twotrees3d.com/en/LaserEngravingMachine/TS220W/BriefIntroduction) explicitly distinguishes the 10/20 W autofocus heads from the **TS2-40W manual-focus head**. It describes an adjustable laser-head slider, not a driven Z focusing axis. The same page says **one Y-axis motor** drives both sides through rods, synchronous wheels and belts. Its MKS DLC32 discussion identifies a controller family, not the exact installed board subrevision or the connected machine harness.

The [TwoTrees TS2 calibration guide](https://wiki.twotrees3d.com/en/LaserEngravingMachine/TS220W/Calibration-and-Software-Guide) repeats that TS2-40W focusing is manual. The [TwoTrees TS2-MAX introduction](https://wiki.twotrees3d.com/zh/LaserEngravingMachine/TS2-MAX/intro) describes the MAX family and mentions TS2-40W manual focus, but does not publish a model-specific MAX cable count or installed controller pin table. Do not transfer the ordinary TS2-40W conclusion to `laserplot-33`/`laserplot-34` without resolving their own build evidence.

## Atlas correction

The frozen older graph for `laserplot-32` (`078-laserplot-32.json`, SHA-256 `6574d0487013c22837bf01cbd700312b526cb44c0df9cc1b3fe79c532ae954df`) has zero contact rows. Its `Y1/Y2` and `Z motor` strings are generic controller-oriented group leads, not demonstrated fitted machine devices. The updated primary SVG should show one Y drive motor as an OPEN group, omit the inherited Z-motor group, and retain the older diagram only in the closed historical disclosure with a correction label. X motor, laser control and limits remain OPEN groups because no TS2-40W-specific contact count, mating view, coil map, module input contract or installed board subrevision is established here.

An independently hosted [PDF labelled “TS2 User Manual”](https://www.laserbuying.com/cdn/shop/files/TS2_Manual-EN-DE.pdf?v=3856088066946099844) was checked as a possible source (39 pages; local SHA-256 `e21a342034df898f3fe0bf6889ac624820b906593c1bcd238dc1876a41d27ffa`). Its illustrated build and Z-axis autofocus instructions do not identify a 40 W-specific cable inventory. It is therefore **not** used to assign TS2-40W contacts. The 10 W and 20 W manuals' separate 23-position cable inventories likewise do not establish any 40 W cable positions.

No SmoothieBox route is selected. An external motor driver, laser module supply/control interface, switch type, protective circuit and wiring ratings would require model and build specific evidence before proposing a physical connection.
