import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { applyForVacancy } from "../components/ApplyVacancyForm/applyVacancyForm.service";
import { startSpinner, stopSpinner } from "../features/spinnerFlag/spinnerFlagSlice";
import { showSuccessAdditionOfApplication, showErrorMessage } from "../utils/snackMessageHelpers";

export const useApplyVacancy = (vacancyId: string) => {
    const [userEmail, setUserEmail] = useState('');
    const dispatch = useDispatch();

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(startSpinner('Sending apply...'));
        try {
            const data = await applyForVacancy({ userEmail, vacancyId });
            if (data.success) {
                dispatch(showSuccessAdditionOfApplication());
            }
        } catch (error) {
            dispatch(showErrorMessage(error));
        } finally {
            setUserEmail('');
            dispatch(stopSpinner());
        }
    };

    return { userEmail, handleChange, handleSubmit };
};