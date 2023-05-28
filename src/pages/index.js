import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Planning from "@/components/Planning"
import SectionActus from "@/components/SectionActus"
import SectionContact from "@/components/SectionContact"
import SectionPrices from "@/components/SectionPrice"
import SectionServices from "@/components/SectionServices"
import SectionWhy from "@/components/SectionWhy"
import { actus } from "../../helpers"
import Image from "next/image"

export default function Home() {
	return (
		<Layout contactBannerColor='cream'
			backgroundImageURL="/assets-dev/header.png"
			title1="Club"
			title2="IZI GYM"
			title3="Deviens la meileure version de toi même !"
			hours
		>
			<SectionServices />
			<SectionActus data={actus} bottomBanner />
			
			<SectionWhy />
			<Planning />
			<SectionPrices />
		</Layout>
	)
}
