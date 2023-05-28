import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/bundle";
import FsLightbox from "fslightbox-react";
import { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper";


export default function SwiperGallery({ data, breakpoints, slidesPerView }) {
    const [lightboxIsVisible, setLightboxIsVisible] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(1);
    const lightboxSources = [];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (

        <div className='relative  my-section swiper-project bullet-black '>

            <Swiper
            observer
                pagination={{ clickable: true, }}
                observeParents
                spaceBetween={10}
                breakpoints={breakpoints}
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: prevRef?.current,
                    nextEl: nextRef?.current
                }}
                slidesPerView={slidesPerView}

            >
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            {lightboxSources.push(item)}
                            <SwiperSlide key={index}
                                onClick={() => {
                                    setLightboxIndex(index + 1);
                                    setLightboxIsVisible(!lightboxIsVisible);
                                }}
                                className="shadow relative    rounded cursor-pointer"
                            >
                                <div className='w-full h-[250px]  relative '>
                                    <Image src={item} alt="veterinary" fill className="object-cover" />
                                </div>
                            </SwiperSlide>

                        </div>
                    )
                })}
            </Swiper>
            <FsLightbox
                toggler={lightboxIsVisible}
                sources={data}
                slide={lightboxIndex}
                types={[...new Array(lightboxSources.length).fill("image")]}
            />
        </div>
    )
}