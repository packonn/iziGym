import Layout from "@/components/Layout"
import { infos } from "@/static-data"

export default function Abonnements() {

	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/bg-abonnements.webp"
			title1="Conditions générales de vente"
			center
			classCustom=" min-h-[440px]"
		>
			<div
				className="container customMentionLegaleHTML py-20"
				dangerouslySetInnerHTML={{ __html: infos.cgv }}
			></div>
		</Layout>
	)
}
