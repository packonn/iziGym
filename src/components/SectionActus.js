import Image from "next/image"
import Link from "next/link"
import { Title } from "./Title"
import { ActusCarousel } from "./ActusCarousel"

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
				<ActusCarousel actus={actus} />
			</div>
			<div className="absolute -bottom-[1px] w-full h-20">
				<Image src="/assets-dev/white_bottom_wave_03.png" fill />
			</div>
		</div>
	)
}

export default SectionActus
