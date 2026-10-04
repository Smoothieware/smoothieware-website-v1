# Dan's Sacramento MPCNC Primo Build

**Machine identity:** Dan (`a8ksh4`)'s individual MPCNC Primo project, documented on V1E from January to March 2024. He separately mentioned an older “half working” LowRider that was too large for his workspace; the Primo is a new, downsized build and is the subject of this dossier. The thread does not identify or fully document the older LowRider, so it is not counted as another dossier here.

**Commissioning state:** The thread documents physical assembly and squaring, but does not show a finished electronics setup or any cuts. By March 2024 Dan had assembled the frame, trucks, core, Z rail and belts; after tuning the truck bolts he said one axis remained a couple of millimetres out. He planned to continue with the core and cable routing. He said he expected to use FluidNC with a TinyBee or Bumblebee board, but the thread does not confirm which board was installed or that any controller was connected.

**Novelty check:** On 2026-09-23, repository Markdown and HTML were searched for `a8ksh4`, `Primo build in Sacramento`, Dan’s 14 × 24 inch target, and the TinyBee/Bumblebee setup. No matching individual-machine dossier was found. This is not the separate low-volume LowRider referenced in Dan’s opening post.

## Planned work and mechanical build

Dan was targeting a usable area of about 14 × 24 inches. He planned to use a DeWalt 611 router he already owned and reasoned that a 15 × 25 inch work area might be needed to accommodate it; this is a planning estimate, not a measured finished area. He was considering whether to use a spindle instead. He described intended future work including a wooden electromechanical board game, hardwood cases, keyboard plates, and possible aluminum e-bike parts. These are goals, not reported machine output.

For the rails he was considering 1-inch stainless or DOM tube; the thread does not confirm the final choice. He discussed a cart cabinet with noise control, a fold-up door, a slide-out MDF work surface, and dust collection routed up from a lower compartment, but later reconsidered whether a cabinet would constrain material overhang. The final cart/cabinet design is not established.

Dan reported printing the Primo parts with three perimeters, 1.95 mm top/bottom, 50% infill, a 0.6 mm nozzle, and 0.15 mm layer height; he estimated the build might use about four rolls of filament, compared with the two he expected from the instructions. In March he levelled the legs to within 0.5 mm after trimming and filing them. He then squared the gantries and trucks, noting the difficulty of balancing truck tightness with square alignment. At one point, after installing the core and adjusting the trucks, he still measured one axis a couple of millimetres out.

He described an in-progress tape-measure wire-routing idea and made a wedge-clamp bracket for the wire sleeve. The bracket images show this mechanical attachment; they do not show connected controller wiring.

## Controller planning and electrical evidence

| Subsystem | Forum evidence | Evidence limits |
|---|---|---|
| Controller | Dan said he already had a TinyBee and a Bumblebee board available and expected to try FluidNC | No post confirms which board he installed, board revision, firmware version, or configuration. |
| Router/tool | Planned DeWalt 611 | The router is a planning choice; the thread does not show it mounted or running. |
| Rails | 1-inch stainless or DOM tubing under consideration | The final material and wall thickness are not established. |
| Cable routing | Dan tried a tape-measure-style sleeve and designed wedge-clamp brackets | No endstop/motor wiring map or connector assignments are shown. |

A different forum participant (C-5Eng) describes their own finished Primo with an SKR Pro and a LinuxCNC/D-Sub9 interface. That is a separate machine and is explicitly excluded from this dossier; none of its controller or connector details are attributed to Dan.

## Forum images reviewed

The gantry photo shows Dan's frame assembled over an MDF work surface with the central core and rails in place. It documents mechanical progress, not powered operation.

![Dan's Sacramento Primo frame and gantry during assembly](https://us2.dh-cdn.net/uploads/db5587/original/3X/5/a/5a17ec6e5787095ce7bfd923d0e4eb65f4f8b487.jpeg)

A later photo shows the Z-axis and tool mount in an assembly/test-fit state. The third image shows the owner's wedge-clamp bracket attached to a rail for the planned wire sleeve. Neither photo identifies controller contacts or proves that the tool/router was operating.

![Dan's Primo Z-axis and tool mount in test fit](https://us2.dh-cdn.net/uploads/db5587/original/3X/b/2/b28589c1f9563e5a5be67ee7c1df9abd6006d0ed.jpeg)

![Dan's wedge-clamp bracket for the tape-measure wire sleeve](https://us2.dh-cdn.net/uploads/db5587/original/3X/c/e/ce64f53991378b0ed454d01720b554fc33768af8.jpeg)

Local forum-image review-copy SHA-256 values, in displayed order: `ccc9f27f4efcad00b9c5252f8cd3c2cd4e1de59a15d118608b463b4943f3ab47`, `41efc304e900352b6b69deee62683f3d5dad1d4ff48d0d1ff5f79b75e2105c05`, and `fa04f2bd2a019d1027aadb591da71a0702919936615744175277e963c492992d`.

## Evidence limits

This source documents a partially assembled Primo, not an operational CNC router. The final tube material, usable area, controller choice, firmware, router mount, cable routing, limits, and dust collection remain unconfirmed. No pinout, complete wiring diagram, or cut result appears in the thread. The older LowRider referenced by Dan has insufficient machine-specific detail here to count or describe as a separate dossier.

## Forum source

1. V1E.com Forum, Dan (`a8ksh4`), [“Primo build in Sacramento”](https://forum.v1e.com/t/primo-build-in-sacramento/41783), owner posts 1, 3–11, 13 and 15, 6 January–24 March 2024. The owner posts cover his goals, work-area/material plans, print settings, frame/gantry assembly, squaring, and wire-sleeve bracket. Posts by other builders in the thread are excluded from the machine facts above.
