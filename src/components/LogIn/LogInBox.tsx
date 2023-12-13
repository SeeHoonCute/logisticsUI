import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { BorderAllRounded } from "@mui/icons-material";

const LogInBox = () =>{
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return(
        <Box className={classes.logInBox}>
            <Box className={classes.content}>
                <p className={classes.title}>Chào mừng trở lại 👋</p>
                <p className={classes.description}>Đăng nhập tài khoản của bạn ngay nào!!!</p>
            </Box>
            <Box className={classes.inputBox}>
                <Box className={classes.contentBox}>
                    <TextField
                        fullWidth
                        className={classes.contentField}
                        label="username"
                        size="small"
                        color="warning">
                    </TextField>
                </Box>
                <Box className={classes.contentBox}>
                    <TextField
                        fullWidth
                        className={classes.contentField}
                        label="password"
                        size="small"
                        color="warning">
                    </TextField>
                </Box>
                <Box className={classes.textCheckBox}>
                    <FormControlLabel
                        sx={{fontSize: 16,  '& .MuiSvgIcon-root': { fontSize: 20, color:'#6D31ED'} }}
                        label="Ghi nhớ tài khoản"
                        control={
                            <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                            />
                        }
                        />
                    <Link href="#" 
                        sx={{ textDecoration: 'none', color:'#6D31ED', paddingLeft:'35px'}}
                        >Quên mật khẩu?</Link>
                </Box>
                <Box className={classes.textButton}>
                    <Button
                        variant="contained"
                        disableRipple
                        sx={{backgroundColor:'#6D31ED', marginTop: 5, color:'#FFFFFF', textTransform:'unset', width:'100%',}}
                        >Đăng nhập</Button>
                </Box>
                <Box className={classes.textNote}>
                    <p>Bạn chưa có tài khoản?
                        <Link href="#" 
                        sx={{ textDecoration: 'none', color:'#6D31ED'}}> Đăng ký ngay</Link></p>
                </Box>
            </Box>
        </Box>
    );
};

export default LogInBox;

const useStyles = makeStyles(()=>({
    logInBox: {
        width: '60%',
        // border: '1px solid #E1DEE8',
        boxShadow: '0 3px 4px #E1DEE8',
        margin:'70px 0px 0px 0px',
        borderRadius: '15px',
    },
    content: {
        margin: '40px',
    },
    title: {
        fontSize: '35px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    description:{
        color: 'gray',
        margin:'0px',
        paddingLeft: '10px',
    },
    contentBox: {
        width: '100%',
        marginTop: '20px',
    },
    contentField: {
        backgroundColor:'#F5F1FE',
        [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor:'#ffffff',
        },
        borderRadius: '5px',
        color: '#E1DEE8',
    },
    inputBox:{
        margin: '50px 65px 30px 50px',
    },
    textCheckBox: {
        color: '#6D31ED',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    textButton:{
        display: 'flex',
        justifyContent: 'center',
    },
    textNote:{
        marginTop: '50px',
        fontSize:'13px',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 500,
        color:'#39363E',
    }
}));
