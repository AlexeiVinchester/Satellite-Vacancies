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
                borderRadius: '1rem',
            }}
        >
            {children}
        </Container>
    );
};

export { VacanciesWrapper };
