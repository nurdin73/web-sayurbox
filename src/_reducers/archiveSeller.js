import { ARCHIVE_SELLER } from "../config/constants";

const initialState = {
    archiveSeller: [],
    isLoading : false,
    error: false
}

export const archiveSeller = (state = initialState, action) => {
    switch (action.type) {
        case `${ARCHIVE_SELLER}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
            break;
        case `${ARCHIVE_SELLER}_FULFILLED`:
            return {
                ...state,
                archiveSeller: action.payload.data,
                isLoading: false
            }
            break;   
        case `${ARCHIVE_SELLER}_REJECTED`:
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

