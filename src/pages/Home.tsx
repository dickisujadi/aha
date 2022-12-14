import { useCallback, useEffect, useState } from "react";
import { User } from "../typings"
import PrimaryButton from "../ui/primaryButton";
import SearchBar from "../ui/searchBar";
import SliderComponent from "../ui/sliderComponent";
import requests from "../utilities/requests";
import { Profiles } from "../components/profiles";
import { Search } from "./search";
import { Header } from "../components/header";

interface HomeProps {
    onChangeLoaded: (location: string, status: boolean) => void
}

export function Home({onChangeLoaded} : HomeProps) {
    const [activeTabIndex, setActiveTabIndex] = useState<string>('0');
    const [users, setUsers] = useState<User[]>([]);
    const [pageSize, setPageSize] = useState<number>(3);
    const [keywords, setKeywords] = useState<string>('');
    const [isHomeActive, setIsHomeActive] = useState<boolean>(true);

    useEffect(() => {
        onChangeLoaded('home', true);
    }, []);

    const updateUsers = (url : string) => {
        fetch(`${url}`)
        .then(result => result.json())
        .then((result) => {
            setUsers(result.data);
        })
    };

    useEffect(() => {
        switch (activeTabIndex) {
            case '1':
                updateUsers(requests.fetchFollowing);
                break;
        
            default:
                updateUsers(requests.fetchFollowers);
                break;
        }
        return (() => {})
    }, [activeTabIndex]);

    const goSearchHandler = () => {
        changeHomeActivationHandler();
    }

    const goHomeHandler = () => {
        changeHomeActivationHandler();
        setPageSize(_ => 3);
        setKeywords('');
    }

    const changeHomeActivationHandler = () => {
        setIsHomeActive(currentState => !currentState);
    };

    const tabChangeHandler = (event: React.SyntheticEvent, newValue: string) => {
        setActiveTabIndex(currentIndex => newValue)
    };

    const sliderChangeHandler = (newValue : number | number[]) => {
        if(typeof newValue == "number") {
            setPageSize(newValue);
        }
    };

    const changeKeywordsHandler = useCallback((newValue: string) => {
        setKeywords(currentKeywords => newValue);
    }, [keywords]);

    return (
        <>
            <Header isHome={isHomeActive} onBackHome={changeHomeActivationHandler}/>
            <div className="flex flex-row h-fit w-screen">
                <div className="xs:mx-5 xs:my-0 sm:mx-5 mx-[8.125rem] mt-[2.125rem] w-full 2xl:w-8/12">
                    {isHomeActive ? (
                        <>
                            <p className="text-2xl text-left capitalize leading-9 mt-[1.25rem] xs:mt-0">search</p>

                            <div className="my-[1.875rem]">
                                <SearchBar onChange={changeKeywordsHandler} text={keywords}/>
                            </div>

                            <hr className="border rounded-[5px] border-white opacity-10"/>
                            {/* <div className="mb-[20.9375rem] xs:mb-[18.625rem]"> */}
                            <div className="my-[1.875rem] xs:mb-[25vh]">
                                <p className="text-2xl text-left capitalize leading-9 mb-[1.25rem]"># of results per page</p>
            
                                <div className="flex flex-row">
                                    <p className="text-5xl text-left leading-[4.5rem] font-bold">{pageSize} <span className="text-base leading-6 font-normal gap-2">results</span></p>
                                </div>
            
                                <div>
                                    <SliderComponent onSliderChange={sliderChangeHandler}/>
                                </div>
                            </div>

                            <hr className="border rounded-[5px] border-white opacity-10"/>
            
                            <div className="w-6/12 xs:w-full mt-[35vh] xs:mt-[10vh]">
                                <PrimaryButton content="search" onButtonClick={goSearchHandler}/>
                            </div>
                        </>
                    ):
                        <Search onChangePage={goHomeHandler} pageSize={pageSize} keywords={keywords}/>
                    }
                </div>

                <div className="invisible w-0 2xl:visible 2xl:w-4/12 2xl:block 2xl:h-screen 2xl:max-h-full 2xl:min-h-full xs:invisible">
                    <Profiles users={users} tabIndex={activeTabIndex} onChange={tabChangeHandler} />
                </div>

            </div>
        </>
    )
}