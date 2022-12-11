import Button from "@mui/material/Button";
import { COLORS } from "../constants/colors";

interface ContainedButtonProps {
    content : string,
    onButtonClick? :() => void,
    position? : string
}

function ContainedButton({ content, onButtonClick, position } : ContainedButtonProps) {
    return (
        <div className="w-full h-full">
            <Button
                className={`float-right`}
                onClick={() => {onButtonClick?.()}}
                sx={{
                    borderRadius: '1.25rem',
                    color: COLORS.pb_black,
                    borderColor: COLORS.pb_white,
                    backgroundColor: COLORS.pb_white,
                    ":hover" : {
                        color: COLORS.pb_white,
                        border: 1,
                        borderColor: COLORS.pb_white,
                        backgroundColor: COLORS.pb_black,
                    }
                }}
                variant="contained"
            >
                <p className="Button-text">{content}</p> 
            </Button>
        </div>
    )
}

export default ContainedButton;