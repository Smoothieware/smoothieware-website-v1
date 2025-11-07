# Smoothieware Documentation Website

<img src="docs/images/oshw-logo.png" alt="Smoothie Logo" width="100" height="100">

**Smoothie** is a **free, opensource, high performance** and modular **G-code** interpreter and **CNC** control system for the powerful **Smoothieboard** 32-bit controller. It's designed to be very user-friendly and hacker-friendly.

The Smoothie project is a free community-built open-source controller board and firmware project aimed at all digital fabrication machines (3D printers, CNC mills, laser cutters, and more).

It started years ago as an offshoot of the Reprap project electronics, aimed at adding the following:

- Use more powerful hardware (32 bits vs 8 bits)
- Be more modular/easier to modify, with cleaner code
- Support not just 3D printers but also lasers, CNC mills/routers out of the box
- Easier to use with more complete, beginner-friendly documentation (Smoothie introduced simple "edit text file and done" configuration)

> **Note:** Smoothieboard v2 is now on Kickstarter! Get your board [here](https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2).

## Repository Structure

This repository contains the documentation website hosted at **[smoothieware.org](https://smoothieware.org)** using GitHub Pages.

```
smoothieware-website-v1/
├── docs/                           # GitHub Pages source directory
│   ├── _config.yml                 # Jekyll configuration
│   ├── _layouts/                   # Custom page layouts
│   │   └── default.html            # Main layout template
│   ├── assets/                     # Static assets and data
│   │   ├── css/                    # Stylesheets
│   │   ├── js/                     # JavaScript files (compiled TypeScript)
│   │   ├── templates/              # Handlebars templates (.hbs)
│   │   ├── data/                   # YAML configuration databases
│   │   └── config/                 # Config file samples (v1/v2)
│   ├── images/                     # Image assets (organized by topic)
│   ├── community/                  # Community resources
│   ├── configuration/              # Configuration documentation
│   ├── developers/                 # Developer documentation
│   ├── firmware/                   # Firmware documentation
│   ├── gcode-reference/            # G-code reference
│   ├── getting-started/            # Getting started guides
│   ├── hardware/                   # Hardware documentation
│   ├── machine-guides/             # Machine-specific guides
│   ├── modules/                    # Module documentation
│   ├── software/                   # Software documentation
│   ├── troubleshooting/            # Troubleshooting guides
│   ├── index.md                    # Homepage
│   └── CNAME                       # Custom domain
├── LICENSE                         # GNU GPL v3 license
├── README.md                       # This file
├── CLAUDE.md                       # AI assistant guidelines
└── serve-local.sh                  # Docker-based local dev server
```

**Content Statistics**:
- 292 markdown documentation files
- Organized into 23 logical subdirectories
- Custom Midnight theme with Shoelace components
- Interactive configuration documentation system

## GitHub Pages Setup

### How It Works

- **Hosting**: GitHub Pages serves from the `/docs` folder on the `main` branch
- **Custom Domain**: [smoothieware.org](https://smoothieware.org)
- **Build System**: Jekyll automatically builds when changes are pushed
- **Theme**: GitHub Pages Midnight theme (`pages-themes/midnight@v0.2.0`)
- **Components**: Shoelace web components for interactive UI elements
- **Configuration**: Advanced YAML-based configuration database (346 v1 settings, v2 support)

### Local Development

To test changes locally before pushing:

1. Install Jekyll:
   ```bash
   gem install bundler jekyll
   ```

2. Serve the site locally:
   ```bash
   jekyll serve --source docs --baseurl ""
   ```

3. View at `http://localhost:4000`

**Using Docker (recommended):**

The project includes `serve-local.sh` for Docker-based development:

```bash
./serve-local.sh
```

**Restarting After Configuration Changes:**

Jekyll auto-reloads content files but **NOT** `_config.yml`. After changing themes, plugins, or other config settings, restart the server:

```bash
# Find Docker container
docker ps

# Restart it
docker restart <container-id>
```

Or stop and run `./serve-local.sh` again.

### Making Changes

1. Edit `.md` files in the appropriate `/docs` subdirectory
2. Add images to `/docs/images/` and reference with `/images/filename.png`
3. Use front matter for custom permalinks:
   ```yaml
   ---
   permalink: /my-custom-url
   layout: default
   title: Page Title
   ---
   ```
4. Commit and push - GitHub Pages rebuilds automatically (1-2 minutes)

**Note:**
- Changes to `docs/_config.yml` require a server restart locally (see above)
- Use `<setting>` tags for configuration options: `<setting v1="..." v2="..."></setting>`
- Shoelace components available: `<sl-alert>`, `<sl-button>`, `<sl-icon>`, etc.

## Documentation Organization

### Main Categories (23 Directories)

1. **community/** - Community resources (IRC, forums, Discord, mailing lists)
2. **configuration/** - Configuration guides and tools
3. **developers/** - Developer documentation and APIs
4. **firmware/** - Firmware features and internals
5. **gcode-reference/** - G-code command reference
6. **getting-started/** - New user guides
7. **hardware/** - Physical hardware documentation
8. **machine-guides/** - Machine-specific setup guides
   - 3D printers, laser cutters, CNC mills, pick-and-place
9. **modules/** - Firmware module documentation
10. **software/** - CAM software, host software, web interface
11. **troubleshooting/** - Problem-solving guides
12. And more...

### Key Pages

- [Homepage](docs/index.md) - Main entry point
- [Getting Started](docs/getting-started/) - New user guides
- [Configuration](docs/configuration/configuring-smoothie.md) - Setup and config
- [Machine Guides](docs/machine-guides/) - Machine-specific tutorials

## Links

- **Live Website**: [smoothieware.org](https://smoothieware.org)
- **Firmware Source**: [github.com/Smoothieware/Smoothieware](https://github.com/Smoothieware/Smoothieware)
- **Issue Tracker**: [github.com/Smoothieware/Smoothieware/issues](https://github.com/Smoothieware/Smoothieware/issues)
- **Kickstarter**: [Smoothieboard v2](https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2)

## Contributing

The Smoothie project is always looking for help! Whatever your skills are, there are things you can do to improve the project with other volunteers. If you feel like you could give us some of your free time, please [contact us](mailto:wolf.arthur@gmail.com). **Help and teamwork** is what has made this project so neat, advanced and precious over the years, and is **very welcome**.

We welcome contributions:
- [Contribution Guidelines](docs/contribution-guidlines.md)
- [Developer's Guide](docs/developers-guide.md)
- [Coding Standards](docs/coding-standards.md)
- [Contributors](https://github.com/Smoothieware/Smoothieware/graphs/contributors)

### Donations

The Smoothie firmware is free, open-source software developed by volunteers. If you find this software useful, want to say thanks and encourage development, please consider a [Donation](https://paypal.me/smoothieware).

## Advanced Features

### Interactive Configuration System

- **YAML Configuration Database**: 346 v1 settings + v2 support
- **Custom `<setting>` Tags**: Interactive tooltips showing v1 ↔ v2 mapping
- **Handlebars Templates**: Dynamic rendering of configuration data
- **Debug Page**: `/debug-settings` demonstrates all features

### Shoelace Components

The site uses Shoelace web components for modern UI:
- `<sl-alert>` - Alert boxes with icons
- `<sl-button>` - Styled buttons
- `<sl-dropdown>` / `<sl-menu>` - Navigation dropdowns
- `<sl-icon>` - Icon library

### Custom Theme

- **Base**: GitHub Pages Midnight theme
- **Customizations**: Custom navigation, dark mode, OSHW branding
- **Fonts**: Montserrat from Google Fonts
- **Responsive**: Mobile-friendly design

## Site Architecture & Technical Details

### Jekyll Configuration

The site uses Jekyll with several important plugins and settings configured in `docs/_config.yml`:

**Theme & Plugins:**
- **Theme**: `pages-themes/midnight@v0.2.0` (GitHub Pages Midnight theme)
- **Markdown**: Kramdown with GFM (GitHub Flavored Markdown)
- **Plugins**:
  - `jekyll-remote-theme` - Load theme from GitHub
  - `jekyll-optional-front-matter` - Process MD files without front matter
  - `jekyll-relative-links` - Auto-convert relative links
  - `jekyll-titles-from-headings` - Extract titles from H1
  - `jekyll-github-metadata` - GitHub repo metadata
  - `jekyll-redirect-from` - URL redirection support

**Key Settings:**
- `baseurl: ""` - Empty string (not `/docs`)
- `includes_dir: "."` - Current directory for includes
- Default layout: `default` for all pages

### Custom Layout (`docs/_layouts/default.html`)

The custom layout provides:
- Dark theme (`sl-theme-dark`)
- Custom navigation bar with OSHW logo
- Dropdown menus for community resources
- Shoelace web components integration
- Google Fonts (Montserrat)
- Auto-loaded TypeScript/JavaScript modules

### Interactive Components

**Shoelace Web Components** (loaded from CDN):
```html
<sl-alert variant="primary">...</sl-alert>
<sl-button>...</sl-button>
<sl-dropdown>...</sl-dropdown>
<sl-icon name="...">...</sl-icon>
```

**Custom `<setting>` Tags**:
Used for configuration documentation with interactive tooltips:
```html
<setting v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting>
```

Features:
- Hover tooltips showing v1/v2 setting paths
- Monospace display (white on black)
- CSS fallback without JavaScript
- Powered by YAML configuration database

### Configuration Database

**Location**: `docs/assets/data/`

**Files**:
- `smoothieware-v1-config.yaml` - 346 settings across 11 modules
- `smoothieware-v2-config.yaml` - v2 configuration

**Database Structure**:
```yaml
metadata:
  version: v1
  total_settings: 346
  total_modules: 11

modules:
  - name: Robot & Motion Control
    setting_count: 81
    settings:
      - name: acceleration
        type: number
        default: 100.0
        units: mm/s²
        corresponding_v1: acceleration
        corresponding_v2: motion control.default_acceleration
        description: "..."
        typical_values: [...]
        related_settings: [...]
        examples: [...]
```

### Handlebars Templates

**Location**: `docs/assets/templates/`

Client-side templates for dynamic rendering:
- `setting-panel.hbs` - Full setting information panel
- `mini-setting.hbs` - Compact setting display
- `config-excerpt.hbs` - Configuration excerpts
- `tab-group.hbs` - Tabbed interface
- `error-tooltip.hbs` / `loading-tooltip.hbs` - Status messages
- And more...

### JavaScript/TypeScript

**Location**: `docs/assets/js/`

Compiled TypeScript modules:
- `load-assets.js` (312 KB) - Asset loading system
- `setting-tag.js` (474 KB) - Setting tag implementation
- `config-finder.js` (19 KB) - Configuration finder
- `animate.js` (222 KB) - Animation system

**Note**: Files are pre-compiled; TypeScript source not in repo.

### Markdown Extensions (Kramdown)

**Raw HTML Blocks**:
```markdown
{::nomarkdown}
<sl-alert variant="primary" open>
  HTML content here
</sl-alert>
{:/nomarkdown}
```

**Features**:
- Fenced code blocks
- Tables and task lists
- Automatic header IDs
- Strikethrough text

### Front Matter

All pages can use YAML front matter:
```yaml
---
permalink: /custom-url
layout: default
title: Page Title
---
```

Benefits:
- Custom URLs (cleaner permalinks)
- Override default layout
- Set page-specific metadata
- Optional (auto-extracted from H1 if missing)

### Build Process

1. **Push to main** → Triggers GitHub Pages build
2. **Jekyll processes**:
   - Reads `docs/_config.yml`
   - Processes all `.md` files in `docs/`
   - Applies plugins (front matter, links, titles)
   - Renders with `_layouts/default.html`
   - Resolves `{% include_relative %}` directives
3. **Client-side**:
   - JavaScript loads Handlebars templates
   - Setting tags query YAML database
   - Shoelace components render
4. **Deploy** → Live at smoothieware.org (1-2 minutes)

### Development Workflow

**Local Testing**:
```bash
./serve-local.sh              # Docker (recommended)
# OR
jekyll serve --source docs --baseurl ""
```

**Hot Reload**:
- ✅ Markdown files auto-reload
- ✅ CSS/JS auto-reload
- ✅ Images auto-reload
- ❌ `_config.yml` requires restart

**Restart Server**:
```bash
docker ps                      # Find container
docker restart <container-id>  # Restart
```

### File Naming Conventions

- **Markdown files**: lowercase-with-hyphens.md
- **Directories**: lowercase-with-hyphens/
- **Images**: descriptive-name.png in `/images/`
- **Templates**: template-name.hbs in `assets/templates/`
- **Data files**: config-name.yaml in `assets/data/`

### URL Structure

- **GitHub URL**: https://smoothieware.github.io/smoothieware-website-v1/
- **Custom Domain**: https://smoothieware.org (via CNAME)
- **Permalinks**: Defined in front matter or auto-generated from filename

### Best Practices

**DO**:
- ✅ Use front matter for custom permalinks
- ✅ Put files in appropriate subdirectories
- ✅ Use Shoelace components for UI elements
- ✅ Use `<setting>` tags for configuration docs
- ✅ Test locally before pushing
- ✅ Use absolute image paths: `/images/...`
- ✅ Update YAML database when documenting settings

**DON'T**:
- ❌ Create files in `/docs` root (use subdirectories)
- ❌ Use uppercase in filenames/directories
- ❌ Use relative image paths: `../images/...`
- ❌ Edit `_config.yml` without testing
- ❌ Use raw HTML without `{::nomarkdown}` wrapper
- ❌ Add large binary files (compress first)

### Debug & Testing

**Debug Page**: `/debug-settings` demonstrates:
- Setting tag functionality
- Tooltip behavior
- v1 ↔ v2 configuration mapping
- CSS fallback modes

**Test Changes**:
1. Run local server
2. Check all pages affected
3. Verify links work
4. Test Shoelace components
5. Check setting tags render
6. Push to deploy

## License

Smoothieware is released under the [GNU GPL v3](http://www.gnu.org/licenses/gpl-3.0.en.html).
