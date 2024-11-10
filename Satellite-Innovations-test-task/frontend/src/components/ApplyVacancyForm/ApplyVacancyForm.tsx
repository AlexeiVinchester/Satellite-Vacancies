import { IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useApplyVacancy } from "./useApplyForVacancy";

interface IApplyVacancyFormProps {
    vacancyId: string;
};

const ApplyVacancyForm = ({ vacancyId }: IApplyVacancyFormProps) => {
    const { userEmail, handleChange, handleSubmit, isSending } = useApplyVacancy(vacancyId);

    return (
        <form
            className="flex justify-center items-center"
            onSubmit={handleSubmit}
        >
            <TextField
                variant="standard"
                className="rounded-[8px] p-[2px] border-2 focus:border-none"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={userEmail}
            />
            <IconButton
                type="submit"
                sx={{
                    color: 'rgb(255, 69, 0)',
                    ":hover": {
                        color: 'rgb(80, 201, 173)'
                    }
                }}
                disabled={isSending}
            >
                <SendIcon fontSize="medium" />
            </IconButton>
        </form>
    );
};

export { ApplyVacancyForm }; 
