import { error } from "console";
import { IRouteType } from "../../components/Table/Table";
import { IMessageType, MessageStatus } from "../../components/Message/Message";

//actionType
export const GET_ROUTE_REQUEST = "GET_ROUTE_REQUEST";
export const GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS";
export const GET_ROUTE_ERROR = "GET_ROUTE_ERROR";
export const SET_ROUTE_COUNT = "SET_ROUTE_COUNT";
export const GET_SUGGEST_SHIPPING_REQUEST = "GET_SUGGEST_SHIPPING_REQUEST";
export const GET_SUGGEST_SHIPPING_SUCCESS = "GET_SUGGEST_SHIPPING_SUCCESS";
export const GET_SUGGEST_SHIPPING_ERROR = "GET_SUGGEST_SHIPPING_ERROR";

export const RESET_MESSAGE_STATUS = "RESET_MESSAGE_STATUS";
export const SET_MESSAGE_STATUS = "SET_MESSAGE_STATUS";
export const SET_STATUS_FILTER = "SET_STATUS_FILTER";

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
//type suggest shipping
export interface suggestShippingPayload {
    routeId: Array<string>;
}

export interface suggestShippingPayloadError {
    message: string;
    code: number;
    data: Array<string>;
}

export const getSuggestShippingRequest = (payload: suggestShippingPayload): BaseAction => {
    return {
        type: GET_SUGGEST_SHIPPING_REQUEST,
        payload,
    }
}

export const getSuggestShippingSuccess = (): BaseAction => {
    return {
        type: GET_SUGGEST_SHIPPING_SUCCESS,
    }
}

export const getSuggestShippingError = (payload: suggestShippingPayloadError): BaseAction => {
    return {
        type: GET_SUGGEST_SHIPPING_ERROR,
        payload,
    }
}
export const setMessageStatus = (messageStatus: MessageStatus, errorMessage: string = ''): BaseAction => {
    return {
        type: SET_MESSAGE_STATUS,
        payload: {
            messageStatus,
            errorMessage,
        }
    }
}
export const resetMessageStatus = (): BaseAction => {
    return {
        type: RESET_MESSAGE_STATUS,
    }
}

export const setStatusFilter = (statusId: string): BaseAction => {
    return {
        type: SET_STATUS_FILTER,
        payload: statusId,
    }
}

export interface IRouteState {
    routes: Array<IRouteType>;
    loading: boolean;
    routeCount: number;
    routeIdSelected: string;
    messageStatus: MessageStatus;
    errorMessage: string;
    routeError: Array<string>;
    statusFilter: string;
}

const initialState: IRouteState = {
    routes: [],
    loading: false,
    routeCount: 0,
    routeIdSelected: '',
    messageStatus: MessageStatus.initial,
    errorMessage: '',
    routeError: [],
    statusFilter: ''
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
        case GET_SUGGEST_SHIPPING_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_SUGGEST_SHIPPING_SUCCESS:
            return {
                ...state,
                messageStatus: MessageStatus.success,
                loading: false,
            }
        case GET_SUGGEST_SHIPPING_ERROR:
            let errorstring: string = '';
            (action.payload.data as Array<string>)?.map((errorId) => {
                errorstring = errorstring + "Id: " + errorId + ", "
            })
            errorstring = errorstring.slice(0, -2);
            return {
                ...state,
                loading: false,
                messageStatus: MessageStatus.error,
                errorMessage: action.payload.message + ": " + errorstring,
                routeError: action.payload.data as Array<string>,
            }
        case RESET_MESSAGE_STATUS:
            return {
                ...state,
                messageStatus: MessageStatus.initial,
                errorMessage: '',
                routeError: [],
            }
        case SET_MESSAGE_STATUS:
            return {
                ...state,
                messageStatus: action.payload.messageStatus,
                errorMessage: action.payload.errorMessage,
            }
        case SET_STATUS_FILTER:
            return {
                ...state,
                statusFilter: action.payload as string,
            }
        default:
            return state;
    }
}
export default reducer;