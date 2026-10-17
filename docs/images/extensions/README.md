# Extension-board visual assets

These assets are local copies of existing project artwork and computer renders, used by the shared extension-board gallery. They are not photographs or hardware qualification evidence.

The gallery data lives in `docs/_data/extension_board_visuals.json`. It records the board family, physical role, revision, CAD source hash, original project-relative asset paths and copied image hashes. The shared `docs/_includes/extension-board-visuals.html` include renders each page's entries.

Abstract diagrams come from `smoothie-diagrams/data/extension-board-renders/`. Populated images come from the corresponding revision's `extension-boards/src/<family>/attempt/versions/<revision>/populations/<role>/normal/` record. Populated images are included only when the population record identifies the same CAD file and source hash and the recorded image hash matches the actual file. No third-party reference photographs or infographic imports are included.

The 2026-10-17 integration covers 80 families, 85 physical-role diagrams and 237 populated images. Six families have diagrams only because matching populated render evidence was absent or could not be verified. One retained external-servo v28 diagram has a different embedded source hash from the current CAD and is explicitly captioned as unverified against that candidate. Old revision prose on the pages is preserved; each visual's revision is stated separately.

The source projects retain ownership of their CAD and artwork. Do not regenerate the diagrams, silently replace their revision, or treat a render as evidence of assembly, ratings, cable compatibility or electrical testing. To refresh a visual, verify the new source and population records, preserve the original source attribution and update the gallery data and asset hashes together.
