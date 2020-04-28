import { PROFILE } from "../config/constants";

const initialState = {
    profile: {},
    isLoading : false,
    error: false
}

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case `${PROFILE}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
            break;
        case `${PROFILE}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                profile: action.payload.data
            }
            break;
        case `${PROFILE}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                error: true,
                profile: action.payload
            }
            break;
        default:
            return state
            break;
    }
} 