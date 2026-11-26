# Changelog

Notable user-visible documentation changes. No earlier changelog or release tags were present; the initial history below is backfilled from relevant repository commits.

History: see CHANGELOG.archive.md.

## [Unreleased]

### Fixed

- Extension board drawings now show the solder pads of underside-mounted pin headers, plated test points and prototyping holes.
- Extension board drawings on the board directory and board pages now show their mounting and cable-tie holes.

### Changed

- Extension board pages: rebuilt 20 more pages (Qwiic, SD card, wireless, USB and serial Wi-Fi, CAN, the Arduino, BeagleBone, Edison, Papilio, Raspberry Pi, ESP32 and Teensy host adapters, the parallel-port jig, both D-sub adapters and the buzzer module) to the current page layout, and updated their directory descriptions.
- Extension board pages: rebuilt the level shifting, opto-isolation pass-through, SPI Hub, UART breakout, cheap UART adapter, CPLD adapter, differential signal, differential SPI, differential STEP/DIR/EN and long-distance extender pages to the current page layout, with annotated drawings, wiring steps and chip datasheets.
- Use only transparent black board renders in the extension directory and leave rows without suitable artwork blank.

- Rewrote the extension board pages as finished product pages, without design-status or revision wording, and reduced the extension board directory to board (with a preview linking to its page) and purpose.

- Organize the extension board directory in a single table grouped by function, with thumbnails beside the board guide links and descriptions.

- Combine board names and previews in the extension board directory, link previews to their guides, and remove the Guide status column.

- Use transparent, board-only illustrations for historical extension directory thumbnails.

- Moved the homepage feature roundup below Communication as “What’s new” and marked standalone feature pages in the documentation tree with ². Version-specific tree entries follow the firmware selector. The roundup shows compact version labels and a short description for each feature.

- Serve extension-board diagram downloads and figures as optimized PNGs, with their editable SVG sources preserved in the diagram repository.

