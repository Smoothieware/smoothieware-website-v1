# Dishtech55’s 4 × 10 ft home-built plasma table

**Machine identity:** Dishtech55’s individual home-built CNC plasma table, documented in a PlasmaSpider project thread beginning in February 2021. The owner describes it as a 4 × 10 table and says it replaced two unsatisfactory new tables. The table is a distinct physical build, not a commercial model.

**Novelty check:** Repository search on 2026-09-23 for `Dishtech55`, `My New Built 4x10 Plasma Table`, and thread ID `32000` found no existing machine dossier.

**Build/use state:** The owner reports building it in about a month, completing paid cutting work, cutting sheet from 20 gauge through 1/2 inch, and continuing to use it after two years. These are the owner’s reports, not independent measurements.

## Owner-reported configuration

| Area | Details from the owner | Limits / conflicts |
|---|---|---|
| Table | 4 × 10 ft home-built table. Owner identifies 3 × 6 in T-slot aluminum extrusion and describes structural sections as “4x4” with “one 3x3 for support on legs.” | The phrasing does not make clear whether “4x4”/“3x3” describes frame dimensions or member sizes. No cut-ready drawing or measured travel is supplied. |
| Rails and bearings | Speed Demon / SGR-25 style three-bearing rails and SGB-25 blocks, ordered by the owner for this build. The owner reported being happy with them over multiple years and said they remained flawless. | The owner gives differing capacity estimates in separate posts: about 460 lb initially and about 340 lb in a later reply. Treat both as unverified owner estimates; neither establishes an actual load rating for this installation. |
| Drive | CNC Router Parts rack-and-pinion drives with 3:1 reduction, NEMA 23 motors described as “425 oz.” | The post does not explicitly state oz-in, so the original rating wording is retained. No drive model, motor wiring, current, or axis assignment is given. |
| Controller / THC | Proma MyPlasm controller with torch-height control (THC). The owner chose it after considering other control boards and said it made it easy to stop and resume a cut file. | Exact MyPlasm hardware revision, firmware/software version, wiring, torch-height signals, and motion IO are not given. The owner’s positive assessment is personal experience. |
| Operator interface | Wireless gaming controller, which the owner says they use while cutting. The owner later says MyPlasm uses DXF files. | The thread does not show the controller mapping, software workflow, or how DXF files are converted/loaded. |
| Plasma source and air | Hypertherm Powermax 45XP; owner says they use dry air and find consumables last a long time. | No cut chart, amperage, air pressure, torch interface, or material-specific settings are supplied. |
| Reported work | Owner reports smooth cuts without sawtooth edges; in a one-year update, reports cutting from 20-gauge sheet to 1/2-in plate. A 2023 update says they had cut many sheets, mostly smaller items, and the table continued working without issues other than user errors. | No independent cut-quality measurement or specific feed/current settings are reported. Do not turn the owner’s qualitative result into a machine capability guarantee. |
| Build time and historical cost | Owner initially estimated about one month and roughly $5,000 including a $2,600 cutter; a later 2022 update gives $5,200 for the table and new 45XP. | These are dated estimates from different posts and may use different accounting; they are not current prices. |

## Forum visuals

The opening owner post includes multiple attached table photos. The forum page’s attachment links returned cache-miss on direct retrieval, so the image pixels could not be inspected. The images remain available from the [owner’s original forum post and its attachment list](https://plasmaspider.com/viewtopic.php?t=32000).

## Pinout and operating-information gaps

The source identifies the controller, THC, rail/drive family, motors, and plasma source, but it does not provide a connector pinout, controller terminal map, torch interface circuit, THC-to-motion signals, e-stop chain, stepper-driver model/settings, home/limit wiring, or detailed cutting parameters. It is not sufficient to reconstruct the electrical system or reproduce the owner’s process.

## Source

1. PlasmaSpider DIY Plasma Table & Accessory forum, Dishtech55, [“My New Built 4`x10` Plasma Table..Works Awesome”](https://plasmaspider.com/viewtopic.php?t=32000), opening post dated 20 February 2021 and owner updates dated 22 February and 14 September 2021, 30 April 2022, 22 March 2023, and 1 June 2023. The owner posts describe the extrusion, rails, rack-and-pinion reduction, motors, MyPlasm/THC, wireless game controller, Powermax 45XP, air, reported sheet range, maintenance experience, and historical build cost. Other posters’ opinions about rails or dust are not treated as facts about this machine.
