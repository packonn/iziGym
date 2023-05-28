import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/bundle";
import Image from 'next/image';
import { useRef } from 'react';
import { Navigation, Pagination } from "swiper";
import Link from 'next/link';


export const ActusCarousel = ({ actus }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

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
                {actus.map((e, i) => {
                    return (
                        <SwiperSlide key={i} className="bg-red-400   !h-[420px] relative z-50 flex  justify-center items-center ">

                            <Image src={e.img} width={410} height={620} className="-z-10 absolute top-0 lef-0 w-full h-full object-cover " />

                            <div className=" bg-[url('/logo/bottom-carousel-actu.png')] bg-no-repeat bg-bottom h-full flex flex-col justify-end w-full p-4 pb-6 pt-0">
                                <div className="bg-primary z-10 absolute top-0 left-4 text-white font-bold w-24 h-24 text-4xl py-2 px-5">
                                    {e.date.day > 9 ? (
                                        <p className="font-anton text-[37px] font-regular">
                                            {e.date.day}
                                        </p>
                                    ) : (
                                        <p className="font-anton text-[37px] font-regular">
                                            0{e.date.day}
                                        </p>
                                    )}
                                    <p className="font-anton text-[37px] font-regular">{e.date.month}</p>
                                </div>
                                <div className="text-white relative z-10 ">
                                    {e.time && (
                                        <p className="text-sm font-bold tracking-[1.5px]">
                                            {e.time}
                                        </p>
                                    )}
                                    <p className="text-4xl font-bold font-anton uppercase  leading-[44px] ">
                                        {e.title}
                                    </p>
                                    <Link
                                        href={`${e.link}`}
                                        className="text-sm mr-2 flex mt-1"
                                    >
                                        <p className="mr-2 font-black  tracking-[1.5px]">
                                            {" "}
                                            EN SAVOIR PLUS
                                        </p>
                                        <Image
                                            width={13}
                                            height={13}
                                            src={"/assets-dev/arrow.svg"}
                                        />
                                    </Link>
                                </div>

                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>

        </div>
    )
}