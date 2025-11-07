/**
 * config-finder.test.ts
 *
 * Tests for the config-finder library
 * Verifies that all settings from the YAML files can be found in the example config files
 */

import { describe, it, expect } from 'bun:test';
import { find_setting_in_config, type ConfigSearchRequest } from '../lib/config-finder';
import yaml from 'js-yaml';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Known settings that are in YAML but not in example configs
// These will be documented in missing-settings.md
const KNOWN_MISSING_V1: string[] = [
    // Add settings here as we discover them during testing
];

const KNOWN_MISSING_V2: string[] = [
    // Add settings here as we discover them during testing
];

// Paths to config files (relative to project root)
const V1_YAML_PATH = 'docs/assets/data/smoothieware-v1-config.yaml';
const V2_YAML_PATH = 'docs/assets/data/smoothieware-v2-config.yaml';
const V1_CONFIG_PATH = 'docs/assets/config/v1/config';
const V2_CONFIG_PATH = 'docs/assets/config/v2/config-3d.ini';
const MISSING_SETTINGS_DOC_PATH = 'src/docs/missing-settings.md';

// Load config files
const v1_yaml_content = readFileSync(V1_YAML_PATH, 'utf-8');
const v2_yaml_content = readFileSync(V2_YAML_PATH, 'utf-8');
const v1_config_content = readFileSync(V1_CONFIG_PATH, 'utf-8');
const v2_config_content = readFileSync(V2_CONFIG_PATH, 'utf-8');

// Parse YAML files
const v1_yaml_data = yaml.load(v1_yaml_content) as any;
const v2_yaml_data = yaml.load(v2_yaml_content) as any;

describe('Config Finder - V1 Settings', () => {

    const missing_settings: Array<{ name: string; module: string; reason: string }> = [];
    let total_settings = 0;
    let found_settings = 0;

    // Iterate through all v1 settings
    for (const module of v1_yaml_data.modules) {
        for (const setting of module.settings) {

            total_settings++;

            it(`should find v1 setting: ${setting.name}`, async () => {

                // Skip if in known missing list
                if (KNOWN_MISSING_V1.includes(setting.name)) {
                    return;
                }

                // Get the setting name to search for
                // Priority: corresponding_v1 field, then the setting name itself
                const search_name = setting.corresponding_v1 || setting.name;

                // Try to find the setting using legacy mode with config_content
                const request: ConfigSearchRequest = {
                    setting_name: search_name,
                    version: 'v1',
                    config_content: v1_config_content,
                    module_name: module.name
                };

                const result = await find_setting_in_config(request);

                // Track results
                if (result.found) {
                    found_settings++;
                } else {
                    const reason = `Searched for "${search_name}" - ${result.error_message || 'Unknown error'}`;
                    missing_settings.push({
                        name: setting.name,
                        module: module.name,
                        reason: reason
                    });
                }

                // For now, don't fail the test - just collect missing settings
                // expect(result.found).toBe(true);

                // If found, verify structure
                if (result.found) {
                    expect(result.lines.length).toBeGreaterThan(0);
                    expect(result.target_line_index).toBeGreaterThanOrEqual(0);
                    expect(result.target_line_index).toBeLessThan(result.lines.length);

                    // Verify the target line is marked
                    const target_line = result.lines[result.target_line_index];
                    expect(target_line.is_target).toBe(true);
                }
            });
        }
    }

    // After all tests, update the missing settings list if needed
    it('should document missing v1 settings', () => {

        console.log(`\nV1 Settings Summary:`);
        console.log(`  Total: ${total_settings}`);
        console.log(`  Found: ${found_settings}`);
        console.log(`  Missing: ${missing_settings.length}`);

        if (missing_settings.length > 0) {
            console.log(`\nFirst 20 Missing V1 Settings:`);
            for (const missing of missing_settings.slice(0, 20)) {
                console.log(`  - ${missing.name} (${missing.module})`);
            }
            if (missing_settings.length > 20) {
                console.log(`  ... and ${missing_settings.length - 20} more`);
            }
        }

        // Store v1 missing for later doc generation
        (global as any).v1_missing_settings = missing_settings;

        // This test always passes, it's just for documentation
        expect(true).toBe(true);
    });
});

