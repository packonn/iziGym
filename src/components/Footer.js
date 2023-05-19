import Image from "next/image"
import SectionContact from "./SectionContact"
import { navigation } from "./Navbar"
import Link from "next/link"

const Footer = () => {

    const infos = [
        {
            title: "Adresse",
            texte: "Rue de la gare 1, 1000 Bruxelles"
        },
        {
            title: "Téléphone",
            texte: "02 123 45 67"
        },
        {
            title: "Horaires",
            texte: "Du lundi au vendredi de 8h à 20h"
        },
        {
            title: "rejoignez-nous",
            texte: ""
        }
    ]

    return (
        <footer className="relative">
            <SectionContact />
            <div className="relative  -mt-14 w-full h-full left-0 top-0">
                <div className="relative w-full h-20">
                    <Image src="/assets-dev/banner-top-footer.png" fill />
                </div>
                <div className=" bg-black2 ">
                    <div className="container py-10 relative grid gap-x-10 grid-cols-3">
                        <div className="col-span-1  ">
                            <Image src="/logo/logo.png" width={150} height={150} />
                            <div className="grid grid-cols-2 mt-4 gap-x-4 gap-y-4 ">
                                <div className="col-span-1">
                                    {navigation.slice(0,3).map((e, i) => {
                                        return (
                                            <Link href={e.href} key={i} >
                                                <p className="text-white !text-16 font-roboto  my-2 uppercase tracking-widest font-regular ">{e.name}</p>
                                            </Link>
                                        )
                                    })}
                                </div>
                                <div className="col-span-1">
                                    {navigation.slice(3,10).map((e, i) => {
                                        return (
                                        <Link href={e.href} key={i} >
                                            <p className="text-white !text-16 font-roboto uppercase tracking-widest my-2 font-regular ">{e.name}</p>
                                        </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1  border-l pl-5  border-gray  grid grid-cols-2 gap-x-4 gap-y-4">
                            {infos.slice(0,2).map((e, i) => {
                                return (
                                    <div key={i} className="">
                                        <p className="bg-primary text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">{e.title}</p>
                                        <p className="text-roboto uppercase !text-16 text-white">{e.texte}</p>
                                    </div>
                                )
                            })}
                            {infos.slice(2,10).map((e, i) => {
                                return (
                                    <div key={i} className="">
                                        { e.title != "rejoignez-nous" ? (<>  <p className="bg-primary text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">{e.title}</p>
                                            <p className="text-roboto uppercase !text-16 text-white">{e.texte}</p></>
                                        ) : (
                                            <div className="">
                                            <p className="bg-primary text-roboto !text-14 uppercase text-white py-1 px-3 w-fit mb-2">{e.title}</p>
                                            <div className="flex items-center gap-x-6">

                                                                                    <Image src="/logo/fb.svg" width={20} height={20} className="object-contain w-5 h-5" />
                                                                                    <Image src="/logo/instagram.svg" width={20} height={20} className="object-contain w-5 h-5"  />
                                            </div>

                                            </div>
                                        )}
                                    </div>
                                )
                                
                            })}
                        </div>
                        <div className="col-span-1 relative w-full h-full border-l pl-5  border-gray ">
                            <Image src="/assets-dev/maps.png" fill  className="ml-5 object-cover " />
                        </div>
                    </div>
                </div> 
            </div>
        </footer>
    )
}

export default Footer