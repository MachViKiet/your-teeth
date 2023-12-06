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
import HomeIcon from '@mui/icons-material/Home'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import AddCardIcon from '@mui/icons-material/AddCard'


const StaffCategory = [
  {
    id: 'Trang chủ',
    role: 'Staff',
    children: [
      {
        id: 'Thông tin cá nhân',
        icon: <HomeIcon />,
        link: '/dashboard'
      }
    ]
  },
  {
    id: 'Quản lí bệnh nhân',
    role: 'Staff',
    children: [
      { id: 'Hồ sơ bệnh nhân', icon: <PeopleIcon />, link: '/patient_record/' },
      { id: 'Đặt lịch hẹn', icon: <CalendarMonthIcon />, link: '/bookinglist/' },
      { id: 'Dịch vụ / tư vấn', icon: <SupportAgentIcon />, link: '/service/' },
      { id: 'Phòng khám', icon: <MedicalInformationIcon />, link: '/room/' }
    ]
  },
  {
    id: 'Quản lí cuộc hẹn',
    role: 'Staff',
    children: [
      { id: 'Danh sách lịch hẹn', icon: <AddIcCallIcon />, link: '/appointment' }
    ]
  },
  {
    id: 'Quản lí hóa đơn',
    role: 'Staff',
    children: [
      { id: 'Thanh toán', icon: <AddCardIcon />, link: '/patient_report' }
    ]
  }
]

const StaffPath = [
  {
    // Trang Hoạt động chính
    path: '/your-teeth/Staff/',
    content: [

    ],
    layout: DashboardLayout
  },
  {
    // Trang Hoạt động chính
    path: '/your-teeth/Staff/dashboard/',
    content: [
      Home
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lí khách hàng
    path: '/your-teeth/Staff/patient_record',
    content: [
      Manage
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lí phòng
    path: '/your-teeth/Staff/room',
    content: [
      Manage
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lí thống kê
    path: '/your-teeth/Staff/patient_report',
    content: [
      Manage
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lí lịch hẹn
    path: '/your-teeth/Staff/bookinglist',
    content: [
      BookingList
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/Staff/service',
    content: [
      Service
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/Staff/appointment',
    content: [
      appointment
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/Staff/medicine',
    content: [
      Medicine
    ],
    layout: DashboardLayout
  }
]

export const route = {
  StaffPath,
  StaffCategory
}
