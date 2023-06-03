import { Title } from "./Title"

const SectionPrices = ({subscriptions, infoSubscription}) => {

	return (
		<div className="bg-[url('/assets-dev/fond-tarifs.png')] bg-[#F6F3F2] pb-10 relative">
			<div className="bg-[url(/assets-dev/topPrice.svg)] h-40 w-full -top-40 absolute z-50"></div>
			<div className="container">
				<Title
					title={"Les differents"}
					subtitle={"abonnement"}
					color={"secondary"}
					textColor1={"primary"}
				/>

				<div className="grid grid-cols-1 lg:gap-0 gap-2  lg:grid-cols-[repeat(3,341px)] md:grid-cols-2 justify-center tracking-[1.5px] ">
					{subscriptions && subscriptions.map((e, i) => {
						return (
							<div
								key={i}
								className=" even:bg-secondary even:text-white odd:bg-white flex flex-col items-center lg:h-full  self-end min-h-[433px] lg:[&:nth-child(2)]:min-h-[488px]   [&:nth-child(4)]:self-start px-12 py-7"
							>
								<h3 className="text-[37px] font-anton uppercase text-center pb-5 ">
									{e.title}
								</h3>
								<div className="customContentSubscription flex flex-col !h-full justify-center" dangerouslySetInnerHTML={{__html:e.content}} ></div>
								
							</div>
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
