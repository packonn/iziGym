import BandeauInfo from "@/components/BandeauInfo"
import BandeauPromo from "@/components/BandeauPromo"
const Header = () => {
	return (
		<div>
			<div className="absolute w-full">
				<BandeauInfo />
				<BandeauPromo />
			</div>
			<div className="h-screen bg-header flex">
				<div className="bg-floatRight h-screen w-full bg-no-repeat"></div>
				<div className="bg-floatLeft h-screen w-full bg-right bg-no-repeat"></div>
			</div>
			<div className=" bg-bottomHeader h-40 w-full absolute bottom-0"></div>
		</div>
	)
}

export default Header
