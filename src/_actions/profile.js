import { PROFILE, URL_API, TOKEN } from "../config/constants"
import Axios from "axios"

export const getProfile = () => {
    return {
        type: PROFILE,
        payload: Axios({
            method: 'GET',
            url: URL_API + 'api/user',
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        })
    }
}