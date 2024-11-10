import { showSnackMessage } from "../features/snackMessage/snackMessageSlice";
import { TAlertSeverity } from "../types/alertSeverity.type";
import { IMessageInfo } from "../types/messageInfo.interface";

export const createMessage = (message: string, severity: TAlertSeverity): IMessageInfo => {
    return { message, severity };
};

export const showErrorMessage = (error: unknown) => {
    return showSnackMessage(createMessage(
        error instanceof Error ? error.message : 'Unknown error occured!',
        'error'
    ));
};

export const showSuccessMessage = (message: string) => {
    return showSnackMessage(createMessage(message, 'success'));
};

