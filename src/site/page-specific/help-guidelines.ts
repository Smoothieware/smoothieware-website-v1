/**
 * help-guidelines.ts
 *
 * Page-specific functionality for the help guidelines "BE NICE" fireworks effect
 * Works on any page that includes help-guidelines-for-include.md
 * Detects the presence of specific DOM elements rather than URL
 *
 * Features:
 * - Auto-starts fireworks for 15 seconds on page load
 * - Continues fireworks on hover over the "BE NICE" alert
 * - Weighted color scheme: blue, orange, yellow-orange
 */

// Type declaration for the Fireworks library (loaded from CDN)
declare const Fireworks: {
    default: new (canvas: HTMLCanvasElement, options: FireworksOptions) => FireworksInstance;
};

// Fireworks library types
interface FireworksOptions {
    autoresize: boolean;
    opacity: number;
    acceleration: number;
    friction: number;
    gravity: number;
    particles: number;
    traceLength: number;
    traceSpeed: number;
    explosion: number;
    flickering: number;
    lineStyle: string;
    hue: { min: number; max: number };
    delay: { min: number; max: number };
    rocketsPoint: { min: number; max: number };
    lineWidth: {
        explosion: { min: number; max: number };
        trace: { min: number; max: number };
    };
    brightness: { min: number; max: number };
    decay: { min: number; max: number };
    mouse: { click: boolean; move: boolean; max: number };
}

interface FireworksInstance {
    start: () => void;
    stop: () => void;
    launch: (count: number) => void;
    updateOptions: (options: Partial<FireworksOptions>) => void;
}

/**
 * Initializes the "BE NICE" fireworks effect
 * Auto-plays for 15 seconds on load, then responds to hover
 */
function init_be_nice_fireworks(): void {

    // Get DOM elements
    const alert = document.getElementById('be-nice-alert');
    const canvas = document.getElementById('be-nice-fireworks-canvas') as HTMLCanvasElement | null;

    // Guard against missing elements (page doesn't include help-guidelines)
    if (!alert || !canvas) {
        return;
    }

    // Check if Fireworks library is loaded
    if (typeof Fireworks === 'undefined') {
        console.warn('[help-guidelines.ts] Fireworks library not loaded');
        return;
    }

    let fireworks: FireworksInstance | null = null;
    let is_hovering = false;
    let launch_interval: ReturnType<typeof setInterval> | null = null;
    let auto_stop_timeout: ReturnType<typeof setTimeout> | null = null;

    /**
     * Picks a hue range with weighted probabilities
     * ~45% blue, ~45% orange, ~10% yellow-orange
     */
    function pick_hue_range(): { min: number; max: number } {

        const r = Math.random();

        // Blues: ~200-240° (45% chance)
        if (r < 0.45) {
            return { min: 200, max: 240 };
        }

        // Oranges: ~25-40° (45% chance)
        if (r < 0.90) {
            return { min: 25, max: 40 };
        }

        // Yellow-oranges: ~45-55° (10% chance)
        return { min: 45, max: 55 };
    }

    /**
     * Launches fireworks with a weighted color
     */
    function launch_weighted(count: number): void {

        // Guard against invalid count
        if (count < 1 || !fireworks) {
            return;
        }

        const hue_range = pick_hue_range();
        fireworks.updateOptions({ hue: hue_range });
        fireworks.launch(count);
    }

    /**
     * Initializes the fireworks instance
     */
    function init_fireworks_instance(): void {

        // Guard against double initialization
        if (fireworks) {
            return;
        }

        fireworks = new Fireworks.default(canvas!, {
            autoresize: true,
            opacity: 0.8,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 80,
            traceLength: 3,
            traceSpeed: 10,
            explosion: 5,
            flickering: 50,
            lineStyle: 'round',
            hue: { min: 200, max: 240 },
            delay: { min: 15, max: 30 },
            rocketsPoint: { min: 50, max: 50 },
            lineWidth: {
                explosion: { min: 1, max: 3 },
                trace: { min: 1, max: 2 }
            },
            brightness: { min: 50, max: 80 },
            decay: { min: 0.015, max: 0.03 },
            mouse: { click: false, move: false, max: 1 }
        });
    }

    /**
     * Starts the fireworks effect
     */
    function start_fireworks(): void {

        init_fireworks_instance();

        if (fireworks) {
            fireworks.start();
        }

        // Launch one firework every 200ms with weighted colors
        if (!launch_interval) {
            launch_interval = setInterval(() => {
                launch_weighted(1);
            }, 200);
        }
    }

    /**
     * Stops the fireworks effect
     */
    function stop_fireworks(): void {

        if (launch_interval) {
            clearInterval(launch_interval);
            launch_interval = null;
        }

        if (fireworks) {
            fireworks.stop();
        }
    }

    // Start fireworks on hover
    alert.addEventListener('mouseenter', () => {

        is_hovering = true;

        // Clear any pending auto-stop timeout
        if (auto_stop_timeout) {
            clearTimeout(auto_stop_timeout);
            auto_stop_timeout = null;
        }

        start_fireworks();
    });

    // Stop fireworks when mouse leaves (only if not in auto-play period)
    alert.addEventListener('mouseleave', () => {

        is_hovering = false;
        stop_fireworks();
    });

    // Auto-start fireworks for 15 seconds after page load
    start_fireworks();

    // Stop after 15 seconds, unless hovering
    auto_stop_timeout = setTimeout(() => {

        if (!is_hovering) {
            stop_fireworks();
        }

        auto_stop_timeout = null;

    }, 15000);
}

/**
 * Main initialization function
 * Runs on any page that has the BE NICE elements
 */
function init(): void {

    // Simply try to initialize - will exit early if elements aren't present
    init_be_nice_fireworks();
}

// Run on window load (after all resources including CDN scripts)
window.addEventListener('load', init);
