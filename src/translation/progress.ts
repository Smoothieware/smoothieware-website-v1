import type { RunStats } from './types';

const ESC = '\u001b';
const RESET = `${ESC}[0m`;
const COLORS = { info: `${ESC}[36m`, success: `${ESC}[32m`, warning: `${ESC}[33m`, error: `${ESC}[31m` };
const CONTEXT_COLORS = [`${ESC}[34m`, `${ESC}[36m`, `${ESC}[35m`, `${ESC}[33m`, `${ESC}[32m`, `${ESC}[90m`];
const LANGUAGE_FLAG_REGIONS: Record<string, string> = {
    zh: 'CN', hi: 'IN', es: 'ES', ar: 'SA', fr: 'FR', bn: 'BD', pt: 'PT', id: 'ID',
    ur: 'PK', ru: 'RU', de: 'DE', ja: 'JP', pcm: 'NG', arz: 'EG', mr: 'IN', vi: 'VN',
    te: 'IN', sw: 'TZ', ha: 'NG', tr: 'TR', pnb: 'PK', tl: 'PH', ta: 'IN', yue: 'HK',
    wuu: 'CN', fa: 'IR', ko: 'KR', am: 'ET', th: 'TH'
};

/** Return the familiar regional flag used to represent a target language. */
export function language_flag(target_language_code?: string): string {
    if (!target_language_code) return '';
    const region = LANGUAGE_FLAG_REGIONS[target_language_code.toLocaleLowerCase('en')];
    if (!region) return '';
    return Array.from(region, (letter) => String.fromCodePoint(0x1f1e6 + letter.charCodeAt(0) - 65)).join('');
}

/** Estimated token allocation for a section request. */
export interface SectionContextComposition {
    instruction_tokens: number;
    source_file_tokens: number;
    active_section_tokens: number;
    related_files_tokens: number;
    output_reservation_tokens: number;
    free_capacity_tokens: number;
    total_tokens: number;
}

/** Three-row section start event. */
export interface SectionStartEvent {
    section_id: string;
    file_path: string;
    section_index: number;
    section_count: number;
    section_label: string;
    worker_index: number;
    related_file_count: number;
    unit_count?: number;
    context: SectionContextComposition;
}

/** Two-row section result event. */
export interface SectionCompleteEvent {
    section_id: string;
    duration_ms: number;
    units_completed: number;
    attempts: number;
    result: 'success' | 'skipped' | 'blocked' | 'failed';
    message?: string;
}

/** A section restored from a checkpoint without a new provider request. */
export interface SectionSkipEvent {
    file_path: string;
    section_index: number;
    section_count: number;
    section_label: string;
    reason: string;
}

interface DisplayOutput {
    isTTY?: boolean; columns?: number; rows?: number;
    write(value: string): boolean;
    on(event: 'resize', handler: () => void): unknown;
    off(event: 'resize', handler: () => void): unknown;
}

interface DisplayInput {
    isTTY?: boolean; isRaw?: boolean;
    setRawMode?(enabled: boolean): unknown;
    resume(): unknown; pause(): unknown;
    on(event: 'data', handler: (data: Buffer) => void): unknown;
    off(event: 'data', handler: (data: Buffer) => void): unknown;
}

export interface ProgressDisplayIO { output: DisplayOutput; input: DisplayInput; }
interface EventRow { plain: string; styled?: string; }

/** Full-screen TTY dashboard with a JSONL fallback for redirected output. */
export class ProgressDisplay {
    private readonly output: DisplayOutput;
    private readonly input: DisplayInput;
    private readonly is_tty: boolean;
    private readonly original_raw: boolean;
    private readonly rows: EventRow[] = [];
    private readonly active_section_ids = new Set<string>();
    private readonly page_section_counts = new Map<string, number>();
    private readonly section_stats = { completed: 0, skipped: 0, blocked: 0, failed: 0, active: 0, seen: 0 };
    private visible_log_rows: EventRow[] = [];
    private scroll_from_bottom = 0;
    private is_closed = false;
    private readonly resize_handler = (): void => { this.draw(); };
    private readonly data_handler = (data: Buffer): void => { this.handle_input(data.toString('utf8')); };
    private readonly exit_handler = (): void => { this.close(); };
    private readonly interrupt_handler = (): void => { this.close(); process.exit(130); };
    private readonly terminate_handler = (): void => { this.close(); process.exit(143); };

