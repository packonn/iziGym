import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import { useEffect, useState } from "react"
import ActusItem from "@/components/ActusItem"
import apolloClient from "../../../apollo-client"
import { gql } from "@apollo/client"
import Pagination from "@/components/Pagination"
import { actusURL } from "../../../helpers"

export const getServerSideProps = async (context) => {

	let actus = []
	let first = 6
	let last = 6

	const query = (context.query.paramsQuery) ? context.query.paramsQuery : `first: ${first}`
    const currentPage = (context.query.page) ? context.query.page : 1;
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
			first:first
		},
	}
}

const Actualites = ({  actus, pageInfo,last, first }) => {


    const hasPreviousPage = pageInfo.hasPreviousPage
    const hasNextPage = pageInfo.hasNextPage
    const startCursor = pageInfo.startCursor
    const endCursor = pageInfo.endCursor

	return (
		<Layout
			contactBannerColor="white"
			backgroundImageURL="/assets-dev/bg-actus.jpg"
			title3="Découvrez les dernières actualités de votre salle de sport"
			title2='Actualités'
			center
			classCustom=" min-h-[450px]"
		>
			<div className="container pt-20 pb-4 grid xl:grid-cols-3 md:grid-cols-2 gap-4  grid-cols-1    relative z-50   justify-center items-center ">
				{actus.map((actu, index) => {
					return (
						<div className="!h-[420px]" key={index}>
							<ActusItem item={actu} key={index} />
						</div>
					)
				})}
			</div>
			<div className="container pb-10">
			<Pagination first={Number(first)} last={Number(last)} href={actusURL} hasNextPage={hasNextPage} hasPreviousPage={hasPreviousPage} startCursor={startCursor} endCursor={endCursor} />
			</div>
		</Layout>
	)
}

export default Actualites
