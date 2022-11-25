import { User } from "../typings";
import UserCard from "../ui/UserCard";

interface ProfilesProps {
    users : User[]
}

export function Profiles({users} : ProfilesProps) {
    return (
        <div className="mt-4">
            {users && users.length ? users.map(user => {
                return (
                    <div className="mt-4">
                        <UserCard user={user}/>
                    </div>
                )
            }) : ''}
        </div>
    )
}