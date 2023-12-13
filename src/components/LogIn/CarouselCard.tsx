import React from "react";
import { Grid} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Image8 from "../../assets/images/Group130.png";
export const CarouselCard =()=>{
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <Grid>
            <div {...settings}>
                <div className={classes.layOut}>
                    <img className={classes.imgCarousel} src={Image8} alt="img 1" />
                </div>
            </div>
        </Grid>
    );
};
const useStyles = makeStyles(()=>({
    layOut:{
        display: 'flex',
        justifyContent: 'center',
        // width:"70%",
    },
    imgCarousel: {
        width:"70%",
    }
}))