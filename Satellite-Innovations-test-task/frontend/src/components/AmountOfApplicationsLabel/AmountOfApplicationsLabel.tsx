interface IAmountOfApplicationsLabelProps {
    value: number;
}

const AmountOfApplicationsLabel = ({ value }: IAmountOfApplicationsLabelProps) => {
    return <h4>Amount of applications for vacancies: {value}</h4>;
};

export { AmountOfApplicationsLabel };
