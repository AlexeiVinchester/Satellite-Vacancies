export interface ISpinnerFlag {
    isActive: boolean;
    message: string | null;
};

export const initialSpinnerFlagState: ISpinnerFlag = {
    isActive: false,
    message: null
};