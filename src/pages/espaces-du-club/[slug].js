import Button from "@/components/ButtonDestroy"
import Dropdown from "@/components/Dropdown"
import Layout from "@/components/Layout"
import {
	breakPointsSwiper,
	images,
	planning,
	slidesPerView,
} from "../../../helpers"
import ContentDynamic from "@/components/ContentDynamic"
import { useEffect, useState } from "react"

export const getServerSideProps = async (context) => {
	return {
		props: {},
	}
}

const SpaceDetails = () => {
	const [showVideo, setShowVideo] = useState(false)

	useEffect(() => {
		setShowVideo(true)
	}, [])

	const otherServices = [
		{
			id: 1,
			title: "Musculation",
			description: "Une salle tout équipée",
			slug: "musculation",
		},
		{
			id: 2,
			title: "Cardio",
			description: "des ballons, des tapis et des vélos pour se dépenser",
			slug: "cardio",
		},
	]

	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/header.png"
			title1="Club"
			title2="IZI GYM"
			title3="Deviens la meileure version de toi même !"
		>
			<ContentDynamic
				data={""}
				showVideo={showVideo}
				title="Salle de musculation et cardio"
				description="Une salle tout équipée pour se dépenser"
				backgroundImageURL="/assets-dev/salle-musculation-cardio.png"
				otherServices={otherServices}
				slidesPerView={slidesPerView}
				images={images}
				breakPointsSwiper={breakPointsSwiper}
			/>
		</Layout>
	)
}

export default SpaceDetails
