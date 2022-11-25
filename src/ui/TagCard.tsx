import { Tag } from "../typings";

interface TagCardProps {
    tag : Tag
}

function TagCard({ tag } : TagCardProps) {
    return (
        <div className="flex flex-col">
            <div className="bg-[#262626] w-[9.375rem] h-[9.375rem]">
                <div className="border-white border-4 rounded-md w-fit px-[0.625rem] leading-9 bottom-0">{tag.name}</div>
            </div>
            <div className="text-left">
                <div>{tag.name}</div>
                <div>{tag.count} Results</div>
            </div>
        </div>
    )
}

export default TagCard;