import axios from 'axios'
import { LOGIN } from '../config/constants'

export const setLogin = data => {
    const URL_API = 'https://sayur-box.herokuapp.com/'
    return {
        type: LOGIN,
        payload: axios({
            method: 'post',
            url: URL_API + 'api/login',
            data: data
        })
    }
}