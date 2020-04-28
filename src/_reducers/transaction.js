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
            break;
        case `${TRANSACTION}_FULFILLED`:
            return {
                ...state,
                transaction: action.payload.data,
                isLoading: false
            }
            break;   
        case `${TRANSACTION}_REJECTED`:
            return {
                ...state,
                error: true,
                isLoading: false
            }
            break; 
        default:
            return state
            break;
    }
}

