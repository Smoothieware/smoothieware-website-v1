# TODO Verification 2024-12-08

This log enumerates every unchecked entry in `src/todo.md` with its verification status and supporting evidence. Line numbers refer to `src/todo.md`.

1. (src/todo.md:6) * [ ] Some images were replaced with placeholders/temporary images, replace them with good images.
   - NOT DONE – placeholders still live (e.g. docs/getting-started/smoothie.md:11 shows "Page Under Construction" alert).

2. (src/todo.md:8) * [ ] Create a "migration" tool from v1 config to v2 config, including recognizing which v1 settings were default meaning they no longer need to be set in v2 (assuming the default in v2 has the same value)
   - NOT DONE – no migration tool exists under src/ (rg 'migration' only matches docs such as src/docs/v2-differences.md, no scripts).

3. (src/todo.md:9) * [ ] Document all the snippets at https://github.com/Smoothieware/Smoothieware/tree/edge/ConfigSamples/Snippets
   - NOT DONE – there is no documentation page enumerating ConfigSamples/Snippets; search for "Snippets" yields only inline references (e.g. docs/modules/motion/6axis.md:132) but no dedicated listing.

4. (src/todo.md:10) * [ ] Endstops page doesn't contain the new endstops config format, must update.
   - NOT DONE – endstops documentation still lists legacy single-line options like `alpha_min_endstop` (docs/modules/endstops-probes/endstops-options-for-include.md:17) rather than the new per-version format.

5. (src/todo.md:11) * [ ] Create an online configuration wizard system.
   - NOT DONE – `rg "wizard"` only finds the Eclipse install notes, no online configuration wizard implementation in src/ or docs.

6. (src/todo.md:12) * [ ] Clicking on a config option should open a menu, and one of the entries should be to show/hide the v1/v2 values, another should be a full card showing the specs of that option like default values etc., and the other should be to be able to copy the value into the clipboard.
   - NOT DONE – `setting-tag.ts` only attaches Shoelace popups on hover (src/site/setting-tag.ts:522) and there is no menu with v1/v2 toggle or copy actions beyond the existing copy button.

7. (src/todo.md:13) * [ ] First comer users get asked in a big dialog if they have a v1 or a v2 board, and get the right setting for their board, and there is also a big "I don't know, show me both" button where we show both.
   - NOT DONE – there is no first-run dialog logic anywhere (no occurrences of "first comer" or modal prompting under src/site/).

8. (src/todo.md:14) * [ ] Identify more g-codes that we support, and have all of them have their own page, create pages for those that are missing.
   - NOT DONE – only 22 G-code pages exist under docs/gcode-reference/g-codes/ while firmware supports many more; no new pages created.

9. (src/todo.md:15) * [ ] Create a "custom format" for G-codes the same way we are planning to do for config settings, that will make them display nicer and link to their specific page.
   - NOT DONE – there is no dedicated G-code tag renderer similar to <setting>; `src/site/` lacks any gcode-specific script.

10. (src/todo.md:16) * [ ] Improve the existing G-code pages, have a template to follow and make them all consistent, include examples and explanations. Maybe different templates for different "types"
   - NOT DONE – G-code pages vary widely (compare docs/gcode-reference/g0.md vs g28.md) and there is no shared template include.

11. (src/todo.md:17) * [ ] Run a search of the site for places where we could mention G-codes more often/mention more G-codes etc., do this by first creating a list of G-codes and what they do, put that list into "context", then have sub-agents with that context go over all the pages and locate interesting locations for mentioning G-codes/G-codes.
   - NOT DONE – no search tooling exists to auto-suggest additional G-code mentions; only manual docs.

12. (src/todo.md:19) * [ ] Currently, images are surrounded by a `a href`, we want to change that with an actual setup where when we click an image, we have a popup show up (and in that popup there is an actual link to the image if needed), this should be do-able with just shoelace and some JavaScript.
   - NOT DONE – all images still wrapped in anchor tags without any Shoelace modal (e.g. docs/hardware/boards/smoothieboard-v2-prime.md:93 uses straight `<a><img>`), no popup JS implemented.

13. (src/todo.md:20) * [ ] Create XML files or YAML files for the list of pages with descriptions, for the list of settings with all the data we collected, for the list of G-codes with lots of details, and then in our "fancy" displays like the ones for details about settings, use that data like the one about the pages etc, to show extra data for example for the recommended pages we can show a description of each, etc. Same for the G-codes.
   - NOT DONE – there are only YAML files for settings/pins/gcodes (`docs/assets/data/`); no master page list YAML exists.

