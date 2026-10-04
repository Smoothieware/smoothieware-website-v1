import { MongoClient, type Db } from 'mongodb';
import type { ProxySource, TranslationTarget } from './types';

const STEP_FUN_MODEL_KEY = 'kilo-gw-stepfun-37-flash';
const MAXIMUM_PROXY_ATTEMPTS = 10;
const LIVE_MODELS_URL = 'https://api.kilo.ai/api/gateway/models';

interface ModelRow {
    readonly key: string;
    readonly api_id: string;
    readonly provider_id: number;
    readonly max_output_tokens: number;
    readonly context_window_tokens?: number;
    readonly context_length?: number;
    readonly enabled?: boolean;
    readonly deprecated?: boolean;
}

interface ProviderRow {
    readonly id: number;
    readonly name: string;
    readonly base_url: string;
    readonly api_key?: string;
    readonly enabled?: boolean;
    readonly can_serve_relay?: boolean;
}

interface PaidProxyRow {
    readonly ip: string;
    readonly port: number;
    readonly protocol: string;
    readonly username: string;
    readonly password: string;
    readonly enabled: boolean;
}

/** Read-only Money catalog adapter, isolated from application databases. */
export class MoneyCatalog implements ProxySource {
    private constructor(private readonly mongo_client: MongoClient, private readonly money_database: Db) {}

    /** Connect to the configured Money database without echoing its URI. */
    static async connect(mongodb_uri: string): Promise<MoneyCatalog> {
        const client = new MongoClient(mongodb_uri, { appName: 'smoothieware-docs-translator' });
        try {
            await client.connect();
            return new MoneyCatalog(client, client.db('money'));
        } catch (error: unknown) {
            await client.close().catch(() => undefined);
            throw new Error(`Could not connect to the configured Money catalog: ${safe_error(error)}`);
        }
    }

    /** Resolve the enabled StepFun model and its provider from Money's catalog. */
    async resolve_stepfun_target(context_fallback_tokens?: number): Promise<TranslationTarget> {
        const model = await this.money_database.collection<ModelRow>('llm_models').findOne({ key: STEP_FUN_MODEL_KEY });
        if (model === null) throw new Error(`Money catalog is missing model ${STEP_FUN_MODEL_KEY}.`);
        if (model.enabled === false || model.deprecated === true) throw new Error(`Money model ${STEP_FUN_MODEL_KEY} is disabled or deprecated.`);
        if (!Number.isInteger(model.max_output_tokens) || model.max_output_tokens <= 0) {
            throw new Error(`Money model ${STEP_FUN_MODEL_KEY} has no valid max_output_tokens value.`);
        }
        const provider = await this.money_database.collection<ProviderRow>('llm_providers').findOne({ id: model.provider_id });
        if (provider === null || provider.name !== 'kilo_gateway' || provider.enabled === false || provider.can_serve_relay === false) {
            throw new Error(`Money provider for ${STEP_FUN_MODEL_KEY} is not an enabled Kilo relay provider.`);
        }
        if (provider.base_url.trim() === '') throw new Error('Money Kilo provider has an empty base URL.');
        let context_window_tokens: number;
        let context_window_source: 'live-kilo' | 'environment-override';
        let context_window_warning: string | undefined;
        try {
            const proxy_urls = await this.sample_paid_proxy_urls(MAXIMUM_PROXY_ATTEMPTS);
            const live_model = await this.fetch_live_model(model.api_id, proxy_urls);
            context_window_tokens = live_model.context_length;
            context_window_source = 'live-kilo';
        } catch (error: unknown) {
            if (context_fallback_tokens === undefined || !Number.isInteger(context_fallback_tokens) || context_fallback_tokens <= 0) throw error;
            context_window_tokens = context_fallback_tokens;
            context_window_source = 'environment-override';
            context_window_warning = error instanceof Error ? error.message : 'Live model metadata unavailable.';
        }
        return {
            key: model.key,
            api_id: model.api_id,
            provider_base_url: provider.base_url,
            provider_api_key: provider.api_key ?? '',
            max_output_tokens: model.max_output_tokens,
            context_window_tokens,
            context_window_source,
            context_window_warning
        };
    }

