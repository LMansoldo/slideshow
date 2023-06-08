const violetPreset = require('./src/styles/presets/violet-preset.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte', ...violetPreset.content],
	presets: [violetPreset],
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
}