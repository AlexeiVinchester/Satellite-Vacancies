import { TRootState } from "../../app/store";

export const selectSnackMessage = (state: TRootState) => state.snackMessage;
