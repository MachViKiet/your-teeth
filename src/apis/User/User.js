/* eslint-disable no-console */
import { user } from '~/apis/user.js'

const getUser = ( id ) => {
  let res = {
    message: 'Get user unsuccessed',
    status: 'Error'
  }

  // gọi API để lấy trả về res
  user.map((us) => {
    if ( us.id == id) {
      res = {
        message: 'Get user successed',
        status: 'OK',
        data: us
      }
    }
  } )

  return res
}


const userControl = {
  getUser
}

export { userControl }