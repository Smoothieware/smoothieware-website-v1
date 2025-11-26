---
permalink: /windows-drivers
---

# Smoothie Drivers for Windows

{::nomarkdown}

<p>If you run Windows, you may need to install drivers to use the virtual serial over USB interface. Driver requirements depend on both your Windows version and which Smoothieware version you're using.</p>

<versioned orientation="vertical">
<v1>
<p><strong>Smoothieware V1</strong> uses a standard virtual serial port (CDC/ACM) over USB. Continue reading to determine the correct drivers for your Windows version and v1 hardware.</p>
</v1>
<v2>
<p><strong>Smoothieware V2</strong> also uses a standard virtual serial port (CDC/ACM) over USB, and uses the same driver compatibility as V1. Windows 10 and later automatically recognize V2's composite USB device without additional drivers.</p>
</v2>
</versioned>

{:/nomarkdown}

## Windows 10 and Later

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Good News:</strong> There is no need to install drivers on Windows 10 or later. It should all work out of the box.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  In fact, installing the drivers on Windows 10 may cause trouble. Only install drivers if you're using Windows 8.1 or earlier.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}

<h2>Installers Windows 2000 through Windows 8</h2>

<versioned orientation="vertical">
<v1>
<ul>
<li><strong>Windows 2000/Vista/7/8 (64bit/32bit)</strong>: <a href="windows-drivers/smoothieware-usb-driver-v1.1.exe">smoothieware-usb-driver-v1.1.exe</a></li>
</ul>

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> Windows 8.1 is known to not like the new driver. Please use the v1.0 driver found below with Windows 8.1 for now.
</sl-alert>

<p>These drivers are for <strong>Smoothieware V1</strong> hardware only.</p>
</v1>
<v2>
<p>For <strong>Smoothieware V2</strong>, driver support is generally better on modern Windows versions. If using Windows 10 or later, no drivers are needed. For older Windows versions with V2 hardware, the V1 drivers above may work, though V2 should ideally be used with modern operating systems.</p>
</v2>
</versioned>

{:/nomarkdown}

## Using the Installers

Download the installer and run it. After that, Smoothieboard's USB serial should be recognized automatically.

### What's New in v1.1

- Support for second USB serial port (not compatible with having USB mass storage disabled)
- Removed the "!" from the Smoothie DFU device in Windows Device Manager

---

## Driver Files

For manual installation:

- **Windows 2000/Vista/7/8 (64bit/32bit)**: [smoothieware-windows-signeddriver-v1.1.zip](http://smoothieware.org/_media/windows-drivers/smoothieware-windows-signeddriver-v1.1.zip)
- **Windows 8.1**: [smoothieware-windows-signeddriver-v1.0.zip](http://smoothieware.org/_media/windows-drivers/smoothieware-windows-signeddriver-v1.0.zip)

## How to Install the Driver Files Manually

This is just in case the installer doesn't work, or one is running Vista. The installer is new and has not received much testing.

If it didn't work for you, please [contact us](mailto:wolf.arthur@gmail.com).

### Step 1: Download and Extract

Download the driver files zip and unzip it somewhere. You can use whatever you like so long as you remember it later.

The Smoothie SD card might be a convenient place in case you end up needing the driver in the future.

### Step 2: Open Device Manager

Click the "start" button and pull up the control panel. From there, we want to open the device manager.

### Step 3: Locate the Device

Now we need to locate the device to install. If you are using an old firmware, you may find an unknown "CDCMSC DEVICE".

If you are using a recent version of Smoothieware, you may find up to two "Smoothie Serial" devices.

Here is an example of what you might see on recent firmware:

{::nomarkdown}
<a href="/images/recovered/cp.jpg">
  <img src="/images/recovered/cp.jpg" alt="Control Panel" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<a href="/images/recovered/dm.jpg">
  <img src="/images/recovered/dm.jpg" alt="Device Manager" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

### Step 4: Update Driver Software

Right-click the first one and select "Update Driver Software"

{::nomarkdown}
<a href="/images/recovered/uds.jpg">
  <img src="/images/recovered/uds.jpg" alt="Update Driver Software" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

### Step 5: Locate the Driver

Find where you unzipped the driver to

{::nomarkdown}
<a href="/images/recovered/findthedriver.jpg">
  <img src="/images/recovered/findthedriver.jpg" alt="Find the Driver" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

### Step 6: Verify Installation

You should now have a recognized "Smoothie Virtual Serial Port".

You might have two of them if that option is enabled in the config. **Note that your COM ports might be different numbers** (mine are 9 and 10).

The port numbering can be changed through the advanced port properties, but you shouldn't really need to do that.

Also, note that "smoothie DFU" is still unrecognized. This is fine. You can ignore that.

{::nomarkdown}
<a href="/images/recovered/done.jpg">
  <img src="/images/recovered/done.jpg" alt="Driver Installed" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

## Does None of This Work for You?

There are some Windows machines that do not seem to like any of these drivers. These problems do not seem tied to a specific version of Windows.

In order to find the cause, we would appreciate submissions of hardware information from affected machines.

If you have a machine that does not like these drivers, please complete the steps found on the [How to submit Windows System Information](windows-systeminfo) page.

Hopefully, this will help us identify a pattern to the problem which could help us come up with a solution.
