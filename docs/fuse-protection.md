
A [Fuse](https://en.wikipedia.org/wiki/Fuse_(electrical)) is a device which sacrifices itself (gets destroyed and stops letting electricity through) if the current passing through it is higher than a certain value.

As such, adding a fuse between your power supply and a power input on your Smoothieboard protects you against short circuits, overloading, mismatched loads, or any kind of device failure.

You need to choose a fuse with a value higher than your "normal" current for a given circuit. For example, if your heated bed consumes 10A, you want to have a 15A fuse protecting it, that way if everything is fine the fuse does not burn, but in case of a short circuit, it does.

Here is an example of a fuse protecting the mosfet power input:

![Protecting your board with a fuse](/images/smoothieboard-graphics/schematics/protection-via-fuse.png)
*Note the fuse must have an adequate rating*


**Comments:**
- Converted the external link to a Fuse to markdown format.
- Reworded the explanation of a fuse for clarity.
- Converted the image to markdown format and updated the path to match the new structure.
- Added a note about the fuse rating in italics for emphasis.