import { BaseAction } from "../route/reducer"
import { GET_LIST_ROUTE_SELECT, LIST_ROUTE_SELECT, ROUTE_SELECT, LIST_ROUTE_UNSELECT, ROUTE_UNSELECT } from "./action"


const initialState = {
    listRoute: [],
}
const selectReducer = (state = initialState, action: BaseAction) => {

    switch (action.type) {
        case LIST_ROUTE_SELECT:
            // console.log({listRoute: action.payload})
            return {
                listRoute: action.payload
                // listRoute: state.listRoute.concat(action.payload)
            }
        case ROUTE_SELECT:
            console.log({payload : action.payload})
            return {
                listRoute: action.payload
            }
        case LIST_ROUTE_UNSELECT:
            state.listRoute.concat(action.payload);
            return {
                listRoute: []
            }
        case ROUTE_UNSELECT:
            // state.listRoute.filter(value => value !== action.payload)
            return {
                listRoute: action.payload
            }
        default:
            return state
    }
}


export default selectReducer