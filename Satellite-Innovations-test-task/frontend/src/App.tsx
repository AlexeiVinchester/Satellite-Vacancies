import { VacanciesWrapper } from "./components/VacanciesWrapper/VacanciesWrapper";
import { VacanciesHeader } from "./components/VacanciesHeader/VacanciesHeader";
import { VacancyList } from "./components/VacancyList/VacancyList";

function App() {
    return (
        <VacanciesWrapper>
            <VacanciesHeader title="Vacancies" />
            <VacancyList />
            
        </VacanciesWrapper>
    );
};

export { App }; 
