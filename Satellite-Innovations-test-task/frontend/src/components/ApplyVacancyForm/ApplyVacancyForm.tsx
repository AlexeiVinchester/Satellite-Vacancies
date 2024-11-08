import { IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startSpinner, stopSpinner } from "../../features/spinnerFlag/spinnerFlagSlice";

interface IApplyVacancyForm {
    vacancyId: string;
};

const ApplyVacancyForm = ({ vacancyId }: IApplyVacancyForm) => {
    const [userEmail, setUserEmail] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(startSpinner('Sending apply...'))
        try {
            const response = await fetch(
                `https://4933-37-214-25-169.ngrok-free.app/applyVacancy`,
                {
                    method: 'POST',
                    body: JSON.stringify({ vacancyId, userEmail }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error);
            }

            const data = await response.json();
            if(data.success){
                console.log(data.success);
            } else {
                console.log(data.error);
            }

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            setUserEmail('');
            console.log(`id: ${vacancyId}, email: ${userEmail}`);
            dispatch(stopSpinner());
        }
    };

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
            >
                <SendIcon fontSize="medium" />
            </IconButton>
        </form>
    );
};

export { ApplyVacancyForm }; 
