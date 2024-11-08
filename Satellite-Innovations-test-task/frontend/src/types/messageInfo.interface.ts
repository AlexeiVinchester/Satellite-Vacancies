import { TAlertSeverity } from "./alertSeverity.type";

export interface IMessageInfo {
    message: string | null;
    severity: TAlertSeverity;
};