- Share the diagram viewer stylesheet across pages to reduce page size and allow browser caching.
- Reduced the size of extension-board SVGs by sharing repeated drawing geometry and omitting unused hidden PCB layers from standalone images.
- Made the site header wrap on narrow screens, kept extension-guide titles visible, and contained wide contact tables within the page.
- Gave extension-board diagrams, guide images and downloads stable filenames and updated their references across the documentation.
- Added a stepper driver comparison table shared by the four stepper driver board pages.
- Additional general purpose outputs / servo board page rewritten at full level (v18): pinout, links, no-servo pulse check, mounting and electrical appendices.
- Servo control page rewritten at full level (v24): pinout of the five connectors, links, tour, firmware limits, mounting and electrical appendices.
- Leadshine-like external servo drivers page rewritten at full level (v27): pinout, links, tour, firmware limits, mounting and electrical appendices.
- Rewrote the Leadshine-like external stepper drivers page (revision v18) on the full extension-board template: not-ready-to-energize warning, 16-marker board tour with popovers, J1 pinout, supply and motor connectors, solder-link and test-point tables, a configuration table with the TMC2590 actuator and switch example, light table, downloads, mounting and electrical appendices; dropped the typo contact email line.
- Rewrote the Trinamic TMC2660 stepper driver breakout board page (revision v19) on the full extension-board template: not-ready-to-energize warning, 13-marker board tour with popovers, J1 pinout split into motion and SPI lines, power and motor connectors, solder-link table, a configuration table with the TMC2660 actuator and switch example and its current-scale rounding, light table, downloads, mounting and electrical appendices; dropped the typo contact email line.
- Rewrote the Allegro A5984 stepper driver breakout board page (revision v19) on the full extension-board template: not-built warning, 14-marker board tour with popovers, J1 pinout, power and motor connectors, solder-link table with delivered states, a current-setting section with the VREF relation, a configuration table with the external-driver and switch example, light table, downloads, mounting and electrical appendices; dropped the typo contact email line.
- Rewrote the Pololu driver breakout board page (revision v34) on the full extension-board template: not-built warning, 14-marker board tour with popovers, J1/J2 pinout with chain links, motor and power connectors, solder-link table, signal-path figure, light table, configuration table with the single-motor external-driver example, downloads, mounting and electrical appendices; dropped the typo contact email line.
- Rewrote the advanced H-bridge encoder board page (revision v38) on the full extension-board template: not-ready-to-energize warning, 14-marker board tour with popovers, pinouts for both sockets and the power, motor and encoder connectors, solder-link table with delivered states, signal-path figure, five-light table, downloads, mounting and electrical appendices; states that the checked firmware has no motor controller; dropped the typo contact email line.
- Added a temperature boards comparison table (simple PT100 amplifier, SPI PT100, SPI thermocouple), shown on each of the three pages.
- Rewrote the SPI Thermocouple Breakout page (revision v16) on the full extension-board template: not-ready-to-energize warning, 9-marker board tour with popovers, pinouts for both sockets and the thermocouple terminals, solder-link table with delivered states, signal-path figure, downloads, mounting and electrical appendices; states that the checked firmware has no MAX31856 driver; dropped the typo contact email lines.
- Rewrote the SPI PT100 amplifier board page (revision v17) on the full extension-board template: not-ready-to-energize warning, 8-marker board tour with popovers, pinouts for both sockets and the sensor terminal block, solder-link and test-point tables with delivered states, light table, signal-path figure, downloads, mounting and electrical appendices; states that the checked firmware has no MAX31865 driver; dropped the typo contact email lines.
- Rewrote the simple PT100 amplifier board page (revision v22) on the full extension-board template: not-ready-to-energize warning, 9-marker board tour with popovers, pinouts for both sockets and the sensor terminal block, link and test-point tables, signal-path figure, downloads, mounting and electrical appendices; states plainly that the checked firmware has no matching conversion; dropped the typo contact email line.
- Rewrote the debug probe page (revision v24) on the full extension-board template: not-ready-to-connect warning, 13-marker board tour with popovers, pinouts for the target debug connector, serial port and probe programming header, link and test-point tables, signal-path figure, light table, downloads, mounting and electrical appendices; dropped the typo contact email line.
- Rewrote the camera trigger board page (revision v17) on the full extension-board template: not-ready-to-energize and camera-compatibility warning, 10-marker board tour with popovers, pinouts for the host socket and the camera jack and header, link and test-point tables, meter-only switch configuration with its test sequence, signal-path figure, light table, downloads, mounting and electrical appendices; dropped the typo contact email line.
- Rewrote the spectral analysis page (revision v31) on the full extension-board template: not-ready-to-energize and 3.3 V-only warning, 8-marker board tour with popovers, pinouts for the host socket and I2C connector, programming-link note, signal-path figure, downloads, mounting and electrical appendices; no configuration is given because no spectral driver exists in the pinned firmware.
- Rewrote the SCD41 environmental sensor page (folder smoke-detector, revision v18) on the full extension-board template: not-a-smoke-or-fire-alarm warning, 11-marker board tour with popovers, pinouts for both sockets and the I2C connector, solder-link table, signal-path figure, light table, downloads, mounting and electrical appendices; no configuration is given because no SCD41 driver exists in the pinned firmware.
- Rewrote the water flow sensor adapter page (revision v20) on the full extension-board template: not-ready-to-energize warning with the 5 V-only sensor limit, 9-marker board tour with popovers, pinouts, link and test-point tables, observation-only configuration with a state table, signal-path figure, light table, downloads, mounting and electrical appendices; dropped the typo contact email line.
- Rewrote the pressure sensor page (revision v23) on the full extension-board template: design-candidate warning, 9-marker board tour with popovers, pinouts for the input and shifted chain sockets, link table, signal-path figure, downloads, mounting and electrical appendices; no configuration is given because no pressure driver exists in the pinned firmware.
- Rewrote the HX711 load-cell amplifier page (revision v16) on the full extension-board template: not-ready-to-energize and no-driver warning, 11-marker board tour with popovers, pinouts for the host socket and both load-cell terminals, chain-link and test-point tables, signal-path figure, downloads, mounting and electrical appendices; no configuration is given because none is supported.
- Rewrote the FSR breakout board page (revision v18) on the full extension-board template: not-ready-to-energize warning, 12-marker board tour with popovers, pinouts, solder-link and test-point table, signal-path figure, light table, observation-only configuration, downloads, mounting and electrical appendices.
- Rewrote the Position feedback board page (revision v33) on the full extension-board template: count-only and no-driver warning, 11-marker board tour with popovers, pinouts for the input socket and encoder connector, solder-link table, signal-path figure, light table, downloads, mounting and electrical appendices; no configuration is given because none is supported.
- Rewrote the Filament progress sensor page (revision v29) on the full extension-board template: no-driver and optics warning, 9-marker board tour with popovers, pinouts for both sockets with the chain-link table, test points, signal-path figure, downloads, mounting and electrical appendices; no configuration is given because none is supported.
- Rewrote the Filament encoder board page (revision v14) on the full extension-board template: mechanism and jam-alarm warning, 9-marker board tour with popovers, Gadgeteer pinout, test points, three-wire setup, filament-detector configuration with calibration steps, downloads, mounting and electrical appendices.
- Rewrote the Inductive proximity sensor adapter page (revision v22) on the full extension-board template: not-ready-to-energize warning, 11-marker board tour with popovers, pinouts for the three connectors, solder-link table, signal-path figure, light table, state-diagnostic configuration, downloads, mounting and electrical appendices.
- Rewrote the BLTouch-like probe page (revision v18) on the full extension-board template: experimental-design warning, 14-marker board tour with popovers, pinouts for all five connectors, solder-link table, block diagram, six-light table, observation-only configuration, downloads, mounting and electrical appendices. No deploy or probing procedure is given.
- Rewrote the Hall endstop breakout page (revision v18) on the full extension-board template: 9-marker board tour with popovers, pinout, signal-path figure, LED table, input-check and X-min homing examples, downloads, mounting and electrical appendices.
- Rewrote the Mechanical endstop breakout page (revision v18) on the full extension-board template: 12-marker board tour with popovers, pinouts, signal-path figure, LED table, input-check configuration, downloads, mounting and electrical appendices.
- Rewrote the Laser diode driver breakout page (revision v44) on the full extension-board template: do-not-fabricate and do-not-power warnings, 12-marker board tour with popovers, pinouts, permission-logic figure, fault-light table, downloads, mounting and electrical appendices. No firing procedure or configuration is given.
- Rewrote the Laser barrier board page (revision v20, emitter and receiver) on the full extension-board template: not-for-people-protection warning, two board tours with popovers, pinouts, wiring figure, Switch and Endstops configuration, light table, troubleshooting, downloads for both boards, mounting and electrical appendices.
- Rewrote the ATX connector board page (revision v20) on the full extension-board template: mains and no-hot-plug warnings, 13-marker board tour with popovers, J1/output/Gadgeteer pinouts, wiring figure, Switch and Endstops configuration, light table, troubleshooting, downloads, mounting and electrical appendices.
- Rewrote the Input protector page (revision v17) on the full extension-board template: surge and prototype warnings, numbered board tour with popovers, pinout including the two host-connector footprints, six-lead wiring, endstop read and homing examples, light table, troubleshooting, downloads for both connector builds, mounting and electrical appendices.
- Added a shared comparison table of the six switching boards (AC and DC mechanical relays, seven-channel DC relay, single-channel solid state relay output, AC SSR, DC SSR) to each of their pages, and aligned the controller header name to G_F (J37) on the solid state relay output page.
- Rewrote the Gate boards page (revision v18, the 2-input AND board) on the full extension-board template: not-safety-rated and prototype warnings, numbered board tour with popovers, pinout with the input/output contact-order warning, step-by-step bench test, configuration examples, LED table, troubleshooting, downloads for both connector builds, mounting and electrical appendices.
- Rewrote the DC SSR board page (revision v18) on the full extension-board template: danger and prototype warnings, numbered board tour with popovers, pinout, step-by-step start, configuration examples, wiring of the DC load, troubleshooting, downloads, mounting and electrical appendices. No load rating is claimed.
- Rewrote the AC SSR board page (revision v16) on the full extension-board template: danger and prototype warnings, numbered board tour with popovers, pinout, step-by-step start, configuration examples, wiring of the load, troubleshooting, downloads, mounting and electrical appendices. No load rating is claimed.
- Rewrote the Single-channel solid state relay output page (revision v15) on the full extension-board template: danger warning, numbered board tour with popovers, pinout, step-by-step start, configuration examples, wiring of the load, troubleshooting, downloads, mounting and electrical appendices. No load rating is claimed.
- Rewrote the Seven-channel DC mechanical relay page (revision v24) on the full extension-board template: numbered board tour with popovers, pinout, step-by-step start, configuration examples, wiring the DC loads, power options, chaining, troubleshooting, downloads and the mounting and electrical appendices. Ratings are marked as design targets.
- Rewrote the Single-channel DC mechanical relay page (revision v20) on the full extension-board template: numbered board tour with popovers, pinout, step-by-step start, configuration examples, wiring the DC load, power options, troubleshooting, downloads and the mounting and electrical appendices. Ratings are marked as design targets.
- Rewrote the Single-channel AC mechanical relay page (revision v19) on the full extension-board template: numbered board tour with popovers, pinout, step-by-step start, five configuration examples, wiring of the load, power options, troubleshooting, downloads, mounting dimensions and an electrical appendix. The board drawing is now exported from the design files.

