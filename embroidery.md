
# Introduction

Embroidery machines are a combination of an industrial sewing machine and a computer-controlled XY frame or pantograph. There are a large number of machine manufacturers, each with their own internal machine formats. Most machine manufacturers handle the .dst or digital stitch Tajima format, with an import function to convert these to internal machine code. Due to the original input source for these machines being 8-bit paper tape, there are a limited set of commands for encoding embroidery design data for machine embroidery. There are a number of special functions that can be encoded in a .dst file:

- Trim
- Stop
- Jump

Originally, the "colour" was not encoded in the .dst, so a supplementary printout would be supplied with a digitized file to assist an operator in encoding the colour changes required to correctly sew out a design.

The "trim" is not always available on a machine, so once a design has been sewn out, then manual trimming would be completed.

Newer machines have automatic trims, colour changes, and additional special functions such as punch, sequin, and appliqué may also be available.

Each stitch is encoded as a relative position from the last stitch, and typically is encoded with a maximum stitch length of 12.1mm for a single stitch, with a resolution of 0.1mm in X and Y for pantograph placement.

## ToolChain

The embroidery machine toolchain typically consists of:

- Design software: This is simply turning an image into lines, geometric or abstract areas, and text. This software often provides the ability to load an image file and "trace" it with design tools. The output is a design file made of various shapes. Inkscape often serves this purpose.
- "Digitizing" or "punching" software: Each line, piece of text, and area of the design is turned into an independent sewing object, and stitching specific design choices are made. For example, lines can be defined in terms of straight stitches, doubled rows of stitches (out and back), or triple rows of stitches; stitch length can be defined. Areas are defined in terms of borders, fill patterns, and underlayment, all of which are optional. Borders are simply outlines defined as the lines above. Underlayment places basting stitches beneath the area to be filled; this helps bind the main fabric to any interfacing fabric, and provides additional strength against wrinkling or stretching. Fills vary in terms of decorative stitching patterns. Satin fills consist of long, edge-to-edge parallel stitches, while tatami fills use staggered rows of shorter stitches to give a more flat appearance. Not all fills use parallel rows of stitches; some fills may be done with concentric circles, smaller geometric shapes like circles, squares, or triangles, or even patterns like snowflakes or stars. Fill tools offer ways to specify the direction and density of the fill stitches.
- Lettering is often handled as a separate feature. Some software will import TrueType Fonts, and will fill the lettering based on user-specified parameters. Better software has a suite of pre-digitized fonts designed specifically for their quality of embroidery.
- Each object has a start and end point. Jump stitches are long moves by the machine without placing a stitch, these threads may be cut away by the operator after the design is stitched. Cut stitches are available on some advanced machines that have integrated cutting blades, and will avoid leaving the jump thread visible.
- Digitizing software also includes database functions to allow the user to manage the available resources. These can include an inventory of available threads (which define the materials, colors, thicknesses, sheen, etc., and can be organized by manufacturers or other user-specified groupings of attributes); fabric types (which can help the user by providing recommended underlayment stitch settings, minimum and maximum stitch lengths, and stabilizers); machine types (defining machine capabilities, file formats and communication protocols, and an inventory of available embroidery hoops and their geometry); and designs, monogram patterns, fill patterns, and other types of embroidery elements offered.
- Each object is placed in a stitch ordering list. Simple software will order the list in the same order the user enters the objects. More advanced software may reorder the list by itself. The user needs to be able to specify the final order of the list. The list is also where color changes, tie-offs (knots), jump stitches, cut stitches, and "stops" (a pause in the stitching to allow the operator to perform some function, such as cutting a jump stitch or placing an applique piece) are specified.
- Digitizing software usually automatically generates the locations of start and end points, jump stitches, tie-offs (knots), cut stitches, and color changes. However, the user may want to change these points.
- The output of the digitizing software is an embroidery file, such as a .DST file, that then needs to be transferred to the embroidery machine. Depending on the technology available in the embroidery machine, the file may be written to a USB stick, a memory card, a serial port on a USB cable, a floppy disk (for very old machines), or even sent to a shared drive using a cloud service.
- The software on the embroidery machine loads the embroidery file. It may offer many of the design and digitizing functions found above. Most machines have an independent library of simple border designs, monograms, and a few text fonts optimized for that machine, and allow the operator to quickly produce a simple name badge, monogram, or embroider text on an object. The machine software may offer the ability to scale or rotate the design.
- Some machines have automatic hoop detection capabilities, which allows the machine to know when the hoop is inserted and determine the geometry of the hoop. Others require manual hoop selection, or may simply assume the hoop is the same one as was specified in the embroidery file.
- Some machines offer the ability to precisely locate the design by moving the hoop beneath the needle to some pre-selected points on the design. This enables the operator to precisely align the design on the garment.
- All embroidery machines have a few basic user controls: start, stop, and stitch speed selection. The operator interface may have a way for the user to see color/thread changes. The operator usually has a way to re-position the hoop: current stitch position, pattern start position, bobbin change position, jump-thread cutting position, etc. Status and error messages will be displayed, such as stitch speed, current stitch number, thread or needle breakage detection, low bobbin thread, low top thread, machine overheat, etc. The operator will also usually have a way to select a new current stitch number, allowing the user to back up to the point of a broken thread, or to jump back to the stitch prior to where some problem occurred and some of the design had to be ripped out.

