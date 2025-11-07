#!/usr/bin/env bun

/**
 * Comprehensive Smoothieware v1 Configuration Analysis Script
 *
 * This script analyzes ALL .cpp files in the Smoothieware v1 source code to:
 * 1. Find every config->value() call
 * 2. Determine the exact setting name from checksums or strings
 * 3. Identify the path context (global vs module instance)
 * 4. Build a complete database of all configuration settings
 *
 * Output: Complete JSON database of all settings with source verification
 */

import * as fs from 'fs';
import * as path from 'path';

// Base path for Smoothieware v1 source
const SOURCE_BASE = '/home/arthur/dev/smoothieware/smoothieware-website-v1/data/github/Smoothieware-v1/src';

// Load checksum definitions
const CHECKSUMS_PATH = path.join(SOURCE_BASE, 'libs/checksumm.h');

interface ConfigRead {
    file: string;
    line_number: number;
    line_content: string;
    setting_name: string;
    checksum_params: string[];
    full_path: string;
    context: string;
    module_type?: string;
}

interface SettingInfo {
    name: string;
    contexts: Array<{
        path: string;
        file: string;
        line: number;
        context_type: 'global' | 'module_instance' | 'mixed';
        module_name?: string;
        code_snippet: string;
    }>;
}

// Parse checksumm.h to get checksum to string mappings
function parse_checksums(): Map<string, string> {
    const checksums = new Map<string, string>();

    if (!fs.existsSync(CHECKSUMS_PATH)) {
        console.log(`Warning: checksumm.h not found at ${CHECKSUMS_PATH}`);
        return checksums;
    }

    const content = fs.readFileSync(CHECKSUMS_PATH, 'utf-8');
    const lines = content.split('\n');

    // Pattern: #define some_checksum 12345
    const pattern = /^#define\s+(\w+_checksum)\s+(\d+)/;

    for (const line of lines) {
        const match = line.match(pattern);
        if (match) {
            const checksum_name = match[1];
            const checksum_value = match[2];
            // Remove _checksum suffix to get setting name
            const setting_name = checksum_name.replace(/_checksum$/, '');
            checksums.set(checksum_name, setting_name);
            checksums.set(checksum_value, setting_name);
        }
    }

    console.log(`Loaded ${checksums.size} checksum definitions`);
    return checksums;
}

// Find all .cpp files recursively
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

// Analyze a single file for config reads
function analyze_file(file_path: string, checksums: Map<string, string>): ConfigRead[] {
    const reads: ConfigRead[] = [];
    const content = fs.readFileSync(file_path, 'utf-8');
    const lines = content.split('\n');

    // Patterns to match:
    // 1. config->value(checksum)
    // 2. THEKERNEL->config->value(checksum)
    // 3. this->value(checksum) [in Config class]
    const config_value_pattern = /(?:config|THEKERNEL->config|this)->value\s*\(/;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const line_number = i + 1;

        if (config_value_pattern.test(line)) {
            // Extract the full statement (may span multiple lines)
            let statement = line;
            let j = i + 1;

            // Continue reading lines until we find the closing parenthesis
            while (j < lines.length && !statement.includes(');')) {
                statement += ' ' + lines[j].trim();
                j++;
            }

            // Try to extract checksum parameters
            const checksum_match = statement.match(/->value\s*\(\s*([^)]+)\s*\)/);
            if (checksum_match) {
                const params = checksum_match[1];
                const checksum_params = params.split(',').map(p => p.trim());

                // Try to resolve setting name from checksums
                let setting_name = 'unknown';
                for (const param of checksum_params) {
                    if (checksums.has(param)) {
                        setting_name = checksums.get(param) ?? 'unknown';
                        break;
                    }
                }

                // Determine context by looking at surrounding code
                const context = determine_context(lines, i, file_path);

                reads.push({
                    file: file_path.replace(SOURCE_BASE + '/', ''),
                    line_number,
                    line_content: line.trim(),
                    setting_name,
                    checksum_params,
                    full_path: 'to_be_determined',
                    context
                });
            }
        }
    }

    return reads;
}

