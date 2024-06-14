import Layout from "../../components/Layout"
import ActusItem from "../../components/ActusItem"
import apolloClient from "../../../apollo-client"
import { gql } from "@apollo/client"
import Pagination from "../../components/Pagination"
import { actusURL } from "../../../helpers"

export const getServerSideProps = async (context) => {
	let actus = []
	let first = 6
	let last = 6

	const query = context.query.paramsQuery
		? context.query.paramsQuery
		: `first: ${first}`
	const currentPage = context.query.page ? context.query.page : 1
	let pageInfo = []

	try {
		const response = await apolloClient.query({
			query: gql`
				{
					posts(${query}) {
						nodes {
							content
							title
							featuredImage {
								node {
									sourceUrl(size: MEDIUM_LARGE)
								}
							}
							groupeChampsArticle {
								gallery {
									sourceUrl(size: MEDIUM_LARGE)
								}
								startdate
								subtitle
								videourl
								enddate
							}
							slug
						}
						pageInfo {
							endCursor
							startCursor
							hasPreviousPage
							hasNextPage
						  }
						  
					}
				}
			`,
		})
		actus = await response.data.posts.nodes
		pageInfo = await response.data.posts.pageInfo
	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			actus: actus,
			currentPage: currentPage,
			pageInfo: pageInfo,
			last: last,
			first: first,
		},
	}
}

const Actualites = ({ actus, pageInfo, last, first }) => {
	const hasPreviousPage = pageInfo.hasPreviousPage
	const hasNextPage = pageInfo.hasNextPage
	const startCursor = pageInfo.startCursor
	const endCursor = pageInfo.endCursor

	const actusExpired = actus.filter((actu) => {
		const endDate = actu.groupeChampsArticle.enddate
		const today = new Date()
		const endDateTime = new Date(endDate)
		return endDate ? endDateTime < today : false // Check if the endDateTime is before today
	})

	const actusNotExpired = actus.filter((actu) => {
		const endDate = actu.groupeChampsArticle.enddate
		const today = new Date()
		const endDateTime = new Date(endDate)
		return endDate ? endDateTime >= today : false // Check if the endDateTime is today or in the future
	})

	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/bg-actus.webp"
			title1="Actualités"
			center
			classCustom=" min-h-[300px] md:min-h-[400px]"
		>
			<div className="container pt-20 pb-4 ">
				<div className="flex flex-col">
					<h3 className="text-2xl font-bold mb-4">
						Évènements en cours
					</h3>
					{actusNotExpired.length === 0 && (
						<p className="text-left text-black ">
							Pas d'évènements en cours
						</p>
					)}
					<div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4  grid-cols-1    relative z-20   justify-center items-center ">
						{actusNotExpired.map((actu, index) => {
							return (
								<div className="!h-[420px]" key={index}>
									<ActusItem item={actu} key={index} />
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<div className="container pt-20 pb-4 ">
				<div className="flex flex-col">
					<h3 className="text-2xl font-bold mb-4">
						Évènements passés
					</h3>
					{actusExpired.length === 0 && (
						<p className="text-left text-black ">
							Pas d'évènements passés
						</p>
					)}
					<div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4  grid-cols-1    relative z-20   justify-center items-center ">
						{actusExpired.map((actu, index) => {
							return (
								<div className="!h-[420px]" key={index}>
									<ActusItem
										item={actu}
										key={index}
										expired
									/>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<div className="container pb-10">
				<Pagination
					first={Number(first)}
					last={Number(last)}
					href={actusURL}
					hasNextPage={hasNextPage}
					hasPreviousPage={hasPreviousPage}
					startCursor={startCursor}
					endCursor={endCursor}
				/>
			</div>
		</Layout>
	)
}

export default Actualites
