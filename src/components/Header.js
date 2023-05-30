import BandeauInfo from "@/components/BandeauInfo"
import BandeauPromo from "@/components/BandeauPromo"
import Navbar from "@/components/Navbar"
import Image from "next/image"
const Header = ({ backgroundImageURL, title1, title2, title3, center , classCustom, hours}) => {
	console.log('center', center)
	return (
		<div>
			<div className="z-20 relative">
				<BandeauInfo />
				<BandeauPromo />
			</div>

			<div className={`min-h-[80vh]  w-full  relative  flex flex-col ${classCustom}`}>
				<Image src={backgroundImageURL} fill className="object-top object-cover" />
				<div className="gradient-black-top absolute top-0 left-0 w-full h-full"></div>
				<Navbar />

				<div className="bg-floatRight absolute top-0 left-0 h-full w-full bg-no-repeat"></div>
				<div className={`flex container pt-20  h-full z-[9999] items-center ${center ? " justify-center " : " justify-center xl:justify-start"} `}>
					<div className="  relative z-20 flex flex-col md:items-start items-center  w-full  ">
					<div className={` flex flex-col justify-center items-center ${center ? "" : 'md:w-1/2'} w-full `}>
					<h2 className={`text-white font-great md:leading-[130px] md:text-[130px] text-[80px] leading-[80px] ${center ? 'text-center' : 'text-left -rotate-6'} `}>
					{title1}
					</h2>
					<h1 className={` text-primary font-great md:leading-[130px] md:text-[130px] text-[80px] leading-[80px] whitespace-nowrap ${center ? 'text-center' : 'text-left -rotate-6'}  `}>
					{title2}
					</h1>
					<p className={`font-anton md:text-[40px] ml-2   text-[30px] uppercase text-white ${center ? 'text-center' : 'text-center -rotate-6'}  `}>
					{title3}
					</p>
					</div>	
						{hours && (
							<div className="mt-4 pb-4 container flex justify-center md:justify-end  relative ">
								<Image width={225} height={225} className=" rotate-[-5deg] " src="/logo/horaire-circle.svg" alt="header" />
							</div>
							)}
					</div>
				</div>
				<div className="bg-floatLeft  absolute top-0 right-0 h-full w-full bg-right bg-no-repeat"></div>
				<div className=" bg-bottomHeader h-40 w-full absolute bottom-[-1px]"></div>
			</div>
		</div>
	)
}

export default Header
