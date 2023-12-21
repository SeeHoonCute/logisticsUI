import { IRequestType } from "../../components/Table/ApproverTable";
import { BaseAction } from "../route/reducer";

//actionType
export const REQUEST_CARRIER_REQUEST = "REQUEST_CARRIER_REQUEST";
export const REQUEST_CARRIER_SUCCESS = "REQUEST_CARRIER_SUCCESS";
export const REQUEST_CARRIER_ERROR = "REQUEST_CARRIER_ERROR";

export const GET_REQUEST_CARRIER_REQUEST = "GET_REQUEST_CARRIER_REQUEST";
export const GET_REQUEST_CARRIER_SUCCESS = "GET_REQUEST_CARRIER_SUCCESS";
export const GET_REQUEST_CARRIER_ERROR = "GET_REQUEST_CARRIER_ERROR";

export const GET_CARRIERINFO_REQUEST = "GET_CARRIERINFO_REQUEST";
export const GET_CARRIERINFO_SUCCESS = "GET_CARRIERINFO_SUCCESS";
export const GET_CARRIERINFO_ERROR = "GET_CARRIERINFO_ERROR";

export const CHANGE_CARRIER_REQUEST = "CHANGE_CARRIER_REQUEST";
export const CHANGE_CARRIER_SUCCESS = "CHANGE_CARRIER_SUCCESS";
export const CHANGE_CARRIER_ERROR = "CHANGE_CARRIER_ERROR";

export const CREATE_CARRIER_REQUEST = "CREATE_CARRIER_REQUEST";
export const CREATE_CARRIER_SUCCESS = "CREATE_CARRIER_SUCCESS";
export const CREATE_CARRIER_ERROR = "CREATE_CARRIER_ERROR";


//action
export const requestCarrierRequest = (data?: any): BaseAction => {
    return {
        type: REQUEST_CARRIER_REQUEST,
        payload: data
    };
}

export const requestCarrierSuccess = (): BaseAction => {
    return {
        type: REQUEST_CARRIER_SUCCESS,
    };
}

export const requestCarrierError = (): BaseAction => {
    return {
        type: REQUEST_CARRIER_ERROR
    };
}

export const getRequestCarrierRequest = (filter?: any): BaseAction => {
    return {
        type: GET_REQUEST_CARRIER_REQUEST,
        payload: filter
    };
}

export const getRequestCarrierSuccess = (requests: IRequestType[]): BaseAction => {
    return {
        type: GET_REQUEST_CARRIER_SUCCESS,
        payload: requests
    };
}

export const getRequestCarrierError = (): BaseAction => {
    return {
        type: GET_REQUEST_CARRIER_ERROR
    };
}

///
export const changeCarrierRequest = (data?: any): BaseAction => {
    return {
        type: CHANGE_CARRIER_REQUEST,
        payload: data
    };
}

export const changeCarrierSuccess = (response: any): BaseAction => {
    return {
        type: CHANGE_CARRIER_SUCCESS,
        payload: response
    };
}

export const changeCarrierError = (): BaseAction => {
    return {
        type: CHANGE_CARRIER_ERROR
    };
}

///
///
export const createCarrierRequest = (data: string[]): BaseAction => {
    return {
        type: CREATE_CARRIER_REQUEST,
        payload: data
    };
}

export const createCarrierSuccess = (response: any): BaseAction => {
    return {
        type: CREATE_CARRIER_SUCCESS,
        payload: response
    };
}

export const createCarrierError = (): BaseAction => {
    return {
        type: CREATE_CARRIER_ERROR
    };
}

///
export interface ICarrierInfoType {
    shippingPartnerId: string;
    shippingPartnerName: string;
}

export const getCarrierInfoRequest = (): BaseAction => {
    return {
        type: GET_CARRIERINFO_REQUEST,
    };
}

export const getCarrierInfoSuccess = (carrierInfo: ICarrierInfoType[]): BaseAction => {
    return {
        type: GET_CARRIERINFO_SUCCESS,
        payload: carrierInfo
    };
}

export const getCarrierInfoError = (): BaseAction => {
    return {
        type: GET_CARRIERINFO_ERROR
    };
}

export interface ICarrierState {
    requests: IRequestType[];
    loading: boolean;
    carrierInfo: ICarrierInfoType[]
}

const initialState: ICarrierState = {
    loading: false,
    requests: [],
    carrierInfo: []
}

//reducer function
const reducer = (state = initialState, action: BaseAction) => {
    switch (action.type) {
        case GET_REQUEST_CARRIER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_REQUEST_CARRIER_SUCCESS:
            return {
                ...state,
                loading: false,
                requests: (action.payload as IRequestType[]).map((x, index) => ({
                    ...x,
                    id: index + 1,
                })),
            }
        case GET_REQUEST_CARRIER_ERROR:
            return {
                ...state,
                loading: false,
            }
        case REQUEST_CARRIER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REQUEST_CARRIER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case REQUEST_CARRIER_ERROR:
            return {
                ...state,
                loading: false,
            }
        case GET_CARRIERINFO_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CARRIERINFO_SUCCESS:
            return {
                ...state,
                loading: false,
                carrierInfo: action.payload as ICarrierInfoType[],
            }
        case GET_CARRIERINFO_ERROR:
            return {
                ...state,
                loading: false,
            }
        case CREATE_CARRIER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_CARRIER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case CREATE_CARRIER_ERROR:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}
export default reducer;