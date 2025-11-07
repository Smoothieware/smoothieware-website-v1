# CLAUDE.md - Smoothieware Documentation Website

## Project Overview

This is the **Smoothieware Documentation Website** repository, a Jekyll-based GitHub Pages site hosted at **[smoothieware.org](https://smoothieware.org)**. The repository contains comprehensive documentation for Smoothieware, an opensource G-code interpreter and CNC control system.

### Key Facts

- **Project Type**: Documentation website (Jekyll + GitHub Pages)
- **Primary Language**: Markdown
- **Hosting**: GitHub Pages with custom domain
- **Repository**: Smoothieware/smoothieware-website-v1
- **Live URL**: https://smoothieware.org
- **License**: GNU GPL v3

## Repository Structure

```
smoothieware-website-v1/
├── docs/                           # GitHub Pages source directory
│   ├── _config.yml                 # Jekyll configuration (baseurl: "")
│   ├── _layouts/                   # Custom page layouts
│   │   └── default.html            # Main layout with Midnight theme
│   ├── assets/                     # Static assets and data
│   │   ├── css/                    # Stylesheets
│   │   ├── js/                     # JavaScript (compiled TypeScript)
│   │   ├── templates/              # Handlebars templates (.hbs)
│   │   ├── data/                   # YAML configuration databases
│   │   └── config/                 # Config file samples (v1/v2)
│   ├── images/                     # Image assets organized by topic
│   ├── community/                  # Community resources
│   ├── configuration/              # Configuration documentation
│   ├── debug/                      # Debug and testing pages
│   ├── developers/                 # Developer documentation
│   ├── drivers/                    # Driver documentation
│   ├── firmware/                   # Firmware documentation
│   ├── gcode-reference/            # G-code reference
│   ├── getting-started/            # Getting started guides
│   ├── hardware/                   # Hardware documentation (6 subdirs)
│   ├── landing-pages/              # Landing/intro pages
│   ├── machine-guides/             # Machine-specific guides (4 subdirs)
│   ├── meta/                       # Meta documentation
│   ├── migration/                  # Migration guides (v1 → v2)
│   ├── modules/                    # Module documentation
│   ├── project/                    # Project information
│   ├── software/                   # Software documentation (3 subdirs)
│   ├── troubleshooting/            # Troubleshooting guides
│   ├── index.md                    # Homepage
│   └── CNAME                       # Custom domain
├── LICENSE                         # GNU GPL v3
├── README.md                       # Repository documentation
├── CLAUDE.md                       # This file
└── serve-local.sh                  # Docker-based local dev server
```

**Key Statistics**:
- 292 markdown documentation files
- 23 main content directories
- Custom Midnight theme with Shoelace components
- YAML configuration database (346 v1 settings + v2)

## Technology Stack

### Core Technologies

- **Jekyll**: Static site generator (GitHub Pages)
- **Theme**: GitHub Pages Midnight theme (`pages-themes/midnight@v0.2.0`)
- **Markdown**: Primary content format (GFM - GitHub Flavored Markdown via Kramdown)
- **Liquid**: Template engine for includes and variables
- **Shoelace**: Web components library for interactive UI elements
- **Handlebars**: Client-side template engine for dynamic content
- **TypeScript/JavaScript**: Interactive features (compiled to JS)
- **YAML**: Configuration database (346 v1 settings, v2 support)
- **Git**: Version control
- **GitHub Pages**: Automated hosting and deployment

### Build Process

1. Push to `main` branch triggers GitHub Pages build
2. Jekyll processes markdown files from `/docs` folder
3. Jekyll plugins handle:
   - Optional front matter extraction
   - Automatic title extraction from H1 headings
   - Relative link conversion
   - GitHub metadata injection
4. Liquid templates resolve in `_layouts/default.html`
5. `{% include_relative %}` directives are processed
6. Site builds and deploys automatically to smoothieware.org
7. Typical deployment time: 1-2 minutes

### Site Architecture Quick Reference

**Configuration**: `docs/_config.yml` with 6 Jekyll plugins (remote-theme, optional-front-matter, relative-links, titles-from-headings, github-metadata, redirect-from). Midnight theme, baseurl: "", includes_dir: "."

**Custom Components**:
- `<setting v1="..." v2="..."></setting>` - Interactive config tooltips (YAML-backed)
- Shoelace: `<sl-alert>`, `<sl-button>`, `<sl-dropdown>`, `<sl-icon>`
- Kramdown raw HTML: `{::nomarkdown}...<sl-alert>...</sl-alert>...{:/nomarkdown}`

**Data Files**: `docs/assets/data/*.yaml` - 346 v1 settings, v2 config database

**Templates**: `docs/assets/templates/*.hbs` - Handlebars for client-side rendering

**JavaScript**: `docs/assets/js/*.js` - Pre-compiled TypeScript (setting-tag.js, load-assets.js, config-finder.js, animate.js)

**Layout**: `docs/_layouts/default.html` - Custom Midnight theme with nav, dark mode, OSHW branding

**Front Matter**: Optional YAML for permalink, layout, title (auto-extracted from H1 if missing)

**Debug**: `/debug-settings` page tests all setting tag features

## File Organization

### Content Structure

- **Hierarchical organization**: Content organized into 23 logical subdirectories
- **292 markdown files** covering all documentation
- **Modular includes**: Reusable content blocks via `{% include_relative %}`
- **Front matter**: YAML front matter for metadata (permalink, layout, title)
- **Custom components**: `<setting>` tags for configuration documentation
- **Shoelace components**: `<sl-alert>`, `<sl-button>`, `<sl-dropdown>`, `<sl-icon>`, etc.

### Naming Conventions

- **Files**: lowercase with hyphens (e.g., `3d-printer-guide.md`)
- **Directories**: lowercase with hyphens (e.g., `machine-guides/`)
- **Links**: Case-sensitive (prefer lowercase for compatibility)
- **Images**: Descriptive names in `/docs/images/` with subdirectories
- **Templates**: Handlebars files in `assets/templates/` (`.hbs` extension)
- **Data files**: YAML files in `assets/data/` (`.yaml` extension)

### Image Organization

```
docs/images/
├── smoothieboard/      # Board-specific images
├── gallery/            # Photo gallery images
├── blog_3/            # Blog post images
├── nav_top/           # Navigation images
├── rrdglcdadapter/    # Adapter images
└── *.png, *.jpg       # General images
```

## GitHub Pages Configuration

### Settings

- **Source**: `/docs` folder on `main` branch
- **Custom Domain**: smoothieware.org (set in repo settings + CNAME file)
- **Jekyll Build**: Automatic on push to main
- **Base URL**: `` (empty string, configured in `docs/_config.yml`)
- **Theme**: GitHub Pages Midnight theme (`pages-themes/midnight@v0.2.0`)
- **Plugins**: 6 Jekyll plugins enabled (remote-theme, optional-front-matter, relative-links, titles-from-headings, github-metadata, redirect-from)

### URL Structure

- **GitHub URL**: https://smoothieware.github.io/smoothieware-website-v1/
  - ↳ Redirects to custom domain
- **Custom Domain**: https://smoothieware.org
  - ↳ Final public-facing URL

## Working with This Repository

### Content Editing Workflow

1. **Edit files** in appropriate `/docs` subdirectory
2. **Add front matter** (optional but recommended):
   ```yaml
   ---
   permalink: /custom-url
   layout: default
   title: Page Title
   ---
   ```
3. **Use lowercase links** for cross-references: `[text](page-name.md)` or `[text](subdirectory/page-name.md)`
4. **Image paths** must be absolute: `/images/filename.png`
5. **Use custom components**:
   - `<setting v1="..." v2="..."></setting>` for config options
   - `<sl-alert variant="...">` for alerts
   - `<sl-button>` for buttons
6. **Test locally** with Docker (`./serve-local.sh`) or Jekyll
7. **Commit and push** to `main` branch
8. **Wait 1-2 minutes** for GitHub Pages to rebuild

### Jekyll Includes and Templates

**Jekyll Includes** (server-side):
```markdown
{% include_relative unboxing.md %}
{% include_relative warning.md %}
{% include_relative donate.md %}
```

**Kramdown Raw HTML** (for Shoelace components):
```markdown
{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Content here
</sl-alert>
{:/nomarkdown}
```

**Handlebars Templates** (client-side in `assets/templates/`):
- Rendered by JavaScript for dynamic content
- Used for configuration tooltips and panels
- Loaded from `.hbs` files

### Local Development

To test changes locally:

```bash
# Install Jekyll (one-time setup)
gem install bundler jekyll

# Serve locally from project root
jekyll serve --source docs --baseurl ""

# View at http://localhost:4000
```

**Docker-based Local Development:**

The project includes `serve-local.sh` which runs Jekyll in a Docker container:

```bash
# Start Jekyll server in Docker
./serve-local.sh

# Server runs on http://localhost:4000
```

**IMPORTANT: Restarting the Server for Configuration Changes**

Jekyll automatically reloads when content files (`.md`) change, but **does NOT reload when `docs/_config.yml` is modified**. After changing configuration, themes, or other `_config.yml` settings, you MUST restart the server:

**If using Docker (serve-local.sh):**
```bash
# Find the container ID
docker ps

# Restart the container
docker restart <container-id>

# Or stop and restart fresh
docker stop <container-id>
./serve-local.sh
```

**If using local Jekyll:**
```bash
# Stop server (Ctrl+C)
# Restart with:
jekyll serve --source docs --baseurl ""
```

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

### Adding New Content

**New Documentation Page:**
1. Choose appropriate subdirectory (e.g., `docs/configuration/`)
2. Create `new-page.md` with front matter:
   ```yaml
   ---
   permalink: /new-page
   layout: default
   title: New Page Title
   ---
   ```
3. Add content in markdown (use Shoelace components as needed)
4. Link from relevant existing pages
5. Test locally, then push to deploy

**New Images:**
1. Add to appropriate subdirectory in `docs/images/`
2. Reference with absolute path: `/images/subdirectory/filename.png`
3. Use descriptive filenames (lowercase with hyphens)

**New Section/Category:**
1. Create subdirectory: `docs/new-category/`
2. Create index page: `docs/new-category/index.md`
3. Add pages to subdirectory
4. Update navigation in `docs/_layouts/default.html` if needed
5. Link from `docs/index.md`

**New Configuration Settings:**
1. Update `docs/assets/data/smoothieware-v1-config.yaml`
2. Use `<setting>` tags in documentation: `<setting v1="..." v2="..."></setting>`
3. Test on `/debug-settings` page

## Content Categories

### Main Documentation Types

1. **Guides** (Step-by-step tutorials)
   - 3D printer setup
   - Laser cutter configuration
   - CNC mill setup
   - Pick and place machines

2. **Firmware Documentation**
   - Configuration options
   - Motion control
   - Communication protocols
   - Tools and modules

3. **Hardware Documentation**
   - Board specifications
   - Pinouts and wiring
   - Hardware versions

4. **Developer Documentation**
   - Architecture guides
   - Coding standards
   - Module development
   - Contribution guidelines

## Important Notes & Best Practices

### Critical Rules

1. **Only edit files in `/docs`** - root files are config/meta only
2. **Use lowercase filenames and directories** - ensures cross-platform compatibility
3. **Absolute paths for images** - always `/images/...`
4. **Use front matter** - for custom permalinks and metadata
5. **Test includes** - verify `{% include_relative %}` paths are correct
6. **Check links** - ensure relative links use correct casing
7. **Use Shoelace components** - for consistent UI (alerts, buttons, dropdowns)
8. **Update YAML data** - when adding configuration options
9. **Test locally** - use `./serve-local.sh` before pushing

### Common Pitfalls to Avoid

- ❌ Don't create files in `/docs` root - use appropriate subdirectories
- ❌ Don't use uppercase in new filenames or directories
- ❌ Don't use relative image paths like `images/...` or `../images/...`
- ❌ Don't edit `docs/_config.yml` without understanding Jekyll implications
- ❌ Don't assume changes are live immediately (wait 1-2 minutes)
- ❌ Don't forget to restart server after config changes
- ❌ Don't use raw HTML without `{::nomarkdown}` wrapper
- ❌ Don't add large binary files (compress images first)
- ❌ Don't forget front matter for custom permalinks

### Link Formatting

**Correct:**
```markdown
[Configuration Guide](configuring-smoothie.md)
![Board Image](/images/smoothieboard.png)
```

**Incorrect:**
```markdown
[Configuration Guide](Configuring-Smoothie.md)  # Case mismatch
![Board Image](images/smoothieboard.png)         # Missing leading slash
![Board Image](../images/smoothieboard.png)      # Relative path
```

## Deployment & Publishing

### Automatic Deployment

- **Trigger**: Push to `main` branch
- **Build**: GitHub Pages runs Jekyll automatically
- **Deploy**: Updates smoothieware.org within 1-2 minutes
- **Status**: Check GitHub Actions (if enabled) or wait for live site

### Manual Testing Before Deploy

```bash
# Local preview
jekyll serve --source docs --baseurl ""

# Check for broken links (if tool available)
# Check image paths
# Verify includes resolve correctly
```

### Emergency Rollback

If a deployment breaks the site:
```bash
git revert HEAD
git push origin main
```

## Related Resources

- **Main Firmware Repo**: https://github.com/Smoothieware/Smoothieware
- **Issue Tracker**: https://github.com/Smoothieware/Smoothieware/issues
- **Jekyll Docs**: https://jekyllrb.com/docs/
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Markdown Guide**: https://www.markdownguide.org/

## Project-Specific AI Assistant Guidelines

### When Working on This Project

1. **Understand the context**: This is a documentation website with advanced interactive features
2. **Respect the structure**: Content is organized into 23 logical subdirectories
3. **Follow conventions**: Lowercase filenames, absolute image paths, front matter
4. **Use components**: Leverage Shoelace components and custom `<setting>` tags
5. **Test suggestions**: Recommend local Jekyll testing (`./serve-local.sh`) before pushing
6. **Preserve content**: Be cautious about large-scale changes to existing docs
7. **Link awareness**: Check that suggested links match actual filenames and directories
8. **Data awareness**: Update YAML configuration database when documenting settings

### Typical Tasks

- Updating existing documentation pages
- Adding new documentation sections to appropriate subdirectories
- Fixing broken links or images
- Improving content organization within subdirectories
- Adding new guides or tutorials
- Updating configuration options documentation
- Adding configuration settings to YAML database
- Creating interactive documentation with Shoelace components
- Updating custom `<setting>` tags
- Improving navigation and layout
- Testing interactive features on debug pages

### What NOT to Do

- Don't add build tooling (webpack, npm, etc.) - Jekyll only
- Don't modify the existing directory structure without good reason
- Don't add frontend frameworks beyond Shoelace - keep it simple
- Don't modify GitHub Pages settings without clear reason
- Don't add databases or backend services (YAML data files are OK)
- Don't remove Shoelace or Midnight theme without consultation
- Don't modify TypeScript compilation setup (JS files are pre-compiled)
- Don't change `baseurl` in `_config.yml` (should remain empty string)

## Contact & Support

- **Project Maintainer**: Arthur Wolf (wolf.arthur@gmail.com)
- **Community**: IRC #smoothiedev @ irc.freenode.net
- **Issues**: Use Smoothieware/Smoothieware repo issue tracker

---

*This CLAUDE.md file provides context for AI assistants working on the Smoothieware documentation website. Last updated: 2025-11-07*
