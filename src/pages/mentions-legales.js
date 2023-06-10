import Layout from "@/components/Layout";
import SectionPrices from "@/components/SectionPrice";
import { gql } from "@apollo/client"
import apolloClient from "../../apollo-client";

export const getServerSideProps = async (context) => {
	let subscriptions = []
	let options = null
    let mentionslegales = null

	try {
		const response = await apolloClient.query({
			query: gql `
				{
                    themeGeneralSettings {
						option {
							mentionslegales
						}
					}
				}
			`,
			fetchPolicy: "no-cache",
		})


mentionslegales = await response.data.themeGeneralSettings.option
			.mentionslegales

	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			mentionslegales: mentionslegales,
		},
	}
}


export default function Abonnements({mentionslegales}){
    return (
        <Layout 
        contactBannerColor="white"
			backgroundImageURL="/assets-dev/bg-abonnements.jpg"
			title1="Mentions légales"
            center
			classCustom=" min-h-[440px]"
        >

       
       <div className="container customMentionLegaleHTML py-20" dangerouslySetInnerHTML={{ __html: mentionslegales }}></div>

        </Layout>
    )
}