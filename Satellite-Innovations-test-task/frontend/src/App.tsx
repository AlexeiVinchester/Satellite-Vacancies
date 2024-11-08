import { VacanciesWrapper } from "./components/VacanciesWrapper/VacanciesWrapper";
import { VacanciesHeader } from "./components/VacanciesHeader/VacanciesHeader";
import { VacancyList } from "./components/VacancyList/VacancyList";
import { SnackMessage } from "./features/snackMessage/SnackMessage";

function App() {
    return (
        <>
            <VacanciesWrapper>
                <VacanciesHeader title="Vacancies" />
                <VacancyList />
            </VacanciesWrapper>
            <SnackMessage />
        </>

    );
};

export { App }; 
