import { ARCHIVE_BUYER } from "../config/constants";

const initialState = {
    archiveBuyer: [],
    isLoading : false,
    error: false
}

export const archiveBuyer = (state = initialState, action) => {
    switch (action.type) {
        case `${ARCHIVE_BUYER}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${ARCHIVE_BUYER}_FULFILLED`:
            return {
                ...state,
                archiveBuyer: action.payload.data,
                isLoading: false
            }
        case `${ARCHIVE_BUYER}_REJECTED`:
            return {
                ...state,
                error: true,
                isLoading: false
            }
        default:
            return state
    }
}

