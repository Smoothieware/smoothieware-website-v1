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
├── _config.yml          # Jekyll configuration
├── docs/                # Documentation content (served by GitHub Pages)
│   ├── index.md        # Homepage
│   ├── *.md            # 277+ documentation pages
│   └── images/         # Images and assets
├── LICENSE             # GNU GPL v3 license
└── README.md           # This file
```

## GitHub Pages Setup

### How It Works

- **Hosting**: GitHub Pages serves from the `/docs` folder on the `main` branch
- **Custom Domain**: [smoothieware.org](https://smoothieware.org)
- **Build System**: Jekyll automatically builds when changes are pushed
- **Theme**: Uses the Primer theme for clean, modern appearance

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

### Making Changes

1. Edit `.md` files in the `/docs` folder
2. Add images to `/docs/images/` and reference with `/images/filename.png`
3. Commit and push - GitHub Pages rebuilds automatically (1-2 minutes)

## Documentation Organization

### Step-by-Step Guides
- [3D Printer Guide](docs/3d-printer-guide.md)
- [Laser Cutter Guide](docs/laser-cutter-guide.md)
- [CNC Mill Guide](docs/cnc-mill-guide.md)
- [Pick and Place Guide](docs/pick-and-place.md)

### Firmware Documentation
- Configuration and setup
- Motion control systems
- Communication (Network, USB, UART, Bluetooth, Wifi)
- Tools (Extruder, Temperature control, Laser, Endstops, etc.)

### Hardware Documentation
- Smoothieboard versions and specifications
- Pinout diagrams
- Wiring tutorials and best practices

### Developer Documentation
- Architecture and design
- Coding standards
- Module development
- Contributing guidelines

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

## License

Smoothieware is released under the [GNU GPL v3](http://www.gnu.org/licenses/gpl-3.0.en.html).
