import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackMessage } from "./snackMessageSlice";
import ReactDOM from "react-dom";
import { selectSnackMessage } from "./snackMessageSelectors";
import { selectLoadingFlag } from "../loadingFlag/loadingFlagSelectors";

const SnackMessage = () => {
    const dispatch = useDispatch();
    const { isOpen, message, severity } = useSelector(selectSnackMessage);
    const isLoading = useSelector(selectLoadingFlag);

    const handleClose = () => {
        dispatch(hideSnackMessage());
    };

    const portalContainer = document.getElementById('snackBar-portal');
    if (!portalContainer) {
        return null;
    }

    return ReactDOM.createPortal(
        <Snackbar
            open={isOpen || isLoading}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
                icon={isLoading ? <CircularProgress color="inherit" size={20} /> : undefined}
            >
                {isLoading ? 'Loading' : message}
            </Alert>
        </Snackbar>,
        portalContainer
    );
};

export { SnackMessage };