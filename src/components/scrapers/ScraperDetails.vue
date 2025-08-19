<script setup lang="ts">
import CodeBlock from '../ui/CodeBlock.vue';

type Props = {
	lang: 'es' | 'en';
	name: string;
	demoUrl: string;
	country: string;
	status: string;
	spiderPath: string;
	spiderUrl: string;
	extractorPath: string;
	extractorUrl: string;
	linesOfCode: number;
	domains: string[];
	features: string[];
	techLines: string[];
	extractedData: string[];
	otherSlug?: string;
	faq?: { q: string; a: string }[];
};

const props = defineProps<Props>();
</script>

<template>
	<div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="bg-gray-900/60 p-6 rounded-2xl border border-gray-800">
				<h2 class="text-xl font-semibold text-white mb-3">{{ lang === 'es' ? 'Información' : 'Details' }}</h2>
				<ul class="text-gray-300 space-y-2 text-sm">
					<li><strong>{{ lang === 'es' ? 'Demo' : 'Demo' }}:</strong> <a :href="demoUrl" class="text-emerald-400 hover:underline" target="_blank" rel="noreferrer">{{ demoUrl }}</a></li>
					<li><strong>{{ lang === 'es' ? 'País' : 'Country' }}:</strong> {{ country }}</li>
					<li><strong>{{ lang === 'es' ? 'Estado' : 'Status' }}:</strong> ✅ {{ status }}</li>
					<li><strong>Python:</strong> <a :href="spiderUrl" target="_blank" rel="noreferrer" class="text-emerald-400 hover:underline">{{ spiderPath }}</a></li>
					<li><strong>Extractor:</strong> <a :href="extractorUrl" target="_blank" rel="noreferrer" class="text-emerald-400 hover:underline">{{ extractorPath }}</a></li>
					<li><strong>{{ lang === 'es' ? 'Líneas de código' : 'Lines of code' }}:</strong> {{ linesOfCode }}</li>
					<li><strong>{{ lang === 'es' ? 'Dominios' : 'Domains' }}:</strong> {{ domains.join(', ') }}</li>
				</ul>
			</div>
			<div class="bg-gray-900/60 p-6 rounded-2xl border border-gray-800">
				<h2 class="text-xl font-semibold text-white mb-3">{{ lang === 'es' ? 'Características Implementadas' : 'Implemented Features' }}</h2>
				<ul class="list-disc list-inside text-gray-300 space-y-2 text-sm">
					<li v-for="(f, idx) in features" :key="idx">{{ f }}</li>
				</ul>
			</div>
		</div>

		<div class="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 mt-6">
			<h2 class="text-xl font-semibold text-white mb-3">{{ lang === 'es' ? 'Capacidades Técnicas' : 'Technical Capabilities' }}</h2>
			<CodeBlock :lines="techLines" :copy-label="lang === 'es' ? 'Copiar' : 'Copy'" :copied-label="lang === 'es' ? 'Copiado' : 'Copied'" />
		</div>
		<div class="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 mt-6">
			<h2 class="text-xl font-semibold text-white mb-3">{{ lang === 'es' ? 'Datos Extraídos' : 'Extracted Data' }}</h2>
			<ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
				<li v-for="(d, idx) in extractedData" :key="idx">{{ d }}</li>
			</ul>
		</div>

		<div v-if="faq?.length" class="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 mt-6">
			<h2 class="text-xl font-semibold text-white mb-3">FAQ</h2>
			<div class="divide-y divide-gray-800">
				<details v-for="(f, idx) in faq" :key="idx" class="py-3 group">
					<summary class="cursor-pointer text-white font-medium flex items-center justify-between">
						<span>{{ f.q }}</span>
						<span class="text-emerald-400 group-open:rotate-180 transition-transform">⌄</span>
					</summary>
					<p class="text-gray-300 mt-2">{{ f.a }}</p>
				</details>
			</div>
		</div>

		<div v-if="otherSlug" class="mt-8 text-sm text-gray-400">
			<p v-if="lang === 'es'">¿Buscas también <a :href="`/${lang}/scrapers/${otherSlug}/`" class="text-emerald-400 hover:underline">{{ otherSlug[0].toUpperCase() + otherSlug.slice(1) }} scraper</a>?</p>
			<p v-else>Also looking for <a :href="`/${lang}/scrapers/${otherSlug}/`" class="text-emerald-400 hover:underline">{{ otherSlug[0].toUpperCase() + otherSlug.slice(1) }} scraper</a>?</p>
		</div>
	</div>
</template>


