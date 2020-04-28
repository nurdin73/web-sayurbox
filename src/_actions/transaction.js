import { TRANSACTION, URL_API, TOKEN } from "../config/constants"
import Axios from "axios"

export const getTransaction = () => {
  return {
    type: TRANSACTION,
    payload: Axios({
      method: 'GET',
      url: URL_API + 'api/orders',
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
  }
}