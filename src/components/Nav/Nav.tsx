import React from "react";
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import { makeStyles } from "@material-ui/core";
import { Grid, IconButton } from "@mui/material";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

const Navigation = () => {
    const classes = useStyles();
    const pathName = window.location.pathname;
    const iShippingUnit = pathName.includes("shippingUnit");
    return (
        <>
            {
                iShippingUnit || <Grid container className={classes.navigation}>
                <Grid className={classes.titleIcon}>
                    <IconButton type="button" sx={{ p: '0px 10px' }}>
                        <RouteOutlinedIcon
                            // fontSize="large"
                            sx={{ color: '#6D31ED' }}
                        />
                    </IconButton>
                </Grid>
                <Grid className={classes.titleIcon}>
                    Tuyến
                </Grid>
            </Grid>
            }
            {
                iShippingUnit && <Grid container className={classes.navigation}>
                <Grid className={classes.titleIcon}>
                    <IconButton type="button" sx={{ p: '0px 10px' }}>
                        <DirectionsCarFilledOutlinedIcon
                            // fontSize="large"
                            sx={{ color: '#6D31ED' }}
                        />
                    </IconButton>
                </Grid>
                <Grid className={classes.titleIcon}>
                    Thuê xe
                </Grid>
            </Grid>
            }
        </>
    );
};
export default Navigation;

const useStyles = makeStyles(() => ({
    navigation: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F5F1FE',
        padding: 10,
    },
    titleIcon: {
        fontSize: '11px',
        color: '#6D31ED',
        width: '100%',
        fontWeight:'bolder',
    },
}));