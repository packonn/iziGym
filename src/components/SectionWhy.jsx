import Image from "next/image"
import { Title } from "./Title"
import ButtonDestroy from "./ButtonDestroy"

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
		<div className="relative  ">
			<div className="container md:pt-20 pt-10">
				<div className="flex mb-10 justify-center bg-sign  bg-contain bg-no-repeat bg-center text-center">
					<Title
						title={"Pourquoi choisir"}
						subtitle={"IZI GYM ?"}
						color={"secondary"}
					/>
				</div>
				<div className="grid mt-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mb-24 mb-10">
					{array.map((e, i) => {
						return (
							<div key={i} className={"flex "}>
								<div className="bg-rectangleOrange w-[66px] h-[66px] bg-contain relative ">
									<Image
										src={"/logo/runner.svg"}
										fill
										alt="runner"
										className="p-3"
									/>
								</div>
								<div className="flex-1 ml-4">
									<h3 className="uppercase font-anton font-regular text-[22px]">
										{e.title}
									</h3>
									<p className="text-16 font-light font-roboto  tracking-[1.5px]">
										{e.body}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className=" w-full bg-[url('/logo/bandeau-orange.png')]  lg:pb-0 md:pb-14 pb-14 bg-no-repeat bg-cover relative z-50">
				<div className="container md:pb-0 pb-10 flex flex-col md:flex-row items-center justify-between">
					<div className="flex relative   md:w-[480px] md:h-[371px] w-full h-[231px] z-[60] left-0 ">
						<Image
							src={"/assets-dev/hero_image_05 1.svg"}
							fill
							alt="img"
						/>
					</div>
					<div className="flex justify-center items-center ">
						<Title
							title={"1ère séance"}
							subtitle={"GRATUITE!"}
							color={"secondary"}
							textColor1={"white"}
						/>
					</div>
					<div className="gap-y-4 flex flex-col md:items-start items-center">
						<ButtonDestroy
							secondary
							icon="/logo/white-mail.svg"
							text="izigym@hotmail.com"
						/>
						<ButtonDestroy
							white
							icon="/logo/black-phone.svg"
							text="09 54 59 76 86"
						/>
					</div>
				</div>
			</div>
			<div className="relative  w-full h-20 -mt-16 z-50 ">
				<Image src="/logo/wave-black.png" alt="banner" fill />
			</div>
		</div>
	)
}

export default SectionWhy
