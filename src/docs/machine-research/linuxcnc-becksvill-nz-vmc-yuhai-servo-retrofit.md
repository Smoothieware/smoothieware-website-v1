# Becksvill's New Zealand vertical machining centre with LinuxCNC and Chinese servo drives

**Machine identity:** An unnamed vertical machining centre (VMC) in New Zealand, documented by forum member Becksvill / Andrew. He says it originally had a Heidenhain control; the maker, model, year, travels, spindle rating, and exact servo-drive model are not established in the thread. A photo shows the original Heidenhain display, while the owner attributes a major electrical failure to a possible lightning strike (his hypothesis). He stripped the control and retrofitted Chinese servo drives with LinuxCNC and Mesa hardware. The thread later calls the drives Chinese copies of Yaskawa Sigma 2 drives, and the owner says the manual contains a Yaskawa-name typo. Do not treat that comparison as proof of electrical or tuning compatibility with a particular Yaskawa model.

**Novelty check:** On 2026-09-23, the flat dossier directory, separate wiki dossier directory, and local survey HTML were searched for `Becksvill`, the thread title, and the named Mesa/servo combination. No dossier for this individual retrofit was found. This records the specific build, not a claim that the VMC family is undocumented everywhere.

## Retrofit architecture reported by the owner

The initial LinuxCNC hardware was a Mesa 5i25 plus 7i76. The 7i76 field I/O was powered from 24 V DC; its 5 V logic supply came from the 5i25 by jumper. The machine uses step-and-direction commands to the servo drives. The drives close their own servo loops, and the owner temporarily routed a drive's encoder output to the 7i76 spindle-encoder input so he could observe following error in LinuxCNC Halscope while tuning. He planned to add a Mesa 7i89 for permanent encoder feedback and a 7i84 for extra I/O; the thread documents those as planned parts at that point, not proof they were installed.

The owner also reported wiring a Chinese MPG into the 7i76 MPG counters. The MPG he had was described as a 12 V unit, while his available machine/control supplies were 5 V and 24 V. He says he used a small voltage-converter chip so it could operate from the available 24 V supply. The thread does not identify the converter part number, MPG model, input circuit, or full pin-to-pin wiring, so this is a build report rather than a reproducible wiring diagram.

The machine's VFD direction needed an interposing relay in this installation, according to the owner, because the 7i76 did not connect to that VFD's direction input in the way he wanted. The thread does not identify the VFD model or relay contacts. His later note says he had increased spindle-VFD acceleration, but provides no parameter values.

## Servo encoder and connector evidence

The owner describes the drive encoder output as standard 5 V differential A, B, and Z signals: three complementary pairs, six signal wires total. He says the encoder is powered by the drive and that he temporarily used the spindle encoder input on the Mesa 7i76. This describes his drive and test arrangement; it does not identify terminal names or numbers at either end, cable part numbers, a verified shield termination diagram, or the electrical details of every axis.

The thread includes a two-page screenshot from a drive manual, posted in response to a request for information about the servos. The screenshot's subsection heading says **CN3**, but its page heading says **“I/O Signal Connector (CN1)”**. The copy's exact drive model and revision are not legible or established. It therefore cannot safely be assumed to be the manual for the installed drives merely because it was posted in this build thread.

| Manual screenshot row | Contact shown | What the screenshot labels | Evidence limit |
|---|---:|---|---|
| `/ALM+` / `/ALM−` | 5 / 20 | Servo alarm output | Generic attached manual screenshot; installed-drive applicability unverified |
| `/SO2+` / `/SO2−` | 22 / 37 | General-purpose sequence output 2; function is parameter-assigned | Output polarity/configuration and installed drive revision unverified |
| `/SO3+` / `/SO3−` | 23 / 38 | General-purpose sequence output 3; function is parameter-assigned | Output polarity/configuration and installed drive revision unverified |
| `FG` | shell | Frame ground | Screenshot says connection depends on the signal cable; it does not document this machine's grounding scheme |

An earlier pass omitted the input and encoder-output rows. The reinspection below records every clearly printed contact, while retaining the screenshot's own conflicts and the unverified installed-drive scope. The forum post does not provide a machine-specific cabinet map or a complete schematic.
 
### Reinspection of every readable manual-screenshot contact

