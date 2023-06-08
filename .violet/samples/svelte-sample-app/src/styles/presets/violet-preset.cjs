const customColors = require('./custom-colors.cjs')

module.exports = {
	content: [
		'./ui/**/*.scss',
		'./ui/**/*.svelte',
	],
	theme: {
		extend: {
			colors: {
				primary: customColors.heliosViolet,
				secondary: customColors.indigo,
				additional: customColors.heliosGray,
				error: customColors.red,
				danger: customColors.red,
				warning: customColors.yellow,
			},
		},
	},
}