import Image from "next/image"
import pin from "../../public/logo/pin.svg"
import clock from "../../public/logo/clock.svg"
import phone from "../../public/logo/phone.svg"
import { DataContext } from "../../context/DataContext"
import { useContext } from "react"
import Link from "next/link"

const BandeauInfo = () => {
	const { dataInfosGeneral } = useContext(DataContext)
	return (
		<div className=" bg-secondary text-white text-xs relative  ">
			<div className=" fixed  bottom-4  right-4  gap-2 flex flex-col">
				<Link
					href={process.env.SITE_URL + "#contact"}
					className="ml-2 text-14 leading-[16px] bg-primary py-2 pb-4 px-4 rounded-xl flex items-center justify-center flex-col drop-shadow-xl"
				>
					<div className="flex flex-col font-anton">
						<span className="text-center font-anton tracking-[1px]">
							1ère
						</span>

						<span className="text-center font-anton tracking-[1px]">
							SÉANCE
						</span>
						<span className="text-center font-anton tracking-[1px]">
							GRATUITE
						</span>
						<span className="text-center font-anton tracking-[1px] underline">
							ICI
						</span>
					</div>
					<Image
						src={"/logo/gift.svg"}
						alt="phone logo"
						width={30}
						height={30}
						className="object-contain"
					/>
				</Link>
				<div className="flex items-center justify-between">
					<a
						href={`tel:${dataInfosGeneral?.phone}`}
						className="ml-2 text-16 bg-white h-12 w-12 rounded-full flex items-center justify-center drop-shadow-xl"
					>
						<Image
							src={phone}
							alt="phone logo"
							width={24}
							height={24}
						/>
					</a>
					<a
						href={`mailto:${dataInfosGeneral?.email}`}
						className="ml-2 text-16 bg-primary h-12 w-12 rounded-full flex items-center justify-center drop-shadow-xl"
					>
						<Image
							src={"/logo/white-mail.svg"}
							alt="phone logo"
							width={24}
							height={24}
						/>
					</a>
				</div>
			</div>
			<div className="flex flex-wrap justify-center items-center md:gap-10 gap-x-4 py-2 container">
				<div className="flex items-center justify-center ">
					<Image
						src={pin}
						alt="Pin logo"
						width={20}
						height={20}
						className="object-contain "
					/>
					<div
						dangerouslySetInnerHTML={{
							__html: dataInfosGeneral?.address,
						}}
						className="md:ml-2 text-16 text-center md:text-left"
					></div>
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
