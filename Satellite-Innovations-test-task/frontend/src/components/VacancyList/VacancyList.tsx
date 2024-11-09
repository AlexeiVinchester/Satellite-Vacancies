import { useLoadVacancies } from "../../hooks/useLoadVacancies";
import { Spinner } from "../Spinner/Spinner";
import { VacancyCard } from "../VacancyCard/VacancyCard";

const VacancyList = () => {
    const { data, isLoading } = useLoadVacancies();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col items-center gap-8">
            {data && (<>
                <h4>Amount of applications for vacancies: {data.amountOfApplications}</h4>
                {
                    data.vacancies.map(vacancy => (
                        <VacancyCard data={vacancy} key={vacancy._id} />
                    ))
                }
            </>)}

        </div>
    );
};

export { VacancyList };
