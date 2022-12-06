import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import bay from "../assets/bay.png";
import deer from "../assets/deer.png";
import dog from "../assets/dog.png";
import PrimaryButton from "../ui/PrimaryButton";
import { useEffect, useState } from "react";
import { User } from "../typings";

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
        fetch(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=${pageSize}&keyword=${keywords}`)
        .then(result => result.json())
        .then((result) => {
            console.log(result.data);
            setData(currentData => result.data);
        })
    }, [])
    return (
        <div className="flex flex-col w-full h-fit">
            <div className="flex flex-row -ml-[2.375rem]">
                <div onClick={onChangePage} style={{cursor: 'pointer'}}><ArrowBackIosIcon /> </div>
                <h1 className="">Results</h1>
            </div>
            <div className="flex flex-row flex-wrap">
                {data && data.map(item => {
                    return <div key={item.id} className="flex flex-col w-1/5 h-fit sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 2xl:w-1/5">
                        <img src={item.avater} alt="dog" />
                        <h1 className="text-left">This is {item.name}</h1>
                        <h5 className="text-left">by {item.username}</h5>
                    </div>
                })}
            </div>
            <PrimaryButton content="more"/>
        </div>
    )
}