# Makerbase MKS DLC32 V2.1 source-revision boundary

Checked 2026-09-26 for atlas profile `base-22` against the [Makerbase hardware repository](https://github.com/makerbase-mks/MKS-DLC32/tree/main/MKS-DLC32-main/hardware/MKS%20DLC32%20V2.1_003) and its [hardware-wiring wiki](https://github.com/makerbase-mks/MKS-DLC32/wiki/Hardware-Wiring).

The `MKS DLC32 V2.1_003` directory includes files named `MKS DLC32 V2.1_003 PIN.pdf` and `MKS DLC32 V2.1_003 SCH.pdf`. Their **printed title blocks differ from those filenames**:

| Repository file | Printed title-block revision | Download SHA-256 | Scope |
| --- | --- | --- | --- |
| [PIN.pdf](https://github.com/makerbase-mks/MKS-DLC32/blob/main/MKS-DLC32-main/hardware/MKS%20DLC32%20V2.1_003/MKS%20DLC32%20V2.1_003%20PIN.pdf) | V2.1_002, dated 2021-11-20 | `74df2a59f5fcd9ab3316817b8aab2b174f909e49a6058c4666b5a0361511b0cd` | One A4 board pin-location drawing. |
| [SCH.pdf](https://github.com/makerbase-mks/MKS-DLC32/blob/main/MKS-DLC32-main/hardware/MKS%20DLC32%20V2.1_003/MKS%20DLC32%20V2.1_003%20SCH.pdf) | V2.0_001, first page dated 2021-10-15 | `83a85be20dcc773fef965d17d3095047f4c8c47bbd97a03b8489f16837720b1b` | Nine-page schematic collection, visibly a different printed board revision. |

The pin drawing shows board-side X, Y1, Y2 and Z motor outlets, laser TTL, power, probe, endstops and expansion header labels. The repository location alone does not establish that every pictured connector and electrical contract matches an installed V2.1_003 board. The schematic's printed V2.0_001 revision makes it especially unsuitable for assuming V2.1_003 electrical behavior. Preserve the current atlas group-level OPEN diagram until a board-identifying photo and revision-matched pin source are reconciled. Neither board output terminals nor motor phases are direct SmoothieBox STEP/DIR inputs.
