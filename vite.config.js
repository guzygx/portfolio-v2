import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/i18n/dist',
			emitGitIgnore: false,
			emitPrettierIgnore: false,
			emitDts: false,
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

