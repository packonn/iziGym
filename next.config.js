/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"www.izigym.fr",
			"izigym.cloud4206.heitzsystem.com",
			"cms.izigym.fr",
		],
	},
	redirects: async () => [
		{
			source: "/muscu",
			destination: "/espaces-du-club/salle-de-musculation-et-cardio", // Matched parameters can be used in the destination
			permanent: true,
		},
		{
			source: "/fitness",
			destination: "/espaces-du-club/salle-de-musculation-et-cardio", // Matched parameters can be used in the destination
			permanent: true,
		},
		{
			source: "/planning",
			destination: "/espaces-du-club/cours-collectifs", // Matched parameters can be used in the destination
			permanent: true,
		},
	],
}

module.exports = nextConfig
