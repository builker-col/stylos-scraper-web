export const SUPPORTED_LANGUAGES = ['es', 'en'] as const;
export type Lang = typeof SUPPORTED_LANGUAGES[number];

export const DEFAULT_LANG: Lang = 'es';

export const OG_LOCALE: Record<Lang, string> = {
	es: 'es_ES',
	en: 'en_US',
};


