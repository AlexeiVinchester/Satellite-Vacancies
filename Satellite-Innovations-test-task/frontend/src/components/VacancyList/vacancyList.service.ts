import { apiEndpoints } from "../../config/apiConfig";
import { IServerErrorMessage, makeApiRequest } from "../../services/apiService"
import { IVacanciesData } from "../../types/vacanciesData.interface";

const loadVacancies = async () => {
    console.log(apiEndpoints.getVacancies)
    const result: IVacanciesData & IServerErrorMessage = await makeApiRequest(
        apiEndpoints.getVacancies,
        'GET'
    );
    return result;
};

export { loadVacancies };