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
let compiled_pin_popup_template = null;
let compiled_pin_not_found_template = null;
let compiled_pin_loading_template = null;
// Pin database loaded from YAML
let pin_database = null;
// Track if we're currently loading to avoid duplicate loads
let is_loading = false;
/**
 * Escapes HTML special characters to prevent XSS
 * Used as a Handlebars helper
 */
function escape_html(text) {
    // Handle non-string values that Handlebars might pass
    if (text === null || text === undefined) {
        return '';
    }
    if (typeof text !== 'string') {
        text = String(text);
    }
    const map = {
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
function render_markdown(text) {
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
 * Parses a pin text to extract the base pin number and any modifiers
 * Modifiers: ! (invert), o (open-drain), ^ (pull-up), v (pull-down), - (no pull), @ (repeater)
 *
 * Supports V1, V2 GPIO, and V2 ADC pin formats:
 * - V1 (LPC1769): digit.digit format, e.g., "1.12", "2.5", "0.26"
 * - V2 GPIO (STM32H7): PXn format, e.g., "PG0", "PA0", "PJ12"
 * - V2 ADC (STM32H7): ADCn_m format, e.g., "ADC1_0", "ADC1_1", "ADC3_0"
 * - V2 PWM (STM32H7): PWMn_m format, e.g., "PWM1_1", "PWM2_1"
 *
 * Note: The _C suffix pins (e.g., PA0_C, PC2_C) are STM32 hardware names for
 * dedicated analog pins. Users should NOT type these in config files - instead
 * use the ADCn_m format (e.g., ADC1_0) for thermistor inputs.
 */
function parse_pin_text(pin_text) {
    // Trim whitespace
    const trimmed = pin_text.trim();
    // Regular expression to match V1 pin format (e.g., 1.12, 2.5, 0.26)
    // Pin format: digit(s).digit(s)
    const v1_pin_regex = /^(\d+\.\d+)/;
    // Regular expression to match V2 GPIO pin format (e.g., PG0, PA0, PJ12)
    // Pin format: P + port letter (A-K) + pin number (0-15)
    // Note: _C suffix is NOT supported - use ADCn_m format for analog inputs
    const v2_gpio_regex = /^(P[A-K]\d{1,2})/i;
    // Regular expression to match V2 ADC channel format (e.g., ADC1_0, ADC3_1)
    // Format: ADC + peripheral number (1 or 3) + underscore + channel (0-6)
    const v2_adc_regex = /^(ADC[13]_\d)/i;
    // Regular expression to match V2 PWM channel format (e.g., PWM1_1, PWM2_4)
    // Format: PWM + timer number (1 or 2) + underscore + channel (1-4)
    const v2_pwm_regex = /^(PWM[12]_[1-4])/i;
    // Try V1 format first
    let match = trimmed.match(v1_pin_regex);
    // If V1 didn't match, try V2 ADC format
    if (!match) {
        match = trimmed.match(v2_adc_regex);
    }
    // If ADC didn't match, try V2 PWM format
    if (!match) {
        match = trimmed.match(v2_pwm_regex);
    }
    // If PWM didn't match, try V2 GPIO format
    if (!match) {
        match = trimmed.match(v2_gpio_regex);
    }
    if (!match) {
        // No valid pin number found, return original text as base
        return {
            base_pin: trimmed,
            full_pin: trimmed,
            modifiers: []
        };
    }
    // Normalize to uppercase for database lookup
    const base_pin = match[1].toUpperCase();
    // Everything after the base pin number is considered modifiers
    const modifier_text = trimmed.substring(match[1].length);
    // Valid modifier characters
    const valid_modifiers = ['!', 'o', '^', 'v', '-', '@'];
    // Extract individual modifier characters
    const modifiers = [];
    for (const char of modifier_text) {
        if (valid_modifiers.includes(char)) {
            modifiers.push(char);
        }
    }
    return {
        base_pin,
        full_pin: trimmed,
        modifiers
    };
}
/**
 * Gets a human-readable description for a pin modifier
 */
function get_modifier_description(modifier) {
    const descriptions = {
        '!': 'Invert pin - reverses the logic level (high becomes low, low becomes high)',
        'o': 'Open-drain mode - pin can only pull to ground or disconnect (useful for shared signals)',
        '^': 'Pull-up enabled - weak resistor pulls pin high to 3.3V when not driven (default)',
        'v': 'Pull-down enabled - weak resistor pulls pin low to ground when not driven',
        '-': 'No pull resistor - disables internal pull-up/pull-down resistors',
        '@': 'Repeater mode - maintains the last signal state (rarely used, for long cables)'
    };
    return descriptions[modifier] ?? `Unknown modifier: ${modifier}`;
}
/**
 * Gets a short label for a pin modifier
 */
function get_modifier_label(modifier) {
    const labels = {
        '!': 'Inverted',
        'o': 'Open-Drain',
        '^': 'Pull-Up',
        'v': 'Pull-Down',
        '-': 'No Pull',
        '@': 'Repeater'
    };
    return labels[modifier] ?? modifier;
}
/**
 * Loads and compiles all Handlebars templates from the server
 * Registers all necessary helpers for the templates
 */
async function load_and_compile_templates() {
    try {
        // Fetch all templates in parallel
        const [popup_response, not_found_response, loading_response] = await Promise.all([
            fetch('/assets/templates/pin-popup.hbs'),
            fetch('/assets/templates/pin-not-found.hbs'),
            fetch('/assets/templates/pin-loading.hbs')
        ]);
        // Get template source code
        const [popup_source, not_found_source, loading_source] = await Promise.all([
            popup_response.text(),
            not_found_response.text(),
            loading_response.text()
        ]);
        // Register Handlebars helpers
        Handlebars.registerHelper('escape', escape_html);
        Handlebars.registerHelper('markdown', render_markdown);
        // Helper to check if value is truthy
        Handlebars.registerHelper('if_truthy', function (value, options) {
            if (value === true || value === 'true') {
                return options.fn(this);
            }
            return options.inverse(this);
        });
        // Helper to join array with separator
        Handlebars.registerHelper('join', function (array, separator) {
            if (!array || !Array.isArray(array)) {
                return '';
            }
            return array.join(separator);
        });
        // Compile all templates
        compiled_pin_popup_template = Handlebars.compile(popup_source);
        compiled_pin_not_found_template = Handlebars.compile(not_found_source);
        compiled_pin_loading_template = Handlebars.compile(loading_source);
    }
    catch (error) {
        console.error('[pin-tag.ts] Error loading pin templates:', error);
        throw error;
    }
}
/**
 * Loads the pin databases from both V1 and V2 YAML files
 * Merges them into a single database for lookups
 */
async function load_pin_database() {
    // Prevent duplicate loading
    if (is_loading || pin_database !== null) {
        return;
    }
    is_loading = true;
    try {
        // Initialize database
        pin_database = new Map();
        // Fetch both V1 and V2 YAML files in parallel
        const [v1_response, v2_response] = await Promise.all([
            fetch('/assets/data/smoothieware-v1-pins.yaml'),
            fetch('/assets/data/smoothieware-v2-pins.yaml')
        ]);
        // Process V1 pins (LPC1769 format: 0.0, 1.12, etc.)
        if (v1_response.ok) {
            const v1_yaml_text = await v1_response.text();
            const v1_data = jsyaml.load(v1_yaml_text);
            if (v1_data && v1_data.pins) {
                for (const [pin_name, pin_info] of Object.entries(v1_data.pins)) {
                    pin_database.set(pin_name, pin_info);
                }
            }
        }
        else {
            console.warn(`[pin-tag.ts] Could not load V1 pins: ${v1_response.status}`);
        }
        // Process V2 pins (STM32 GPIO: PG0, PA0; ADC: ADC1_0, ADC3_0; PWM: PWM1_1)
        if (v2_response.ok) {
            const v2_yaml_text = await v2_response.text();
            const v2_data = jsyaml.load(v2_yaml_text);
            if (v2_data && v2_data.pins) {
                for (const [pin_name, pin_info] of Object.entries(v2_data.pins)) {
                    // Normalize to uppercase for consistent lookups
                    pin_database.set(pin_name.toUpperCase(), pin_info);
                }
            }
        }
        else {
            console.warn(`[pin-tag.ts] Could not load V2 pins: ${v2_response.status}`);
        }
    }
    catch (error) {
        console.error('[pin-tag.ts] Error loading pin database:', error);
        throw error;
    }
    finally {
        is_loading = false;
    }
}
/**
 * Creates a popup tooltip for a pin element
 * Uses Shoelace sl-popup component for proper positioning
 */
function create_popup_for_pin($pin_element, pin_text) {
    // Parse the pin text to extract base pin and modifiers
    const parsed = parse_pin_text(pin_text);
    // Check if pin exists in database using the base pin number
    if (!pin_database || !pin_database.has(parsed.base_pin)) {
        console.warn(`[pin-tag.ts] Pin ${parsed.base_pin} not found in database`);
        // Create "not found" popup
        if (!compiled_pin_not_found_template) {
            console.error('[pin-tag.ts] Pin not found template not compiled');
            return;
        }
        const not_found_html = compiled_pin_not_found_template({ pin_name: parsed.full_pin });
        const $popup = $(not_found_html);
        $pin_element.after($popup);
        // Set anchor after DOM insertion
        setTimeout(() => {
            const popup_element = $popup[0];
            popup_element.anchor = $pin_element[0];
        }, 0);
        // Add hover handlers
        add_hover_handlers($pin_element, $popup);
        return;
    }
    // Get pin data
    const pin_data = pin_database.get(parsed.base_pin);
    // Prepare modifier information for template
    const modifier_info = parsed.modifiers.length > 0 ? {
        has_modifiers: true,
        modifiers: parsed.modifiers.map(mod => ({
            symbol: mod,
            label: get_modifier_label(mod),
            description: get_modifier_description(mod)
        }))
    } : {
        has_modifiers: false
    };
    // Prepare template data
    const template_data = {
        pin_name: parsed.full_pin,
        base_pin: parsed.base_pin,
        ...pin_data,
        ...modifier_info
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
        const popup_element = $popup[0];
        popup_element.anchor = $pin_element[0];
    }, 0);
    // Add hover handlers
    add_hover_handlers($pin_element, $popup);
}
/**
 * Adds hover event handlers to show/hide popup
 * Implements hover-bridge behavior with timeout
 */
function add_hover_handlers($anchor, $popup) {
    let hide_timeout = null;
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
async function initialize_pin_tags() {
    try {
        // Load templates and database in parallel
        await Promise.all([
            load_and_compile_templates(),
            load_pin_database()
        ]);
        // Find all <pin> elements
        const $pin_elements = $('pin');
        if ($pin_elements.length === 0) {
            return;
        }
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
    }
    catch (error) {
        console.error('[pin-tag.ts] Error initializing pin tags:', error);
    }
}
// Initialize when DOM is ready
$(document).ready(() => {
    initialize_pin_tags();
});
