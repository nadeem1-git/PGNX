// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://nadeem1-git.github.io',
	base: '/PGNX',
	vite: {
		plugins: [tailwindcss()]
	}
});