Checked 2026-09-26 against the owner's [posted two-page manual image](https://forum.linuxcnc.org/media/kunena/attachments/24947/yuhaiservodriveencoderconnections_2020-05-06.jpg), whose downloaded bytes have SHA-256 `f08003a8a5720a1391c89cb9d16cf5f183dc395bbb80c74d2a543f40582cf87c`. The page body calls the I/O connector **CN3**, while its running header calls it **CN1**. It prints 31 distinct numerical positions, plus an FG shell mark, across the two visible pages; this is a list of **printed reference positions**, not a claim that the pictured connector has only 31 contacts or that this is the fitted drive revision. The owner's post links a “yuhau servo” manual, and the screenshot itself names **YUHAI** in the `+24VIN` row. That supports the manual's source identity, but still does not prove the label/model on every installed drive.

| Manual-screenshot section | Readable contact numbers and printed signals | Limit |
|---|---|---|
| General inputs | 7 `/SI0` (`/S-ON`), 8 `/SI3` (`/P-CON`), 9 `/SI1` (`/P-OT`), 39 `/SI2` (`/N-OT`), 26 `/SI5` (`/P-CL`), 41 `/SI6` (`/N-CL`), 25 `/SI4` (`/ALM-RST`), 24 `+24VIN`, 30 `SEN` | Parentheses are defaults or modes in the printed table, not confirmed cabinet assignments. |
| Speed/position/torque reference inputs | 1 (16) `V-REF`; 19 `PULS`, 4 `/PULS`; 18 `SIGN`, 3 `/SIGN`; 40 `CLR`, 24 `/CLR`; 2 (11) `T-REF` | The parenthesized 16 and 11 are alternate numbers without enough page context to select a physical connector variant. Pin 24 is **also** printed as `+24VIN`; it must not be wired from this screenshot. |
| General outputs | 5 `/ALM+`, 20 `/ALM-`; 22 `/SO2+`, 37 `/SO2-`; 23 `/SO3+`, 38 `/SO3-`; 6 `/SO1+`, 21 `/SO1-` | SO outputs have mode-specific/default assignments; the actual servo parameters are unknown. |
| Divided encoder outputs | 10 `PAO`, 11 `/PAO`, 12 `PBO`, 13 `/PBO`, 14 `PCO`, 15 `/PCO` | Pin 11 also appears as the alternate `T-REF` number. Mode/connector applicability is unresolved. |
| Shield | `FG` at the connector shell | Shell is distinct from a numbered signal cavity; the photo does not establish this machine's shield bond. |

The SVG's reference card lists each of the 31 distinct printed numbers once. The combined pin-24 and pin-11 labels carry the screenshot conflicts; no conductor, return, electrical interface or SmoothieBox route is selected. The original post identifies step/direction control and temporary differential encoder observation at a Mesa 7i76, but it does not map the cabinet wires onto these printed manual positions. The remaining connector positions are not enumerated by the screenshot and must be checked against a revision-matched complete manual and the actual drive label before any wiring use.

The owner asked how to route the three differential encoder pairs and whether signal ground was needed. Other forum participants answered that the six differential wires could be tried without a separate ground and discussed shield termination. Those are forum replies, not a verified schematic or general wiring rule. The owner later said he thought he had resolved his grounding issue, but explicitly qualified that report with “I think.” Treat the actual shield/chassis/0 V arrangement as undocumented.

## Tuning and observed operation

The owner reports an X step scale of 0.001 mm per step and an encoder scale of 6250 pulses per revolution after ballscrew pitch and x4 multiplication. These are his configuration values for that axis and encoder calculation, not independently checked machine calibration data. He also recalled a factory positional-accuracy figure of 0.003 mm and said he hoped to get the retrofit to 0.005 mm; the thread does not identify the original specification document or verify either figure.

His tuning process was constrained by difficulty getting the drive configuration software to connect. He instead read drive encoder feedback into LinuxCNC and used Halscope to view following error while changing parameters in the drive. He describes the drives as having nested position, velocity, and torque loops with a PIV-type controller and no D term. He reports first-axis tuning took four days and later tuning the Y axis took about 1.5 hours. These are owner observations; the thread does not supply a complete parameter set or validated tuning procedure.

He reported a maximum following error of about 2 mm at 8 m/min rapid before tuning. After tuning, he says he achieved about 0.004 mm in one configuration, but a ballscrew resonance/noise trade-off led him to increase the torque-filter time constant; he then reported about 0.01 mm following error at normal cutting feeds. A separate June update again reports Halscope showing about 0.01 mm at normal feed speeds while accuracy tests were still in progress. These are controller trace/owner reports, not a measured positioning-accuracy certificate. The owner also reported that the Z axis had higher friction and ballscrew twist that complicated tuning.

