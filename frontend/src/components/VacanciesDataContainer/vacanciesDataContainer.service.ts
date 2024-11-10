import { apiEndpoints } from "../../config/apiConfig";
import { makeApiRequest } from "../../services/apiService"
import { IServerErrorMessage } from "../../types/serverMessages.interface";
import { IVacanciesData } from "../../types/vacanciesData.interface";

const loadVacancies = async () => {
    const result: IVacanciesData | IServerErrorMessage = await makeApiRequest(
        apiEndpoints.vacancies,
        'GET'
    );
    return result;
};

export { loadVacancies };