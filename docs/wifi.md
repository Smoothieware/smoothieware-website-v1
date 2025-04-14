
# Wifi

## ESP3D

See [ESP3D on GitHub](https://github.com/luc-github/ESP3D).

For wiring, simply use the "Serial" port, see [Smoothieboard wiring for ESP3D](https://github.com/luc-github/ESP3D/wiki/Smoothieboard).

Also, this project should allow one to use ESP3D with Smoothie's designed-for-Ethernet web interfaces, except now thanks to this they are wifi-compatible too: [Smoothieware-webui-for-ESP3D](https://github.com/luc-github/smoothieware-webui-for-ESP3D). If you test this and succeed or fail, please report either to [wolf.arthur@gmail.com](mailto:wolf.arthur@gmail.com) so I can work on improving things. Thanks!!!

## Ethernet to Wifi

Smoothieboard v1 currently does not have a native Wifi interface.

However, it is possible to easily make it Wifi-capable by connecting its [Ethernet](network.md) interface to a simple Wifi/Ethernet bridge.

For example, [Cheap Wifi/Ethernet bridge](https://www.amazon.com/s?k=wireless+ethernet+bridge&qid=1744350096&rnid=386442011&ref=sr_nr_p_36_0_0&low-price=&high-price=30) will easily make your Smoothieboard Wifi-compatible.

For instructions, see the manual of the bridge you select.

This also generally has the advantage of being much more reliable and efficient than an "on-board" Wifi system which can be found on a few other CNC controller boards.
