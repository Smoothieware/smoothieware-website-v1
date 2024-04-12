
# Votre guide d'installation de Smoothieboard dans une Fraiseuse CNC

![CNC Mill Icon](/images/external/http.chibidibidiwah.wdfiles.com.local.files.start.icon.cnc.mill.round.big.png)

Bien que moins courante qu'une imprimante 3D "Smoothiefiée", une fraiseuse à commande numérique est relativement aisée à "Smoothiefier".

Ceci est un guide pas à pas de connexion de votre carte aux différents composants de la fraiseuse CNC et de configuration complète, du début jusqu'à effectivement usiner de la matière.

Ce guide est un effort de la [communauté](http://smoothieware.org/irc), et cette page est un wiki. Toute aide étant bienvenue, n'hésitez pas à [l'éditer](#_editpage) pour en corriger les erreurs et y ajouter des informations.

![Smoothieboard Fritzing](/images/external/https.raw.githubusercontent.com.bouni.smoothieboard.graphics.master.smoothieboard.fritzing.png)

- [Unboxing](unboxing.md)
- [Warning](warning.md)
- [Logic Power](logic-power.md)
- [Main Power Input](main-power-input.md)
- [Stepper Motors](stepper-motors.md)
- [Guide Endstops](guide-endstops.md)
- [Spindle Control](spindle-control.md)

## CNC firmware

Smoothie firmware tries to create a single firmware for all types of machines (you then adapt the firmware to your machine type by changing the configuration).

However, due to lack of flash space on the v1 hardware, the v1 Smoothie firmware has an optional special "CNC" build.

It includes:
- A special CNC version of the [Panel](http://smoothieware.org/panel) screens
- `grbl_mode` enabled by default
- The Spindle module

You will find information on flashing the firmware [here](http://smoothieware.org/getting-smoothie).

## Appendixes

### Drilling canning cycles

Smoothie now supports drilling canning cycles, using the [Drillingcycles module](drillingcycles.md)

However, if you do not want to use the module, there are solutions to convert those into "normal" G-codes:
- [Online converter](http://www.onlfait.ch/CCDCC.js/) to convert your files
- Another [Online converter](http://drillsconversion.appspot.com/#)
- [Python script](https://github.com/garciasa/grbl-drills-cambam/blob/master/convertDrills.py)
- If you are using Cambam you can use [this post-processor script](http://chibidibidiwah.wdfiles.com/local--files/cnc-mill-guide/SmoothiePCB.cbpp)

- [General Appendixes](general-appendixes.md)

## Troubleshooting

If you run into trouble, something doesn't work as it should, head over to the [Troubleshooting](troubleshooting.md) page for a list of common problems and means of diagnosis.

You can also contact the [Community](http://smoothieware.org/irc) for help if you can't find an answer in the documentation.

## bCNC configuration

- [bCNC](bcnc.md)

## FAQ

**I have a Shapeoko 2 Desktop CNC Mill and the Y axis has 2 steppers on the same driver, will that work?**  
The drivers can only handle up to 2 amps (cooling might be required at 2 amps). If you are using NEMA 17 steppers, you should be fine (might want to bump up the amperage to something like 1.8A). NEMA 23 motors typically pull more amperage than a single driver can handle, you are going to want to separate the Y axis steppers out on separate drivers. See the next section for details.

## Configuring further

The defaults in the config file are sufficient for testing. You'll probably want to turn down the acceleration, however. Depending on your machine type, a good recommendation is 25mm/second^2.

You'll also want to disable the `extruder_module`, `laser_module`, `temperature_control.hotend`, and `endstops` if you don't use their respective functions.

## Testing

You should be able to connect and issue [Gcode commands](supported-g-codes.md) to your CNC mill with Pronterface. This'll allow you to jog your motors and see whether you've wired and configured everything correctly.

## Software

- [Software](software.md)
