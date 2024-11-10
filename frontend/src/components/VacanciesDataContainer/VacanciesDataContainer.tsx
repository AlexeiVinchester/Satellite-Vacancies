import { AmountOfApplicationsLabel } from "../AmountOfApplicationsLabel/AmountOfApplicationsLabel";
import { ListOfVacancies } from "../ListOfVacancies/ListOfVacancies";
import { Spinner } from "../Spinner/Spinner";
import { useLoadVacancies } from "./useLoadVacancies";

const VacanciesDataContainer = () => {
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
                <AmountOfApplicationsLabel value={data.amountOfApplications} />
                <ListOfVacancies data={data.vacancies} />
            </>)}

        </div>
    );
};

export { VacanciesDataContainer };