    constructor(private readonly stats: RunStats, private readonly title = 'Smoothieware docs → French', io?: ProgressDisplayIO, target_language_code?: string) {
        const target_flag = language_flag(target_language_code);
        this.title = target_flag ? `${target_flag} ${title}` : title;
        this.output = io?.output ?? process.stdout;
        this.input = io?.input ?? process.stdin;
        this.is_tty = Boolean(this.output.isTTY);
        this.original_raw = Boolean(this.input.isRaw);
        if (!this.is_tty) return;
        this.output.write(`${ESC}[?1049h${ESC}[?25l`);
        this.output.on('resize', this.resize_handler);
        if (this.input.isTTY && this.input.setRawMode) {
            this.input.setRawMode(true);
            this.input.resume();
            this.input.on('data', this.data_handler);
            this.output.write(`${ESC}[?1000h${ESC}[?1006h`);
        }
        process.once('exit', this.exit_handler);
        process.once('SIGINT', this.interrupt_handler);
        process.once('SIGTERM', this.terminate_handler);
        this.draw();
    }

    /** Update active worker count. */
    set_active(active: number): void {
        this.stats.active = active;
        if (this.is_tty) this.draw();
        else this.emit_json({ type: 'progress', level: 'info', timestamp: new Date().toISOString(), message: `active workers ${active}`, stats: this.stats });
    }

    /** Append a sanitised event and retain its history. */
    log(level: 'info' | 'success' | 'warning' | 'error', message: string): void {
        const timestamp = new Date().toISOString().replace('T', ' ').replace('Z', ' UTC');
        const safe_message = sanitize_log(message);
        if (!this.is_tty) {
            this.emit_json({ type: 'progress', level, timestamp, message: safe_message, stats: this.stats });
            return;
        }
        this.append_rows([{ plain: `${timestamp} ${level.toUpperCase()} ${safe_message}`, styled: `${COLORS[level]}${timestamp} ${level.toUpperCase()}${RESET} ${safe_message}` }]);
    }

    /** Append section identity, context allocation legend, and colorized bar. */
    section_start(event: SectionStartEvent): void {
        this.remember_page_sections(event.file_path, event.section_count);
        if (!this.active_section_ids.has(event.section_id)) {
            this.active_section_ids.add(event.section_id);
            this.section_stats.seen += 1;
            this.section_stats.active += 1;
        }
        if (!this.is_tty) {
            this.emit_json({ type: 'progress', event: 'section_start', timestamp: new Date().toISOString(), ...event, stats: this.stats, section_stats: this.section_stats, known_sections: this.known_section_total() });
            return;
        }
        const context = event.context;
        const identity = `START  worker ${event.worker_index + 1}  ${sanitize_log(event.file_path)}  section ${event.section_index}/${event.section_count}  ${sanitize_log(event.section_label)}`;
        const legend = (this.output.columns ?? 80) < 150
            ? `CTX≈ I${context.instruction_tokens} F${context.source_file_tokens} S${context.active_section_tokens} R${context.related_files_tokens} O${context.output_reservation_tokens} free${context.free_capacity_tokens} /${context.total_tokens}`
            : `CTX est.  instruction ${context.instruction_tokens}  full file ${context.source_file_tokens}  active ${context.active_section_tokens}  related ${context.related_files_tokens} (${event.related_file_count} files)  output ${context.output_reservation_tokens}  free ${context.free_capacity_tokens} / ${context.total_tokens}`;
        this.append_rows([{ plain: identity }, { plain: legend }, this.composition_bar(context)]);
    }

