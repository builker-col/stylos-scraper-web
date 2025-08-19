import DICTIONARIES from './dictionaries';
import { DEFAULT_LANG, SUPPORTED_LANGUAGES, type Lang } from './config';

export function normalizeLang(input: string | undefined | null): Lang {
	const value = (input || '').toLowerCase();
	return (SUPPORTED_LANGUAGES as readonly string[]).includes(value) ? (value as Lang) : DEFAULT_LANG;
}

export function getI18n(inputLang: string | undefined) {
	const lang = normalizeLang(inputLang);
	return { lang, dict: DICTIONARIES[lang] } as const;
}


