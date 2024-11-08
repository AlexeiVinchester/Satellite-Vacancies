import { createSlice } from "@reduxjs/toolkit";
import { initialSnackMessageState } from "./snackMessage.interface";

const snackMessageSlice = createSlice({
    name: 'snackMessage',
    initialState: { ...initialSnackMessageState },
    reducers: {
        showSnackMessage(state, action) {
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