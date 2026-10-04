# RepRap 1.0 Darwin

## Identity

Darwin is the first RepRap rapid-prototyping machine design. It is an open, self-replicating FFF printer design, not a commercial product model.

## Wiki evidence

- [RepRap Darwin](https://reprap.org/wiki/Darwin): design history and legacy status.
- [RepRap 1.0 Darwin build overview](https://reprap.org/wiki/RepRapOneDarwin): mechanism and nominal specifications.
- [RepRap-hosted Darwin figure](https://reprap.org/mediawiki/images/2/25/SpoolHead_FinalReport.pdf): axis-labelled Cartesian overview; the wiki-hosted figure shows the XY carriage, Z bed, axes and nominal frame dimensions.

## Machine and operation

The wiki describes an XY moving deposition head and a Z-moving bed, driven by steppers. Two fixed extruders are described for build and support material. Nominal working volume is 230 × 230 × 100 mm; the design is adjustable. The build instructions are linked from the wiki. The source gives USB computer interfacing and 12 V DC power, but not a universal controller board.

## Pinout and diagram transcription

No universal connector pinout is specified because the wiki page describes a design family and does not bind it to one electronics revision. A separate [RepRap Stepper Motor Controller Card v1.2 page](https://www.reprap.org/wiki/DarwinStepperController_1_2) documents one electronics revision and its four-way stepper-motor socket order:

| Socket pin | Y/Z motor connection | X motor connection |
|---:|---|---|
| 1 | A | D |
| 2 | B | C |
| 3 | C | B |
| 4 | D | A |

The source describes a 2.54 mm-pitch 4-way socket and says three such controller cards are needed for the Darwin design. This is contact numbering for that card's motor socket, not a universal Darwin harness pinout or a claim that every build fitted this revision. The controller page separately lists PIC device pins; those MCU package pins are not machine connector contacts and are excluded from the machine wiring diagram.

The wiki-hosted machine figure labels the three axes and bed/carriage roles; it does not assign those machine features to the controller socket. Keep the controller-specific table separate from the machine mechanism diagram.

## Limits

Darwin is retained for historical reference. Build volume, electronics and wiring vary by build.
