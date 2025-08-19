import type { Lang } from '../i18n/config';
import { REPOSITORY_URL, DESCRIPTION_IMAGE } from './site';

export type ScraperFaq = { q: string; a: string };

export type ScraperContent = {
	slug: string;
	name: string;
	title: Record<Lang, string>;
	description: Record<Lang, string>;
	ogImage?: string;
	demoImage: string;
	demoUrl: string;
	country: Record<Lang, string>;
	status: Record<Lang, string>;
	spiderPath: string; // relative path inside repo
	extractorPath: string; // relative path inside repo
	linesOfCode: number;
	domains: string[];
	implementedFeatures: Record<Lang, string[]>;
	techCommandLines: Record<Lang, string[]>; // lines for <code> block
	extractedData: Record<Lang, string[]>;
	faq: Record<Lang, ScraperFaq[]>;
};

export const SCRAPERS: Record<string, ScraperContent> = {
	zara: {
		slug: 'zara',
		name: 'ZARA',
		title: {
			es: 'Zara Scraper — Extrae datos de Zara por país/idioma',
			en: 'Zara Scraper — Extract Zara data by country/language',
		},
		description: {
			es: 'Scraper de Zara con soporte multi‑país y multi‑idioma usando Selenium, Scrapy y Scrapyd. Ideal para e‑commerce de moda.',
			en: 'Zara scraper with multi‑country and multi‑language support using Selenium, Scrapy and Scrapyd. Ideal for fashion e‑commerce.',
		},
		ogImage: DESCRIPTION_IMAGE || '/favicon.svg',
		demoImage: 'https://github.com/builker-col/stylos-scrapers/raw/master/media/zara-demo.gif',
		demoUrl: 'https://www.zara.com/co/',
		country: { es: 'Colombia', en: 'Colombia' },
		status: { es: 'Producción', en: 'Production' },
		spiderPath: 'stylos/spiders/zara.py',
		extractorPath: 'stylos/extractors/zara_extractor.py',
		linesOfCode: 596,
		domains: ['zara.com', 'www.zara.com', 'zara.net', 'static.zara.net', 'zara.com.co'],
		implementedFeatures: {
			es: [
				'Navegación completa de menús dinámicos (hamburguesa + categorías)',
				'Categorías: MUJER y HOMBRE con subcategorías completas',
				'Extracción avanzada: productos, precios, descripciones, imágenes',
				'Imágenes por color organizadas por variantes',
				'Scroll infinito con productos lazy-loaded',
				'Selenium integrado con anti-detección',
				'Sistema de precios con detección de descuentos',
			],
			en: [
				'Full navigation of dynamic menus (hamburger + categories)',
				'Categories: WOMEN and MEN with full subcategories',
				'Advanced extraction: products, prices, descriptions, images',
				'Images per color organized by variants',
				'Infinite scroll with lazy-loaded products',
				'Integrated Selenium with anti-detection',
				'Pricing system with discount detection',
			],
		},
		techCommandLines: {
			es: [
				'scrapy crawl zara                    # Scraping completo',
				'scrapy crawl zara -a url="URL"      # Producto específico',
				'scrapy crawl zara -o products.json  # Exportar resultados',
			],
			en: [
				'scrapy crawl zara                    # Full crawl',
				'scrapy crawl zara -a url="URL"      # Single product',
				'scrapy crawl zara -o products.json  # Export results',
			],
		},
		extractedData: {
			es: [
				'Nombre del producto normalizado',
				'Descripción completa',
				'Precio original y actual',
				'Porcentaje y monto de descuento',
				'Moneda detectada automáticamente',
				'URL canónica del producto',
				'Imágenes organizadas por color',
				'Metadatos de extracción (fecha, sitio)',
			],
			en: [
				'Normalized product name',
				'Full description',
				'Original and current price',
				'Discount percentage and amount',
				'Automatically detected currency',
				'Canonical product URL',
				'Images organized by color',
				'Extraction metadata (date, site)',
			],
		},
		faq: {
			es: [
				{ q: '¿Cómo ejecutar el Zara scraper?', a: 'Usa scrapy: "scrapy crawl zara" o con un producto específico: "scrapy crawl zara -a url=\"URL\"".' },
				{ q: '¿Qué datos extrae el Zara scraper?', a: 'Nombre, descripción, precio original y actual, descuentos, moneda, URL canónica, imágenes por color y metadatos.' },
				{ q: 'Docker Compose está levantado, ¿puedo correr el scraping con un script que se comunica con la API?', a: 'Sí. Usa el script control_scraper.py (se comunica con la API para orquestar el scraping).\n\nEjemplo (Colombia por defecto):\npython control_scraper.py --spider zara' },
			],
			en: [
				{ q: 'How to run the Zara scraper?', a: 'Use scrapy: "scrapy crawl zara" or for a single product: "scrapy crawl zara -a url=\"URL\"".' },
				{ q: 'What data does the Zara scraper extract?', a: 'Name, description, original/current price, discounts, currency, canonical URL, color images and metadata.' },
				{ q: 'Docker Compose is up, can I run scraping with a script that talks to the API?', a: 'Yes. Use the control_scraper.py script (it talks to the API to orchestrate scraping).\n\nExample (defaults to Colombia):\npython control_scraper.py --spider zara' },
			],
		},
	},
	mango: {
		slug: 'mango',
		name: 'MANGO',
		title: {
			es: 'Mango Scraper — Extrae datos de Mango',
			en: 'Mango Scraper — Extract Mango data',
		},
		description: {
			es: 'Scraper de Mango basado en Scrapy y Selenium. Ejecuta corridas completas o por producto.',
			en: 'Mango scraper powered by Scrapy and Selenium. Run full crawls or single product.',
		},
		ogImage: '/favicon.svg',
		demoImage: 'https://github.com/builker-col/stylos-scrapers/raw/master/media/mango-demo.gif',
		demoUrl: 'https://shop.mango.com/co/',
		country: { es: 'Colombia', en: 'Colombia' },
		status: { es: 'Producción', en: 'Production' },
		spiderPath: 'stylos/spiders/mango.py',
		extractorPath: 'stylos/extractors/mango_extractor.py',
		linesOfCode: 416,
		domains: ['shop.mango.com'],
		implementedFeatures: {
			es: [
				'Navegación por footer: categorías desde enlaces del footer',
				'Categorías: Mujer y Hombre con navegación completa',
				'Extracción avanzada: productos, precios, descripciones, imágenes',
				'Imágenes por color (máx 15 por color) con deduplicación',
				'Scroll progresivo hasta 30 intentos',
				'Selenium integrado con anti-detección',
				'Sistema de precios con detección de descuentos',
			],
			en: [
				'Footer navigation: categories from footer links',
				'Categories: Women and Men with full navigation',
				'Advanced extraction: products, prices, descriptions, images',
				'Images per color (max 15 per color) with deduplication',
				'Progressive scrolling up to 30 attempts',
				'Integrated Selenium with anti-detection',
				'Pricing system with discount detection',
			],
		},
		techCommandLines: {
			es: [
				'scrapy crawl mango                   # Scraping completo',
				'scrapy crawl mango -a url="URL"     # Producto específico',
				'scrapy crawl mango -o products.json # Exportar resultados',
			],
			en: [
				'scrapy crawl mango                   # Full crawl',
				'scrapy crawl mango -a url="URL"     # Single product',
				'scrapy crawl mango -o products.json # Export results',
			],
		},
		extractedData: {
			es: [
				'Nombre del producto normalizado',
				'Descripción completa',
				'Precio original y actual',
				'Porcentaje y monto de descuento',
				'Moneda detectada automáticamente (COP)',
				'URL canónica del producto',
				'Imágenes organizadas por color con detección de duplicados',
				'Metadatos de extracción (fecha, sitio)',
			],
			en: [
				'Normalized product name',
				'Full description',
				'Original and current price',
				'Discount percentage and amount',
				'Automatically detected currency (COP)',
				'Canonical product URL',
				'Images organized by color with duplicate detection',
				'Extraction metadata (date, site)',
			],
		},
		faq: {
			es: [
				{ q: '¿Cómo ejecutar el Mango scraper?', a: 'Usa scrapy: "scrapy crawl mango" o con un producto específico: "scrapy crawl mango -a url=\"URL\"".' },
				{ q: '¿Qué datos extrae el Mango scraper?', a: 'Nombre, descripción, precio original y actual, descuentos, moneda (COP), URL canónica, imágenes por color y metadatos.' },
				{ q: 'Docker Compose está levantado, ¿puedo correr el scraping con un script que se comunica con la API?', a: 'Sí. Usa el script control_scraper.py (se comunica con la API para orquestar el scraping).\n\nEjemplo (ejecución completa):\npython control_scraper.py --spider mango' },
			],
			en: [
				{ q: 'How to run the Mango scraper?', a: 'Use scrapy: "scrapy crawl mango" or for a single product: "scrapy crawl mango -a url=\"URL\"".' },
				{ q: 'What data does the Mango scraper extract?', a: 'Name, description, original/current price, currency (COP), canonical URL, color images and metadata.' },
				{ q: 'Docker Compose is up, can I run scraping with a script that talks to the API?', a: 'Yes. Use the control_scraper.py script (it talks to the API to orchestrate scraping).\n\nExample (full run):\npython control_scraper.py --spider mango' },
			],
		},
	},
};

export const SCRAPER_SLUGS: string[] = Object.keys(SCRAPERS);

export function getScraperBySlug(slug: string): ScraperContent | undefined {
	return SCRAPERS[slug];
}

export function buildRepoUrl(path: string): string {
	return `${REPOSITORY_URL}/blob/master/${path}`;
}


