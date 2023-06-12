import {
	CalendarDaysIcon,
	CreditCardIcon,
	UserCircleIcon,
} from "@heroicons/react/20/solid"

const ModalPlanning = () => {
	return (
		<div className="mx-auto px-4 py-8 sm:px-6 lg:px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
			<div className=" z-50 ">
				<h2 className="sr-only">Summary</h2>
				<div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
					<dl className="flex flex-wrap">
						<div className="flex-auto pl-6 pt-6">
							<dt className="text-sm font-semibold leading-6 text-gray-900">
								titre
							</dt>
						</div>
						<div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
							<dt className="flex-none">
								<UserCircleIcon
									className="h-6 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</dt>
							<dd className="text-sm font-medium leading-6 text-gray-900">
								calorie
							</dd>
						</div>
						<div className="mt-4 flex w-full flex-none gap-x-4 px-6">
							<dt className="flex-none">
								<span className="sr-only">Due date</span>
								<CalendarDaysIcon
									className="h-6 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</dt>
							<dd className="text-sm leading-6 text-gray-500">
								<time dateTime="2023-01-31">
									January 31, 2023
								</time>
							</dd>
						</div>
						<div className="mt-4 flex w-full flex-none gap-x-4 px-6">
							<dt className="flex-none">
								<CreditCardIcon
									className="h-6 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</dt>
							<dd className="text-sm leading-6 text-gray-500">
								Temps
							</dd>
						</div>
						<div className="mt-4 flex w-full flex-none gap-x-4 px-6">
							<dd className="text-sm leading-6 text-gray-500">
								Description Lorem ipsum, dolor sit amet
								consectetur adipisicing elit. Molestiae aperiam
								aspernatur deserunt omnis eius fugit, magnam
								eos, eaque ipsum voluptatibus animi dolor
								cumque, necessitatibus aliquid perspiciatis
								saepe consequuntur odit reiciendis perferendis
								eum rerum! Ab numquam aperiam ipsum nesciunt
								magnam. Sunt temporibus debitis incidunt quas
								ullam, itaque porro dolorum distinctio ipsum
								repudiandae deserunt assumenda delectus at enim
								exercitationem, vero similique aut magni
								blanditiis doloremque iure aliquid ad officia.
								Eveniet ut eum fugiat, nam reprehenderit odio
								est cumque dolores doloribus quos perferendis
								dolorum dolore laborum, id distinctio hic
								sapiente tempora perspiciatis. Voluptatem ad
								commodi excepturi assumenda esse id voluptatibus
								placeat, sunt deserunt.
							</dd>
						</div>
					</dl>
					<div className="mt-6 border-t border-gray-900/5 px-6 py-6">
						<a
							href="https://www.google.fr"
							target={"_blank"}
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Réserver mon cours
							<span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalPlanning
