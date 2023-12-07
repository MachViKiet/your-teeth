/* eslint-disable react-refresh/only-export-components */
import DashboardLayout from '~/layouts/DashboardLayout/DashboardLayout'

// Content Dashboard
import Home from '~/page/Dashboard/Content/Home/Home'
import Manage from '~/page/Dashboard/Content/Manage/Manage'
import appointment from '~/page/Dashboard/Content/Appointment/Appointment'
import Service from '~/page/Dashboard/Content/Service/Service'
import BookingList from '~/page/Dashboard/Content/BookingList/BookingList'
import Medicine from '~/page/Dashboard/Content/Medicine/Medicine'
import Room from '~/page/Dashboard/Content/Room/Room'
import Scheduler from '../page/Dashboard/Content/Scheduler/Scheduler'

import PeopleIcon from '@mui/icons-material/People'
import TimerIcon from '@mui/icons-material/Timer'
import HomeIcon from '@mui/icons-material/Home'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AddCardIcon from '@mui/icons-material/AddCard'


const AdminCategory = [
  {
    id: 'Trang chủ',
    role: 'admin',
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
    role: 'admin',
    children: [
      { id: 'Hồ sơ bệnh nhân', icon: <PeopleIcon />, link: '/patient_record' },
      { id: 'Đặt lịch hẹn', icon: <CalendarMonthIcon />, link: '/bookinglist' },
      { id: 'Dịch vụ / tư vấn', icon: <SupportAgentIcon />, link: '/service' },
      { id: 'Phòng khám', icon: <MedicalInformationIcon />, link: '/room' }
    ]
  },
  {
    id: 'Quản lí cuộc hẹn',
    role: 'admin',
    children: [
      { id: 'Danh sách lịch hẹn', icon: <AddIcCallIcon />, link: '/appointment' }
    ]
  },
  {
    id: 'Quản lý hệ thống',
    role: 'admin',
    children: [
      { id: 'Nha sĩ', icon: <AssignmentIndIcon />, link: '/dentist_management' },
      { id: 'Nhân viên', icon: <AccountBoxIcon />, link: '/staff_management' },
      { id: 'Lịch làm việc', icon: <EditCalendarIcon />, link: '/scheduler' }
    ]
  },
  {
    id: 'Quản lí thuốc',
    role: 'admin',
    children: [
      { id: 'Thuốc', icon: <VaccinesIcon />, link: '/medicine' }
    ]
  },
  {
    id: 'Thống kê danh sách',
    role: 'admin',
    children: [
      { id: 'Kế hoạch điều trị', icon: <AccessibilityIcon />, link: '/patient_report' },
      { id: 'Thống kê lịch hẹn', icon: <TimerIcon />, link: '/appointment_report' }
    ]
  },
  {
    id: 'Quản lí hóa đơn',
    role: 'admin',
    children: [
      { id: 'Thanh toán', icon: <AddCardIcon />, link: '/debt_report' },
      { id: 'Doanh thu', icon: <AttachMoneyIcon />, link: '/income_report' }
    ]
  }
]

const AdminPath = [
  {
    // Trang Hoạt động chính
    path: '/your-teeth/admin/dashboard/',
    content: [
      Home
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lí khách hàng
    path: '/your-teeth/admin/patient_record',
    content: [
      Manage
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lí lịch hẹn
    path: '/your-teeth/admin/bookinglist',
    content: [
      BookingList
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/admin/service',
    content: [
      Service
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/admin/room',
    content: [
      Room
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/admin/dentist_management',
    content: [
      Service
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/admin/staff_management',
    content: [
      Service
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/admin/appointment',
    content: [
      appointment
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/admin/scheduler',
    content: [
      Scheduler
    ],
    layout: DashboardLayout
  },
  {
    // Trang quản lý dịch vụ
    path: '/your-teeth/admin/medicine',
    content: [
      Medicine
    ],
    layout: DashboardLayout
  }
]

export const route = {
  AdminPath,
  AdminCategory
}
