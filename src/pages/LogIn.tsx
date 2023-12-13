import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import logo from "../assets/images/logo-the-gioi-di-dong-mwg.png";
import { CarouselCard } from "../components/LogIn/CarouselCard";
import LogInBox from "../components/LogIn/LogInBox";

const LogInForm = () => {
    
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.header}>
                <Grid item container xs={2}>
                    <img className={classes.imgLogo} src={logo} />
                    <strong className={classes.titleLogo}>MWG</strong>
                </Grid>
                <Grid item container xs={10}></Grid>
            </Grid>
            <Grid container>
                <Grid item container xs={6} className={classes.carousel}>
                    < CarouselCard />
                </Grid>
                <Grid item container xs={6} className={classes.box}>
                    <LogInBox />
                </Grid>
            </Grid>
        </>
    )
}

export default LogInForm;

const useStyles = makeStyles(() => ({
    header: {
        margin: "10px",
        paddingBottom: "5px",
        borderBottom: "1px solid #E1DEE8",
    },
    imgLogo: {
        height: "30px",
    },
    titleLogo: {
        padding: "5px 10px",
    },
    body: {
        margin: "10px",
    },
    carousel: {
        width: '80%', // Adjust the width as needed
        // margin: 'auto',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
    }
}));