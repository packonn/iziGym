import Image from "next/image"
import { Title } from "./Title"
import { ActusCarousel } from "./ActusCarousel"

const SectionActus = ({ bottomBanner, actus }) => {
	return (
		<div className="bg-actusBG min-h-[70vh] bg-center bg-contain pb-20 relative ">
			<div className="relative w-full h-20 bottom-1">
				<Image
					src="/assets-dev/banner-white.png"
					fill
					alt="white banner"
				/>
			</div>
			<div className="container  py-10 ">
				<div className="absolute bottom-0 bg-black opacity-75 w-full h-11"></div>
				<Title
					title={"Les dernières"}
					subtitle={"ACTUS DU CLUB"}
					color={"white"}
				/>
				<ActusCarousel actus={actus} />
			</div>
			{bottomBanner && (
				<div className="absolute -bottom-[1px] w-full h-20 pt-20">
					<Image
						src="/assets-dev/white_bottom_wave_03.png"
						fill
						alt="white_bottom_wave"
					/>
				</div>
			)}
		</div>
	)
}

export default SectionActus
