import type { Lang } from '../i18n/config';

export type LocalizedLabel = Record<Lang, string>;

export type NavItem = {
	/** Section id without the leading # */
	id: string;
	href: string;
	label: LocalizedLabel;
};

export const NAV_ITEMS: NavItem[] = [
	{ id: 'hero', href: '#hero', label: { es: 'Inicio', en: 'Home' } },
	{ id: 'highlights', href: '#highlights', label: { es: 'Características', en: 'Highlights' } },
	{ id: 'scrapers', href: '#scrapers', label: { es: 'Scrapers', en: 'Scrapers' } },
	{ id: 'quickstart', href: '#quickstart', label: { es: 'Inicio rápido', en: 'Quick Start' } },
	{ id: 'features', href: '#features', label: { es: 'Tecnología', en: 'Tech' } },
	{ id: 'docs', href: '#docs', label: { es: 'Docs', en: 'Docs' } },
	{ id: 'ecosystem', href: '#ecosystem', label: { es: 'Ecosistema', en: 'Ecosystem' } },
	{ id: 'github', href: '#github', label: { es: 'GitHub', en: 'GitHub' } },
];