- Updated the three MOSFET guides and their shared comparison for 3.3 V control and Gadgeteer chaining. The Small Advanced revision 29 and Large revision 18 guides show the new optically isolated inputs and revision-bound downloads.

- Updated the Small Basic MOSFET guide and drawing for revision 02, including the direct 3.3 V input and connector selection.

- Ordered the MOSFET comparison from Small Basic through Small Advanced to Large.

- Updated the laser PSU adapter guide and downloads for revision 27. The example wiring shows four straight connections between matching terminal positions.

- Renamed the two small MOSFET boards: the protected board is now "Single-channel small MOSFET advanced output" (`/extensions/single-channel-small-mosfet-advanced-output`) and the budget board "Single-channel small MOSFET basic output" (`/extensions/single-channel-small-mosfet-basic-output`). The old addresses redirect. Image, download and drawing files were renamed to match, and the comparison table puts the two small boards side by side.

### Added

- Added a temperature boards comparison table (simple PT100 amplifier, SPI PT100, SPI thermocouple) shown on each of the three pages.
- Documented the Advanced MOSFET Gadgeteer prototype and its seven-board chain in the guide and shared feature comparison.

- Added a flat top-view drawing and layout dimensions to the budget MOSFET guide.

- Added a shared feature comparison with links to both single-channel MOSFET board guides.

