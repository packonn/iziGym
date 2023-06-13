import Layout from "@/components/Layout"
import SectionPrices from "@/components/SectionPrice"
import { gql } from "@apollo/client"
import apolloClient from "../../apollo-client"

export const getServerSideProps = async (context) => {
	let subscriptions = []
	let options = null
	let mentionslegales = null

	try {
		const response = await apolloClient.query({
			query: gql`
				{
					themeGeneralSettings {
						option {
							cgv
						}
					}
				}
			`,
		})

		mentionslegales = await response.data.themeGeneralSettings.option.cgv
	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			mentionslegales: mentionslegales,
		},
	}
}

export default function Abonnements({ mentionslegales }) {
	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/bg-abonnements.jpg"
			title1="Conditions générales de vente"
			center
			classCustom=" min-h-[440px]"
		>
			<div
				className="container customMentionLegaleHTML py-20"
				dangerouslySetInnerHTML={{ __html: mentionslegales }}
			></div>
		</Layout>
	)
}
