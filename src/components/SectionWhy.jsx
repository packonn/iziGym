import Image from "next/image"
import { Title } from "./Title"

const SectionWhy = () => {
	const array = [
		{
			title: "des coachs à fond",
			body: "Lorem ipsum dolor sit amet consectetur. Sollicitudin tincidunt purus scelerisque tempus libero et quam ullamcorper imperdiet. Tortor integer leo dolor.",
		},
		{
			title: "des coachs à fond",
			body: "Lorem ipsum dolor sit amet consectetur. Sollicitudin tincidunt purus scelerisque tempus libero et quam ullamcorper imperdiet. Tortor integer leo dolor.",
		},
		{
			title: "des coachs à fond",
			body: "Lorem ipsum dolor sit amet consectetur. Sollicitudin tincidunt purus scelerisque tempus libero et quam ullamcorper imperdiet. Tortor integer leo dolor.",
		},
		{
			title: "des coachs à fond",
			body: "Lorem ipsum dolor sit amet consectetur. Sollicitudin tincidunt purus scelerisque tempus libero et quam ullamcorper imperdiet. Tortor integer leo dolor.",
		},
		{
			title: "des coachs à fond",
			body: "Lorem ipsum dolor sit amet consectetur. Sollicitudin tincidunt purus scelerisque tempus libero et quam ullamcorper imperdiet. Tortor integer leo dolor.",
		},
		{
			title: "des coachs à fond",
			body: "Lorem ipsum dolor sit amet consectetur. Sollicitudin tincidunt purus scelerisque tempus libero et quam ullamcorper imperdiet. Tortor integer leo dolor.",
		},
	]

	return (
		<div className="h-screen">
			<div className="container">
				<div className="flex justify-center bg-sign  bg-contain bg-no-repeat bg-center text-center">
					<Title
						title={"Pourquoi choisir"}
						subtitle={"IZI GYM ?"}
						color={"secondary"}
					/>
				</div>
				<div>
					{array.map((e, i) => {
						return (
							<div>
								<div className="bg-rectangleOrange w-[66px] h-[66px] bg-contain relative ">
									<Image
										src={"/logo/runner.svg"}
										fill
										className="p-3"
									/>
								</div>
								<div>
									<h3 className="uppercase font-anton font-normal">
										{e.title}
									</h3>
									<p className="text-base tracking-[1.5px]">
										{e.body}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default SectionWhy
