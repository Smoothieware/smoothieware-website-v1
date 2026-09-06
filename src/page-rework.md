# Reworking a documentation page

Reworking a page means changing the route through the information while keeping the information, the author's voice, the useful odd details, and the public contracts intact.

It is not a rewrite from memory. It is not a summary. It is not an invitation to replace somebody's writing with standard technical-documentation prose.

The original page is the source material. Treat every sentence, warning, example, image, link, table row, caption, aside, joke, opinion, and rough-but-useful explanation as content until you have accounted for it.

## The hard rules

1. **Do not lose information.** Every useful fact from the original page must still exist in the reworked page unless the user explicitly approves its removal.
2. **Flavor is information.** Keep the author's jokes, asides, opinions, practical emphasis, candid limitations, and unusual turns of phrase.
3. **Reorganize before rewriting.** Move existing passages into a better order first. Rewrite only the joins and the parts that are wrong or genuinely unclear.
4. **A split is allowed; disappearance is not.** A long page may become a guide plus one or more focused reference pages. Account for every destination, link to it where the reader needs it, and verify that the moved material really exists there.
5. **Do not silently correct technical claims.** Verify the correction, make the new wording clear, and record what changed and why.
6. **Do not infer one firmware version from another.** V1 and V2 syntax, defaults, pins, and behavior need their own evidence.
7. **Keep public contracts.** Preserve the URL, useful anchors, edit links, images, downloadable files, and incoming-link targets unless the task explicitly changes them.
8. **Verify the assembled page.** Source files and includes are only ingredients. The rendered HTML is the page.
9. **Counts do not prove preservation.** Matching heading, paragraph, or link counts can still hide lost facts. Read the old and new pages side by side.
10. **If you cannot account for something, it is not safe to remove it.** Keep it and flag the uncertainty.

## What counts as information

Agents tend to preserve settings and commands while throwing away everything around them. That is how a technically correct page becomes worse.

The preservation inventory must include all of these:

- Definitions and factual claims
- Ordered procedures and prerequisites
- Safety warnings and failure consequences
- Troubleshooting symptoms and their likely causes
- Commands, parameters, outputs, and configuration examples
- Defaults, units, ranges, and version differences
- Board-specific and machine-specific caveats
- Images, diagrams, captions, and what each visual teaches
- Tables, including every row and meaningful column
- Links and the reason each link is useful
- Examples, even when another example appears to teach the same subject
- Notes about unsupported, uncertain, obsolete, or experimental behavior
- The author's recommendations and strength of opinion
- Flavor: jokes, asides, blunt warnings, enthusiasm, frustration, history, and practical commentary
- Existing anchors and other linkable targets
- Custom tags and their rendered behavior

If the author wrote, “It is quite convenient as it saves you the hassle of actually moving the machine into that position when you want to start a print. Automation is great,” keep it. The first sentence explains the practical benefit. The second gives the page a human voice. Neither is disposable.

## Flavor is not fluff

Smoothieware's documentation often sounds like somebody who has built the machine, broken it, fixed it, and wants to save you the same trouble. Preserve that.

Examples of flavor worth keeping include:

- “It's essentially just a switch.”
- “Automation is great.”
- “There are plenty of fun and futuristic endstop types around...”
- “This is far from perfect but it is a compromise...”
- Direct recommendations such as “Don't use anything else unless you have a very good reason to.”
- Parenthetical explanations that anticipate what a confused reader is thinking
- Honest notes that a feature may be awkward, old, risky, or not worth the trouble

Generic editing advice often says to remove adverbs, repetition, first-person language, jokes, and strong opinions. That advice is not authoritative here. The corpus is the style guide. A word such as “actually” may be filler in one sentence and part of Arthur's rhythm or emphasis in another.

Do not replace the examples above with prose such as:

- “This section provides an overview of endstop functionality.”
- “The input test above is the gate for motion.”
- “The written procedure is the source of truth.”
- “Use the option reference for exact settings.”
- “For most machines, begin with a mechanical microswitch.”

Those sentences may be tidy, but they sound generated because they flatten the author, announce the document structure, and use the same measured rhythm everywhere.

### Learn the voice before editing

Read the whole target page and at least three nearby pages written for the same audience. Make a small style fingerprint:

