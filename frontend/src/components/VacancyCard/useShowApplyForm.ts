import { useCallback, useState } from "react";

export const useShowApplyForm = () => {
    const [isFormHidden, setIsFormHidden] = useState(true);

    const handleClick = useCallback(() => {
        setIsFormHidden(!isFormHidden);
    }, [isFormHidden]);

    return { isFormHidden, handleClick };
};