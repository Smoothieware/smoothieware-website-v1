import { describe, expect, test } from 'bun:test';
import { EventEmitter } from 'node:events';
import { language_flag, ProgressDisplay, type SectionStartEvent } from '../progress';
import { TOP_LANGUAGES } from '../languages';
import type { RunStats } from '../types';

interface CapturedTerminal {
    output: { isTTY: boolean; columns: number; rows: number; write: (text: string) => boolean; on: (event: string, handler: () => void) => void; off: (event: string, handler: () => void) => void };
    input: EventEmitter & { isTTY: boolean; isRaw: boolean; setRawMode: (enabled: boolean) => void; resume: () => void; pause: () => void };
    writes: string[];
}

function terminal(columns = 100, rows = 16, is_tty = true): CapturedTerminal {
    const writes: string[] = [];
    const emitter = new EventEmitter();
    const input = Object.assign(new EventEmitter(), {
        isTTY: is_tty, isRaw: false,
        setRawMode(enabled: boolean): void { input.isRaw = enabled; },
        resume(): void {}, pause(): void {}
    });
    const output = Object.assign(emitter, {
        isTTY: is_tty, columns, rows,
        write(value: string): boolean { writes.push(value); return true; }
    });
    return { output, input, writes };
}

function stats(): RunStats {
    return { completed: 2, skipped: 1, blocked: 0, failed: 0, active: 1, total: 12 };
}

function start_event(): SectionStartEvent {
    return {
        section_id: 'page.md:2', file_path: 'page.md', section_index: 2, section_count: 4,
        section_label: 'Configuration', worker_index: 1, related_file_count: 3,
        context: { instruction_tokens: 100, source_file_tokens: 200, active_section_tokens: 150,
            related_files_tokens: 250, output_reservation_tokens: 200, free_capacity_tokens: 100, total_tokens: 1000 }
    };
}

function last_frame(writes: string[]): string {
    const combined = writes.join('');
    return combined.slice(combined.lastIndexOf('\u001b[H'));
}

