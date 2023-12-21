import { put, all, takeLatest } from "redux-saga/effects"
import { SET_LIST_SELECT_ROUTE, SET_LIST_UNSELECT_ROUTE, SET_SELECT_ROUTE, SET_UNSELECT_ROUTE, setListRoute, setRoute, setUnSelectRoute } from "./action"
import { BaseAction } from "../route/reducer"


function* setSelectRoute(action : BaseAction) {
    yield put(setRoute(action.payload))
    // yield put()
}

function* setListRouteSelect(action : BaseAction) {
    yield put(setListRoute(action.payload))
}
function* setListRouteUnSelect(action : BaseAction) {
    yield put(setListRoute([]))
}
function* setRouteUnSelect(action : BaseAction) {
    yield put(setUnSelectRoute(action.payload))
}




export default function* rootSaga() {
    yield all([takeLatest(SET_SELECT_ROUTE, setSelectRoute)])
    yield all([takeLatest(SET_UNSELECT_ROUTE, setRouteUnSelect)])
    yield all([takeLatest(SET_LIST_SELECT_ROUTE, setListRouteSelect)])
    yield all([takeLatest(SET_LIST_UNSELECT_ROUTE, setListRouteUnSelect)])
}