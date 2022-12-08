import { useEffect, useState } from "react";
import { Tag } from "../typings";
import TagCard from "../ui/TagCard";
import requests from "../utilities/requests";

interface TagsProps {
    onChangeLoaded: (location: string, status: boolean) => void
}

export function Tags({ onChangeLoaded } : TagsProps) {
    const [tags, setTags] = useState<Tag[]>([])

    useEffect(() => {
        fetch(requests.fetchTags)
        .then(result => result.json())
        .then(result => {
            setTags(result);
        });

        onChangeLoaded('tags', true);
    }, [])

    return (
        <div className="mx-[15.3125rem] mt-[4.625rem] flex flex-col">
            <p className="TagCard-text">Tags</p>
            <div className="flex flex-row flex-wrap">
                
                {tags && tags.length ? tags.map(data => {
                    return <div className="TagCard-container" key={`${data.id}_${data.name}`}>
                        <TagCard tag={data} key={data.id} />
                    </div>
                }): ''}
            </div>

        </div>
    )
}