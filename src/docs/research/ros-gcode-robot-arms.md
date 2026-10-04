# ROS, Smoothieboard, and open G-code controllers for robot arms

Research date: 2026-10-04. This dossier records papers, source repositories, build reports, and discussions examined for evidence of ROS controlling articulated robot arms through Smoothieboard/Smoothieware, GRBL, Marlin, or another open G-code interpreter.

## Findings and evidence standards

The clearest additional references are **G-Arm**, **Thor**, and **uArm Swift Pro**. Their published software exposes a ROS-to-G-code path for physical arm control. **Szu-Chi's Moveo printing project** supplies a different, well-documented path: ROS generates joint-space G-code offline, and Marlin executes the resulting file. The **PARA** paper proves physical Smoothieboard arm control, but its demonstrated Cartesian-control example uses PyBullet rather than a supplied ROS driver.

No second comparably well-supported physical articulated-arm deployment through ROS and Smoothieware was found in this search. That is a qualified search result, not proof of absence. A ROS interface with an explicit Smoothieboard/Shapeoko example does exist.

Evidence categories used throughout:

| Category | Meaning |
|---|---|
| Paper and implementation | A published description plus inspectable code for the relevant control path. |
| Source-level implementation | Public code explicitly connects ROS commands to controller commands; not independently hardware-tested here. |
| First-person report | A builder describes physical use, sometimes with a video, but complete bridge/firmware source is unavailable. |
| Partial or proposed | Some hardware motion or integration exists, but the full requested chain is unfinished or only proposed. |
| Adjacent | Relevant ROS/controller machinery, but the board drives a gantry, extruder, or other peripheral rather than arm joints. |

These categories describe available evidence, not engineering certification. No robot was built or operated for this dossier. Linked demonstration videos were located, but their frames were not independently inspected. Repository behavior was assessed from documentation and selected source, not from locally executing the drivers.

## 1. PARA: the direct Smoothieboard arm paper

