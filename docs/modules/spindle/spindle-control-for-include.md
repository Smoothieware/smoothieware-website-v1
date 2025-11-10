
# Spindle Control

{::nomarkdown}
<a href="/images/temporary/cnc-spindle-generic.jpg">
  <img src="/images/temporary/cnc-spindle-generic.jpg" alt="A spindle motor" style="width: 350px; height: auto; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

The Spindle is the main effector on your CNC Mill/Router.

It holds the end mill or drill bit, makes it turn and remove material.

While manual control is sometimes fine (turn it on before starting your G-code, off when you are done), it is so much neater to have G-codes to control it automatically.

Simply put an ON G-code at the beginning of your G-code file, and an off G-code at the end of your G-code file, and you don't have to think about it anymore.

## Choosing a Control Method

First thing you need to do is choose which component on the Smoothieboard is going to control your Spindle.

## Controlling using a VFD

A VFD, or Variable Frequency Drive, is a box that takes mains power, transforms it into the voltage your spindle needs, and varies the frequency to control the speed of rotation of the spindle.

If you are using a VFD to power your spindle, you can use your Smoothieboard to control the VFD, start the spindle and control its speed.

### Two Methods Available

There are two methods, using Modbus, or using an analog signal.

For information on doing so, see the [Spindle Module](spindle-module)

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="star"></sl-icon>
  <strong>Recommended Method:</strong> Using a VFD is the preferred way to control your spindle for best performance and safety.
</sl-alert>
{:/nomarkdown}

## Controlling using mosfets

If you are not using a VFD, an alternative is to use one of the mosfets on the Smoothieboard to control the spindle.

If you want to learn about this technique, go to [controlling a spindle with a mosfet](spindle-mosfet-control).
