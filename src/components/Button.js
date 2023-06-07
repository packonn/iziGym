import Image from "next/image"

const Button = ({ text, onPress, icon, primary, secondary, white }) => {
	const bgColor = primary
		? "bg-primary"
		: secondary
		? "bg-secondary"
		: white
		? "bg-white"
		: "bg-primary"
	const textColor = primary
		? "text-white"
		: secondary
		? "text-white"
		: white
		? "text-primary"
		: "text-white"
	return (
		<div className={`${bgColor} flex items-center px-2 py-1 w-fit `}>
			<Image
				src={icon}
				width={14}
				height={14}
				className="mr-2"
				alt="icon"
				blurDataURL={icon}
						placeholder="blur" 
			/>
			<p
				className={`${textColor} text-[17px] font-roboto uppercase tracking-widest font-regular `}
			>
				{text}
			</p>
		</div>
	)
}

export default Button
