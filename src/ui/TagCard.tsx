import { Tag } from "../typings";

interface TagCardProps {
    tag : Tag
}

function TagCard({ tag } : TagCardProps) {
    return (
        <div className="flex flex-col">
            <div className="TagCard-Box">
                <div className="TagCard-textBox TagCard-textWrap">
                    {tag.name}
                </div>
            </div>
            <div className="flex flex-col text-left">
                <div className="TagCard-textName TagCard-textWrap">
                    {tag.name}
                </div>
                <div className="TagCard-textSubName">
                    {tag.count} Results
                </div>
            </div>
        </div>
    )
}

export default TagCard;