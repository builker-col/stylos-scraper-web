<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

let observer: IntersectionObserver | null = null;

onMounted(() => {
	if (typeof window === 'undefined') return;

	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const fadeInElements = entry.target.querySelectorAll<HTMLElement>('.fade-in');
					fadeInElements.forEach((el, index) => {
						setTimeout(() => {
							el.classList.add('visible');
						}, index * 150);
					});
					observer?.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.1 }
	);

	// Observe each section that contains fade-in elements
	document.querySelectorAll('section').forEach((section) => {
		if (section.querySelector('.fade-in')) {
			observer?.observe(section);
		}
	});
});

onBeforeUnmount(() => {
	observer?.disconnect();
	observer = null;
});
</script>

<template>
	<span class="sr-only">fade-in-observer</span>
</template>

<style scoped>
/* No styles needed */
</style>


