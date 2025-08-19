import type { APIRoute } from 'astro';

function getSiteOrigin(url: URL): string {
	const fromEnv = (import.meta.env.SITE as string | undefined) || (process.env.SITE as string | undefined);
	if (fromEnv) return fromEnv.replace(/\/$/, '');
	return `${url.protocol}//${url.host}`.replace(/\/$/, '');
}

export const prerender = true;

export const GET: APIRoute = async ({ url }) => {
	const origin = getSiteOrigin(url);
	const lines: string[] = [];
	lines.push('User-agent: *');
	lines.push('Allow: /');
	lines.push('');
	lines.push('# Bloqueos típicos');
	lines.push('Disallow: /_astro/');
	lines.push('Disallow: /api/');
	lines.push('');
	lines.push('# Sitemaps');
	lines.push(`Sitemap: ${origin}/sitemap.xml`);

	return new Response(lines.join('\n') + '\n', {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=UTF-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};


