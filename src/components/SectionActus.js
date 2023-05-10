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
		<div className="bg-actusBG min-h-[70vh] ">
			<div className="container ">
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
								<div className="bg-primary text-white font-bold	 w-24 h-24 text-4xl flex flex-col items-center justify-center">
									{e.date.day > 9 ? (
										<div>{e.date.day}</div>
									) : (
										<div>0{e.date.day}</div>
									)}
									<div>{e.date.month}</div>
								</div>
								<div className="text-white ">
									{e.time && (
										<p className="text-sm">{e.time}</p>
									)}
									<p className="text-4xl font-bold">
										{e.title}
									</p>
									<div className="flex">
										<Link
											href={`${e.link}`}
											className="text-sm mr-2"
										>
											EN SAVOIR PLUS
										</Link>
										<Image
											width={13}
											height={13}
											src={"/assets-dev/arrow.svg"}
										/>
									</div>
								</div>
								<Image fill src={e.img} className="-z-10" />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default SectionActus
