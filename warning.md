
# Warnings

Before you start wiring your machine's elements to the board, there are several things you need to keep in mind and be careful about during all of the assembly.

**Make sure you read this. Seriously. Not kidding. Do it. It's important.**

> [!DANGER]
> **Polarity**
> 
> ![Power connections](/images/3d.printer.guide.smoothieboard.polarity.png)
> 
> Note the inversion between the 5mm and 3.5mm connectors
> 
> Always make sure the [polarity](http://en.wikipedia.org/wiki/Electrical_polarity) is correct when wiring in power inputs (coming from the [Power Supply](http://en.wikipedia.org/wiki/Power_supply_unit_%28computer%29)). Reversed polarity can damage or destroy all or part of your board. Polarity is indicated on the board itself by the + and - signs. Double check. On older versions of the board, markings are partially hidden by the connector, making it confusing. Rely on only the diagrams.
> 
> To check the polarity of your power source, attach your multimeter probes to the two wires of your power source respectively. If the voltmeter reading is positive it implies that the red probe is connected to the positive wire (+) and the black probe to the negative wire (-).
> 
> The main (labeled VBB) power input has a reverse polarity protection, however, it will not hold forever. As soon as you notice something is wrong, turn the power supply off and check again.

> [!DANGER]
> **Disconnecting**
> 
> **[Never](http://datacent.com/images/shots/burnt_chip.jpg)** disconnect or connect stepper motors from the stepper motor drivers while the board is powered (i.e., when the Power Supply is turned on). 
> 
> The drivers have very good protection against most possible problems and are very hard to destroy accidentally. But it is possible.

> [!WARNING]
> **Shorts**
> 
> Be careful that nothing metallic **ever** touches the board while it is powered on. Falling screwdrivers, nuts and bolts can cause shorts and destroy the board. 
> Check the board before powering it on.
> Do not press the reset button with anything metallic, as you could slip and cause a short, use a plastic screwdriver or the like.

> [!WARNING]
> **Use the right connector**
> 
> Always check the schematic before connecting power sources (coming from the Power Supply) to the board. Connected to the wrong connector can destroy components. A common example of this problem is plugging a power input cable, into the connector for an output, or plugging the limit switches in backwards.

> [!WARNING]
> **Crimping**
> 
> Make absolutely sure of your connections using [crimps](http://en.wikipedia.org/wiki/Crimp_connection) or screw terminals, from wires to any type of connector, are very careful and well done. Connections (to the stepper motors for example) lost while the machine is running can destroy your board.

> [!DANGER]
> **Markings**
> 
> In the case of the VBB power input, be careful. If your board came with connectors pre-soldered, the 5mm connector is present, and the polarity of that connector is that of the large traces in the wiring diagram to the right (red is +, blue is -). On some boards, the marking on the boards may be hidden by the connector itself, so for VBB, do not rely on the markings on the board, but on the diagrams on this page. However, if you did not get your connectors soldered, and want to solder a 3.5mm connector instead of a 5mm connector, also note that the polarity is the opposite.

> [!INFO]
> **USB v Ethernet**
> 
> USB can, in some setups, be subject to interference, which causes disconnections, and can ruin your work. This is very hard to prevent if it happens even in normal conditions. Ethernet, on the other hand, does not have this problem: save yourself the trouble, and use Ethernet right away. It's very nice. See [Network](/network.md) for information on how to set it up.

> [!WARNING]
> **Destroying your board**
> 
> If you receive a bad board, you will get a replacement. But if you destroy your own board, your only options will be to fix it yourself (which can be quite difficult), or get a new one.
> 
> This is why it is very important you make sure you do not destroy your own board. Smoothieboard is reasonably protected, but there are still things that will destroy it. The general idea is: if a part of the board gets too much power, it will get destroyed. Here are some common mistake users do that cause the board to get too much power and die:
> 
> * Plugging 12-24v (motor power) into anything you are not supposed to. Like the 5V line, or an end-stop or thermistor input for example. Problems with the 5V or 3.3V power are not as much of a problem as the board is 5V-tolerant, so wrong connections and shorts should be okay as long as they do not last too long.
> * Shorting 12-24v to anything else, which is essentially the same as plugging it into a place you are not supposed to (see above). This can happen by dropping a metal object onto the board, bad soldering, loose wires, un-protected wires, etc ... 
> * Using an inductive load (like a motor, fan or solenoid) on a MOSFET, without a diode across (see Fan documentation).
> 
> The general idea here is: always make sure everything is clean, and double-check everything **before** turning the power on. You can not learn by making mistakes here, as mistakes will likely cost you your board.
> 
> [Electrostatic discharge](https://en.wikipedia.org/wiki/Electrostatic_discharge) can also destroy your board : make sure you [properly ground everything](http://smoothieware.org/forum/t-1381690?from=email#post-2475310).

> [!DANGER]
> **Heater safety**
> 
> If your machine contains any heating element and uses the [temperature control module](http://smoothieware.org/temperaturecontrol) to control it, please make sure you read the section about implementing all safety measures [here](http://smoothieware.org/temperaturecontrol#safety), and implement as many as you can. Fires will kill you if you don't.

> [!DANGER]
> **Grounding**
> 
> Make sure your machine's case and electronics are properly grounded, also make sure your location's electrical installation's grounding is correctly done. 
> 
> See for example:
> 
> * [Electrical Engineering Portal](http://electrical-engineering-portal.com/9-recommended-practices-for-grounding)
> * [Wikipedia:Ground_and_neutral](https://en.wikipedia.org/wiki/Ground_and_neutral)
> * [Mach Support](https://www.machsupport.com/forum/index.php?topic=9587.0)
> * [Don's Things](https://donsthings.blogspot.com/2018/09/battling-electrical-noise-in-cnc-builds.html)
> * [Makr Zone](https://makr.zone/grounding-the-machine/283/)
> * [Smoothie Forum](http://smoothieware.org/forum/t-1381690?from=email#post-2475310)

> [!WARNING]
> **Environmental hazards**
> 
> Be aware of your environment: it's not just the machine itself.
> 
> * On a laser cutter, the machine vents large quantities of toxic smoke and gas, make sure it is very well evacuated to a place where no-one is breathing them
> * On a CNC-mill, dusts, like wood dust for example, can be explosive if they come in contact with a flame, be careful and take measures to limit dust in the air
> * On a 3D printer, the acetone used to clean things is very flammable, and the sprays used to increase bed adherence are explosive, store them adequately and be careful when using them
> 
> In particular, you are even more in danger if you are using your machine in a confined space, always be on the watch for safety issues.

For a good read about safety, you can refer to the [RepRap Wiki documentation on the subject](http://reprap.org/wiki/Safety)

To properly understand some of the safety instructions in this documentation, basic knowledge about electricity is required. See [this page](http://smoothieware.org/basics#electricity) for a refresher on the basics.
