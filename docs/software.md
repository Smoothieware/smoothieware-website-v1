# Software

All software below either knows how to interface with (or how to generate G-code) for Smoothieware.

## 3D Printing

- [Slic3r](http://slic3r.org/) - 3D printing slicer
- [Cura](https://ultimaker.com/en/products/software) - 3D printing slicer and host.
- [Prusa Control](http://prusacontrol.org/) - A beginner-friendly interface for the Slic3r engine.
- [Pronterface](http://www.pronterface.com/) - 3D printing host. See the guide on the Wiki: [Pronterface](pronterface)
- [3Delta Printer Control](https://github.com/minad/3delta) - 3D printing host especially suited for delta printers.
- [OctoPrint](http://octoprint.org/) - Awesome web interface (Host) for 3D printer control. On the wiki: [Octoprint](octoprint)
- [Simplify3D](https://www.simplify3d.com/) - Closed source 3D printing slicer and host. On the wiki: [Simplify3D](simplify3d)
- [Fabrica](http://arthurwolf.github.io/fabrica/) - Easy to use web control interface (Host)
- [Smoopi](https://github.com/wolfmanjm/kivy-smoothie-host) - Host specifically written for Smoothieware, runs on rpi with touch screen or a desktop.

## CNC

- [bCNC](https://github.com/vlachoudis/bCNC/wiki) - On the wiki: [bCNC](bcnc) Open-Source CNC host with great preview and other operations. Set machine type to smoothie, and add `grbl_mode true` to your smoothie config or even better use the firmware-cnc.bin build of smoothieware (**Note**: You must update to the latest version of Smoothieware to ensure compatibility with bCNC).
- [OpenSCAM.org](http://openscam.org/) - Open-Source Simulation & Computer Aided Machining (Free 3-axis CNC Simulator which understands G-Code)
- [CNC.js](https://github.com/cncjs/cncjs) - Open-Source CNC host with lots of features, running in your browser.
- [OpenSCAD.org](http://openscad.org/) - Open-Source CAD software.
- [GCode plug-in for InkScape](http://www.cnc-club.ru/forum/viewtopic.php?t=35) - CAM, Output GCode from SVG files in [Inkscape](http://inkscape.org/).
- [PyCAM](http://pycam.sourceforge.net/) - Open-Source CAM software.
- [jscut](http://jscut.org) - Open-Source in-browser CAM software.
- [CamBam](http://www.cambam.info/) - Closed-Source, but cheap and feature-full CAM software. Widely used by hobbyists. [Video Tutorial](https://youtu.be/rV8zeE9s7xs)
- [Fusion360](http://www.autodesk.com/products/fusion-360/overview) - Closed-source CAM with very advanced features, free for hobby/fablab/small business.
- [Fabrica](http://arthurwolf.github.io/fabrica/) - Easy to use web control interface (Host)
- [Kiri:Moto by Grid.Space](https://grid.space/kiri) - Free web based toolpath generator with support for FDM, Laser Cutting and CNC Milling.
- [V-carve](https://jtechphotonics.com/?p=3851) is compatible if using [this post-processor](https://jtechphotonics.com/?p=3851).
- [More links at ShapeOko.com](http://www.shapeoko.com/wiki/index.php/Software).
- [Smoopi](https://github.com/wolfmanjm/kivy-smoothie-host) - Host specifically written for Smoothieware, runs on rpi with touch screen or a desktop.
- [FlatCAM](http://flatcam.org/) - CAM software for working with PCB design milling
- [Tux Plot](http://www.securetech-ns.ca/Help/Tux-Plotv4.5.pdf) - A free general use CNC tool for small businesses
- [Candle](https://github.com/Denvi/Candle) - Open-Source Gcode sender for CNC mills, designed for GRBL but should work fine with Smoothie in grbl mode
- [Universal G-code Sender](https://github.com/winder/Universal-G-Code-Sender/) - Set machine type to Smoothieware, and add `grbl_mode true` to your smoothie config or even better use the firmware-cnc.bin build of smoothieware (**Note**: You must update to the latest version of Smoothieware to ensure compatibility with UGS).

## Laser

- [GCode plug-in for InkScape](http://www.cnc-club.ru/forum/viewtopic.php?t=35) - Laser/CNC CAM: Output GCode from SVG files in [Inkscape](http://inkscape.org/). [Video tutorial](https://www.youtube.com/watch?v=xw8h0c5Vdw8).
- [Visicut](http://hci.rwth-aachen.de/visicut) - Full laser control application (Host and CAM), has Smoothieware interface. [Video tutorial](https://www.youtube.com/watch?v=lbTTPkDEhOg&feature=autoshare).
- [LaserWeb](https://github.com/LaserWeb/LaserWeb3/wiki) - Web-based full laser control application (Host and CAM), use to generate GCode but not recommended to use as a streamer of rasters as they do not support streaming the smoothie way.
- [Fabrica](http://arthurwolf.github.io/fabrica/) - Easy to use control interface (Host)
- [V-carve](https://jtechphotonics.com/?p=3851) is compatible if using [this post-processor](https://jtechphotonics.com/?p=3851).
- [Fast streamer](https://github.com/Smoothieware/Smoothieware/blob/edge/fast-stream.py) - use for streaming raster images from a host to smoothie. Avoids the pauses when using LW to stream. Can handle upwards of 1,000 pixels/sec.
- [Smoopi](https://github.com/wolfmanjm/kivy-smoothie-host) - Host specifically written for Smoothieware, runs on rpi with touch screen or a desktop.
- [Lightburn](https://lightburnsoftware.com/) - LightBurn is layout, editing, and control software for your laser cutter.
- [LaserGRBL](http://lasergrbl.com/en/) - For laser engraving and cutting, particularly advanced for engraving
- [Polygonia](https://hackaday.io/page/5969-polygonia-symmetrical-pattern-designer-for-laser-cutting-and-3d-printing) - A tool to easily create repeating patterns for laser cutting: [Online tool](https://polygonia.design/)
- [Rayforge](https://github.com/barebaric/rayforge) - An easy to use, open source, cross-platform tool for laser cutting and engraving

## Chaining

- [This plugin](https://github.com/tapnair/UGS_Fusion) for Fusion360 allows you to start your Gcode files from within Fusion360 directly using Universal Gcode Sender (skipping the step of first saving the file in Fusion360, then opening it in Universal Gcode Sender)

## Important Terminology

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  A few words you will see in this documentation that require a bit of explanation:
  <br><br>
  <strong>Host</strong> software is software that is used to "talk" to your Smoothieboard.
  <br><br>
  It allows you to control the machine (for example "jog" the axes), to "stream" a G-code job, or to upload it to the SD card, things like that.
  <br><br>
  <strong>Slicing</strong> software is software that is used to take a 3D model file, and based on some settings you input, "slice" it into layers, and generate a G-code file that the Smoothieboard can then execute to print a thing.
  <br><br>
  <strong>CAM</strong> software, or <strong>CAM Package</strong>, for Computer Assisted Manufacturing, is software that is used to take a 2D or 3D file, and based on some settings you input, transform it into a list of tool movements (G-code file) for a machine that uses a tool to remove material from a workpiece.
</sl-alert>
{:/nomarkdown}
