import { LOGIN } from "../config/constants";

const initialState = {
    login: {},
    isLoading : false,
    error: false
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case `${LOGIN}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${LOGIN}_FULFILLED`:
            return {
                ...state,
                login: action.payload.data,
                isLoading: false
            }
        case `${LOGIN}_REJECTED`:
            return {
                ...state,
                error: true,
                isLoading: false
            }
        default:
            return state
    }
}

