/** Shared contracts for the isolated documentation translation CLI. */

export interface TranslationTarget {
    readonly key: string;
    readonly api_id: string;
    readonly provider_base_url: string;
    readonly provider_api_key: string;
    readonly max_output_tokens: number;
    readonly context_window_tokens?: number;
    readonly context_window_source?: 'live-kilo' | 'environment-override';
    readonly context_window_warning?: string;
}

export interface ProxySource {
    resolve_stepfun_target(context_fallback_tokens?: number): Promise<TranslationTarget>;
    sample_paid_proxy_urls(count?: number): Promise<readonly string[]>;
    close(): Promise<void>;
}

export interface TranslationGateway {
    translate_segments(args: {
        readonly target: TranslationTarget;
        readonly proxy_urls: readonly string[];
        readonly system_prompt: string;
        readonly gateway_system_policy?: string;
        readonly user_prompt: string;
        readonly maximum_output_tokens: number;
        readonly signal: AbortSignal;
    }): Promise<{ readonly translated_segments: readonly string[]; readonly attempts: number }>;
}

export interface ExtractedPage {
    readonly protected_source: string;
    readonly segments: readonly string[];
    readonly protected_tokens_by_segment: readonly (readonly ProtectedMarkupToken[])[];
}

export interface ProtectedMarkupToken {
    readonly marker: string;
    readonly source: string;
    readonly part_index: number;
    readonly role?: 'link_open' | 'link_label_close' | 'link_close' | 'html_open' | 'html_close' | 'html_self' | 'html_tag_end' | 'attribute_open' | 'attribute_close' | 'yaml_plain_open' | 'yaml_plain_close';
    readonly tag_name?: string;
    readonly pair_id?: string;
    readonly paired_marker?: string;
    readonly requires_visible_content?: boolean;
}

export interface WorkItem {
    readonly relative_path: string;
    readonly source_path: string;
    readonly source_text: string;
    readonly source_hash: string;
}

export interface TranslationOptions {
    readonly source_root: string;
    readonly destination_root: string;
    readonly project_context_path: string;
    readonly concurrency: number;
    readonly context_window_tokens?: number;
    readonly overwrite: boolean;
    readonly dry_run: boolean;
    readonly target_language: string;
    readonly target_language_code?: string;
}

export interface RunStats {
    completed: number;
    skipped: number;
    blocked: number;
    failed: number;
    active: number;
    total: number;
}
