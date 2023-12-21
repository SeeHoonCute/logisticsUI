import { all, fork } from "redux-saga/effects";

import authSaga from "./auth/saga";
import routeSaga from "./route/saga";
import carrierSaga from "./carrier/saga";
import selectSaga from "./selected/saga";

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(routeSaga),
    fork(carrierSaga),
    fork(selectSaga),
  ]);
}