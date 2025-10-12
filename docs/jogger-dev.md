
# Jogger Developer Documentation

## Writing a Custom Joystick Module

There are a few devices which could be used for jogging, but don't fall into the analog potentiometer category, and can't be used with the base [joystick](joystick) module.

Some examples include:

- Encoder / MPG devices, where speed of the knob controls speed of jogging

- Joystick with digital output

- Paddle switch / buttons to jog at a fixed speed when pressed

In these cases, you will need to write a module which:

1. Manages reading your device and converting the reading into a number from -1 to 1 (or 0 to 1 if desired)
2. Responds to a public data request from the jogger with the reading

For an example on how #1 is done for analog devices, see the source code for `JoystickAxis.cpp`.
The following examples will explain how to accomplish #2.

### Including Necessary Headers

You will need to include the following in your module:

```cpp
#include "JoystickPublicAccess.h"
#include "PublicDataRequest.h"
#define joystick_checksum     CHECKSUM("joystick")
```

This allows your code to conform to the data format the jogger will be expecting.

### Responding to Public Data Requests

Your module will need to respond to a public data request from the Jogger. To do so, you must first register your module with the Kernel so it knows to call your module when a public data request is made:

```cpp
void YourModule::on_module_loaded()
{
    this->register_for_event(ON_GET_PUBLIC_DATA);
}
```

Then, you will need to write a function which handles the data request:

```cpp
void YourModule::on_get_public_data(void *argument)
{
    //cast the argument to a PublicDataRequest pointer
    PublicDataRequest *pdr = static_cast<PublicDataRequest *>(argument);
    
    //check if the request is for a joystick module, return if not
    if (!pdr->starts_with(joystick_checksum)) return;
    
    //check if the request is for this particular joystick module, return if not
    if (!pdr->second_element_is(this->name_checksum)) return;
    
    //caller has provided the location to write the state to
    struct PAD_joystick* pad = static_cast<struct PAD_joystick *>(pdr->get_data_ptr());
    pad->name_checksum = this->name_checksum;
    pad->raw = //fill in your raw device reading if appropriate
    pad->position = //fill in your scaled device reading scaled to +/- 1
    pdr->set_taken();
}
```

You will need to fill in a few areas of the above example for your own module. The module "name_checksum" will need to be determined at startup, see "JoystickAxisPool.cpp" for an example of how to create many different named modules.

## Adding Axes

The jogger module was written to support up to 6 concurrent jog axes. By default, the module enables 3, which means if you setup a 3D joystick, you can have three axes jogging at the same time. An example jogger config is shown below:

```plaintext
jogger.data_source_alpha           joystickX
jogger.data_source_beta            joystickY
jogger.data_source_gamma           joystickZ
jogger.jog_axes                    XYZ
```

The example assumes you have properly set up three [joystick](joystick) modules with names "joystickX", "joystickY" and "joystickZ".

Then, to set the jog axes, simply run `M777` followed by three letters of the axes you want the joystick to control.

For up to 6 axes (maybe you have two 2D joysticks running at the same time, or a 4D joystick?), you will need to recompile the smoothie source code changing the default jog axes in `Jogger.h`:

```cpp
#define NUM_JOG_AXES 3
```

Changing the value to your desired number of axes and recompiling will give you new firmware which enables the extra axes. The jogger data source names for each axis are:

| Axis 1            | Axis 2            | Axis 3            | Axis 4            | Axis 5            | Axis 6            |
| ----------------- | ----------------- | ----------------- | ----------------- | ----------------- | ----------------- |
| data_source_alpha | data_source_beta  | data_source_gamma | data_source_delta | data_source_epsilon | data_source_zeta |

Note that `M777` and `jogger.jog_axes` will then accept up to 6 letters.
