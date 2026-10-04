import { TRANSLATION_GATEWAY_SYSTEM_POLICY } from './style_contract';
import type { TranslationGateway, TranslationTarget } from './types';

const REQUEST_TIMEOUT_MILLISECONDS = 240_000;
const MAXIMUM_RESPONSE_BYTES = 8 * 1024 * 1024;

type BunFetch = (input: string | URL | Request, init?: RequestInit & { proxy?: string }) => Promise<Response>;

/** OpenAI-compatible Kilo Gateway transport that cannot issue a direct request. */
export class KiloGatewayClient implements TranslationGateway {
    constructor(private readonly fetch_implementation: BunFetch = fetch as BunFetch) {}

    /** Request one ordered group of prose segments and retry through paid routes only. */
    async translate_segments(args: {
        readonly target: TranslationTarget;
        readonly proxy_urls: readonly string[];
        readonly system_prompt: string;
        readonly gateway_system_policy?: string;
        readonly user_prompt: string;
        readonly maximum_output_tokens: number;
        readonly signal: AbortSignal;
    }): Promise<{ readonly translated_segments: readonly string[]; readonly attempts: number }> {
        if (args.proxy_urls.length === 0) throw new Error('No paid proxy routes were supplied; direct egress is forbidden.');
        const failures: string[] = [];
        for (const [index, proxy_url] of args.proxy_urls.entries()) {
            if (args.signal.aborted) throw new Error('Translation request cancelled.');
            let response: Response;
            try {
                response = await this.fetch_implementation(
                    `${args.target.provider_base_url.replace(/\/+$/u, '')}/v1/chat/completions`,
                    {
                        method: 'POST',
                        headers: request_headers(args.target),
                        body: JSON.stringify({
                            model: args.target.api_id,
                            messages: [
                                { role: 'system', content: `${args.gateway_system_policy ?? TRANSLATION_GATEWAY_SYSTEM_POLICY}\n\n${args.system_prompt}` },
                                { role: 'user', content: args.user_prompt }
                            ],
                            max_tokens: args.maximum_output_tokens,
                            temperature: 0.1
                        }),
                        signal: AbortSignal.any([args.signal, AbortSignal.timeout(REQUEST_TIMEOUT_MILLISECONDS)]),
                        proxy: proxy_url
                    }
                );
            } catch (error: unknown) {
                if (args.signal.aborted) throw new Error('Translation request cancelled.');
                failures.push(`attempt ${index + 1}: ${safe_error(error)}`);
                continue;
            }
            if (!response.ok) {
                await response.body?.cancel().catch(() => undefined);
                if (!is_retryable(response.status)) throw new Error(`Kilo Gateway returned non-retryable HTTP ${response.status}.`);
                failures.push(`attempt ${index + 1}: HTTP ${response.status}`);
                continue;
            }
            const body_text = await capped_text(response, MAXIMUM_RESPONSE_BYTES);
            if (body_text === null) {
                failures.push(`attempt ${index + 1}: response exceeded ${MAXIMUM_RESPONSE_BYTES} bytes`);
                continue;
            }
            const parsed = parse_response(body_text);
            if (parsed === null) {
                failures.push(`attempt ${index + 1}: invalid OpenAI-compatible response`);
                continue;
            }
            const translations = parse_translation_array(parsed);
            if (translations === null) {
                failures.push(`attempt ${index + 1}: response did not satisfy the requested translation JSON shape`);
                continue;
            }
            return { translated_segments: translations, attempts: index + 1 };
        }
        throw new Error(`Kilo Gateway failed through ${args.proxy_urls.length} paid proxy routes: ${failures.join('; ')}`);
    }
}

/** Provide provider authorization only in the outbound request headers. */
function request_headers(target: TranslationTarget): Record<string, string> {
    const headers: Record<string, string> = { 'content-type': 'application/json' };
    if (target.provider_api_key !== '') headers.authorization = `Bearer ${target.provider_api_key}`;
    return headers;
}

/** Read a bounded response body without allowing error pages to flood logs. */
async function capped_text(response: Response, maximum_bytes: number): Promise<string | null> {
    if (response.body === null) return '';
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const text_chunks: string[] = [];
    let received_bytes = 0;
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value === undefined) continue;
        received_bytes += value.byteLength;
        if (received_bytes > maximum_bytes) {
            await reader.cancel().catch(() => undefined);
            return null;
        }
        text_chunks.push(decoder.decode(value, { stream: true }));
    }
    text_chunks.push(decoder.decode());
    return text_chunks.join('');
}

/** Parse the OpenAI-style choices envelope; invalid responses are eligible for route retry. */
function parse_response(text: string): string | null {
    try {
        const decoded: unknown = JSON.parse(text);
        if (typeof decoded !== 'object' || decoded === null) return null;
        const choices = (decoded as { choices?: unknown }).choices;
        if (!Array.isArray(choices) || typeof choices[0] !== 'object' || choices[0] === null) return null;
        const message = (choices[0] as { message?: unknown }).message;
        if (typeof message !== 'object' || message === null) return null;
        const content = (message as { content?: unknown }).content;
        return typeof content === 'string' ? content : null;
    } catch {
        return null;
    }
}

/** Accept only an array with the exact expected string count. */
function parse_translation_array(content: string): readonly string[] | null {
    try {
        const normalized_content = content.trim().replace(/^```(?:json)?\s*/iu, '').replace(/\s*```$/u, '');
        const decoded: unknown = JSON.parse(normalized_content);
        if (typeof decoded !== 'object' || decoded === null) return null;
        const translations = (decoded as { translations?: unknown }).translations;
        if (!Array.isArray(translations) || !translations.every((value: unknown) => typeof value === 'string')) return null;
        return translations as string[];
    } catch {
        return null;
    }
}

/** Retry transient transport, throttling, and server errors only. */
function is_retryable(status: number): boolean {
    return status === 408 || status === 425 || status === 429 || status >= 500;
}

/** Redact URLs and bound network exception text before it reaches the operator log. */
function safe_error(error: unknown): string {
    return error instanceof Error && error.name === 'AbortError' ? 'request aborted' : 'network request failed';
}
