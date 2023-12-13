import React from "react";
import { Grid, Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Fillter from "./components/Fillter/Fillter";
import SuggestionTable from "./components/Table/SuggestionTable";
import RouteTable from "./components/Table/Table";

export const Frame = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.layOut}>
                <Grid className={classes.header}>
                    <Header />
                </Grid>
                <Grid container>
                    <Grid item xs={0.5}>
                        <Nav />
                    </Grid>
                    <Grid item xs={11.5}>
                        <Grid item xs={12} className={classes.fillter}>
                            <Fillter />
                        </Grid>
                        <Grid item xs={12} className={classes.table}>
                            <RouteTable />
                            <Grid display={"flex"} justifyContent={"center"} item xs={12}>
                                <Pagination count={10} variant="outlined" shape="rounded" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

const useStyles = makeStyles(() => ({
    layOut: {
        margin: '0px',
        width: '100%',
    },
    header: {
        width: '100%',
    },
    fillter: {
        margin: '10px',
    },
    table: {

    }
}))
