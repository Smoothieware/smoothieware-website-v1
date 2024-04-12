
Edge now uses the current version of GCC 4.8, anyone developing on edge should delete the `gcc-arm-none-eabi` directory and run `linux_install` (or `mac_install` or `win_install`) to get the latest compiler, then do a `make clean`, then `make`.

Please report any problems to the [github issues page](https://github.com/Smoothieware/Smoothieware/issues).

The master branch has the last version of edge that was compiled with the old GCC 4.7 compiler.
