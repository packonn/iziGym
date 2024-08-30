import Layout from "@/components/Layout";
import { subscriptions } from "../../helpers";
import { SubscriptionCard } from "@/components/SubscriptionCard";

export default function Abonnements() {
	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/bg-abonnements.webp"
			title1="Les Abonnements"
			center
			classCustom=" min-h-[300px] md:min-h-[400px]"
		>
			<div className="container md:grid grid-cols-2 z-10 my-40 ">
				{subscriptions.map((subscription) => {
					return (
						<SubscriptionCard
							key={subscription.id}
							subscription={subscription}
						/>
					);
				})}
			</div>
		</Layout>
	);
}
