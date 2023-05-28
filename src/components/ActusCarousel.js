import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/bundle";
import Image from 'next/image';
import { useRef } from 'react';
import { Navigation, Pagination } from "swiper";
import Link from 'next/link';
import { actusURL } from '../../helpers';
import ActusItem from './ActusItem';


export const ActusCarousel = ({ data }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    console.log('data', data)
    return (
        <div id="projects" className='relative my-section swiper-project'>
            <Swiper
                breakpoints={{
                    768: { slidesPerView: 2.3 },
                    1024: { slidesPerView: 3 },
                    425: {
                        slidesPerView: 1,
                    },
                }}
                observer
                pagination={{ clickable: true, }}
                observeParents
                spaceBetween={10}
                slidesPerView={"auto"}
                className=" "
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: prevRef?.current,
                    nextEl: nextRef?.current
                }}
            // centeredSlides={true}
            >
                {data && data.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className="bg-red-400   !h-[420px] relative z-50 flex  justify-center items-center ">
                            <ActusItem item={item} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>

        </div>
    )
}