- Documented the budget MOSFET prototype and its planned Gadgeteer chain pinout. Listed it next to the protected small MOSFET board on the homepage.

- Added Chris Cecil’s historical boards to the homepage categories and linked SVG board previews in the extension-board directory. The homepage explains the historical marker at the bottom of the page.
- Split the Bouni analog and RS-485 spindle controls into separate guides with their own board diagrams and navigation entries. The homepage lists the RS-485 board under Communication and signal interfaces.

- Added Linux package installation commands for dfu-util to the firmware recovery guide.

- Rewrote the Seven-channel AC mechanical relay extension page as a reader guide: overview with status badge, tech specs, numbered board tour, colour-coded pinout, a quick start that ends in a relay clicking before any mains wiring, a complete seven-relay Switch configuration (`M64.1`–`M64.7` on, `M65.1`–`M65.7` off), load wiring, jumper options, troubleshooting table and downloadable v17 schematic and parts list. Adds the shared `_includes/extension-board-page.html` stylesheet for extension pages.
- Rewrote the Laser PSU adapter board extension page as a reader guide in the same form as the relay page: overview with status badge, tech specs, numbered board tour, pinout for the control connector (Smoothieboard V2 Prime header G_C), the four loop terminals and the laser supply connector, a quick start checked with LEDs and a multimeter before any laser supply is connected, laser and optional kill-button configuration, supply wiring, signal-path diagram, solder-link options, troubleshooting and downloads (v25 schematic and parts list now published beside the page images).
- Rewrote the Additional endstop inputs breakout and Single-channel large MOSFET output extension pages as reader guides in the same form as the relay and laser pages (overview, tech specs, board tour, pinout, quick start, verified configuration, wiring, how it works, options, troubleshooting, downloads, revisions). The endstop page gained a v25 board rendering, schematic and parts list; the MOSFET page a v17 parts list.
- Rewrote the Power supply connector board and Single-channel small MOSFET output extension pages as reader guides in the same form as the relay and laser pages (overview, tech specs, board tour, pinout, quick start, verified configuration, wiring, how it works, options, troubleshooting, downloads, revisions). Both now describe the newest design revision (power supply connector v25, small MOSFET v27, previously v23 and v26) and gained a board rendering, schematic and parts list for it. The small MOSFET page states plainly that the board is designed for a 5 V control signal and that a 3.3 V Smoothieboard V2 Prime pin is below it.
- Added Same Sky’s manufacturer product page beside the Buzzer Module’s direct datasheet link as a fallback for readers whose client cannot open the PDF; the board’s complete external-link audit remains open.
- Added a source-bound UART Breakout v17 Prime-to-jaUART electrical plan with individual leads, complete cable connections and unused-contact accounting; physical mating, peripheral routing and operating qualification remain open.
- Added a source-bound Servo Control v24 Prime host-cable plan and replaced its horizontally overflowing interface table with nine wrapping entries. Its index states that the pinned Smoothieware V2 snapshot has no named TMC4671 application/configuration; the interface region fits at 390 px, while complete motor/peripheral wiring, power-stage choice, physical mating and full-page reader checks remain open.
- Added the exact selected v17 Input Protector PCB and schematic SHA-256 values to its source notes, and updated the index with the current 35-diagram desktop/phone Fit readback and remaining open gates; electrical limits and operation remain unqualified.
- Updated the Large MOSFET v17 index entry with current desktop/phone Fit results across all 31 diagrams; five dense reference/contact sheets still need zoom, and powered-load limits remain open.
- Updated the Raw Pins v15 index after its source-bound phone label repair: the selected full-board reference, Prime installation overview, six contact sheets and termination keys read at Fit. A 68-view census plus two post-edit overview captures match the current local Jekyll page and assets with no overflow; fine native lettering and dense supplemental/historical sheets keep the full narrow-reader gate open.
- Updated the Power Supply Connector Board v23 index with its verified desktop/phone reading path and 69 live-matching instructional assets; the unfinished source still lacks the contracts needed for a powered wiring diagram.
- Updated the Single-channel DC Relay v20 guide and index with seven source-bound readable phone companions and current preview readback: all 42 SVG assets and the source archive match, and 84 desktop/phone viewer interactions completed. Whole-board phone Fit and qualified powered installation remain open.
- Updated the AC SSR v16 index with its source-bound three-lead phone overview and isolated viewer results, retaining original-board phone readability, powered/mains safety and source-license gaps.
- Updated the Seven-channel DC Relay v24 index with its source archive, interface/firmware source checks and exact limits of the stale-page viewer census; powered wiring and phone readability remain open.

