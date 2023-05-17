import Header from "@/components/Header"
import SectionActus from "@/components/SectionActus"
import SectionContact from "@/components/SectionContact"
import SectionServices from "@/components/SectionServices"

export default function Home() {
	return (
		<div>
			<Header />
			<SectionServices />
			<SectionActus />
			<SectionContact />
		</div>
	)
}
