import { useEffect, useState } from "react";
import { Tag } from "../typings";
import TagCard from "../ui/TagCard";
import requests from "../utilities/requests";

export function Tags() {
    const [tags, setTags] = useState<Tag[]>([])

    useEffect(() => {
        fetch(requests.fetchTags)
        .then(result => result.json())
        .then(result => {
            setTags(result);
        })
    }, [])

    return (
        <div className="mx-[16.0625rem] flex flex-col">
            <p className="text-left">Tags</p>
            <div className="flex flex-row flex-wrap">
                
                {tags && tags.length ? tags.map(data => {
                    return <div className="w-1/5 h-fit sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 2xl:w-1/5" key={`${data.id}_${data.name}`}>
                        <TagCard tag={data} key={data.id} />
                    </div>
                }): ''}
            </div>

        </div>
    )
}