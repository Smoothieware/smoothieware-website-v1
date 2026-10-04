# Denford CNC 2600 Pro — London Hackspace

## Historical first-pass note · 2026-09-23

The original wiki-only dossier is preserved verbatim here; the source PDFs had not yet been independently read in that pass.

```markdown
# Denford CNC 2600 Pro — London Hackspace

**Wiki evidence status:** machine-specific page identifies a Denford 2600 Pro. The wiki records a planned MESA/LinuxCNC conversion and says the installed version differed from a linked “Design B” schematic; commissioning status is therefore unresolved.

## Machine identity and use boundaries

London Hackspace identifies the model as “2600 pro,” donated to the space. The page says it is in the woodshop and limits the machine to non-metal materials; liquid and mist coolant are prohibited. ER20 collets are used and users supply their own tooling. The page lists dust extraction as unresolved/planned and marks induction as TBD.

## Controller and documented retrofit state

The page's next steps list installing a MESA board and configuring LinuxCNC. Other headings list MESA 7i76E manuals/connection material and schematics, but one note warns that the provided Design B schematic may differ from the installed Version A. The page also mentions Baldor VS1ST Micro-Series VFD and MSD556 V2.0 stepper-drive documentation, and says the original controller was a Baldor Nextmove. These records do not establish that the MESA conversion was completed.

## Pinout evidence

The wiki links an E-stop relay diagram, cabinet wiring and a Design B schematic, and explicitly warns of a possible A/B revision mismatch. Since the actual installed revision and complete diagrams were not independently read in this pass, **no terminal or connector pinout is transcribed**. The planned MESA I/O must not be treated as commissioned or wired from a linked manual alone.

## Source

- [Denford CNC 2600 — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Denford_CNC_2600) — exact model, material restrictions, ER20 collets, controller/retrofit notes, and schematic-revision warning.
- [Category:Equipment — London Hackspace Wiki](https://wiki.london.hackspace.org.uk/view/Category:Equipment) — catalogue corroboration of “Denford CNC 2600.”

**Unknowns:** installed controller now, completion of the MESA/LinuxCNC retrofit, Version A cabinet wiring, and any verified pin-by-pin I/O assignment.
```

## Current source audit · 2026-09-27

### Applicability boundary

The current London Hackspace machine page now reports the equipment “functional” (revision 57156, 2026-07-05 15:06:02 UTC), while its Next steps and LinuxCNC section still say to install the MESA board and configure LinuxCNC. The same page calls Design MRP-0850B “version B” and warns “we have version A so there maybe some differences.” Accordingly, the wiring records below are a **documented original Baldor-controller reference**, not proof that the original configuration remains installed, that the MESA conversion happened, or that this version-B schematic matches the cabinet.

The London Hackspace Cabinet Wiring page (revision 54936, 2022-03-14 23:19:26 UTC) supplies named connector positions and wiring notes for the original control board, relay/power board, Baldor VS1ST spindle drive and MSD556 stepper drives. Its controller numbering note says connector pins start at the bottom-right power pin and proceed clockwise; the drawing gives no mating-face view. The cabinet page leaves several safety/limit mappings marked `??`, `Example`, or blank. These stay unresolved. No axis-to-individual-driver mapping, motor coil pin order, limit switch NO/NC state, installed connector orientation, or installed controller revision is verified.

The linked MSD556 V2.0 Rev. 3.0 datasheet describes isolated pulse/direction/enable inputs and supply/motor contacts. The Cabinet Wiring page gives numbered assignments for only control pins 1–4 and power/motor pins 1–6 on its depicted drive connector and records a common +5 V at Baldor board J2 pin 6. It does not give an axis-specific mapping from Baldor outputs to each physical drive. The diagram therefore presents one unassigned-axis drive-interface reference and does not replicate it into guessed X/Y/Z/A harnesses.

The VFD wiring table identifies Baldor VS1ST control pins 1, 2, 6, 7, 10 and 11 and maps control-board J5 pins 11/12 to VFD pins 7/6. Its linked manual describes the control strip, but this record does not wire mains or spindle outputs. The MRP-0850B relay schematic is explicitly revision B and is not treated as the installed machine schematic. The one-page E-stop relay-contact PDF is a photographed board with handwritten observations; it does not provide a stable mating-face or cavity numbering system. Retain only the contact labels and mappings explicitly transcribed on Cabinet Wiring.

### Machine-side contact inventory

The incremental SVG contains these **source-labelled reference positions** from the Cabinet Wiring tables, grouped by the connector named by the source:

