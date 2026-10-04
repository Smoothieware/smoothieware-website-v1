# Formlabs Form 2 — machine-side contact evidence

## Identity

The local RaumZeitLabor wiki identifies its SLA printer as a Formlabs Form 2. This dossier retains that exact model identity and does not transfer connector or power details from Form 3/4 generations.

## Formlabs hardware evidence

The Formlabs Form 2 product glossary states that its internal power supply accepts 100–240 V line power and converts it to +24 V DC; three motherboard motor-driver chips control the build-platform, wiper, and tank-carrier stepper motors. It also describes a motherboard-to-front-display ribbon cable, a built-in Wi-Fi interface, and rear-accessible Ethernet and USB ports.

Formlabs' connection article identifies the Form 2 rear Ethernet jack as RJ-45 and lists 10BASE-T/100BASE-TX. It describes the supplied USB cable as a wired computer connection but does not give the Form 2 port subtype. The USB-C statement in the same article applies to Form 4 and Form 4L and is not applied to this profile. The Form 2 technical specifications list 100–240 V AC, 1.5 A, 50/60 Hz, and 65 W.

The glossary identifies a 405 nm violet-diode laser with 250 mW maximum output and Class 1 product classification. It does not identify an external laser power supply or any laser wiring contacts.

## Individually listed positions and limits

- The identified rear RJ-45 Ethernet port is represented with eight numbered connector-reference positions. The reviewed Form 2 documents do not give individual Ethernet pin assignments or a mating-face drawing; all eight Form 2 functions and SmoothieBox routes are OPEN.
- USB port subtype and contact count are unknown; do not copy USB-C from later generations or infer a four-contact pinout from a cable photograph.
- The power-input connector type, contact count, protective-earth contact and contact schedule are unknown. The internal supply's +24 V conversion is not an exposed machine terminal.
- The front display ribbon, three motor connections, integrated motor-driver inputs, built-in Wi-Fi internals and laser electrical interface have no source-supported contact schedules. They are named context groups only, with routes OPEN.
- The Form 2 exposes no documented external step/direction/enable motor-driver interface in the reviewed sources. The internal motherboard drivers and their motor wiring must not be presented as accessible SmoothieBox endpoints.
- No reviewed source identifies a DB25 connector or any compatible SmoothieBox route. No guessed routes are warranted.

## Sources checked 2026-09-27

- [Formlabs Form 2 3D Glossary](https://formlabs.com/support/Form-2-3D-Glossary/): internal power supply, three driven motors, display ribbon, Wi-Fi, rear Ethernet/USB, laser description.
- [Connecting a Formlabs SLA printer via USB, Ethernet, or Wi-Fi](https://formlabs.com/support/Connecting-Formlabs-SLA-printers/): Form 2 USB/Ethernet/Wi-Fi; rear RJ-45 and 10BASE-T/100BASE-TX. Its USB-C note is for Form 4/Form 4L and is excluded here.
- [Form 2 technical specifications](https://formlabs.com/3d-printers/form-2/tech-specs/): input voltage/current/frequency and power rating.
- [RaumZeitLabor Form 2 wiki page](https://wiki.raumzeitlabor.de/wiki/Formlabs_Form_2): local machine identification and operating context, not a connector pinout.
