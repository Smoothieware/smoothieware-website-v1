/**
 * code-tag.ts
 *
 * Interactive custom tags for G-code and M-code display with hover tooltips
 * - <gcode>G10</gcode> - for G-codes with orange G letter
 * - <mcode>M119</mcode> - for M-codes with blue M letter
 * - Shows text content in white monospace font on black background
 * - Lightly rounded corners for visual appeal
 * - Hover tooltip showing code documentation from YAML database
 * - Works with data from /assets/data/gcode-mcode-reference.yaml
 */

// Import jQuery as a module
import $ from 'jquery';

// Import Handlebars for template rendering
import Handlebars from 'handlebars';

// Import js-yaml for parsing YAML data
import jsyaml from 'js-yaml';

// Compiled Handlebars template for code popup
let compiled_code_popup_template: HandlebarsTemplateDelegate<any> | null = null;

// Store loaded YAML data
let gcode_data: Record<string, any> = {};
let mcode_data: Record<string, any> = {};

/**
 * Loads and compiles the Handlebars template for code popup
 */
async function load_and_compile_template(): Promise<void> {

    console.log('[code-tag.ts] load_and_compile_template() ENTRY');

    try {
        console.log('[code-tag.ts] Fetching code popup template...');

        // Fetch the code popup template
        const template_response = await fetch('/assets/templates/code-popup.hbs');

        console.log('[code-tag.ts] Template fetch response status:', template_response.status);

        if (!template_response.ok) {
            console.error('[code-tag.ts] Failed to fetch code popup template:', template_response.status);
            return;
        }

        const template_source = await template_response.text();

        console.log('[code-tag.ts] Template source length:', template_source.length);

        // Register Handlebars helpers
        Handlebars.registerHelper('eq', function(a: any, b: any) {
            return a === b;
        });

        // Compile the template
        compiled_code_popup_template = Handlebars.compile(template_source);

        console.log('[code-tag.ts] Template compiled successfully, type:', typeof compiled_code_popup_template);

        console.log('[code-tag.ts] Code popup template loaded and compiled successfully');
    }
    catch (error) {
        console.error('[code-tag.ts] Error loading code popup template:', error);
    }

    console.log('[code-tag.ts] load_and_compile_template() EXIT');
}

/**
 * Loads G-code and M-code data from YAML file
 */
async function load_gcode_mcode_data(): Promise<void> {

    console.log('[code-tag.ts] load_gcode_mcode_data() ENTRY');

    try {
        // Fetch the YAML data file
        const yaml_response = await fetch('/assets/data/gcode-mcode-reference.yaml');
        if (!yaml_response.ok) {
            console.error('[code-tag.ts] Failed to fetch gcode-mcode-reference.yaml:', yaml_response.status);
            return;
        }

        const yaml_text = await yaml_response.text();

        // Parse YAML
        const parsed_data: any = jsyaml.load(yaml_text);

        // Store the data
        gcode_data = parsed_data.gcodes || {};
        mcode_data = parsed_data.mcodes || {};

        console.log(`[code-tag.ts] Loaded ${Object.keys(gcode_data).length} G-codes and ${Object.keys(mcode_data).length} M-codes`);
    }
    catch (error) {
        console.error('[code-tag.ts] Error loading gcode-mcode-reference.yaml:', error);
    }

    console.log('[code-tag.ts] load_gcode_mcode_data() EXIT');
}

/**
 * Escapes HTML special characters to prevent XSS
 */
