/**
 * homepage.ts
 *
 * Page-specific functionality for the Smoothieware homepage (index.md)
 * Only executes on the homepage (path === '/' or '/index.html')
 *
 * Features:
 * - V2 announcement fireworks animation on hover
 * - Board image switcher based on version selection (v1 vs v2)
 */

import $ from 'jquery';
import { get_display_version } from '../lib/config';

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

// Image paths for v1 and v2 boards
const V1_IMAGE = '/images/smoothieboard-fritzing-blue.png';
const V2_IMAGE = '/images/v2-prime-render.png';

/**
 * Checks if we're on the homepage
 */
function is_homepage(): boolean {

    const path = window.location.pathname;
    return path === '/' || path === '/index.html' || path === '/index';
}

/**
 * Initializes the V2 announcement fireworks effect
 * Fireworks appear when hovering over the V2 announcement alert
 */
function init_fireworks(): void {

    // Get DOM elements
    const alert = document.getElementById('v2-announcement');
    const canvas = document.getElementById('fireworks-canvas') as HTMLCanvasElement | null;

    // Guard against missing elements
    if (!alert || !canvas) {
        return;
    }

    // Check if Fireworks library is loaded
    if (typeof Fireworks === 'undefined') {
        console.warn('[homepage.ts] Fireworks library not loaded');
        return;
    }

    let fireworks: FireworksInstance | null = null;
    let is_hovering = false;
    let launch_interval: ReturnType<typeof setInterval> | null = null;

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

    // Start fireworks on hover
    alert.addEventListener('mouseenter', () => {

        is_hovering = true;
        init_fireworks_instance();

        if (fireworks) {
            fireworks.start();
        }

        // Launch one firework every 200ms with weighted colors
        launch_interval = setInterval(() => {

            if (is_hovering) {
                launch_weighted(1);
            }

        }, 200);
    });

    // Stop fireworks when mouse leaves
    alert.addEventListener('mouseleave', () => {

        is_hovering = false;

        if (launch_interval) {
            clearInterval(launch_interval);
            launch_interval = null;
        }

        if (fireworks) {
            fireworks.stop();
        }
    });
}

/**
 * Updates the board image based on the selected version
 * Shows V1 or V2 board image depending on user preference
 */
function update_board_image(): void {

    const version = get_display_version();
    const $img = $('#board-image');
    const $link = $('#board-image-link');

    // Guard against missing elements
    if (!$img.length || !$link.length) {
        return;
    }

    // If v1 is selected, show v1 image; otherwise show v2 image
    if (version === 'v1') {
        $img.attr('src', V1_IMAGE);
        $link.attr('href', V1_IMAGE);
        $img.attr('alt', 'Smoothieboard V1');
    } else {
        $img.attr('src', V2_IMAGE);
        $link.attr('href', V2_IMAGE);
        $img.attr('alt', 'Smoothieboard V2 Prime');
    }
}

/**
 * Initializes the board image switcher
 * Updates on load and when version changes
 */
function init_board_image_switcher(): void {

    // Update on page load
    update_board_image();

    // Listen for version changes (jQuery event from version selector)
    $(document).on('version-changed', update_board_image);
}

/**
 * Main initialization function
 * Only runs on the homepage
 */
function init(): void {

    // Guard: only run on homepage
    if (!is_homepage()) {
        return;
    }

    // Initialize fireworks effect for V2 announcement
    init_fireworks();

    // Initialize board image switcher
    init_board_image_switcher();
}

// Run on document ready
$(document).ready(init);
