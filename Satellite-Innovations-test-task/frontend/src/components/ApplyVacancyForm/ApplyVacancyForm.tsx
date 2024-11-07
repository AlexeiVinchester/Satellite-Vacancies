import { IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

const ApplyVacancyForm = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmail('');
        console.log(email);
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
                value={email}
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
                <SendIcon fontSize="medium"/>
            </IconButton>
        </form>
    );
};

export { ApplyVacancyForm }; 
