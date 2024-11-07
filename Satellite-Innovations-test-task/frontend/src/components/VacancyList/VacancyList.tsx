import { useEffect, useState } from "react";
import { VacancyCard } from "../VacancyCard/VacancyCard";
import { IVacancy } from "../../types/vacancy.interface";
import { Spinner } from "../Spinner/Spinner";

const VacancyList = () => {
    const [vacancies, setVacancies] = useState<IVacancy[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchVacancies = async () => {
            setIsLoading(true);
            try{
                const response = await fetch('http://localhost:3002/getVacancies');
                if(!response.ok){
                    throw new Error('Server error while loading vacancies');
                }
                const data = await response.json();
                setVacancies(data.vacancies);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        };
        fetchVacancies();
    }, []);

    if(isLoading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col items-center gap-8">
            {
                vacancies?.map(vacancy => (
                    <VacancyCard data={vacancy} key={vacancy._id}/>
                ))
            }
        </div>
    );
};

export { VacancyList };