    /** Count a checkpoint-reused section without implying that it made a provider request. */
    section_skip(event: SectionSkipEvent): void {
        this.remember_page_sections(event.file_path, event.section_count);
        this.section_stats.skipped += 1;
        this.section_stats.seen += 1;
        if (!this.is_tty) {
            this.emit_json({ type: 'progress', event: 'section_skip', timestamp: new Date().toISOString(), ...event, stats: this.stats, section_stats: this.section_stats, known_sections: this.known_section_total() });
            return;
        }
        const message = `SKIP SECTION ${sanitize_log(event.file_path)} ${event.section_index}/${event.section_count} ${sanitize_log(event.section_label)} — ${sanitize_log(event.reason)}`;
        this.append_rows([{ plain: message, styled: `${COLORS.warning}${message}${RESET}` }]);
    }

    /** Append section duration, units, attempts, and outcome. */
    section_complete(event: SectionCompleteEvent): void {
        if (this.active_section_ids.delete(event.section_id)) {
            this.section_stats.active = Math.max(0, this.section_stats.active - 1);
            const result_key = event.result === 'success' ? 'completed' : event.result;
            this.section_stats[result_key] += 1;
        }
        if (!this.is_tty) {
            this.emit_json({ type: 'progress', event: 'section_complete', timestamp: new Date().toISOString(), ...event, stats: this.stats, section_stats: this.section_stats, known_sections: this.known_section_total() });
            return;
        }
        const duration = Number.isFinite(event.duration_ms) ? `${(Math.max(0, event.duration_ms) / 1000).toFixed(2)} s` : '? s';
        const details = `DONE   ${sanitize_log(event.section_id)}  ${duration}  ${event.units_completed} units  ${event.attempts} attempts`;
        const result = `RESULT ${event.result.toUpperCase()}${event.message ? `  ${sanitize_log(event.message)}` : ''}`;
        const color = event.result === 'success' ? COLORS.success : event.result === 'skipped' ? COLORS.warning : COLORS.error;
        this.append_rows([{ plain: details }, { plain: result, styled: `${color}${result}${RESET}` }]);
    }

    /** Return every retained unstyled event row. */
    get_log_rows(): string[] { return this.rows.map((row) => row.plain); }

    /** Paint exactly one terminal-height frame, including fixed header and footer. */
    draw(): void {
        if (!this.is_tty || this.is_closed) return;
        const width = Math.max(1, Math.min(500, this.output.columns ?? 80));
        const height = Math.max(1, this.output.rows ?? 24);
        const finished = this.stats.completed + this.stats.skipped + this.stats.blocked + this.stats.failed;
        const percent = this.stats.total === 0 ? 100 : Math.min(100, Math.floor(finished / this.stats.total * 100));
        const bar_width = Math.max(1, Math.min(40, width - 20));
        const filled = Math.floor(percent / 100 * bar_width);
        const header: EventRow[] = [
            { plain: this.title, styled: `${COLORS.info}${this.title}${RESET}` },
            { plain: `${'█'.repeat(filled)}${'░'.repeat(bar_width - filled)}  ${percent}%  PAGES ${finished}/${this.stats.total}` },
            { plain: `PAGES done ${this.stats.completed}  skipped ${this.stats.skipped}  blocked ${this.stats.blocked}  failed ${this.stats.failed}  active ${this.stats.active}` },
            { plain: `SECTIONS ${this.section_stats.seen}/${this.known_section_total()} known  done ${this.section_stats.completed}  skipped ${this.section_stats.skipped}  blocked ${this.section_stats.blocked}  failed ${this.section_stats.failed}  active ${this.section_stats.active}` }
        ];
        const all_legend_rows = this.context_legend(width);
        const legend_count = Math.min(all_legend_rows.length, Math.max(0, height - 2));
        const legend_rows = all_legend_rows.slice(0, legend_count);
        const header_count = Math.min(4, Math.max(0, height - legend_count - 1));
        const viewport_height = Math.max(0, height - header_count - legend_count - 1);
        this.scroll_from_bottom = Math.min(this.scroll_from_bottom, Math.max(0, this.rows.length - viewport_height));
        const end = this.rows.length - this.scroll_from_bottom;
        const start = Math.max(0, end - viewport_height);
        this.visible_log_rows = this.rows.slice(start, end);
        const footer = ` [COPY VIEW: c or click]  ↑/↓ PgUp/PgDn Home/End  ${start + (this.visible_log_rows.length ? 1 : 0)}-${end}/${this.rows.length}`;
        const screen: EventRow[] = [...header.slice(0, header_count), ...this.visible_log_rows];
        while (screen.length < height - legend_count - 1) screen.push({ plain: '' });
        screen.push(...legend_rows);
        screen.push({ plain: footer });
        const painted = screen.map((row) => {
            const plain = fit_width(row.plain, width);
            return `${ESC}[2K${ESC}[1G${row.styled && plain === row.plain ? row.styled : plain}`;
        });
        this.output.write(`${ESC}[H${painted.join('\n')}`);
    }

