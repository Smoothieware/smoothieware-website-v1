/**
 * config-finder.ts
 *
 * Library for finding settings in Smoothieware config files (v1 and v2)
 * Extracts the relevant section/module with context lines for display
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Define all config files to search (in priority order)
const V1_CONFIG_FILES = [
    { path: 'v1/Smoothieboard/config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/Smoothieboard/config', priority: 1 },
    { path: 'v1/Smoothieboard.delta/config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/Smoothieboard.delta/config', priority: 2 },
    { path: 'v1/AzteegX5Mini/config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/AzteegX5Mini/config', priority: 3 },
    { path: 'v1/AzteegX5Mini.delta/config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/AzteegX5Mini.delta/config', priority: 4 },
    { path: 'v1/rotary.delta/config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/rotary.delta/config', priority: 5 },
    { path: 'v1/Snippets/spindle.config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/Snippets/spindle.config', priority: 10 },
    { path: 'v1/Snippets/drill_cycles.config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/Snippets/drill_cycles.config', priority: 11 },
    { path: 'v1/Snippets/panel.config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/Snippets/panel.config', priority: 12 },
    { path: 'v1/Snippets/PT1000.config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/Snippets/PT1000.config', priority: 13 },
    { path: 'v1/Snippets/six-axis.config', github_repo: 'Smoothieware', github_path: 'ConfigSamples/Snippets/six-axis.config', priority: 14 },
];
const V2_CONFIG_FILES = [
    { path: 'v2/config-3d.ini', github_repo: 'SmoothieV2', github_path: 'ConfigSamples/config-3d.ini', priority: 1 },
    { path: 'v2/config-cnc.ini', github_repo: 'SmoothieV2', github_path: 'ConfigSamples/config-cnc.ini', priority: 2 },
    { path: 'v2/config-delta.ini', github_repo: 'SmoothieV2', github_path: 'ConfigSamples/config-delta.ini', priority: 3 },
    { path: 'v2/config-lathe.ini', github_repo: 'SmoothieV2', github_path: 'ConfigSamples/config-lathe.ini', priority: 4 },
    { path: 'v2/external-drivers.ini', github_repo: 'SmoothieV2', github_path: 'ConfigSamples/external-drivers.ini', priority: 5 },
    { path: 'v2/button-box.ini', github_repo: 'SmoothieV2', github_path: 'ConfigSamples/button-box.ini', priority: 6 },
    { path: 'v2/minimal.ini', github_repo: 'SmoothieV2', github_path: 'ConfigSamples/minimal.ini', priority: 7 },
];
/**
 * Generates GitHub URL for a config file at a specific line
 */
function generate_github_url(metadata, line_number) {
    const base_url = `https://github.com/Smoothieware/${metadata.github_repo}/blob/`;
    const branch = metadata.github_repo === 'SmoothieV2' ? 'master' : 'edge';
    return `${base_url}${branch}/${metadata.github_path}#L${line_number + 1}`;
}
/**
 * Applies GitHub-style syntax highlighting to a config line
 * Returns HTML with appropriate CSS classes for different syntax elements
 */
