import { IVacancy } from "./vacancy.interface";

export interface IVacanciesData {
    vacancies: IVacancy[];
    amountOfApplications: number;
};
