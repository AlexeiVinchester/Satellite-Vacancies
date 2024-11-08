import { combineReducers } from "@reduxjs/toolkit";
import snackMessageSlice from "../features/snackMessage/snackMessageSlice";
import spinnerFlagSlice from "../features/spinnerFlag/spinnerFlagSlice";

export const rootReducer = combineReducers({
    snackMessage: snackMessageSlice,
    spinnerFlag: spinnerFlagSlice
});