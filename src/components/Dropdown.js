import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'

export default function Dropdown({collapse}) {


    return (
        <div className=" w-full  bg-white ">
            {
                (collapse && collapse.length !== 0) && collapse.map((item, index) => {
                    return (
                        <Disclosure defaultOpen={index===0 ? true :false}  key={index}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="border border-x-transparent border-b-transparent border-t-gray flex w-full items-center justify-between py-4 text-left text-sm font-medium text-black  focus:outline-none   ">
                                        <span className='font-anton text-22 uppercase'>{item.title}</span>
                                        {open ? (
                                            <MinusCircleIcon className="h-10 w-10 text-primary" aria-hidden="true" />
                                        ) : (
                                            <PlusCircleIcon className="h-10 w-10 text-primary" aria-hidden="true" />
                                        )
                                        }

                                    </Disclosure.Button>
                                    <Disclosure.Panel className="  pb-10 pr-10 text-sm font-roboto !leading-[24px] !text-16 text-gray-500">
                                      <div className='dropdownContentCustomHtml' dangerouslySetInnerHTML={{__html:item.description}} >
                                      
                                      </div> 
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
