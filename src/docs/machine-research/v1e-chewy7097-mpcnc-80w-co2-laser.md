# Matthew Lawrence’s MPCNC Primo with an 80 W CO₂ laser

**Machine identity:** Matthew Lawrence (`Chewy7097`)’s individual V1 Engineering MPCNC Primo in Michigan, first described as a multi-tool router/laser platform and later converted to use an 80 W CO₂ laser tube. Count this as one physical machine with successive tool configurations, not separate MPCNC and laser machines.

![Laser-cut parts shown in the owner’s August 2021 proof post](https://us2.dh-cdn.net/uploads/db5587/original/3X/8/2/82fc21621fec2f0af0d3afe4e9540c0ed7889ffa.jpeg)

*Forum attachment following the owner’s post that presents proof of the CO₂ setup after mirror alignment. The image shows a set of cut/engraved-looking parts; the photograph itself does not establish material, settings or dimensional accuracy.*

![Additional output from the same proof post](https://us2.dh-cdn.net/uploads/db5587/original/3X/3/c/3c03ada19eaf3952fa33c9fdecf402882be3f08d.jpeg)

*Owner-posted output photograph. These images do not show the complete machine, wiring or safety enclosure.*

## Owner-reported build and operation

- On June 22, 2021, the owner said the project began with a 7.5 W diode laser on a gantry made with rollers and 2020 extrusions. He moved to an MPCNC Primo after wanting a variable-Z arrangement. These are successive stages of the same project history in the thread.
- He reports using standard conduit and sizing the Primo for a 24 × 24 in build area. The table is described as about 36 × 36 in, with 2 × 4 legs and a 3/4 in MDF top. The 24 in figure is owner-reported build area, not independently measured travel.
- Before the CO₂ conversion, he reports trying a Dremel mount for engraving glass and aluminum, a Makita router mount, a custom diode-laser mount and a drag-knife holder. The thread does not establish that all tools were attached or operated simultaneously.
- For the CO₂ conversion, he says he ordered an 80 W tube, high-voltage power supply, chiller, mirrors, lenses and hoses, along with a BigTreeTech SKR 1.4 board. The thread does not identify the tube or PSU make/model or publish a wiring diagram.
- While routing a Y-axis stepper wire near the joined positive laser cable, the owner reports an arc that destroyed that stepper and damaged the SKR 1.4. He then reinstalled the SKR 1.2 supplied with the original MPCNC kit, changed its configuration and resumed operation. This is an incident account, not a wiring procedure; no contacts, voltages at connectors or protective circuit are documented.
- The owner describes using a Marlin build configured for the machine. Exact Marlin version, configuration file, step/dir pin assignment, laser enable/PWM mapping, and firmware settings are not provided.
- The owner states that alignment and stiffness were ongoing issues: the second mirror was mounted on an X stepper motor, and he believed the truck twisted, requiring daily mirror realignment and leaving alignment “very close” rather than perfect. That cause is his assessment, not a measured diagnosis.
- The initial post lists incomplete work: finish the enclosure, install a flexible exhaust duct and 240 CFM fan, adjust the laser-head mount, replace printed tube mounts, and improve cooling for hot-weather use. He mentioned a passive CW3000 chiller initially, then on August 5 said he had upgraded to a CW5200 and that cooling was “all well.” The forum evidence does not confirm completion of the listed enclosure/exhaust work.
- On August 5, 2021, after realigning the mirrors, he posted proof including two videos and three photographs. A reply from the V1E designer said the work looked good, but no material, speed, power setting, cut depth or independent safety assessment is documented.

## Configuration evidence and gaps

| Subsystem | Owner-reported evidence | Not established by this thread |
|---|---|---|
| Motion platform | MPCNC Primo; standard conduit; reported 24 × 24 in build area; approximate 36 × 36 in table. | Exact tube dimensions, actual travel, measured rigidity, steps/mm and axis homing configuration. |
| Laser | Nominal 80 W CO₂ tube, PSU, mirror train, lens/head, hose and air assist. | Manufacturer/model and ratings of tube/PSU, supply input wiring, laser tube pinout, interlocks, cooling flow/temperature instrumentation or verified output power. |
| Motion control | SKR 1.4 was installed, then damaged in reported arcing incident; original SKR 1.2 was reinstalled and reconfigured. Marlin used. | Full board revision, exact firmware release/config, connector pin assignments, stepper driver settings, laser enable/PWM outputs or wiring. Do not infer these from other SKR/Marlin machines. |
| Cooling and exhaust | Initially a CW3000; owner later says CW5200 upgrade resolved cooling for his use. Initial plan included a 240 CFM fan and flexible exhaust duct. | Whether enclosure and exhaust were completed, monitored coolant performance, or exhaust routing. |
| Optical alignment | Owner reports a second mirror supported from an X stepper motor and daily realignment due to suspected gantry/truck twist. | Measured movement, a final structural fix or repeatable alignment result. |

**No connector-level pinout can be reconstructed from this thread.** The account contains one significant high-voltage arcing incident, but no complete schematic or evidence of completed guarding/interlocks. Do not use it as a build or safety guide.

## Forum source

V1E.com Forum, Matthew Lawrence (`Chewy7097`), [“80 Watt C02 Laser”](https://forum.v1e.com/t/80-watt-c02-laser/28087), owner posts dated June 22 and August 5, 2021 (posts 1 and 3). The title spells “C02”; the owner’s body text identifies a CO₂ tube. Post 1 supports the platform dimensions, purchased equipment, initial controller choice, reported arcing incident, return to SKR 1.2, Marlin use, mount/alignment problems and unfinished safety work. Post 3 supports the CW5200 update and published laser-output proof. Other forum replies are not treated as evidence about this machine’s wiring or performance.

## Novelty and scope

Searches of repository Markdown and HTML for `Chewy7097`, `Matthew Lawrence`, `80 Watt C02 Laser`, and the thread ID found no matching dossier. The current research README lists other V1E builds, including a different large CO₂-laser project and other individual MPCNC builds; this owner/thread and conversion history appear distinct. This text search is a candidate-level novelty check, not a guarantee against all aliases or undocumented history.
