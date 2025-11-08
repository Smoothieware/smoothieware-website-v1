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
 * Valid values for display_version setting
 * - nc: Not configured (user has never made a choice) - functionally same as "both" but shows initial prompt
 * - v1: Show only v1 settings
 * - v2: Show only v2 settings
 * - both: Show both v1 and v2 settings
 */
export type DisplayVersion = 'nc' | 'v1' | 'v2' | 'both';

/**
 * Configuration object structure
 */
export interface SiteConfiguration {
    display_version: DisplayVersion;
}

/**
 * Default configuration values
 */
const DEFAULT_CONFIG: SiteConfiguration = {
    display_version: 'nc'
};

/**
 * Loads the configuration from localStorage
 * Returns default config if none exists or if parsing fails
 */
export function load_configuration(): SiteConfiguration {

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

    } catch (error: unknown) {
        console.error('[config.ts] Error loading configuration from localStorage:', error);
        return { ...DEFAULT_CONFIG };
    }
}

/**
 * Saves the configuration to localStorage
 */
export function save_configuration(config: SiteConfiguration): void {

    try {
        // Convert to JSON
        const json_config = JSON.stringify(config);

        // Save to localStorage
        localStorage.setItem(CONFIG_STORAGE_KEY, json_config);

        console.log('[config.ts] Configuration saved:', config);

    } catch (error: unknown) {
        console.error('[config.ts] Error saving configuration to localStorage:', error);
    }
}

/**
 * Gets the current display_version setting
 */
export function get_display_version(): DisplayVersion {

    const config = load_configuration();
    return config.display_version;
}

/**
 * Sets the display_version setting and saves to localStorage
 */
export function set_display_version(version: DisplayVersion): void {

    const config = load_configuration();
    config.display_version = version;
    save_configuration(config);
}

/**
 * Checks if the user has configured their version preference
 * Returns true if display_version is 'nc' (not configured)
 */
export function is_version_not_configured(): boolean {

    return get_display_version() === 'nc';
}

/**
 * Checks if we should show v1 content based on current setting
 */
export function should_show_v1(): boolean {

    const version = get_display_version();
    return version === 'nc' || version === 'both' || version === 'v1';
}

/**
 * Checks if we should show v2 content based on current setting
 */
export function should_show_v2(): boolean {

    const version = get_display_version();
    return version === 'nc' || version === 'both' || version === 'v2';
}

/**
 * Checks if we should show both versions
 */
export function should_show_both(): boolean {

    const version = get_display_version();
    return version === 'nc' || version === 'both';
}
