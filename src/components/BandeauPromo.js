const BandeauPromo = ({ options }) => {
	return (
		<div className="container bg-white font-roboto text-16 py-2 text-center md:text-left font-bold tracking-[0.5px] flex justify-center items-center">
			<div
				className="text-16"
				dangerouslySetInnerHTML={{
					__html: options?.discount,
				}}
			></div>
		</div>
	)
}

export default BandeauPromo
