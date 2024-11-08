import { combineReducers } from "@reduxjs/toolkit";
import snackMessageSlice from "../features/snackMessage/snackMessageSlice";
import loadingFlagSlice from "../features/loadingFlag/loadingFlagSlice";

export const rootReducer = combineReducers({
    snackMessage: snackMessageSlice,
    loadingFlag: loadingFlagSlice
});