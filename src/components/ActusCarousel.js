import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/bundle"
import { useRef } from "react"
import { Navigation, Pagination } from "swiper"
import ActusItem from "./ActusItem"

export const ActusCarousel = ({ actus }) => {
	const prevRef = useRef(null)
	const nextRef = useRef(null)
	return (
		<div id="projects" className="relative my-section swiper-project">
			<Swiper
				breakpoints={{
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
					425: {
						slidesPerView: 1,
					},
				}}
				observer
				pagination={{ clickable: true }}
				observeParents
				spaceBetween={10}
				slidesPerView={"auto"}
				className=" "
				modules={[Navigation, Pagination]}
				navigation={{
					prevEl: prevRef?.current,
					nextEl: nextRef?.current,
				}}
				// centeredSlides={true}
			>
				{actus &&
					actus.map((item, i) => {
						return (
							<SwiperSlide
								key={i}
								className="bg-secondary   !h-[420px] relative z-50 flex  justify-center items-center "
							>
								<ActusItem item={item} />
							</SwiperSlide>
						)
					})}
			</Swiper>
		</div>
	)
}
