/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Table, Grid, TablePagination, IconButton, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { setRouteCount, getRouteRequest } from "../../store/route/reducer";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { SET_LIST_SELECT_ROUTE, SET_SELECT_ROUTE, SET_UNSELECT_ROUTE } from "../../store/selected/action";
import { useSelector } from "react-redux";


export interface IRouteType {
    id: number;
    routeId: string;
    departureLocationName: string;
    startTime: string;
    endTime: string;
    vehicleType: string;//
    status: string;
    carrier: string;
    licenseplate: string;
}

// function createData(
//     id: number,
//     routeId: string,
//     departureLocationName: string,
//     startTime: string,
//     endTime: string,
//     vehicleType: string,
//     status: string,
//     carrier: string,
//     licenseplate: string
// ): IRouteType {
//     return {
//         id,
//         routeId,
//         departureLocationName,
//         startTime,
//         endTime,
//         vehicleType,
//         status,
//         carrier,
//         licenseplate,
//     };
// }

// const rows = [
//     createData(1, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
//     createData(2, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Chờ Duyệt", "Toàn Tín", "29C-888.88"),
//     createData(3, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Hủy", "Toàn Tín", "29C-888.88"),
//     createData(4, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
//     createData(5, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Chờ Duyệt", "Toàn Tín", "29C-888.88"),
//     createData(6, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Hủy", "Toàn Tín", "29C-888.88"),
//     createData(7, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
//     createData(8, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),

// ];

interface HeadCell {
    disablePadding: boolean;
    id: keyof IRouteType;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'routeId',
        numeric: true,
        disablePadding: false,
        label: 'Mã tuyến',
    },
    {
        id: 'departureLocationName',
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
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Trạng thái',
    },
    {
        id: 'carrier',
        numeric: true,
        disablePadding: false,
        label: 'Đơn vị',
    },
    {
        id: 'licenseplate',
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
    console.log("count: " + count);
    console.log("row per page: " + rowsPerPage);

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

const RouteTable = () => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const disPatch = useAppDispatch();
    const { routes } = useAppSelector(state => state.route)
    const listRoute = useAppSelector(store => store.select.listRoute)

    useEffect(() => {
        disPatch(getRouteRequest())
    }, [])

    useEffect(() => {
        if (listRoute.length === 0) {
            setSelected([]);
            disPatch(setRouteCount(0, 'null'));
        }
    }, [listRoute])

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = routes.map((n) => n.id);
            const listRouteId = routes.map((n) => n.routeId);
            disPatch({
                type: SET_LIST_SELECT_ROUTE,
                payload: listRouteId
            })
            setSelected(newSelected);
            disPatch(setRouteCount(newSelected.length, 'null'));
            return;
        } else {
            disPatch({
                type: SET_LIST_SELECT_ROUTE,
                payload: []
            })
        }
        setSelected([]);
        disPatch(setRouteCount(0, 'null'));
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number, routeId: string) => {
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

        const sl = Array.from(listRoute).indexOf(routeId);
        if (sl === -1) {
            console.log("SET ROUTE")
            const listr = listRoute.push(routeId);
            disPatch({
                type: SET_SELECT_ROUTE,
                payload: listRoute
            })
        } else {
            console.log("Remove")
            const lr = listRoute.filter((_value: any, index: number) => index !== sl)
            disPatch({
                type: SET_SELECT_ROUTE,
                payload: lr
            })
        }

        // const storee = useSelector(state => state.select.list)
        // console.log({storee})

        setSelected(newSelected);
        disPatch(setRouteCount(newSelected.length, routeId));
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - routes.length) : 0;

    // const visibleRows = React.useMemo(() => routes, []
    // );
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>,) => {
        // setRowsPerPage(+event.target.value);
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
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
                            rowCount={routes.length}
                        />
                        <TableBody>
                            {(rowsPerPage > 0
                                ? routes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : routes
                            ).map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id, row.routeId)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell align="center" padding="checkbox" sx={{ padding: '0' }}>
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="left" sx={{ padding: '0' }}>
                                            <p className={classes.routeId}>
                                                {row.routeId}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{ padding: '0' }}>
                                            <p className={classes.departureLocationName}>
                                                {row.departureLocationName}
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
                                            <p className={classes.departureLocationName}>
                                                {row.vehicleType}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{ padding: '0' }}>
                                            <p className={classes.departureLocationName}>
                                                {row.status}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{ padding: '0' }}>
                                            <p className={classes.departureLocationName}>
                                                {row.carrier}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{ padding: '0' }}>
                                            <p className={classes.Time}>{row.licenseplate}</p></TableCell>
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
            <Grid display={"flex"} justifyContent={"center"} item xs={12}>
                <TablePagination
                    rowsPerPageOptions={[8, 16, 30, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={routes.length}
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
            {/* <TablePagination
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onRowsPerPage={handleChangeRowsPerPage}
            /> */}
        </Box>
    )
}

export default RouteTable;

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
    departureLocationName: {
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