import { IServerErrorMessage, makeApiRequest } from "../../services/apiService"
import { IVacanciesData } from "../../types/vacanciesData.interface";

const loadVacancies = async () => {
    const result: IVacanciesData & IServerErrorMessage = await makeApiRequest(
        'https://64a9-37-214-25-169.ngrok-free.app/getVacancies',
        'GET'
    );
    return result;
};

export { loadVacancies };