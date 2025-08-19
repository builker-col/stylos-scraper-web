import type { Lang } from './config';

export type FeatureItem = { abbr: string; title: string; description: string };

export type Dictionary = {
	layout: { title: string; description: string };
	header: { github: string; githubAria: string; switchTo: string };
	badge: { openSource: string };
	hero: {
		titlePrefix: string;
		titleHighlight: string;
		titleSuffix: string;
		subtitle: string;
		cta: string;
	};
	description: { title: string; body: string };
	features: { title: string; subtitle: string; items: FeatureItem[] };
	ecosystem: { badge: string; title: string; p1: string; p2: string };
	cta: { title: string; subtitle: string; button: string };
	footer: { text: string };
};

const es: Dictionary = {
	layout: {
		title: 'Stylos Scraper — Web Scraping para E-commerce de Moda',
		description:
			'Solución profesional de web scraping distribuido para e-commerce de moda. Escalable, robusto y optimizado para grandes volúmenes de datos.',
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
	features: {
		title: 'Tecnologías Avanzadas',
		subtitle:
			'Construido sobre un stack tecnológico moderno y potente para garantizar el máximo rendimiento y escalabilidad.',
		items: [
			{ abbr: 'Se', title: 'Selenium Grid', description: 'Para la ejecución de pruebas y scraping en paralelo a través de múltiples máquinas y navegadores.' },
			{ abbr: 'Sp', title: 'Scrapyd', description: 'Servicio para desplegar y ejecutar spiders de Scrapy, gestionando los procesos de scraping.' },
			{ abbr: 'Fa', title: 'FastAPI', description: 'Framework de alto rendimiento para construir la API que controla y monitorea los trabajos de scraping.' },
			{ abbr: 'Do', title: 'Docker', description: 'Para la contenerización de toda la aplicación, asegurando un despliegue fácil y consistente.' },
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
	footer: { text: '2024 Stylos Scraper. Un proyecto de la comunidad para la comunidad.' },
};

const en: Dictionary = {
	layout: {
		title: 'Stylos Scraper — Web Scraping for Fashion E-commerce',
		description:
			'Professional distributed web scraping solution for fashion e-commerce. Scalable, robust, and optimized for large datasets.',
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
	features: {
		title: 'Advanced Technologies',
		subtitle:
			'Built on a modern and powerful tech stack to ensure maximum performance and scalability.',
		items: [
			{ abbr: 'Se', title: 'Selenium Grid', description: 'Parallelized scraping and testing across multiple machines and browsers.' },
			{ abbr: 'Sp', title: 'Scrapyd', description: 'Service to deploy and run Scrapy spiders, managing scraping processes.' },
			{ abbr: 'Fa', title: 'FastAPI', description: 'High-performance framework to build the API that controls and monitors scraping jobs.' },
			{ abbr: 'Do', title: 'Docker', description: 'Containerization for easy and consistent deployments across environments.' },
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
	footer: { text: '2024 Stylos Scraper. A project by the community, for the community.' },
};

const DICTIONARIES: Record<Lang, Dictionary> = { es, en } as const;

export default DICTIONARIES;


