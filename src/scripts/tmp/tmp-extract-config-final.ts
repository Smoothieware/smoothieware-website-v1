#!/usr/bin/env bun

/**
 * Final Comprehensive Smoothieware v1 Configuration Extraction
 *
 * Correctly handles multi-checksum paths like:
 * config->value(network_checksum, network_enable_checksum)
 * Which translates to path: network.enable
 */

import * as fs from 'fs';
import * as path from 'path';

const SOURCE_BASE = '/home/arthur/dev/smoothieware/smoothieware-website-v1/data/github/Smoothieware-v1/src';

interface ConfigRead {
    setting_path: string;        // Full path like "network.enable" or "acceleration"
    file: string;
    line_number: number;
    code_line: string;
    default_value: string;
    value_type: string;
    context_description: string;
    is_global: boolean;
    module_name?: string;
    checksums_used: string[];    // All checksums in the path
}

interface SettingDoc {
    path: string;
    type: string;
    default_value: string;
    defined_in: Array<{
        file: string;
        line: number;
        context: string;
        is_global: boolean;
    }>;
}

// Build checksum to setting name map
function build_checksum_map(): Map<string, string> {
    const map = new Map<string, string>();
    const files = find_all_cpp_files(SOURCE_BASE);

    // Pattern: #define name_checksum CHECKSUM("name")
    const pattern = /^#define\s+(\w+)_checksum\s+CHE[CK]KSUM\("([^"]+)"\)/;

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        const lines = content.split('\n');

        for (const line of lines) {
            const match = line.match(pattern);
            if (match) {
                const full_name = match[1]; // e.g., "network_enable"
                const setting = match[2];   // e.g., "enable"
                map.set(full_name + '_checksum', setting);
            }
        }
    }

    console.log(`Built checksum map with ${map.size} entries`);
    return map;
}

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

// Extract config reads with proper path resolution
function extract_config_reads(file_path: string, checksum_map: Map<string, string>): ConfigRead[] {
    const reads: ConfigRead[] = [];
    const content = fs.readFileSync(file_path, 'utf-8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (/(?:THEKERNEL->config|config|this)->value\s*\(/.test(line)) {
            // Extract the full value() call which may span multiple lines
            let statement = line;
            let j = i;
            while (j < lines.length - 1 && !statement.includes(');')) {
                j++;
                statement += ' ' + lines[j].trim();
            }

            // Extract all checksums in the value() call
            const value_match = statement.match(/->value\s*\(\s*([^)]+)\s*\)/);
            if (!value_match) continue;

            const params = value_match[1];
            const checksum_params = params.split(',').map(p => p.trim());

            // Build the setting path from checksums
            const path_parts: string[] = [];
            const checksums_used: string[] = [];

            for (const param of checksum_params) {
                if (checksum_map.has(param)) {
                    path_parts.push(checksum_map.get(param)!);
                    checksums_used.push(param);
                } else if (param.includes('motor_checksums')) {
                    // Handle dynamic motor checksums
                    path_parts.push('(dynamic)');
                    checksums_used.push(param);
                }
            }

            if (path_parts.length === 0) continue;

            const setting_path = path_parts.join('.');

            // Extract default value
            let default_value = 'none';
            const default_match = statement.match(/->by_default\s*\(\s*([^)]+)\s*\)/);
            if (default_match) {
                default_value = default_match[1].trim();
            }

            // Extract value type
            let value_type = 'unknown';
            if (statement.includes('->as_number()')) {
                value_type = 'number';
            } else if (statement.includes('->as_bool()')) {
                value_type = 'bool';
            } else if (statement.includes('->as_string()')) {
                value_type = 'string';
            } else if (statement.includes('->as_int()')) {
                value_type = 'int';
            }

            // Determine context
            const context_info = determine_context(lines, i, file_path, setting_path);

            reads.push({
                setting_path,
                file: file_path.replace(SOURCE_BASE + '/', ''),
                line_number: i + 1,
                code_line: line.trim(),
                default_value,
                value_type,
                context_description: context_info.description,
                is_global: context_info.is_global,
                module_name: context_info.module_name,
                checksums_used
            });
        }
    }

    return reads;
}

