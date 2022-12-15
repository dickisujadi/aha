import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PrimaryButton from "../ui/primaryButton";
import { useEffect, useState } from "react";
import { User } from "../typings";
import UserCard, { UserCardLoading } from "../ui/userCardSearch";

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
        setDataPerPage(currentNumber => currentNumber + 1)
    }

    const loadingHandler = () => {
        let result = []
        for (let i = 0; i < dataPerPage; i++) {
            result.push(<UserCardLoading />)
        }
        return <>{result}</>
    }

    return (
        <div className="flex flex-col w-full h-fit mt-[2.125rem] xs:mt-0">
            <div className="-ml-[2.375rem] my-6 table xs:mt-0">
                <div onClick={onChangePage} style={{cursor: 'pointer'}} className="align-middle table-cell w-1 h-fit">
                    <ArrowBackIosIcon /> 
                </div>
                <h1 className="font-normal text-3xl leading-[2.8125rem] ml-5 text-left Xs-text">Results</h1>
            </div>
            <div className="flex flex-row -mx-[.8125rem] flex-wrap">
                {data ? data.slice(0, dataPerPage).map((item: User) => {
                    return <UserCard key={item.id} user={item}/>
                }):
                    loadingHandler()
                }
            </div>
            <div className="w-1/2">
                <PrimaryButton content="more" onButtonClick={moreHandler}/>
            </div>
                
        </div>
    )
}