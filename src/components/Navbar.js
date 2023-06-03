import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import {
	abonnementsURL,
	actusURL,
	cgvURL,
	cookiePolicyURL,
	coursCollectifURL,
	homeURL,
	reglementInterieurURL,
	servicesCoursCollectifURL,
	servicesURL,
	spacesURL,
} from "../../helpers"
import { infos } from "./Footer"
import { useRouter } from "next/router"
import Link from "next/link"
import ButtonDestroy from "./ButtonDestroy"

export const navigationURLS = (router) => {
	return [
		{
			name: "Accueil",
			href: homeURL,
			current: router.asPath === homeURL,
			header: true,
		},
		{
			name: "Actualités",
			href: actusURL,
			current: router.asPath.includes(actusURL),
			header: true,
		},
		{
			name: "Cours collectif",
			href: spacesURL + coursCollectifURL,
			current: router.asPath.includes(coursCollectifURL),
			header: true,
		},
		{
			name: "Abonnements",
			href: abonnementsURL,
			current: router.asPath.includes(abonnementsURL),
			header: true,
		},
		{
			name: "Règlement intérieur",
			href: reglementInterieurURL,
			current: router.asPath.includes(reglementInterieurURL),
			header: false,
			header: false,
		},
		{
			name: "Politique de confidentialité",
			href: cookiePolicyURL,
			current: router.asPath.includes(cookiePolicyURL),
			header: false,
		},
		{
			name: "Conditions générales de vente",
			href: cgvURL,
			current: router.asPath.includes(cgvURL),
			header: false,
		},
	]
}
function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
	const router = useRouter()
	const navigation = navigationURLS(router)
	return (
		<Disclosure as="nav" className="bg-transparent w-full relative z-20 ">
			{({ open }) => (
				<>
					<div className="  container  ">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">
										Open main menu
									</span>
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
							</div>
							<div className="flex items-center w-full  lg:justify-between ">
								<div className="flex flex-shrink-0 items-center">
									<Link href={homeURL}>
										<img
											className="block h-8 w-auto lg:hidden"
											src="/logo/logo.png"
											alt="IziGym Salle de sport 17290 Le Thou"
										/>
										<img
											className="hidden h-8 w-auto lg:block"
											src="/logo/logo.png"
											alt="IziGym Salle de sport 17290 Le Thou"
										/>
									</Link>
								</div>
								<div className="hidden sm:ml-6 lg:block">
									<div className="flex space-x-4 items-center">
										{navigation
											.filter((item) => item.header)
											.map((item) => (
												<Link href={item.href}
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

										<ButtonDestroy
											classCustom={
												" uppercase font-bold  !text-[17px] !leading-[20px] font-roboto "
											}
											primary
											text="Réserver un cours"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className=" lg:hidden py-4 container bg-secondary flex  absolute  w-full top-0 left-0">
						<div className="space-y-1 flex-1 px-2 pb-3 pt-2">
							<img
								className="block h-8 w-auto lg:hidden mb-4"
								src="/logo/logo.png"
								alt="Your Company"
							/>
							{navigation
								.filter((item) => item.header)
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

							<div className="  lg:border-l lg:pl-5  border-gray border-t lg:border-t-0 lg:pt-0  pt-5  grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4">
								{infos.slice(0, 2).map((e, i) => {
									return (
										<div key={i} className="">
											<p className="bg-primary text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">
												{e.title}
											</p>
											<p className="text-roboto uppercase !text-16 text-white">
												{e.texte}
											</p>
										</div>
									)
								})}
								{infos.slice(2, 10).map((e, i) => {
									return (
										<div key={i} className="">
											{e.title != "rejoignez-nous" ? (
												<>
													{" "}
													<p className="bg-primary text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">
														{e.title}
													</p>
													<p className="text-roboto uppercase !text-16 text-white">
														{e.texte}
													</p>
												</>
											) : (
												<div className="">
													<p className="bg-primary text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">
														{e.title}
													</p>
													<div className="flex items-center gap-x-6">
														<Image
															src="/logo/fb.svg"
															width={20}
															height={20}
															className="object-contain w-5 h-5"
															alt="logo facebook"
														/>
														<Image
															src="/logo/instagram.svg"
															width={20}
															height={20}
															className="object-contain w-5 h-5"
															alt="logo instagram"
														/>
													</div>
												</div>
											)}
										</div>
									)
								})}
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
