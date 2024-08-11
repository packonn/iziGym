export const SubscriptionCard = ({ data, customContainerClass }) => {
	const classes = customContainerClass || " odd:bg-white "
	return (
		<div
			className={`${classes} hover:scale-[1.02] transition-all  ease-in-out duration-500 even:bg-secondary even:text-white  flex flex-col items-center lg:h-full  self-end min-h-[433px] lg:[&:nth-child(2)]:min-h-[488px]   [&:nth-child(4)]:self-start px-12 py-7 `}
		>
			<h3 className="text-[37px] font-anton uppercase text-center pb-5 ">
				{data.title}
			</h3>
			<div
				className="customContentSubscription flex flex-col !h-full justify-center"
				dangerouslySetInnerHTML={{ __html: data.content }}
			></div>
		</div>
	)
}
