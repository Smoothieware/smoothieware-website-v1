
<div class='panel panel-default wrap_right' style='width:450px;padding:10px '>
<div class='panel-heading'><h4 class='panel-title'>A spindle motor</h4></div>
<img src='/images/external/http.www.automationtechnologiesinc.com.wp.content.uploads.2011.11.kl.2200.1024x1024.jpg' width='430px'><br/>
They turn a tool at very high speeds
</div>

# Spindle Control

The Spindle is the main effector on your CNC Mill/Router. It holds the end mill or drill bit, makes it turn and remove material.

While manual control is sometimes fine (turn it on before starting your G-code, off when you are done), it is so much neater to have G-codes to control it automatically: simply put an ON G-code at the beginning of your G-code file, and an off G-code at the end of your G-code file, and you don't have to think about it anymore.

First thing you need to do is choose which component on the Smoothieboard is going to choose to control your Spindle.

## Controlling using a VFD

A VFD, or Variable Frequency Drive, is a box that takes mains power, transforms it into the voltage your spindle needs, and varies the frequency to control the speed of rotation of the spindle.

If you are using a VFD to power your spindle, you can use your Smoothieboard to control the VFD, start the spindle and control its speed.

There are two methods, using Modbus, or using an analog signal.

For information on doing so, see the [Spindle Module](/spindle-module.md)

This is the recommended method.

## Controlling using mosfets

If you are not using a VFD, an alternative is to use one of the mosfets on the Smoothieboard to control the spindle.

If you want to learn about this technique, go to [controlling a spindle with a mosfet](/spindle-mosfet-control.md).
