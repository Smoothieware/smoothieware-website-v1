---
permalink: /software
---


{::nomarkdown}
<p>All software below either knows how to interface with (or how to generate G-code) for Smoothieware.</p>

<h2 id="software-list">Software list.</h2>

<style>
  .category-section {
    margin: 2rem 0;
  }

  .category-header {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--sl-color-primary-600);
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--sl-color-primary-200);
    padding-bottom: 0.5rem;
  }

  .software-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .software-card {
    max-width: none;
  }

  .software-card::part(base) {
    border-left: 4px solid var(--sl-color-primary-500);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: var(--sl-transition-medium) all;
  }

  .software-card:hover::part(base) {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .software-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--sl-color-neutral-900);
    margin: 0;
  }

  .software-type {
    font-size: 0.85rem;
    padding: 0.25rem 0.75rem;
    background: var(--sl-color-primary-100);
    color: var(--sl-color-primary-700);
    border-radius: var(--sl-border-radius-pill);
    font-weight: 500;
    white-space: nowrap;
  }

  .card-badges {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: nowrap;
  }

  .links-section {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin: 1rem 0;
  }

  .link-button {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }

  .compatibility-details {
    margin: 1rem 0;
  }

  /* Card image styling */
  .software-card img[slot="image"] {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  /* Carousel styling */
  .software-card sl-carousel[slot="image"] {
    width: 100%;
    --aspect-ratio: 16/9;
  }

  .software-card sl-carousel img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: var(--sl-color-neutral-50);
  }

  /* Carousel pagination dots */
  .software-card sl-carousel::part(pagination) {
    padding: 0.5rem;
  }

  .software-card sl-carousel::part(pagination-item) {
    background: var(--sl-color-neutral-400);
  }

  .software-card sl-carousel::part(pagination-item--active) {
    background: var(--sl-color-primary-600);
  }

  .recommended-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.6rem;
    background: #dc3545;
    color: white;
    border-radius: var(--sl-border-radius-pill);
    margin-left: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    .software-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="category-section">
  <h2 id="3d-printing-software" class="category-header">3D Printing Software</h2>
  <div class="software-grid">
    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/smoopi-8-of-8.png" alt="Smoopi Screenshot 8" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/smoopi-1-of-8.png" alt="Smoopi Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/smoopi-2-of-8.png" alt="Smoopi Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/smoopi-3-of-8.png" alt="Smoopi Screenshot 3" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/smoopi-4-of-8.png" alt="Smoopi Screenshot 4" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/smoopi-5-of-8.png" alt="Smoopi Screenshot 5" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/smoopi-6-of-8.png" alt="Smoopi Screenshot 6" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/smoopi-7-of-8.png" alt="Smoopi Screenshot 7" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">Smoopi</h3>
        <div class="card-badges">
          <span class="recommended-badge">Recommended</span>
          <span class="software-type">Host Software</span>
        </div>
      </div>

      <div class="links-section">
        <sl-button href="https://github.com/wolfmanjm/kivy-smoothie-host" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/wolfmanjm/kivy-smoothie-host/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Host specifically written for Smoothieware, runs on rpi with touch screen or a desktop.</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Designed specifically for Smoothieboard</strong> with native integration. Works on Raspberry Pi with touch screen or desktop</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/wolfmanjm/kivy-smoothie-host/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>


    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/cura-3-of-3.png" alt="Cura Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Cura</h3>
        <span class="software-type">Slicer</span>
      </div>

      <div class="links-section">
        <sl-button href="https://ultimaker.com/software/ultimaker-cura/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/Ultimaker/Cura/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Popular 3D printing slicer from Ultimaker with extensive material profiles and plugin system</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Native Smoothieware support.</strong> Users can select "Smoothie" as printer type. Generates standard G8/M80/M81 commands</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://ultimaker.com/software/ultimaker-cura/documentation" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
        <sl-button href="/cura" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="link" slot="prefix"></sl-icon>
          Smoothie Setup
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/prusaslicer.png" alt="PrusaSlicer Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">PrusaSlicer</h3>
        <span class="software-type">Slicer</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.prusa3d.com/page/prusaslicer_424" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/prusa3d/PrusaSlicer/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Fork of Slic3r with enhanced features for 3D printing</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Works with Smoothieware firmware through standard G-code output. Configure custom Smoothieware printer profiles</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://help.prusa3d.com/en/category/prusaslicer_51" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-10-of-10.png" alt="OctoPrint Screenshot 10" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-1-of-10.png" alt="OctoPrint Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-2-of-10.png" alt="OctoPrint Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-3-of-10.png" alt="OctoPrint Screenshot 3" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-4-of-10.png" alt="OctoPrint Screenshot 4" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-5-of-10.png" alt="OctoPrint Screenshot 5" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-6-of-10.png" alt="OctoPrint Screenshot 6" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-7-of-10.png" alt="OctoPrint Screenshot 7" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-8-of-10.png" alt="OctoPrint Screenshot 8" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/octoprint-9-of-10.png" alt="OctoPrint Screenshot 9" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">OctoPrint</h3>
        <span class="software-type">Host Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://octoprint.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://octoprint.org/download/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Awesome web interface (Host) for 3D printer control. On the wiki: <a href="octoprint">Octoprint</a></p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Connects via USB serial and treats Smoothieboard as standard RepRap/Marlin-compatible printer</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://docs.octoprint.org/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/pronterface.png" alt="Pronterface Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Pronterface</h3>
        <span class="software-type">Host Software</span>
      </div>

      <div class="links-section">
        <sl-button href="http://www.pronterface.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/kliment/Printrun/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>3D printing host. See the guide on the Wiki: <a href="pronterface">Pronterface</a></p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Communicates through standard RepRap protocols over USB serial or network. Supports all basic printing functions</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/kliment/Printrun/blob/master/README.md" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/mattercontrol.png" alt="MatterControl Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">MatterControl</h3>
        <span class="software-type">All-in-One</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.mattercontrol.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.matterhackers.com/mattercontrol" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Comprehensive 3D printing solution combining slicing, printer control, and design tools</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Built-in support for Smoothieboard and Smoothieware firmware with specific presets</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://mattercontrol.freshdesk.com/support/home" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/slic3r.png" alt="Slic3r Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Slic3r</h3>
        <span class="software-type">Slicer</span>
      </div>

      <div class="links-section">
        <sl-button href="https://slic3r.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/slic3r/Slic3r/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Original open-source 3D slicing engine that powers many commercial slicers</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Excellent compatibility through standard G-code output. Can be configured using "RepRap (Marlin)" G-code flavor</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://manual.slic3r.org/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/superslicer.png" alt="SuperSlicer Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">SuperSlicer</h3>
        <span class="software-type">Slicer</span>
      </div>

      <div class="links-section">
        <sl-button href="https://supermerill.github.io/SuperSlicer/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/supermerill/SuperSlicer/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Fork of PrusaSlicer with additional features and enhancements</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code compatible with Smoothieboard and Smoothieware firmware</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://supermerill.github.io/SuperSlicer/doc" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/ideamaker.png" alt="IdeaMaker Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">IdeaMaker</h3>
        <span class="software-type">Slicer</span>
      </div>

      <div class="links-section">
        <sl-button href="https://ideamaker.raise3d.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.raise3d.com/pages/ideamaker-download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>3D slicing software from Raise3D with user-friendly interface</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code compatible with Smoothieboard with custom printer profiles</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://support.raise3d.com/ideamaker" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/fabrica.png" alt="Fabrica Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Fabrica</h3>
        <span class="software-type">Web Interface</span>
      </div>

      <div class="links-section">
        <sl-button href="http://arthurwolf.github.io/fabrica/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/arthurwolf/fabrica" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Easy to use control interface (Host)</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Connects to Smoothieboard through web protocols and works with built-in networking capabilities</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/arthurwolf/fabrica/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/simplify3d.png" alt="Simplify3D Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Simplify3D</h3>
        <span class="software-type">Slicer</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.simplify3d.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.simplify3d.com/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Closed source 3D printing slicer and host. On the wiki: <a href="simplify3d">Simplify3D</a></p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates G-code compatible with Smoothieboard. Host software does not support Smoothie correctly</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.simplify3d.com/support" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/3delta-printer-control.png" alt="3Delta Printer Control Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">3Delta Printer Control</h3>
        <span class="software-type">Host Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://github.com/minad/3delta" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/minad/3delta/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>3D printing host specifically designed for delta printers</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Works with Smoothieboard through standard RepRap communication protocols over USB serial or network</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/minad/3delta/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/prusa-control.png" alt="Prusa Control Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Prusa Control</h3>
        <span class="software-type">Slicer</span>
      </div>

      <div class="links-section">
        <sl-button href="http://prusacontrol.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://prusacontrol.org/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Beginner-friendly interface for the Slic3r engine developed by Prusa Research</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Uses Slic3r engine, generates standard G-code compatible with Smoothieware firmware</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://prusacontrol.org/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/octopi.png" alt="OctoPi Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">OctoPi</h3>
        <span class="software-type">Distribution</span>
      </div>

      <div class="links-section">
        <sl-button href="https://octopi.octoprint.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://octopi.octoprint.org/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Raspberry Pi distribution with OctoPrint pre-configured</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Runs OctoPrint which connects to Smoothieboard via USB with full compatibility</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://docs.octoprint.org/en/pi/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="hostcontrol-software" class="category-header">Host/Control Software</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/repetier-host-2-of-2.png" alt="Repetier-Host Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/repetier-host-1-of-2.png" alt="Repetier-Host Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">Repetier-Host</h3>
        <span class="software-type">Host Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.repetier.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.repetier.com/download/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Popular 3D printing host software combining slicing and printer control</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Works with Smoothieboard through standard G-code communication protocols as GRBL/Marlin-compatible controller</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.repetier.com/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/repetier-server.png" alt="Repetier Server Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Repetier Server</h3>
        <span class="software-type">Server Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.repetier-server.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.repetier-server.com/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Background server application for 3D printer management with web-based control</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Connects to Smoothieboard via standard serial communication and recognizes Smoothieware as RepRap/Marlin-compatible</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.repetier-server.com/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/chilipeppr.png" alt="ChiliPeppr Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">ChiliPeppr</h3>
        <span class="software-type">Web Framework</span>
      </div>

      <div class="links-section">
        <sl-button href="https://chilipeppr.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://chilipeppr.com/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Hardware-through-the-web framework providing browser-based CNC machine control</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Connects to Smoothieboard via WebSocket or serial communication as GRBL/Marlin-compatible controller</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://chilipeppr.com/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/duet-web-control.png" alt="Duet Web Control (DWC) Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Duet Web Control (DWC)</h3>
        <span class="software-type">Web Interface</span>
      </div>

      <div class="links-section">
        <sl-button href="https://duet3d.com/dwc" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://duet3d.com/dwc/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Web-based interface for CNC machines and 3D printers</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Can communicate with Smoothieboard through standard serial communication as GRBL/Marlin-compatible controller</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://duet3d.com/wiki/dwc" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/cncjs-5-of-5.png" alt="CNCjs Screenshot 5" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/cncjs-1-of-5.png" alt="CNCjs Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/cncjs-2-of-5.png" alt="CNCjs Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/cncjs-3-of-5.png" alt="CNCjs Screenshot 3" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/cncjs-4-of-5.png" alt="CNCjs Screenshot 4" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">CNCjs</h3>
        <span class="software-type">CNC Controller</span>
      </div>

      <div class="links-section">
        <sl-button href="https://cncjs.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/cncjs/cncjs/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Web-based CNC controller application with modern interface</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Explicit native support for Smoothieware firmware</strong> alongside GRBL, Marlin, and TinyG</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://cncjs.org/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/ugs-platform-7-of-7.png" alt="Universal G-Code Sender (UGS) Screenshot 7" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/ugs-platform-1-of-7.png" alt="Universal G-Code Sender (UGS) Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/ugs-platform-2-of-7.png" alt="Universal G-Code Sender (UGS) Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/ugs-platform-3-of-7.png" alt="Universal G-Code Sender (UGS) Screenshot 3" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/ugs-platform-4-of-7.png" alt="Universal G-Code Sender (UGS) Screenshot 4" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/ugs-platform-5-of-7.png" alt="Universal G-Code Sender (UGS) Screenshot 5" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/ugs-platform-6-of-7.png" alt="Universal G-Code Sender (UGS) Screenshot 6" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">Universal G-Code Sender (UGS)</h3>
        <span class="software-type">CNC Controller</span>
      </div>

      <div class="links-section">
        <sl-button href="https://winder.github.io/ugs_website/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/winder/Universal-G-Code-Sender/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Free and full-featured G-code platform for advanced CNC controllers</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Explicit native support for Smoothieware firmware.</strong> Set machine type to Smoothieware and add <code>grbl_mode true</code></p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/winder/Universal-G-Code-Sender/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="cnc-milling-software" class="category-header">CNC Milling Software</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/bCNC.png" alt="bCNC Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">bCNC</h3>
        <span class="software-type">CNC Controller</span>
      </div>

      <div class="links-section">
        <sl-button href="https://github.com/vlachoudis/bCNC" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/vlachoudis/bCNC/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>On the wiki: <a href="bcnc">bCNC</a> Open-Source CNC host with great preview and other operations. Set machine type to smoothie, and add <code>grbl_mode true</code> to your smoothie config or even better use the firmware-cnc.bin build of smoothieware (<strong>Note</strong>: You must update to the latest version of Smoothieware to ensure compatibility with bCNC).</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Set machine type to "smoothie" and add <code>grbl_mode true</code> to config. Supports autoleveling, G-code editing, CAM features</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/vlachoudis/bCNC/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/candle.png" alt="Candle Screenshot " style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/Candle.png" alt="Candle Screenshot " style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">Candle</h3>
        <span class="software-type">CNC Controller</span>
      </div>

      <div class="links-section">
        <sl-button href="https://github.com/Denvi/Candle" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/Denvi/Candle/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Open-Source Gcode sender for CNC mills, designed for GRBL but should work fine with Smoothie in grbl mode</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Works with Smoothieboard in GRBL mode (requires <code>grbl_mode true</code> in config)</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/Denvi/Candle/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/openscam.png" alt="OpenSCAM Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">OpenSCAM</h3>
        <span class="software-type">Simulator</span>
      </div>

      <div class="links-section">
        <sl-button href="http://openscam.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://openscam.org/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Open-Source Simulation &amp; Computer Aided Machining (Free 3-axis CNC Simulator which understands G-Code)</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Can read and simulate G-code generated for Smoothieboard and Smoothieware firmware</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://openscam.org/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/PyCAM.png" alt="PyCAM Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">PyCAM</h3>
        <span class="software-type">CAM Software</span>
      </div>

      <div class="links-section">
        <sl-button href="http://pycam.sourceforge.net/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://sourceforge.net/projects/pycam/files" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Open-source CAM software for 3D-axis CNC machining</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code compatible with Smoothieboard and Smoothieware firmware</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://pycam.sourceforge.net/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/CamBam.png" alt="CamBam Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">CamBam</h3>
        <span class="software-type">CAD/CAM</span>
      </div>

      <div class="links-section">
        <sl-button href="http://www.cambam.info/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://www.cambam.info/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Closed-Source, but cheap and feature-full CAM software. Widely used by hobbyists. <a href="https://youtu.be/rV8zeE9s7xs">Video Tutorial</a></p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard CNC G-code compatible with Smoothieboard using GRBL/Marlin post-processors</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://www.cambam.info/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/flatcam.png" alt="FlatCAM Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">FlatCAM</h3>
        <span class="software-type">CAM Software</span>
      </div>

      <div class="links-section">
        <sl-button href="http://flatcam.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://flatcam.org/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>CAM software specifically designed for PCB design and milling</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code for PCB milling that works with Smoothieboard</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://flatcam.org/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/jscut.png" alt="jscut Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">jscut</h3>
        <span class="software-type">CAM Software</span>
      </div>

      <div class="links-section">
        <sl-button href="http://jscut.org" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://jscut.org/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Open-source in-browser CAM software for CNC machining</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code that works with Smoothieboard and Smoothieware firmware</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://jscut.org/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/path.io-pathio.png" alt="Pathio Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Pathio</h3>
        <span class="software-type">CAM Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://pathio3d.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://pathio3d.com/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Modern CAM and slicing software for CNC machines and 3D printers</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code that works with Smoothieboard with custom machine settings</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://pathio3d.com/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/Tux-Plot.png" alt="Tux Plot Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Tux Plot</h3>
        <span class="software-type">CNC Tool</span>
      </div>

      <div class="links-section">
        <sl-button href="http://www.securetech-ns.ca/Help/Tux-Plotv4.5.pdf" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
      </div>

      <p>Free general-use CNC tool for small businesses</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code that works with Smoothieboard and Smoothieware firmware</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://www.securetech-ns.ca/Help/Tux-Plotv4.5.pdf" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="laser-cutting-software" class="category-header">Laser Cutting Software</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/lightburn-1-of-2.png" alt="LightBurn Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">LightBurn</h3>
        <span class="software-type">Laser Control</span>
      </div>

      <div class="links-section">
        <sl-button href="https://lightburnsoftware.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://lightburnsoftware.com/download/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Industry-standard software for laser cutting and engraving</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Excellent built-in support for Smoothieboard.</strong> Users can select "Smoothieboard" from controller list</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://lightburnsoftware.com/documentation/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/lasergrbl-5-of-5.png" alt="LaserGRBL Screenshot 5" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/lasergrbl-1-of-5.png" alt="LaserGRBL Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/lasergrbl-2-of-5.png" alt="LaserGRBL Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/lasergrbl-3-of-5.png" alt="LaserGRBL Screenshot 3" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/lasergrbl-4-of-5.png" alt="LaserGRBL Screenshot 4" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">LaserGRBL</h3>
        <span class="software-type">Laser Control</span>
      </div>

      <div class="links-section">
        <sl-button href="https://lasergrbl.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://lasergrbl.com/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Free laser engraving software designed for diode laser engravers</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Can work with Smoothieboard through standard G-code communication as GRBL-compatible controller</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://lasergrbl.com/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/laserweb.png" alt="LaserWeb Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">LaserWeb</h3>
        <span class="software-type">Laser Control</span>
      </div>

      <div class="links-section">
        <sl-button href="https://laserweb.io/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/LaserWeb/LaserWeb4/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Web-based full laser control application (Host and CAM), use to generate GCode but not recommended to use as a streamer of rasters as they do not support streaming the smoothie way.</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code that works with Smoothieboard. Not recommended for streaming rasters</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://laserweb.io/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/visicut.png" alt="VisiCut Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">VisiCut</h3>
        <span class="software-type">Laser Control</span>
      </div>

      <div class="links-section">
        <sl-button href="https://visicut.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://visicut.org/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Full laser control application (Host and CAM), has Smoothieware interface. <a href="https://www.youtube.com/watch?v=lbTTPkDEhOg&amp;feature=autoshare">Video tutorial</a>.</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Direct support for Smoothieboard</strong> and Smoothieware firmware through "Smoothie" driver</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://visicut.org/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/rayforge.png" alt="Rayforge Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Rayforge</h3>
        <span class="software-type">Laser Control</span>
      </div>

      <div class="links-section">
        <sl-button href="https://github.com/barebaric/rayforge" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/barebaric/rayforge/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Modern, open-source, cross-platform tool for laser cutting and engraving</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Confirmed support for Smoothieware via Telnet connection</strong> since version 0.15 with network connectivity</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/barebaric/rayforge/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/polygonia.png" alt="Polygonia Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Polygonia</h3>
        <span class="software-type">Design Tool</span>
      </div>

      <div class="links-section">
        <sl-button href="https://polygonia.design/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://hackaday.io/page/5969-polygonia-symmetrical-pattern-designer-for-laser-cutting-and-3d-printing" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>A tool to easily create repeating patterns for laser cutting: <a href="https://polygonia.design/">Online tool</a></p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Creates designs exportable as SVG/DXF that can be converted to G-code for Smoothieboard</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://polygonia.design/help" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="cam-software" class="category-header">CAM Software</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-6-of-6.png" alt="Fusion 360 Screenshot 6" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-1-of-6.png" alt="Fusion 360 Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-2-of-6.png" alt="Fusion 360 Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-3-of-6.png" alt="Fusion 360 Screenshot 3" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-4-of-6.png" alt="Fusion 360 Screenshot 4" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-5-of-6.png" alt="Fusion 360 Screenshot 5" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">Fusion 360</h3>
        <span class="software-type">CAD/CAM</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.autodesk.com/products/fusion-360" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.autodesk.com/products/fusion-360/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Comprehensive cloud-based 3D modeling, CAD, CAM, CAE, and PCB software</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code that works with Smoothieboard through appropriate post-processors</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://knowledge.autodesk.com/support/fusion-360" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/mastercam.png" alt="Mastercam Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/mastercam-2.png" alt="Mastercam Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">Mastercam</h3>
        <span class="software-type">CAM Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.mastercam.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.mastercam.com/en-us/Solutions/CAM-Software" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Professional CAM software for CNC milling, turning, wire EDM, and router programming</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code output compatible with Smoothieboard through appropriate post-processors</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.mastercam.com/en-us/Support" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/kiri-moto.png" alt="Kiri:Moto by Grid.Space Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Kiri:Moto by Grid.Space</h3>
        <span class="software-type">CAM Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://grid.space/kiri" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
      </div>

      <p>Free web-based toolpath generator with support for FDM, laser cutting, and CNC milling</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code output compatible with Smoothieboard and Smoothieware firmware</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://grid.space/kiri/help" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/vcarve-v-carve.png" alt="V-carve Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">V-carve</h3>
        <span class="software-type">CAM Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.vectric.com/products/vcarve-pro" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
      </div>

      <p>Commercial CAM software from Vectric for 2D/2.5D carving strategies</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Compatible with Smoothieboard when using specific post-processor from J Tech Photonics</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://jtechphotonics.com/?p=3851#documentation" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/estlcam.png" alt="EstlCAM Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">EstlCAM</h3>
        <span class="software-type">CAM Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.estlcam.de/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.estlcam.de/en/download.html" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>2D/2.5D CAM and control software for CNC machines</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates G-code for various controllers including Smoothieware with standard output</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.estlcam.de/en/documentation.html" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/vectric-aspire.png" alt="Vectric Aspire Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Vectric Aspire</h3>
        <span class="software-type">Premium CAM</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.vectric.com/products/aspire" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.vectric.com/downloads" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Premium 3D modeling and CNC machining software with advanced 3D modeling capabilities</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard CNC G-code compatible with Smoothieboard through appropriate post-processors</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.vectric.com/support/aspire" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/camotics.png" alt="Camotics Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Camotics</h3>
        <span class="software-type">Simulator</span>
      </div>

      <div class="links-section">
        <sl-button href="https://camotics.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://camotics.org/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Open-source 3-axis CNC simulator for verifying G-code programs</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Can read and analyze G-code intended for Smoothieboard and Smoothieware firmware</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://camotics.org/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/sheetcam.png" alt="SheetCam Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">SheetCam</h3>
        <span class="software-type">CAM Software</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.sheetcam.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.sheetcam.com/download.html" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Affordable CAM software for sheet metal fabrication and general CNC</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard CNC G-code that works with Smoothieboard using GRBL/Marlin post-processors</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.sheetcam.com/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/freecad-path.png" alt="FreeCAD Path Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">FreeCAD Path</h3>
        <span class="software-type">Open Source CAM</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.freecadweb.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.freecadweb.org/download.php" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Free, open-source parametric 3D modeler with built-in CAM workbench</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Can generate G-code compatible with Smoothieboard through appropriate post-processor configuration</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.freecadweb.org/wiki/Path_Workbench" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/solidcam.png" alt="SolidCAM Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">SolidCAM</h3>
        <span class="software-type">Professional CAM</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.solidcam.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
      </div>

      <p>Professional CAM software that integrates directly into SolidWorks</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code that can be configured for Smoothieboard compatibility through custom post-processors</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.solidcam.com/help" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="caddesign-software" class="category-header">CAD/Design Software</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/openscad.png" alt="OpenSCAD Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">OpenSCAD</h3>
        <span class="software-type">CAD Software</span>
      </div>

      <div class="links-section">
        <sl-button href="http://openscad.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://openscad.org/downloads" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Free, open-source software for creating solid 3D CAD models using programming language</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Creates 3D models that can be exported to STL files for slicing with compatible 3D printing software</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://openscad.org/doc.html" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/inkscape.png" alt="Inkscape Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Inkscape</h3>
        <span class="software-type">Vector Graphics</span>
      </div>

      <div class="links-section">
        <sl-button href="https://inkscape.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://inkscape.org/release/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Professional vector graphics editor that can be extended with plugins for G-code generation</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>With G-code generation extensions like Gcodetools, can generate G-code compatible with Smoothieboard</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://inkscape.org/doc" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/inkscape-gcode.png" alt="GCode Plugin for Inkscape Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">GCode Plugin for Inkscape</h3>
        <span class="software-type">Plugin</span>
      </div>

      <div class="links-section">
        <sl-button href="http://www.cnc-club.ru/forum/viewtopic.php?t=35" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://www.cnc-club.ru/downloads" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>Laser/CNC CAM: Output GCode from SVG files in <a href="http://inkscape.org/">Inkscape</a>. <a href="https://www.youtube.com/watch?v=xw8h0c5Vdw8">Video tutorial</a>.</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates standard G-code that works with Smoothieboard for various manufacturing operations</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://www.cnc-club.ru/forum/viewtopic.php?t=35" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="web-interface-software" class="category-header">Web Interface Software</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/smoothieweb.png" alt="SmoothieWeb Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">SmoothieWeb</h3>
        <span class="software-type">Web Interface</span>
      </div>

      <div class="links-section">
        <sl-button href="https://github.com/Smoothieware/SmoothieWeb" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/Smoothieware/SmoothieWeb" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Web-based interface for Smoothieboard providing remote control capabilities</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Specifically developed for Smoothieboard</strong> and Smoothieware firmware with native integration</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/Smoothieware/SmoothieWeb/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/webif.png" alt="Webif Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Webif</h3>
        <span class="software-type">Built-in Interface</span>
      </div>

      <div class="links-section">
        <sl-button href="https://smoothieware.github.io/Webif-pack/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://smoothieware.github.io/Webif-pack/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Built-in web interface for Smoothieware firmware providing web-based control</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Official web interface built into Smoothieware firmware</strong> and fully compatible with Smoothieboard</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://smoothieware.github.io/Webif-pack/documentation" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="mobile-applications" class="category-header">Mobile Applications</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/touch-dro.png" alt="TouchDRO Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">TouchDRO</h3>
        <span class="software-type">Mobile App</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.touchdro.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://www.touchdro.com/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Digital readout application for manual machines that can also function as basic CNC controller</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Can connect to Smoothieboard via serial communication and read position data while sending basic G-code commands</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.touchdro.com/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/cnc-droid.png" alt="CNC Droid Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">CNC Droid</h3>
        <span class="software-type">Mobile App</span>
      </div>

      <div class="links-section">
        <sl-button href="https://cncdroid.en.softonic.com/android?ex=RAMP-3700.4&rex=true" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://cncdroid.en.softonic.com/android?ex=RAMP-3700.4&rex=true" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Android application for controlling CNC machines via Bluetooth or WiFi</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Can connect to Smoothieboard through WiFi network connection using standard G-code protocols</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/mariokulik/cnc-droid/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/grbl-cnc-controller-android.png" alt="GRBL Controller Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">GRBL Controller</h3>
        <span class="software-type">Mobile App</span>
      </div>

      <div class="links-section">
        <sl-button href="https://play.google.com/store/apps/details?id=com.kerry.grblcontroller&hl=en" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://play.google.com/store/apps/details?id=com.kerry.grblcontroller&hl=en" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Android application for controlling GRBL-based CNC machines with a simple, intuitive interface</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Can connect to Smoothieboard using standard G-code communication protocols via USB or network</p>
        </div>
      </sl-details>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="specialized-applications" class="category-header">Specialized Applications</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/openpnp.png" alt="OpenPnP Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">OpenPnP</h3>
        <span class="software-type">Pick &amp; Place</span>
      </div>

      <div class="links-section">
        <sl-button href="https://openpnp.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://openpnp.org/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Open-source pick and place machine control software for PCB assembly</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Successfully used with Smoothieboard controllers</strong> for pick and place machines with multi-axis capability and GPIO expansion</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://openpnp.org/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/pic-engrave.png" alt="PicEngrave Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">PicEngrave</h3>
        <span class="software-type">Photo Engraving</span>
      </div>

      <div class="links-section">
        <sl-button href="http://www.picengrave.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://www.picengrave.com/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Photo engraving software that converts images into G-code for CNC engraving machines</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates G-code from images that can be executed on Smoothieboard-controlled engraving machines</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://www.picengrave.com/help" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/raster-2-gcode.png" alt="Raster2Gcode Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Raster2Gcode</h3>
        <span class="software-type">Image Converter</span>
      </div>

      <div class="links-section">
        <sl-button href="http://fablabo.net/wiki/Raster2Gcode" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://fablabo.net/wiki/Raster2Gcode#download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Image to G-code converter that transforms raster images into G-code for CNC machines</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Generates G-code from images that can be executed on Smoothieboard-controlled machines for raster-based operations</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://fablabo.net/wiki/Raster2Gcode" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/punto.png" alt="Punto Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Punto</h3>
        <span class="software-type">Embroidery</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.softeamweb.com/en/punto" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
      </div>

      <p>Professional embroidery digitizing software for creating complex embroidery designs</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Creates embroidery designs that can be converted to G-code for embroidery machines controlled by Smoothieboard</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.softeamweb.com/support/punto" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/wilcom-embroidery.png" alt="Wilcom Embroidery Software Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Wilcom Embroidery Software</h3>
        <span class="software-type">Embroidery</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.wilcom.com/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
      </div>

      <p>Leading commercial embroidery software solution for professional embroidery design and production</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Creates embroidery designs that can be converted to G-code for embroidery machines controlled by Smoothieboard</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://www.wilcom.com/support" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="developmentprogramming-tools" class="category-header">Development/Programming Tools</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/gcc.png" alt="GCC (GNU Compiler Collection) Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">GCC (GNU Compiler Collection)</h3>
        <span class="software-type">Compiler</span>
      </div>

      <div class="links-section">
        <sl-button href="https://gcc.gnu.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://gcc.gnu.org/install" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Standard compiler collection for building Smoothieware firmware</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Used to compile Smoothieware firmware that runs on Smoothieboard</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://gcc.gnu.org/onlinedocs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <div class="card-header">
        <h3 class="software-title">mBed Online Compiler</h3>
        <span class="software-type">Web Compiler</span>
      </div>

      <div class="links-section">
        <sl-button href="https://www.mbed.org/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://developer.mbed.org/compiler/" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Compiler
        </sl-button>
      </div>

      <p>Alternative web-based build method for Smoothieware firmware</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Can be used to build Smoothieware firmware for Smoothieboard without local toolchain</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://developer.mbed.org/handbook/Compiler-Tour" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/dfu-util.png" alt="dfu-util Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">dfu-util</h3>
        <span class="software-type">Firmware Utility</span>
      </div>

      <div class="links-section">
        <sl-button href="http://dfu-util.sourceforge.net/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://dfu-util.sourceforge.net/download" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>USB firmware update utility used for flashing firmware to Smoothieboard via USB DFU mode</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Used to flash Smoothieware firmware to Smoothieboard when in DFU mode for initial installation and updates</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://dfu-util.sourceforge.net/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/zadig.png" alt="Zadig Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Zadig</h3>
        <span class="software-type">USB Driver</span>
      </div>

      <div class="links-section">
        <sl-button href="http://zadig.akeo.ie/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="http://zadig.akeo.ie/downloads" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Windows USB driver installer for installing custom USB drivers</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Used on Windows to install the correct USB driver (libusb-win32) for accessing Smoothieboard's DFU mode</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="http://zadig.akeo.ie/docs" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<div class="category-section">
  <h2 id="file-conversionprocessing-tools" class="category-header">File Conversion/Processing Tools</h2>
  <div class="software-grid">

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/fast-streamer.png" alt="Fast Streamer Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">Fast Streamer</h3>
        <span class="software-type">Streaming Utility</span>
      </div>

      <div class="links-section">
        <sl-button href="https://github.com/Smoothieware/Smoothieware/blob/edge/fast-stream.py" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/Smoothieware/Smoothieware/raw/edge/fast-stream.py" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>      <p>use for streaming raster images from a host to smoothie. Avoids the pauses when using LW to stream. Can handle upwards of 1,000 pixels/sec.</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p><strong>Specifically designed for Smoothieboard</strong> to efficiently stream raster images for laser engraving</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://smoothieware.org/fast-stream" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <img slot="image" src="/images/software-screenshots/simplify3D-gcode-cleanup-tool.png" alt="SimplifyS3D G-code Cleanup Tool Screenshot" style="width: 100%; height: auto; object-fit: cover;">

      <div class="card-header">
        <h3 class="software-title">SimplifyS3D G-code Cleanup Tool</h3>
        <span class="software-type">Web Tool</span>
      </div>

      <div class="links-section">
        <sl-button href="http://mikk36.eu/SimplifyS3D/" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
      </div>

      <p>Online tool for cleaning up G-code generated by Simplify3D</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Processes Simplify3D G-code to make it compatible with Smoothieboard by resolving line segment issues</p>
        </div>
      </sl-details>

    </sl-card>

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-6-of-6.png" alt="Fusion360 Post-Processor for ATC Screenshot 6" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-1-of-6.png" alt="Fusion360 Post-Processor for ATC Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-2-of-6.png" alt="Fusion360 Post-Processor for ATC Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-3-of-6.png" alt="Fusion360 Post-Processor for ATC Screenshot 3" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-4-of-6.png" alt="Fusion360 Post-Processor for ATC Screenshot 4" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/fusion-5-of-6.png" alt="Fusion360 Post-Processor for ATC Screenshot 5" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">Fusion360 Post-Processor for ATC</h3>
        <span class="software-type">Post-Processor</span>
      </div>

      <div class="links-section">
        <sl-button href="https://github.com/arthurwolf/Smoothie-Fusion360-PostProcessor" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/arthurwolf/Smoothie-Fusion360-PostProcessor" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Fusion360 post-processor for automatic tool change (ATC) compatibility with Smoothieboard</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Enables advanced tool management features in Fusion360 to work with Smoothieware firmware</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/arthurwolf/Smoothie-Fusion360-PostProcessor/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

    <sl-card class="software-card">
      <sl-carousel slot="image" autoplay autoplay-interval="10000" loop pagination mouse-dragging style="--aspect-ratio: 16/9;">
        <sl-carousel-item>
          <img src="/images/software-screenshots/universal-gcode-sender-4-of-4.png" alt="UGS_Fusion Plugin Screenshot 4" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/universal-gcode-sender-1-of-4.png" alt="UGS_Fusion Plugin Screenshot 1" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/universal-gcode-sender-2-of-4.png" alt="UGS_Fusion Plugin Screenshot 2" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
        <sl-carousel-item>
          <img src="/images/software-screenshots/universal-gcode-sender-3-of-4.png" alt="UGS_Fusion Plugin Screenshot 3" style="width: 100%; height: 100%; object-fit: contain;">
        </sl-carousel-item>
      </sl-carousel>

      <div class="card-header">
        <h3 class="software-title">UGS_Fusion Plugin</h3>
        <span class="software-type">Plugin</span>
      </div>

      <div class="links-section">
        <sl-button href="https://github.com/tapnair/UGS_Fusion" target="_blank" class="link-button" variant="primary" size="small">
          <sl-icon name="globe" slot="prefix"></sl-icon>
          Official Site
        </sl-button>
        <sl-button href="https://github.com/tapnair/UGS_Fusion/releases" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="download" slot="prefix"></sl-icon>
          Download
        </sl-button>
      </div>

      <p>Plugin for Fusion360 that allows starting G-code files directly from within Fusion360</p>

      <sl-details summary="Smoothieboard Compatibility">
        <div class="compatibility-details">
          <p>Enables direct control of Smoothieboard from within Fusion360 when using Universal G-code Sender</p>
        </div>
      </sl-details>

      <div class="links-section">
        <sl-button href="https://github.com/tapnair/UGS_Fusion/wiki" target="_blank" class="link-button" variant="default" size="small">
          <sl-icon name="book" slot="prefix"></sl-icon>
          Documentation
        </sl-button>
      </div>

    </sl-card>

  </div>
