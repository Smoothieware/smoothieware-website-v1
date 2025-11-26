---
permalink: /eclipse
---


{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>NOTE:</strong> Using Eclipse is <strong>not</strong> supported by the Smoothie developers, you are on your own if you decide to use it.
</sl-alert>
{:/nomarkdown}



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

This guide is for **Smoothieware V1** development on the LPC1768 platform using Eclipse with the GNU ARM toolchain and make-based build system.

**V1 Development Environment:**
- **IDE**: Eclipse with GNU ARM plugins
- **Build System**: Makefile-based
- **Toolchain**: gcc-arm-none-eabi
- **Debugger**: MRI (Monitor for Remote Inspection) over UART
- **Processor**: LPC1769 (Cortex-M3)
- **Flash Method**: USB mass storage (drag-and-drop firmware.bin)

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

For **Smoothieware V2** development on STM32H745, the development environment differs significantly:

**V2 Development Environment:**
- **IDE**: STM32CubeIDE or Visual Studio Code recommended
- **Build System**: Rake/Ruby-based build system (not make)
- **Toolchain**: gcc-arm-none-eabi (same) or ARM Compiler 6
- **Debugger**: Hardware debuggers (ST-Link, J-Link, etc.) via SWD
- **Processor**: STM32H745 dual-core (Cortex-M7 + M4)
- **Flash Method**: ST-Link programmer or DFU mode
- **RTOS**: FreeRTOS (V2 uses RTOS, V1 is bare-metal)

The Eclipse setup described on this page will **not work** for V2 development. Refer to the V2 development documentation for proper setup.

{::nomarkdown}
</v2>
</versioned>

{:/nomarkdown}

I first want to thank [David Cabanis](http://mbed.org/users/dcabanis/) for the e-mail that he sent me a few months ago.

It forms the core of this page. David, You Rock!

# Install Eclipse with C/C++ and GNU Support

To get started, you need to install Eclipse.

To this you will add support for the GNU tool chain used by the Smoothie project.

At the time this page was written, Eclipse 4.4 (Luna), was the current release.

This guide also applies to later versions - 4.5 (Mars) and 4.6 (Neon).

- Eclipse is a Java application and [requires at least version 6 of the Java Runtime Environment, JRE](http://wiki.eclipse.org/Eclipse/Installation#Install_a_JVM), be installed on your machine. On Windows and Linux, you will want to make sure that you have this Java requirement installed. On OS X, it will detect the Java requirement when you first attempt to run Eclipse and offer to install it for you if not already installed.
- Go to [Eclipse Downloads](http://www.eclipse.org/downloads) to download and decompress the **Eclipse IDE for C/C++ Developers** archive.
- Now startup that shiny new version of Eclipse by executing the Eclipse binary at the root of the decompressed Eclipse files. There is no separate install process required for Eclipse. If Eclipse fails to start, it is probably due to a missing JRE.
- On initial startup, it will ask where you want your workspace to be located. Select an empty directory where you want to place your Eclipse-C/C++ projects or select an old CDT workspace. If you use only one workspace, check the item to always use this as the default and not ask on every startup.
  - Keep the workspace directory in mind, you'll need it later. You can say if a directory is a **workspace directory** from its sub-directory named **".metadata"**
- Close the **Welcome** tab
- On the **Help** menu, select the **Install New Software...** option.
  - On the install dialog, press the **Add...** button near the upper right hand corner.
  - Set **Name:** to **Eclipse for ARM**.
  - Set **Location:** to `http://gnuarmeclipse.sourceforge.net/updates`
  - Click the **Ok** button.
  - There should now be a **GNU ARM C/C++ Cross Development Tools** item listed on the Install dialog. It may take several seconds to populate this item into the list. Once it appears, check it.
  - Now press the **Next** button.
  - At this point an install wizard appears. You can just keep clicking through this wizard to allow it to progress.  
    - At some point it will complain about unsigned content. Ignore this warning by pressing the **Ok** button.
  - At the end of the install wizard, press the **Restart Now** button.
- [optional] If you like to use the GIT plugin for eclipse repeat the previous step with the following package source and package selection:
  - **Luna - http://download.eclipse.org/releases/luna**
  - **Collaboration/Eclipse Git Team Provider**, **Collaboration/Java implementation of Git**

# Create Eclipse Project for Smoothie

- Open a shell and change into the **workspace directory** using `cd`

  - In this, check out the Smoothieware source repository as described in [Getting Smoothie](getting-smoothie)

    - If you wish, you can switch between branches using the git eclipse plugin later

    - In the **workspace directory** there should be a directory named **Smoothie** now. It will be our the **project directory**

    - [optional] you might want to rename the **project directory**. At this time this can be done in your shell. If you decide to do so later, do it in eclipse.

  - Change into the **project directory**

  - Retrieve and install the tool chain as described in [Compiling Smoothie](compiling-smoothie)

  - Type `make all` to test, if the compiler works. The first build will take a while. To speed that up you might provide the parameter `-j <number of cores + 1>` to make (e.g. `make -j 3 all`)
- Go back to Eclipse
  - On the **File** menu select **New** > **Makefile Project with Existing Code**
    - Set **Existing Code Location** to the **project directory**.
    - If the **Project Name** field wasn't automatically filled in with the name of your **project directory** (e.g. Smoothie) then set it to that manually.
    - Leave the options **C** and **C++** checked
    - Select **Cross ARM GCC** toolchain from the **Toolchain for Indexer Settings** list.
    - Click the **Finish** button.
  - Now you have to be quick: In the lower right corner there is the progress icon. Click it. If it isn't there, click **Window->Show View->other** and select **General/Progress**
    - When the **C/C++ Indexer** is running in the **Progress** view, stop it by clicking the red square icon.
    - The reason is that the CHECKSUM()-macro causes an out of memory-exception in the indexer.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>V1-Specific Workaround:</strong><br>
  This CHECKSUM() macro workaround is specific to Smoothieware V1. V2 uses a different configuration system and does not use the CHECKSUM() macro.
</sl-alert>
{:/nomarkdown}

    - To correct this, unfold the structure in the Project Explorer and open **src/libs/checksumm.h**
      - This change does not affect normal compilation or build in Eclipse. It only affects the Indexer of Eclipse.
      - Insert at line 54:
        - `#ifdef __CDT_PARSER__`
        - `#define CHECKSUM(X) ((uint16_t)sizeof(X))`
        - `#else`
      - Insert at the end of the file before the line `#endif  /* CHECKSUM_USE_CPP */`:
        - `#endif /* __CDT_PARSER__ */`
      - Save and close checksumm.h
      - Mark this change as ignored for Git as the Dev Team does not like it:
        - Either by right click on the file in Project Explorer and select **Team->Advanced->Assume unchanged**
        - Or by executing the command `git update-index --assume-unchanged src/libs/checksumm.h` 
  - Right-click on the **Smoothie** project in the **Project Explorer** pane.
    - Select **Properties** from the pop-up menu.
    - Select **Index->Rebuild**
      - This should complete in a short time, now.

You now have a new created project named like the **project directory** in the left pane, Project Explorer. Let's now create a build configuration that can build Smoothie sources under Eclipse uses the existing makefile.

- Right-click on the **Smoothie** project in the **Project Explorer** pane.
- Select **Properties** from the pop-up menu.
  - Click the arrow to left of **C/C++ Build** item in left pane to expand its sub-items.
    - Select the **Settings** sub-item.
      - Click the **Manage Configurations...** button towards the upper right hand corner of the dialog.
        - Click the **New...** button.
          - Set **Name:** to **Release**
          - You should be able to accept the default of **Copy settings from** > **Existing configuration** > **Default**.
          - Click the **Ok** button.
        - Select **Release** configuration from the list of the small configurations dialog and then press the **Set Active** button.
        - Click the **Ok** button.
      - At the top of the properties dialog set **Configuration:** to **Release**
      - In the "Toolchains" tab, uncheck **Use global tool chain path** (This has moved to the "Tool Paths" tab from Eclipse 4.5 onwards)
      - Behind the **Per project path**, click **Browse...**
      - Select the **gcc-arm-none-eabi** subdirectory of your **project directory**

**If the Indexer does not find the Types of the mbed system (e.g. SDCard, USB, DFU, SDFAT, ... in main.cpp), try this:**
*[This seems to be not necessary any more, I keep it here for testing]*
- Go to project properties 
  - Click the arrow to left of **C/C++ General** item in left pane to expand its sub-items.
  - Select the **Paths and Symbols** sub-item.
    - Select the **Includes** tab
      - Click the **Add..** button. This will pop-up the **Add directory path** dialog.
        - Set **Directory:** to `${ProjDirPath}/mbed/drop/LPC1768`
        - Check both **Add to all configurations** and **Add to all languages**.
        - Click the **Ok** button.
      - Add another directory and set it to `${ProjDirPath}/mbed/drop` using the same steps as before.
    - Select the **Symbols** tab.
      - Click the **Add...** button. This will pop-up the **Add Symbol** dialog.
        - As name, insert `__LPC17XX__`.
        - Check both **Add to all configurations** and **Add to all languages**.
        - Click the **Ok** button.
- At this point you can click the **Ok** button on the **Properties** dialog.

# Clean and Build the Project
- To clean select **Project->Clean..:** from the main menu. Make your selection and click ok.
  - The **Console** should should show:
```plaintext
[Time] **** Clean-only build of configuration Debug for project Smoothie ****
make clean 
Cleaning mbed
make[1]: Betrete Verzeichnis '/home/stth/daten/programmieren/eclipse_smt/Smoothie/mbed'
Cleaning src
[...]
Cleaning up all build generated files
make[2]: Verlasse Verzeichnis '/home/stth/daten/programmieren/eclipse_smt/Smoothie/src'
make[1]: Verlasse Verzeichnis '/home/stth/daten/programmieren/eclipse_smt/Smoothie/src'

[Time] Build Finished (took 416ms)
```
- Click on the hammer icon in the main tool bar
  - the **Console** view should show:
```plaintext
[Time] **** Build of configuration Debug for project Smoothie ****
make all 
make[1]: Betrete Verzeichnis '/home/stth/daten/programmieren/eclipse_smt/Smoothie/mbed'
Building src
[...]
Compiling modules/utils/panel/panels/ST7565/AK4183.cpp
Compiling ../build/mbed_custom.cpp
Linking ../LPC1768/main.elf
Extracting ../LPC1768/main.hex
Extracting ../LPC1768/main.bin
Extracting disassembly to ../LPC1768/main.disasm
   text	   data	    bss	    dec	    hex	filename
 313188	    544	  10144	 323876	  4f124	../LPC1768/main.elf

make[2]: Verlasse Verzeichnis '/home/stth/daten/programmieren/eclipse_smt/Smoothie/src'
make[1]: Verlasse Verzeichnis '/home/stth/daten/programmieren/eclipse_smt/Smoothie/src'

[Time] Build Finished (took 1m:16s.206ms)
```

**If you get many error markers when you open a file even when the project builds without complaints, try this:**
*[This seems to be not necessary any more, I keep it here for testing]*
- Go to project properties 
  - Click the arrow to left of **C/C++ General** item in left pane to expand its sub-items.
    - In the left pane, select the **Code Analysis** sub-item.
      - Select **Project Settings**
      - Uncheck all entries in the list below

# Configure and build a debug configuration
- Right-click on the **Smoothie** project in the **Project Explorer** pane.
- Select **Properties** from the pop-up menu.
  - Select **C/C++ Build** item in left pane.
    - Click the **Manage Configurations...** button towards the upper right hand corner of the dialog.
      - Click the **New...** button.
        - Set **Name:** to **Debug**
        - You should be able to accept the default of **Copy settings from** > **Existing configuration** > **Release**.
        - Click the **Ok** button.
      - Select **Debug** configuration from the list of the small configurations dialog and then press the **Set Active** button.
      - Click the **Ok** button.
    - At the top of the properties dialog set **Configuration:** to **Debug**
    - Select the **Behaviour** sub-tab in the properties dialog.
      - Change **Build (Incremental Build)** from **all** to **all upload ENABLE_DEBUG_MONITOR=1**
        - These makefile rules will build the Smoothie project with debugger support and upload the binary to the device. You may need to change these make arguments if your deploy requirements are different.
        - Also note that if you compile with **ENABLE_DEBUG_MONITOR=1** a breakpoint will be set at startup, which may look like smoothie isn't starting at all

**If you change Build configurations, always perform a make clean (Project->Clean) and make all (Project->Build), before you use the binaries**

# Run Smoothie under the Debugger
Now comes the really fun part. Not only can we build Smoothie in Eclipse, we can also run it under its debugger UI.

- Right-click on the **Smoothie** project in the **Project Explorer** pane.
- Select **Debug as** > **Debug Configurations...** from the pop-up menu. This will bring up the **Debug Configurations** dialog.
- In the left pane, right-click the **C/C++ Remote Application** item and select the **New** item from the pop-up menu. This will create us a new remote debugging configuration.
- At the bottom of this dialog, there is a link named **Select other...**. Click it to pop up the **Select Preferred Launcher** dialog.
- Check the **Use configuration specific settings** check-box.
- Select the **GDB (DSF) Manual Remote Debugging Launcher**.
- Click **Ok** to return to the debug configurations dialog.
- Set **C/C++ Application:** to **LPC1768/main.elf**
- Select the **Disable auto build** option.
- Click on the **Debugger** tab.
- Change **GDB debugger:** from **gdb** to **arm-none-eabi-gdb**
- Click on the **Connection** sub-tab.
- Set **Type:** to **Serial**
- Set **Device:** to a value appropriate for your environment. This will be the serial port on your PC which is connected to UART0 of your Smoothieboard.
- Click on the **Common** tab.
- In the **Display in favorites menu**, check the **Debug** option if not already checked.
- Click the **Close** button to dismiss the **Debug Configurations** 

Now that you have the debug configuration setup, you are ready to try running Smoothie under the debugger.

- Reset your device to make sure that the debug build done earlier is up and running on your device.
- In the toolbar at the top of Eclipse, there is a button that looks like a bug which has a small down pointing arrow to its right. Click the arrow with your mouse and select the **Smoothie Debug** configuration that was just created.
- You should now be in the debugger at the top of the main() function.

# Thanks
Thanks again to David Cabanis for his help. Also thanks to the Smoothie users that helped me with Eclipse and testing.

One source of inspiration on setting this toolchain it's the page from MBED site: 
[https://github.com/adamgreen/gcc4mbed/blob/master/notes/eclipse.creole](https://github.com/adamgreen/gcc4mbed/blob/master/notes/eclipse.creole)
