
# The Smoothie Project and the Allegro A4983 Chip

The [Smoothie](/smoothie.md) project will use the [Allegro A4983](http://www.allegromicro.com/en/Products/Part_Numbers/4983/4983.pdf) chip to drive the stepper motors. It's a very nice chip, offering 1/16 microstepping, the ability to drive up to 2A, and a simple step/direction interface. The most common way to use it is via the [Pololu Driver Carrier](http://www.pololu.com/catalog/product/1201), but for Smoothie, we want all four drivers directly on the PCB. This allows them to share the heatsink/fan and some components, which is more efficient.

Before designing the Smoothie PCB, it's crucial to understand how the A4983 works.

Here is a successful attempt to use an A4983 on a breadboard. The explanations below assume you are already familiar with at least the Pololu board.

Since the A4983 is a surface mount device, it can't be used directly on the breadboard. It was soldered onto a [breakout board](http://www.beldynsys.com/p535.htm), similar to the MCP4331 from the [last post](http://chibidibidiwah.wikidot.com/blog:2). The process involved solder paste and hot air.

Here's how it looks:

![A4983 on Breadboard](https://farm5.static.flickr.com/4118/5444686913_956f09453a.jpg)

And a closer look at the breakout board:

![A4983 Breakout Board](https://farm6.static.flickr.com/5212/5444686919_c6d4f71119.jpg)

For clarity, here is the Fritzing version:

![Fritzing Diagram](https://farm6.static.flickr.com/5216/5444716963_9b19330269.jpg)

And the [corresponding Fritzing file](http://chibidibidiwah.wikidot.com/local--files/blog:3/a4983.fz).

The setup works fine: the stepper turns and produces the distinctive microstepping sound. The potentiometer adjusts the current just like on the Pololu board.

A few notes:
- The `dir` pin is connected to +5V, so it only goes one way. This is just for testing purposes; you can connect it to an Arduino digital output to change directions.
- Three resistors are missing compared to the datasheet example. Since Smoothie will be USB-powered, we assume the power supply is reliable. This reduces cost and frees up space around the chips, allowing them to be in direct contact with the heatsink.

That's all for today. The next step is controlling the current setting of the A4983 with the MCP4331 digital potentiometer.
