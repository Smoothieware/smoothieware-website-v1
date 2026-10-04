# RepRapPro Huxley

## Identity

RepRapPro Huxley is the RepRapPro-specific Huxley implementation. Its wiki explicitly supplies a complete build, wiring, commissioning, printing and maintenance guide set. Do not merge its wiring with other Huxley builds.

## Wiki evidence

- [RepRapPro Huxley](https://www.reprap.org/wiki/RepRapPro_Huxley): model-specific frame/axis assembly and wiring navigation.
- [RepRapPro Huxley printing](https://wiki.reprap.org/wiki/RepRapPro_Huxley_printing): slicer workflow, print-start sequence, filament change and operation.

## Operation

The wiki recommends starting with the machine's tuned PLA/ABS profiles. It describes preparing STL to G-code in Slic3r/Pronterface, copying G-code to microSD, selecting SD Print, homing X/Y/Z, heating the nozzle and laying down an outline before the part. It cautions that USB printing can be interrupted by host scheduling or electrical noise.

## Wiring and diagram status

The archived RepRapPro manufacturer guide has a dedicated wiring section for the pictured Melzi build. It documents source-labelled power, motor, NC endstop and heated-bed-header wiring. Motor conductor sequences vary between axis/connector contexts and conflict with community Huxley sources; do not normalize them into one generic Huxley order. This retained research check did not capture every exact contact row or a confirmed connector mating-face orientation, so no unrecorded contact assignment is added here.

- [RepRapPro Huxley wiring guide](https://reprapltd.com/reprappro/documentation/huxley/wiring/index.html) — manufacturer-authored archived wiring guide, pictured Melzi build scope.
- [RepRapPro Huxley guide index](https://reprapltd.com/reprappro/documentation/huxley/index.html) — archived build documentation.

Keep these sources separate from the community-designed [RepRap Huxley](huxley-reprap.md) dossier and from any specific local machine unless its installed board/build is matched to this guide.

## Safety and limits

The wiki instructs builders to read the complete build instructions before assembly. Temperatures and wiring must be matched to the installed hotend, bed and Melzi revision.