### Changed

- The "Compare the MOSFET boards" table is now a three-board feature table with ticks and crosses, with a few specification rows at the top.
- Removed the in-development Gadgeteer revision section and its angled rendering from the small MOSFET page.

### Changed

- Six extension-board pages (small MOSFET, large MOSFET, endstop inputs, seven-channel relay, power supply connector, laser PSU adapter), after the owner's 2026-11-23 review: board pictures are transparent SVG drawings with no stand-in blocks; pointing at a board-tour number opens a popover with that part's description; Configuration gives one example per firmware module that can use the board; "What the LEDs tell you" is a table with one column per light; new appendices "Mounting dimensions" and "Electrical specifications"; the "Revisions and status" sections are removed.
- Power supply connector page: new figure aligning the board's nine contacts with the terminal strip of a typical power supply, X CHAIN pin table and chaining figure. Laser PSU adapter page: wiring figures use a drawing of a typical laser supply connector panel. MOSFET pages: "Several boards on one port" figure through the screw-terminal breakout, and load terminals drawn as one connector.
- New shared includes `docs/_includes/extension-breakout-fanout.html` and `docs/_includes/extension-chain-figure.html`; equipment drawings under `docs/images/extensions/equipment/`.
- Updated the laser PSU adapter guide for revision 26, including both PSU connector options, the remapped control input, and the revised board drawing.

