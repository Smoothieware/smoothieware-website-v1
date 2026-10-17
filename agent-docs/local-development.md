# Local Development

Reference doc for running/restarting the local Jekyll dev server and for what triggers a restart. Linked from `CLAUDE.md` — not part of the published site (this directory is outside `/docs`, the GitHub Pages source).

The local Jekyll development server is managed by Arthur’s **user systemd service** (`smoothie-docs.service`) using the existing Docker daemon and `starefossen/github-pages` image. Routine management requires no sudo. Enable it with `systemctl --user enable --now smoothie-docs`; Arthur’s existing linger setting permits startup without an interactive login.

Migration status (2026-10-17): the user unit is installed and syntax-checked; activation and retirement of the old system unit require the one-time root handover below. Until that handover runs, do not start both services on port4000.

**CRITICAL: Coding agents (Claude Code, Gemini, Codex, etc.) must NEVER start or restart the Jekyll service themselves. Instead, ASK THE USER to run the appropriate command.**

**Service URL:** http://localhost:4000

**Service Management Commands (for the user to run):**
```bash
# Check service status
systemctl --user status smoothie-docs

# Restart the service (after config changes)
systemctl --user restart smoothie-docs

# Stop the service
systemctl --user stop smoothie-docs

# Start the service
systemctl --user start smoothie-docs

# View logs
journalctl --user -u smoothie-docs -f
```

**Service Details:**
- **Service name:** `smoothie-docs`
- **Container name:** `smoothie-docs-user`; the retired system service uses `smoothie-docs-container`
- **Installed user unit:** `~/.config/systemd/user/smoothie-docs.service`
- **Versioned unit source:** `agent-docs/systemd/smoothie-docs.service`
- **Auto-start:** Enabled by the one-time migration; the Docker daemon must already be available. The unit retries failures with a bounded start rate.
- **Scheduling:** Docker client uses `background-work.slice`; Jekyll starts with nice19 and idle I/O inside its container. Container CPU affinity excludes desktop threads and its CPU cap is eight CPUs.
- **Git:** Repository mounted read-only at `/workspace`, with its existing writable `docs/` mount at `/workspace/docs`; Git can discover the parent repository across that mount boundary.
- **Listener:** `127.0.0.1:4000` only.

## One-time system-to-user handover

The prepared `/tmp/migrate-smoothie-docs-to-user-service.sh` is run once by the user:

```sh
sudo sh /tmp/migrate-smoothie-docs-to-user-service.sh
```

It verifies the reviewed system/user unit hashes, stops and disables only the old system Jekyll unit, preserves its file at `/etc/systemd/system/smoothie-docs.service.retired-20261017`, masks that system-unit name to prevent a duplicate listener, checks/stops only a positively identified legacy orphan container, verifies that no unrelated Docker publication or host listener occupies port4000, and enables/starts Arthur’s installed user unit. It leaves the Docker daemon, socket permissions, other services and unrelated containers untouched. The old unit’s drop-in is retained with its configuration. Once the user confirms the script ran, the agent verifies the actual user service and served page, removes the one-use `/tmp` script, and updates this migration-status paragraph.

The existing root service had an `ExecStartPost` helper that could inspect the container before Docker created it and fail startup. The user unit applies priority inside the container, avoiding that helper. Mounting only `docs/` also hid Git metadata; the repository mount corrects discovery without inventing a repository.

For rollback, stop/disable the user unit first. Root access is then needed to remove only the `/etc/systemd/system/smoothie-docs.service` mask symlink, rename the retained `.retired-20261017` unit back to that path, reload the system manager and start the old unit. The old unit’s startup race remains present; rollback restores its configuration rather than repairing it.

The legacy `serve-local.sh` is not the user-service entrypoint. Use the user-service commands above.

**IMPORTANT: Restarting the Server for Configuration Changes**

Jekyll automatically reloads when content files (`.md`) change, but **does NOT reload when `docs/_config.yml` is modified**. After changing configuration, themes, or other `_config.yml` settings, the server MUST be restarted.

**Coding agents:** When `_config.yml` changes are made, inform the user:
> "I've modified `docs/_config.yml`. Please restart the Jekyll service for changes to take effect: `systemctl --user restart smoothie-docs`"

**Changes that require restart:**
- Modifying `docs/_config.yml` (theme, baseurl, plugins, etc.)
- Adding new plugins
- Changing Jekyll configuration
- Modifying site-wide settings
- Changing `includes_dir` setting

**Changes that auto-reload (no restart needed):**
- Editing content files (`.md`)
- Modifying CSS in `docs/assets/css/`
- Modifying JavaScript in `docs/assets/js/`
- Adding/changing images
- Updating HTML in `docs/_layouts/default.html` (usually)
- Changing Handlebars templates in `docs/assets/templates/`
- Updating YAML data in `docs/assets/data/`
