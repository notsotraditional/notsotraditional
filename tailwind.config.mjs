import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/preline.js'],
	theme: {
		colors: {
			transparent: 'transparent',
			black: '#2F4858',
			white: '#fff',
			light: '#FEFCF5',
			orange: '#EF9648',
			error: {
				50: '#fcf2f4',
				100: '#f9e6e8',
				800: '#CC071E'
			}
		},
		extend: {
			fontFamily: {
				noto: ['Noto Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('preline/plugin')],
}
