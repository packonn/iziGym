import Layout from "@/components/Layout"
import {
	breakPointsSwiper,
	images,
	slidesPerView,
} from "../../../helpers"
import ContentDynamic from "@/components/ContentDynamic"
import {  useEffect, useState } from "react"
import apolloClient from "../../../apollo-client"
import { gql } from "@apollo/client"

export const getServerSideProps = async (context) => {
	const slug = context.params.slug
	let space = []

try {
	const response = await apolloClient.query({
		query: gql`
		{
			space(idType: SLUG, id: "${slug}") {
			  title
			  content
			  featuredImage {
				node {
				  sourceUrl
				}
			  }
			  groupeChampsEspacesDuClub {
				subscription {
				  ... on Subscription {
					id
					title
					content
				  }
				}
				subtitle
				videourl
				collapse {
				  description
				  title
				}
				galleriephotos {
				  altText
				  sourceUrl
				  title
				}
			  }
			}
		  }`
	})
	space = await response.data.space

} catch (error) {
	console.log('error', error)
	
}

return {
	props: {
		space:space
	},
}

}



const SpaceDetails = ({space}) => {
	const [showVideo, setShowVideo] = useState(false)

	useEffect(() => {
		setShowVideo(true)
	}, [])


	return (
		<Layout
			contactBannerColor="white"
			center
			backgroundImageURL={space.featuredImage?.node?.sourceUrl}
			title1={space.title}
			classCustom=" min-h-[300px] md:min-h-[400px]"
		>
			<ContentDynamic
			subscriptions={space.groupeChampsEspacesDuClub.subscription}
				showVideo={showVideo}
				title={space.title}
				videoURL={space.groupeChampsEspacesDuClub.videourl}
				collapse={space.groupeChampsEspacesDuClub.collapse}
				subtitle={space.groupeChampsEspacesDuClub.subtitle}
				slidesPerView={slidesPerView}
				content={space.content}
				gallery={space.groupeChampsEspacesDuClub.galleriephotos}
				breakPointsSwiper={breakPointsSwiper}
			/>
		</Layout>
	)
}

export default SpaceDetails
