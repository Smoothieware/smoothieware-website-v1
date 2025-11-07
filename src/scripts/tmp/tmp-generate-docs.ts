#!/usr/bin/env bun

/**
 * Generate Comprehensive Smoothieware v1 Configuration Documentation
 *
 * Reads the analysis results and generates detailed Markdown documentation
 * that accurately reflects where each setting is read in the source code.
 */

import * as fs from 'fs';

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

interface AnalysisData {
    analysis_date: string;
    total_files: number;
    total_config_reads: number;
    unique_settings: number;
    all_config_reads: Array<any>;
    settings_documentation: SettingDoc[];
}

// Load analysis data
const data: AnalysisData = JSON.parse(
    fs.readFileSync('/tmp/smoothieware-v1-config-final.json', 'utf-8')
);

// Group settings by category
interface SettingGroup {
    name: string;
    settings: SettingDoc[];
}

function categorize_settings(settings: SettingDoc[]): SettingGroup[] {
    const groups = new Map<string, SettingDoc[]>();

    for (const setting of settings) {
        const parts = setting.path.split('.');
        let category: string;

        if (parts.length === 1) {
            // Top-level setting
            // Group by module type
            if (setting.defined_in[0].file.includes('/robot/')) {
                category = 'Robot & Motion Control';
            } else if (setting.defined_in[0].file.includes('/communication/')) {
                category = 'Communication';
            } else if (setting.defined_in[0].file.includes('/Network/')) {
                category = 'Network';
            } else if (setting.defined_in[0].file.includes('/panel/')) {
                category = 'Panel & Display';
            } else if (setting.defined_in[0].file.includes('/Kernel.cpp')) {
                category = 'System';
            } else {
                category = 'Other Global Settings';
            }
        } else {
            // Module-specific setting (e.g., extruder.hotend.enable)
            const module = parts[0];
            category = module.charAt(0).toUpperCase() + module.slice(1) + ' Module';
        }

        if (!groups.has(category)) {
            groups.set(category, []);
        }
        groups.get(category)!.push(setting);
    }

    // Convert to array and sort
    const result: SettingGroup[] = Array.from(groups.entries())
        .map(([name, settings]) => ({ name, settings }))
        .sort((a, b) => a.name.localeCompare(b.name));

    return result;
}

// Generate markdown for a single setting
function generate_setting_markdown(setting: SettingDoc): string {
    let md = `#### \`${setting.path}\`\n\n`;

    // Type and default
    md += `**Type:** \`${setting.type}\`\n\n`;
    if (setting.default_value !== 'none') {
        md += `**Default Value:** \`${setting.default_value}\`\n\n`;
    }

    // Check if used in multiple contexts
    const global_uses = setting.defined_in.filter(d => d.is_global);
    const module_uses = setting.defined_in.filter(d => !d.is_global);

    if (global_uses.length > 0 && module_uses.length > 0) {
        md += `**⚠️ This setting is used in MULTIPLE contexts:**\n\n`;
    }

    // Global context
    if (global_uses.length > 0) {
        if (global_uses.length === 1 && module_uses.length === 0) {
            md += `**Context:** Global setting\n\n`;
        } else {
            md += `**Global Context:**\n\n`;
        }

        for (const use of global_uses) {
            md += `- Defined in: \`${use.file}:${use.line}\`\n`;
            md += `- Context: ${use.context}\n`;
        }
        md += '\n';
    }

    // Module instance context
    if (module_uses.length > 0) {
        if (module_uses.length === 1 && global_uses.length === 0) {
            md += `**Context:** Module instance setting\n\n`;
        } else {
            md += `**Module Instance Context:**\n\n`;
        }

        for (const use of module_uses) {
            md += `- Defined in: \`${use.file}:${use.line}\`\n`;
            md += `- Context: ${use.context}\n`;
        }
        md += '\n';
    }

    // Path examples
    if (setting.path.includes('.')) {
        const parts = setting.path.split('.');
        const module = parts[0];
        md += `**Example Configuration Paths:**\n\n`;
        md += `\`\`\`\n`;
        if (module === 'extruder') {
            md += `extruder.hotend.${parts.slice(1).join('.')}\n`;
            md += `extruder.hotend2.${parts.slice(1).join('.')}\n`;
        } else if (module === 'temperature_control' || module === 'temperaturecontrol') {
            md += `temperature_control.hotend.${parts.slice(1).join('.')}\n`;
            md += `temperature_control.bed.${parts.slice(1).join('.')}\n`;
        } else if (module === 'switch') {
            md += `switch.fan.${parts.slice(1).join('.')}\n`;
            md += `switch.psu.${parts.slice(1).join('.')}\n`;
        } else if (module === 'panel') {
            md += `panel.${parts.slice(1).join('.')}\n`;
        } else {
            md += `${setting.path}\n`;
        }
        md += `\`\`\`\n\n`;
    } else {
        md += `**Configuration:**\n\n`;
        md += `\`\`\`\n`;
        md += `${setting.path} <value>\n`;
        md += `\`\`\`\n\n`;
    }

    return md;
}

