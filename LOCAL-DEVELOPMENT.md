# Local Development Guide

## Quick Start

To preview the documentation site locally with proper HTML rendering (exactly like smoothieware.org):

```bash
./serve-local.sh
```

Then open your browser to: **http://localhost:4000/**

Press `Ctrl+C` to stop the server.

## What This Does

The `serve-local.sh` script:
1. Stops any existing Docker containers on port 4000
2. Starts a Jekyll server using the GitHub Pages compatible Docker image
3. Builds and serves the site with the same rendering as smoothieware.org

## How It Works

### The Setup

This repository uses **GitHub Pages** for hosting, which automatically builds the site using Jekyll. To replicate this locally:

1. **Docker Image**: We use `starefossen/github-pages` which includes all GitHub Pages plugins
2. **Configuration**: The `_config.yml` file is set up to:
   - Process markdown files without front matter (using `jekyll-optional-front-matter`)
   - Convert relative links (using `jekyll-relative-links`)
   - Extract titles from headings (using `jekyll-titles-from-headings`)
   - Serve from the `docs/` directory

### Files Created/Modified

1. **`serve-local.sh`** - Simple script to run the local server
2. **`_config.yml`** - Jekyll configuration with GitHub Pages plugins enabled

## Requirements

- Docker installed and running
- Port 4000 available

## Workflow

### Making Changes

1. Edit markdown files in `/docs`
2. Run `./serve-local.sh`
3. View changes at `http://localhost:4000/`
4. The server auto-reloads when you save changes
5. Test with Playwright MCP if needed
6. Once satisfied, commit and push to GitHub

### Using Playwright MCP for Testing

You can use Playwright MCP to test the rendered pages:

```javascript
// Navigate to the local site
await page.goto('http://localhost:4000/');

// Click on links
await page.click('text=3D printer guide');

// Take screenshots
await page.screenshot({ path: 'test.png' });
```

## Important Notes

### Rendering Differences

The local server renders pages **exactly like** smoothieware.org:
- ✅ Markdown converted to HTML
- ✅ Links converted to `.html` files
- ✅ Jekyll includes processed
- ✅ Images rendered
- ✅ Proper page structure

### What Doesn't Work Locally

- Raw markdown servers (like Python's `http.server`) - these just show raw text
- Basic Jekyll Docker images without GitHub Pages plugins - these don't process files correctly

### Troubleshooting

**Port 4000 already in use:**
```bash
docker stop $(docker ps -q)
./serve-local.sh
```

**Changes not appearing:**
- Wait a few seconds for Jekyll to rebuild
- Check the terminal for build errors
- Ensure your file is in the `/docs` directory

**Container won't start:**
```bash
docker pull starefossen/github-pages
./serve-local.sh
```

## Alternative: GitHub for Testing

If you prefer not to use Docker, you can:
1. Commit your changes to a branch
2. Push to GitHub
3. Wait ~1-2 minutes for GitHub Pages to rebuild
4. View at smoothieware.org

But the local method is **much faster** for iteration.

## Technical Details

### Why This Works

GitHub Pages uses Jekyll with specific plugins to process markdown files that don't have YAML front matter. The configuration enables:

- **optional_front_matter**: Treats markdown files without `---` front matter as valid pages
- **relative_links**: Converts relative markdown links to `.html` links
- **titles_from_headings**: Extracts page titles from the first heading

### Docker Command Breakdown

```bash
docker run --rm \
  --volume="$PWD:/usr/src/app" \  # Mount current directory
  --publish 4000:4000 \            # Expose port 4000
  starefossen/github-pages         # GitHub Pages compatible image
```

The image reads `_config.yml` and builds the site from the `docs/` directory.