**Publication:** *PARA: A one-meter reach, two-kg payload, three-DoF open source robotic arm with customizable end effector*, HardwareX, 2021. [Full article](https://pmc.ncbi.nlm.nih.gov/articles/PMC9123426/); [DOI](https://doi.org/10.1016/j.ohx.2021.e00209); [design-file record](https://doi.org/10.17605/OSF.IO/5AF4V).

### What the paper establishes

PARA is a three-joint arm with 940 mm reach and a 2 kg payload. Its specification table reports repeatability of ±2.6 mm at 250 mm/s. Smoothieboard supplies step/direction commands to ClearPath servo motors. Sections 2.6–2.7 describe electronics and control; the control example computes angles using PyBullet, converts them to G-code, and sends them to Smoothieboard. The associated URDF is usable by PyBullet and ROS. The paper's example file is `PARA_CartesianControlsDemo.py`; its simulation illustration is Figure 21. This supports physical Smoothieboard arm control and ROS-compatible modeling, but does not establish a supplied end-to-end ROS hardware driver. [Article, hardware and control sections](https://pmc.ncbi.nlm.nih.gov/articles/PMC9123426/).

### Relevance to Smoothie and ROS

**Interpretation:** PARA is the most direct hardware precedent for a Smoothie/ROS arm integration. Its demonstrated host-side kinematics can inform a ROS adapter: replace the demonstrated command-producing host with a ROS execution interface while preserving the actual motor/joint conversion. That proposed adaptation is not an implementation delivered by this research.

An adapter must distinguish the robot's joint coordinates from the motor coordinates accepted by the firmware. A URDF describes links and joints; it does not, by itself, encode every transmission or supply a serial driver. Similarly, a servo's internal regulation does not establish that ROS receives measured joint feedback. Neither ROS action completion nor measured joint-state publication should be inferred from the existence of step/direction control.

**Citation use:** cite PARA for a physical Smoothieboard-controlled articulated arm and its published host-control example. Qualify any statement about ROS as compatibility or a proposed integration until a separate driver and physical execution source is located.

## 2. G-Arm: ROS 2, MoveIt 2, and GRBL in a published educational arm

**Publication:** Julio Vega and Vidal Pérez, *G-ARM: An open-source and low-cost robotic arm integrated with ROS2 for educational purposes*. Multimedia Tools and Applications 84, 40683–40705, published 2025-03-26. [Publisher article](https://link.springer.com/article/10.1007/s11042-025-20748-8); [DOI](https://doi.org/10.1007/s11042-025-20748-8); [author-hosted PDF](https://gsyc.urjc.es/jmvega/research/pubs/2025-mtap-roboticArm.pdf).

### Hardware, software, and evaluation

The paper describes a low-cost printed educational arm using ROS 2 Humble and MoveIt 2. Its MKS DLC32 controller is ESP32-based; motion uses GRBL, NEMA 17 motors, and TMC2209 drivers. GRBL is adapted/configured for rotary-joint motion. Sections 3.1–3.3 identify the software, electronics, and their relationship. Python coordinates communication between the ROS environment and controller. The abstract reports eight months of use in Industrial Robotics and Software Architectures for Robots courses at Rey Juan Carlos University. This is evidence of educational use, not a claim of industrial safety or hard real-time trajectory compliance. [Paper](https://link.springer.com/article/10.1007/s11042-025-20748-8).

### Inspectable command path

The [official repository](https://github.com/vidalperezbohoyo/g-arm) provides a concrete chain:

1. [`driver.py`](https://github.com/vidalperezbohoyo/g-arm/blob/main/ros2/g_arm/g_arm/driver.py) subscribes to ROS `joint_states`, converts angular values, and calls the robot library.
2. [`robot.py`](https://github.com/vidalperezbohoyo/g-arm/blob/main/ros2/g_arm/g_arm/g_arm_lib/robot.py) maps robot motion into controller-axis coordinates.
3. [`grblAPI.py`](https://github.com/vidalperezbohoyo/g-arm/blob/main/ros2/g_arm/g_arm/g_arm_lib/grblAPI.py) performs serial communication and constructs G-code, including absolute/relative `G01` commands with axis coordinates and feed values.

The earlier [RoboticsURJC/tfg-vperez repository](https://github.com/RoboticsURJC/tfg-vperez) is a useful historical implementation lead. It should be treated as a separate revision rather than assumed identical to the current official repository.

### Relevance and limitations

**Interpretation:** G-Arm is the best additional paper for the architectural proposition that ROS can plan an arm while a low-cost open CNC interpreter handles motor motion. Its host-side mapping is more transferable to a Smoothie adapter than its board-specific settings.

The inspected driver is a joint-state subscriber. It should not automatically be described as a complete `FollowJointTrajectory` implementation with cancellation, measured feedback, execution tolerances, and controller fault propagation. Those are separate contracts that require separate evidence. Firmware accepting a target is also different from completing that target at the timestamp specified by a ROS trajectory.

**Citation use:** cite the paper for its system and educational evaluation, and the individual source files for the actual ROS-to-G-code implementation.

## 3. Thor: an arm-oriented ros2_control interface

**Primary sources:** [Thor mechanical/electronics project](https://github.com/AngelLM/Thor), [Thor-ROS](https://github.com/AngelLM/Thor-ROS), and [ThorControlPCB](https://github.com/AngelLM/ThorControlPCB).

Thor is an open-source six-axis articulated arm. Its ROS repository targets ROS 2 Humble and MoveIt 2. The original control electronics include an Arduino Mega with the dedicated ThorControlPCB. [Project documentation](https://github.com/AngelLM/Thor); [ROS setup instructions](https://github.com/AngelLM/Thor-ROS/blob/main/ubuntu-instructions.md).

### What the hardware interface does

[`thor_interface.cpp`](https://github.com/AngelLM/Thor-ROS/blob/main/ws_thor/src/thor_controller/src/thor_interface.cpp) is a `ros2_control` system interface. It connects through serial at 115200 baud, maps ROS angular commands into controller coordinates, and writes `G0` moves. The mapping includes coupled actuators and the differential wrist.

Its `thor_pcb` branch uses GRBL-style `?` status queries and parses `MPos`. Another branch uses `M408` JSON-style status and a different axis-letter mapping associated with the RepRapFirmware path. Gripper commands also differ between branches. This is executable-purpose controller code rather than a URDF-only model. [Hardware-interface source](https://github.com/AngelLM/Thor-ROS/blob/main/ws_thor/src/thor_controller/src/thor_interface.cpp).

### Firmware variants must stay separate

[Thor-Fly-Super8Pro-config](https://github.com/AngelLM/Thor-Fly-Super8Pro-config) supplies another board configuration. The [ThorRR fork](https://github.com/otherworld-dev/ThorRR) describes RepRapFirmware on a BTT Octopus Pro, with a separate [Bifrost interface](https://github.com/otherworld-dev/Bifrost). These sources establish alternative development paths; they do not prove that the fork's tested RRF hardware was operated through the original Thor-ROS driver.

**Interpretation:** Thor is the most useful inspected reference for structuring a Smoothie ROS hardware adapter. It separates ROS integration from serial transport and demonstrates why an arm's motor/joint mapping belongs explicitly in the adapter. Reusing its architecture would still require verifying Smoothie's actual status format, axis configuration, queue semantics, and error behavior.

**Citation use:** call it a source-backed ROS-to-G-code arm interface. Qualify physical claims for specific firmware variants; do not transfer evidence between GRBL and RRF configurations.

## 4. uArm Swift Pro: official ROS integration with open Marlin-derived firmware

**Primary sources:** [RosForSwiftAndSwiftPro](https://github.com/uArm-Developer/RosForSwiftAndSwiftPro), [SwiftProForArduino](https://github.com/uArm-Developer/SwiftProForArduino).

The official ROS repository documents ROS Kinetic, MoveIt/RViz, and physical control. Its [`swiftpro_write_node.cpp`](https://github.com/uArm-Developer/RosForSwiftAndSwiftPro/blob/master/swiftpro/src/swiftpro_write_node.cpp) receives ROS commands and sends serial G-code: position commands become `G0 X… Y… Z… F10000`; wrist rotation uses `G2202`; gripper and pump commands use `M2232` and `M2231`. The connection uses a Linux serial device and 115200 baud. The firmware repository explicitly identifies a Marlin-derived firmware and publishes GPLv3 source. [ROS implementation](https://github.com/uArm-Developer/RosForSwiftAndSwiftPro); [firmware](https://github.com/uArm-Developer/SwiftProForArduino).

### Supplementary paper: OpenLH

[OpenLH's research paper](https://www.runi.ac.il/media/pp5bftyk/openlh.pdf) is an additional hardware/software reference for the uArm family. It describes Arduino Mega 2560 electronics, customized GPL Marlin, and G-code communication; it also mentions an available ROS interface. Its own application uses Python, so it should not be cited as an experiment demonstrating ROS arm control.

### Relevance and portability

**Interpretation:** uArm is strong evidence that an open G-code firmware can sit beneath an official ROS integration. It also illustrates an alternative to host-side joint-to-axis conversion: the host sends Cartesian positioning commands to an arm-specific firmware interface.

That distinction matters for Smoothie. The same `G0 X Y Z` spelling can represent tool-space motion on one system and controller-axis motion on another. The coordinate convention and kinematics must be established before copying a bridge. uArm's custom wrist/gripper commands are firmware-specific and cannot be assumed available on Smoothieware.

**Citation use:** use the vendor's ROS writer and firmware source together to establish the full open-firmware chain. Use OpenLH as supplementary hardware/protocol evidence, with its Python-versus-ROS distinction intact.

## 5. Moveo printing: ROS-generated joint G-code, executed offline by Marlin

**Primary source:** [Szu-Chi/3d-printing-with-moveo](https://github.com/Szu-Chi/3d-printing-with-moveo).

The project integrates a physical BCN3D Moveo arm with ROS Melodic, MoveIt, TRAC-IK, modified Cura, and modified Marlin on Arduino Mega 2560/RAMPS-derived electronics. Cura uses ROS inverse kinematics to translate Cartesian paths into mechanical-axis positions. The operating instructions then save the G-code and print from SD. The repository includes `Marlin`, `gcode_translation`, `moveo_moveit_config`, `moveo_urdf`, and simulation components, and links physical printing demonstrations. [README and source tree](https://github.com/Szu-Chi/3d-printing-with-moveo).

Linked demonstrations: [treasure chest](https://www.youtube.com/watch?v=BejQ-XHtku4), [Moai](https://www.youtube.com/watch?v=KtgakZhjTZc), and [20 × 20 mm square](https://www.youtube.com/watch?v=YZfbAIXzUUw). These are author-linked evidence leads; video frames were not reviewed here.

**Interpretation:** this is a useful precedent for Smoothie-based robotic fabrication even without live ROS streaming. Offline conversion separates planning from execution and avoids requiring the firmware to speak ROS. However, it introduces separate questions about checking the converted path, matching feed semantics, and recovering execution state after interruption. The firmware's coordinated motion is only meaningful if the generated controller coordinates preserve the intended arm path.

Do not conflate this project with [Jesse Weisberg's moveo_ros](https://github.com/jesseweisberg/moveo_ros), which uses rosserial/AccelStepper for physical arm motion. Nor does the original [BCN3D Moveo's Marlin firmware](https://github.com/BCN3D/BCN3D-Moveo) prove that every Moveo ROS fork uses G-code.

## 6. AI-driven human–robot interaction paper: relevant, openness unverified

**Publication:** Amer Sarajlić and Lejla Banjanović-Mehmedović, *AI-Driven Human-Robot Interaction for a 3D-Printed Robotic Arm Using Gemini AI and ROS*, INFOTEH 2025. [DOI](https://doi.org/10.1109/INFOTEH64129.2025.10959192); [author-uploaded manuscript](https://www.researchgate.net/publication/390790261_AI-Driven_Human-Robot_Interaction_for_a_3D-Printed_Robotic_Arm_Using_Gemini_AI_and_ROS).

The manuscript describes a mobile interface, Gemini, ROSBridge/WebSocket communication, MoveIt, and a printed six-DoF arm. Its hardware section describes an Arduino-based custom G-code interpreter translating ROS-generated joint commands. The arm uses stepper actuation and custom cycloidal transmissions. The paper reports a physical application, but this research did not locate a public firmware implementation, license, or complete reproducible serial bridge. It therefore supports ROS/G-code arm control as a reported architecture while leaving the open-source interpreter criterion unresolved. [System overview and hardware sections](https://www.researchgate.net/publication/390790261_AI-Driven_Human-Robot_Interaction_for_a_3D-Printed_Robotic_Arm_Using_Gemini_AI_and_ROS).

**Interpretation:** the relevant contribution for Smoothie is the split between a high-level ROS application and a lower-level G-code executor. The AI layer does not establish deterministic execution, verified collision avoidance on physical hardware, or fault containment. Those properties need evidence independent of successful language-command demonstrations.

**Citation use:** label the interpreter as custom and its openness as unverified. Do not describe this as a Smoothie, GRBL, or Marlin implementation without another source identifying that firmware.

## 7. First-person reports and incomplete arm integrations

### Customized Marlin with ROS 2/MoveIt 2

Builder `lijovijayan` presents a moving printed six-axis arm and states in the same discussion that it uses ROS 2 Humble/MoveIt 2 with customized Marlin controlling the steppers. [Finally Achieving Fluid Control](https://www.reddit.com/r/ROS/comments/1lngnuk/finally_achieving_fluid_control/).

This is useful implementation testimony, but no complete bridge or firmware fork was located. Board identity, feedback semantics, and exact trajectory execution remain unverified. An earlier [gripper post](https://www.reddit.com/r/3Dprinting/comments/1kvrunk/my_3d_printed_6dof_robotic_arm_just_got_a_gripper/) describes MoveIt integration still in progress; it should not be cited as the same completion evidence.

### Six-axis GRBL warehouse arm

[Gunjan Paul's build report](https://gpaul.dev/works/robot_arm/) describes a physical parcel-sorting arm developed for Flipkart Grid 5.0, using NEMA 23/17 motors and custom six-axis GRBL motion control. The project is tagged ROS 2, but the page does not document the full ROS-to-GRBL bridge. Treat it as a relevant build report with incomplete integration evidence, not a reproducible reference driver.

### Woodpecker board with ROS G-code actions

[proffalken/RobotArm](https://github.com/proffalken/RobotArm) and the builder's [ROS discussion](https://www.reddit.com/r/ROS/comments/1i44u6x/) identify a Woodpecker CNC board running GRBL. The author reports physically moving motors through ROS 2 G-code actions while working on the MoveIt hardware connection. Full MoveIt trajectory integration was incomplete in the described state.

The underlying [flynneva/grbl_ros](https://github.com/flynneva/grbl_ros) exposes G-code actions and controller-state interfaces. It is useful reusable bridge machinery, but a generic bridge package alone proves neither arm kinematics nor full physical trajectory execution.

### Earlier ROS-to-Marlin experimentation

[ROS Answers question 356710](https://answers.ros.org/question/356710/) contains a builder's report of an operating ROS/rosserial/AccelStepper arm and subsequent experimentation with customized Marlin 1.1.x. No complete final bridge was located. It remains a historical lead; access to the original discussion was inconsistent during verification.

## 8. Smoothieboard and ROS sources outside articulated-arm control

### A published Smoothieboard-compatible ROS node

[picatostas/cnc_interface](https://github.com/picatostas/cnc_interface) explicitly includes a launch example for a Shapeoko controlled by Smoothieboard. It is based on [openautomation/ROS-GRBL](https://github.com/openautomation/ROS-GRBL). Its ROS node subscribes to movement/stop topics and publishes position/status. [`cnc_interface.py`](https://github.com/picatostas/cnc_interface/blob/master/scripts/cnc_interface.py) calls the controller abstraction from ROS callbacks.

**Interpretation:** this is an especially valuable Smoothie-specific integration lead because it supplies communication machinery rather than only discussing feasibility. It is nevertheless a Cartesian CNC interface, not an arm execution driver. Its use of `Twist` messages for target coordinates is a project-specific convention and should not be mistaken for a standard arm trajectory contract. Startup behavior includes homing according to the README; this dossier does not authorize executing that behavior.

### Opentrons OT-1 discussion

The September 2022 [Smoothie-dev thread on implementing ROS with Smoothieboard](https://groups.google.com/g/smoothie-dev/c/BAK0SvEsCTw) describes an Opentrons OT-1 using Smoothieboard v1, with existing Python control and a desired ROS integration. Serial G-code is discussed as the communication route. The thread establishes a concrete integration question and compatibility advice, not a completed ROS driver. The machine is a pipetting gantry rather than an articulated arm.

### CubeSpawn manufacturing modules

[CubeSpawn on Hackaday](https://hackaday.io/project/2718-cubespawn) and the [printer-module build](https://builds.openbuilds.com/builds/cubespawn-ultimaker-3d-printer-module.782/) describe a ROS/ROS-Industrial manufacturing architecture involving Smoothieboard. The [mill-module log](https://builds.openbuilds.com/builds/cubespawn-3-axis-mill-module.758/) also states that contemporary testing used OctoPrint without ROS/MTConnect. These sources should therefore be cited as documented architectural intent/development, with the actual test path distinguished. They do not establish articulated-arm control.

## 9. Other sources and misleading combinations

| Source | Actual relevance | Why it is not a confirmed open ROS/G-code arm chain |
|---|---|---|
| [Arctos ROS](https://github.com/Arctos-Robotics/ROS), [Arctos GRBL](https://github.com/Arctos-Robotics/Arctos-grbl-v0.1), [newer GUI](https://github.com/Arctos-Robotics/arctosgui) | Arm software and multiple firmware/control paths. | The inspected ROS path uses rosserial/AccelStepper; newer CAN control is another path. Separate repositories must not be combined into one assumed deployment. |
| [WLKATA Mirobot ROS 2](https://github.com/wlkata/Wlkata_Mirobot_Ros2), [ROS 1](https://github.com/wlkata/RosForMirobot-master) | Explicit physical MoveIt-to-G-code serial control. | [Vendor firmware](https://github.com/wlkata/Firmware) is distributed as proprietary binaries; open host code does not prove open interpreter firmware. |
| [WLKATA MT4 ROS 2](https://github.com/wlkata/Wlkata_MT4_ROS2) | Another vendor ROS/G-code arm package. | Firmware openness remains unverified; do not infer it from G-code compatibility. |
| [Sixi 2](https://github.com/MarginallyClever/sixi-2), [Sixi/Marlin development](https://www.marginallyclever.com/2024/01/friday-facts-19-marlin-for-robot-arms/) | ROS modeling and separately documented open-firmware arm development. | No verified combined physical ROS-to-Marlin execution path was located. |
| [PAROL6 repository](https://github.com/kush924/Robotic_ARM) | Printed-arm development with ROS ambitions. | ROS/MoveIt and G-code features include unfinished work; plans are not implementation evidence. |
| [Machinekit Borunte retrofit](https://machinekoder.com/machinekit-ros-industrial-robot/), [HAL ROS control](https://github.com/tormach/hal_ros_control) | Genuine physical ROS arm using an open CNC-control ecosystem. | ROS uses HAL/control interfaces rather than the G-code interpreter. Useful broader precedent, different protocol. |
| [CRM-Suite startup](https://crm-core.pages.dev/getting-started/startup), [control boards](https://crm-core.pages.dev/hardware/control-boards), [printer software](https://crm-core.pages.dev/software/printer) | Industrial-arm fabrication with ROS and Duet/RepRapFirmware peripherals. | The G-code board controls extrusion/printing peripherals, not the articulated arm joints. |
| [Sulis workbench cleaner](https://devpost.com/software/sulis-the-omniscient-autonomous-workbench-cleaner) | ROS 2 system with GRBL gantry and servo arm. | GRBL drives the gantry; the arm uses a separate servo controller. |

Two robotic-printing papers illustrate the peripheral-control trap particularly clearly: a [UR3 FFF study](https://mdpi-res.com/d_attachment/applsci/applsci-11-04825/article_deploy/applsci-11-04825.pdf) separates robot scripts from Marlin extrusion/temperature commands; a [UR5 multi-axis printing study](https://gershon.cs.technion.ac.il/Seminar23_3DP/Papers/NonLayered/AMCurvedLayersMultiAxis2019Kai.pdf) separates the UR robot controller from a Marlin-controlled table. They are retained as exclusion references, not counted as open G-code boards moving arm joints.

## 10. Comparison for a future Smoothie ROS integration

The following is analysis of the source set, not a claim that a new adapter has been implemented.

| Reference | Where arm mapping happens | Transferable lesson | What still needs proof on Smoothie |
|---|---|---|---|
| PARA | Demonstrated host-side kinematics and conversion. | Start from a real Smoothie-controlled arm and its actual transmission mapping. | ROS execution interface, feedback, cancellation, queue behavior. |
| G-Arm | ROS/Python bridge maps angular commands into GRBL axes. | A small serial bridge can join ROS planning to an open motion executor. | Correct command interface and execution-time contract. |
| Thor | ros2_control hardware interface includes coupled mechanisms. | Keep joint/motor mapping and controller read/write behavior explicit. | Smoothie status parser and equivalent state/error semantics. |
| uArm | Arm-specific firmware accepts Cartesian/custom commands. | Identify whether firmware or host owns kinematics. | Matching kinematics and command semantics; vendor commands are not portable. |
| Moveo printing | ROS-based offline transformation generates the executable file. | ROS can participate without live streaming. | Converted-path fidelity, feed mapping, interruption recovery. |

### Questions a complete implementation must answer

1. **Coordinates and units:** Are controller axes physical motors, robot joints, or Cartesian tool coordinates? What handles radians/degrees, reductions, coupled transmissions, homing offsets, and joint limits?
2. **Trajectory timing:** Does the board execute timed trajectory points, or replan a stream of targets using its own acceleration/velocity rules? How is ROS completion determined?
3. **Queue ownership:** How much motion can be buffered? How are acknowledgements distinguished from completed motion? What happens when a goal is cancelled while commands are queued?
4. **Feedback:** Are published states measured joint positions, controller step counters, or merely echoed targets? What detects lost motion or disabled drives?
5. **Faults and lifecycle:** What happens on disconnect, reset, homing failure, limit activation, or interpreter error? Can reconnect occur without replaying stale movement?
6. **Evidence:** Is there an inspectable driver, identified firmware/version, launch configuration, and physical execution record for the same machine?

These questions explain why a working serial G-code sender is an important component but insufficient evidence for a complete ROS arm controller.

## 11. Search coverage and recommended citation wording

The search covered Smoothieboard/Smoothieware, GRBL variants, Marlin, RepRapFirmware/Duet, printer-derived arm controllers, ROS 1/2, MoveIt, rosserial, and CNC-to-ROS bridges. Sources included journal/conference papers, author-uploaded manuscripts, official/vendor repositories, independent forks, builder sites, Google Groups, ROS Answers, Reddit, Hackaday, OpenBuilds, and demonstration links. Primary code was prioritized where a project's advertised compatibility could conceal a different control path.

This is an evidence inventory rather than an exhaustive catalogue of every unpublished build. Mutable repository links are not pinned releases, inaccessible discussions remain qualified, and source inspection does not replace physical reproduction.

Suggested wording supported by the evidence:

- **Smoothieboard:** “PARA demonstrates an articulated arm driven by Smoothieboard; its published Cartesian-control example uses PyBullet and serial G-code, with a URDF compatible with ROS.”
- **Published ROS/GRBL precedent:** “G-Arm integrates ROS 2 and MoveIt 2 with an MKS DLC32 running GRBL; its public driver maps ROS angular commands into serial G-code.”
- **Reusable live interface:** “Thor publishes a ros2_control hardware interface that converts arm commands to G-code and parses controller state.”
- **Open Marlin precedent:** “uArm Swift Pro publishes both ROS serial-control code and Marlin-derived firmware source.”
- **Offline precedent:** “The Moveo printing project uses ROS inverse kinematics to generate joint-space G-code subsequently executed by Marlin from SD.”

Avoid saying that PARA already supplies a ROS driver, that every ROS-enabled Moveo uses Marlin, or that simultaneous ROS and GRBL repositories prove a connected deployment. For Smoothieware documentation, the precise distinction between demonstrated hardware and proposed ROS integration is the central finding.
