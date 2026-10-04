# drdonkeypunch's 600 × 580 mm MPCNC Pen-Testing Build

**Machine identity:** V1E user `drdonkeypunch`'s individual MPCNC, discussed in the “MPCNC Accuracy” thread in April 2017. This is a separate build from the thread starter's machine: a different owner, 600 × 580 mm stated workspace, exceptionally thick conduit, and separate test results.

**Commissioning/use state:** The owner said he had built for about a week after receiving hardware. He had not mounted a spindle yet and was running pen tests. In the cited posts he expressed uncertainty about whether the paired gantries stayed square under motion and reported inconsistent paper test results. The thread does not document a later confirmed fix or a completed milling job.

**Novelty check:** On 2026-09-23, repository Markdown and HTML were searched for `drdonkeypunch`, `600x580`, the 25 mm / 5 mm wall conduit, and the machine's square/circle test statements. No matching dossier was found. This record is not the `andy1989` build from the same forum thread.

## Build and physical configuration

The owner described the machine as a standard build using the forum shop's hardware and parts he printed himself. He reported 25 mm conduit with a 5 mm wall, unusual wall thickness for the conduit he obtained. The stated work area was 600 × 580 mm. He modified the tool mount by drilling and tapping the Z-axis conduit so the tool mount could be screwed directly to it. He also added a thin aluminum member across the Y-axis gantries to carry a cable chain for the Z-motor cables. These details are owner-reported; the thread does not provide a complete mechanical drawing or exact conduit alloy/specification.

The owner worried that the gantry assemblies could sit at different positions on the conduit, potentially leaving one side 1–2 mm out of alignment. He said the legs and assembly appeared square, but the paired gantries did not always line up as expected. A forum respondent suggested checking and squaring the gantry before each job; this is advice, not evidence that the owner adopted or verified that practice.

## Pen tests and observed variation

Before mounting a spindle, the owner drew a 120 × 120 mm square with a 100 mm-diameter circle, repeated it 20 times, and recorded four square sides plus two circle diameters on each sample. He reported 120 measurements, with 65.9% described as “perfection,” 18.3% at ±1 mm, and 15.8% at ±2 mm; he described maximum variation as ±2 mm and cautioned that paper and an uneven work surface could affect results. The thread does not define the exact classification rule behind those percentages, so they are retained as his figures rather than normalized into a statistical claim.

He later tried a 30 × 30 mm square with a 25 mm circle on graph paper and clamped a smoother plate over the work surface. He said a later pair of tests varied substantially even though he had changed the paper and test location rather than the machine setup. In another post he compared a plot from Repetier with a previously manufactured rack plate and reported that circles were incomplete or oval and a small square did not close. He suspected alignment or gantry behavior but had not established a cause.

These are pen-on-paper observations, not spindle-cut metrology. The owner himself noted that the paper might bulge and the work surface was uneven. No later source in the cited thread establishes a final diagnosis or resolution.

## Forum images reviewed

One photo shows the large frame and cable chain spanning the machine. It supports the machine's general mechanical arrangement but does not establish alignment or controller details. A second image shows the pen mounted to the tool holder. The third is an owner-posted paper test; its imperfect drawing illustrates the reported test context but does not independently measure machine accuracy.

![drdonkeypunch's MPCNC with cable-chain support across the machine](https://us1.dh-cdn.net/uploads/db5587/original/2X/b/b707cf982e5a4de0e7a7e15842f1f2f0d3c7af70.jpeg)

![Pen holder mounted to the MPCNC tool assembly](https://us1.dh-cdn.net/uploads/db5587/original/2X/d/d449609ca43afe570c2eb050596bfa85a1a9907a.jpeg)

![Paper test drawing posted in the accuracy discussion](https://us1.dh-cdn.net/uploads/db5587/original/2X/d/db6cbd84e18120252b23fe7546ca3703bf95e332.jpeg)

Local forum-image review-copy SHA-256 values (cable-chain view, pen holder, paper test): `575392a048badcf41c1c073c3b08f3c2019599131cd5e4c7b45dc23085247834`, `e0a53753f73eae3da2e7f2f7cf030608dba098a497ebf88dde7eb445d863c9a2`, `79fe8e6e9b987adba456a4f38d06980e5ffcdadcef241874417c21bb22ae5659`.

## Evidence limits

The thread does not identify the controller, firmware, motor/driver model, spindle, work-holding method, or connector assignments. No electrical diagram, wiring map, measured machine squareness, or confirmed resolution to the plotted-shape errors is supplied. The test-paper photos are not treated as pinout evidence or as a precision specification.

## Forum source

1. V1E.com Forum, `drdonkeypunch`, contributions in [“MPCNC Accuracy”](https://forum.v1e.com/t/mpcnc-accuracy/5711), posts 13–20, 16–23 April 2017. The owner reports the 600 × 580 mm work area, thick conduit, modifications, repeated square/circle tests, and later concerns about gantry alignment. The opener and separate test history from `andy1989` are not attributed to this machine.
