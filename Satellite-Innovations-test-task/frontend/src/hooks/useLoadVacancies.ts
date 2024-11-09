import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadVacancies } from "../components/VacancyList/vacancyList.service";
import { IServerErrorMessage } from "../services/apiService";
import { IVacanciesData } from "../types/vacanciesData.interface";
import { showSuccessLoadingOfVacancies, showErrorMessage } from "../utils/snackMessageHelpers";

export const useLoadVacancies = () => {
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
                dispatch(showErrorMessage(error));
            } finally {
                setIsLoading(false);
            }
        };
        fetchVacancies();
    }, [dispatch]);

    return { data, isLoading };
};