import Layout from "@/components/Layout"
import SectionPrices from "@/components/SectionPrice"
import { gql } from "@apollo/client"
import apolloClient from "../../apollo-client"

export const getServerSideProps = async (context) => {
	let subscriptions = []
	let options = null

	try {
		const response = await apolloClient.query({
			query: gql`
				{
					themeGeneralSettings {
						option {
							ordersubscription {
								... on Subscription {
									id
									content
									slug
									title
								}
							}
							infosubscription
						}
					}
					subscriptions {
						nodes {
							content
							title
						}
					}
				}
			`,
		})

		subscriptions = await response.data.themeGeneralSettings.option
			.ordersubscription
		options = await response.data.themeGeneralSettings.option
	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			subscriptions: subscriptions,
			options: options,
		},
	}
}

export default function Abonnements({ subscriptions, options }) {
	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/bg-abonnements.jpg"
			title3="Les Abonnements"
            center
			classCustom=" min-h-[300px] md:min-h-[400px]"
        >

       
        <SectionPrices
        bgColor="white"
        subscriptions={subscriptions}
        infoSubscription={options.infosubscription}
        />

        </Layout>
    )
}
