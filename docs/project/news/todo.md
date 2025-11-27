---
permalink: /todo
---

# The Smoothie project's TODO list

This page lists all of the projects the community is working on, and those that are planned.

This includes improvements on the existing, new features, refactors, new hardware and documentation efforts.

If you are looking to help the project, but do not know where to start, this is the place to get an idea what is going on within the project right now.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you have an idea for a new feature or any kind of improvement, please contact the community via IRC or the mailing lists to discuss it.<br><br>You can also contact <a href="mailto:wolf.arthur@gmail.com">wolf.arthur@gmail.com</a> with any questions or to chat about implementation details.<br><br>You likely also want to read the following pages : <a href="coding-standards">coding-standards</a>, <a href="contribution-guidlines">contribution-guidlines</a>, <a href="developers-guide">developers-guide</a> and <a href="github">github</a>.
</sl-alert>
{:/nomarkdown}

## Smoothieware v1 firmware


{:/nomarkdown}

The Smoothieware firmware that runs on the Smoothieboard v1 ( Smoothieware v1 ) has a lot of features, and has received a lot of love over the years.

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

But there are many things we want to improve, and new features we want to implement or experiment with:

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Most active development has shifted to Smoothieware v2. See the v2 section below for current focus areas.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Step generation improvements</strong> <a href="https://github.com/wolfmanjm">Jim Morris</a> is working on several improvements on the step generation in Smoothie, including <a href="https://github.com/Smoothieware/Smoothieware/issues/82">removing on_gcode_execute</a> and <a href="https://github.com/Smoothieware/Smoothieware/issues/107">doing acceleration every step</a> instead of on a fixed clock as we do now, as well as many other small changes.

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

This is expected to result in a much saner codebase, smoothness/performance improvements, and to make it easier to implement some new features, like S-curve acceleration, 6-axis support and some extruder features.<br><br>This is going to require, amongst other things, a massive rewrite of the Extrude and Laser modules.<br><br>This is also possibly going to solve the problem <a href="/simplify3d">Simplify3D and Smoothie have with each other</a>.<br><br><strong>Update</strong> : This was merged into edge beginning of July 2016, and is now being tested by the community in the wild.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This improvement has been fully implemented in Smoothieware v2, with a maximum step rate of 200 kHz (vs 100 kHz in v1), supporting up to 1/256 microstepping with interpolation, and configurable pulse width. The v2 firmware enables advanced features like true S-curve acceleration planning and parallel motor support.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</sl-alert>
{:/nomarkdown}



