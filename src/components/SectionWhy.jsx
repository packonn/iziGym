import Image from "next/image"
import { Title } from "./Title"
import ButtonDestroy from "./ButtonDestroy"
import { themeGeneralSettings } from "@/static-data"

const SectionWhy = () => {
	const array = [
		{
			title: "Des coachs à fond",
			body: "Bénéficiez d'un encadrement personnalisé par des coachs experts et hyper cool qui vous guident vers vos objectifs",
			icon: "/logo/fitness.svg",
		},
		{
			title: "Une salle hyper équipée",
			body: "Découvrez une salle de sport ultra équipée, dotée d'équipements de pointe pour des entraînements performants.",
			icon: "/logo/gym.svg",
		},
		{
			title: "Un coaching personnalisé",
			body: "Profitez d'un accompagnement personnalisé adapté à vos besoins et objectifs spécifiques.",
			icon: "/logo/teacher.svg",
		},
		{
			title: "Une ambiance de folie",
			body: "Plongez dans une ambiance dynamique et stimulante qui vous motive à repousser vos limites",
			icon: "/logo/party-popper.svg",
		},
		{
			title: "Des cours collectifs fun",
			body: "Participez à des cours collectifs énergiques qui vous permettent de vous dépenser intensément et de vous amuser en groupe.",
			icon: "/logo/baseline-sports-gymnastics.svg",
		},
		{
			title: "Des événements réguliers",
			body: "Profitez d'une atmosphère conviviale et décontractée, ainsi que d'une variété d'événements et de sorties régulièrement organisés pour enrichir votre expérience sportive",
			icon: "/logo/event-star.svg",
		},
	]

	return (
		<div className="relative  ">
			<div className="container md:pt-20 pt-10">
				<div className="flex mb-10 justify-center bg-sign  bg-contain bg-no-repeat bg-center text-center">
					<Title
						title={"Pourquoi choisir"}
						subtitle={"IZI GYM ?"}
						color={"secondary"}
					/>
				</div>
				<div className="grid mt-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mb-24 mb-10">
					{array.map((e, i) => {
						return (
							<div key={i} className={"flex "}>
								<div className="bg-rectangleOrange w-[66px] h-[66px] bg-contain relative ">
									<Image
										src={e.icon}
										fill
										alt="icon runner"
										className="p-3"
									/>
								</div>
								<div className="flex-1 ml-4">
									<h3 className="uppercase font-anton font-regular text-[22px]">
										{e.title}
									</h3>
									<p className="text-16 font-light font-roboto  tracking-[1.5px]">
										{e.body}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className=" w-full bg-[url('/logo/bandeau-orange.png')]  lg:pb-0 md:pb-14 pb-14 bg-no-repeat bg-cover relative z-20">
				<div className="container md:pb-0 pb-10 flex flex-col md:flex-row items-center justify-between">
					<div className="flex relative   md:w-[480px] md:h-[371px] w-full h-[231px] z-10 left-0 ">
						<Image
							src={"/assets-dev/hero_image_05 1.svg"}
							fill
							alt={
								"Salle de sport Izi gym 17290 Aigrefeuille d'Aunis, proche de La Rochelle 17000"
							}
							placeholder="blur"
							blurDataURL={"/assets-dev/hero_image_05 1.svg"}
						/>
					</div>
					<div className="flex justify-center items-center ">
						<Title
							title={"1ère séance"}
							subtitle={"GRATUITE!"}
							color={"secondary"}
							textColor1={"white"}
						/>
					</div>
					<div className="gap-y-4 flex flex-col md:items-start items-center">
						<ButtonDestroy
							secondary
							icon="/logo/white-mail.svg"
							text={themeGeneralSettings.email}
							href={`mailto:${themeGeneralSettings?.email}`}
						/>
						<ButtonDestroy
							white
							icon="/logo/black-phone.svg"
							href={`tel:${themeGeneralSettings?.phone}`}
							text={themeGeneralSettings?.phone}
						/>
					</div>
				</div>
			</div>
			{/*<div className="relative  w-full h-20 -mt-16 z-10 ">
				<Image src="/logo/wave-black.png" alt="banner" fill />
			</div>*/}
		</div>
	)
}

export default SectionWhy
