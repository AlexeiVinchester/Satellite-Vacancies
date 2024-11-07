import { useEffect, useState } from "react";
import { VacancyCard } from "../VacancyCard/VacancyCard";
import { Spinner } from "../Spinner/Spinner";
import { IVacanciesData } from "../../types/vacanciesData.interface";

const VacancyList = () => {
    const [data, setData] = useState<IVacanciesData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVacancies = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:3002/getVacancies');
                if (!response.ok) {
                    throw new Error('Server error while loading vacancies');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        };
        fetchVacancies();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col items-center gap-8">
            {data && (<>
                <h4>Amount of responses to vacancies: {data.amountOfResponses}</h4>
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