    /** Read StepFun's current context window from Kilo's models endpoint through paid proxies. */
    private async fetch_live_model(api_id: string, proxy_urls: readonly string[]): Promise<{ context_length: number }> {
        const failures: string[] = [];
        for (const [index, proxy_url] of proxy_urls.entries()) {
            try {
                const response = await fetch(LIVE_MODELS_URL, { signal: AbortSignal.timeout(30_000), proxy: proxy_url } as RequestInit & { proxy: string });
                if (!response.ok) {
                    failures.push(`proxy attempt ${index + 1}: HTTP ${response.status}`);
                    continue;
                }
                const payload: unknown = await response.json();
                const rows = read_model_rows(payload);
                const model = rows.find((row) => row.id === api_id);
                if (model === undefined) throw new Error(`Live Kilo model catalog does not contain configured StepFun API id ${api_id}.`);
                if (!Number.isInteger(model.context_length) || model.context_length <= 0) throw new Error(`Live Kilo metadata for ${api_id} has no valid context_length.`);
                return { context_length: model.context_length };
            } catch (error: unknown) {
                if (error instanceof Error && error.message.startsWith('Live Kilo')) throw error;
                failures.push(`proxy attempt ${index + 1}: ${safe_error(error)}`);
            }
        }
        throw new Error(`Could not resolve StepFun context length from the live Kilo model catalog through paid proxies: ${failures.join('; ')}`);
    }

    /** Sample up to ten enabled routes without replacement for this page request. */
    async sample_paid_proxy_urls(count: number = MAXIMUM_PROXY_ATTEMPTS): Promise<readonly string[]> {
        const limit = Math.max(1, Math.min(MAXIMUM_PROXY_ATTEMPTS, Math.floor(count)));
        const rows = await this.money_database.collection<PaidProxyRow>('paid_proxies').aggregate<PaidProxyRow>([
            { $match: { enabled: true } },
            { $sample: { size: limit } },
            { $project: { _id: 0, ip: 1, port: 1, protocol: 1, username: 1, password: 1, enabled: 1 } }
        ]).toArray();
        if (rows.length === 0) throw new Error('Money has no enabled paid proxies; direct egress is forbidden.');
        return rows.map(format_proxy_url);
    }

    /** Close the isolated Mongo client after all translation workers stop. */
    async close(): Promise<void> {
        await this.mongo_client.close();
    }
}

/** Encode credentials before forming the proxy URL; callers must never log its result. */
function format_proxy_url(proxy: PaidProxyRow): string {
    const credentials = proxy.username !== '' && proxy.password !== ''
        ? `${encodeURIComponent(proxy.username)}:${encodeURIComponent(proxy.password)}@`
        : '';
    return `${proxy.protocol}://${credentials}${proxy.ip}:${proxy.port}`;
}

/** Validate the minimal live Kilo catalog response fields used by this CLI. */
function read_model_rows(payload: unknown): readonly { id: string; context_length: number }[] {
    if (typeof payload !== 'object' || payload === null || !Array.isArray((payload as { data?: unknown }).data)) {
        throw new Error('Live Kilo model catalog returned an unexpected response shape.');
    }
    const rows: Array<{ id: string; context_length: number }> = [];
    for (const value of (payload as { data: unknown[] }).data) {
        if (typeof value !== 'object' || value === null) continue;
        const row = value as { id?: unknown; context_length?: unknown };
        if (typeof row.id === 'string' && typeof row.context_length === 'number') rows.push({ id: row.id, context_length: row.context_length });
    }
    return rows;
}

/** Remove possible credentials and long provider response detail from connection errors. */
function safe_error(error: unknown): string {
    const message = error instanceof Error ? error.message : 'unknown connection error';
    return message.replace(/(?:mongodb(?:\+srv)?:\/\/)[^\s]+/giu, '[MongoDB URI redacted]').slice(0, 300);
}
