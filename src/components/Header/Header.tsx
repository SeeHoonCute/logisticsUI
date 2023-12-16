import IconButton from '@mui/material/IconButton';
import { Box, makeStyles }  from "@material-ui/core";
import { Avatar, InputBase, Paper } from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import logoMWG from "../../assets/images/logoMWG.png";
import avatarMWG from "../../assets/images/avatar1.jpg";

const Header =()=>{
    const classes = useStyles();
    // const [showPassword, setShowPassword] = React.useState(false);

    // const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    //   event.preventDefault();
    // };
    return(
        <Box className={classes.container}>
            <Box className={classes.logoContainer}>
                <img className={classes.image} src={logoMWG} alt="logo MWG" />
            </Box>
            <Box>
                <Paper
                    className={classes.paperForm}
                    component="form"
                    sx={{ p: '1px 2px', display: 'flex', alignItems: 'center', borderRadius: '25px',height: 35}}
                    >
                    <InputBase
                    sx={{ ml: 3, flex: 1 }}
                    placeholder="Tìm kiếm"
                />
                    <IconButton type="button" sx={{ p: '5px 10px' }} aria-label="search">
                        <SearchIcon sx={{ color: '#6D31ED'}}/>
                    </IconButton> 
                </Paper>
               
            </Box>
            <Box className={classes.userContainer}>
                <IconButton>
                    <SettingsOutlinedIcon sx={{ fontSize: 20, color:'#96949A' }}/>
                </IconButton>
                <IconButton>
                    <NotificationsNoneOutlinedIcon sx={{ fontSize: 20, color:'#96949A' }}/>
                </IconButton>
                <Avatar alt="Travis Howard" src={avatarMWG} sx={{ width: 30, height: 30 }}/>
            </Box>
        </Box>
    );
};
export default Header;
const useStyles = makeStyles(()=>({
    container:{
        width:'100%',
        boxShadow: '0 1px 2px #E1DEE8',
        display: 'flex',
        alignItems: 'center',
        height: '60px',
    },
    logoContainer:{
        margin:'10px 0px 0px 10px',
    },
    image:{
        height:'35px',
    },
    paperForm:{
        marginLeft: '50rem',
    },
    userContainer:{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '5rem',
    }
}));