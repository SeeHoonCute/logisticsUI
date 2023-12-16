import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Grid, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import { ClearIcon } from "@mui/x-date-pickers/icons";
import { Padding } from "@mui/icons-material";

interface TUEditHistory {
    id: number;
    suggestShipping: string;
    editerInfo: string;
    choiceShipping: string;
    time: string;
    reasons: string;
}

function createTUEditHistory(
    id: number,
    suggestShipping: string,
    editerInfo: string,
    choiceShipping: string,
    time: string,
    reasons: string
): TUEditHistory {
    return {
        id,
        suggestShipping,
        editerInfo,
        choiceShipping,
        time,
        reasons,
    }
};
const Data = [
    createTUEditHistory(1, 'GOGOX', 'Lưu Vũ Ninh - 039560****', 'Giao Hàng Nhanh', '2002-05-01 00:00:00', 'Không thích'),
];
interface IRouteModal {
    onClick: () => void;
}

const EditHistory = ({ onClick }: IRouteModal) => {
    const classes = useStyles();
    return (
        <>
            <Modal
                open={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid display={'flex'} justifyContent={'space-between'}>
                        <Grid>
                            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight={600}>
                                LỊCH SỬ CHỈNH SỬA ĐƠN VỊ VẬN CHUYỂN
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton onClick={onClick}>
                                <ClearIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead >
                                    <TableRow>
                                        <StyledTableCell >STT</StyledTableCell>
                                        <StyledTableCell align="left">Đơn vị gợi ý</StyledTableCell>
                                        <StyledTableCell align="left">Thông tin người chỉnh</StyledTableCell>
                                        <StyledTableCell align="left">Đơn vị được chọn lại</StyledTableCell>
                                        <StyledTableCell align="left">Thời gian chỉnh</StyledTableCell>
                                        <StyledTableCell align="left">Lý do</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Data.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="left" sx={{ padding: '4px 12px' }}>{row.suggestShipping}</TableCell>
                                            <TableCell align="left" sx={{ padding: '4px 12px' }}>{row.editerInfo}</TableCell>
                                            <TableCell align="left" sx={{ padding: '4px 12px' }}>{row.choiceShipping}</TableCell>
                                            <TableCell align="left" sx={{ padding: '4px 12px' }} >{row.time}</TableCell>
                                            <TableCell align="left" sx={{ padding: '4px 12px' }}>{row.reasons}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
};
export default EditHistory;
const useStyles = makeStyles(() => ({
    TableCell: {
        fontSize: '12px',
    }
}));
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 200,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F1F8FD',
        color: '#15ABFF',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
