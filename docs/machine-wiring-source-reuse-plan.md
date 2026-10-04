# Twelve-machine controller source reuse: design and implementation plan

## Goal and source contract

Implement the 2026-10-02 owner correction in `docs/machine-wiring-design-rules.md` across all twelve named guides. Source identity takes priority over invented geometry. The current served Smoothie-central page is byte-identical to `/home/arthur/dev/smoothieware/smoothie-box/docs/smoothie-central.html`, SHA256`c8138622a7ad1258da4d0bab15bde0a99f3c3f20513197eba177a9d5c5b07437`. Its latest open Chapter18 asset is `v2-central-compact-gadgeteer-wiring.svg`, SHA256`6807a6ddc6ce9600e17b18afccc84d985eb41576df7be099255ee3ee48e6983c`. Preserve the exterior geometry/aspect,24 real border connector banks andpin pills; GA–GI are separate header cards,not fabricated case screw terminals.

Prime explorer source uses P11PCB; current guides cite P12 electrical evidence. Resolve this revision boundary from actual schematics/PCB before assigning a route. Do not relabel P11 artwork as P12 without correspondence evidence. Hide silk,retain PCB/connectors.

## Architecture

Separate reusable sourced controller artwork/contact coordinates from machine electrical graphs andperipheral layout. `render_centered_wiring.py` consumes explicit authoritative contact anchors; undefined contacts fail preparation orremain explicitly unresolved without creating fictitious connectors. `centered-guides.json` retains stable prior records andadds/qualifies routes,interfaces andalternatives. `build_centered_guides.py` renders main andsubsidiarycircuits andincrementally regenerates the paired canonical/detail/index projections through `build_machine_pages.py`. Preserve old851-main revision before replacing projections.

## Ownership and sequence

- [ ] Source review: centered_svg owns read-only artwork/coordinate discovery; atlas_page_verifier owns read-only electrical gaps/interfaces; machine_pages owns read-only consumer contract. Root records sources andprepares one bounded browser review from complete relevant originals/evidence.
- [ ] Controller adapter: renderer owner extracts exact source geometry andphysical contact anchors,records source hashes andrevision; no internal wiring/silk. Root reviews correspondence.
- [ ] Electrical graph: root selects sourced interfaces andadds complete supported routes/alternative subsystems. Preserve prior records/source statuses; qualify assumptions intext. Never energize unqualified local CAD merely because a top-view exists.
- [ ] Renderer: source functional palette,solid rounded orthogonal wires,descriptiveprimarylabels/greysecondaryIDs,actual connector appearance andside-aware peripherals. All used andunused controller contacts retained.
- [ ] Page consumer: machine_pages owns only agreed generator caption/legend/alternative diagram changes; root owns production regeneration. New detail chapters preserve previous drawings andrequest verbatim.
- [ ] Per-machine acceptance/incremental integration: inspect actual rendered images,controller identity androute/return completeness,then update machine+index together aftereach accepted profile.
- [ ] Final audit: independent all12 render/contact/route checks; all330 data preservation; publisher dependency closure,actualHTTPhashreadback andbrowserviewer/navigation.

## Acceptance and limits

Every named machine musthave correct sourcegeometry,real physical terminals,function-first labels,solid colour semantics,orthogonal rounded routing,appropriate peripherals,complete supported power/command/feedback/safety paths andrequired alternatives. Stable identifiers remain traceable. Unresolved fitted revision/ground/isolation/contact positions are explicitly documented; explanatory proposed wiring is not installed hardware qualification.

No tests,Git mutation,newbranches,process restarts oradjacent PCB implementation are authorized. Existing publisher remains intact. Documentation,structural checks,actual renders andpublic/browser readbacks provide the requested evidence.

## Evidence addendum: resolved preparation details

The Prime comparison initially reported all libraries different due to a SWIG string conversion error. The corrected comparison identifies only J5 as a different library identifier. J5–J8 pad positions and phase functions match; J42 differs in rail spelling; J16 moves by +0.025/−0.025 mm. These findings support contact-level correspondence, not a blanket claim that P11 and P12 boards are identical. The renderer must retain artwork provenance separately from the electrical revision.

The Avid sensor candidate requires a complete host supply path in addition to signal and return. The existing source graph omits that path on the generic interface. The local adapter's exact terminals, jumpers and constraints will enter the grounded graph amendment and subsystem drawing. Never connect the retained 24 V field directly to a 3.3 V controller input.

The page audit requires replacing active dotted-wire captions and C-number-first labels, exporting geometry/colour metadata, explicitly selecting the main figure, adding current subsystem and alternative assets, and retaining prior drawings as closed history. Preserve the existing render_centered_wiring(guide)->str contract unless renderer and builder changes are coordinated.

