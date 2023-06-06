import { NextPage } from "next"
import dayjs from "dayjs"
import "dayjs/locale/fr"
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
import apolloClient from "../../../apollo-client"
import { gql } from "@apollo/client"

export const getServerSideProps = async (context) => {
	const slug = context.params.slug

	let actu = {}

	try {
		const response = await apolloClient.query({
			query: gql`
			{
				post(id: "${slug}", idType: SLUG) {
				  title
				  content
				  featuredImage {
					node {
					  sourceUrl
					}
				  }
				  slug
				  groupeChampsArticle {
					enddate
					startdate
					subtitle
					videourl
					gallery {
					  sourceUrl
					}
					actuimage {
					  sourceUrl
					}
				  }
				}
			  }
			`,
		})
		actu = await response.data.post
	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			actu: actu,
		},
	}
}

const ActualiteSlug = ({ slug, actu }) => {
	const [showVideo, setShowVideo] = useState(false)

	useEffect(() => {
		setShowVideo(true)
	}, [])

	let dateEnd = dayjs(actu.groupeChampsArticle.enddate).format("DD MMM")
	let dateStart = dayjs(actu.groupeChampsArticle.startdate)
		.locale("fr")
		.format("dddd DD MMMM YYYY")

	return (
		<Layout
			backgroundImageURL={actu.featuredImage.node.sourceUrl}
			title1={actu.title}
			title2={actu.groupeChampsArticle.subtitle}
			title3={dateStart}
			center
		>
			<div className="container md:w-[884px] w-full pb-[80px] -mt-[120px]">
				<div className="  relative h-[600px] ">
					<Image
						fill
						className="w-full h-full right-10 object-cover "
						src={actu.groupeChampsArticle.actuimage.sourceUrl}
						alt="header"
					/>
				</div>
				<div className="   z-10 ">
					<div
						dangerouslySetInnerHTML={{
							__html: `${actu.content}`,
						}}
						className="py-4"
					></div>
					{showVideo && (
						<div className="player-wrapper overflow-hidden p-[0px]  bg-black ">
							<VideoPlayer
								url={actu.groupeChampsArticle.videourl}
								isPlaying={false}
							/>
						</div>
					)}
					<div className="mt-4">
						<SwiperGallery
							data={[
								...actu.groupeChampsArticle.gallery.map(
									(item) => item.sourceUrl
								),
							]}
							breakpoints={breakPointsSwiper}
							slidesPerView={slidesPerView}
						/>
					</div>
				</div>
			</div>
			<SectionActus data={actus.filter((e, i) => e.slug !== slug)} />
		</Layout>
	)
}

export default ActualiteSlug
