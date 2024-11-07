import { Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { IVacancy } from "../../types/vacancy.interface";
import { StyledButton } from "../StyledButton/StyledButton";
import { useState } from "react";

interface IVacancyCardProps {
    data: IVacancy | null;
};

const VacancyCard = ({ data }: IVacancyCardProps) => {
    const [isFormHidden, setIsFormHidden] = useState(true);
    //const { _id, title, description, logo } = data;
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
                    Frontend Developer
                </Typography>
                <Divider  />
                <Typography variant="h6" component="p">
                    Description of vacancy
                </Typography>
            </CardContent>
            <CardActions>
                <StyledButton 
                    onClick={() => {setIsFormHidden(false)}}
                    title={isFormHidden ? 'Apply' : 'Send'}
                />
                {!isFormHidden && <input placeholder="enter mail" />}
            </CardActions>
        </Card>
    );
};

export { VacancyCard };
