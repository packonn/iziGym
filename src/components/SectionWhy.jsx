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
				<div className="grid mt-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-24">
					{array.map((e, i) => {
						return (
							<div key={i} className={"flex "}>
								<div className="bg-rectangleOrange w-[66px] h-[66px] bg-contain relative ">
									<Image
										src={"/logo/runner.svg"}
										fill
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
				<div className="container lg:flex items-center justify-between">
					<div className=" lg:mx-0 mx-auto relative md:w-[400px] md:h-[301px] w-full h-[201px] z-[60] lg:-left-10   ">
						<Image
							src={"/assets-dev/hero_image_05 1.svg"}
							fill
							alt="img"
							className="lg:hidden "
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
					<div className="h-32 -mt-4 lg:-mt-0 items-center flex flex-col justify-between z-50  " >
						<div className="bg-[url('/assets-dev/button-bg-black.svg')] w-[253px] h-14 text-white flex items-center px-6 py-3">
							<Image
								src={"/logo/white-mail.svg"}
								width={25}
								height={20}
							/>
							<p className="ml-4 font-anton lg:text-xl text-16">
								izigym@hotmail.com
							</p>
						</div>
						<div className="bg-[url('/assets-dev/button-bg-white.svg')] w-[253px] h-14 flex items-center px-6 py-3 -z-20">
							<Image
								src={"/logo/black-phone.svg"}
								width={21}
								height={21}
							/>
							<p className="ml-4 font-anton lg:text-xl text-16">
								09 54 59 76 86
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:flex hidden absolute md:w-[480px] md:h-[371px] w-[380px] h-[231px] z-[60] left-0 -bottom-10  ">
				<Image
					src={"/assets-dev/hero_image_05 1.svg"}
					fill
					alt="img"
				/>
			</div>
			<div className="relative  w-full h-20 -mt-16 z-50 ">
				<Image src="/logo/wave-black.png" fill />
			</div>
		</div>
	)
}

export default SectionWhy
