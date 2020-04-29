import { PROFILE, URL_API } from "../config/constants"
import Axios from "axios"

export const getProfile = () => {
    const token = localStorage.getItem('token').length > 0 ? localStorage.getItem('token') : 'token undefined'
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