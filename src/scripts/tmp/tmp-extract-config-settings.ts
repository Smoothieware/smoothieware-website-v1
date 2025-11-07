#!/usr/bin/env bun

/**
 * Enhanced Smoothieware v1 Configuration Extraction
 *
 * Extracts ALL config settings by:
 * 1. Finding #define statements that create checksums (e.g., #define acceleration_checksum CHECKSUM("acceleration"))
 * 2. Finding where those checksums are used in config->value() calls
 * 3. Determining context (global vs module instance) from code structure
 *
 * This approach correctly handles Smoothieware's compile-time checksum system
 */

import * as fs from 'fs';
import * as path from 'path';

const SOURCE_BASE = '/home/arthur/dev/smoothieware/smoothieware-website-v1/data/github/Smoothieware-v1/src';

interface ChecksumDef {
    checksum_name: string;      // e.g., "acceleration_checksum"
    setting_name: string;        // e.g., "acceleration"
    file: string;
    line_number: number;
}

interface ConfigRead {
    checksum_used: string;       // e.g., "acceleration_checksum"
    setting_name: string;        // e.g., "acceleration"
    file: string;
    line_number: number;
    code_line: string;
    default_value: string;
    value_type: string;          // as_number(), as_bool(), as_string()
    context: string;             // description of context
    is_global: boolean;          // true if global setting, false if module instance
    module_name?: string;        // if module instance, which module type
}

interface SettingEntry {
    name: string;
    uses: ConfigRead[];
}

// Find all .cpp files
function find_all_cpp_files(dir: string): string[] {
    const files: string[] = [];
    function walk(current_dir: string) {
        const entries = fs.readdirSync(current_dir, { withFileTypes: true });
        for (const entry of entries) {
            const full_path = path.join(current_dir, entry.name);
            if (entry.isDirectory()) {
                walk(full_path);
            } else if (entry.isFile() && entry.name.endsWith('.cpp')) {
                files.push(full_path);
            }
        }
    }
    walk(dir);
    return files;
}

// Extract checksum definitions from a file
function extract_checksum_defs(file_path: string): ChecksumDef[] {
    const defs: ChecksumDef[] = [];
    const content = fs.readFileSync(file_path, 'utf-8');
    const lines = content.split('\n');

    // Pattern: #define setting_name_checksum CHECKSUM("setting_name")
    // Or: #define setting_name_checksum CHEKCSUM("setting_name")  (typo in source)
    const pattern = /^#define\s+(\w+_checksum)\s+CHE[CK]KSUM\("([^"]+)"\)/;

    for (let i = 0; i < lines.length; i++) {
        const match = lines[i].match(pattern);
        if (match) {
            defs.push({
                checksum_name: match[1],
                setting_name: match[2],
                file: file_path.replace(SOURCE_BASE + '/', ''),
                line_number: i + 1
            });
        }
    }

    return defs;
}

