// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * @param {string} family
 * @param {400 | 500 | 600 | 700} weight
 * @param {'normal' | 'italic'} style
 */
const fontsource = (family, weight, style) => ({
	src: /** @type {[string]} */ ([`@fontsource/${family}/files/${family}-latin-${weight}-${style}.woff2`]),
	weight,
	style,
});

// https://astro.build/config
export default defineConfig({
	site: 'https://masanchez.com',
	integrations: [sitemap()],
	prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
	// Self-host the fonts from the installed @fontsource packages so they don't
	// block the first paint and the build never depends on a font CDN.
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Public Sans',
			cssVariable: '--font-public-sans',
			options: {
				variants: [
					fontsource('public-sans', 400, 'normal'),
					fontsource('public-sans', 400, 'italic'),
					fontsource('public-sans', 700, 'normal'),
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Rubik',
			cssVariable: '--font-rubik',
			options: {
				variants: [fontsource('rubik', 500, 'normal'), fontsource('rubik', 600, 'normal')],
			},
		},
	],
});
