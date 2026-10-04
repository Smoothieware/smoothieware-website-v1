# Dudelbert's Schaublin 125 CNC

**Machine identity:** Dudelbert's individual Schaublin 125 CNC lathe, acquired in 2025 with an earlier Mach3 retrofit. The forum title identifies it as a working machine; the owner says the existing setup basically worked with caveats, but their own initial check was brief. This is distinct from the other owner's Schaublin 125 retrofit discussed in LinuxCNC's `Schaublin 125-CNC retrofit` thread. The repository's `Schaublin 102 VM` wiki dossier concerns a different model. A repository-wide text search on 2026-09-23 found no Dudelbert or exact thread match.

**Evidence state:** In the opening post on 2025-11-26, the owner described the inherited Mach3 system as basically working. In a follow-up the same day, they clarified that they had used it for about 15 minutes, had not run a program, and had only jogged it and tried simple checks. By 2025-11-27 the owner had decided to move to LinuxCNC and remake the electrical cabinet. In the latest owner post retrieved (2025-11-28), the control was still Mach3/CSMIO/IP-S and the spindle encoder belt needed replacement before the owner expected the machine to be fully usable. The thread's later page contains other members' discussion but no later owner update in the retrieved material.

## Machine and prior operation

The owner says they recently obtained the Schaublin 125 CNC with its previous owner's Mach3 retrofit. They did not report running a cutting program on this setup. Their initial Mach3 test lasted about 15 minutes and consisted of jogging and simple checks; they encountered no bug during that short test but explicitly said it was too limited to establish reliable operation.

The owner described the wiring as messy and undocumented, with no schematics. They considered using the existing system after tidying it, but decided to transition to LinuxCNC because they wanted to understand and document the electrical system. On 2025-11-27, they proposed leaving most machine-internal cabling in place while rebuilding the control cabinet. This was a plan, not a completed rewire.

## Reported hardware and planned changes

On 2025-11-27, the owner said they intended to change the Z-axis motor and driver and already had an AASD driver from an earlier project, paired with a 1 kW motor. The owner called that motor oversized for this use but planned to use it because it was available. No post in the inspected thread confirms installation.

On 2025-11-28, the owner identified the current motion-control interface as a CSMIO/IP-S. They said the spindle encoder belt had sections with missing plastic and needed replacement. The post discusses possibly removing and reinstalling the spindle but does not document a completed belt replacement, LinuxCNC commissioning, or a successful turning cut.

Other members referred to the cross-slide AC servo and Z-axis AC servo while discussing the photos, but those are replies rather than an owner-supplied complete drive specification. The owner's planned Z-axis motor/driver change remains separate from the existing X-axis configuration. Do not combine the proposed hardware with the as-acquired machine state.

## Operation and remaining evidence gaps

The forum records short jog and simple-check operation under Mach3, not a machining demonstration. The spindle encoder belt was still identified as needing replacement in the owner's latest retrieved post. A toolholder included with the machine did not fit the owner's setup; another member suggested it might fit an aft-mounted tool post, but the owner had not verified that in the retrieved exchange.

The opening forum post includes an embedded video and mentions machine/wiring pictures. This dossier does not rely on the external video as evidence, and no forum-hosted still image with legible equipment or wiring labels was inspected. There is no verified wiring diagram, I/O list, motor connector assignment, spindle enable/speed map, encoder map, or safety-circuit map in the inspected forum text.

## Pinout and limits

The owner identifies a CSMIO/IP-S controller and discusses the inherited Mach3 setup, but does not publish terminal-level assignments. The planned LinuxCNC cabinet and Z-axis drive changes must not be represented as installed. Because the spindle encoder belt needed repair and there is no reported programmed cut, treat this as an in-progress retrofit record rather than a proven production configuration.

## Forum source

1. LinuxCNC Forum, Dudelbert, [“Considering a Full Rewire on a Working Schaublin 125 CNC”](https://forum.linuxcnc.org/26-turning/57931-considering-a-full-rewire-on-a-working-schaublin-125-cnc), owner posts 1–10, 2025-11-26 through 2025-11-28. Posts 1 and 3 describe the inherited machine and short Mach3 check; posts 6–10 describe the LinuxCNC decision, proposed cabinet/Z-axis changes, CSMIO/IP-S identification, and spindle encoder-belt condition.
2. Same thread, [page 12](https://forum.linuxcnc.org/26-turning/57931-considering-a-full-rewire-on-a-working-schaublin-125-cnc?start=110), retrieved through 2026-05. The visible posts there are later replies by other participants; no additional owner update was found on that page.
3. Related but distinct owner/build: LinuxCNC Forum, [“Schaublin 125-CNC retrofit”](https://forum.linuxcnc.org/26-turning/41498-schaublin-125-cnc-retrofit), by RotarySMP. It describes another physical Schaublin 125 CNC, so its components and retrofit progress are not attributed to Dudelbert's machine.
