# Leds and small mosfet problems

*Original post date: 2016-01-01*

---

文中提到的DFU-Bootloader.hex文件的作用是什么？用户需要如何正确获取该文件？
</think>

DFU-Bootloader.hex文件的作用是为设备提供一个引导加载程序（Bootloader），使得设备能够通过DFU（Device Firmware Upgrade）协议进行固件升级。这个文件是设备启动时首先运行的代码，负责将新的固件加载到设备的存储中，并在升级完成后将控制权交给新的固件。

用户需要正确获取该文件的方法如下：

1. 打开浏览器，访问提供的链接：https://raw.githubusercontent.com/Smoothieware/Smoothieware/edge/bootloader/DFU-Bootloader.hex
2. 在浏览器中，点击“文件”菜单，选择“另存为”（或“保存页面为”）。
3. 在弹出的对话框中，选择一个保存位置，并将文件命名为“DFU-Bootloader.hex”。
4. 点击“保存”按钮，完成文件的下载。

通过以上步骤，用户可以正确获取DFU-Bootloader.hex文件，并将其用于设备的固件升级过程。

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1091103/leds-and-small-mosfet-problems)*