// Determine if config read is in a global context or module loop
function determine_context(lines: string[], line_index: number, file_path: string): string {
    // Look backwards for context clues
    const search_back = 50; // Look back up to 50 lines
    const start = Math.max(0, line_index - search_back);
    const context_lines = lines.slice(start, line_index + 1);

    const context_text = context_lines.join('\n');

    // Check for module enumeration patterns
    if (context_text.includes('get_module_list') ||
        context_text.includes('for(') && context_text.includes('modules')) {
        return 'module_instance';
    }

    // Check for specific module types
    const module_patterns = [
        'extruder',
        'temperature_control',
        'temperaturecontrol',
        'switch',
        'zprobe',
        'endstops',
        'panel'
    ];

    for (const pattern of module_patterns) {
        if (context_text.toLowerCase().includes(pattern)) {
            return `module_instance (${pattern})`;
        }
    }

    // Check file path for module type
    if (file_path.includes('/modules/tools/')) {
        return 'module_instance (from file path)';
    }

    if (file_path.includes('/modules/robot/')) {
        return 'global (robot module)';
    }

    return 'global';
}

// Main analysis function
function analyze_all_files() {
    console.log('Starting comprehensive Smoothieware v1 configuration analysis...\n');

    // Load checksums
    console.log('Loading checksum definitions...');
    const checksums = parse_checksums();

    // Find all cpp files
    console.log('\nFinding all .cpp files...');
    const cpp_files = find_all_cpp_files(SOURCE_BASE);
    console.log(`Found ${cpp_files.length} .cpp files\n`);

    // Analyze each file
    console.log('Analyzing files for config reads...\n');
    const all_reads: ConfigRead[] = [];
    let file_count = 0;

    for (const file of cpp_files) {
        file_count++;
        const relative_path = file.replace(SOURCE_BASE + '/', '');
        process.stdout.write(`[${file_count}/${cpp_files.length}] ${relative_path}\r`);

        const reads = analyze_file(file, checksums);
        all_reads.push(...reads);
    }

    console.log(`\n\nFound ${all_reads.length} total config reads\n`);

    // Group by setting name
    const settings_db = new Map<string, SettingInfo>();

    for (const read of all_reads) {
        if (!settings_db.has(read.setting_name)) {
            settings_db.set(read.setting_name, {
                name: read.setting_name,
                contexts: []
            });
        }

        const setting = settings_db.get(read.setting_name)!;
        setting.contexts.push({
            path: read.full_path,
            file: read.file,
            line: read.line_number,
            context_type: read.context.includes('global') ? 'global' : 'module_instance',
            code_snippet: read.line_content
        });
    }

    // Write detailed results
    const output_file = '/tmp/smoothieware-v1-config-analysis.json';
    const output = {
        analysis_date: new Date().toISOString(),
        total_cpp_files: cpp_files.length,
        total_config_reads: all_reads.length,
        unique_settings: settings_db.size,
        all_reads: all_reads,
        settings_database: Array.from(settings_db.values())
    };

    fs.writeFileSync(output_file, JSON.stringify(output, null, 2));
    console.log(`\nDetailed results written to: ${output_file}`);

    // Print summary
    console.log('\n=== SUMMARY ===');
    console.log(`Total .cpp files analyzed: ${cpp_files.length}`);
    console.log(`Total config reads found: ${all_reads.length}`);
    console.log(`Unique setting names: ${settings_db.size}`);

    // Find settings with multiple contexts
    const multi_context_settings = Array.from(settings_db.values())
        .filter(s => s.contexts.length > 1)
        .sort((a, b) => b.contexts.length - a.contexts.length);

    console.log(`\nSettings used in multiple places: ${multi_context_settings.length}`);
    console.log('\nTop 20 most frequently used settings:');
    for (let i = 0; i < Math.min(20, multi_context_settings.length); i++) {
        const setting = multi_context_settings[i];
        console.log(`  ${setting.name}: ${setting.contexts.length} uses`);
    }

    return output;
}

// Run the analysis
const results = analyze_all_files();