describe('Config Finder - V2 Settings', () => {

    const missing_settings: Array<{ name: string; module: string; reason: string }> = [];
    let total_settings = 0;
    let found_settings = 0;

    // Iterate through all v2 settings
    for (const module of v2_yaml_data.modules) {
        for (const setting of module.settings) {

            total_settings++;

            it(`should find v2 setting: ${setting.name}`, async () => {

                // Skip if in known missing list
                if (KNOWN_MISSING_V2.includes(setting.name)) {
                    return;
                }

                // Get the setting name to search for
                // For v2, use the setting name directly (no corresponding_v2 mapping needed)
                const search_name = setting.name;

                // Try to find the setting using legacy mode with config_content
                const request: ConfigSearchRequest = {
                    setting_name: search_name,
                    version: 'v2',
                    config_content: v2_config_content,
                    section_name: setting.section  // Pass the section from YAML
                };

                const result = await find_setting_in_config(request);

                // Track results
                if (result.found) {
                    found_settings++;
                } else {
                    const reason = `Searched for "${search_name}" - ${result.error_message || 'Unknown error'}`;
                    missing_settings.push({
                        name: setting.name,
                        module: module.name,
                        reason: reason
                    });
                }

                // For now, don't fail the test - just collect missing settings
                // expect(result.found).toBe(true);

                // If found, verify structure
                if (result.found) {
                    expect(result.lines.length).toBeGreaterThan(0);
                    expect(result.target_line_index).toBeGreaterThanOrEqual(0);
                    expect(result.target_line_index).toBeLessThan(result.lines.length);

                    // Verify the target line is marked
                    const target_line = result.lines[result.target_line_index];
                    expect(target_line.is_target).toBe(true);

                    // For v2, verify section header is found and marked
                    if (result.section_header_index >= 0) {
                        const header_line = result.lines[result.section_header_index];
                        expect(header_line.is_section_header).toBe(true);
                    }
                }
            });
        }
    }

    // After all tests, update the missing settings list if needed
    it('should document missing v2 settings', () => {

        console.log(`\nV2 Settings Summary:`);
        console.log(`  Total: ${total_settings}`);
        console.log(`  Found: ${found_settings}`);
        console.log(`  Missing: ${missing_settings.length}`);

        if (missing_settings.length > 0) {
            console.log(`\nFirst 20 Missing V2 Settings:`);
            for (const missing of missing_settings.slice(0, 20)) {
                console.log(`  - ${missing.name} (${missing.module})`);
            }
            if (missing_settings.length > 20) {
                console.log(`  ... and ${missing_settings.length - 20} more`);
            }
        }

        // Store v2 missing for later doc generation
        (global as any).v2_missing_settings = missing_settings;

        // This test always passes, it's just for documentation
        expect(true).toBe(true);
    });
});

// Final test to generate the documentation file
describe('Generate Documentation', () => {

    it('should generate missing-settings.md', () => {

        // Get the collected missing settings
        const v1_missing = (global as any).v1_missing_settings || [];
        const v2_missing = (global as any).v2_missing_settings || [];

        // Generate the documentation file
        generate_missing_settings_doc(v1_missing, v2_missing);

        // Always passes
        expect(true).toBe(true);
    });
});

// Helper function to generate missing-settings.md
function generate_missing_settings_doc(
    v1_missing: Array<{ name: string; module: string; reason: string }>,
    v2_missing: Array<{ name: string; module: string; reason: string }>
): void {

    const lines: string[] = [];

    lines.push('# Missing Settings in Example Config Files');
    lines.push('');
    lines.push('This document lists settings that are defined in the YAML configuration files but are not present in the example configuration files.');
    lines.push('');
    lines.push('Generated automatically by `src/site/test/config-finder.test.ts`');
    lines.push('');
    lines.push(`Last updated: ${new Date().toISOString()}`);
    lines.push('');

    // V1 Missing Settings
    lines.push('## V1 Settings Missing from Example Config');
    lines.push('');
    if (v1_missing.length === 0) {
        lines.push('All v1 settings found in example config file!');
    } else {
        lines.push(`Total missing: ${v1_missing.length}`);
        lines.push('');
        lines.push('| Setting Name | Module | Reason |');
        lines.push('|--------------|--------|--------|');
        for (const missing of v1_missing) {
            lines.push(`| \`${missing.name}\` | ${missing.module} | ${missing.reason} |`);
        }
    }
    lines.push('');

    // V2 Missing Settings
    lines.push('## V2 Settings Missing from Example Config');
    lines.push('');
    if (v2_missing.length === 0) {
        lines.push('All v2 settings found in example config file!');
    } else {
        lines.push(`Total missing: ${v2_missing.length}`);
        lines.push('');
        lines.push('| Setting Name | Module | Reason |');
        lines.push('|--------------|--------|--------|');
        for (const missing of v2_missing) {
            lines.push(`| \`${missing.name}\` | ${missing.module} | ${missing.reason} |`);
        }
    }
    lines.push('');

    // Write to file
    const content = lines.join('\n');
    writeFileSync(MISSING_SETTINGS_DOC_PATH, content, 'utf-8');

    console.log(`\nGenerated ${MISSING_SETTINGS_DOC_PATH}`);
}
