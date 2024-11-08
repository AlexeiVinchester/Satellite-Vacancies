import { createSlice } from "@reduxjs/toolkit";
import { initialLoadingFlagState } from "./loadingFlag.interface";

const loadingFlagSlice = createSlice({
    name: 'loadingFlag',
    initialState: { ...initialLoadingFlagState },
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        stopLoading(state) {
            state.isLoading = false;
        }
    }
});

export const { startLoading, stopLoading } = loadingFlagSlice.actions;
export default loadingFlagSlice.reducer;