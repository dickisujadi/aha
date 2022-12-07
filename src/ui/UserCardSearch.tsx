import { User } from "../typings";
import ContainedButton from "./ContainedButton";
import OutlinedButton from "./OutlinedButton";

interface UserCardProps {
    user: User
}

function UserCard({ user } : UserCardProps) {
    return (
        <div className="flex flex-col mx-[.8125rem] w-[30%]">
            <div className="min-w-[13.6875rem] min-h-[9.125rem] w-[100%] h-[16%] bg-white" />
            <div className="my-4">
                <p className="text-left font-normal text-[.93125rem] tracking-[.00873rem]">This is {user.name}</p>
                <p className="text-left font-normal text-[.93125rem] text-[#B2B2B2] tracking-[.02328125rem] ">by {user.username}</p>
            </div>
        </div>
    )
}

export default UserCard;