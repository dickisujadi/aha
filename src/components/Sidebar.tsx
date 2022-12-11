import { Link } from "react-router-dom";
import { COLORS } from "../constants/colors";
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
        <div className={`-mt-1 w-20 min-w-[5rem] h-screen bg-[${COLORS.bg_grey}] border-r-white flex flex-col xs:bg-[${COLORS.bg_black}] xs:m-0 xs:h-fit xs:w-screen xs:hidden`}>
            <div className="Logo-text my-10 xs:my-[1.75rem] font-bold uppercase text-center xs:text-left xs:mx-5">
                Logo
            </div>
            {menus && menus.length && menus.map(menu => {
                return <div key={menu.id} className="xs:hidden block" onClick={() => onChangeLoaded(menu.location, true)}>
                    <Link to={menu.link}>
                        <GetLogo location={menu.location} isLoaded={menu.isLoaded}/>
                    </Link>
                </div>
            })}
        </div>
    )
}