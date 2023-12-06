/* eslint-disable no-console */
import { patient } from '~/apis/patient.js'

const getPatient_Record = ( id ) => {
  let res = {
    message: 'Get patient unsuccessed',
    status: 'Error'
  }

  // gọi API để lấy trả về res
  patient.map((pc) => {
    if ( pc.id == id) {
      res = {
        message: 'Get patient successed',
        status: 'OK',
        data: pc
      }
    }
  } )

  return res
}

const getAllPatient_Record = () => {
  let res = {
    message: 'Get all patient successed',
    status: 'OK',
    data: patient
  }

  console.log(patient)

  return res
}


const PatientControl = {
  getPatient_Record,
  getAllPatient_Record
}

export { PatientControl }