import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Layout from "@/components/Layout";
import { Title } from "@/components/Title";
import Image from "next/image";

export const getServerSideProps = async (context) => {
    const slug = context.params.slug;
    const service = null

    return {
        props: {
            slug
        },

    }

}

const Service = ({ service, slug }) => {

    const otherServices = [
        {
            id: 1,
            title: "Musculation",
            description: "Une salle tout équipée",
            slug: "musculation"
        },
        {
            id: 2,
            title: "Cardio",
            description: "des ballons, des tapis et des vélos pour se dépenser",
            slug: "cardio"
        },
    ]

    const planning = [
        {
            day: "Lundi",
            morning: [
                {
                    title: "Body pump",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Abdos-fessiers",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Body balance",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                }


            ],
            afternoon: [
                {
                    title: "Abdos-fessiers",
                    time: "14h00 - 15h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "RPM",
                    time: "16h00 - 16h45",
                    coach: "Jean-Michel"
                }
            ]
        },
        {
            day: "Mardi",
            morning: [
                {
                    title: "Body pump",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Abdos-fessiers",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Body balance",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                }


            ],
            afternoon: [
                {
                    title: "Abdos-fessiers",
                    time: "14h00 - 15h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "RPM",
                    time: "16h00 - 16h45",
                    coach: "Jean-Michel"
                }
            ]
        },
        {
            day: "Mercredi",
            morning: [
                {
                    title: "Body pump",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Abdos-fessiers",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Body balance",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                }


            ],
            afternoon: [
                {
                    title: "Abdos-fessiers",
                    time: "14h00 - 15h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "RPM",
                    time: "16h00 - 16h45",
                    coach: "Jean-Michel"
                }
            ]
        },
        {
            day: "Jeudi",
            morning: [
                {
                    title: "Body pump",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Abdos-fessiers",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Body balance",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                }


            ],
            afternoon: [
                {
                    title: "Abdos-fessiers",
                    time: "14h00 - 15h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "RPM",
                    time: "16h00 - 16h45",
                    coach: "Jean-Michel"
                }
            ]
        },
        {
            day: "Vendredi",
            morning: [
                {
                    title: "Body pump",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Abdos-fessiers",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Body balance",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                }


            ],
            afternoon: [
                {
                    title: "Abdos-fessiers",
                    time: "14h00 - 15h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "RPM",
                    time: "16h00 - 16h45",
                    coach: "Jean-Michel"
                }
            ]
        },
        {
            day: "Samedi",
            morning: [
                {
                    title: "Body pump",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Abdos-fessiers",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "Body balance",
                    time: "10h00 - 11h00",
                    coach: "Jean-Michel"
                }


            ],
            afternoon: [
                {
                    title: "Abdos-fessiers",
                    time: "14h00 - 15h00",
                    coach: "Jean-Michel"
                },
                {
                    title: "RPM",
                    time: "16h00 - 16h45",
                    coach: "Jean-Michel"
                }
            ]
        }

    ]

    return (
        <Layout backgroundImageURL="/assets-dev/header.png" title1="Club" title2="IZI GYM" title3="Deviens la meileure version de toi même !">
            <div className="container grid grid-cols-4 gap-x-4">
                <div className="lg:col-span-3 col-span-4">
                    <Title title="Planning" subtitle="Cours collectifs" color="secondary" />
                    <p className="font-roboto text-16">Arcu est amet nibh ullamcorper gravida suspendisse. Tempor pellentesque porttitor faucibus in vel venenatis in purus. Feugiat et adipiscing nisi vitae vitae consectetur laoreet mus. Varius tellus integer amet volutpat commodo pellentesque tortor. Nulla nisl quis nam sed nisi orci tellus sollicitudin hac. Tellus rhoncus vitae nunc lorem cursus nullam. Tempus nulla lectus nisi enim amet eu.
                        Massa nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro non sunt temporibus sapiente optio dolorem vero voluptatibus amet saepe accusamus pariatur maiores, distinctio tempore, suscipit exercitationem officiis sint consequatur corrupti vitae aut? Est quas veniam iure pariatur consequatur quo numquam provident? Non esse, numquam qui excepturi doloribus tempora veritatis? Eligendi eaque, cum similique corporis iure voluptate excepturi asperiores officia, velit aut necessitatibus! Ex quibusdam numquam obcaecati, animi voluptas laborum optio ea minima tenetur doloribus unde ad sequi necessitatibus velit voluptatibus enim officia! Officiis, dicta quia, expedita minima est voluptatem modi, magnam impedit nisi sapiente nihil esse. Ut, consectetur omnis? justo sed ornare nulla quis diam et. Diam faucibus malesuada vestibulum eu non ipsum bibendum. Quis mollis nisi enim blandit. Et in viverra egestas faucibus sollicitudin eu sit malesuada dolor. Proin dui duis mi aenean elit lobortis nulla parturient. Gravida amet quam posuere amet at neque. Pellentesque donec tristique pretium mollis. Dui ac duis viverra tellus mattis donec. Commodo sed mauris donec aliquam pellentesque venenatis risus et nunc. Cras arcu eget eu in et quam.</p>
                    <div className="mt-10 pb-10">
                        <Dropdown />
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


            <div className="bg-black2 mt-20 relative ">
                <div className="bg-floatLeftGray absolute top-0 right-0 h-full w-full bg-right bg-no-repeat"></div>
                <div className="bg-floatRightGray absolute top-0 left-0 h-full w-full bg-no-repeat"></div>
                <div className="relative w-full h-20">
                    <Image src="/assets-dev/banner-white.png" fill />
                </div>
                <div className="container py-10 pb-32">
                    <Title title="Planning" subtitle="Cours collectifs" color={"white"} />
                    <div className="grid grid-cols-3 gap-10 mt-20 ">

                        {planning.map((item, index) => {
                            return (
                                <div key={index} className="col-span-3 lg:col-span-1">
                                    <p className="font-anton uppercase text-30 text-primary font-medium border border-gray pr-10 pl-4 py-2">{item.day}</p>
                                    <div className="mt-4">
                                        <p className="font-roboto text-14 uppercase text-secondary bg-white py-1 px-2 tracking-[1.5px] w-fit font-medium mt-3">Matin</p>
                                        <div className="mt-2">
                                            {
                                                (item.morning && item.morning.length !== 0) && item.morning.map((item, index) => {

                                                    return (
                                                        <div key={index} className="flex justify-between items-center tracking-[1.5px] mt-3">
                                                            <p className="font-roboto text-14 text-white font-regular uppercase ">{item.title}</p>
                                                            <p className="font-roboto text-14 text-white font-regular uppercase">{item.time}</p>
                                                        </div>
                                                    )
                                                }

                                                )
                                            }
                                        </div>
                                    </div>
                                    <div >
                                        <div className="w-full border-t border-white my-4">
                                        </div>
                                        <p className="font-roboto text-14 uppercase text-secondary bg-white py-1 px-2 tracking-[1.5px] w-fit font-medium mt-3">Après-midi</p>
                                        <div className="mt-2">
                                            {
                                                (item.afternoon && item.afternoon.length !== 0) && item.afternoon.map((item, index) => {

                                                    return (
                                                        <div key={index} className="flex justify-between items-center tracking-[1.5px] mt-3">
                                                            <p className="font-roboto text-14 text-white font-regular uppercase ">{item.title}</p>
                                                            <p className="font-roboto text-14 text-white font-regular uppercase">{item.time}</p>
                                                        </div>
                                                    )
                                                }



                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
         
        </Layout >

    )
}

export default Service