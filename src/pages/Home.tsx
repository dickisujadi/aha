import { useEffect } from "react";
import { User } from "../typings"
import SearchBar from "../ui/SearchBar";

interface UserProps {
    total : number,
    totalPages : number,
    page : number,
    pageSize : number,
    data: User[]
}

export function Home() {
    const users : UserProps = {
        total : 1,
        totalPages : 100,
        page : 100,
        pageSize : 100,
        data: [
            {   
                id: 'string',
                name: 'string',
                username: 'string',
                avater: 'string',
                isFollowing: false
            }
        ]
    }

    console.log(users);

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-row w-full h-fit">

            <div className="mx-[8.125rem] mt-[2.125rem] w-8/12">
                <p className="text-2xl text-left capitalize leading-9 my-[1.25rem]">search</p>

                <div>
                    <SearchBar/>
                </div>

                <p className="text-2xl text-left capitalize leading-9 my-[1.25rem]"># of results per page</p>

                <div className="flex flex-row">
                    <p>30 results</p>
                </div>

                <div>
                    {/* slider */}
                </div>

                <div>
                    {/* search button */}
                </div>

            </div>

            <div className="hidden 2xl:block">profiles</div>

        </div>
    )
}