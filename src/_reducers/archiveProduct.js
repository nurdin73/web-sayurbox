import { ARCHIVE_PRODUCT } from "../config/constants";

const initialState = {
    archiveProduct: [],
    isLoading : false,
    error: false
}

export const archiveProduct = (state = initialState, action) => {
    switch (action.type) {
        case `${ARCHIVE_PRODUCT}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
            break;
        case `${ARCHIVE_PRODUCT}_FULFILLED`:
            return {
                ...state,
                archiveProduct: action.payload.data,
                isLoading: false
            }
            break;   
        case `${ARCHIVE_PRODUCT}_REJECTED`:
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

