# Smoothie Drivers for Windows

If you run Windows, you will need to install drivers to use the virtual serial over USB interface.

Please continue reading to determine the correct drivers to install for your version of Windows.

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

## Installers Windows 2000 through Windows 8

- **Windows 2000/Vista/7/8 (64bit/32bit)**: [smoothieware-usb-driver-v1.1.exe](windows-drivers/smoothieware-usb-driver-v1.1.exe)

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> Windows 8.1 is known to not like the new driver. Please use the v1.0 driver found below with Windows 8.1 for now.
</sl-alert>
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

If it didn't work for you, please let us know at mark@uberclock.com.

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
<a href="/images/cp.jpg">
  <img src="/images/cp.jpg" alt="Control Panel" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<a href="/images/dm.jpg">
  <img src="/images/dm.jpg" alt="Device Manager" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

### Step 4: Update Driver Software

Right-click the first one and select "Update Driver Software"

{::nomarkdown}
<a href="/images/uds.jpg">
  <img src="/images/uds.jpg" alt="Update Driver Software" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

### Step 5: Locate the Driver

Find where you unzipped the driver to

{::nomarkdown}
<a href="/images/findthedriver.jpg">
  <img src="/images/findthedriver.jpg" alt="Find the Driver" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

### Step 6: Verify Installation

You should now have a recognized "Smoothie Virtual Serial Port".

You might have two of them if that option is enabled in the config. **Note that your COM ports might be different numbers** (mine are 9 and 10).

The port numbering can be changed through the advanced port properties, but you shouldn't really need to do that.

Also, note that "smoothie DFU" is still unrecognized. This is fine. You can ignore that.

{::nomarkdown}
<a href="/images/done.jpg">
  <img src="/images/done.jpg" alt="Driver Installed" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

## Does None of This Work for You?

There are some Windows machines that do not seem to like any of these drivers. These problems do not seem tied to a specific version of Windows.

In order to find the cause, we would appreciate submissions of hardware information from affected machines.

If you have a machine that does not like these drivers, please complete the steps found on the [How to submit Windows System Information](windows-systeminfo) page.

Hopefully, this will help us identify a pattern to the problem which could help us come up with a solution.
