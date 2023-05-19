import Header from "@/components/Header"
import Layout from "@/components/Layout"
import SectionActus from "@/components/SectionActus"
import SectionContact from "@/components/SectionContact"
import SectionServices from "@/components/SectionServices"
import SectionWhy from "@/components/SectionWhy"

export default function Home() {
	return (
		<Layout
			backgroundImageURL="/assets-dev/header.png"
			title1="Club"
			title2="IZI GYM"
			title3="Deviens la meileure version de toi même !"
		>
			<SectionServices />
			<SectionActus />
			<SectionWhy />
		</Layout>
	)
}
