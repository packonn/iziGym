import Layout from "@/components/Layout"
import Planning from "@/components/Planning"
import SectionActus from "@/components/SectionActus"
import SectionContact from "@/components/SectionContact"
import SectionPrices from "@/components/SectionPrice"
import SectionServices from "@/components/SectionServices"
import SectionWhy from "@/components/SectionWhy"
import { gql } from "@apollo/client"
import { useContext } from "react"
import apolloClient from "../../apollo-client"
import { planning } from "./salle-de-musculation-et-cardio"

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
	console.log("reponse2", actus)

	return (
		<Layout
			contactBannerColor="cream"
			backgroundImageURL="/assets-dev/header.png"
			title1="Club"
			title2="IZI GYM"
			title3="Deviens la meileure version de toi même !"
			hours
			options={options}
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
			<SectionPrices
				subscriptions={subscriptions}
				infoSubscription={options.infosubscription}
			/>
		</Layout>
	)
}
