# David945's Eger MPCNC router and 5 W laser setup

**Machine identity:** David945's individual MPCNC, built in Eger, Hungary. The owner first described it as a planned 330 × 330 × 70 mm machine in May 2020; by 18 May he said it worked, and later posts document both router cutting and a 5 W laser attachment on this same machine. This dossier describes his specific unit, not all MPCNCs.

**Novelty check:** On 2026-09-23, repository-wide Markdown and HTML search for `David945`, `Eger Hungary`, the 330 × 330 × 70 mm envelope, Crown CT13308 and 5 W LightBurn setup found no existing machine dossier. This is an owner-specific build even though other MPCNC machines are documented.

## Construction and motion hardware

| Area | Owner's forum report | Limits and uncertainty |
|---|---|---|
| Planned work area | 330 × 330 × 70 mm (13 × 13 × 3 in). | This is the builder's planned size; the posts do not give a later measured usable travel. |
| Printed parts | Black Gembird PLA, sliced in Cura 4.6; reported 0.2 mm layers, cubic infill, and approximately 55% infill on almost every part. | Individual part settings and print orientation are not enumerated. |
| Rails | 6 m of 25 mm precision hydraulic tube, 2 mm wall. The owner says the supplier's diameter tolerance was at most 0.03 mm along the tube. The tube was not galvanized; the owner raised rust protection as an unresolved concern. | The stated tolerance is the owner's report; no measurement certificate or material grade is included. |
| Bearings and belts | 53 × 608 ZZ skate-replacement bearings; four GT2 16-tooth pulleys and 4 m of GT2 belt. The owner chose ZZ over the more expensive 2RS type. | The thread contains no wear or contamination test. |
| Screw drive and coupling | One T8 leadscrew and nut, plus a 5 mm-to-8 mm coupler, appear in the parts list. | The post does not map the leadscrew to an axis or state pitch, length, or measured steps/mm. |
| Motors and controller | Five NEMA 17 steppers, listed as 0.6 N·m (84 oz·in); Arduino Mega 2560 clone with RAMPS 1.4 and five DRV8825 modules purchased, two explicitly held as spares. | Which motors share drivers, active driver placement, current limits, supply voltage, firmware/configuration and the actual IO map are not given. The post lists wires and a power supply as owner-supplied but does not specify them. |

![David945's MPCNC assembly during the build, owner-posted in forum post 9](
https://us2.dh-cdn.net/uploads/db5587/original/3X/b/1/b1e5a294a5a648fd970ef6fee669f542e46c099f.jpeg
)

## Router configuration and cutting use

The initial cutting tool was a Crown CT13308 straight grinder, listed at 600 W and 12,000–27,000 rpm. David945 designed a two-piece lower/upper tool mount in Fusion 360. On 28 May he reported a first parquet test with a 6 mm, four-flute cutter: a 90° plunge did not enter properly, while changing the plunge angle to 10° worked. On 30 May he reported cutting a cat contour with a 6 mm four-flute HSS tool using 3 mm total depth in 1 mm passes, 8 mm/s feed, 3 mm/s plunge, 10° plunge angle, and 45% stepover. These are owner-reported settings for this job, not a universal recipe.

![Owner-posted parquet test piece accompanying the reported 10 degree ramp correction, forum post 17](
https://us1.dh-cdn.net/uploads/db5587/original/3X/0/9/093ca598c013cec0c2aa2f532d1003c2a9c8df57.jpeg
)

## Z probing and laser use

On 29 May, the owner reported testing a Z probe with aluminium foil and said he intended to change to a copper plate. The thread gives no circuit, contact arrangement, probe input pin, calibration routine, or confirmation that the copper change was completed.

By July 2020, the owner had added a 5 W laser and reported a first laser test. On 18 August he said he had already cut 3 mm plywood using LightBurn. In December he identified the laser settings for a plywood piece: 300 mm/min, 10 passes, focus 1.5 mm into the wood, and air assist. He said that without air assist he could not cut through consistently. The forum does not name the laser module, wavelength, PWM or enable interface, power scaling, controller firmware, wiring, interlock, enclosure, extraction arrangement, or LightBurn device profile. Do not infer a laser connector pinout or safety circuit from the machine/controller names.

![Small laser-cut piece shown by David945 in forum post 30; post 32 identifies the 5 W setup and plywood settings](
https://us2.dh-cdn.net/uploads/db5587/original/3X/4/3/43cf9b23c9cb45ad2ce352a8543dc812319ed948.jpeg
)

## Evidence limits and safe interpretation

The public build thread establishes the named hardware purchases, later visible assembly, owner-reported router cuts, the foil probe test, and LightBurn use with a 5 W laser. It does not contain a connector-level diagram, RAMPS pin assignment, stepper coil mapping, driver jumper/current settings, limit switch wiring, spindle switching, laser PWM mapping, grounding scheme, emergency stop, enclosure interlock, or a complete firmware/CAM profile. Treat this as a well-documented example of one MPCNC being used first as a router and later with a laser attachment; it is not an electrical build or laser-safety guide.

## Forum source

1. V1E.com Forum, David945, [“New build in Eger, Hungary”](https://forum.v1e.com/t/new-build-in-eger-hungary/17131), posts 1–33 (4 May 2020–24 January 2024). Post 1 gives the planned envelope, printed-part settings and component list; post 9 shows the build; post 10 reports first motion; posts 16–20 describe the Crown grinder mount, parquet test, foil probe and cat-contour settings; post 21 records a first laser test; post 26 reports LightBurn cutting in 3 mm plywood; posts 30 and 32 show a later laser piece and give the 5 W, speed, pass count, focus and air-assist details. Forum-attached images above were downloaded from the forum attachment host and visually reviewed for assembly, the reported router test, and the laser-cut sample. They do not show a readable connector or wiring diagram. Linked product pages and other non-forum sources were not used as evidence.
