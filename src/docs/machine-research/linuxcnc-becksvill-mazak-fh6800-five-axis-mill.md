# Becksvill's Mazak FH6800 horizontal mill retrofit

## Machine identity and reported configuration

LinuxCNC Forum member Becksvill identifies the machine as a Mazak FH6800 horizontal CNC mill with a pallet changer and a fifth axis mounted over the built-in fourth axis. The owner reports buying two machines with a combined mass of about 44 tonnes, scrapping one for spares, and retaining the better one. The retained machine is described as approximately 22 tonnes. A 700 mm diameter fourth-axis unit is identified as a part taken from the scrapped machine.

The owner says the retrofit uses Dmitry's SSCNET card for servo control and Mesa boards for other I/O. As of July 2024, the owner reported using Mesa 7i92 and 7i77 cards, with 7i71 and 7i70 cards still planned for more I/O. The owner said the 888 µs servo-thread setup and Mesa combination were running well at that stage. A possible Mesa PCI card change was being considered to leave Ethernet available for internet access; it was not reported as completed.

The owner's longer-term target was five-axis operation. The thread describes the machine's fifth-axis unit as swappable with the pallet changer to use it in a conventional four-axis configuration. Do not treat the desired five-axis end state as proof that five-axis kinematics or production operation were complete.

## Retrofit progress and evidence limits

In a July 2024 update, the owner said original diagrams had been worked out and much of the hydraulics connected for basic operation. They reported correcting hydraulic-pump rotation, using HAL commands to actuate Mesa outputs through relays, and reaching a state where the hydraulic spindle tool could be removed. The pallet changer still needed its motor to rotate pallets and perform swaps; automatic sequencing in ClassicLadder and timeout handling were future work in that update.

The owner describes the spindle as 37 kW and 10,000 rpm, but does not clearly scope those figures to the retained machine versus the pair of machines and spare assemblies. They are therefore retained as owner-reported, scope-uncertain figures. The inspected thread pages do not provide connector contact numbers, a terminal map, a complete wiring diagram, SSCNET pin assignments, or a machine-specific I/O schedule. The owner's prose explicitly warns that the example HAL pin names were guesses and might not be correct; those example names are not wiring evidence.

## Forum source

- Becksvill, “[big 5axis mazak horizontal cnc mill](https://forum.linuxcnc.org/show-your-stuff/53294-big-5axis-mazak-horizontal-cnc-mill),” LinuxCNC Forum, inspected posts dated 2024-07-21 through 2024-07-28. Thread pages 1 and 2 were inspected; the page-3 cache was unavailable during this review.
