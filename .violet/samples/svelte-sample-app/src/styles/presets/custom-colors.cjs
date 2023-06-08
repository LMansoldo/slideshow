const colors = require('tailwindcss/colors')

delete colors['lightBlue']
delete colors['coolGray']
delete colors['warmGray']
delete colors['trueGray']
delete colors['blueGray']

const customColors = {
    ...colors,
    ...{
		heliosViolet: {
			'50': "#f1eefd",
			'100': "#e3defc",
			'200': "#c7bdf9",
			'300': "#ab9df6",
			'400': "#8f7cf3",
			'500': "#745cf1",
			'600': "#5c49c0",
			'700': "#453790",
			'800': "#3a2e78",
			'900': "#2e2460",
		},
		heliosGray: {
			'50': "#f8fafc",
			'100': "#f1f5f9",
			'200': "#e2e8f0",
			'300': "#cbd5e1",
			'400': "#49485d",
			'500': "#35344c",
			'600': "#2a293c",
			'700': "#1f1f2d",
			'800': "#1a1a26",
			'900': "#15141e",
		}
    },
}

module.exports = customColors


