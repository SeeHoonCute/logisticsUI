import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";


// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
//const store = createStore(rootReducer , applyMiddleware(sagaMiddleware, logger));

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga);
// Run the saga

export default store;