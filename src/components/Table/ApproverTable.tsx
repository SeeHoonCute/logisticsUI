import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Table, Grid, Button, TablePagination } from "@mui/material";
import VehicleInformation from "../Modal/vehicleInformation";
import { MessageStatus } from "../Message/Message";
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export interface IRequestType {
    id: number;
    requestId: string;
    routeId: string;
    startLocation: string;
    startTime: string;
    endTime: string;
    vehicleType: string;
    vehicleNumber: string;
    status: string;
}

function createData(
    id: number,
    requestId: string,
    routeId: string,
    startLocation: string,
    startTime: string,
    endTime: string,
    vehicleType: string,
    vehicleNumber: string,
    status: string,
): IRequestType {
    return {
        id,
        requestId,
        routeId,
        startLocation,
        startTime,
        endTime,
        vehicleType,
        vehicleNumber,
        status,
    };
}

const rows = [
    createData(1, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(2, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(3, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(4, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(5, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(6, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(7, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(8, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(9, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(10, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(11, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(12, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(13, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(14, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(15, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(16, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(17, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(18, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(19, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
    createData(20, "#3427", "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "29C-888.88", "Duyệt"),
];

interface HeadCell {
    disablePadding: boolean;
    id: keyof IRequestType;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'requestId',
        numeric: true,
        disablePadding: false,
        label: 'Mã yêu cầu',
    },
    {
        id: 'startLocation',
        numeric: true,
        disablePadding: false,
        label: 'Kho xuất',
    },
    {
        id: 'startTime',
        numeric: true,
        disablePadding: false,
        label: 'Thời gian bắt đầu',
    },
    {
        id: 'endTime',
        numeric: true,
        disablePadding: false,
        label: 'Thời gian kết thúc',
    },
    {
        id: 'vehicleType',
        numeric: true,
        disablePadding: false,
        label: 'Loại xe',
    },
    {
        id: 'vehicleNumber',
        numeric: true,
        disablePadding: false,
        label: 'Biển số xe',
    },
];

interface EnhancedTableHeaderProps {
    numSelected: number;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableHeaderProps) {
    const classes = useStyles();
    const { onSelectAllClick, numSelected, rowCount } =
        props;

    return (
        <TableHead>
            <TableRow>
                <TableCell
                    sx={{ padding: '0' }}>
                    <div className={classes.firstHeaderWrapper}>
                        <Checkbox
                            sx={{
                                position: "relative",
                                bottom: "16px"
                            }}
                            color="primary"
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{ 'aria-label': 'select all desserts' }}
                        />
                        <p className={`${classes.header} ${classes.firstHeader}`}>Chọn hết</p>
                    </div>
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        sx={{ padding: '0px 0px 0px 10px' }}
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        <p className={classes.header}>
                            {headCell.label}
                        </p>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

const ApproverTable = () => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [openAccept, setOpenAccept] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const [requestStatus, setrequestStatus] = React.useState(MessageStatus.initial);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleOpenAccept = () => {
        setOpenAccept(true);
    }
    const handleCloseAccept = () => {
        setOpenAccept(false);
    }
    const handleSaveInformation = () => {
        setOpenAccept(false)
        if (true) {
            setrequestStatus(MessageStatus.success);
        }
        else {
            setrequestStatus(MessageStatus.error);
        }
    };
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;
    const visibleRows = React.useMemo(() => rows, []
    );
    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    return (
        <>
            {openAccept && <VehicleInformation onClick={handleSaveInformation} onClose={handleCloseAccept} />}
            <Box sx={{ width: '100%' }} className={classes.tableBox}>
                <Paper sx={{ width: '100%', mb: 2, boxShadow: 'none' }}>
                    <TableContainer className={classes.tableContainer}
                    >
                        <Table
                            sx={{ minWidth: 700 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                onSelectAllClick={handleSelectAllClick}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                                ).map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            key={row.id}
                                            sx={{ cursor: 'pointer' }}
                                            selected={isItemSelected}
                                        >
                                            <TableCell align="center" padding="checkbox" sx={{ padding: '0' }}>
                                                <Checkbox
                                                    onClick={(event) => handleClick(event, row.id)}
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    role="checkbox"
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell align="left" sx={{ padding: '0' }}>
                                                <p className={classes.routeId}>
                                                    {row.requestId}
                                                </p>
                                            </TableCell>
                                            <TableCell align="left" sx={{ padding: '0' }}>
                                                <p className={classes.warehouse}>
                                                    {row.startLocation}
                                                </p>
                                            </TableCell>
                                            <TableCell align="left" sx={{ padding: '0' }}>
                                                <p className={classes.Time}>
                                                    {row.startTime}
                                                </p>
                                            </TableCell>
                                            <TableCell align="left" sx={{ padding: '0' }}>
                                                <p className={classes.Time}>
                                                    {row.endTime}
                                                </p>
                                            </TableCell>
                                            <TableCell align="left" sx={{ padding: '0' }}>
                                                <p className={classes.warehouse}>
                                                    {row.vehicleType}
                                                </p>
                                            </TableCell>
                                            <TableCell align="left" sx={{ padding: '0' }}>
                                                <p className={classes.Time}>{row.vehicleNumber}</p>
                                            </TableCell>
                                            <TableCell align="left" sx={{ padding: '0' }}>
                                                <Button
                                                    onClick={handleOpenAccept}
                                                    variant="contained"
                                                    size="small"
                                                    sx={{ textTransform: 'unset', borderRadius: '20px' }}>
                                                    Xác nhận
                                                </Button>
                                            </TableCell>
                                            <TableCell align="left" sx={{ padding: '0' }}>
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    size="small"
                                                    sx={{ textTransform: 'unset', borderRadius: '20px' }}>
                                                    Hủy yêu cầu
                                                </Button>
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: 47 * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                {/* <TablePagination
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onRowsPerPage={handleChangeRowsPerPage}
            /> */}
                <Grid display={"flex"} justifyContent={"center"} item xs={12}>
                    {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
                    <TablePagination
                        rowsPerPageOptions={[8, 16, 30, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: {
                                'aria-label': 'Số dòng trên trang:',
                            },
                            native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                </Grid>
            </Box>
        </>
    )
}

export default ApproverTable;

const useStyles = makeStyles(() => ({
    tableBox: {
        marginTop: "20px",
        maxWidth: "97%",
    },
    tableContainer: {
        fontSize: '12px',
    },
    firstHeaderWrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100px"
    },
    header: {
        fontFamily: "Lexend ,sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "22px",
        color: "#5F5B66FF",

    },
    firstHeader: {
        position: "relative",
        right: "13px",
        fontWeight: 600,
        textWrap: "nowrap",

    },
    routeId: {
        fontFamily: "Roboto ,sans-serif", /* Body */
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: "22px",
        color: "#15ABFFFF",
    },
    warehouse: {
        fontFamily: "Roboto ,sans-serif", /* Body */
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "20px",
        color: "#6D31ED",
        background: "#F5F1FE",
        borderRadius: "14px",
        padding: "4px 6px",
        display: "inline-block",
        margin: "6px 0px",
    },
    Time: {
        fontFamily: "Roboto ,sans-serif", /* Body */
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "22px",
        color: "#1A191DFF",
    }
}));