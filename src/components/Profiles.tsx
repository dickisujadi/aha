import { User } from "../typings";
import UserCard from "../ui/UserCard";
import { COLORS } from "../constants/colors";

interface ProfilesProps {
    users : User[]
}

export function Profiles({users} : ProfilesProps) {
    return (
        <div className={`mt-4 w-full bg-[${COLORS.bg_grey}]`}>
            {users && users.length ? users.map(user => {
                return (
                    <div className="mt-4" key={`${user.id}_${user.name}`}>
                        <UserCard user={user}/>
                    </div>
                )
            }) : ''}
        </div>
    )
}