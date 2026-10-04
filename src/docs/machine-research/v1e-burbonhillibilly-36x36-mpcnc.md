# burbonhillibilly's 36 × 36 in MPCNC

**Machine identity:** Scott (`burbonhillibilly`)'s individual Mostly Printed CNC build, with a 36 × 36 in wasteboard cut on its first job. This dossier describes his specific machine and setup, not the MPCNC design as a whole.  
**Evidence state:** Scott reported a first cut on 16 February 2020; the job ran about 45 minutes before a poor extension cord was dislodged. The next day he said the machine cut the intended shape and identified the bed as roughly 2 mm higher at one corner.  
**Novelty check:** A repository search on 2026-09-23 for `burbonhillibilly`, `36x36 wasteboard`, and the forum title found no existing dossier or exact machine record in `src/docs/` or `docs/`.

## Construction and controls

The owner says he printed the MPCNC components, built the table from an old bunk bed, and mounted a DeWalt DW660 rotary tool with a 1/8 in bit. He used a Raspberry Pi and says he could control the machine from a tablet or remotely from his office. The thread does not name the Pi control software, stepper-driver board, motor model, firmware, or exact MPCNC revision.

Scott says the wasteboard was 36 × 36 in. No other axis travel or usable Z clearance is reported. The first post does not identify the number of printed parts, rail/conduit dimensions, or belt/lead-screw configuration, so those should not be filled from standard MPCNC documentation.

## First cut and setup correction

Scott reports that the machine cut a 36 × 36 in wasteboard; an extension cord was kicked after about 45 minutes, stopping the run. On 17 February he says the bed was about 2 mm higher in one corner and that he planned to surface it. The thread does not say whether that surfacing was completed.

The first-cut image shows the assembled gantry/router on the owner's DIY table. It provides an overall view of the machine, but no electrical labels or connector pin assignments are readable.

![Scott's owner-posted MPCNC during its first-cut build, IMG_0483](https://us1.dh-cdn.net/uploads/db5587/optimized/3X/8/0/8060721ed9c12a2e6b86724ef116140d1510d421_2_1332x1000.jpeg)

## Pinout and limits

No connector map, motor/driver wiring, controller pin assignment, spindle control, limit-switch layout, or emergency-stop circuit appears in the cited posts. The Raspberry Pi control description is functional only and does not identify an electrical interface. Do not treat this dossier as a wiring guide.

## Forum source

1. V1E.com Forum, Scott (`burbonhillibilly`), [“Started with zero knowledge - Today I cut!”](https://forum.v1e.com/t/started-with-zero-knowledge-today-i-cut/15107), posts dated 16–17 February 2020. Owner post 1 covers the printed MPCNC, bunk-bed table, DW660, Pi/tablet control and first wasteboard cut; post 9 reports the roughly 2 mm corner-height difference. The embedded IMG_0483 photo was visually reviewed for the overall machine layout only.