function apply_syntax_highlighting(line) {
    // Escape HTML special characters first
    function escape_html(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
    // Check if it's a comment line (starts with #)
    if (line.trim().startsWith('#')) {
        return `<span class="config-syntax-comment">${escape_html(line)}</span>`;
    }
    // Check if it's a section header (V2: [section_name])
    const section_match = line.match(/^\s*(\[.*?\])\s*(#.*)?$/);
    if (section_match) {
        const section_part = section_match[1];
        const comment_part = section_match[2] || '';
        return `<span class="config-syntax-section">${escape_html(section_part)}</span>` +
            (comment_part ? `<span class="config-syntax-comment">${escape_html(comment_part)}</span>` : '');
    }
    // Check if it's a setting line with = (V2 format: setting_name = value)
    const v2_setting_match = line.match(/^(\s*)([a-zA-Z0-9_.<>]+)(\s*)(=)(\s*)([^#]*?)(#.*)?$/);
    if (v2_setting_match) {
        const [, leading_space, setting_name, space_before_eq, eq_sign, space_after_eq, value, comment] = v2_setting_match;
        return escape_html(leading_space) +
            `<span class="config-syntax-setting">${escape_html(setting_name)}</span>` +
            escape_html(space_before_eq) +
            `<span class="config-syntax-separator">${escape_html(eq_sign)}</span>` +
            escape_html(space_after_eq) +
            `<span class="config-syntax-value">${escape_html(value)}</span>` +
            (comment ? `<span class="config-syntax-comment">${escape_html(comment)}</span>` : '');
    }
    // Check if it's a setting line without = (V1 format: setting_name value)
    const v1_setting_match = line.match(/^(\s*)([a-zA-Z0-9_.]+)(\s+)([^#]+?)(#.*)?$/);
    if (v1_setting_match) {
        const [, leading_space, setting_name, space, value, comment] = v1_setting_match;
        return escape_html(leading_space) +
            `<span class="config-syntax-setting">${escape_html(setting_name)}</span>` +
            escape_html(space) +
            `<span class="config-syntax-value">${escape_html(value)}</span>` +
            (comment ? `<span class="config-syntax-comment">${escape_html(comment)}</span>` : '');
    }
    // If no match, return escaped plain text
    return escape_html(line);
}
/**
 * Finds a setting in a config file and returns the relevant section with context
 * Handles both v1 (module-based) and v2 (INI-style sections) formats
 * Now supports searching multiple config files with fallback
 */
export function find_setting_in_config(request) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        // Legacy support: if config_content is provided, use single-file search
        if (request.config_content) {
            const all_lines = request.config_content.split('\n');
            const result = request.version === 'v1'
                ? find_setting_v1(request.setting_name, all_lines, request.module_name)
                : find_setting_v2(request.setting_name, all_lines, request.section_name);
            // Add placeholder file info for legacy mode
            return Object.assign(Object.assign({}, result), { file_path: request.version === 'v1' ? 'v1/config' : 'v2/config-3d.ini', github_url: '' });
        }
        // Get list of files to search based on version
        const config_files = request.version === 'v1' ? V1_CONFIG_FILES : V2_CONFIG_FILES;
        // Try each config file in priority order
        for (const file_metadata of config_files) {
            try {
                // Fetch the config file from the server
                const response = yield fetch(`/assets/config/${file_metadata.path}`);
                if (!response.ok) {
                    console.warn(`Failed to fetch ${file_metadata.path}: ${response.status}`);
                    continue;
                }
                const config_content = yield response.text();
                const all_lines = config_content.split('\n');
                // Search for the setting in this file
                const result = request.version === 'v1'
                    ? find_setting_v1(request.setting_name, all_lines, request.module_name)
                    : find_setting_v2(request.setting_name, all_lines, request.section_name);
                // If found, add file metadata and return
                if (result.found) {
                    const target_line_number = ((_a = result.lines[result.target_line_index]) === null || _a === void 0 ? void 0 : _a.line_number) || 0;
                    return Object.assign(Object.assign({}, result), { file_path: file_metadata.path, github_url: generate_github_url(file_metadata, target_line_number) });
                }
            }
            catch (error) {
                console.error(`Error loading config file ${file_metadata.path}:`, error);
                continue;
            }
        }
        // Not found in any file
        return {
            found: false,
            lines: [],
            target_line_index: -1,
            section_header_index: -1,
            file_path: '',
            github_url: '',
            error_message: `Setting "${request.setting_name}" not found in any ${request.version} config file`
        };
    });
}
/**
 * Finds a setting in v1 config format (module-based)
 * v1 format: setting_name value # comment
 * Settings are grouped by module (first part of dot-separated path)
 */
function find_setting_v1(setting_name, all_lines, module_name) {
    // First, find the setting line
    const setting_line_info = find_setting_line_v1(setting_name, all_lines);
    // If not found, return error
    if (setting_line_info.line_number === -1) {
        return {
            found: false,
            lines: [],
            target_line_index: -1,
            section_header_index: -1,
            file_path: '',
            github_url: '',
            error_message: `Setting "${setting_name}" not found in v1 config file`
        };
    }
    // Determine the module name if not provided
    const actual_module_name = module_name || extract_module_from_setting_name(setting_name);
    // Find all lines belonging to this module
    const module_lines = find_module_section_v1(all_lines, actual_module_name, setting_line_info.line_number);
    // Add fade context (3 lines above and below)
    const lines_with_context = add_fade_context(all_lines, module_lines, setting_line_info.line_number, -1 // No section header in v1
    );
    // Find the index of the target line in the result array
    const target_index = lines_with_context.findIndex(line => line.line_number === setting_line_info.line_number);
    return {
        found: true,
        lines: lines_with_context,
        target_line_index: target_index,
        section_header_index: -1,
        file_path: '',
        github_url: '',
        error_message: undefined
    };
}
/**
 * Normalizes section/module names by treating spaces and underscores as equivalent
 * This allows matching "temperature control" with "temperature_control" and vice versa
 *
 * @param name - The section/module name to normalize
 * @returns Normalized name with underscores and lowercase
 */
function normalize_section_name(name) {
    // Replace all spaces with underscores and convert to lowercase for case-insensitive comparison
    return name.replace(/ /g, '_').toLowerCase();
}
/**
 * Finds a setting in v2 config format (INI-style sections)
 * v2 format: [section_name] followed by setting_name = value
 */
function find_setting_v2(setting_name, all_lines, section_name) {
    // Strip brackets from section name if present
    // YAML has section as '[actuator]', but we need 'actuator'
    let clean_section = null;
    if (section_name) {
        clean_section = section_name.replace(/^\[|\]$/g, '').trim();
    }
    // Handle three patterns for v2 settings:
    // 1. "x.steps_per_mm" with section="[actuator]" -> search for "alpha.steps_per_mm" in [actuator]
    // 2. "actuator.x.steps_per_mm" with section="[actuator]" -> remove prefix, map x->alpha
    // 3. "actuator.x.steps_per_mm" with NO section field -> extract section from name, map x->alpha
    let setting_key = setting_name;
    let expected_section = clean_section;
    // If no section provided but setting name has dot-separated parts, try to extract section from name
    // e.g., "actuator.x.step_pin" -> section="actuator", key="x.step_pin"
    // ALSO handle multi-word sections: "temperature control.hotend.heater_pin" -> section="temperature control", key="hotend.heater_pin"
    if (!clean_section && setting_name.includes('.')) {
        const parts = setting_name.split('.');
        if (parts.length >= 2) {
            // Try first part as potential section name (may contain spaces)
            const potential_section = parts[0];
            // Check if this could be a section (not a generic axis name)
            if (!['x', 'y', 'z'].includes(potential_section)) {
                expected_section = potential_section;
                setting_key = parts.slice(1).join('.');
            }
        }
    }
    // If we have a section and the setting name includes it as prefix, remove the prefix
    // e.g., "actuator.x.steps_per_mm" with section="actuator" -> "x.steps_per_mm"
    if (expected_section && setting_name.startsWith(expected_section + '.')) {
        setting_key = setting_name.substring(expected_section.length + 1);
    }
    // Axis mapping for v2 config files
    // YAML uses x.steps_per_mm for documentation, but config file has alpha.steps_per_mm
    const axis_mapping = {
        'x.': 'alpha.',
        'y.': 'beta.',
        'z.': 'gamma.'
    };
    // Check if setting key starts with a generic axis prefix and map it
    for (const [generic, specific] of Object.entries(axis_mapping)) {
        if (setting_key.startsWith(generic)) {
            setting_key = setting_key.replace(generic, specific);
            break;
        }
    }
    // Search for the setting key (not the full path)
    const setting_line_info = find_setting_line_v2(setting_key, all_lines);
    // If not found, return error
    if (setting_line_info.line_number === -1) {
        return {
            found: false,
            lines: [],
            target_line_index: -1,
            section_header_index: -1,
            file_path: '',
            github_url: '',
            error_message: `Setting "${setting_key}" not found in v2 config file`
        };
    }
    // If a section was expected, verify the setting is in that section
    // Use normalized comparison to handle both spaces and underscores
    if (expected_section !== null) {
        const section_info = find_section_for_line_v2(all_lines, setting_line_info.line_number);
        if (normalize_section_name(section_info.section_name) !== normalize_section_name(expected_section)) {
            return {
                found: false,
                lines: [],
                target_line_index: -1,
                section_header_index: -1,
                file_path: '',
                github_url: '',
                error_message: `Setting "${setting_key}" found but not in expected section "${expected_section}"`
            };
        }
    }
    // Find the section that contains this setting
    const section_info = find_section_for_line_v2(all_lines, setting_line_info.line_number);
    // If no section found, return error
    if (section_info.start_line === -1) {
        return {
            found: false,
            lines: [],
            target_line_index: -1,
            section_header_index: -1,
            file_path: '',
            github_url: '',
            error_message: `No section found containing setting "${setting_name}"`
        };
    }
    // Get all lines in the section
    const section_lines = [];
    for (let line_num = section_info.start_line; line_num <= section_info.end_line; line_num++) {
        section_lines.push(line_num);
    }
    // Add fade context (3 lines above and below)
    const lines_with_context = add_fade_context(all_lines, section_lines, setting_line_info.line_number, section_info.start_line // Section header line
    );
    // Find the indices in the result array
    const target_index = lines_with_context.findIndex(line => line.line_number === setting_line_info.line_number);
    const section_header_index = lines_with_context.findIndex(line => line.line_number === section_info.start_line);
    return {
        found: true,
        lines: lines_with_context,
        target_line_index: target_index,
        section_header_index: section_header_index,
        file_path: '',
        github_url: '',
        error_message: undefined
    };
}
/**
 * Finds the line number of a setting in v1 format
 * Prefers uncommented lines, falls back to commented lines
 * Returns first match if multiple found
 * Handles template patterns like <name>, <axis>, {name}, etc.
 */
function find_setting_line_v1(setting_name, all_lines) {
    // Check if setting name contains template placeholders
    const has_template = /<[^>]+>|{[^}]+}/.test(setting_name);
    if (has_template) {
        // Convert template pattern to regex
        // <name> or {name} -> match any word characters
        let pattern_str = setting_name
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escape special chars first
            .replace(/\\<[^>]+\\>/g, '[a-zA-Z0-9_]+') // <name> -> word chars
            .replace(/\\{[^}]+\\}/g, '[a-zA-Z0-9_]+'); // {name} -> word chars
        const uncommented_pattern = new RegExp(`^\\s*${pattern_str}\\s+\\S`, 'i');
        const commented_pattern = new RegExp(`^\\s*#\\s*${pattern_str}\\s+\\S`, 'i');
        // First pass: look for uncommented
        for (let line_num = 0; line_num < all_lines.length; line_num++) {
            const line = all_lines[line_num];
            if (uncommented_pattern.test(line)) {
                return { line_number: line_num, is_commented: false };
            }
        }
        // Second pass: look for commented
        for (let line_num = 0; line_num < all_lines.length; line_num++) {
            const line = all_lines[line_num];
            if (commented_pattern.test(line)) {
                return { line_number: line_num, is_commented: true };
            }
        }
    }
    else {
        // No template - do exact match
        const escaped_name = setting_name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const uncommented_pattern = new RegExp(`^\\s*${escaped_name}\\s+\\S`, 'i');
        const commented_pattern = new RegExp(`^\\s*#\\s*${escaped_name}\\s+\\S`, 'i');
        // First pass: look for uncommented
        for (let line_num = 0; line_num < all_lines.length; line_num++) {
            const line = all_lines[line_num];
            if (uncommented_pattern.test(line)) {
                return { line_number: line_num, is_commented: false };
            }
        }
        // Second pass: look for commented
        for (let line_num = 0; line_num < all_lines.length; line_num++) {
            const line = all_lines[line_num];
            if (commented_pattern.test(line)) {
                return { line_number: line_num, is_commented: true };
            }
        }
    }
    // Not found
    return { line_number: -1, is_commented: false };
}
/**
 * Finds the line number of a setting in v2 format
 * Prefers uncommented lines, falls back to commented lines
 * Returns first match if multiple found
 * Handles template patterns like <name>, <axis>, {name}, etc.
 */
function find_setting_line_v2(setting_name, all_lines) {
    // Check if setting name contains template placeholders
    const has_template = /<[^>]+>|{[^}]+}/.test(setting_name);
    if (has_template) {
        // Convert template pattern to regex
        // <name> or {name} -> match any word characters
        let pattern_str = setting_name
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escape special chars first
            .replace(/\\<[^>]+\\>/g, '[a-zA-Z0-9_]+') // <name> -> word chars
            .replace(/\\{[^}]+\\}/g, '[a-zA-Z0-9_]+'); // {name} -> word chars
        const uncommented_pattern = new RegExp(`^\\s*${pattern_str}\\s*=`, 'i');
        const commented_pattern = new RegExp(`^\\s*[;#]\\s*${pattern_str}\\s*=`, 'i');
        // First pass: look for uncommented
        for (let line_num = 0; line_num < all_lines.length; line_num++) {
            const line = all_lines[line_num];
            if (uncommented_pattern.test(line)) {
                return { line_number: line_num, is_commented: false };
            }
        }
        // Second pass: look for commented
        for (let line_num = 0; line_num < all_lines.length; line_num++) {
            const line = all_lines[line_num];
            if (commented_pattern.test(line)) {
                return { line_number: line_num, is_commented: true };
            }
        }
    }
    else {
        // No template - try exact match first
        const escaped_name = setting_name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const uncommented_pattern = new RegExp(`^\\s*${escaped_name}\\s*=`, 'i');
        const commented_pattern = new RegExp(`^\\s*[;#]\\s*${escaped_name}\\s*=`, 'i');
        // First pass: look for uncommented exact match
        for (let line_num = 0; line_num < all_lines.length; line_num++) {
            const line = all_lines[line_num];
            if (uncommented_pattern.test(line)) {
                return { line_number: line_num, is_commented: false };
            }
        }
        // Second pass: look for commented exact match
        for (let line_num = 0; line_num < all_lines.length; line_num++) {
            const line = all_lines[line_num];
            if (commented_pattern.test(line)) {
                return { line_number: line_num, is_commented: true };
            }
        }
        // Third pass: try with common instance prefixes if no dots in name
        // This handles cases like "use_ponm" -> "hotend.use_ponm"
        if (!setting_name.includes('.')) {
            const common_prefixes = [
                'hotend', 'hotend2', 'bed', 'chamber', // Temperature control
                'fan', 'fan2', 'psu', 'psu_off', 'aux', 'misc', 'bltouch', 'msc_but', // Switches
                'minx', 'miny', 'minz', 'maxx', 'maxy', 'maxz', // Endstops
                'probe', 'zprobe', // Probes
                'spindle', // Spindle control
                'but1', 'but2', 'but3', 'but4', // Custom buttons
                '4x4keypad', 'board', // Special modules
                'alpha', 'beta', 'gamma', 'delta', // Actuators
                'common' // Common settings
            ];
            for (const prefix of common_prefixes) {
                const prefixed_name = `${prefix}.${setting_name}`;
                const escaped_prefixed = prefixed_name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const pattern = new RegExp(`^\\s*${escaped_prefixed}\\s*=`, 'i');
                const commented_pattern_prefixed = new RegExp(`^\\s*[;#]\\s*${escaped_prefixed}\\s*=`, 'i');
                // Look for uncommented
                for (let line_num = 0; line_num < all_lines.length; line_num++) {
                    const line = all_lines[line_num];
                    if (pattern.test(line)) {
                        return { line_number: line_num, is_commented: false };
                    }
                }
                // Look for commented
                for (let line_num = 0; line_num < all_lines.length; line_num++) {
                    const line = all_lines[line_num];
                    if (commented_pattern_prefixed.test(line)) {
                        return { line_number: line_num, is_commented: true };
                    }
                }
            }
        }
    }
    // Not found
    return { line_number: -1, is_commented: false };
}
/**
 * Extracts module name from a dot-separated setting name
 * Example: "extruder.hotend.temperature" -> "extruder"
 */
function extract_module_from_setting_name(setting_name) {
    // Split by dot and take first part
    const parts = setting_name.split('.');
    // Return first part, or the whole name if no dots
    return parts[0];
}
/**
 * Finds all lines belonging to a module in v1 format
 * Returns array of line numbers that belong to the module
 */
function find_module_section_v1(all_lines, module_name, anchor_line) {
    const module_lines = [];
    // Escape regex special characters
    const escaped_module = module_name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Pattern: setting starts with module name followed by dot or is exactly the module name
    const module_pattern = new RegExp(`^\\s*#?\\s*${escaped_module}(?:\\.|\\s)`, 'i');
    // Find the start of the module section by going backwards from anchor
    let start_line = anchor_line;
    while (start_line > 0) {
        const prev_line = all_lines[start_line - 1];
        // Stop if we hit an empty line or comment-only line (section boundary)
        if (is_section_boundary_v1(prev_line)) {
            break;
        }
        // Stop if the line doesn't belong to this module
        if (!module_pattern.test(prev_line) && !is_comment_line_v1(prev_line)) {
            break;
        }
        start_line--;
    }
    // Find the end of the module section by going forwards from anchor
    let end_line = anchor_line;
    while (end_line < all_lines.length - 1) {
        const next_line = all_lines[end_line + 1];
        // Stop if we hit an empty line or comment-only line (section boundary)
        if (is_section_boundary_v1(next_line)) {
            break;
        }
        // Stop if the line doesn't belong to this module
        if (!module_pattern.test(next_line) && !is_comment_line_v1(next_line)) {
            break;
        }
        end_line++;
    }
    // Collect all line numbers in range
    for (let line_num = start_line; line_num <= end_line; line_num++) {
        module_lines.push(line_num);
    }
    return module_lines;
}
/**
 * Checks if a line is a section boundary in v1 (empty or comment-only)
 */
function is_section_boundary_v1(line) {
    // Trim the line
    const trimmed = line.trim();
    // Empty line is a boundary
    if (trimmed === '') {
        return true;
    }
    // Line with only a comment (starts with #) might be a header
    if (trimmed.startsWith('#') && !trimmed.includes('=') && trimmed.length < 80) {
        return true;
    }
    return false;
}
/**
 * Checks if a line is just a comment in v1
 */
function is_comment_line_v1(line) {
    // Trim the line
    const trimmed = line.trim();
    // Comment line starts with #
    return trimmed.startsWith('#');
}
/**
 * Finds the section that contains a given line number in v2 format
 * Returns start and end line numbers of the section, plus the section name
 */
function find_section_for_line_v2(all_lines, target_line) {
    // Pattern for section headers: [section_name]
    const section_pattern = /^\s*\[([^\]]+)\]\s*$/;
    // Find the most recent section header before target_line
    let start_line = -1;
    let section_name = '';
    for (let line_num = target_line; line_num >= 0; line_num--) {
        const line = all_lines[line_num];
        const match = section_pattern.exec(line);
        if (match) {
            start_line = line_num;
            section_name = match[1].trim();
            break;
        }
    }
    // If no section header found, return error
    if (start_line === -1) {
        return { start_line: -1, end_line: -1, section_name: '' };
    }
    // Find the next section header after start_line (or end of file)
    let end_line = all_lines.length - 1;
    for (let line_num = start_line + 1; line_num < all_lines.length; line_num++) {
        const line = all_lines[line_num];
        if (section_pattern.test(line)) {
            end_line = line_num - 1;
            break;
        }
    }
    return { start_line, end_line, section_name };
}
/**
 * Adds fade context lines (3 above and 3 below the section)
 * Returns array of ConfigLine objects with fade levels
 */
function add_fade_context(all_lines, section_lines, target_line, section_header_line) {
    const result = [];
    // Get min and max line numbers in section
    const min_section_line = Math.min(...section_lines);
    const max_section_line = Math.max(...section_lines);
    // Add 3 fade lines above (if they exist)
    for (let fade_level = 3; fade_level >= 1; fade_level--) {
        const line_num = min_section_line - fade_level;
        if (line_num >= 0) {
            const line_content = all_lines[line_num];
            result.push({
                line_number: line_num,
                content: line_content,
                html_content: apply_syntax_highlighting(line_content),
                is_target: false,
                is_section_header: false,
                fade_level: fade_level
            });
        }
    }
    // Add all section lines (full opacity)
    for (const line_num of section_lines) {
        const line_content = all_lines[line_num];
        result.push({
            line_number: line_num,
            content: line_content,
            html_content: apply_syntax_highlighting(line_content),
            is_target: line_num === target_line,
            is_section_header: line_num === section_header_line,
            fade_level: 0
        });
    }
    // Add 3 fade lines below (if they exist)
    for (let fade_level = 1; fade_level <= 3; fade_level++) {
        const line_num = max_section_line + fade_level;
        if (line_num < all_lines.length) {
            const line_content = all_lines[line_num];
            result.push({
                line_number: line_num,
                content: line_content,
                html_content: apply_syntax_highlighting(line_content),
                is_target: false,
                is_section_header: false,
                fade_level: fade_level
            });
        }
    }
    return result;
}
