import Image from "next/image"
import Link from "next/link"
import { Title } from "./Title"

const SectionActus = () => {
	const actus = [
		{
			date: {
				day: 9,
				month: "AVR",
			},
			time: "Du 1er au 15 Avril",
			title: "1er mois gratuit Disponible",
			img: "/assets-dev/actu1.png",
			link: "#",
		},
		{
			date: {
				day: 5,
				month: "AVR",
			},
			time: "",
			title: "Ouverture 6H-23H",
			img: "/assets-dev/actu2.png",
			link: "#",
		},
		{
			date: {
				day: 2,
				month: "AVR",
			},
			time: "Rejoignez-nous",
			title: "Nouveau challenge disponible",
			img: "/assets-dev/actu3.png",
			link: "#",
		},
	]
	return (
		<div className="bg-actusBG min-h-[70vh] pb-20 relative">
			<div className="relative w-full h-20 bottom-1">
				<Image src="/assets-dev/banner-white.png" fill />
			</div>
			<div className="container pb-20">
				<Title
					title={"Les dernières"}
					subtitle={"ACTUS DU CLUB"}
					color={"white"}
				/>
				<div className="flex justify-around flex-wrap">
					{actus.map((e, i) => {
						return (
							<div
								className="relative w-96 h-96 z-50 flex flex-col justify-between pl-8 pb-8 m-2"
								key={i}
							>
								<div className="bg-primary text-white font-bold w-24 h-24 text-4xl py-2 px-5">
									{e.date.day > 9 ? (
										<p className="font-anton text-[37px] font-regular">
											{e.date.day}
										</p>
									) : (
										<p className="font-anton text-[37px] font-regular">
											0{e.date.day}
										</p>
									)}
									<p className="font-anton text-[37px] font-regular">{e.date.month}</p>
								</div>
								<div className="text-white ">
									{e.time && (
										<p className="text-sm font-bold tracking-[1.5px]">
											{e.time}
										</p>
									)}
									<p className="text-4xl font-bold leading-[37px] ">
										{e.title}
									</p>
									<Link
										href={`${e.link}`}
										className="text-sm mr-2 flex mt-1"
									>
										<p className="mr-2 font-black  tracking-[1.5px]">
											{" "}
											EN SAVOIR PLUS
										</p>
										<Image
											width={13}
											height={13}
											src={"/assets-dev/arrow.svg"}
										/>
									</Link>
								</div>
								<Image fill src={e.img} className="-z-10" />
							</div>
						)
					})}
				</div>
			</div>
			<div className="absolute -bottom-[1px] w-full h-20">
				<Image src="/assets-dev/white_bottom_wave_03.png" fill />
			</div>
		</div>
	)
}

export default SectionActus
