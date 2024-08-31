import Layout from "@/components/Layout"
import { breakPointsSwiper, slidesPerView } from "../../../helpers"
import ContentDynamic from "@/components/ContentDynamic"
import { useEffect, useState } from "react"
import Planning from "@/components/Planning"
import { space, } from "@/static-data"

export const getServerSideProps = async (context) => {
	const slug = context.params.slug
	
	return {
		props: {
			slug: slug,
		},
	}
}

const SpaceDetails = ({  slug }) => {
	const [showVideo, setShowVideo] = useState(false)
const currentSpace = space[slug]
	useEffect(() => {
		setShowVideo(true)
	}, [])

	return (
		<Layout
			contactBannerColor="white"
			center
			backgroundImageURL={
				currentSpace.featuredImage?.node
					? currentSpace.featuredImage?.node.sourceUrl
					: "/assets-dev/placeholder.png"
			}
			title1={currentSpace.title}
			classCustom=" min-h-[300px] md:min-h-[400px]"
		>
			<div className="py-20">
				<ContentDynamic
					showVideo={showVideo}
					title={currentSpace.title}
					videoURL={currentSpace.groupeChampsEspacesDuClub?.videourl}
					collapse={currentSpace.groupeChampsEspacesDuClub?.collapse}
					subtitle={currentSpace.groupeChampsEspacesDuClub?.subtitle}
					slidesPerView={slidesPerView}
					content={currentSpace.content}
					gallery={currentSpace.groupeChampsEspacesDuClub?.galleriephotos}
					breakPointsSwiper={breakPointsSwiper}
				/>

				{slug === "cours-collectifs" && (
					<div className="mt-10">
						<Planning />
					</div>
				)}

				
			</div>
		</Layout>
	)
}

export default SpaceDetails
