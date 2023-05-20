import BandeauInfo from "@/components/BandeauInfo"
import BandeauPromo from "@/components/BandeauPromo"
import Navbar from "@/components/Navbar"
import Image from "next/image"
const Header = ({ backgroundImageURL, title1, title2, title3, center }) => {
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
				<div className="flex container justify-center lg:justify-start h-full items-start md:pt-20 pt-32">
					<div className="  mx-0 w-fit ">
						<h2 className="text-white font-great md:leading-[130px] md:text-[130px] text-[60px] leading-[60px] text-center -rotate-6">
							{title1}
						</h2>
						<h1 className=" text-primary font-great md:leading-[130px] md:text-[130px] text-[60px] leading-[60px] whitespace-nowrap text-center   -rotate-6">
							{title2}
						</h1>
						<p className="font-anton md:text-[40px] text-[30px] uppercase text-white text-center -rotate-6">
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
