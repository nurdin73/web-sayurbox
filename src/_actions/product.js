import { PRODUCT, URL_API, TOKEN } from "../config/constants"
import Axios from "axios"

export const getProduct = ()=>{
    return {
        type: PRODUCT,
        payload: Axios({
            method: 'GET',
            url: URL_API + 'api/product',
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        })
    }
}