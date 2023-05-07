import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const navigation = [
	{ name: "Accueil", href: "#", current: true },
	{ name: "Actualités", href: "#", current: false },
	{ name: "Cours collectif", href: "#", current: false },
	{ name: "Abonnements", href: "#", current: false },
	{ name: "Contact", href: "#", current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
	return (
		<Disclosure as="nav" className="bg-transparent">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex items-center w-full  sm:justify-around ">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="block h-8 w-auto lg:hidden"
										src="/logo/logo.png"
										alt="Your Company"
									/>
									<img
										className="hidden h-8 w-auto lg:block"
										src="/logo/logo.png"
										alt="Your Company"
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? " text-white border-b-2 border-primary"
														: "text-white  hover:text-primary",
													" px-3 py-2 text-sm font-medium"
												)}
												aria-current={
													item.current
														? "page"
														: undefined
												}
											>
												{item.name}
											</a>
										))}
										<div className="absolute inset-y-0 right-0 flex justify-around items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 bg-primary w-40 h-8">
											<Image
												src={"/logo/fleche_blanche.png"}
												width={16}
												height={16}
											/>
											<button
												type="button"
												className="text-white text-base"
											>
												Inscription
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
									aria-current={
										item.current ? "page" : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
