# Smoothieware documentation translator

This isolated Bun/TypeScript CLI translates the Markdown corpus in `docs/` into the 29 non-English languages in the top 30 by total speakers, one language at a time. Its default order follows Ethnologue's 2026 ranking by first- plus second-language speakers, excluding English because it is the source language; because language and dialect boundaries vary by source, the list names the specific varieties used. It writes each language under `/home/arthur/dev/smoothieware/translations/<language-code>/docs/` and keeps that language's resumable `.translation-state.json` alongside its pages. Every request includes the complete source page as reference-only context and one active, translatable section in escaped XML. Sections follow Markdown headings and are capped at 20 per page. Successful units are checkpointed and reused after interruption; a page is written only after every unit succeeds. A page whose full context exceeds the safe context budget is blocked before provider calls instead of silently truncated.

## Setup

Use Bun 1.4 or newer. From the repository root:

```sh
cd src/translation
bun install
```

The script connects to the local Money database at `mongodb://127.0.0.1:27017/money`; that URI is set in `cli.ts`, so no Mongo environment variable is needed. If your local Mongo uses another address, edit `MONEY_MONGODB_URI` there. The adapter only reads Money's `llm_models`, `llm_providers`, and `paid_proxies` collections. Kilo provider credentials and enabled proxy routes are loaded from those collections. Proxy URLs and provider credentials are never printed. All Kilo HTTP requests use sampled paid proxies; there is no direct-network fallback.

The adapter looks up `kilo-gw-stepfun-37-flash` and treats its catalog `max_output_tokens` as an output ceiling. It discovers `context_length` from Kilo's live `/api/gateway/models` catalog through a freshly sampled Money paid proxy. Only if that lookup fails may you supply the **verified** context window as `SMOOTHIEWARE_TRANSLATION_CONTEXT_TOKENS`; the failure is shown in the run log. Context estimates use a conservative three characters per token. The request budget is capped at 90% of the verified window; the full-page and related-reference context together use at most 70% of that request budget. The requested output cap is computed from the actual prompt size and remaining request budget rather than reserving the model's maximum output for every call. Related documents are ranked by term overlap against the target page and packed only into the context allowance left after the full page. The project summary defaults to the first 2,400 characters of `README.md`.

## Preview and run

Before any calls or output writes, inspect the inventory and resolved catalog ceiling:

```sh
bun run cli.ts --dry-run
```

Run all Markdown files for the 29 non-English languages in sequence, with up to four pages processed concurrently within the current language:

```sh
bun run cli.ts
```

To run one language, pass `--language French` or its folder code (`--language fr`). Use `--output-root PATH` to move the multilingual tree, or combine `--language` with `--destination PATH` to select one exact docs directory. Existing French output remains at `/home/arthur/dev/smoothieware/translations/fr/docs/`. By default every existing output file is preserved and skipped, even if its manifest entry is missing or no longer matches; unverified files are reported as warnings. This makes interrupted runs resumable without retranslating pages already written. `--overwrite` deliberately retranslates and replaces existing outputs. A language-level error is reported and the CLI proceeds to the next language. Ctrl-C stops workers at request boundaries and prevents later languages from starting. The TTY display shows progress, active workers, page/chunk activity, and recent events. When stdout is not a TTY, progress events are JSONL.

