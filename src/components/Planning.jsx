import { Title } from "./Title"
import { planning } from "@/pages/cours-collectifs"
import Image from "next/image"
import ButtonDestroy from "./ButtonDestroy"
const Planning = () => {
	return (
		<div className="bg-black2  relative z-50">
			<div className="bg-floatLeftGray absolute top-0 right-0 h-full w-full bg-right bg-no-repeat"></div>
			<div className="bg-floatRightGray absolute top-0 left-0 h-full w-full bg-no-repeat"></div>

			<div className="container py-10 pb-32">
				<Title
					title="Planning"
					subtitle="Cours collectifs"
					color={"white"}
					center
				/>
				<ButtonDestroy primary icon="logo/calendar.svg" text="Réserver mon cours" />
				<div className="grid grid-cols-3 gap-10 mt-20 ">
					{planning.map((item, index) => {
						return (
							<div
								key={index}
								className="col-span-3 lg:col-span-1"
							>
								<p className="font-anton uppercase text-30 text-primary font-medium border border-gray pr-10 pl-4 py-2">
									{item.day}
								</p>
								<div className="mt-4">
									<p className="font-roboto text-14 uppercase text-secondary bg-white py-1 px-2 tracking-[1.5px] w-fit font-medium mt-3">
										Matin
									</p>
									<div className="mt-2">
										{item.morning &&
											item.morning.length !== 0 &&
											item.morning.map((item, index) => {
												return (
													<div
														key={index}
														className="flex justify-between items-center tracking-[1.5px] mt-3"
													>
														<p className="font-roboto text-14 text-white font-regular uppercase ">
															{item.title}
														</p>
														<p className="font-roboto text-14 text-white font-regular uppercase">
															{item.time}
														</p>
													</div>
												)
											})}
									</div>
								</div>
								<div>
									<div className="w-full border-t border-white my-4"></div>
									<p className="font-roboto text-14 uppercase text-secondary bg-white py-1 px-2 tracking-[1.5px] w-fit font-medium mt-3">
										Après-midi
									</p>
									<div className="mt-2">
										{item.afternoon &&
											item.afternoon.length !== 0 &&
											item.afternoon.map(
												(item, index) => {
													return (
														<div
															key={index}
															className="flex justify-between items-center tracking-[1.5px] mt-3"
														>
															<p className="font-roboto text-14 text-white font-regular uppercase ">
																{item.title}
															</p>
															<p className="font-roboto text-14 text-white font-regular uppercase">
																{item.time}
															</p>
														</div>
													)
												}
											)}
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Planning
