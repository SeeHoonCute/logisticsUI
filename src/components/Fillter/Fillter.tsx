import { makeStyles } from "@material-ui/core";
import { Button, Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormDate from "../FormDate/FormDate";
import React from "react";
import RouteModal from "../Modal/RouteModal";
import data from "../../assets/data/provices.json"


const Fillter = () => {
    // console.log(data);
    const keys = Object.keys(data);
    // console.log(keys[0]); // 👉️ ['name', 'country']
    // console.log(data["01"]);
    
    
    //select
    const [age, setAge] = React.useState('1111');
    const handleChange = (event: SelectChangeEvent) => {
        console.log(event);
        
        setAge(event.target.value as string);
    };
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleSave = () => {
        //xu ly
        console.log('aasa');
        setOpen(false)
    };

    const classes = useStyles();
    return (
        <>
            {open && <RouteModal  onClick={handleSave}/>}
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
                            value={age}
                            onChange={handleChange}
                        >
                            
                        </Select>
                    </Grid>
                    <Grid className={classes.formItem} item xs={6}>
                        <p className={classes.formSubHeader}>Tỉnh:</p>
                        <Select
                            className={classes.addressSelect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                            {Object.keys(data).map((key : string) => (
                                <MenuItem value={key}>{data[key as keyof typeof data].name as string}</MenuItem>
                            ))}
                            
                        </Select>
                    </Grid>
                    <Grid className={classes.formItem} item xs={6}>
                        <p className={classes.formSubHeader}>Huyện:</p>
                        <Select
                            className={classes.addressSelect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Grid>
                    <Grid className={classes.formItem} item xs={6}>
                        <p className={classes.formSubHeader}>Xã:</p>
                        <Select
                            className={classes.addressSelect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid item xs={2} className={classes.containerItem}>
                    <p className={classes.formHeader}>Trạng thái</p>
                    <Select
                        className={classes.statusSelect}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={2} className={classes.nameButton}>
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
                            component="label"
                            variant="contained"
                            startIcon={<AddOutlinedIcon />}
                            sx={{ textTransform: 'unset', backgroundColor: '#6D31ED' }}
                            onClick={handleOpen}>
                            Chọn đơn vị vận chuyển
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={2} className={classes.nameButton}>
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
        </>
    );
};
export default Fillter;
const useStyles = makeStyles(() => ({
    container:{
        margin:"10px 0 0 10px",
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
    containerItem:{
        padding:"0px 10px",
    }
}));