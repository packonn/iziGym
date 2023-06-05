import { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "@/components/Layout"

import Image from "next/image"
import { useEffect, useState } from "react"
import VideoPlayer from "@/components/Video"
import SwiperGallery from "@/components/SwiperGallery"
import SectionActus from "@/components/SectionActus"
import {
	actus,
	breakPointsSwiper,
	images,
	slidesPerView,
} from "../../../helpers"

export const getServerSideProps = async (context) => {
	const slug = context.params
	console.log(slug)

	let actu = {}

	// try {
	// 	const response = await apolloClient.query({
	// 		query: gql`
	// 			{

	// 			}
	// 		`,
	// 	})
	// 	actus = await response
	// } catch (error) {
	// 	console.log("error", error)
	// }

	return {
		props: {
			actu: actu,
		},
	}
}

const ActualiteSlug = ({ slug }) => {
	const router = useRouter()
	const [showVideo, setShowVideo] = useState(false)

	// useEffect(() => {
	// 	setShowVideo(true)
	// }, [])

	return (
		<div></div>
		// <Layout
		// 	backgroundImageURL="/assets-dev/header.png"
		// 	title1="Club"
		// 	title2="IZI GYM"
		// 	title3="Deviens la meileure version de toi mêmessss !"
		// 	center
		// >
		// 	<div className="container md:w-[884px] w-full pb-[80px] -mt-[120px]">
		// 		<div className="  relative h-[600px] ">
		// 			<Image
		// 				fill
		// 				className="w-full h-full right-10 object-cover "
		// 				src="/assets-dev/header.png"
		// 				alt="header"
		// 			/>
		// 		</div>
		// 		<div className="   z-10 ">
		// 			<div
		// 				dangerouslySetInnerHTML={{
		// 					__html: "<h1>titre</h1><p>jefzifheoz</p>",
		// 				}}
		// 				className="py-4"
		// 			></div>
		// 			{showVideo && (
		// 				<div className="player-wrapper overflow-hidden p-[0px]  bg-black ">
		// 					<VideoPlayer
		// 						url="https://www.youtube.com/watch?v=NigrQ9UcJy4"
		// 						isPlaying={false}
		// 					/>
		// 				</div>
		// 			)}
		// 			<div className="mt-4">
		// 				<SwiperGallery
		// 					data={[...images.map((item) => item)]}
		// 					breakpoints={breakPointsSwiper}
		// 					slidesPerView={slidesPerView}
		// 				/>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<SectionActus data={actus.filter((e, i) => e.slug !== slug)} />
		// </Layout>
	)
}

export default ActualiteSlug
