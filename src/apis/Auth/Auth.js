/* eslint-disable no-console */
import { account } from '~/apis/account.js'

const login = ( username, password ) => {
  let res = {
    message: 'Login unsuccessed',
    status: 'Error'
  }

  // gọi API
  account.map((acc) => {
    if ( acc.username == username && acc.password == password ) {
      res = {
        message: 'Login successed',
        status: 'OK',
        data: acc
      }
    }
  })

  return res
}

const register = () => {

}

const auth = {
  login,
  register
}

export { auth }