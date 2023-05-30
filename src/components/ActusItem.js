import Image from "next/image"
import Link from "next/link"
import { actusURL } from "../../helpers"

 const ActusItem = ({item}) => {
    return (
        <Link href={actusURL + "/" + item.slug} className="flex h-full w-full overflow-hidden relative">
                                <Image src={item.img} fill className="z-10 overflow-hidden absolute top-0 lef-0 w-full h-full transition duration-500 ease-in-out hover:scale-110 object-cover " />

                                <div className=" bg-[url('/logo/bottom-carousel-actu.png')] -bottom-[1px] relative bg-no-repeat bg-bottom h-full flex flex-col justify-end w-full p-4 pb-6 pt-0">
                                    <div className="bg-primary z-10 absolute -top-1 left-4 text-white font-bold w-24 h-24 text-4xl py-2 px-5">
                                        {item.day > 9 ? (
                                            <p className="font-anton text-[37px] font-regular">
                                                {item.day}
                                            </p>
                                        ) : (
                                            <p className="font-anton text-[37px] font-regular">
                                                0{item.day}
                                            </p>
                                        )}
                                        <p className="font-anton text-[37px] font-regular">{item.month}</p>
                                    </div>
                                    <div className="text-white relative z-10 ">
                                        {item.time && (
                                            <p className="text-sm font-bold tracking-[1.5px]">
                                                {item.time}
                                            </p>
                                        )}
                                        <p className="text-4xl font-bold font-anton uppercase  leading-[44px] ">
                                            {item.title}
                                        </p>
                                        <Link
                                            href={`${item.link}`}
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
                            </Link>
    )
}

export default ActusItem