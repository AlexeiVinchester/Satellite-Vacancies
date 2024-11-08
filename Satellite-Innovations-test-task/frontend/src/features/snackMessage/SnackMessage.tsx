import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackMessage } from "./snackMessageSlice";
import ReactDOM from "react-dom";
import { selectSnackMessage } from "./snackMessageSelectors";
import { selectSpinnerFlag } from "../spinnerFlag/spinnerFlagSelectors";

const SnackMessage = () => {
    const dispatch = useDispatch();
    const { isOpen, message: snackMessage, severity } = useSelector(selectSnackMessage);
    const { isActive, message: spinnerMessage } = useSelector(selectSpinnerFlag);

    const handleClose = () => {
        dispatch(hideSnackMessage());
    };

    const portalContainer = document.getElementById('snackBar-portal');
    if (!portalContainer) {
        return null;
    }

    return ReactDOM.createPortal(
        <Snackbar
            open={isOpen || isActive}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
                icon={isActive ? <CircularProgress color="inherit" size={20} /> : undefined}
            >
                {isActive ? spinnerMessage : snackMessage}
            </Alert>
        </Snackbar>,
        portalContainer
    );
};

export { SnackMessage };