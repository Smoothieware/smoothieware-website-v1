---
permalink: /policy
---


# What makes a Smoothieboard a Smoothie?

Smoothieboard is a simplified controller board for robotic motion control and tool operation.

Although there are an increasing number of alternate form factors, the original design includes all the electronic parts necessary to power and control a small to middle-sized CNC machine (including but not only: 3D printers, laser cutters, and CNC mills): stepper motor drivers, heater/cooler drivers, temperature sensing, limit switches, SPI, I2C and additional I/O for hardware expansion and it includes USB, UART, ethernet, and an SD card.

Alternate design should include these elements or analogues of them as well, or show how to add them easily.

## More Than Hardware

A Smoothie motion control board is more than a piece of hardware.

It's also the software and [firmware](https://github.com/arthurwolf/Smoothie) that let you program and communicate with it, the documentation and tutorials that explain how to use it, and the community that can help you when you have trouble.

It's the fact that all of these work together more than any individual piece that makes the project useful.

To help maintain this coherence we've put together the following list of things to keep in mind as you work on making your own hardware.

## I want to make my own boards for personal use, or for use by my company only.

Have yourself a good time. The reference designs are available [here](/smoothieboard).

All we ask is that you do it safely, and that if you're going to go public, you follow the licenses under which the original board is made.

## I've designed my own board, can you help me manufacture and distribute it?

Absolutely, assuming it's something we think the community would be interested in. We know there are a lot of great designs out there that never reach a wide audience because of the high barrier to getting something manufactured. One of our goals is to spread this hardware to more people and to reward their designers as a way to support them in the creation of new products. If you're already making your boards, we may be able to help you make them available in other places, through our network of secret volcano island lairs and armies of minions.

If you've got something that you think would be useful to the Smoothie community, but need some help getting it to them, please contact [the team](/irc). We'd love to work with you.

## I want to make my own boards to sell or give away to the public.

Great, we are happy to see Smoothie derivatives. One of the core ideas behind open hardware is that anyone should be able to make hardware to suit their own needs, and we're proud to support that. We'd encourage you to make your products unique to the market in some way.

We'd love to hear about your ideas - a little coordination and planning can go a long way. We may be able to give you advice on making your products more useful to the Smoothie community, help in making them available to people in other countries, or adapt the Smoothie firmware to work with your hardware.

Of course, if you'd rather go it alone, you're free to do so. The licenses under which the Smoothie designs are released don't require any permission for use. We'd still like to hear from you about it, so we know what's out there. But see the next question for information on the use of the name "Smoothie".

## I'd like to make an official "Smoothie" product.

Start by talking to the core team ([on irc](/irc) or [via email](mailto:wolf.arthur@gmail.com)). Like other open source projects (e.g. Linux, Ubuntu, and Firefox), we want our community to know that when they're using something called "Smoothie" it meets the standards of the other devices using the name. On the other hand, we recognize that Smoothie is the result of much hard work by many people and that there's more to the project than what's done by the core team. We're striving to find the right balance between these two values. As part of this process, we require you ask us before using the name "Smoothie" in the name of a product, company, or domain name. In particular, we want to ensure that anything using the name fits into the overall project, including the software, documentation, and support.

That said, we would like to include works by many people as part of the official Smoothie hardware. This could mean that we manufacture something you've designed, and share the revenue with you. Or that you manufacture it yourself and, in return, contribute to the project (with a licensing fee, by releasing your design and production files, by documenting and supporting the product, or some combination of these). These products will be featured on the main smoothieware.org site, be supported by the Smoothie software, and generally given the same backing as the hardware designed by the Smoothie team (e.g. in distribution). If you want your board to be supported by us in this way, here's what we ask:

- Discuss it with us, so we can make suggestions on how it can best serve the needs of the Smoothie community. We reserve the right to say no to featuring on the site anything we think isn't up to our standards.
- Send us functioning versions so we can ensure for ourselves that they work with the software well. If you've made some modifications to the software that you'd like us to incorporate, we're happy to discuss that too.
- Make every attempt to have the hardware manufactured under reasonably fair labor conditions (down to the board level). In other words, ask your vendors about their labor practices. We can't change the world, but we can try, one company at a time.

Unmodified productions of Smoothie design files are subject to the same requirements on the use of the name. If you'd like to manufacture these without making an agreement with us, you need to call them something like "LPC176x motion control board manufactured from the Smoothieboard schematic and layout" or "L293D PCB manufactured from the SmoothieDriver motor controller files" or "SuperCNC 2000 Plus". Please understand that the revenue from the sale of existing products is essential to being able to afford to design new ones - and to manufacture them in quantities sufficient to make them affordable. While you are free to use the layouts, we think it's only fair that anything called "Smoothie" is contributing to the future of the project.

## What about other uses of the word "Smoothie"?

We are always very happy to see people talking about Smoothie, writing tutorials about Smoothie stuff, discussing projects that use Smoothieboards, using the Smoothie firmware with their hardware, etc. The project depends on the creations of the community, and we want to encourage these activities.

We do, however, have a few requirements:

- What you are referring to must, in fact, meet the guidelines described above
- You do not imply that your work is affiliated with or endorsed by the Smoothie team if you haven't talked with us
- You do not include the word "Smoothie" (or derivatives thereof) in the name of your product, company, or domain name without permission

## What should I call my board then?

If you're making your own board, come up with your own name! This will allow people identify you with your products and help you to build a brand. Be creative: try to suggest what people might use the board for, or emphasize the form factor, or just pick a random word that sounds cool. "Smoothie" is a trademark of Smoothie team and should not be used for unofficial variants. If you're interested in having your design included in the official Smoothie product line, please [contact](mailto:wolf.arthur@gmail.com) the Smoothie team.

While unofficial products should not have "Smoothie" in their name, it's okay to describe your product in relation to the Smoothie project and platform. Here are a few guidelines that explain which uses we consider reasonable.

**Not okay:**
- SmoothieXxxxxx
- Smoothie Xxxxxx
- Xxxxxx Smoothie
- Smoothie Compatible Xxxxxx - use "Xxxxxx (Smoothie-Compatible)" instead

**Okay:**
- Xxxxxx for Smoothieboard - products that work with official Smoothieboards (e.g. lcd panels or motor controllers)
- Xxxxxx (Smoothie-Compatible) - variations and clones which are firmware and hardware compatible

## I want to make a Smoothie with a microcontroller not yet supported by the current software.

Talk to us. We want to see the platform expand, so we'd be happy to point you in the right direction. Several porting efforts are already ongoing, contact [the community](/irc) to learn about them and to get involved.

## I want to distribute the Smoothie hardware.

Contact the Smoothie [team](mailto:wolf.arthur@gmail.com). We'll tell you what you need to know and make it happen.

## I'd like to contribute to the firmware.

It's all [on github](https://github.com/arthurwolf/Smoothie), please fork, now!

Also come talk to the community about it. We'll figure out the best way to get your contributions into the software and out to the community.

## I'd like to make my own distribution of the Smoothie software.

Again, please contact the community with your idea. We'd like to keep the software unified, so if you plan major revisions, it's best to give it another name, and a different look.
