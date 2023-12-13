import React from "react";
import { makeStyles } from "@material-ui/core";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";

const FormDate = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const classes = useStyles();
  return (
    <div className={classes.formDatePicker}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className={classes.datePicker}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </div>
  );
};

export default FormDate;

const useStyles = makeStyles(() => ({
  formDatePicker: {
    flexBasis: "65",
    maxWidth: "65%",
    marginBottom: "4px",
  },
  datePicker: {
    "& div":{
      height: "32px",
      fontFamily: "Manrope ,sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "20px",
    }
  }
}));