function escape_html(text: string): string {

    const html_escape_map: Record<string, string> = {
        '&':  '&amp;',
        '<':  '&lt;',
        '>':  '&gt;',
        '"':  '&quot;',
        "'":  '&#39;'
    };

    return text.replace(/[&<>"']/g, (char) => html_escape_map[char]);
}

/**
 * Sets up click handlers for related code buttons in popup
 * Updates popup content to show the related code's information
 */
function setup_related_code_handlers($popup: JQuery): void {

    // Wait for content to be rendered
    setTimeout(() => {

        // Find all related code buttons
        $popup.find('.related-code-button').on('click', function() {

            const related_code = $(this).data('code');

            console.log(`[code-tag.ts] Clicked related code: ${related_code}`);

            // Determine if it's a G-code or M-code
            const is_gcode = related_code.startsWith('G');

            // Get code data
            const code_map = is_gcode ? gcode_data : mcode_data;
            const code_info = code_map[related_code];

            // If code not found, warn and return
            if (!code_info) {
                console.warn(`[code-tag.ts] Related code not found: ${related_code}`);
                return;
            }

            // Update popup content with related code
            update_popup_content($popup, related_code, is_gcode, code_info);
        });

    }, 100);
}

/**
 * Updates popup content to display a different code
 */
function update_popup_content($popup: JQuery, code: string, is_gcode: boolean, code_info: any): void {

    // Split code into letter and number
    const letter = code.charAt(0);
    const number = code.substring(1);

    // Determine color for letter
    const letter_color = is_gcode ? '#ffd966' : '#7ec8ed';

    // Prepare template data for related code
    const template_data = {
        code:          code,
        letter:        letter,
        number:        number,
        code_type:     is_gcode ? 'G-code' : 'M-code',
        description:   code_info.description || 'No description available',
        parameters:    code_info.parameters || [],
        example:       code_info.example || '',
        notes:         code_info.notes || '',
        related_codes: code_info.related_codes || []
    };

    // Render new popup content
    const new_popup_html = compiled_code_popup_template(template_data);

    // Update the popup content (replace the entire .code-popup-content div's innerHTML)
    $popup.find('.code-popup-content').html(new_popup_html);

    // Set the letter color dynamically
    $popup.find('.code-popup-letter').css('color', letter_color);

    // Re-setup handlers for new related codes
    setup_related_code_handlers($popup);

    console.log(`[code-tag.ts] Updated popup to show ${code}`);
}

/**
 * Creates sl-popup element for a code tag (matches setting-tag.ts pattern)
 * Popup is created once and reused, NOT recreated on every hover
 */
function create_popup_for_code($code_element: JQuery<HTMLElement>, code: string, is_gcode: boolean): void {

    // Create unique ID for this code's popup
    const popup_id = `code-popup-${Math.random().toString(36).substr(2, 9)}`;

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
            class="code-popup"
        >
            <div class="code-popup-content">
                <div class="code-tooltip-loading">
                    <sl-spinner></sl-spinner>
                    <p>Loading code data...</p>
                </div>
            </div>
        </sl-popup>
    `);

    // Insert popup after the code element (NOT appended to body)
    $code_element.after($popup);

    // Set the code element as the anchor
    // We need to do this after insertion because sl-popup needs the anchor in the DOM
    setTimeout(() => {
        const popup_element = $popup[0] as any;
        popup_element.anchor = $code_element[0];
    }, 0);

    // Track hover state
    let hide_timeout: number | null = null;
    let content_loaded = false;

    // Handle mouse entering the code tag
    $code_element.on('mouseenter', function() {

        // Clear any pending hide timeout
        if (hide_timeout !== null) {
            clearTimeout(hide_timeout);
            hide_timeout = null;
        }

        console.log(`[code-tag.ts] Hover on code: ${code}`);

        // Show popup immediately
        const popup_element = $popup[0] as any;
        popup_element.active = true;

        // Load content if not already loaded
        if (!content_loaded) {

            // Get code data from appropriate map
            const code_map = is_gcode ? gcode_data : mcode_data;
            const code_info = code_map[code];

            console.log(`[code-tag.ts] Looking up code: "${code}", is_gcode: ${is_gcode}`);
            console.log('[code-tag.ts] code_map keys:', Object.keys(code_map));
            console.log('[code-tag.ts] code_info:', code_info);
            console.log('[code-tag.ts] compiled_code_popup_template exists:', !!compiled_code_popup_template);

            // If no template or no code info, show error
            if (!compiled_code_popup_template || !code_info) {
                $popup.find('.code-popup-content').html('<p>Code data not available</p>');
                return;
            }

            // Update popup content with code data
            update_popup_content($popup, code, is_gcode, code_info);

            content_loaded = true;
        }
    });

    // Handle mouse leaving the code tag
    $code_element.on('mouseleave', function() {

        // Set a small delay before hiding to allow mouse to move to popup
        hide_timeout = window.setTimeout(() => {
            const popup_element = $popup[0] as any;
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
        const popup_element = $popup[0] as any;
        popup_element.active = false;
    });
}

/**
 * Process all gcode and mcode tags in the page
 * Can be called multiple times - will skip already processed tags
 */
function process_all_code_tags(): void {

    // Find all <gcode> and <mcode> elements in the page
    const $gcode_elements = $('gcode:not(.code-tag-processed)');
    const $mcode_elements = $('mcode:not(.code-tag-processed)');

    // Guard against no tags found
    if ($gcode_elements.length === 0 && $mcode_elements.length === 0) {
        console.log('[code-tag.ts] No unprocessed gcode or mcode tags found');
        return;
    }

    console.log(`[code-tag.ts] Found ${$gcode_elements.length} unprocessed gcode tag(s) and ${$mcode_elements.length} unprocessed mcode tag(s)`);

    // Process each gcode tag
    $gcode_elements.each(function(this: HTMLElement) {

        // Mark as processed to avoid reprocessing
        $(this).addClass('code-tag-processed');

            // Get the text content (may include parameters like "G92 E0")
            const text_content = $(this).text().trim();

            // Extract the code command (first part before any space)
            // This is used for database lookup
            const code_command = text_content.split(/\s+/)[0];

            // Wrap the first letter (G) in colored span
            const first_letter = escape_html(text_content.charAt(0));
            const rest_of_text = escape_html(text_content.substring(1));
            const colored_content = `<span class="gcode-letter">${first_letter}</span>${rest_of_text}`;

            // Create the display structure with colored first letter
            const html_structure = `<span class="code-content">${colored_content}</span>`;

            // Replace content of gcode element
            $(this).html(html_structure);

            // Create popup once for this tag (matches setting-tag.ts pattern)
            // Use code_command (not full text_content) for database lookup
            create_popup_for_code($(this), code_command, true);

            console.log(`[code-tag.ts] Processed gcode tag: "${text_content}" (lookup: "${code_command}")`);
        });

    // Process each mcode tag
    $mcode_elements.each(function(this: HTMLElement) {

        // Mark as processed to avoid reprocessing
        $(this).addClass('code-tag-processed');

        // Get the text content (may include parameters like "M104 S200")
        const text_content = $(this).text().trim();

        // Extract the code command (first part before any space)
        // This is used for database lookup
        const code_command = text_content.split(/\s+/)[0];

        // Wrap the first letter (M) in colored span
        const first_letter = escape_html(text_content.charAt(0));
        const rest_of_text = escape_html(text_content.substring(1));
        const colored_content = `<span class="mcode-letter">${first_letter}</span>${rest_of_text}`;

        // Create the display structure with colored first letter
        const html_structure = `<span class="code-content">${colored_content}</span>`;

        // Replace content of mcode element
        $(this).html(html_structure);

        // Create popup once for this tag (matches setting-tag.ts pattern)
        // Use code_command (not full text_content) for database lookup
        create_popup_for_code($(this), code_command, false);

        console.log(`[code-tag.ts] Processed mcode tag: "${text_content}" (lookup: "${code_command}")`);
    });
}

// Wait for DOM to be fully loaded before processing tags
$(() => {

    console.log('[code-tag.ts] Initializing gcode and mcode tag handlers');

    // Load template and data in parallel
    console.log('[code-tag.ts] Starting Promise.all for template and data loading');

    const templatePromise = load_and_compile_template();
    const dataPromise = load_gcode_mcode_data();

    console.log('[code-tag.ts] Template promise:', templatePromise);
    console.log('[code-tag.ts] Data promise:', dataPromise);

    Promise.all([
        templatePromise,
        dataPromise
    ]).then(() => {

        console.log('[code-tag.ts] Template and data loaded, processing tags');
        console.log('[code-tag.ts] compiled_code_popup_template type:', typeof compiled_code_popup_template);
        console.log('[code-tag.ts] compiled_code_popup_template value:', compiled_code_popup_template);

        // Process tags immediately
        process_all_code_tags();

        // Process again after a short delay to catch Shoelace-rendered content
        setTimeout(() => {
            console.log('[code-tag.ts] Re-processing tags after Shoelace render delay');
            process_all_code_tags();
        }, 100);

        // Process again after a longer delay to catch any late-rendered content
        setTimeout(() => {
            console.log('[code-tag.ts] Final re-processing of tags');
            process_all_code_tags();
        }, 500);

    }).catch((error) => {
        console.error('[code-tag.ts] Error loading template or data:', error);
    });
});
