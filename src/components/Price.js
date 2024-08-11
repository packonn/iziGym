import { subscriptions } from "../../helpers"

export default function Prices() {
	return (
		<div className="container md:grid grid-cols-2">
			{subscriptions.map((item) => {
				return (
					<div
						key={item.id}
						className={`hover:scale-[1.02]  bg-white transition-all ease-in-out duration-500 even:bg-secondary even:text-white flex flex-col items-center justify-between lg:h-full  min-h-[400px] px-12 py-7 `}
					>
						<h3 className="text-[37px] font-anton uppercase text-center pb-5 ">
							{item.title}
						</h3>
						<div className="customContentSubscription">
							<p className="text-center">{item.content}</p>
							<p className="font-anton text-[36px] text-primary text-center ">
								{item.price}
							</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}
