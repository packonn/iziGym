import Layout from "@/components/Layout"
import { breakPointsSwiper, images, slidesPerView } from "../../../helpers"
import ContentDynamic from "@/components/ContentDynamic"
import { useEffect, useState } from "react"
import apolloClient from "../../../apollo-client"
import { gql } from "@apollo/client"
import Planning from "@/components/Planning"

export const getServerSideProps = async (context) => {
	const slug = context.params.slug
	let space = []
	let dataInfoGeneral = []

	try {
		const response = await apolloClient.query({
			query: gql`
		{
			themeGeneralSettings {
				option {
					email
					phone
					urlcalendar
					urlDeReservatioDesCoursEnLigne
							infosubscription
							planning {
								day
								course {
									hours
									when
									activity
									semainesPaires
								}
							}
				}
				
			}
			space(idType: SLUG, id: "${slug}") {
			  title
			  content
			  featuredImage {
				node {
				  sourceUrl(size: MEDIUM_LARGE)
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
				  sourceUrl(size: MEDIUM_LARGE)
				  title
				}
			  }
			}
		  }`,
			fetchPolicy: "no-cache",
		})
		space = await response.data.space
		dataInfoGeneral = await response.data.themeGeneralSettings.option
	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			space: space,
			dataInfoGeneral: dataInfoGeneral,
			slug: slug,
		},
	}
}

const SpaceDetails = ({ space, dataInfoGeneral, slug }) => {
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
			<div className="py-20">
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
					dataInfoGeneral={dataInfoGeneral}
				/>

				{slug === "cours-collectifs" && (
					<>
						<Planning
							planning={dataInfoGeneral.planning}
							urlDeReservatioDesCoursEnLigne={
								dataInfoGeneral.urlDeReservatioDesCoursEnLigne
							}
						/>
					</>
				)}
			</div>
		</Layout>
	)
}

export default SpaceDetails
