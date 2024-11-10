import { apiEndpoints } from "../../config/apiConfig";
import { makeApiRequest } from "../../services/apiService"
import { IServerErrorMessage, IServerSuccessMessage } from "../../types/serverMessages.interface";
import { IVacancyApplication } from "../../types/vacancyApplication.interface"

export const applyForVacancy = async (id: string, body: IVacancyApplication) => {
    const result: IServerErrorMessage | IServerSuccessMessage = await makeApiRequest(
        `${apiEndpoints.vacancies}/${id}/apply`,
        'POST',
        body
    );

    return result;
};