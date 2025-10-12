
## Why is my web interface missing?

You likely got to this page because you connected to your Smoothieboard over the [Network](network) and expected to be welcomed by the classic web interface, but instead, you received a webpage explaining that it is no longer available, and you should come here for information on how to resolve the issue.

A web interface, even a small one, uses storage space on your Smoothieboard. Up until now, we used to store the web interface in the same place we store the compiled code (firmware) that controls your machine: in the flash memory of the microcontroller.

However, that memory is limited (512kB), and as features are added to Smoothie, less and less space is available.

Because of this, removing the web interface from the flash storage is a step towards adding more features to Smoothieware (less space used by the interface, more space available for compiled code).

We don't want, however, to completely remove the interface. What we need is a better place to store it in.

It so happens that the SD card on your Smoothieboard can store thousands of times more data than the flash memory can. So it's the perfect place to store the web interface in.

However, your SD card was shipped at a time when we did not yet include the web interface into the SD card (because it was in flash), so you do not have the interface in flash, and you do not have it on the SD card.

The solution to this issue is simply to install the required files on your SD card. It's fast and easy.

## Next step

**You can find the instructions to install the web interface here: [Installing the web interface](http://smoothieware.org/install-web-interface.md)**
