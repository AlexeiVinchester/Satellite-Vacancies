import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { startSpinner, stopSpinner } from "../../features/spinnerFlag/spinnerFlagSlice";
import { showErrorMessage, showSuccessMessage } from "../../utils/snackMessageHelpers";
import { applyForVacancy } from "./applyVacancyForm.service";

export const useApplyVacancy = (vacancyId: string) => {
    const [userEmail, setUserEmail] = useState('');
    const dispatch = useDispatch();

    const [isSending, setIsSending] = useState(false);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(startSpinner('Sending apply...'));
        setIsSending(true);
        try {
            const data = await applyForVacancy({ userEmail, vacancyId });
            if ('success' in data) {
                dispatch(showSuccessMessage('Successfull sending of applications'));
            }
        } catch (error) {
            dispatch(showErrorMessage(error));
        } finally {
            setUserEmail('');
            setIsSending(false);
            dispatch(stopSpinner());
        }
    };

    return { userEmail, handleChange, handleSubmit, isSending };
};