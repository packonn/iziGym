import Layout from "@/components/Layout"
import Planning from "@/components/Planning"
import SectionActus from "@/components/SectionActus"
import SectionPrices from "@/components/SectionPrice"
import SectionServices from "@/components/SectionServices"
import SectionWhy from "@/components/SectionWhy"
import { gql } from "@apollo/client"
import apolloClient from "../../apollo-client"
import "dayjs/locale/fr"
import { redirect } from "next/dist/server/api-utils"

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
									name {
										... on Cour {
											id
											infoCour {
												color
												calorie
											}
											title
										}
									}
									hours
									when
									activity
									semainesPaires
								}
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
					posts {
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
			{options && options.planning && (
				<Planning
					planning={options?.planning}
					urlDeReservatioDesCoursEnLigne={
						options?.urlDeReservatioDesCoursEnLigne
					}
				/>
			)}

			<div className="relative mt-20">
				<div className="bg-[url(/assets-dev/wave-cream.svg)] h-40 w-full -top-40 absolute z-50  bg-no-repeat bg-cover "></div>
				{subscriptions && options && options.infosubscription && (
					<SectionPrices
						subscriptions={subscriptions}
						infoSubscription={options.infosubscription}
					/>
				)}
			</div>
		</Layout>
	)
}
