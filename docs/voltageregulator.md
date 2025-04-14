
# Voltage Regulator

A voltage regulator normally takes a higher voltage and transforms it into a lower voltage.

The reason to install a voltage regulator is so that you don't have to power it via the USB or 5V input. In other words, to run Smoothieboard standalone via the Panel or Ethernet.

Smoothie's power input is 12-24v, and the voltage regulator takes it down to 5V.

## Recommended Voltage Regulator

(see the "More Power" section before purchasing the part):

- Brand: Recom
- Model: `R-78E5.0-0.5`
- Technical Documents: [Spec Sheet](http://www.recom-power.com/pdf/Innoline/R-78Exx-0.5.pdf)

Which can be purchased from [Robotseed](http://robotseed.com/index.php?id_product=20&controller=product&id_lang=2) or [Uberclock](http://shop.uberclock.com/collections/smoothie/products/switching-regulator-dc-to-dc-5v)

> [!NOTE]
> If you are intending to power a ReprapDiscount Full Graphic LCD controller off 5V power supplied by an on-board regulator, you will most likely need a 1-Amp version of the regulator, as the backlight of the GLCD requires 250mA alone.
> 
> Recom part `R-78E5.0-1.0` is the same size/pin configuration as the recommended part above.
> 
> It is available at Digikey, and likely at other major electronics component sites.
> 
> [More power](http://www.audioholics.com/home-theater-connection/connecting-an-external-amp-to-a-receiver/image)

## Voltage Regulator Installation

This is how it looks when soldered on:

![Voltage regulator](images/voltage-regulator-top.jpg)

*Red circle marks where it is located*

![Voltage regulator closeup](images/voltage-regulator-close.jpg)

*Note the orientation*
