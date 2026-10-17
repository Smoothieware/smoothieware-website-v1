/** Regression cases against the actual public settings databases, never mock schemas. */
import { describe, it, expect } from 'bun:test';
import { resolve } from 'node:path';
import { check_config, create_schema, find_rule, type DefinitionDatabase } from './engine';

const site_root = process.env.SMOOTHIE_SITE_ROOT ?? resolve(import.meta.dir, '../../..');
const yaml = await import(`${site_root}/node_modules/js-yaml/index.js`);
const schemas = await Promise.all((['v1', 'v2'] as const).map(async version => {
    const source = await Bun.file(`${site_root}/docs/assets/data/smoothieware-${version}-config.yaml`).text();
    return create_schema(yaml.load(source) as DefinitionDatabase, source);
}));
const [v1, v2] = schemas;
const codes = (version: 0 | 1, text: string): string[] => check_config(schemas[version], text).diagnostics.map(item => item.code);

describe('canonical version separation', () => {
    it('should load actual entries despite stale metadata', () => {
        expect(v1.rules.length).toBe(416);
        expect(v2.rules.length).toBe(381);
        expect(v1.database.metadata.version).toBe('v1');
        expect(v2.database.metadata.version).toBe('v2');
    });
    it('should accept distinct canonical syntax examples', () => {
        expect(codes(0, 'acceleration 100\narm_solution cartesian\nswitch.fan.enable false')).toEqual([]);
        expect(codes(1, '[general]\ngrbl_mode = true\n[motion control]\narm_solution = corexz')).toEqual([]);
    });
    it('should reject the other version syntax and enum values', () => {
        expect(codes(0, '[general]\ngrbl_mode = true')).toContain('syntax');
        expect(codes(1, 'acceleration 100')).toContain('syntax');
        expect(codes(0, 'arm_solution corexz')).toContain('enum');
        expect(codes(1, '[motion control]\narm_solution = rotatable_cartesian')).toContain('enum');
        expect(codes(1, '[motion control]\nacceleration = 100')).toContain('unknown');
    });
});
describe('syntax, evidence and coverage', () => {
    it('should preserve physical line numbers with BOM, CRLF and comments', () => {
        const result = check_config(v1, '\uFEFF# comment\r\n\r\nacceleration broken # inline\r\n');
        expect(result.diagnostics[0].line).toBe(3);
        expect(result.diagnostics[0].rule?.source_line).toBe(13);
    });
    it('should reject nonfinite and partial numbers while accepting exponents', () => {
        for (const value of ['NaN', 'Infinity', '1e999', '100garbage', '0x42']) expect(codes(0, `acceleration ${value}`)).toContain('number');
        for (const value of ['-0.5', '.1', '+2', '1e3']) expect(codes(0, `acceleration ${value}`)).toEqual([]);
    });
    it('should identify malformed booleans and v2 coercion surprises', () => {
        expect(codes(0, 'switch.fan.enable banana')).toContain('boolean');
        expect(codes(1, '[general]\ngrbl_mode = yes')).toContain('boolean-coercion');
    });
    it('should report unknowns, empty values, missing and malformed sections', () => {
        expect(codes(0, 'made_up_setting 10')).toContain('unknown');
        expect(codes(1, '[general]\ngrbl_mode =')).toContain('empty');
        expect(codes(1, 'grbl_mode = true')).toContain('missing-section');
        expect(codes(1, '[general] junk\ngrbl_mode = true')).toContain('section');
        expect(codes(1, '[General]\ngrbl_mode = true')).toContain('unknown-section');
    });
    it('should track duplicates by full section and concrete instance', () => {
        expect(codes(0, 'switch.fan.enable false\nswitch.fan.enable true')).toContain('duplicate');
        expect(codes(0, 'switch.fan.enable false\nswitch.pump.enable true')).not.toContain('duplicate');
        expect(codes(1, '[general]\ngrbl_mode = true\ngrbl_mode = false')).toContain('duplicate');
        expect(codes(1, '[general]\ngrbl_mode = true\n[general]\ngrbl_mode = false')).toContain('duplicate-section');
    });
    it('should only match explicit instance placeholders', () => {
        expect(find_rule(v1, '', 'temperature_control.hotend.enable')).toBeDefined();
        expect(find_rule(v1, '', 'temperature_control.hotend.extra.enable')).toBeUndefined();
        expect(find_rule(v2, 'temperature control', 'hotend.enable')).toBeDefined();
        expect(find_rule(v2, 'switch', 'fan.enable')).toBeDefined();
        expect(find_rule(v2, 'actuator', 'alpha.steps_per_mm')).toBeDefined();
        expect(find_rule(v2, 'actuator', 'x.steps_per_mm')).toBeUndefined();
    });
    it('should flag unverified pin/enum constraints without inventing ranges', () => {
        expect(codes(0, 'acceleration -100')).toEqual([]);
        expect(codes(0, 'switch.fan.output_pin 2.5')).toContain('pin-review');
        expect(codes(0, 'switch.fan.output_type any_text')).toContain('coverage');
        expect(codes(1, '[switch.spindle]\nenable = false')).toContain('source-conflict');
    });
    it('should handle empty text, comments, CR and hostile text as data', () => {
        expect(check_config(v1, '# only comments\n').settings).toBe(0);
        expect(check_config(v1, '').diagnostics).toEqual([]);
        expect(check_config(v1, 'acceleration 1\racceleration 2').diagnostics[0].line).toBe(2);
        expect(codes(0, '<script>alert(1)</script> text')).toContain('unknown');
    });
});
