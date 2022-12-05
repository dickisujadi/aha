import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Active from "./../assets/active.svg";
import Inactive from "./../assets/inactive.svg";

interface GetLogoProps {
    location : string | '',
    isLoaded? : boolean | false,
    onChangeIsLoaded? : (location: string, status: boolean) => void
}

export default function GetLogo({ location, isLoaded, onChangeIsLoaded }: GetLogoProps) {
    const { pathname } = useLocation();
    const currentLocation = location == 'home' ? '/' : `/${location}`;
    let isActive = pathname === currentLocation ? true : false;

    if(pathname === '/search' && location === 'home') isActive = true;

    return (
        <div className="mb-4 min-h-[3rem]">
            <div className="items-center flex flex-col">
                {<div className={`h-[0.3125rem] w-[0.3125rem] ${!isLoaded && 'bg-[#00D1FF]'} rounded-full float-right ml-6`}></div>}
                <img src={isActive? Active : Inactive} alt="active" className="mx-auto"/>
            </div>
            {isActive && <p className="capitalize font-normal text-xs leading-[1.125rem] tracking-wide">{location}</p>}
        </div>
    )
}