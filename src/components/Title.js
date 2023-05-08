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
		<div>
			<h3 className="font-great text-primary text-[80px] ">{title}</h3>
			<h3
				className={`font-anton text-[80px] uppercase -mt-10 ${textColor}`}
			>
				{subtitle}
			</h3>
		</div>
	)
}
