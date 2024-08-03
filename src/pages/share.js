import ButtonDestroy from "@/components/ButtonDestroy"
import { Title } from "@/components/Title"
import Image from "next/image"
import Link from "next/link"

const SharePage = () => {
	return (
		<>
			<div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full bg-white">
				<div className="text-center">
					<Title
						title="IZIGYM"
						subtitle={"La forme sans la frime !"}
						color="secondary"
					/>

					<p className="mt-5 text-[20px] font-bold text-slate-800 md:w-1/2 w-full px-6 pb-10 mx-auto">
						Votre première expérience serait encore plus fantastique
						si vous veniez accompagné d'un(e) ami(e), qu'en
						pensez-vous ? Pour offrir ce cadeau à un(e) ami(e), il
						suffit de cliquer sur le lien ci-dessous :
					</p>
					<div className="flex justify-center">
						<Link
							href={
								"sms:?body=Hey ! Tu connais la salle de sport IZI GYM à Aigrefeuille ? J’ai une invitation gratuite pour une séance découverte, profites-en vite : https://www.landing-page.izigym.fr/"
							}
							className={`bg-[url("/assets-dev/button-bg-orange.svg")] bg-no-repeat bg-cover relative z-20 flex items-center px-10 py-5 hover:opacity-80 `}
						>
							<Image
								src={"/logo/white-mail.svg"}
								width={21}
								height={21}
								blurDataURL={"/logo/white-mail.svg"}
								placeholder="blur"
								alt="icon"
							/>
							<p
								className={`bg-primary  ml-4 text-white font-anton lg:text-2xl text-20`}
							>
								Inviter 1 ami !
							</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default SharePage
