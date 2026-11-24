# Local Development

Reference doc for running/restarting the local Jekyll dev server and for what triggers a restart. Linked from `CLAUDE.md` — not part of the published site (this directory is outside `/docs`, the GitHub Pages source).

The local Jekyll development server is managed by Arthur’s **user systemd service** (`smoothie-docs.service`) using the existing Docker daemon and `starefossen/github-pages` image. Routine management requires no sudo. Enable it with `systemctl --user enable --now smoothie-docs`; Arthur’s existing linger setting permits startup without an interactive login.

Service status (2026-10-18): the old system unit is stopped and disabled. Arthur’s user unit is enabled and running, with startup allowed by the existing linger setting. Never start both services on port 4000. No root handover is currently required.

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
- **Container name:** `smoothie-docs-user`; the disabled system service uses `smoothie-docs-container`
- **Installed user unit:** `~/.config/systemd/user/smoothie-docs.service`
- **Versioned unit source:** `agent-docs/systemd/smoothie-docs.service`
- **Auto-start:** Enabled with `systemctl --user enable --now smoothie-docs`; the Docker daemon must already be available. The unit retries failures with a bounded start rate.
- **Scheduling:** Docker client uses `background-work.slice`; Jekyll starts with nice19 and idle I/O inside its container. Container CPU affinity excludes desktop threads and its CPU cap is six CPUs.
- **Git:** Repository mounted read-only at `/workspace`, with its existing writable `docs/` mount at `/workspace/docs`; Git can discover the parent repository across that mount boundary.
- **Listener:** `127.0.0.1:4000` only.

## System-to-user transition

On 2026-10-18, both preview services were inactive after a machine restart, the old system service was already disabled, and port 4000 was free. The installed user service was enabled and started without root. The previously prepared one-time `/tmp` handover script is no longer present and is not needed for this state. The old system unit remains on disk, disabled; do not re-enable it alongside the user service.

The old root service had an `ExecStartPost` helper that could inspect the container before Docker created it and fail startup. The user unit applies priority inside the container, avoiding that helper. Mounting only `docs/` also hid Git metadata; the repository mount corrects discovery.

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
