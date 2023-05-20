export const Title = ({ title, subtitle, color, textColor1 }) => {
	const textColor2 =
		color === "primary"
			? "text-primary"
			: color === "secondary"
			? "text-secondary"
			: color === "white"
			? "text-white"
			: "text-primary"

	const color1 =
		textColor1 === "primary"
			? "text-primary"
			: textColor1 === "secondary"
			? "text-secondary"
			: textColor1 === "white"
			? "text-white"
			: "text-primary"

	return (
		<div className="mb-10">
			<h3 className={`font-great ${color1} text-[80px]`}>{title}</h3>
			<h3
				className={`font-anton text-[80px] uppercase -mt-4 leading-[84px] ${textColor2}`}
			>
				{subtitle}
			</h3>
		</div>
	)
}
