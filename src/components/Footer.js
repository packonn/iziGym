import Image from "next/image"
import SectionContact from "./SectionContact"
import { navigationURLS } from "./Navbar"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import ButtonDestroy from "./ButtonDestroy"

export const infos = [
	{
		title: "Adresse",
		texte: "Rue de la gare 1, 1000 Bruxelles",
	},
	{
		title: "Téléphone",
		texte: "02 123 45 67",
	},
	{
		title: "Horaires d'accueil",
		texte: "<p>Lundi-Mardi-Jeudi : 9h-13h30 / 16h-21h</p><p>Mercredi : 16h-21h</p><p>Vendredi : 9h-13h30 / 16h-20h</p> <p>Samedi : 9h30-13h</p>",
	},
	{
		title: "Horaires d'accès",
		texte: "<p>6h-23h - 7j/7</p>",
	},
	{
		title: "rejoignez-nous",
		texte: "",
	},
]
const Footer = ({ contactBannerColor }) => {
	const router = useRouter()
	const navigation = navigationURLS(router)
	const { dataInfosGeneral } = useContext(DataContext)
	return (
		<footer className="relative">
			<SectionContact contactBannerColor={contactBannerColor} />
			<div className="relative  -mt-14 w-full h-full left-0 top-0">
				<div className="relative w-full h-20 -mb-[1px]">
					<Image
						src="/assets-dev/banner-top-footer.png"
						fill
						alt="banner"
					/>
				</div>
				<div className=" bg-black2 ">
					<div className="container py-10 relative grid gap-x-2 grid-cols-4">
						<div className="lg:col-span-1 col-span-5 ">
							<Image
								src="/logo/logo.webp"
								width={150}
								height={150}
								alt="logo"
							/>
							<div className="grid grid-cols-1  mt-4 gap-x-4 ">
								<div className="col-span-1">
									{navigation.slice(0, 10).map((e, i) => {
										return (
											<Link href={e.href} key={i}>
												<p className="text-white !text-15 font-roboto  my-1 uppercase  tracking-widest font-regular ">
													{e.name}
												</p>
											</Link>
										)
									})}
									<div className="w-fit">
										<ButtonDestroy
											primary
											text="Je veux ma 1ère séance GRATUITE !"
											target={"_blank"}
											href={
												process.env.SITE_URL +
												"#contact"
											}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:col-span-2 col-span-5   lg:border-l lg:pl-4  border-gray border-t lg:border-t-0 lg:pt-0 mt-5 lg:mt-0 pt-5  grid grid-cols-2 gap-x-2 gap-y-4">
							<div className="md:col-span-1 col-span-2">
								<>
									<p className="bg-primary text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">
										Horaire d'accueil
									</p>
									<div
										className="text-roboto  !text-16 text-white"
										dangerouslySetInnerHTML={{
											__html: dataInfosGeneral?.hoursreception,
										}}
									/>
								</>
								<>
									<p className="bg-primary mt-2 text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">
										Horaire d'accès
									</p>
									<div
										className="text-roboto  !text-16 text-white"
										dangerouslySetInnerHTML={{
											__html: dataInfosGeneral?.hoursacces,
										}}
									/>
								</>
							</div>

							<div className="md:col-span-1 col-span-2">
								<div className="">
									<p className="bg-primary text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">
										Adresse
									</p>
									<div
										className="text-roboto  !text-16 text-white"
										dangerouslySetInnerHTML={{
											__html: dataInfosGeneral?.address,
										}}
									/>
								</div>

								<p className="bg-primary mt-2  text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">
									Téléphone
								</p>
								<a
									href={
										"'tel:" + dataInfosGeneral?.phone + "'"
									}
								>
									<div
										className="text-roboto  !text-16 text-white"
										dangerouslySetInnerHTML={{
											__html: dataInfosGeneral?.phone,
										}}
									/>
								</a>

								<p className="bg-primary mt-2 text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-3">
									Réseaux
								</p>
								<div className="flex items-center gap-x-6">
									<Link
										href={`${dataInfosGeneral?.facebookurl}`}
										target={"_blank"}
									>
										<Image
											src="/logo/fb.svg"
											width={20}
											height={20}
											className="object-contain w-5 h-5"
											alt="logo facebook"
										/>
									</Link>
									<Link
										target={"_blank"}
										href={`${dataInfosGeneral?.instagramurl}`}
									>
										<Image
											src="/logo/instagram.svg"
											width={20}
											height={20}
											className="object-contain w-5 h-5"
											alt="logo instagram"
										/>
									</Link>
								</div>
							</div>
						</div>
						{dataInfosGeneral?.addressurl && (
							<Link
								target="_blank"
								href={dataInfosGeneral?.addressurl}
								className="lg:col-span-1 col-span-5  relative w-full overflow-hidden  md:h-[300px] h-[200px] lg:border-l lg:pl-4 lg:border-t-0  border-t lg:mt-0  mt-5 border-gray "
							>
								<Image
									src="/assets-dev/maps.png"
									fill
									className="lg:ml-4 mt-5 lg:mt-0  object-cover "
									alt="logo maps"
									blurDataURL="/assets-dev/maps.png"
									placeholder="blur"
								/>
							</Link>
						)}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
