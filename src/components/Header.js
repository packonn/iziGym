import BandeauInfo from "@/components/BandeauInfo"
import BandeauPromo from "@/components/BandeauPromo"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import DataContextProvider from "../../context/DataContext"

const Header = ({
	backgroundImageURL,
	title1,
	title2,
	title3,
	center,
	classCustom,
	hours,
}) => {
	return (
		<DataContextProvider>
		<div>
			<div className="z-20 relative">
				<BandeauInfo  />
				<BandeauPromo  />
			</div>

			<div
				className={`min-h-[80vh] bg-primary  w-full  relative  flex flex-col ${classCustom}`}
			>
				<Image
					src={backgroundImageURL}
					fill
					className="object-top object-cover"
					alt="banner"
				/>
				<div className="gradient-black-top absolute top-0 left-0 w-full h-full"></div>
				<Navbar />

				<div className="bg-floatRight absolute top-0 left-0 h-full w-full bg-no-repeat"></div>
				<div
					className={`flex container flex-1 items-center md:flex-row flex-col h-full pb-[100px] z-[9999] ${
						center
							? " justify-center "
							: " justify-center xl:justify-start"
					} `}
				>
					<div className=" relative z-20 flex flex-col md:items-start items-center  w-full lg:left-0 left-0 md:left-[70px] ">
						<div
							className={` flex flex-col justify-center items-center ${
								center ? "" : "md:w-1/2"
							} w-full `}
						>
							{title1 && <h2
								className={`text-white font-great md:leading-[130px] md:text-[130px] text-[80px] leading-[80px] ${
									center
										? "text-center"
										: "text-left -rotate-6"
								} `}
							>
								{title1}
							</h2>}
							{title2 &&<h1
								className={` text-primary font-great md:leading-[130px] md:text-[130px] text-[80px] leading-[80px] whitespace-nowrap ${
									center
										? "text-center"
										: "text-left -rotate-6"
								}  `}
							>
								{title2}
							</h1>
							}
							{title3 && 
							
								<p
								className={`font-anton md:text-[40px] ml-2   text-[30px] uppercase text-white ${
									center
									? "text-center"
									: "text-center -rotate-6"
								}  `}
								>
								{title3}
								</p>
							}
						</div>
						
					</div>
					{hours && (
						<div className="mt-4 pb-4  container flex justify-center md:justify-end   md:absolute  bottom-10 ">
							<Image
								width={225}
								height={225}
								className=" rotate-[-5deg] "
								src="/logo/horaire-circle.svg"
								alt="header"
							/>
						</div>
					)}
				</div>
				<div className="bg-floatLeft  absolute top-0 right-0 h-full w-full bg-right bg-no-repeat"></div>
				<div className=" bg-bottomHeader h-40 w-full absolute bottom-[-1px]  bg-repeat"></div>
			</div>
		</div>
		</DataContextProvider>
	)
}

export default Header