</div>

<h2 id="chaining">Chaining</h2>

<ul>
  <li><a href="https://github.com/tapnair/UGS_Fusion">This plugin</a> for Fusion360 allows you to start your Gcode files from within Fusion360 directly using Universal Gcode Sender (skipping the step of first saving the file in Fusion360, then opening it in Universal Gcode Sender)</li>
</ul>

<h2 id="important-terminology">Important Terminology</h2>

<sl-alert variant="neutral" open="">
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  A few words you will see in this documentation that require a bit of explanation:
  <br><br>
  <strong>Host</strong> software is software that is used to "talk" to your Smoothieboard.
  <br><br>
  It allows you to control the machine (for example "jog" the axes), to "stream" a G-code job, or to upload it to the SD card, things like that.
  <br><br>
  <strong>Slicing</strong> software is software that is used to take a 3D model file, and based on some settings you input, "slice" it into layers, and generate a G-code file that the Smoothieboard can then execute to print a thing.
  <br><br>
  <strong>CAM</strong> software, or <strong>CAM Package</strong>, for Computer Assisted Manufacturing, is software that is used to take a 2D or 3D file, and based on some settings you input, transform it into a list of tool movements (G-code file) for a machine that uses a tool to remove material from a workpiece.
</sl-alert>

        </div>
      </section>

    </div>


{:/nomarkdown}
