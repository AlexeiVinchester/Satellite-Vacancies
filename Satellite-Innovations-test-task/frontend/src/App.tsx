import { VacanciesWrapper } from "./components/VacanciesWrapper/VacanciesWrapper";
import { VacanciesHeader } from "./components/VacanciesHeader/VacanciesHeader";
import { VacanciesDataContainer } from "./components/VacanciesDataContainer/VacanciesDataContainer";
import { SnackMessage } from "./components/SnackMessage/SnackMessage";

function App() {
    return (
        <>
            <VacanciesWrapper>
                <VacanciesHeader title="Vacancies" />
                <VacanciesDataContainer />
            </VacanciesWrapper>
            <SnackMessage />
        </>

    );
};

export { App }; 
