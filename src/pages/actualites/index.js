import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import { useEffect, useState } from "react"
import ActusItem from "@/components/ActusItem"
import apolloClient from "../../../apollo-client"
import { gql } from "@apollo/client"

export const getServerSideProps = async (context) => {
	let subscriptions = []
	let options = null
	let spaces = []
	let actus = {}

	try {
		const response = await apolloClient.query({
			query: gql`
				{
					posts(first: 4) {
						nodes {
							content
							title
							featuredImage {
								node {
									sourceUrl
								}
							}
							groupeChampsArticle {
								actuimage {
									sourceUrl
								}
								gallery {
									sourceUrl
								}
								startdate
								subtitle
								videourl
								enddate
							}
							slug
						}
					}
				}
			`,
		})
		actus = await response.data.posts.nodes
	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			actus: actus,
		},
	}
}

const Actualites = ({ slug, actus }) => {
	const router = useRouter()
	const [showVideo, setShowVideo] = useState(false)
	useEffect(() => {
		setShowVideo(true)
	}, [])
	console.log("actus", actus)
	const slidesPerView = 1.3
	const breakPointsSwiper = {
		768: { slidesPerView: 2.3 },
		1024: { slidesPerView: 2.3 },
		1280: { slidesPerView: 2.3 },
	}

	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/header.png"
			title3="Les actualités"
			center
			classCustom="!h-[400px] !min-h-[400px]"
		>
			<div className="container py-20 grid xl:grid-cols-3 md:grid-cols-2 gap-4  grid-cols-1    relative z-50   justify-center items-center ">
				{actus.map((actu, index) => {
					return (
						<div className="!h-[420px] relative " key={index}>
							<ActusItem actu={actu} key={index} />
						</div>
					)
				})}
			</div>
		</Layout>
	)
}

export default Actualites
