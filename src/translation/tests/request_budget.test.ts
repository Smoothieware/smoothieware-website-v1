import { describe, expect, it } from 'bun:test';
import { calculate_request_budget } from '../request_budget';

describe('request context and output budgets', () => {
    it('reserves 10 percent of the model window and caps context at 70 percent of that budget', () => {
        const result = calculate_request_budget({
            context_window_tokens: 256_000,
            model_output_ceiling_tokens: 256_000,
            estimated_context_tokens: 150_000,
            estimated_input_tokens: 170_000,
            minimum_output_tokens: 1_000
        });

        expect(result.request_limit_tokens).toBe(230_400);
        expect(result.context_limit_tokens).toBe(161_280);
        expect(result.maximum_output_tokens).toBe(60_144);
    });

    it('rejects a page context that exceeds the 70 percent context cap', () => {
        expect(() => calculate_request_budget({
            context_window_tokens: 256_000,
            model_output_ceiling_tokens: 256_000,
            estimated_context_tokens: 161_281,
            estimated_input_tokens: 180_000,
            minimum_output_tokens: 1_000
        })).toThrow('Full-page context requires 161281 tokens');
    });

    it('rejects an active section when the remaining request space cannot hold its response', () => {
        expect(() => calculate_request_budget({
            context_window_tokens: 256_000,
            model_output_ceiling_tokens: 256_000,
            estimated_context_tokens: 140_000,
            estimated_input_tokens: 229_000,
            minimum_output_tokens: 2_000
        })).toThrow('leaves only 1144 output tokens');
    });

    it('caps the call output at both the model ceiling and remaining request space', () => {
        const result = calculate_request_budget({
            context_window_tokens: 256_000,
            model_output_ceiling_tokens: 32_000,
            estimated_context_tokens: 100_000,
            estimated_input_tokens: 120_000,
            minimum_output_tokens: 2_000
        });

        expect(result.maximum_output_tokens).toBe(32_000);
    });

    it('rejects a model whose output ceiling cannot hold the active section', () => {
        expect(() => calculate_request_budget({
            context_window_tokens: 1_000_000,
            model_output_ceiling_tokens: 65_536,
            estimated_context_tokens: 421_272,
            estimated_input_tokens: 510_000,
            minimum_output_tokens: 90_368
        })).toThrow('model output ceiling is 65536');
    });
});
