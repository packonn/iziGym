import Image from "next/image"
import { Title } from "./Title"

const SectionServices = () => {
	const table = [
		{ name: "cardio", img: "/assets-dev/prog3.png" },
		{ name: "musculation", img: "/assets-dev/prog2.png" },
		{ name: "fitness", img: "/assets-dev/prog1.png" },
	]
	return (
		<div className="relative h-[100vh]">
			<div className=" bg-serviceBG h-full w-1/2 absolute top-0 left-0 -z-10"></div>
			<div className=" bg-serviceBG h-full w-1/4 absolute top-0 right-0 -z-10 rotate-12"></div>
			<div className="py-10">
				<Title
					title={"Les Différences"}
					subtitle={"Service du club"}
					color={"secondary"}
				/>
			</div>
			<div className=" flex justify-around flex-wrap  ">
				{table.map((e, i) => {
					return (
						<div
							className="w-[32vw] h-[32vw] relative flex items-end "
							key={i}
						>
							<div className={`w-[32vw] h-[32vw] absolute  `}>
								<Image src={e.img} fill alt="img" />
							</div>
							<div className="mb-[1.5vw] ml-[1.5vw]">
								<p className="z-20 text-white uppercase text-[2.52vw] relative">
									{e.name}
								</p>
								<div className="z-50 relative w-[1.96vw] h-[1.96vw]">
									<Image
										src={"/logo/fleche_orange.png"}
										fill
										alt="img"
									/>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default SectionServices
