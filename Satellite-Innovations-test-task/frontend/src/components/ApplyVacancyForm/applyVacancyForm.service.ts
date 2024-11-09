import { apiEndpoints } from "../../config/apiConfig";
import { makeApiRequest } from "../../services/apiService"
import { IServerErrorMessage, IServerSuccessMessage } from "../../types/serverMessages.interface";
import { IVacancyApplication } from "../../types/vacancyApplication.interface"

export const applyForVacancy = async (body: IVacancyApplication) => {
    const result: IServerErrorMessage & IServerSuccessMessage = await makeApiRequest(
        apiEndpoints.applyVacancy,
        'POST',
        body
    );

    return result;
};