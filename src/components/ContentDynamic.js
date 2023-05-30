import Dropdown from "./Dropdown"
import Button from "@/components/ButtonDestroy";
import { Title } from "@/components/Title";
import Image from "next/image";
import { breakPointsSwiper, images, slidesPerView } from "../../helpers";
import VideoPlayer from "@/components/Video";
import SwiperGallery from "@/components/SwiperGallery";

export default function ContentDynamic({data, showVideo, images, otherServices, slidesPerView, breakPointsSwiper}){
    return (
        <div className="container py-20 grid grid-cols-4 gap-x-4">
        <div className="lg:col-span-3 col-span-4">
            <Title title="Planning" subtitle="Cours collectifs" color="secondary" />
            <p className="font-roboto text-16">Arcu est amet nibh ullamcorper gravida suspendisse. Tempor pellentesque porttitor faucibus in vel venenatis in purus. Feugiat et adipiscing nisi vitae vitae consectetur laoreet mus. Varius tellus integer amet volutpat commodo pellentesque tortor. Nulla nisl quis nam sed nisi orci tellus sollicitudin hac. Tellus rhoncus vitae nunc lorem cursus nullam. Tempus nulla lectus nisi enim amet eu.
                Massa nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro non sunt temporibus sapiente optio dolorem vero voluptatibus amet saepe accusamus pariatur maiores, distinctio tempore, suscipit exercitationem officiis sint consequatur corrupti vitae aut? Est quas veniam iure pariatur consequatur quo numquam provident? Non esse, numquam qui excepturi doloribus tempora veritatis? Eligendi eaque, cum similique corporis iure voluptate excepturi asperiores officia, velit aut necessitatibus! Ex quibusdam numquam obcaecati, animi voluptas laborum optio ea minima tenetur doloribus unde ad sequi necessitatibus velit voluptatibus enim officia! Officiis, dicta quia, expedita minima est voluptatem modi, magnam impedit nisi sapiente nihil esse. Ut, consectetur omnis? justo sed ornare nulla quis diam et. Diam faucibus malesuada vestibulum eu non ipsum bibendum. Quis mollis nisi enim blandit. Et in viverra egestas faucibus sollicitudin eu sit malesuada dolor. Proin dui duis mi aenean elit lobortis nulla parturient. Gravida amet quam posuere amet at neque. Pellentesque donec tristique pretium mollis. Dui ac duis viverra tellus mattis donec. Commodo sed mauris donec aliquam pellentesque venenatis risus et nunc. Cras arcu eget eu in et quam.</p>
            <div className="mt-10 pb-10">
                <Dropdown />
            </div>
            <div className="w-full ">
            {showVideo && (
                <div className="player-wrapper overflow-hidden p-[0px]  bg-black ">
                <VideoPlayer url="https://www.youtube.com/watch?v=NigrQ9UcJy4" isPlaying={false}/>
                </div>
                )}
                <div className="mt-4">
                <SwiperGallery data={[...images.map((item) => item)]} breakpoints={breakPointsSwiper} slidesPerView={slidesPerView} />
                </div>
                
                </div>
        </div>
        <div className="lg:col-span-1 col-span-4 relative">
            <div className="sticky top-20">
                <div className="bg-secondary lg:p-6 px-4 py-4 lg:py-10">
                    <p className="text-[37px] font-anton uppercase text-white">par personne</p>
                    <p className="text-[37px] font-anton uppercase text-primary">44 €</p>
                    <div className="mt-2">
                        <Button text="Réserver" color="primary" icon="/assets-dev/arrow.svg" />
                    </div>
                </div>
                <div className="bg-[#F4F4F4] lg:p-6 px-4 py-4 lg:py-10 ">
                    {
                        (otherServices && otherServices.length !== 0) && otherServices.map((item, index) => {
                            return (
                                <div key={index} className={`${index !== 0 && "mt-6"}`}>
                                    <p className="font-roboto tracking-widest text-primary text-16 font-medium uppercase">{item.title}</p>
                                    <p className="font-anton tracking-widest text-secondary text-22 font-medium uppercase">{item.description}</p>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
            
            </div>
    )
}