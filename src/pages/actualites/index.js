import {NextPage} from "next";
import {useRouter} from "next/router";
import Layout from "@/components/Layout";

import Image from "next/image";
import { useEffect, useState } from "react";
import VideoPlayer from "@/components/Video";
import SwiperGallery from "@/components/SwiperGallery";
import { ActusCarousel } from "@/components/ActusCarousel";
import SectionActus from "@/components/SectionActus";
import { actus } from "../../../helpers";
import ActusItem from "@/components/ActusItem";







export const getServerSideProps = async (context) => {

return {
    props: {
    },

}

}


const Actualites = ({slug}) => {
    const router = useRouter ();
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        setShowVideo(true);
    }, []);

    
	const slidesPerView = 1.3
	const breakPointsSwiper = {
		768: { slidesPerView: 2.3 },
		1024: { slidesPerView: 2.3 },
		1280: { slidesPerView: 2.3 },
	}

    return (
        <Layout footerWhite  backgroundImageURL="/assets-dev/header.png"  title3="Les actualités" center classCustom="!h-[400px] !min-h-[400px]"  >
            <div className="container py-20 grid xl:grid-cols-3 md:grid-cols-2 gap-4  grid-cols-1    relative z-50   justify-center items-center ">
            {actus.map((actu, index) =>  {
                console.log('actu', actu)
                return (
                   <div className="!h-[420px] relative " key={index}>
                   
                   <ActusItem item={actu} key={index} /> 
                   </div>
                )
            })}
            
            </div> 
        </Layout>
        );
};

export default Actualites;
