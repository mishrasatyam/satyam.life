import adapter from '@sveltejs/adapter-auto';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			plugins: [
				WindiCSS()
			]
		}
	}
};

export default config;
