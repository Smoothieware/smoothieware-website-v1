# twolf's 24 × 42 in MPCNC router

**Machine identity:** Tim (`twolf`)'s individual, roughly 24 × 42 in Mostly Printed CNC router build in Georgia, documented in a long V1E build thread. The forum title mentions a J Tech laser/router build, but the posts reviewed here establish router cutting; they do not establish a J Tech laser installed on this machine.  
**Evidence state:** The owner reported successful red-oak cutting in March 2019, then MDF parts and signs. He also documented feed/stepdown experiments, a loose-belt/roller-tension problem, and later resolution.  
**Novelty check:** A repository search on 2026-09-23 for `twolf`, `24x42 J Tech`, the thread title, and the reported Mini-RAMBo/MPCNC setup found no exact build dossier in `src/docs/` or `docs/`.

## Construction and configuration

Tim chose the MPCNC design after buying a Shapeoko 3 XXL that he said remained unopened in its box. The machine described in this thread is the separate MPCNC he built. He printed the frame parts, ordered additional hardware, and reused bearings, belts, pulleys, and lead screws from an abandoned router build by his girlfriend's father. In March he glued up a table from two 3/4 in MDF layers and later installed a replaceable spoilboard. He reported actual usable X/Y area slightly larger than 24 × 42 in and approximately 4 in of Z travel after raising the feet.

The machine's control hardware included a Mini-RAMBo board; Tim reports extending the wiring and confirming that all steppers moved. He used Repetier-Host, Fusion 360 post-processed G-code, and HSMWorks/Fusion adaptive toolpaths. The thread does not identify the exact firmware build, stepper model, driver configuration, router model, or a terminal-level wiring map. The title's J Tech laser reference is not enough to claim that a laser module was mounted or used; the owner instead mentions using a laser engraver at work for a separate project.

## Cutting history and owner-reported settings

On 13 March 2019, the owner reports a first cut in red-oak scrap with a 1/8 in, two-flute end mill, cutting feed of 17 mm/s, 1.5 mm depth of cut, 2-degree helical ramp at 6 mm/s, and a tool engagement he described as one-sixth of the bit diameter. He found the surface smooth to the touch. These are historical settings for his specific setup, not universal recommendations.

In a later post, Tim documents an experiment sequence using a nominal 30,000 rpm spindle, 1/8 in two-flute carbide tool, initial 1200 mm/min feed, 2000 mm/min rapid, 900 mm/min ramp, 2 mm optimal load, and 3 mm stepdown. He compared higher feed and stepdown settings and reported shorter test times. The thread says the speed was “supposedly” 30,000 rpm and includes owner-run tests; no tachometer validation is supplied.

The owner first saw jerkiness and traced most of it to loose X/Y roller tension and belts; after tightening, he reported the issue was gone. He also found a feed-rate override left at 300% during early cutting. Later he cut an MDF arcade-cabinet design, surfaced the spoilboard, and made a pine sign using a 60-degree V-bit. Those are owner-reported uses; this is not an independently measured accuracy test.

Tim compared a 1 in square to his calipers and said it was as accurate as the calipers could resolve. That is his qualitative report, not a formal tolerance measurement. He also observed Z-axis drop after a job because Repetier/G-code disabled the steppers; the thread discusses M84 and software configuration, but does not establish a safety-rated hold-up mechanism.

## Forum visual reviewed

The owner-posted MDF sample photo from post 21 was visually inspected in the forum page. It shows a routed cutout design in a wood panel; it does not expose machine wiring or a diagram. The picture is embedded below as a build/use example.

![twolf's routed MDF cutout sample, forum image IgL5FtP](https://i.imgur.com/IgL5FtP.jpg)

## Pinout and safety limits

The posts do not provide the Mini-RAMBo connector assignments, stepper wire order, limit/probe inputs, spindle wiring, or emergency-stop circuit. The owner's wiring narrative only says it was extended and sheathed; it must not be converted into a pinout. Treat the feed experiments as historical owner observations and confirm the machine/tool/material setup independently before use.

## Forum source

1. V1E.com Forum, Tim (`twolf`), [“24\"x42\" J Tech Laser/Router build in GA”](https://forum.v1e.com/t/24-x42-j-tech-laser-router-build-in-ga/9234), especially posts 1, 5–16, 21–25, 28–36 and 38 (January–June 2019). The thread documents the custom MPCNC build, Mini-RAMBo motion test, red-oak first cut, feed experiments, later MDF/pine work and maintenance. The owner-posted cut-sample photograph is [IgL5FtP.jpg](https://i.imgur.com/IgL5FtP.jpg), linked by the forum; no J Tech laser installation is confirmed in the reviewed posts.