### Digitising

Digitising is likely to be outside of the realm of the Smoothie project as far as implementing embroidery machine operations, however, it is included to assist with an understanding of some of the concepts that will later result in machine move operations. This stage is where the customer's artwork is digitized into stitches, usually using a digitizing application, such as Punto, Wilcom, or a wide variety of other toolsets.

[Punto Embroidery Digitising Software - I work with the Australian distributor for this software package](https://www.softeamweb.com/en/punto)

Punto specifically can take in vector-based artwork from Illustrator/Corel etc as the basis for a design, apply additional digitizing hints for stitch directions, and apply stitch types to the artwork.

[Some example digitized embroidery designs](http://www.images.cx/Images/Samples.html)

#### Stitch Types

##### Running Stitch

The simplest form of stitching, the running stitch is a row of single stitches, much like the output of a normal sewing machine. This may follow a path to provide an outline or detail highlight for a design.

##### Satin Stitch

The satin stitch is a progression of tightly placed sawtooth stitches along a path, so that the frequency (or stitch density) in the sawtooth is approximately the same as the thread width (typically 0.3mm or so) and the amplitude of the sawtooth is the "satin stitch width". Complexity arises when a satin stitch follows a curve, as the density is different across the amplitude, so a compensation is required to be implemented with the stitch placement so that "bulking up" does not occur. A compensation technique is to place shorter stitches every second or third stitch, so that the thread does not attempt to fill the same location in the fabric when the stitches are sewn.

##### Fill Stitch

The fill stitch is a progression of running stitches to fill an area with color. With a single direction fill, each subsequent row of stitches is offset (as per running stitch) by the fill density, and a return run of stitching follows offset by the density calculation in the next row. Complications with fill stitching include navigating to start and end points, so that fills may be split into sections, and the machine can exit where required for the next stitch section. Curved fills, as per satin, the decision on how to approach maintaining density in stitch placement whilst producing the desired visual effect.

##### Underlay Stitch

The underlay stitch is a special group of stitching, usually of a lower density and inset from a fill or satin. The goal is to both secure the fabric to the vilene underlay support, and also to suppress the pile of the fabric, to reduce show through of the underlying fabric color through the completed embroidery.

### Export to Machine Format File

Exporting a design file is likely to be outside of the scope for any Smoothie embroidery control project. Once the digitizing process is completed, a machine format file would be produced, along with a design sheet, for transfer to an embroidery machine for sampling or production. Typical transfer methods may include:

- Punched paper tape
- DD Floppy disks
- USB volumes
- Coax ethernet

Each manufacturer of machines has their own internal formats, but most will receive some standard file formats from digitizing software. It should be noted that embroidery files for machine production are typically not scalable, as the stitch placement is based on embroidery thread width, so any change in size will either reduce coverage or overload the material with too many stitches to produce a desirable result.

#### Tajima .dst Format

A very simple form for communications, which makes no assumptions of specific machine capability, and encodes special functions as "STOP" commands for later interpretation when reading the file in. The function encoding is why the supplementary design sheet is usually provided with the .dst file to communicate colors to be used, output file size, and other design information like thread used and start point information.

Some documentation of the file format is located [here](https://community.kde.org/Projects/Liberty/File_Formats/Tajima_Ternary). I have not yet verified this to .dst codes in hand.

### Import to Embroidery Machine

Depending on the implementation with Smoothie, the import function is likely to be required in order to take a generic embroidery design and make it ready for the specific machine implementation. The .dst file, for example, is similar to a .gcode file, however, is not complete run information, as the color change and special functions are not yet available as digital information.

The import stage of a design commences with the selection of an exported embroidery file. This is then scanned and a set of questions will usually follow:

- Orientation of design
  - Rotation
  - Flip
- Stops to Colors (Needle assignment)

This then would result in an input file ready to run in the machine. More feature-complete embroidery machines would also allow:

- The edit and insertion of machine commands into the imported file,
  - Trims
  - Color Changes
  - Special Functions
- Selection from memory of which design to sew next

### Embroidery Machine Setup

Specific machine implementations may require the selection of pantograph drivers:

- Cap Frames require different acceleration curves to flat work
  - Cap frames may also include compensation for circular drives to ensure dimensional accuracy with hardware attachments
- Badging frames are typically heavier overall machines and so have different acceleration curves and maximum speed settings.

### Pre-Production Sample

In a production environment:

- The embroidery threads are loaded onto the machine (6, 9, 11, 15 color machines are common, with each sewing head loaded up with threads per color)
- A sample of fabric is hooped up
- The machine start position is adjusted
- The machine sewing speed is adjusted
- A Trace function is run to travel a path on the machine to the external frame of the design to confirm no collisions with the hoop are likely
  - Usually, the trace detail level can be adjusted fine to coarse
  - Usually, the trace speed can be adjusted fast to slow
  - At any point in the trace, the trace may be stopped, and the needle dropped into the design to confirm no collisions for size-constrained designs
- Once the trace is completed, the embroidery is commenced.
- Should a thread break or other sensed error occur, a machine error will be displayed for operator attention.
- Where a thread break is fixed, the machine will usually need to back up a number of stitches, to the point before the thread break, and then sewing recommenced from that point in the design.
- The design position may be displayed on a monitor, or inferred by watching the pantograph movements of the design as it is rewound.
- On multi-head machines, a thread break may occur on a single head or on multiple heads at once.
  - It is important to be able to determine which heads are to start sewing from the rewound position, and which heads are to resume sewing from the last sewn stitch prior to the thread break.
- Once the design completes successfully, the machine returns to the start position and the start needle and ceases operation, alerting the operator to the end of the cycle.
- The design is inspected for color, tension, and any other criteria before being signed off and cleared for production

### Production Embroidery

Once the sample has been signed off and the machine has returned to the start position, the next items to be embroidered are loaded onto the machine, and the start button pressed. Embroidery continues until a thread break occurs or until the cycle completes. Thread breaks are repaired, rewound, and restarted as per the pre-production description above. In the last production cycle, there may not be a complete machine full of embroidery to be run, so some heads will be turned off, and should not sew during the final embroidery cycle.

## Hardware

The embroidery machine hardware consists of a number of elements:

### XY Pantograph

The XY Pantograph is used to position the work relative to the embroidery machine needle. The embroidery machine must record the position of the pantograph and stitch count following any machine moves, so that work can be resumed in case of an emergency stop. Some machines will implement encoders to feed back the current position to the machine, others will work relative to the start position and rely on the operator to know what they are doing. Different pantograph implementations may be required on a single embroidery machine to account for physical and positional differences for:

- Badge Framing
- Hoop Sizes
- Cap Framing

Each of these hardware attachment options may want to implement a positional boundary (max bounds) beyond which the machine will not travel. (This would require encoded position in hardware for implementation in software)

### Sewing Machine

The core of the embroidery machine is an industrial sewing machine. This typically has a positional encoder along with a direct drive motor. Larger machines will have a brake attached to this drive motor to stop the machine as required. The rest position of a ZSK machine is approx 64 degrees past TDC. In operation, these typically place 500 - 1200 stitches per minute.

#### Forming the Stitch

The thread is delivered from the needle frame above the work, with a bobbin thread carried below the work. In each stitch cycle, the needle is moved through a Z-axis of motion, piercing the work, and bringing the embroidery thread down to the bobbin case. The bobbin case is mechanically tied to the needle so that they are in correct alignment at all times. When the needle begins its return journey upwards, the friction of the fabric restrains the embroidery thread and forms a loop for the bobbin hook. The hook passes through the loop, and carries it under and around the bobbin thread, then releases the loop. The thread take-up levers which are also timed mechanically to the needle and bobbin are timed to pull upwards once the embroidery thread passes around the loop, and with correct thread tension settings will pull the stitch closed, before pulling additional thread from the supply.

#### Critical Hardware Positioning Information

Any time the needle is at or below the work, the pantograph must not be moving. Even the slightest move (acceleration or deceleration in positioning the pantograph or inertia in the supported work) while the needle is in the work will cause the needle to deflect and possibly break, or scar the bobbin case. This means that there is only a very short window for each stitch to position the work ready for the next stitch, so the pantograph module essentially needs to start to move in XY, arrive at the destination and have the work finish moving as well before the needle reaches the work again on the next stitch.

### Drive Solenoid

On a multi-head embroidery machine, the connection between the sewing motor and the needle drive bar is enabled by a solenoid. If the solenoid does not release the needle, then the stitch does not occur on that sewing cycle. On a single-head embroidery machine, the needle bar may be in constant mesh with the sewing motor. In this case, the entire sewing motor would not actuate in a jump stitch operation.

### Jump Stitch Operation

When a stitch is required that is longer than the maximum stitch length (12.1mm), a Jump Stitch can be encoded. This results in the Drive solenoid not actuating for an intermediate stitch and so the skipped stitch can be up to the length of two single stitches (24.2 mm). Jump stitches can look bad as the thread is not held to the work and can catch on fingernails etc, but is sometimes required.

### Trim Operation

Trim operation is performed in order to finalize the color being sewn. A stitch will be performed, but prior to the thread returning from the bobbin, a knife cuts the remaining end, and a solenoid-controlled wiper will pull the end of the thread out of the work and back into the thread keeper. This requires a timed operation between the mechanical sewing motor, the trimmer, and the catcher.

The Trimming operation must not occur when the needle is in the path of the trimmer, or needle breaks and damage to the knife will occur.

### Needle Change Operation

Production embroidery machines typically have 6, 11, 15 needles per head. There will be a needle position sensor to determine which color is presently selected. When a color change is required, a number of operations will occur:

- The thread will need to be trimmed
- The needle returned to the home position (64 degrees on ZSK)
- The Needle change cycle through (usually one needle position at a time)

A needle change must not occur when the needle/sewing motor is not in the home position.

### Speed Control

Typically the first stitches on a new design or following a trim or color change will occur at slow speed. This gives a chance for the lock stitch to form and the thread to be tied into the work. After these start stitches (3-5 stitches), full-speed embroidery will commence at the set embroidery speed. Some machines will have a potentiometer control