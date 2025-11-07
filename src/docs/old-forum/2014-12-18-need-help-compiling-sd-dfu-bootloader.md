# Need help compiling SD DFU Bootloader

*Original post date: 2016-01-01*

---

# Need help compiling SD DFU bootloader

## Post by arthurwolf (2014-12-18 13:23:15)
You can find the precompiled version here:  
[https://github.com/triffid/LPC17xx-DFU-Bootloader/releases](https://github.com/triffid/LPC17xx-DFU-Bootloader/releases)

If you want to compile it yourself, you'll need to:

1. Install the required toolchain (ARM GCC, etc.)
2. Clone the repository:  
   ```bash
   git clone https://github.com/triffid/LPC17xx-DFU-Bootloader.git
   ```
3. Follow the build instructions in the README

## Post by jsdiy (2015-01-17 17:09:43)
By doing:

```bash
git clone https://github.com/triffid/LPC17xx-DFU-Bootloader.git

## Post by arthurwolf (2015-01-17 17:11:50)
That's correct. After cloning the repository, you'll need to:

1. Install the required dependencies (libopencm3, etc.)
2. Configure the build system (make menuconfig)
3. Compile using `make`

You can find more detailed instructions in the [repository's README](https://github.com/triffid/LPC17xx-DFU-Bootloader)


---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150829111801/http://smoothieware.org/forum/t-1059164/need-help-compiling-sd-dfu-bootloader)*