{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>S-curve acceleration</strong> <a href="https://github.com/wolfmanjm">Jim Morris</a> is planning on implementing 7th order acceleration into Smoothie.

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

See <a href="https://github.com/synthetos/TinyG/wiki/Jerk-Controlled-Motion-Explained">Jerk-Controlled Motion Explained</a> for an explanation of what this is.<br><br>See also this proposed implementation: <a href="https://github.com/PymZoR/S-curve-Planner">S-curve-Planner</a> Also, there has been some discussions of implementing a PNP-specific planner, that would loose axis sync ( not required on Pick and Place machines ), but thanks to this simplifying it a lot, would then be much easier to implement S-curve for.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

S-curve acceleration is planned for Smoothieware v2 but has not yet been implemented. The v2 motion planner currently uses junction deviation-based planning with configurable xy and z junction deviation values. Future work is expected to build on the improved step generation foundation in v2 to implement true S-curve motion control.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</sl-alert>
{:/nomarkdown}

{::nomarkdown}


{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Recursive file playing</strong> This new feature would allow users to call the play command from within currently playing files.<br><br>Not only would it be convenient, it'd also make it much easier to implement macros and tool changing routines.<br><br>The current status of this work can be seen at : <a href="https://github.com/Smoothieware/Smoothieware/compare/recursive?expand=1">recursive</a>.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>New debug commands</strong> One feature that's been requested and that would be neat to have in some situations, is a "pin" command, allowing you to set/read any pin, even if it's not defined in a switch.<br><br>This would not be meant for "normal" day-to-day use (you have switch for this), but would save some time/effort when debugging some hardware or config issues.<br><br><a href="https://hackaday.com/2021/03/21/arduino-cli-for-i-o-pin-testing/">This Arduino sketch</a> could be good inspiration.
</sl-alert>
{:/nomarkdown}


{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>6-axis support</strong> Once the step generation improvements and s-curve support have been implemented, it will be much easier to add proper 6-axis ( XYZABC ) support into Smoothie.

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

This is currently done by using the Extruder module, which has some limitations, doing it properly would be a good improvement.<br><br>This issue keeps track of that feature : <a href="https://github.com/Smoothieware/Smoothieware/issues/120">6-axis support</a> This is now in current edge.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Smoothieware v2 maintains support for multiple kinematics (Cartesian, Linear Delta, Rotary Delta, CoreXY, CoreXZ, SCARA) with configurable axis control. Full 6-axis XYZABC support is supported through the Extruder module configuration, leveraging the improved step generation in v2. However, dedicated ABC axis support as distinct motion types (vs extruder-based) is still a potential enhancement for future versions.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</sl-alert>
{:/nomarkdown}

{::nomarkdown}


{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>PanelDue support</strong> <a href="https://github.com/chrisbrent">Chris Brent</a> is working on implementing support for the <a href="http://www.think3dprint3d.com/PanelDue">Paneldue</a> into Smoothie ( specifically the <mcode>M408</mcode> G-code, which will also be useful for web interface projects ).<br><br>You can follow the progress at <a href="https://github.com/Smoothieware/Smoothieware/pull/798">PanelDue support</a>.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Soft endstops</strong> Soft endstops is a feature in which the machine is aware of it's physical limits, and does not go past these, without the need for a physical switch to actually detect this.<br><br>This feature is more complex to implement than what one might think, and the need to actually implement it "cleanly" and discussion on how to do so, has delayed actual coding work on it.<br><br>A proposed implementation is described <a href="https://docs.google.com/document/d/1U6nzx1boqF-J2GGPWF4yIaaVib0JNodVWSKBfwiyp_M/edit?usp=sharing">here</a>.<br><br>If you want to help with this, don't hesitate to ping the community.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>File-based panel system</strong> There is a project to explore using files on the SD card to describe the panel menu system, instead of using code.<br><br>This would allow for multi-language, user customization, richer menus with more options, and new features.<br><br>However, it's not clear yet if this would be fast enough to be comfortable to use, and it's not possible to use files while a file on the SD card is playing, so that is a problem that would need to be solved ( possibly by having a separate, simpler system while playing files ).<br><br>You can see a specification for this new idea here : <a href="https://is.gd/VlsYq3">File-based panel system</a> Jarek SzczepaÅski is currently looking into implementing this, but any help is very very welcome.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Support mixing nozzles</strong> Mixing hotends like the Diamond, require extruding using several different extruders at the same time, which Smoothie doesn't know how to do yet.<br><br>There is discussion of implementing this in this issue : <a href="https://github.com/Smoothieware/Smoothieware/issues/875">Support mixing nozzles</a> and <a href="https://github.com/digiexchris">digiexchris</a> is working on implementing it.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Fix thermocouple SPI problem</strong> There is a problem in Smoothie right now where SPI thermocouple boards is called in interrupts, when it shouldn't.<br><br>Amongst other things it prevents using several thermocouple boards at the same time.<br><br><a href="https://github.com/greyltc">Grey Christoforo</a> has worked on fixing the issue here : <a href="https://github.com/Smoothieware/Smoothieware/pull/891">Fix thermocouple SPI problem</a> but his work needs testing.<br><br>If you have a Max31855 thermocouple board, please test his work so it can be merged !.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Extruder JKN advance</strong> Extruder advance is a technique of managing the pressure of the extruder relative to the head's motion so that the plastic is more regularly applied to the part.<br><br>You can see some talk of implementing it in Smoothie here for example : <a href="https://github.com/Smoothieware/Smoothieware/issues/645">Extruder JKN advance</a> Several persons have written implementations, but they were too complex to be merged.<br><br>The work on step generation ( per-step accel, s-curve, 6-axis etc ) will involve some refactors that would then make this simpler to implement.<br><br>If you are interested in helping with this, don't hesitate to ping us.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Queue refactor</strong> There is a planned refactoring ( or at least an exploration to see if it would be practical ) of the "queue" system in Smoothie, that would make the code saner, would use less ram, and would allow for more performance/new features.<br><br>You can read about it at : <a href="/queue-refactor">Queue refactor</a> It is likely this will not be tried before a lot of other things happen ( including Smoothie2 firmware ) because it would change a lot of things in the firmware.<br><br>It is also possible we will move step by step towards this, at least for part of it ( Jim Morris already started this by removing occurrences of on_gcode_execute ).<br><br>NOTE this is no longer required after the motion control merge.<br><br>It basically is not an issue now.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Tool changing</strong> There is some work that needs to be done in order to properly support <a href="https://www.youtube.com/watch?v=9MAoRSXqEfg">automated tool changing</a>.<br><br><a href="https://github.com/arthurwolf">Arthur</a> is planning on working on this sometime around July 2016.<br><br>Any help is extremely welcome.<br><br>A first step towards tool changing is to implement recursive file playing.<br><br>Work on that is ongoing <a href="https://github.com/Smoothieware/Smoothieware/tree/recursive">here</a>.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Serial chaining</strong> This would allow forwarding of Gcode strings to other Smoothieboards over serial, therefore allowing use of boards as "slaves".<br><br>This would be a very powerful tool.<br><br>The specification is available <a href="https://docs.google.com/document/d/1bi8jpgJ-fXlusPl7SdTYnNRpybSCBh4oGoTqxcJNBfE/edit?usp=sharing">here</a> If you want to help with this, don't hesitate to <a href="mailto:wolf.arthur@gmail.com">contact us</a>.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>LUA scripting</strong> <a href="https://en.wikipedia.org/wiki/Lua_(programming_language)">Lua</a> is a very simple programming language.<br><br>It's quite commonly used to add "scripting" support to applications.<br><br>An idea that has been floating around ( for v2 Smoothie ) would be to experiment with ( we don't know if it's possible ) adding a LUA interpreter to Smoothie.<br><br>It'd have to be simple enough that it doesn't take too much RAM, but if it were made to work, it'd add the ability to create scripts that Smoothie would trigger when it receives specific Gcodes, or when specific internal events occur.<br><br>Those scripts could check for variables, send Gcodes internally, activate external peripherals etc.<br><br>This would be an extremely powerful tool, but we don't know if it's feasible, and would like to find out.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>New error reporting system</strong> We are working on a new system to report errors in a more consistent and useful manner, see the <a href="https://docs.google.com/document/d/16J-TbTM1v5mIs1aVF4OaIIJ-3PRYd82V65SvI577pcM/edit?usp=sharing">specification here</a>.<br><br>Additionally, a <a href="error">complete list of all firmware errors</a> has been drafted, and the page along with a bit of javascript magic, is intended to allow the firmware to link ( via short-form links ) directly to complete documentation about any error that just occurred ( as well as to log said errors, also in short-form manner ).
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>M1 support</strong> Support for a Gcode that pauses until user input.<br><br>User input can be a button or a Gcode.<br><br>We possibly only need a Gcode, since a button can then be created with Switch.<br><br>( note this might be partially supported, just with M600 instead ).
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Panel baby steps</strong> Add a panel-based tool to do micro-adjustments to the Z height live.
</sl-alert>
{:/nomarkdown}

## Smoothieware v2 firmware


{:/nomarkdown}

[Smoothieware v2](https://github.com/Smoothieware/Smoothie2) is the firmware for the [Smoothieboard v2 hardware](/blog_13).

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

Basic functions such as serial communication, configuration, planning and step generation, have been ported, but many others like temperature control, USB, Ethernet, SD card support, etc, are still missing.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Core features are now fully implemented including serial communication, configuration, motion planning, step generation, temperature control, USB, Ethernet, and SD card support. The firmware is actively maintained and improved with new features like lathe threading (G33), StealthChop2 silent steppers, OTA updates, dual motor support, and enhanced display drivers.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

We need your help moving the project forward.

{::nomarkdown}


Many have already offered to help, and at this point, several are at the point where they have hardware to work on, and are starting to get familiar with the codebase.

But this is a huge project, and here more is better! So come join the effort :)

You can find a list of the things to do for this project in the ReadMe: [Smoothie2 README](https://github.com/smoothieware/smoothie2/blob/master/readme.md)

Below are a few of the ones that need the most work.

Because these are difficult to implement, it's hard finding people to work on them.

If you think you are capable of doing any of those, please please please [contact us](mailto:wolf.arthur@gmail.com), we really need help on these.


{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>USB</strong> Like the v1 board, the v2 board has a USB port.

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

On the v1 board, that port exposes a composite device (Serial + Mass storage) to the host computer. However, Mass Storage just plain sucks. The computer can mess things up anytime without the board being able to prevent it, the board can't safely write to it's own SD card, corruption of the card is a common thing, etc.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

The v2 board implements USB with dual ports: USB Device (for serial CDC/ACM and mass storage MSC with improved safety via pushbutton/command mode selection) and USB Host via a dedicated USB-A connector (J2, not yet firmware-implemented). MTP (Media Transfer Protocol) support is planned as a future enhancement for safer SD card access and virtual file presentation, but is not yet implemented.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Besides simply implementing basic Serial/USB (CDC) functionality, we'd like the firmware to support MTP: <a href="https://en.wikipedia.org/wiki/Media_Transfer_Protocol">Media Transfer Protocol</a>. That'd be a much safer way for the computer to access the card.
</sl-alert>
{:/nomarkdown}



{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Ethernet</strong> The v1 board has an Ethernet port, the v2 board too.

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

We need Ethernet, TCP/IP, a web and telnet server, to be implemented in the v2 firmware, the same way it was on the v1. I (Arthur) have no idea how much work it'd be. There is a few implementations of web servers for LPC4337 available on the net, so it may simply be a matter of mashing that together with the v1 implementation. The v1 Ethernet implementation has some limitations and problems, it's possible with the better v2 hardware, a better implementation could be done.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Ethernet has been fully implemented in Smoothieware v2 with significant improvements over v1. The v2 firmware includes FreeRTOS+TCP stack (vs v1's uIP), HTTP web interface (hosted on SD), Telnet access for remote G-code sending, SFTP file transfer, NTP time synchronization, auto-update capability over the network, and mDNS hostname resolution (smoothieboard.local). The 10/100 Mbps interface provides fast network control and file management.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

If you have know-how related to this, please help! :)
</sl-alert>
{:/nomarkdown}



{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>SD card</strong>

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

SD card support in v1 uses SPI interface with typical speeds of 400-500 KB/s, which has been a common user complaint about slow file loading.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

SD card support in v2 is fully implemented with SDIO interface, providing 10-25 MB/s typical speeds (20-50× faster than v1). The v2 firmware supports standard microSD cards up to 32 GB (FAT32 formatted) and includes a pre-loaded SD card with firmware and configuration. Cards can hold G-code files, web interface files, documentation, and logs, with operations including boot configuration, runtime G-code playback, direct computer access via MSD mode, and network access via HTTP/SFTP. Adam Green did initial work on this: <a href="https://github.com/adamgreen/SDCard">SDCard</a>

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
</sl-alert>
{:/nomarkdown}

{::nomarkdown}


## Smoothie2 hardware

[Mark Cooper](https://github.com/logxen) is designing the Smoothieboard v2, v2-pro, and v2-mini boards, in Kicad, so that is pretty much covered for now.

The boards are now in alpha, once the alpha board has been tested, a beta board will be designed, and the files for it will be published.

At that time we'll need help reviewing the design.

If you are interested, [contact us](mailto:wolf.arthur@gmail.com).

Other projects related to the v2 hardware:

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Extension boards</strong> The Smoothie firmware is trying very hard to be as modular as possible, and to make it easy to do weird things.<br><br>In v2, we want to make the hardware even more modular/hackable than it already is.<br><br>To do this, we plan on having a set of standard connectors ( based on the gadgeteer pinout ).
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<a href="/images/socket-types-table.png">
  <img src="/images/socket-types-table.png" alt="Gadgeteer Pinout" style="min-width: 640px; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

We plan to have a very varied set of extension boards that'd plug easily into those connectors, for a very large variety of sensors, actuators, and peripherals.

You can find more information on this project at this link: [Extension boards](https://plus.google.com/+ArthurWolf/posts/GPF7hSGQiew)

We are looking for help with this, if you know PCB design, you are very welcome to contribute, most extension boards are quite easy to design.

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="check-circle"></sl-icon>
  <strong>Infinite extruders</strong> There is a project to create a system of chainable boards that would connect to a Smoothieboard v2.<br><br>You would be able to chain as many as you want, and each board would control a separate tool.<br><br>We plan on implementing several different tools, but the first one that is currently being worked on is the Extruder board.<br><br>You can find the specification for this project here: <a href="https://is.gd/peaDqc">Infinite extruders</a> <a href="https://github.com/kliment">Kliment Yanev</a> ( of Pronterface and Teacup fame ) is currently working on this.<br><br>Any help welcome!
</sl-alert>
{:/nomarkdown}

## Documentation

The [Smoothieware website](http://smoothieware.org) contains all documentation for Smoothie firmware and Smoothieboard hardware.

Improvements to documentation are always welcome, and you can help by editing pages to make them clearer, adding new content, or fixing errors.

See [Editing the Wiki](editing-the-wiki) for information on how to contribute to the documentation.
