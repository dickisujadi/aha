import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GetLogo from "../ui/SidebarLogo";

interface menu {
    id: number,
    location: string,
    link: string,
    isLoaded: boolean
}
interface SidebarProps{
    menus: menu[],
    onChangeLoaded: (location: string, status: boolean) => void
}

export function Sidebar({ menus, onChangeLoaded } : SidebarProps) {

    
    return (
        <div className="w-20 min-w-[5rem] h-screen bg-[#1B1B1B] border-r-white flex flex-col xs:bg-[#181818] xs:m-0 xs:h-fit xs:w-screen">
            <div className="my-9 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#FFD25F] to-[#FF5C01] -backdrop-hue-rotate-180 uppercase text-center xs:text-left xs:mx-5">
                Logo
            </div>
            {menus && menus.length && menus.map(menu => {
                return <div className="xs:hidden block" onClick={() => onChangeLoaded(menu.location, true)}>
                    <Link to={menu.link}>
                        <GetLogo location={menu.location} isLoaded={menu.isLoaded}/>
                    </Link>
                </div>
            })}
        </div>
    )
}