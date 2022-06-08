module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				'new-screen': '900px',
				'm-new-screen': { max: '900px' },
			},
		},
	},
	plugins: [],
}
