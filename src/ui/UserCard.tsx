import { User } from "../typings";
import ContainedButton from "./ContainedButton";
import OutlinedButton from "./OutlinedButton";

interface CardProps {
    user: User
}

function UserCard({ user } : CardProps) {
    console.log(user);
    
    return (
        <div className="w-full mt-[0.1875rem] mb-[0.125rem] mx-0 flex flex-row">
            <div className="w-[19.2%] h-10 px-4">
                <div className="w-10 h-10 bg-white"></div>
                {/* <img 
                    src={`${user.avater}`} 
                    alt={`${user.id}_${user.username}`} 
                    onError={({currentTarget}) => {
                        currentTarget.onerror = null;
                        currentTarget.src=""
                    }}
                /> */}
            </div>
            <div className="w-[51.733%] flex flex-col">
                <p className="text-left text-base">{user.name}</p>
                <p className="text-left text-sm opacity-50">{`@${user.username}`}</p>
            </div>
            <div className="w-[29.0667%] px-4">
                {user.isFollowing ? <ContainedButton content="Following" /> :
                    <OutlinedButton content="Follow" />}
            </div>
        </div>
    )
}

export default UserCard;