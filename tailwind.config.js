/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      'green': '#4c730d',
      'blue': '#2e3ed2',
      'salmon': '#D26566',
      'black': '#000000',
      'orange': '#96390e',
      'grey': '#373737',
      'white': '#ffffff',
      'purple': '#5c03c8',
      'bright-green': '#95ff2b',
      'bright-blue': '#03b8ff',
      'pink': '#ff309b',
      'offwhite': '#eee',
      'darkgrey': '#090b0b',
      'brick': '#7a1c20'
    },
    fontFamily: {
      'display': ['standard-graf'],
      'body': ['junicode']
    },
    extend: {},
  },

  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    })
  ],
  mode: 'jit'
};
