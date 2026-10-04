# Kevin Krieger’s MPCNC build in Canada: 36 V supply fault and first motion

**Machine identity:** Kevin Krieger (`Kevinjkrieger`)’s individual V1 Engineering MPCNC build, documented from 2023 into April 2024. The thread centers on damage during initial controller bring-up and recovery to first motion. An earlier, different small router design described in the thread was abandoned before assembly and is not counted as another machine here.

![Owner-posted close-up associated with the update reporting first movement](https://us2.dh-cdn.net/uploads/db5587/original/3X/9/6/96bd1b8c6a7d428eb0554c58031a5d2a483f8723.jpeg)

*Forum photograph visually shows a close-up of a controller PCB with components and labels. It is not a wiring schematic or a legible connector-contact map, and it cannot establish the machine’s complete pinout.*

## Owner-reported build and incident history

- On April 8, 2024, the owner described an MPCNC project begun after finding V1 Engineering in 2023. He reports that he printed the parts on a Prusa i3 MK3S and decided on the SKR Pro v1.2 bundle from the V1 store.
- He says he reused a power supply he already had, rather than purchasing the bundle’s supply. During initial electrical testing he mistakenly used a 36 V supply instead of 24 V. He reports smoke and damage while powering the board.
- The owner’s forum post identifies TMC2209 motor drivers and states that he had jumpered the board’s input voltage to the motor-input voltage. His post discusses his own diagnosis of possible damage to the power-conversion stage, 7812 regulator, drivers and 3.3 V rail. These are his reported observations and hypotheses, not a verified teardown or general electrical reference.
- He says he removed the identified SGM6130 converter and tried powering the board from USB after changing the supply jumper; the screen powered but he observed another component smoking. He then tested the rail for continuity while power was off, removed the 3.3 V regulator and several other components, and eventually concluded the remaining repair exceeded his skills.
- The owner says he purchased another SKR Pro board. He reports that the old drivers and TFT screen still worked with it, and that he achieved first movement on April 8, 2024. The replacement board’s exact revision and the setup used for first motion are not stated.
- The forum thread does not report a completed cut, routed part, work area or accuracy measurement. Do not describe it as machining-proven from the available posts.

## Controller evidence and gaps

| Item | Forum evidence | Limit |
|---|---|---|
| Motion-control board | Owner specifies the V1 store SKR Pro v1.2 bundle and later buying another SKR Pro board after the fault. | Exact replacement-board revision, MCU/firmware configuration and final wiring are not given. |
| Drivers and display | Owner identifies TMC2209 drivers and says the original drivers and TFT screen functioned with the replacement board. | Driver-current/microstep settings, motor pairings, TFT model/revision and connector contacts are not stated. |
| Input power | Owner reports an unintended 36 V supply where he meant to use 24 V, and says the motor-supply jumper was set to take input voltage. | The forum account is not a complete board schematic; supply wiring, polarity, protective devices and measured voltages at specific connectors are not documented. Treat the values as his incident description, not a recommended setup. |
| Repair state | New board enabled reported first movement; old drivers and display were reportedly reusable. | No full post-repair inventory, axis test record, homing result, machining test or final enclosure information is supplied. |

**No connector pinout can be reconstructed from the thread.** It documents a serious supply-selection mistake and the builder’s troubleshooting, not a validated wiring procedure. A separate reply discusses another user’s TB6600/RAMPS setup; those details do not belong to Kevin’s machine and are intentionally excluded.

## Forum source

V1E.com Forum, Kevin Krieger (`Kevinjkrieger`), [“ZAP! Don’t do what I did — MPCNC build in Canada”](https://forum.v1e.com/t/zap-dont-do-what-i-did-mpcnc-build-in-canada/43337), owner post dated April 8, 2024 (post 1). It establishes the 2023 build chronology, SKR Pro v1.2 selection, TMC2209 drivers, owner-reported 36 V incident, board troubleshooting and first motion. Only that owner post is used for this machine’s technical claims; later responses describe other builders’ equipment.

## Novelty and scope

Searches of repository Markdown and HTML for `Kevinjkrieger`, `Kevin Krieger`, `ZAP! Don't do what I did`, and the thread ID found no matching dossier. The thread’s 2012-era plywood/acrylic router concept is explicitly described as shelved and frustrating, with no completed machine; it is excluded. The dossier counts only the later MPCNC build, and the text search is a candidate-level novelty check rather than proof against all aliases.
