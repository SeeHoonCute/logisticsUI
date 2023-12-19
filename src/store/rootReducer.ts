import { combineReducers } from "redux";
import routeReducer from './route/reducer'
import carrierReducer from './route/reducer'
import authReducer from './auth/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  carrier: carrierReducer
});

export default rootReducer;