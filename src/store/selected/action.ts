export const ROUTE_SELECT = "ROUTE_SELECT";
export const ROUTE_UNSELECT = "ROUTE_UNSELECT";
export const LIST_ROUTE_SELECT = "LIST_ROUTE_SELECT";
export const LIST_ROUTE_UNSELECT = "LIST_ROUTE_UNSELECT";
export const GET_LIST_ROUTE_SELECT = "GET_LIST_ROUTE_SELECT";
export const SET_SELECT_ROUTE = "SET_SELECT_ROUTE"
export const SET_UNSELECT_ROUTE = "SET_SELECT_ROUTE"
export const SET_LIST_SELECT_ROUTE = "SET_LIST_SELECT_ROUTE"
export const SET_LIST_UNSELECT_ROUTE = "SET_LIST_UNSELECT_ROUTE"



export const setRoute = (listRoute:[]) => {
    console.log("action set Route")
    console.log({listRoute})
    return {
        type: ROUTE_SELECT,
        payload: listRoute
    }
}
export const setUnSelectRoute = (routeId: string) => {
    return {
        type: ROUTE_UNSELECT,
        payload: routeId
    }
}

export const setListRoute = (listRouteId: string[]) => {
    return {
        type: LIST_ROUTE_SELECT,
        payload: listRouteId
    }
}

// export const setListRouteUnSelect = () => {
//     return {
//         type: LIST_ROUTE_UNSELECT
//     }
// }
