import Image from "next/image"
import pin from "../../public/logo/pin.png"
import clock from "../../public/logo/clock_orange.png"
import phone from "../../public/logo/tel_orange.png"
import { DataContext } from "../../context/DataContext"
import { useContext } from "react"

const BandeauInfo = () => {
	const { dataInfosGeneral } = useContext(DataContext)
	return (
		<div className=" bg-secondary text-white text-xs ">
			<div className="flex flex-wrap justify-center items-center md:gap-10 gap-x-4 py-2 container">
				<div className="flex items-center">
					<Image src={pin} alt="Pin logo" width={15} height={20} />
					<p className="ml-2 text-16">{dataInfosGeneral?.address}</p>
				</div>
				<div className="flex items-center">
					<Image
						src={clock}
						alt="clock logo"
						width={20}
						height={20}
						
					/>
					<div
						className="ml-2 text-16"
						dangerouslySetInnerHTML={{
							__html: dataInfosGeneral?.hoursacces,
						}}
					></div>
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
					<a
						href={`tel:${dataInfosGeneral?.phone}`}
						className="ml-2 text-16"
					>
						{dataInfosGeneral?.phone}
					</a>
				</div>
			</div>
		</div>
	)
}

export default BandeauInfo
