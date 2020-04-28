import { ARCHIVE_PRODUCT, URL_API, TOKEN } from "../config/constants"
import Axios from "axios"

export const getArchiveProduct = () => {
  return {
    type: ARCHIVE_PRODUCT,
    payload: Axios({
      method: 'GET',
      url: URL_API + 'api/products/archived',
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
  }
}