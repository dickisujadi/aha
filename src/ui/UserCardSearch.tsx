import { useState } from "react";
import { Skeleton } from "@mui/material";
import { User } from "../typings";
import { BrokenImageHandler } from "../utilities/brokenImageHandler";
import { COLORS } from "../constants/colors";

interface UserCardProps {
    user: User,
}

function UserCard({ user } : UserCardProps) {
    const [isImageLoading, setIsImageLoading] = useState<boolean>(true)
    return (
        <div className="flex flex-col mx-[.8125rem]">
            <div className="w-[13.6875rem] h-[9.125rem]">
                {isImageLoading&&<Skeleton variant="rounded" width={"100%"} height={"100%"} animation="wave"/> }
                <img 
                    src={`${user.avater}`} 
                    onError={(event) => {
                        setIsImageLoading(false)
                        BrokenImageHandler(event)
                    }}
                    onLoad={() => {
                        setIsImageLoading(false)
                    }}
                    alt={`${user.id}_${user.username}`}
                    className={"w-full h-full"}
                /> 
            </div>

            <div className="my-4">
                <p className="text-left font-normal text-[.93125rem] tracking-[.00873rem]">
                    This is {user.name}
                </p>
                <p className={`text-left font-normal text-[.93125rem] text-[${COLORS.text_grey}] tracking-[.02328125rem]`}>
                    by {user.username}
                </p>
            </div>
        </div>
    )
}

export default UserCard;

export function UserCardLoading() {
    return (
        <div className="flex flex-col mx-[.8125rem]">
            <Skeleton variant="rounded" width={"13.6875rem]"} height={"9.125rem"} animation="pulse"/>

            <div className="my-4">
                <Skeleton variant="text" sx={{ fontSize: '.93125rem' }}/>
                <Skeleton variant="text" sx={{ fontSize: '.93125rem', color: COLORS.text_grey}}/>
            </div>
        </div>
    )
}