import { apiEndpoints } from "../../config/apiConfig";
import { IServerErrorMessage, makeApiRequest } from "../../services/apiService"
import { IServerSuccessMessage } from "../../types/serverMessages.interface";
import { IVacancyApplication } from "../../types/vacancyApplication.interface"

export const applyForVacancy = async (body: IVacancyApplication) => {
    const result: IServerErrorMessage & IServerSuccessMessage = await makeApiRequest(
        apiEndpoints.applyVacancy,
        'POST',
        body
    );

    return result;
};