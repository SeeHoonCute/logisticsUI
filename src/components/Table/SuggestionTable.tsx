import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from "@mui/material";
interface DataRoute {
    id: number;
    routeId: string;
    wasehouseLocation: string;
    timeStarts: string;
    timeEnds: string;
    typeOfVehicle: string;
    status: string;
    shipping: string;
    licensePlates: string;
}
function createData(
    id: number,
    routeId: string,
    wasehouseLocation: string,
    timeStarts: string,
    timeEnds: string,
    typeOfVehicle: string,
    status: string,
    shipping: string,
    licensePlates: string,
): DataRoute {
    return {
        id,
        routeId,
        wasehouseLocation,
        timeStarts,
        timeEnds,
        typeOfVehicle,
        status,
        shipping,
        licensePlates,
    }
}
const data = [
    createData(1, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(2, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(3, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(4, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(5, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(6, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(7, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(8, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(9, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(10, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(11, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F5F1FE',
        color: '#6D31ED',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const SuggestionTable = () => {

    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <Checkbox></Checkbox>
                            <StyledTableCell align="left">Mã tuyến</StyledTableCell>
                            <StyledTableCell align="left">Kho xuất</StyledTableCell>
                            <StyledTableCell align="left">Thời gian bắt đầu</StyledTableCell>
                            <StyledTableCell align="left">Thời gian kết thúc</StyledTableCell>
                            <StyledTableCell align="left">Loại xe</StyledTableCell>
                            <StyledTableCell align="left">Trạng thái</StyledTableCell>
                            <StyledTableCell align="left">Đơn vị vận chuyển</StyledTableCell>
                            <StyledTableCell align="left">Biển số xe</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((data) => (
                            <StyledTableRow key={data.id}>
                                <StyledTableCell component="th" scope="row">
                                    {data.routeId}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {data.routeId}
                                </StyledTableCell>
                                <StyledTableCell align="left">{data.wasehouseLocation}</StyledTableCell>
                                <StyledTableCell align="left">{data.timeStarts}</StyledTableCell>
                                <StyledTableCell align="left">{data.timeEnds}</StyledTableCell>
                                <StyledTableCell align="left">{data.typeOfVehicle}</StyledTableCell>
                                <StyledTableCell align="left">{data.status}</StyledTableCell>
                                <StyledTableCell align="left">{data.shipping}</StyledTableCell>
                                <StyledTableCell align="left">{data.licensePlates}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};
export default SuggestionTable;
const useStyles = makeStyles(() => ({

}))
