import { describe, expect, it } from 'bun:test';
import { create_translation_prompt, estimate_tokens } from '../context';
import { KiloGatewayClient } from '../kilo_gateway';
import { TRANSLATION_STYLE_CONTRACT } from '../style_contract';

describe('paid-proxy Kilo transport', () => {
    it('sends the full configured output ceiling through a sampled proxy and parses the segment response', async () => {
        let captured_request: RequestInit & { proxy?: string } | undefined;
        let captured_body: Record<string, unknown> | undefined;
        const client = new KiloGatewayClient(async (_input, init) => {
            captured_request = init;
            captured_body = JSON.parse(String(init?.body)) as Record<string, unknown>;
            return Response.json({ choices: [{ message: { content: JSON.stringify({ translations: ['Bonjour'] }) } }] });
        });
        const result = await client.translate_segments({
            target: { key: 'kilo-gw-stepfun-37-flash', api_id: 'stepfun/step-3.7-flash:free', provider_base_url: 'https://gateway.invalid', provider_api_key: 'secret', max_output_tokens: 123456 },
            proxy_urls: ['http://proxy.invalid:9000'], system_prompt: 'system', user_prompt: 'prompt',
            maximum_output_tokens: 123456, signal: new AbortController().signal
        });
        expect(captured_request?.proxy).toBe('http://proxy.invalid:9000');
        expect(captured_body?.max_tokens).toBe(123456);
        const messages = captured_body?.messages as { role: string; content: string }[] | undefined;
        expect(messages?.length).toBe(2);
        expect(messages?.[0]?.role).toBe('system');
        expect(messages?.[0]?.content).toContain(TRANSLATION_STYLE_CONTRACT);
        expect(messages?.[0]?.content.endsWith('\n\nsystem')).toBe(true);
        expect(messages?.[1]).toEqual({ role: 'user', content: 'prompt' });
        expect(result.translated_segments).toEqual(['Bonjour']);
        expect(result.attempts).toBe(1);
    });

    it('refuses calls without a paid proxy route', async () => {
        const client = new KiloGatewayClient(async () => Response.json({}));
        await expect(client.translate_segments({
            target: { key: 'stepfun', api_id: 'stepfun/model', provider_base_url: 'https://gateway.invalid', provider_api_key: '', max_output_tokens: 100 },
            proxy_urls: [], system_prompt: '', user_prompt: '', maximum_output_tokens: 100, signal: new AbortController().signal
        })).rejects.toThrow('direct egress is forbidden');
    });

    it('uses the fixing policy when supplied by the review runner', async () => {
        let captured_body: { messages?: { role: string; content: string }[] } | undefined;
        const client = new KiloGatewayClient(async (_input, init) => {
            captured_body = JSON.parse(String(init?.body)) as typeof captured_body;
            return Response.json({ choices: [{ message: { content: JSON.stringify({ translations: ['Bonjour'] }) } }] });
        });
        await client.translate_segments({
            target: { key: 'fake', api_id: 'fake', provider_base_url: 'https://gateway.invalid', provider_api_key: '', max_output_tokens: 100 },
            proxy_urls: ['http://proxy.invalid:9000'], gateway_system_policy: 'Fix the existing translation carefully.',
            system_prompt: 'Review one page.', user_prompt: 'English and translated units.',
            maximum_output_tokens: 100, signal: new AbortController().signal
        });
        expect(captured_body?.messages?.[0]?.content).toBe('Fix the existing translation carefully.\n\nReview one page.');
        expect(captured_body?.messages?.[1]?.content).toBe('English and translated units.');
    });

    it('stops reading an oversized response at the byte ceiling', async () => {
        let source_cancelled = false;
        const client = new KiloGatewayClient(async () => new Response(new ReadableStream<Uint8Array>({
            pull(controller) {
                controller.enqueue(new Uint8Array(8 * 1024 * 1024 + 1));
            },
            cancel() { source_cancelled = true; }
        })));
        await expect(client.translate_segments({
            target: { key: 'stepfun', api_id: 'stepfun/model', provider_base_url: 'https://gateway.invalid', provider_api_key: '', max_output_tokens: 100 },
            proxy_urls: ['http://proxy.invalid:9000'], system_prompt: '', user_prompt: '', maximum_output_tokens: 100,
            signal: new AbortController().signal
        })).rejects.toThrow('response exceeded 8388608 bytes');
        expect(source_cancelled).toBe(true);
    });

    it('carries generated style and target/reference boundaries into a fake gateway request', async () => {
        for (const language of ['French', 'German']) {
            const segments = ['TARGETONLY: Yep. Maybe.', 'In summary: really, really.'];
            const prompt = create_translation_prompt({
                relative_path: 'target.md',
                language,
                context: '[REFERENCE ONLY: other.md; do not translate this page]\nREFERENCEONLY: Please proceed formally.',
                segments
            });
            let captured_request: RequestInit & { proxy?: string } | undefined;
            let captured_body: Record<string, unknown> | undefined;
            let calls = 0;
            const client = new KiloGatewayClient(async (_input, init) => {
                calls += 1;
                captured_request = init;
                captured_body = JSON.parse(String(init?.body)) as Record<string, unknown>;
                return Response.json({ choices: [{ message: { content: JSON.stringify({ translations: ['stub one', 'stub two'] }) } }] });
            });
            const result = await client.translate_segments({
                target: { key: 'stepfun', api_id: 'stepfun/model', provider_base_url: 'https://gateway.invalid', provider_api_key: '', max_output_tokens: 100 },
                proxy_urls: ['http://proxy.invalid:9000'], ...prompt,
                maximum_output_tokens: 100, signal: new AbortController().signal
            });
            const messages = captured_body?.messages as { role: string; content: string }[] | undefined;
            expect(calls).toBe(1);
            expect(messages?.length).toBe(2);
            expect(messages?.[0]?.role).toBe('system');
            expect(messages?.[0]?.content).toContain(TRANSLATION_STYLE_CONTRACT);
            expect(messages?.[0]?.content.endsWith(`\n\n${prompt.system_prompt}`)).toBe(true);
            expect(messages?.[0]?.content).toContain('make no HTTP, web, search, or external network calls');
            expect(messages?.[0]?.content).toContain('Translate only the supplied target translation units.');
            expect(messages?.[0]?.content).toContain('Context pages are reference only and must not be translated or reproduced.');
            expect(messages?.[0]?.content).toContain('Return exactly one JSON object {"translations":[...]} with one translated string per input unit, preserving unit count and array order.');
            expect(messages?.[0]?.content).toContain('Do not add commentary or markdown fences.');
            expect(messages?.[0]?.content).not.toContain('REFERENCEONLY');
            expect(messages?.[0]?.content).not.toContain('TARGETONLY');
            expect(messages?.[1]).toEqual({ role: 'user', content: prompt.user_prompt });
            expect(captured_request?.method).toBe('POST');
            expect(captured_request?.proxy).toBe('http://proxy.invalid:9000');
            expect(captured_body?.model).toBe('stepfun/model');
            expect(captured_body?.max_tokens).toBe(100);
            expect(captured_body?.temperature).toBe(0.1);
            expect(result).toEqual({ translated_segments: ['stub one', 'stub two'], attempts: 1 });
        }
    });

    it('measures fixed prompt overhead above the old fixed 1,500-token assumption', async () => {
        const segments = ['x'];
        const prompt = create_translation_prompt({ relative_path: 'target.md', language: 'French', context: '', segments });
        let captured_body: Record<string, unknown> | undefined;
        const client = new KiloGatewayClient(async (_input, init) => {
            captured_body = JSON.parse(String(init?.body)) as Record<string, unknown>;
            return Response.json({ choices: [{ message: { content: JSON.stringify({ translations: ['x'] }) } }] });
        });
        await client.translate_segments({
            target: { key: 'stepfun', api_id: 'stepfun/model', provider_base_url: 'https://gateway.invalid', provider_api_key: '', max_output_tokens: 100 },
            proxy_urls: ['http://proxy.invalid:9000'], ...prompt,
            maximum_output_tokens: 100, signal: new AbortController().signal
        });
        const messages = captured_body?.messages as { role: string; content: string }[] | undefined;
        const fixed_prompt_tokens = estimate_tokens(messages?.[0]?.content ?? '')
            + estimate_tokens(messages?.[1]?.content ?? '')
            - estimate_tokens(JSON.stringify(segments));
        expect(fixed_prompt_tokens).toBeGreaterThan(1_500);
    });
});
