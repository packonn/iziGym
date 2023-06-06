import { SubscriptionCard } from "./SubscriptionCard"
import { Title } from "./Title"

const SectionPrices = ({subscriptions, infoSubscription, bgColor}) => {
bgColor= bgColor || "bg-[#F6F3F2]"

	return (
		<div className={`bg-[url('/assets-dev/fond-tarifs.png')] ${bgColor} py-0 md:py-20 pt-10 pb-10 relative`}>
			<div className="container">
				<Title
					title={"Les differents"}
					subtitle={"abonnement"}
					color={"secondary"}
					textColor1={"primary"}
				/>

				<div className="grid  drop-shadow grid-cols-1 lg:gap-0 gap-2  lg:grid-cols-[repeat(3,341px)] md:grid-cols-2 justify-center tracking-[1.5px] ">
					{subscriptions && subscriptions.map((subscription, index) => {
						return (
							<SubscriptionCard data={subscription} key={index} />
						)
					})}
				</div>
				<div className="mt-6 md:w-1/2 mx-auto w-full">
				<div  dangerouslySetInnerHTML={{__html:infoSubscription}}></div>
				</div>
			</div>
		</div>
	)
}

export default SectionPrices
