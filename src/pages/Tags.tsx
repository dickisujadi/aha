import { useEffect, useState } from "react";
import { Tag } from "../typings";
import TagCard from "../ui/TagCard";

export function Tags() {

    const dummyTags : Tag[] = [
        { 
            id: 1,
            name: 'Cool',
            count: 350
        },
        { 
            id: 2,
            name: 'Beautiful',
            count: 210
        },
        { 
            id: 3,
            name: 'Easy',
            count: 190
        },
        { 
            id: 4,
            name: 'Summary',
            count: 105
        },
        { 
            id: 5,
            name: 'Hot',
            count: 80
        },
        { 
            id: 6,
            name: 'Cool',
            count: 350
        },
        { 
            id: 7,
            name: 'Beautiful',
            count: 210
        },
        { 
            id: 8,
            name: 'Easy',
            count: 190
        },
        { 
            id: 9,
            name: 'Summary',
            count: 105
        },
        { 
            id: 10,
            name: 'Hot',
            count: 80
        },
        { 
            id: 11,
            name: 'Cool',
            count: 350
        },
        { 
            id: 12,
            name: 'Beautiful',
            count: 210
        },
        { 
            id: 13,
            name: 'Easy',
            count: 190
        },
        { 
            id: 14,
            name: 'Summary',
            count: 105
        },
        { 
            id: 15,
            name: 'Hot',
            count: 80
        },
        { 
            id: 16,
            name: 'Cool',
            count: 350
        },
        { 
            id: 17,
            name: 'Beautiful',
            count: 210
        },
        { 
            id: 18,
            name: 'Easy',
            count: 190
        },
        { 
            id: 19,
            name: 'Summary',
            count: 105
        },
        { 
            id: 20,
            name: 'Hot',
            count: 80
        }
    ]

    const [tags, setTags] = useState<Tag[]>([])

    useEffect(() => {
    }, [])

    return (
        <div className="mx-[16.0625rem] flex flex-col">
            <p className="text-left">Tags</p>
            <div className="flex flex-row flex-wrap">
                
                {dummyTags && dummyTags.length ? dummyTags.map(data => {
                    return <div className="w-1/5 h-fit sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 2xl:w-1/5">
                        <TagCard tag={data} key={data.id} />
                    </div>
                }): ''}
            </div>

        </div>
    )
}