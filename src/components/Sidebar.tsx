import { Link, useLocation } from "react-router-dom";
import GetLogo from "../utilities/GetLogo";

export function Sidebar() {
    const currentLocation = useLocation();
    const { pathname } = currentLocation;

    const logoSwitchHandler = (_pathname : string, label : string) => {
        const isActive : boolean = _pathname === pathname ? true : false;
        return (<div className="my-3">
                {GetLogo({isActive, label})}
            </div>)
    }
    
    return (
        <div className="h-screen w-20 bg-[#1B1B1B] border-r-white flex flex-col xs:h-[4.38rem] xs:w-screen xs:bg-[#181818]">
            <div className="my-9 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#FFD25F] to-[#FF5C01] -backdrop-hue-rotate-180 uppercase text-center xs:text-left xs:mx-5">
                Logo
            </div>
            <div className="xs:hidden block">
                <Link to='/'>
                    {logoSwitchHandler('/', 'home')}
                </Link>
            </div>
            <div className="xs:hidden block">
                <Link to='/tags'>
                    {logoSwitchHandler('/tags', 'tags')}
                </Link>
            </div>
        </div>
    )
}