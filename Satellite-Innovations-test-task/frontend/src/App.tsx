import { VacanciesWrapper } from "./components/VacanciesWrapper/VacanciesWrapper";
import { VacanciesHeader } from "./components/VacanciesHeader/VacanciesHeader";
import { VacancyCard } from "./components/VacancyCard/VacancyCard";

function App() {
    return (
        <VacanciesWrapper>
            <VacanciesHeader title="Vacancies" />
            <VacancyCard data={null}/>
        </VacanciesWrapper>
    );
};

export { App }; 
