import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialSnackMessageState } from "./snackMessage.interface";
import { IMessageInfo } from "../../types/messageInfo.interface";

const snackMessageSlice = createSlice({
    name: 'snackMessage',
    initialState: { ...initialSnackMessageState },
    reducers: {
        showSnackMessage(state, action: PayloadAction<IMessageInfo>) {
            state.isOpen = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        hideSnackMessage(state) {
            state.isOpen = false;
            state.message = null;
            state.severity = 'success';
        }
    }
});

export const { showSnackMessage, hideSnackMessage } = snackMessageSlice.actions;
export default snackMessageSlice.reducer;