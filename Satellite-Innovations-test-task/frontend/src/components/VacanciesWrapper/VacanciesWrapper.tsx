import { Container } from "@mui/material";

interface IVacanciesWrapperProps {
    children: React.ReactNode;
};

const VacanciesWrapper = ({ children }: IVacanciesWrapperProps) => {
    return (
        <Container
            maxWidth='md'
            sx={{
                my: '2rem',
                py: '1rem',
                backgroundColor: 'rgb(246, 249, 252)',
                borderRadius: '1rem',
                minHeight: '100vh'
            }}
        >
            {children}
        </Container>
    );
};

export { VacanciesWrapper };
