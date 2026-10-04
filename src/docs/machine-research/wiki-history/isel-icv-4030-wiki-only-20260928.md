# ISEL ICV 4030

Research status: wiki-sourced CNC mill dossier; exact model absent from the frozen atlas and exact-name repository search. Captured 2026-09-23.

## Identity and specifications

The FabLab Karlsruhe wiki identifies its machine as an ISEL ICV 4030 CNC. It records spindle speed 3000–24000 rpm, 300 × 400 mm travel, and a stated clamping diameter range of 1–6 mm. The source page is a local operating guide with a machine-specific parameter policy.

## Wiki-recorded workflow

- The wiki requires a course for independent use and says users must register in the user list.
- Estlcam is used to generate G-code; the wiki names a lab-maintained postprocessor and material-specific cutting-parameter lists. It states only machine mentors may edit these files.
- ProNC on the built-in computer controls the CNC.
- The startup notes say to use the machine’s underside switch, press “PC Start” and “Power” on the front, release the E-stop, sign in, reset/reference the machine, set and activate the work zero, then start a cut at 10% speed and confirm before increasing.
- Secure work carefully: the wiki sets a 30 N/mm² surface-pressure limit for the machine table and requires a support under clamps. Clean after milling; it explicitly disallows compressed air for cleanup.

The source is German; this is a concise translation/paraphrase. Consult the live wiki for updated operating rules.

## Connections and pinout

| Interface | Wiki evidence | Electrical map |
|---|---|---|
| E-stop | Front-panel emergency stop is released during startup; another wiki section describes shutdown using the E-stop | No contacts, polarity, voltage, or safety-circuit schematic given |
| Built-in PC / ProNC | Control program runs on the integrated computer | No connector or serial/Ethernet wiring assignments stated |
| Spindle / axes / reference switches | Their operation is implicit in the CNC workflow | No machine-specific pin assignments available on this wiki page |

## Visual evidence

No wiring diagram is included in the inspected operating-guide text. [FabLab Karlsruhe ISEL CNC guide](https://wiki.fablab-karlsruhe.de/doku.php?id=allgemein%3Aanleitungen%3Acnc-isel).

## Safety and limits

The wiki limits allowed materials and routes unusual materials, tools, or cutting parameters through machine mentors. It warns that setup mistakes can be costly. Model-specific controller revision, drive wiring, connector numbering, and electrical ratings remain unknown.
