# Bambu Lab X1 Carbon

**Evidence depth:** Exact-model manufacturer guide plus X1-series manufacturer service-part listings. This is source-scoped interface evidence, not an installed-unit inspection or a wiring-ready retrofit map.

## Model identity and guide scope

The Appropedia catalogue lists Bambu Lab X1 Carbon as a model name but supplies no machine-specific electrical schedule. The 16-page English Bambu Lab X1-Carbon Quick Start Guide (2023 issue; downloaded PDF SHA-256 `a98ad504cb28e7e8922896f27d92623e6f665814d6f09654c441279e75fcaab6`) is the primary exact-model reference used here.

Page 3 names the Tool Head, Touch Screen, chamber camera (X1-Carbon only), auxiliary part-cooling fan (X1-Carbon only), rear Bambu Bus Port 4-Pin, and power socket. Its illustration establishes component/port identity and broad location only; it does not assign contacts or publish a cable schedule.

Page 13 lists closed-loop control for the part-cooling, hot-end, control-board, chamber-temperature-regulator, and auxiliary part-cooling fans. It also names the Bambu Micro Lidar, door sensor, filament run-out sensor, and optional AMS filament odometry. Page 14 lists a 5-inch 1280 × 720 touch screen, Wi-Fi/Bambu Bus connectivity, 4 GB eMMC and Micro SD reader, a Dual-Core Cortex M4 motion controller, and a Quad ARM A7 1.2 GHz application processor. The listed mains input is 100–240 VAC, 50/60 Hz; maximum power is 1000 W at 220 V and 350 W at 110 V. These are machine context facts; no mains, USB, storage, fan, sensor, or internal-board net is a SmoothieBox connection claim.

## Manufacturer cable and camera evidence

Bambu Lab's X1 Series MC AP Cable Pack (2-in-1) contains an AP-to-MC communication cable and an MC-to-AP power cable. The product description says the pack connects the motion-control and application-processor boards. It gives no connector contact count, pin function, orientation, voltage, or installed revision. Treat the two named cable roles as separate reference-only groups, not as numbered connector pins.

Bambu Lab's X1/P1 Heatbed Signal Cable listing specifies a double-ended, six-pin, 1.25 mm cable, 555 ± 5 mm long, associated with hotbed temperature sensing and leveling. It does not publish contact assignments, end orientation, wire colors, or fitted-unit revision. The two six-position ends are indexed editorially as positions 1–6; none is functionally assigned.

Bambu Lab's X1 Series Chamber Camera listing says the camera is included by default on X1-Carbon and gives 1920 × 1080 resolution, 110° field of view, and 30 fps. It establishes a camera peripheral/function, not its electrical connector pinout or a SmoothieBox video/control interface.

The sources therefore support 16 editorially indexed reference positions (12 heatbed-cable positions across both ends and four positions named by the rear Bambu Bus port), all OPEN and without inferred function. No source here establishes exact installed revision, board/cable mating pin order, machine-side stepper-driver terminals, motor coil pairs, endstop contacts, heater terminals, signal levels, or compatibility with Smoothieboard V2. The current diagram intentionally routes none of these machine groups.

## Sources

- [Bambu Lab X1-Carbon Quick Start Guide](https://cdn1.bambulab.com/documentation/quick-start-e254168f69145/X1C/English%20version-Quick%20Start%20Guide%20for%20X1-Carbon.pdf) — pp. 3, 13–14; model/component identity, stated interfaces, cooling/sensor functions, and specifications.
- [MC AP Cable Pack (2-in-1), X1 Series — Bambu Lab](https://jp.store.bambulab.com/en/products/mc-ap-cable-pack-2-in-1-x1-series) — two board-link cables and direction/function group, no pin schedule.
- [Heatbed Signal Cable — Bambu Lab](https://asia.store.bambulab.com/en/products/heatbed-signal-cable) — double-ended six-position cable form/specification, no contact assignments.
- [Chamber Camera, X1 Series — Bambu Lab](https://asia.store.bambulab.com/collections/spare-parts-screen-camera-light-x1-series/products/chamber-camera?skr=yes) — X1-Carbon inclusion, camera specifications and function.
- [Open Source Machine Tools — Appropedia](https://www.appropedia.org/Open_Source_Machine_Tools) — catalogue identity only.

