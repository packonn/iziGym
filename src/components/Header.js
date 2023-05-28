import BandeauInfo from "@/components/BandeauInfo"
import BandeauPromo from "@/components/BandeauPromo"
import Navbar from "@/components/Navbar"
import Image from "next/image"
const Header = ({ backgroundImageURL, title1, title2, title3, center }) => {
	console.log('center', center)
	return (
		<div>
			<div className="z-20 relative">
				<BandeauInfo />
				<BandeauPromo />
			</div>

			<div className="h-[90vh] w-full  relative  flex flex-col ">
				<Image src={backgroundImageURL} fill className="object-top object-cover" />
				<Navbar />

				<div className="bg-floatRight absolute top-0 left-0 h-full w-full bg-no-repeat"></div>
				<div className={`flex container   h-full items-start md:pt-20 pt-32 ${center ? " justify-center " : " justify-center xl:justify-start"} `}>
					<div className="  relative z-20 flex flex-col items-center w-1/2 ">
						<h2 className={`text-white font-great md:leading-[130px] md:text-[130px] text-[60px] leading-[60px] ${center ? 'text-center' : 'text-left'} -rotate-6`}>
							{title1}
						</h2>
						<h1 className={` text-primary font-great md:leading-[130px] md:text-[130px] text-[60px] leading-[60px] whitespace-nowrap ${center ? 'text-center' : 'text-left'}   -rotate-6`}>
							{title2}
						</h1>
						<p className={`font-anton md:text-[40px] ml-2   text-[30px] uppercase text-white ${center ? 'text-center' : 'text-center'} -rotate-6 `}>
							{title3}
						</p>
					</div>
				</div>
				<div className="bg-floatLeft  absolute top-0 right-0 h-full w-full bg-right bg-no-repeat"></div>
				<div className=" bg-bottomHeader h-40 w-full absolute bottom-[-1px]"></div>
			</div>
		</div>
	)
}

export default Header
