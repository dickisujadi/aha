import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { COLORS } from "../constants/colors";

interface HeaderProps{
    isHome?: boolean,
    onBackHome?: () => void
}

export function Header({ isHome, onBackHome } : HeaderProps) {
    return (
        <div className={`hidden xs:bg-[${COLORS.bg_black}] xs:m-0 xs:h-fit xs:w-screen xs:block`}>
            {isHome? 
                <div className="Logo-text my-[1.75rem] font-bold uppercase text-left mx-5 w-fit">
                    Logo
                </div>
            : <div className="my-[2.1875rem] flex flex-row ml-[.75rem]">
                    <Link to={'/'} className="w-[1.625rem] h-[1.625rem]" onClick={onBackHome}>
                        <ArrowBackIosIcon /> 
                    </Link>
                    <h1 className="Xs-text">HomePage</h1>
                </div>
        }
        </div>
    )
}