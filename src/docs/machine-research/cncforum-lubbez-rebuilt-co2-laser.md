# Lubbez's rebuilt enclosed CO₂ laser

**Machine identity:** an unidentified, heavy enclosed CO₂ laser cabinet rebuilt by CNC Fórum member `lubbez`. The forum does not establish an original make/model.  
**Evidence state:** the owner reported completion and functional control in December 2023, then a first cut in 3 mm birch plywood in January 2024. The later report still lists final lens replacement/optical alignment as ongoing.  
**Novelty check:** searches of `src/docs/` and `docs/` text on 2026-09-23 for `lubbez`, `MPC6525`, and the thread/machine identifiers found no match outside this research directory. This is a text search, not proof that no unrelated page describes similar equipment.

## Build and mechanical arrangement

In the opening post, `lubbez` says he acquired a cabinet from another workshop. He estimates the main enclosure at about 900 × 500 × 500 mm, with a rear extension around 170 × 300 mm. The cabinet is described as 1.5 mm sheet with reinforcing pieces; three people were needed to load it. This is a cabinet rebuild and controller retrofit, not a new frame designed from scratch.

The owner says the motion uses stepper motors and belts, not ballscrews. The work area is described as a separate compartment, connected to the electronics/tube area by an 8 mm hole. He considered accommodating larger tubes, but the post does not establish the rating of the installed tube. A later update describes the original tube as Chinese and says the mounting supports can take a 60 mm diameter tube; these are not evidence of an installed 60 W tube.

The owner rebuilt the front control panel because the original long membrane control panel was impractical to replace. He removed and mapped the original panel, designed a new board and faceplate, fitted pushbuttons and a milliammeter, and mounted the controller in a separate box at the cabinet bottom because there was insufficient room behind the display.

## Electronics, cooling, and control

The original controller was described as unsuitable because it controlled a metal tube. The owner selected a **Leetro MPC6525**, citing prior experience and a preference for its physical button panel. He reports adapting signal interfaces, completing the button panel, and having the machine mechanics move. By 20 December 2023 he reported the high-voltage side and laser-source control working, plus tube cooling with a flow monitor and a door-contact switch.

He reports doing the complete wiring without a schematic. During final setup he found that two 12 V fans had been wired in parallel to 24 V; he corrected them to series and replaced a 24 V supply with a 5 A version. This is a post-specific account of his correction, **not** a general wiring recommendation.

For cooling, he first described a 20 L stainless vessel and pump, then the January 2024 update says he used a 30 L stainless vessel from his previous laser. The thread therefore records a revision; the later 30 L report is the more recent state. The owner also describes adding a water-flow monitor and a temperature alarm. Exact pump, flow threshold, alarm setting, tube model, power supply model, controller I/O assignments, and protection circuit are not specified.

## Optics, extraction, and reported use

The owner designed the final 90-degree beam turn around an inverted laser-head carriage so the bend is mechanically fixed; he says alignment is then mainly through the first mirror and tube position. He was considering an infrared mirror and visible red aiming beam, but the thread does not confirm that option was installed.

On 20 December 2023 he reported that the laser worked, that optical adjustment and PC communication were complete, and that he was still finishing the exhaust and machine-location setup. On 5 January 2024 he reported a first cutting test in 3 mm birch plywood, a strong smell in the studio, and further work on extraction. He thought the installed lens might be 63 mm focal length despite expecting 50 mm, and said he had ordered a 76 mm lens. The thread does not provide a validated feed/power recipe or establish that the lens change and final mechanical calibration were completed.

Later in the same thread, the owner describes a three-version filter using filter fleece followed by a mesh cassette filled with activated-carbon pellets, and says he replaces the fleece several times per year and the carbon roughly every 18 months. These are his reported practices and experience, not independent performance measurements.

## Pinout and safe-use limits

The thread contains no complete controller connector map, terminal-by-terminal wiring diagram, power-supply signal assignment, or verified interlock schematic. The owner explicitly says he wired the system without a schematic. Photos of the panel and internal assembly are not enough to infer electrical connections. No actionable wiring instructions can be derived from this dossier.

Do not treat the candidate 60–80 W tube capacity as the installed configuration. The thread does not identify the installed tube/source rating, laser power settings, interlock logic, flow-switch setpoint, enclosure leakage performance, or a repeatable material recipe. The first-cut update itself says extraction needed improvement.

## Forum visuals

The original thread embeds owner-posted photos of the cabinet, control panel, controller enclosure, tube area, mirrors, filter, and first birch cut. The forum attachment links were exposed, but I could not reliably retrieve and inspect the image pixels in this research pass; captions and image names are therefore not presented as image-analysis findings. See the [illustrated build thread](https://forum.strojirenstvi.cz/viewtopic.php?t=45004), especially the owner's posts dated 13–14 November, 22–26 November, 20 December 2023, and 5 January 2024.

## Forum sources

1. CNC Fórum, `lubbez`, [“Stavba CO2 laseru”](https://forum.strojirenstvi.cz/viewtopic.php?t=45004), started 13 November 2023. Relevant owner updates: 14 November (controller and panel), 22 November (motion, cooling, door switch), 26 November (beam turn), 20 December (completion/control and setup), 5 January 2024 (first cut and lens/extraction revision), and 6 January 2024 (filter construction and maintenance). The same thread includes replies by other members; their comments are not attributed to the owner here.
