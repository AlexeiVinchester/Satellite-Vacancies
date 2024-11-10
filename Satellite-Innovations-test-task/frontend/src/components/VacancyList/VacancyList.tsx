import { IVacancy } from "../../types/vacancy.interface";
import { Spinner } from "../Spinner/Spinner";
import { VacancyCard } from "../VacancyCard/VacancyCard";
import { useLoadVacancies } from "./useLoadVacancies";

const VacancyList = () => {
    const { data, isLoading } = useLoadVacancies();

    if (isLoading) {
        return <Spinner />;
    }

    if (!data || 'error' in data) {
        return <p className="flex justify-center">Yooops, No vacancies</p>;
    }

    return (
        <div className="flex flex-col items-center gap-8">
            {data && (<>
                <h4>Amount of applications for vacancies: {data.amountOfApplications}</h4>
                {
                    data.vacancies.map((vacancy: IVacancy) => (
                        <VacancyCard data={vacancy} key={vacancy._id} />
                    ))
                }
            </>)}

        </div>
    );
};

export { VacancyList };
