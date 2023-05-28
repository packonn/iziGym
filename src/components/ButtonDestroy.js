import Image from "next/image"

const ButtonDestroy = ({ text, onPress, icon, primary, secondary, white, }) => {
    const bgColor = primary ? "bg-primary" : secondary ? "bg-secondary" : white ? "bg-white" : "bg-primary"
    const textColor = primary ? "text-white" : secondary ? "text-white" : white ? "text-black" : "text-white"
    const bgImageDestroy = primary ? 'bg-[url("/assets-dev/button-bg-orange.svg")]' : secondary ? 'bg-[url("/assets-dev/button-bg-black.svg")]' : white ? 'bg-[url("/assets-dev/button-bg-white.svg")]' : 'bg-[url("/assets-dev/button-bg-orange.svg")]'
    
    return (
        <div className={`${bgImageDestroy} mx-auto w-[253px] h-14 flex items-center px-6 py-3 -z-20`}>
					<Image
						src={icon}
						width={21}
						height={21}
					/>
					<p className={`ml-4 ${textColor} font-anton lg:text-xl text-16`}>
						{text}
					</p>
				</div>
    )
}

export default ButtonDestroy