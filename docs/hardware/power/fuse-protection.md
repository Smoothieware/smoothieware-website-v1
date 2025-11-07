---
permalink: /fuse-protection
---

# Fuse Protection

A [Fuse](https://en.wikipedia.org/wiki/Fuse_(electrical)) is a device which sacrifices itself (gets destroyed and stops letting electricity through) if the current passing through it is higher than a certain value.

As such, adding a fuse between your power supply and a power input on your Smoothieboard protects you against short circuits, overloading, mismatched loads, or any kind of device failure.

You need to choose a fuse with a value higher than your "normal" current for a given circuit.

For example, if your heated bed consumes 10A, you want to have a 15A fuse protecting it, that way if everything is fine the fuse does not burn, but in case of a short circuit, it does.

## Example Fuse Installation

Here is an example of a fuse protecting the mosfet power input:

{::nomarkdown}
<a href="/images/temporary/cable-duct-generic.jpg">
  <img src="/images/temporary/cable-duct-generic.jpg" alt="Protecting your board with a fuse" style="min-width: 640px; display: block; margin: 2rem auto;"/>
</a>
<p style="text-align: center;"><em>Note: The fuse must have an adequate current rating for your application</em></p>
{:/nomarkdown}