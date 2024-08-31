import { subscriptions, themeGeneralSettings } from "@/static-data";
import { SubscriptionCard } from "./SubscriptionCard";
import { Title } from "./Title";
import Image from "next/image";
import ButtonDestroy from "./ButtonDestroy";

export default function Prices({cream}) {
	
	return (
		<div className="py-0 md:py-20 pt-10 pb-10 relative w-full h-full">
				<Title
					title={"Les tarifs"}
					subtitle={"chez IZI GYM"}
					color={"secondary"}
					center={true}
				/>
				<Image
					src="/assets-dev/fond-tarifs.png"
					fill
					alt=""
					className="h-full w-full bg-no-repeat bg-cover "
				/>
				<div className="container md:grid grid-cols-2 z-10">
					{subscriptions.map((subscription) => {
						const backgroundColor = (cream && subscription.color == "bg-white") ? "!bg-cream" : subscription.color;
						return (
							<SubscriptionCard
								key={subscription.id}
								subscription={subscription}
								customContainerClass="bg-white text-primary"
								backgroundColor={backgroundColor}
							/>
						);
					})}
				</div>
				<div className="w-fit mx-auto mt-10">

				<ButtonDestroy
											primary
											text="Je veux ma 1ère séance GRATUITE !"
											href={themeGeneralSettings.landingPageUrl}
											target={"_blank"}
											/>
											</div>
			</div>
	)
}