    /** Restore cursor, main screen, mouse mode, and original stdin mode. */
    close(): void {
        if (this.is_closed) return;
        this.is_closed = true;
        if (!this.is_tty) return;
        this.output.off('resize', this.resize_handler);
        if (this.input.isTTY && this.input.setRawMode) {
            this.input.off('data', this.data_handler);
            this.input.setRawMode(this.original_raw);
            if (!this.original_raw) this.input.pause();
        }
        process.off('exit', this.exit_handler);
        process.off('SIGINT', this.interrupt_handler);
        process.off('SIGTERM', this.terminate_handler);
        this.output.write(`${ESC}[?1006l${ESC}[?1000l${ESC}[?25h${ESC}[?1049l`);
    }

    private emit_json(record: Record<string, unknown>): void { this.output.write(`${JSON.stringify(record)}\n`); }

    private append_rows(rows: EventRow[]): void {
        this.rows.push(...rows);
        if (this.scroll_from_bottom > 0) this.scroll_from_bottom += rows.length;
        this.draw();
    }

    /** Keep the number of planned sections known for every page encountered so far. */
    private remember_page_sections(file_path: string, section_count: number): void {
        const previous_count = this.page_section_counts.get(file_path) ?? 0;
        this.page_section_counts.set(file_path, Math.max(previous_count, Math.max(0, section_count)));
    }

    /** Sum planned sections for pages that have entered this run so far. */
    private known_section_total(): number {
        return Array.from(this.page_section_counts.values()).reduce((total, count) => total + count, 0);
    }

    /** Explain the context graph colors in fixed rows above the bottom controls. */
    private context_legend(width: number): EventRow[] {
        const items = [
            { label: 'Instruction', color: CONTEXT_COLORS[0]!, marker: '■' },
            { label: 'Full file', color: CONTEXT_COLORS[1]!, marker: '■' },
            { label: 'Active section', color: CONTEXT_COLORS[2]!, marker: '■' },
            { label: 'Related files', color: CONTEXT_COLORS[3]!, marker: '■' },
            { label: 'Output reserve', color: CONTEXT_COLORS[4]!, marker: '■' },
            { label: 'Free capacity', color: CONTEXT_COLORS[5]!, marker: '░' }
        ];
        const groups = width >= 120
            ? [items]
            : width >= 80
                ? [items.slice(0, 3), items.slice(3)]
                : [items.slice(0, 2), items.slice(2, 4), items.slice(4)];
        return groups.map((group, index) => {
            const prefix = index === 0 ? 'COLOR KEY  ' : '';
            const plain = `${prefix}${group.map((item) => `${item.marker} ${item.label}`).join('   ')}`;
            const styled = `${prefix}${group.map((item) => `${item.color}${item.marker}${RESET} ${item.label}`).join('   ')}`;
            return { plain, styled };
        });
    }

