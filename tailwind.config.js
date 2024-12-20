/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    })
	],
	mode: 'jit',
  purge: [
    './public/**/*.{html,js}',
    './src/**/*.{js,svelte,ts}'
  ]
};