// Generate full documentation
function generate_documentation(): string {
    const title = '# Smoothieware v1 Configuration Reference';
    const subtitle = '## Complete Configuration Settings (Source Code Verified)';

    let md = `${title}\n\n${subtitle}\n\n`;

    md += `**Generated:** ${new Date().toISOString().split('T')[0]}\n\n`;
    md += `**Analysis Date:** ${data.analysis_date}\n\n`;
    md += `**Source Files Analyzed:** ${data.total_files}\n\n`;
    md += `**Total Settings:** ${data.unique_settings}\n\n`;

    md += `---\n\n`;

    md += `## About This Documentation\n\n`;
    md += `This configuration reference was generated by analyzing **ALL** source code files in Smoothieware v1.\n`;
    md += `Every setting listed here is **verified** to exist in the actual firmware source code.\n\n`;

    md += `Each setting includes:\n`;
    md += `- **Exact path** where it's read in the configuration\n`;
    md += `- **Type** (number, bool, string)\n`;
    md += `- **Default value** (if specified)\n`;
    md += `- **Source file and line number** where it's defined\n`;
    md += `- **Context** (global vs module instance)\n\n`;

    md += `⚠️ **Important:** Settings marked with "MULTIPLE contexts" exist in both global and module-specific forms.\n`;
    md += `These need careful attention as the same setting name may mean different things in different parts of the config.\n\n`;

    md += `---\n\n`;

    // Table of contents
    const groups = categorize_settings(data.settings_documentation);

    md += `## Table of Contents\n\n`;
    for (const group of groups) {
        const anchor = group.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        md += `- [${group.name}](#${anchor}) (${group.settings.length} settings)\n`;
    }
    md += `\n---\n\n`;

    // Generate each category
    for (const group of groups) {
        md += `## ${group.name}\n\n`;
        md += `${group.settings.length} settings in this category.\n\n`;

        // Sort settings alphabetically
        const sorted_settings = group.settings.sort((a, b) => a.path.localeCompare(b.path));

        for (const setting of sorted_settings) {
            md += generate_setting_markdown(setting);
        }

        md += `---\n\n`;
    }

    // Appendix: Settings with multiple contexts
    const multi_context_settings = data.settings_documentation.filter(s => {
        const global_uses = s.defined_in.filter(d => d.is_global);
        const module_uses = s.defined_in.filter(d => !d.is_global);
        return global_uses.length > 0 && module_uses.length > 0;
    });

    if (multi_context_settings.length > 0) {
        md += `## Appendix: Settings Used in Multiple Contexts\n\n`;
        md += `These settings appear in BOTH global and module-specific contexts:\n\n`;

        for (const setting of multi_context_settings) {
            md += `- **\`${setting.path}\`**\n`;
            const global_files = [...new Set(setting.defined_in.filter(d => d.is_global).map(d => d.file))];
            const module_files = [...new Set(setting.defined_in.filter(d => !d.is_global).map(d => d.file))];
            md += `  - Global: ${global_files.join(', ')}\n`;
            md += `  - Module: ${module_files.join(', ')}\n`;
        }
        md += `\n`;
    }

    return md;
}

// Main
console.log('Generating Smoothieware v1 Configuration Documentation...\n');

const markdown = generate_documentation();
const output_file = '/home/arthur/dev/smoothieware/smoothieware-website-v1/docs/smoothieware-v1-config-verified.md';

fs.writeFileSync(output_file, markdown);

console.log(`Documentation generated successfully!`);
console.log(`Output: ${output_file}`);
console.log(`Total settings documented: ${data.unique_settings}`);
console.log(`Total characters: ${markdown.length}`);
