import Layout from "@/components/Layout"
import SectionPrices from "@/components/SectionPrice"
import { gql } from "@apollo/client"
import apolloClient from "../../apollo-client"
import { infos } from "@/static-data"


export default function Abonnements() {
	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/bg-abonnements.webp"
			title1="Règlement intérieur"
			center
			classCustom=" min-h-[440px]"
		>
			<div
				className="container customMentionLegaleHTML py-20"
				dangerouslySetInnerHTML={{ __html: infos.rules }}
			></div>
		</Layout>
	)
}
