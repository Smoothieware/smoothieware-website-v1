# Phillip’s MPCNC build near Cologne

**Machine identity:** Phillip (`viirus`)’s individual Mostly Printed CNC (MPCNC) build documented in the V1E forum’s “Your Builds” category. This is one owner build of the MPCNC design, not a new machine family.

**Novelty check:** Repository search on 2026-09-23 for `viirus`, `MPCNC build near Cologne`, and the thread title found no existing dossier. Other MPCNC owners in this collection are separate physical builds.
**Build/use state:** Cutting wood and aluminum was reported by the owner in September 2019; further dust and cable management remained unfinished.

## Documented configuration

| Area | Forum evidence | Limits |
|---|---|---|
| Work envelope | About 40 × 60 cm total cutting dimensions | Owner’s estimate; no independent measurement or Z clearance is given. |
| Router | Makita RT0700C | Owner says they were happy with its performance; no speed or bit details for the aluminum cut are supplied. |
| Printed parts | Three perimeters, 0.6 mm nozzle; owner estimated under 100 hours to print everything | No filament, infill, part revision, or rail/tube specifications are named. |
| Controller/software | Raspberry Pi used; machine was controlled from a tablet and remotely from an office. Fusion 360 CAM was in use. The owner later switched from Repetier Host to CNCjs to resolve an unexpected Z move at job start. | The forum does not name the motion-control board or firmware for this build. Do not infer either from generic MPCNC instructions. |
| Workholding/table | Owner cut holes for hold-down clamps into a 19 mm base board, then completed the holes by hand to avoid drilling into the supporting table. | The hole-spacing pattern is not reported. |
| Cutting examples | V-carving; first aluminum test; reported aluminum settings were 200 mm/min feed and 0.3 mm depth per pass. | The owner says the CAM path was initially wrong at one side of the aluminum part. These settings describe this small test only, not a recommended recipe. |
| Dust/cable management | Owner said dust containment and cable management still needed improvement. | Later completion of these items is not established by this thread. |

## Operating notes and unresolved details

The owner traced an unwanted Z-up/Z-down move at the beginning of a job to their Repetier Host configuration and reported that changing to CNCjs made the job behave as intended. This is the builder’s diagnosis for this installation, not a general claim about either sender. The owner also reported that the initial aluminum CAM path attempted to cross into negative Y, which their firmware configuration disallowed; adding stock in Fusion 360 so the path stayed within positive X/Y fixed that cut-path issue.

The available thread does not provide a wiring diagram, board identity, driver types, motor current settings, limit-switch map, pin assignments, full firmware configuration, or later operating history. No connector pinout can be recovered from this source.

## Forum visual

The build post links an overall-machine image and a V-carving image. The forum page exposed these as `https://i.imgur.com/5GZwiiw.jpg` and `https://i.imgur.com/2zkZSuu.jpg`; the image CDN returned a cache-miss during retrieval, so neither image was visually inspected in this research pass. They are included as source links only.

- [Overall machine image linked from the owner’s post](https://i.imgur.com/5GZwiiw.jpg)
- [V-carving image linked from the owner’s post](https://i.imgur.com/2zkZSuu.jpg)

## Sources

1. V1E.com Forum, Phillip (`viirus`), [“MPCNC build near Cologne”](https://forum.v1e.com/t/mpcnc-build-near-cologne/11390), posts 1, 4, and 7, 8–11 September 2019. Owner post 1 supplies the approximate cutting dimensions, router, printed-part settings, early V-carving and aluminum test; post 4 discusses the sender change, negative-Y restriction, and dust/cable management; post 7 describes the spoilboard drilling approach. The thread’s IMG_16 and IMG_18 attachment links could not be retrieved from the image CDN, so image contents have not been assessed.
