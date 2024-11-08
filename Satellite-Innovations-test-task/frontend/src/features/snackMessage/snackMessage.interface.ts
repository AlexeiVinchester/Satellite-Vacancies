export type TSnackMessageSeverity = 'error' | 'success' | 'info' | 'warning';

export interface ISnackMessageState {
    isOpen: boolean;
    message: string | null;
    severity: TSnackMessageSeverity;
};

export const initialSnackMessageState: ISnackMessageState = {
    isOpen: false,
    message: null,
    severity: 'success'
};

