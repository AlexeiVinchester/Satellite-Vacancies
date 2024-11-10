import { Button } from "@mui/material";

interface IStyledButtonProps {
    onClick: () => void;
    title: string;
};

const StyledButton = ({ onClick, title }: IStyledButtonProps) => {
    return (
        <Button
            onClick={onClick}
            variant="contained"
            sx={{
                borderRadius: '8px',
                margin: '4px 8px 4px 8px',
                bgcolor: 'rgb(255, 92, 53)',
                padding: '4px',
                color: 'white',
                ":hover": {
                    bgcolor: 'rgb(80, 201, 173)'
                }
            }}
        >
            {title}
        </Button>
    );
};

export { StyledButton };
