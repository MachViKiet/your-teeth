/* eslint-disable no-console */
import { room } from '~/apis/room.js'

const getRoom = ( id ) => {
  let res = {
    message: 'Get room unsuccessed',
    status: 'Error'
  }

  // gọi API để lấy trả về res
  room.map((pc) => {
    if ( pc.id == id) {
      res = {
        message: 'Get room successed',
        status: 'OK',
        data: pc
      }
    }
  } )

  return res
}

const getAllRoom = () => {
  let res = {
    message: 'Get all room successed',
    status: 'OK',
    data: room
  }

  console.log(room)

  return res
}


const RoomControl = {
  getRoom,
  getAllRoom
}

export { RoomControl }