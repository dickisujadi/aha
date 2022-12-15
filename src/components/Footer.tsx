import { Link } from "react-router-dom";
import { COLORS } from "../constants/colors";
import GetLogo from "../ui/sidebarLogo";

interface menu {
    id: number,
    location: string,
    link: string,
    isLoaded: boolean
}
interface FooterProps{
    menus: menu[],
    onChangeLoaded: (location: string, status: boolean) => void
}

export function Footer({ menus, onChangeLoaded } : FooterProps) {
    return (
        <div className={`z-50 xs:w-full xs:fixed left-0 bottom-0 xs:bg-[#1B1B1B] shadow-current`}>
            <div className="hidden xs:flex xs:flex-row xs:m-0 xs:h-fit xs:w-fit xs:mx-auto">
                {menus && menus.length && menus.map(menu => {
                    return <div key={menu.id} onClick={() => onChangeLoaded(menu.location, true)} className='mx-[1.5625rem]'>
                        <Link to={menu.link}>
                            <GetLogo location={menu.location} isLoaded={menu.isLoaded} isFooter/>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}