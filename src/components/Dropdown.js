import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'

export default function Dropdown() {
    const data = [
        {
            id: 1,
            question: 'What is your refund policy?',
            answer: 'If you\'re unhappy with your purchase for any reason, email us within 90 days and we\'ll refund you in full, no questions asked.'
        },
        {
            id: 2,
            question: 'Do you offer technical support?',
            answer: 'No.'
        },

    ]


    return (
        <div className=" w-full  bg-white ">
            {
                (data && data.length !== 0) && data.map((item, index) => {
                    return (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="border border-x-transparent border-b-transparent border-t-gray flex w-full items-center justify-between py-2 text-left text-sm font-medium text-black  focus:outline-none  ">
                                        <span className='font-anton text-22 uppercase'>{item.question}</span>
                                        {open ? (
                                            <MinusCircleIcon className="h-10 w-10 text-primary" aria-hidden="true" />
                                        ) : (
                                            <PlusCircleIcon className="h-10 w-10 text-primary" aria-hidden="true" />
                                        )
                                        }

                                    </Disclosure.Button>
                                    <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                                        {item.answer}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    )
                }

                )
            }


        </div>
    )
}
