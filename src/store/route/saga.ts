import { all, call, put, takeLatest } from "redux-saga/effects";
import { BaseAction, getRouteError, getRouteSuccess, GET_ROUTE_REQUEST } from "./reducer";
import routeApi from "../../apis/route/routeApi";
import { IRouteType } from "../../components/Table/Table";

function* getRoutes(action: BaseAction) {
    try {
        const response: Array<IRouteType> = yield call(routeApi.getRoutes);

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

function* routeSaga() {
    yield all([takeLatest(GET_ROUTE_REQUEST, getRoutes)]);
}

export default routeSaga;