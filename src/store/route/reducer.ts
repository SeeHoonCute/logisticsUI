import { IRouteType } from "../../components/Table/Table";

//actionType
export const GET_ROUTE_REQUEST = "GET_ROUTE_REQUEST";
export const GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS";
export const GET_ROUTE_ERROR = "GET_ROUTE_ERROR";

export interface BaseAction {
    type: string;
    payload?: any;
}

//action
export const getRouteRequest = (): BaseAction => {
    return {
        type: GET_ROUTE_REQUEST
    };
}
export const getRouteSuccess = (route: Array<IRouteType>): BaseAction => {
    return {
        type: GET_ROUTE_SUCCESS,
        payload: route
    };
}
export const getRouteError = (): BaseAction => {
    return {
        type: GET_ROUTE_ERROR
    };
}
//
export interface IRouteState {
    routes: Array<IRouteType>;
    loading: boolean;
}

const initialState: IRouteState = {
    routes: new Array<IRouteType>,
    loading: false,
}

//reducer function
const reducer = (state = initialState, action: BaseAction) => {
    switch (action.type) {
        case GET_ROUTE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ROUTE_SUCCESS:
            return {
                ...state,
                loading: false,
                routes: action.payload,
            }
        case GET_ROUTE_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}
export default reducer;