function visible_rows(frame: string): string[] {
    return frame.replace(/\u001b\[[0-9;]*[A-Za-z]/g, '').split('\n');
}

describe('ProgressDisplay', () => {
    test('shows the destination-language flag before the title', () => {
        const io = terminal(100, 12);
        const display = new ProgressDisplay(stats(), 'Smoothieware docs → French', io, 'fr');
        expect(visible_rows(last_frame(io.writes))[0]).toContain('🇫🇷 Smoothieware docs → French');
        display.close();
    });

    test('has a flag mapping for every configured target language', () => {
        for (const language of TOP_LANGUAGES) expect(language_flag(language.code)).not.toBe('');
    });

    test('keeps the title readable when the target code has no flag mapping', () => {
        const io = terminal(100, 12);
        const display = new ProgressDisplay(stats(), 'Translation → Unknown', io, 'unknown');
        expect(visible_rows(last_frame(io.writes))[0]).toContain('Translation → Unknown');
        expect(visible_rows(last_frame(io.writes))[0]).not.toContain('🇺🇳');
        display.close();
    });

    test('opens a fixed-size alternate screen and restores terminal state on close', () => {
        const io = terminal(100, 12);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.log('info', 'first');
        expect(io.writes.join('')).toContain('\u001b[?1049h');
        expect(visible_rows(last_frame(io.writes))).toHaveLength(12);
        expect(io.input.isRaw).toBe(true);
        display.close();
        expect(io.input.isRaw).toBe(false);
        expect(io.writes.join('')).toContain('\u001b[?1049l');
    });

    test('adds three start rows and two completion rows with colored composition', () => {
        const io = terminal(160, 20);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.section_start(start_event());
        display.section_complete({ section_id: 'page.md:2', duration_ms: 1250, units_completed: 7, attempts: 2, result: 'success' });
        const text = last_frame(io.writes);
        expect(text).toContain('page.md');
        expect(text).toContain('Configuration');
        expect(text).toContain('1.25 s');
        expect(text).toContain('7 units');
        expect(text).toContain('2 attempts');
        expect(text).toMatch(/MAP  \u001b\[3\dm█/);
        expect(display.get_log_rows()).toHaveLength(5);
        display.close();
    });

    test('keeps every rendered row within terminal width at compact and wide sizes', () => {
        for (const columns of [44, 100, 500, 800]) {
            const io = terminal(columns, 12);
            const display = new ProgressDisplay(stats(), 'Very long translation title', io);
            display.section_start({ ...start_event(), section_label: 'x'.repeat(700) });
            const rows = visible_rows(last_frame(io.writes));
            expect(rows).toHaveLength(12);
            for (const row of rows) expect(Array.from(row).length).toBeLessThanOrEqual(Math.min(columns, 500));
            display.close();
        }
    });

    test('shows every context category in the 100-column legend', () => {
        const io = terminal(100, 12);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.section_start(start_event());
        const frame = last_frame(io.writes);
        expect(frame).toContain('I100');
        expect(frame).toContain('F200');
        expect(frame).toContain('S150');
        expect(frame).toContain('R250');
        expect(frame).toContain('O200');
        expect(frame).toContain('free100');
        display.close();
    });

    test('shows a color-to-context legend at the bottom of the screen', () => {
        const io = terminal(140, 12);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.section_start(start_event());
        const frame = last_frame(io.writes);
        const rows = visible_rows(frame);
        const bottom_rows = rows.slice(-3).join('\n');
        const colored_bottom_rows = frame.split('\n').slice(-3).join('\n');
        expect(bottom_rows).toContain('Instruction');
        expect(bottom_rows).toContain('Full file');
        expect(bottom_rows).toContain('Active section');
        expect(bottom_rows).toContain('Related files');
        expect(bottom_rows).toContain('Output reserve');
        expect(bottom_rows).toContain('Free capacity');
        expect(colored_bottom_rows).toContain('\u001b[34m');
        expect(colored_bottom_rows).toContain('\u001b[36m');
        expect(colored_bottom_rows).toContain('\u001b[35m');
        expect(colored_bottom_rows).toContain('\u001b[33m');
        expect(colored_bottom_rows).toContain('\u001b[32m');
        expect(colored_bottom_rows).toContain('\u001b[90m');
        display.close();
    });

    test('keeps every color label visible in the compact bottom legend', () => {
        const io = terminal(44, 12);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.section_start(start_event());
        const frame = last_frame(io.writes);
        const rows = visible_rows(frame).slice(-4).join('\n');
        expect(rows).toContain('Instruction');
        expect(rows).toContain('Full file');
        expect(rows).toContain('Active section');
        expect(rows).toContain('Related files');
        expect(rows).toContain('Output reserve');
        expect(rows).toContain('Free capacity');
        display.close();
    });

    test('shows separate page and section outcome counters', () => {
        const io = terminal(160, 14);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.section_start(start_event());
        display.section_start({ ...start_event(), section_id: 'other.md:1', file_path: 'other.md' });
        display.section_complete({ section_id: 'page.md:2', duration_ms: 900, units_completed: 2, attempts: 1, result: 'success' });
        display.section_complete({ section_id: 'other.md:1', duration_ms: 400, units_completed: 0, attempts: 3, result: 'failed' });
        display.section_skip({ file_path: 'cached.md', section_index: 1, section_count: 2, section_label: 'Cached section', reason: 'checkpoint reused' });
        const frame = last_frame(io.writes);
        expect(frame).toContain('PAGES 3/12');
        expect(frame).toContain('PAGES done 2  skipped 1  blocked 0  failed 0  active 1');
        expect(frame).toContain('SECTIONS 3/10 known  done 1  skipped 1  blocked 0  failed 1  active 0');
        display.close();
    });

    test('redraws the frame when the terminal width changes', () => {
        const io = terminal(80, 12);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.section_start(start_event());
        const previous_write_count = io.writes.length;
        io.output.columns = 120;
        (io.output as unknown as EventEmitter).emit('resize');
        expect(io.writes.length).toBeGreaterThan(previous_write_count);
        expect(visible_rows(last_frame(io.writes))).toHaveLength(12);
        display.close();
    });

    test('fits full-width characters by terminal cells', () => {
        const io = terminal(44, 10);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.log('info', '界'.repeat(80));
        const rows = visible_rows(last_frame(io.writes));
        for (const row of rows) {
            const cells = Array.from(row).reduce((width, character) => width + (character === '界' ? 2 : 1), 0);
            expect(cells).toBeLessThanOrEqual(44);
        }
        display.close();
    });

    test('scrolls retained history and copies only visible log rows', () => {
        const io = terminal(100, 8);
        const display = new ProgressDisplay(stats(), 'PRIVATE HEADER', io);
        for (let index = 0; index < 12; index++) display.log('info', `event ${index}`);
        expect(display.get_log_rows()).toHaveLength(12);
        io.input.emit('data', Buffer.from('\u001b[5~'));
        io.input.emit('data', Buffer.from('c'));
        const osc = io.writes.join('').match(/\u001b\]52;c;([^\u0007]+)\u0007/g)?.at(-1);
        expect(osc).toBeDefined();
        const encoded = osc?.match(/\u001b\]52;c;([^\u0007]+)\u0007/)?.[1] ?? '';
        const copied = Buffer.from(encoded, 'base64').toString();
        expect(copied).toContain('event');
        expect(copied).not.toContain('PRIVATE HEADER');
        expect(copied).not.toContain('COPY VIEW');
        expect(copied.split('\n').length).toBeLessThanOrEqual(4);
        display.close();
    });

    test('emits JSONL without terminal controls when output is not a TTY', () => {
        const io = terminal(100, 12, false);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.section_start(start_event());
        display.section_complete({ section_id: 'page.md:2', duration_ms: 1200, units_completed: 1, attempts: 1, result: 'success' });
        display.section_skip({ file_path: 'cached.md', section_index: 1, section_count: 2, section_label: 'Cached section', reason: 'checkpoint reused' });
        display.close();
        const text = io.writes.join('');
        expect(text).not.toContain('\u001b');
        const records = text.trim().split('\n').map((line) => JSON.parse(line) as { type: string; event?: string });
        expect(records.map((record) => record.event)).toEqual(['section_start', 'section_complete', 'section_skip']);
    });

    test('copies the visible log when the footer control is clicked', () => {
        const io = terminal(100, 8);
        const display = new ProgressDisplay(stats(), 'Translation', io);
        display.log('info', 'visible event');
        io.input.emit('data', Buffer.from('\u001b[<0;1;8M'));
        const encoded = io.writes.join('').match(/\u001b\]52;c;([^\u0007]+)\u0007/)?.[1] ?? '';
        expect(Buffer.from(encoded, 'base64').toString()).toContain('visible event');
        display.close();
    });
});
