import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/i18n/dist',
			strategy: ['url', 'cookie', 'baseLocale'],
			pathnamePrefixDefaultLanguage: true,
			urlPatterns: [
				{
					pattern: "/:path(.*)?",
					localized: [
						["fr", "/fr/:path(.*)?"],
						["en", "/en/:path(.*)?"],
					],
				},
			],
		})
	]
});

