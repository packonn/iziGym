import Layout from "@/components/Layout";
import Planning from "@/components/Planning";
import SectionActus from "@/components/SectionActus";
import SectionServices from "@/components/SectionServices";
import SectionWhy from "@/components/SectionWhy";
import { gql } from "@apollo/client";
import apolloClient from "../../apollo-client";
import Image from "next/image";
import Prices from "@/components/Price";

export const getServerSideProps = async () => {
	let actus = null;

	try {
		const response = await apolloClient.query({
			query: gql`
				{
 				posts {
 					nodes {
 						title
 						content
 						featuredImage {
 							node {
 								sourceUrl
 							}
 						}
 						groupeChampsArticle {
 							subtitle
 							startdate
 							videourl
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
		})

		
		actus = await response?.data.posts.nodes;
	} catch (error) {
		console.log("error", error)
	}

	return {
		props: {
			actus: actus,
		},
	}


}



export default function Home({ actus }) {
	return (
		<Layout
			contactBannerColor="cream"
			backgroundImageURL="/assets-dev/bg-home.jpeg"
			title1="Club"
			title2="IZI GYM"
			title3="La forme sans la frime !"
			hours
		>
			<SectionServices />
			<SectionActus bottomBanner actus={actus} />
			<SectionWhy />

			<div className="relative">
				<div className="relative w-full h-20 -mt-20 z-20">
					<Image
						src="/assets-dev/banner-top-footer.png"
						fill
						className="object-cover w-full h-20 "
						alt="separation entre section planning et présentation de la salle de sport izigym à Aigrefeuille d'aunis 17290"
					/>
				</div>
				<Planning />
				<Image
					src="/assets-dev/wave-cream.svg"
					width={1920}
					height={1080}
					alt=""
					className=" !w-full absolute bottom-0 z-10  bg-no-repeat bg-cover "
				/>
			</div>

			<div className="bg-[#F6F3F2]">
				<Prices/>
			</div>
			
		</Layout>
	);
}
