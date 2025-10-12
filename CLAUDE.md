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
├── _config.yml          # Jekyll configuration (baseurl: "/docs")
├── docs/                # All content served by GitHub Pages
│   ├── index.md        # Homepage (main entry point)
│   ├── *.md            # 277+ documentation pages
│   └── images/         # Image assets organized by category
├── LICENSE
└── README.md
```

## Technology Stack

### Core Technologies

- **Jekyll**: Static site generator (GitHub Pages default)
- **Markdown**: Primary content format (GFM - GitHub Flavored Markdown)
- **Liquid**: Template engine for includes and variables
- **Git**: Version control
- **GitHub Pages**: Automated hosting and deployment

### Build Process

1. Push to `main` branch triggers GitHub Pages build
2. Jekyll processes markdown files from `/docs` folder
3. Liquid templates resolve `{% include_relative %}` directives
4. Site builds and deploys automatically to smoothieware.org
5. Typical deployment time: 1-2 minutes

## File Organization

### Content Structure

- **Flat hierarchy**: All `.md` files live directly in `/docs`
- **No subdirectories** for pages (only `/docs/images/` for assets)
- **277+ markdown files** covering all documentation
- **Modular includes**: Reusable content blocks via `{% include_relative %}`

### Naming Conventions

- **Files**: lowercase with hyphens (e.g., `3d-printer-guide.md`)
- **Links**: Case-sensitive (prefer lowercase for compatibility)
- **Images**: Descriptive names in `/docs/images/`
- **Blog posts**: Pattern `blog_N.md` where N is a number

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
- **Custom Domain**: smoothieware.org (set in repo settings, not CNAME file)
- **Jekyll Build**: Automatic on push to main
- **Base URL**: `/docs` (configured in `_config.yml`)
- **Theme**: Default GitHub Pages (minimal)

### URL Structure

- **GitHub URL**: https://smoothieware.github.io/smoothieware-website-v1/
  - ↳ Redirects to custom domain
- **Custom Domain**: https://smoothieware.org
  - ↳ Final public-facing URL

## Working with This Repository

### Content Editing Workflow

1. **Edit files** in `/docs` folder only
2. **Use lowercase links** for cross-references: `[text](page-name.md)`
3. **Image paths** must be absolute: `/images/filename.png`
4. **Test locally** with Jekyll before pushing (optional but recommended)
5. **Commit and push** to `main` branch
6. **Wait 1-2 minutes** for GitHub Pages to rebuild

### Jekyll Includes

The site uses `{% include_relative filename.md %}` for modular content:

```markdown
{% include_relative unboxing.md %}
{% include_relative warning.md %}
{% include_relative donate.md %}
```

These are resolved at build time by Jekyll.

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

Jekyll automatically reloads when content files (`.md`) change, but **does NOT reload when `_config.yml` is modified**. After changing configuration, themes, or other `_config.yml` settings, you MUST restart the server:

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
- Modifying `_config.yml` (theme, baseurl, plugins, etc.)
- Adding new plugins
- Changing Jekyll configuration
- Modifying site-wide settings

**Changes that auto-reload (no restart needed):**
- Editing content files (`.md`)
- Modifying CSS in `docs/assets/`
- Adding/changing images
- Updating HTML in `_layouts/` or `_includes/`

### Adding New Content

**New Documentation Page:**
1. Create `docs/new-page.md`
2. Add content in markdown
3. Link from relevant existing pages
4. Push to deploy

**New Images:**
1. Add to `docs/images/`
2. Reference with `/images/filename.png`
3. Use descriptive filenames

**New Section/Guide:**
1. Create main page: `docs/new-guide.md`
2. Create include files for modular sections
3. Use `{% include_relative %}` to compose
4. Update `docs/index.md` to link to new guide

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
2. **Use lowercase filenames** - ensures cross-platform compatibility
3. **Absolute paths for images** - always `/images/...`
4. **Test includes** - verify `{% include_relative %}` paths are correct
5. **Check links** - ensure relative links use correct casing

### Common Pitfalls to Avoid

- ❌ Don't create subdirectories in `/docs` (except images)
- ❌ Don't use uppercase in new filenames
- ❌ Don't use relative image paths like `images/...` or `../images/...`
- ❌ Don't edit `_config.yml` without understanding Jekyll implications
- ❌ Don't assume changes are live immediately (wait 1-2 minutes)

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

1. **Understand the context**: This is a documentation website, not a software application
2. **Respect the structure**: Don't suggest restructuring into subdirectories
3. **Follow conventions**: Lowercase filenames, absolute image paths
4. **Test suggestions**: Recommend local Jekyll testing before pushing
5. **Preserve content**: Be cautious about large-scale changes to existing docs
6. **Link awareness**: Check that suggested links match actual filenames

### Typical Tasks

- Updating existing documentation pages
- Adding new documentation sections
- Fixing broken links or images
- Improving content organization
- Adding new guides or tutorials
- Updating configuration options documentation

### What NOT to Do

- Don't add build tooling (webpack, npm, etc.) - this is pure Jekyll
- Don't create complex directory structures
- Don't add frontend frameworks - this is a simple docs site
- Don't modify GitHub Pages settings without clear reason
- Don't add databases or backend services

## Contact & Support

- **Project Maintainer**: Arthur Wolf (wolf.arthur@gmail.com)
- **Community**: IRC #smoothiedev @ irc.freenode.net
- **Issues**: Use Smoothieware/Smoothieware repo issue tracker

---

*This CLAUDE.md file provides context for AI assistants working on the Smoothieware documentation website. Last updated: 2025-10-12*
