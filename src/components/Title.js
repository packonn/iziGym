export const Title = ({ title, subtitle, color }) => {
	const textColor =
		color === "primary"
			? "text-primary"
			: color === "secondary"
			? "text-secondary"
			: color === "white"
			? "text-white"
			: "text-primary"

	return (
		<div className="mb-10">
			<h3 className="font-great text-primary md:text-[80px]  text-[20vw] ">{title}</h3>
			<h3
				className={`font-anton uppercase -mt-4 md:leading-[80px] md:text-[80px] leading-[20vw]  text-[20vw]  ${textColor}`}
			>
				{subtitle}
			</h3>
		</div>
	)
}