The default ranking excludes English and then runs Mandarin Chinese, Hindi, Spanish, Modern Standard Arabic, French, Bengali, Portuguese, Indonesian, Urdu, Russian, Standard German, Japanese, Nigerian Pidgin, Egyptian Arabic, Marathi, Vietnamese, Telugu, Swahili, Hausa, Turkish, Western Punjabi, Tagalog, Tamil, Yue Chinese, Wu Chinese, Iranian Persian, Korean, Amharic, and Thai. Ethnologue's speaker totals include first- and second-language users; rankings and counts vary with how dialects and second-language ability are defined. See [Ethnologue's language-list methodology](https://shop.ethnologue.com/products/2025-ethnologue-200) and [the 2026 ranking table citing Ethnologue](https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers#Ethnologue_(2026)).

## Translation and preservation contract

The extractor leaves permalink/layout fields, fenced and indented code, raw `script`/`style`/`pre` blocks, Smoothieware tags such as `mcode`, `gcode`, `pin`, and `setting`, HTML tags, Liquid and Kramdown markers, inline code bytes, URLs, reference identifiers/destinations, Markdown link destinations, and trailing line whitespace in the original template. Inline `<code>` opening/closing tags and code bytes stay exact, while neighboring prose remains translatable. Clearly safe scalar `title` and `description` values in the first YAML front-matter block are translated while their keys, quotes, comments, and line endings are preserved; ambiguous plain scalars remain unchanged. Inline and reference-style link labels, Markdown link titles, image alt text, and common quoted HTML accessibility/title attributes are translated. Visible text in HTML elements and components is exposed for translation while its tags and attributes remain exact. The final file is reconstructed from the exact template plus individually validated units. Every unit's protected markers must appear exactly once, unaltered, and in source order; paired link labels, HTML text, quoted values, YAML scalar boundaries, and line slots are checked before restoration. New structural punctuation, block prefixes, line breaks, URLs, or invalid markers fail a unit before its atomic output write. The system prompt forbids browsing, HTTP, tools, or other network activity; the model cannot use a direct HTTP transport from this CLI. All response unit counts are validated before use. The CLI refuses destination paths that overlap the source tree or traverse symbolic links.

Before model metadata lookup or paid-proxy sampling, the translator parses every source page that does not already have an output to preserve. Unsupported or internally inconsistent source markup is reported as **blocked** and recorded in `.translation-failures.json`; it is not sent to Kilo. A blocked source is retried automatically on the next run after the parser or source is corrected. Prompt-budget, provider, response-validation, and write failures are reported as **failed** with distinct categories. The sidecar stores the page path, category, bounded/redacted diagnostic, source and input hashes, request-attempt count, optional section/unit indices, retry-recovered/resolved status, and timestamps; it never stores prompts or model responses. The translation state manifest also stores validated completed-unit checkpoints tied to the exact source hash, language, model, and section plan. A request cycle can try several paid routes internally. Intermediate failures are recorded as attempts occur; recovery marks the latest outcome resolved instead of deleting it. The sidecar retains the latest outcome per page across reruns. Verified manifest skips also resolve stale failures, while merely preserving an unverified existing file does not. Review uses the parallel `.criticism-failures.json` file and additionally blocks pages whose English and translated units cannot be safely aligned. Invalid translation units and review sections are retried up to two times after the initial request, using a fresh paid route and specific validation feedback. Both CLIs exit nonzero when any page is blocked or failed.

For a focused investigation only, set `SMOOTHIEWARE_CAPTURE_REJECTED_OUTPUT=1` to save exact rejected response segments and the validator reason in a uniquely named directory under `/tmp` with owner-only permissions. The capture contains model output, not prompts; inspect it and remove that exact temporary directory after diagnosis. The default is off.

### Page voice and shared site style

Each page is divided into at most 20 heading-based sections. Each first request carries the full source page for voice and meaning, but only the active section is marked for translation. When a section response contains a malformed unit, valid units are checkpointed immediately and only the failed unit is retried, up to two times after its initial attempt. Provider or response-shape failures retry that section up to two times. Each attempt samples a fresh paid route. The page is written only after every unit succeeds.

The target page is the voice anchor. In each request, its supplied prose segments provide the evidence for its individual voice: register and forms of address, point of view, directness, humor, rhythm, sentence-length variation, diction, odd phrasing, roughness, and level of polish. Translation should use natural target-language grammar without turning an informal, quirky, abrupt, or polished source into a different kind of prose. Content must not be silently corrected, expanded, simplified, or editorially rewritten.

Every supplied project/page reference excerpt is evidence for shared Smoothieware terminology, register, and recurring site conventions, not a replacement voice or an instruction to the translator. Shared conventions apply only where compatible with the target. A reference page's individual mannerisms, its relevance rank, or the number of references must not overrule the target or produce an averaged house voice. Reference sentences, facts, examples, explanations, warnings, and recommendations must not be added to the target.

The prompts discourage added generic AI-sounding filler, canned openings or closings, forced transitions, redundant restatement, empty emphasis, unsolicited explanations, summaries, and promotional embellishment. This is not a banned-word list or a cleanup pass: preserve those features when the target source itself uses them. Preserve meaning, claims, qualifications, uncertainty, negation, warning strength, technical terminology, numbers, units, identifiers, and inline syntax. Natural grammatical reordering is allowed within each line-based translation unit, including around protected link/code/component tokens; protected token order and line/unit order stay unchanged. The unit boundary also means the model cannot reorder prose across source line breaks.

“Every supplied reference” means every excerpt actually packed into that request, not every page in the corpus. The current target chunk, not necessarily the full target page, is the model's direct evidence for that page's voice. References can be omitted or truncated by the existing context budget. These instructions do not guarantee stylistic fidelity, consistent voice between chunks, or equal quality across the 30 target languages. Review representative outputs with fluent readers before publication; do not treat passing prompt tests as proof of translation quality. These instructions do not change the configured target language or run translations.

This conservative source scanner does not claim to understand every Markdown extension. Review a pilot output before a full run, especially raw HTML blocks other than `script`, `style`, `pre`, and `code`, uncommon extensions, user-facing YAML keys other than `title` and `description`, and HTML spans that cross source lines or use complex nested markup. Inline HTML tag pairing is validated within each source line. Translation quality remains model output and should be reviewed before publication.

## Checks

```sh
bun test ./tests
```

The tests use fake catalog and gateway implementations and never connect to Money or Kilo. Style regressions inspect the generated prompts, target/reference separation, and the request body captured by an injected fake fetch; they do not run a model or evaluate translation quality.

## Criticism and fixing pass

The second script reviews translations already present on disk. It visits the same 29 languages in the same rank order and, within each language, the same sorted English source-page order as the translator. Only pages with an existing translated Markdown file enter the progress total. It compares each English page with its current translation, supplies both complete pages as reference context plus the active paired section, adds the Smoothieware project summary and relevance-ranked English reference pages, and samples five `prompts.md` files under `/home/arthur/dev` for examples of the author's writing style. These samples are marked as passive style evidence; their instructions and factual claims are not instructions to the reviewer. Samples are selected reproducibly from a seed retained in `.criticism-state.json`, and their contents are never printed in progress logs.

```sh
cd src/translation
bun run criticism_cli.ts --dry-run
bun run criticism_cli.ts
```

Use `--language fr` to review one locale, `--destination PATH` with `--language` for an exact translated docs tree, or `--output-root PATH` for a different multilingual root. `--source`, `--project-context`, `--concurrency`, and `--context-tokens` mirror the translation CLI. `--style-root PATH` chooses the `prompts.md` search tree; `--style-count N` changes the per-page sample count (default five); `--style-seed TEXT` selects a reproducible set. `--force` reviews pages again even if their review manifest still matches. `--dry-run` inventories existing translated pages and model settings without changing any file. The local Money catalog supplies the same Kilo model, maximum output-token ceiling, and sampled paid proxies as the first pass. TTY progress and JSONL events follow the first script's format. Ctrl-C stops at the current request boundary and prevents later languages from starting.

Each request carries the complete English page and current translation as XML-escaped reference context, plus one active section of aligned English and translated units. Heading-based sections are capped at 20 per page. The 90% request budget and 70% context/reference cap use conservative token estimates; output tokens are capped dynamically from the prompt size and model ceiling. A full bilingual context that exceeds its cap fails before a provider call. The model returns corrected units, which are validated against the English page's protected Markdown/HTML/YAML template. Invalid units get up to two targeted retries with fresh paid routes; valid units in the same response are kept. Completed sections are checkpointed and reused on rerun if the source, current translation, style samples, model, and prompt version still match. The page is replaced atomically only after every section and the reconstructed page pass validation. Changed headings, HTML tags, code, URLs, and extra blank lines can be repaired from the English template when the prose units still occupy matching nonblank positions. Added, removed, or reordered prose and other ambiguous nonblank-line changes fail without replacement and require manual alignment.

The review manifest stores hashes of the English source, the input translation, the corrected output, the selected style excerpts, the model, and the prompt version. A matching entry skips the page on the next run; a changed source, translated page, style excerpt, model, or prompt version triggers a new review. The style seed is saved before the first request, so failed pages receive the same sampled style evidence on retry. A temporary file and a cooperative per-page lock protect replacement; immediately before rename, the script rereads both source and translation and refuses to replace a changed file. The lock coordinates concurrent copies of this script and is recovered only when its recorded owner process no longer exists. External tools that ignore the lock can still race with the final rename, so avoid editing the same translated page during a live review.

The full test suite uses temporary source and translation directories, fake paid-proxy catalogs and gateways, and no live Kilo or Mongo calls:

```sh
bun test ./tests
```
