import Button from "@mui/material/Button";

interface OutlinedButtonProps {
    content : string,
    onButtonClick? :() => void
}

function OutlinedButton({ content, onButtonClick } : OutlinedButtonProps) {
    return (
        <div className="w-full h-full">
            <Button
                onClick={() => {onButtonClick?.()}}
                // style={{
                //     borderRadius: 35,
                //     backgroundColor: "#21b6ae",
                //     padding: "18px 36px",
                //     fontSize: "18px"
                // }}
                variant="outlined"
                fullWidth
            >
                <p className="capitalize text-xs">{content}</p> 
            </Button>
        </div>
    )
}

export default OutlinedButton;