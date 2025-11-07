---
permalink: /missing-web-interface/
---


## Why is my web interface missing?

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Web Interface Not Found:</strong> You likely got to this page because you connected to your Smoothieboard over the network and expected to see the web interface, but it wasn't available.
</sl-alert>
{:/nomarkdown}

You connected to your Smoothieboard over the [Network](network) and expected to be welcomed by the classic web interface.

Instead, you received a webpage explaining that it is no longer available, and directing you here for information on how to resolve the issue.

## The Reason

A web interface, even a small one, uses storage space on your Smoothieboard.

Previously, we stored the web interface in the same place as the compiled firmware: in the flash memory of the microcontroller.

### Flash Memory Limitations

However, that memory is limited (512kB), and as features are added to Smoothie, less and less space is available.

Removing the web interface from flash storage allows more space for compiled code and new features.

### The Solution: SD Card Storage

We don't want to completely remove the interface, we just need a better place to store it.

The SD card on your Smoothieboard can store thousands of times more data than the flash memory can.

So it's the perfect place to store the web interface.

### Why You're Missing It

Your SD card was shipped at a time when we did not yet include the web interface on the SD card (because it was in flash).

So you don't have the interface in flash, and you don't have it on the SD card.

## Easy Fix

The solution to this issue is simply to install the required files on your SD card.

It's fast and easy.

## Next Step

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <sl-button variant="primary" size="large" href="install-web-interface">
    <sl-icon slot="prefix" name="download"></sl-icon>
    Install the Web Interface
  </sl-button>
</div>
{:/nomarkdown}

You can find the complete instructions here: [Installing the web interface](install-web-interface)