14. (src/todo.md:21) * [ ] FEATURE implement full translations of the site in multiple languages and publish them as sub-folders and promote them, do a dozen languages then one new language each week. This will require also translating things like the planned xml/YAML files with all the data.
   - NOT DONE – docs/ has only English pages; no locale subfolders or translation pipeline.

15. (src/todo.md:22) * [ ] Once the YAML files are created with all the data about config options and G-code etc., ask Chris Cecil to review them, maybe pay him for them even as it's quite a bit of work.
   - NOT DONE – no evidence of YAML review by Chris Cecil; no mention outside todo.

16. (src/todo.md:23) * [ ] FEATURE: Configuration wizard in JavaScript.
   - NOT DONE – duplicate of #5: no configuration wizard implemented.

17. (src/todo.md:24) * [ ] Create "planner" page, based on the source code of the planner, that explains in detail and with pedagogy what the planner does and how, ideally with ai-generated images (mermaid?)
   - NOT DONE – there is no planner deep-dive page; search `docs` for `planner` returns only references inside other guides.

18. (src/todo.md:25) * [ ] Create on-boot-gcode page about `on_boot.gcode` file and fill it, and find the right places to link to it from.
   - DONE – `docs/on-boot-gcode.md` exists with permalink `/on-boot-gcode` and index references at docs/index.md:224.

19. (src/todo.md:26) * [ ] Figure out a full list of gcodes and mcodes from the source code and the docs.
   - NOT DONE – there is no comprehensive combined G/M code list; only partial docs/gcode-reference/supported-g-codes.md.

20. (src/todo.md:27) * [ ] FEATURE: We have extracted the `old-forum` data/posts, we need to fix their dates, then we should figure out some categories, move them into those, and then from there create a section of the site in which we have lists of posts, and we can go see those posts.
   - NOT DONE – no `old-forum` section was published; extracted data lives only under `src/docs/old-forum/` and not exposed on docs/.

21. (src/todo.md:28) * [ ] `old-forums` is missing some posts that it says the Wayback Machine has not saved, we should ask it for examples of such posts, and then go see ourselves if they really are missing or not.
   - NOT DONE – `old-forum` missing-post audit not implemented; no tooling or reports exist.

22. (src/todo.md:29) * [ ] Make sure in all places in the code where we have default values, we distinguish/describe BOTH code default values, and example config file default values.
   - NOT DONE – numerous docs still cite only firmware defaults, e.g. docs/modules/endstops-probes/endstops-options-for-include.md doesn't distinguish firmware vs sample defaults.

23. (src/todo.md:30) * [ ] Some pages, such as compilation, will be very different from v1 to v2, for those we want a two-column system, where the columns can be hidden based on which version is selected, with still some kind of selector on each of them letting us see the v1 if we are in v2 and vice versa if we want to.
   - NOT DONE – no two-column v1/v2 layout implemented on compilation or similar pages; version toggling uses <versioned> inline blocks only.

24. (src/todo.md:31) * [ ] Some settings are like `custome_menu.something.some_setting`, and the "something" means no matches with the YAML file, we need to either standardize all mentions to a something, or create some code that can adapt to this when we implement the "rich" setting help stuff.
   - NOT DONE – YAML resolver still fails on `custom_menu.*` entries (see src/site/setting-tag.ts filtering) and no normalization code exists.

25. (src/todo.md:32) * [ ] Once we have created the full forum backup, publish it to the site.
   - NOT DONE – `src/docs/old-forum` not published; no site section.

