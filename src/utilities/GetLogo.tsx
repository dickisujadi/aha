import Active from "./../assets/active.svg";
import Inactive from "./../assets/inactive.svg";

interface GetLogoProps {
    isActive : boolean,
    label : string
}

export default function GetLogo({isActive, label}: GetLogoProps) {
    switch (isActive) {
        case true:
            return (<>
                    <img src={Active} alt="active" className="mx-auto"/>
                    <p className="capitalize font-normal text-xs leading-[150%] tracking-wide">{label}</p>
                </>
                )
            break;
        case false:
            return (<>
                <img src={Inactive} alt="active" className="mx-auto"/>
            </>
            )
        default:
            break;
    }
}