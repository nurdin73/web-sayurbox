import { ARCHIVE_BUYER, URL_API } from "../config/constants"
import Axios from "axios"

export const getArchiveBuyer = () => {
  return {
    type: ARCHIVE_BUYER,
    payload: Axios({
      method: 'GET',
      url: URL_API + 'api/users/archived/buyer'
    })
  }
}