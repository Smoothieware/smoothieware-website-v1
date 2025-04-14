
# Your guide to installing Smoothieboard in a Red Box Laser Cutting machine

This is an in-progress guide/log of my conversion of a 60W Liaocheng city Dongchangfu District Branch painted laser equipment Co. (LCJBDZ) CNC laser cutter to run a Smoothieboard. They're the red box lasers available for very little money on Amazon.

![LCJBDZ Laser Cutter](images/lcjbdz-guide/lcjbdz-laser-cutter.jpg)

« Red Box » laser cutters are cheap Chinese machines that perform surprisingly well for their price, and they're popular in maker spaces with limited budgets.

The electronics and software that come with it are generally considered barely usable, and are at the very least very limited.

However, the machine itself, while cutting costs at all corners, and not being of the best quality, is a good option for anybody looking at getting started with laser cutting or looking to upgrade from a [bluebox-guide](bluebox-guide.md).

These machines can be found for $2300 or even sometimes less on eBay, and have become more and more popular as people have started replacing the internal electronics, first with Arduino-based boards, and now with Smoothieboard. This allows for easier use, more software options, and makes for an overall much better machine.

Their work area is 500mm x 700mm, and the laser power is about 60W.
This allows the machine to cut and engrave plywood, MDF, balsa, cardboard, paper, leather, cloth, and PMMA (acrylic), up to about 7mm thickness. They can also etch glass, heat-discolor titanium, and activate cermark spray for marking metals.

This is a step-by-step guide to connecting your board to the various components of the laser cutter, configuring everything, from the beginning to actually cutting material.

This guide is a [community](http://smoothieware.org/irc) effort, and this page is a Wiki. Please don't hesitate to [edit it](#_editpage) to fix mistakes and add information, any help is very welcome.

## About this guide

This guide is specific to the « Red box » model that is very commonly found, but the information it contains should be useful for most Chinese laser cutters. 

There is a more general guide: the [Laser Cutter Guide](http://smoothieware.org/laser-cutter-guide.md). You should read it before you read this guide, as it contains much information you need to be familiar with to do things properly.

This guide is based on M@ Dunlap's red box build log... okay, let's call it what it is, this guide **is** my red box build log...

## Safety

Lasers will make you blind. In an instant. In the blink of what used to be an eye, quite literally. 

**Never** look into the beam or at any surface the beam might reflect off of.

**Never** have the laser powered while the door is open, there's already a glowy red switch on the side for exactly this reason.

You are responsible for your own safety.

Eyes cannot be replaced.

While this machine does come with a safety switch on the door, it also comes with a bypass switch that obviates the door switch and has a counterintuitive label that might lead people (not naming names here) to keep the switch in the unsafe bypass position thinking that it is in the safe non-bypass position. This is stupid and dangerous. Unplug the bypass switch unless you know you need to use it.

Also, the seams around the door aren't protected and there's a set of vent holes in the front of the door. Plug all of these, both to improve safety by preventing people from looking in and to improve exhaust airflow (by forcing it to come in from the bottom). Some soft window insulation and some aluminum tape (respectively) work beautifully for these tasks.

{% include_relative warning.md %}

## Endstops

The red box laser uses Fotek PL-05N inductive endstops only at the rear-right corner of the laser bed. This is problematic because it means that if the machine skips steps it can slam **mirror first** into the frame of the machine without passing over an endstop. Given that additional endstops are readily available and $6 each as part of this build, I'm going to be adding at least one endstop in addition to the two it shipped with.

![PL-05N Endstop](http://hk1.image4.pushauction.com/350/350/34eec82d-57d6-4488-948a-dc634d16b445/2c3b081a-b758-cec2-9fb3-60d428cf3d4e.jpg)

### Important Note
The PL-05N uses the black wire as a signal wire NOT as ground. Ground is blue... for reasons. Don't mess this up or you could (probably, although I haven't tested this) fry your Smoothieboard.
