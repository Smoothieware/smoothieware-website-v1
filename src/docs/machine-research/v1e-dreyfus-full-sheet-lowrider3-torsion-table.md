# Dreyfus's Near-Full-Sheet LowRider 3 CNC

**Machine identity:** Dreyfus's individual LowRider CNC, documented while the owner built a full-sheet torsion-box table for it in October 2023. The forum does not name the machine's controller or firmware. The thread reports the near-full-sheet design goal and actual cutting of the table parts, but does not provide a verified final cutting envelope for the CNC itself.

**Novelty check:** On 2026-09-23, the dossier directory was searched for `Dreyfus`, `biggest commitment so far`, and the thread's full-sheet torsion-box project. No matching individual-machine dossier was found.

## Machine purpose and construction context

Dreyfus sized the LowRider so its gantry could fit the largest size their accessible laser cutter could produce. The intended result was a machine that could almost fit a full 8 × 4 ft sheet. Their first table attempt was also close, but they decided to replace it with a torsion-box design and used two sheets of 3/4-in MDF, cut to fit in a car. The table design was Doug Joseph's full-sheet LowRider v3 torsion box, shared as a cuttable/parametric project in the same forum thread.

This build illustrates an owner using the LowRider to make its own infrastructure: the router CNC cut ribs and other parts for a new torsion-box table. It is an individual project account, not a verified build guide for reproducing the same table.

## Cutting setup reported by the owner

For the first long table cut, Dreyfus reported a two-flute 1/8-in down-cut bit, 3 mm depth of cut, and 24 mm/s feed, with a stated 0.5 mm allowance for a 6 mm finishing pass. The owner said the dust collector and skirt were working well. These are the owner's reported settings and observations; material, router speed, step-over, tool stick-out, workholding, and measured cut quality are not fully specified.

After the initial cut, the owner flipped the sheet and cut the matching end. They said the alignment was not perfect but expected surfacing to compensate. On 6 October they reported that the X ribs were cut with a good finish and that a dry fit had tolerances that were neither too loose nor too tight. The thread does not publish measurements for this fit.

## Material-layout mistake and recovery

The owner later noticed that the torsion-box layout assumed a wider sheet than the 48-in-wide material they had locally. As a result, the outer Y spars did not sit fully under the top sheet as expected. The owner recognized the mismatch, decided to remake the X ribs, and posted a second attempt on 7 October. The photo shows the remade components nested on the material with the LowRider gantry above them.

This is a useful documented setup lesson: check the design's assumed stock width against the locally available sheet before cutting a full set of table members. The mismatch was in the table design/material planning, not evidence of a fault in the CNC.

## Forum images reviewed

The first photo shows the gantry with a Makita router over a sheet while cutting long torsion-box parts; a dust hose and skirt are visible. The image supports the reported cut-in-progress and broad machine arrangement. It does not establish any controller wiring or pin assignments.

![Dreyfus's LowRider cutting torsion-box table parts](https://us2.dh-cdn.net/uploads/db5587/original/3X/5/9/59fb5dbdf5e4f13db7283a61972b4ec3079b45be.jpeg)

A later photo shows the torsion-box rib parts nested on the sheet for the second attempt. It is visual evidence of the revised material layout, not a measurement of the finished table's squareness or stiffness.

![Second material layout for the LowRider torsion-box table parts](https://us2.dh-cdn.net/uploads/db5587/original/3X/7/8/785682a986166cd3c5c80a8472ea473230c4ba0c.jpeg)

The dry-fit photo shows several interlocking ribs arranged as a torsion-box grid, with the LowRider and dust extraction visible in the foreground. It documents an intermediate dry fit only; it does not prove final table completion.

![Dry fit of the LowRider torsion-box ribs](https://us2.dh-cdn.net/uploads/db5587/original/3X/2/c/2c5927d2de2f14926d72b30b1094539f3c7cd1d4.jpeg)

Reviewed image copies' SHA-256 values in order: `0ec9b767666e6b82154a63787929de7910135f0452a82b6e351d82d7fef09370`, `f486bed4805bbd00646d6639df38db98d9c77d6a5192ba29b8a4b5aaa8064193`, and `3741ef25e9c77f3cf47c1fc9ce8975b502fb5297466d3190bc1c8e416bade0fd`.

## Control and safety information not established

The source thread contains no named controller, firmware, driver or motor models, contact assignments, end-stop configuration, complete electrical enclosure photo, spindle-control circuit, protective-earth path, or laser details. The laser cutter is mentioned only as the source used to size the LowRider gantry; no laser is reported as installed on Dreyfus's LowRider. Do not infer controller or wiring details from the machine photographs.

## Forum source

V1E.com Forum, Dreyfus, [“My biggest commitment so far”](https://forum.v1e.com/t/my-biggest-commitment-so-far/40124), opening post and posts 2, 9–11, and 18–20, 1–7 October 2023. The owner reports the near-full-sheet intent, table cut process and settings, fit observations, stock-width mistake, and second attempt. The attached photographs show the machining and intermediate table parts.