The accepted 851-main revision is retained in `src/docs/machine-control-pinout-survey/square-redesign-history/851-main-before-source-geometry-20261002/`: forty exact source, SVG, evidence and canonical article files with a hash manifest. This retention protects the previous result while current drawings are revised.

## Source asset preparation and interface evidence

The extracted SmoothieBox exterior and Prime connector artwork have been inspected as rendered images and staged under `src/docs/machine-control-pinout-survey/centered-sources/`. This is source preparation; the twelve current diagrams have not yet been regenerated.

The local sensor adapter top view shows separate field and host regions, field screw terminals, the host SIG/GND/5V connector, and the NPN/PNP and NO/NC selectors. Its drawing must preserve those terminal identities and isolated domains. The local spindle adapter top view shows the five VFD terminals and two host headers; the supplied image crops the lower connector edge. Use a full fit image when available, or disclose the crop rather than treating it as complete board geometry.

Both local interface contracts and top views are retained as a consultation addendum. They were not included in the initial review attachments; supply them in the same review conversation when the interface amendment batch is requested. The initial review remains active, with one confirmed submission and no resubmission.

A full envelope spindle top view was subsequently found and inspected at the retained v01 `renders/envelope/analog-populated-top.png` path. It includes the complete J3 connector and supersedes the cropped image for the proposed drawing; both original images remain retained evidence.

A direct read of the authoritative Avid wire panel confirms the unused host supply contact is named `isolation.supply`, rather than the shorthand `isolation.v` used in an earlier working summary. Preserve existing six edge indices in each sensor panel and append the missing supply route so connection identifiers remain stable. Use the current `wire_panels` graph key; `panels` is not part of the stored guide schema.

The inspected complete-envelope spindle top view and sensor top view are now owned diagram assets in `centered-sources/`, with exact source paths, byte counts, SHA256 hashes and qualification status in `local-interface-render-provenance.json`. This makes their proposed use reproducible without depending on an external working folder. Current machine figures remain unchanged pending the recovered review and coordinated integration.

## Per-machine acceptance inventory

Every gate below is pending for the new machine-diagram revision. Staged source artwork is preparation, not acceptance of the derived machine drawing.

| Machine ID | Controller | Required gates | Current state |
| --- | --- | --- | --- |
| `wiki-205` | prime | G1–G8 | Pending |
| `laserplot-02` | prime | G1–G8 | Pending |
| `base-11` | smoothiebox | G1–G8 | Pending |
| `wiki-132` | prime | G1–G8 | Pending |
| `wiki-134` | smoothiebox | G1–G8 | Pending |
| `wiki-135` | smoothiebox | G1–G8 | Pending |
| `mill-g2` | prime | G1–G8 | Pending |
| `mill-avid-ex-3` | smoothiebox | G1–G8 | Pending |
| `wiki-206` | prime | G1–G8 | Pending |
| `wiki-222` | prime | G1–G8 | Pending |
| `forum-linuxcnc-optimill-mh50v-unlogic` | smoothiebox | G1–G8 | Pending |
| `forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit` | smoothiebox | G1–G8 | Pending |

- **G1:** Exact controller artwork, connector positions, all contacts and source/revision provenance.
- **G2:** Descriptive primary labels with stable secondary identifiers.
- **G3:** Solid functional colours and rounded orthogonal wire routes.
- **G4:** Complete sourced power, signal, return, conditioning and load paths.
- **G5:** Supported mutually exclusive wiring alternatives shown as complete subsystem diagrams.
- **G6:** Readable realistic peripherals placed near actual controller connectors.
- **G7:** Current main and subsystem diagrams integrated with paired machine/index updates; retained history.
- **G8:** Actual final raster/browser inspection and public byte readback; all330 profiles preserved.

Each accepted gate needs an evidence path for that machine. Source identifiers and the preservation inventory must be reconciled across all twelve and all330 profiles; a representative image or HTTP success alone cannot satisfy the final gate. The working evidence inventory is `/tmp/atlas12-source-reuse-acceptance-inventory.json`.

`centered-sources/controller-artwork-manifest.json` now indexes the five staged artwork assets, exact bytes/hashes, source contact contract, Prime revision correspondence and interface qualification provenance. It explicitly separates24 case banks from9 accessory header cards. The renderer must consume this provenance without treating staged assets as accepted final machine diagrams.


## B1 local inspection and support installation boundary

