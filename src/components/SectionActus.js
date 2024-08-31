import Image from "next/image"
import { Title } from "./Title"
import { ActusCarousel } from "./ActusCarousel"
import ButtonDestroy from "./ButtonDestroy"



const SectionActus = ({actus, bottomBanner}) => {
	if(!actus || actus?.length === 0) return null

	return (
		<div className="bg-actusBG min-h-[70vh] bg-center bg-contain pb-20 relative ">
			<div className="relative w-full h-20 bottom-1">
				<Image
					src="/assets-dev/banner-white.png"
					fill
					alt="white banner de la Salle de sport Izi gym 17290 Aigrefeuille d'Aunis, proche de La Rochelle 17000"
				/>
			</div>
			<div className="container  py-10 ">
				<Title
					title={"Les dernières"}
					subtitle={"ACTUS DU CLUB"}
					color={"white"}
				/>
				<ActusCarousel actus={actus} />
				<div className="flex justify-start">
							<ButtonDestroy
								primary
								text="Voir toutes les actualités"
								href={"/actualites"}
							
							/>
						</div>
			</div>
			{bottomBanner && (
				<div className="absolute -bottom-[1px] w-full h-20 pt-20">
					<Image
						src="/assets-dev/white_bottom_wave_03.png"
						fill
						alt="Salle de sport Izi gym 17290 Aigrefeuille d'Aunis, proche de La Rochelle 17000"
					/>
				</div>
			)}
		</div>
	)
}

export default SectionActus
