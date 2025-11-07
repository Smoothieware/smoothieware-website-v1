---
permalink: /compiling-v2-libcxx-dev
---

# Compiling Smoothie V2 with libcxx Development

This guide shows the process of setting up and compiling Smoothie V2 with the libcxx development environment.

This involves cloning the necessary repositories (libcxx, NuttX apps, and NuttX), installing libcxx into the NuttX source tree, applying patches, and building the firmware for the Bambino-200e board.

## Setup and Build Process

The following command line session demonstrates the complete build process:

```bash
user@pc:~/nuttxspace/smoothie$ git clone https://bitbucket.org/acassis/libcxx
Cloning into 'libcxx'...
remote: Counting objects: 56639, done.
remote: Compressing objects: 100% (17518/17518), done.
remote: Total 56639 (delta 38327), reused 56203 (delta 38013)
Receiving objects: 100% (56639/56639), 18.11 MiB | 1.23 MiB/s, done.
Resolving deltas: 100% (38327/38327), done.
Checking connectivity... done.

user@pc:~/nuttxspace/smoothie$ git clone https://bitbucket.org/nuttx/apps
Cloning into 'apps'...
remote: Counting objects: 28932, done.
remote: Compressing objects: 100% (8085/8085), done.
remote: Total 28932 (delta 23422), reused 25738 (delta 20706)
Receiving objects: 100% (28932/28932), 5.17 MiB | 1.15 MiB/s, done.
Resolving deltas: 100% (23422/23422), done.
Checking connectivity... done.

user@pc:~/nuttxspace/smoothie$ git clone https://bitbucket.org/nuttx/nuttx
Cloning into 'nuttx'...
remote: Counting objects: 317735, done.
remote: Compressing objects: 100% (72329/72329), done.
remote: Total 317735 (delta 246982), reused 296243 (delta 231490)
Receiving objects: 100% (317735/317735), 67.77 MiB | 1.23 MiB/s, done.
Resolving deltas: 100% (246982/246982), done.
Checking connectivity... done.

user@pc:~/nuttxspace/smoothie$ cd libcxx/

user@pc:~/nuttxspace/smoothie/libcxx$ ./install.sh ../nuttx
Installing LLVM/libcxx in the NuttX source tree
Installation suceeded

user@pc:~/nuttxspace/smoothie/libcxx$ cd -
/home/user/nuttxspace/smoothie

user@pc:~/nuttxspace/smoothie$ cd nuttx/

user@pc:~/nuttxspace/smoothie/nuttx$ patch -p1 < /tmp/0001-Add-helloxx-config.patch 
patching file configs/bambino-200e/helloxx/Make.defs
patching file configs/bambino-200e/helloxx/defconfig
patching file configs/bambino-200e/helloxx/setenv.sh

user@pc:~/nuttxspace/smoothie/nuttx$ patch -p1 < /tmp/0002-Add-and-compile-Pin.cxx-on-Bambino-board.patch 
patching file configs/bambino-200e/src/Makefile
patching file configs/bambino-200e/src/Pin.cxx
patching file configs/bambino-200e/src/Pin.h
patching file configs/bambino-200e/src/bambino-200e.h
patching file configs/bambino-200e/src/lpc43_highpri.c


user@pc:~/nuttxspace/smoothie/nuttx$ cd tools/

user@pc:~/nuttxspace/smoothie/nuttx/tools$ ./configure.sh bambino-200e/helloxx

user@pc:~/nuttxspace/smoothie/nuttx/tools$ cd ..

user@pc:~/nuttxspace/smoothie/nuttx$ make
...
CXX:  Pin.cxx
In file included from Pin.cxx:1:0:
Pin.h:62:5: warning: ISO C++ prohibits anonymous structs [-Wpedantic]
     };
     ^
AR:   lpc43_boot.o lpc43_autoleds.o Pin.o
make[2]: Leaving directory '/home/user/nuttxspace/smoothie/nuttx/configs/bambino-200e/src'
LD: nuttx
make[1]: Leaving directory '/home/user/nuttxspace/smoothie/nuttx/arch/arm/src'
CP: nuttx.bin
```

## Summary

The build process involves these key steps:

1. Clone the libcxx repository from Bitbucket

2. Clone the NuttX apps repository

3. Clone the NuttX core repository

4. Install libcxx into the NuttX source tree using the installation script

5. Apply configuration and source code patches for the Bambino-200e board

6. Configure the build system for the Bambino-200e with helloxx config

7. Build the firmware with `make`

The final output is `nuttx.bin`, which can be flashed to the Smoothie V2 board.
