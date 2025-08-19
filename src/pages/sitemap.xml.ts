import type { APIRoute } from 'astro';
import { SUPPORTED_LANGUAGES, DEFAULT_LANG } from '../i18n/config';

// Helper to get site origin from environment or Astro config fallback
function getSiteOrigin(url: URL): string {
	const fromEnv = (import.meta.env.SITE as string | undefined) || (process.env.SITE as string | undefined);
	if (fromEnv) return fromEnv.replace(/\/$/, '');
	// Fallback to incoming request origin when running in preview/dev
	return `${url.protocol}//${url.host}`.replace(/\/$/, '');
}

export const prerender = true;

export const GET: APIRoute = async ({ url }) => {
	const origin = getSiteOrigin(url);
	const now = new Date().toISOString().slice(0, 10);

	// Build the minimal set of URLs we currently have: localized home pages
	const urls: { loc: string; lastmod?: string; changefreq?: string; priority?: string }[] = [];

	SUPPORTED_LANGUAGES.forEach((lang) => {
		urls.push({
			loc: `${origin}/${lang}/`,
			lastmod: now,
			changefreq: 'weekly',
			priority: lang === DEFAULT_LANG ? '1.0' : '0.8',
		});
	});

	const xmlItems = urls
		.map((u) =>
			`  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod ?? now}</lastmod>\n    <changefreq>${u.changefreq ?? 'weekly'}</changefreq>\n    <priority>${u.priority ?? '0.8'}</priority>\n  </url>`,
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlItems}\n</urlset>\n`;

	return new Response(xml, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml; charset=UTF-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};


