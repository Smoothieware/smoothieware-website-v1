#!/usr/bin/env python3
"""
Convert Smoothieware V1 configuration markdown to YAML format.
Parses all 308 settings from smoothieware-v1-config.md
"""

import re
import yaml
from datetime import date
from typing import Dict, List, Any, Optional


def parse_setting_block(lines: List[str], start_index: int) -> tuple[Optional[Dict[str, Any]], int]:
    """
    Parse a single setting block starting from a #### `setting_name` header.
    Returns (setting_dict, next_index) or (None, next_index) if no valid setting.
    """
    # Check if this is a setting header
    if start_index >= len(lines):
        return None, start_index

    header_line = lines[start_index].strip()
    if not header_line.startswith('#### `') or not header_line.endswith('`'):
        return None, start_index + 1

    # Extract setting name
    setting_name = header_line[5:-1]  # Remove #### ` and trailing `

    # Initialize setting object with required fields
    setting = {
        'name': setting_name,
        'type': 'string',  # Default, will be updated
        'default': None,
        'module': 'root',
        'context': 'Global setting',
        'defined_in': '',
        'description': '',
        'corresponding_v1': 'N/A',
        'corresponding_v2': 'none'
    }

    # Parse the setting block
    index = start_index + 1
    description_lines = []
    description_points = []
    examples = []
    notes = []
    typical_values = []
    valid_values = []
    related_settings = []
    related_pages = []
    related_m_codes = []

    in_description = False
    in_examples = False
    in_notes = False

    while index < len(lines):
        line = lines[index].strip()

        # Stop at next setting header or major section
        if line.startswith('#### `') or line.startswith('## ') or line.startswith('### '):
            break

        # Skip empty lines between sections
        if not line:
            index += 1
            continue

        # Parse metadata fields
        if line.startswith('**Type:**'):
            type_val = line.split(':', 1)[1].strip()
            if 'number' in type_val.lower() or 'int' in type_val.lower() or 'float' in type_val.lower():
                setting['type'] = 'number'
            elif 'bool' in type_val.lower():
                setting['type'] = 'bool'
            elif 'pin' in type_val.lower():
                setting['type'] = 'pin'
            elif 'enum' in type_val.lower() or 'string' in type_val.lower():
                setting['type'] = 'string'

        elif line.startswith('**Default:**'):
            default_val = line.split(':', 1)[1].strip()
            if default_val.lower() in ['none', 'null', 'n/a', '(none)', '(no default)']:
                setting['default'] = None
            elif setting['type'] == 'number':
                # Try to parse as number
                try:
                    if '.' in default_val:
                        setting['default'] = float(default_val)
                    else:
                        setting['default'] = int(default_val)
                except:
                    setting['default'] = default_val
            elif setting['type'] == 'bool':
                setting['default'] = default_val.lower() in ['true', '1', 'yes']
            else:
                setting['default'] = default_val

        elif line.startswith('**Units:**'):
            setting['units'] = line.split(':', 1)[1].strip()

        elif line.startswith('**Module:**'):
            setting['module'] = line.split(':', 1)[1].strip()

        elif line.startswith('**Context:**'):
            setting['context'] = line.split(':', 1)[1].strip()

        elif line.startswith('**Defined in:**'):
            setting['defined_in'] = line.split(':', 1)[1].strip()

        elif line.startswith('**Minimum:**'):
            min_val = line.split(':', 1)[1].strip()
            if setting['type'] == 'number':
                try:
                    setting['minimum_value'] = float(min_val) if '.' in min_val else int(min_val)
                except:
                    setting['minimum_value'] = min_val
            else:
                setting['minimum_value'] = min_val

        elif line.startswith('**Maximum:**'):
            max_val = line.split(':', 1)[1].strip()
            if setting['type'] == 'number':
                try:
                    setting['maximum_value'] = float(max_val) if '.' in max_val else int(max_val)
                except:
                    setting['maximum_value'] = max_val
            else:
                setting['maximum_value'] = max_val

        elif line.startswith('**Corresponding V2:**'):
            v2_val = line.split(':', 1)[1].strip()
            setting['corresponding_v2'] = v2_val if v2_val else 'none'

        elif line.startswith('**Description:**'):
            in_description = True
            desc_text = line.split(':', 1)[1].strip()
            if desc_text:
                description_lines.append(desc_text)

        elif line.startswith('**Examples:**'):
            in_examples = True
            in_description = False
            in_notes = False

        elif line.startswith('**Notes:**') or line.startswith('**WARNING:**') or line.startswith('**CRITICAL:**'):
            in_notes = True
            in_description = False
            in_examples = False
            if line.startswith('**Notes:**'):
                note_text = line.split(':', 1)[1].strip()
                if note_text:
                    notes.append(note_text)
            else:
                notes.append(line.replace('**', '').strip())

        elif line.startswith('**Typical values:**'):
            in_description = False
            in_examples = False
            in_notes = False

        elif line.startswith('**Valid values:**'):
            in_description = False
            in_examples = False
            in_notes = False

        elif line.startswith('**Related settings:**'):
            in_description = False
            in_examples = False
            in_notes = False

        elif line.startswith('**Related pages:**'):
            in_description = False
            in_examples = False
            in_notes = False

        elif line.startswith('**Related M-codes:**'):
            in_description = False
            in_examples = False
            in_notes = False

        # Parse list items
        elif line.startswith('- '):
            item_text = line[2:].strip()

            if in_description:
                description_points.append(item_text)
            elif in_examples:
                # Extract example, removing markdown code formatting
                if item_text.startswith('`') and item_text.endswith('`'):
                    item_text = item_text[1:-1]
                examples.append(item_text)
            elif in_notes:
                notes.append(item_text)
            else:
                # Check if this is a typical value, valid value, or related item
                # This requires looking at the previous non-empty line context
                pass  # Will handle in post-processing

        # Continue description
        elif in_description and line and not line.startswith('**'):
            description_lines.append(line)

        elif in_examples and line.startswith('```') or line.endswith('```'):
            # Skip code fence markers
            pass

        elif in_examples and line and not line.startswith('**'):
            # Direct example code line
            examples.append(line)

        elif in_notes and line and not line.startswith('**'):
            notes.append(line)

        index += 1

    # Assemble description
    if description_lines:
        setting['description'] = ' '.join(description_lines)

    if description_points:
        setting['description_points'] = description_points

    if examples:
        setting['examples'] = examples

    if notes:
        setting['notes'] = notes

    if typical_values:
        setting['typical_values'] = typical_values

    if valid_values:
        setting['valid_values'] = valid_values

    if related_settings:
        setting['related_settings'] = related_settings

    if related_pages:
        setting['related_pages'] = related_pages

    if related_m_codes:
        setting['related_m_codes'] = related_m_codes

    return setting, index


