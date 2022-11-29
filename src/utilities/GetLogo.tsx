import { useLocation } from "react-router-dom";
import Active from "./../assets/active.svg";
import Inactive from "./../assets/inactive.svg";

interface GetLogoProps {
    location : string,
}

export default function GetLogo({location}: GetLogoProps) {
    const { pathname } = useLocation();
    const currentLocation = location == 'home' ? '/' : `/${location}`;
    let isActive = pathname === currentLocation ? true : false;

    if(pathname === '/search' && location === 'home') isActive = true;

    if(isActive) {
        return (<>
            <img src={Active} alt="active" className="mx-auto"/>
            <p className="capitalize font-normal text-xs leading-[150%] tracking-wide">{location}</p>
        </>
        )
    }

    return (<>
        <img src={Inactive} alt="active" className="mx-auto"/>
    </>
    )
}