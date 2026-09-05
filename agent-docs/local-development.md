# Local Development

Reference doc for running/restarting the local Jekyll dev server and for what triggers a restart. Linked from `CLAUDE.md` — not part of the published site (this directory is outside `/docs`, the GitHub Pages source).

The local Jekyll development server runs as a **systemctl service** (`smoothie-docs`) using Docker. This service starts automatically on boot.

**CRITICAL: Coding agents (Claude Code, Gemini, Codex, etc.) must NEVER start or restart the Jekyll service themselves. Instead, ASK THE USER to run the appropriate command.**

**Service URL:** http://localhost:4000

**Service Management Commands (for the user to run):**
```bash
# Check service status
sudo systemctl status smoothie-docs

# Restart the service (after config changes)
sudo systemctl restart smoothie-docs

# Stop the service
sudo systemctl stop smoothie-docs

# Start the service
sudo systemctl start smoothie-docs

# View logs
sudo journalctl -u smoothie-docs -f
```

**Service Details:**
- **Service name:** `smoothie-docs`
- **Container name:** `smoothie-docs-container`
- **Service file:** `/etc/systemd/system/smoothie-docs.service`
- **Auto-start:** Enabled (starts on boot after Docker service)

**Legacy Manual Start (if service not installed):**

The project also includes `serve-local.sh` for manual Docker startup:
```bash
./serve-local.sh
```

**IMPORTANT: Restarting the Server for Configuration Changes**

Jekyll automatically reloads when content files (`.md`) change, but **does NOT reload when `docs/_config.yml` is modified**. After changing configuration, themes, or other `_config.yml` settings, the server MUST be restarted.

**Coding agents:** When `_config.yml` changes are made, inform the user:
> "I've modified `docs/_config.yml`. Please restart the Jekyll service for changes to take effect: `sudo systemctl restart smoothie-docs`"

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
