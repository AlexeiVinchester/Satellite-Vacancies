import { VacancyCard } from "../VacancyCard/VacancyCard";

const VacancyList = () => {
    return (
        <div className="flex flex-col items-center gap-8">
            <VacancyCard data={null}/>
            <VacancyCard data={null}/>
            <VacancyCard data={null}/>
            <VacancyCard data={null}/>
        </div>
    );
};

export { VacancyList };
