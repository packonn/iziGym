import Image from "next/image"
import pin from "../../public/logo/pin.png"
import clock from "../../public/logo/clock_orange.png"
import phone from "../../public/logo/tel_orange.png"

const BandeauInfo = () => {
	return (
		<div className=" bg-secondary text-white text-xs ">
			<div className="flex flex-wrap justify-center items-center md:gap-10 gap-x-4 py-2 container">
				<div className="flex items-center">
					<Image
						src={pin}
						alt="Pin logo"
						width={15}
						height={20}
						// blurDataURL="data:..." automatically provided
						// placeholder="blur" // Optional blur-up while loading
					/>
					<p className="ml-2">Z.A Fief Girard Ouest, 17290 Le Thou</p>
				</div>
				<div className="flex items-center">
					<Image
						src={clock}
						alt="clock logo"
						width={20}
						height={20}
						// blurDataURL="data:..." automatically provided
						// placeholder="blur" // Optional blur-up while loading
					/>
					<p className="ml-2">7/7 | 6h-23h</p>
				</div>
				<div className="flex items-center">
					<Image
						src={phone}
						alt="phone logo"
						width={18}
						height={18}
						// blurDataURL="data:..." automatically provided
						// placeholder="blur" // Optional blur-up while loading
					/>
					<p className="ml-2">09.54.59.76.86</p>
				</div>
			</div>
		</div>
	)
}

export default BandeauInfo