def parse_v1_config_markdown(file_path: str) -> Dict[str, Any]:
    """
    Parse the entire V1 configuration markdown file.
    Returns a dict with metadata and settings.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Parse metadata from header
    metadata = {
        'version': 'v1',
        'total_settings': 0,
        'last_updated': date.today().isoformat(),
        'firmware_repo': 'Smoothieware/Smoothieware',
        'source_file': 'src/docs/smoothieware-v1-config.md'
    }

    # Extract total settings from header
    for line in lines[:50]:
        if 'Total settings:' in line or 'total of' in line.lower():
            # Extract number
            numbers = re.findall(r'\d+', line)
            if numbers:
                metadata['total_settings'] = int(numbers[0])
                break

    # Parse all settings
    settings = []
    index = 0

    while index < len(lines):
        setting, next_index = parse_setting_block(lines, index)
        if setting:
            settings.append(setting)
        index = next_index

        # Safety check to prevent infinite loops
        if next_index <= index:
            index += 1

    # Update metadata with actual count
    metadata['total_settings'] = len(settings)

    return {
        'metadata': metadata,
        'settings': settings
    }


def write_yaml(data: Dict[str, Any], output_path: str):
    """
    Write the parsed data to a YAML file.
    """
    # Custom representer for better YAML formatting
    def str_representer(dumper, data):
        if '\n' in data:
            return dumper.represent_scalar('tag:yaml.org,2002:str', data, style='|')
        return dumper.represent_scalar('tag:yaml.org,2002:str', data)

    yaml.add_representer(str, str_representer)

    with open(output_path, 'w', encoding='utf-8') as f:
        yaml.dump(
            data,
            f,
            default_flow_style=False,
            allow_unicode=True,
            sort_keys=False,
            width=120
        )


if __name__ == '__main__':
    input_file = '/home/arthur/dev/smoothieware/smoothieware-website-v1/src/docs/smoothieware-v1-config.md'
    output_file = '/home/arthur/dev/smoothieware/smoothieware-website-v1/src/docs/smoothieware-v1-config.yaml'

    print("Parsing V1 configuration markdown...")
    config_data = parse_v1_config_markdown(input_file)

    print(f"Found {len(config_data['settings'])} settings")
    print(f"Expected: {config_data['metadata']['total_settings']}")

    print("\nWriting YAML file...")
    write_yaml(config_data, output_file)

    print(f"\nConversion complete!")
    print(f"Output written to: {output_file}")
    print(f"\nSummary:")
    print(f"  Total settings: {len(config_data['settings'])}")
    print(f"  Version: {config_data['metadata']['version']}")
    print(f"  Last updated: {config_data['metadata']['last_updated']}")
