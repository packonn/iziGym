import Button from "@/components/ButtonDestroy"
import Dropdown from "@/components/Dropdown"
import Layout from "@/components/Layout"
import { Title } from "@/components/Title"
import { breakPointsSwiper, images, slidesPerView } from "../../helpers"
import VideoPlayer from "@/components/Video"
import SwiperGallery from "@/components/SwiperGallery"
import { useContext, useEffect, useState } from "react"
import ContentDynamic from "@/components/ContentDynamic"
import { DataContext } from "../../context/DataContext"

export const planning = [
	{
		day: "Lundi",
		morning: [
			{
				title: "Body pump",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Abdos-fessiers",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Body balance",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
		],
		afternoon: [
			{
				title: "Abdos-fessiers",
				time: "14h00 - 15h00",
				coach: "Jean-Michel",
			},
			{
				title: "RPM",
				time: "16h00 - 16h45",
				coach: "Jean-Michel",
			},
		],
	},
	{
		day: "Mardi",
		morning: [
			{
				title: "Body pump",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Abdos-fessiers",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Body balance",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
		],
		afternoon: [
			{
				title: "Abdos-fessiers",
				time: "14h00 - 15h00",
				coach: "Jean-Michel",
			},
			{
				title: "RPM",
				time: "16h00 - 16h45",
				coach: "Jean-Michel",
			},
		],
	},
	{
		day: "Mercredi",
		morning: [
			{
				title: "Body pump",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Abdos-fessiers",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Body balance",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
		],
		afternoon: [
			{
				title: "Abdos-fessiers",
				time: "14h00 - 15h00",
				coach: "Jean-Michel",
			},
			{
				title: "RPM",
				time: "16h00 - 16h45",
				coach: "Jean-Michel",
			},
		],
	},
	{
		day: "Jeudi",
		morning: [
			{
				title: "Body pump",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Abdos-fessiers",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Body balance",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
		],
		afternoon: [
			{
				title: "Abdos-fessiers",
				time: "14h00 - 15h00",
				coach: "Jean-Michel",
			},
			{
				title: "RPM",
				time: "16h00 - 16h45",
				coach: "Jean-Michel",
			},
		],
	},
	{
		day: "Vendredi",
		morning: [
			{
				title: "Body pump",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Abdos-fessiers",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Body balance",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
		],
		afternoon: [
			{
				title: "Abdos-fessiers",
				time: "14h00 - 15h00",
				coach: "Jean-Michel",
			},
			{
				title: "RPM",
				time: "16h00 - 16h45",
				coach: "Jean-Michel",
			},
		],
	},
	{
		day: "Samedi",
		morning: [
			{
				title: "Body pump",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Abdos-fessiers",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
			{
				title: "Body balance",
				time: "10h00 - 11h00",
				coach: "Jean-Michel",
			},
		],
		afternoon: [
			{
				title: "Abdos-fessiers",
				time: "14h00 - 15h00",
				coach: "Jean-Michel",
			},
			{
				title: "RPM",
				time: "16h00 - 16h45",
				coach: "Jean-Michel",
			},
		],
	},
]

export const getServerSideProps = async (context) => {
	return {
		props: {},
	}
}

const Service = () => {
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

	const { data } = useContext(DataContext)
	console.log("context", data)

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

export default Service
