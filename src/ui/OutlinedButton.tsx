import Button from "@mui/material/Button";
import { COLORS } from "../constants/colors";

interface OutlinedButtonProps {
    content : string,
    onButtonClick? :() => void,
    position? : string
}

function OutlinedButton({ content, onButtonClick, position } : OutlinedButtonProps) {
    return (
        <div className="w-full h-full">
            <Button
                className={`float-right`}
                onClick={() => {onButtonClick?.()}}
                variant="outlined"
                sx={{
                    borderRadius: '1.25rem',
                    border: 1,
                    color: COLORS.pb_white,
                    borderColor: COLORS.pb_white,
                    backgroundColor: COLORS.pb_black,
                    ":hover" : {
                        color: COLORS.pb_black,
                        borderColor: COLORS.pb_black,
                        backgroundColor: COLORS.pb_white,
                    }
                }}
            >
                <p className="Button-text">{content}</p> 
            </Button>
        </div>
    )
}

export default OutlinedButton;