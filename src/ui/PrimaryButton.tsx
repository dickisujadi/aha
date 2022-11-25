import Button from "@mui/material/Button";

interface PrimaryButtonProps {
    content : string,
    onButtonClick? :() => void
}

function PrimaryButton({ content, onButtonClick } : PrimaryButtonProps) {
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
                variant="contained"
                fullWidth
            >
                {content.toUpperCase()}
            </Button>
        </div>
    )
}

export default PrimaryButton;