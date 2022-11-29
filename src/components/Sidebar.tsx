import { Link, useLocation } from "react-router-dom";
import GetLogo from "../utilities/GetLogo";

export function Sidebar() {
    const currentLocation = useLocation();
    const { pathname } = currentLocation;
    
    return (
        <div className="w-full h-full bg-red-500 border-r-white flex flex-col xs:bg-[#181818]">
            <div className="my-9 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#FFD25F] to-[#FF5C01] -backdrop-hue-rotate-180 uppercase text-center xs:text-left xs:mx-5">
                Logo
            </div>
            <div className="xs:hidden block">
                <Link to='/'>
                    <GetLogo location="home"/>
                </Link>
            </div>
            <div className="xs:hidden block">
                <Link to='/tags'>
                    <GetLogo location="tags"/>
                </Link>
            </div>
        </div>
    )
}