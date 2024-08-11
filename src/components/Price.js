export default function Prices() {
	const subscriptions = [
		{
			id: 1,
			title: "Carte de séance",
			content: "Valade de 6 à 12 mois",
			price: "à partir de 8€",
		},
		{
			id: 2,
			title: "Abonnement mensuel",
			content: "Option et durée à définir avec un conseiller",
			price: "à partir de 29,90€",
		},
	]

	return (
		<div className="container grid grid-cols-2 border">
			{subscriptions.map((item) => {
				return (
					<div
						key={item.id}
						className={`hover:scale-[1.02]  bg-white transition-all ease-in-out duration-500 even:bg-secondary even:text-white flex flex-col items-center lg:h-full self-end min-h-[433px] px-12 py-7 `}
					>
						<h3 className="text-[37px] font-anton uppercase text-center pb-5 ">
							{item.title}
						</h3>
						<div className="customContentSubscription">
							<p>{item.content}</p>
							<p className="font-anton text-[36px] text-primary">
								{item.price}
							</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}
