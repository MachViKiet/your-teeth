/* eslint-disable no-console */
import { account } from '~/apis/account.js'

const getAccount = ( id ) => {
  let res = {
    message: 'Get account unsuccessed',
    status: 'Error'
  }

  // gọi API để lấy trả về res
  account.map((acc) => {
    if ( acc.id == id) {
      res = {
        message: 'Get account successed',
        status: 'OK',
        data: acc
      }
    }
  } )

  return res
}


const accountControl = {
  getAccount
}

export { accountControl }