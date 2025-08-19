<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
	lines: string[];
	language?: string;
	copyLabel?: string; // i18n label for copy button
	copiedLabel?: string; // i18n label after copy
}>();

const isCopied = ref(false);

async function onCopy(text: string) {
	try {
		await navigator.clipboard.writeText(text);
		isCopied.value = true;
		setTimeout(() => (isCopied.value = false), 1500);
	} catch (_) {
		// swallow
	}
}
</script>

<template>
	<div class="relative">
		<button
			class="absolute right-3 top-3 z-10 bg-gray-800/80 hover:bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded border border-gray-700"
			:title="isCopied ? (copiedLabel || 'Copiado') : (copyLabel || 'Copiar')"
			@click="onCopy(lines.join('\n'))"
		>
			{{ isCopied ? (copiedLabel || 'Copiado') : (copyLabel || 'Copiar') }}
		</button>
		<pre class="code-block mb-3"><code>{{ lines.join('\n') }}</code></pre>
	</div>
</template>


