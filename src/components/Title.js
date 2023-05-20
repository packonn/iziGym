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
			<h3 className={`font-great ${color1} md:text-[80px]  text-[20vw] `}>{title}</h3>
			<h3
				className={`font-anton md:leading-[80px] md:text-[80px] leading-[20vw]  text-[20vw]  uppercase -mt-4  ${textColor2}`}
				
			>{subtitle}</h3>
		</div>
	)
}
