/* eslint-disable react-refresh/only-export-components */
import DashboardLayout from '~/layouts/DashboardLayout/DashboardLayout'

// Content Dashboard
import Home from '~/page/Dashboard/Content/Home/Home'
import Manage from '~/page/Dashboard/Content/Manage/Manage'
import appointment from '~/page/Dashboard/Content/Appointment/Appointment'
import Service from '~/page/Dashboard/Content/Service/Service'
import BookingList from '~/page/Dashboard/Content/BookingList/BookingList'
import Medicine from '~/page/Dashboard/Content/Medicine/Medicine'

import PeopleIcon from '@mui/icons-material/People'
import TimerIcon from '@mui/icons-material/Timer'
import HomeIcon from '@mui/icons-material/Home'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'


const DentistCategory = [
  {
    id: 'Trang chủ',
    role: 'dentist',
    children: [
      {
        id: 'Thông tin cá nhân',
        icon: <HomeIcon />,
        link: '/dashboard'
      },
      {
        id: 'Lịch làm việc',
        icon: <TimerIcon />,
        link: '/scheduler'
      }
    ]
  },
  {
    id: 'Quản lí bệnh nhân',
    role: 'dentist',
    children: [
      { id: 'Hồ sơ bệnh nhân', icon: <PeopleIcon />, link: '/patient_record/' },
      { id: 'Dịch vụ / tư vấn', icon: <SupportAgentIcon />, link: '/service/' }
    ]
  },
  {
    id: 'Quản lí cuộc hẹn',
    role: 'dentist',
    children: [
      { id: 'Lịch hẹn cá nhân', icon: <AddIcCallIcon />, link: '/appointment' }
    ]
  },
  {
    id: 'Quản lí thuốc',
    role: 'dentist',
    children: [
      { id: 'Thuốc', icon: <VaccinesIcon />, link: '/medicine' },
      { id: 'Lập đơn thuốc', icon: <VaccinesIcon />, link: '/medicine' }
    ]
  }
]

const DentistPath = [
  {
    // Trang Hoạt động chính
    path: '/your-teeth/dentist/dashboard/',
    content: [
      Home
    ],
    layout: DashboardLayout
  },
  {
    // Trang Hoạt động chính
    path: '/your-teeth/dentist/scheduler/',
    content: [
      Home
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lí khách hàng
    path: '/your-teeth/dentist/patient_record',
    content: [
      Manage
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lí lịch hẹn
    path: '/your-teeth/dentist/bookinglist',
    content: [
      BookingList
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/dentist/service',
    content: [
      Service
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/dentist/appointment',
    content: [
      appointment
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/dentist/medicine',
    content: [
      Medicine
    ],
    layout: DashboardLayout
  }
]

export const route = {
  DentistPath,
  DentistCategory
}
