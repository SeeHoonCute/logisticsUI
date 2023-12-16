import React from "react";
import { makeStyles } from "@material-ui/core";
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Table, TablePagination} from "@mui/material";
import { relative } from "path";

export interface IRouteType {
    id: number;
    routeId: string;
    warehouse: string;
    startTime: string;
    endTime: string;
    vehicleType: string;
    vehicleStatus: string;
    shipment: string;
    vehicleNumber: string;
}

function createData(
    id: number,
    routeId: string,
    warehouse: string,
    startTime: string,
    endTime: string,
    vehicleType: string,
    vehicleStatus: string,
    shipment: string,
    vehicleNumber: string
): IRouteType {
    return {
        id,
        routeId,
        warehouse,
        startTime,
        endTime,
        vehicleType,
        vehicleStatus,
        shipment,
        vehicleNumber,
    };
}

const rows = [
    createData(1, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(2, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Chờ Duyệt", "Toàn Tín", "29C-888.88"),
    createData(3, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Hủy", "Toàn Tín", "29C-888.88"),
    createData(4, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(5, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Chờ Duyệt", "Toàn Tín", "29C-888.88"),
    createData(6, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Hủy", "Toàn Tín", "29C-888.88"),
    createData(7, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),
    createData(8, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m", "Duyệt", "Toàn Tín", "29C-888.88"),

];

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
        id: 'warehouse',
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
        id: 'vehicleStatus',
        numeric: true,
        disablePadding: false,
        label: 'Trạng thái',
    },
    {
        id: 'shipment',
        numeric: true,
        disablePadding: false,
        label: 'Đơn vị',
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
                sx={{padding:'0'}}>
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
                        sx={{padding:'0px 0px 0px 10px'}}
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


const RouteTable = () => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

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

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(() => rows, []
    );
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        <Box sx={{ width: '100%'}} className={classes.tableBox}>
            <Paper sx={{ width: '100%', mb: 2, boxShadow:'none' }}>
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
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell align="center" padding="checkbox" sx={{padding:'0'}}>
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="left" sx={{padding:'0'}}>
                                            <p className={classes.routeId}>
                                                {row.routeId}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{padding:'0'}}>
                                            <p className={classes.warehouse}>
                                                {row.warehouse}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{padding:'0'}}>
                                            <p className={classes.Time}>
                                                {row.startTime}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{padding:'0'}}>
                                            <p className={classes.Time}>
                                                {row.endTime}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{padding:'0'}}>
                                            <p className={classes.warehouse}>
                                                {row.vehicleType}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{padding:'0'}}>
                                            <p className={classes.warehouse}>
                                                {row.vehicleStatus}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{padding:'0'}}>
                                            <p className={classes.warehouse}>
                                                {row.shipment}
                                            </p>
                                        </TableCell>
                                        <TableCell align="left" sx={{padding:'0'}}>
                                            <p className={classes.Time}>{row.vehicleNumber}</p></TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
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