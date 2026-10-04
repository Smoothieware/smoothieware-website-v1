# Pepperjohn's Maslow 4 with Epoxied Garage-Floor Anchors

**Machine identity:** `pepperjohn`'s Maslow 4, built and trialled in April 2024. This individual installation uses threaded anchor couplers epoxied into the garage floor, with shoulder bolts installed when the machine is in use. The forum documents an early calibration and first cut, including a units mismatch and an emergency stop limitation; it does not provide a final calibrated work-area measurement.

**Novelty check:** On 2026-09-23, the dossier directory was searched for `pepperjohn`, the thread title, the posted photo names, and the floor-anchor materials. No matching individual machine dossier was found.

## Floor-mounted frame anchors

The owner bored holes into the garage floor and epoxied in 316 marine-grade stainless threaded-rod couplers. They used 316 stainless screws to keep the threads closed and clean between uses, with regular-steel shoulder bolts installed when the Maslow was operating. The owner said the marine-grade material choice was motivated by concern about salt and chemicals tracked in by a vehicle.

The thread lists shoulder bolts, diamond drill bits, 316 coupling nuts, and 5/16-in.-18 stainless machine screws. A photo shows a floor-level anchor assembly; another image shows the Maslow sled and router in use, while a wider view shows the suspended belt geometry from the corner anchors to the sled. The photographs support the described arrangement but are not dimensioned drawings. They do not establish anchor embedment depth, epoxy type, load capacity, or suitability of the floor for this installation.

## Calibration and first-cut workflow

The owner initially found that the calibration button appeared not to work. They later realized the belts needed to be fully extended, rather than merely extended as far as they expected the cutting task would require. After calibrating, the owner uploaded a G-code file in inches. The interface switched to inches too; a subsequent 1 mm manual Z jog moved one inch, surprising the owner.

The same post reports that the stop button did not stop manual Z-axis motion. The owner pulled the power plug to stop motion and reported several other events with a blinking red indicator that required rebooting. These are user observations from the early build; the thread does not identify firmware/UI versions, reproduce the issues under controlled conditions, or document a later fix. Treat the reported unit and stop behavior as a specific historical commissioning warning, not as a claim about current Maslow software.

The owner reports completing a first cut after the calibration and units issue. The forum image shows the machine sled/router on a sheet, but the thread does not state the workpiece dimensions, tool and feed parameters, or dimensional result.

## Forum images reviewed

A close view shows a floor-level metal anchor/coupler emerging from the garage floor, consistent with the builder's description. The image is not a section view and cannot show how deep the coupler is embedded.

![Floor anchor used for the Maslow 4 installation](https://canada1.discourse-cdn.com/flex031/uploads/maslowcnc/original/3X/8/c/8c0dc3f07b44f77ad812a61b4910c0f50dc9ac28.jpeg)

The in-use view shows the Maslow sled, mounted router, hanging belts, and a small plywood workpiece. No wiring or pin assignments are legible.

![Maslow 4 sled and router over a plywood workpiece](https://canada1.discourse-cdn.com/flex031/uploads/maslowcnc/original/3X/4/2/4260360da42d62858f150b010ef42124c94c2d34.jpeg)

The wider photo shows the sled positioned over a floor-supported work area with belts extending toward distant anchors. It documents the general footprint only; perspective and lack of scale prevent a reliable dimension estimate.

![Wide view of the Maslow 4 belt and anchor layout](https://canada1.discourse-cdn.com/flex031/uploads/maslowcnc/original/3X/5/9/59e70220bda5bcf53369363cea1e67fd23b395d8.jpeg)

Reviewed image copies' SHA-256 values, in order: `09863151da4c93cf26eedb17d0574e2f3a41609cca494a01c5c3d7cc5fb9fffd`, `cb7087f1ced811880453ddebc2540946d4d19b94e44fd930acd6993f9a6d7cb3`, and `1ffba754fc9dd2e00ed33d989dac021feb6be47833ae40c93499f6282bdc4a1f`.

## Controller and wiring information not supplied

The thread does not name the controller board, motor/driver models, firmware version, input/output mapping, router switching method, or wiring layout. The floor anchor photographs are mechanical-installation evidence only. They cannot be used to infer any electrical connections or electrical safety measures.

## Forum source

Maslow CNC Forums, `pepperjohn`, [“Build, Setup, First cut”](https://forums.maslowcnc.com/t/build-setup-first-cut/20852), opening post, 28 April 2024. The post supplies the anchor materials and method, early calibration steps, units behavior, stop-button observation, first-cut status, and attached images.
