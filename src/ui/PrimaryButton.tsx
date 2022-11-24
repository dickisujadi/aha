import Button from "@mui/material/Button";

function PrimaryButton({ content } : { content : string}) {
    return (
        <div className="w-full">
            <Button
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