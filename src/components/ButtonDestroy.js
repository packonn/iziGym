import Image from "next/image"
import Link from "next/link"

const ButtonDestroy = ({
	text,
	onPress,
	target,
	icon,
	primary,
	secondary,
	white,
	classCustom,
	href,
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
	const url = href ? href : ""
	return (
		<Link
			href={url}
			target={target}
			className={`${bgImageDestroy} bg-no-repeat bg-cover relative z-20 flex items-center px-3 py-3 hover:opacity-80 `}
		>
			{icon && (
				<Image
					src={icon}
					width={21}
					height={21}
					blurDataURL={icon}
					placeholder="blur"
					alt="icon"
				/>
			)}
			<p
				className={`${classCustom} ${
					icon && " ml-4 "
				} ${textColor} font-anton lg:text-xl text-16`}
			>
				{text}
			</p>
		</Link>
	)
}

export default ButtonDestroy