- Grouped the homepage extension-board links into responsive columns, placed them before research, and moved reviews to the bottom.

- Added step-by-step USB DFU recovery, identified the BOOT0 button by its MSC board label, and restored the extension-board include path needed for website publishing.

- Restored prominent flashing warnings and SD-card troubleshooting clues, and linked the flashing guide to the dedicated connection instructions.

- Rewrote the firmware flashing guide with separate board-specific update and recovery steps, configuration preservation, verification and corrected rollback guidance.

- Updated the Additional Endstop v23 guide with the complete wiring view at the start and corrected the one-input `M119` example. Enlarged all five focused ribbon closeups and verified them in actual desktop and phone Fit viewers; their SVG bytes match the local Jekyll preview. Fine labels in the main board view, painted-wire visibility and physical/powered qualification remain open.

- Corrected the Qwiic-to-Gadgeteer v20 index to the latest shared-preview review: 28 assets match and 18 required figures passed 36 desktop/phone Fit views; source routing, complete installation, external engineering links and powered use remain open.

- Updated the Buzzer Module v14 index with the current 22-figure, 44-view desktop/phone review and pinned firmware example, while distinguishing source-paint checks from still-open strict route, clearance, mating, rail and powered-operation qualification.

- Updated the Trinamic TMC2660 v19 index with current source and reader evidence: all 39 figures pass desktop/phone viewer checks, while the motor/power path and host cable chain remain incomplete and route/paint/source gates remain open.

- Updated the Hall Endstop v18 guide and index after an independent desktop/phone review: the three-board proposal is readable but source paint is unverified, the annotated reference lacks per-pin detail, and the guide now describes the proposal without contradiction. Physical mating and powered operation remain open.


- Reworked the Pressure Sensor v23 guide around source-scoped specifications, limits, pickup/leak examples and an explicit three-lead proposal; preserved all 65 prior figures and added a source-preserving contact reader. All 66 current SVGs match their reported bytes; four primary desktop/phone Fit views pass. Supplementary Fit, shared-preview readback, complete wiring, power, ADC calibration, firmware conversion, pneumatics, physical mating and route/paint acceptance remain open.


- Updated the Position Feedback v33 guide and index with source-backed signal direction and a pinned firmware-search result: no LS7366R driver/configuration was found, so the guide directs support requests to the supplied contact. All 26 diagrams passed asset readback and 52 Fit interactions; small wiring labels, incomplete-source installation and physical/runtime qualification remain open.


- Expanded the Raw Pins Screw Terminal v24 guide with a source-replayed power/direction/limits table, firmware button instructions, annotated contacts and an unpowered Prime-to-dry-button wiring proposal. The current table and 33 linked assets match Jekyll, and all 18 required figures pass desktop and phone Fit review; full route/paint replay, fitted cable/mating, ratings and powered operation remain open.

- Updated the Input Protector index to report the source-checked six-lead circuit and isolated desktop/phone Fit, while disclosing that the new diagram is not yet served by the shared preview and key electrical/physical gates remain open.

- Updated the Qwiic adapter index with a dated access check: the Qwiic specification responds, while all three linked extension-board source URLs return HTTP 404 anonymously; source availability remains open.

- Corrected the Raw Pins v15 narrow-reader status: 68 desktop/phone Fit captures loaded, but phone Fit does not make full-board pad and wiring details readable; the narrow label gate remains open pending a complete reader review.

