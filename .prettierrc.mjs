export default {
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
	useTabs: true,
	singleQuote: true,
	printWidth: 140,
	semi: false,
	arrowParens: 'avoid',
	trailingComma: 'all',
	bracketSameLine: true,
	bracketSpacing: true,
	overrides: [
		{ files: '*.svelte', options: { parser: 'svelte' } },
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
