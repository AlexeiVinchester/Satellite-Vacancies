import { IServerErrorMessage, makeApiRequest } from "../../services/apiService"
import { IServerSuccessMessage } from "../../types/serverMessages.interface";
import { IVacancyApplication } from "../../types/vacancyApplication.interface"

export const applyForVacancy = async (body: IVacancyApplication) => {
    const result: IServerErrorMessage & IServerSuccessMessage = await makeApiRequest(
        `https://4cd0-37-214-25-169.ngrok-free.app/applyVacancy`,
        'POST',
        body
    );

    return result;
};