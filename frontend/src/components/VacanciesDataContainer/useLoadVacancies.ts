import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IServerErrorMessage } from "../../types/serverMessages.interface";
import { IVacanciesData } from "../../types/vacanciesData.interface";
import { showErrorMessage, showSuccessMessage } from "../../utils/snackMessageHelpers";
import { loadVacancies } from "./vacanciesDataContainer.service";

export const useLoadVacancies = () => {
    const [data, setData] = useState<IVacanciesData | IServerErrorMessage | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const data = await loadVacancies();
                setData(data);
                dispatch(showSuccessMessage('Vacancies were loaded succesfully'));
            } catch (error) {
                dispatch(showErrorMessage(error));
            } finally {
                setIsLoading(false);
            }
        })();
    }, [dispatch]);

    return { data, isLoading };
};