# Snapmaker 2.0

**Evidence depth:** modular 3D printer / CNC / laser platform named in the wiki discovery section. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The Appropedia wiki names Snapmaker 2.0 as a model family with modes including milling and laser. The family has variants, but the wiki paragraph does not name a variant or describe connectors; identity remains family-level.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.

## Supplemental official-source review — accessed 2026-09-28

This section supplements the Appropedia identity lead above; it does not identify a model or installed revision for the captured machine. Snapmaker's official 2.0 manual index separates A150, A250, A350, A250T, A350T, F250 and F350 documentation, along with module and add-on guides. The index therefore confirms that “Snapmaker 2.0” covers multiple hardware configurations, but does not resolve which one the Appropedia row represents.

The official Snapmaker2-Controller Hardware-Link document (file revision `c016c84957c97b9724d465cb56b3165d5c96bd7a`, dated 2020-11-17) describes controller-to-module functions and communication transports. It documents wired step/direction/enable plus CAN for linear and rotary modules; the 3D module adds CAN services for identification, probe/filament sensing, nozzle temperature and fans; laser power is remapped from a step signal and its camera service uses UART remapped from enable/direction; CNC spindle speed and enclosure functions use CAN; the power module supplies 24 V and a wired power-loss signal. It separately describes controller-to-Luban USB/UART, controller-to-HMI UART/SSTP, HMI USB storage, and HMI-to-laser-camera Bluetooth.

Those are controller-firmware interface descriptions, not cavity tables. They give no connector contact count, mating view, cavity order, cable conductor schedule, or evidence that a module or add-on is fitted to the Appropedia machine. MCU GPIO names and firmware remapping are not physical cable pin labels. The official toolhead installation pages show distinct toolhead configurations and connection to a controller with a Toolhead Cable, but the retrieved page provides no conductor-level pin schedule.

**Contact disposition:** no source-matched Snapmaker machine contact positions, connector pins, routes, or guesses are established for this profile. The overview may name official family interface groups as reference-only cards with no contacts. Keep all positions and SmoothieBox paths OPEN until an exact model/revision connector diagram or harness pin schedule is found. The reviewed official sources do not identify a DB25 connector for this profile.

## Supplemental sources

- [Snapmaker 2.0 official manual index](https://wiki.snapmaker.com/en/Snapmaker_2/manual) — variant-specific manuals and module/add-on coverage.
- [Snapmaker 2.0 toolhead installation](https://wiki.snapmaker.com/en/Snapmaker_2/manual/install_toolhead) — model-specific toolhead cable installation, without contact numbering.
- [Snapmaker2-Controller Hardware-Link.md at pinned revision](https://github.com/Snapmaker/Snapmaker2-Controller/blob/c016c84957c97b9724d465cb56b3165d5c96bd7a/docs/Hardware-Link.md) — logical interface and transport descriptions.
- [Snapmaker2-Controller official firmware repository](https://github.com/Snapmaker/Snapmaker2-Controller) — firmware project scope; not an installed-board or harness identification.

## Secondary community pin sketch — unverified reference, not fitted evidence

A Snapmaker community forum reply dated 2020-09-10 contains an ASCII connector sketch captioned as the Snapmaker 2.0 connector pinout. It depicts eight labeled positions: `24V`, `DIR`, `CAN_L`, `NC`, `EN`, `STEP`, `CAN_H`, and `GND`. This is a secondary-source lead, not a manufacturer drawing: it does not state a model/board revision, a numbered cavity scheme, an unambiguous mating-face orientation, or whether it describes the Appropedia machine. The sketch supports retaining these eight reported labels as unnumbered community function/mark references only. It does not establish X/Y/Z assignment, installed fitment, SmoothieBox compatibility, or any route. The `NC` label is only the forum author’s marking and is not adopted as an independently verified no-connect condition. Keep all eight unrouted and explicitly unverified.
