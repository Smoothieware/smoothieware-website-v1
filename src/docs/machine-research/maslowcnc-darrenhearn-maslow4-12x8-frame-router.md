# Darren Hearn's Maslow 4 on a 12 × 8 ft Wooden Frame

**Machine identity:** Darren Hearn (`darrenhearn`)'s late-batch Maslow 4 kit, documented through assembly and cut testing in 2024. The owner was building toward custom furniture and large plywood work. This dossier distinguishes the owner's test results at different sizes and calibration stages rather than presenting one accuracy number as universally representative.

**Novelty check:** On 2026-09-23, the machine-research directory was searched for `darrenhearn`, the thread title, the frame dimensions, and the reported 9 × 9 calibration. No matching individual machine dossier was found.

## Frame, assembly, and stock

The owner used a horizontal wooden frame measuring 12 × 8 ft. Measurements across the outsides of the anchor bolts were reported to the nearest 0.25 in.:

| Measurement | Owner-reported value |
|---|---:|
| Bottom edge | 141.0 in. (3,581 mm) |
| Top edge | 140.75 in. (3,575 mm) |
| Left edge | 95.75 in. (2,432 mm) |
| Right edge | 95.5 in. (2,426 mm) |
| Bottom-left to top-right diagonal | 170.0 in. (4,318 mm) |
| Bottom-right to top-left diagonal | 170.0 in. (4,318 mm) |

The owner's design goal was custom furniture and less than ±0.05 in. (about ±1.3 mm) error across 8 ft in 3/4-in. plywood. Assembly took about ten hours by their estimate: three hours for the frame and seven for the kit. One linear rod supplied with the late-batch kit was too long; the owner said diagnosing and resolving this used one to two hours of assembly time.

The owner reported choosing 12-ft 2×4s for a 12 × 8 ft frame after reading advice that longer frame members could improve performance. They later concluded that, compared with a 10 × 8 ft frame, their choice increased total undistorted work area but also introduced mildly distorted mid-width work area. This is the owner's interpretation of the forum discussions and a frame calculator, not an independent geometric assessment.

## Router, bit, and routine cut settings

The posted baseline for cuts was:

| Setting | Owner-reported value |
|---|---|
| Router | DeWalt DWP611, speed setting 2, approximately 18,000 rpm |
| Bit | 1/4-in. diameter, carbide, upcut, two flutes; owner identifies Diablo DR75102 |
| Cut depth | 2–3 mm per pass |
| XY feed | 500–800 mm/min |
| Z feed | 100 mm/min |
| Stock | 12 mm Sandeply plywood, 8 × 4 ft |
| Orientation | Horizontal, sled parallel to ground |

The owner reported a calibration “fitness” value of 0.51–0.55 using a 9 × 9 grid over a 2,000 × 1,000 mm area. These values are tied to this machine, frame, firmware, and calibration state; they should not be treated as general Maslow 4 setup recommendations.

## Calibration and cut results across stages

The June 2024 initial calibration used firmware v0.77. The owner described the first small cuts, triangles about 10 in. per side near the stock center, as successful on the first try.

After the machine sat for about two humid summer months in an uninsulated garage, the owner recalibrated in late August using firmware v0.83. Calibration initially stopped with `Unable to move safely, stopping calibration`. After manually setting the top-left and top-right anchor coordinates in `maslow.yaml` (the owner listed `maslow_tlX`, `maslow_tlY`, `maslow_trX`, etc.), a calibration run completed. They also had incomplete retraction on the bottom-right belt between calibration attempts. Raising `Maslow_Retract_Current_Threshold` to 1600 yielded reliable retraction; they set `Maslow_Calibration_Current_Threshold` to 1600 as well. The owner did not determine why the August procedure differed from the June run.

For small-part checks, the owner cut six faces for a box-jointed cube with 7-in. edges, placing two faces near the center and four near the stock corners with at least 6 in. clearance to each edge. They measured a worst error of 0.8 mm. The design included 1 mm clearance around each tooth; the owner thought a smaller allowance might also have fit, but did not test or quantify that claim further.

For larger test pieces, roughly 7 × 1.25 ft, the owner initially saw errors of about 0.5 in. and later reduced them to under 0.2 in. They then performed 1 mm-depth dry runs on the spoilboard while targeting tighter tolerances; the best result reported in the post was 0.18 in. error. Large errors and waviness were worst near the top-left corner. The owner associated the issue with a large top-left anchor angle, a loose bottom-right belt (thought likely related to calibration), and sled friction. They reported that remeasuring the frame, recalibrating, and raising the top-left anchor by 1.5 in. eliminated visible “waves,” leaving reproducible dimensional error still to resolve. These are the builder's observations and suspected causes, not experimentally isolated findings.

## Forum photos reviewed

The first image shows six routed box-joint faces. It supports the post's small-part test context but is not a calibrated scale reference. The second shows the assembled cube, demonstrating that the test faces were assembled into a box-jointed form. Neither image establishes the claimed error measurement independently.

![Six box-joint cube faces cut on Darren Hearn's Maslow 4](https://canada1.discourse-cdn.com/flex031/uploads/maslowcnc/original/3X/8/b/8b87bff8381bf1dda8d33a2a9566619dc841ef9e.jpeg)

![Assembled test cube made from the Maslow 4 cut faces](https://canada1.discourse-cdn.com/flex031/uploads/maslowcnc/original/3X/1/7/177823560bfa6fcbba5b66c50d1b7e17e7978aec.jpeg)

Reviewed image copies SHA-256: `cd7a36f21758c2df1b05839393bdfa9b54cf8044e2b501548312a0a202c3a9d2` and `0fb6305c1b676675b3bf061c7bb3c67460f43231db6a59202e9b66280ab627bd`.

## Controls, wiring, and safety evidence gaps

The cited thread identifies the Maslow 4 machine and its `maslow.yaml` calibration settings but does not provide a full controller-board contact map, motor wiring assignments, power wiring diagram, end-stop map, router control circuit, or measured electrical characteristics. The Maslow's belt-anchor frame and router sled are visible in the described setup, but no wiring diagram is attached. Do not use this dossier as a wiring or electrical-safety reference.

## Forum source

Maslow CNC Forums, Darren Hearn (`darrenhearn`), [“New customer experience (assembly, first cuts, etc.)”](https://forums.maslowcnc.com/t/new-customer-experience-assembly-first-cuts-etc/22530), opening post and replies 2–4, 23–24 October 2024. The owner's opening post supplies frame dimensions, tools, baseline cutting parameters, calibration history, settings, measured small/large test errors, and test photographs.
