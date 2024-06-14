import Head from "next/head"
import Image from "next/image"
import CalendlyEmbed from "src/components/CalendlyEmbed"
import FooterLandingPage from "src/components/FooterLandingPage"
import SectionWhy from "src/components/SectionWhy"

export default function Test() {
	return (
		<>
			<Head>
				<title>Séance d'essai - Salle de sport Izi Gym Le thou</title>
				<meta name="robots" content="noindex,nofollow" />
				<meta name="googlebot" content="noindex,nofollow" />
			</Head>
			<div className="mb-10">
				<div className="bg-secondary flex items-center justify-center p-5 text-white ">
					<Image
						src="/logo/logo.webp"
						width={300}
						height={300}
						alt="IziGym Salle de sport 17290 Aigrefeuille d'Aunis, proche de La Rochelle 17000"
					/>
				</div>
				<div className="bg-black p-3">
					<p
						className={
							"font-anton mr-2 md:text-[40px]  text-[30px]  uppercase text-white text-center"
						}
					>
						Demander votre séance d'essaie offerte{" "}
						<span className="font-anton text-sm">chez IZI GYM</span>
					</p>
				</div>
			</div>
			<div className="container">
				<div className="h-[400px] relative w-full">
					<Image
						src={"/assets-dev/ads-image.jpg"}
						fill
						className="object-center object-cover"
						alt="banner"
						blurDataURL={"/assets-dev/ads-image.jpg"}
						placeholder="blur"
					/>
				</div>
				<div className="flex flex-col gap-1 mt-10">
					<span
						className={
							"font-anton md:text-[36px]  text-[30px]  uppercase text-primary text-center"
						}
					>
						séance offerte
					</span>
					<span
						className={
							"font-anton  md:text-[40px]  text-[36px] -mt-2  uppercase text-secondary text-center"
						}
					>
						dernière étape !
					</span>
					<div className="w-[50px] bg-secondary h-1 mx-auto my-4"></div>
					<p className="font-anton md:text-[24px] text-center text-[22px]  uppercase text-secondary">
						réservez ci-dessous
					</p>
					<p className="text-center text-black md:w-1/3 mx-auto">
						Choisissez ci-dessous le jour et l'heure de votre choix
						et réservez en ligne votre séance offerte !
					</p>
				</div>

				<div className="container h-full">
					<CalendlyEmbed url="https://calendly.com/izigym" />
				</div>

				<SectionWhy withoutBanner={true} />
				<div className="flex justify-center pb-20">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/QneyxL81I20?si=Kcv1IyNsTO6Ks9Gt"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</div>
			<FooterLandingPage />
		</>
	)
}