// Extract config reads from a file
function extract_config_reads(file_path: string, checksum_map: Map<string, string>): ConfigRead[] {
    const reads: ConfigRead[] = [];
    const content = fs.readFileSync(file_path, 'utf-8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Pattern: config->value(something_checksum)
        if (/(?:THEKERNEL->config|config|this)->value\s*\(/.test(line)) {
            // Extract the checksum name used
            const checksum_match = line.match(/->value\s*\(\s*(\w+_checksum)/);
            if (checksum_match) {
                const checksum_used = checksum_match[1];
                const setting_name = checksum_map.get(checksum_used) || 'unknown';

                // Extract default value
                let default_value = 'none';
                const default_match = line.match(/->by_default\s*\(\s*([^)]+)\s*\)/);
                if (default_match) {
                    default_value = default_match[1];
                }

                // Extract value type
                let value_type = 'unknown';
                if (line.includes('->as_number()')) {
                    value_type = 'number';
                } else if (line.includes('->as_bool()')) {
                    value_type = 'bool';
                } else if (line.includes('->as_string()')) {
                    value_type = 'string';
                }

                // Determine context
                const context_info = determine_context(lines, i, file_path);

                reads.push({
                    checksum_used,
                    setting_name,
                    file: file_path.replace(SOURCE_BASE + '/', ''),
                    line_number: i + 1,
                    code_line: line.trim(),
                    default_value,
                    value_type,
                    context: context_info.description,
                    is_global: context_info.is_global,
                    module_name: context_info.module_name
                });
            }
        }
    }

    return reads;
}

// Determine if this is a global setting or module instance setting
function determine_context(lines: string[], line_index: number, file_path: string): {
    description: string;
    is_global: boolean;
    module_name?: string;
} {
    // Look backwards for context
    const search_range = 100;
    const start = Math.max(0, line_index - search_range);
    const end = Math.min(lines.length, line_index + 20);
    const context_lines = lines.slice(start, end).join('\n');

    // Check for module enumeration (definitely module instance)
    if (context_lines.includes('get_module_list')) {
        // Try to find which module type
        const module_match = context_lines.match(/get_module_list[^,]*,\s*(\w+_checksum)/);
        if (module_match) {
            return {
                description: `Module instance enumeration (${module_match[1]})`,
                is_global: false,
                module_name: module_match[1].replace('_checksum', '')
            };
        }
        return {
            description: 'Module instance enumeration',
            is_global: false
        };
    }

    // Check for module loop
    if (/for\s*\([^)]*modules/.test(context_lines)) {
        return {
            description: 'Module loop iteration',
            is_global: false
        };
    }

    // Identify specific module types from file path
    const path_patterns: Record<string, { name: string, is_global: boolean }> = {
        '/robot/Robot.cpp': { name: 'robot', is_global: true },
        '/robot/Conveyor.cpp': { name: 'robot', is_global: true },
        '/robot/Planner.cpp': { name: 'robot', is_global: true },
        '/extruder/Extruder.cpp': { name: 'extruder', is_global: false },
        '/temperaturecontrol/TemperatureControl.cpp': { name: 'temperature_control', is_global: false },
        '/switch/Switch.cpp': { name: 'switch', is_global: false },
        '/laser/Laser.cpp': { name: 'laser', is_global: false },
        '/spindle/': { name: 'spindle', is_global: false },
        '/zprobe/ZProbe.cpp': { name: 'zprobe', is_global: false },
        '/endstops/Endstops.cpp': { name: 'endstops', is_global: true },
        '/panel/Panel.cpp': { name: 'panel', is_global: false },
        '/currentcontrol/CurrentControl.cpp': { name: 'currentcontrol', is_global: false },
        '/player/Player.cpp': { name: 'player', is_global: true },
        '/network/Network.cpp': { name: 'network', is_global: true },
    };

    for (const [pattern, info] of Object.entries(path_patterns)) {
        if (file_path.includes(pattern)) {
            return {
                description: `${info.name} module`,
                is_global: info.is_global,
                module_name: info.name
            };
        }
    }

    // Default to global for kernel/libs
    if (file_path.includes('/libs/') || file_path.includes('Kernel.cpp')) {
        return {
            description: 'Kernel/core',
            is_global: true
        };
    }

    return {
        description: 'Unknown context',
        is_global: true
    };
}

// Main analysis
function analyze_all() {
    console.log('=== Smoothieware v1 Configuration Analysis ===\n');

    // Find all files
    const cpp_files = find_all_cpp_files(SOURCE_BASE);
    console.log(`Found ${cpp_files.length} .cpp files\n`);

    // Step 1: Extract all checksum definitions
    console.log('Step 1: Extracting checksum definitions...');
    const checksum_map = new Map<string, string>();
    let total_defs = 0;

    for (const file of cpp_files) {
        const defs = extract_checksum_defs(file);
        total_defs += defs.length;
        for (const def of defs) {
            checksum_map.set(def.checksum_name, def.setting_name);
        }
    }

    console.log(`Found ${total_defs} checksum definitions`);
    console.log(`Unique settings: ${checksum_map.size}\n`);

    // Step 2: Extract all config reads
    console.log('Step 2: Extracting config reads...');
    const all_reads: ConfigRead[] = [];

    for (let i = 0; i < cpp_files.length; i++) {
        const file = cpp_files[i];
        const relative = file.replace(SOURCE_BASE + '/', '');
        process.stdout.write(`[${i + 1}/${cpp_files.length}] ${relative}\r`);

        const reads = extract_config_reads(file, checksum_map);
        all_reads.push(...reads);
    }

    console.log(`\nFound ${all_reads.length} config reads\n`);

    // Step 3: Group by setting name
    const settings_db = new Map<string, SettingEntry>();

    for (const read of all_reads) {
        if (!settings_db.has(read.setting_name)) {
            settings_db.set(read.setting_name, {
                name: read.setting_name,
                uses: []
            });
        }
        settings_db.get(read.setting_name)!.uses.push(read);
    }

    // Write results
    const output = {
        analysis_date: new Date().toISOString(),
        total_files: cpp_files.length,
        total_checksum_defs: total_defs,
        unique_checksums: checksum_map.size,
        total_config_reads: all_reads.length,
        unique_settings: settings_db.size,
        checksum_definitions: Array.from(checksum_map.entries()).map(([k, v]) => ({ checksum: k, setting: v })),
        all_config_reads: all_reads,
        settings_database: Array.from(settings_db.values()).sort((a, b) => a.name.localeCompare(b.name))
    };

    const output_file = '/tmp/smoothieware-v1-config-complete.json';
    fs.writeFileSync(output_file, JSON.stringify(output, null, 2));
    console.log(`Detailed results: ${output_file}\n`);

    // Summary report
    console.log('=== SUMMARY ===');
    console.log(`Unique settings: ${settings_db.size}`);
    console.log(`Total uses: ${all_reads.length}`);

    const global_settings = all_reads.filter(r => r.is_global);
    const module_settings = all_reads.filter(r => !r.is_global);
    console.log(`Global settings: ${global_settings.length}`);
    console.log(`Module instance settings: ${module_settings.length}`);

    // Settings with multiple contexts
    const multi_context = Array.from(settings_db.values())
        .filter(s => {
            const global_uses = s.uses.filter(u => u.is_global);
            const module_uses = s.uses.filter(u => !u.is_global);
            return global_uses.length > 0 && module_uses.length > 0;
        });

    console.log(`\nSettings used in BOTH global and module contexts: ${multi_context.length}`);
    if (multi_context.length > 0) {
        console.log('\nThese settings need special documentation:');
        for (const setting of multi_context) {
            console.log(`  - ${setting.name}`);
            const global_files = [...new Set(setting.uses.filter(u => u.is_global).map(u => u.file))];
            const module_files = [...new Set(setting.uses.filter(u => !u.is_global).map(u => u.file))];
            console.log(`    Global: ${global_files.join(', ')}`);
            console.log(`    Module: ${module_files.join(', ')}`);
        }
    }

    return output;
}

// Run analysis
const results = analyze_all();
