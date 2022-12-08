import { User } from "../typings";
import { BrokenImageHandler } from "../utilities/BrokenImageHandler";

interface UserCardProps {
    user: User
}

function UserCard({ user } : UserCardProps) {
    return (
        <div className="flex flex-col mx-[.8125rem]">
            <div className="w-[13.6875rem] h-[9.125rem]">
                <img 
                    src={`${user.avater}`} 
                    onError={BrokenImageHandler}
                    alt={`${user.id}_${user.username}`}
                    className={"w-full h-full"}
                />
            </div>

            <div className="my-4">
                <p className="text-left font-normal text-[.93125rem] tracking-[.00873rem]">This is {user.name}</p>
                <p className="text-left font-normal text-[.93125rem] text-[#B2B2B2] tracking-[.02328125rem] ">by {user.username}</p>
            </div>
        </div>
    )
}

export default UserCard;