# OSE CNC Torch Table v19.10

## Identity

OSE's wiki describes a CNC torch table built around a modified 1-inch Universal Axis. The genealogy lists a built v19.10 generation, a v19.06 concept that was not built, and a later v21.08 build; this file is scoped to v19.10.

## Wiki evidence

- [OSE CNC Torch Table v19.10](https://wiki.opensourceecology.org/wiki/CNC_Torch_Table_v19.10): mechanical CAD, components, firmware notes and build images.
- [OSE CNC Torch Table](https://wiki.opensourceecology.org/wiki/D3D_CNC_Torch_Table): genealogy and system overview.

## Machine and operation

The wiki describes an oxy-fuel or plasma torch table for cutting large/detailed parts. Its v19.10 page lists NEMA 23 motor interfaces, TB6600 stepper drivers, a 12 V supply for motors/solenoids, solid-state relay, gas solenoids and a RepRapDiscount Smart Controller. The page links a detailed LCD/controller and endstop model and gives Marlin firmware notes, including workarounds for absent temperature sensors. These notes are revision-specific and should not be used to bypass a safety or temperature interlock on other hardware.

## Pinout and diagrams

The v19.10 page names RAMPS 1.4, a ReprapDiscount Smart Controller, TB6600 stepper drivers, an SSR, a 12 V supply and the gas solenoids, but its linked component files are CAD models and do not expose a numbered system connector schedule. The associated [electronic-system overview](https://wiki.opensourceecology.org/wiki/D3D_CNC_Torch_Table) is not a revision-matched pin map. A separate [StepperNug interface schematic](https://wiki.opensourceecology.org/images/1/17/Steppernuginterface.pdf) describes a different controller interface; it is excluded, as are the 2021 v21.08 machine and unbuilt v19.06 concept. No v19.10 physical contact positions, GND/supply/signal cavity assignments, DB25, or two-ended connection are admitted. The diagram therefore retains zero machine-side pins/routes/guesses and shows every SmoothieBox exterior contact as OPEN.

## Variant warning

The 2021 v21.08 machine and unbuilt v19.06 concept are separately named by the genealogy. Do not treat their wiring as identical to v19.10.
