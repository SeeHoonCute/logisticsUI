import { all, call, put, takeLatest } from "redux-saga/effects";
import carrierApi from "../../apis/carrier/carrierApi";
import { BaseAction, setMessageStatus } from "../route/reducer";
import { CHANGE_CARRIER_REQUEST, CREATE_CARRIER_REQUEST, GET_CARRIERINFO_REQUEST, GET_REQUEST_CARRIER_REQUEST, ICarrierInfoType, REQUEST_CARRIER_REQUEST, changeCarrierError, changeCarrierSuccess, createCarrierError, createCarrierSuccess, getCarrierInfoError, getCarrierInfoSuccess, getRequestCarrierError, getRequestCarrierSuccess, requestCarrierError, requestCarrierSuccess } from "./reducer";
import { IRequestType } from "../../components/Table/ApproverTable";
import { MessageStatus } from "../../components/Message/Message";



function* getRequestCarrier(action: BaseAction) {
    try {
        const response: IRequestType[] = yield call(carrierApi.getRequestCarrier, action.payload);

        if (response) {
            yield put(getRequestCarrierSuccess(response));
        } else {
            yield put(getRequestCarrierError());
        }
    } catch (e: any) {
        yield put(getRequestCarrierError());
    }
}

function* requestCarrier(action: BaseAction) {
    try {
        const response: IRequestType[] = yield call(carrierApi.requestCarrier, action.payload);

        if (response) {
            yield put(requestCarrierSuccess());
        } else {
            yield put(requestCarrierError());
        }
    } catch (e: any) {
        yield put(requestCarrierError());
    }
}

function* getCarrierInfo(action: BaseAction) {
    try {
        const response: ICarrierInfoType[] = yield call(carrierApi.getCarrierInfo);

        if (response) {
            yield put(getCarrierInfoSuccess(response));
        } else {
            yield put(getCarrierInfoError());
        }
    } catch (e: any) {
        yield put(getCarrierInfoError());
    }
}

function* changeCarrierInfo(action: BaseAction) {
    try {
        const response: {
            code: number,
            message: string,
        } = yield call(carrierApi.changeCarrier, action.payload);

        if (response.code === 1) {
            yield put(setMessageStatus(MessageStatus.success, response.message));
            yield put(changeCarrierSuccess(response));
        } else {
            yield put(setMessageStatus(MessageStatus.error, response.message));
            yield put(changeCarrierError());
        }
    } catch (e: any) {
        yield put(setMessageStatus(MessageStatus.error, "loi"));
        yield put(changeCarrierError());
    }
}

function* createCarrier(action: BaseAction) {
    try {
        const response: {
            code: number,
            message: string,
        } = yield call(carrierApi.createRequestCarrier, action.payload as string[]);

        if (response.code === 1) {
            yield put(setMessageStatus(MessageStatus.success, response.message));
            yield put(createCarrierSuccess(response));
        } else {
            yield put(setMessageStatus(MessageStatus.error, response.message));
            yield put(createCarrierError());
        }
    } catch (e: any) {
        yield put(setMessageStatus(MessageStatus.error, "loi"));
        yield put(createCarrierError());
    }
}

function* carrierSaga() {
    yield all([takeLatest(GET_REQUEST_CARRIER_REQUEST, getRequestCarrier)]);
    yield all([takeLatest(REQUEST_CARRIER_REQUEST, requestCarrier)]);
    yield all([takeLatest(GET_CARRIERINFO_REQUEST, getCarrierInfo)]);
    yield all([takeLatest(CHANGE_CARRIER_REQUEST, changeCarrierInfo)]);
    yield all([takeLatest(CREATE_CARRIER_REQUEST, createCarrier)]);
}

export default carrierSaga;