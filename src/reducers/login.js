import { SHOW_CITY_WEATHER, SHOW_MODEL } from "../action";
import { USER_DETAILS } from "../action";
import { SET_CITY } from "../action";
//import { SHOW_CITY_WEATHER } from "../action";
const initialState = {

    show: false,
    city: "",
    fetchApi: [],
    record: {
        name: "",
        password: "",
    }
}
const login = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODEL:
            return {
                ...state,
                show: action.payload,
            }
        case USER_DETAILS:
            return {
                ...state,
                record: action.payload,
            }
        case SET_CITY:
            return {
                ...state,
                city: action.payload,
            }
        case SHOW_CITY_WEATHER:
            return {
                ...state,
                fetchApi: action.payload,
            }
        default:
            return state;

    }
}
export default login;