- Put the full annotated Raw Pins v15 board reference before its compact locator so connector contacts and functions are the first board diagram readers see.
- Corrected the Raw Pins v15 index status to distinguish its source-bound Prime-to-button cable proposal from a qualified installation; full route/paint, reader, mating, continuity and installed-firmware checks remain open.
- Corrected the LED Breakout v18 guide and index to surface the schematic/footprint polarity conflict, distinguish candidate parts from verified assembly, and report incomplete guarded routing (2/24 route parts, no replacement diagram); firmware, paint, reader and powered-use checks remain open.
- Clarified Small MOSFET v26 intended uses, source identity, connector directions and return paths, indicator limits, firmware diagnostic scope and conditions required before powered use; the application remains electrically unqualified.
- Updated the Small MOSFET v26 index after the current page-bound reader review: all 36 figures match local/preview assets and passed 72 desktop/390 px Fit captures, including six repaired sheets. Reader gates now pass; annotated-reference completeness, full wiring, route/paint, electrical qualification and installed runtime remain open.
- Updated the Large MOSFET index with the independent source-replay and measured desktop/phone Fit results for five targeted figures; the remaining page, wiring and powered-use reviews stay open.
- Updated the Long-Distance Extender index to describe the ten-lead unpowered Prime, emitter, receiver and meter plan, while leaving powered installation and cable/rail/protection qualification open.
- Moved the Long-Distance Extender ten-lead unpowered continuity/layout plan out of the collapsed historical comparisons, labelled the seven-lead source view as an incomplete signal subset, and kept all power and distance qualifications open.
- Expanded the Large MOSFET v17 guide with the Prime J37 host-contact schedule and exact connector mapping, and updated its index row to state that only three host leads are documented while peripheral and powered-use connections remain unresolved.
- Reorganized the historical jaUART guide around its overview, connector direction and console use, added source-revision and dimensional details, and corrected the Prime mapping to P11 Prime2660. The canonical-art console proposal is source-bound; physical mating, voltage/backfeed and supplementary schematic phone readability remain open.
- Clarified the Proximity Adapter v22 eight-conductor example and added power-off assembly checks, distinguishing native host leads from the schematic terminal-bank sensor proposal. Native sensor termination, routing/paint and current preview readback remain open.

- Clarified the Small MOSFET v26 source-contract conditions for the isolated 12 V resistive-load study, including source capacitance/isolation, current limits, resistor verification and protected loaded-drive criteria; these remain qualification requirements rather than proven operating limits.

- Changed: Clarified that extension-board row summaries preserve source findings and open work; none of the 123 guides currently has every applicable gate verified against its current page revision.

- Fixed: Improved Teensy-to-Gadgeteer contact-10 GND label contrast in the v05 guide diagrams and clarified that the wiring map does not document a qualified physical installation.

- Changed: The Raspberry Pi Gadgeteer HAT v03 guide now binds its board abstract to the retained canonical SVG and source manifest in `smoothie-diagrams`.

- Changed: Expanded the ESP32 DevKitC Gadgeteer host adapter guide around its exact unrouted v03 source, with full connector schedules, an ESP32-to-Buzzer connection study, explicit single-source power restrictions and the remaining firmware, fit and operating limits. Prime wiring and Smoothieware settings are inapplicable to this independent host.

- Changed: Reconciled the extension-board index rows for the ESP32, Raspberry Pi HAT and Teensy Gadgeteer hosts with their source-derived guides, current local asset availability, reader-review gaps and the fact that Prime wiring and Smoothieware configuration do not apply to these independent hosts.

- Fixed: Replaced the Raw Pins v15 ten-core dry-button overview with a source-preserving exterior-lead rendering. The local Jekyll preview serves the exact replacement SVG; the desktop Fit view is readable, while narrow-viewer acceptance remains open.

- Changed: Reorganized the Input Protector v17 annotated board reference as a compact eight-group source map while preserving its native board art and detailed contact/circuit sheets.

