
# List of Events for Modules in Smoothie

This is a list of all the events that a Module can register for in Smoothie.

These events allow modules to respond to various system activities and communicate with each other.

| Name                    | Called from                                         | Description                                                                                   | How to cast the argument                                                                                   |
|-------------------------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `ON_MAIN_LOOP`          | `/main.cpp`                                         | Called in a loop in main(), all G/M commands must be executed or issued in this event.        | no argument                                                                                                |
| `ON_CONSOLE_LINE_RECEIVED` | `/modules/communication/SerialConsole.cpp`       | Called every time a new line is received on the default Serial Console, with the line as a parameter | `SerialMessage new_message = *static_cast<SerialMessage*>(argument); string received = new_message.message;` |
| `ON_GCODE_RECEIVED`     | `/modules/communication/GcodeDispatch.cpp`          | Called every time a new G code is received, with the Gcode object as a parameter              | `Gcode* gcode = static_cast<Gcode*>(argument);`                                                            |
| `ON_IDLE`               | `/main.cpp`                                         | ???                                                                                           | ???                                                                                                        |
| `ON_SECOND_TICK`        | `/libs/SlowTicker.cpp`                              | ???                                                                                           | ???                                                                                                        |
| `ON_GET_PUBLIC_DATA`    | `/libs/PublicData.cpp`                              | Allow communication of data between modules. Module A can get data from B by providing checksums identifying Module B and the desired data. | `PublicDataRequest *pdr = static_cast<PublicDataRequest *>(argument)`                                      |
| `ON_SET_PUBLIC_DATA`    | `/libs/PublicData.cpp`                              | Allow communication of data between modules. Module A can set data from B by providing checksums identifying Module B and the data to set up. | `PublicDataRequest *pdr = static_cast<PublicDataRequest *>(argument);`                                     |
| `ON_HALT`               | `/modules/utils/killbutton/KillButton.cpp` (As well as Endstops, SerialConsole etc.) | ??? | ???                                                                                                        |
| `ON_ENABLE`             | `/modules/robot/Robot.cpp` `/src/modules/robot/Conveyor.cpp` | ??? | ???                                                                                                        |
| `NUMBER_OF_DEFINED_EVENTS` | n/a                                               | Only used to enumerate the events.                                                           | no argument                                                                                                |
