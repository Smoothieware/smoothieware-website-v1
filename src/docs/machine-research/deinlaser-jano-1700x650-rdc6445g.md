# Jano's 1700 × 650 mm DIY laser machine with Ruida RDC6445G

**Identity:** owner-built laser machine using a repaired Festo linear axis; forum posts call it the builder's new laser, not a commercial model.  
**Evidence state:** owner reports motion and a program run by 2021-01-02; later posts discuss a 1700 × 650 mm travel envelope, a Ruida RDC6445G, a CW-5200 chiller, and adapting a K40-style CO₂ PSU. Rated tube power was unresolved; 40 W was a tentative question.  
**Novelty:** exact build name/model did not appear in the current survey filename search; still requires a full repository-wide novelty check before final counting.

## Forum evidence

Jano reports acquiring and repairing a surplus Festo linear axis with 1700 mm travel, then building a machine around it. At the time of the forum thread it had 1700 × 650 mm travel. The builder says a program could run and the mechanics could move. The build planned a 40 W tube but the owner explicitly had not established that the power was adequate. A reply calculated a possible optical path near 2.5 m and raised beam alignment concerns; this is community advice, not a verified measurement of the completed machine.

The controller is identified as Ruida RDC6445G. The owner discusses a K40-style laser supply with P2/P3 output blocks, water-protect (WP), and the controller's L-On input. One forum reply says P3 was not needed for the Ruida in the discussed arrangement and advises against connecting WP simultaneously to the PSU and controller because it might cause false behavior. That is forum advice about an unspecified PSU variant. This dossier does not turn it into wiring guidance.

The owner also considered making the laser head removable and fitting an HF spindle, but only as a future idea; it is not evidence the machine supported milling.

## Mechanical build details reported by the owner

In a later post in the same thread, GawlyttJ describes the 1700 × 650 mm machine as using the repaired Festo axis on X, an IHSV-57 servo identified as the Sorotec 600 version, and a Y drive described as a belt, central 20 mm shaft, and geared Berger Lahr three-phase motor. Preserve the forum's "25-er Zahnriemen" wording if more exact belt dimensions matter; this transcription does not resolve what that size designation means.

The owner then outlines a 1600 × 800 mm lift table carried on four ball screws, with the screws cross-coupled by belts and two motors. At the time of that post, the grates were still in transit. Treat that Z/lift arrangement as in progress, not as an installed or tested component. The 1700 × 650 mm axis travel and 1600 × 800 mm planned table dimensions describe different parts of the build and should not be collapsed into one work-area measurement.

## Pinout / diagram status

The thread references a “minimal” Ruida-to-PSU diagram and images, but the PSU identity and P2/P3 variants were uncertain in the conversation. The owner says the machine's K40 supply labels appeared reversed relative to expected L/LG markings. Because variants and the exact PSU model were unresolved, do not apply the advice or infer a pinout. A high-resolution image and PSU label readback are still needed for a safe transcription.

The thread has an owner-supplied PSU photo (`Jano_Netzteil_autoscaled.jpg`), machine photos (`Masch1_autoscaled.jpg`, `kopf_autoscaled.jpg`), and a community-supplied “Ruida K40.JPG” diagram in reply #12. The forum page currently exposes the post text but denies access to the attachment viewer while signed out; those pixels were not inspected, so no image-derived pin assignment is asserted here. The diagram is a forum reply for an unidentified supply variant, not a confirmed as-built drawing for this machine.

## Sources (forum only)

1. GawlyttJ/Jano and replies, “Einbau einer Ruida Steuerung,” Dein Laserforum, 2021-01-02 onward: https://www.deinlaserforum.de/forum/index.php?thread/4028-einbau-einer-ruida-steuerung/ . Owner statements at posts 1, 10, 13, 15, and 20; community PSU/controller discussion and embedded diagram at posts 4, 8, 11, and 12. The forum attachment viewer required sign-in during this review, so the images were not transcribed.
