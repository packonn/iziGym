/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				anton: "Anton",
				great: "Great Sejagad",
				roboto: "Roboto",
			},
			fontSize: {
				16: "16px",
				18: "18px",
				20: "20px",
				22: "22px",
				24: "24px",
			},
			colors: {
				primary: "#D9712E",
				secondary: "#1C1C1E",
				gray: "#B5B5B5"
			},
			container: {
				center: true,
				screens: {
					xl: '1280px',
					lg: '1280px'
				},
				padding: {
					DEFAULT: '20px',
					sm: '20px',
					lg: '20px',
					xl: '20px',
					'2xl': '20px',
				},
			},
			backgroundImage: {
				header: "url('/assets-dev/header.png')",
				floatRight: "url('/assets-dev/floating-right.png')",
				floatLeft: "url('/assets-dev/floating-left.png')",
				bottomHeader: "url('/assets-dev/bot_header.png')",
			},
		},
	},
	plugins: [],
}
