import axios from 'axios'
import { LOGIN, URL_API } from '../config/constants'

export const setLogin = data => {
    return {
        type: LOGIN,
        payload: axios({
            method: 'post',
            url: URL_API + 'api/login',
            data: data
        })
    }
}