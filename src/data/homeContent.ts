import type { Lang } from '../i18n/config';

export type FeatureItem = { abbr: string; title: string; description: string };

export type HomeContent = {
	layout: { title: string; description: string };
	header: { github: string; githubAria: string; switchTo: string };
	badge: { openSource: string };
	hero: { titlePrefix: string; titleHighlight: string; titleSuffix: string; subtitle: string; cta: string };
	description: { title: string; body: string };
	/** High-level product capabilities visible to users */
	highlights: { title: string; subtitle: string; items: FeatureItem[] };
	features: { title: string; subtitle: string; items: FeatureItem[] };
	/** Available scrapers by website */
	scrapers: { title: string; subtitle?: string; items: { name: string; slug: string }[] };
	quickstart: {
		title: string;
		subtitle: string;
		steps: { title: string; lines: string[]; detailsTitle?: string; detailsLines?: string[] }[];
		services: string[];
		basic: { title: string; blocks: { title: string; lines: string[] }[] };
	};
	docs: { title: string; subtitle: string; items: { id: string; title: string; description: string; url?: string }[] };
	ecosystem: { badge: string; title: string; p1: string; p2: string };
	cta: { title: string; subtitle: string; button: string };
	footer: { text: string };
};

export const HOME_CONTENT: Record<Lang, HomeContent> = {
	es: {
		layout: {
			title: 'Stylos Scraper — Zara Scraper y Mango Scraper para E-commerce de Moda',
			description:
				'Solución profesional de web scraping distribuido para e-commerce de moda. Incluye Zara Scraper y Mango Scraper. Escalable, robusto y optimizado para grandes volúmenes de datos.',
		},
		header: {
			github: 'Ver en GitHub',
			githubAria: 'Ver proyecto en GitHub',
			switchTo: 'English',
		},
		badge: { openSource: 'PROYECTO OPEN SOURCE' },
		hero: {
			titlePrefix: 'La solución profesional de',
			titleHighlight: 'Web Scraping',
			titleSuffix: 'para E-commerce de Moda',
			subtitle:
				'Un sistema distribuido, escalable y robusto diseñado para la extracción masiva de datos, impulsando el ecosistema de IA de Stylos.',
			cta: 'Conocer más',
		},
		description: {
			title: '¿Qué es Stylos Scraper?',
			body:
				'Stylos Scraper es una solución profesional de web scraping distribuida, diseñada específicamente para la extracción masiva de datos de sitios de e-commerce de moda. Utiliza tecnologías avanzadas para crear un sistema escalable y robusto capaz de manejar múltiples sitios web simultáneamente.',
		},
		highlights: {
			title: 'Características Principales',
			subtitle: 'Listo para producción: escalable, observable y fácil de extender.',
			items: [
				{ abbr: '🌍', title: 'Soporte Multi‑País/Multi‑Idioma', description: 'Extracción internacional de Zara con parámetros dinámicos.' },
				{ abbr: '💱', title: 'Sistema Multi‑Moneda Automático', description: 'Detección automática de moneda por país (USD, EUR, COP, ...).' },
				{ abbr: '🎯', title: 'Extractors Modulares', description: 'Arquitectura pluggable para añadir nuevos retailers rápidamente.' },
				{ abbr: '🐳', title: 'Completamente Dockerizado', description: 'Arquitectura cloud‑native con orquestación por Docker Compose.' },
				{ abbr: '🚀', title: 'Scraping Distribuido', description: 'Automatización de navegadores en paralelo usando Selenium Grid.' },
				{ abbr: '🎮', title: 'CLI Avanzada', description: 'Agenda, lanza y monitorea trabajos desde la terminal.' },
				{ abbr: '📊', title: 'Monitoreo con Sentry', description: 'Trazabilidad de errores y performance de extremo a extremo.' },
				{ abbr: '⚡', title: 'Middlewares Avanzados', description: 'Gestión inteligente de requests y anti‑detección mejorada.' },
			],
		},
		scrapers: {
			title: 'Scrapers disponibles',
			subtitle: 'Por sitio web',
			items: [
				{ name: 'ZARA', slug: 'zara' },
				{ name: 'MANGO', slug: 'mango' },
			],
		},
		quickstart: {
			title: 'Inicio rápido',
			subtitle: 'Levanta la arquitectura distribuida en minutos.',
			steps: [
				{
					title: 'Clona el repositorio',
					lines: [
						'git clone https://github.com/builker-col/stylos-scrapers.git',
						'cd stylos-scrapers',
					],
				},
				{
					title: 'Crea tu archivo .env',
					lines: [
						'# Copia el ejemplo: cp .env.example .env',
						'# O crea uno nuevo con el siguiente contenido',
					],
					detailsTitle: 'Ejemplo de .env',
					detailsLines: [
						'# MongoDB Configuration (use host.docker.internal to connect from a container to the host)',
						'MONGO_URI=mongodb://host.docker.internal:27017',
						'MONGO_DATABASE=stylos_scrapers',
						'MONGO_COLLECTION=products',
						'',
						'# Selenium Grid Configuration',
						'SELENIUM_MODE=remote',
						'SELENIUM_HUB_URL=http://selenium-hub:4444/wd/hub',
						'',
						'# Scrapyd Configuration',
						'SCRAPYD_URL=http://scrapyd:6800',
						'PROJECT_NAME=stylos',
						'',
						'# Monitoring (Optional)',
						'SENTRY_DSN=',
						'SCRAPY_ENV=development',
					],
				},
				{
					title: 'Lanza la arquitectura',
					lines: [
						'docker-compose up --build -d',
					],
				},
			],
			services: [
				'✅ FastAPI → http://localhost:8000',
				'✅ Scrapyd → http://localhost:6800',
				'✅ Selenium Hub → http://localhost:4444',
			],
			basic: {
				title: 'Uso básico',
				blocks: [
					{ title: 'Zara (por defecto Colombia)', lines: ['python control_scraper.py --spider zara'] },
					{ title: 'Zara USA en inglés', lines: ['python control_scraper.py --spider zara --country us --lang en'] },
					{ title: 'Producto único (prueba)', lines: ['python control_scraper.py --spider zara --country us --lang en --url "https://www.zara.com/us/en/your-product-url.html"'] },
					{ title: 'Mango (completo)', lines: ['python control_scraper.py --spider mango'] },
				],
			},
		},
		docs: {
			title: 'Docs',
			subtitle: 'Documentación detallada para instalación, uso, contribución y licenciamiento.',
			items: [
				{ id: 'usage', title: 'Uso', description: 'Cómo configurar parámetros, ejecutar extractors y exportar resultados.', url: 'https://github.com/builker-col/stylos-scrapers#readme' },
				{ id: 'contrib', title: 'Contribución', description: 'Guía de estilo, flujo de ramas y cómo proponer nuevos extractors.', url: 'https://github.com/builker-col/stylos-scrapers/blob/master/CONTRIBUTING.md' },
				{ id: 'license', title: 'Licencia', description: 'Modelo de licenciamiento y consideraciones legales para scraping.', url: 'https://github.com/builker-col/stylos-scrapers/blob/master/LICENSE' },
				{ id: 'detailed', title: 'Docs detallados', description: 'Arquitectura, middlewares, monitoreo y mejores prácticas de escalado.', url: 'https://github.com/builker-col/stylos-scrapers#-detailed-documentation' },
			],
		},
		features: {
			title: 'Tecnologías Avanzadas',
			subtitle:
				'Construido sobre un stack tecnológico moderno y potente para garantizar el máximo rendimiento y escalabilidad.',
			items: [
				{ abbr: '🧪', title: 'Selenium Grid', description: 'Para la ejecución de pruebas y scraping en paralelo a través de múltiples máquinas y navegadores.' },
				{ abbr: '🕷️', title: 'Scrapyd', description: 'Servicio para desplegar y ejecutar spiders de Scrapy, gestionando los procesos de scraping.' },
				{ abbr: '⚡', title: 'FastAPI', description: 'Framework de alto rendimiento para construir la API que controla y monitorea los trabajos de scraping.' },
				{ abbr: '🐳', title: 'Docker', description: 'Para la contenerización de toda la aplicación, asegurando un despliegue fácil y consistente.' },
			],
		},
		ecosystem: {
			badge: 'PARTE DE ALGO MÁS GRANDE',
			title: 'El Ecosistema Stylos',
			p1: 'Este proyecto forma parte del ecosistema Stylos, una plataforma de inteligencia artificial que analiza tendencias de moda y genera recomendaciones personalizadas.',
			p2: 'Los datos extraídos por Stylos Scraper son el combustible que alimenta nuestros modelos de IA para identificar estilos como Old Money, Formal, Streetwear, y muchos más.',
		},
		cta: {
			title: '¿Listo para contribuir o usar el proyecto?',
			subtitle:
				'El código es completamente abierto. Explora el repositorio, reporta issues o haz tu primer pull request.',
			button: 'Ir al Repositorio',
		},
		footer: { text: '2025 Stylos Scraper. Un proyecto de Builker, para la comunidad.' },
	},
	en: {
		layout: {
			title: 'Stylos Scraper — Zara scraper and Mango scraper for Fashion E-commerce',
			description:
				'Professional distributed web scraping solution for fashion e-commerce. Includes Zara scraper and Mango scraper. Scalable, robust, and optimized for large datasets.',
		},
		header: {
			github: 'View on GitHub',
			githubAria: 'View project on GitHub',
			switchTo: 'Español',
		},
		badge: { openSource: 'OPEN SOURCE PROJECT' },
		hero: {
			titlePrefix: 'The professional',
			titleHighlight: 'Web Scraping',
			titleSuffix: 'solution for Fashion E-commerce',
			subtitle:
				'A distributed, scalable, and robust system designed for large-scale data extraction powering the Stylos AI ecosystem.',
			cta: 'Learn more',
		},
		description: {
			title: 'What is Stylos Scraper?',
			body:
				'Stylos Scraper is a professional distributed web scraping solution specifically designed for large-scale data extraction from fashion e-commerce websites. It leverages advanced technologies to build a scalable and robust system capable of handling multiple websites simultaneously.',
		},
		highlights: {
			title: 'Key Highlights',
			subtitle: 'Production‑ready: scalable, observable, and easy to extend.',
			items: [
				{ abbr: '🌍', title: 'Multi‑Country/Multi‑Language Support', description: 'International Zara extraction with dynamic parameters.' },
				{ abbr: '💱', title: 'Automatic Multi‑Currency', description: 'Automatic currency detection per country (USD, EUR, COP, ...).' },
				{ abbr: '🎯', title: 'Modular Extractors', description: 'Pluggable architecture to extend to new retailers quickly.' },
				{ abbr: '🐳', title: 'Fully Dockerized', description: 'Cloud‑native architecture orchestrated via Docker Compose.' },
				{ abbr: '🚀', title: 'Distributed Scraping', description: 'Parallel browser automation using Selenium Grid.' },
				{ abbr: '🎮', title: 'Advanced CLI', description: 'Schedule, launch, and monitor jobs from the terminal.' },
				{ abbr: '📊', title: 'Sentry Monitoring', description: 'End‑to‑end error and performance tracking.' },
				{ abbr: '⚡', title: 'Advanced Middlewares', description: 'Smart request management and improved anti‑detection.' },
			],
		},
		scrapers: {
			title: 'Available scrapers',
			subtitle: 'By website',
			items: [
				{ name: 'ZARA', slug: 'zara' },
				{ name: 'MANGO', slug: 'mango' },
			],
		},
		quickstart: {
			title: 'Quick Start',
			subtitle: 'Get the distributed architecture running in minutes.',
			steps: [
				{
					title: 'Clone the repository',
					lines: [
						'git clone https://github.com/builker-col/stylos-scrapers.git',
						'cd stylos-scrapers',
					],
				},
				{
					title: 'Create your .env file',
					lines: [
						'# Copy the example: cp .env.example .env',
						'# Or create a new one with the content below',
					],
					detailsTitle: 'Sample .env',
					detailsLines: [
						'# MongoDB Configuration (use host.docker.internal to connect from a container to the host)',
						'MONGO_URI=mongodb://host.docker.internal:27017',
						'MONGO_DATABASE=stylos_scrapers',
						'MONGO_COLLECTION=products',
						'',
						'# Selenium Grid Configuration',
						'SELENIUM_MODE=remote',
						'SELENIUM_HUB_URL=http://selenium-hub:4444/wd/hub',
						'',
						'# Scrapyd Configuration',
						'SCRAPYD_URL=http://scrapyd:6800',
						'PROJECT_NAME=stylos',
						'',
						'# Monitoring (Optional)',
						'SENTRY_DSN=',
						'SCRAPY_ENV=development',
					],
				},
				{
					title: 'Launch the architecture',
					lines: [
						'docker-compose up --build -d',
					],
				},
			],
			services: [
				'✅ FastAPI → http://localhost:8000',
				'✅ Scrapyd → http://localhost:6800',
				'✅ Selenium Hub → http://localhost:4444',
			],
			basic: {
				title: 'Basic Usage',
				blocks: [
					{ title: 'Zara (defaults to Colombia)', lines: ['python control_scraper.py --spider zara'] },
					{ title: 'Zara US in English', lines: ['python control_scraper.py --spider zara --country us --lang en'] },
					{ title: 'Single product (testing)', lines: ['python control_scraper.py --spider zara --country us --lang en --url "https://www.zara.com/us/en/your-product-url.html"'] },
					{ title: 'Mango (full run)', lines: ['python control_scraper.py --spider mango'] },
				],
			},
		},
		docs: {
			title: 'Docs',
			subtitle: 'Detailed documentation for setup, usage, contribution, and licensing.',
			items: [
				{ id: 'usage', title: 'Usage', description: 'How to configure parameters, run extractors, and export results.', url: 'https://github.com/builker-col/stylos-scrapers#readme' },
				{ id: 'contrib', title: 'Contributing', description: 'Style guide, branching model, and how to propose new extractors.', url: 'https://github.com/builker-col/stylos-scrapers/blob/master/CONTRIBUTING.md' },
				{ id: 'license', title: 'License', description: 'Licensing model and legal considerations for scraping.', url: 'https://github.com/builker-col/stylos-scrapers/blob/master/LICENSE' },
				{ id: 'detailed', title: 'Detailed Docs', description: 'Architecture, middlewares, monitoring, and scaling best practices.', url: 'https://github.com/builker-col/stylos-scrapers#-detailed-documentation' },
			],
		},
		features: {
			title: 'Advanced Technologies',
			subtitle:
				'Built on a modern and powerful tech stack to ensure maximum performance and scalability.',
			items: [
				{ abbr: '🧪', title: 'Selenium Grid', description: 'Parallelized scraping and testing across multiple machines and browsers.' },
				{ abbr: '🕷️', title: 'Scrapyd', description: 'Service to deploy and run Scrapy spiders, managing scraping processes.' },
				{ abbr: '⚡', title: 'FastAPI', description: 'High-performance framework to build the API that controls and monitors scraping jobs.' },
				{ abbr: '🐳', title: 'Docker', description: 'Containerization for easy and consistent deployments across environments.' },
			],
		},
		ecosystem: {
			badge: 'PART OF SOMETHING BIGGER',
			title: 'The Stylos Ecosystem',
			p1: 'This project is part of the Stylos ecosystem, an AI platform that analyzes fashion trends and produces personalized recommendations.',
			p2: 'Data extracted by Stylos Scraper fuels our AI models to identify styles such as Old Money, Formal, Streetwear, and many more.',
		},
		cta: {
			title: 'Ready to contribute or use the project?',
			subtitle:
				'The code is fully open. Explore the repository, report issues, or make your first pull request.',
			button: 'Go to Repository',
		},
		footer: { text: '2025 Stylos Scraper. A project by Builker, for the community.' },
	},
};


