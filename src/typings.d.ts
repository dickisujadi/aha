export interface User {
    id: string,
    name: string,
    username: string,
    avater: string,
    isFollowing: boolean
}

export interface Tag {
    id: number,
    name: string,
    count: number
}