import { PRODUCT } from "../config/constants";

const initialState = {
    product: {},
    isLoading : false,
    error: false
}

export const product = (state = initialState, action) => {
    switch (action.type) {
        case `${PRODUCT}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${PRODUCT}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                profile: action.payload.data
            }
        case `${PRODUCT}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                error: true,
                profile: action.payload
            }
        default:
            return state
    }
} 