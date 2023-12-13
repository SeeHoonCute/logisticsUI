import { combineReducers } from "redux";
import routeReducer from './route/reducer'
import authReducer from './auth/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
});

export default rootReducer;