
# Joystick Developer Documentation

## Basic Usage
To use [joystick](joystick) readings in your module, you will first need to import the headers which are used for requesting public data from other modules. Add these lines of code somewhere near the top of your module's .cpp file:

```cpp
#include "JoystickPublicAccess.h"
#include "PublicData.h"
```

Now, somewhere in your code (not in an interrupt), you can add the following lines of code:
```cpp
struct PAD_joystick s;
if (PublicData::get_value(joystick_checksum, MODULE_NAME_CHK, &s)) {
    this->position = s.position;
}
else {
    //code to run if the request failed
    //possible causes:
    //module name doesn't match any joysticks
    //module named isn't enabled
    //module isn't properly handling the public data request
}
```

You will need to replace `MODULE_NAME_CHK` with the checksum of the name of the joystick module you wish to read. Typically this name will be a configuration option in your module. You then take the checksum of the name when reading it, see below for example code:

```cpp
#include "checksumm.h"
//...
#define data_source_checksum          CHECKSUM("data_source")
//...
//in on_config_reload:
this->MODULE_NAME = get_checksum(THEKERNEL->config->value(jogger_checksum, data_source_checksum)->by_default("")->as_string());
```

The code saves the module name checksum for passing to the public data request. Using the default empty string "" means no joysticks will respond to the public data request, so proper handling of that case needs to be added in the first example under "code to run if the request failed".

After obtaining the public data request response, you can access the following fields:
```cpp
//struct PAD_joystick s;     //for reference
s.name_checksum              //returns the checksum of the replying module name
s.raw                        //returns the raw ADC reading, if a manual mapping to usable numbers is required
s.position                   //returns the mapped ADC reading, on a -1 to 1 scale, this is the most common value to use
```

> [!SUCCESS]
> You now have the value of the joystick, and can use it however your module likes.

## Refreshing the Joystick Reading
Note that you may want to continually read/update the joystick value. One way to accomplish this is to set up a slow ticker which repeats every so often:

```cpp
void YourModule::on_module_loaded()
{
    //...
    
    //register for the main loop in the kernel
    this->register_for_event(ON_MAIN_LOOP);

    //ask the kernel to run "update_tick" at "refresh_rate" Hz
    THEKERNEL->slow_ticker->attach(refresh_rate, this, &YourModule::update_tick);

}
```

Then, in the slow ticker, set a flag which tells the module it is time to update the joystick reading:

```cpp
uint32_t YourModule::update_tick(uint32_t dummy)
{
    //set a flag indicating we need to update the joystick reading when in the main loop
    this->do_reading = true;
    
    return 0;
}
```

In the main loop, check if the flag was set, and call the code which performs the public data request:

```cpp
void YourModule::on_main_loop(void *argument)
{   
    if (this->do_reading) {
        //flag was set, means it's time to update the joystick reading
        update_Joystick();
        this->do_reading = false;
    }
}
```
