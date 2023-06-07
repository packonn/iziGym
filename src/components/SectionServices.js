import Image from "next/image"
import { Title } from "./Title"
import { coursCollectifURL, servicesMusculationURL, spacesURL } from "../../helpers"
import Link from "next/link"

const SectionServices = ({spaces}) => {
	
	return (
		<div className="relative min-h-[65vh] md:py-20 py-10 overflow-hidden">
			<div className="container">
				<Title
					title={"Les Différents"}
					subtitle={"espaces du club"}
					color={"secondary"}
				/>
				<div>
					<div className=" bg-serviceBG h-full w-1/2 absolute top-0 left-0 -z-10"></div>
					<div className=" bg-serviceBG h-full w-1/4 absolute top-0 right-0 -z-10 rotate-12"></div>
					<div className=" grid md:grid-cols-2 grid-cols-1 gap-x-2 justify-around flex-wrap">
						{spaces && spaces.map((e, i) => {
							return (
								<Link
									href={spacesURL + "/" + e.slug}
									className="relative overflow-hidden w-full h-[30rem] flex items-end justify-start my-2 "
									key={i}
								>
									<Image
										src={e.featuredImage.node.sourceUrl}
										placeholder="blur"
						blurDataURL={e.featuredImage.node.sourceUrl}
										fill
										alt="img"
										className=" hover:saturate-100  transition duration-500 ease-in-out md:hover:scale-110  object-cover"
									/>
									<div className="p-2">
										<p className="z-20 text-white font-regular font-anton text-[37px] w-3/4 leading-[47px]	mb-2 uppercase  relative">
											{e.title}
										</p>
										<div className="z-50 relative w-6 h-6">
											<Image
												src={"/logo/fleche_orange.png"}
												fill
												alt="img"
											/>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionServices
