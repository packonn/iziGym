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

export const getServerSideProps = async (context) => {
	let subscriptions = []
	let options = null
	let spaces = []
	let actus = {}

	try {
		const response = await apolloClient.query({
			query: gql`
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
			`,
		})
		options = await response.data.themeGeneralSettings.option
		subscriptions = await response.data.themeGeneralSettings.option
			.ordersubscription
	} catch (error) {
		// redirect to 404 page if an error occurred
		// redirect to 404 page
		return {
			redirect: {
				permanent: false,
				destination: `500`,
			},
		}
	}
	try {
		const response = await apolloClient.query({
			query: gql`
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
			`,
		})

		spaces = await response.data.spaces.nodes
	} catch (error) {
		console.log("error", error)
		// redirect to 404 page if an error occurred
		// redirect to 404 page
		return {
			redirect: {
				permanent: false,
				destination: `500`,
			},
		}
	}
	try {
		const response = await apolloClient.query({
			query: gql`
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
			`,
			fetchPolicy: "no-cache",
		})

		actus = await response.data.posts.nodes
		if (actus) {
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
		console.log("error", error)
		// redirect to 404 page if an error occurred
		// redirect to 404 page
		return {
			redirect: {
				permanent: false,
				destination: `500`,
			},
		}
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
	return (
		<>
			<Head>
				<title>Accueil Izi GYM</title>
			</Head>
			<Layout
				contactBannerColor="cream"
				backgroundImageURL="/assets-dev/bg-home.jpeg"
				title1="Club"
				title2="IZI GYM"
				title3="La forme sans la frime !"
				hours
			>
				{spaces && <SectionServices spaces={spaces} />}
				{actus && actus.length > 0 && (
					<SectionActus bottomBanner actus={actus} />
				)}
				{options && <SectionWhy options={options} />}
				<div className="relative w-full h-20 -mt-20 z-10">
					<Image
						src="/assets-dev/banner-top-footer.png"
						fill
						className="object-cover w-full h-20 "
						alt="separation entre section planning et présentation de la salle de sport izigym à Aigrefeuille d'aunis 17290"
					/>
				</div>
				{options && options.planning && (
					<Planning
						planning={options?.planning}
						urlDeReservatioDesCoursEnLigne={
							options?.urlDeReservatioDesCoursEnLigne
						}
					/>
				)}

				<div className="relative ">
					<div className="bg-[url(/assets-dev/wave-cream.svg)] h-40 w-full -top-40 absolute z-10  bg-no-repeat bg-cover "></div>
					{subscriptions && options && options.infosubscription && (
						<SectionPrices
							subscriptions={subscriptions}
							infoSubscription={options.infosubscription}
						/>
					)}
				</div>
			</Layout>
		</>
	)
}
