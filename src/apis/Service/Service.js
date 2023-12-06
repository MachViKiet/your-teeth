/* eslint-disable no-console */
import { service } from '~/apis/service.js'

const getService = ( id ) => {
  let res = {
    message: 'Get service unsuccessed',
    status: 'Error'
  }

  // gọi API để lấy trả về res
  service.map((pc) => {
    if ( pc.id == id) {
      res = {
        message: 'Get service successed',
        status: 'OK',
        data: pc
      }
    }
  } )

  return res
}

const getAllService = () => {
  let res = {
    message: 'Get all service successed',
    status: 'OK',
    data: service
  }

  console.log(service)

  return res
}


const ServiceControl = {
  getService,
  getAllService
}

export { ServiceControl }