import { useForm } from "react-hook-form";

import { useState } from "react";
import Image from "next/image";
// import { LocationMarkerIcon, MailIcon, MapIcon, PhoneIcon } from "@heroicons/react/solid";
import Loader from "./Loader";
import { Title } from "./Title";

export const formsStyles = {
    field: "font-20 w-full outline-none  text-black text-black block  border-b-black border-b ",
    textarea: "text-20 w-full outline-none  text-black text-black block  border-b-black border-b ",
    label: "text-black font-medium text-14 mb-1 text-center w-full flex text-left",
    error: "text-red-500 text-[12px] min-h-2 font-light",
    select: "block  h-[40px] w-full pl-3  text-base border-gray-9 border font-light sm:text-sm rounded-2xl py-2 px-4",
    selectDisabled: "block  h-[40px] w-full pl-3  text-base border-gray-9 border  sm:text-sm rounded-2xl py-2 px-4 bg-[#EFEFEF4D]",
    submit: "bg-purple w-full   px-[25px] py-[6px] font-poppins font-[400] rounded-2xl z-10  text-white uppercase",
};

export default function SectionContact(props) {

    const [formIsLoading, setFormIsLoading] = useState(false);
    const [formFeedback, setFormFeedback] = useState(null);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onChange" });

    const onSubmit = async (body) => {
        console.log('body contact front', body)
        setFormIsLoading(true);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };

        const response = await fetch("/api/contact", options);
        const data = await response.json();

        if (response.status !== 200) {
            setFormIsLoading(false);
            setFormFeedback({ message: "Une erreur est survenue", error: true });
        } else {
            if (data.error) {
                setFormIsLoading(false);
                setFormFeedback({ message: "Une erreur est survenue", error: true });
            } else {
                reset();
                setFormIsLoading(false);
                setFormFeedback({ message: "Message bien envoyé", error: false });
            }
        }
    };

    return (
        <div id="contact" className="relative ">
             <div className="absolute top-0 z-20 w-full h-20">
                    <Image src="/assets-dev/banner-black2.png" fill className="object-cover " />
                </div>
            {formIsLoading && <Loader />}
            <div className='gap-10 grid grid-cols-1 md:grid-cols-2 '>
                <form onSubmit={handleSubmit(onSubmit)} className=' md:pl-[40px] container py-32'>
                <Title
                        title='Question ?'
                        subtitle='contactez-nous'
                        color="secondary"
                    />
                    <div className="mt-6">

                        <label className={formsStyles.label}> Votre nom et prénom *</label>
                        <input type='text' placeholder="" {...register("name", { required: "Veuillez entrer votre nom" })} className={formsStyles.field} />
                        <p className={formsStyles.error}>{errors.name?.message}</p>
                    </div>

                    <div className='mt-[20px]'>
                        <label className={formsStyles.label}> {" "} Votre adresse email *</label>
                        <input autoCapitalize="off" type='email' placeholder="" {...register("email", { required: { value: true, message: "Veuillez entrer votre email", }, pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Veuillez entrer une adresse email valide", }, })} className={formsStyles.field} />
                        <p className={formsStyles.error}>{errors.email?.message}</p>
                    </div>
                    <div className='mt-[20px] font-light'>
                        <label className={formsStyles.label}>Votre message *</label>
                        <textarea placeholder="" {...register("message", { required: "Veuillez entrer votre message" })} rows='3' className={formsStyles.textarea} />
                        <p className={formsStyles.error}>{errors.message?.message}</p>
                    </div>
                    <div className='py-4 flex'>
                        {formFeedback && (
                            <>
                                {formFeedback.error ? (
                                    <Image src={"/images/alert.svg"} blurDataURL="/images/alert.svg" placeholder="blur" height='12' width='16' alt='' />
                                ) : (
                                    <Image src={"/images/check.svg"} height='12' width='16' alt='' placeholder="blur" blurDataURL="/images/check.svg" />
                                )}
                                <p className='ml-2 text-black text-sm font-light'>{formFeedback.message}</p>
                            </>
                        )}
                    </div>
                    <div className='bg-[url("/assets-dev/button-bg.svg")]  w-fit bg-no-repeat flex items-center justify-left px-4  py-[6px]'>
                        <Image src={"/logo/enveloppe.png"} width={20} height={20} className="mr-2" />
                        <input type='submit' value="Envoyer" className={`${isValid ? "" : ""}  py-2 font-anton text-white font-[400]  uppercase `} />
                    </div>
                    
                   

                </form>
            <div className="h-full min-h-[500px] md:flex hidden  w-full relative">
                <Image src={"/assets-dev/contact.png"} fill alt='' placeholder="blur" blurDataURL="/images/contact.svg" className="object-cover"/>
            </div>
            </div>
        </div>
    );
}
