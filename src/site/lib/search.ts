/** Ranking for the quick page search. */

export type Page = { title: string; url: string; headings: string };

/** Pages containing every word, best first: title matches beat address and heading matches. */
export function search_pages(pages: Page[], query: string, limit = 12): Page[] {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    const scored: { page: Page; score: number }[] = [];
    for (const page of pages) {
        const title = page.title.toLowerCase();
        const url = page.url.toLowerCase();
        const headings = page.headings.toLowerCase();
        let score = 0;
        const all = words.every((word) => {
            const points = (title.startsWith(word) ? 14 : title.includes(word) ? 10 : 0)
                + (url.includes(word) ? 4 : 0)
                + (headings.includes(word) ? 2 : 0);
            score += points;
            return points > 0;
        });
        if (all) scored.push({ page, score: score - title.length / 200 });
    }
    return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((entry) => entry.page);
}
