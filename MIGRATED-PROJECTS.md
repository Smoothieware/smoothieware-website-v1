# Migrated Sub-Projects

Exploratory side-projects that used to live in this repository were moved out on 2026-09-05 so this repo only holds the documentation site. Each old location has a pointer file of the same name (`<folder>.md`) where practical.

| Moved to | Was here | What it is |
|---|---|---|
| `~/dev/smoothieware/smoothieboard-pcb-renders/` | `data/board-images/`, `data/board-design-research/`, `data/kicad-renders/`, `data/pcbdraw-renders/`, `data/data/pcbdraw-renders/`, `data/v2-prime-original/`, `data/3dModels/`, `src/pcb/`, `src/tools/`, `tmp/*.json` | Smoothieboard v2 Prime PCB image reconstruction (11 methods), KiCad/PcbDraw renders, board sources, 3D models, Python tooling. |
| `~/dev/smoothieware/old-forum-archive/` | `src/old-forum-extraction/`, `src/docs/old-forum/`, `src/scripts/tmp/check-chinese-content.ts`, `src/scripts/tmp/check-default-dates.ts` | Wayback Machine recovery of the old forum: 439 markdown posts, images, extraction scripts, report. |
| `~/dev/smoothieware/website-image-audit/` | `data/image-analysis/` | YAML inventories from the broken-image audit (broken / recovered / placeholder images). |
| `~/dev/smoothieware/firmware-source-mirrors/` | `data/github/Smoothieware-v1/`, `data/github/Smoothieware-v2/` | Firmware source snapshots used for config/G-code/pin extraction. |
| `~/dev/smoothieware/smoothie-misc/reports/` | `docs/todo-verification-2024-12-08.md`, `docs/robosprout-blog-v2-extraction.md` | Stray one-off reports that were sitting in the published `docs/` root. |

Deleted (not migrated): `.playwright-mcp/` screenshot dump from browser testing.

Historical 2026-09-05 retention (superseded for documentation research by the extraction below): `data/datasheets/`, `data/manuals/`, `data/v2-analysis-summary.md`, `data/smoothieware-v2-config-verified.md`, `data/all-pages.md`, `data/reviews.json`, `data/v2-renders/`, `import/`, `src/docs/*` (config research), `.venv/` (Python tooling for the PCB project).

## Documentation improvement workspace — 2026-10-08

Private research and tooling were extracted into the sibling `smoothie-documentation` workspace: `src/docs/` → private `docs/`, `src/data/` → private `data/` (including `data/import/`), retained root `data/` and `import/`, translation/review tooling and authored legacy scripts. Internal review/process notes are classified individually. Public website pages, assets, `src/site/` and the TypeScript watcher stay here.

The final inventory contains 8,682 imported/reconciled files; 8,673 exact source files were removed after hash and consumer verification. Nine metadata/style/license copies remain intentionally. Per-file provenance and receipts live in the private project's `migration/2026-10-08/`. The authorized old publisher stop is retained; no deployment, Git publication or history removal was performed. Previously extracted projects retain ownership.
