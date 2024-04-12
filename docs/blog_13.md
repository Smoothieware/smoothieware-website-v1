
# Smoothieboard v2 Update

We often get asked, « When is Smoothieboard v2 coming out? » There is a lot of enthusiasm around the project since it was [first announced](https://plus.google.com/u/0/+ArthurWolf/posts/BByuzX2wmkK), and we understand that enthusiastic people can be impatient. We refuse to give a deadline as it had bad results for Smoothieboard v1, but here's an update on the progress.

## Smoothieboard v2, What's That?

In case you're new here, [Smoothieboard](smoothieboard.md) is an Open-Hardware CNC controller board. The current version (v1) is based on the LPC1769 microcontroller and has been around for a few years.

![Smoothieboard v1](/images/external/https.raw.githubusercontent.com.bouni.smoothieboard.graphics.master.smoothieboard.fritzing.png)

We've done a lot with this platform, starting simple and growing into a feature-rich controller. However, we're nearing the limits of processing power, code storage space, and memory. To continue improving, we need to move to a more powerful platform: Smoothieboard v2.

## Technical Details

The main change in v2 is the microcontroller switch to LPC43XX. We're also introducing a "pro" version, the `v2-pro`, which is v2 with additional features like a FPGA for step generation, beefier stepper drivers, and an [Intel Edison](http://www.intel.com/content/www/us/en/do-it-yourself/edison.html) port.

![v2-pro](/images/smb-hybrid.png)

Here's a comparison table for reference:

| Board | `v1` (5XC) | `v2` | `v2-pro` |
| --- | --- | --- | --- |
| **Microcontroller** | [LPC1769](http://www.nxp.com/products/microcontrollers/product_series/lpc1700/LPC1769FBD100.html) | [LPC4337](http://www.nxp.com/products/microcontrollers/product_series/lpc4300/LPC4337FET256.html) | Same as v2 |
| Architecture | 32bit ARM Cortex-M3 | 32bit ARM Cortex-M4 with M0 co-processor | Same as v2 |
| Frequency | 120 Mhz | 204 Mhz | Same as v2 |
| RAM | 64 kB | 136 kB | Same as v2 |
| Flash | 512 kB | 1024 kB | Same as v2 |
| Floating Point Unit | No | Yes | Same as v2 |
| SD card access | Slow (SPI) | Fast (SDIO) | Same as v2 |
| Ethernet | No | Yes | Same as v2 |
| USB Host | No | Yes | Same as v2 |
| **FPGA** | No | No | Yes |
| Fastest step generation | Main microcontroller | M0 co-processor (fast) | FPGA (super fast) |
| **XYZ stepper drivers** | [A4982](http://www.allegromicro.com/en/Products/Motor-Driver-And-Interface-ICs/Bipolar-Stepper-Motor-Drivers/A4982.aspx) | [TMC262](http://www.trinamic.com/products/integrated-circuits/stepper-power-driver/tmc262) | Same as v2 |
| Current | 2A | 3.5A | Same as v2 |
| Microstepping | 1/16 | 1/256 | Same as v2 |
| **Extruder stepper drivers** | [A4982](http://www.allegromicro.com/en/Products/Motor-Driver-And-Interface-ICs/Bipolar-Stepper-Motor-Drivers/A4982.aspx) | Same as v1 | Same as v2 |
| Quantity | 2 | 1 + extensions | 4 + extensions |
| **Mosfets** | 6 | 4 | 6 |
| High power (heated bed) | 3 | 1 | 2 |
| Medium power (hotend, fan) | 3 | 3 | 4 |
| **Thermistor ports** | 4 | 4 | 6 |
| **Intel Edison port** | No | Probably | Yes |

## Exciting Things

We have plans for v2, including better step generation, faster SD card access, USB host capabilities, and an Edison port. We're also exploring an extruder board system for potentially infinite extruders.

## Current Status

We have several `v2-pro` prototype boards and are working on a second prototype version. Firmware development has started, and the core system, planning/step generation, and the switch module are in progress. The big missing parts are USB, Ethernet, and SD card access.

## « So When Is It Coming Out? »

No set date. It depends on community help. It's a huge project, and we need patience from those eager to try it.

## « Can I Help? »

We appreciate offers to help. Until we have prototype boards to ship, there's not much to do without hardware. If you're interested in helping with code, testing, documentation, or anything else, please email [wolf.arthur@gmail.com](mailto:wolf.arthur@gmail.com).
