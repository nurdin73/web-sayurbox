import { ARCHIVE_SELLER, URL_API } from "../config/constants"
import Axios from "axios"

export const getArchiveSeller = () => {
  return {
    type: ARCHIVE_SELLER,
    payload: Axios({
      method: 'GET',
      url: URL_API + 'api/users/archived/seller'
    })
  }
}