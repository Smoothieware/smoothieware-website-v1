# RotarySMP's Schaublin 125-CNC retrofit

**Machine identity:** RotarySMP's individual Schaublin 125-CNC lathe, documented in a long-running LinuxCNC retrofit thread beginning 2021-02-21. It is a different physical machine from Dudelbert's Schaublin 125 CNC elsewhere in this repository; the family/model overlap does not make them duplicate builds. A repository text search on 2026-09-23 found no exact `RotarySMP` or thread-slug dossier.

**Evidence state:** The owner reported acquiring the machine with its original motors/drives and beginning a LinuxCNC modernization. Later owner posts document AC servo installation, LinuxCNC/Mesa hardware, VFD spindle operation and use of physical spindle buttons. In a February 2026 post, the owner reported a fault in which M3/M4 did not command the VFD while the external forward/reverse buttons still operated it. The May 2026 page contains spindle-control discussion and simulation based on uploaded configuration files, but those posts do not establish that the latest control changes were validated on the physical lathe. Treat it as a working retrofit with ongoing spindle-control development, not as a fully validated current configuration.

## Machine and retrofit

The opening post says the owner bought a Schaublin 125-CNC with “pretty good bones” that needed LinuxCNC modernization. Early on, the owner compared keeping the existing permanent-magnet DC servos and feedback hardware with replacing the axis motors with 750 W AC servos. The owner cited large existing drives that used Step/Dir, while uncertainty about the original feedback hardware remained in replies; do not upgrade other posters' resolver/encoder guesses into confirmed machine facts.

By July 2023, RotarySMP stated, “I used AC servos.” This confirms the broad retrofit choice but does not name the installed servo models. Subsequent posts refer to a Mesa 7i96S system, 7i83 analog output, encoder feedback and a 7i84 output card. In November 2025, the owner described the VFD command as an analog output from the 7i83 and spindle speed feedback from a Mesa encoder input. The owner also said a spare 7i84 was damaged and not then installed; planned use of that card for VFD quick-stop and the electromechanical brake was not yet complete.

## Spindle, transmission and operation

The machine retains a mechanically variable transmission (variator) and a pneumatically actuated 1:6.5 back gear. The owner described the back gear as selectable only with the spindle stopped and out of a cut. In 2021, the owner considered retaining the original contactor-based speed scheme, then leaned toward a VFD while keeping the variator and back gear. Those early options are historical design discussion; they are not all parts of the final configuration.

In March 2022, the owner outlined a proposed control approach in which a VFD maintains spindle speed from encoder feedback while the variator shifts the speed range. The post describes ideas and expected behavior rather than a completed test. Later posts document the owner using the machine and discussing cuts and tool changes, but the retrieved sources do not establish a particular material, feed, depth of cut, or repeatable performance rating.

The operation state is mixed. In November 2025, the owner said the spindle could coast down when disabled and was investigating VFD braking; the owner posted a video update, not relied on here. In February 2026, physical forward/reverse/stop buttons still operated the spindle, but M3/M4 commands no longer reached the VFD. The owner suspected a recent brake-command/ladder change and said the latest HAL changes had not yet been uploaded in that post. By May 2026, other participants were discussing variator feedback strategies and a software simulation. Those are proposals, not verified changes to the physical machine.

## Controls and wiring evidence

The owner explicitly identifies an analog spindle command routed through Mesa 7i83 analog output 0 and encoder velocity feedback from a Mesa encoder channel. These are functional signal descriptions, not terminal-level connection maps. The owner also identifies physical buttons connected to LinuxCNC's `halui.spindle.0.forward`, `.reverse`, and `.stop` functions. No contact numbers, connector orientation, cable pin assignments, or complete safety circuit are supplied in the inspected posts.

The owner described the back gear actuator as pneumatic and discussed commanding its valve through a Festo CPV terminal and Mesa 7i84. This reflects the described control plan; the retrieved evidence does not provide a verified terminal-by-terminal I/O schedule. Back-gear position is not directly sensed according to the owner; their proposed method was to initialize to high gear, record the commanded pneumatic-valve position, and sanity-check the ratio after spindle rotation.

## Visual and evidence limits

The thread's opening post embeds a video, and later replies mention photographs and attached configuration files. This dossier does not treat the external video or simulator as independently verified machine evidence. No forum-hosted still was visually reviewed for this entry, so no visual claim about cabinet layout, machine condition, drive labels or wiring is made here. A future visual addition should use a forum-hosted still and state exactly what it shows.

The forum text provides no complete connector pinout, terminal map, motor nameplate transcription, safety-circuit schematic, or validated as-built HAL bundle in the inspected pages. The discussion is useful evidence of an individual CNC lathe and its evolving retrofit, but should not be used as wiring instructions.

## Forum sources

1. LinuxCNC Forum, RotarySMP, [“Schaublin 125-CNC retrofit”](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit), opening posts and page 11, 2021-02-21 through 2021-03-09. Posts describe acquisition, initial drive alternatives, existing Step/Dir drives, contactor/VFD trade-offs, back gear and variator plans.
2. Same thread, [page 30](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit?start=290), owner post 2021-12-07 on variator/back-gear considerations; [page 33](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit?start=320), owner posts 2022-03-28 describing the back gear and proposed VFD/variator control; and [page 51](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit?start=500), owner post 2023-07-03 confirming AC servos.
3. Same thread, [page 63](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit?start=620), owner posts 2025-11-30 through 2026-02-25 on Mesa spindle command/feedback, spindle braking and the M3/M4 issue; and [page 69](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit?start=680), owner post 2026-05-20 on commanded back-gear selection. Replies and third-party simulator claims on those pages are not attributed to the physical machine as proven configuration.
