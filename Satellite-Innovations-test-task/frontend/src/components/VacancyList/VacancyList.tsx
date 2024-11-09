import { useEffect, useState } from "react";
import { VacancyCard } from "../VacancyCard/VacancyCard";
import { Spinner } from "../Spinner/Spinner";
import { IVacanciesData } from "../../types/vacanciesData.interface";
import { useDispatch } from "react-redux";
import { loadVacancies } from "./vacancyList.service";
import { IServerErrorMessage } from "../../services/apiService";
import { showErrorMessage, showSuccessLoadingOfVacancies } from "../../utils/snackMessageHelpers";

const VacancyList = () => {
    const [data, setData] = useState<IVacanciesData & IServerErrorMessage | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchVacancies = async () => {
            setIsLoading(true);
            try {
                const data = await loadVacancies();
                setData(data);
                dispatch(showSuccessLoadingOfVacancies());
            } catch (error) {
                dispatch(showErrorMessage(error))
            } finally {
                setIsLoading(false);
            }
        };
        fetchVacancies();
    }, [dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col items-center gap-8">
            {data && (<>
                <h4>Amount of applications for vacancies: {data.amountOfResponses}</h4>
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
