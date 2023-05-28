export const Title = ({ title, subtitle, color, textColor1, center }) => {
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
			<h3 className={`font-great ${color1} md:text-[70px] lg:text-[80px] lg:leading-[80px] md:leading-[70px]  text-[14vw]  leading-[14vw] ${center && 'text-center'} `}>{title}</h3>
			<h3
				className={`font-anton  md:text-[70px] lg:text-[80px] leading-[14vw] lg:leading-[80px] md:leading-[70px]  text-[14vw]  uppercase -mt-2  ${textColor2} ${center && 'text-center'} `}
				
			>{subtitle}</h3>
		</div>
	)
}
