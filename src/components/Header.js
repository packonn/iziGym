import BandeauInfo from "@/components/BandeauInfo"
import BandeauPromo from "@/components/BandeauPromo"
import Navbar from "@/components/Navbar"
const Header = () => {
	return (
		<div>
			<div className="z-20 relative">
				<BandeauInfo />
				<BandeauPromo />
			</div>

			<div className="h-[90vh] w-full  relative  bg-header bg-no-repeat bg-cover flex flex-col ">
				<Navbar />

				<div className="bg-floatRight absolute top-0 left-0 h-full w-full bg-no-repeat"></div>
				<div className="flex container h-full items-start pt-20">
					<div className="  mx-0 w-fit ">
						<h2 className="text-white font-great text-9xl text-center -rotate-6">
							Club
						</h2>
						<h1 className=" text-primary font-great text-9xl whitespace-nowrap  -rotate-6">
							IZI GYM
						</h1>
						<p className="font-anton text-[40px] uppercase text-white text-center -rotate-6">
							deviens la meilleure <br /> version de toi même
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
