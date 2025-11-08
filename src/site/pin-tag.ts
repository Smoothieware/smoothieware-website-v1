/**
 * pin-tag.ts
 *
 * Adds interactive features to <pin> custom tags in documentation pages
 * - Displays detailed tooltips with pin information from YAML data
 * - Shows pin assignment, description, capabilities (PWM, ADC, interrupt)
 * - Uses sl-popup for proper positioning and interaction
 * - Handles hover interactions with rich visual components
 * - Displays configuration examples and warnings
 * - Renders markdown in descriptions and other text fields
 *
 * The base CSS styling works without JavaScript, this file only adds the tooltip interactivity
 *
 * ============================================================================
 * CRITICAL: NO INLINE HTML IN THIS FILE
 * ============================================================================
 * ALL HTML must be in Handlebars templates located in /docs/assets/templates/
 * Templates are loaded and compiled at DOM load time
 * NEVER use string concatenation or template literals to build HTML in TypeScript
 * If you need to generate HTML, create a new Handlebars template and use it here
 * ============================================================================
 */

// Import jQuery as a module
import $ from 'jquery';

// Import Handlebars for template rendering
import Handlebars from 'handlebars';

// Import js-yaml for parsing YAML data
import jsyaml from 'js-yaml';

// Compiled Handlebars templates (loaded on page load)
let compiled_pin_popup_template: HandlebarsTemplateDelegate<any> | null = null;
let compiled_pin_not_found_template: HandlebarsTemplateDelegate<any> | null = null;
let compiled_pin_loading_template: HandlebarsTemplateDelegate<any> | null = null;

// Pin database loaded from YAML
let pin_database: Map<string, any> | null = null;

// Track if we're currently loading to avoid duplicate loads
let is_loading = false;

/**
 * Escapes HTML special characters to prevent XSS
 * Used as a Handlebars helper
 */