- Does the author say “you,” “we,” or both?
- How blunt are warnings?
- Does the author use short asides after long explanations?
- Which opinions recur?
- Which expressions or bits of humor feel characteristic?
- How are uncertainty and old information described?
- Does the author prefer a worked example over an abstract rule?

Keep representative original passages in front of you while editing. If a new paragraph could appear in any software manual, it probably does not match this site.

## Decide the page's job without amputating it

A page can have a main job and still contain reference, explanation, and flavor.

Choose the reader's main route:

- Learn the subject
- Complete a task
- Look up an exact value
- Understand a mechanism or design choice
- Diagnose a failure

Then arrange the existing material around that route. Put the first safe success path early. Put advanced choices and exhaustive reference after it. Do not delete the later material merely because it is not part of the first path.

Long pages are not automatically bad, and splitting one is not automatically good. A long page with a clear outline, strong headings, local summaries, and a predictable progression can work better than a short page that sends the reader through six tabs. On the other hand, a guide can be much easier to follow when an exhaustive option catalogue has its own properly named page. Decide from the reader's needs, not from a target word count.

### When a split works

A split is useful when the parts really have different jobs, for example:

- A first-time setup guide and an exhaustive setting reference
- A normal procedure and a large troubleshooting catalogue
- A general explanation and several board-specific pinout pages
- A short chooser and a detailed comparison table

The split is part of the rework, so it needs the same care as moving text within one page:

- Name each destination in the preservation ledger.
- Preserve the complete content at the destination, including examples, captions, links, warnings, and flavor.
- Link from the main page at the point where the reader first needs the material, not only from a list at the bottom.
- Say what is behind the link. “Complete V1/V2 setting table” is useful; “more information” is not.
- Give the destination a useful title, opening explanation, and way back to the guide when needed.
- Preserve old anchors or redirect them to the closest new destination.
- Check that a reader can complete the common task without tab-hopping.
- Render and verify every page created by the split.

A split has failed if content technically survives somewhere but a reader no longer knows that it exists. It has also failed if a paragraph becomes a link to a page that discusses the same subject but does not contain the original facts.

## Start with an assembled baseline

Do not inspect only the named Markdown file. Smoothieware pages often pull in several includes, and those includes may pull in others.

Before editing:

1. Resolve the permalink and the file that owns it.
2. Trace every direct and nested include.
3. Find every other page that consumes those includes.
4. Render the current page with the real Jekyll pipeline.
5. Save the rendered HTML and screenshots as the baseline.
6. Record the current headings, anchors, tables, code blocks, alerts, images, links, and custom elements.
7. Read the assembled page from beginning to end.

An include can be a reusable section or a miniature page. A fragment that injects its own H1 into six hosts has a heading-contract problem, but changing it in place may alter all six pages. Either update every host deliberately or create a page-specific fragment for an isolated pilot.

## Standalone pages and include fragments are one system

Many Smoothieware subjects appear in more than one reading context. A fragment may be included by its own small wrapper page, by a larger reference page, and by several machine guides. Reworking one subject must not quietly break the other contexts.

Before changing a shared fragment, make a consumer map:

| Fragment | Standalone wrapper | Other host pages | Heading supplied by | Links assume | Version context |
| --- | --- | --- | --- | --- | --- |
| Exact path | Exact path or none | Every direct and nested consumer | Fragment or host | Site root, wrapper, or host | Global, V1, V2, or mixed |

Then inspect each relationship:

- Does the fragment supply an H1, or does its wrapper supply one?
- Does its opening make sense halfway through a machine guide?
- Do relative links resolve from every rendered route?
- Are IDs duplicated when a host includes related fragments?
- Does wording such as “on this page,” “above,” or “next” remain true everywhere?
- Does the fragment depend on front matter, variables, styles, scripts, or version controls supplied by one particular host?
- Does the standalone wrapper give the fragment a title, introduction, and navigation which a larger host supplies naturally?

Prefer one reusable content fragment plus thin wrappers when the content truly has the same job everywhere. If the contexts need different ordering or substantially different introductions, do not fill the shared fragment with conditionals or awkward prose. Extract the genuinely shared blocks, then compose separate wrappers or page-specific fragments around them.

Never edit a shared include and verify only the page named in the task. Render its standalone route and every consuming guide. A clean Endstops page is not a successful rework if it gives the 3D-printer, laser-cutter, CNC-mill, or pick-and-place guide a second H1, a broken relative link, or instructions which no longer fit their place in the guide.

