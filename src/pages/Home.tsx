import { useEffect, useState } from "react";
import { User } from "../typings"
import PrimaryButton from "../ui/PrimaryButton";
import SearchBar from "../ui/SearchBar";
import SliderComponent from "../ui/SliderComponent";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import requests from "../utilities/requests";

interface UserProps {
    total : number,
    totalPages : number,
    page : number,
    pageSize : number,
    data: User[]
}

export function Home() {
    const [activeTabIndex, setActiveTabIndex] = useState('1')

    const initalUsers : UserProps = {
        total : 0,
        totalPages : 0,
        page : 0,
        pageSize : 0,
        data: []
    }

    const [users, setUsers] = useState<User[]>([])

    const updateUsers = (url : string) => {
        fetch(`${url}`)
        .then(result => result.json())
        .then((result) => {
            setUsers(result.data);
        })
    }

    useEffect(() => {
        switch (activeTabIndex) {
            case '2':
                updateUsers(requests.fetchFollowing);
                break;
        
            default:
                updateUsers(requests.fetchFollowers);
                break;
        }
    }, []);

    const searchHandler = () => {
        console.log('Search Handler Clicked');
    }

    const tabChangeHandler = (event: React.SyntheticEvent, newValue: string) => {
        setActiveTabIndex(newValue);
        switch (newValue) {
            case '1':
                updateUsers(requests.fetchFollowers);
                break;
            case '2':
                updateUsers(requests.fetchFollowing);
                break;
            default:
                updateUsers(requests.fetchFollowers);
                break;
        }
    };

    useEffect(() => {
        console.log(users);
    }, [users])

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



            <div className="hidden 2xl:block">
            <TabContext value={activeTabIndex}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={tabChangeHandler} aria-label="lab API tabs example">
                    <Tab label="Followers" value="1"/>
                    <Tab label="Following" value="2" />
                </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
            </div>

        </div>
    )
}