import Image from "next/image"
import SectionContact from "./SectionContact"
import Link from "next/link"
import { dataInfosGeneral } from "../data"
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
const FooterLandingPage = () => {
	return (
		<footer className="relative">
			<div className="relative  -mt-14 w-full h-full left-0 top-0">
				<div className="relative w-full h-20 -mb-[1px]">
					<Image
						src="/assets-dev/banner-top-footer.png"
						fill
						alt="banner"
					/>
				</div>
				<div className=" bg-black2 ">
					<div className="container py-10 relative grid gap-x-2 grid-cols-3">
						<div className="lg:col-span-1 col-span-5 ">
							<Image
								src="/logo/logo.webp"
								width={150}
								height={150}
								alt="logo"
							/>
							<div className="grid grid-cols-1  mt-4 gap-x-4 ">
								<div className="col-span-1">
									<div className="w-fit">
										<ButtonDestroy
											primary
											text="Visiter le site IZI GYM"
											href={"/"}
										/>
										<h2
											className={`text-white break-keep !font-great text-[30px] text-left
									 `}
										>
											La forme sans la frime !
										</h2>
									</div>
								</div>
							</div>
						</div>
						<div className="lg:col-span-2 col-span-5 lg:border-l lg:pl-4  border-gray border-t lg:border-t-0 lg:pt-0 mt-5 lg:mt-0 pt-5  grid grid-cols-2 gap-x-2 gap-y-4">
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
									<a
										href={dataInfosGeneral.addressurl}
										className="text-roboto  !text-16 text-white"
									>
										{dataInfosGeneral.address}
									</a>
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
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterLandingPage
