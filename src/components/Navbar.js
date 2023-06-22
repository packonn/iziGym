import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import {
	abonnementsURL,
	actusURL,
	coursCollectifURL,
	homeURL,
	reglementInterieurURL,
	spacesURL,
	mentionslegalesURL,
	cgvURL,
} from "../../helpers"
import { infos } from "./Footer"
import { useRouter } from "next/router"
import Link from "next/link"
import ButtonDestroy from "./ButtonDestroy"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

export const navigationURLS = (router) => {
	return [
		{
			name: "Accueil",
			href: homeURL,
			current: router.asPath === homeURL,
			header: true,
			responsiveHeader: true,
		},
		{
			name: "Actualités",
			href: actusURL,
			current: router.asPath.includes(actusURL),
			header: true,
			responsiveHeader: true,
		},
		{
			name: "Cours collectif",
			href: spacesURL + coursCollectifURL,
			current: router.asPath.includes(coursCollectifURL),
			header: true,
			responsiveHeader: true,
		},
		{
			name: "Abonnements",
			href: abonnementsURL,
			current: router.asPath.includes(abonnementsURL),
			header: true,
			responsiveHeader: true,
		},
		{
			name: "Mentions légales",
			href: mentionslegalesURL,
			current: router.asPath.includes(mentionslegalesURL),
			header: false,
			responsiveHeader: true,
		},
		{
			name: "Conditions générales de vente",
			href: cgvURL,
			current: router.asPath.includes(cgvURL),
			header: false,
			responsiveHeader: true,
		},
		{
			name: "Règlement intérieur",
			href: reglementInterieurURL,
			current: router.asPath.includes(reglementInterieurURL),
			header: false,
			responsiveHeader: true,
		},
	]
}
function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
	const router = useRouter()
	const navigation = navigationURLS(router)
	const { dataInfosGeneral } = useContext(DataContext)
	return (
		<Disclosure
			as="nav"
			className="bg-transparent w-full relative z-[99999999] "
		>
			{({ open }) => (
				<>
					<div className="  container  ">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0  right-0 flex items-center lg:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white ">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-8 w-8 text-white"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-8 w-8 text-white"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex items-center w-full  lg:justify-between ">
								<div className="flex flex-shrink-0 items-center">
									<Link href={homeURL}>
										<img
											className="block md:h-14 h-12 pb-1 bg-secondary w-auto lg:hidden"
											src="/logo/logo.webp"
											alt="IziGym Salle de sport 17290 Aigrefeuille d'Aunis, proche de La Rochelle 17000"
										/>
										<img
											className="hidden md:h-14 h-10 pb-1 bg-secondary w-auto lg:block"
											src="/logo/logo.webp"
											alt="IziGym Salle de sport 17290 Aigrefeuille d'Aunis, proche de La Rochelle 17000"
										/>
									</Link>
								</div>
								<div className="hidden sm:ml-6 lg:block">
									<div className="flex space-x-4 items-center">
										{navigation
											.filter((item) => item.header)
											.map((item) => (
												<Link
													href={item.href}
													key={item.name}
													className={classNames(
														item.current
															? " text-white border-b-2 border-primary"
															: "text-white  hover:text-primary",
														" px-2 text-[17px] py-2 font-bold text-sm uppercase tracking-widest"
													)}
													aria-current={
														item.current
															? "page"
															: undefined
													}
												>
													{item.name}
												</Link>
											))}

										{/* <ButtonDestroy
											classCustom={
												" uppercase font-bold  !text-[17px] !leading-[20px] font-roboto "
											}
											primary
											text="Réserver un cours"
											target={"_blank"}
											href={
												dataInfosGeneral?.urlDeReservatioDesCoursEnLigne
											}
										/> */}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className=" lg:hidden py-4 container bg-secondary flex  absolute  w-full top-0 left-0">
						<div className="space-y-1 flex-1 px-2 pb-3 pt-2">
							<img
								className="block h-12 w-auto bg-secondary pb-1 lg:hidden mb-4"
								src="/logo/logo.webp"
								alt="Logo de la Salle de sport Izi gym 17290 Aigrefeuille d'Aunis, proche de La Rochelle 17000"
							/>
							{navigation
								.filter((item) => item.responsiveHeader)
								.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className={classNames(
											"block rounded-md  py-2 text-base font-medium text-white  hover:text-primary"
										)}
										aria-current={
											item.current ? "page" : undefined
										}
									>
										{item.name}
									</Disclosure.Button>
								))}

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
											"'tel:" +
											dataInfosGeneral?.phone +
											"'"
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
												alt="logo facebook de la Salle de sport Izi gym 17290 Aigrefeuille d'Aunis, proche de La Rochelle 17000"
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
												alt="logo instagram de la Salle de sport Izi gym 17290 Aigrefeuille d'Aunis, proche de La Rochelle 17000"
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<Disclosure.Button className="flex items-start justify-end rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
							<span className="sr-only">Open main menu</span>
							{open ? (
								<XMarkIcon
									className="block h-6 w-6 text-white"
									aria-hidden="true"
								/>
							) : (
								<Bars3Icon
									className="block h-6 w-6 text-white"
									aria-hidden="true"
								/>
							)}
						</Disclosure.Button>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
