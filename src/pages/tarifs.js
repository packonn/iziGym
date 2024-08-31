import Layout from "@/components/Layout";
import { subscriptions } from "../../helpers";
import { SubscriptionCard } from "@/components/SubscriptionCard";
import Prices from "@/components/Price";
import Image from "next/image";

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
