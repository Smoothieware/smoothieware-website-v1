
# Smoothie2 Project Update

It's been a bit over a year since the [first update about the Smoothie2 project](http://smoothieware.org/blog_13.md).

It might sound like this is going slowly, but actually, what's really going on is we were really ambitious, and even though a massive amount of work is being done by the community, things are taking time. Hopefully this post will give an idea of the scope of what we are trying to accomplish.

Recently, a lot of key things have happened, so let's do an update:

## Firmware

The [mBed version of the Smoothie2 firmware](https://github.com/Smoothieware/Smoothie2.md) is a port of the [v1 firmware we all love](https://github.com/Smoothieware/Smoothieware.md) to the LPC4337 (the chip on the Smoothieboard v2). The mBed version has been put on hold and is superseded by the [nuttx version of the Smoothie v2 firmware](https://github.com/Smoothieware/smoothie-v2.md).

These [awesome people](https://github.com/Smoothieware/Smoothie2/graphs/contributors.md) have gotten the alpha version of the nuttx firmware up and running.

<iframe width="100%" height="600" src="https://www.youtube.com/embed/qBVmJ0OQFPw?rel=0&amp;modestbranding=1" frameborder="0" allowfullscreen></iframe>

This is pretty cool, however, there is some even more exciting things to come. We want to rebuild Smoothie on top of a [RTOS](https://en.wikipedia.org/wiki/Real-time_operating_system).

This has many advantages, should make Smoothie run even more smoothly, make the code even better, allow for even more new features, and fix a lot of the limitations of the v1 codebase.

We are still deciding between NuttX, FreeRTOS and mBed OS. The decision should be made soon.

Once that decision is made, we have a plan for [BeeVeryCreative](https://beeverycreative.com/), Uberclock and Robotseed, to pull together to hire actual professional developers (including Smoothie legend [Jim Morris](https://github.com/wolfmanjm.md)) to do both the RTOS port, and the low level device drivers for USB, Ethernet and SD (and more!).

Because this will be paid work, it should be much faster than what volunteer contributors are generally able to achieve, so work on this really powerful version of the v2 firmware should go quickly once it starts.

## Hardware

The v2 line of boards will consist of three boards:
- Smoothieboard v2, which is much like the current v1 4XC board, but better
- Smoothieboard v2-pro, which is v2 but with a FPGA, more and better peripherals
- Smoothieboard v2-mini, which is an as-inexpensive-as-possible board aimed at having only the bare minimum you need to run a simple 3D printer

You can find a more detailed specification of the boards [here](https://docs.google.com/document/d/1EMzec2ZNWmZq3eGQvJiSWeQzw9aQT_vpWbVo4W8vtfs/edit#).

The original plan for prototypes of the v2 line was to make a series of v2-pro boards for contributors. However, in order to send boards to more people, we are going to start with a run of the v2-mini board (much less expensive to produce in small quantities).

With the spec ready, and the firmware making very good progress, work on the v2-mini actual design just recently started, the schematic is nearly ready, and the PCB design should be done in the coming week or so.

If you are curious you can see the current schematic progress [here](http://smoothieware.org/local--files/blog:15/Smoothie2Mini-pre4-sch.pdf).

By the way, talking of hardware, we are not leaving v1 aside, it just got a [nice update](https://plus.google.com/u/0/+ArthurWolf/posts/cp75kbRkcqa) (v1.1), giving it 1/32 microstepping and some other minor goodies. In stores in a few weeks.

### Highlights

A few things that are new with v2 or that changed since previous announcements on the v2 boards:
- We are giving up on the Intel Edison port on the v2-pro. Instead you'll have extension boards that will make it easy to wire Intel Edison, or C.H.I.P or Raspberry Pi to all v2 boards.
- Stepper drivers: The v2 and v2-pro will get Trinamic drivers. Say hi to silence and super high microstepping. For v2-mini, it'll be either Allegro or Heroic drivers, still working on figuring that out.
- Soldering connectors to boards is a large part of the cost of a board, in order to make v2-mini cheaper, it will come with the connectors unsoldered. This and other of its characteristics should hopefully bring it down to prices comparable to the cheapest 32bit boards around at the moment.
- Boards will now have a JTAG port, unsoldered by default.
- All boards are getting XT30/XT60 battery connectors for power input. Those are really nice, cheap, and easy to get, and will remove some of the current limitations of the input screw terminals.
- v2 and v2-pro have 5V voltage regulators on-board by default, no more soldering it yourself.
- v2 and v2-pro have an additional mosfet to cut power to the mosfets if a problem is detected with the heaters, giving you even better protection than anything around, even if a mosfet fails.

## Extruders in the Sky

You'll notice Smoothieboard v2 only has 4 stepper motor drivers (where v1 has a version with 5 drivers on 5XC).

While it's very easy to add a second extruder using an extension board from the planned series (see below), what about adding even more extruders?

The Smoothieboard v2 and v2-mini will have a CAN port (with an extra special differential "step" signal).

This will allow to chain an infinite amount of extruder boards together, controlled by the Smoothieboard.

Each extruder board controls an extruder motor, a hotend, a fan, and also has a filament sensor.

You can see the spec for it [here](https://docs.google.com/document/d/1yJnCG1fGhp64-zeYBpuORSVDRx_d7kL48Qw4BJoBYs4/edit#).

Kliment (author of Pronterface and Reprap legend), is working on this. He's got prototypes made and is doing the firmware for it now:

![Extruder Board Prototype](https://i.imgur.com/bzdoaix.jpg)

Once this works for extruders, we also plan to develop chainable boards for other tools/peripherals.

## Extension Boards Everywhere

Another lesser known but really awesome feature of the v2 project, is the planned series of extension boards.

The Smoothieboard v2 line will have a standard connector for its free GPIO: the gadgeteer system.

Not to be confused with the Gadgeteer boards and coding environment, we are only using the socket and naming conventions:

![Gadgeteer System](https://image.jimcdn.com/app/cms/image/transf/none/path/se3c6ab1e715754e9/image/iae4b2e52f8dcaf7c/version/1326718668/image.jpg)

One great advantage of this is that there is a large pre-existing ecosystem of breakout boards that are compatible with this socket:

![Gadgeteer Ecosystem](http://www.extremetech.com/wp-content/uploads/2011/08/297.0.large.jpg)

However, we also want to develop our own series of boards, some of which are of general use, but lots of which are specific to CNC, lasers, 3D printers, etc.

This will allow you to start from a Smoothieboard and add pretty much **anything** you want to get your machine to do what you want, just by plugging things in. This also makes it easier to wire boards that are not gadgeteer compatible (like people do with v1 now, just easier).

You can find a list of the boards [here](https://docs.google.com/document/d/144EbmhN6z-J2V_Zw7GfJpZrfD-B0dC3cuea9oWPgxNM/edit#).

Several of the boards have already been [contributed by volunteers](https://github.com/Smoothieware/Smoothieboard2.md).

## Video Tutorials

We plan on having a full series of video tutorials on Youtube for the v2 series of boards. Learning stuff on Youtube is great.

That series will cover everything, and watching it in its entirety should make you a Smoothie expert, but you can also watch just whatever part you need for your specific project. The videos will also be integrated into the written documentation website.

The community is currently writing the synopses for this series (help welcome) [here](https://github.com/Smoothieware/Smoothie-video-tutorials.md).

Once the synopses are written, the plan is to hire Youtube 3D printing celebrity [Thomas Sanladerer](https://github.com/Smoothieware/Smoothie-video-tutorials.md) to shoot them all, and publish them on his channel. Total planned runtime for the first series of videos is approximately 2 hours, but more will come after that.

## Help

We really need all the help we can get. If you have some free time and want to help the project, please consider contributing to one or the other part of the v2 project.

If you know Kicad, and want to help the project along, you are extremely welcome to [contact us](mailto:wolf.arthur@gmail.com).

Thanks for reading, we are all very excited for the v2 project, we know you are too, please be patient, it'll be worth the wait :)

## Update

Here is the current state of the v2-mini design on December 7, 2016:

![v2-mini Labels](/images/v2-mini-labels.svg.png)
