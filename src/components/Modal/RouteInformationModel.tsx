import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Accordion, AccordionDetails, AccordionSummary, Grid, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface DetailRoute {
    id: number;
    detailRoute: string;
    local: string;
    startTime: string;
    endTime: string;
    typeOfCar: string;
}

function createDetailRoute(
    id: number,
    detailRoute: string,
    local: string,
    startTime: string,
    endTime: string,
    typeOfCar: string,
): DetailRoute {
    return {
        id,
        detailRoute,
        local,
        startTime,
        endTime,
        typeOfCar,
    }
}
interface DeliveryPoint {
    id: number;
    deliveryPointId: string;
    address: string;
    time: string;
}
function createDeliveryPoint(
    id: number,
    deliveryPointId: string,
    address: string,
    time: string,
): DeliveryPoint {
    return {
        id,
        deliveryPointId,
        address,
        time,
    }
}

interface CarRetailRequestList {
    id: number;
    carRetailId: string;
    inforSender: string;
    shipping: string;
    inforApprover: string;
    time: string;
    status: string;
}
function createCarRetailRequestList(
    id: number,
    carRetailId: string,
    inforSender: string,
    shipping: string,
    inforApprover: string,
    time: string,
    status: string,
): CarRetailRequestList {
    return {
        id,
        carRetailId,
        inforSender,
        shipping,
        inforApprover,
        time,
        status,
    }
}
const rows = [
    createDetailRoute(1, "#1234567", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00", "2002-05-01 00:00:00", "Xe tải - 5 tấn - lạnh - 3.3 x 1.6 x 1.6 m"),
];
const Data = [
    createDeliveryPoint(1, "#45893485", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00"),
    createDeliveryPoint(2, "#45893485", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00"),
    // createDeliveryPoint(3, "#45893485", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00"),
    // createDeliveryPoint(4, "#45893485", "169 Đ. 154, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh", "2002-05-01 00:00:00"),
]
const MockData = [
    createCarRetailRequestList(1, "#45893485", "Lưu Vũ Ninh - 039560****", "Giao Hàng Nhanh", "Lưu Vũ Ninh - 039560****", "2002-05-01 00:00:00", "Duyệt"),
]
interface IRouteModal {
    onClick: () => void;
}

const RouteInformationModal = ({ onClick }: IRouteModal) => {
    const classes = useStyles();
    // const apiRef = useGridApiRef();
    // const [coordinates, setCoordinates] = React.useState({
    //     rowIndex: 0,
    //     colIndex: 0,
    //   });
    // React.useEffect(() => {
    // apiRef.current.scoll(coordinates);
    // });
    return (
        <Modal
            open={true}
            //onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid className={classes.editBox}>
                    <Grid className={classes.iconStyle}>
                        <Grid>
                            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight={600}>
                                THÔNG TIN CHI TIẾT TUYẾN
                            </Typography>
                        </Grid>
                        <Grid>
                            <IconButton onClick={onClick}>
                                <ClearIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid display={"flex"} justifyContent={"space-between"} p={"0px 20px"}>
                        <Grid>
                            <Typography>Mã tuyến: </Typography>
                            <Typography>Điểm xuất phát:  </Typography>
                            <Typography>Thời gian xuất phát: </Typography>
                            <Typography>Thời gian kết thúc: </Typography>
                            <Typography>Loại xe: </Typography>
                        </Grid>
                        {
                            rows.map((row) => (
                                <Grid key={row.id}>
                                    <Typography color={'#15ABFF'} fontWeight={'bolder'}>{row.detailRoute}</Typography>
                                    <Typography color={'#6D31ED'}>{row.local}</Typography>
                                    <Typography color={'#37750C'}>{row.startTime}</Typography>
                                    <Typography color={'#37750C'}>{row.endTime}</Typography>
                                    <Typography color={'#F9623E'}>{row.typeOfCar}</Typography>
                                </Grid>
                            ))
                        }

                    </Grid>
                    <Grid>
                        <Accordion sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontWeight: 'bold', color: '#6D31ED' }}>Danh sách các điểm giao hàng</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer>
                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>STT</TableCell>
                                                <TableCell align="left">Mã thông tin giao nhận hàng</TableCell>
                                                <TableCell align="left">Địa chỉ giao nhận hàng</TableCell>
                                                <TableCell align="left">Thời gian đến</TableCell>
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
                                                    <TableCell align="center" sx={{ fontWeight: 'bold', color: '#15ABFF' }}>{row.deliveryPointId}</TableCell>
                                                    <TableCell align="right">{row.address}</TableCell>
                                                    <TableCell align="right">{row.time}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ boxShadow: 'none' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontWeight: 'bold', color: '#6D31ED' }}>Danh sách yêu cầu xe</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer>
                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>STT</TableCell>
                                                <TableCell align="left">Mã yêu cầu</TableCell>
                                                <TableCell align="left">Thông tin người gửi</TableCell>
                                                <TableCell align="left">Đơn vị vận chuyển</TableCell>
                                                <TableCell align="left">Thông tin người duyệt</TableCell>
                                                <TableCell align="left">Ngày duyệt</TableCell>
                                                <TableCell align="left">Trạng thái</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {MockData.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.id}
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontWeight: 'bold', color: '#15ABFF' }}>{row.carRetailId}</TableCell>
                                                    <TableCell align="right">{row.inforSender}</TableCell>
                                                    <TableCell align="right">{row.shipping}</TableCell>
                                                    <TableCell align="right">{row.inforApprover}</TableCell>
                                                    <TableCell align="right">{row.time}</TableCell>
                                                    <TableCell align="right">{row.status}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
                {/* <DataGridPro
                    apiRef={apiRef}
                /> */}
            </Box>
        </Modal>
    );
};
export default RouteInformationModal;
const useStyles = makeStyles(() => ({
    editBox: {
        margin: '15px',
    },
    iconStyle: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

