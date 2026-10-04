# eman5oh’s Bridgeport Boss 5 LinuxCNC conversion

**Machine identity:** eman5oh’s individual Bridgeport Boss 5 knee mill, bought locally after the owner considered a smaller G0704. This is the owner’s particular machine and conversion; forum respondents discuss their own Boss mills and are kept separate below.

**Novelty check:** On 2026-09-23, searches for `eman5oh`, `Bridgeport Boss 5 Retrofit`, and the forum topic ID across repository Markdown and HTML found no matching dossier, including the local atlas and wiki dossier directory.

**Reported state:** In August 2016 the owner described this machine as running after a LinuxCNC conversion using its original stepper motors. The post does not document a particular cut or provide performance measurements. An August follow-up frames spindle encoder/tapping and AC servo upgrades as future ideas, not completed features.

## Owner-reported configuration

| Area | Reported detail | Limits |
|---|---|---|
| Motion | Original machine stepper motors retained; Gecko drives added. | Motor/drive models, axis assignments, step scales, voltage/current settings, and wiring are not provided. |
| Drive power | Owner says the supply uses the machine’s original transformer and capacitors. | No voltage, rectifier/filter schematic, fuse ratings, or inspection of the old supply is supplied. |
| Spindle | Spindle run through a VFD. | VFD make/model, motor ratings, speed range, control interface, and whether the owner’s planned pulley changes were completed are unspecified. |
| Motion/control interface | Mesa 5i25 with 7i76; LinuxCNC; touchscreen; Gmoccapy. | Firmware, daughterboard configuration, connector/pin map, LinuxCNC version, and HMI settings are not shown. |
| Spindle/tooling | Owner identifies a Kennametal Quick Change 30 spindle and says he was collecting holders. He says the spindle has a through-hole, while noting it may not be factory-original because the mill had been apart before purchase. | Tool-retention details and exact spindle revision are not verified. Forum replies about Universal Quick Switch and Erickson spindles describe other machines. |

## Use and retrofit notes

The owner’s stated reason for choosing this Boss 5 over a G0704 was that it cost less and seemed more capable. He notes the quill-based Z arrangement as a limitation but considers it offset by knee adjustment and greater Y travel. He planned to remove the variable drive and use fixed high/low pulleys with the VFD, and to add a spindle encoder for tapping; the inspected thread does not confirm either change. No safe operating procedure, homing method, tool-change routine, or cut settings are published.

## Forum visuals

The original forum post links a Google Photos album showing machine-moving and retrofit stages. Because the album is outside the forum, it is not used as evidence here and its images were not inspected. The thread itself has no embedded wiring diagram in the inspected page. See the [original LinuxCNC forum thread](https://forum.linuxcnc.org/show-your-stuff/31349-bridgeport-boss-5-retrofit) for the owner’s album link and later clarifications.

## Pinout and safety limits

No 5i25/7i76 connector map, Gecko input/output mapping, VFD terminal assignment, E-stop chain, homing/limit wiring, spindle-enable circuit, or cabinet schematic is provided. The owner says the converted machine was running, but that is not evidence that an inferred wiring scheme is correct. Treat this dossier as a record of a successful reported conversion, not a wiring or commissioning guide.

## Source

1. LinuxCNC Forum, eman5oh, [“Bridgeport Boss 5 Retrofit”](https://forum.linuxcnc.org/show-your-stuff/31349-bridgeport-boss-5-retrofit), owner posts dated 2–3 August and 7 August 2016. These posts establish the reported running conversion, retained steppers, Gecko drives, reused transformer/capacitor supply, VFD spindle, Mesa 5i25/7i76, Gmoccapy touchscreen, stated spindle tooling, and future-work caveats. Later forum discussion about other people’s mills is excluded from the machine facts.
