import { Typography } from "@mui/material";

interface IVacanciesHeaderProps {
    title: string;
};

const VacanciesHeader = ({ title }: IVacanciesHeaderProps) => {
    return (
        <Typography
            sx={{
                fontWeight: 400,
                fontSize: '2rem',
                color: 'rgb(33, 51, 67)',
                textAlign: 'center',
                mb: '2rem'
            }}
        >
            {title}
        </Typography>
    );
};

export { VacanciesHeader };
