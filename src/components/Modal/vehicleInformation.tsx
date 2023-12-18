import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Modal, Box, Typography, Button, Grid, IconButton, Select, MenuItem, TextField, Container, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@mui/material';
import { ClearIcon } from '@mui/x-date-pickers';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import DriverInformation from './DriverInformation';
import { SettingsCellOutlined } from '@mui/icons-material';
interface IVehicleInformation {
    onClick: () => void;
    onClose: () => void;
}

interface DriverInformation {
    name: string;
    cmnd: string;
    phone: string;
}

const createDriverInformation = (
    name: string,
    cmnd: string,
    phone: string,
): DriverInformation => {
    return {
        name,
        cmnd,
        phone,
    }
};
const Data = [
    createDriverInformation('Nguyễn Hoàng Vũ', '4930678349', '0962783294'),
    createDriverInformation('Nguyễn Đăng Khôi', '4930678349', '0962783294'),
]
const VehicleInformation = ({ onClick, onClose }: IVehicleInformation) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleSaveInformation = () => {
        setOpen(false);
    };
    const handleCloseInformation = () => {
        setOpen(false);
    };

    return (
        <> {open && <DriverInformation onClick={handleSaveInformation} onClose={handleCloseInformation} />}
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
                                    CHỌN THÔNG TIN
                                </Typography>
                            </Grid>
                            <Grid>
                                <IconButton onClick={onClose}>
                                    <ClearIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Container>
                            <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: '600' }}>
                                Yêu cầu xe<span className={classes.colorSpan}>#1234567</span>
                            </Typography>
                            <Grid container ml={2} mb={2}>
                                <Grid item xs={4}>
                                    <Typography sx={{ fontSize: '15px' }}>Loại phương tiện</Typography>
                                    <Typography sx={{ fontSize: '15px' }}>Tải trọng</Typography>
                                    <Typography sx={{ fontSize: '15px' }}>Thể tích</Typography>
                                    <Typography sx={{ fontSize: '15px' }}>Tính năng</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography sx={{ fontSize: '15px', color: '#15ABFF' }}>Xe Tải</Typography>
                                    <Typography sx={{ fontSize: '15px', color: '#6D31ED' }}>5 tấn</Typography>
                                    <Typography sx={{ fontSize: '15px', color: '#6D31ED' }}>9.3 x 2.35 x 2.6</Typography>
                                    <Typography sx={{ fontSize: '15px', color: '#F9623E' }}>Xe lạnh</Typography>
                                </Grid>
                            </Grid>
                            <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: '600' }}>
                                Nhập thông tin xe
                            </Typography>
                            <Grid ml={10} mr={10}>
                                <TextField id="standard-basic" fullWidth label="Biển số xe" variant="standard" size='small' />
                            </Grid>
                            <Grid container mt={2}>
                                <Grid item xs={8}>
                                    <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: '600' }}>
                                        Nhập thông tài xế
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} mt={1}>
                                    <Button
                                        onClick={handleOpen}
                                        sx={{ textTransform: 'unset' }}
                                        color="secondary"
                                        startIcon={<AddIcon fontSize="small" />}>
                                        Thêm thông tin tài xế
                                    </Button>
                                </Grid>
                            </Grid>
                            <TableContainer sx={{ marginTop: '10px' }}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: '#6D31ED', fontWeight: 'bolder' }}>Họ và tên</TableCell>
                                            <TableCell align="right" sx={{ color: '#6D31ED', fontWeight: 'bolder' }}>CCCD/CMND</TableCell>
                                            <TableCell align="right" sx={{ color: '#6D31ED', fontWeight: 'bolder' }}>Số điện thoại</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Data.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.cmnd}</TableCell>
                                                <TableCell align="right">{row.phone}</TableCell>
                                                <TableCell align="right">
                                                    <IconButton color="primary" size="small" onClick={handleOpen}>
                                                        <BorderColorIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <IconButton color="error" size="small">
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Container>
                        <Grid display={"flex"} justifyContent={"center"} className={classes.microButton}>
                            <Button
                                component="label"
                                variant="contained"
                                onClick={onClick}
                                sx={{ textTransform: 'unset', backgroundColor: '#6D31ED' }}>
                                Xác nhận
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
};
export default VehicleInformation;
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
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    // borderRadius: '25px',
    p: 4,
};