## Build a preservation ledger before writing

Create one row for every meaningful content unit. A unit can be a paragraph, alert, table, code block, image with caption, list, or small group of sentences that make one point.

Use these statuses:

| Status | Meaning |
| --- | --- |
| `verbatim` | Same wording and meaning remain on the reworked page |
| `moved` | Same content remains on the page in another section |
| `rephrased` | Wording changed, with every original fact and the original tone retained |
| `merged` | Duplicate passages became one passage; every unique detail and every old anchor remain |
| `corrected` | A verified error was replaced and the evidence is recorded |
| `qualified` | An over-broad claim now states its real scope |
| `split` | Content moved intact to a focused page, with an explicit destination and an in-context link |
| `removed-approved` | The user explicitly approved deletion |
| `unresolved` | The agent cannot yet prove what should happen; the content stays for now |

The ledger needs these columns:

| Original location | Content unit | Why it matters | New location | Status | Evidence or note |
| --- | --- | --- | --- | --- | --- |
| `file:line` | Short description or exact opening words | Fact, safety, voice, example, visual, link, anchor | `file:line` or planned heading | One status above | Source, reason, or approval |

There must be zero unaccounted units before delivery. A `split` row is preserved content, not permission to summarize or discard it. `removed-approved` requires actual user approval; an agent cannot approve its own information loss.

## Reorganize by moving blocks

The safest edit works like arranging cards on a table:

1. Split the assembled page into content blocks.
2. Label each block by reader need and dependency.
3. Put safety and prerequisites before dangerous actions.
4. Put the common successful path before branches.
5. Put symptoms next to the action that can produce them.
6. Put exhaustive tables after the first usable example.
7. Keep deep explanation close enough that the reader can find it without leaving the task.
8. Add headings and short transitions only after the old blocks have a home.

Copy the original block first. Edit it only after it sits in the right place. This prevents the common failure where an agent writes a clean new outline and then reconstructs the old knowledge from memory.

## Handle repetition without losing detail

Two passages that mention the same command are not necessarily duplicates. One may explain syntax while the other describes a failure symptom.

Before merging passages:

- List the factual claims in each passage.
- List the examples, warnings, and tone-bearing sentences in each.
- Keep every detail that appears in only one passage.
- Preserve all useful anchors, pointing them at the merged section.
- Read the result as a newcomer and as somebody returning to diagnose a problem.

For example, two Endstops sections discussed `M119`. Combining them made sense. Dropping “the axis moves a few millimeters and stops” did not; that sentence connects a visible homing symptom to an inverted input.

## Correct errors without erasing history by accident

Documentation rework often exposes old information that looks wrong. Do not fix it by intuition.

Use this order of authority:

1. Current firmware source and maintained configuration shipped with that firmware
2. Board schematics and board-specific pinout
3. Current project reference data
4. Tested behavior on the relevant firmware and hardware
5. Existing documentation, with conflicts recorded

For every correction:

1. Quote or record the old claim.
2. Locate evidence for the replacement.
3. Determine its scope: V1, V2, a board variant, a firmware mode, or a historical release.
4. Change only what the evidence supports.
5. Keep any useful explanation surrounding the old claim.
6. Add a qualification when several variants exist.
7. Record the correction in the ledger.

Never produce V2 syntax by renaming V1 keys. Never copy a pin table from one V2 board and present it as universal. Never assume a powered sensor uses 5 V because several familiar modules do.

## Preserve safety while improving order

Reorganization can make a page safer without deleting the old teaching material.

The Endstops page should prove the electrical input with `M119` before asking the reader to move a motor. That does not require removing the original description of a successful two-stage homing cycle or the symptoms of an inverted or unreadable switch. Move those descriptions to the controlled homing and troubleshooting sections.

For any page involving motion, heaters, mains voltage, lasers, spindles, pressure, or high current:

- Put the harmless test before the hazardous one.
- State what must remain unpowered during wiring.
- Name the expected result before the action.
- Name the stop condition.
- Keep the original consequence and recovery advice.
- Do not soften a blunt warning merely to make the prose sound polished.

## Keep reference data without blocking the first task

