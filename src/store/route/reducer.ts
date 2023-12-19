import { IRouteType } from "../../components/Table/Table";

//actionType
export const GET_ROUTE_REQUEST = "GET_ROUTE_REQUEST";
export const GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS";
export const GET_ROUTE_ERROR = "GET_ROUTE_ERROR";
export const SET_ROUTE_COUNT = "SET_ROUTE_COUNT";

export interface BaseAction {
    type: string;
    payload?: any;
}


//action
export const getRouteRequest = (filter?: any): BaseAction => {
    return {
        type: GET_ROUTE_REQUEST,
        payload: filter
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
// routeId: Array<string>
export const setRouteCount = (count: number, routeId: string): BaseAction => {
    return {
        type: SET_ROUTE_COUNT,
        payload: {
            count: count,
            routeId: routeId,

        },
    };
}
//
export interface IRouteState {
    routes: Array<IRouteType>;
    loading: boolean;
    routeCount: number;
    routeIdSelected: string;
}

const initialState: IRouteState = {
    routes: [],
    loading: false,
    routeCount: 0,
    routeIdSelected: '',
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
                routes: (action.payload as Array<IRouteType>).map((x, index) => ({
                    ...x,
                    id: index + 1,
                })),
            }
        case GET_ROUTE_ERROR:
            return {
                ...state,
                loading: false,
            }
        case SET_ROUTE_COUNT:
            return {
                ...state,
                routeCount: action.payload.count,
                routeIdSelected: action.payload.count === 1 ? action.payload.routeId : '',
            }
        default:
            return state;
    }
}
export default reducer;