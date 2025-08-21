import {
    Button, Dialog, DialogContent, DialogTitle, DialogActions, Typography,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface SuccessDialogProps {
    open: boolean;
    onClose: () => void;
}

function SuccessDialog({ open, onClose }: SuccessDialogProps) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{ textAlign: 'center' }}>
                <CheckCircleOutlineIcon sx={{ color: 'green', fontSize: 60, mb: 1 }} />
                <Typography variant="h6" component="div">
                    Registration Successful!
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Typography variant="body1" align="center">
                    Thank you for registering. We look forward to seeing you at the event.
                </Typography>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
                <Button onClick={onClose} color="primary" variant="contained">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SuccessDialog;