Large tables can remain on the same page after the first working example, or move to a focused reference page. In either case, tell the reader exactly what the reference contains and when they need it.

Other useful treatments include:

- A short contents list with anchors
- A compact chooser before a long comparison table
- Version tabs around parallel V1/V2 examples
- A visible basic path followed by “Advanced and unusual setups”
- Native expandable sections, but only after verifying that Jekyll, custom elements, accessibility, and deep links still work

When splitting a table out, verify every row at the new destination and link it beside the relevant example. A vague “see also” at the end of the guide is not enough.

## Preserve images as teaching material

For each image, record:

- Source path and link target
- Alt text
- Caption
- The fact or spatial relationship it teaches
- Whether the reader needs it before an action
- Whether the image is repeated for a deliberate reason

Keep the image unless it is a proven duplicate with no separate role, obsolete, broken beyond recovery, or the user approves removal. If you replace it, confirm that the new visual teaches every relationship in the old one.

Render images on desktop and mobile. A valid path does not prove that labels are readable, a transparent image works on the dark theme, or a wide schematic fits the viewport.

## Preserve links and anchors

Links carry information about where to go next. Preserve their purpose, not only their count.

Check:

- Every original internal and external link
- Every image link
- Every explicit anchor and generated heading anchor
- Incoming links from other pages
- Fragment links such as `/endstops#configuration`
- Links created by the page template, including “edit this page”

If a heading changes, add an explicit span for the old anchor. If several sections merge, all old anchors should land at the closest surviving explanation.

Changing an include path can also change the GitHub edit link or source attribution. Verify the rendered page, not just the Markdown links.

## Keep version boundaries honest

For each configuration, command, pin, default, and behavior, ask:

- Does this apply to V1, V2, or both?
- Is it firmware-wide or board-specific?
- Does it depend on RepRap, CNC, or GRBL mode?
- Is this the firmware default or the sample-config default?
- Is the syntax verified or inferred?

Show uncertainty. “The bundled V2 configurations do not contain this block” is better than a plausible translation that may damage a machine.

When correcting an old version block, preserve the intent and examples that are still valid. Replace only the syntax or claim that evidence contradicts.

## Write transitions in the site's voice

Most new prose should do one of four jobs:

- Explain why the next action exists
- Connect an action to an observable result
- Tell the reader which branch applies
- Explain why a block moved

Keep transitions short, but do not make every sentence sound like a checklist label. Mix the original longer explanations with short comments and asides. Use “you” when the original page does. Keep contractions where they sound natural.

Read each added paragraph aloud and ask:

- Could this sentence appear unchanged in documentation for any product?
- Does it announce structure instead of explaining the machine?
- Did it replace a vivid original sentence with a category label?
- Did three consecutive paragraphs acquire the same length and rhythm?
- Did the edit remove the person who knows the machine?

If yes, rewrite the new sentence around the actual machine, or restore the original.

## Verification: source, meaning, render, and use

A page rework needs four separate proofs.

### 1. Source proof

- All includes resolve.
- Every shared fragment has a complete consumer map.
- Front matter and permalink are correct.
- Custom tags are balanced.
- No raw Liquid or Kramdown control tokens leak.
- All old anchors have an explicit or generated destination.
- The preservation ledger has no missing row or unresolved deletion.

### 2. Meaning proof

Compare old and new section by section. For every old content unit, locate the new content and classify it with the ledger.

Run separate audits for:

- Facts and constraints
- Commands and settings
- Procedures and order
- Warnings and recovery
- Troubleshooting symptoms
- Examples and comments inside code blocks
- Images and captions
- Links and further reading
- Voice and flavor

Word counts and DOM counts are useful alarms. A large reduction demands an explanation. They are not acceptance criteria by themselves.

### 3. Render proof

Build a copied source tree with the same Jekyll environment used by the site. Inspect the reworked route, every standalone wrapper, and every page which consumes a changed include.

Verify:

- One useful page title and a sensible heading outline
- Desktop and mobile layout
- Wide tables and code blocks
- Image readability and dark-theme treatment
- Version controls and custom tags
- No duplicate IDs
- No console errors
- No failed same-site assets
- The visible text contains no template-control debris

### 4. Use proof

Follow the page as a reader would:

