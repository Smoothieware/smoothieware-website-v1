/** Match only explicitly marked placeholders, never arbitrary suffixes. */
function compile_pattern(pattern) {
    const escaped = pattern.split(/(\{[^}]+\}|<[^>]+>)/).map(part => /^(\{|<)/.test(part) ? '[^.\\s]+' : part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('');
    return new RegExp(`^${escaped}$`);
}
/** Derive transport names from the same YAML consumed by setting tags. */
export function create_schema(database, source) {
    if (!['v1', 'v2'].includes(database?.metadata?.version) || !Array.isArray(database.modules)) {
        throw new Error('The definition database is missing its version or modules.');
    }
    const source_lines = source.split('\n').flatMap((line, index) => /^\s+- name:/.test(line) ? [index + 1] : []);
    let setting_index = 0;
    const rules = database.modules.flatMap(module => module.settings.map(definition => {
        const source_line = source_lines[setting_index++] ?? 1;
        if (database.metadata.version === 'v1')
            return { definition, section: '', key: definition.name, source_line };
        // Explicit sections take precedence over descriptive cross-version mappings.
        const section = definition.section?.replace(/^\[|\]$/g, '') ?? definition.module.replace(/_/g, ' ');
        const prefix = `${definition.module}.`;
        let key = definition.name.startsWith(`${section}.`) ? definition.name.slice(section.length + 1)
            : definition.name.startsWith(prefix) ? definition.name.slice(prefix.length) : definition.name;
        if (!definition.section && definition.corresponding_v2?.startsWith(prefix) && !/[,(]/.test(definition.corresponding_v2)) {
            key = definition.corresponding_v2.slice(prefix.length);
        }
        if (section === 'switch' && !key.includes('.'))
            key = `{name}.${key}`;
        // Robot.cpp actuator_keys maps X/Y/Z documentation labels to alpha/beta/gamma transport names.
        if (section === 'actuator') {
            const axes = { x: 'alpha', y: 'beta', z: 'gamma' };
            key = key.replace(/^(x|y|z)\./, (_, axis) => `${axes[axis]}.`);
        }
        return { definition, section, key, source_line };
    }));
    const exact_rules = new Map();
    const template_rules = [];
    for (const rule of rules) {
        if (/[{<]/.test(rule.section + rule.key)) {
            template_rules.push({ rule, section_pattern: compile_pattern(rule.section), key_pattern: compile_pattern(rule.key) });
            continue;
        }
        const identity = `${rule.section}\0${rule.key}`;
        if (!exact_rules.has(identity))
            exact_rules.set(identity, rule);
    }
    return { version: database.metadata.version, rules, database, exact_rules, template_rules };
}
/** Choose exact instance definitions before generic module templates. */
export function find_rule(schema, section, key) {
    return schema.exact_rules.get(`${section}\0${key}`) ?? schema.template_rules.find(candidate => candidate.section_pattern.test(section) && candidate.key_pattern.test(key))?.rule;
}
/** Check documented scalar types; prose examples and typical values are not constraints. */
function check_value(rule, value) {
    const type = rule.definition.type;
    if (!value)
        return { severity: 'warning', code: 'empty', message: 'Empty value. Confirm this is intentional; no default is inserted.' };
    if (type === 'number' && (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(value) || !Number.isFinite(Number(value)))) {
        return { severity: 'error', code: 'number', message: 'Expected a finite decimal number according to the definition.' };
    }
    if (type === 'bool' && !['true', 'false', '1', '0', 't', 'f', 'yes', 'no'].includes(value)) {
        return { severity: 'error', code: 'boolean', message: 'Use a documented boolean, preferably true or false. Firmware may silently coerce other text.' };
    }
    if (type.includes('enum')) {
        const values = rule.definition.valid_values?.map(item => String(item.value).replace(/^"(.*)"$/, '$1'));
        // Descriptive entries such as “none (or …)” cannot form a closed enum.
        if (!values?.length || values.some(item => /[\s()]/.test(item)))
            return { severity: 'info', code: 'coverage', message: 'Recognized enum; the source does not provide an unambiguous closed value list. Review its definition.' };
        if (!values.includes(value))
            return { severity: 'error', code: 'enum', message: `Documented values: ${values.join(', ')}.` };
    }
    if (type.startsWith('pin'))
        return { severity: 'info', code: 'pin-review', message: 'Pin setting recognized. Pin syntax, board mapping, capabilities, conflicts and wiring are not verified.' };
    return undefined;
}
/** Parse v1 whitespace records or v2 INI records, preserving physical line numbers. */
export function check_config(schema, content) {
    const result = { diagnostics: [], settings: 0, recognized: 0 };
    const seen = new Map();
    const sections = new Map();
    let section = '';
    let line_number = 0;
    for (const raw_line of content.replace(/^\uFEFF/, '').split(/\r\n|\n|\r/)) {
        line_number += 1;
        // Both firmware parsers treat # as a comment even inside quoted text.
        const line = raw_line.split('#', 1)[0].trim();
        if (!line)
            continue;
        const emit = (severity, code, message, key = '', rule) => {
            result.diagnostics.push({ line: line_number, severity, code, message, key, rule });
        };
        if (schema.version === 'v2' && line.startsWith('[')) {
            const header = line.match(/^\[([^\[\]]+)\]$/);
            section = header?.[1] ?? '';
            if (!header) {
                emit('error', 'section', 'Malformed section header. Expected [section].');
                continue;
            }
            if (sections.has(section))
                emit('warning', 'duplicate-section', `Repeated section; first seen on line ${sections.get(section)}. Firmware may ignore later blocks.`, section);
            sections.set(section, sections.get(section) ?? line_number);
            if (!schema.rules.some(rule => compile_pattern(rule.section).test(section)))
                emit('warning', 'unknown-section', 'Section is not covered by this version’s definitions.', section);
            continue;
        }
        const record = schema.version === 'v1' ? line.match(/^([^\s=\[\]]+)\s+(.+)$/) : line.match(/^([^=\s]+)\s*=\s*(.*)$/);
        if (!record || (schema.version === 'v1' && record[2].startsWith('='))) {
            emit('error', 'syntax', schema.version === 'v1' ? 'Expected setting value (v1 has no INI sections or = separator).' : 'Expected key = value inside an INI section.');
            continue;
        }
        result.settings += 1;
        const [, key, raw_value] = record;
        const value = raw_value.trim();
        if (schema.version === 'v2' && !section) {
            emit('error', 'missing-section', 'v2 settings must be inside a [section].', key);
            continue;
        }
        const identity = `${section}\0${key}`;
        const rule = find_rule(schema, section, key);
        if (seen.has(identity))
            emit('warning', 'duplicate', `Duplicate setting; first seen on line ${seen.get(identity)}. Resolve the ambiguity before use.`, key, rule);
        seen.set(identity, seen.get(identity) ?? line_number);
        if (!rule) {
            emit('warning', 'unknown', 'Not found in this version’s definitions. It may be misspelled, unsupported or undocumented.', key);
            continue;
        }
        result.recognized += 1;
        // The source's spindle subsection conflicts with Switch.cpp's [switch] sub-key transport.
        if (schema.version === 'v2' && section === 'switch.spindle')
            emit('warning', 'source-conflict', 'This definition names [switch.spindle], but the v2 switch reader uses [switch] with spindle.* keys. Review the source discrepancy; do not rely on this section being applied.', key, rule);
        const diagnostic = check_value(rule, value);
        if (diagnostic)
            emit(diagnostic.severity, diagnostic.code, diagnostic.message, key, rule);
        // These are canonical choices, but only true/t/1 are true in the v2 reader.
        if (schema.version === 'v2' && rule.definition.type === 'bool' && ['yes', 'no'].includes(value))
            emit('warning', 'boolean-coercion', 'v2 only treats true, t and 1 as true. Use true or false to avoid surprising coercion.', key, rule);
    }
    return result;
}
