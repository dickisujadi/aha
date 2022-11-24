import { Link, BrowserRouter as Router } from "react-router-dom";

export function Sidebar() {
    return (
        <div className="h-screen w-20 bg-[#1B1B1B] border-r-white flex flex-col xs:h-[4.38rem] xs:w-screen xs:bg-[#181818]">
            <div>
                Logo
            </div>
            <div className="xs:hidden block">
                <Link to='/'>Home</Link>
            </div>
            <div className="xs:hidden block">
                <Link to='/tags'>Tags</Link>
            </div>
        </div>
    )
}