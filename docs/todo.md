
# The Smoothie project's TODO list

This page lists all of the projects the community is working on, and those that are planned.

This includes improvements on the existing, new features, refactors, new hardware and documentation efforts.

If you are looking to help the project, but do not know where to start, this is the place to get an idea what is going on within the project right now.

> [!NOTE]
> If you have an idea for a new feature or any kind of improvement, please contact the community via IRC or the mailing lists to discuss it. You can also contact [wolf.arthur@gmail.com](mailto:wolf.arthur@gmail.com) with any questions or to chat about implementation details.
> 
> You likely also want to read the following pages : [coding-standards](coding-standards.md), [contribution-guidlines](contribution-guidlines.md), [developers-guide](developers-guide.md) and [github](github.md).

## Smoothieware v1 firmware

The Smoothieware firmware that runs on the Smoothieboard v1 ( Smoothieware v1 ) has a lot of features, and has received a lot of love over the years. But there are many things we want to improve, and new features we want to implement or experiment with :

> [!SUCCESS]
> **Step generation improvements**
> 
> [Jim Morris](https://github.com/wolfmanjm) is working on several improvements on the step generation in Smoothie, including [removing on_gcode_execute](https://github.com/Smoothieware/Smoothieware/issues/82) and [doing acceleration every step](https://github.com/Smoothieware/Smoothieware/issues/107) instead of on a fixed clock as we do now, as well as many other small changes.
> 
> This is expected to result in a much saner codebase, smoothness/performance improvements, and to make it easier to implement some new features, like S-curve acceleration, 6-axis support and some extruder features.
> This is going to require, amongst other things, a massive rewrite of the Extrude and Laser modules.
> 
> This is also possibly going to solve the problem [Simplify3D and Smoothie have with each other](http://smoothieware.org/simplify3d).
> 
> **Update** : This was merged into edge beginning of July 2016, and is now being tested by the community in the wild.

> [!TIP]
> **S-curve acceleration**
> 
> [Jim Morris](https://github.com/wolfmanjm) is planning on implementing 7th order acceleration into Smoothie.
> 
> See [Jerk-Controlled Motion Explained](https://github.com/synthetos/TinyG/wiki/Jerk-Controlled-Motion-Explained) for an explanation of what this is.
> 
> See also this proposed implementation: [S-curve-Planner](https://github.com/PymZoR/S-curve-Planner)
> 
> Also, there has been some discussions of implementing a PNP-specific planner, that would loose axis sync ( not required on Pick and Place machines ), but thanks to this simplifying it a lot, would then be much easier to implement S-curve for.

> [!SUCCESS]
> **Recursive file playing**
> 
> This new feature would allow users to call the play command from within currently playing files. 
> 
> Not only would it be convenient, it'd also make it much easier to implement macros and tool changing routines.
> 
> The current status of this work can be seen at : [recursive](https://github.com/Smoothieware/Smoothieware/compare/recursive?expand=1)

> [!SUCCESS]
> **New debug commands**
> 
> One feature that's been requested and that would be neat to have in some situations, is a "pin" command, allowing you to set/read any pin, even if it's not defined in a switch. This would not be meant for "normal" day-to-day use (you have switch for this), but would save some time/effort when debugging some hardware or config issues.
> 
> [This Arduino sketch](https://hackaday.com/2021/03/21/arduino-cli-for-i-o-pin-testing/) could be good inspiration.

> [!SUCCESS]
> **6-axis support**
> 
> Once the step generation improvements and s-curve support have been implemented, it will be much easier to add proper 6-axis ( XYZABC ) support into Smoothie. This is currently done by using the Extruder module, which has some limitations, doing it properly would be a good improvement.
> 
> This issue keeps track of that feature : [6-axis support](https://github.com/Smoothieware/Smoothieware/issues/120)
> 
> This is now in current edge

> [!SUCCESS]
> **PanelDue support**
> 
> [Chris Brent](https://github.com/chrisbrent) is working on implementing support for the [Paneldue](http://www.think3dprint3d.com/PanelDue) into Smoothie ( specifically the M408 G-code, which will also be useful for web interface projects ).
> 
> You can follow the progress at [PanelDue support](https://github.com/Smoothieware/Smoothieware/pull/798)

> [!TIP]
> **Soft endstops**
> 
> Soft endstops is a feature in which the machine is aware of it's physical limits, and does not go past these, without the need for a physical switch to actually detect this.
> 
> This feature is more complex to implement than what one might think, and the need to actually implement it "cleanly" and discussion on how to do so, has delayed actual coding work on it.
> 
> A proposed implementation is described [here](https://docs.google.com/document/d/1U6nzx1boqF-J2GGPWF4yIaaVib0JNodVWSKBfwiyp_M/edit?usp=sharing).
> 
> If you want to help with this, don't hesitate to ping the community.

> [!TIP]
> **File-based panel system**
> 
> There is a project to explore using files on the SD card to describe the panel menu system, instead of using code.
> 
> This would allow for multi-language, user customization, richer menus with more options, and new features.
> 
> However, it's not clear yet if this would be fast enough to be comfortable to use, and it's not possible to use files while a file on the SD card is playing, so that is a problem that would need to be solved ( possibly by having a separate, simpler system while playing files ).
> 
> You can see a specification for this new idea here : [File-based panel system](https://is.gd/VlsYq3)
> 
> Jarek SzczepaÅski is currently looking into implementing this, but any help is very very welcome.

> [!SUCCESS]
> **Support mixing nozzles**
> 
> Mixing hotends like the Diamond, require extruding using several different extruders at the same time, which Smoothie doesn't know how to do yet.
> 
> There is discussion of implementing this in this issue : [Support mixing nozzles](https://github.com/Smoothieware/Smoothieware/issues/875) and [digiexchris](https://github.com/digiexchris) is working on implementing it.

> [!WARNING]
> **Fix thermocouple SPI problem**
> 
> There is a problem in Smoothie right now where SPI thermocouple boards is called in interrupts, when it shouldn't. Amongst other things it prevents using several thermocouple boards at the same time.
> 
> [Grey Christoforo](https://github.com/greyltc) has worked on fixing the issue here : [Fix thermocouple SPI problem](https://github.com/Smoothieware/Smoothieware/pull/891) but his work needs testing. If you have a Max31855 thermocouple board, please test his work so it can be merged !

> [!TIP]
> **Extruder JKN advance**
> 
> Extruder advance is a technique of managing the pressure of the extruder relative to the head's motion so that the plastic is more regularly applied to the part.
> 
> You can see some talk of implementing it in Smoothie here for example : [Extruder JKN advance](https://github.com/Smoothieware/Smoothieware/issues/645)
> 
> Several persons have written implementations, but they were too complex to be merged. The work on step generation ( per-step accel, s-curve, 6-axis etc ) will involve some refactors that would then make this simpler to implement.
> 
> If you are interested in helping with this, don't hesitate to ping us.

> [!TIP]
> **Queue refactor**
> 
> There is a planned refactoring ( or at least an exploration to see if it would be practical ) of the "queue" system in Smoothie, that would make the code saner, would use less ram, and would allow for more performance/new features.
> 
> You can read about it at : [Queue refactor](http://smoothieware.org/queue-refactor)
> 
> It is likely this will not be tried before a lot of other things happen ( including Smoothie2 firmware ) because it would change a lot of things in the firmware.
> It is also possible we will move step by step towards this, at least for part of it ( Jim Morris already started this by removing occurrences of on_gcode_execute ).
> 
> NOTE this is no longer required after the motion control merge. It basically is not an issue now.

> [!TIP]
> **Tool changing**
> 
> There is some work that needs to be done in order to properly support [automated tool changing](https://www.youtube.com/watch?v=9MAoRSXqEfg).
> 
> [Arthur](https://github.com/arthurwolf) is planning on working on this sometime around July 2016. Any help is extremely welcome.
> 
> A first step towards tool changing is to implement recursive file playing. Work on that is ongoing [here](https://github.com/Smoothieware/Smoothieware/tree/recursive).

> [!TIP]
> **Serial chaining**
> 
> This would allow forwarding of Gcode strings to other Smoothieboards over serial, therefore allowing use of boards as "slaves".
> This would be a very powerful tool.
> The specification is available [here](https://docs.google.com/document/d/1bi8jpgJ-fXlusPl7SdTYnNRpybSCBh4oGoTqxcJNBfE/edit?usp=sharing)
> If you want to help with this, don't hesitate to [contact us](mailto:wolf.arthur@gmail.com)

> [!TIP]
> **LUA scripting**
> 
> [Lua](https://en.wikipedia.org/wiki/Lua_(programming_language)) is a very simple programming language. It's quite commonly used to add "scripting" support to applications. An idea that has been floating around ( for v2 Smoothie ) would be to experiment with ( we don't know if it's possible ) adding a LUA interpreter to Smoothie. It'd have to be simple enough that it doesn't take too much RAM, but if it were made to work, it'd add the ability to create scripts that Smoothie would trigger when it receives specific Gcodes, or when specific internal events occur. Those scripts could check for variables, send Gcodes internally, activate external peripherals etc. This would be an extremely powerful tool, but we don't know if it's feasible, and would like to find out.

> [!TIP]
> **New error reporting system**
> 
> We are working on a new system to report errors in a more consistent and useful manner, see the [specification here](https://docs.google.com/document/d/16J-TbTM1v5mIs1aVF4OaIIJ-3PRYd82V65SvI577pcM/edit?usp=sharing).
> 
> Additionally, a [complete list of all firmware errors](error.md) has been drafted, and the page along with a bit of javascript magic, is intended to allow the firmware to link ( via short-form links ) directly to complete documentation about any error that just occurred ( as well as to log said errors, also in short-form manner ).

> [!TIP]
> **M1 support**
> 
> Support for a Gcode that pauses until user input. User input can be a button or a Gcode. We possibly only need a Gcode, since a button can then be created with Switch.
> 
> ( note this might be partially supported, just with M600 instead ).

> [!TIP]
> **Panel baby steps**
> 
> Add a panel-based tool to do micro-adjustments to the Z height live.

## Smoothie2 firmware

[Smoothie2](https://github.com/Smoothieware/Smoothie2) is a port of the Smoothieware firmware to the [Smoothieboard v2 hardware](http://smoothieware.org/blog_13). [Second update on v2 hardware](http://smoothieware.org/blog_15)

Basic functions such as serial communication, configuration, planning and step generation, have been ported, but many others like temperature control, USB, Ethernet, SD card support, etc, are still missing. We need your help moving the project forward.

Many have already offered to help, and at this point, several are at the point where they have hardware to work on, and are starting to get familiar with the codebase. But this is a huge project, and here more is better! So come join the effort :)

You can find a list of the things to do for this project in the ReadMe: [Smoothie2 README](https://github.com/smoothieware/smoothie2/blob/master/readme.md)

Below are a few of the ones that need the most work. Because these are difficult to implement, it's hard finding people to work on them. If you think you are capable of doing any of those, please please please [contact us](mailto:wolf.arthur@gmail.com), we really need help on these.

> [!TIP]
> **USB**
> 
> Like the v1 board, the v2 board will have a USB port.
> 
> On the v1 board, that port exposes a composite device ( Serial + Mass storage ) to the host computer. However, Mass Storage just plain sucks. The computer can mess things up anytime without the board being able to prevent it, the board can't safely write to it's own SD card, corruption of the card is a common thing, etc.
> 
> Besides simply implementing basic Serial/USB ( CDC ) functionality, which would already be awesome, we'd like the firmware to support MTP: [Media Transfer Protocol](https://en.wikipedia.org/wiki/Media_Transfer_Protocol)
> 
> That'd be a much safer way for the computer to access the card, it'd allow the board to have control, write to the SD card itself ( which would allow for implementation of many new features ), present virtual files, etc.
> 
> But implementing MTP is a really huge task. If you think you could do this, please please contact us. There are even some companies likely ready to pay some money for this to encourage implementation.

> [!TIP]
> **Ethernet**
> 
> The v1 board has an Ethernet port, the v2 board too. We need Ethernet, TCP/IP, a web and telnet server, to be implemented in the v2 firmware, the same way it was on the v1.
> 
> I ( Arthur ) have no idea how much work it'd be. There is a few implementations of web servers for LPC4337 available on the net, so it may simply be a matter of mashing that together with the v1 implementation.
> 
> The v1 Ethernet implementation has some limitations and problems, it's possible with the better v2 hardware, a better implementation could be done.
> 
> If you have know-how related to this, please help! :)

> [!SUCCESS]
> **SD card**
> 
> Adam Green is already working on this: [SDCard](https://github.com/adamgreen/SDCard)
> 
> Thank you so much [Adam Green](https://github.com/adamgreen)!
> 
> If you want to help with this, I believe testing can help greatly.

## Smoothie2 hardware

[Mark Cooper](https://github.com/logxen) is designing the Smoothieboard v2, v2-pro, and v2-mini boards, in Kicad, so that is pretty much covered for now.

The boards are now in alpha, once the alpha board has been tested, a beta board will be designed, and the files for it will be published. At that time we'll need help reviewing the design. If you are interested, [contact us](mailto:wolf.arthur@gmail.com).

Other projects related to the v2 hardware:

> [!SUCCESS]
> **Extension boards**
> 
> The Smoothie firmware is trying very hard to be as modular as possible, and to make it easy to do weird things. In v2, we want to make the hardware even more modular/hackable than it already is.
> 
> To do this, we plan on having a set of standard connectors ( based on the gadgeteer pinout ):
> 
> ![Gadgeteer Pinout](/images/external/http.files.channel9.msdn.com.wlwimages.1932b237046e4743a4e79e6800c0220f.image.5b2.5d.3.png)
> 
> and a very varied set and extension boards that'd plug easily into those connectors, for a very large variety of sensors, actuators, and peripherals.
> 
> You can find more information on this project at this link: [Extension boards](https://plus.google.com/+ArthurWolf/posts/GPF7hSGQiew)
> 
> We are looking for help with this, if you know PCB design, you are very welcome to contribute, most extension boards are quite easy to design.

> [!SUCCESS]
> **Infinite extruders**
> 
> There is a project to create a system of chainable boards that would connect to a Smoothieboard v2. You would be able to chain as many as you want, and each board would control a separate tool. We plan on implementing several different tools, but the first one that is currently being worked on is the Extruder board.
> 
> You can find the specification for this project here: [Infinite extruders](https://is.gd/peaDqc)
> 
> [Kliment Yanev](https://github.com/kliment) ( of Pronterface and Teacup fame ) is currently working on this. Any help welcome!
> 
> Preview: ![Extruder Board](http://i.imgur.com/TFH1bHX.png)

## Documentation

The [Smoothieware website](http://smoothieware.org), which contains the