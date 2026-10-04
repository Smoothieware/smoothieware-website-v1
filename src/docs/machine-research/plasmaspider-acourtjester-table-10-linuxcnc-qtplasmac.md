# acourtjester’s plasma table #10 with LinuxCNC and QTPlasmaC

**Machine identity:** Tom (`acourtjester`)’s tenth home-built plasma table, documented as a new build in the PlasmaSpider forum from November 2022 into January 2023. The owner says the moving X/Y/Z assemblies and controller were prepared before the base, and that parts were transferred from another table during assembly. His forum signature describes a separate 4 × 4 plasma/router table; those signature details are not attributed to table #10 here.

**Novelty check:** Repository search on 2026-09-23 for `acourtjester`, `Nearing the finish of table #10`, and `QTPlasmaC 1.0.43` found no matching per-machine dossier. This is a separate physical build record; the owner explicitly describes it as a new table.

**Build/use state:** The table was functional for basic tests while completion work continued. By 17 November 2022 the owner reported a quick power-up where the motors turned and E-stop worked; on 1 December the home/limit switches and an Ohmic sensor had tested successfully. In that update the owner still needed to configure the THCAD for the THC option. The inspected thread does not establish a completed plasma cut by this table.

## Owner-reported control configuration

| Area | Reported state | Limits |
|---|---|---|
| Motion/controller board | Mesa 7i76E, connected to the PC over Ethernet. The owner says Mesa provides flexible IO and reports selecting two add-on boards for THC and Ohmic sensing. | Add-on board models and connector/terminal mapping are not named. Axis and IO assignments are not published. |
| Control software | LinuxCNC with QTPlasmaC. The owner reports Debian 10 “Buster 2.9” and QTPlasmaC 1.0.43 in a November 2022 update, then QTPlasmaC v1.233.253 on 4 January 2023. | These are historical versions reported in the thread, not current version recommendations. |
| Motion assemblies | X/Y/Z moving assemblies and a controller had been built before the base and were temporarily on another table while the LinuxCNC cabinet was set up. Owner reports motors turning during the quick power-up. | Motor/drive models, axis layout, travel, frame dimensions, and exact status after the transfer are not specified. |
| Home and limit | Owner reports that home/limit switches were working by 1 December 2022. | Switch type and individual input assignments are not given. |
| Torch sensing | Owner says an Ohmic sensor was wired and tested OK. The owner planned a magnetic breakaway torch holder and a 3D-printed floating-head switch. | The post does not identify the Ohmic module or show the sensor circuit. The printed holder/switch are described as intended components, not confirmed installed final hardware. |
| Torch height control | Owner says a THCAD card still needed configuration for THC. An earlier post says an add-on board was selected for THC; a January update says the owner was using one THC encoder and had not loaded newer Mesa firmware. | No arc-voltage scaling, divider, input pin, or final operating test is provided. THC completion remains unverified in the thread. |
| Plasma source | The inspected thread does not identify the plasma cutter used specifically on table #10. | Do not borrow the Powermax PM65 listed in the owner’s forum signature; the signature is not tied to this build. |

## Integration history and caveats

The owner describes welding the base on a rotisserie after constructing the moving axes and controller. On the first reported power-up after painting and mounting parts, the motors turned and the E-stop functioned. Later, the owner worked through LinuxCNC/QTPlasmaC configuration and reported functioning home/limit inputs and an Ohmic sensor, while THC still needed configuration. The owner also says the controller had first been tested with the moving Y/Z assemblies on another table; the thread does not give a full wiring or software migration history.

Other participants discussed LinuxCNC/HAL and their own Mesa/THCAD/Ohmic configurations. Those comments describe other users’ equipment and are not used as this machine’s settings.

## Forum visuals

The opening build post and November update include workshop and machine photographs, but the forum image attachments could not be downloaded in the research pass (the page reported that download access was unavailable). They remain visible from the [original thread](https://www.plasmaspider.com/viewtopic.php?t=34614); their pixels have not been inspected here.

## Pinout gaps

This thread identifies a Mesa 7i76E and the broad control concepts, but it does not provide a connector or terminal map, board jumper/firmware details, step/direction wiring, limit input assignments, Ohmic probe circuit, E-stop chain, floating-head switch circuit, THC signal wiring, or final plasma-source interface. Its control evidence is useful for build history, not sufficient for wiring reproduction.

## Source

1. PlasmaSpider DIY Plasma Table & Accessory Discussion Forum, Tom (`acourtjester`), [“Nearing the finish of table #10”](https://www.plasmaspider.com/viewtopic.php?t=34614), posts dated 15 November 2022 through 4 January 2023. Owner posts 1, 5, 9, 11, and 13–15 provide the new table identity, LinuxCNC/Mesa/QTPlasmaC decisions, staged assembly, quick motor/E-stop test, version reports, home/limit and Ohmic testing, and unfinished THC configuration. Other members’ hardware and setup comments are excluded from this machine’s facts.
