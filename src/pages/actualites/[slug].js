import {NextPage} from "next";
import {useRouter} from "next/router";
import Layout from "@/components/Layout";

import Image from "next/image";







export const getServerSideProps = async (context) => {
    const slug = context.params.slug
return {
    props: {
       slug:slug
    },

}

}


const ActualiteSlug = ({slug}) => {
    const router = useRouter ();

    return (
        <Layout  backgroundImageURL="/assets-dev/header.png" title1="Club" title2="IZI GYM" title3="Deviens la meileure version de toi mêmessss !" center >
        <div className="container ">
        <div className="relative  h-[600px] w-full">
        <Image fill className="relative w-full h-full right-10 object-cover -mt-[150px]" src="/assets-dev/header.png" alt="header" />
        </div>
        </div>  
        </Layout>
        );
};

export default ActualiteSlug;
