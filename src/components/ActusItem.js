import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"
import { actusURL } from "../../helpers"

const ActusItem = ({ item }) => {
	let dateEnd = dayjs(item.groupeChampsArticle.enddate).format("DD MMM")
	let dateStart = dayjs(item.groupeChampsArticle.startdate).format("DD MMM")

	return (
		<Link
			href={actusURL + "/" + item.slug}
			className="flex h-full w-full overflow-hidden relative"
		>
			<div className="absolute bottom-0 bg-gradient-to-t from-black opacity-75 w-full h-36 z-30"></div>

			<Image
				src={item.groupeChampsArticle.actuimage.sourceUrl}
				alt={item.title}
				fill
				className="z-10 overflow-hidden absolute top-0 lef-0 w-full h-full transition duration-500 ease-in-out hover:scale-110 object-cover "
			/>
			<div className=" bg-[url('/logo/bottom-carousel-actu.png')] -bottom-[1px] relative bg-no-repeat bg-bottom h-full flex flex-col justify-end w-full p-4 pb-6 pt-0">
				<div className="bg-primary z-10 absolute -top-1 left-4 text-white font-bold  text-4xl py-2 px-5 ">
					{item.groupeChampsArticle.enddate ? (
						<div className="flex">
							<p className="font-anton text-[37px] font-regular ">
								{dateStart}
							</p>
							<span className="mx-2">-</span>
							<p className="font-anton text-[37px] font-regular">
								{dateEnd}
							</p>
						</div>
					) : (
						<p className="font-anton text-[37px] font-regular">
							{dateStart}
						</p>
					)}
				</div>
				<div className="text-white relative z-50   ">
					{item.groupeChampsArticle.subtitle && (
						<p className="text-sm font-bold tracking-[1.5px]">
							{item.groupeChampsArticle.subtitle}
						</p>
					)}
					<p className="text-4xl font-bold font-anton uppercase leading-[44px]">
						{item.title}
					</p>
					<div className="text-sm mr-2 flex mt-1">
						<p className="mr-2 font-black tracking-[1.5px]">
							EN SAVOIR PLUS
						</p>
						<Image
							width={13}
							height={13}
							src={"/assets-dev/arrow.svg"}
							alt={item.title}
						/>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ActusItem
