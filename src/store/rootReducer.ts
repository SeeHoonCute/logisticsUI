import { combineReducers } from "redux";
import routeReducer from './route/reducer'
import carrierReducer from './carrier/reducer'
import authReducer from './auth/reducer'
import selectReducer from './selected/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  carrier: carrierReducer,
  select: selectReducer,
});

export default rootReducer;