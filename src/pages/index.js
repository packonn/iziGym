import Layout from "@/components/Layout"
import Planning from "@/components/Planning"
import SectionActus from "@/components/SectionActus"
import SectionPrices from "@/components/SectionPrice"
import SectionServices from "@/components/SectionServices"
import SectionWhy from "@/components/SectionWhy"
import { gql } from "@apollo/client"
import apolloClient from "../../apollo-client"
import "dayjs/locale/fr"
import Head from "next/head"
import Image from "next/image"
import Prices from "@/components/Price"

export const getServerSideProps = async () => {
	let subscriptions = []
	let options = null
	let spaces = []
	let actus = {}

	const fetchWithRetry = async (query, retries = 3) => {
		for (let i = 0; i < retries; i++) {
			try {
				const response = await apolloClient.query(
					{ query },
					{ fetchPolicy: "cache-first" }
				)
				return response
			} catch (error) {
				if (i === retries - 1) throw error
				console.log(`Retrying... (${i + 1}/${retries})`)
			}
		}
	}

	try {
		const response = await fetchWithRetry(
			gql`
				{
					themeGeneralSettings {
						option {
							address
							discount
							email
							urlcalendar
							phone
							hoursacces
							facebookurl
							hoursreception
							instagramurl
							ordersubscription {
								... on Subscription {
									id
									content
									slug
									title
								}
							}
							urlDeReservatioDesCoursEnLigne
							infosubscription
							planning {
								day
								course {
									hours
									when
									activity
									semainesPaires
								}
							}
						}
					}
				}
			`
		)
		options = await response.data.themeGeneralSettings.option
		subscriptions = await response.data.themeGeneralSettings.option
			.ordersubscription
	} catch (error) {
		console.log(
			"Error in fetching themeGeneralSettings:",
			error.message,
			error.networkError,
			error.graphQLErrors
		)
	}

	try {
		const response = await fetchWithRetry(gql`
			{
				spaces {
					nodes {
						title
						slug
						featuredImage {
							node {
								sourceUrl(size: MEDIUM_LARGE)
							}
						}
					}
				}
			}
		`)

		spaces = await response.data.spaces.nodes
	} catch (error) {
		console.log(
			"Error in fetching spaces:",
			error.message,
			error.networkError,
			error.graphQLErrors
		)
	}
	try {
		const response = await fetchWithRetry(gql`
			{
				posts {
					nodes {
						title
						content
						featuredImage {
							node {
								sourceUrl(size: MEDIUM_LARGE)
							}
						}
						groupeChampsArticle {
							subtitle
							startdate
							videourl
							enddate
							startdate
							subtitle
							videourl
						}
						slug
						content
					}
				}
			}
		`)

		actus = await response.data.posts.nodes
		if (Array.isArray(actus) && actus.length > 0) {
			// filter actus to get only the ones that are not expired
			actus = actus.filter((actu) => {
				if (actu.groupeChampsArticle) {
					if (actu.groupeChampsArticle.enddate) {
						return (
							new Date(actu.groupeChampsArticle.enddate) >
							new Date()
						)
					}
				}
				return true
			})
		}
	} catch (error) {
		console.log(
			"Error in fetching actus:",
			error.message,
			error.networkError,
			error.graphQLErrors
		)
	}

	return {
		props: {
			subscriptions: subscriptions,
			options: options,
			spaces: spaces,
			actus: actus,
		},
	}
}

export default function Home({ subscriptions, options, spaces, actus }) {
	const planning = options.planning
	const urlDeReservatioDesCoursEnLigne = options.urlDeReservatioDesCoursEnLigne
	return (
			
			<Layout
				contactBannerColor="cream"
				backgroundImageURL="/assets-dev/bg-home.jpeg"
				title1="Club"
				title2="IZI GYM"
				title3="La forme sans la frime !"
				hours
			>
				{spaces && spaces.length > 0 && (
					<SectionServices spaces={spaces} />
				)}
				{actus && actus.length > 0 && (
					<SectionActus bottomBanner actus={actus} />
				)}
				{options && <SectionWhy options={options} />}
				<div className="relative w-full h-20 -mt-20 z-20">
					<Image
						src="/assets-dev/banner-top-footer.png"
						fill
						className="object-cover w-full h-20 "
						alt="separation entre section planning et présentation de la salle de sport izigym à Aigrefeuille d'aunis 17290"
					/>
				</div>
				{(planning) && (
					<Planning
						planning={planning}
						urlDeReservatioDesCoursEnLigne={
							urlDeReservatioDesCoursEnLigne
						}
					/>
				)}

				<div className="py-0 md:py-20 pt-10 pb-10 bg-[#F6F3F2] relative w-full h-full">
					
				<Image
						src="/assets-dev/wave-cream.svg"
						fill
						alt=""
						className="h-40 w-full -top-40 absolute z-10  bg-no-repeat bg-cover "
					/>

				<Image
						src="/assets-dev/fond-tarifs.png"
						fill
						alt=""
						className="h-40 w-full bg-no-repeat bg-cover "
					/>
					
					<Prices />
					
				</div>

					

			</Layout>
	)
}
