import Layout from "@/components/Layout"
import Planning from "@/components/Planning"
import SectionActus from "@/components/SectionActus"
import SectionPrices from "@/components/SectionPrice"
import SectionServices from "@/components/SectionServices"
import SectionWhy from "@/components/SectionWhy"
import { gql } from "@apollo/client"
import apolloClient from "../../apollo-client"

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
								course {
									activity
									hours
									when
								}
								day
							}
						}
					}
					subscriptions {
						nodes {
							content
							title
						}
					}
					spaces {
						nodes {
							title
							slug
							featuredImage {
								node {
									sourceUrl
								}
							}
						}
					}
					posts(first: 4) {
						nodes {
							title
							content
							featuredImage {
								node {
									sourceUrl
								}
							}
							groupeChampsArticle {
								subtitle
								startdate
								videourl
								enddate
								actuimage {
									sourceUrl
								}
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
		})

		spaces = await response.data.spaces.nodes
		subscriptions = await response.data.themeGeneralSettings.option
			.ordersubscription
		options = await response.data.themeGeneralSettings.option
		actus = await response.data.posts.nodes
	} catch (error) {
		console.log("error", error)
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
		<Layout
			contactBannerColor="cream"
			backgroundImageURL="/assets-dev/header.png"
			title1="Club"
			title2="IZI GYM"
			title3="Deviens la meileure version de toi même !"
			hours
		>
			<SectionServices spaces={spaces} />
			<SectionActus bottomBanner actus={actus} />
			<SectionWhy />
			<Planning
				planning={options.planning}
				urlDeReservatioDesCoursEnLigne={
					options.urlDeReservatioDesCoursEnLigne
				}
			/>

			<div className="relative">
				<div className="bg-[url(/assets-dev/wave-cream.svg)] h-40 w-full -top-40 absolute z-50  bg-no-repeat bg-cover "></div>
				<SectionPrices
					subscriptions={subscriptions}
					infoSubscription={options.infosubscription}
				/>
			</div>
		</Layout>
	)
}
