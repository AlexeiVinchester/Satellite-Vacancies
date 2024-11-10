import { IMessageInfo } from "../../types/messageInfo.interface";

export interface ISnackMessageState extends IMessageInfo {
    isOpen: boolean;
};

export const initialSnackMessageState: ISnackMessageState = {
    isOpen: false,
    message: null,
    severity: 'success'
};

