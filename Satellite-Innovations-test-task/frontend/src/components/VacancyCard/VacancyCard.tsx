import { Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { IVacancy } from "../../types/vacancy.interface";
import { StyledButton } from "../StyledButton/StyledButton";
import { ApplyVacancyForm } from "../ApplyVacancyForm/ApplyVacancyForm";
import { useShowApplyForm } from "./useShowApplyForm";

interface IVacancyCardProps {
    data: IVacancy;
};

const VacancyCard = ({ data }: IVacancyCardProps) => {
    const { isFormHidden, handleClick } = useShowApplyForm()
    const { _id, title, description } = data;

    return (
        <Card
            variant="outlined"
            sx={{
                width: '90%',
                boxShadow: '0 5px 20px #ABB2B9;',
                borderRadius: '22px'
            }}
        >
            <CardContent>
                <Typography variant="h4" component="p">
                    {title}
                </Typography>
                <Divider />
                <Typography variant="h6" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <StyledButton
                    title={isFormHidden ? 'Apply' : 'Hide'}
                    onClick={handleClick}
                />
                {!isFormHidden && <ApplyVacancyForm vacancyId={_id} />}
            </CardActions>
        </Card>
    );
};

export { VacancyCard };
