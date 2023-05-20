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
		<div className="relative">
			<div className="container">
				<div className="flex justify-center bg-sign  bg-contain bg-no-repeat bg-center text-center">
					<Title
						title={"Pourquoi choisir"}
						subtitle={"IZI GYM ?"}
						color={"secondary"}
					/>
				</div>
				<div className="grid grid-cols-3 gap-10 mb-24">
					{array.map((e, i) => {
						return (
							<div key={i} className={""}>
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
			<div className=" w-full bg-[url('/logo/bandeau-orange.png')] bg-no-repeat ">
				<div className="container flex items-center justify-between">
					<div className=" relative w-[580px] h-[431px] z-50 ">
						<div className="absolute w-[580px] h-[431px] -left-10">
							<Image
								src={"/assets-dev/hero_image_05 1.svg"}
								fill
								alt="img"
							/>
						</div>
					</div>
					<Title
						title={"1ère séance"}
						subtitle={"GRATUITE!"}
						color={"secondary"}
						textColor1={"white"}
					/>
					<div className="h-32 flex flex-col justify-between z-50">
						<div className="bg-[url('/assets-dev/button-bg-black.svg')] w-[253px] h-14 text-white flex items-center px-6 py-3">
							<Image
								src={"/logo/white-mail.svg"}
								width={25}
								height={20}
							/>
							<p className="ml-4 font-anton text-xl uppercase">
								izigym@hotmail.com
							</p>
						</div>
						<div className="bg-[url('/assets-dev/button-bg-white.svg')] w-[253px] h-14 flex items-center px-6 py-3 -z-20">
							<Image
								src={"/logo/black-phone.svg"}
								width={21}
								height={21}
							/>
							<p className="ml-4 font-anton text-xl uppercase">
								09 54 59 76 86
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionWhy
