import { Title } from "./Title"
import ButtonDestroy from "./ButtonDestroy"
const Planning = ({planning, urlDeReservatioDesCoursEnLigne}) => {
	return (
		<div className="bg-black2  relative z-50 md:pb-20 pb-40">
			<div className="bg-floatLeftGray absolute top-0 right-0 h-full w-full bg-right bg-no-repeat"></div>
			<div className="bg-floatRightGray absolute top-0 left-0 h-full w-full bg-no-repeat"></div>

			<div className="container md:py-20 py-10 md:pb-32">
				<Title
					title="Planning"
					subtitle="Cours collectifs"
					color={"white"}
					center
				/>
				<div className="flex justify-center">
				<ButtonDestroy primary icon="logo/calendar.svg" text="Réserver mon cours" href={urlDeReservatioDesCoursEnLigne} target="_blank" />
				</div>
				<div className="grid grid-cols-3 gap-10 mt-20 ">
					{planning && planning.map((item, index) => {
						return (
							<div
								key={index}
								className="col-span-3 lg:col-span-1"
							>
								<p className="font-anton uppercase text-30 text-primary font-medium border border-gray pr-10 pl-4 py-2">
									{item.day}
								</p>
							

									<p className="font-roboto text-14 uppercase text-secondary bg-white py-1 px-2 tracking-[1.5px] w-fit font-medium mt-3">
										Matin
									</p>
								{item.course.filter((item)=> item.when ==="Matin").map((cours, index)=> {
									return (
										<div key={index}
														className="flex justify-between items-center tracking-[1.5px] mt-3"
													>
														<p className="font-roboto text-14 text-white font-regular uppercase ">
															{cours.activity}
														</p>
														<p className="font-roboto text-14 text-white font-regular uppercase">
															{cours.hours}
														</p>
													</div>


									)
								})
								}
									<div className="w-full border-t border-white my-4 "></div>
									<p className="font-roboto text-14 uppercase text-secondary bg-white py-1 px-2 tracking-[1.5px] w-fit font-medium mt-3">
								Après-midi
							</p>
						{item.course.filter((item)=> item.when ==="Après-midi").map((cours, index)=> {
							return (
								<div key={index}
												className="flex justify-between items-center tracking-[1.5px] mt-3"
											>
												<p className="font-roboto text-14 text-white font-regular uppercase ">
													{cours.activity}
												</p>
												<p className="font-roboto text-14 text-white font-regular uppercase">
													{cours.hours}
												</p>
											</div>


							)
						})
						}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Planning
