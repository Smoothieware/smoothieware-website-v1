# Munich Maker Lab custom CNC router

Research capture: 2026-09-23. Status: wiki-grounded historical-build dossier; integration and whole-repository deduplication pending.

## Identity, revision and deduplication

Named custom machine in Munich Maker Lab’s archived CNC router build, with v1.1 material dated 2021-04-09 and later page edits. This is **not** the Genmitsu machine currently listed elsewhere at the lab. Its CSMIO/IP-M/Mach3 arrangement does not make it the atlas’s generic Mach3 parallel-port profile. A shared control program is not a shared machine identity. Count the named physical build once; controller changes are revisions, not additional machines.

[Archived build page](https://wiki.munichmakerlab.de/wiki/Archive:CNC_router_build) (observed oldid 9625). Community records combine historical wiring and later modifications; current physical conformity is **unknown**.

## Machine and control facts

The wiki describes Mach3 with replacement CSMIO/IP-M, three 70 V / 400 W motor supplies, a 24 V-release Z brake, and water-cooled ER20 spindle rated 2.2 kW, 8000–24000 rpm with HY02D223B drive. Setup, driver and safety-circuit details must remain installation-specific. This record does not establish a complete safe operating procedure. [Build source](https://wiki.munichmakerlab.de/wiki/Archive:CNC_router_build).

## Documented motor and spindle contacts

| Connector / circuit | Pin → signal | Direction / polarity | Electrical scope |
|---|---|---|---|
| X motor | 1 U; 2 V; 3 W; 4–6 NC | Driver to motor; phase sequence only | Connector view/type and contact ratings unknown |
| Z motor | 1 U; 2 V; 3 W; 4 NC; 5 brake brown; 6 brake white | Motor phases and brake; brake polarity unknown | Wiki states 24 V releases brake; no connector rating |
| Spindle | 1 U; 2 V; 3 W; 4 PE | Drive phases; protective earth is separate | Cable 1/2/3 to VFD U/V/W; PE to E, as recorded |

Here **NC means no connection** in the motor table; it does not mean normally closed. The connector mating/solder viewpoint is **unknown**, so do not rotate or mirror this text into a wiring instruction. Phase power, brake power and protective earth must remain distinct. [Source contact tables](https://wiki.munichmakerlab.de/wiki/Archive:CNC_router_build).

## Pendant contact map

| Contact | Source signal/function | Direction / polarity / limits |
|---|---|---|
| 1 | GND | Reference; relationship to chassis/PE unknown |
| 2 | +5 V | Pendant supply; permissible current unknown |
| 3, 4, 5, 6 | A+, B+, A−, B− respectively | Encoder to controller; receiver compatibility unknown |
| 7, 8 | E-stop contact 1, contact 2 | Contact pair; whole protective circuit unknown |
| 9, 10 | LED+, LED− | Indicated polarity; source gives 20 mA, drive circuit unknown |
| 11 | COM | Selector common; not proven equivalent to GND |
| 12, 13, 14, 15 | X, Y, Z, fourth axis | Selector contacts to COM when enable pressed |
| 16, 17, 18 | ×1, ×10, ×100 | Increment-selector contacts to COM when enable pressed |

The wiki reports encoder levels slightly below 5 V and an NC E-stop switch. That does not establish any required safety category or permission to bypass it. Connector type, mating-face designation, pin current ratings, shield termination and isolation are **unknown**. [Pendant prose/table](https://wiki.munichmakerlab.de/wiki/Archive:CNC_router_build).

### Pendant visual transcription

[Original wiki diagram](https://wiki.munichmakerlab.de/images/c/cc/CNC_Handwheel_Pinout.png) · [Retained original](images/munich-pendant.png) · [White-background viewing copy](images/munich-pendant-view.png).

The image contains a circular 18-contact connector and a key notch at 12 o’clock. Rows read left to right, top to bottom: `1 2`; `3 4 5 6`; `7 8 9 10 11`; `12 13 14 15`; `16 17 18`. It contains contact numbers, not the signal names above; those came from wiki prose. Mating versus solder-side view is unlabelled. The original transparent image is retained unchanged; the white background is only a viewing aid. Ownership/reuse rights remain with the source.

## Removed endstop connector — historical evidence only

The wiki explicitly says the RJ45 arrangement was removed on **2020-07-09**, with endstops subsequently connected directly to the CSMIO/IP-M. Its historical table is:

| RJ45 contact | Recorded historical signal |
|---|---|
| 1, 2 | Z−, Z+ |
| 3 | VCC 5–24 V |
| 4 | Y− |
| 5 | GND |
| 6 | Y+ |
| 7, 8 | X+, X− |

The same page lists general sensor colors brown VCC / blue GND / black signal, but X uses brown VCC / green GND / white signal. These are **installation-specific annotations**, not universal sensor standards. Exact sensor models, present terminal numbers, output type and active polarity remain **unknown**. The broad 5–24 V statement must not be applied to unidentified replacement sensors. [Historical source](https://wiki.munichmakerlab.de/wiki/Archive:CNC_router_build).

## Conflicts, usage and integration gate

Do not merge removed RJ45 wiring, replacement drivers and later CSMIO terminals into a fictional current schematic. A complete current setup/homing/limits configuration is not established. Parent validation should obtain a dated wiki schematic and connector-face photograph before any proposed reconnection; this dossier authorizes no live wiring, mains intervention or protective-circuit alteration.

All frozen atlas labels and prior controller leads were checked: this named custom build is absent. Other repository documentation and concurrent research were not inspected. If the parent interprets “100 machines” as commercial models only, retain this as a useful extension and exclude it from that stricter count.
