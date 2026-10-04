# Ecksbot RepRap printer — source-scoped interface inventory

## Preserved first-pass dossier

The source-only starting point in the atlas identified Ecksbot as a GPL-licensed evolutionary derivative of the Prusa 2. The RepRap page describes mechanical X/Y/Z assemblies, an eckstruder and an online bill of materials, but did not identify a controller-board revision or connector map. Its mechanical axis labels are not an electrical pin assignment.

## Supplemental contact-group audit · 2026-09-27

The current RepRap Ecksbot page’s Bill of Materials lists five NEMA 17 bipolar stepper motors and three microswitches. Its printed parts include X/Y/Z motor brackets, a micro-switch bracket quantity of three, and an eckstruder assembly. Counting the explicit motor quantity against these named mechanical assemblies gives reference groups for X, Y, Z-left, Z-right, and extruder motors. This is a mechanical inventory crosswalk, not a source statement of the fitted cable or electronics. The BOM does not assign the three switches to specific axes and does not enumerate switch COM/NO/NC contact functions or harness positions.

Accordingly, the reference SVG names those five motor peripherals and three distinct, unassigned microswitch peripherals, each with its contact schedule explicitly unknown. It does not assume motor lead count, coil pairing, connector type, switch cavity numbering, installed controller, or signal polarity. The source identifies no stepper-driver board or controller. All eight groups remain OPEN to the proposed SmoothieBox exterior; zero routes and zero guesses are shown. The motors cannot be connected directly to the SmoothieBox STEP/DIR/ENABLE logic terminals; an identified driver stage is absent from the machine-specific evidence.

## Primary source

- [Ecksbot — RepRap](https://www.reprap.org/wiki/Ecksbot), model description and Bill of Materials (retrieved 2026-09-27). The page states that Ecksbot is a sturdier Prusa 2 derivative and lists five NEMA 17 bipolar stepper motors and three microswitches.
- [RepRap Machines](https://www.reprap.org/wiki/RepRap_Machines), broader community model index.

## Unresolved

Installed controller and drivers; motor manufacturer, lead count, connector and coil pairing; switch axis assignment, contact state and connector; supply and heater wiring; fitted revision and all machine-side electrical contacts.
