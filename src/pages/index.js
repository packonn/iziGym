import Header from "@/components/Header"
import SectionActus from "@/components/SectionActus"
import SectionServices from "@/components/SectionServices"

export default function Home() {
	return (
		<div>
			<Header />
			<SectionServices />
			<SectionActus />
		</div>
	)
}