- Fixed: Increased the Input Protector v17 reader-reference canvas to leave clear space below the final test-pad explanation while preserving board geometry and callouts.

- Fixed: Added clear space below the Raw Pins Screw Terminal v24 reference callouts in the board-fit viewer while preserving the abstract board and connector leaders.

- Clarified both Small MOSFET v26 input ranges and the common-ground requirement while retaining unqualified electrical limits; corrected the historical Small MOSFET overview description and reconciled its downloadable PCB/netlist against the pinned upstream snapshot.

- Changed: Expanded the extension-board directory to 84 modern/host-adapter guides and 39 historical/related guides, adding a source-only Carvera prototype record. Its required diagrams, verified wiring and Smoothieware support remain incomplete; the counts do not imply product availability.

- Changed: Updated the modern and historical thermocouple index rows after desktop and phone review of their selected wiring and contact-key viewers; retained driver, mating and electrical-qualification gaps.

- Changed: Updated the Small MOSFET v26 index status after desktop and phone review of its complete buffered candidate and cable-contact sheets; retained driver, protection and powered-use gaps.

- Clarified: Recorded that the historical MAX31855 page lacks a canonical abstract board reference; its rendered wiring views do not satisfy that missing diagram requirement.

- Clarified: Updated the Hall guide’s unresolved-work section to reflect the reviewed complete Prime-to-Hall harness while retaining connector-mating and powered-operation limits.

- Fixed: Enlarged the six remaining Button Boards overview revision, connector-reference and detail-navigation labels to meet phone Fit readability while preserving the native board and leader paths. Corrected the alternative Prime J37 contact-key heading and enlarged both alternative connector keys without changing pad geometry.

- Fixed: Corrected the Small MOSFET buffered-study enable and command descriptions and added its matching board-disconnected PI5 digital configuration, separate from the PB1 diagnostic.

- Fixed: Enlarged the Buzzer complete-board circuit labels and cable paths while preserving pin-one markers and native contacts; corrected its board-source metadata.

- Fixed: Enlarged the Water Flow complete-circuit labels and wire paths while preserving both pin-one markers and exact native copper contacts; corrected the drawing’s board-source metadata.

- Clarified: Separated the Small MOSFET complete buffered circuit study from its PB1-only diagnostic and firmware test so their pin assignments and disconnected-contact instructions cannot be mistaken for one circuit.

- Fixed: Enlarged eleven Button Boards contact and role-label sheets, moving annotations outside native board artwork and retaining exact contact identities and wiring.

- Fixed: Moved the Small MOSFET buffered-study ribbon contact numbers onto clear margins and enlarged both native connector keys for phone Fit, preserving source artwork and wire endpoints.

- Fixed: Enlarged seven Button Boards cable-path and board-detail annotation panels while preserving native artwork, cable paths and numbered continuations.

- Added: Complete four-board Small MOSFET buffered circuit study, native ribbon contact sheets and explicit unresolved driver, power and firmware qualifications.

- Fixed: Enlarged the Screw Terminal breakout complete-circuit wire paths and essential labels for phone and desktop Fit, preserving native artwork and contact positions.

- Added: Matching single-channel solid-state relay v15 CAD source-study download with local libraries, original revision notices and explicit fabrication/operation limits.

- Fixed: Made the Button Boards complete wiring overview readable at desktop and phone Fit, preserving native board/contact geometry and exposing native labels beside compact plug illustrations. Added source-specific board/host connector distinctions and cable-selection guidance, and updated the index to distinguish the verified overview from the remaining whole-guide review.

- Changed: Marked whole-view wire visibility as under review across the previously reviewed extension guides while preserving verified research, archives, contacts, firmware and link information.

- Added an explicit Servo wiring-illustration review note for projected plug paths crossing unused pin positions and wires too thin at Fit.

- Clarified Large MOSFET reader-review status while retaining assembly, operation and incomplete load-circuit limits.

- Added eight keyed Large MOSFET v17 source-reference sheets to its guide for the host, supply, load, protection, indicators, test pads and mounting; live reader verification is pending.

