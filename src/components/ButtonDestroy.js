import Image from "next/image"

const ButtonDestroy = ({
	text,
	onPress,
	icon,
	primary,
	secondary,
	white,
	classCustom,
}) => {
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
		? "text-black"
		: "text-white"
	const bgImageDestroy = primary
		? 'bg-[url("/assets-dev/button-bg-orange.svg")]'
		: secondary
		? 'bg-[url("/assets-dev/button-bg-black.svg")]'
		: white
		? 'bg-[url("/assets-dev/button-bg-white.svg")]'
		: 'bg-[url("/assets-dev/button-bg-orange.svg")]'

	return (
		<div
			className={`${bgImageDestroy} bg-no-repeat  flex items-center px-3 py-3 -z-20`}
		>
			{icon && <Image src={icon} width={21} height={21} alt="icon" />}
			<p
				className={`${classCustom} ${
					icon && " ml-4"
				} ${textColor} font-anton lg:text-xl text-16`}
			>
				{text}
			</p>
		</div>
	)
}

export default ButtonDestroy
