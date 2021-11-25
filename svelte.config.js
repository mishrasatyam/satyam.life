// import adapter from '@sveltejs/adapter-auto';
import WindiCSS from 'vite-plugin-windicss';
import begin from '@architect/sveltekit-adapter'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: begin(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				WindiCSS()
			]
		}
	}
};

export default config;
