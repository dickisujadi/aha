import Button from "@mui/material/Button";
import { COLORS } from "../constants/colors";

interface PrimaryButtonProps {
    content : string,
    onButtonClick? :() => void
}

function PrimaryButton({ content, onButtonClick } : PrimaryButtonProps) {
    return (
        <div className="w-full h-full">
            <Button
                onClick={() => {onButtonClick?.()}}
                variant="contained"
                fullWidth
                sx={{
                    borderRadius: '.25rem',
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
            >
                <span className="font-bold not-italic text-sm leading-[100%] uppercase mx-4 my-[.40625rem]">{content}</span> 
            </Button>
        </div>
    )
}

export default PrimaryButton;