// Determine context for a config read
function determine_context(lines: string[], line_index: number, file_path: string, setting_path: string): {
    description: string;
    is_global: boolean;
    module_name?: string;
} {
    const search_range = 100;
    const start = Math.max(0, line_index - search_range);
    const end = Math.min(lines.length, line_index + 20);
    const context_lines = lines.slice(start, end).join('\n');

    // Check for module enumeration
    if (context_lines.includes('get_module_list')) {
        const module_match = context_lines.match(/get_module_list[^,]*,\s*(\w+)_checksum/);
        if (module_match) {
            return {
                description: `Module instance (${module_match[1]})`,
                is_global: false,
                module_name: module_match[1]
            };
        }
        return {
            description: 'Module instance enumeration',
            is_global: false
        };
    }

    // If path starts with a known module name, it's likely module-specific
    const module_prefixes = ['extruder', 'temperature_control', 'temperaturecontrol', 'switch', 'panel', 'network', 'spindle', 'zprobe'];
    for (const prefix of module_prefixes) {
        if (setting_path.startsWith(prefix + '.')) {
            // Check if it's in a module-specific file
            if (file_path.includes(`/${prefix}/`) || file_path.includes('/temperaturecontrol/') && prefix === 'temperature_control') {
                return {
                    description: `${prefix} module instance setting`,
                    is_global: false,
                    module_name: prefix
                };
            } else {
                // Module setting but read from global context
                return {
                    description: `${prefix} module setting (global context)`,
                    is_global: true,
                    module_name: prefix
                };
            }
        }
    }

    // File-based heuristics
    const file_patterns: Record<string, { name: string, is_global: boolean }> = {
        '/robot/Robot.cpp': { name: 'robot', is_global: true },
        '/robot/Conveyor.cpp': { name: 'robot', is_global: true },
        '/robot/Planner.cpp': { name: 'robot', is_global: true },
        '/Kernel.cpp': { name: 'kernel', is_global: true },
        '/SerialConsole.cpp': { name: 'serial', is_global: true },
        '/Player.cpp': { name: 'player', is_global: true },
        '/Endstops.cpp': { name: 'endstops', is_global: true },
    };

    for (const [pattern, info] of Object.entries(file_patterns)) {
        if (file_path.includes(pattern)) {
            return {
                description: `${info.name} (global)`,
                is_global: info.is_global,
                module_name: info.name
            };
        }
    }

    return {
        description: 'Global setting',
        is_global: true
    };
}

// Main analysis
function main() {
    console.log('=== Final Smoothieware v1 Configuration Analysis ===\n');

    const checksum_map = build_checksum_map();

    console.log('\nExtracting config reads from all files...');
    const files = find_all_cpp_files(SOURCE_BASE);
    const all_reads: ConfigRead[] = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const relative = file.replace(SOURCE_BASE + '/', '');
        process.stdout.write(`[${i + 1}/${files.length}] ${relative}\r`);

        const reads = extract_config_reads(file, checksum_map);
        all_reads.push(...reads);
    }

    console.log(`\n\nFound ${all_reads.length} config reads`);

    // Group by setting path
    const settings_map = new Map<string, SettingDoc>();

    for (const read of all_reads) {
        if (!settings_map.has(read.setting_path)) {
            settings_map.set(read.setting_path, {
                path: read.setting_path,
                type: read.value_type,
                default_value: read.default_value,
                defined_in: []
            });
        }

        const setting = settings_map.get(read.setting_path)!;
        setting.defined_in.push({
            file: read.file,
            line: read.line_number,
            context: read.context_description,
            is_global: read.is_global
        });
    }

    console.log(`Unique settings: ${settings_map.size}\n`);

    // Write results
    const output = {
        analysis_date: new Date().toISOString(),
        total_files: files.length,
        total_config_reads: all_reads.length,
        unique_settings: settings_map.size,
        all_config_reads: all_reads,
        settings_documentation: Array.from(settings_map.values()).sort((a, b) => a.path.localeCompare(b.path))
    };

    const output_file = '/tmp/smoothieware-v1-config-final.json';
    fs.writeFileSync(output_file, JSON.stringify(output, null, 2));
    console.log(`Results written to: ${output_file}\n`);

    // Summary
    console.log('=== SUMMARY ===');
    console.log(`Unique setting paths: ${settings_map.size}`);
    console.log(`Total uses: ${all_reads.length}`);

    const global_count = all_reads.filter(r => r.is_global).length;
    const module_count = all_reads.filter(r => !r.is_global).length;
    console.log(`Global context: ${global_count}`);
    console.log(`Module context: ${module_count}`);

    // Show top-level setting groups
    const groups = new Map<string, number>();
    for (const setting of settings_map.keys()) {
        const group = setting.split('.')[0];
        groups.set(group, (groups.get(group) || 0) + 1);
    }

    console.log(`\nTop-level setting groups:`);
    const sorted_groups = Array.from(groups.entries()).sort((a, b) => b[1] - a[1]);
    for (const [group, count] of sorted_groups) {
        console.log(`  ${group}: ${count} settings`);
    }
}

main();
