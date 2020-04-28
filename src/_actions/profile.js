import { PROFILE, URL_API } from "../config/constants"
import Axios from "axios"

export const getProfile = () => {
    const token = localStorage.getItem('token') === undefined ? '' : localStorage.getItem('token')
    return {
        type: PROFILE,
        payload: Axios({
            method: 'GET',
            url: URL_API + 'api/user',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}