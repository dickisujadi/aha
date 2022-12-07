import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import bay from "../assets/bay.png";
import deer from "../assets/deer.png";
import dog from "../assets/dog.png";
import PrimaryButton from "../ui/PrimaryButton";
import { useEffect, useState } from "react";
import { User } from "../typings";
import UserCard from "../ui/UserCardSearch";

interface SearchProps{
    keywords: string,
    pageSize: number,
    onChangePage? : () => void
}

export function Search({ onChangePage, keywords, pageSize }: SearchProps) {
    // const data = [
    //     {
    //         title: 'This is a title',
    //         name: 'by username',
    //         image: dog
    //     },
    //     {
    //         title: 'This is a title',
    //         name: 'by username',
    //         image: deer
    //     },
    //     {
    //         title: 'This is a title',
    //         name: 'by username',
    //         image: bay
    //     },
    //     {
    //         title: 'This is a title',
    //         name: 'by username',
    //         image: dog
    //     },
    //     {
    //         title: 'This is a title',
    //         name: 'by username',
    //         image: deer
    //     },
    //     {
    //         title: 'This is a title',
    //         name: 'by username',
    //         image: bay
    //     },
    //     {
    //         title: 'This is a title',
    //         name: 'by username',
    //         image: dog
    //     },
    //     {
    //         title: 'This is a title',
    //         name: 'by username',
    //         image: deer
    //     },
    //     {
    //         title: 'This is a title',
    //         name: 'by username',
    //         image: bay
    //     },
    // ]
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        console.log(keywords);
        fetch(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=${pageSize}&keyword=${keywords}`)
        .then(result => result.json())
        .then((result) => {
            setData(currentData => result.data);
        })
    }, [])
    return (
        <div className="flex flex-col w-full h-fit mt-[2.125rem]">
            <div className="-ml-[2.375rem] my-6 table">
                <div onClick={onChangePage} style={{cursor: 'pointer'}} className="align-middle table-cell w-1 h-fit">
                    <ArrowBackIosIcon /> 
                </div>
                <h1 className="font-normal text-3xl leading-[2.8125rem] ml-5 text-left">Results</h1>
            </div>
            <div className="flex flex-row -mx-[.8125rem]">
                {data && data.map(item => {
                    // return <div key={item.id} className="flex flex-col w-1/5 h-fit sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 2xl:w-1/5">
                    //     <img src={item.avater} alt="dog" />
                    //     <h1 className="text-left">This is {item.name}</h1>
                    //     <h5 className="text-left">by {item.username}</h5>
                    // </div>
                    return <UserCard user={item} key={item.id}/>
                })}
            </div>
            <div className="w-1/2">
                <PrimaryButton content="more"/>
            </div>
                
        </div>
    )
}