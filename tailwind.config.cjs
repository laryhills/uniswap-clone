module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
			sans1: ['Fira Code', 'Helvetica', 'Arial', 'sans-serif']
		}
	},
	plugins: [require('flowbite/plugin')]
};