| Source group | Count | Scope |
|---|---:|---|
| Original Baldor control board J1–J3 | 11 | Selected power, analog/common and digital input contacts explicitly numbered by the wiki |
| Original Baldor control board J5–J9 | 22 | Selected spindle analog, E-stop/limit input, brake output, pump/door relay and panel-pot contacts explicitly numbered |
| Relay/power board J1, J8, J10–J13 | 26 | Only explicitly numbered table positions; `Example` rows and unspecified positions are excluded |
| Baldor VS1ST control terminal strip | 6 | The six positions listed in the Cabinet Wiring VFD table |
| MSD556 drive P1 control / P2 power and motor | 10 | Only the four numbered control contacts and six numbered supply/motor contacts in the Cabinet Wiring table |
| **Total** | **75** | Reference contacts; no fitted-machine or SmoothieBox wiring claimed |

The figure uses no dashed/dotted wiring guesses and assigns no SmoothieBox exterior screw. All candidate paths remain OPEN because the current controller/drive revision and continuity are not verified, and the sources do not qualify SmoothieBox I/O levels, polarity, timing, isolation, or safety interface for these machine contacts. In particular, do not connect controller logic directly into E-stop/guard circuits, VFD/mains/spindle conductors, or the +37 V stepper rail based on this map.

### Source revisions and captured bytes

- [Denford CNC 2600 — London Hackspace](https://wiki.london.hackspace.org.uk/view/Denford_CNC_2600), page revision 57156, `2026-07-05T15:06:02Z`.
- [Cabinet Wiring — London Hackspace](https://wiki.london.hackspace.org.uk/view/Cabinet_Wiring), page revision 54936, `2022-03-14T23:19:26Z`.
- [MRP-0850 E-stop relay contacts](https://wiki.london.hackspace.org.uk/view/File:MRP-0850_ESTOP_relay_contacts.pdf), captured PDF SHA-256 `037a98b389cafe4eb33f9ba38ca29c154f99762009c6405445a144c4cd7de0d6`.
- [Schematic Design MRP-0850B](https://wiki.london.hackspace.org.uk/view/File:Schematic_Design_MRP-0850B.pdf), captured PDF SHA-256 `626dea99d75777fe207dcfefebe0646f086f4cbb710c5bc9b0b022f7d5a87bbb`; title block says Universal Router PCB, drawing MRP/0850B, revision B.
- [Baldor VS1ST Micro-Series Manual](https://wiki.london.hackspace.org.uk/view/File:Baldor-VS1ST-Micro-Series-Manual.pdf), captured PDF SHA-256 `fc7c766e825535ad54bf3d269e3954f3f5322d4f3b5e15482d41519c469788d4`.
- [MSD556 V2.0 stepper-drive datasheet Rev. 3.0](https://wiki.london.hackspace.org.uk/view/File:MSD556-V2.0_stepper-drive-datasheet-v3.0.pdf), captured PDF SHA-256 `3baa3a65a776bd9479f40444201393b71f64d3c47f497e153c21431e8f5f674b`.
- [Router 2600 Pro Operator Manual](https://wiki.london.hackspace.org.uk/view/File:Router_2600_Pro_Operator_Manual.pdf), captured PDF SHA-256 `8757ff477afe645aff526826831a3114aae38803df4dfb001fff079f16b23ced`.
- [NextMove ST Installation Guide](https://wiki.london.hackspace.org.uk/view/File:NextmoveST-Installation-Guide.pdf), captured PDF SHA-256 `d6763990d40002c7c4bd3198a5221e003dfc1278a51d2bced055bda8b6bff8af`.
- MESA 7i76E manual and connection guide are linked as retrofit-planning material only; they are not used to assign this machine's installed contacts.

### Unresolved facts

Current controller and drive revisions; whether the MESA 7i76E retrofit was completed; whether any specific MSD556 drive corresponds to X, Y, Z, or a fourth axis; board-side mating-face orientation; machine-side switch contact state; unknown limit switch-to-input assignments; exact relay-board positions hidden as `Example`; and all SmoothieBox electrical compatibility and safety requirements.


## Supplemental source audit · Baldor VS1ST terminal strip · 2026-09-27

The previously transcribed VS1ST strip was incomplete. Baldor manual MN767, Table 1-1, page 1-4 enumerates all eleven control terminals. The reference inventory now shows 1 through 11 individually. Terminal 10 is **Relay Common**; terminal 11 is the **Relay N.O. Contact** (rated 250 VAC at 6 A or 30 VDC at 5 A), not two unspecified normally-open contacts. Terminals 7 and 9 are both Common and the manual says they are connected. Terminals 3, 4, 5, 8 and 9 were added from that table; the existing Cabinet Wiring cross-references remain source-labelled.

This manufacturer manual establishes the model's terminal names and ratings only. It does not establish the installed VS1ST exact variant, terminal continuity or wiring; all eleven contacts remain OPEN to SmoothieBox. The source inventory increases from 75 to 80 reference contacts across 17 groups.
