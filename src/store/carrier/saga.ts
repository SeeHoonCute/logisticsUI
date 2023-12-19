import { all, call, put, takeLatest } from "redux-saga/effects";
import carrierApi from "../../apis/carrier/carrierApi";
import { BaseAction } from "../route/reducer";
import { REQUEST_CARRIER_REQUEST, requestCarrierError, requestCarrierSuccess } from "./reducer";
import { IRouteType } from "../../components/Table/Table";

function* requestCarrier(action: BaseAction) {
    try {
        const response: IRouteType = yield call(carrierApi.requestCarrier, action.payload);

        if (response) {
            yield put(requestCarrierSuccess());
        } else {
            yield put(requestCarrierError());
        }
    } catch (e: any) {
        yield put(requestCarrierError());
    }
}

function* carrierSaga() {
    yield all([takeLatest(REQUEST_CARRIER_REQUEST, requestCarrier)]);
}

export default carrierSaga;