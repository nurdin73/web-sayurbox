import { TRANSACTION } from "../config/constants";

const initialState = {
    transaction: [],
    isLoading : false,
    error: false
}

export const transaction = (state = initialState, action) => {
    switch (action.type) {
        case `${TRANSACTION}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${TRANSACTION}_FULFILLED`:
            return {
                ...state,
                transaction: action.payload.data,
                isLoading: false
            }
        case `${TRANSACTION}_REJECTED`:
            return {
                ...state,
                error: true,
                isLoading: false
            }
        default:
            return state
    }
}

