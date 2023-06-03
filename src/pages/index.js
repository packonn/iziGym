import Layout from "@/components/Layout"
import Planning from "@/components/Planning"
import SectionActus from "@/components/SectionActus"
import SectionContact from "@/components/SectionContact"
import SectionPrices from "@/components/SectionPrice"
import SectionServices from "@/components/SectionServices"
import SectionWhy from "@/components/SectionWhy"
import { gql } from "@apollo/client"
import apolloClient from "../../apollo-client"
import { planning } from "./salle-de-musculation-et-cardio"

export const getServerSideProps = async (context) => {
	let options = {}
	let planning = {}
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
							planning {
								day
								course {
									activity
									hours
									when
								}
							}
						}
					}
					posts(first: 6) {
						nodes {
							title
							groupeChampsArticle {
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
		options = await response.data.themeGeneralSettings.option
	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			options: options,
		},
	}
}

export default function Home({ options }) {
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
			<SectionServices />
			<SectionActus bottomBanner />
			<SectionWhy />
			<Planning />
			<SectionPrices />
		</Layout>
	)
}
