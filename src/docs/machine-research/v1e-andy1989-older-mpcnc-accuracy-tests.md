# andy1989's Older MPCNC with Roller Stiffness Modifications

**Machine identity:** V1E user `andy1989`'s individual MPCNC, reported complete by April 2017. The owner noted that it used older roller/mount parts; the precise MPCNC generation, electronics, and motor model are not identified in this thread.

**Use reported:** The builder reported MDF and aluminum test cuts and was pleased with the aluminum surface finish. He used 100 mm square test cuts to investigate dimensions and modified the rollers to reduce flex. The forum does not provide a complete bill of materials or validated controller/pin configuration.

**Novelty check:** On 2026-09-23, repository Markdown and HTML were searched for `andy1989`, `MPCNC Accuracy`, the 350 × 450 × 50 mm working area, and his reported measured dimensions. No matching dossier was found. This is an individual machine record and should not be merged with other owners' MPCNC builds in the same thread.

## Build and modifications

The owner said the working area was approximately 350 × 450 × 50 mm. He described the machine as using 3D-printed parts and conduit rails. He did not identify the conduit dimensions, board/controller, stepper model, power supply, or router model. He later said the tool was a low-cost Makita knockoff bought from eBay; that detail appears in the April 16 replies and is not specified in the original build description.

To stiffen the machine, he added a second bracket below the motor. He also added a tensioner beneath each roller to pull its bearings against the rail. He reported improved stiffness but increased rolling friction: one April 16 post gives 50 mm/s travel as usable, while a later clarification says about 40 mm/s. Treat these as varying owner estimates, not a verified maximum speed.

The owner observed flex where the tubes met roller clamps and proposed a later design using three bolts to fasten the tube to the roller, plus a possible sixth roller bearing. Those were proposed changes, not confirmed as installed. The photos show the roller and belt assemblies; they do not provide any electrical or connector information.

## Accuracy trials, with conflicting evidence retained

The opening test report says 100 mm MDF squares had edge lengths from 99.9 to 99.5 mm. The owner then found two very loose pulleys. After tightening the nuts and bolts, changing a steps-per-millimetre setting from 200 to 199, and adding multiple finishing passes, he reported reaching the ±0.2 mm tolerance he wanted. He also wrote that all but one dimension was within 0.03 mm and that the remaining long side was 0.13 mm out.

The attached measurement image in the same update shows a stepped test piece with labels including 25.07, 49.9, 74.97, 25.03, 49.98, and 74.87 mm against nominal 25, 50, and 75 mm dimensions. Those displayed values include deviations other than 0.03 mm, so the image does not directly support the prose claim that all but one dimension was within 0.03 mm. The post does not explain whether the image and prose refer to separate cuts or measurement axes. This dossier preserves the owner’s text and the visible labels without combining them into one accuracy figure.

These are forum-reported tests, not independent metrology. The topic includes advice from other users about finishing passes, cam, and squaring; none is attributed to the builder as a machine fact. The data should not be generalized to other MPCNC builds.

## Forum photos reviewed

The following close views show the owner’s roller assemblies, tension hardware, belt, motor brackets, and cable routing. They help identify the mechanical modifications only; no motor wiring, connector cavity, pin assignment, or controller board is legible in these pictures.

![Close view of andy1989's MPCNC roller, rail, belt, and cable chain](https://us1.dh-cdn.net/uploads/db5587/original/2X/8/82069c944870c1eb1a90db0e7c1b32f15f8a3778.jpeg)

![Motor bracket and roller tension detail](https://us1.dh-cdn.net/uploads/db5587/original/2X/8/8b90f3451d1562baec97d71c8c27fa7529ab638f.jpeg)

The forum also includes this dimension screenshot. It is an owner-posted image; the image alone does not identify which pass or orientation each label corresponds to.

![Owner-posted dimensions for the nominal 25, 50, and 75 mm test geometry](https://us1.dh-cdn.net/uploads/db5587/original/2X/e/ed931d8b239b0dae916107437919964baf0c14cc.png)

Local forum-image review-copy SHA-256 values (two roller images followed by the dimension screenshot): `8c33d8249357d62bc66614ee37e61db8757f56950f6c3ed500349e9b6a1fd7f3`, `0579301d51ae71b1fdf8dbb4e9adc0a0454621ee5557e4d4cfe18f5044286d83`, `0e63ad59937070fec0b852c6ecd8b02f73c0562dfa76a843716146dedb39c477`.

## Evidence limits

The thread does not identify a complete controller setup, firmware, connector-level pinout, motor wiring, switch wiring, tested cutting feed/depth, or later status of proposed roller modifications. The measurement prose and attached image contain an unresolved mismatch; no precision rating should be inferred from them. Do not use this dossier as wiring, calibration, or machine setup instructions.

## Forum source

1. V1E.com Forum, `andy1989`, [“MPCNC Accuracy”](https://forum.v1e.com/t/mpcnc-accuracy/5711), posts 1 and 4–11, 13–16 April 2017. Owner statements cover the approximate working area, initial test cuts, pulley finding, step setting, finishing passes, modifications, reported measurements, and photos. Replies by other forum users are retained only as context, not as verified facts about this machine.
