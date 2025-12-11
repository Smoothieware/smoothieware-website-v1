/**
 * config.ts
 *
 * Global configuration management library for the Smoothieware documentation website
 * Handles localStorage-based configuration persistence and management
 *
 * Features:
 * - Version display preference (v1, v2, both, or nc = not configured)
 * - Type-safe configuration access
 * - Automatic localStorage synchronization
 * - Default value handling
 */
// LocalStorage key for all configuration
const CONFIG_STORAGE_KEY = 'configuration';
/**
 * Default configuration values
 */
const DEFAULT_CONFIG = {
    display_version: 'nc'
};
/**
 * Loads the configuration from localStorage
 * Returns default config if none exists or if parsing fails
 */
export function load_configuration() {
    try {
        // Get raw JSON from localStorage
        const raw_config = localStorage.getItem(CONFIG_STORAGE_KEY);
        // Guard against no config stored
        if (!raw_config) {
            return { ...DEFAULT_CONFIG };
        }
        // Parse JSON
        const parsed_config = JSON.parse(raw_config);
        // Merge with defaults to ensure all fields exist
        return {
            ...DEFAULT_CONFIG,
            ...parsed_config
        };
    }
    catch (error) {
        console.error('[config.ts] Error loading configuration from localStorage:', error);
        return { ...DEFAULT_CONFIG };
    }
}
/**
 * Saves the configuration to localStorage
 */
export function save_configuration(config) {
    try {
        // Convert to JSON
        const json_config = JSON.stringify(config);
        // Save to localStorage
        localStorage.setItem(CONFIG_STORAGE_KEY, json_config);
    }
    catch (error) {
        console.error('[config.ts] Error saving configuration to localStorage:', error);
    }
}
/**
 * Gets the current display_version setting
 */
export function get_display_version() {
    const config = load_configuration();
    return config.display_version;
}
/**
 * Sets the display_version setting and saves to localStorage
 */
export function set_display_version(version) {
    const config = load_configuration();
    config.display_version = version;
    save_configuration(config);
}
/**
 * Checks if the user has configured their version preference
 * Returns true if display_version is 'nc' (not configured)
 */
export function is_version_not_configured() {
    return get_display_version() === 'nc';
}
/**
 * Checks if we should show v1 content based on current setting
 */
export function should_show_v1() {
    const version = get_display_version();
    return version === 'nc' || version === 'both' || version === 'v1';
}
/**
 * Checks if we should show v2 content based on current setting
 */
export function should_show_v2() {
    const version = get_display_version();
    return version === 'nc' || version === 'both' || version === 'v2';
}
/**
 * Checks if we should show both versions
 */
export function should_show_both() {
    const version = get_display_version();
    return version === 'nc' || version === 'both';
}
