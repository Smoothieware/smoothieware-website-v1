/**
 * setting-tag.ts
 *
 * Adds interactive features to <setting> custom tags in documentation pages
 * - Displays detailed tooltips with configuration setting information from YAML data
 * - Shows v1 and v2 setting names with tabs using Shoelace components
 * - Uses sl-popup for proper positioning and interaction
 * - Handles hover interactions with rich visual components
 * - Supports multi-level path hierarchies with progressive color darkening
 * - Remembers user's tab preference across page loads using localStorage
 * - Renders markdown in descriptions and other text fields
 * - Makes related settings and pages interactive
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
// Import config finder library
import { find_setting_in_config } from './lib/config-finder.js';
// Import configuration management library
import { get_display_version, set_display_version, is_version_not_configured } from './lib/config.js';
// Compiled Handlebars templates (loaded on page load)
let compiled_setting_panel_template = null;
let compiled_tab_group_template = null;
let compiled_single_setting_template = null;
let compiled_mini_setting_template = null;
let compiled_path_elements_template = null;
let compiled_setting_structure_template = null;
let compiled_not_found_panel_template = null;
let compiled_not_documented_panel_template = null;
let compiled_minimal_panel_template = null;
let compiled_loading_tooltip_template = null;
let compiled_error_tooltip_template = null;
let compiled_config_excerpt_template = null;
let compiled_version_selection_alert_template = null;
let compiled_version_change_alert_template = null;
// Define color levels for path elements (darkest to lightest)
// Right-most element uses index 0 (darkest), progressively lighter to the left
// Much darker progression to stay clearly darker than background
const COLOR_LEVELS = ['#0a0a0a', '#0f0f0f', '#0f0f0f', '#0f0f0f', '#141414', '#191919'];
// LocalStorage key for tab preference
const TAB_PREFERENCE_KEY = 'smoothieware_setting_tooltip_tab';
// GitHub repo URLs
const GITHUB_V1_BASE = 'https://github.com/Smoothieware/Smoothieware/blob/edge/src';
const GITHUB_V2_BASE = 'https://github.com/Smoothieware/SmoothieV2/blob/master/Firmware/src';
// G/M codes that have documentation pages (extracted from docs folder structure)
// Used to determine if M-code badges should be clickable links
const DOCUMENTED_GCODES = new Set([
    'G0', 'G1', 'G2', 'G3', 'G4',
    'G10', 'G11', 'G17', 'G18', 'G19',
    'G20', 'G21', 'G28', 'G28.1', 'G30',
    'G54', 'G90', 'G91', 'G92',
    'M3', 'M5', 'M20', 'M21', 'M23', 'M24',
    'M1234'
]);
/**
 * Loads and compiles all Handlebars templates from the server
 * Registers all necessary helpers for the templates
 */
