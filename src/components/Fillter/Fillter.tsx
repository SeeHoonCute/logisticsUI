import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormDate from "../FormDate/FormDate";
import RouteModal from "../Modal/RouteModal";
import province from "../../assets/data/provices.json";
import dist from "../../assets/data/dist.json";
import ward from "../../assets/data/ward.json";
import Message, { MessageStatus } from "../Message/Message";
import { useAppSelector } from "../../hooks/hook";

const Fillter = () => {
    //useState
    const [open, setOpen] = React.useState(false);
    const [nationId, setNationId] = React.useState('');
    const [provinceId, setProvinceId] = React.useState('');
    const [distId, setDistId] = React.useState('');
    const [wardId, setWardId] = React.useState('');
    // const [startTime, setStartTime] = React.useState('');
    // const [endTime, setEndTime] = React.useState('');
    const [statusSelect, setStatusId] = React.useState('');
    const [routeStatus, setrouteStatus] = React.useState(MessageStatus.initial);

    const pathName = window.location.pathname;
    const iShippingUnit = pathName.includes("shippingUnit");
    const { routeCount, routeIdSelected } = useAppSelector(state => state.route);

    //function
    const handleChangeNational = (event: SelectChangeEvent) => {
        setNationId(event.target.value as string);
    };

    const handleChangeProvince = (event: SelectChangeEvent) => {
        setProvinceId(event.target.value as string);
        setDistId('');
        setWardId('');
    };

    const handleChangeDist = (event: SelectChangeEvent) => {
        setDistId(event.target.value as string);
        setWardId('');
    };

    const handleChangeWard = (event: SelectChangeEvent) => {
        setWardId(event.target.value as string);
    };

    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatusId(event.target.value as string);
    }

    const handleOpen = () => setOpen(true);

    const handleSaveInformation = () => {
        setOpen(false)
        if (true) {
            setrouteStatus(MessageStatus.success);
        }
        else {
            setrouteStatus(MessageStatus.error);
        }
    };

    const resetSatus = () => {
        setrouteStatus(MessageStatus.initial);
    }

    const handleCloseModal = () => {
        setOpen(false);
    };

    const classes = useStyles();
    return (
        <>
            {open && <RouteModal onClick={handleSaveInformation} onClose={handleCloseModal} routeIdSelected={routeIdSelected} />}
            {routeStatus !== MessageStatus.initial && <Message status={routeStatus} onClick={resetSatus} />}
            <Grid container className={classes.container}>
                <Grid item xs={2}>
                    <p className={classes.formHeader}>Thời gian</p>
                    <Grid>
                        <Grid item xs={12} className={classes.dateWrapper} >
                            <p className={classes.formSubHeader}>Từ ngày:</p>
                            <FormDate />
                        </Grid>
                        <Grid item xs={12} className={classes.dateWrapper} >
                            <p className={classes.formSubHeader}>Đến ngày:</p>
                            <FormDate />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={4} className={classes.containerItem}>
                    <Grid item xs={12}><p className={classes.formHeader}>Kho xuất</p></Grid>
                    <Grid className={classes.formItem} item xs={6}>
                        <p className={classes.formSubHeader}>Quốc gia: </p>
                        <Select
                            className={classes.addressSelect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={nationId}
                            onChange={handleChangeNational}
                        >
                            <MenuItem value={1}>Viet Nam</MenuItem>
                        </Select>
                    </Grid>
                    <Grid className={classes.formItem} item xs={6}>
                        <p className={classes.formSubHeader}>Tỉnh:</p>
                        <Select
                            disabled={nationId === ''}
                            className={classes.addressSelect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={provinceId}
                            onChange={handleChangeProvince}
                        >
                            {Object.keys(province).map((key: string) => (
                                <MenuItem key={key} value={key}>{province[key as keyof typeof province].name as string}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid className={classes.formItem} item xs={6}>
                        <p className={classes.formSubHeader}>Huyện:</p>
                        <Select
                            disabled={provinceId === ''}
                            className={classes.addressSelect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={distId}
                            onChange={handleChangeDist}
                        >
                            {Object.keys(dist).filter(value => dist[value as keyof typeof dist].parent_code === provinceId).map((key: string) => (
                                <MenuItem value={key}>{dist[key as keyof typeof dist].name as string}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid className={classes.formItem} item xs={6}>
                        <p className={classes.formSubHeader}>Xã:</p>
                        <Select
                            disabled={distId === ''}
                            className={classes.addressSelect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={wardId}
                            onChange={handleChangeWard}
                        >
                            {Object.keys(ward).filter(value => ward[value as keyof typeof ward].parent_code === distId).map((key: string) => (
                                <MenuItem value={key}>{ward[key as keyof typeof ward].name as string}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                </Grid>
                <Grid item xs={2} className={classes.containerItem}>
                    <p className={classes.formHeader}>Trạng thái</p>
                    <Select
                        className={classes.statusSelect}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={statusSelect}
                        onChange={handleChangeStatus}
                    >
                        <MenuItem value={1}>Chưa chọn đơn vị vận chuyển</MenuItem>
                        <MenuItem value={2}>Đã chọn đơn vị vận chuyển</MenuItem>
                        <MenuItem value={3}>Đã tạo yêu cầu thuê xe</MenuItem>
                        <MenuItem value={4}>Yêu cầu thuê xe bị hủy</MenuItem>
                        <MenuItem value={5}>Yêu cầu thuê xe đã duyệt</MenuItem>
                    </Select>
                </Grid>
                {
                    iShippingUnit || <Grid item container xs={4}>
                        <Grid item xs={6} className={classes.nameButton}>
                            <Grid className={classes.microButton}>
                                <Button
                                    className={classes.microButton}
                                    component="label"
                                    variant="contained"
                                    startIcon={<AddOutlinedIcon />}
                                    sx={{ textTransform: 'unset', backgroundColor: '#6D31ED' }}
                                >
                                    Gợi ý đơn vị vận chuyển
                                </Button>
                            </Grid>
                            <Grid className={classes.microButton}>
                                <Button
                                    disabled={routeCount !== 1}
                                    component="label"
                                    variant="contained"
                                    startIcon={<AddOutlinedIcon />}
                                    sx={{ textTransform: 'unset', backgroundColor: '#6D31ED' }}
                                    onClick={handleOpen}>
                                    Chọn đơn vị vận chuyển
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} className={classes.nameButton}>
                            <Grid className={classes.microButton}>
                                <Button
                                    component="label"
                                    variant="contained"
                                    startIcon={<AddOutlinedIcon />}
                                    sx={{ textTransform: 'unset', backgroundColor: '#6D31ED' }}>
                                    Tạo yêu cầu vận chuyển
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </>
    );
};

export default Fillter;

const useStyles = makeStyles(() => ({
    container: {
        margin: "10px 0 0 10px",
    },
    formHeader: {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "0px",
    },
    formSubHeader: {
        fontSize: "14px",
    },
    nameButton: {
        textTransform: 'unset',
        marginTop: '10px',
    },
    microButton: {
        marginTop: '5px',
    },
    dateWrapper: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        gap: "3px",
        padding: "0 6px",
        marginBottom: '4px',
    },
    formItem: {
        display: 'flex',
        gap: "10px",
        justifyContent: "space-between",
        padding: "0 15px",
        alignItems: "center",
    },
    addressSelect: {
        flexBasis: "60",
        maxWidth: "60%",
        height: "32px",
        width: "100%",
    },
    statusSelect: {
        marginTop: "7px",
        height: "32px",
        width: "100%",
        margin: "0 4px",
        maxWidth: "80%",
    },
    containerItem: {
        padding: "0px 10px",
    }
}));