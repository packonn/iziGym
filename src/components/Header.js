import BandeauInfo from "@/components/BandeauInfo"
import BandeauPromo from "@/components/BandeauPromo"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import { Title } from "./Title"
import ButtonDestroy from "./ButtonDestroy"
import { themeGeneralSettings } from "@/static-data"

const Header = ({
	backgroundImageURL,
	title1,
	title2,
	title3,
	center,
	classCustom,
	hours,
	options,
}) => {
	const image = backgroundImageURL
		? backgroundImageURL
		: "/assets-dev/placeholder.png"

		
	return (
		<div>
			<div className="z-40 relative">
				<BandeauInfo />
				<BandeauPromo options={options} />
			</div>

			<div
				className={`min-h-[90vh] bg-secondary  w-full  relative  flex flex-col ${classCustom}`}
			>
				<Image src="/assets-dev/floating-right.png" alt="banner" placeholder="blur" blurDataURL="/assets-dev/floating-right.png" width={400} height={900} className=" absolute top-0  left-0 h-full w-fit object-contain md:flex hidden"></Image>
				<Image src="/assets-dev/floating-left.png" alt="banner" placeholder="blur" blurDataURL="/assets-dev/floating-right.png" width={400} height={900} className=" absolute top-0  right-0 h-full w-fit object-contain md:flex hidden"></Image>
				<Image
					src={image}
					fill
					className="object-top object-cover  opacity-20"
					alt="banner"
					// blurDataURL={backgroundImageURL}
					// placeholder="blur"
				/>
				<div className="gradient-black-top absolute top-0 left-0 w-full h-full"></div>
				<Navbar />

				<div
					className={`flex md:py-0 py-20 container flex-1 items-center md:flex-row flex-col h-full pb-[100px] z-10 ${
						center
							? " justify-center "
							: " justify-center xl:justify-start"
					} `}
				>
					<div className=" relative z-20 flex flex-col md:items-start items-center  w-full lg:left-0 left-0 ">
						<div
							className={` flex flex-col justify-center items-center ${
								center ? "" : "md:w-1/2"
							} w-full `}
						>
							{title1 && (
								<h2
									className={`text-white break-keep !font-great lg:leading-[100px] leading-[70px] lg:text-[130px] text-[70px]  ${
										center
											? "text-center"
											: "text-left -rotate-6"
									} `}
								>
									{title1}
								</h2>
							)}
							{title2 && (
								<h1
									className={` text-primary font-great lg:leading-[100px] md:leading-[70px] lg:text-[130px]  md:text-[60px]  text-[50px] leading-[50px]  whitespace-nowrap ${
										center
											? "text-center"
											: "text-left -rotate-6"
									}  `}
								>
									{title2}
								</h1>
							)}
							{title3 && (
								<p
									className={`font-anton md:text-[40px] ml-2   text-[30px] uppercase text-white ${
										center
											? "text-center"
											: "text-center -rotate-6"
									}  `}
								>
									{title3}
								</p>
							)}

							{hours && (
								<div className="flex flex-col w-full gap-2 -rotate-6 bg-white md:p-10 p-5 py-5 rounded-2xl md:ml-10 mt-10">
									<Title
										title={"1ère séance"}
										subtitle={"GRATUITE!"}
										color={"black"}
										textColor1={"primary"}
										style={"mb-0"}
									/>
									<div className="-mt-10">
										<ButtonDestroy
											primary
											icon="/logo/gift.svg"
											text={
												"Je veux profiter de l'offre !"
											}
											href={themeGeneralSettings.landingPageUrl}
											target={"_blank"}
										/>
									</div>
								</div>
							)}
						</div>
					</div>

					{hours && (
						<div className="mt-4 pb-4   container flex justify-center md:justify-end  md:absolute  bottom-40 right-40 ">
							<div className="relative   md:h-[225px] md:w-[225px] h-[175px] w-[175px] ">
								<Image
									fill
									className=" rotate-[-5deg] "
									src="/logo/horaire-circle.svg"
									alt="header"
								/>
							</div>
						</div>
					)}
				</div>
				<div className=" bg-bottomHeader h-40 w-full absolute bottom-[-1px] bg-repeat"></div>
			</div>
		</div>
	)
}

export default Header
