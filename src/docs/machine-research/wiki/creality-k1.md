# Creality K1 — machine-side interface source audit

## Scope and source identity

This dossier supplements atlas profile `wiki-131` (Creality K1). It does not assert that the community machine's installed revision matches the source document. The primary source is Creality's `K1 3D Printer User Manual V1.0`, listed on the official K1 download page on 2023-05-31. The downloaded PDF is 25 pages and has SHA-256 `65c7a4c21943b7ffd317e37037243b05a03e062447a996c46dd782f07fc8689d`.

- Official product download page: https://www.creality.com/download/creality-k1-3d-printer
- Official manual PDF: https://cdn.creality.com/ow/official/5b7203dc-cbd6-4b8b-a1dd-36afe4f3d66b.pdf
- Creality Wiki's K1 manual entry, date shown 2023-05-31: https://www.creality.com/ru/download/creality-k1-3d-printer

The manual distinguishes K1 from other K1-family products by naming the product model K1. It is not evidence of the installed unit's mainboard part number or revision.

## Manufacturer-documented external features

The manual's printed page 1 / PDF page 4 labels the front USB flash-disk port, 4.3-inch touchscreen, rear power outlet, and rear toggle switch. The printed page 2 / PDF page 5 identifies the print interface as “USB Flash Disk/LAN Printing”. These are functional/exterior identifications only:

- **USB flash-disk port:** port family, contact count, orientation, contact functions, internal board endpoint, and cable map are not stated.
- **LAN printing:** the manual does not identify a physical network jack, connector family, or contact map. Do not infer an Ethernet socket from the word “LAN”.
- **Touchscreen:** display size and user-interface role are stated; its cable, connector, contact count, and electrical map are not.
- **Rear power outlet and toggle switch:** the manual rates the K1 at 100–120 V AC or 200–240 V AC, 50/60 Hz, 350 W. It says to use a grounded three-prong wall outlet and the supplied cord. It does not map the appliance inlet's individual cavities or switch contacts. This mains circuit is not a SmoothieBox signal or load connection.
- **Printer subsystems:** the manual names the nozzle assembly, filament detection, printing platform, side fan, and back fan and states that the K1 has a heated bed, auto-levelling, and filament detection. It supplies no source-numbered external harness or mainboard contact schedule for these functions.

Accordingly, the current source set establishes no individually numbered K1 electrical contacts. Do not create editorial pin slots or use a K1 Max/K1C wiring illustration as K1 evidence. All SmoothieBox routes remain OPEN; no guessed routes are warranted. No DB25 connector is documented for this K1 source scope.

## Related-source exclusion

Creality's K1-family mainboard replacement article is tagged for K1, K1 Max, and K1C, but the embedded image paths identify a “k1max” board-replacement image set. The article instructs users to reconnect existing wires but provides no transcribable pin schedule in its text. Because the pictured revision/product applicability is ambiguous, it is not used to assign K1 connector names, contact counts, or pin functions.

- Creality Wiki article: https://wiki.creality.com/zh/k1-flagship-series/k1-series-general-documents/mainboard-replacement

## Diagram accounting

The K1 diagram inventories the source-named exterior controls/interfaces and the source-named printer subsystem groups with no guessed contact positions. Counted machine contacts: 0. Counted form-only contacts: 0. Guessed routes: 0. Known pin functions not assigned to contacts: 0, because no K1 contact labels were found. SmoothieBox exterior contacts are shown as proposed carrier terminals, not as evidence that this machine has been converted.
