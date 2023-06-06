import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Pagination({ hasNextPage,last,first, hasPreviousPage, href, startCursor, endCursor, }: { hasPreviousPage: boolean, hasNextPage: boolean, href: string, startCursor: any, endCursor: any, last: number, first: number }) {

    const route = useRouter();

    return (
        <div className="px-4  flex items-center justify-between sm:px-0 mt-5">
            {hasPreviousPage &&
                <div
                    className="group -mt-px w-0 flex flex-1 cursor-pointer"
                    onClick={() => route.push({
                        pathname: href,
                        query: {
                            paramsQuery: `last: ${last}, before: "${startCursor}"`
                        },
                    }, href)}
                >
                    <ArrowLeftIcon className="mr-3 h-5 w-5 text-usa-medium-green group-hover:text-primary" aria-hidden="true" />
                    <p className="text-16 font-old font-medium uppercase group-group-hover:text-usa-light-green text-usa-medium-green hover:text-primary ">Précédent</p>
                </div>
            }
            {hasNextPage &&
                <div className={`group -mt-px   flex cursor-pointer justify-end ${!hasPreviousPage ? "w-full" : "w-max mx-auto"}`}
                    onClick={() => route.push({
                        pathname: href,
                        query: {
                            paramsQuery: `first: ${first}, after: "${endCursor}"`
                        },
                    }, href)}>
                    <p className=" group-hover:text-primary inline-flex mb-0 text-16 font-old font-medium uppercase hover:text-usa-light-green text-usa-medium-green">Suivant</p>
                    <ArrowRightIcon className=" group-hover:text-primary ml-3 h-5 w-5 text-usa-medium-green" aria-hidden="true" />
                </div>
            }
        </div>
    )
} 