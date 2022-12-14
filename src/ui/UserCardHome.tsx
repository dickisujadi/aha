import { User } from "../typings";
import ContainedButton from "./containedButton";
import OutlinedButton from "./outlinedButton";
import { BrokenImageHandler } from "../utilities/brokenImageHandler";

interface UserCardProps {
    user: User
}

function UserCard({ user } : UserCardProps) {
    return (
        <div className="w-full mt-[0.1875rem] mb-[0.125rem] mx-0 flex flex-row">
            <div className="w-[70%] h-fit m-0 flex flex-row">
                <div className="mx-4 w-10 h-10">
                    <img 
                        src={`${user.avater}`} 
                        onError={BrokenImageHandler}
                        alt={`${user.id}_${user.username}`}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-left text-base">{user.name}</p>
                    <p className="text-left text-sm opacity-50">{`@${user.username}`}</p>
                </div>

            </div>
            <div className="w-[30%] mx-4 my-auto">
                {user.isFollowing ? <ContainedButton content="Following" position="right"/> :
                    <OutlinedButton content="Follow" position="right"/>}
            </div>
        </div>
    )
}

export default UserCard;