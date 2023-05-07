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
			},
			colors: {
				primary: "#D9712E",
				secondary: "#1C1C1E",
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
