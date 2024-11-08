import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialSpinnerFlagState } from "./spinnerFlag.interface";

const spinnerFlagSlice = createSlice({
    name: 'spinnerFlag',
    initialState: { ...initialSpinnerFlagState },
    reducers: {
        startSpinner(state, action: PayloadAction<string>) {
            state.isActive = true;
            state.message = action.payload
        },
        stopSpinner(state) {
            state.isActive = false;
            state.message = null;
        }
    }
});

export const { startSpinner, stopSpinner } = spinnerFlagSlice.actions;
export default spinnerFlagSlice.reducer;