Complete static inspection of both recovered support modules and all five owned source assets is recorded in `/tmp/atlas-b1-local-integration-review.json`. All asset hashes and explicit numbered current contact mappings match. Approved installation is limited to those two support modules and five source assets; the live renderer and generated diagrams still require coordinated integration. No recovered code was executed or tested.

- B1-01: R2 must map physical strings to placed.contacts, use extension placements for GA–GI, render UNRESOLVED boundaries independently without passing them to place(used). Preserve every graph record and public metadata contract.
- B1-02: Preserve exact geometry and add readable anchored annotations or choose appropriate larger diagram/output scale; inspect final image at intended consumption size.
- B1-03: Caller must reserve a bounded routing region, separately validate each terminal escape including paths over artwork, and avoid treating entire PCB as forbidden without authorized escape channels.
- B1-04: R2 needs local channel reservations/partitioning and an explicit enlarge/repartition strategy; no omitted or diagonal fallback. Actual full twelve renders remain required.
- B1-05: Draw explicit named-net junction dots after conductor halos and preserve unrelated crossings as nonjunctions.
- B1-06: Check visual clearance of emitted strokes/fillets against reservations, or conservative route envelopes; centerline collision success alone does not prove rendered separation.
- B1-07: Confirm user grey-unused requirement applies connector level; if individual contact annotations shown, grey those unused entries without inventing connector post positions.
- B1-08: Merge display metadata into original records without replacing source state/IDs or losing old detail partitions, annotations and navigable links. Do not treat tooltips as visible captions.

These requirements must be reconciled in the next renderer batch and final rendered views. Support installation does not prove main-image legibility, full route coverage, bounded layout or visual clearance.

B1 support installation is saved: seven exact reviewed files, independently read back by root with matching SHA256 values (`/tmp/atlas-b1-root-installed-byte-readback.json`). Static named-import coherence is recorded in `/tmp/atlas-b1-installed-support-receipt.json`. This establishes saved source bytes only; the active renderer still awaits integration.

## Current paired-page baseline inventory

Readback of all twelve canonical fragments confirms none declares an explicit main figure and none exports current subsystem/alternative figures in the centered section. The existing builder selects the first centered figure and retains old C-number/dotted/evidence-colour captions. Exact per-profile paths, hashes, caption tokens and history placement are saved in `/tmp/atlas12-current-page-projection-integration-inventory.json`. Coordinated builder integration must replace these consumers together with the new rendered artifacts; changing captions ahead of their corresponding diagrams would misdescribe the published result.

## Browser review interruption and authorized fallback

The scheduled B2 inspection was explicitly rejected by browser URL security policy. No workaround, resubmission or alternate browser surface was attempted. The submitted review may still be generating; its current underlying state is unknown and its tab is retained. B1 source adapters and accepted portable appearance corrections remain saved. A single non-browser `gpt-6-sol` fallback at `max` effort was launched and runtime-verified, with proposal ownership limited to `/tmp/atlas12-sol-fallback/`. It received the complete frozen packet, B1 recovery, B2 exchange, interface evidence and accepted local adaptation. Full renderer, electrical amendments, page integration and final publication acceptance remain incomplete. Detailed fallback record is identified in `/tmp/atlas12-source-geometry-review-record.json`.


## 2026-10-02 · Frozen main-render gate evidence

This updates the earlier preparation-only inventory without certifying final installed acceptance. All twelve frozen aa72 main images were viewed by root; independent artifact readback matches source anchors, descriptive captions, selected graph records, actual orthogonal paths and colors. All330 current machine pages and1343 copied assets match their preservation manifest. Public/new-figure acceptance is still owed. The outer render handle returned143 and no supervisor exit receipt exists, despite the inner renderer writing a zero-failure artifact summary; retain that execution uncertainty.

| Machine ID | Selected records | Evidence and outstanding gates |
| --- | ---: | --- |
| `wiki-206` | 39 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `mill-g2` | 51 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `wiki-132` | 56 | G1/G3 artifact readback; G2 successor ground label pending; G4–G8 pending |
| `wiki-222` | 66 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `wiki-205` | 30 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `laserplot-02` | 52 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `base-11` | 67 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `wiki-134` | 160 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `wiki-135` | 117 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `mill-avid-ex-3` | 229 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `forum-linuxcnc-optimill-mh50v-unlogic` | 177 | G1/G2/G3 artifact readback; G4/G5/G6 review and G7/G8 integration pending |
| `forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit` | 32 | Historical main G1/G2/G3 readback; corrected complete proposal still awaits composite; G4–G8 pending |

