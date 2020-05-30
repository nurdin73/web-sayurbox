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
        case `${PROFILE}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                profile: action.payload.data
            }
        case `${PROFILE}_REJECTED`:
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