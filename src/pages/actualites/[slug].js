import dayjs from "dayjs"
import "dayjs/locale/fr"
import Layout from "@/components/Layout"
import Image from "next/image"
import { useEffect, useState } from "react"
import VideoPlayer from "@/components/VideoXL"
import SwiperGallery from "@/components/SwiperGallery"
import SectionActus from "@/components/SectionActus"
import { breakPointsSwiper, slidesPerView } from "../../../helpers"
import apolloClient from "../../../apollo-client"
import { gql } from "@apollo/client"

export const getServerSideProps = async (context) => {
	const slug = context.params.slug
	let actu = {}
	let actus = {}

	try {
		const response = await apolloClient.query({
			query: gql`
			{
				post(id: "${slug}", idType: SLUG) {
				  title
				  content
				  featuredImage {
					node {
						sourceUrl(size: MEDIUM_LARGE)
						slug
					}
				  }
				  slug
				  groupeChampsArticle {
					enddate
					startdate
					subtitle
					videourl
					gallery {
						sourceUrl(size: MEDIUM_LARGE)
						slug
					}
					actuimage {
						sourceUrl(size: MEDIUM_LARGE)
						slug
					}
				  }
				}
				posts {
					nodes {
					  title
					  content
					  featuredImage {
						node {
							sourceUrl(size: MEDIUM_LARGE)
							slug
						}
					  }
					  groupeChampsArticle {
						subtitle
						startdate
						videourl
						enddate
						actuimage {
							sourceUrl(size: MEDIUM_LARGE)
							slug
						}
						enddate
						startdate
						subtitle
						videourl
					  }
					  slug
					  content
					}
				  }
			  }
			`,
			fetchPolicy: "no-cache",
		})
		actu = await response.data.post
		actus = await response.data.posts.nodes
	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			actu: actu,
			actus: actus,
			slug: slug,
		},
	}
}

const ActualiteSlug = ({ slug, actu, actus }) => {
	const [showVideo, setShowVideo] = useState(false)

	const otherActus = actus.filter((actu) => actu.slug !== slug)

	useEffect(() => {
		setShowVideo(true)
	}, [])

	let dateEnd = dayjs(actu.groupeChampsArticle.enddate).format("DD MMM")
	let dateStart = dayjs(actu.groupeChampsArticle.startdate)
		.locale("fr")
		.format("dddd DD MMMM YYYY")

	return (
		<>
			<Layout
				backgroundImageURL={actu.featuredImage.node.sourceUrl}
				title1={actu.title}
				title2={actu.groupeChampsArticle.subtitle}
				center
				classCustom="md:h-[100vh] !md:min-h-[100vh] h-[60vh] min-h-[60vh]"
				contactBannerColor={otherActus.lenght > 0 ? "cream" : "white"}
			>
				<div className="container md:max-w-[884px] w-full pb-[80px] -mt-[90px]">
					<div className=" z-[9999] overflow-hidden flex justify-center items-center relative  md:h-[600px]  h-[400px] ">
						<Image
							fill
							className="w-full h-full object-contain object-center  "
							src={actu.groupeChampsArticle.actuimage.sourceUrl}
							alt={actu.title}
							placeholder="blur"
							blurDataURL={
								actu.groupeChampsArticle.actuimage.sourceUrl
							}
						/>
						<Image
							fill
							className="w-full h-full object-cover -z-10 blur-[5px] absolute top-0 left-0  "
							src={actu.groupeChampsArticle.actuimage.sourceUrl}
							placeholder="blur"
							blurDataURL={
								actu.groupeChampsArticle.actuimage.sourceUrl
							}
							alt={actu.title}
						/>
					</div>
					<div className="z-10 ">
						<div
							dangerouslySetInnerHTML={{
								__html: `${actu.content}`,
							}}
							className="py-4"
						></div>
						{showVideo && (
							<div className="">
								<h3
									className={`font-great  text-[70px]  text-secondary      -mt-2  `}
								>
									Vidéo
								</h3>
								<div className="player-wrapper overflow-hidden p-[0px]  bg-black ">
									<VideoPlayer
										url={actu.groupeChampsArticle.videourl}
										isPlaying={false}
									/>
								</div>
							</div>
						)}

						{actu.groupeChampsArticle.gallery !== null && (
							<div className="mt-4">
								<h3
									className={`font-great  text-[70px]  text-secondary      -mt-2  `}
								>
									Gallerie
								</h3>
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
						)}
					</div>
				</div>
				{otherActus && otherActus.length > 0 && (
					<SectionActus actus={otherActus} />
				)}
			</Layout>
		</>
	)
}

export default ActualiteSlug
