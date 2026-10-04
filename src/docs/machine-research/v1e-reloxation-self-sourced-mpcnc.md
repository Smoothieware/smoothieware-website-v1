# reloxation's self-sourced MPCNC

**Machine identity:** Lachlan (`reloxation`)'s individual self-sourced MPCNC build in Australia, documented in V1E's Your Builds forum. This is an owner-specific machine using the community MPCNC design, not a new design family.  
**Evidence state:** The owner documented his parts/configuration choices in January 2020 and reported rewiring the steppers, mounting the spindle, and making the first cut on 20 December 2020. The material was styrofoam and the owner noted that some details chipped away.  
**Novelty check:** A repository search on 2026-09-23 for `reloxation`, the thread title, and its distinctive self-sourced/RAMBo build details found no matching machine dossier in `src/docs/` or `docs/`.

## Build and component choices

Lachlan chose the series-style MPCNC after comparing it with the LowRider 2, RS-CNC32 and Root3. He planned to self-source the parts, print the structural pieces on a Sidewinder X1, use a cloned full-size RAMBo 1.4 board with dual-endstop firmware, and use Fusion 360 for design/CAM. In a January 15 post he estimated about US$330 for the components gathered so far, while noting that the list might be incomplete.

The owner initially considered adding endstops later, then selected a dual-endstop configuration. This decision was made during discussion and should not be read as proof that the final build wired every endstop as planned. Another member warned of past pinout issues on cloned Mini-RAMBo boards, but Lachlan was considering a full-size RAMBo 1.4 clone; those comments do not establish a fault or exact wiring on his machine.

The thread does not establish final work-envelope dimensions, stepper models, exact router/spindle model, board manufacturer/revision, or final firmware build. The early 0.6 × 0.6 m dimension was a question about recommended MPCNC size, not an owner-confirmed measurement of his completed build.

## Reported use

In December 2020, the owner says he had been unable to access the machine for a while, rewired the steppers, mounted the spindle, and completed a first cut. He identifies the material as styrofoam and notes that some material chipped away. The post establishes first operation, but not a finished part, measured accuracy, or success with wood/aluminium.

The forum image shows a light-coloured foam piece with a routed design. It documents the reported test but does not expose the machine's wiring or identify its dimensions.

![reloxation's owner-posted styrofoam first-cut result](https://us2.dh-cdn.net/uploads/db5587/original/3X/c/4/c4f0b9cc58ef83fa41a72e214a1ddf010c56ceb7.jpeg)

## Pinout and limits

No terminal assignments, RAMBo connector orientation, stepper wire order, endstop signal mapping, spindle-control circuit, or emergency-stop circuit for this machine are published in the inspected owner posts. Forum replies discuss general setup and potential clone-board issues; do not attribute those other users' board behavior to Lachlan's machine. This dossier is not a wiring guide.

## Forum sources

1. V1E.com Forum, Lachlan (`reloxation`), [“Silver-Themed First MPCNC - Self Sourced $300 USD”](https://forum.v1e.com/t/silver-themed-first-mpcnc-self-sourced-300-usd/14211), owner posts 1, 4, 10, 15, 17 and 44 (13 January–20 December 2020). The early posts describe the design choice, self-sourcing and intended controller; post 44 documents the rewiring, spindle mounting and styrofoam first cut. The embedded post-44 image was visually reviewed.
