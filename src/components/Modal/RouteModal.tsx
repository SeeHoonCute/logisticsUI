import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import { Button, Grid, IconButton, MenuItem, Select } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

interface IRouteModal {
    routeIdSelected: string;
    onClick: () => void;
    onClose: () => void;
}

const RouteModal = ({ onClick, onClose,routeIdSelected}: IRouteModal) => {
    const classes = useStyles();
    return (
        <Modal
            open={true}
            //onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid className={classes.editBox}>
                    <Grid className={classes.iconStyle}>
                        <Grid>
                            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight={600}>
                                CHỈNH SỬA ĐƠN VỊ VẬN CHUYỂN
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton onClick={onClose}>
                                <ClearIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Mã tuyến <span className={classes.colorSpan}>{routeIdSelected}</span>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Đơn vị vận chuyển
                    </Typography>
                    <Select
                        className={classes.addressSelect}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Lý do
                    </Typography>
                    <TextField required fullWidth id="fullWidth" sx={{ mb: 3 }} placeholder="Nhập lý do" />
                    <Grid display={"flex"} justifyContent={"center"} className={classes.microButton}>
                        <Button
                            component="label"
                            variant="contained"
                            onClick={onClick}
                            sx={{ textTransform: 'unset', backgroundColor: '#6D31ED' }}>
                            Lưu thông tin
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default RouteModal;

const useStyles = makeStyles(() => ({
    addressSelect: {
        flexBasis: "60",
        maxWidth: "60%",
        height: "32px",
        width: "100%",
    },
    microButton: {
        marginTop: '10px',
    },
    colorSpan: {
        color: "#379AE6",
    },
    editBox: {
        margin: '15px',
    },
    iconStyle: {
        display: "flex",
        justifyContent: "space-between",
    }
}));
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '25px',
    p: 4,
};