- Can a new user identify the first safe action?
- Can they tell when that action succeeded?
- Can they recover from each documented failure symptom?
- Can an experienced user find an exact setting without reading the tutorial?
- Can a V1 and a V2 user tell which example applies?
- Can somebody returning tomorrow find their place?
- Does the page still sound like Smoothieware?

## Endstops: what the first pilot taught us

The first reworked Endstops page improved the safety order and exposed several old technical problems. It also demonstrated how a rework can fail while looking clean.

### What improved

- `M119` moved before powered motion.
- The page separated homing, hard limits, and software limits.
- The V2 configuration example changed from an inferred V1-shaped format to the form used by bundled V2 configurations.
- V2 pin advice became board-specific instead of pretending that one table covered every board.
- The powered-sensor section stopped claiming that every powered sensor uses 5 V.
- The V1 software-limit example now uses the maintained `xmin`/`xmax` setting names rather than the old `x_min`/`x_max` spellings.
- The page retained legacy anchors and removed leaked Kramdown markers.

### What went wrong

The rendered page fell from 5,318 words to 2,064. Alerts fell from 15 to 8, images from 5 to 2, code blocks from 20 to 13, table rows from 60 to 13, and setting elements from 104 to 2.

That reduction was not merely better organization. The page lost:

- The original introduction and “Automation is great” aside
- The explicit endstop-versus-Z-probe constraint
- The community-informed warning about fancy sensors
- The six-endstop illustration
- Several external references
- A useful inverted-input homing symptom
- Named host-compatibility information
- V1 min/max limit-enable behavior
- The concrete `M206 X-5 Y-5` workaround
- Z software-limit examples
- The explanation of what `M500` saves
- Most sensor-specific tradeoffs

The complete option and sensor tables still existed on other routes, but the reworked page treated that as self-evident. The links were too easy to miss, and the audit did not prove that every old row survived at those destinations. A split is allowed, but it must be deliberate, explicit, and verified.

The prose also shifted into a generic agent voice. Phrases such as “the gate for motion,” “source of truth,” and “use the option reference” described the document instead of sounding like the person who wrote the original page.

### What the corrected Endstops rework must do

- Restore the original explanation and flavor.
- Keep every useful fact, warning, example, image, link, and table in the reworked result, with any split destination clearly named and linked.
- Move `M119` before homing without dropping the original homing symptoms.
- Keep the full settings and sensor references available through clearly named, in-context links, or include them after the basic path.
- Preserve verified V1 details.
- Use verified V2 syntax and board-specific pin advice.
- Explain or record each correction instead of silently changing it.
- Prove preservation with a content ledger, not a smaller byte count.

## Agent workflow

Use this sequence for every page rework.

1. Read the local project instructions.
2. Locate the permalink owner, includes, consumers, assets, and incoming links.
3. Render and save the old page.
4. Read the assembled page and three nearby pages for voice.
5. Build the preservation ledger.
6. Identify verified errors and gather evidence for each correction.
7. Design the new outline around the safest useful reader path.
8. Move original blocks into that outline.
9. Add short transitions in the existing voice.
10. Merge repetition only after extracting every unique detail.
11. Keep reference and advanced material later on the page or split it into a properly signposted destination; verify the full content either way.
12. Restore old anchors and link purposes.
13. Render the new page, its standalone wrappers, and every host of a changed shared fragment.
14. Run structural, factual, visual, and voice comparisons in every context.
15. Resolve every unaccounted ledger row.
16. Test desktop, mobile, interactions, custom tags, links, assets, and console output.
17. Show the user the real rendered page and ask them to review it.

## Acceptance criteria

A page is ready for review only when all of these are true:

- Every original content unit has a ledger status and a new location.
- No useful fact, caveat, warning, example, image, link, anchor, or flavor passage disappeared. Anything split out has an explicit destination and an in-context link.
- Verified errors are corrected and recorded.
- Version-specific claims have version-specific evidence.
- The page has a clearer reading route than the original.
- The safe test occurs before the risky action.
- Dense reference remains available without blocking the first task.
- The rendered page has no broken assets, unresolved internal links, duplicate IDs, raw control syntax, or console errors.
- Shared fragments still work in their standalone wrappers and in every consuming guide.
- Desktop and mobile views are readable.
- A side-by-side reading still sounds like the same author.

If you cannot prove one of these, report the page as incomplete. Do not call it preserved because the missing material probably exists somewhere else.
