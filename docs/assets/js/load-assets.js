/**
 * load-assets.ts
 *
 * Loads various documentation assets at DOM load time:
 * - Config files (v1 and v2 example configuration files from firmware repos) - always loaded
 * - Settings data (v1 and v2 YAML files) - loaded only when page contains <setting> tags
 *
 * Uses browser caching to avoid reloading on every page visit
 * Stores all data in window object for global access
 */
// Import YAML parser
import yaml from 'js-yaml';
// Import jQuery as a module
import $ from 'jquery';
// Cache keys for localStorage
const CACHE_KEY_V1 = 'smoothieware_v1_settings_cache';
const CACHE_KEY_V2 = 'smoothieware_v2_settings_cache';
const CACHE_KEY_V1_CONFIG = 'smoothieware_v1_config_cache';
const CACHE_KEY_V2_CONFIG = 'smoothieware_v2_config_cache';
const CACHE_TIMESTAMP_KEY = 'smoothieware_settings_cache_timestamp';
const CACHE_TIMESTAMP_CONFIG_KEY = 'smoothieware_config_cache_timestamp';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours
// Wait for DOM to be fully loaded
$(() => {
    // Always load config files (they're small and may be needed)
    load_config_files();
    // Always load settings data (will be cached for future page visits)
    load_settings_data();
});
/**
 * Loads settings data from YAML files or cache
 * Uses browser cache to avoid reloading unnecessarily
 */
async function load_settings_data() {
    // Check if already loaded in this page session
    if (window.settings_data_loaded) {
        return;
    }
    // Try to load from cache first
    const cache_valid = check_cache_validity();
    if (cache_valid) {
        // Load from localStorage
        const v1_cached = localStorage.getItem(CACHE_KEY_V1);
        const v2_cached = localStorage.getItem(CACHE_KEY_V2);
        if (v1_cached && v2_cached) {
            try {
                // Parse cached data
                const v1_data = JSON.parse(v1_cached);
                const v2_data = JSON.parse(v2_cached);
                // Reconstruct Map objects (JSON doesn't preserve Maps)
                window.v1_settings = reconstruct_settings_data(v1_data);
                window.v2_settings = reconstruct_settings_data(v2_data);
                window.settings_data_loaded = true;
                return;
            }
            catch (error) {
                console.warn('[load-assets.ts] Failed to parse cached data, will fetch fresh:', error);
                // Fall through to fetch fresh data
            }
        }
    }
    // Cache miss or invalid - fetch fresh data
    try {
        // Fetch both YAML files in parallel
        const [v1_response, v2_response] = await Promise.all([
            fetch('/assets/data/smoothieware-v1-config.yaml'),
            fetch('/assets/data/smoothieware-v2-config.yaml')
        ]);
        // Check responses
        if (!v1_response.ok || !v2_response.ok) {
            throw new Error(`HTTP error! v1: ${v1_response.status}, v2: ${v2_response.status}`);
        }
        // Get YAML text
        const [v1_yaml_text, v2_yaml_text] = await Promise.all([
            v1_response.text(),
            v2_response.text()
        ]);
        // Parse YAML
        const v1_data = yaml.load(v1_yaml_text);
        const v2_data = yaml.load(v2_yaml_text);
        // Process and store data
        window.v1_settings = process_settings_data(v1_data);
        window.v2_settings = process_settings_data(v2_data);
        window.settings_data_loaded = true;
        // Cache in localStorage for next time
        cache_settings_data(v1_data, v2_data);
    }
    catch (error) {
        console.error('[load-assets.ts] Failed to load settings data:', error);
        window.settings_data_loaded = false;
    }
}
/**
 * Checks if cached data is still valid
 * Returns true if cache exists and is not expired
 */
function check_cache_validity() {
    // Get cache timestamp
    const timestamp_str = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    // If no timestamp, cache is invalid
    if (!timestamp_str) {
        return false;
    }
    // Parse timestamp
    const timestamp = parseInt(timestamp_str, 10);
    // Check if timestamp is valid number
    if (isNaN(timestamp)) {
        return false;
    }
    // Check if cache has expired
    const now = Date.now();
    const age = now - timestamp;
    // Return true if cache is still fresh
    return age < CACHE_DURATION_MS;
}
/**
 * Processes raw settings data and creates lookup maps
 * Returns structured settings data with Maps for fast lookup
 */
function process_settings_data(raw_data) {
    // Create Map for fast setting lookup by name
    const settings_by_name = new Map();
    // Create Map for lookup by corresponding_v1/v2 values
    const settings_by_corresponding = new Map();
    // Determine which field to use for corresponding lookup based on version
    const corresponding_field = raw_data.metadata.version === 'v1' ? 'corresponding_v1' : 'corresponding_v2';
    // Build the lookup maps
    for (const module of raw_data.modules) {
        for (const setting of module.settings) {
            // Index by simple name
            settings_by_name.set(setting.name, setting);
            // Index by corresponding names (which may be comma-separated)
            if (setting[corresponding_field]) {
                // Parse comma-separated list of names
                const names = setting[corresponding_field]
                    .split(',')
                    .map((name) => name.trim())
                    .filter((name) => {
                    // Filter out non-specific entries
                    return name &&
                        !name.includes('etc.') &&
                        !name.includes('(') &&
                        name.length > 0;
                });
                // Add each name to the lookup map
                for (const name of names) {
                    // Don't overwrite if already exists (first match wins)
                    if (!settings_by_corresponding.has(name)) {
                        settings_by_corresponding.set(name, setting);
                    }
                }
            }
        }
    }
    // Return processed data
    return {
        metadata: raw_data.metadata,
        modules: raw_data.modules,
        settings_by_name: settings_by_name,
        settings_by_corresponding: settings_by_corresponding
    };
}
/**
 * Reconstructs settings data from cached JSON
 * Rebuilds the Map objects that were lost in JSON serialization
 */
