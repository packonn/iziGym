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
				<div className="flex container h-full items-start pt-20">
					<div className="  mx-0 w-fit ">
						<h2 className="text-white font-great leading-[130px] text-[130px] text-center -rotate-6">
							{title1}
						</h2>
						<h1 className=" text-primary font-great text-[130px]  leading-[130px] whitespace-nowrap text-center   -rotate-6">
							{title2}
						</h1>
						<p className="font-anton text-[40px] uppercase text-white text-center -rotate-6">
							{title3}
						</p>
					</div>
				</div>
				<div className="bg-floatLeft  absolute top-0 right-0 h-full w-full bg-right bg-no-repeat"></div>
				<div className=" bg-bottomHeader h-40 w-full absolute bottom-0"></div>
			</div>
		</div>
	)
}

export default Header
