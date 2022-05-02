const plugin = require('tailwindcss/plugin')
module.exports = {
	content: ['./src/**/*.{js,vue,html,css}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function({addBase, theme}) {
			addBase({
				'a:hover': {
					color: theme('colors.slate[500]'),
				}
			})
		})
	],
	
}
