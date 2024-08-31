import { Title } from "./Title"
import ButtonDestroy from "./ButtonDestroy"
import { planning, themeGeneralSettings } from "@/static-data"

const Planning = () => {
	return (
		<>
			<div className="bg-black2 relative z-10 md:pb-20 pb-40">
				<div className="container md:py-20 py-10 md:pb-32">
					<Title
						title="Planning"
						subtitle="Cours collectifs"
						color={"white"}
						center
						textColor1={"primary"}
					/>
					<div className="flex md:flex-row flex-col justify-center gap-4 items-center mt-20 ">
						<div className="w-fit relative">
							{/* <div className="text-black rotate-[5deg] ml-auto z-40  relative bg-white w-fit rounded px-2 py-1">
								Réservé aux abonnés
							</div> */}

							<div className="rotate-[5deg] z-40  absolute right-0 -top-8 bg-white w-fit rounded px-2 py-1">
								<div className="w-2 h-2 bg-black rounded-full absolute bottom-[1px] border-black border right-[1px] transform "></div>
								<span className="text-black text-center flex justify-center text-sm pt-1">
									Réservé aux abonnés
								</span>
							</div>
							<ButtonDestroy
								secondary
								icon="/logo/calendar.svg"
								text="Réserver mon cours en ligne"
								href={themeGeneralSettings.urlDeReservatioDesCoursEnLigne}
								target="_blank"
							/>
						</div>
						<div className="relative">
							<ButtonDestroy
								primary
								icon="/logo/gift.svg"
								text="Je veux ma 1ère séance GRATUITE !"
								href={themeGeneralSettings.landingPageUrl}
								target={"_blank"}
							/>
							<div className="-rotate-[5deg] z-40  absolute -right-10 -bottom-10 bg-white w-fit rounded px-2 py-1">
								<div className="w-2 h-2 bg-primary rounded-full absolute top-[6px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
								<span className="text-black text-center flex justify-center text-sm pt-1">
									Offre réservée <br />
									aux nouveaux clients
								</span>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-10 mt-24 ">
						{planning &&
							planning.map((item, index) => {
								// verification si il y a des cours le matin
								const verifMat = (tab) => {
									let exist = false
									tab.course.map((e) => {
										if (e.when === "Matin") {
											exist = true
											return exist
										} else {
											return exist
										}
									})
									return exist
								}
								// verification si il y a des cours l'aprem
								const verifAp = (tab) => {
									let exist = false
									tab.course.map((e) => {
										if (e.when === "Après-midi") {
											exist = true
											return exist
										} else {
											return exist
										}
									})
									return exist
								}
								return (
									<div
										key={index}
										className="col-span-3 lg:col-span-1"
									>
										<p className="font-anton uppercase text-30 text-primary font-medium border border-gray pr-10 pl-4 py-2">
											{item.day}
										</p>
										{verifMat(item) && (
											<p className="font-roboto text-14 uppercase text-secondary bg-white py-1 px-2 tracking-[1.5px] w-fit font-medium mt-3">
												Matin
											</p>
										)}

										{item.course
											.filter(
												(item) => item.when === "Matin"
											)
											.map((cours, index) => {
												return (
													<div
														key={index}
														className="flex justify-between items-center tracking-[1.5px] mt-3"
													>
														<div className="flex justify-between items-center ">
															{cours.semainesPaires ===
																"semaines paires" ? (
																<p className="font-roboto text-16 text-white font-bold uppercase ">
																	{
																		cours.activity
																	}
																	<span className="text-[8px] ml-2">
																		(Semaine
																		Paire)
																	</span>
																</p>
															) : cours.semainesPaires ===
																"semaines impaires" ? (
																<p className="font-roboto text-16 text-white font-bold uppercase ">
																	{
																		cours.activity
																	}
																	<span className="text-[8px] ml-2">
																		(Semaine
																		Impaire)
																	</span>
																</p>
															) : (
																<p className="font-roboto text-16 text-white font-bold uppercase ">
																	{
																		cours.activity
																	}
																</p>
															)}
														</div>
														<p className="font-roboto text-14 text-white font-regular uppercase">
															{cours.hours}
														</p>
													</div>
												)
											})}
										{verifAp(item) && verifMat(item) && (
											<div className="w-full border-t border-white my-4 "></div>
										)}

										{verifAp(item) && (
											<p className="font-roboto text-14 uppercase text-secondary bg-white py-1 px-2 tracking-[1.5px] w-fit font-medium mt-3">
												Après-midi
											</p>
										)}
										{item.course
											.filter(
												(item) =>
													item.when === "Après-midi"
											)
											.map((cours, index) => {
												return (
													<div
														key={index}
														className="flex justify-between items-center tracking-[1.5px] mt-3"
													>
														<div className="flex justify-between items-center">
															{cours.semainesPaires ===
																"semaines paires" ? (
																<p className="font-roboto text-16 text-white font-bold uppercase ">
																	{
																		cours.activity
																	}
																	<span className="text-[8px] ml-2">
																		(Semaine
																		Paire)
																	</span>
																</p>
															) : (
																<p className="font-roboto text-15 text-white font-bold uppercase  ">
																	{
																		cours.activity
																	}
																</p>
															)}
														</div>

														<p className="font-roboto text-14 text-white font-regular uppercase">
															{cours.hours}
														</p>
													</div>
												)
											})}
									</div>
								)
							})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Planning