Evidence: /home/arthur/dev/.astra-calls/atlas12-review-proposals/aa72-all12-independent-coverage-review.json and /home/arthur/dev/.astra-calls/atlas12-aa72-all-root-render-recovery.json. Corrected Schaublin subsystem78/36 figures independently pass static readback; root inspected whole PNGs plus passive/analog-terminal closeups, recorded under atlas12-schaublin-corrected-subsystems-render-01/root-corrected-visual-readback.json. These source-bound proposals remain conditional on fitted hardware and electrical qualification.

## 2026-10-02 · Incremental Prime installation and Box visual correction

The six Prime profiles (wiki-205, laserplot-02, wiki-132, mill-g2, wiki-206, wiki-222) now have inspected native-artwork SVGs installed in their canonical fragments and paired pages/index. The pre-rendered manifest builder preserved SVG source bytes, emitted explicit source/proposed/fitted applicability schedules, and retained the earlier diagrams/history. Six input/installed SVG hashes and selected connection sets match; builder exit0. This proves local G7 integration for main diagrams only; G5 subsystem completeness and G8 browser/public checks remain outstanding. Hephestos J21.2 temperature return label is corrected and its213-contact native controller close-up was inspected.

All330 saved page hashes and1345 copied asset hashes match the current preservation manifest, with zero errors. Evidence: /home/arthur/dev/.astra-calls/atlas12-six-prime-installed-readback.json and atlas12-six-prime-330-preservation-readback.json. Earlier G1/G2/G3 static claims for Box diagrams do not establish visual clearance: root inspected all12 native controller crops and found east/west/south leads obscuring Box labels. Those Box images remain unaccepted.

The exact82 main pills and10 per native GA–GI card are now protected in isolated rendererc01abed8 across source escapes, field routes, OPEN stubs and final actual-stroke audit. Its bounded base-11 render failed at GA.1; geometric analysis found the1x card label barrier (12unit inter-row gap versus two17unit guards). Proposed3x uniform card scaling preserves all relative geometry and matched layout reservations; renderer7dd4cf93 is running an isolated trial. A positive render still needs pixel inspection and all affected diagrams rerendered. No labels, contacts, wires or guards were removed.

Publication of the six local Prime updates hit /dev/shm quota and is retrying through task-owned home staging. Sole monitor696 covers the3x Box trial and publication retry; no agent polling before terminal notification. Current goal remains all12 G1–G8, not six Prime completion.

## 2026-10-02 · Current full delivery inventory and browser defect

The current candidate retains 1319 connections across the same twelve machines. Delivery requires twelve main artifacts and thirteen declared supporting figures. The Schaublin complete proposed retrofit is the page primary image; its earlier32-record main remains a retained compatibility figure. Complete reference labels describe the supplied source topology, not verified fitted hardware. Source-only and diagnostic alternatives must keep their stated electrical unknowns.

| Machine ID | Default main records | Retained records | Supporting figures |
| --- | ---: | ---: | --- |
| wiki-205 | 30 | 34 | optional-rotary-fourth-channel-open-boundary (open-boundary) |
| laserplot-02 | 52 | 61 | cloudray-myjg40nw-protection-and-fire-reference (open-boundary) |
| base-11 | 67 | 67 | None declared |
| wiki-132 | 56 | 58 | None declared |
| wiki-134 | 160 | 175 | vfd-single-phase-power-reference (complete); vfd-three-phase-power-reference (complete) |
| wiki-135 | 117 | 132 | vfd-single-phase-power-reference (complete); vfd-three-phase-power-reference (complete) |
| mill-g2 | 51 | 57 | optional-laser-module-open-boundary (open-boundary) |
| mill-avid-ex-3 | 233 | 286 | bouni-analog-v01-diagnostic-alternative (diagnostic-unqualified) |
| wiki-206 | 43 | 60 | quietcut-2014-power-reference (open-boundary); quietcut-ahct125-unqualified-interface (diagnostic-unqualified) |
| wiki-222 | 66 | 66 | None declared |
| forum-linuxcnc-optimill-mh50v-unlogic | 177 | 177 | None declared |
| forum-linuxcnc-rotarysmp-schaublin-125-cnc-retrofit | 32 | 146 | complete-proposed-retrofit (complete); jasd-pulse-mode (complete); lenze8214-spindle (complete) |

Six Prime main rerenders finished with supervisor exit0. Root inspected their full PNGs and native connector closeups; matching latest-guide provenance and all supporting figures still require reconciliation. Box3x extension correction passed only base11; five other Box diagrams failed source escape guards. A native1x main-board candidate preserves exact source positions and routing protection; its wiki134 trial is not yet accepted.

