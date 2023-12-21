import { all, call, put, takeLatest } from "redux-saga/effects";
import { BaseAction, getRouteError, getRouteSuccess, GET_ROUTE_REQUEST, GET_SUGGEST_SHIPPING_REQUEST, getSuggestShippingSuccess, getSuggestShippingError, suggestShippingPayloadError } from "./reducer";
import routeApi from "../../apis/route/routeApi";
import { IRouteType } from "../../components/Table/Table";

function* getRoutes(action: BaseAction) {
    try {
        const response: Array<IRouteType> = yield call(routeApi.getRoutes, action.payload);

        if (response) {
            yield put(getRouteSuccess(response));
        } else {
            yield put(getRouteError());
        }
    } catch (e: any) {
        console.log("getRouteError", e)
        yield put(getRouteError());
    }
}

function* getSuggestShippings(action: BaseAction) {
    try {
        const response: {code :number, data: Array<string>, message: string } = yield call(routeApi.getSuggestions, action.payload);
        if (response.code !== 0) {
            yield put(getSuggestShippingSuccess());
        } else {
            yield put(getSuggestShippingError(response as suggestShippingPayloadError));
        }
    } catch (e: any) {
        console.log("getSuggestShippingError", e)
        // yield put();
    }
}

function* routeSaga() {
    yield all([takeLatest(GET_ROUTE_REQUEST, getRoutes)]);
    yield all([takeLatest(GET_ROUTE_REQUEST, getRoutes)]);
    yield all([takeLatest(GET_SUGGEST_SHIPPING_REQUEST, getSuggestShippings)]);
}

export default routeSaga;