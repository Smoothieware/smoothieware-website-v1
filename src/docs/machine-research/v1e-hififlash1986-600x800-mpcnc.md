# hififlash1986's 600 × 800 mm MPCNC

**Machine identity:** Sebastian (`hififlash1986`)'s individual MPCNC build, assembled from the December 2018 design release. The owner says this was his first CNC build. The measurements and components below describe this specific machine, not all MPCNC builds.

**Novelty check:** On 2026-09-23, searched `src/docs/` Markdown and HTML, including `src/docs/machine-research/`, for `hififlash1986`, thread ID `9194`, the reported 600 × 800 × 110 mm work area, and the polycarbonate-vibration case. No matching dossier or exact owner-machine record was found.

## Construction and controls reported by the owner

| Area | Forum evidence | What remains unknown |
|---|---|---|
| MPCNC version and rails | Owner calls it the newest version from December 2018 and specifies 25 mm conduit with 2 mm wall thickness. | The post does not give an exact revision name, tube material, measured frame dimensions, or stiffness test. |
| Work area | Owner reports a 600 × 800 × 110 mm work area. | It is not stated whether those are measured usable travels, nominal clearances, or a later verified measurement. |
| Structure and setup | Owner says the belts looked correctly tensioned and that the assembly was square and snug. | These are the builder's visual/setup assessments, not independent measurements. He later measured the Z axis at 89.05° to the work area. The thread does not document an adjustment or remeasurement. |
| Router | A Katsu router, described by the owner as a Makita clone, with a substantial printed mount. | Router model, mount revision, collet, speed calibration, and retention details are absent. |
| Controller/software | An Arduino Uno and CNC Shield with Estlcam. | Board/shield revision, driver modules, voltage/current settings, firmware version, Estlcam pin assignment, motor wiring, switch wiring, and computer connection are not stated. |

The setup image attached by the owner shows the individual gantry/router over a plywood work surface and a cable chain. The controller enclosure and electrical terminations are not visible, so the image cannot establish pin assignments or safety wiring.

![Overall view of Sebastian's MPCNC build, owner-posted in V1E forum post 2](https://us1.dh-cdn.net/uploads/db5587/original/2X/8/8d229c3a7cfd415e2345f7d833f8af6997b2e4d8.jpeg)

## Cutting history and unresolved vibration

The owner reports that initial plywood cuts with a 4 mm, four-flute cutter had acceptable size and roundness, although the bit became somewhat hot. He then tried polycarbonate and reported strong vibration:

| Owner-reported attempt | Reported result |
|---|---|
| 4 mm, one-flute cutter; 800 mm/min; 1.5 mm depth; 10,000 rpm | Severe shaking, near cutter breakage, and a reported cut opening almost 20 mm wide. |
| Same named 4 mm one-flute cutter; 200 mm/min; 0.4 mm depth; 12,000 rpm | Vibration improved but remained; the cut line was about 4.5–5 mm in places. |
| Same named cutter; 200 mm/min; 0.4 mm depth; 14,000 rpm | Owner said the result was acceptable but the machine still vibrated. |
| Later 3 mm, two-flute cutter; 600 mm/min; 0.5 mm depth; 10,000 rpm, polycarbonate | Owner still described hard vibration in a forum post accompanying a video. |

A forum respondent examining the linked cutter listing identified the first tool as a drill bit rather than a CNC end mill; the owner later said a new bit produced similar vibration. Another respondent suggested checking Z-axis squareness, after which the owner measured 89.05°. The thread does not document a confirmed root cause or a successful final correction. Advice in the discussion includes trying intermediate feeds and trochoidal paths, but there is no owner-reported validated final recipe. Treat the listed settings as historical observations from this machine, not transferable cutting parameters.

The owner attached this image to a post describing a better-looking cut using a different 6 mm four-flute cutter in plywood. It is a visual record of that post, but it does not identify the toolpath or independently demonstrate dimensional accuracy.

![Owner-attached image accompanying the reported plywood test, V1E forum post 6](https://us1.dh-cdn.net/uploads/db5587/original/2X/b/b880192301599f0de8bfa9f14f083532ca094624.jpeg)

## Pinout and operating limits

The inspected thread identifies an Arduino Uno, CNC Shield, and Estlcam but contains no shield revision, connector map, motor-coil pairing, driver input wiring, axis-to-output assignment, endstop map, probe circuit, router-control output, E-stop circuit, or configuration file. Do not infer any pinout from the generic product names. The forum discussion documents plywood use and polycarbonate experiments with unresolved vibration; it does not establish a safe, repeatable polycarbonate process.

## Forum source

1. V1E.com Forum, Sebastian (`hififlash1986`), [“Problems with my MPCNC and Polycarbonite”](https://forum.v1e.com/t/problems-with-my-mpcnc-and-polycarbonite/9194), posts 1–20 (14 January–12 February 2019). Owner post 1 describes the December 2018 build, 25 mm × 2 mm conduit, reported work area, Katsu router, Arduino Uno/CNC Shield/Estlcam, plywood cuts, and first polycarbonate settings. Posts 6, 11, 16, and 18 add the later test settings and 89.05° Z-angle observation; no final repair is documented in the inspected thread. The two embedded owner photos above were downloaded from the forum attachment host and visually inspected for overall machine layout and test-photo context only; neither exposes a readable wiring diagram.
