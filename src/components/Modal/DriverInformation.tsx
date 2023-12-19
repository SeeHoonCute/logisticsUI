import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Modal, Box, Typography, Button, Grid, IconButton, TextField } from '@mui/material';
import { ClearIcon } from '@mui/x-date-pickers';
import { DriverInformation } from './vehicleInformation';
interface IVehicleInformation {
    currentId: number;
    updateDriver?: DriverInformation;
    onClick: (driver: DriverInformation) => void;
    onClose: () => void;
}


const DriverInformationModal = ({ currentId, updateDriver, onClick, onClose }: IVehicleInformation) => {
    //const [currentId, setCurrentId] = React.useState(0);
    const [name, setName] = React.useState('');
    const [cmnd, setCMND] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const classes = useStyles();

    useEffect(() => {
        if (updateDriver) {
            setName(updateDriver.name);
            setCMND(updateDriver.cmnd);
            setPhoneNumber(updateDriver.phone);
        }

    }, [])

    return (
        <>
            <Modal
                open={true}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid className={classes.editBox}>
                        <Grid className={classes.iconStyle}>
                            <Grid>
                                <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight={600}>
                                    Thông tin tài xế
                                </Typography>
                            </Grid>
                            <Grid>
                                <IconButton onClick={onClose}>
                                    <ClearIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField value={name} onChange={(e) => setName(e.target.value)} required id="outlined-basic" label="Họ và tên" placeholder="Nguyễn Văn Thành" variant="outlined" size='small' />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField value={cmnd} onChange={(e) => setCMND(e.target.value)} required id="outlined-basic" label="CMND/CCCD" placeholder="096304592784" variant="outlined" size='small' />
                            </Grid>
                        </Grid>
                        <Grid mt={2} mb={4}>
                            <TextField value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required id="outlined-basic" label="Số điện thoại" placeholder="0358927632" variant="outlined" size='small' />
                        </Grid>

                        <Grid display={"flex"} justifyContent={"center"} className={classes.microButton}>
                            <Button
                                component="label"
                                variant="contained"
                                onClick={() => onClick({
                                    id: updateDriver ? updateDriver.id : currentId + 1,
                                    name: name,
                                    cmnd: cmnd,
                                    phone: phoneNumber,
                                })}
                                sx={{ textTransform: 'unset', backgroundColor: '#6D31ED' }}>
                                Lưu thông tin
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
};
export default DriverInformationModal;
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
        color: "#15ABFF",
        fontSize: "16px",
        paddingLeft: "30px",
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
    // borderRadius: '25px',
    p: 4,
};