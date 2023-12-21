import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export enum MessageStatus {
    initial,
    success,
    error,
}
export interface IMessageType {
    content?: string;
    status: MessageStatus,
    onClick: () => void;
}
const Message: React.FC<IMessageType> = ({ content,status, onClick }: IMessageType) => {
    let open = true;
    React.useEffect(() => {
        let time = setTimeout(() => {
            onClick();
        }, 2000);
        return () => {
            clearTimeout(time);
        }
    })

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        open = false;
        onClick();
    };
    if (status === MessageStatus.success) {
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {content ?? "Thành công!!!"}
                </Alert>
            </Snackbar>
        );
    }
    else if (status === MessageStatus.error) {
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {content ?? "Thất bại!!!"}
                </Alert>
            </Snackbar>
        );
    }
    else{
        return (<></>);
    }

}
export default Message;