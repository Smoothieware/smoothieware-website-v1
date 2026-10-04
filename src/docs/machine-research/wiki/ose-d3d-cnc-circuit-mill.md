# OSE D3D CNC Circuit Mill

## Identity

The OSE D3D CNC Circuit Mill uses the D3D Universal Axis platform strengthened/configured for PCB contact milling. The wiki distinguishes a 2018 build from a 2019 D3D Universal printer conversion, and mentions earlier pre-Universal-Axis concepts; this dossier covers the D3D Universal-axis machine.

## Wiki evidence

- [OSE D3D CNC Circuit Mill build instructions](https://wiki.opensourceecology.org/wiki/D3D_CNC_Circuit_Mill_Build_Instructions): first-run electrical setup and axis-direction commissioning.
- [OSE GVCS Home List](https://wiki.opensourceecology.org/wiki/GVCS_Home_List): genealogy, assembly/cut list, PCB-holder and spindle model files.
- [OSE circuit-mill model file page](https://wiki.opensourceecology.org/wiki/File%3AD3D_Circuit_Mill.fcstd): CAD file history and machine image usage.

## Operating/build information

The wiki's first-run sequence calls for 12 V and 48 V supply connections, RAMPS-board power, relay signal, USB to host, height probe wiring, relay switching test, dual X-stepper setup and direction verification. It says to run motion and calibration-code checks before milling. The wider build notes list frame drilling, belts/rods, bed, electronics mounting, spindle and PCB holder steps.

## Pinout and diagram transcription

No complete RAMPS contact map appears in the cited build excerpt. The parent machine page names a separate `File:D3D Circuit Diagram.odg`, but the MediaWiki file lookup returned HTTP 403 and the diagram bytes were not recovered or inspected. The text explicitly warns to test relay polarity (high-side versus low-side switching) and specifies a height probe and split X motion, but gives no numbered pin assignments. Do not infer contacts from the generic RAMPS label, nor from the unavailable ODG filename. Transcribe that exact v19.10 file if recoverable before assigning machine-side positions.

## Visuals and limits

The wiki has a versioned CAD assembly and photos of axis conversion components. Genealogy distinguishes the 2018 build from a later printer conversion; do not combine their electrical or mechanical assumptions.