Publicationf7aeffaf and30 public byte matches did not prove image usability: actual Chrome inspection found a malformed copied SVG and a broken main image. A full inventory found19 malformed copies among1089 paired SVGs, while all corresponding canonical originals parsed. The XML-aware copy fix is installed; thirteen affected page projections are being regenerated. Geometry/text readback, corrected publication and actual browser image/zoom checks remain mandatory.

The Quiet Cut source buffer reference rendered a separate generic controller box and unused native Prime board. Explicit controller identity, passive typing and unused output fields are corrected in candidate3e6faf05; rerender is in progress. All641 retained nodes were audited using the actual renderer identity function:152 controller nodes bind, and only two intentional supply/retained-heater titles are excluded. Compact source-only layout review remains open.

The goal remains active and all twelve final G4–G8 acceptances remain incomplete. Exact artifacts and wait deadlines are recorded in /home/arthur/dev/.astra-calls/atlas12-root-continuation-20261002-prime-pixels-quietcut-binding.json.

## 2026-10-02 · Recovered compact references and strict Shapeoko inventory

The XML-aware paired regeneration has now finished with exit0. Root parsed all1089 copied SVGs and verified all19 repaired copies against their canonical originals for geometry, label text, IDs and provenance. The current330-page/1349-asset preservation manifest matches saved bytes. Corrected publication is running; public browser acceptance remains pending. Evidence: `atlas12-paired-svg-xml-after-fix.json` and `atlas12-xml-fix-330-preservation-readback.json` under `/home/arthur/dev/.astra-calls/`.

The four manufacturer VFD power references now use compact source-only layouts. Root inspected all four PNGs:22 line/motor-phase conductors use the explicit power role,8 protective-earth conductors remain physical wires, and unused single-phase terminals are grey. The key distinguishes protective earth from signal returns and diagram colours from fitted insulation colours. No phantom controller appears. These are conditional source-circuit references, with fitted drive/motor/branch qualification still required; they are not installation approval. Evidence: `atlas12-vfd-power-colours-render-01/root-power-reference-inspection.json`.

The corrected Shapeoko main43-record and AHCT12517-record figures finished with exit0. Root inspected native Prime connector binding and the grey unused IC outputs. The receiver PWM/reference boundaries remain explicitly unqualified. Together with the compact four-wire photographed-controller power reference, all three selected figures pass the latest strict builder manifest contract against the unchanged Shapeoko guide in graph13bb6d3. Evidence: `atlas12-quietcut-corrected-render-01/root-visual-readback.json`, `atlas12-quietcut-accepted-pre-rendered-manifest-v2.json`, and `atlas12-quietcut-strict-manifest-readback.json`. This establishes inspected candidate assets and integration readiness; installation and public checks are still owed.

The native Box wiki134 trial exhausted source-lead allocation after20012 assignments. That is a bounded-search failure, not proof that the bank is physically unroutable. The current repair investigation preserves every native connector, contact, pill and collision guard, and examines reservation-aware lead generation. All six Box main figures must still pass their final source and pixel gates.

## Final functional-role reconciliation and render acceptance

The full12-profile inventory contains1319 authored wiring records and25 declared figures (12main,13supporting). Root accepted268 additional supported electrical-role corrections after reviewing actual contact labels/functions. The frozen successor is3d1943e3706da597304434f50a2a02bef1d7d0ced001d267eca36633b92e9fbd. Only electrical_role fields changed; inverse application restores dc74 exactly. STEP/DIR negative differential conductors remain commands; direct ground references and documented fixed-low IC ties become ground. No isolated domain is joined and no source/OPEN qualification removed. See the design rules for precedence and the staged receipt for exact coverage.

Only wiki205 and wiki222 guide content is unchanged from dc74, allowing strict reuse of their retained new-renderer outputs after pixel acceptance. All other guides require fresh matching output metadata and figures. Six Box main diagrams, four changed Prime main diagrams with their alternatives, and eight Box alternatives are running against the final graph and renderer9b6ac067. The25-artifact acceptance inventory explicitly records pending render/pixel/local/public/browser gates; a finished renderer or role audit does not pass those gates. Ilium monitor validation is failing with correlated-response transport errors, so launch receipts preserve isolated process handles and30minute fallback check deadlines.

The earlier XML repair deployment5c72be67 has90/90 selected authoritative public byte matches. Actual CubeFactory2 browser rendering now loads its main image and supports open/click-zoom/fit/close. This establishes recovery of that broken public asset only; final all12 acceptance, panning and current colour/geometry publication remain pending. Existing330pages and1349copied assets passed preservation readback before this new revision.
