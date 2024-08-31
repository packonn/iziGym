export const SubscriptionCard = ({ subscription, customContainerClass, backgroundColor }) => {
	
	return (
		<div
			className={
				`hover:scale-[1.02]  transition-all ease-in-out duration-500 even:bg-secondary even:text-white flex flex-col items-center justify-between lg:h-full  min-h-[400px] px-12 py-7 ` +
				customContainerClass + " " + backgroundColor
			}
		>
			<h3 className="text-[37px] font-anton uppercase text-center pb-5 ">
				{subscription?.title}
			</h3>
			<div className="customContentSubscription">
				<p className="text-center">{subscription?.content}</p>
				<p className="font-anton text-[36px] text-primary text-center ">
					{subscription?.price}
				</p>
			</div>
		</div>
	);
};
