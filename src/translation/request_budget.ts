export interface RequestBudgetResult {
    readonly request_limit_tokens: number;
    readonly context_limit_tokens: number;
    readonly maximum_output_tokens: number;
}

/** Keep request use below the service window while reserving room for the active answer. */
export function calculate_request_budget(args: {
    readonly context_window_tokens: number;
    readonly model_output_ceiling_tokens: number;
    readonly estimated_context_tokens: number;
    readonly estimated_input_tokens: number;
    readonly minimum_output_tokens: number;
    readonly request_margin_tokens?: number;
}): RequestBudgetResult {
    const request_limit_tokens = Math.floor(args.context_window_tokens * 0.9);
    const context_limit_tokens = Math.floor(request_limit_tokens * 0.7);
    const request_margin_tokens = args.request_margin_tokens ?? 256;

    if (!Number.isSafeInteger(request_limit_tokens) || request_limit_tokens <= 0 ||
        !Number.isSafeInteger(context_limit_tokens) || context_limit_tokens <= 0 ||
        !Number.isSafeInteger(args.model_output_ceiling_tokens) || args.model_output_ceiling_tokens <= 0 ||
        !Number.isSafeInteger(args.estimated_context_tokens) || args.estimated_context_tokens < 0 ||
        !Number.isSafeInteger(args.estimated_input_tokens) || args.estimated_input_tokens < 0 ||
        !Number.isSafeInteger(args.minimum_output_tokens) || args.minimum_output_tokens <= 0 ||
        !Number.isSafeInteger(request_margin_tokens) || request_margin_tokens < 0) {
        throw new Error('Context window must be a positive safe integer.');
    }
    if (args.estimated_context_tokens > context_limit_tokens) {
        throw new Error(`Full-page context requires ${args.estimated_context_tokens} tokens; the 70 percent context cap is ${context_limit_tokens}.`);
    }
    const available_output_tokens = request_limit_tokens - args.estimated_input_tokens - request_margin_tokens;
    if (available_output_tokens < args.minimum_output_tokens) {
        throw new Error(`Active section leaves only ${Math.max(0, available_output_tokens)} output tokens; at least ${args.minimum_output_tokens} are required.`);
    }
    if (args.model_output_ceiling_tokens < args.minimum_output_tokens) {
        throw new Error(`Active section requires at least ${args.minimum_output_tokens} output tokens; the model output ceiling is ${args.model_output_ceiling_tokens}.`);
    }

    return {
        request_limit_tokens,
        context_limit_tokens,
        maximum_output_tokens: Math.min(args.model_output_ceiling_tokens, available_output_tokens)
    };
}
