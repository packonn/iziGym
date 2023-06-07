import Layout from "@/components/Layout"
import Planning from "@/components/Planning"
import SectionActus from "@/components/SectionActus"
import SectionPrices from "@/components/SectionPrice"
import SectionServices from "@/components/SectionServices"
import SectionWhy from "@/components/SectionWhy"
import { gql } from "@apollo/client"
import apolloClient from "../../apollo-client"
import dayjs from "dayjs"
import "dayjs/locale/fr"

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
			fetchPolicy: "no-cache",
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
			title3="La forme avant la frime !"
			hours
		>
			<SectionServices spaces={spaces} />
			<SectionActus bottomBanner actus={actus} />
			<SectionWhy options={options} />
			{/*<Planning
				planning={options.planning}
				urlDeReservatioDesCoursEnLigne={
					options.urlDeReservatioDesCoursEnLigne
				}
			/>*/}
			<div className=" bg-bottomHeader absolute h-40 w-full -mt-[150px] z-[9999]  bg-repeat"></div>

			<iframe
				loading="eager"
				src={options.urlcalendar}
				width="100%"
				height="700px"
				frameborder="0"
				style={{ marginBottom: 10 + "em", marginTop: 5 + "em" }}
			></iframe>

			<div className="relative mt-20">
				<div className="bg-[url(/assets-dev/wave-cream.svg)] h-40 w-full -top-40 absolute z-50  bg-no-repeat bg-cover "></div>
				<SectionPrices
					subscriptions={subscriptions}
					infoSubscription={options.infosubscription}
				/>
			</div>
		</Layout>
	)
}