26. (src/todo.md:33) * [ ] Once we have created the full forum backup, farm it for FAQ entries (give them numbers, and try to group them by number of mentions to sort them from most mentioned to least), and separately for possible additions to the docs (information a user didn't have so presuming the user had read the docs this might mean the info was not present in the docs, that was provided in an answer to them, give them IDs/numbers so they can easily be farmed to sub-agents), and then separate those into those that are already present, and those that are not already present, and those that are not already present transform them into proposed edits to the site.
   - NOT DONE – no FAQ extraction pipeline exists; docs/troubleshooting/troubleshooting.md unchanged.

27. (src/todo.md:34) * [ ] STUPID FEATURE: Create an SVG version of the OSHW logo we have at the top from the PNG, and then create a matching other gear, and a few other gears, and have an animation when we hover where these gears appear one after another and match the actual rotation, including the "empty" tooth.
   - NOT DONE – navigation still uses PNG OSHW logo (docs/_layouts/default.html:33) without animated SVG gears.

28. (src/todo.md:35) * [ ] Go over ALL the pages and fix any outdated info, missing info, and v1/v2 mismatches.
   - NOT DONE – multiple docs remain outdated (example: docs/getting-started/homepage-draft.md refers to future machines).

29. (src/todo.md:36) * [ ] Figure out hardware and firmware differences between v1 and v2 from docs and research, and from there create a list of proposed changes to the site and "parallel" side by side parts of the site.
   - NOT DONE – no dedicated hardware vs firmware diff proposal doc beyond existing `src/docs/config-comparison-v1-v2.md`; site not reorganized.

30. (src/todo.md:37) * [ ] The "tooltip" for the settings should be smart about where to display, displaying where on the screen there is currently the most space.
   - NOT DONE – setting tooltip placement is still fixed bottom via sl-popup (src/site/setting-tag.ts:587) with no smart positioning.

31. (src/todo.md:38) * [ ] Ask Chris Cecil to go over the entire documentation page by page, maybe a few pages a day (create an "all pages" with groups to be able to do it bit by bit, maybe with a section under each to add notes?)
   - NOT DONE – no evidence Chris Cecil reviewed every page; only TODO mention.

32. (src/todo.md:41) * [ ] Link to or include the pin-configuration page from the various guides and from more places in the site.
   - NOT DONE – few guides link to pin-configuration; e.g. docs/machine-guides/laser-cutters/laser-cutter-guide.md lacks such link.

33. (src/todo.md:43) * [ ] Restructure the src/site/ files to be broken down into more libraries, and make sure the libraries are correctly integrated into the actual site along with the code.
   - NOT DONE – src/site/ remains a handful of large files, no library breakdown beyond existing `lib/` folder.

34. (src/todo.md:44) * [ ] Have a new tag format for pins <pin>, and first create a list of all places in the code where a specific pin is listed (and work out v1/v2 correspondences/matches)
   - NOT DONE – pin tag exists but there is no automated list of pin usages/correspondence beyond YAML; no dedicated listing page.

35. (src/todo.md:45) * [ ] We have a lot of templates now in docs/assets/templates/, maybe some of those can be merged, maybe the logic is unnecessarily complicated and can be simplified/compacted in some ways? (also make sure there isn't code duplication between the templates...)
   - NOT DONE – docs/assets/templates/ still contains many templates without consolidation; duplication remains (e.g. separate minimal-panel, not-documented panel).

36. (src/todo.md:46) * [ ] In the settings YAML files, some of the v1 settings have better/longer descriptions than the v2 ones, and more details in general. And sometimes it's the opposite. We need to fix that by porting any extra information from one to the other where it's acceptable, and where it's verified from the source code and from the docs.
   - NOT DONE – YAML descriptions between v1/v2 still unequal (compare docs/assets/data/smoothieware-v1-config.yaml vs v2 file for `arm_solution`).

37. (src/todo.md:47) * [ ] Some stuff like the config example files in assets/ need to be kept up to date, we should create a script that gets them from github and updates as needed.
   - NOT DONE – there is no script syncing ConfigSamples; assets/config/v1 files manually maintained.

38. (src/todo.md:48) * [ ] Ask Jim Morris for a list of new features in v2 and where I could learn about them to document them.
   - NOT DONE – no record of outreach to Jim Morris; no doc updates quoting new features.

39. (src/todo.md:49) * [ ] I nthe list of settings, have an icon for each setting "type".
   - NOT DONE – `<setting>` popups don’t show icons per type; no icon field in YAML.

40. (src/todo.md:50) * [ ] It's possible the way the setting tag is currently implementd isn't good for SEO, we should look into that and if needed change somewhat how it's used.
   - NOT DONE – SEO adjustments for <setting> tag not implemented; markup still heavy inline spans per docs/assets/css/setting-tag.css:1.

41. (src/todo.md:51) * [ ] Settings popups should have a link at the bottom to the page with all settings, same thing for gcodes, same thing for pins, and we should have all those pages on the homepage too.
   - NOT DONE – <setting> popups lack footer links; see docs/assets/templates/setting-panel.hbs (no link to master page) and homepage lacks settings/gcodes index buttons.

42. (src/todo.md:52) * [ ] Have the PDFs for the microcontroller user manuals and some of the other components like the motor drivers inside of docs/assets/ somewhere and add download links in some places in the docs.
   - NOT DONE – docs/assets/ contains PNG/JPG but no vendor PDFs; no downloads linked for MCU datasheets.

43. (src/todo.md:54) * [ ] For the pin configuration page we (maybe) figured out a way to convert pngs to svgs that use our site's font, we should document this process and then use it for more of our images, all those that are diagrams.
   - NOT DONE – pin-configuration page (docs/pin-configuration.md) still references PNG diagrams; no documentation of PNG→SVG conversion process elsewhere.

44. (src/todo.md:55) * [ ] On http://localhost:4000/editing-the-wiki add screenshots for the "how to contribute" guide.
   - NOT DONE – editing-the-wiki page (docs/project/github/editing-the-wiki.md) lacks contribution screenshots; only text instructions.

45. (src/todo.md:56) * [ ] In the page with all the settings, for settings that are pins in the description we should use <pin> tags for the default pin.
   - NOT DONE – docs/configuration/all-settings page still shows raw text; default pin mentions remain plain text.

46. (src/todo.md:58) * [ ] We added cache busting to the includes in docs/_layouts/default.html , we should remove them once everything is stable.
   - NOT DONE – docs/_layouts/default.html still uses cache-busting query for style.css via `?v={{ site.github.build_revision }}` at line 7.

47. (src/todo.md:60) * [ ] That's a lot of assets we get when the page loads, maybe we can pack all of this a lot more with webpack or something similar? Like the handlebars templates, the yaml files, etc?
   - NOT DONE – assets are loaded individually (multiple JS imports in docs/_layouts/default.html) with no bundler/webpack pipeline.

48. (src/todo.md:62) * [ ] Have a special format just for lists of settings / settings tables, that have support for hiding v1/v2 as required.
   - NOT DONE – there is no dedicated component for settings tables; they are standard Markdown tables (e.g. docs/modules/endstops-probes/endstops-options-for-include.md) without version toggles.

49. (src/todo.md:63) * [ ] Have a special format for lists of gcodes, and add them in any place where it makes sense to.
   - NOT DONE – likewise no G-code list component beyond manual tables; see docs/gcode-reference/supported-g-codes.md.

50. (src/todo.md:64) * [ ] http://localhost:4000/arm-solutions doesn't have a full list of the supported arm solutions, and pages for each.
   - NOT DONE – arm-solutions permalink still missing; `docs/arm-solutions.md` absent.

51. (src/todo.md:65) * [ ] Have a consistent table system with custom tags and custom css/formatting that looks the same everywhere, base it on the primevue data table stuff.
   - NOT DONE – table styling varies; no PrimeVue-like custom tag implemented.

52. (src/todo.md:66) * [ ] Our code in src/site/ seems to fail silently too easily, including with the Promise.all stuff, the template compiling failing silently, etc, we should add a lot more catching code and in general make it more error tolerant and have better reporting.
   - NOT DONE – src/site code still lacks robust error handling; e.g. load-assets.ts uses bare console.error without retries.

53. (src/todo.md:67) * [ ] For mcode/gcode tags that contain parameters, we should have a section in the popup with a sentence that explains what it all means, maybe using a template in the yaml file like a handlebarjs template or something? Like convert the parameters into a sentence, or base it on the declared parameters?
   - NOT DONE – G-code popups don't exist yet; there is no template to explain parameter sentences.

54. (src/todo.md:68) * [ ] Every instance of 5V, +5V, GND, 3.3V, 3V3, +3.3V, etc, should use the <raw> tag.
   - NOT DONE – even after `<raw>` tag introduction, many occurrences like docs/hardware/wiring/stepper-motors.md still show bare “5V”.

55. (src/todo.md:69) * [ ] On the smoopi page, use a carrousel instead of the long series of images.
   - NOT DONE – Smoopi page (docs/software/host-software/smoopi.md) still contains multiple static `<div>` image sections without carousel component.

56. (src/todo.md:70) * [ ] The http://localhost:4000/on_boot.gcode page isn't working, figure out if it exists or not and fix it.
   - DONE – on_boot page now exists and works (`docs/on-boot-gcode.md`).

57. (src/todo.md:71) * [ ] The using-smoothie page is linked from the home page, but is missing or empty or something.
   - NOT DONE – `using-smoothie` link on homepage (docs/index.md:225) points to missing page.

58. (src/todo.md:72) * [ ] The same way we have yaml files for settings and gcodes, we should have one for terminal commands.
   - NOT DONE – there is no YAML catalog for console commands; only gcode/pin/config data sets exist.

59. (src/todo.md:73) * [ ] Get more troubleshooting questions/solutions from the forum and other sources, and use them to improve the troubleshooting page.
   - NOT DONE – troubleshooting guide (docs/troubleshooting/troubleshooting.md) unchanged; no new Q&A imported from forum.

60. (src/todo.md:74) * [ ] Create a frequently asked questions page from the forum and other parts of the docs, and link to it from the homepage in the torubleshooting section and from other places in the site.
   - NOT DONE – there is no global FAQ page; search for `faq` only hits legacy references.

61. (src/todo.md:75) * [ ] Find all the diagrams (and create new ones as needed), and re-do all of them by hand, with text in gimp with Montserrat font.
   - NOT DONE – diagrams remain varied with raster text; no GIMP redrawing documented.

62. (src/todo.md:76) * [ ] Create (or improve) a coding guide that explains how to code a module step by step, for both v1 and v2.
   - NOT DONE – no updated coding guide beyond existing docs/developers/module-development/moduleexample.md.

63. (src/todo.md:77) * [ ] Have a tour of the board with detailled descriptions of each part, for both v1 and v2, and include it in the "hardware documentation" section of the home page.
   - NOT DONE – hardware section lacks interactive tour; only static board pages.

64. (src/todo.md:78) * [ ] Create more snippets for v1 and v2 and add them to github.
   - NOT DONE – ConfigSamples/Snippets repo content unchanged; no new snippet files added under docs/assets/config/v1/Snippets/.

65. (src/todo.md:79) * [ ] Create a snippets page that lists all the snippets that are on github and explains what they are and details about them.
   - NOT DONE – there is no page listing all snippets; only references.

66. (src/todo.md:80) * [ ] Deep-dive page into how the planner works.
   - NOT DONE – still no planner deep-dive page.

67. (src/todo.md:81) * [ ] Migration tool for v1 to v2 config files.
   - NOT DONE – duplication of #2; no automated migration tool.

68. (src/todo.md:82) * [ ] Migration tools for marlin (and others?) to v1 and v2 config files.
   - NOT DONE – no Marlin migration scripts exist.

69. (src/todo.md:83) * [ ] "Cleanup" script to remove config options that are not needed since they use the default from the firmware.
   - NOT DONE – no cleanup script to strip default options from configs.

70. (src/todo.md:84) * [ ] Once we have these tools, have a migration page (do we already have one?) with links to these tools and explanations.
   - NOT DONE – migration page absent; docs/migration contains only GRBL info.

71. (src/todo.md:85) * [ ] Interactive board tool for v1 and v2 with the magic scrolling thing wheret he board moves around the page and zooms and blurs and highlights different parts depending on the section we are at in the page.
   - NOT DONE – no interactive scroll/zoom board tool implemented on site.

72. (src/todo.md:86) * [ ] Linear motion system comparion going over belts vs screws etc and how it all matters or not to smoothie.
   - NOT DONE – no linear motion comparison doc exists; search results empty.

73. (src/todo.md:87) * [ ] Detailled machine alignment and squaring procedures.
   - NOT DONE – machine alignment procedure not added.

74. (src/todo.md:88) * [ ] Detailled laser alignment procedures including detailled testing instructions.
   - NOT DONE – laser alignment procedures absent beyond existing short notes.

75. (src/todo.md:89) * [ ] Import useful information from the robotseed laser user guide and deployment guide.
   - OBSOLETE – Robotseed no longer exists, guide no longer available.

76. (src/todo.md:90) * [ ] Pre-flight safety check-list page, and safety section in the home page.
   - NOT DONE – no pre-flight safety checklist page; search for "pre-flight" returns nothing.

77. (src/todo.md:91) * [ ] Grounding and shielding guide, if not already included in existing page(s)?
   - NOT DONE – grounding/shielding guide missing beyond sparse mentions.

78. (src/todo.md:93) * [ ] FEATURE: Branches page, we need to figure out all the useful branches and document what they do and how to use them.
   - NOT DONE – no “branches” page; docs/developers mention third-party branches but not a new feature page.

79. (src/todo.md:94) * [ ] Figure out all v1-only and all v2-only settings and make sure the site handles them correctly wherever mentionned.
   - NOT DONE – there is no list enumerating v1-only/v2-only settings; doc `src/docs/config-comparison-v1-v2.md` still manual text.

80. (src/todo.md:95) * [ ] Make code blocks support settings, maybe automagically by having the tags added magically any time we see a code block?
   - NOT DONE – code blocks remain plain Markdown; <setting> tags not injected automatically.

81. (src/todo.md:96) * [ ] Make the docs more compact, remove some fat, and maybe have some information in expandable boxes if it's not critical, with a custom expandable tag.
   - NOT DONE – no expandable/collapsible custom tag exists; docs rely on simple headings.

82. (src/todo.md:97) * [ ] All pages should have a link at the top and bottom going to edit the page on github.
   - NOT DONE – most pages lack GitHub edit links; e.g. docs/hardware/boards/smoothieboards.md has no edit link at top/bottom.

83. (src/todo.md:98) * [ ] There are some instances of old formats of settings in the docs like laser_module_proportional_power , we should identify all of them, and update the docs to use the newer formats.
   - NOT DONE – outdated setting names (e.g. docs/modules/laser/laser.md references `laser_module_proportional_power`) still present.

84. (src/todo.md:99) * [ ] Do internet research related to laser+smoothie, cnc+smoothie, etc, and use all that to improve the guides.
   - NOT DONE – no new research-based guide content added; tasks remain empty.

85. (src/todo.md:100) * [ ] Research + laser guide.
   - STATUS MISSING

86. (src/todo.md:101) * [ ] Research + cnc guide.
   - STATUS MISSING

87. (src/todo.md:102) * [ ] Research + 3D printer guide.
   - STATUS MISSING

88. (src/todo.md:103) * [ ] Research + pick and place guide.
   - STATUS MISSING

89. (src/todo.md:104) * [ ] Pin diagrams such as https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-wiring.png?raw=true are messed up by the dark background, we need to give them a white background.
   - NOT DONE – pin diagrams still have transparent backgrounds (see docs/images/smoothieboard-wiring.png) and are problematic on dark theme.

90. (src/todo.md:105) * [ ] Fix the thing where we see stuff like « permalink: /stepper-motors — » in the laser cutter guide.
   - NOT DONE – laser cutter guide still contains stray permalink text (docs/machine-guides/laser-cutters/laser-cutter-guide.md near top) due to front matter copy.

91. (src/todo.md:106) * [ ] Fix the remaining images manually.
   - NOT DONE – several broken/temporary images remain; example placeholders at docs/meta/menu.md show internal warnings.

92. (src/todo.md:107) * [ ] Create a page explaining in detail the MCS, including diagrams, and an interactive demo.
   - NOT DONE – no Motion Coordinate System explainer page exists.

93. (src/todo.md:108) * [ ] Vinyl cutter guide (get one of the two big vinyl cutters from the fablab and set it up better and make a guide from it)
   - NOT DONE – no vinyl cutter guide present under docs/machine-guides.

94. (src/todo.md:109) * [ ] CRITICAL: Add lathe documentation and add lathe guide.
   - NOT DONE – no lathe guide; only config sample references.

95. (src/todo.md:110) * [ ] Document the v2 ew exclusive features (lathe threading G33, dual-motor auto-alignment, extensive expansion)
   - NOT DONE – v2-exclusive features (G33, dual-motor alignment) are not documented anywhere aside from brief mentions.

96. (src/todo.md:111) * [ ] Document the v2 unit test stuff.
   - NOT DONE – v2 firmware unit testing process not documented.

97. (src/todo.md:112) * [ ] Create more general info in the guides like usage stuff, so we get better SEO for the documentation and people can discover the site when searching for info about machines in general and not just about smoothie.
   - NOT DONE – guides still focus on Smoothie specifics; no general usage/SEO expansion.

98. (src/todo.md:116) * [ ] **Maybe**, create a page for each setting, based on the template used for the <setting> tag popups?
   - NOT DONE – there is no dedicated page per setting, just popups.

99. (src/todo.md:118) * [ ] The "arm_solution" setting in the yaml file doesn't have a "valid values" list for v1 but has it for v2, we need to fix this, and find other places where there are mismatches like this, but always base it on actual data from the source code.
   - NOT DONE – `smoothieware-v1-config.yaml` lacks valid values for `arm_solution`; field present only in v2 file.

100. (src/todo.md:119) * [ ] Currently when we select an element with the <setting> tag the text that gets actually selected/copy-pasted isn't ideal, we'd like a custom format for settings, we should try to figure out a way to implement this so something nicer is selected when users select text that contains a <setting>.
   - NOT DONE – selection formatting still uses multi-line spans; copy/paste retains newline (observed in browser, no code customizing).

101. (src/todo.md:120) * [ ] CRITICAL: In advance, figure out which v2 settings don't have a matching v1 setting and vice versa and figure all that out BEFORE we edit the entire site to use the new <setting> tags.
   - NOT DONE – no audit of unmatched v1/v2 settings has been recorded.

102. (src/todo.md:121) * [ ] CRITICAL: Now that we support <setting> tags with a single attribute (v1 or v2), how do we handle this if we set the site to only showing one version and a tag doesn't have that attribute? we must figure that out...
   - NOT DONE – version filtering currently hides unmatched tags entirely; no fallback behavior implemented.

103. (src/todo.md:122) * [ ] CRITICAL: For the v2 settings we need an example section where we use the example config file and we show this setting "in-situ" inside the example config file. Actually maybe we need to do that for v1 too.
   - NOT DONE – example sections showing config excerpt in-situ absent; only textual descriptions.

104. (src/todo.md:123) * [ ] Let us configure between hover or click for the setting popups.
   - NOT DONE – popup trigger is hover-only (settings default), no user toggle to require click.

105. (src/todo.md:124) * [ ] For any steps_per_mm value, have a "calculator" inside an alert in the popup. then once that is added, ask the coding agent for ideas for any other such tools, get a list of such tools, and select some to actually implement.
   - NOT DONE – no steps_per_mm calculator exists inside popups.

106. (src/todo.md:125) * [ ] For stuff that contains alpha, beta, etc, for both v1 and v2 we should have a diagram based on the board images we have, that shows "this is alpha, this is beta", etc with the current one highlighted.
   - NOT DONE – no diagrams showing alpha/beta/gamma labeling based on selected board.

107. (src/todo.md:126) * [ ] Currently if I copy/paste a line with a <setting> tag in it there are carriage returns between the elements, we want a nicer format, ideally with the v1/v2 labels included in a single-line format etc.
   - NOT DONE – copy/paste still includes carriage returns due to DOM structure.

108. (src/todo.md:127) * [ ] Currently for the default values we only use the value from the code, but we should show both the value from the code and the one from the example file if it exists.
   - NOT DONE – default values show only firmware defaults (no example config column) in popups.

109. (src/todo.md:128) * [ ] For pin-type setting tags, use the svg diagrams to display which pins are valid for each one.
   - NOT DONE – pin popups show textual info but not board SVG overlays.

110. (src/todo.md:129) * [ ] For values that are speeds like values with feed_rate etc in them (and we might be able to determine also based on the unit type value/property), we should have a simple thing where a circle goes around a pill-shape track that's the width of the popup, that shows what the speed looks like, trying to figure out the size of the screen based on its resolution and type (desktop, phone), etc, and a slider that lets us select the speed with exponential changes/scale.
   - NOT DONE – no speed visualization or slider tool exists in popups.

111. (src/todo.md:131) * [ ] CRITICAL: Before we actually replace all the settings with <setting> tags, we need to create a very clear and detailled spec for what settings should look like/be specified at, including adding the full path, including the section for v2 settings etc.
   - NOT DONE – no spec document for <setting> tags stored anywhere.

112. (src/todo.md:132) * [ ] Some places recommend the user edits a page like search «edit it» on http://localhost:4000/draft-laser-cutter-guide , we should fix that with links to github.
   - NOT DONE – `draft-laser-cutter-guide` still instructs readers to edit page manually rather than linking to GitHub.

113. (src/todo.md:136) * [ ] Create unit tests including some using playwright for things like checking if links still work, specific pages still display, images show up, the <settings> tag do their things, etc.
   - NOT DONE – there are zero automated tests under src/site/ or src/test/; `ls src/site/test` empty.

114. (src/todo.md:137) * [ ] Move more things to libraries in src/site/ and use unit tests for all of these.
   - NOT DONE – no additional unit-test-oriented library refactors performed; code remains monolithic.

115. (src/todo.md:146) * [ ] We created  src/docs/config-option-mentions.md to find all mentions of settings, but we should also have a run (once the settings are much better set up) to figure out places where settings **should** be mentionned, but they are not.
   - NOT DONE – config-option-mentions script run for existing mentions only; no new pass for missing ones.

116. (src/todo.md:147) * [ ] Try to reorganize the project pages into folders without changing any URLs.
   - NOT DONE – site remains flat structure; project pages not reorganized into folders.

117. (src/todo.md:148) * [ ] Once we add the new "interactive"/rich config value display with the popup, we should have callouts for specific types of settings, for example a callout for pin types that explain some of the stuff about them and links to the pin configuration stuff.
   - NOT DONE – no callouts inserted into docs referencing pin config for interactive popups.

118. (src/todo.md:152) * [ ] Fix « Current edge build status: Build Status » on the homepage.
   - NOT DONE – homepage still displays "Current edge build status: [![Build Status]..." with placeholder text.

119. (src/todo.md:157) * [ ] When SORA2 or other models get out, create an animated version of all the guide icons into animated GIFs.
   - NOT DONE – guide icons remain static PNGs; no GIF animations.

120. (src/todo.md:158) * [ ] Use pure svgs for some of the images and draw them on the page with https://maxwellito.github.io/vivus/
   - NOT DONE – images are still raster; no Vivus-drawn SVG conversions implemented.

121. (src/todo.md:162) * [ ] A vector drawing animation of a filament 3D printing (FDM, filament deposition) process in action. The hotend at the top remains stationary, while the nozzle in the center deposits plastic at the top of the object being build, the object is positionned on a build plate, and the object moves with the build plate left to right so plastic can be deposited on its top. Thre is no spray or sparks, only slow progressive deposition of new plastic at the top of the printed object..  The camera does not move at all.
   - NOT DONE – no filament printing animation asset exists; no SVG animation referenced anywhere.

122. (src/todo.md:166) * [ ] Attempt recovery of lost images by going to the old capture at http://smoothieware.github.io/Webif-pack/documentation/web/html/10442.html
   - NOT DONE – no recovery work done via Webif-pack capture; no recovered images committed beyond existing /images/recovered/ set.

123. (src/todo.md:171) * [ ] Go over all of the images, and use automated AI processing/tools to remove backgrounds and make them look nicer in general. Give a general style to all the images, maybe with a shared "blueprint" background/theme. Auto-adjust contrast etc so they all share the same coherent style.
   - NOT DONE – no AI-based batch cleanup pipeline run; images remain varied.

124. (src/todo.md:172) * [ ] We have a prompt in `prompt.md` about generating svgs for v2, we need to run it again/see the results, and also see if maybe some of the attempts failed because some stuff wasn't installed, and install what might be missing.
   - NOT DONE – prompt.md instructions for SVG generation have not been rerun; generated assets missing.

125. (src/todo.md:173) * [ ] We have generated board vector graphics for the v2 boards using 10 different methods, we should look at what we have, and use the information and know-how gathered to then create a more straightforward method from that.
   - NOT DONE – multi-method v2 board vector graphics not consolidated; no doc describing improved pipeline.

126. (src/todo.md:174) * [ ] Contacted somebody on fiverr about generating the diagram/pcb, check if we got an answer or not.
   - NOT DONE – Fiverr outreach follow-up not documented.

127. (src/todo.md:178) * [ ] CRITICAL: Get the list of boards from google drive, and try to use AI and libraries to generate files/gerbers for the extension boards.
   - NOT DONE – no gerber-generation automation for extension boards; no scripts under src/tools.

128. (src/todo.md:182) * [ ] We should have drawings of the various parts of the schematic on the relevant pages, we can get some of that with https://kicanvas.org/
   - NOT DONE – no schematic drawings embedded from KiCanvas on board pages.

129. (src/todo.md:183) * [ ] Implement https://yaqwsx.github.io/Pinion/ for nice interactive diagrams of the board (requires pcbdraw output)
   - NOT DONE – Pinion integration absent; no references in docs or package.json.

130. (src/todo.md:184) * [ ] Ask Kliment about the missing components for pcbdraw output.
   - NOT DONE – contacting Kliment not tracked anywhere; no issue or doc entry.
