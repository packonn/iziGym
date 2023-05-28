import { Title } from "./Title"

const SectionPrices = () => {
	const data = [
		{
			title: "libre accès",
			option: [
				"Accès cardio et musculation",
				"Accès libre 6h-23h 7/7",
				"Programme personnalisé non inclus",
			],
			engagement: "engagement 12 mois",
			price: "29,90",
		},
		{
			title: "all inclusive",
			option: [
				"Accès aux cours collectifs",
				"Accès cardio et musculation",
				"Accès libre 6h-23h 7/7",
				"Programme personnalisé inclus",
			],
			engagement: "engagement 12 mois",
			price: "44",
		},
		{
			title: "Liberté",
			option: [
				"Accès aux cours collectifs",
				"Accès cardio et musculation",
				"Accès libre 6h-23h 7/7",
				"Programme personnalisé inclus",
			],
			engagement: "sans engagement",
			price: "54",
		},
		{
			title: "Libre accès avec coaching",
			option: [
				"Accès cardio et musculation",
				"Accès libre 6h-23h 7/7",
				"Programme personnalisé inclus",
			],
			engagement: "engagement 12 mois",
			price: "39",
		},
	]
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
					{data.map((e, i) => {
						return (
							<div
								key={i}
								className="even:bg-secondary even:text-white odd:bg-white flex flex-col items-center justify-between self-end h-[433px] lg:[&:nth-child(2)]:h-[488px] [&:nth-child(4)]:self-start px-12 py-7"
							>
								<h3 className="text-[37px] font-anton uppercase text-center pb-5 ">
									{e.title}
								</h3>
								<div className="text-center">
									<ul className="text-[15px] text-center pb-5">
										{e.option.map((e, i) => {
											return <li className="pb-2">{e}</li>
										})}
									</ul>
									<p className="text-[15px] uppercase">
										{e.engagement}
									</p>
								</div>
								<p className="text-primary text-[37px] font-anton pt-8">
									{e.price}€/mois
								</p>
							</div>
						)
					})}

					<div className="bg-white h-[488px] flex flex-col items-center justify-center tracking-[1.5px]">
						<h3 className="text-[37px] font-anton uppercase text-center pb-5">
							Cartes
						</h3>
						<div className="text-center pb-10">
							<p>10 scéances</p>
							<p className="text-primary">valable 6 mois</p>
							<p className="text-primary text-[37px] font-anton">
								99€
							</p>
						</div>
						<div className="text-center pb-10">
							<p>20 scéances</p>
							<p className="text-primary">valable 6 mois</p>
							<p className="text-primary text-[37px] font-anton">
								160€
							</p>
						</div>
						<ul className="text-[15px] text-center font-light">
							<li>Accès 6h à 23h - 7j/7</li>
							<li>Accès cardio et musculation</li>
							<li>Accès cours collectifs</li>
						</ul>
					</div>
					<div className="bg-secondary text-white h-[433px] flex flex-col items-center justify-center tracking-[1.5px] text-center">
						<h3 className="text-[37px] font-anton uppercase text-center pb-5">
							Autres
						</h3>
						<div className="pb-5">
							<p> -18ans : 25€/mois</p>
							<p className="text-primary">engagement 12 mois</p>
						</div>
						<div className="pb-5">
							<p>Pass Midi : 34€/mois</p>
							<p className="text-primary">engagement 12 mois</p>
						</div>
						<div>
							<p className="pb-5">1 mois: 64€*</p>
							<p className="pb-5">1 scéance: 12€*</p>
							<p className="pb-5">
								Offre duo : -50% sur les frais d’inscription
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionPrices
