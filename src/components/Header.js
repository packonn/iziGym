import BandeauInfo from "@/components/BandeauInfo"
import BandeauPromo from "@/components/BandeauPromo"
import Navbar from "@/components/Navbar"
const Header = () => {
	return (
		<div>
			<div className="absolute w-full">
				<BandeauInfo />
				<BandeauPromo />
				<Navbar />
			</div>
			<div className="h-screen w-full bg-header flex ">
				<div className="bg-floatRight h-screen w-full bg-no-repeat"></div>
				<div className="bg-floatLeft h-screen w-full bg-right bg-no-repeat"></div>
			</div>
			<div className=" bg-bottomHeader h-40 w-full absolute bottom-0"></div>
		</div>
	)
}

export default Header
