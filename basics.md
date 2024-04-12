
# Smoothie basics

Here are some basic notions and pointers about Smoothie.

Smoothie is a [firmware](http://en.wikipedia.org/wiki/Firmware).

That is a program that executes on a [micro-controller](http://en.wikipedia.org/wiki/Microcontroller), basically a very simple/small computer used for very specific tasks.

The micro-controller is located on a controller board, for example [Smoothieboard](smoothieboard.md), where it executes the Smoothie firmware.

This program receives instructions from your computer ( typically [G-code](http://reprap.org/wiki/G-code), generated by [CAM software](http://en.wikipedia.org/wiki/Computer-aided_manufacturing) ), and executes them, for example by moving stepper motors in a coordinated fashion, and operating tools.

If you are curious, you can find a list of G-codes for Smoothie, and their explanation, [here](/supported-g-codes.md).

This allows you to use Smoothie to execute [CNC](http://en.wikipedia.org/wiki/Numerical_control) operations.

Some examples of workflow:

> [!NOTE]
> **3D printer**
> - Create a [3D model](http://en.wikipedia.org/wiki/3D_modeling) using 3D drawing ( [CAD](http://en.wikipedia.org/wiki/Computer-aided_design) software ), for example [OpenSCAD](http://www.openscad.org/).
> - Export this model as a [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29) file, that is the standard file format generally currently used for 3D models exported for 3D printing.
> - Use [CAM software](http://en.wikipedia.org/wiki/Computer-aided_manufacturing) like [Slic3r](http://slic3r.org/), to convert the STL file into a G-code file.
> - Connect host software like Pronterface to your [Smoothieboard](smoothieboard.md) via the USB cable.
> - Instruct the host software to start the print.
> - The host software will stream the G-code to the [Smoothieboard](smoothieboard.md), which will execute each G-code command in sequence
> - The motors move, the extruder extrudes, and a nice-looking 3D printed object gets created.

> [!NOTE]
> **CNC milling machine**
> - Create a 2D or [3D model](http://en.wikipedia.org/wiki/3D_modeling) using 2D or 3D drawing ( [CAD](http://en.wikipedia.org/wiki/Computer-aided_design) ) software, for example [OpenSCAD](http://www.openscad.org/).
> - Export this model as a [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29) or [DXF](http://fr.wikipedia.org/wiki/Drawing_eXchange_Format) file, STL is generally used for 3D milling operations ( for example surface carving ), and DXF for 2D or [2.5D](http://en.wikipedia.org/wiki/2.5D) milling operations ( for example contour or drilling ).
> - Use [CAM software](http://en.wikipedia.org/wiki/Computer-aided_manufacturing) like [CamBam](http://www.cambam.info/), to convert the file into a G-code file.
> - Connect host software like Pronterface to your [Smoothieboard](smoothieboard.md) via the USB cable.
> - Instruct the host software to start the operation.
> - The host software will stream the G-code to the [Smoothieboard](smoothieboard.md), which will execute each G-code command in sequence
> - The motors move, spindle spindles, and a milled object gets carved out of material.

The workflow is very similar for a laser cutter, as it is essentially a CNC mill with a very very thin tool ( the laser beam ).

## Smoothie adventure

When setting up a machine to be controlled by a [Smoothieboard](smoothieboard.md), the process is generally as follows:

- Before anything else, read the guide for your machine type: [3D printer guide](/3d-printer-guide.md), [laser cutter guide](/laser-cutter-guide.md) or [cnc mill guide](/cnc-mill-guide.md), in its entirety.
- If using Windows, install the [driver](/windows-drivers.md).
- Install some [software](/software.md) to talk to the board.
- Connect your board to your computer via [usb](usb.md) or [ethernet](/network.md) and practice talking to it.
- Now following the guide, start plugging peripherals into your board, and editing your [configuration](/configuring-smoothie.md) accordingly.
- Test each thing before moving on the the next, it helps make sure if there is a problem you know exactly where it happens.
- Once everything works, you can start using your machine to fabricate things.

## Communication

You can't do anything if you can't talk to your [Smoothieboard](smoothieboard.md).

The usual way to do so is to simply connect a USB cable to your Smoothieboard, then to your computer, and then to connect your host software to the Smoothieboard.

See your host software of choice's documentation on this matter.

The Host software will then provide you with a graphical user interface to interact with your Smoothieboard ( and therefore with your machine ), and you shouldn't have to worry about communication more than this.

> [!TIP]
> - Aside from connecting via the USB cable, you can also use the on-board Ethernet connector to interface with the board, see [Ethernet](ethernet.md). This provides a telnet interface ( similar to the Serial/USB interface the USB cable offers ), and a Web interface. One advantage of this is that Ethernet is less prone to suffer from [Electromagnetic interference](http://en.wikipedia.org/wiki/Electromagnetic_interference) problems than USB.
> - Smoothieboard has an on-board SD card. Instead of using your host software to stream your G-code program line by line, you can also upload it all at once to the SD card, then execute it from there. This removes the bottleneck of communication while printing ( though that is very rarely a problem ). See [Printing from the SD Card](http://smoothieware.org/printing-from-sd-card).
> - Smoothie has a set of commands you can use to interact with and configure the board. See [Console Commands](http://smoothieware.org/console-commands).
> - The G-codes that Smoothie understands are listed at [Supported G-codes](http://smoothieware.org/supported-g-codes).

## Electricity

When reading this documentation, understanding of basic principles of electricity will be expected and can not be done without.

Here are a few videos to refresh your memory:

### What is electricity

<center>
![What is electricity](https://www.youtube.com/embed/mc979OhitAg)
</center>

### What are Amps

<center>
![What are Amps](https://www.youtube.com/embed/8gvJzrjwjds)
</center>

### What are Volts

<center>
![What are Volts](https://www.youtube.com/embed/TBt-kxYfync)
</center>

### What is resistance

<center>
![What is resistance](https://www.youtube.com/embed/NfcgA1axPLo)
</center>

### What are Watts

<center>
![What are Watts](https://www.youtube.com/embed/VSpB3HivkhY)
</center>

There is very little math in these videos ( except the last one ), if you have a hard time with what's still there, we warmly recommend heading over to [Khan Academy](https://www.khanacademy.org/)'s math videos for easy to digest courses.

If you want to go further on this subject, you can also follow this [basic Electrical Engineering](https://www.khanacademy.org/science/electrical-engineering/introduction-to-ee) video course.