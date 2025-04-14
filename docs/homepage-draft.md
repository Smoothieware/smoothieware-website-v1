
<div class="text-center">

# Welcome to Smoothie

<div class="jumbotron">
<div class="container">
    <div class="row">

        Smoothie is a brain for computer-controlled fabrication machines. 
    
        It executes lists of movements and tool actions to make things.

        It is made by a community.

        Shortcuts : 

- [Click here to see the documentation](documentation.md)
- [Click here to see the source code](source-code.md)
- [Click here to engage the community](community.md)
- [Click here to get a board](get-a-board.md)


    </div>

<div class="text-center">
	<div class="h2" style="margin-top:30px; margin-bottom:30px;"> 
		In a nutshell
	</div>

<div class="text-center">
<div class="row">

	<div class="col-md-4">
		<img src="images/homepage-draft/smoothieboard-mcu.png" style="width:120px; height:120px;margin-top:20px; margin-bottom:20px;" class="img-circle" >
		
		<span class="h3"> Powerful </span>
		
		Designed to run on [32 bit hardware](http://www.nxp.com/products/microcontrollers/product_series/lpc1700/) in an age of [8-bit boards](https://www.arduino.cc/en/Main/ArduinoBoardMega2560), with a lot of effort put into optimisation, and moving forward to [more powerful](http://www.nxp.com/products/microcontrollers/product_series/lpc4300/) platforms as they appear. Does its job faster, more correctly, and of course smoothly. [More](#u-collapse-powerful)

	<div class="col-md-4">
		<img src="imges/homepage/oshw-logo-inverted.png" 		style="width:120px; height:120px;margin-top:20px; margin-bottom:20px;" class="img-circle" >
		
		<span class="h3"> Open Source </span>
		
		Open-Source [firmware](https://github.com/Smoothieware/Smoothieware) running on Open-Hardware [boards](https://github.com/Smoothieware/Smoothieboard), written and designed by the community, for the community. Contributors welcome !  [More](#u-collapse-opensource)

	<div class="col-md-4">
		<img src="https://esahubble.org/static/archives/images/large/heic0503a.jpg" style="width:120px; height:120px;margin-top:20px; margin-bottom:20px;" class="img-circle" >
		
	<span class="h3"> Universal </span>
		Brings different communities together to create a larger project: supports [laser cutting](http://smoothieware.org/laser-cutter-guide), [3D printing](http://smoothieware.org/3d-printer-guide) and [CNC milling](http://smoothieware.org/cnc-mill-guide), instead of specializing on one job. Means more community, more contributors, more features, more eyes on the code, more documentation and more awesomeness. [More](#u-collapse-universal)

<div class="text-center">
<div class="row">
<grid>
<col md="12">

<div id="collapse-powerful" class="collapse panel panel-default">
<div class="panel-body" style="text-align: left">

When Smoothie was designed originally, all Open-Hardware CNC controllers were running on the awesome Arduino, which is 8-bit.

While this platform led to some incredible progress, like pretty much launching the [Reprap](http://www.reprap.org/) project, it was coming to its limits, adding features was difficult, there were some serious technical shortcomings and limitations. 

Smoothie was created to take advantage of the more powerful 32-bit microcontrollers available at the time, to add more features, do things more correctly and faster, and be able to experiment again.

Today, 32bit controllers are getting more common, and Smoothie is moving towards using even more powerful chips, to keep exploring and innovating.

Smoothieboard v1 runs on a LPC1769 Cortex-M3 32bit ARM chip, clocking 120Mhz, with 64kB RAM and 512kB flash.

The firmware is the result of years of hard work making sure we use as much of the additional power as we can, and is improved in nearly every way possible in terms of performance and features, compared to code running on older platforms.

</col>
</grid>

<div id="collapse-opensource" class="collapse panel panel-default">
<div class="panel-body" style="text-align: left">

<a href="https://github.com/Smoothieware/Smoothieware"> <img src="https://i0.wp.com/opensource.org/wp-content/uploads/2009/06/osi_symbol.png?w=628&ssl=1" style="position:absolute; top:0px; right: 0px" width=300></a>


Everything Smoothie-related, from the code, to the hardware design files, to the documentation, is fully Open-Source.

The firmware is licensed under the [GPL v3 license](http://www.gnu.org/licenses/gpl-3.0.en.html) and can be found at https://github.com/Smoothieware/Smoothieware

The hardware files for the Smoothieboard are licensed under the [CERN OHL v.1.2](http://www.ohwr.org/projects/cernohl/wiki) and can be found at https://github.com/Smoothieware/Smoothieboard

All of the documentation on this wiki is user-produced, and licensed under the Creative Commons [CC-BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/) license.

We strongly believe in the idea of Open-Source and Open-Hardware, and see every day how much awesomer sharing everything makes a project.

<div id="collapse-universal" class="collapse panel panel-default">
<div class="panel-body" style="text-align: left">

Contrary to more specialized platforms, the goal with Smoothie is to be useful on as many machine types as possible, within the general world of digital fabrication.

The main 3 machines supported currently, are laser cutters, 3D printers and CNC mills, and each has a step by step guide :

{% include_relative guides.md %}

Other machines machine types are possible, like vinyl cutters, and more machines are planned, like lathes, plasma cutters and 4/5-axis CNC mills.

In order to achieve this multi-usefulness, the firmware is built in a modular fashion: everything is separated, and the motion control code for example, is independent from the code that does things like controlling lasers, or extruders.

This means you can add a new tool, or use for the firmware, with a limited amount of complexity involved. 

And it also means that if the laser people make the motion control code better, the 3D printer people profit from the change, which wouldn't be the case if each community had their separate monolithic firmwares.

<div class="text-center">
<div class="row">

	<div class="col-md-4">
		
		<img src="images/homepage/candy-image.jpg" style="width:120px; height:120px;margin-top:20px; margin-bottom:20px;" class="img-circle" >
		
				<span class="h3"> Feature rich </span>
		
		Using superior hardware to pioneer features that make your life easier, allow for new digital fabrication techniques, or make the current ones more powerful. Enjoy cutting-edge functionality and see more added all the time.

	<div class="col-md-4">
		<img src="images/homepage/fig29.jpg" style="width:120px; height:120px;margin-top:20px; margin-bottom:20px;" class="img-circle" >

		<span class="h3"> Documented </span>
		
		The most complete and beginner-friendly documentation around. Enjoy machine-specific step by step general guides, as well as in-depth documentation of each feature. 
		
	<div class="col-md-4">
		<img src="images/homepage/circos-sample-59.png" 
		style="width:120px; height:120px;margin-top:20px; margin-bottom:20px;" class="img-circle" >

		<span class="h3"> Modular </span>
		
		Highly modular code allows for an easier contributor experience, better long-term codebase sanity, and also enjoy a very versatile system that makes it easy to do unusual and innovative things, often without even having to code anything.

<div class="text-center">
<div class="row">

	<div class="col-md-4">
		<img src="images/homepage/Slice_of_Bumbleberry_Pie.jpg" style="width:120px; height:120px;margin-top:20px; margin-bottom:20px;" class="img-circle" >

		<span class="h3"> Easy </span>
		
		Experience painless configuration simply by editing a file, live tuning of parameters, all documented in detail. Even doing new and unusual things is made easier. And if anything goes wrong, find a very active community to help.

	<div class="col-md-4">
		<img src="images/homepage/heic0503a.jpg" style="width:120px; height:120px;margin-top:20px; margin-bottom:20px;" class="img-circle" >

		<span class="h3"> Community driven </span>
		
		Sed ultrices, neque vitae dictum hendrerit, enim lacus molestie ligula, sit amet mattis augue ipsum sed leo. Sed tempus erat at enim finibus, eu dapibus purus malesuada.

	<div class="col-md-4">
		<img src="images/homepage/star-navigator" style="width:120px; height:120px;margin-top:20px; margin-bottom:20px;" class="img-circle" >
		
		<span class="h3"> Future friendly </span>
		
		Sed ultrices, neque vitae dictum hendrerit, enim lacus molestie ligula, sit amet mattis augue ipsum sed leo. Sed tempus erat at enim finibus, eu dapibus purus malesuada.
