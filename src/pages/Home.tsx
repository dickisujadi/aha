import { useEffect, useState } from "react";
import { User } from "../typings"
import PrimaryButton from "../ui/PrimaryButton";
import SearchBar from "../ui/SearchBar";
import SliderComponent from "../ui/SliderComponent";
import Tab from '@mui/material/Tab';
import requests from "../utilities/requests";
import { Profiles } from "../components/Profiles";
import Tabs from "@mui/material/Tabs";

export function Home() {
    const [activeTabIndex, setActiveTabIndex] = useState<string>('0')

    const [users, setUsers] = useState<User[]>([])

    const updateUsers = (url : string) => {
        console.log(`trace called`);
        
        fetch(`${url}`)
        .then(result => result.json())
        .then((result) => {
            setUsers(result.data);
        })
    }

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

    const searchHandler = () => {
        console.log('Search Handler Clicked');
    }

    const tabChangeHandler = (event: React.SyntheticEvent, newValue: string) => {
        setActiveTabIndex(currentIndex => newValue)
    };

    return (
        <div className="flex flex-row w-full h-fit">

            <div className="mx-[8.125rem] mt-[2.125rem] w-full 2xl:w-8/12">
                <p className="text-2xl text-left capitalize leading-9 my-[1.25rem]">search</p>

                <div>
                    <SearchBar/>
                </div>

                <div className="py-[1.875rem] mb-[20.9375rem]">
                    <p className="text-2xl text-left capitalize leading-9 my-[1.25rem]"># of results per page</p>

                    <div className="flex flex-row">
                        <p className="text-5xl text-left leading-[4.5rem] font-bold">30 <span className="text-base leading-6 font-normal gap-2">results</span></p>
                    </div>

                    <div>
                        <SliderComponent />
                    </div>
                </div>

                <div>
                    <PrimaryButton content="search" onButtonClick={searchHandler}/>
                </div>

            </div>



            <div className="invisible w-0 2xl:visible 2xl:w-4/12 2xl:block">
                <Tabs
                    value={activeTabIndex}
                    onChange={tabChangeHandler}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Followers" value={'0'}/>
                    <Tab label="Following" value={'1'}/>
                </Tabs>
                <Profiles users={users} />
            </div>

        </div>
    )
}