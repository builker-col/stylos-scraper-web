# Stylos Scraper Web

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/builker-col/stylos-scrapers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-3.0-blueviolet)](https://astro.build/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6)](https://www.typescriptlang.org/)

**Stylos Scraper Web** es una aplicación web moderna y de código abierto que sirve como frontend para el proyecto [Stylos Scrapers](https://github.com/builker-col/stylos-scrapers). Esta aplicación web está diseñada para mostrar los scrapers disponibles, su estado, características y cómo utilizarlos.

## 🚀 Demo en Vivo

Puedes ver una demostración en vivo de la aplicación en [stylos-scraper.web.app](https://stylos-scraper.web.app/).

## ✨ Características

- **Interfaz de Usuario Moderna:** Construida con Astro y Vue.js para una experiencia de usuario rápida y fluida.
- **Internacionalización (i18n):** Soporte para múltiples idiomas (Español e Inglés).
- **Diseño Responsivo:** Totalmente adaptable a dispositivos móviles y de escritorio.
- **Componentes Reutilizables:** Uso de componentes de Vue.js para una fácil mantenibilidad.
- **SEO Optimizado:** Generación de sitemaps y metaetiquetas para un mejor posicionamiento en buscadores.
- **Demostraciones de Scrapers:** Páginas dedicadas para cada scraper con información detallada.

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build/): Framework web para construir sitios rápidos y optimizados.
- [Vue.js](https://vuejs.org/): Framework progresivo de JavaScript para construir interfaces de usuario.
- [TypeScript](https://www.typescriptlang.org/): Superset de JavaScript que añade tipado estático.
- [Tailwind CSS](https://tailwindcss.com/): Framework de CSS para un diseño rápido y personalizado.

## 🏁 Cómo Empezar

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/builker-col/stylos-scraper-web.git
    cd stylos-scraper-web
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:4321`.

## 📁 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
.
├── public/                # Archivos estáticos (imágenes, favicons, etc.)
├── src/
│   ├── assets/            # Activos (imágenes, SVGs, etc.)
│   ├── components/        # Componentes de Vue.js
│   ├── data/              # Datos de la aplicación (contenido, scrapers, etc.)
│   ├── i18n/              # Configuración de internacionalización
│   ├── layouts/           # Plantillas de Astro
│   ├── pages/             # Páginas de Astro
│   └── styles/            # Estilos globales
├── astro.config.mjs       # Configuración de Astro
├── package.json           # Dependencias y scripts del proyecto
└── tsconfig.json          # Configuración de TypeScript
```

## 🕷️ Scrapers Disponibles

Actualmente, la aplicación web muestra información sobre los siguientes scrapers:

- **Zara:** Scraper para extraer datos de productos de Zara.
- **Mango:** Scraper para extraer datos de productos de Mango.

Cada scraper tiene su propia página de detalles con información sobre su estado, características, dominios y más.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor, sigue estos pasos:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3.  Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4.  Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5.  Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](https://opensource.org/licenses/MIT).