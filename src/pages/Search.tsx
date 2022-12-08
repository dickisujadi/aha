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
    const [data, setData] = useState<User[]>([]);
    const [dataPerPage, setDataPerPage] = useState<number>(pageSize < 9? pageSize : 9);

    useEffect(() => {
        fetch(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=${pageSize}&keyword=${keywords}`)
        .then(result => result.json())
        .then((result) => {
            setData(currentData => result.data);
        })
    }, []);

    const moreHandler = () => {
        setDataPerPage(currentNumber => currentNumber + 9)
    }

    return (
        <div className="flex flex-col w-full h-fit mt-[2.125rem]">
            <div className="-ml-[2.375rem] my-6 table">
                <div onClick={onChangePage} style={{cursor: 'pointer'}} className="align-middle table-cell w-1 h-fit">
                    <ArrowBackIosIcon /> 
                </div>
                <h1 className="font-normal text-3xl leading-[2.8125rem] ml-5 text-left">Results</h1>
            </div>
            <div className="flex flex-row -mx-[.8125rem] flex-wrap">
                {data && data.slice(0, dataPerPage).map(item => {
                    return <UserCard user={item} key={item.id}/>
                })}
            </div>
            <div className="w-1/2">
                <PrimaryButton content="more" onButtonClick={moreHandler}/>
            </div>
                
        </div>
    )
}