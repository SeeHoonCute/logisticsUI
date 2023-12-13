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
export const getRouteSuccess = (num : number):BaseAction =>{
    return {
        type: GET_ROUTE_SUCCESS, 
        payload:num
    };
}
export const getRouteError = ():BaseAction =>{
    return {
        type: GET_ROUTE_ERROR
    };
}
//
export interface IRoute {
    routeId : number;
    loading: boolean;
}

const initialState: IRoute = {
    routeId: 0,
    loading: false,
}
//reducer function
const reducer = (state: IRoute = initialState, action : BaseAction) => {
    switch(action.type){
        case GET_ROUTE_REQUEST:
            return {
                ...state,
                loading:true,
            };
        case GET_ROUTE_SUCCESS:
            return{
                ...state,
                loading:false,
                routeId: action.payload,
            }
        case GET_ROUTE_ERROR:
            return{
                ...state,
                loading:false,
            }
        default:
            return state;
    }
}
export default reducer;