---
permalink: /developers-guide
layout: default
title: Developers Guide
---

# Developers Guide

{::nomarkdown}
<a href="/images/coding.png">
  <img src="/images/coding.png" alt="Developer Guide" style="width: 150px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

{% include developers/contributing-for-include.md %}

This page contains information you need to know when coding for Smoothie.

It covers the configuration system, coding standards, and how to submit contributions to the project.

## How to submit a pull request to the Smoothieware Github project

See the [Github](github) page for detailed instructions on submitting pull requests.

{::nomarkdown}
<review id="developers-guide:config-system">
<proposal>
{:/nomarkdown}

## Configuration and Module Development

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

### V1: Config System and Checksums

**Language:** C++

#### When to read configuration

When coding a Smoothie module, you probably want the user to be able to configure it.

In Smoothie, configuration is stored in a configuration file, which is read at startup time (when your module is being loaded).

If you want your config values to be read only upon module loading, read your config values from the `on_module_loaded` callback of your module: [example](https://github.com/arthurwolf/Smoothie/blob/bee725fcd5dce2162f643dd747fb95c1cc9f4242/src/modules/utils/pausebutton/PauseButton.cpp#L16).

#### Checksums

Consider a setting that looks like this in our config file:

```
maximum_death_star_hourly_power_consumption    100000000000
```

In our code, if we want to read it, we'll do something like this:

```cpp
void MyModule::on_config_loaded(void* argument){
	// Config does not actually work like that, this is just a hypothetical example to explain, Don't do it like this.
	this->maximum_power = this->kernel->config->value("maximum_death_star_hourly_power_consumption")->as_number();
}
```

To save flash storage space, we use [Checksums](http://en.wikipedia.org/wiki/Checksum): we don't store the actual string, but a checksum of that string.

We can compare the checksums of the configuration lines in the config file and still know if they correspond to our string.

An online tool to compute checksums when needed can be found [here](http://www.dioda.ro/tst/tstfletcher.php).

The actual code for the checksum calculation is in [src/libs/utils.cpp](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/utils.cpp):

```cpp
uint16_t get_checksum(string to_check){
   // From: http://en.wikipedia.org/wiki/Fletcher%27s_checksum
   uint16_t sum1 = 0;
   uint16_t sum2 = 0;
   for( int index = 0; index < to_check.length(); ++index ){
      sum1 = (sum1 + to_check[index]) % 255;
      sum2 = (sum2 + sum1) % 255;
   }
   return (sum2 << 8) | sum1;
}
```

Now our code will look like this:

```cpp
#define maximum_death_star_hourly_power_consumption_checksum CHECKSUM("maximum_death_star_hourly_power_consumption")

void MyModule::on_config_loaded(void* argument){
	// Config works more like this
	this->maximum_power = this->kernel->config->value(maximum_death_star_hourly_power_consumption_checksum)->as_number();
}
```

#### Config value types

There are different types of config values you can retrieve from the config file.

They are all strings, but there are convenience methods that allow you to convert them into other types.

##### ConfigValue object

This is not very useful. It's what you get when you do:

```cpp
	this->kernel->config->value(whatever_checksum);
```

You get an object of type [ConfigValue](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/Config.h).

It stores the string (if the config option was found in the file) and has all kinds of convenience methods.

##### String

If your value is a string, you can access it using the `as_string()` method:

```cpp
	this->whatever_option = this->kernel->config->value(whatever_checksum)->as_string();
```

Note: if you provided a default string, and the option is not found in the config file, that default will be returned. See below.

##### Number

Converts your string to a double:

```cpp
	double trouble = this->kernel->config->value(whatever_checksum)->as_number();
```

Note: if you provided a default number, and the option is not found in the config file, that default will be returned. See below.

##### Boolean

This is convenient for stuff like:

```cpp
void Laser::on_module_loaded() {
    if( !this->kernel->config->value( laser_module_enable_checksum )->by_default(false)->as_bool() ){ return; }
```

This prevents the module from being loaded if the `laser_module_enable` config option is not present (defaults to false) or set to false explicitly.

"true" and "1" are valid true values, anything else is false.

##### Pin

Pin objects represent a pin configuration.

They store the port number, the pin number, whether the pin is inverted, and other stuff. See: [Pin.h](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/Pin.h).

They are generated from the result of `as_string()` (making default values as strings possible).

```cpp
	this->step_pin = this->kernel->config->value(extruder_step_pin_checksum)->by_default("1.22")->as_pin()->as_output();
```

#### Defaults

You can set a default value in case that option is not specified in the config file using the `by_default()` method, which can take either a string or a double.

Doubles are used as defaults only by the `as_number()` and `as_bool()` methods.

```cpp
	this->acceleration = this->kernel->config->value(acceleration_checksum)->by_default(1)->as_number();
	this->step_pin = this->kernel->config->value(extruder_step_pin_checksum)->by_default("1.22")->as_pin()->as_output();
```

If you want Smoothie to die if no config value is set in the config file, you can also use `->required()`, but that's mean.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

### V2: Python Configuration System

**Language:** Python

#### Reading Configuration

In Smoothieware V2, modules are written in Python and configuration is handled differently than V1.

V2 reads configuration from YAML-formatted configuration files. Unlike V1's checksum-based string system, V2 configuration access is direct through the module's `config` object.

Configuration is typically read in the module's initialization or during module loading phases:

```python
class MyModule:
    def __init__(self):
        # Configuration can be accessed directly from config
        self.maximum_power = self.config.get("maximum_power", 100)
```

#### YAML Configuration Format

V2 uses YAML configuration instead of flat key-value pairs:

```yaml
my_module:
  maximum_power: 100000000000
  enable: true
  motor_type: stepper
```

#### Configuration Access Patterns

Unlike V1's `ConfigValue` objects and checksums, V2 provides straightforward Python dictionary-like access:

##### String Values

```python
self.option_value = self.config.get("option_name", "default_string")
```

##### Numeric Values

```python
self.power = float(self.config.get("maximum_power", 100))
self.rate = int(self.config.get("step_rate", 3000))
```

##### Boolean Values

```python
if self.config.get("module_enable", False):
    # Module initialization code
    pass
```

V2 interprets: `true`, `yes`, `1` as truthy, and `false`, `no`, `0` as falsy.

##### Pin Configuration

Pin definitions in V2 are YAML-formatted and include port and pin number directly:

```yaml
my_module:
  step_pin: "PG0"
  dir_pin: "PG1"
  enable_pin: "PJ2"
```

Accessing pins from Python:

```python
self.step_pin = self.config.get("step_pin", "1.0")
```

V2 pin syntax uses STM32 naming conventions (e.g., PG0, PJ2) instead of V1's numeric format (e.g., 2.0, 0.5).

#### Configuration Defaults

Set default values directly in the `config.get()` method:

```python
self.acceleration = float(self.config.get("acceleration", 1.0))
self.step_pin = self.config.get("step_pin", "1.22")
```

No special methods required - defaults are simple Python function arguments.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

## Config system and checksums

### When to read configuration

When coding a Smoothie module, you probably want the user to be able to configure it.

In Smoothie, configuration is stored in a configuration file, which is read at startup time (when your module is being loaded).

If you want your config values to be read only upon module loading, read your config values from the `on_module_loaded` callback of your module: [example](https://github.com/arthurwolf/Smoothie/blob/bee725fcd5dce2162f643dd747fb95c1cc9f4242/src/modules/utils/pausebutton/PauseButton.cpp#L16).

### Checksums

Consider a setting that looks like this in our config file:

```
maximum_death_star_hourly_power_consumption    100000000000
```

In our code, if we want to read it, we'll do something like this:

```cpp
void MyModule::on_config_loaded(void* argument){
	// Config does not actually work like that, this is just a hypothetical example to explain, Don't do it like this.
	this->maximum_power = this->kernel->config->value("maximum_death_star_hourly_power_consumption")->as_number();
}
```

To save flash storage space, we use [Checksums](http://en.wikipedia.org/wiki/Checksum): we don't store the actual string, but a checksum of that string.

We can compare the checksums of the configuration lines in the config file and still know if they correspond to our string.

An online tool to compute checksums when needed can be found [here](http://www.dioda.ro/tst/tstfletcher.php).

The actual code for the checksum calculation is in [src/libs/utils.cpp](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/utils.cpp):

```cpp
uint16_t get_checksum(string to_check){
   // From: http://en.wikipedia.org/wiki/Fletcher%27s_checksum
   uint16_t sum1 = 0;
   uint16_t sum2 = 0;
   for( int index = 0; index < to_check.length(); ++index ){
      sum1 = (sum1 + to_check[index]) % 255;
      sum2 = (sum2 + sum1) % 255;
   }
   return (sum2 << 8) | sum1;
}
```

Now our code will look like this:

```cpp
#define maximum_death_star_hourly_power_consumption_checksum CHECKSUM("maximum_death_star_hourly_power_consumption")

void MyModule::on_config_loaded(void* argument){
	// Config works more like this
	this->maximum_power = this->kernel->config->value(maximum_death_star_hourly_power_consumption_checksum)->as_number();
}
```

### Config value types

There are different types of config values you can retrieve from the config file.

They are all strings, but there are convenience methods that allow you to convert them into other types.

#### ConfigValue object

This is not very useful. It's what you get when you do:

```cpp
	this->kernel->config->value(whatever_checksum);
```

You get an object of type [ConfigValue](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/Config.h).

It stores the string (if the config option was found in the file) and has all kinds of convenience methods.

#### String

If your value is a string, you can access it using the `as_string()` method:

```cpp
	this->whatever_option = this->kernel->config->value(whatever_checksum)->as_string();
```

Note: if you provided a default string, and the option is not found in the config file, that default will be returned. See below.

#### Number

Converts your string to a double:

```cpp
	double trouble = this->kernel->config->value(whatever_checksum)->as_number();
```

Note: if you provided a default number, and the option is not found in the config file, that default will be returned. See below.

#### Boolean

This is convenient for stuff like:

```cpp
void Laser::on_module_loaded() {
    if( !this->kernel->config->value( laser_module_enable_checksum )->by_default(false)->as_bool() ){ return; }
```

This prevents the module from being loaded if the `laser_module_enable` config option is not present (defaults to false) or set to false explicitly.

"true" and "1" are valid true values, anything else is false.

#### Pin

Pin objects represent a pin configuration.

They store the port number, the pin number, whether the pin is inverted, and other stuff. See: [Pin.h](https://github.com/arthurwolf/Smoothie/blob/edge/src/libs/Pin.h).

They are generated from the result of `as_string()` (making default values as strings possible).

```cpp
	this->step_pin = this->kernel->config->value(extruder_step_pin_checksum)->by_default("1.22")->as_pin()->as_output();
```

### Defaults

You can set a default value in case that option is not specified in the config file using the `by_default()` method, which can take either a string or a double.

Doubles are used as defaults only by the `as_number()` and `as_bool()` methods.

```cpp
	this->acceleration = this->kernel->config->value(acceleration_checksum)->by_default(1)->as_number();
	this->step_pin = this->kernel->config->value(extruder_step_pin_checksum)->by_default("1.22")->as_pin()->as_output();
```

If you want Smoothie to die if no config value is set in the config file, you can also use `->required()`, but that's mean.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
