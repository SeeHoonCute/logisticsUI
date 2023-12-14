import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import logo from "../assets/images/logo-the-gioi-di-dong-mwg.png";
import { CarouselCard } from "../components/LogIn/CarouselCard";
import LogInBox from "../components/LogIn/LogInBox";
import { useNavigate } from "react-router-dom";
import { SwitchRouteByRole } from "../utils/SwitchRouteByRole";

const LogInForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    const CheckLogin = () => {
        const token = localStorage.getItem('token');
        if (token) {
            localStorage.setItem("token", token)
            SwitchRouteByRole(navigate, token)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        CheckLogin()
    }, [])

    const onFinish = async (values: any) => {
        // var params: loginDTO = {
        //     userName: values.username,
        //     password: values.password
        // }

        // await authService.login(params).then((res) => {
        //     localStorage.setItem("token", res)
        //     SwitchRouteByRole(navigate, res)
        // }).catch(() => {
        //     alert("Login Fail ")
        // })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    
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