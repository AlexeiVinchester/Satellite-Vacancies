import { IVacancy } from "../../types/vacancy.interface";
import { VacancyCard } from "../VacancyCard/VacancyCard";

interface IListOfVacanciesProps {
    data: IVacancy[];
};

const ListOfVacancies = ({ data }: IListOfVacanciesProps) => {
    return data.map((vacancy: IVacancy) => (
        <VacancyCard data={vacancy} key={vacancy._id} />
    ));
};

export { ListOfVacancies };