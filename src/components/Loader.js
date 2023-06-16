import Image from "next/image"
import React from "react"

const Loader = () => {
	return (
		<div className="z-[9999999999999999] w-full  top-0 bg-white/50   fixed h-full  m-auto left-0 right-0 flex justify-center items-center">
			<div className="main-fader" responsive-height-comments>
				<div className="loader">
					<Image
						src="/logo/loader.gif"
						alt="Logo US Aigrefeuille Football"
						width={130}
						height={124}
						className={`animate-spin  bg-white rounded-full`}
					></Image>
				</div>
			</div>
		</div>
	)
}

export default Loader
