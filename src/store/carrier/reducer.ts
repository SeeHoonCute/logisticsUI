import { BaseAction } from "../route/reducer";

//actionType
export const REQUEST_CARRIER_REQUEST = "REQUEST_CARRIER_REQUEST";
export const REQUEST_CARRIER_SUCCESS = "REQUEST_CARRIER_SUCCESS";
export const REQUEST_CARRIER_ERROR = "REQUEST_CARRIER_ERROR";


//action
export const requestCarrierRequest = (filter?: any): BaseAction => {
    return {
        type: REQUEST_CARRIER_REQUEST,
        payload: filter
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

export interface ICarrierState {
    loading: boolean;
}

const initialState: ICarrierState = {
    loading: false,
}

//reducer function
const reducer = (state = initialState, action: BaseAction) => {
    switch (action.type) {
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
        default:
            return state;
    }
}
export default reducer;