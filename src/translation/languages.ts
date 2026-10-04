/** Shared Ethnologue 2026 total-speaker order, excluding the English source language. */
export const TOP_LANGUAGES = [
    { rank: 2, code: 'zh', name: 'Mandarin Chinese' },
    { rank: 3, code: 'hi', name: 'Hindi' },
    { rank: 4, code: 'es', name: 'Spanish' },
    { rank: 5, code: 'ar', name: 'Modern Standard Arabic' },
    { rank: 6, code: 'fr', name: 'French' },
    { rank: 7, code: 'bn', name: 'Bengali' },
    { rank: 8, code: 'pt', name: 'Portuguese' },
    { rank: 9, code: 'id', name: 'Indonesian' },
    { rank: 10, code: 'ur', name: 'Urdu' },
    { rank: 11, code: 'ru', name: 'Russian' },
    { rank: 12, code: 'de', name: 'Standard German' },
    { rank: 13, code: 'ja', name: 'Japanese' },
    { rank: 14, code: 'pcm', name: 'Nigerian Pidgin' },
    { rank: 15, code: 'arz', name: 'Egyptian Arabic' },
    { rank: 16, code: 'mr', name: 'Marathi' },
    { rank: 17, code: 'vi', name: 'Vietnamese' },
    { rank: 18, code: 'te', name: 'Telugu' },
    { rank: 19, code: 'sw', name: 'Swahili' },
    { rank: 20, code: 'ha', name: 'Hausa' },
    { rank: 21, code: 'tr', name: 'Turkish' },
    { rank: 22, code: 'pnb', name: 'Western Punjabi' },
    { rank: 23, code: 'tl', name: 'Tagalog' },
    { rank: 24, code: 'ta', name: 'Tamil' },
    { rank: 25, code: 'yue', name: 'Yue Chinese' },
    { rank: 26, code: 'wuu', name: 'Wu Chinese' },
    { rank: 27, code: 'fa', name: 'Iranian Persian' },
    { rank: 28, code: 'ko', name: 'Korean' },
    { rank: 29, code: 'am', name: 'Amharic' },
    { rank: 30, code: 'th', name: 'Thai' }
] as const;

export type TranslationLanguage = typeof TOP_LANGUAGES[number];

/** Resolve an exact locale code or language name. */
export function find_language(value: string): TranslationLanguage | undefined {
    const normalized = value.trim().toLocaleLowerCase('en');
    return TOP_LANGUAGES.find((language) =>
        language.code.toLocaleLowerCase('en') === normalized ||
        language.name.toLocaleLowerCase('en') === normalized
    );
}