    private composition_bar(context: SectionContextComposition): EventRow {
        const values = [context.instruction_tokens, context.source_file_tokens, context.active_section_tokens,
            context.related_files_tokens, context.output_reservation_tokens, context.free_capacity_tokens]
            .map((value) => Math.max(0, Number.isFinite(value) ? value : 0));
        const width = Math.max(1, Math.min(495, (this.output.columns ?? 80) - 6));
        const denominator = Math.max(context.total_tokens, values.reduce((sum, value) => sum + value, 0), 1);
        const labels = ['I', 'F', 'S', 'R', 'O', '.'];
        let plain = 'MAP  ';
        let styled = 'MAP  ';
        let assigned = 0;
        let cumulative = 0;
        for (const [index, value] of values.entries()) {
            cumulative += value;
            const target = Math.min(width, Math.round(cumulative / denominator * width));
            const count = Math.max(0, target - assigned);
            plain += labels[index]!.repeat(count);
            styled += `${CONTEXT_COLORS[index]}${'█'.repeat(count)}${RESET}`;
            assigned = target;
        }
        if (assigned < width) { plain += '.'.repeat(width - assigned); styled += `${CONTEXT_COLORS[5]}${'░'.repeat(width - assigned)}${RESET}`; }
        return { plain, styled };
    }

    private handle_input(input: string): void {
        const viewport = Math.max(1, (this.output.rows ?? 24) - 4);
        if (input === 'c' || input === 'C') { this.copy_view(); return; }
        if (input.includes(`${ESC}[<`)) {
            const match = input.match(/\u001b\[<(\d+);(\d+);(\d+)([mM])/);
            if (match) {
                const button = Number(match[1]);
                if (button === 64) this.scroll_from_bottom += 3;
                else if (button === 65) this.scroll_from_bottom = Math.max(0, this.scroll_from_bottom - 3);
                else if (button === 0 && match[4] === 'M' && Number(match[3]) === (this.output.rows ?? 24)) { this.copy_view(); return; }
                this.draw();
            }
            return;
        }
        if (input === `${ESC}[5~` || input === `${ESC}[A` || input === 'k') this.scroll_from_bottom += input === `${ESC}[5~` ? viewport : 1;
        else if (input === `${ESC}[6~` || input === `${ESC}[B` || input === 'j') this.scroll_from_bottom = Math.max(0, this.scroll_from_bottom - (input === `${ESC}[6~` ? viewport : 1));
        else if (input === `${ESC}[H` || input === `${ESC}[1~`) this.scroll_from_bottom = this.rows.length;
        else if (input === `${ESC}[F` || input === `${ESC}[4~`) this.scroll_from_bottom = 0;
        else if (input === '\u0003') { this.close(); process.exit(130); }
        this.draw();
    }

    private copy_view(): void {
        const width = Math.max(1, Math.min(500, this.output.columns ?? 80));
        const text = this.visible_log_rows.map((row) => fit_width(row.plain, width)).join('\n');
        this.output.write(`${ESC}]52;c;${Buffer.from(text).toString('base64')}\u0007`);
    }
}

/** Remove credential-shaped and terminal-control text from event content. */
function sanitize_log(message: string): string {
    return message
        .replace(/(?:https?|socks5?):\/\/[^\s]+/giu, '[proxy URL redacted]')
        .replace(/(api[_ -]?key|password|authorization)\s*[:=]\s*[^\s,;]+/giu, '$1=[redacted]')
        .replace(/[\u001b\u0000-\u001f\u007f]/gu, ' ')
        .replace(/\s+/gu, ' ')
        .slice(0, 300);
}

/** Fit plain content into one row, leaving the last column unused. */
function fit_width(value: string, width: number): string {
    const safe = value.replace(/[\u001b\u0000-\u001f\u007f]/gu, ' ');
    const limit = Math.max(0, width - 1);
    let cells = 0;
    let result = '';
    for (const character of safe) {
        const point = character.codePointAt(0) ?? 0;
        const is_combining = /\p{Mark}/u.test(character) || point === 0x200d;
        const is_wide = (point >= 0x1100 && point <= 0x115f) ||
            (point >= 0x2e80 && point <= 0xa4cf) ||
            (point >= 0xac00 && point <= 0xd7a3) ||
            (point >= 0xf900 && point <= 0xfaff) ||
            (point >= 0xfe10 && point <= 0xfe6f) ||
            (point >= 0xff01 && point <= 0xff60) ||
            (point >= 0x1f300 && point <= 0x1faff);
        const character_cells = is_combining ? 0 : is_wide ? 2 : 1;
        if (cells + character_cells > limit) break;
        result += character;
        cells += character_cells;
    }
    return result;
}