function escape_html(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Simple markdown renderer for basic markdown features
 * Supports: **bold**, *italic*, `code`, [links](url), and line breaks
 */
function render_markdown(text: string): string {
    if (!text) {
        return '';
    }

    // Escape HTML first
    let html = escape_html(text);

    // Bold: **text**
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic: *text*
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Code: `text`
    html = html.replace(/`(.+?)`/g, '<code>$1</code>');

    // Links: [text](url)
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    // Line breaks: two newlines = paragraph break
    html = html.replace(/\n\n/g, '</p><p>');

    // Single newlines = br
    html = html.replace(/\n/g, '<br>');

    // Wrap in paragraph if not already
    if (!html.startsWith('<p>')) {
        html = '<p>' + html + '</p>';
    }

    return html;
}

/**
 * Loads and compiles all Handlebars templates from the server
 * Registers all necessary helpers for the templates
 */
async function load_and_compile_templates(): Promise<void> {
    try {
        // Fetch all templates in parallel
        const [
            popup_response,
            not_found_response,
            loading_response
        ] = await Promise.all([
            fetch('/assets/templates/pin-popup.hbs'),
            fetch('/assets/templates/pin-not-found.hbs'),
            fetch('/assets/templates/pin-loading.hbs')
        ]);

        // Get template source code
        const [
            popup_source,
            not_found_source,
            loading_source
        ] = await Promise.all([
            popup_response.text(),
            not_found_response.text(),
            loading_response.text()
        ]);

        // Register Handlebars helpers
        Handlebars.registerHelper('escape', escape_html);
        Handlebars.registerHelper('markdown', render_markdown);

        // Helper to check if value is truthy
        Handlebars.registerHelper('if_truthy', function(value, options) {
            if (value === true || value === 'true') {
                return options.fn(this);
            }
            return options.inverse(this);
        });

        // Helper to join array with separator
        Handlebars.registerHelper('join', function(array, separator) {
            if (!array || !Array.isArray(array)) {
                return '';
            }
            return array.join(separator);
        });

        // Compile all templates
        compiled_pin_popup_template = Handlebars.compile(popup_source);
        compiled_pin_not_found_template = Handlebars.compile(not_found_source);
        compiled_pin_loading_template = Handlebars.compile(loading_source);

        console.log('[pin-tag.ts] Pin templates compiled successfully');

    } catch (error) {
        console.error('[pin-tag.ts] Error loading pin templates:', error);
        throw error;
    }
}

/**
 * Loads the pin database from YAML file
 */
async function load_pin_database(): Promise<void> {
    // Prevent duplicate loading
    if (is_loading || pin_database !== null) {
        return;
    }

    is_loading = true;

    try {
        console.log('[pin-tag.ts] Loading pin database from YAML...');

        // Fetch the YAML file
        const response = await fetch('/assets/data/smoothieware-v1-pins.yaml');
        if (!response.ok) {
            throw new Error(`Failed to fetch pin database: ${response.status} ${response.statusText}`);
        }

        const yaml_text = await response.text();

        // Parse YAML using js-yaml library
        const yaml_data = jsyaml.load(yaml_text);

        // Convert to Map for fast lookups
        pin_database = new Map();

        if (yaml_data && yaml_data.pins) {
            for (const [pin_name, pin_info] of Object.entries(yaml_data.pins)) {
                pin_database.set(pin_name, pin_info);
            }
        }

        console.log(`[pin-tag.ts] Loaded ${pin_database.size} pins from database`);

    } catch (error) {
        console.error('[pin-tag.ts] Error loading pin database:', error);
        throw error;
    } finally {
        is_loading = false;
    }
}

/**
 * Creates a popup tooltip for a pin element
 * Uses Shoelace sl-popup component for proper positioning
 */
function create_popup_for_pin($pin_element: JQuery<HTMLElement>, pin_name: string): void {
    // Check if pin exists in database
    if (!pin_database || !pin_database.has(pin_name)) {
        console.warn(`[pin-tag.ts] Pin ${pin_name} not found in database`);

        // Create "not found" popup
        if (!compiled_pin_not_found_template) {
            console.error('[pin-tag.ts] Pin not found template not compiled');
            return;
        }

        const not_found_html = compiled_pin_not_found_template({ pin_name });
        const $popup = $(not_found_html);
        $pin_element.after($popup);

        // Set anchor after DOM insertion
        setTimeout(() => {
            const popup_element = $popup[0] as any;
            popup_element.anchor = $pin_element[0];
        }, 0);

        // Add hover handlers
        add_hover_handlers($pin_element, $popup);

        return;
    }

    // Get pin data
    const pin_data = pin_database.get(pin_name);

    // Prepare template data
    const template_data = {
        pin_name,
        ...pin_data
    };

    // Render popup HTML from template
    if (!compiled_pin_popup_template) {
        console.error('[pin-tag.ts] Pin popup template not compiled');
        return;
    }

    const popup_html = compiled_pin_popup_template(template_data);
    const $popup = $(popup_html);

    // Insert popup after pin element
    $pin_element.after($popup);

    // Set anchor reference after DOM insertion
    // Must use setTimeout to ensure popup is fully initialized
    setTimeout(() => {
        const popup_element = $popup[0] as any;
        popup_element.anchor = $pin_element[0];
    }, 0);

    // Add hover handlers
    add_hover_handlers($pin_element, $popup);
}

/**
 * Adds hover event handlers to show/hide popup
 * Implements hover-bridge behavior with timeout
 */
function add_hover_handlers($anchor: JQuery<HTMLElement>, $popup: JQuery<HTMLElement>): void {
    let hide_timeout: number | null = null;

    // Function to show popup
    const show_popup = () => {
        // Clear any pending hide timeout
        if (hide_timeout !== null) {
            clearTimeout(hide_timeout);
            hide_timeout = null;
        }

        // Set active attribute to show popup
        $popup.attr('active', '');
    };

    // Function to hide popup with delay
    const hide_popup = () => {
        // Set timeout to hide popup
        hide_timeout = window.setTimeout(() => {
            $popup.removeAttr('active');
            hide_timeout = null;
        }, 300);
    };

    // Anchor hover handlers
    $anchor.on('mouseenter', show_popup);
    $anchor.on('mouseleave', hide_popup);

    // Popup hover handlers (for hover-bridge)
    $popup.on('mouseenter', show_popup);
    $popup.on('mouseleave', hide_popup);
}

/**
 * Initializes all pin tags on the page
 * Wraps content, applies styling, and creates popups
 */
async function initialize_pin_tags(): Promise<void> {
    try {
        // Load templates and database in parallel
        await Promise.all([
            load_and_compile_templates(),
            load_pin_database()
        ]);

        console.log('[pin-tag.ts] Pin tag initialization started');

        // Find all <pin> elements
        const $pin_elements = $('pin');

        if ($pin_elements.length === 0) {
            console.log('[pin-tag.ts] No <pin> elements found on page');
            return;
        }

        console.log(`[pin-tag.ts] Found ${$pin_elements.length} pin elements`);

        // Process each pin element
        $pin_elements.each((index, element) => {
            const $element = $(element);

            // Get pin name from element content
            const pin_name = $element.text().trim();

            if (!pin_name) {
                console.warn('[pin-tag.ts] Empty pin element found');
                return;
            }

            // Create the display structure (matching existing pin-tag.css pattern)
            const html_structure = `<span class="pin-content">${escape_html(pin_name)}</span>`;

            // Replace content of pin element
            $element.html(html_structure);

            // Add CSS class for interactive cursor
            $element.addClass('pin-tag');

            // Create popup tooltip
            create_popup_for_pin($element, pin_name);
        });

        console.log('[pin-tag.ts] Pin tag initialization completed');

    } catch (error) {
        console.error('[pin-tag.ts] Error initializing pin tags:', error);
    }
}

// Initialize when DOM is ready
$(document).ready(() => {
    initialize_pin_tags();
});
