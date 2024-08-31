import Layout from "@/components/Layout";
import Prices from "@/components/Price";


export default function Abonnements() {
	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/bg-abonnements.webp"
			title1="Les Abonnements"
			center
			classCustom=" min-h-[300px] md:min-h-[400px]"
		>
			
			<Prices cream/>
		</Layout>
	);
}
