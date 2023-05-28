import Image from "next/image"
import Link from "next/link"
import { Title } from "./Title"
import { ActusCarousel } from "./ActusCarousel"

const SectionActus = ({data, bottomBanner}) => {
	console.log('data', data)
	return (
		<div className="bg-actusBG min-h-[70vh] bg-center bg-contain pb-20 relative">
			<div className="relative w-full h-20 bottom-1">
				<Image src="/assets-dev/banner-white.png" fill />
			</div>
			<div className="container py-10 ">
				<Title
					title={"Les dernières"}
					subtitle={"ACTUS DU CLUB"}
					color={"white"}
				/>
				<ActusCarousel data={data} />
			</div>
			{bottomBanner &&
			
				<div className="absolute -bottom-[1px] w-full h-20 pt-20">
				<Image src="/assets-dev/white_bottom_wave_03.png" fill />
				</div>
			}
		</div>
	)
}

export default SectionActus