function reconstruct_settings_data(cached_data) {
    // Rebuild the settings_by_name Map
    const settings_by_name = new Map();
    // Rebuild the settings_by_corresponding Map
    const settings_by_corresponding = new Map();
    // Determine which field to use for corresponding lookup based on version
    const corresponding_field = cached_data.metadata.version === 'v1' ? 'corresponding_v1' : 'corresponding_v2';
    // Build both maps
    for (const module of cached_data.modules) {
        for (const setting of module.settings) {
            // Index by simple name
            settings_by_name.set(setting.name, setting);
            // Index by corresponding names (which may be comma-separated)
            if (setting[corresponding_field]) {
                // Parse comma-separated list of names
                const names = setting[corresponding_field]
                    .split(',')
                    .map((name) => name.trim())
                    .filter((name) => {
                    // Filter out non-specific entries
                    return name &&
                        !name.includes('etc.') &&
                        !name.includes('(') &&
                        name.length > 0;
                });
                // Add each name to the lookup map
                for (const name of names) {
                    // Don't overwrite if already exists (first match wins)
                    if (!settings_by_corresponding.has(name)) {
                        settings_by_corresponding.set(name, setting);
                    }
                }
            }
        }
    }
    // Return reconstructed data
    return {
        metadata: cached_data.metadata,
        modules: cached_data.modules,
        settings_by_name: settings_by_name,
        settings_by_corresponding: settings_by_corresponding
    };
}
/**
 * Caches settings data in localStorage
 * Stores both data and timestamp for expiry checking
 */
function cache_settings_data(v1_data, v2_data) {
    try {
        // Store data (Map will be converted to plain object by JSON.stringify)
        localStorage.setItem(CACHE_KEY_V1, JSON.stringify(v1_data));
        localStorage.setItem(CACHE_KEY_V2, JSON.stringify(v2_data));
        // Store timestamp
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    }
    catch (error) {
        console.warn('[load-assets.ts] Failed to cache settings data:', error);
        // Continue anyway - caching is not critical
    }
}
/**
 * Loads config files from assets or cache
 * Config files are the example configuration files from the firmware repos
 */
async function load_config_files() {
    // Check if already loaded in this page session
    if (window.config_files_loaded) {
        return;
    }
    // Try to load from cache first
    const cache_valid = check_config_cache_validity();
    if (cache_valid) {
        // Load from localStorage
        const v1_cached = localStorage.getItem(CACHE_KEY_V1_CONFIG);
        const v2_cached = localStorage.getItem(CACHE_KEY_V2_CONFIG);
        if (v1_cached && v2_cached) {
            try {
                // Store cached data directly (it's already text)
                window.v1_config_file = v1_cached;
                window.v2_config_file = v2_cached;
                window.config_files_loaded = true;
                return;
            }
            catch (error) {
                console.warn('[load-assets.ts] Failed to parse cached config files, will fetch fresh:', error);
                // Fall through to fetch fresh data
            }
        }
    }
    // Cache miss or invalid - fetch fresh data
    try {
        // Fetch both config files in parallel
        const [v1_response, v2_response] = await Promise.all([
            fetch('/assets/config/v1/config'),
            fetch('/assets/config/v2/config-3d.ini')
        ]);
        // Check responses
        if (!v1_response.ok || !v2_response.ok) {
            throw new Error(`HTTP error! v1: ${v1_response.status}, v2: ${v2_response.status}`);
        }
        // Get text content
        const [v1_config_text, v2_config_text] = await Promise.all([
            v1_response.text(),
            v2_response.text()
        ]);
        // Store in window object
        window.v1_config_file = v1_config_text;
        window.v2_config_file = v2_config_text;
        window.config_files_loaded = true;
        // Cache in localStorage for next time
        cache_config_files(v1_config_text, v2_config_text);
    }
    catch (error) {
        console.error('[load-assets.ts] Failed to load config files:', error);
        window.config_files_loaded = false;
    }
}
/**
 * Checks if cached config files are still valid
 * Returns true if cache exists and is not expired
 */
function check_config_cache_validity() {
    // Get cache timestamp
    const timestamp_str = localStorage.getItem(CACHE_TIMESTAMP_CONFIG_KEY);
    // If no timestamp, cache is invalid
    if (!timestamp_str) {
        return false;
    }
    // Parse timestamp
    const timestamp = parseInt(timestamp_str, 10);
    // Check if timestamp is valid number
    if (isNaN(timestamp)) {
        return false;
    }
    // Check if cache has expired
    const now = Date.now();
    const age = now - timestamp;
    // Return true if cache is still fresh
    return age < CACHE_DURATION_MS;
}
/**
 * Caches config files in localStorage
 * Stores both files and timestamp for expiry checking
 */
function cache_config_files(v1_config, v2_config) {
    try {
        // Store config file text directly
        localStorage.setItem(CACHE_KEY_V1_CONFIG, v1_config);
        localStorage.setItem(CACHE_KEY_V2_CONFIG, v2_config);
        // Store timestamp
        localStorage.setItem(CACHE_TIMESTAMP_CONFIG_KEY, Date.now().toString());
    }
    catch (error) {
        console.warn('[load-assets.ts] Failed to cache config files:', error);
        // Continue anyway - caching is not critical
    }
}
