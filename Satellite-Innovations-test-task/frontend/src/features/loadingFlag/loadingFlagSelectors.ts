import { TRootState } from "../../app/store";

export const selectLoadingFlag = (state: TRootState) => state.loadingFlag.isLoading;