The machine was making parts during the thread. In May 2020, the owner said he had run a first part with Probe Basic after using AXIS, recommended getting the machine working under AXIS before changing interfaces, and showed toolholder-rack machining. In June, he described cutting injection-mould parts and said the mill completed the job without a fault, while noting the parts were not perfect. Earlier, he reported machining 100 chainsaw bars and found ordinary carbide wore quickly on the hardened stock; he said a coated cutter lasted better. The thread does not give a complete feeds-and-speeds recipe or enough stock/tool detail to reproduce those jobs.

## Forum photographs and visual reading

The original machine-control display is a Heidenhain screen, consistent with the owner's description of the starting control. It is not a pinout or a diagram of the retrofitted electronics.

![Original Heidenhain control display shown by Becksvill](https://forum.linuxcnc.org/media/kunena/attachments/24947/20171205_153250.jpg)

This enclosure photograph gives a broader view of the VMC work area and table. The image does not reveal the machine make/model or measured travel.

![Becksvill's VMC table and enclosure](https://forum.linuxcnc.org/media/kunena/attachments/24947/IMG_20200427_122839.jpg)

The following photograph shows the retrofit control cabinet area with multiple drive/electronics modules, wiring ducts, and conductors. Component labels and terminal numbering are not sufficiently readable to derive a wiring map from this image.

![Becksvill's retrofit electronics and wiring area](https://forum.linuxcnc.org/media/kunena/attachments/24947/IMG_20200330_181950.jpg)

The attached manual screenshot is useful for reading selected signal names and contact numbers, subject to the connector-heading and model/revision caveats above. It is not proof that these pins were used on the machine.

![Drive manual I/O connector table posted in the forum thread](https://forum.linuxcnc.org/media/kunena/attachments/24947/yuhaiservodriveencoderconnections_2020-05-06.jpg)

The owner also posted LinuxCNC/Halscope screenshots while tuning. The traces illustrate the owner's comparison of commanded movement and following error; their display scale alone cannot establish dimensional accuracy.

![Halscope following-error plot posted during servo tuning](https://forum.linuxcnc.org/media/kunena/attachments/24947/ytuningat8m.png)

![Later servo-tuning Halscope screenshot](https://forum.linuxcnc.org/media/kunena/attachments/24947/finaltuning.png)

The forum later shows machined parts and a toolpath. Those pictures demonstrate reported use of the mill, not tolerance verification.

![Machined parts shown by the owner after a job](https://forum.linuxcnc.org/media/kunena/attachments/24947/IMG_20200603_135114.jpg)

Reviewed local copies (not committed): manual screenshot SHA-256 `f08003a8a5720a1391c89cb9d16cf5f183dc395bbb80c74d2a543f40582cf87c`; original display `6d5542fc8faa514802b797fd7ad9ece11128556661282e76dcaa84e55c369b9f`; cabinet-area photo `95c3c05e14c59056083e80b1fa5e57a2cea9905ada1c56dbb0f97ccf66c9239a`; machined-part photo `440a6468c6fcd646531a2f8af67d8f047e622745c08bd66425da96659bb82775`. Halscope plot copies were also visually inspected. All visuals remain hosted by the forum and can change or disappear.

## Information not established

The thread does not establish the VMC's manufacturer/model, machine travel, spindle rating, installed servo SKU, drive/motor/encoder part numbers per axis, definitive drive-manual revision, axis-by-axis I/O assignments, full 7i76 terminal mapping, complete VFD circuit, homing/limit/probe wiring, safety relay/E-stop chain details, protective-earth and shield-bonding diagram, or calibrated positioning accuracy. The forum includes advice from experienced participants, but it is not a substitute for the machine and drive manufacturers' manuals. Do not wire from the provisional manual rows above without first matching the actual drive label, connector, manual revision, and machine schematic.

## Forum source

LinuxCNC Forum, Becksvill, [“Vertical Machining Centre Retrofit with Chinese Servo Drives Build Thread (NZ)”](https://forum.linuxcnc.org/show-your-stuff/39021-vertical-machining-centre-retrofit-with-chinese-servo-drives-build-thread-nz), especially posts #166817, #166832, #166834, #166914–#166941, #167211, #167249, #167321–#167323, #168096, #169888, and #169903 (May–June 2020). The owner supplies the retrofit configuration, connector questions, encoder/tuning reports, and machine-use updates; other members' replies are distinguished above as forum advice.