async function load_and_compile_template() {
    try {
        // Fetch all templates in parallel
        const [panel_response, tab_group_response, single_setting_response, mini_setting_response, path_elements_response, setting_structure_response, not_found_panel_response, not_documented_panel_response, minimal_panel_response, loading_tooltip_response, error_tooltip_response, config_excerpt_response, version_selection_alert_response, version_change_alert_response] = await Promise.all([
            fetch('/assets/templates/setting-panel.hbs'),
            fetch('/assets/templates/tab-group.hbs'),
            fetch('/assets/templates/single-setting.hbs'),
            fetch('/assets/templates/mini-setting.hbs'),
            fetch('/assets/templates/path-elements.hbs'),
            fetch('/assets/templates/setting-structure.hbs'),
            fetch('/assets/templates/not-found-panel.hbs'),
            fetch('/assets/templates/not-documented-panel.hbs'),
            fetch('/assets/templates/minimal-panel.hbs'),
            fetch('/assets/templates/loading-tooltip.hbs'),
            fetch('/assets/templates/error-tooltip.hbs'),
            fetch('/assets/templates/config-excerpt.hbs'),
            fetch('/assets/templates/version-selection-alert.hbs'),
            fetch('/assets/templates/version-change-alert.hbs')
        ]);
        // Guard against fetch errors
        if (!panel_response.ok) {
            throw new Error(`Failed to fetch setting-panel.hbs: ${panel_response.statusText}`);
        }
        if (!tab_group_response.ok) {
            throw new Error(`Failed to fetch tab-group.hbs: ${tab_group_response.statusText}`);
        }
        if (!single_setting_response.ok) {
            throw new Error(`Failed to fetch single-setting.hbs: ${single_setting_response.statusText}`);
        }
        if (!mini_setting_response.ok) {
            throw new Error(`Failed to fetch mini-setting.hbs: ${mini_setting_response.statusText}`);
        }
        if (!path_elements_response.ok) {
            throw new Error(`Failed to fetch path-elements.hbs: ${path_elements_response.statusText}`);
        }
        if (!setting_structure_response.ok) {
            throw new Error(`Failed to fetch setting-structure.hbs: ${setting_structure_response.statusText}`);
        }
        if (!not_found_panel_response.ok) {
            throw new Error(`Failed to fetch not-found-panel.hbs: ${not_found_panel_response.statusText}`);
        }
        if (!not_documented_panel_response.ok) {
            throw new Error(`Failed to fetch not-documented-panel.hbs: ${not_documented_panel_response.statusText}`);
        }
        if (!minimal_panel_response.ok) {
            throw new Error(`Failed to fetch minimal-panel.hbs: ${minimal_panel_response.statusText}`);
        }
        if (!loading_tooltip_response.ok) {
            throw new Error(`Failed to fetch loading-tooltip.hbs: ${loading_tooltip_response.statusText}`);
        }
        if (!error_tooltip_response.ok) {
            throw new Error(`Failed to fetch error-tooltip.hbs: ${error_tooltip_response.statusText}`);
        }
        if (!config_excerpt_response.ok) {
            throw new Error(`Failed to fetch config-excerpt.hbs: ${config_excerpt_response.statusText}`);
        }
        if (!version_selection_alert_response.ok) {
            throw new Error(`Failed to fetch version-selection-alert.hbs: ${version_selection_alert_response.statusText}`);
        }
        if (!version_change_alert_response.ok) {
            throw new Error(`Failed to fetch version-change-alert.hbs: ${version_change_alert_response.statusText}`);
        }
        // Get the template sources
        const panel_source = await panel_response.text();
        const tab_group_source = await tab_group_response.text();
        const single_setting_source = await single_setting_response.text();
        const mini_setting_source = await mini_setting_response.text();
        const path_elements_source = await path_elements_response.text();
        const setting_structure_source = await setting_structure_response.text();
        const not_found_panel_source = await not_found_panel_response.text();
        const not_documented_panel_source = await not_documented_panel_response.text();
        const minimal_panel_source = await minimal_panel_response.text();
        const loading_tooltip_source = await loading_tooltip_response.text();
        const error_tooltip_source = await error_tooltip_response.text();
        const config_excerpt_source = await config_excerpt_response.text();
        const version_selection_alert_source = await version_selection_alert_response.text();
        const version_change_alert_source = await version_change_alert_response.text();
        // Register Handlebars helpers
        Handlebars.registerHelper('escape', (text) => {
            // Return SafeString to prevent double-escaping by Handlebars
            return new Handlebars.SafeString(escape_html(String(text ?? '')));
        });
        Handlebars.registerHelper('markdown', (text) => {
            return new Handlebars.SafeString(render_markdown(String(text ?? '')));
        });
        Handlebars.registerHelper('github_link', (defined_in, version) => {
            return new Handlebars.SafeString(generate_github_link(defined_in, version));
        });
        Handlebars.registerHelper('mcode_link', (mcode) => {
            // Extract code from object or use string directly
            const code_text = typeof mcode === 'string' ? mcode : (mcode.code || String(mcode));
            const code_upper = code_text.toUpperCase();
            // Check if this G/M code has a documentation page
            const has_page = DOCUMENTED_GCODES.has(code_upper);
            // Generate appropriate HTML
            if (has_page) {
                // Clickable badge with link icon
                const page_url = `/gcode-reference/${code_upper.startsWith('G') ? 'g-codes' : 'm-codes'}/${code_upper.toLowerCase()}`;
                return new Handlebars.SafeString(`<a href="${page_url}" target="_blank" rel="noopener" class="mcode-link">
                        <sl-tag size="small" variant="success">
                            <sl-icon slot="prefix" name="link-45deg"></sl-icon>
                            ${escape_html(code_text)}
                        </sl-tag>
                    </a>`);
            }
            else {
                // Non-clickable badge without link icon
                return new Handlebars.SafeString(`<sl-tag size="small" variant="success">
                        <sl-icon slot="prefix" name="code-square"></sl-icon>
                        ${escape_html(code_text)}
                    </sl-tag>`);
            }
        });
        Handlebars.registerHelper('type_display', (type) => {
            // Convert "bool" to "boolean" for better user understanding
            const type_str = String(type ?? '');
            return type_str === 'bool' ? 'boolean' : type_str;
        });
        Handlebars.registerHelper('if_eq', function (arg1, arg2, options) {
            // Equality comparison helper for Handlebars
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        });
        Handlebars.registerHelper('eq', (arg1, arg2) => {
            // Simple equality helper that returns boolean (for use in unless/if subexpressions)
            return arg1 == arg2;
        });
        Handlebars.registerHelper('highlight_example', (text) => {
            // Highlight comments in example code (text after #)
            const example_text = String(text ?? '');
            // Split by # to find comments, but preserve the # character
            const parts = example_text.split('#');
            if (parts.length === 1) {
                // No comments, return escaped text
                return escape_html(example_text);
            }
            // First part is code, rest are comments
            let result = escape_html(parts[0]);
            for (let i = 1; i < parts.length; i++) {
                // Add the # and wrap the rest in a comment span
                result += '<span class="comment">#' + escape_html(parts[i]) + '</span>';
            }
            return new Handlebars.SafeString(result);
        });
        Handlebars.registerHelper('opacity_for_fade_level', (fade_level) => {
            // Calculate opacity for fade levels
            // fade_level 0 = full opacity (1.0)
            // fade_level 1-3 = progressively darker (fading into background)
            if (fade_level === 0) {
                return 1.0;
            }
            else if (fade_level === 1) {
                return 0.6;
            }
            else if (fade_level === 2) {
                return 0.3;
            }
            else {
                return 0.15;
            }
        });
        Handlebars.registerHelper('add', (a, b) => {
            // Simple addition helper for templates
            return Number(a ?? 0) + Number(b ?? 0);
        });
        Handlebars.registerHelper('starts_with', (str, prefix) => {
            // Check if string starts with prefix
            const str_value = String(str ?? '');
            const prefix_value = String(prefix ?? '');
            return str_value.startsWith(prefix_value);
        });
        Handlebars.registerHelper('extract_filename', (file_path) => {
            // Extract just the filename from a path
            const path_str = String(file_path ?? '');
            const segments = path_str.split('/');
            return segments[segments.length - 1] || path_str;
        });
        Handlebars.registerHelper('build_line_url', (base_url, line_number) => {
            // Build GitHub URL for specific line number
            const url_str = String(base_url ?? '');
            const line_num = Number(line_number ?? 0);
            // Remove existing line anchor if present
            const url_without_anchor = url_str.replace(/#L\d+$/, '');
            // Add new line anchor (line_number is 0-based, GitHub uses 1-based)
            return `${url_without_anchor}#L${line_num + 1}`;
        });
        // Compile all templates
        compiled_setting_panel_template = Handlebars.compile(panel_source);
        compiled_tab_group_template = Handlebars.compile(tab_group_source);
        compiled_single_setting_template = Handlebars.compile(single_setting_source);
        compiled_mini_setting_template = Handlebars.compile(mini_setting_source);
        compiled_path_elements_template = Handlebars.compile(path_elements_source);
        compiled_setting_structure_template = Handlebars.compile(setting_structure_source);
        compiled_not_found_panel_template = Handlebars.compile(not_found_panel_source);
        compiled_not_documented_panel_template = Handlebars.compile(not_documented_panel_source);
        compiled_minimal_panel_template = Handlebars.compile(minimal_panel_source);
        compiled_loading_tooltip_template = Handlebars.compile(loading_tooltip_source);
        compiled_error_tooltip_template = Handlebars.compile(error_tooltip_source);
        compiled_config_excerpt_template = Handlebars.compile(config_excerpt_source);
        compiled_version_selection_alert_template = Handlebars.compile(version_selection_alert_source);
        compiled_version_change_alert_template = Handlebars.compile(version_change_alert_source);
    }
    catch (error) {
        console.error('[setting-tag.ts] Error loading Handlebars templates:', error);
        throw error;
    }
}
// Wait for DOM to be fully loaded before attaching event handlers
$(() => {
    // Find all <setting> elements in the page
    const $setting_elements = $('setting');
    // Guard against no setting tags found
    if ($setting_elements.length === 0) {
        return;
    }
    // Load and compile Handlebars template before processing setting tags
    load_and_compile_template().then(() => {
        initialize_setting_tags($setting_elements);
    }).catch((error) => {
        console.error('[setting-tag.ts] Failed to initialize setting tags:', error);
    });
    // Listen for version changes from the header version selector
    $(document).on('version-changed', async function () {
        // Update all setting tags visibility when version changes from header
        update_all_setting_tags_visibility();
        // Regenerate all loaded popup content to reflect new version preference
        await regenerate_all_popup_content();
    });
});
/**
 * Updates the visibility of v1/v2 content in all setting tags based on display_version setting
 * Called on initial load and whenever the version preference changes
 *
 * Tags with the 'demo' attribute are skipped - they maintain their own display state
 */
function update_all_setting_tags_visibility() {
    const display_version = get_display_version();
    // Find all setting elements
    const $all_settings = $('setting');
    $all_settings.each(function () {
        const $setting = $(this);
        // Check if element has demo attribute - if so, skip version-based visibility logic
        const has_demo = $setting.attr('demo') !== undefined;
        if (has_demo) {
            // Demo element - always show both v1 and v2 content regardless of global setting
            const $v1_content = $setting.find('.setting-v1-content');
            const $v2_content = $setting.find('.setting-v2-content');
            const $separator = $setting.find('.setting-separator-vertical');
            $v1_content.show();
            $v2_content.show();
            $separator.show();
            return; // Skip to next element
        }
        // Get v1 and v2 attribute values to determine if this is a dual-attribute tag
        const v1_setting = $setting.attr('v1') ?? '';
        const v2_setting = $setting.attr('v2') ?? '';
        // Only apply hiding logic to dual-attribute tags (tags with both v1 and v2)
        const is_dual_attribute = v1_setting && v2_setting;
        if (is_dual_attribute) {
            // Find v1 and v2 content spans and separator
            const $v1_content = $setting.find('.setting-v1-content');
            const $v2_content = $setting.find('.setting-v2-content');
            const $separator = $setting.find('.setting-separator-vertical');
            // Show/hide based on display_version setting
            if (display_version === 'v1') {
                // Show only v1
                $v1_content.show();
                $v2_content.hide();
                $separator.hide();
            }
            else if (display_version === 'v2') {
                // Show only v2
                $v1_content.hide();
                $v2_content.show();
                $separator.hide();
            }
            else {
                // Show both (nc or both)
                $v1_content.show();
                $v2_content.show();
                $separator.show();
            }
        }
    });
}
/**
 * Regenerates content for all popup tooltips that have been loaded
 * Called when the version preference changes from the header selector
 */
async function regenerate_all_popup_content() {
    // Find all popup elements
    const $all_popups = $('.setting-popup');
    // Guard against no popups
    if ($all_popups.length === 0) {
        return;
    }
    // Iterate through each popup
    for (let i = 0; i < $all_popups.length; i++) {
        const $popup = $($all_popups[i]);
        // Check if this popup has been loaded (has metadata stored)
        const popup_data = $popup.data('setting-popup-data');
        if (popup_data && popup_data.content_loaded) {
            const v1_name = popup_data.v1_name;
            const v2_name = popup_data.v2_name;
            const popup_id = popup_data.popup_id;
            // Regenerate tooltip content with new version preference
            const tooltip_html = await generate_shoelace_tooltip(v1_name, v2_name);
            // Update popup content
            $popup.find('.setting-popup-content').html(tooltip_html);
            // Re-setup all handlers with new content
            setup_tab_listener($popup);
            setup_clickable_alert_handlers($popup);
            restore_tab_preference($popup);
            setup_related_settings_handlers($popup, popup_id);
            setup_config_line_click_handlers($popup);
            setup_version_choice_handlers($popup, v1_name, v2_name);
        }
    }
}
/**
 * Initialize all setting tags after template is loaded
 */
function initialize_setting_tags($setting_elements) {
    // Guard against uncompiled template
    if (!compiled_setting_structure_template) {
        console.error('[setting-tag.ts] Setting structure template not compiled');
        return;
    }
    // Build HTML structure for each setting tag using template
    $setting_elements.each(function () {
        // Get v1 and v2 attribute values
        const v1_setting = $(this).attr('v1') ?? '';
        const v2_setting = $(this).attr('v2') ?? '';
        // Check if no-version attribute is set (presence check, value doesn't matter)
        const no_version = $(this).attr('no-version') !== undefined;
        // Parse settings into path elements
        const v1_parts = v1_setting.split('.');
        const v2_parts = v2_setting.split('.');
        // Calculate first color levels for v1 and v2
        const first_v1_color = Math.min(v1_parts.length - 1, COLOR_LEVELS.length - 1);
        const first_v2_color = Math.min(v2_parts.length - 1, COLOR_LEVELS.length - 1);
        // Build path HTML using template (only if setting is not empty)
        // Pass undefined for empty settings so Handlebars treats them as falsy
        const v1_path_html = v1_setting ? build_path_elements(v1_parts, false) : undefined;
        const v2_path_html = v2_setting ? build_path_elements(v2_parts, true) : undefined;
        // Render complete structure using template
        if (!compiled_setting_structure_template) {
            console.error('[setting-tag.ts] Setting structure template not compiled');
            return;
        }
        const html_structure = compiled_setting_structure_template({
            v1_first_color: first_v1_color,
            v1_path_html: v1_path_html,
            v2_first_color: first_v2_color,
            v2_path_html: v2_path_html,
            no_version: no_version
        });
        // Replace content of setting element
        $(this).html(html_structure);
        // Create sl-popup for this setting element
        create_popup_for_setting($(this), v1_setting, v2_setting);
    });
    // Update visibility based on current display_version setting
    update_all_setting_tags_visibility();
}
/**
 * Waits for settings data to be loaded
 * Returns a promise that resolves when data is available
 */
async function wait_for_settings_data() {
    // If already loaded, return immediately
    if (window.settings_data_loaded && window.v1_settings && window.v2_settings) {
        return;
    }
    // Wait up to 5 seconds for data to load
    const max_wait = 5000;
    const check_interval = 100;
    let waited = 0;
    while (waited < max_wait) {
        if (window.settings_data_loaded && window.v1_settings && window.v2_settings) {
            return;
        }
        await new Promise(resolve => setTimeout(resolve, check_interval));
        waited += check_interval;
    }
    console.warn('[setting-tag.ts] Timeout waiting for settings data to load');
}
/**
 * Creates an sl-popup element for a setting tag
 * Uses Shoelace's popup component for proper positioning and interaction
 */
function create_popup_for_setting($setting, v1_name, v2_name) {
    // Create unique ID for this setting's popup
    const popup_id = `setting-popup-${Math.random().toString(36).substr(2, 9)}`;
    // Create sl-popup element with shift and hover-bridge (NO flip - always bottom)
    const $popup = $(`
        <sl-popup
            id="${popup_id}"
            placement="bottom"
            distance="10"
            skidding="0"
            strategy="fixed"
            shift
            hover-bridge
            arrow
            arrow-placement="anchor"
            class="setting-popup"
        >
            <div class="setting-popup-content">
                <div class="setting-tooltip-loading">
                    <sl-spinner></sl-spinner>
                    <p>Loading configuration data...</p>
                </div>
            </div>
        </sl-popup>
    `);
    // Insert popup after the setting element
    $setting.after($popup);
    // Set the setting element as the anchor
    // We need to do this after insertion because sl-popup needs the anchor in the DOM
    setTimeout(() => {
        const popup_element = $popup[0];
        popup_element.anchor = $setting[0];
    }, 0);
    // Track hover state
    let hide_timeout = null;
    let content_loaded = false;
    // Handle mouse entering the setting tag
    $setting.on('mouseenter', async function () {
        // Clear any pending hide timeout
        if (hide_timeout !== null) {
            clearTimeout(hide_timeout);
            hide_timeout = null;
        }
        // Show popup immediately
        const popup_element = $popup[0];
        popup_element.active = true;
        // Load content if not already loaded
        if (!content_loaded) {
            // Wait for settings data to be loaded
            await wait_for_settings_data();
            // Generate tooltip content using Shoelace components and loaded data (searches multiple config files)
            const tooltip_html = await generate_shoelace_tooltip(v1_name, v2_name);
            // Update popup content
            $popup.find('.setting-popup-content').html(tooltip_html);
            // After content is added, set up tab event listener
            setup_tab_listener($popup);
            // Set up clickable alert handlers for switching tabs
            setup_clickable_alert_handlers($popup);
            // Restore user's tab preference
            restore_tab_preference($popup);
            // Set up click handlers for related settings
            setup_related_settings_handlers($popup, popup_id);
            // Set up click handlers for config lines to link to GitHub
            setup_config_line_click_handlers($popup);
            // Set up click handlers for version choice buttons
            setup_version_choice_handlers($popup, v1_name, v2_name);
            content_loaded = true;
            // Store metadata on popup element for regeneration when version changes
            $popup.data('setting-popup-data', {
                v1_name: v1_name,
                v2_name: v2_name,
                popup_id: popup_id,
                content_loaded: true
            });
        }
    });
    // Handle mouse leaving the setting tag
    $setting.on('mouseleave', function () {
        // Set a small delay before hiding to allow mouse to move to popup
        hide_timeout = window.setTimeout(() => {
            const popup_element = $popup[0];
            popup_element.active = false;
        }, 200);
    });
    // Allow mouse to stay on popup without it disappearing
    $popup.on('mouseenter', () => {
        if (hide_timeout !== null) {
            clearTimeout(hide_timeout);
            hide_timeout = null;
        }
    });
    $popup.on('mouseleave', () => {
        const popup_element = $popup[0];
        popup_element.active = false;
    });
}
/**
 * Builds HTML for path elements with progressive color darkening
 * Right-most element is darkest, progressively lighter to the left
 * Dots are positioned absolutely within diagonal separators (no layout shift on hover)
 * Uses Handlebars template for rendering
 */
function build_path_elements(parts, is_v2 = false) {
    // Guard against uncompiled template
    if (!compiled_path_elements_template) {
        console.error('[setting-tag.ts] Path elements template not compiled');
        return '';
    }
    // Prepare data for template with color levels calculated
    const template_data = parts.map((part_text, index) => {
        // Calculate color level (right-most element is 0/darkest, progressively lighter to left)
        const color_level = Math.min(parts.length - 1 - index, COLOR_LEVELS.length - 1);
        // Calculate next element's color level for separator
        const next_color_level = Math.min(parts.length - 2 - index, COLOR_LEVELS.length - 1);
        return {
            text: part_text,
            color_level: color_level,
            next_color_level: next_color_level,
            is_first: is_v2 && index === 0, // First element in v2 gets brackets
            show_dot: is_v2 ? index > 0 : true // v2: no dot after section name, v1: always show dot
        };
    });
    // Render using template
    return compiled_path_elements_template({ parts: template_data, is_v2 });
}
/**
 * Simple markdown renderer for basic markdown features
 * Supports: **bold**, *italic*, `code`, [links](url), and line breaks
 */
function render_markdown(text) {
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
 * Attempts to find a setting by trying pattern matching with {name} wildcards
 * Handles cases like temperature_control.hotend.thermistor_pin matching temperature_control.{name}.thermistor_pin
 *
 * ALSO handles V2 space-to-underscore normalization:
 * - V2 config files use spaces in section names (e.g., "[temperature control]")
 * - But YAML documentation uses underscores (e.g., "temperature_control")
 * - This function normalizes by trying both space and underscore variants
 *
 * @param setting_name - The setting name to search for (e.g., "temperature_control.hotend.thermistor_pin" or "temperature control.hotend.heater_pin")
 * @param settings_map - The Map to search in
 * @returns The found setting or undefined
 */
function find_setting_with_pattern_matching(setting_name, settings_map) {
    // Try exact match first
    const exact_match = settings_map.get(setting_name);
    if (exact_match) {
        return exact_match;
    }
    // V2 SPACE-TO-UNDERSCORE NORMALIZATION
    // V2 config files use spaces in section names (e.g., "[temperature control]")
    // But YAML documentation uses underscores (e.g., "temperature_control")
    // Try replacing spaces with underscores in multi-word section names
    const normalized_setting_name = setting_name.replace(/ /g, '_');
    if (normalized_setting_name !== setting_name) {
        const normalized_match = settings_map.get(normalized_setting_name);
        if (normalized_match) {
            return normalized_match;
        }
    }
    // Try pattern matching by replacing segments with {name}
    // Split the setting name into segments (e.g., ["temperature_control", "hotend", "thermistor_pin"])
    const segments = setting_name.split('.');
    // Try replacing each segment (except first and last) with {name}
    for (let i = 1; i < segments.length - 1; i++) {
        // Create a pattern by replacing segment i with {name}
        const pattern_segments = [...segments];
        pattern_segments[i] = '{name}';
        const pattern = pattern_segments.join('.');
        // Try to find this pattern in the map
        const pattern_match = settings_map.get(pattern);
        if (pattern_match) {
            return pattern_match;
        }
    }
    // Try pattern matching with normalized name (spaces -> underscores)
    if (normalized_setting_name !== setting_name) {
        const normalized_segments = normalized_setting_name.split('.');
        // Try replacing each segment (except first and last) with {name}
        for (let i = 1; i < normalized_segments.length - 1; i++) {
            // Create a pattern by replacing segment i with {name}
            const pattern_segments = [...normalized_segments];
            pattern_segments[i] = '{name}';
            const pattern = pattern_segments.join('.');
            // Try to find this pattern in the map
            const pattern_match = settings_map.get(pattern);
            if (pattern_match) {
                return pattern_match;
            }
        }
    }
    // SECTION PREFIX STRIPPING FALLBACK
    // HTML tags often specify "section.setting" (e.g., "current control.alpha.current")
    // But YAML name field only has the setting part (e.g., "alpha.current")
    // Try stripping the first segment (assumed to be section) and searching again
    if (segments.length >= 2) {
        // Try removing first segment (section prefix)
        const without_section = segments.slice(1).join('.');
        // Try exact match without section
        const match_without_section = settings_map.get(without_section);
        if (match_without_section) {
            return match_without_section;
        }
        // Also try with normalized version (spaces -> underscores)
        const normalized_without_section = without_section.replace(/ /g, '_');
        if (normalized_without_section !== without_section) {
            const normalized_match_without_section = settings_map.get(normalized_without_section);
            if (normalized_match_without_section) {
                return normalized_match_without_section;
            }
        }
    }
    // V2 AGGRESSIVE PREFIX STRIPPING
    // V2 uses short names in YAML (e.g., "enable") with a module field (e.g., "switch")
    // HTML tags use full names with section and instance (e.g., "switch.fan.enable")
    // Try progressively stripping more segments from the left until we find a match
    // This handles cases like "switch.fan.enable" -> "fan.enable" -> "enable"
    if (segments.length >= 3) {
        // Start from 2 segments stripped (e.g., "switch.fan.enable" -> "enable")
        for (let strip_count = 2; strip_count < segments.length; strip_count++) {
            const stripped = segments.slice(strip_count).join('.');
            // Try exact match
            const stripped_match = settings_map.get(stripped);
            if (stripped_match) {
                return stripped_match;
            }
            // Try with space-to-underscore normalization
            const normalized_stripped = stripped.replace(/ /g, '_');
            if (normalized_stripped !== stripped) {
                const normalized_stripped_match = settings_map.get(normalized_stripped);
                if (normalized_stripped_match) {
                    return normalized_stripped_match;
                }
            }
        }
    }
    // No match found
    return undefined;
}
/**
 * Generates Shoelace-based tooltip HTML with tabs for v1 and v2 settings
 * Uses real data from loaded YAML files
 * Now with much more rich Shoelace components throughout
 */
async function generate_shoelace_tooltip(v1_setting_name, v2_setting_name) {
    // Check if data is loaded
    if (!window.v1_settings || !window.v2_settings) {
        return generate_loading_tooltip();
    }
    // Look up settings in loaded data using corresponding maps with pattern matching
    // This handles both exact matches and pattern matches like temperature_control.{name}.thermistor_pin
    let v1_setting = find_setting_with_pattern_matching(v1_setting_name, window.v1_settings.settings_by_corresponding);
    let v2_setting = find_setting_with_pattern_matching(v2_setting_name, window.v2_settings.settings_by_corresponding);
    // Additional fallback: check settings_by_name for settings with identical v1/v2 names
    // These won't be in corresponding maps since they don't have corresponding_v1/v2 fields
    if (!v1_setting) {
        v1_setting = find_setting_with_pattern_matching(v1_setting_name, window.v1_settings.settings_by_name);
    }
    if (!v2_setting) {
        v2_setting = find_setting_with_pattern_matching(v2_setting_name, window.v2_settings.settings_by_name);
    }
    // REMOVED FALLBACK LOGIC
    // Never use wrong version's data - always show "not documented" panel instead
    // This ensures each tab shows accurate information or clearly states when data is missing
    // If neither setting found after fallbacks AND tag attributes are empty, show error
    if (!v1_setting && !v2_setting && !v1_setting_name && !v2_setting_name) {
        return generate_error_tooltip(v1_setting_name, v2_setting_name);
    }
    // Check the user's display version preference
    const display_version = get_display_version();
    // Check if this is a single-attribute tag (v1-only or v2-only)
    const is_v1_only = v1_setting_name && !v2_setting_name;
    const is_v2_only = v2_setting_name && !v1_setting_name;
    const is_single_attribute = is_v1_only || is_v2_only;
    // Determine if we should show as single version based on user preference
    // If user selected "v1" or "v2" (not "both" or "nc"), treat dual-attribute tags as single-version
    const show_as_v1_only = is_v1_only || (display_version === 'v1' && !is_v2_only);
    const show_as_v2_only = is_v2_only || (display_version === 'v2' && !is_v1_only);
    const show_as_single = show_as_v1_only || show_as_v2_only;
    // For single-attribute tags OR when user has selected v1/v2 only, use the single-setting template (no tabs)
    if (show_as_single) {
        const selected_version = show_as_v1_only ? 'v1' : 'v2';
        const selected_setting_name = show_as_v1_only ? v1_setting_name : v2_setting_name;
        const selected_setting = show_as_v1_only ? v1_setting : v2_setting;
        return await generate_single_setting_tooltip(selected_setting_name, selected_version, selected_setting);
    }
    // Guard against template not loaded (for dual-attribute tags)
    if (!compiled_tab_group_template) {
        return '<div class="setting-panel-content"><p>Error: Tab group template not loaded</p></div>';
    }
    // Prepare data for tab-group template
    // Generate mini setting displays for tab titles (using tag attribute values)
    const v1_mini_setting = v1_setting_name ? generate_tab_title_mini_setting(v1_setting_name, 'v1') : '';
    const v2_mini_setting = v2_setting_name ? generate_tab_title_mini_setting(v2_setting_name, 'v2') : '';
    // Generate panel content (now async - searches multiple config files)
    // Priority: YAML data > not-documented panel (with proper warning) > not found
    let v1_panel_content;
    if (v1_setting) {
        // Have YAML data: show full panel (pass v1_setting_name for display)
        v1_panel_content = await generate_setting_panel(v1_setting, 'v1', v2_setting_name, v1_setting_name);
    }
    else if (v1_setting_name) {
        // No YAML data but have tag attribute: show not-documented panel with warning
        v1_panel_content = generate_not_documented_panel(v1_setting_name, 'v1', v2_setting_name, !!v2_setting);
    }
    else {
        // Neither YAML nor tag attribute: show not found
        v1_panel_content = generate_not_found_panel('v1');
    }
    let v2_panel_content;
    if (v2_setting) {
        // Have YAML data: show full panel (pass v2_setting_name for display)
        v2_panel_content = await generate_setting_panel(v2_setting, 'v2', v1_setting_name, v2_setting_name);
    }
    else if (v2_setting_name) {
        // No YAML data but have tag attribute: show not-documented panel with warning
        v2_panel_content = generate_not_documented_panel(v2_setting_name, 'v2', v1_setting_name, !!v1_setting);
    }
    else {
        // Neither YAML nor tag attribute: show not found
        v2_panel_content = generate_not_found_panel('v2');
    }
    // Generate version alerts (reuse display_version declared earlier)
    const version_selection_alert = is_version_not_configured() ? generate_version_selection_alert() : '';
    const version_change_alert = !is_version_not_configured() ? generate_version_change_alert(display_version) : '';
    // Render template with prepared data
    const main_content = compiled_tab_group_template({
        v1_mini_setting,
        v2_mini_setting,
        v1_panel_content,
        v2_panel_content
    });
    // Wrap content with alerts at top and bottom
    return version_selection_alert + main_content + version_change_alert;
}
/**
 * Generates tooltip for single-attribute tags (v1-only or v2-only) using Handlebars template
 * Shows a simple header bar with setting name and panel content below - no tabs
 */
async function generate_single_setting_tooltip(setting_name, version, setting_data) {
    // Guard against template not loaded
    if (!compiled_single_setting_template) {
        return '<div class="setting-panel-content"><p>Error: Single setting template not loaded</p></div>';
    }
    // Generate the setting name display HTML (using mini setting template)
    const setting_name_html = generate_tab_title_mini_setting(setting_name, version);
    // Generate the panel content (now async - searches multiple config files)
    let panel_content;
    if (setting_data) {
        // Have YAML data: show full panel (pass setting_name for display)
        panel_content = await generate_setting_panel(setting_data, version, undefined, setting_name);
    }
    else {
        // No YAML data: show minimal panel
        panel_content = generate_minimal_panel(setting_name, version, undefined);
    }
    // Determine version label
    const version_label = version === 'v1' ? 'V1 SETTING:' : 'V2 SETTING:';
    // Generate version alerts
    const display_version_single = get_display_version();
    const version_selection_alert = is_version_not_configured() ? generate_version_selection_alert() : '';
    const version_change_alert = !is_version_not_configured() ? generate_version_change_alert(display_version_single) : '';
    // Render template
    const main_content = compiled_single_setting_template({
        version_label,
        setting_name_html,
        panel_content
    });
    // Wrap content with alerts at top and bottom
    return version_selection_alert + main_content + version_change_alert;
}
/**
 * Generates mini setting display for tab titles using Handlebars template
 * Similar to <setting> tag but without v1/v2 label, just the path with diagonal separators
 * Dots are always visible, backgrounds get lighter from right to left
 */
function generate_tab_title_mini_setting(setting_name, version = 'v1') {
    // Guard against template not loaded
    if (!compiled_mini_setting_template) {
        return `<span class="tab-setting-display">${escape_html(setting_name)}</span>`;
    }
    // Split setting name by dots
    const path_parts = setting_name.split('.');
    // Check if this is v2
    const is_v2 = version === 'v2';
    // Prepare data for template
    // Reverse to assign colors (rightmost = darkest = color 0)
    const template_parts = path_parts.map((text, index) => {
        // Calculate color level (right-most element is 0/darkest, progressively lighter to left)
        const color_index = path_parts.length - 1 - index;
        const clamped_color = Math.min(color_index, 3); // Max 4 color levels
        // Calculate color transition for diagonal BEFORE this element
        // The diagonal should transition FROM previous element TO current element
        const prev_index = index - 1;
        const prev_color_index = prev_index >= 0 ? path_parts.length - 1 - prev_index : 0;
        const prev_clamped_color = Math.min(prev_color_index, 3);
        return {
            text: text,
            color: clamped_color,
            from_color: prev_clamped_color, // Color of previous element (left side of diagonal)
            to_color: clamped_color, // Color of current element (right side of diagonal)
            is_section: is_v2 && index === 0, // First element in v2 gets brackets
            show_dot: is_v2 ? index > 0 : true // v2: no dot after section name, v1: always show dot
        };
    });
    // Render template with data
    return compiled_mini_setting_template({ parts: template_parts });
}
/**
 * Generates GitHub link for defined_in field
 */
function generate_github_link(defined_in, version) {
    // Parse the defined_in string (format: "path/file.cpp:line")
    const parts = defined_in.split(':');
    if (parts.length !== 2) {
        return escape_html(defined_in);
    }
    let file_path = parts[0];
    const line_number = parts[1];
    // For v2, strip the "Firmware/src/" prefix from the path if present
    // because the base URL already includes it
    if (version === 'v2' && file_path.startsWith('Firmware/src/')) {
        file_path = file_path.substring('Firmware/src/'.length);
    }
    // Determine base URL
    const base_url = version === 'v1' ? GITHUB_V1_BASE : GITHUB_V2_BASE;
    // Build full URL
    const github_url = `${base_url}/${file_path}#L${line_number}`;
    // Return clickable link
    return `<a href="${github_url}" target="_blank" rel="noopener" class="github-link">
        <sl-icon name="github"></sl-icon>
        <code>${escape_html(defined_in)}</code>
    </a>`;
}
/**
 * Generates HTML for config excerpt (in-situ example)
 * Uses the config-finder library to extract the relevant section from the config file
 * Now searches multiple config files with fallback
 */
async function generate_config_excerpt_html(setting_name, version, module_name, section_name) {
    // Guard against template not loaded
    if (!compiled_config_excerpt_template) {
        return '';
    }
    // Try to find the setting in config files (searches multiple files with fallback)
    const request = {
        setting_name: setting_name,
        version: version,
        module_name: module_name,
        section_name: section_name
    };
    const result = await find_setting_in_config(request);
    // Prepare template data with file path and GitHub URL
    const template_data = {
        config_excerpt: result.found ? result : null,
        file_path: result.file_path,
        github_url: result.github_url
    };
    // Render and return HTML
    return compiled_config_excerpt_template(template_data);
}
/**
 * Generates the content panel for a single setting
 * Uses Handlebars template for rendering
 */
async function generate_setting_panel(setting, version, corresponding_setting_name, display_name) {
    // Guard against template not loaded
    if (!compiled_setting_panel_template) {
        return '<div class="setting-panel-content"><p>Error: Template not loaded</p></div>';
    }
    // Handle boolean type: inject true/false values if not present
    let values_field = setting.typical_values || setting.valid_values;
    let values_label = setting.typical_values ? '🎯 Typical Values' : '✓ Valid Values';
    // If type is bool/boolean and no values defined, inject true/false
    if ((setting.type === 'bool' || setting.type === 'boolean') && !values_field) {
        values_field = [
            { value: 'true', description: '' },
            { value: 'false', description: '' }
        ];
        values_label = '✓ Valid Values';
    }
    // Generate config excerpt HTML (now async - searches multiple files)
    const config_excerpt_html = await generate_config_excerpt_html(display_name || setting.name, version, setting.module, setting.section);
    // Prepare data for template
    const template_data = {
        setting,
        version,
        values_field,
        values_label,
        corresponding: version === 'v1' ? setting.corresponding_v2 : setting.corresponding_v1,
        other_version: version === 'v1' ? 'v2' : 'v1',
        target_panel: version === 'v1' ? 'v2-panel' : 'v1-panel',
        display_name: display_name || setting.name, // Use display_name if provided, otherwise fallback to setting.name
        config_excerpt_html: config_excerpt_html // Add config excerpt HTML
    };
    // Render template and return HTML
    return compiled_setting_panel_template(template_data);
}
/**
 * Sets up click handlers for related settings tags to navigate to them
 */
function setup_related_settings_handlers($popup, popup_id) {
    // Wait for content to be rendered
    setTimeout(() => {
        // Find all related setting buttons
        $popup.find('.related-setting-button').on('click', async function () {
            const setting_name = $(this).data('setting-name');
            // Determine which version we're currently viewing by finding the active tab
            const active_tab_element = $popup.find('sl-tab[active]')[0];
            const active_panel_name = active_tab_element ? $(active_tab_element).attr('panel') : 'v1-panel';
            const version = active_panel_name && active_panel_name.includes('v1') ? 'v1' : 'v2';
            // Load the setting data
            const settings_data = version === 'v1' ? window.v1_settings : window.v2_settings;
            if (!settings_data) {
                console.warn('[setting-tag.ts] Settings data not loaded');
                return;
            }
            const setting = settings_data.settings_by_corresponding.get(setting_name);
            if (!setting) {
                console.warn(`[setting-tag.ts] Setting not found: ${setting_name}`);
                return;
            }
            // Get both v1 and v2 names
            const v1_name = version === 'v1' ? setting_name : (setting.corresponding_v1 || setting_name);
            const v2_name = version === 'v2' ? setting_name : (setting.corresponding_v2 || setting_name);
            // Generate new tooltip content (searches multiple config files)
            const new_content = await generate_shoelace_tooltip(v1_name, v2_name);
            // Update the popup content
            $popup.find('.setting-popup-content').html(new_content);
            // Re-setup handlers
            setup_tab_listener($popup);
            setup_clickable_alert_handlers($popup);
            restore_tab_preference($popup);
            setup_related_settings_handlers($popup, popup_id);
            setup_config_line_click_handlers($popup);
        });
    }, 100);
}
/**
 * Generates a panel when setting is not found using Handlebars template
 */
function generate_not_found_panel(version) {
    // Guard against template not loaded
    if (!compiled_not_found_panel_template) {
        console.error('[setting-tag.ts] Not found panel template not compiled');
        return '<div class="setting-panel-content"><p>Error: Template not loaded</p></div>';
    }
    // Render template with version data
    return compiled_not_found_panel_template({ version });
}
/**
 * Generates a panel when setting exists in tag but is not documented in YAML
 * Shows warning alert explaining the setting is not documented
 * Uses Handlebars template for rendering
 */
function generate_not_documented_panel(setting_name, version, corresponding_setting_name, other_version_exists) {
    // Guard against template not loaded
    if (!compiled_not_documented_panel_template) {
        console.error('[setting-tag.ts] Not documented panel template not compiled');
        return '<div class="setting-panel-content"><p>Error: Template not loaded</p></div>';
    }
    // Prepare template data
    const other_version = version === 'v1' ? 'v2' : 'v1';
    const target_panel = version === 'v1' ? 'v2-panel' : 'v1-panel';
    const template_data = {
        setting_name,
        version,
        other_version,
        other_version_exists: other_version_exists ?? false,
        corresponding_setting_name,
        target_panel
    };
    // Render template and return HTML
    return compiled_not_documented_panel_template(template_data);
}
/**
 * Generates a minimal panel when YAML data doesn't exist but tag attribute does
 * Shows just the setting name and explains that detailed documentation isn't available
 * Uses Handlebars template for rendering
 */
function generate_minimal_panel(setting_name, version, corresponding_setting_name) {
    // Guard against template not loaded
    if (!compiled_minimal_panel_template) {
        console.error('[setting-tag.ts] Minimal panel template not compiled');
        return '<div class="setting-panel-content"><p>Error: Template not loaded</p></div>';
    }
    // Prepare template data
    const other_version = version === 'v1' ? 'v2' : 'v1';
    const target_panel = version === 'v1' ? 'v2-panel' : 'v1-panel';
    const template_data = {
        setting_name,
        corresponding_setting_name,
        other_version,
        target_panel
    };
    // Render template and return HTML
    return compiled_minimal_panel_template(template_data);
}
/**
 * Generates a loading tooltip while data is being fetched using Handlebars template
 */
function generate_loading_tooltip() {
    // Guard against template not loaded
    if (!compiled_loading_tooltip_template) {
        console.error('[setting-tag.ts] Loading tooltip template not compiled');
        return '<div><p>Loading...</p></div>';
    }
    // Render template (no data needed)
    return compiled_loading_tooltip_template({});
}
/**
 * Generates an error tooltip when setting is not found using Handlebars template
 */
function generate_error_tooltip(v1_name, v2_name) {
    // Guard against template not loaded
    if (!compiled_error_tooltip_template) {
        console.error('[setting-tag.ts] Error tooltip template not compiled');
        return '<div><p>Error: Template not loaded</p></div>';
    }
    // Render template with setting names
    return compiled_error_tooltip_template({ v1_name, v2_name });
}
/**
 * Sets up tab change listener to save user preference
 */
function setup_tab_listener($popup) {
    // Wait for Shoelace components to be ready
    setTimeout(() => {
        const tab_group = $popup.find('sl-tab-group')[0];
        if (tab_group) {
            tab_group.addEventListener('sl-tab-show', (event) => {
                const panel_name = event.detail.name;
                // Extract version from panel name (e.g., "v1-panel" -> "v1")
                const version = panel_name.replace('-panel', '');
                // Save to localStorage
                localStorage.setItem(TAB_PREFERENCE_KEY, version);
            });
        }
    }, 100);
}
/**
 * Restores user's tab preference from localStorage
 */
function restore_tab_preference($popup) {
    // Get saved preference
    const saved_tab = localStorage.getItem(TAB_PREFERENCE_KEY);
    // Default to v1 if no preference
    const preferred_tab = saved_tab || 'v1';
    // Wait for Shoelace components to be ready
    setTimeout(() => {
        const tab_group = $popup.find('sl-tab-group')[0];
        if (tab_group && typeof tab_group.show === 'function') {
            // Show the preferred panel using Shoelace API
            try {
                tab_group.show(`${preferred_tab}-panel`);
            }
            catch (error) {
                console.warn('[setting-tag.ts] Failed to restore tab preference:', error);
            }
        }
        else if (tab_group) {
            // Fallback: directly set active attribute on tab-panel
            const panel = $popup.find(`sl-tab-panel[name="${preferred_tab}-panel"]`)[0];
            if (panel) {
                panel.active = true;
            }
        }
    }, 100);
}
/**
 * Sets up click handlers for corresponding setting alerts to switch tabs
 */
function setup_clickable_alert_handlers($popup) {
    // Wait for Shoelace components to be ready
    setTimeout(() => {
        const clickable_alerts = $popup.find('.clickable-alert');
        const tab_group = $popup.find('sl-tab-group')[0];
        if (tab_group && clickable_alerts.length > 0) {
            clickable_alerts.each((_index, alert) => {
                const $alert = $(alert);
                const target_panel = $alert.attr('data-target-panel');
                if (target_panel) {
                    $alert.on('click', (e) => {
                        // Don't trigger if clicking on copy button
                        if ($(e.target).closest('sl-copy-button').length > 0) {
                            return;
                        }
                        // Switch to the target panel
                        if (typeof tab_group.show === 'function') {
                            try {
                                tab_group.show(target_panel);
                            }
                            catch (error) {
                                console.warn('[setting-tag.ts] Failed to switch tab:', error);
                            }
                        }
                        else {
                            // Fallback: directly set active attribute on tab-panel
                            const panel = $popup.find(`sl-tab-panel[name="${target_panel}"]`)[0];
                            if (panel) {
                                panel.active = true;
                            }
                        }
                    });
                }
            });
        }
    }, 100);
}
/**
 * Sets up click handlers for version choice buttons
 * Handles both version selection (nc state) and version change (configured state)
 */
function setup_version_choice_handlers($popup, v1_setting_name, v2_setting_name) {
    // Wait for content to be rendered
    setTimeout(() => {
        // Find all version choice buttons
        const version_buttons = $popup.find('.version-choice-button');
        if (version_buttons.length > 0) {
            version_buttons.each((_index, button) => {
                const $button = $(button);
                const selected_version = $button.attr('data-version');
                if (selected_version) {
                    $button.on('click', async (e) => {
                        // Prevent event propagation
                        e.stopPropagation();
                        e.preventDefault();
                        // Save the version preference
                        set_display_version(selected_version);
                        // Update all setting tags on the page immediately
                        update_all_setting_tags_visibility();
                        // Regenerate the tooltip content with new configuration
                        const new_content = await generate_shoelace_tooltip(v1_setting_name, v2_setting_name);
                        // Update the popup content
                        $popup.find('.setting-popup-content').html(new_content);
                        // Re-setup all handlers with new content
                        setup_tab_listener($popup);
                        setup_clickable_alert_handlers($popup);
                        restore_tab_preference($popup);
                        setup_related_settings_handlers($popup, $popup.attr('id') || '');
                        setup_config_line_click_handlers($popup);
                        setup_version_choice_handlers($popup, v1_setting_name, v2_setting_name);
                    });
                }
            });
        }
    }, 100);
}
/**
 * Sets up click handlers for config lines to link to GitHub
 */
function setup_config_line_click_handlers($popup) {
    // Wait for content to be rendered
    setTimeout(() => {
        // Find all config lines with GitHub URLs
        const clickable_lines = $popup.find('.config-line[data-github-url]');
        if (clickable_lines.length > 0) {
            clickable_lines.each((_index, line) => {
                const $line = $(line);
                const github_url = $line.attr('data-github-url');
                if (github_url) {
                    // Make the line clickable with cursor pointer
                    $line.css('cursor', 'pointer');
                    // Add click handler to open GitHub URL in new tab
                    $line.on('click', (e) => {
                        // Don't trigger if clicking on copy button or other interactive elements
                        if ($(e.target).closest('sl-copy-button, sl-icon-button, a').length > 0) {
                            return;
                        }
                        // Open GitHub URL in new tab
                        window.open(github_url, '_blank', 'noopener,noreferrer');
                    });
                    // Add hover effect to show it's clickable
                    $line.on('mouseenter', function () {
                        $(this).css('background-color', 'rgba(88, 166, 255, 0.15)');
                    });
                    $line.on('mouseleave', function () {
                        $(this).css('background-color', '');
                    });
                }
            });
        }
        // Set up copy button click handlers for highlighted lines
        const copy_buttons = $popup.find('.copy-line-button');
        if (copy_buttons.length > 0) {
            copy_buttons.each((_index, button) => {
                const $button = $(button);
                // Add click handler to copy line content
                $button.on('click', async (e) => {
                    // Prevent event from propagating to the line click handler
                    e.stopPropagation();
                    e.preventDefault();
                    // Get the line content from the parent line's data attribute
                    const $line = $button.closest('.config-line');
                    const line_content = $line.attr('data-line-content');
                    if (line_content) {
                        try {
                            // Copy to clipboard using Clipboard API
                            await navigator.clipboard.writeText(line_content);
                            // Visual feedback: briefly change the icon
                            $button.attr('name', 'check');
                            setTimeout(() => {
                                $button.attr('name', 'copy');
                            }, 1500);
                        }
                        catch (error) {
                            console.error('[setting-tag.ts] Failed to copy line:', error);
                            // Show error feedback
                            $button.attr('name', 'x');
                            setTimeout(() => {
                                $button.attr('name', 'copy');
                            }, 1500);
                        }
                    }
                });
            });
        }
    }, 100);
}
/**
 * Generates the version selection alert HTML (for "nc" state)
 * Shown at the top of popups when user hasn't configured their preference
 */
function generate_version_selection_alert() {
    // Guard against template not loaded
    if (!compiled_version_selection_alert_template) {
        console.error('[setting-tag.ts] Version selection alert template not compiled');
        return '';
    }
    // Render template
    return compiled_version_selection_alert_template({});
}
/**
 * Generates the version change alert HTML (for configured state)
 * Shown at the bottom of popups when user has configured their preference
 */
function generate_version_change_alert(current_version) {
    // Guard against template not loaded
    if (!compiled_version_change_alert_template) {
        console.error('[setting-tag.ts] Version change alert template not compiled');
        return '';
    }
    // Don't show if version is "nc" (not configured)
    if (current_version === 'nc') {
        return '';
    }
    // Render template with current version
    return compiled_version_change_alert_template({ current_version });
}
/**
 * Escapes HTML special characters to prevent XSS
 * Note: Forward slashes don't need escaping in HTML content
 */
function escape_html(text) {
    const html_escape_map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    return text.replace(/[&<>"']/g, (char) => html_escape_map[char]);
}
