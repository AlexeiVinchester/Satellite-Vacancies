import { TAlertSeverity } from "../types/alertSeverity.type";
import { IMessageInfo } from "../types/messageInfo.interface";

export const createMessage = (message: string, severity: TAlertSeverity): IMessageInfo => {
    return { message, severity };
};