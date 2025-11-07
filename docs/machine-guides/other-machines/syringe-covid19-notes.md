---
permalink: /syringe-covid19-notes
---


# Covid19 Syringe Pusher Smoothieboard Notes

## Context

I ([Arthur Wolf](mailto:wolf.arthur@gmail.com), Smoothie project creator), was contacted by Phillipe Cochin ([covid3d.org](https://covid3d.org/)), asking for help with stepper-motor related questions for their syringe pusher project.

We talked on the phone and exchanged quite a bit of info, this page is about listing that info for future reference, and to share it with other members of the project.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <div style="display: flex; align-items: center; gap: 1rem;">
    <img src="/images/bacteria_1_.png" alt="Bacteria" width="80" height="80" style="flex-shrink: 0;"/>
    <div>
      <strong>About This Page:</strong> This page is an internal document with some information regarding the syringepump Open-Source project. If you found this at random, this probably doesn't matter to you.
    </div>
  </div>
</sl-alert>
{:/nomarkdown}

**Note**: I am also working on a *separate* Covid-19 project, so I can't be 100% on this to help, but I'll do my best.

**Note**: The [OpenTrons](https://opentrons.com/) project already uses Smoothieboard to manipulate syringes, and we added quite a bit of syringe-handling-related code to Smoothieware for them.

## Technical Stuff

### Torque/Stall Detection

#### Trinamic Drivers Stall Guard

The original plan was to use Trinamic driver's "stall detection" feature. However, community feedback suggests that stall detection is unreliable, with many false triggers. Therefore, **this likely shouldn't be used for this syringe project**.

#### Encoders

##### Rotary Encoders

Rotary encoders on the stepper motor's axis could detect stalls, but there is currently no code within Smoothieware to support rotary encoders.

##### Linear Encoders

Linear encoders read the position of something along a line. However, there is no code to support these either.

##### Digital Calipers

Chinese digital calipers are cheap and have a data interface. Support for these could be implemented into Smoothie with less coding than "actual" encoders. This requires coding and possibly funding.

#### Force Sensor

A Force Sensitive Resistor between the screw's nut and the syringe's butt could measure force and detect over-pression events. This is the recommended solution as it requires the least work and time to implement.

#### Endstop

An endstop is essential for detecting when the syringe is empty and for homing. Mechanical endstops are recommended for their reliability.

### Smoothieboard

Smoothieboard is a good fit for this project. It has multiple stepper motor drivers, endstop inputs, and analog inputs. A special bill of materials could be created to reduce costs.

For the supply of Smoothieboards, there are several options:

1. Use the current stock of 250 Smoothieboards, adding Ethernet components manually.
2. Produce boards locally in France with a special BOM.
3. Use counterfeit versions of Smoothieboard from China, though they are unsafe and ethically problematic.
4. Get Smoothieboards produced in China using the normal process, which would take 3 to 4 weeks.

### Web GUI Control

Smoothieboard can serve a web interface via its Ethernet port. This would be the simplest and fastest way to design a control interface for medical personnel.

### Liquid Pressure Sensor

A pressure sensor could be added to the output of the syringe to detect the pressure of the liquid being injected. This would allow the system to detect if everything is alright.

### Safety

Smoothieboard was not created as a safety-critical system. It is stable and well-crafted but has not been tested for medical use.

### The Plan

A proposed plan for auto-syringes includes designing a special version of Smoothieboard, producing boards en-masse, testing solutions for torque detection, developing a web interface, and mass-producing the machines.

### Comparison of Options

Pros and cons for different options are presented to help with decision-making.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/screenshot_from_2020-04-06_23-50-41.png">
    <img src="/images/screenshot_from_2020-04-06_23-50-41.png" alt="Comparison" style="width: 100%; max-width: 800px; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

The full comparison spreadsheet can be found at: [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1UT5zNyo1xt-qPeB4LfyTRXMTwKU8H6BDeTEF9So0A3E/edit?usp=sharing).

### Foreseen Issues

* I2C on the calipers: The calipers communicate via I2C, which isn't suitable for long wires. A UART-to-I2C circuit board will need to be designed or sourced.

### Todo
