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
				12: "12px",
				14: "14px",
				16: "16px",
				18: "18px",
				20: "20px",
				22: "22px",
				24: "24px",
				30: "30px",
			},
			colors: {
				primary: "#D9712E",
				secondary: "#1C1C1E",
				gray: "#B5B5B5",
				gray2: "#1E1E1E",
				black2: "#262626",
				cream:"#F5F3F2"
			},
			container: {
				center: true,
				screens: {
					xl: "1280px",
					lg: "1280px",
				},
				padding: {
					DEFAULT: "20px",
					sm: "20px",
					lg: "20px",
					xl: "20px",
					"2xl": "20px",
				},
			},
			backgroundImage: {
				floatRight: "url('/assets-dev/floating-right.png')",
				floatLeft: "url('/assets-dev/floating-left.png')",
				floatRightGray: "url('/assets-dev/floating-left-gray.png')",
				floatLeftGray: "url('/assets-dev/floating-left-gray.png')",
				bottomHeader: "url('/assets-dev/bot_header.png')",
				serviceBG: "url('/assets-dev/background_03_01.png')",
				servicePencherBG: "url('/assets-dev/background_03_02.png)",
				botServiceBG: "url('/assets-dev/bot_actu.png)",
				actusBG: "url(/assets-dev/actuClub.webp)",
				sign: "url(/logo/sign_gray.png)",
				rectangleOrange: "url(/logo/Rectangle_orange.png)",
			},
		},
	},
	plugins: [],
}
